-- Lo llama la función "licencia" (con service_role) cada vez que el software activa o valida una key
create or replace function public.chequear_licencia(
  p_key text, p_producto text, p_equipo text, p_equipo_nombre text,
  p_accion text default 'validar', p_minutos int default 0)
returns jsonb language plpgsql security definer set search_path = public as $$
declare
  v record;
  v_act public.activaciones;
  v_activos int;
  v_min int := least(greatest(coalesce(p_minutos,0),0),60);
begin
  -- bloquea la licencia para que dos equipos a la vez no pasen el límite
  perform 1 from public.licencias where key = upper(trim(p_key)) for update;
  select * into v from public.licencias_vista where key = upper(trim(p_key));
  if not found then
    return jsonb_build_object('valida', false, 'motivo', 'no_existe', 'mensaje', 'La key no existe.');
  end if;
  if p_producto is not null and v.producto_slug <> p_producto then
    return jsonb_build_object('valida', false, 'motivo', 'otro_producto', 'mensaje', 'La key es de otro software.');
  end if;

  if p_accion = 'liberar' then
    update public.activaciones set activa = false where licencia_id = v.id and equipo_id = p_equipo;
    return jsonb_build_object('valida', false, 'motivo', 'liberada', 'mensaje', 'El equipo quedó liberado.');
  end if;

  if v.estado_real not in ('activa','en_gracia') then
    return jsonb_build_object('valida', false, 'motivo', v.estado_real, 'vence', v.vence,
      'mensaje', case v.estado_real
        when 'vencida' then 'La licencia venció. Renovala para seguir usando el software.'
        when 'pausada' then 'La licencia está pausada.'
        when 'revocada' then 'La licencia fue dada de baja.'
        else 'La licencia no está activa.' end);
  end if;

  select * into v_act from public.activaciones where licencia_id = v.id and equipo_id = p_equipo;
  if not found or not v_act.activa then
    select count(*) into v_activos from public.activaciones where licencia_id = v.id and activa;
    if v_activos >= v.max_equipos then
      return jsonb_build_object('valida', false, 'motivo', 'limite_equipos', 'max_equipos', v.max_equipos,
        'mensaje', 'La key ya se usa en el máximo de equipos permitidos.');
    end if;
    insert into public.activaciones(licencia_id, equipo_id, equipo_nombre)
    values (v.id, p_equipo, left(p_equipo_nombre, 120))
    on conflict (licencia_id, equipo_id) do update set activa = true, ultima = now(),
      equipo_nombre = coalesce(excluded.equipo_nombre, public.activaciones.equipo_nombre);
  else
    update public.activaciones set ultima = now(),
      equipo_nombre = coalesce(left(p_equipo_nombre,120), equipo_nombre)
    where id = v_act.id;
  end if;

  update public.licencias set ultimo_uso = now(), primer_uso = coalesce(primer_uso, now()) where id = v.id;
  insert into public.uso_diario(licencia_id, dia, chequeos, minutos)
  values (v.id, (now() at time zone 'America/Argentina/Buenos_Aires')::date, 1, v_min)
  on conflict (licencia_id, dia) do update
    set chequeos = public.uso_diario.chequeos + 1,
        minutos = least(1440, public.uso_diario.minutos + v_min);

  return jsonb_build_object(
    'valida', true,
    'estado', v.estado_real,
    'producto', v.producto_slug,
    'plan', v.plan_nombre,
    'vence', v.vence,
    'dias_restantes', v.dias_restantes,
    'dias_usados', greatest(0, floor(extract(epoch from (now() - coalesce(v.primer_uso, now()))) / 86400))::int,
    'max_equipos', v.max_equipos,
    'mensaje', case when v.estado_real = 'en_gracia'
      then 'La licencia venció. Tenés unos días de gracia para renovarla.'
      else 'Licencia activa.' end);
end;
$$;
revoke execute on function public.chequear_licencia(text,text,text,text,text,int) from public, anon, authenticated;
grant execute on function public.chequear_licencia(text,text,text,text,text,int) to service_role;
