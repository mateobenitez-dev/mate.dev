(()=>{function Le(t){let e=t[0],r=t[1],i=t[2];return Math.sqrt(e*e+r*r+i*i)}function He(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function St(t,e,r,i){return t[0]=e,t[1]=r,t[2]=i,t}function tt(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t}function rt(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t}function Ft(t,e,r){return t[0]=e[0]*r[0],t[1]=e[1]*r[1],t[2]=e[2]*r[2],t}function Tt(t,e,r){return t[0]=e[0]/r[0],t[1]=e[1]/r[1],t[2]=e[2]/r[2],t}function Ye(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t}function Rt(t,e){let r=e[0]-t[0],i=e[1]-t[1],n=e[2]-t[2];return Math.sqrt(r*r+i*i+n*n)}function _t(t,e){let r=e[0]-t[0],i=e[1]-t[1],n=e[2]-t[2];return r*r+i*i+n*n}function it(t){let e=t[0],r=t[1],i=t[2];return e*e+r*r+i*i}function Ct(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t}function Lt(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t}function $e(t,e){let r=e[0],i=e[1],n=e[2],s=r*r+i*i+n*n;return s>0&&(s=1/Math.sqrt(s)),t[0]=e[0]*s,t[1]=e[1]*s,t[2]=e[2]*s,t}function nt(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function st(t,e,r){let i=e[0],n=e[1],s=e[2],a=r[0],l=r[1],o=r[2];return t[0]=n*o-s*l,t[1]=s*a-i*o,t[2]=i*l-n*a,t}function Pt(t,e,r,i){let n=e[0],s=e[1],a=e[2];return t[0]=n+i*(r[0]-n),t[1]=s+i*(r[1]-s),t[2]=a+i*(r[2]-a),t}function zt(t,e,r,i,n){let s=Math.exp(-i*n),a=e[0],l=e[1],o=e[2];return t[0]=r[0]+(a-r[0])*s,t[1]=r[1]+(l-r[1])*s,t[2]=r[2]+(o-r[2])*s,t}function It(t,e,r){let i=e[0],n=e[1],s=e[2],a=r[3]*i+r[7]*n+r[11]*s+r[15];return a=a||1,t[0]=(r[0]*i+r[4]*n+r[8]*s+r[12])/a,t[1]=(r[1]*i+r[5]*n+r[9]*s+r[13])/a,t[2]=(r[2]*i+r[6]*n+r[10]*s+r[14])/a,t}function kt(t,e,r){let i=e[0],n=e[1],s=e[2],a=r[3]*i+r[7]*n+r[11]*s+r[15];return a=a||1,t[0]=(r[0]*i+r[4]*n+r[8]*s)/a,t[1]=(r[1]*i+r[5]*n+r[9]*s)/a,t[2]=(r[2]*i+r[6]*n+r[10]*s)/a,t}function Ot(t,e,r){let i=e[0],n=e[1],s=e[2];return t[0]=i*r[0]+n*r[3]+s*r[6],t[1]=i*r[1]+n*r[4]+s*r[7],t[2]=i*r[2]+n*r[5]+s*r[8],t}function Ut(t,e,r){let i=e[0],n=e[1],s=e[2],a=r[0],l=r[1],o=r[2],h=r[3],c=l*s-o*n,p=o*i-a*s,d=a*n-l*i,f=l*d-o*p,u=o*c-a*d,g=a*p-l*c,m=h*2;return c*=m,p*=m,d*=m,f*=2,u*=2,g*=2,t[0]=i+c+f,t[1]=n+p+u,t[2]=s+d+g,t}var Dt=function(){let t=[0,0,0],e=[0,0,0];return function(r,i){He(t,r),He(e,i),$e(t,t),$e(e,e);let n=nt(t,e);return n>1?0:n<-1?Math.PI:Math.acos(n)}}();function Bt(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}var ve=class t extends Array{constructor(e=0,r=e,i=e){return super(e,r,i),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this[0]=e}set y(e){this[1]=e}set z(e){this[2]=e}set(e,r=e,i=e){return e.length?this.copy(e):(St(this,e,r,i),this)}copy(e){return He(this,e),this}add(e,r){return r?tt(this,e,r):tt(this,this,e),this}sub(e,r){return r?rt(this,e,r):rt(this,this,e),this}multiply(e){return e.length?Ft(this,this,e):Ye(this,this,e),this}divide(e){return e.length?Tt(this,this,e):Ye(this,this,1/e),this}inverse(e=this){return Lt(this,e),this}len(){return Le(this)}distance(e){return e?Rt(this,e):Le(this)}squaredLen(){return it(this)}squaredDistance(e){return e?_t(this,e):it(this)}negate(e=this){return Ct(this,e),this}cross(e,r){return r?st(this,e,r):st(this,this,e),this}scale(e){return Ye(this,this,e),this}normalize(){return $e(this,this),this}dot(e){return nt(this,e)}equals(e){return Bt(this,e)}applyMatrix3(e){return Ot(this,this,e),this}applyMatrix4(e){return It(this,this,e),this}scaleRotateMatrix4(e){return kt(this,this,e),this}applyQuaternion(e){return Ut(this,this,e),this}angle(e){return Dt(this,e)}lerp(e,r){return Pt(this,this,e,r),this}smoothLerp(e,r,i){return zt(this,this,e,r,i),this}clone(){return new t(this[0],this[1],this[2])}fromArray(e,r=0){return this[0]=e[r],this[1]=e[r+1],this[2]=e[r+2],this}toArray(e=[],r=0){return e[r]=this[0],e[r+1]=this[1],e[r+2]=this[2],e}transformDirection(e){let r=this[0],i=this[1],n=this[2];return this[0]=e[0]*r+e[4]*i+e[8]*n,this[1]=e[1]*r+e[5]*i+e[9]*n,this[2]=e[2]*r+e[6]*i+e[10]*n,this.normalize()}};var Vt=new ve,pi=1,mi=1,Wt=!1,Qe=class{constructor(e,r={}){e.canvas||console.error("gl not passed as first argument to Geometry"),this.gl=e,this.attributes=r,this.id=pi++,this.VAOs={},this.drawRange={start:0,count:0},this.instancedCount=0,this.gl.renderer.bindVertexArray(null),this.gl.renderer.currentGeometry=null,this.glState=this.gl.renderer.state;for(let i in r)this.addAttribute(i,r[i])}addAttribute(e,r){if(this.attributes[e]=r,r.id=mi++,r.size=r.size||1,r.type=r.type||(r.data.constructor===Float32Array?this.gl.FLOAT:r.data.constructor===Uint16Array?this.gl.UNSIGNED_SHORT:this.gl.UNSIGNED_INT),r.target=e==="index"?this.gl.ELEMENT_ARRAY_BUFFER:this.gl.ARRAY_BUFFER,r.normalized=r.normalized||!1,r.stride=r.stride||0,r.offset=r.offset||0,r.count=r.count||(r.stride?r.data.byteLength/r.stride:r.data.length/r.size),r.divisor=r.instanced||0,r.needsUpdate=!1,r.usage=r.usage||this.gl.STATIC_DRAW,r.buffer||this.updateAttribute(r),r.divisor){if(this.isInstanced=!0,this.instancedCount&&this.instancedCount!==r.count*r.divisor)return console.warn("geometry has multiple instanced buffers of different length"),this.instancedCount=Math.min(this.instancedCount,r.count*r.divisor);this.instancedCount=r.count*r.divisor}else e==="index"?this.drawRange.count=r.count:this.attributes.index||(this.drawRange.count=Math.max(this.drawRange.count,r.count))}updateAttribute(e){let r=!e.buffer;r&&(e.buffer=this.gl.createBuffer()),this.glState.boundBuffer!==e.buffer&&(this.gl.bindBuffer(e.target,e.buffer),this.glState.boundBuffer=e.buffer),r?this.gl.bufferData(e.target,e.data,e.usage):this.gl.bufferSubData(e.target,0,e.data),e.needsUpdate=!1}setIndex(e){this.addAttribute("index",e)}setDrawRange(e,r){this.drawRange.start=e,this.drawRange.count=r}setInstancedCount(e){this.instancedCount=e}createVAO(e){this.VAOs[e.attributeOrder]=this.gl.renderer.createVertexArray(),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.bindAttributes(e)}bindAttributes(e){e.attributeLocations.forEach((r,{name:i,type:n})=>{if(!this.attributes[i]){console.warn(`active attribute ${i} not being supplied`);return}let s=this.attributes[i];this.gl.bindBuffer(s.target,s.buffer),this.glState.boundBuffer=s.buffer;let a=1;n===35674&&(a=2),n===35675&&(a=3),n===35676&&(a=4);let l=s.size/a,o=a===1?0:a*a*4,h=a===1?0:a*4;for(let c=0;c<a;c++)this.gl.vertexAttribPointer(r+c,l,s.type,s.normalized,s.stride+o,s.offset+c*h),this.gl.enableVertexAttribArray(r+c),this.gl.renderer.vertexAttribDivisor(r+c,s.divisor)}),this.attributes.index&&this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.attributes.index.buffer)}draw({program:e,mode:r=this.gl.TRIANGLES}){this.gl.renderer.currentGeometry!==`${this.id}_${e.attributeOrder}`&&(this.VAOs[e.attributeOrder]||this.createVAO(e),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.gl.renderer.currentGeometry=`${this.id}_${e.attributeOrder}`),e.attributeLocations.forEach((n,{name:s})=>{let a=this.attributes[s];a.needsUpdate&&this.updateAttribute(a)});let i=2;this.attributes.index?.type===this.gl.UNSIGNED_INT&&(i=4),this.isInstanced?this.attributes.index?this.gl.renderer.drawElementsInstanced(r,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*i,this.instancedCount):this.gl.renderer.drawArraysInstanced(r,this.drawRange.start,this.drawRange.count,this.instancedCount):this.attributes.index?this.gl.drawElements(r,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*i):this.gl.drawArrays(r,this.drawRange.start,this.drawRange.count)}getPosition(){let e=this.attributes.position;if(e.data)return e;if(!Wt)return console.warn("No position buffer data found to compute bounds"),Wt=!0}computeBoundingBox(e){e||(e=this.getPosition());let r=e.data,i=e.size;this.bounds||(this.bounds={min:new ve,max:new ve,center:new ve,scale:new ve,radius:1/0});let n=this.bounds.min,s=this.bounds.max,a=this.bounds.center,l=this.bounds.scale;n.set(1/0),s.set(-1/0);for(let o=0,h=r.length;o<h;o+=i){let c=r[o],p=r[o+1],d=r[o+2];n.x=Math.min(c,n.x),n.y=Math.min(p,n.y),n.z=Math.min(d,n.z),s.x=Math.max(c,s.x),s.y=Math.max(p,s.y),s.z=Math.max(d,s.z)}l.sub(s,n),a.add(n,s).divide(2)}computeBoundingSphere(e){e||(e=this.getPosition());let r=e.data,i=e.size;this.bounds||this.computeBoundingBox(e);let n=0;for(let s=0,a=r.length;s<a;s+=i)Vt.fromArray(r,s),n=Math.max(n,this.bounds.center.squaredDistance(Vt));this.bounds.radius=Math.sqrt(n)}remove(){for(let e in this.VAOs)this.gl.renderer.deleteVertexArray(this.VAOs[e]),delete this.VAOs[e];for(let e in this.attributes)this.gl.deleteBuffer(this.attributes[e].buffer),delete this.attributes[e]}};var gi=1,qt={},Ue=class{constructor(e,{vertex:r,fragment:i,uniforms:n={},transparent:s=!1,cullFace:a=e.BACK,frontFace:l=e.CCW,depthTest:o=!0,depthWrite:h=!0,depthFunc:c=e.LEQUAL}={}){e.canvas||console.error("gl not passed as first argument to Program"),this.gl=e,this.uniforms=n,this.id=gi++,r||console.warn("vertex shader not supplied"),i||console.warn("fragment shader not supplied"),this.transparent=s,this.cullFace=a,this.frontFace=l,this.depthTest=o,this.depthWrite=h,this.depthFunc=c,this.blendFunc={},this.blendEquation={},this.stencilFunc={},this.stencilOp={},this.transparent&&!this.blendFunc.src&&(this.gl.renderer.premultipliedAlpha?this.setBlendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA):this.setBlendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)),this.vertexShader=e.createShader(e.VERTEX_SHADER),this.fragmentShader=e.createShader(e.FRAGMENT_SHADER),this.program=e.createProgram(),e.attachShader(this.program,this.vertexShader),e.attachShader(this.program,this.fragmentShader),this.setShaders({vertex:r,fragment:i})}setShaders({vertex:e,fragment:r}){if(e&&(this.gl.shaderSource(this.vertexShader,e),this.gl.compileShader(this.vertexShader),this.gl.getShaderInfoLog(this.vertexShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${Gt(e)}`)),r&&(this.gl.shaderSource(this.fragmentShader,r),this.gl.compileShader(this.fragmentShader),this.gl.getShaderInfoLog(this.fragmentShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${Gt(r)}`)),this.gl.linkProgram(this.program),!this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS))return console.warn(this.gl.getProgramInfoLog(this.program));this.uniformLocations=new Map;let i=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_UNIFORMS);for(let a=0;a<i;a++){let l=this.gl.getActiveUniform(this.program,a);this.uniformLocations.set(l,this.gl.getUniformLocation(this.program,l.name));let o=l.name.match(/(\w+)/g);l.uniformName=o[0],l.nameComponents=o.slice(1)}this.attributeLocations=new Map;let n=[],s=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){let l=this.gl.getActiveAttrib(this.program,a),o=this.gl.getAttribLocation(this.program,l.name);o!==-1&&(n[o]=l.name,this.attributeLocations.set(l,o))}this.attributeOrder=n.join("")}setBlendFunc(e,r,i,n){this.blendFunc.src=e,this.blendFunc.dst=r,this.blendFunc.srcAlpha=i,this.blendFunc.dstAlpha=n,e&&(this.transparent=!0)}setBlendEquation(e,r){this.blendEquation.modeRGB=e,this.blendEquation.modeAlpha=r}setStencilFunc(e,r,i){this.stencilRef=r,this.stencilFunc.func=e,this.stencilFunc.ref=r,this.stencilFunc.mask=i}setStencilOp(e,r,i){this.stencilOp.stencilFail=e,this.stencilOp.depthFail=r,this.stencilOp.depthPass=i}applyState(){this.depthTest?this.gl.renderer.enable(this.gl.DEPTH_TEST):this.gl.renderer.disable(this.gl.DEPTH_TEST),this.cullFace?this.gl.renderer.enable(this.gl.CULL_FACE):this.gl.renderer.disable(this.gl.CULL_FACE),this.blendFunc.src?this.gl.renderer.enable(this.gl.BLEND):this.gl.renderer.disable(this.gl.BLEND),this.cullFace&&this.gl.renderer.setCullFace(this.cullFace),this.gl.renderer.setFrontFace(this.frontFace),this.gl.renderer.setDepthMask(this.depthWrite),this.gl.renderer.setDepthFunc(this.depthFunc),this.blendFunc.src&&this.gl.renderer.setBlendFunc(this.blendFunc.src,this.blendFunc.dst,this.blendFunc.srcAlpha,this.blendFunc.dstAlpha),this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB,this.blendEquation.modeAlpha),this.stencilFunc.func||this.stencilOp.stencilFail?this.gl.renderer.enable(this.gl.STENCIL_TEST):this.gl.renderer.disable(this.gl.STENCIL_TEST),this.gl.renderer.setStencilFunc(this.stencilFunc.func,this.stencilFunc.ref,this.stencilFunc.mask),this.gl.renderer.setStencilOp(this.stencilOp.stencilFail,this.stencilOp.depthFail,this.stencilOp.depthPass)}use({flipFaces:e=!1}={}){let r=-1;this.gl.renderer.state.currentProgram===this.id||(this.gl.useProgram(this.program),this.gl.renderer.state.currentProgram=this.id),this.uniformLocations.forEach((n,s)=>{let a=this.uniforms[s.uniformName];for(let l of s.nameComponents){if(!a)break;if(l in a)a=a[l];else{if(Array.isArray(a.value))break;a=void 0;break}}if(!a)return Xt(`Active uniform ${s.name} has not been supplied`);if(a&&a.value===void 0)return Xt(`${s.name} uniform is missing a value parameter`);if(a.value.texture)return r=r+1,a.value.update(r),at(this.gl,s.type,n,r);if(a.value.length&&a.value[0].texture){let l=[];return a.value.forEach(o=>{r=r+1,o.update(r),l.push(r)}),at(this.gl,s.type,n,l)}at(this.gl,s.type,n,a.value)}),this.applyState(),e&&this.gl.renderer.setFrontFace(this.frontFace===this.gl.CCW?this.gl.CW:this.gl.CCW)}remove(){this.gl.deleteProgram(this.program)}};function at(t,e,r,i){i=i.length?xi(i):i;let n=t.renderer.state.uniformLocations.get(r);if(i.length)if(n===void 0||n.length!==i.length)t.renderer.state.uniformLocations.set(r,i.slice(0));else{if(vi(n,i))return;n.set?n.set(i):yi(n,i),t.renderer.state.uniformLocations.set(r,n)}else{if(n===i)return;t.renderer.state.uniformLocations.set(r,i)}switch(e){case 5126:return i.length?t.uniform1fv(r,i):t.uniform1f(r,i);case 35664:return t.uniform2fv(r,i);case 35665:return t.uniform3fv(r,i);case 35666:return t.uniform4fv(r,i);case 35670:case 5124:case 35678:case 36306:case 35680:case 36289:return i.length?t.uniform1iv(r,i):t.uniform1i(r,i);case 35671:case 35667:return t.uniform2iv(r,i);case 35672:case 35668:return t.uniform3iv(r,i);case 35673:case 35669:return t.uniform4iv(r,i);case 35674:return t.uniformMatrix2fv(r,!1,i);case 35675:return t.uniformMatrix3fv(r,!1,i);case 35676:return t.uniformMatrix4fv(r,!1,i)}}function Gt(t){let e=t.split(`
`);for(let r=0;r<e.length;r++)e[r]=r+1+": "+e[r];return e.join(`
`)}function xi(t){let e=t.length,r=t[0].length;if(r===void 0)return t;let i=e*r,n=qt[i];n||(qt[i]=n=new Float32Array(i));for(let s=0;s<e;s++)n.set(t[s],s*r);return n}function vi(t,e){if(t.length!==e.length)return!1;for(let r=0,i=t.length;r<i;r++)if(t[r]!==e[r])return!1;return!0}function yi(t,e){for(let r=0,i=t.length;r<i;r++)t[r]=e[r]}var ot=0;function Xt(t){ot>100||(console.warn(t),ot++,ot>100&&console.warn("More than 100 program warnings - stopping logs."))}var lt=new ve,wi=1,De=class{constructor({canvas:e=document.createElement("canvas"),width:r=300,height:i=150,dpr:n=1,alpha:s=!1,depth:a=!0,stencil:l=!1,antialias:o=!1,premultipliedAlpha:h=!1,preserveDrawingBuffer:c=!1,powerPreference:p="default",autoClear:d=!0,webgl:f=2}={}){let u={alpha:s,depth:a,stencil:l,antialias:o,premultipliedAlpha:h,preserveDrawingBuffer:c,powerPreference:p};this.dpr=n,this.alpha=s,this.color=!0,this.depth=a,this.stencil=l,this.premultipliedAlpha=h,this.autoClear=d,this.id=wi++,f===2&&(this.gl=e.getContext("webgl2",u)),this.isWebgl2=!!this.gl,this.gl||(this.gl=e.getContext("webgl",u)),this.gl||console.error("unable to create webgl context"),this.gl.renderer=this,this.setSize(r,i),this.state={},this.state.blendFunc={src:this.gl.ONE,dst:this.gl.ZERO},this.state.blendEquation={modeRGB:this.gl.FUNC_ADD},this.state.cullFace=!1,this.state.frontFace=this.gl.CCW,this.state.depthMask=!0,this.state.depthFunc=this.gl.LEQUAL,this.state.premultiplyAlpha=!1,this.state.flipY=!1,this.state.unpackAlignment=4,this.state.framebuffer=null,this.state.viewport={x:0,y:0,width:null,height:null},this.state.textureUnits=[],this.state.activeTextureUnit=0,this.state.boundBuffer=null,this.state.uniformLocations=new Map,this.state.currentProgram=null,this.extensions={},this.isWebgl2?(this.getExtension("EXT_color_buffer_float"),this.getExtension("OES_texture_float_linear")):(this.getExtension("OES_texture_float"),this.getExtension("OES_texture_float_linear"),this.getExtension("OES_texture_half_float"),this.getExtension("OES_texture_half_float_linear"),this.getExtension("OES_element_index_uint"),this.getExtension("OES_standard_derivatives"),this.getExtension("EXT_sRGB"),this.getExtension("WEBGL_depth_texture"),this.getExtension("WEBGL_draw_buffers")),this.getExtension("WEBGL_compressed_texture_astc"),this.getExtension("EXT_texture_compression_bptc"),this.getExtension("WEBGL_compressed_texture_s3tc"),this.getExtension("WEBGL_compressed_texture_etc1"),this.getExtension("WEBGL_compressed_texture_pvrtc"),this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),this.vertexAttribDivisor=this.getExtension("ANGLE_instanced_arrays","vertexAttribDivisor","vertexAttribDivisorANGLE"),this.drawArraysInstanced=this.getExtension("ANGLE_instanced_arrays","drawArraysInstanced","drawArraysInstancedANGLE"),this.drawElementsInstanced=this.getExtension("ANGLE_instanced_arrays","drawElementsInstanced","drawElementsInstancedANGLE"),this.createVertexArray=this.getExtension("OES_vertex_array_object","createVertexArray","createVertexArrayOES"),this.bindVertexArray=this.getExtension("OES_vertex_array_object","bindVertexArray","bindVertexArrayOES"),this.deleteVertexArray=this.getExtension("OES_vertex_array_object","deleteVertexArray","deleteVertexArrayOES"),this.drawBuffers=this.getExtension("WEBGL_draw_buffers","drawBuffers","drawBuffersWEBGL"),this.parameters={},this.parameters.maxTextureUnits=this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),this.parameters.maxAnisotropy=this.getExtension("EXT_texture_filter_anisotropic")?this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}setSize(e,r){this.width=e,this.height=r,this.gl.canvas.width=e*this.dpr,this.gl.canvas.height=r*this.dpr,this.gl.canvas.style&&Object.assign(this.gl.canvas.style,{width:e+"px",height:r+"px"})}setViewport(e,r,i=0,n=0){this.state.viewport.width===e&&this.state.viewport.height===r||(this.state.viewport.width=e,this.state.viewport.height=r,this.state.viewport.x=i,this.state.viewport.y=n,this.gl.viewport(i,n,e,r))}setScissor(e,r,i=0,n=0){this.gl.scissor(i,n,e,r)}enable(e){this.state[e]!==!0&&(this.gl.enable(e),this.state[e]=!0)}disable(e){this.state[e]!==!1&&(this.gl.disable(e),this.state[e]=!1)}setBlendFunc(e,r,i,n){this.state.blendFunc.src===e&&this.state.blendFunc.dst===r&&this.state.blendFunc.srcAlpha===i&&this.state.blendFunc.dstAlpha===n||(this.state.blendFunc.src=e,this.state.blendFunc.dst=r,this.state.blendFunc.srcAlpha=i,this.state.blendFunc.dstAlpha=n,i!==void 0?this.gl.blendFuncSeparate(e,r,i,n):this.gl.blendFunc(e,r))}setBlendEquation(e,r){e=e||this.gl.FUNC_ADD,!(this.state.blendEquation.modeRGB===e&&this.state.blendEquation.modeAlpha===r)&&(this.state.blendEquation.modeRGB=e,this.state.blendEquation.modeAlpha=r,r!==void 0?this.gl.blendEquationSeparate(e,r):this.gl.blendEquation(e))}setCullFace(e){this.state.cullFace!==e&&(this.state.cullFace=e,this.gl.cullFace(e))}setFrontFace(e){this.state.frontFace!==e&&(this.state.frontFace=e,this.gl.frontFace(e))}setDepthMask(e){this.state.depthMask!==e&&(this.state.depthMask=e,this.gl.depthMask(e))}setDepthFunc(e){this.state.depthFunc!==e&&(this.state.depthFunc=e,this.gl.depthFunc(e))}setStencilMask(e){this.state.stencilMask!==e&&(this.state.stencilMask=e,this.gl.stencilMask(e))}setStencilFunc(e,r,i){this.state.stencilFunc===e&&this.state.stencilRef===r&&this.state.stencilFuncMask===i||(this.state.stencilFunc=e||this.gl.ALWAYS,this.state.stencilRef=r||0,this.state.stencilFuncMask=i||0,this.gl.stencilFunc(e||this.gl.ALWAYS,r||0,i||0))}setStencilOp(e,r,i){this.state.stencilFail===e&&this.state.stencilDepthFail===r&&this.state.stencilDepthPass===i||(this.state.stencilFail=e,this.state.stencilDepthFail=r,this.state.stencilDepthPass=i,this.gl.stencilOp(e,r,i))}activeTexture(e){this.state.activeTextureUnit!==e&&(this.state.activeTextureUnit=e,this.gl.activeTexture(this.gl.TEXTURE0+e))}bindFramebuffer({target:e=this.gl.FRAMEBUFFER,buffer:r=null}={}){this.state.framebuffer!==r&&(this.state.framebuffer=r,this.gl.bindFramebuffer(e,r))}getExtension(e,r,i){return r&&this.gl[r]?this.gl[r].bind(this.gl):(this.extensions[e]||(this.extensions[e]=this.gl.getExtension(e)),r?this.extensions[e]?this.extensions[e][i].bind(this.extensions[e]):null:this.extensions[e])}sortOpaque(e,r){return e.renderOrder!==r.renderOrder?e.renderOrder-r.renderOrder:e.program.id!==r.program.id?e.program.id-r.program.id:e.zDepth!==r.zDepth?e.zDepth-r.zDepth:r.id-e.id}sortTransparent(e,r){return e.renderOrder!==r.renderOrder?e.renderOrder-r.renderOrder:e.zDepth!==r.zDepth?r.zDepth-e.zDepth:r.id-e.id}sortUI(e,r){return e.renderOrder!==r.renderOrder?e.renderOrder-r.renderOrder:e.program.id!==r.program.id?e.program.id-r.program.id:r.id-e.id}getRenderList({scene:e,camera:r,frustumCull:i,sort:n}){let s=[];if(r&&i&&r.updateFrustum(),e.traverse(a=>{if(!a.visible)return!0;a.draw&&(i&&a.frustumCulled&&r&&!r.frustumIntersectsMesh(a)||s.push(a))}),n){let a=[],l=[],o=[];s.forEach(h=>{h.program.transparent?h.program.depthTest?l.push(h):o.push(h):a.push(h),h.zDepth=0,!(h.renderOrder!==0||!h.program.depthTest||!r)&&(h.worldMatrix.getTranslation(lt),lt.applyMatrix4(r.projectionViewMatrix),h.zDepth=lt.z)}),a.sort(this.sortOpaque),l.sort(this.sortTransparent),o.sort(this.sortUI),s=a.concat(l,o)}return s}render({scene:e,camera:r,target:i=null,update:n=!0,sort:s=!0,frustumCull:a=!0,clear:l}){i===null?(this.bindFramebuffer(),this.setViewport(this.width*this.dpr,this.height*this.dpr)):(this.bindFramebuffer(i),this.setViewport(i.width,i.height)),(l||this.autoClear&&l!==!1)&&(this.depth&&(!i||i.depth)&&(this.enable(this.gl.DEPTH_TEST),this.setDepthMask(!0)),(this.stencil||!i||i.stencil)&&(this.enable(this.gl.STENCIL_TEST),this.setStencilMask(255)),this.gl.clear((this.color?this.gl.COLOR_BUFFER_BIT:0)|(this.depth?this.gl.DEPTH_BUFFER_BIT:0)|(this.stencil?this.gl.STENCIL_BUFFER_BIT:0))),n&&e.updateMatrixWorld(),r&&r.updateMatrixWorld(),this.getRenderList({scene:e,camera:r,frustumCull:a,sort:s}).forEach(h=>{h.draw({camera:r})})}};function Ht(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function $t(t,e,r,i,n){return t[0]=e,t[1]=r,t[2]=i,t[3]=n,t}function Yt(t,e){let r=e[0],i=e[1],n=e[2],s=e[3],a=r*r+i*i+n*n+s*s;return a>0&&(a=1/Math.sqrt(a)),t[0]=r*a,t[1]=i*a,t[2]=n*a,t[3]=s*a,t}function Qt(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3]}function jt(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function Zt(t,e,r){r=r*.5;let i=Math.sin(r);return t[0]=i*e[0],t[1]=i*e[1],t[2]=i*e[2],t[3]=Math.cos(r),t}function ct(t,e,r){let i=e[0],n=e[1],s=e[2],a=e[3],l=r[0],o=r[1],h=r[2],c=r[3];return t[0]=i*c+a*l+n*h-s*o,t[1]=n*c+a*o+s*l-i*h,t[2]=s*c+a*h+i*o-n*l,t[3]=a*c-i*l-n*o-s*h,t}function Kt(t,e,r){r*=.5;let i=e[0],n=e[1],s=e[2],a=e[3],l=Math.sin(r),o=Math.cos(r);return t[0]=i*o+a*l,t[1]=n*o+s*l,t[2]=s*o-n*l,t[3]=a*o-i*l,t}function Jt(t,e,r){r*=.5;let i=e[0],n=e[1],s=e[2],a=e[3],l=Math.sin(r),o=Math.cos(r);return t[0]=i*o-s*l,t[1]=n*o+a*l,t[2]=s*o+i*l,t[3]=a*o-n*l,t}function er(t,e,r){r*=.5;let i=e[0],n=e[1],s=e[2],a=e[3],l=Math.sin(r),o=Math.cos(r);return t[0]=i*o+n*l,t[1]=n*o-i*l,t[2]=s*o+a*l,t[3]=a*o-s*l,t}function tr(t,e,r,i){let n=e[0],s=e[1],a=e[2],l=e[3],o=r[0],h=r[1],c=r[2],p=r[3],d,f,u,g,m;return f=n*o+s*h+a*c+l*p,f<0&&(f=-f,o=-o,h=-h,c=-c,p=-p),1-f>1e-6?(d=Math.acos(f),u=Math.sin(d),g=Math.sin((1-i)*d)/u,m=Math.sin(i*d)/u):(g=1-i,m=i),t[0]=g*n+m*o,t[1]=g*s+m*h,t[2]=g*a+m*c,t[3]=g*l+m*p,t}function rr(t,e){let r=e[0],i=e[1],n=e[2],s=e[3],a=r*r+i*i+n*n+s*s,l=a?1/a:0;return t[0]=-r*l,t[1]=-i*l,t[2]=-n*l,t[3]=s*l,t}function ir(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t}function nr(t,e){let r=e[0]+e[4]+e[8],i;if(r>0)i=Math.sqrt(r+1),t[3]=.5*i,i=.5/i,t[0]=(e[5]-e[7])*i,t[1]=(e[6]-e[2])*i,t[2]=(e[1]-e[3])*i;else{let n=0;e[4]>e[0]&&(n=1),e[8]>e[n*3+n]&&(n=2);let s=(n+1)%3,a=(n+2)%3;i=Math.sqrt(e[n*3+n]-e[s*3+s]-e[a*3+a]+1),t[n]=.5*i,i=.5/i,t[3]=(e[s*3+a]-e[a*3+s])*i,t[s]=(e[s*3+n]+e[n*3+s])*i,t[a]=(e[a*3+n]+e[n*3+a])*i}return t}function sr(t,e,r="YXZ"){let i=Math.sin(e[0]*.5),n=Math.cos(e[0]*.5),s=Math.sin(e[1]*.5),a=Math.cos(e[1]*.5),l=Math.sin(e[2]*.5),o=Math.cos(e[2]*.5);return r==="XYZ"?(t[0]=i*a*o+n*s*l,t[1]=n*s*o-i*a*l,t[2]=n*a*l+i*s*o,t[3]=n*a*o-i*s*l):r==="YXZ"?(t[0]=i*a*o+n*s*l,t[1]=n*s*o-i*a*l,t[2]=n*a*l-i*s*o,t[3]=n*a*o+i*s*l):r==="ZXY"?(t[0]=i*a*o-n*s*l,t[1]=n*s*o+i*a*l,t[2]=n*a*l+i*s*o,t[3]=n*a*o-i*s*l):r==="ZYX"?(t[0]=i*a*o-n*s*l,t[1]=n*s*o+i*a*l,t[2]=n*a*l-i*s*o,t[3]=n*a*o+i*s*l):r==="YZX"?(t[0]=i*a*o+n*s*l,t[1]=n*s*o+i*a*l,t[2]=n*a*l-i*s*o,t[3]=n*a*o-i*s*l):r==="XZY"&&(t[0]=i*a*o-n*s*l,t[1]=n*s*o-i*a*l,t[2]=n*a*l+i*s*o,t[3]=n*a*o+i*s*l),t}var ar=Ht,or=$t;var lr=Qt;var cr=Yt;var je=class extends Array{constructor(e=0,r=0,i=0,n=1){super(e,r,i,n),this.onChange=()=>{},this._target=this;let s=["0","1","2","3"];return new Proxy(this,{set(a,l){let o=Reflect.set(...arguments);return o&&s.includes(l)&&a.onChange(),o}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}get w(){return this[3]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set w(e){this._target[3]=e,this.onChange()}identity(){return jt(this._target),this.onChange(),this}set(e,r,i,n){return e.length?this.copy(e):(or(this._target,e,r,i,n),this.onChange(),this)}rotateX(e){return Kt(this._target,this._target,e),this.onChange(),this}rotateY(e){return Jt(this._target,this._target,e),this.onChange(),this}rotateZ(e){return er(this._target,this._target,e),this.onChange(),this}inverse(e=this._target){return rr(this._target,e),this.onChange(),this}conjugate(e=this._target){return ir(this._target,e),this.onChange(),this}copy(e){return ar(this._target,e),this.onChange(),this}normalize(e=this._target){return cr(this._target,e),this.onChange(),this}multiply(e,r){return r?ct(this._target,e,r):ct(this._target,this._target,e),this.onChange(),this}dot(e){return lr(this._target,e)}fromMatrix3(e){return nr(this._target,e),this.onChange(),this}fromEuler(e,r){return sr(this._target,e,e.order),r||this.onChange(),this}fromAxisAngle(e,r){return Zt(this._target,e,r),this.onChange(),this}slerp(e,r){return tr(this._target,this._target,e,r),this.onChange(),this}fromArray(e,r=0){return this._target[0]=e[r],this._target[1]=e[r+1],this._target[2]=e[r+2],this._target[3]=e[r+3],this.onChange(),this}toArray(e=[],r=0){return e[r]=this[0],e[r+1]=this[1],e[r+2]=this[2],e[r+3]=this[3],e}};var Ei=1e-6;function hr(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function fr(t,e,r,i,n,s,a,l,o,h,c,p,d,f,u,g,m){return t[0]=e,t[1]=r,t[2]=i,t[3]=n,t[4]=s,t[5]=a,t[6]=l,t[7]=o,t[8]=h,t[9]=c,t[10]=p,t[11]=d,t[12]=f,t[13]=u,t[14]=g,t[15]=m,t}function ur(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function dr(t,e){let r=e[0],i=e[1],n=e[2],s=e[3],a=e[4],l=e[5],o=e[6],h=e[7],c=e[8],p=e[9],d=e[10],f=e[11],u=e[12],g=e[13],m=e[14],v=e[15],b=r*l-i*a,F=r*o-n*a,S=r*h-s*a,x=i*o-n*l,y=i*h-s*l,w=n*h-s*o,G=c*g-p*u,P=c*m-d*u,E=c*v-f*u,_=p*m-d*g,A=p*v-f*g,O=d*v-f*m,M=b*O-F*A+S*_+x*E-y*P+w*G;return M?(M=1/M,t[0]=(l*O-o*A+h*_)*M,t[1]=(n*A-i*O-s*_)*M,t[2]=(g*w-m*y+v*x)*M,t[3]=(d*y-p*w-f*x)*M,t[4]=(o*E-a*O-h*P)*M,t[5]=(r*O-n*E+s*P)*M,t[6]=(m*S-u*w-v*F)*M,t[7]=(c*w-d*S+f*F)*M,t[8]=(a*A-l*E+h*G)*M,t[9]=(i*E-r*A-s*G)*M,t[10]=(u*y-g*S+v*b)*M,t[11]=(p*S-c*y-f*b)*M,t[12]=(l*P-a*_-o*G)*M,t[13]=(r*_-i*P+n*G)*M,t[14]=(g*F-u*x-m*b)*M,t[15]=(c*x-p*F+d*b)*M,t):null}function ht(t){let e=t[0],r=t[1],i=t[2],n=t[3],s=t[4],a=t[5],l=t[6],o=t[7],h=t[8],c=t[9],p=t[10],d=t[11],f=t[12],u=t[13],g=t[14],m=t[15],v=e*a-r*s,b=e*l-i*s,F=e*o-n*s,S=r*l-i*a,x=r*o-n*a,y=i*o-n*l,w=h*u-c*f,G=h*g-p*f,P=h*m-d*f,E=c*g-p*u,_=c*m-d*u,A=p*m-d*g;return v*A-b*_+F*E+S*P-x*G+y*w}function ft(t,e,r){let i=e[0],n=e[1],s=e[2],a=e[3],l=e[4],o=e[5],h=e[6],c=e[7],p=e[8],d=e[9],f=e[10],u=e[11],g=e[12],m=e[13],v=e[14],b=e[15],F=r[0],S=r[1],x=r[2],y=r[3];return t[0]=F*i+S*l+x*p+y*g,t[1]=F*n+S*o+x*d+y*m,t[2]=F*s+S*h+x*f+y*v,t[3]=F*a+S*c+x*u+y*b,F=r[4],S=r[5],x=r[6],y=r[7],t[4]=F*i+S*l+x*p+y*g,t[5]=F*n+S*o+x*d+y*m,t[6]=F*s+S*h+x*f+y*v,t[7]=F*a+S*c+x*u+y*b,F=r[8],S=r[9],x=r[10],y=r[11],t[8]=F*i+S*l+x*p+y*g,t[9]=F*n+S*o+x*d+y*m,t[10]=F*s+S*h+x*f+y*v,t[11]=F*a+S*c+x*u+y*b,F=r[12],S=r[13],x=r[14],y=r[15],t[12]=F*i+S*l+x*p+y*g,t[13]=F*n+S*o+x*d+y*m,t[14]=F*s+S*h+x*f+y*v,t[15]=F*a+S*c+x*u+y*b,t}function pr(t,e,r){let i=r[0],n=r[1],s=r[2],a,l,o,h,c,p,d,f,u,g,m,v;return e===t?(t[12]=e[0]*i+e[4]*n+e[8]*s+e[12],t[13]=e[1]*i+e[5]*n+e[9]*s+e[13],t[14]=e[2]*i+e[6]*n+e[10]*s+e[14],t[15]=e[3]*i+e[7]*n+e[11]*s+e[15]):(a=e[0],l=e[1],o=e[2],h=e[3],c=e[4],p=e[5],d=e[6],f=e[7],u=e[8],g=e[9],m=e[10],v=e[11],t[0]=a,t[1]=l,t[2]=o,t[3]=h,t[4]=c,t[5]=p,t[6]=d,t[7]=f,t[8]=u,t[9]=g,t[10]=m,t[11]=v,t[12]=a*i+c*n+u*s+e[12],t[13]=l*i+p*n+g*s+e[13],t[14]=o*i+d*n+m*s+e[14],t[15]=h*i+f*n+v*s+e[15]),t}function mr(t,e,r){let i=r[0],n=r[1],s=r[2];return t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t[3]=e[3]*i,t[4]=e[4]*n,t[5]=e[5]*n,t[6]=e[6]*n,t[7]=e[7]*n,t[8]=e[8]*s,t[9]=e[9]*s,t[10]=e[10]*s,t[11]=e[11]*s,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function gr(t,e,r,i){let n=i[0],s=i[1],a=i[2],l=Math.hypot(n,s,a),o,h,c,p,d,f,u,g,m,v,b,F,S,x,y,w,G,P,E,_,A,O,M,D;return Math.abs(l)<Ei?null:(l=1/l,n*=l,s*=l,a*=l,o=Math.sin(r),h=Math.cos(r),c=1-h,p=e[0],d=e[1],f=e[2],u=e[3],g=e[4],m=e[5],v=e[6],b=e[7],F=e[8],S=e[9],x=e[10],y=e[11],w=n*n*c+h,G=s*n*c+a*o,P=a*n*c-s*o,E=n*s*c-a*o,_=s*s*c+h,A=a*s*c+n*o,O=n*a*c+s*o,M=s*a*c-n*o,D=a*a*c+h,t[0]=p*w+g*G+F*P,t[1]=d*w+m*G+S*P,t[2]=f*w+v*G+x*P,t[3]=u*w+b*G+y*P,t[4]=p*E+g*_+F*A,t[5]=d*E+m*_+S*A,t[6]=f*E+v*_+x*A,t[7]=u*E+b*_+y*A,t[8]=p*O+g*M+F*D,t[9]=d*O+m*M+S*D,t[10]=f*O+v*M+x*D,t[11]=u*O+b*M+y*D,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t)}function xr(t,e){return t[0]=e[12],t[1]=e[13],t[2]=e[14],t}function ut(t,e){let r=e[0],i=e[1],n=e[2],s=e[4],a=e[5],l=e[6],o=e[8],h=e[9],c=e[10];return t[0]=Math.hypot(r,i,n),t[1]=Math.hypot(s,a,l),t[2]=Math.hypot(o,h,c),t}function vr(t){let e=t[0],r=t[1],i=t[2],n=t[4],s=t[5],a=t[6],l=t[8],o=t[9],h=t[10],c=e*e+r*r+i*i,p=n*n+s*s+a*a,d=l*l+o*o+h*h;return Math.sqrt(Math.max(c,p,d))}var dt=function(){let t=[1,1,1];return function(e,r){let i=t;ut(i,r);let n=1/i[0],s=1/i[1],a=1/i[2],l=r[0]*n,o=r[1]*s,h=r[2]*a,c=r[4]*n,p=r[5]*s,d=r[6]*a,f=r[8]*n,u=r[9]*s,g=r[10]*a,m=l+p+g,v=0;return m>0?(v=Math.sqrt(m+1)*2,e[3]=.25*v,e[0]=(d-u)/v,e[1]=(f-h)/v,e[2]=(o-c)/v):l>p&&l>g?(v=Math.sqrt(1+l-p-g)*2,e[3]=(d-u)/v,e[0]=.25*v,e[1]=(o+c)/v,e[2]=(f+h)/v):p>g?(v=Math.sqrt(1+p-l-g)*2,e[3]=(f-h)/v,e[0]=(o+c)/v,e[1]=.25*v,e[2]=(d+u)/v):(v=Math.sqrt(1+g-l-p)*2,e[3]=(o-c)/v,e[0]=(f+h)/v,e[1]=(d+u)/v,e[2]=.25*v),e}}();function yr(t,e,r,i){let n=Le([t[0],t[1],t[2]]),s=Le([t[4],t[5],t[6]]),a=Le([t[8],t[9],t[10]]);ht(t)<0&&(n=-n),r[0]=t[12],r[1]=t[13],r[2]=t[14];let o=t.slice(),h=1/n,c=1/s,p=1/a;o[0]*=h,o[1]*=h,o[2]*=h,o[4]*=c,o[5]*=c,o[6]*=c,o[8]*=p,o[9]*=p,o[10]*=p,dt(e,o),i[0]=n,i[1]=s,i[2]=a}function wr(t,e,r,i){let n=t,s=e[0],a=e[1],l=e[2],o=e[3],h=s+s,c=a+a,p=l+l,d=s*h,f=s*c,u=s*p,g=a*c,m=a*p,v=l*p,b=o*h,F=o*c,S=o*p,x=i[0],y=i[1],w=i[2];return n[0]=(1-(g+v))*x,n[1]=(f+S)*x,n[2]=(u-F)*x,n[3]=0,n[4]=(f-S)*y,n[5]=(1-(d+v))*y,n[6]=(m+b)*y,n[7]=0,n[8]=(u+F)*w,n[9]=(m-b)*w,n[10]=(1-(d+g))*w,n[11]=0,n[12]=r[0],n[13]=r[1],n[14]=r[2],n[15]=1,n}function Mr(t,e){let r=e[0],i=e[1],n=e[2],s=e[3],a=r+r,l=i+i,o=n+n,h=r*a,c=i*a,p=i*l,d=n*a,f=n*l,u=n*o,g=s*a,m=s*l,v=s*o;return t[0]=1-p-u,t[1]=c+v,t[2]=d-m,t[3]=0,t[4]=c-v,t[5]=1-h-u,t[6]=f+g,t[7]=0,t[8]=d+m,t[9]=f-g,t[10]=1-h-p,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function br(t,e,r,i,n){let s=1/Math.tan(e/2),a=1/(i-n);return t[0]=s/r,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=s,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(n+i)*a,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*n*i*a,t[15]=0,t}function Er(t,e,r,i,n,s,a){let l=1/(e-r),o=1/(i-n),h=1/(s-a);return t[0]=-2*l,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*o,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*h,t[11]=0,t[12]=(e+r)*l,t[13]=(n+i)*o,t[14]=(a+s)*h,t[15]=1,t}function Ar(t,e,r,i){let n=e[0],s=e[1],a=e[2],l=i[0],o=i[1],h=i[2],c=n-r[0],p=s-r[1],d=a-r[2],f=c*c+p*p+d*d;f===0?d=1:(f=1/Math.sqrt(f),c*=f,p*=f,d*=f);let u=o*d-h*p,g=h*c-l*d,m=l*p-o*c;return f=u*u+g*g+m*m,f===0&&(h?l+=1e-6:o?h+=1e-6:o+=1e-6,u=o*d-h*p,g=h*c-l*d,m=l*p-o*c,f=u*u+g*g+m*m),f=1/Math.sqrt(f),u*=f,g*=f,m*=f,t[0]=u,t[1]=g,t[2]=m,t[3]=0,t[4]=p*m-d*g,t[5]=d*u-c*m,t[6]=c*g-p*u,t[7]=0,t[8]=c,t[9]=p,t[10]=d,t[11]=0,t[12]=n,t[13]=s,t[14]=a,t[15]=1,t}function pt(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t[3]=e[3]+r[3],t[4]=e[4]+r[4],t[5]=e[5]+r[5],t[6]=e[6]+r[6],t[7]=e[7]+r[7],t[8]=e[8]+r[8],t[9]=e[9]+r[9],t[10]=e[10]+r[10],t[11]=e[11]+r[11],t[12]=e[12]+r[12],t[13]=e[13]+r[13],t[14]=e[14]+r[14],t[15]=e[15]+r[15],t}function mt(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t[3]=e[3]-r[3],t[4]=e[4]-r[4],t[5]=e[5]-r[5],t[6]=e[6]-r[6],t[7]=e[7]-r[7],t[8]=e[8]-r[8],t[9]=e[9]-r[9],t[10]=e[10]-r[10],t[11]=e[11]-r[11],t[12]=e[12]-r[12],t[13]=e[13]-r[13],t[14]=e[14]-r[14],t[15]=e[15]-r[15],t}function Sr(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t[4]=e[4]*r,t[5]=e[5]*r,t[6]=e[6]*r,t[7]=e[7]*r,t[8]=e[8]*r,t[9]=e[9]*r,t[10]=e[10]*r,t[11]=e[11]*r,t[12]=e[12]*r,t[13]=e[13]*r,t[14]=e[14]*r,t[15]=e[15]*r,t}var Ae=class extends Array{constructor(e=1,r=0,i=0,n=0,s=0,a=1,l=0,o=0,h=0,c=0,p=1,d=0,f=0,u=0,g=0,m=1){return super(e,r,i,n,s,a,l,o,h,c,p,d,f,u,g,m),this}get x(){return this[12]}get y(){return this[13]}get z(){return this[14]}get w(){return this[15]}set x(e){this[12]=e}set y(e){this[13]=e}set z(e){this[14]=e}set w(e){this[15]=e}set(e,r,i,n,s,a,l,o,h,c,p,d,f,u,g,m){return e.length?this.copy(e):(fr(this,e,r,i,n,s,a,l,o,h,c,p,d,f,u,g,m),this)}translate(e,r=this){return pr(this,r,e),this}rotate(e,r,i=this){return gr(this,i,e,r),this}scale(e,r=this){return mr(this,r,typeof e=="number"?[e,e,e]:e),this}add(e,r){return r?pt(this,e,r):pt(this,this,e),this}sub(e,r){return r?mt(this,e,r):mt(this,this,e),this}multiply(e,r){return e.length?r?ft(this,e,r):ft(this,this,e):Sr(this,this,e),this}identity(){return ur(this),this}copy(e){return hr(this,e),this}fromPerspective({fov:e,aspect:r,near:i,far:n}={}){return br(this,e,r,i,n),this}fromOrthogonal({left:e,right:r,bottom:i,top:n,near:s,far:a}){return Er(this,e,r,i,n,s,a),this}fromQuaternion(e){return Mr(this,e),this}setPosition(e){return this.x=e[0],this.y=e[1],this.z=e[2],this}inverse(e=this){return dr(this,e),this}compose(e,r,i){return wr(this,e,r,i),this}decompose(e,r,i){return yr(this,e,r,i),this}getRotation(e){return dt(e,this),this}getTranslation(e){return xr(e,this),this}getScaling(e){return ut(e,this),this}getMaxScaleOnAxis(){return vr(this)}lookAt(e,r,i){return Ar(this,e,r,i),this}determinant(){return ht(this)}fromArray(e,r=0){return this[0]=e[r],this[1]=e[r+1],this[2]=e[r+2],this[3]=e[r+3],this[4]=e[r+4],this[5]=e[r+5],this[6]=e[r+6],this[7]=e[r+7],this[8]=e[r+8],this[9]=e[r+9],this[10]=e[r+10],this[11]=e[r+11],this[12]=e[r+12],this[13]=e[r+13],this[14]=e[r+14],this[15]=e[r+15],this}toArray(e=[],r=0){return e[r]=this[0],e[r+1]=this[1],e[r+2]=this[2],e[r+3]=this[3],e[r+4]=this[4],e[r+5]=this[5],e[r+6]=this[6],e[r+7]=this[7],e[r+8]=this[8],e[r+9]=this[9],e[r+10]=this[10],e[r+11]=this[11],e[r+12]=this[12],e[r+13]=this[13],e[r+14]=this[14],e[r+15]=this[15],e}};function Fr(t,e,r="YXZ"){return r==="XYZ"?(t[1]=Math.asin(Math.min(Math.max(e[8],-1),1)),Math.abs(e[8])<.99999?(t[0]=Math.atan2(-e[9],e[10]),t[2]=Math.atan2(-e[4],e[0])):(t[0]=Math.atan2(e[6],e[5]),t[2]=0)):r==="YXZ"?(t[0]=Math.asin(-Math.min(Math.max(e[9],-1),1)),Math.abs(e[9])<.99999?(t[1]=Math.atan2(e[8],e[10]),t[2]=Math.atan2(e[1],e[5])):(t[1]=Math.atan2(-e[2],e[0]),t[2]=0)):r==="ZXY"?(t[0]=Math.asin(Math.min(Math.max(e[6],-1),1)),Math.abs(e[6])<.99999?(t[1]=Math.atan2(-e[2],e[10]),t[2]=Math.atan2(-e[4],e[5])):(t[1]=0,t[2]=Math.atan2(e[1],e[0]))):r==="ZYX"?(t[1]=Math.asin(-Math.min(Math.max(e[2],-1),1)),Math.abs(e[2])<.99999?(t[0]=Math.atan2(e[6],e[10]),t[2]=Math.atan2(e[1],e[0])):(t[0]=0,t[2]=Math.atan2(-e[4],e[5]))):r==="YZX"?(t[2]=Math.asin(Math.min(Math.max(e[1],-1),1)),Math.abs(e[1])<.99999?(t[0]=Math.atan2(-e[9],e[5]),t[1]=Math.atan2(-e[2],e[0])):(t[0]=0,t[1]=Math.atan2(e[8],e[10]))):r==="XZY"&&(t[2]=Math.asin(-Math.min(Math.max(e[4],-1),1)),Math.abs(e[4])<.99999?(t[0]=Math.atan2(e[6],e[5]),t[1]=Math.atan2(e[8],e[0])):(t[0]=Math.atan2(-e[9],e[10]),t[1]=0)),t}var Tr=new Ae,Ze=class extends Array{constructor(e=0,r=e,i=e,n="YXZ"){super(e,r,i),this.order=n,this.onChange=()=>{},this._target=this;let s=["0","1","2"];return new Proxy(this,{set(a,l){let o=Reflect.set(...arguments);return o&&s.includes(l)&&a.onChange(),o}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set(e,r=e,i=e){return e.length?this.copy(e):(this._target[0]=e,this._target[1]=r,this._target[2]=i,this.onChange(),this)}copy(e){return this._target[0]=e[0],this._target[1]=e[1],this._target[2]=e[2],this.onChange(),this}reorder(e){return this._target.order=e,this.onChange(),this}fromRotationMatrix(e,r=this.order){return Fr(this._target,e,r),this.onChange(),this}fromQuaternion(e,r=this.order,i){return Tr.fromQuaternion(e),this._target.fromRotationMatrix(Tr,r),i||this.onChange(),this}fromArray(e,r=0){return this._target[0]=e[r],this._target[1]=e[r+1],this._target[2]=e[r+2],this}toArray(e=[],r=0){return e[r]=this[0],e[r+1]=this[1],e[r+2]=this[2],e}};var Ke=class{constructor(){this.parent=null,this.children=[],this.visible=!0,this.matrix=new Ae,this.worldMatrix=new Ae,this.matrixAutoUpdate=!0,this.worldMatrixNeedsUpdate=!1,this.position=new ve,this.quaternion=new je,this.scale=new ve(1),this.rotation=new Ze,this.up=new ve(0,1,0),this.rotation._target.onChange=()=>this.quaternion.fromEuler(this.rotation,!0),this.quaternion._target.onChange=()=>this.rotation.fromQuaternion(this.quaternion,void 0,!0)}setParent(e,r=!0){this.parent&&e!==this.parent&&this.parent.removeChild(this,!1),this.parent=e,r&&e&&e.addChild(this,!1)}addChild(e,r=!0){~this.children.indexOf(e)||this.children.push(e),r&&e.setParent(this,!1)}removeChild(e,r=!0){~this.children.indexOf(e)&&this.children.splice(this.children.indexOf(e),1),r&&e.setParent(null,!1)}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.worldMatrixNeedsUpdate||e)&&(this.parent===null?this.worldMatrix.copy(this.matrix):this.worldMatrix.multiply(this.parent.worldMatrix,this.matrix),this.worldMatrixNeedsUpdate=!1,e=!0);for(let r=0,i=this.children.length;r<i;r++)this.children[r].updateMatrixWorld(e)}updateMatrix(){this.matrix.compose(this.quaternion,this.position,this.scale),this.worldMatrixNeedsUpdate=!0}traverse(e){if(!e(this))for(let r=0,i=this.children.length;r<i;r++)this.children[r].traverse(e)}decompose(){this.matrix.decompose(this.quaternion._target,this.position,this.scale),this.rotation.fromQuaternion(this.quaternion)}lookAt(e,r=!1){r?this.matrix.lookAt(this.position,e,this.up):this.matrix.lookAt(e,this.position,this.up),this.matrix.getRotation(this.quaternion._target),this.rotation.fromQuaternion(this.quaternion)}};function Rr(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[4],t[4]=e[5],t[5]=e[6],t[6]=e[8],t[7]=e[9],t[8]=e[10],t}function _r(t,e){let r=e[0],i=e[1],n=e[2],s=e[3],a=r+r,l=i+i,o=n+n,h=r*a,c=i*a,p=i*l,d=n*a,f=n*l,u=n*o,g=s*a,m=s*l,v=s*o;return t[0]=1-p-u,t[3]=c-v,t[6]=d+m,t[1]=c+v,t[4]=1-h-u,t[7]=f-g,t[2]=d-m,t[5]=f+g,t[8]=1-h-p,t}function Cr(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function Lr(t,e,r,i,n,s,a,l,o,h){return t[0]=e,t[1]=r,t[2]=i,t[3]=n,t[4]=s,t[5]=a,t[6]=l,t[7]=o,t[8]=h,t}function Pr(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function zr(t,e){let r=e[0],i=e[1],n=e[2],s=e[3],a=e[4],l=e[5],o=e[6],h=e[7],c=e[8],p=c*a-l*h,d=-c*s+l*o,f=h*s-a*o,u=r*p+i*d+n*f;return u?(u=1/u,t[0]=p*u,t[1]=(-c*i+n*h)*u,t[2]=(l*i-n*a)*u,t[3]=d*u,t[4]=(c*r-n*o)*u,t[5]=(-l*r+n*s)*u,t[6]=f*u,t[7]=(-h*r+i*o)*u,t[8]=(a*r-i*s)*u,t):null}function gt(t,e,r){let i=e[0],n=e[1],s=e[2],a=e[3],l=e[4],o=e[5],h=e[6],c=e[7],p=e[8],d=r[0],f=r[1],u=r[2],g=r[3],m=r[4],v=r[5],b=r[6],F=r[7],S=r[8];return t[0]=d*i+f*a+u*h,t[1]=d*n+f*l+u*c,t[2]=d*s+f*o+u*p,t[3]=g*i+m*a+v*h,t[4]=g*n+m*l+v*c,t[5]=g*s+m*o+v*p,t[6]=b*i+F*a+S*h,t[7]=b*n+F*l+S*c,t[8]=b*s+F*o+S*p,t}function Ir(t,e,r){let i=e[0],n=e[1],s=e[2],a=e[3],l=e[4],o=e[5],h=e[6],c=e[7],p=e[8],d=r[0],f=r[1];return t[0]=i,t[1]=n,t[2]=s,t[3]=a,t[4]=l,t[5]=o,t[6]=d*i+f*a+h,t[7]=d*n+f*l+c,t[8]=d*s+f*o+p,t}function kr(t,e,r){let i=e[0],n=e[1],s=e[2],a=e[3],l=e[4],o=e[5],h=e[6],c=e[7],p=e[8],d=Math.sin(r),f=Math.cos(r);return t[0]=f*i+d*a,t[1]=f*n+d*l,t[2]=f*s+d*o,t[3]=f*a-d*i,t[4]=f*l-d*n,t[5]=f*o-d*s,t[6]=h,t[7]=c,t[8]=p,t}function Or(t,e,r){let i=r[0],n=r[1];return t[0]=i*e[0],t[1]=i*e[1],t[2]=i*e[2],t[3]=n*e[3],t[4]=n*e[4],t[5]=n*e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function Ur(t,e){let r=e[0],i=e[1],n=e[2],s=e[3],a=e[4],l=e[5],o=e[6],h=e[7],c=e[8],p=e[9],d=e[10],f=e[11],u=e[12],g=e[13],m=e[14],v=e[15],b=r*l-i*a,F=r*o-n*a,S=r*h-s*a,x=i*o-n*l,y=i*h-s*l,w=n*h-s*o,G=c*g-p*u,P=c*m-d*u,E=c*v-f*u,_=p*m-d*g,A=p*v-f*g,O=d*v-f*m,M=b*O-F*A+S*_+x*E-y*P+w*G;return M?(M=1/M,t[0]=(l*O-o*A+h*_)*M,t[1]=(o*E-a*O-h*P)*M,t[2]=(a*A-l*E+h*G)*M,t[3]=(n*A-i*O-s*_)*M,t[4]=(r*O-n*E+s*P)*M,t[5]=(i*E-r*A-s*G)*M,t[6]=(g*w-m*y+v*x)*M,t[7]=(m*S-u*w-v*F)*M,t[8]=(u*y-g*S+v*b)*M,t):null}var Je=class extends Array{constructor(e=1,r=0,i=0,n=0,s=1,a=0,l=0,o=0,h=1){return super(e,r,i,n,s,a,l,o,h),this}set(e,r,i,n,s,a,l,o,h){return e.length?this.copy(e):(Lr(this,e,r,i,n,s,a,l,o,h),this)}translate(e,r=this){return Ir(this,r,e),this}rotate(e,r=this){return kr(this,r,e),this}scale(e,r=this){return Or(this,r,e),this}multiply(e,r){return r?gt(this,e,r):gt(this,this,e),this}identity(){return Pr(this),this}copy(e){return Cr(this,e),this}fromMatrix4(e){return Rr(this,e),this}fromQuaternion(e){return _r(this,e),this}fromBasis(e,r,i){return this.set(e[0],e[1],e[2],r[0],r[1],r[2],i[0],i[1],i[2]),this}inverse(e=this){return zr(this,e),this}getNormalMatrix(e){return Ur(this,e),this}};var Ti=0,Be=class extends Ke{constructor(e,{geometry:r,program:i,mode:n=e.TRIANGLES,frustumCulled:s=!0,renderOrder:a=0}={}){super(),e.canvas||console.error("gl not passed as first argument to Mesh"),this.gl=e,this.id=Ti++,this.geometry=r,this.program=i,this.mode=n,this.frustumCulled=s,this.renderOrder=a,this.modelViewMatrix=new Ae,this.normalMatrix=new Je,this.beforeRenderCallbacks=[],this.afterRenderCallbacks=[]}onBeforeRender(e){return this.beforeRenderCallbacks.push(e),this}onAfterRender(e){return this.afterRenderCallbacks.push(e),this}draw({camera:e}={}){e&&(this.program.uniforms.modelMatrix||Object.assign(this.program.uniforms,{modelMatrix:{value:null},viewMatrix:{value:null},modelViewMatrix:{value:null},normalMatrix:{value:null},projectionMatrix:{value:null},cameraPosition:{value:null}}),this.program.uniforms.projectionMatrix.value=e.projectionMatrix,this.program.uniforms.cameraPosition.value=e.worldPosition,this.program.uniforms.viewMatrix.value=e.viewMatrix,this.modelViewMatrix.multiply(e.viewMatrix,this.worldMatrix),this.normalMatrix.getNormalMatrix(this.modelViewMatrix),this.program.uniforms.modelMatrix.value=this.worldMatrix,this.program.uniforms.modelViewMatrix.value=this.modelViewMatrix,this.program.uniforms.normalMatrix.value=this.normalMatrix),this.beforeRenderCallbacks.forEach(i=>i&&i({mesh:this,camera:e}));let r=this.program.cullFace&&this.worldMatrix.determinant()<0;this.program.use({flipFaces:r}),this.geometry.draw({mode:this.mode,program:this.program}),this.afterRenderCallbacks.forEach(i=>i&&i({mesh:this,camera:e}))}};var Dr=new Uint8Array(4);function Br(t){return(t&t-1)===0}var Ri=1,Ie=class{constructor(e,{image:r,target:i=e.TEXTURE_2D,type:n=e.UNSIGNED_BYTE,format:s=e.RGBA,internalFormat:a=s,wrapS:l=e.CLAMP_TO_EDGE,wrapT:o=e.CLAMP_TO_EDGE,wrapR:h=e.CLAMP_TO_EDGE,generateMipmaps:c=i===(e.TEXTURE_2D||e.TEXTURE_CUBE_MAP),minFilter:p=c?e.NEAREST_MIPMAP_LINEAR:e.LINEAR,magFilter:d=e.LINEAR,premultiplyAlpha:f=!1,unpackAlignment:u=4,flipY:g=i==(e.TEXTURE_2D||e.TEXTURE_3D),anisotropy:m=0,level:v=0,width:b,height:F=b,length:S=1}={}){this.gl=e,this.id=Ri++,this.image=r,this.target=i,this.type=n,this.format=s,this.internalFormat=a,this.minFilter=p,this.magFilter=d,this.wrapS=l,this.wrapT=o,this.wrapR=h,this.generateMipmaps=c,this.premultiplyAlpha=f,this.unpackAlignment=u,this.flipY=g,this.anisotropy=Math.min(m,this.gl.renderer.parameters.maxAnisotropy),this.level=v,this.width=b,this.height=F,this.length=S,this.texture=this.gl.createTexture(),this.store={image:null},this.glState=this.gl.renderer.state,this.state={},this.state.minFilter=this.gl.NEAREST_MIPMAP_LINEAR,this.state.magFilter=this.gl.LINEAR,this.state.wrapS=this.gl.REPEAT,this.state.wrapT=this.gl.REPEAT,this.state.anisotropy=0}bind(){this.glState.textureUnits[this.glState.activeTextureUnit]!==this.id&&(this.gl.bindTexture(this.target,this.texture),this.glState.textureUnits[this.glState.activeTextureUnit]=this.id)}update(e=0){let r=!(this.image===this.store.image&&!this.needsUpdate);if((r||this.glState.textureUnits[e]!==this.id)&&(this.gl.renderer.activeTexture(e),this.bind()),!!r){if(this.needsUpdate=!1,this.flipY!==this.glState.flipY&&(this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,this.flipY),this.glState.flipY=this.flipY),this.premultiplyAlpha!==this.glState.premultiplyAlpha&&(this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),this.glState.premultiplyAlpha=this.premultiplyAlpha),this.unpackAlignment!==this.glState.unpackAlignment&&(this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,this.unpackAlignment),this.glState.unpackAlignment=this.unpackAlignment),this.minFilter!==this.state.minFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MIN_FILTER,this.minFilter),this.state.minFilter=this.minFilter),this.magFilter!==this.state.magFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MAG_FILTER,this.magFilter),this.state.magFilter=this.magFilter),this.wrapS!==this.state.wrapS&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_S,this.wrapS),this.state.wrapS=this.wrapS),this.wrapT!==this.state.wrapT&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_T,this.wrapT),this.state.wrapT=this.wrapT),this.wrapR!==this.state.wrapR&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_R,this.wrapR),this.state.wrapR=this.wrapR),this.anisotropy&&this.anisotropy!==this.state.anisotropy&&(this.gl.texParameterf(this.target,this.gl.renderer.getExtension("EXT_texture_filter_anisotropic").TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropy),this.state.anisotropy=this.anisotropy),this.image){if(this.image.width&&(this.width=this.image.width,this.height=this.image.height),this.target===this.gl.TEXTURE_CUBE_MAP)for(let i=0;i<6;i++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+i,this.level,this.internalFormat,this.format,this.type,this.image[i]);else if(ArrayBuffer.isView(this.image))this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,this.image):(this.target===this.gl.TEXTURE_2D_ARRAY||this.target===this.gl.TEXTURE_3D)&&this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,this.image);else if(this.image.isCompressedTexture)for(let i=0;i<this.image.length;i++)this.gl.compressedTexImage2D(this.target,i,this.internalFormat,this.image[i].width,this.image[i].height,0,this.image[i].data);else this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.format,this.type,this.image):this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,this.image);this.generateMipmaps&&(!this.gl.renderer.isWebgl2&&(!Br(this.image.width)||!Br(this.image.height))?(this.generateMipmaps=!1,this.wrapS=this.wrapT=this.gl.CLAMP_TO_EDGE,this.minFilter=this.gl.LINEAR):this.gl.generateMipmap(this.target)),this.onUpdate&&this.onUpdate()}else if(this.target===this.gl.TEXTURE_CUBE_MAP)for(let i=0;i<6;i++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,Dr);else this.width?this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,null):this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,null):this.gl.texImage2D(this.target,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,Dr);this.store.image=this.image}}};var Ne=class extends Qe{constructor(e,{attributes:r={}}={}){Object.assign(r,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),super(e,r)}};var Hr=`data:image/svg+xml;charset=utf-8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><path d="M39 3 12 37h17l-4 24 27-34H35z" fill="#fff"/></svg>')}`,_i=560,we=4,Ve=1e20,_e=5,We=3,Ci=4e6,Nr=t=>{let e=String(t||"").replace("#","");e.length===3&&(e=e.replace(/./g,i=>i+i));let r=parseInt(e.slice(0,6),16);return Number.isNaN(r)?[1,1,1]:[(r>>16&255)/255,(r>>8&255)/255,(r&255)/255]},Vr=(t,e,r,i,n)=>{let s=0;r[0]=0,i[0]=-Ve,i[1]=Ve;for(let a=1;a<n;a++){let l=(t[a]+a*a-(t[r[s]]+r[s]*r[s]))/(2*a-2*r[s]);for(;l<=i[s];)s--,l=(t[a]+a*a-(t[r[s]]+r[s]*r[s]))/(2*a-2*r[s]);s++,r[s]=a,i[s]=l,i[s+1]=Ve}s=0;for(let a=0;a<n;a++){for(;i[s+1]<a;)s++;e[a]=(a-r[s])*(a-r[s])+t[r[s]]}},Wr=(t,e,r)=>{let i=Math.max(e,r),n=new Float64Array(i),s=new Float64Array(i),a=new Int32Array(i),l=new Float64Array(i+1);for(let o=0;o<e;o++){for(let h=0;h<r;h++)n[h]=t[h*e+o];Vr(n,s,a,l,r);for(let h=0;h<r;h++)t[h*e+o]=s[h]}for(let o=0;o<r;o++){for(let h=0;h<e;h++)n[h]=t[o*e+h];Vr(n,s,a,l,e);for(let h=0;h<e;h++)t[o*e+h]=s[h]}},qr=(t,e,r,i,n,s)=>{let a=1/(2*s+1),l=0;for(let o=0;o<=s&&o<n;o++)l+=t[r+o*i];for(let o=0;o<n;o++)e[r+o*i]=l*a,o+s+1<n&&(l+=t[r+(o+s+1)*i]),o-s>=0&&(l-=t[r+(o-s)*i])},Gr=(t,e,r,i)=>{let n=new Float32Array(e*r);for(let s=0;s<3;s++){for(let a=0;a<r;a++)qr(t,n,a*e,1,e,i);for(let a=0;a<e;a++)qr(n,t,a,e,r,i)}},Li=(t,e,r)=>{let i=new Float32Array(e*r),n=0;for(let c=0;c<e*r;c++)t[c*4+3]<250&&n++;if(n>e*r*.01){for(let c=0;c<e*r;c++)i[c]=t[c*4+3]/255;return i}let s=0,a=0,l=0,o=0,h=c=>{s+=t[c*4],a+=t[c*4+1],l+=t[c*4+2],o++};for(let c=0;c<e;c++)h(c),h((r-1)*e+c);for(let c=0;c<r;c++)h(c*e),h(c*e+e-1);s/=o,a/=o,l/=o;for(let c=0;c<e*r;c++){let p=Math.max(Math.abs(t[c*4]-s),Math.abs(t[c*4+1]-a),Math.abs(t[c*4+2]-l));i[c]=Math.min(1,Math.max(0,(p-24)/48))}return i},Xr=(t,e,r)=>{let{field:i,width:n,height:s}=t,a=Math.min(Math.max(e,.5),n-.5),l=Math.min(Math.max(r,.5),s-.5),o=Math.min(Math.floor(a-.5),n-2),h=Math.min(Math.floor(l-.5),s-2),c=a-.5-o,p=l-.5-h,d=h*n+o,f=i[d]+(i[d+1]-i[d])*c,u=i[d+n]+(i[d+n+1]-i[d+n])*c;return f+(u-f)*p+Math.hypot(e-a,r-l)},Pi=t=>{let e=t.naturalWidth||t.width,r=t.naturalHeight||t.height;if(!e||!r)return null;let i=_i/Math.max(e,r),n=Math.max(2,Math.round(e*i)),s=Math.max(2,Math.round(r*i)),a=document.createElement("canvas");a.width=n,a.height=s;let l=a.getContext("2d",{willReadFrequently:!0});if(!l)return null;l.drawImage(t,0,0,n,s);let o=Li(l.getImageData(0,0,n,s).data,n,s),h=n,c=s,p=-1,d=-1;for(let z=0;z<s;z++)for(let q=0;q<n;q++)o[z*n+q]<=.01||(q<h&&(h=q),q>p&&(p=q),z<c&&(c=z),z>d&&(d=z));if(p<0)return null;let f=p-h+1,u=d-c+1,g=Math.ceil(Math.max(f,u)*.25)+2,m=f+g*2,v=u+g*2,b=new Float32Array(m*v),F=new Float32Array(m*v);for(let z=0;z<v;z++)for(let q=0;q<m;q++){let j=q-g+h,B=z-g+c,te=j>=0&&B>=0&&j<n&&B<s?o[B*n+j]:0,Z=z*m+q;if(te>=1)b[Z]=0,F[Z]=Ve;else if(te<=0)b[Z]=Ve,F[Z]=0;else{let ne=.5-te;b[Z]=ne>0?ne*ne:0,F[Z]=ne<0?ne*ne:0}}Wr(b,m,v),Wr(F,m,v);let S=new Float32Array(m*v);for(let z=0;z<m*v;z++)S[z]=Math.sqrt(b[z])-Math.sqrt(F[z]);let x=[];for(let z=1;z<v-1;z++)for(let q=1;q<m-1;q++){let j=z*m+q,B=S[j];if(B>0||S[j-1]<=0&&S[j+1]<=0&&S[j-m]<=0&&S[j+m]<=0)continue;let te=S[j+1]-S[j-1],Z=S[j+m]-S[j-m],ne=Math.hypot(te,Z)||1;x.push(q+.5-B*te/ne,z+.5-B*Z/ne)}let y=Math.max(1,Math.ceil(x.length/2/3e3))*2,w=[];for(let z=0;z<x.length;z+=y)w.push(x[z],x[z+1]);let G=Math.max(f,u),P=Math.ceil(G*.7/we),E=Math.ceil(f/we)+P*2,_=Math.ceil(u/we)+P*2,A=new Float32Array(E*_);for(let z=0;z<v;z++){let q=Math.floor((z-g)/we)+P;for(let j=0;j<m;j++){let B=Math.floor((j-g)/we)+P;A[q*E+B]+=Math.exp(-Math.abs(S[z*m+j])/1.5)/(we*we)}}let O=A.slice(),M=Math.max(1,Math.round(G*.035/we)),D=Math.max(2,Math.round(G*.13/we));Gr(A,E,_,M),Gr(O,E,_,D);let Y=Math.sqrt(2*Math.PI*(M*M+M))*we/3,V=Math.sqrt(2*Math.PI*(D*D+D))*we/3,C=new Float32Array(E*_*2);for(let z=0;z<E*_;z++)C[z*2]=A[z]*Y,C[z*2+1]=O[z]*V;return{field:S,edges:w,width:m,height:v,pad:g,logoWidth:f,logoHeight:u,glow:C,glowWidth:E,glowHeight:_,glowOffset:g-P*we}},xt=(t,e,r)=>{let{edges:i,logoWidth:n,logoHeight:s}=t,a=i.length/2;if(a<2)return null;let l=Math.max(n,s),o=Math.floor(Math.random()*a);if(r){let p=!1;for(let d=0;d<40&&!p;d++){let f=Math.floor(Math.random()*a);Math.hypot(i[f*2]-r.x,i[f*2+1]-r.y)<r.radius&&(o=f,p=!0)}if(!p)return null}let h=i[o*2],c=i[o*2+1];for(let p=0;p<24;p++){let d=Math.floor(Math.random()*a),f=i[d*2],u=i[d*2+1],g=Math.hypot(f-h,u-c);if(g<l*.08||g>l*.3)continue;let m=-(u-c)/g,v=(f-h)/g,b=g*(.2+Math.random()*.3),F=(h+f)/2,S=(c+u)/2,x=Xr(t,F+m*b,S+v*b),y=Xr(t,F-m*b,S-v*b);if(!(Math.max(x,y)<=0))return{ax:h,ay:c,bx:f,by:u,bow:x>=y?b:-b,seed:1+Math.random()*60,born:e,life:.35+Math.random()*.45}}return null},zi=`#version 300 es
in vec2 position;
in vec2 uv;
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`,Ii=`#version 300 es
precision highp float;
precision highp int;

uniform sampler2D tFieldFrom;
uniform sampler2D tGlowFrom;
uniform sampler2D tFieldTo;
uniform sampler2D tGlowTo;
uniform vec4 uMapFrom;
uniform vec4 uSizeFrom;
uniform vec4 uMapTo;
uniform vec4 uSizeTo;
uniform float uMorph;
uniform vec2 uResolution;
uniform float uUnit;
uniform float uTime;
uniform float uPresence;
uniform vec3 uHover;
uniform float uHoverRadius;
uniform vec4 uPulses[${We}];
uniform float uPulseBoost;
uniform float uFlash;
uniform vec3 uColor;
uniform vec3 uGlowColor;
uniform float uIntensity;
uniform float uGlow;
uniform float uThickness;
uniform float uStrands;
uniform float uBend;
uniform float uCrackle;
uniform float uFlicker;
uniform float uFill;
uniform float uInk;
uniform vec4 uArcEnds[${_e}];
uniform vec4 uArcShape[${_e}];

in vec2 vUv;
out vec4 fragColor;

uint scramble(uint x) {
  x ^= x >> 16u;
  x *= 0x7feb352du;
  x ^= x >> 15u;
  x *= 0x846ca68bu;
  x ^= x >> 16u;
  return x;
}

float fieldAt(sampler2D tex, vec4 map, vec4 size, vec2 p) {
  vec2 f = (p - map.xy) / map.z;
  vec2 c = clamp(f, vec2(0.5), size.xy - 0.5);
  return (textureLod(tex, c / size.xy, 0.0).r + length(f - c)) * map.z;
}

vec2 glowAt(sampler2D tex, vec4 map, vec4 size, vec2 p) {
  vec2 f = (p - map.xy) / map.z - map.w;
  return textureLod(tex, f / (size.zw * ${we}.0), 0.0).rg;
}

float shape(vec2 p, float k) {
  float to = fieldAt(tFieldTo, uMapTo, uSizeTo, p);
  if (k >= 1.0) return to;
  return mix(fieldAt(tFieldFrom, uMapFrom, uSizeFrom, p), to, k);
}

vec2 aura(vec2 p, float k) {
  vec2 to = glowAt(tGlowTo, uMapTo, uSizeTo, p);
  if (k >= 1.0) return to;
  return mix(glowAt(tGlowFrom, uMapFrom, uSizeFrom, p), to, k);
}

vec4 corner(ivec2 c, uint seed) {
  uint h = scramble(uint(c.x) * 0x8da6b343u + uint(c.y) * 0xd8163841u + seed * 0xcb1ab31fu);
  return vec4(uvec4(h, h >> 8u, h >> 16u, h >> 24u) & 255u) / 127.5 - 1.0;
}

vec2 drift(vec2 p, uint seed, out mat2 jac) {
  vec2 i = floor(p);
  vec2 f = p - i;
  vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  vec2 du = 30.0 * f * f * (f * (f - 2.0) + 1.0);
  ivec2 c = ivec2(i);
  vec4 ga = corner(c, seed);
  vec4 gb = corner(c + ivec2(1, 0), seed);
  vec4 gc = corner(c + ivec2(0, 1), seed);
  vec4 gd = corner(c + ivec2(1, 1), seed);
  vec2 fb = f - vec2(1.0, 0.0);
  vec2 fc = f - vec2(0.0, 1.0);
  vec2 fd = f - vec2(1.0);
  vec2 va = vec2(dot(ga.xy, f), dot(ga.zw, f));
  vec2 vb = vec2(dot(gb.xy, fb), dot(gb.zw, fb));
  vec2 vc = vec2(dot(gc.xy, fc), dot(gc.zw, fc));
  vec2 vd = vec2(dot(gd.xy, fd), dot(gd.zw, fd));
  vec2 k = va - vb - vc + vd;
  vec4 g = ga + u.x * (gb - ga) + u.y * (gc - ga) + u.x * u.y * (ga - gb - gc + gd);
  jac = mat2(
    g.xy + du * (u.yx * k.x + vec2(vb.x - va.x, vc.x - va.x)),
    g.zw + du * (u.yx * k.y + vec2(vb.y - va.y, vc.y - va.y))
  );
  return va + u.x * (vb - va) + u.y * (vc - va) + u.x * u.y * k;
}

float wobble(vec2 p, uint seed) {
  mat2 jac;
  return drift(p, seed, jac).x;
}

vec2 ripple(vec2 p, out float surge) {
  vec2 push = vec2(0.0);
  surge = 0.0;
  float width = uUnit * 10.0;
  for (int i = 0; i < ${We}; i++) {
    vec4 pulse = uPulses[i];
    if (pulse.w <= 0.0) continue;
    vec2 d = p - pulse.xy;
    float dist = length(d);
    float front = (dist - pulse.z * uUnit * 150.0) / width;
    float env = exp(-front * front) * pulse.w * exp(-pulse.z * 1.7) * smoothstep(0.0, uUnit * 8.0, dist);
    push += d / max(dist, 1.0) * env * cos(front * 2.2) * uUnit * 7.5;
    surge += env;
  }
  return push;
}

vec2 wander(vec2 p, float t, uint seed, float reachScale, out mat2 jac, out vec2 sway) {
  vec2 q = p / uUnit;
  mat2 ja;
  mat2 jb;
  mat2 jc;
  mat2 jd;
  vec2 a = drift(q * 0.028 + vec2(t * 0.29, t * 0.21), seed, ja);
  vec2 b = drift(q * 0.085 + a * 0.4 + vec2(t * 0.83, -t * 0.61) + 17.0, seed + 1u, jb);
  vec2 c = drift(p / 9.0 + b * 0.6 + vec2(t * 1.9, t * 1.3) + 5.0, seed + 2u, jc);
  vec2 d = drift(p / 4.1 + vec2(-t * 2.7, t * 2.2) + 11.0, seed + 3u, jd);
  float bendAmp = uBend * 8.0 * reachScale;
  float rippleAmp = uBend * 3.2 * reachScale;
  float crinkleAmp = uCrackle * 1.5 * reachScale;
  jac = ja * (0.028 * bendAmp) + jb * (0.085 * rippleAmp) + jc * (crinkleAmp / 9.0) + jd * (crinkleAmp * 0.35 / 4.1);
  sway = (a * bendAmp + b * rippleAmp) * uUnit;
  return sway + (c + d * 0.35) * crinkleAmp;
}

vec2 glowShape(float line, float spread, float w) {
  float x = abs(line);
  float y = abs(spread);
  return vec2(exp(-x * x / (w * w * 0.5)) + exp(-y / (w * 2.2)) * 0.6, exp(-y / (w * 4.5)) * 0.5);
}

void addArc(vec2 p, vec4 ends, vec4 info, float t, inout vec3 light, inout float energy, inout float hot) {
  if (info.y < 0.002) return;
  vec2 ab = ends.zw - ends.xy;
  float len = max(length(ab), 1.0);
  vec2 dir = ab / len;
  vec2 rel = p - ends.xy;
  float s = dot(rel, dir);
  float h = dot(rel, vec2(-dir.y, dir.x));
  float margin = abs(info.x) + uCrackle * (2.0 + len * 0.08) + uThickness * 12.0 + 10.0;
  if (s < -margin || s > len + margin || abs(h) > margin) return;
  float u = clamp(s / len, 0.0, 1.0);
  float taper = sin(3.14159265 * u);
  float bendSlope = s > 0.0 && s < len ? 3.14159265 / len * cos(3.14159265 * u) : 0.0;
  float beyond = max(-s, 0.0) + max(s - len, 0.0);
  for (int c = 0; c < 2; c++) {
    uint seed = uint(info.z * 131.0) + uint(c) * 29u + 7u;
    float jag = 0.0;
    float jagSlope = 0.0;
    float wave = max(len * 0.3, 14.0);
    float weight = uCrackle * (1.5 + len * 0.05) * (c == 0 ? 1.0 : 1.5);
    for (int o = 0; o < 3; o++) {
      mat2 jac;
      float n = drift(vec2(s / wave + info.z * 3.0, t * (1.4 + float(o) * 1.1)), seed + uint(o), jac).x;
      jag += n * weight;
      jagSlope += jac[0].x * weight / wave;
      wave *= 0.42;
      weight *= 0.4;
    }
    float offset = (info.x + jag) * taper;
    float offsetSlope = (info.x + jag) * bendSlope + jagSlope * taper;
    float across = (h - offset) / sqrt(1.0 + offsetSlope * offsetSlope);
    float gap = length(vec2(beyond, across));
    float w = uThickness * (c == 0 ? 0.9 : 0.6);
    vec2 g = glowShape(gap, gap, w);
    float k = info.y * (c == 0 ? 1.0 : 0.45);
    light += (uColor * g.x + uGlowColor * g.y * uGlow) * k;
    energy += (g.x + g.y * uGlow) * k;
    hot += exp(-gap * gap / (w * w * 0.16)) * k * (c == 0 ? 1.0 : 0.0);
  }
}

void main() {
  vec2 p = vec2(vUv.x, 1.0 - vUv.y) * uResolution;
  float t = uTime;
  vec3 light = vec3(0.0);
  float energy = 0.0;
  float hot = 0.0;

  float surge;
  vec2 pr = p - ripple(p, surge);
  float k = uMorph >= 1.0 ? 1.0 : smoothstep(0.0, 1.0, clamp(uMorph * 1.7 - 0.35 + 0.35 * wobble(p / uUnit * 0.018, 41u), 0.0, 1.0));
  float transit = uMorph >= 1.0 ? 0.0 : sin(3.14159265 * uMorph);
  float base = shape(pr, k);

  vec2 toHover = p - uHover.xy;
  float heat = min(uHover.z * exp(-dot(toHover, toHover) / (uHoverRadius * uHoverRadius)) + surge * 1.4 + transit * 0.5, 2.0);
  float heatCap = min(uHover.z + uPulseBoost * 1.4 + transit * 0.5, 2.0);
  float breath = 1.0 + uFlicker * 0.6 * wobble(vec2(t * 2.1, 7.0), 3u);
  float grow = uPresence;

  float edge = abs(base);
  vec2 halo = aura(pr, k);
  float ink = uInk;
  float bloom = (halo.x * 0.16 + halo.y * 0.08) * (1.0 - ink * 0.65) * uGlow * (1.0 + heat * 1.2);
  float body = smoothstep(0.75, -0.75, base) * uFill * (0.06 + 1.2 * min(halo.x, 1.0)) * (1.0 + heat * 0.5);
  light += uGlowColor * bloom * grow * grow;
  energy += bloom * grow * grow;

  float reachScale = mix(0.15, 1.0, grow) * (1.0 + heat * 0.9);
  float reach = (uUnit * uBend * 16.0 + uCrackle * 3.0) * (1.0 + heatCap * 0.9) + uThickness * 20.0 + 8.0;
  if (edge < reach && grow > 0.0) {
    float fade = smoothstep(reach, reach * 0.55, edge);
    vec2 q = pr / uUnit;
    float count = min(uStrands + heat * 2.5, 6.0);
    float limit = min(uStrands + heatCap * 2.5, 6.0);
    for (int i = 0; i < 6; i++) {
      float fi = float(i);
      if (fi >= limit) break;
      float present = clamp(count - fi, 0.0, 1.0);
      if (present <= 0.0) continue;
      uint seed = uint(i) * 7u + 3u;
      mat2 jac;
      vec2 sway;
      float lead = i == 0 ? 1.0 : 0.0;
      vec2 warped = pr + wander(pr, t * (1.0 + fi * 0.19), seed, reachScale * mix(0.6 + fi * 0.2, 0.7, lead), jac, sway);
      float dw = shape(warped, k);
      vec2 slope = vec2(shape(warped + vec2(1.0, 0.0), k), shape(warped + vec2(0.0, 1.0), k)) - dw;
      float d = dw / max(length(slope + jac * slope), 0.3);
      float spread = shape(pr + sway, k);
      float swell = 0.5 + 0.5 * wobble(q * 0.06 + vec2(t * 0.9, fi * 5.1 - t * 0.6), seed + 8u);
      float w = uThickness * mix(0.5, 1.0, lead) * (0.5 + swell);
      float vis = mix(0.3 + 0.45 * smoothstep(-0.25, 0.2, wobble(q * 0.035 + vec2(t * 0.21, fi * 3.7), seed + 5u)), 1.0, lead);
      float spark = 1.0 - uFlicker * 0.3 * (0.5 + 0.5 * wobble(vec2(t * 6.0, fi * 2.3), seed + 6u));
      float weight = max(vis, heat * 0.85) * spark * fade * present * (0.7 + 0.6 * swell);
      vec2 g = glowShape(d, spread, w) * weight;
      float soft = mix(1.0, mix(0.5, 1.0, lead), ink);
      vec3 stroke = mix(uColor, uGlowColor, ink * (1.0 - lead) * 0.65);
      float haze = uGlow * (1.0 + heat) * (1.0 - ink * 0.7);
      light += stroke * g.x * soft + uGlowColor * g.y * haze;
      energy += g.x * soft + g.y * haze;
      hot += exp(-d * d / (w * w * 0.16)) * lead * weight;
    }
    light *= grow;
    energy *= grow;
  }

  for (int i = 0; i < ${_e}; i++) addArc(pr, uArcEnds[i], uArcShape[i], t, light, energy, hot);

  float gain = uIntensity * breath * (1.0 + heat * 0.45) * (1.0 + uFlash * 0.3) * 1.4;
  float alpha = 1.0 - exp(-energy * gain);
  vec3 color = mix(1.0 - exp(-light * gain), alpha * light / max(energy, 1e-4), ink);
  color = mix(color, vec3(alpha), clamp(hot * grow, 0.0, 1.0) * ink * 0.85);
  float tint = (1.0 - exp(-body * gain * 1.2)) * grow * grow * (1.0 - ink * 0.82);
  color += uGlowColor * tint * (1.0 - alpha);
  alpha += tint * (1.0 - alpha);
  float grain = (fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715)))) - 0.5) / 255.0;
  alpha = clamp(alpha + grain, 0.0, 1.0);
  fragColor = vec4(clamp(color + grain, 0.0, alpha), alpha);
}
`,ki={src:Hr,color:"#ecc7ff",glowColor:"#ad6dff",scale:.7,intensity:1,glow:1,thickness:1.5,strands:4,bend:.6,crackle:1.5,arcs:1,flicker:.6,fill:0,speed:2.5,interactive:!0,cursorIntensity:.75,cursorRadius:100,theme:"dark",onRender:void 0};function $r(t,e={}){let r={...ki,...e},i={current:null},n=new De({dpr:Math.min(window.devicePixelRatio||1,2),alpha:!0,premultipliedAlpha:!0,antialias:!1}),s=n.gl;if(!n.isWebgl2)return s.getExtension("WEBGL_lose_context")?.loseContext(),null;let a=!0,l=T=>{let R=new Image;R.crossOrigin="anonymous",R.decoding="async",R.onload=()=>{if(!a)return;let W=null;try{W=Pi(R)}catch{W=null}W&&(i.current=W)},R.src=T||Hr};l(r.src),t.classList.add("electric-logo"),s.clearColor(0,0,0,0);let o=s.canvas;o.style.display="block",o.style.width="100%",o.style.height="100%",t.appendChild(o);let h=()=>({shape:null,field:new Ie(s,{image:new Float32Array([1e3]),width:1,height:1,internalFormat:s.R16F,format:s.RED,type:s.FLOAT,minFilter:s.LINEAR,magFilter:s.LINEAR,generateMipmaps:!1,flipY:!1,unpackAlignment:1}),glow:new Ie(s,{image:new Float32Array([0,0]),width:1,height:1,internalFormat:s.RG16F,format:s.RG,type:s.FLOAT,minFilter:s.LINEAR,magFilter:s.LINEAR,generateMipmaps:!1,flipY:!1,unpackAlignment:1})}),c=[h(),h()],p=Array.from({length:_e*4},()=>0),d=Array.from({length:_e*4},()=>0),f=Array.from({length:We*4},()=>0),u={tFieldFrom:{value:c[1].field},tGlowFrom:{value:c[1].glow},tFieldTo:{value:c[0].field},tGlowTo:{value:c[0].glow},uMapFrom:{value:[0,0,1,0]},uSizeFrom:{value:[1,1,1,1]},uMapTo:{value:[0,0,1,0]},uSizeTo:{value:[1,1,1,1]},uMorph:{value:1},uResolution:{value:[1,1]},uUnit:{value:1},uTime:{value:0},uPresence:{value:0},uHover:{value:[0,0,0]},uHoverRadius:{value:120},uPulses:{value:f},uPulseBoost:{value:0},uFlash:{value:0},uColor:{value:[1,1,1]},uGlowColor:{value:[.43,.48,1]},uIntensity:{value:1},uGlow:{value:1},uThickness:{value:1.8},uStrands:{value:3},uBend:{value:1},uCrackle:{value:1},uFlicker:{value:.4},uFill:{value:.5},uInk:{value:0},uArcEnds:{value:p},uArcShape:{value:d}},g=new Be(s,{geometry:new Ne(s),program:new Ue(s,{vertex:zi,fragment:Ii,uniforms:u,depthTest:!1,depthWrite:!1})}),m=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,v={x:0,y:0,over:!1},b={x:0,y:0,vx:0,vy:0,power:0},F=[],S=[],x=0,y=null,w=1,G=null,P=0,E=0,_=[[1,1,1],[1,1,1]],A=!1,O=0,M=1,D=1,Y=0,V=performance.now(),C=!0,z=(T,R)=>{T.shape=R,T.field.image=R.field,T.field.width=R.width,T.field.height=R.height,T.field.needsUpdate=!0,T.glow.image=R.glow,T.glow.width=R.glowWidth,T.glow.height=R.glowHeight,T.glow.needsUpdate=!0},q=(T,R)=>{let W=Math.max(1e-4,Math.min(M*R.scale/T.logoWidth,D*R.scale/T.logoHeight));return{fit:W,ox:M/2-(T.pad+T.logoWidth/2)*W,oy:D/2-(T.pad+T.logoHeight/2)*W,unit:Math.max(T.logoWidth,T.logoHeight)*W/100}},j=()=>{M=Math.max(1,t.clientWidth),D=Math.max(1,t.clientHeight),n.dpr=Math.min(window.devicePixelRatio||1,2,Math.sqrt(Ci/(M*D))),n.setSize(M,D),u.uResolution.value=[M,D]},B=T=>{Y=0;let R=r,W=Math.min(.05,Math.max(0,(T-V)/1e3));V=T;let le=i.current;le&&le!==c[x].shape&&(y=le),y&&w>=1&&(c[x].shape&&(x=1-x,w=0,F.length=0),z(c[x],y),y=null),w<1&&(w=Math.min(1,w+W/(y?.3:1.6)));let re=c[x].shape,ue=w<1?c[1-x].shape:null;re&&(P=Math.min(1,P+W/1.4));let I=P*P*(3-2*P);if(re&&R){let L=q(re,R),K=ue?q(ue,R):L,ae=w*w*(3-2*w),ce=K.unit+(L.unit-K.unit)*ae,he=R.interactive&&v.over;he&&b.power<.01&&(b.x=v.x,b.y=v.y,b.vx=0,b.vy=0),b.vx+=((v.x-b.x)*120-b.vx*19)*W,b.vy+=((v.y-b.y)*120-b.vy*19)*W,b.x+=b.vx*W,b.y+=b.vy*W,b.power+=((he?1:0)-b.power)*(1-Math.exp(-W/(he?.3:.55)));let se=m?.2:1;O+=W*R.speed*se;for(let H=F.length-1;H>=0;H--)O-F[H].born>F[H].life&&F.splice(H,1);let Q=H=>({x:(H.x-L.ox)/L.fit,y:(H.y-L.oy)/L.fit,radius:Math.max(1,R.cursorRadius)/L.fit});if(G&&w>=1&&R.arcs>0)for(let H=0;H<3&&F.length<_e;H++){let J=xt(re,O,Q(G));J&&F.push(J)}if(G=null,!m&&I>.8&&w>=1&&F.length<_e){let H=W*R.speed*R.arcs;if(Math.random()<H*6*b.power*R.cursorIntensity){let J=xt(re,O,Q(b));J&&F.push(J)}else if(Math.random()<H*2.2){let J=xt(re,O,null);J&&F.push(J)}}for(let H=0;H<_e;H++){let J=H*4,de=F[H];if(!de){d[J+1]=0;continue}let Me=(O-de.born)/de.life;p[J]=L.ox+de.ax*L.fit,p[J+1]=L.oy+de.ay*L.fit,p[J+2]=L.ox+de.bx*L.fit,p[J+3]=L.oy+de.by*L.fit,d[J]=de.bow*L.fit,d[J+1]=Math.sin(Math.PI*Math.min(1,Math.max(0,Me)))*I,d[J+2]=de.seed}let $=0,ie=0;for(let H=S.length-1;H>=0;H--)(T-S[H].born)/1e3>2&&S.splice(H,1);for(let H=0;H<We;H++){let J=H*4,de=S[H];if(!de){f[J+3]=0;continue}let Me=(T-de.born)/1e3;f[J]=de.x,f[J+1]=de.y,f[J+2]=Me,f[J+3]=1,$=Math.max($,Math.exp(-Me*1.7)),ie+=Math.exp(-Me*7)}let oe=c[1-x];u.tFieldTo.value=c[x].field,u.tGlowTo.value=c[x].glow,u.tFieldFrom.value=oe.field,u.tGlowFrom.value=oe.glow,u.uMapTo.value=[L.ox,L.oy,L.fit,re.glowOffset],u.uSizeTo.value=[re.width,re.height,re.glowWidth,re.glowHeight],ue&&(u.uMapFrom.value=[K.ox,K.oy,K.fit,ue.glowOffset],u.uSizeFrom.value=[ue.width,ue.height,ue.glowWidth,ue.glowHeight]),u.uMorph.value=w,u.uUnit.value=ce,u.uTime.value=O,u.uPresence.value=I,u.uHover.value=[b.x,b.y,b.power*Math.max(0,R.cursorIntensity)],u.uHoverRadius.value=Math.max(1,R.cursorRadius),u.uPulseBoost.value=$,u.uFlash.value=ie;let fe=[Nr(R.color),Nr(R.glowColor)],ge=A?1-Math.exp(-W/.35):1;A=!0;for(let H=0;H<2;H++)for(let J=0;J<3;J++)_[H][J]+=(fe[H][J]-_[H][J])*ge;u.uColor.value=_[0].slice(),u.uGlowColor.value=_[1].slice(),u.uIntensity.value=R.intensity,u.uGlow.value=R.glow,u.uThickness.value=R.thickness,u.uStrands.value=Math.max(1,Math.min(6,Math.round(R.strands))),u.uBend.value=R.bend,u.uCrackle.value=R.crackle,u.uFlicker.value=m?0:R.flicker,E+=((R.theme==="light"?1:0)-E)*(1-Math.exp(-W/.25)),u.uFill.value=R.fill,u.uInk.value=E,n.render({scene:g}),R.onRender?.(o)}C&&(Y=requestAnimationFrame(B))},te=()=>{Y||!C||(V=performance.now(),Y=requestAnimationFrame(B))},Z=T=>{let R=t.getBoundingClientRect();v.x=T.clientX-R.left,v.y=T.clientY-R.top,v.over=!0},ne=T=>{Z(T),!(!r.interactive||m)&&(S.push({x:v.x,y:v.y,born:performance.now()}),S.length>We&&S.shift(),G={x:v.x,y:v.y})},me=()=>{v.over=!1};t.addEventListener("pointermove",Z),t.addEventListener("pointerdown",ne),t.addEventListener("pointerleave",me),t.addEventListener("pointercancel",me);let X=new ResizeObserver(j);X.observe(t);let U=new IntersectionObserver(([T])=>{C=T.isIntersecting,te()});return U.observe(t),j(),te(),{update(T){let R=T.src&&T.src!==r.src;Object.assign(r,T),R&&l(r.src)},destroy(){a=!1,C=!1,cancelAnimationFrame(Y),X.disconnect(),U.disconnect(),t.removeEventListener("pointermove",Z),t.removeEventListener("pointerdown",ne),t.removeEventListener("pointerleave",me),t.removeEventListener("pointercancel",me),s.getExtension("WEBGL_lose_context")?.loseContext(),o.parentNode&&o.parentNode.removeChild(o)}}}var Yr=[0,90,180,270],Qr=Math.PI/2,Se=(t,e,r,i,n)=>{let a=n/2;for(let l=0;l<2;l++)t.v+=(r*(e-t.x)-i*t.v)*a,t.x+=t.v*a},Oi=t=>(t&&"current"in t?t.current:t)||null,Ui={targetSelector:".cursor-target",cursorColor:"#ffffff",cursorColorOnTarget:void 0,spinDuration:2,hoverDuration:.2,parallaxOn:!0,hideDefaultCursor:!0,size:36,cornerSize:12,thickness:3,padding:6,matchRadius:!0,dotSize:4,blendMode:"difference",showLabel:!0,clickEffect:!0,container:void 0},Di=t=>({...t,hoverDuration:Math.max(.05,t.hoverDuration),size:Math.max(4,t.size),cornerSize:Math.max(2,t.cornerSize),thickness:Math.max(.5,t.thickness),dotSize:Math.max(0,t.dotSize)});function jr(t={}){let e=Di({...Ui,...t}),r=window.matchMedia("(hover: hover) and (pointer: fine)"),i=null,n=()=>{let a=document.createElement("div");a.className="target-cursor",a.style.mixBlendMode=e.blendMode,a.style.opacity="0",a.setAttribute("aria-hidden","true");let l=Yr.map(()=>{let X=document.createElement("span");return X.className="target-cursor__corner",a.appendChild(X),X}),o=document.createElement("span");o.className="target-cursor__dot";let h=document.createElement("span");h.className="target-cursor__label",a.append(o,h),document.body.appendChild(a);let c=window.matchMedia("(prefers-reduced-motion: reduce)").matches,p=document.createElement("style");document.head.appendChild(p);let d={x:0,y:0,inside:!1,seen:!1,pressed:!1},f={x:0,v:0},u={x:0,v:0},g={x:0,v:0},m={x:0,v:0},v={x:0,v:0},b={x:0,v:0},F={x:0,v:0},S={x:0,v:0},x={x:0,v:0},y=null,w=0,G=0,P=0,E=0,_=0,A="",O="",M=null,D=()=>Oi(e.container),Y=()=>{let X=e,U=D();U!==M&&(M?.removeAttribute("data-target-cursor-scope"),U?.setAttribute("data-target-cursor-scope",""),M=U);let T=U?"[data-target-cursor-scope]":"html",R=X.hideDefaultCursor&&d.inside?`${T}, ${T} * { cursor: none !important; }`:"";p.textContent!==R&&(p.textContent=R)},V=(X,U,T)=>{let R=e,le=(T||document.elementFromPoint(X,U))?.closest?.(R.targetSelector)||null,re=D();return le&&re&&!re.contains(le)?null:le},C=X=>{if(X!==y&&(y=X,y)){let U=b.x;G=Math.round(U/Qr),w=parseFloat(getComputedStyle(y).borderTopLeftRadius)||0,P=0}},z=X=>{E=0;let U=e,T=_?Math.min(.05,(X-_)/1e3):1/60;_=X,y&&!y.isConnected&&C(null);let R=y?y.getBoundingClientRect():null,W=!!R&&d.inside,le=4.6/U.hoverDuration,re=le*le,ue=2*.62*le;Se(x,d.inside?1:0,260,32,T),Se(F,W?1:0,re,2*le,T),Se(S,d.pressed&&U.clickEffect?1:0,900,40,T);let I=d.x,L=d.y,K=U.size/2,ae=U.size/2,ce=Math.min(2,U.cornerSize/4);if(W){let ee=R.left+R.width/2,pe=R.top+R.height/2,ye=U.parallaxOn?.08:0;I=ee+(d.x-ee)*ye,L=pe+(d.y-pe)*ye;let Te=Math.abs(G)%2===1,Re=R.width/2+U.padding,Ce=R.height/2+U.padding;K=Te?Ce:Re,ae=Te?Re:Ce,ce=U.matchRadius?Math.min(w+Math.max(0,U.padding),U.cornerSize):0}!d.inside&&x.x<.01&&(d.seen=!1),d.seen||(f.x=I,u.x=L,g.x=K,m.x=ae,d.seen=d.inside);let he=W?re:2200,se=W?ue:2*Math.sqrt(2200);if(Se(f,I,he,se,T),Se(u,L,he,se,T),Se(g,K,re,ue,T),Se(m,ae,re,ue,T),Se(v,ce,re,2*le,T),W)Se(b,G*Qr,re,ue,T);else{let ee=U.spinDuration>0&&!c?Math.PI*2/U.spinDuration:0;P+=(ee-P)*(1-Math.exp(-T*3)),b.v=P,b.x+=P*T}let Q=1-S.x*.14,$=Math.cos(b.x),ie=Math.sin(b.x),oe=Math.max(0,g.x)*Q,fe=Math.max(0,m.x)*Q,ge=[[-oe,-fe],[oe,-fe],[oe,fe],[-oe,fe]],H=Math.max(0,Math.min(v.x,U.cornerSize)),J=b.x*180/Math.PI,de=1/0,Me=1/0;l.forEach((ee,pe)=>{let[ye,Te]=ge[pe],Re=f.x+ye*$-Te*ie,Ce=u.x+ye*ie+Te*$;de=Math.min(de,Re),Me=Math.min(Me,Ce),ee.style.transform=`translate3d(${Re.toFixed(2)}px, ${Ce.toFixed(2)}px, 0) rotate(${(Yr[pe]+J).toFixed(2)}deg)`,ee.style.width=`${U.cornerSize}px`,ee.style.height=`${U.cornerSize}px`,ee.style.borderWidth=`${U.thickness}px 0 0 ${U.thickness}px`,ee.style.borderTopLeftRadius=`${H.toFixed(2)}px`});let Ge=1-S.x*.35;o.style.transform=`translate3d(${d.x}px, ${d.y}px, 0) translate(-50%, -50%) scale(${Ge.toFixed(3)})`,o.style.width=`${U.dotSize}px`,o.style.height=`${U.dotSize}px`;let Fe=U.showLabel&&y&&y.getAttribute("data-cursor-label")||"";Fe&&Fe!==A&&(h.textContent=Fe),Fe&&(A=Fe);let ke=Fe?Math.max(0,Math.min(1,F.x)):0;h.style.transform=`translate3d(${de.toFixed(2)}px, ${(Me-8).toFixed(2)}px, 0) translateY(-100%) translateY(${((1-ke)*4).toFixed(2)}px)`,h.style.opacity=ke.toFixed(3);let Oe=U.cursorColorOnTarget?Math.round(Math.max(0,Math.min(1,F.x))*100):0,Pe=Oe?`color-mix(in oklab, ${U.cursorColorOnTarget} ${Oe}%, ${U.cursorColor})`:U.cursorColor;Pe!==O&&(a.style.setProperty("--target-cursor-color",Pe),O=Pe),a.style.opacity=Math.max(0,Math.min(1,x.x)).toFixed(3);let Xe=!d.inside&&x.x<.002&&Math.abs(x.v)<.002&&Math.abs(F.x)<.002&&Math.abs(S.x)<.002,k=d.inside&&!W&&P>1e-4,N=Math.abs(f.v)+Math.abs(u.v)+Math.abs(g.v)+Math.abs(m.v)+Math.abs(b.v)>.01||Math.abs(I-f.x)+Math.abs(L-u.x)>.05||Math.abs(F.v)+Math.abs(S.v)+Math.abs(x.v)>.001;!Xe&&(k||N||W)?E=requestAnimationFrame(z):_=0},q=()=>{E||(E=requestAnimationFrame(z))},j=(X,U,T)=>{let R=D();if(!R||T&&R.contains(T))return!0;let W=R.getBoundingClientRect();return X>=W.left&&X<=W.right&&U>=W.top&&U<=W.bottom},B=X=>{if(X.pointerType&&X.pointerType!=="mouse")return;d.x=X.clientX,d.y=X.clientY;let U=j(d.x,d.y,X.target);U!==d.inside&&(d.inside=U,Y()),C(U?V(d.x,d.y,X.target):null),q()},te=X=>{X.pointerType&&X.pointerType!=="mouse"||(d.pressed=!0,q())},Z=()=>{d.pressed=!1,q()},ne=()=>{d.inside=!1,d.pressed=!1,C(null),Y(),q()},me=()=>{d.inside&&(C(V(d.x,d.y)),q())};return window.addEventListener("pointermove",B,{passive:!0}),window.addEventListener("pointerdown",te,{passive:!0}),window.addEventListener("pointerup",Z,{passive:!0}),window.addEventListener("scroll",me,{passive:!0,capture:!0}),document.documentElement.addEventListener("pointerleave",ne),window.addEventListener("blur",ne),()=>{cancelAnimationFrame(E),window.removeEventListener("pointermove",B),window.removeEventListener("pointerdown",te),window.removeEventListener("pointerup",Z),window.removeEventListener("scroll",me,{capture:!0}),document.documentElement.removeEventListener("pointerleave",ne),window.removeEventListener("blur",ne),M?.removeAttribute("data-target-cursor-scope"),p.remove(),a.remove()}},s=()=>{r.matches&&!i?i=n():!r.matches&&i&&(i(),i=null)};return s(),r.addEventListener("change",s),()=>{r.removeEventListener("change",s),i?.(),i=null}}var Zr={linear:t=>t,bezier:t=>t*t*(3-2*t),"ease-in":t=>t*t,"ease-out":t=>1-(1-t)*(1-t),"ease-in-out":t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2},Kr={top:"to top",bottom:"to bottom",left:"to left",right:"to right"},ei=t=>Math.min(Math.max(t,0),1),Jr=t=>typeof t=="number"?`${t}px`:t,Bi=t=>typeof t=="number"?`${t}s`:t,Ni=(t,e,r,i)=>{if(t)return typeof t=="string"?document.querySelector(t):"current"in t?t.current:t;if(r==="page")return window;let n=e.parentElement;if(!n)return null;let s=l=>{let o=getComputedStyle(l);return/(auto|scroll|overlay)/.test(i?o.overflowY:o.overflowX)};return Array.from(n.children).find(l=>l!==e&&s(l))||(s(n)?n:null)},Vi={position:"bottom",target:"parent",height:"6rem",width:void 0,strength:2,layers:8,curve:"linear",exponential:!0,opacity:1,saturation:1,tint:"transparent",autoHide:!1,container:void 0,hoverIntensity:1,duration:.3,easing:"ease-out",zIndex:1e3,className:"",style:void 0},Wi=t=>{let e=Kr[t.position]?t.position:"bottom",r=Math.min(Math.max(Math.round(t.layers)||1,1),16),i=Zr[t.curve]||Zr.linear,n=Math.max(t.strength,0)*12,s=f=>{let u=i(ei(f));return n*(t.exponential?(Math.pow(2,4*u)-1)/15:u)},a=Math.pow(Math.max(t.saturation,0),1/r),l=`${Bi(t.duration)} ${t.easing}`,o=Kr[e],h=[];for(let f=0;f<r;f++){let u=s(f/r),g=s((f+1)/r),v=[`blur(calc(${Math.sqrt(Math.max(g*g-u*u,0)).toFixed(3)}px * var(--gradual-blur-reveal, 1) * var(--gradual-blur-hover, 1)))`,a!==1?`saturate(calc(1 + ${(a-1).toFixed(4)} * var(--gradual-blur-reveal, 1)))`:""].filter(Boolean).join(" "),b=`linear-gradient(${o}, transparent ${(f/r*100).toFixed(2)}%, #000 ${((f+1)/r*100).toFixed(2)}%)`;h.push({position:"absolute",inset:"0",borderRadius:"inherit",backdropFilter:v,webkitBackdropFilter:v,maskImage:b,webkitMaskImage:b,opacity:String(t.opacity),transition:`backdrop-filter ${l}, -webkit-backdrop-filter ${l}`})}let c=Array.from({length:9},(f,u)=>{let g=u/8,m=i(g);return`rgba(0, 0, 0, ${(m*m*m*(m*(m*6-15)+10)).toFixed(3)}) ${(g*100).toFixed(1)}%`}).join(", "),p=`linear-gradient(${o}, ${c})`,d=t.tint&&t.tint!=="transparent"?{position:"absolute",inset:"0",borderRadius:"inherit",background:t.tint,maskImage:p,webkitMaskImage:p,opacity:"calc(var(--gradual-blur-reveal, 1) * min(var(--gradual-blur-hover, 1), 1))",transition:`opacity ${l}`}:null;return{steps:h,wash:d,edge:e}};function ti(t,e={}){let r={...Vi,...e},{steps:i,wash:n,edge:s}=Wi(r),a=s==="top"||s==="bottom",l=[],o=document.createElement("div");o.className=`gradual-blur ${r.className}`.trim(),o.setAttribute("aria-hidden","true");for(let f of i){let u=document.createElement("div");Object.assign(u.style,f),o.appendChild(u)}if(n){let f=document.createElement("div");Object.assign(f.style,n),o.appendChild(f)}let h=Jr(a?r.height:r.width??r.height),c=a&&r.width!=null?Jr(r.width):null,p=r.target!=="page"&&!c,d=(f,u)=>p&&(s===f||s===u)?"inherit":"";if(Object.assign(o.style,{position:r.target==="page"?"fixed":"absolute",zIndex:String(r.zIndex),borderTopLeftRadius:d("top","left"),borderTopRightRadius:d("top","right"),borderBottomLeftRadius:d("bottom","left"),borderBottomRightRadius:d("bottom","right"),top:s==="bottom"?"":"0",bottom:s==="top"?"":"0",left:s==="right"?"":"0",right:s==="left"?"":"0",height:a?h:"",width:a?c??"":h,marginInline:c?"auto":"",...r.style||{}}),t.appendChild(o),r.autoHide){let f=Ni(r.container,o,r.target,a);if(f){let u=f instanceof Element?f:null,g=s==="top"||s==="left",m=()=>{let F=document.documentElement,S=u?a?u.scrollTop:u.scrollLeft:a?window.scrollY:window.scrollX,x=u?a?u.scrollHeight-u.clientHeight:u.scrollWidth-u.clientWidth:a?F.scrollHeight-window.innerHeight:F.scrollWidth-window.innerWidth,y=o.getBoundingClientRect(),w=Math.max(a?y.height:y.width,1),G=g?S:x-S;o.style.setProperty("--gradual-blur-reveal",ei(G/w).toFixed(3))};m();let v=u??window;v.addEventListener("scroll",m,{passive:!0}),window.addEventListener("resize",m);let b=u&&typeof ResizeObserver<"u"?new ResizeObserver(m):null;b&&u&&(b.observe(u),u.firstElementChild&&b.observe(u.firstElementChild)),l.push(()=>{v.removeEventListener("scroll",m),window.removeEventListener("resize",m),b?.disconnect()})}}if(r.hoverIntensity!==1){let f=0,u=!1,g=null,m=()=>{if(f=0,!g)return;let F=o.getBoundingClientRect(),S=g.x>=F.left&&g.x<=F.right&&g.y>=F.top&&g.y<=F.bottom;S!==u&&(u=S,o.style.setProperty("--gradual-blur-hover",u?String(Math.max(r.hoverIntensity,0)):"1"))},v=F=>{g={x:F.clientX,y:F.clientY},f||(f=requestAnimationFrame(m))},b=()=>{g=null,u=!1,o.style.setProperty("--gradual-blur-hover","1")};window.addEventListener("pointermove",v,{passive:!0}),document.documentElement.addEventListener("pointerleave",b),l.push(()=>{cancelAnimationFrame(f),window.removeEventListener("pointermove",v),document.documentElement.removeEventListener("pointerleave",b),o.style.removeProperty("--gradual-blur-hover")})}return()=>{l.forEach(f=>f()),o.remove()}}var qi=Math.PI*2,Gi=`#version 300 es
in vec2 aPosition;
void main() {
  gl_Position = vec4(aPosition, 0.0, 1.0);
}`,Xi=`#version 300 es
precision highp float;
uniform vec2 uCenter;
uniform vec2 uHalf;
uniform float uRadius;
uniform float uPx;
uniform float uSpot;
uniform vec2 uEntry;
uniform vec3 uLineColor;
uniform vec3 uBaseColor;
uniform float uIntensity;
uniform vec2 uWindow;
uniform float uThickness;
uniform float uGlow;
out vec4 outColor;

float roundedBox(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}

float loopPosition(vec2 p, vec2 b, float r) {
  vec2 inner = b - r;
  float arc = 1.5707963 * r;
  float quarter = inner.x + inner.y + arc;
  vec2 a = abs(p);
  vec2 q = a - inner;
  float s = q.x > 0.0 && q.y > 0.0
    ? inner.y + atan(q.y, q.x) * r
    : (q.x > q.y ? min(a.y, inner.y) : inner.y + arc + inner.x - min(a.x, inner.x));
  if (p.x < 0.0) s = p.y >= 0.0 ? 2.0 * quarter - s : 2.0 * quarter + s;
  else if (p.y < 0.0) s = 4.0 * quarter - s;
  return s / max(4.0 * quarter, 0.0001);
}

float lobe(float position, float center) {
  float gap = abs(fract(position - center + 0.5) - 0.5);
  return 1.0 - smoothstep(uWindow.x, uWindow.x + uWindow.y, gap);
}

void main() {
  vec2 p = gl_FragCoord.xy - uCenter;
  float d = roundedBox(p, uHalf, uRadius);
  float position = loopPosition(p, uHalf, uRadius);
  float key = lobe(position, uSpot);
  float back = lobe(position, uSpot + 0.5);
  float streak = key + back * 0.45;
  float width = max(uThickness * uPx * mix(1.0, max(key, back), 0.6), 0.35);
  float band = smoothstep(-width - 0.6, -width + 0.6, d) * (1.0 - smoothstep(-0.6, 0.6, d));
  float hair = smoothstep(-uPx - 0.6, -uPx + 0.6, d) * (1.0 - smoothstep(-0.6, 0.6, d));
  float inside = 1.0 - smoothstep(-0.6, 0.6, d);
  vec2 pool = (p - uEntry) / (uHalf.y * vec2(1.6, 1.1));
  float glow = streak * 0.2 * exp(-abs(d + width * 0.5) / (5.0 * uPx)) + inside * 0.08 * exp(-dot(pool, pool));
  float light = clamp((band * streak + glow * uGlow) * uIntensity, 0.0, 1.0);
  vec4 base = vec4(uBaseColor, 1.0) * hair * 0.6;
  outColor = vec4(uLineColor, 1.0) * light + base * (1.0 - light);
}`,Hi=["uCenter","uHalf","uRadius","uPx","uSpot","uEntry","uLineColor","uBaseColor","uIntensity","uWindow","uThickness","uGlow"],vt=(t,e,r)=>Math.min(r,Math.max(e,t)),qe=t=>t-Math.floor(t),ri=(t,e,r,i,n)=>{let s=r-n,a=i-n,l=Math.PI/2*n,o=s+a+l,h=Math.abs(t),c=Math.abs(e),p=h-s,d=c-a,f;return p>0&&d>0?f=a+Math.atan2(d,p)*n:p>d?f=Math.min(c,a):f=a+l+s-Math.min(h,s),t<0?f=e>=0?2*o-f:2*o+f:e<0&&(f=4*o-f),qe(f/Math.max(4*o,1e-4))},$i=(t,e,r,i)=>{let n=e-i,s=r-i,a=Math.PI/2*i,l=n+s+a,o=qe(t)*4*l,h=1,c=1;o>3*l?(o=4*l-o,c=-1):o>2*l?(o-=2*l,h=-1,c=-1):o>l&&(o=2*l-o,h=-1);let p=n-(o-s-a),d=r;if(o<=s)p=e,d=o;else if(o<=s+a){let f=(o-s)/Math.max(i,1e-4);p=n+Math.cos(f)*i,d=s+Math.sin(f)*i}return[p*h,d*c]},ii=(t,e,r)=>{let i=t.createShader(e);return i?(t.shaderSource(i,r),t.compileShader(i),t.getShaderParameter(i,t.COMPILE_STATUS)?i:(t.deleteShader(i),null)):null},Yi=t=>{let e=ii(t,t.VERTEX_SHADER,Gi),r=ii(t,t.FRAGMENT_SHADER,Xi),i=t.createProgram();return!e||!r||!i?null:(t.attachShader(i,e),t.attachShader(i,r),t.bindAttribLocation(i,0,"aPosition"),t.linkProgram(i),t.deleteShader(e),t.deleteShader(r),t.getProgramParameter(i,t.LINK_STATUS)?i:(t.deleteProgram(i),null))};function yt(t,e={}){let{radius:r=18,tint:i="#ffffff",tintOpacity:n=.04,blur:s=0,textColor:a="#f5f5f5",lineColor:l="#ffffff",baseColor:o="#525252",intensity:h=1,idleIntensity:c=.35,shineSize:p=10,shineFade:d=34,thickness:f=1.2,glow:u=1,speed:g=.35,followMouse:m=!0,proximity:v=250,autoAnimate:b=!1,disabled:F=!1}=e,S={radius:Math.max(0,r),lineColor:String(l),baseColor:String(o),intensity:Math.max(0,h),idleIntensity:vt(c,0,1),shineSize:Math.max(0,p),shineFade:Math.max(0,d),thickness:Math.max(0,f),glow:Math.max(0,u),speed:g,followMouse:m,proximity:Math.max(1,v),autoAnimate:b,disabled:F};t.classList.add("specular-button"),t.style.setProperty("--sb-radius",`${r}px`),t.style.setProperty("--sb-tint",i),t.style.setProperty("--sb-tint-opacity",String(n)),t.style.setProperty("--sb-blur",`${s}px`),t.style.setProperty("--sb-text-color",a);let x=document.createElement("span");x.className="specular-button__label",x.append(...t.childNodes);let y=document.createElement("canvas");y.className="specular-button__light",y.setAttribute("aria-hidden","true"),t.append(y,x);let w=y.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1});if(!w)return null;let G=Yi(w);if(!G)return null;let P={};for(let I of Hi)P[I]=w.getUniformLocation(G,I);let E=w.createBuffer(),_=w.createVertexArray();w.bindVertexArray(_),w.bindBuffer(w.ARRAY_BUFFER,E),w.bufferData(w.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),w.STATIC_DRAW),w.enableVertexAttribArray(0),w.vertexAttribPointer(0,2,w.FLOAT,!1,0,0),w.bindVertexArray(null);let A=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),O=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,M=new Map,D={width:1,height:1,ratio:1},Y={x:0,y:0,known:!1},V={spot:0,level:0,press:0,ready:!1},C=0,z=0,q=!0,j=I=>{if(M.has(I))return M.get(I);let L=[1,1,1];if(A){A.clearRect(0,0,1,1),A.fillStyle="#000000",A.fillStyle=I,A.fillRect(0,0,1,1);let[K,ae,ce]=A.getImageData(0,0,1,1).data;L=[K/255,ae/255,ce/255]}return M.set(I,L),L},B=I=>Math.min(I.radius,D.width/2,D.height/2),te=I=>{let L=B(I),K=L*(1-Math.SQRT1_2);return ri(K-D.width/2,D.height/2-K,D.width/2,D.height/2,L)},Z=I=>{if(!I.followMouse||I.disabled||!Y.known)return null;let L=t.getBoundingClientRect(),K=L.width/D.width||1,ae=D.width/2,ce=D.height/2,he=(Y.x-L.left-L.width/2)/K,se=(L.top+L.height/2-Y.y)/K,Q=Math.hypot(Math.max(Math.abs(he)-ae,0),Math.max(Math.abs(se)-ce,0)),$=vt(1-Q/I.proximity,0,1),ie=$*$*(3-2*$),oe=ri(he,se,ae,ce,B(I));if(Q>0)return{spot:oe,near:ie};let fe=vt(Math.min(ae-Math.abs(he),ce-Math.abs(se))/(ce*.8),0,1),ge=te(I)-he/ae*.06-se/ce*.02,H=ge-oe-Math.round(ge-oe);return{spot:qe(oe+H*fe*fe*(3-2*fe)),near:ie}},ne=I=>{let{width:L,height:K}=D,ae=y.width/(L+24*2),ce=y.height/(K+24*2);w.viewport(0,0,y.width,y.height),w.clearColor(0,0,0,0),w.clear(w.COLOR_BUFFER_BIT),w.useProgram(G),w.uniform2f(P.uCenter,(24+L/2)*ae,(24+K/2)*ce),w.uniform2f(P.uHalf,L/2*ae,K/2*ce),w.uniform1f(P.uRadius,Math.min(I.radius,L/2,K/2)*ae),w.uniform1f(P.uPx,D.ratio);let he=Math.min(I.radius,L/2,K/2),[se,Q]=$i(V.spot,L/2,K/2,he),$=1-Math.min(.35*(K/2),Math.hypot(se,Q))/Math.max(Math.hypot(se,Q),1e-4);w.uniform1f(P.uSpot,V.spot),w.uniform2f(P.uEntry,se*$*ae,Q*$*ce),w.uniform3fv(P.uLineColor,j(I.lineColor)),w.uniform3fv(P.uBaseColor,j(I.baseColor)),w.uniform1f(P.uIntensity,I.intensity*(V.level+V.press*.8)),w.uniform2f(P.uWindow,I.shineSize/360+V.press*.06,I.shineFade/360+1e-4),w.uniform1f(P.uThickness,I.thickness),w.uniform1f(P.uGlow,I.glow),w.bindVertexArray(_),w.drawArrays(w.TRIANGLES,0,3),w.bindVertexArray(null)},me=I=>{if(C=0,!q)return;let L=S,K=z?Math.min(.05,(I-z)/1e3):1/60;z=I;let ae=Z(L),ce=L.autoAnimate&&!O,he=!!ae&&ae.near>0;V.ready||(V.spot=te(L),V.level=L.autoAnimate?1:L.idleIntensity,V.ready=!0);let se=0;ce&&!he?V.spot=qe(V.spot+L.speed/qi*K):(se=(he?ae.spot:te(L))-V.spot,se-=Math.round(se),V.spot=qe(V.spot+se*(1-Math.exp(-K*8))));let Q=L.autoAnimate?1:L.idleIntensity+(1-L.idleIntensity)*(ae?ae.near:0);V.level+=(Q-V.level)*(1-Math.exp(-K*7)),V.press*=Math.exp(-K*5),ne(L),Math.abs(se)>2e-4||Math.abs(Q-V.level)>.001||V.press>.002||ce&&!he?C=requestAnimationFrame(me):z=0},X=()=>{!C&&q&&(C=requestAnimationFrame(me))},U=I=>{let L=I?.borderBoxSize?.[0];D.width=Math.max(1,L?L.inlineSize:t.offsetWidth),D.height=Math.max(1,L?L.blockSize:t.offsetHeight),D.ratio=Math.min(window.devicePixelRatio||1,3),y.width=Math.max(1,Math.round((D.width+24*2)*D.ratio)),y.height=Math.max(1,Math.round((D.height+24*2)*D.ratio)),V.ready&&ne(S),X()},T=I=>{Y.x=I.clientX,Y.y=I.clientY,Y.known=!0,X()},R=I=>{Y.x=I.clientX,Y.y=I.clientY,Y.known=!0,S.disabled||(V.press=1),X()},W=I=>{I.pointerType!=="mouse"&&(Y.known=!1,X())},le=()=>{Y.known=!1,X()},re=new ResizeObserver(I=>U(I[I.length-1]));re.observe(t);let ue=new IntersectionObserver(I=>{q=I.some(L=>L.isIntersecting),q&&(z=0,X())});return ue.observe(t),window.addEventListener("pointermove",T,{passive:!0}),window.addEventListener("pointerup",W,{passive:!0}),window.addEventListener("pointercancel",W,{passive:!0}),document.documentElement.addEventListener("pointerleave",le),t.addEventListener("pointerdown",R),U(),()=>{cancelAnimationFrame(C),re.disconnect(),ue.disconnect(),window.removeEventListener("pointermove",T),window.removeEventListener("pointerup",W),window.removeEventListener("pointercancel",W),document.documentElement.removeEventListener("pointerleave",le),t.removeEventListener("pointerdown",R),w.deleteBuffer(E),w.deleteVertexArray(_),w.deleteProgram(G),w.getExtension("WEBGL_lose_context")?.loseContext()}}var Qi={dark:{"--rc-base":"#1d1c22","--rc-shadow":"0 22px 44px -20px rgba(0, 0, 0, 0.8), 0 6px 16px -8px rgba(0, 0, 0, 0.5)","--rc-ink":"#f4f4f5","--rc-muted":"rgba(244, 244, 245, 0.6)","--rc-tile":"linear-gradient(180deg, #3a3644 0%, #27242f 100%)","--rc-tile-edge":"rgba(255, 255, 255, 0.07)","--rc-tile-highlight":"rgba(255, 255, 255, 0.12)","--rc-tile-shadow":"0 4px 10px -4px rgba(0, 0, 0, 0.7)","--rc-rim":"rgba(255, 255, 255, 0.07)","--rc-rim-highlight":"rgba(255, 255, 255, 0.1)"},light:{"--rc-base":"#e7e7ea","--rc-shadow":"0 22px 44px -22px rgba(24, 24, 27, 0.3), 0 6px 16px -10px rgba(24, 24, 27, 0.16)","--rc-ink":"#18181b","--rc-muted":"rgba(24, 24, 27, 0.6)","--rc-tile":"linear-gradient(180deg, #ffffff 0%, #f6f6f8 100%)","--rc-tile-edge":"rgba(24, 24, 27, 0.08)","--rc-tile-highlight":"rgba(255, 255, 255, 1)","--rc-tile-shadow":"0 4px 10px -5px rgba(24, 24, 27, 0.25)","--rc-rim":"rgba(24, 24, 27, 0.08)","--rc-rim-highlight":"rgba(255, 255, 255, 0.8)"}},ji=900,Mt=1.2,Zi=1400,Ki=.35,Ji=`#version 300 es
in vec2 aPosition;
out vec2 vUv;
void main() {
  vUv = aPosition * 0.5 + 0.5;
  gl_Position = vec4(aPosition, 0.0, 1.0);
}`,en=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D uVideo;
uniform sampler2D uCam;
uniform vec4 uVideoMap;
uniform vec4 uCamMap;
uniform vec2 uWeights;
uniform vec2 uLod;
float level(sampler2D source) {
  vec3 mean = pow(textureLod(source, vec2(0.5), 14.0).rgb, vec3(2.2));
  return pow(dot(mean, vec3(0.2126, 0.7152, 0.0722)), 1.0 / 2.2);
}
void main() {
  vec3 color = vec3(0.0);
  float mean = 0.0;
  if (uWeights.x > 0.0) {
    color += textureLod(uVideo, vUv * uVideoMap.xy + uVideoMap.zw, uLod.x).rgb * uWeights.x;
    mean += level(uVideo) * uWeights.x;
  }
  if (uWeights.y > 0.0) {
    color += textureLod(uCam, vUv * uCamMap.xy + uCamMap.zw, uLod.y).rgb * uWeights.y;
    mean += level(uCam) * uWeights.y;
  }
  fragColor = vec4(color, mean);
}`,tn=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D uTexture;
uniform vec2 uStep;
uniform float uSigma;
void main() {
  vec4 sum = texture(uTexture, vUv);
  if (uSigma < 0.35) {
    fragColor = sum;
    return;
  }
  float falloff = -0.5 / (uSigma * uSigma);
  int radius = int(min(ceil(uSigma * 2.8), 40.0));
  float total = 1.0;
  for (int i = 1; i <= 40; i++) {
    if (i > radius) break;
    float offset = float(i);
    float weight = exp(offset * offset * falloff);
    sum += (texture(uTexture, vUv + uStep * offset) + texture(uTexture, vUv - uStep * offset)) * weight;
    total += 2.0 * weight;
  }
  fragColor = sum / total;
}`,rn=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;

uniform sampler2D uEnv;
uniform vec2 uEnvSize;
uniform vec2 uSize;
uniform float uRadius;
uniform float uScale;
uniform mat3 uRotate;
uniform float uCapture;
uniform float uBlur;
uniform float uRough;
uniform float uMetal;
uniform vec3 uTint;
uniform float uGray;
uniform float uWarp;
uniform float uWarpScale;
uniform float uShine;
uniform float uBevel;
uniform float uGlare;
uniform vec2 uPointer;
uniform float uTheme;

const float VIEW = ${ji.toFixed(1)};
const float OVERSCAN = ${Mt.toFixed(2)};
const float CONTENT = 46.0;

float hash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

vec2 hash2(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.103, 0.0973));
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.xx + p3.yz) * p3.zy) * 2.0 - 1.0;
}

vec3 gradientNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  vec2 du = 30.0 * f * f * (f * (f - 2.0) + 1.0);
  vec2 ga = hash2(i);
  vec2 gb = hash2(i + vec2(1.0, 0.0));
  vec2 gc = hash2(i + vec2(0.0, 1.0));
  vec2 gd = hash2(i + vec2(1.0, 1.0));
  float va = dot(ga, f);
  float vb = dot(gb, f - vec2(1.0, 0.0));
  float vc = dot(gc, f - vec2(0.0, 1.0));
  float vd = dot(gd, f - vec2(1.0, 1.0));
  float k = va - vb - vc + vd;
  float value = va + u.x * (vb - va) + u.y * (vc - va) + u.x * u.y * k;
  vec2 slope = ga + u.x * (gb - ga) + u.y * (gc - ga) + u.x * u.y * (ga - gb - gc + gd) + du * (u.yx * k + vec2(vb, vc) - va);
  return vec3(value, slope);
}

float valueNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float erf(float x) {
  float x2 = x * x;
  return sign(x) * sqrt(1.0 - exp(-x2 * (1.2732395 + 0.147 * x2) / (1.0 + 0.147 * x2)));
}

float band(float x, float halfWidth, float sigma) {
  float s = 1.4142136 * max(sigma, 0.0001);
  return 0.5 * (erf((x + halfWidth) / s) - erf((x - halfWidth) / s));
}

float strip(vec2 q, vec2 center, vec2 dir, float halfWidth, vec2 sigma) {
  vec2 normal = vec2(-dir.y, dir.x);
  return band(dot(q - center, normal), halfWidth, length(sigma * normal));
}

const vec2 SWEEP = vec2(0.5, 0.86);
const vec3 LUMA = vec3(0.2126, 0.7152, 0.0722);

float softbox(vec2 q, vec2 sigma) {
  float key = strip(q, vec2(-0.1, -0.16), normalize(SWEEP), 0.022, sigma + 0.018);
  float top = band(q.y + 0.6, 0.12, sigma.y + 0.05);
  float side = band(q.x - 0.46, 0.05, sigma.x + 0.05);
  return key + top * 0.8 + side * 0.35;
}

float room(vec2 q, vec2 sigma) {
  float fall = smoothstep(-0.55, 0.5, q.y);
  float flag = strip(q, vec2(0.24, -0.02), normalize(SWEEP), 0.09, sigma + 0.08);
  return mix(0.85, 0.12, fall) * (1.0 - 0.6 * flag);
}

vec4 sampleEnv(vec2 uv) {
  vec2 st = uv * uEnvSize - 0.5;
  vec2 i = floor(st);
  vec2 f = st - i;
  vec2 f2 = f * f;
  vec2 f3 = f2 * f;
  vec2 w0 = (1.0 - 3.0 * f + 3.0 * f2 - f3) / 6.0;
  vec2 w1 = (4.0 - 6.0 * f2 + 3.0 * f3) / 6.0;
  vec2 w2 = (1.0 + 3.0 * f + 3.0 * f2 - 3.0 * f3) / 6.0;
  vec2 w3 = f3 / 6.0;
  vec2 g0 = w0 + w1;
  vec2 g1 = w2 + w3;
  vec2 c0 = (i + 0.5 + w1 / g0 - 1.0) / uEnvSize;
  vec2 c1 = (i + 0.5 + w3 / g1 + 1.0) / uEnvSize;
  vec4 a = texture(uEnv, c0) * g0.x + texture(uEnv, vec2(c1.x, c0.y)) * g1.x;
  vec4 b = texture(uEnv, vec2(c0.x, c1.y)) * g0.x + texture(uEnv, c1) * g1.x;
  return a * g0.y + b * g1.y;
}

vec3 toLinear(vec3 c) {
  return pow(max(c, 0.0), vec3(2.2));
}

void main() {
  vec2 p = vec2(vUv.x - 0.5, 0.5 - vUv.y) * uSize;
  vec2 halfSize = uSize * 0.5;
  float r = min(uRadius, min(halfSize.x, halfSize.y));
  vec2 corner = abs(p) - halfSize + r;
  vec2 side = vec2(p.x >= 0.0 ? 1.0 : -1.0, p.y >= 0.0 ? 1.0 : -1.0);
  float d;
  vec2 outward;
  if (corner.x > 0.0 && corner.y > 0.0) {
    d = length(corner) - r;
    outward = normalize(corner) * side;
  } else if (corner.x > corner.y) {
    d = corner.x - r;
    outward = vec2(side.x, 0.0);
  } else {
    d = corner.y - r;
    outward = vec2(0.0, side.y);
  }
  float coverage = clamp(0.5 - d * uScale, 0.0, 1.0);

  float chamferWidth = min(uBevel, max(r, 1.0));
  float chamfer = chamferWidth > 0.01 ? 1.0 - smoothstep(0.0, chamferWidth, -d) : 0.0;
  vec2 slope = outward * chamfer;

  vec2 wp = p / (220.0 * uWarpScale);
  vec3 w1 = gradientNoise(wp);
  vec3 w2 = gradientNoise(wp * 2.07 + 13.7);
  vec2 ripple = (w1.yz + w2.yz * 0.5) * uWarp;
  slope += ripple * 0.008;

  float grain = valueNoise(vec2(p.x * 0.008, p.y * 0.55)) * 0.45 + valueNoise(vec2(p.x * 0.019 + 3.7, p.y * 0.23)) * 0.35 + valueNoise(vec2(p.x * 0.004 + 9.2, p.y * 0.09)) * 0.2;
  float brush = uRough * uRough;
  slope.y += (grain - 0.5) * brush * 0.004;

  vec3 normal = uRotate * normalize(vec3(slope, 1.0));
  vec3 position = uRotate * vec3(p, 0.0);
  vec3 view = normalize(position - vec3(0.0, 0.0, VIEW));
  vec3 bounce = reflect(view, normal);
  vec2 q = bounce.xy / max(bounce.z, 0.2);

  vec2 footprint = fwidth(q);
  vec2 sigma = sqrt(vec2(uBlur / VIEW) * vec2(uBlur / VIEW) + footprint * footprint * 0.5);
  sigma += vec2(0.004, 0.05) * uRough;

  vec2 shift = clamp((q - p / VIEW) * CONTENT + ripple * 10.0, -uSize, uSize);
  vec2 cp = (p + shift) / (uSize * OVERSCAN);
  vec4 reflected = uCapture > 0.0 ? sampleEnv(vec2(0.5 + cp.x, 0.5 - cp.y)) : vec4(0.0, 0.0, 0.0, 1.0);
  vec3 captured = toLinear(reflected.rgb) * (0.5 / max(pow(reflected.a, 2.2), 0.02));
  captured = mix(vec3(dot(captured, LUMA)), captured, 1.0 - uGray);
  captured = pow(max(captured * 1.2, 0.0), vec3(mix(2.0, 1.5, uTheme)));

  vec3 scene = mix(vec3(room(q, sigma)), captured, uCapture * (1.0 - chamfer) * mix(1.0, 0.6, uTheme));
  scene *= 1.0 + (grain - 0.5) * brush * 0.3;

  vec2 toPointer = (uPointer - p) / (120.0 + uBlur * 4.0);
  vec2 spread = toPointer * vec2(1.0, 1.0 / (1.0 + 2.5 * uRough));
  float reach = dot(spread, spread);
  float glint = max(1.0 + 3.0 * dot(slope, toPointer), 0.0);
  float glare = (exp(-reach * 1.6) + exp(-reach * 0.35) * 0.15) * glint * uGlare * (1.0 + 0.8 * (grain - 0.5) * brush);
  float highlight = (softbox(q, sigma) * uShine + glare) * mix(0.4, 1.0, uMetal);

  vec3 dark = vec3(0.005, 0.005, 0.006) + uTint * (scene * 0.05 * uMetal + highlight * 0.36);
  vec3 light = uTint * (vec3(0.83, 0.83, 0.85) * (1.0 - 0.45 * uMetal * (1.0 - clamp(scene, 0.0, 1.0))) + highlight * 0.35);
  vec3 color = mix(dark, light, uTheme);
  color = min(color, 0.7) + 0.3 * (1.0 - exp(-max(color - 0.7, 0.0) / 0.3));
  color = pow(clamp(color, 0.0, 1.0), vec3(1.0 / 2.2));

  color += (hash(gl_FragCoord.xy) - 0.5) / 255.0;
  color = clamp(color, 0.0, 1.0);
  fragColor = vec4(color * coverage, coverage);
}`,xe=(t,e,r)=>Math.min(r,Math.max(e,t)),ni=t=>typeof t=="number"?`${t}px`:t,nn=t=>{let e=String(t||"").trim(),r=/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(e);if(r){let n=r[1].length===3?r[1].replace(/./g,s=>s+s):r[1];return[0,2,4].map(s=>parseInt(n.slice(s,s+2),16)/255)}let i=/^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)/i.exec(e);return i?[i[1],i[2],i[3]].map(n=>xe(parseFloat(n)/255,0,1)):[1,1,1]},si=(t,e,r)=>{let i=t.createShader(e);return i?(t.shaderSource(i,r),t.compileShader(i),t.getShaderParameter(i,t.COMPILE_STATUS)?i:(console.error(t.getShaderInfoLog(i)),t.deleteShader(i),null)):null},wt=(t,e)=>{let r=si(t,t.VERTEX_SHADER,Ji),i=si(t,t.FRAGMENT_SHADER,e),n=r&&i?t.createProgram():null;if(!r||!i||!n)return r&&t.deleteShader(r),i&&t.deleteShader(i),null;if(t.attachShader(n,r),t.attachShader(n,i),t.bindAttribLocation(n,0,"aPosition"),t.linkProgram(n),t.deleteShader(r),t.deleteShader(i),!t.getProgramParameter(n,t.LINK_STATUS))return console.error(t.getProgramInfoLog(n)),t.deleteProgram(n),null;let s={},a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let l=0;l<a;l++){let o=t.getActiveUniform(n,l);o&&(s[o.name]=t.getUniformLocation(n,o.name))}return{program:n,uniforms:s}},ai=(t,e,r,i)=>{let n=t/Math.max(1,e),s=n>r?r/n:1,a=n>r?1:n/r,l=i?-s:s;return[l,-a,.5-l*.5,.5+a*.5]},oi=(t,e,r,i)=>{let n=t/Math.max(1,e),s=t*(n>i?i/n:1);return Math.max(0,Math.log2(Math.max(1,s/Math.max(1,r)))-.5)},sn=t=>{let e=t.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1,powerPreference:"default"});if(!e)return null;let r=wt(e,en),i=wt(e,tn),n=wt(e,rn);if(!r||!i||!n){for(let x of[r,i,n])x&&e.deleteProgram(x.program);return null}let s=(x,y)=>{let w=e.createTexture();return e.bindTexture(e.TEXTURE_2D,w),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,x?e.LINEAR_MIPMAP_LINEAR:e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,y),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,y),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([0,0,0,255])),w},a=()=>{let x=s(!1,e.MIRRORED_REPEAT),y=e.createFramebuffer();return e.bindFramebuffer(e.FRAMEBUFFER,y),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,x,0),e.bindFramebuffer(e.FRAMEBUFFER,null),{texture:x,framebuffer:y,width:1,height:1}},l=(x,y,w)=>{x.width===y&&x.height===w||(x.width=y,x.height=w,e.bindTexture(e.TEXTURE_2D,x.texture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,y,w,0,e.RGBA,e.UNSIGNED_BYTE,null))},o=e.createVertexArray();e.bindVertexArray(o);let h=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,h),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.disable(e.BLEND),e.disable(e.DEPTH_TEST);let c={video:s(!0,e.CLAMP_TO_EDGE),cam:s(!0,e.CLAMP_TO_EDGE)},p=a(),d=a(),f=a(),u=new Float32Array(9),g=(x,y)=>(e.bindFramebuffer(e.FRAMEBUFFER,x?x.framebuffer:null),e.viewport(0,0,x?x.width:t.width,x?x.height:t.height),e.useProgram(y.program),y.uniforms),m=(x,y)=>{e.activeTexture(e.TEXTURE0+x),e.bindTexture(e.TEXTURE_2D,y)};return{upload:(x,y)=>{try{return e.bindTexture(e.TEXTURE_2D,c[x]),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,y),e.generateMipmap(e.TEXTURE_2D),!0}catch{return!1}},renderEnv:({width:x,height:y,scale:w,blur:G,roughness:P,video:E,cam:_})=>{let A=xe(2.5/Math.max(G,.01),.12,w),O=Math.max(8,Math.ceil(x*Mt*A)),M=Math.max(8,Math.ceil(y*Mt*A));l(p,O,M),l(d,O,M),l(f,O,M);let D=x/Math.max(1,y),Y=1-(1-E.mix)*(1-_.mix),V=Y>0?_.mix/Y:0,C=g(p,r);m(0,c.video),m(1,c.cam),e.uniform1i(C.uVideo,0),e.uniform1i(C.uCam,1),e.uniform4fv(C.uVideoMap,E.ready?ai(E.width,E.height,D,!1):[1,1,0,0]),e.uniform4fv(C.uCamMap,_.ready?ai(_.width,_.height,D,!0):[1,1,0,0]),e.uniform2f(C.uWeights,E.ready&&Y>0?1-V:0,_.ready?V:0),e.uniform2f(C.uLod,E.ready?oi(E.width,E.height,O,D):0,_.ready?oi(_.width,_.height,O,D):0),e.drawArrays(e.TRIANGLES,0,3),C=g(d,i),m(0,p.texture),e.uniform1i(C.uTexture,0),e.uniform2f(C.uStep,1/O,0),e.uniform1f(C.uSigma,G*A),e.drawArrays(e.TRIANGLES,0,3),C=g(f,i),m(0,d.texture),e.uniform1i(C.uTexture,0),e.uniform2f(C.uStep,0,1/M),e.uniform1f(C.uSigma,(G*(1+1.5*P)+10*P)*A),e.drawArrays(e.TRIANGLES,0,3)},renderPlate:({width:x,height:y,rotateX:w,rotateY:G,capture:P,glare:E,pointerX:_,pointerY:A,settings:O})=>{let M=Math.cos(w),D=Math.sin(w),Y=Math.cos(G),V=Math.sin(G);u.set([Y,D*V,-M*V,0,M,D,V,-D*Y,M*Y]);let C=g(null,n);m(0,f.texture),e.uniform1i(C.uEnv,0),e.uniform2f(C.uEnvSize,f.width,f.height),e.uniform2f(C.uSize,x,y),e.uniform1f(C.uRadius,O.radius),e.uniform1f(C.uScale,t.width/Math.max(1,x)),e.uniformMatrix3fv(C.uRotate,!1,u),e.uniform1f(C.uCapture,P),e.uniform1f(C.uBlur,O.blurStrength),e.uniform1f(C.uRough,O.roughness),e.uniform1f(C.uMetal,O.metalness),e.uniform3fv(C.uTint,O.tint),e.uniform1f(C.uGray,O.grayscale),e.uniform1f(C.uWarp,O.warp),e.uniform1f(C.uWarpScale,O.warpScale),e.uniform1f(C.uShine,O.shine),e.uniform1f(C.uBevel,O.bevel),e.uniform1f(C.uGlare,E),e.uniform2f(C.uPointer,_,A),e.uniform1f(C.uTheme,O.theme),e.drawArrays(e.TRIANGLES,0,3)},dispose:()=>{if(!e.isContextLost()){for(let x of[p,d,f])e.deleteFramebuffer(x.framebuffer),e.deleteTexture(x.texture);e.deleteTexture(c.video),e.deleteTexture(c.cam),e.deleteBuffer(h),e.deleteVertexArray(o);for(let x of[r,i,n])e.deleteProgram(x.program)}}}};function li(t,e={}){let{theme:r="dark",videoSrc:i,tint:n="#ffffff",metalness:s=1,roughness:a=.3,blurStrength:l=6,grayscale:o=1,warp:h=.6,warpScale:c=1,shine:p=1,bevel:d=3,glare:f=.5,enableTilt:u=!0,tiltStrength:g=12,intro:m=!0,width:v=320,height:b=500,radius:F=24}=e,S=r==="light"?"light":"dark",x={tint:nn(n).map(k=>Math.pow(k,2.2)),metalness:xe(s,0,1),roughness:xe(a,0,1),blurStrength:xe(l,0,40),grayscale:xe(o,0,1),warp:xe(h,0,2),warpScale:xe(c,.2,4),shine:xe(p,0,3),bevel:xe(d,0,16),glare:xe(f,0,1),enableTilt:u,tiltStrength:xe(g,0,30),radius:Math.max(0,F),theme:S==="light"?1:0,intro:m},y={current:x},w=Math.max(0,F),G={...Qi[S],"--rc-width":ni(v),"--rc-height":ni(b),"--rc-radius":`${w}px`,"--rc-pad":`${Math.round(xe(w*.8,16,22))}px`,"--rc-tile-radius":`${Math.round(xe(w*.5,8,14))}px`};t.classList.add("reflective-card");for(let[k,N]of Object.entries(G))t.style.setProperty(k,N);let P=document.createElement("div");P.className="reflective-card__body";let E=document.createElement("canvas");E.className="reflective-card__canvas",E.setAttribute("aria-hidden","true");let _=document.createElement("div");_.className="reflective-card__content",_.append(...t.childNodes);let A=document.createElement("span");A.className="reflective-card__rim",P.append(E,_,A);let O=()=>{let k=document.createElement("video");return k.className="reflective-card__media",k.muted=!0,k.playsInline=!0,k.setAttribute("aria-hidden","true"),k},M=O();M.loop=!0,M.crossOrigin="anonymous";let D=O();t.append(P,M,D);let Y=window.matchMedia("(prefers-reduced-motion: reduce)").matches;x.intro&&!Y&&(t.style.setProperty("--rc-presence","0"),t.style.setProperty("--rc-lift","14px"));let V=sn(E),C={p:0,v:0,target:0},z={p:0,v:0,target:0},q={p:0,target:0},j={x:0,y:0},B={width:P.offsetWidth,height:P.offsetHeight,scale:1},te=k=>({element:k,src:"",time:-1,ready:!1,failed:!1,width:0,height:0,mix:0}),Z={video:te(M),cam:te(D)},ne=1,me=0,X=0,U=null,T=0,R=0,W=!0,le=document.visibilityState!=="hidden",re=!1,ue="",I=!1,L=()=>{let{enableTilt:k,tiltStrength:N}=y.current,ee=k&&!Y?N:0,pe=t.style;pe.setProperty("--rc-rotate-x",`${(z.p*ee).toFixed(3)}deg`),pe.setProperty("--rc-rotate-y",`${(-C.p*ee).toFixed(3)}deg`);let ye=1-Math.pow(1-ne,3);pe.setProperty("--rc-presence",ye.toFixed(4)),pe.setProperty("--rc-lift",`${((1-ye)*14).toFixed(2)}px`)},K=(k,N)=>{let ee=N.element,pe=ee.srcObject?"stream":ee.currentSrc;if(pe!==N.src&&(N.src=pe,N.failed=!1,N.time=-1),!pe)return N.ready=!1,!1;if(ee.error)return N.failed=!0,!1;if(ee.readyState<2||!ee.videoWidth)return!1;let ye=ee.currentTime;return N.ready&&ye===N.time?!1:!V||!V.upload(k,ee)?(N.failed=!0,!1):(N.time=ye,N.width=ee.videoWidth,N.height=ee.videoHeight,N.ready=!0,!0)},ae=(k,N)=>{let ee=k.ready&&!k.failed&&k.src?1:0,pe=k.mix;return k.mix+=(ee-k.mix)*(1-Math.exp(-N/Ki)),Math.abs(ee-k.mix)<.002&&(k.mix=ee),k.mix!==pe},ce=()=>{B.width=P.offsetWidth,B.height=P.offsetHeight,B.scale=Math.min(window.devicePixelRatio||1,2);let k=Math.max(1,Math.round(B.width*B.scale)),N=Math.max(1,Math.round(B.height*B.scale));(E.width!==k||E.height!==N)&&(E.width=k,E.height=N),I=!0},he=k=>{if(T=0,re)return;let N=Math.min(.05,(k-R)/1e3||0);R=k;let ee=k<X,pe=ee?24:120,ye=ee?9:16,Te=Math.max(1,Math.ceil(N/(1/120))),Re=N/Te;for(let be=0;be<Te;be++)for(let Ee of[C,z])Ee.v+=(pe*(Ee.target-Ee.p)-ye*Ee.v)*Re,Ee.p+=Ee.v*Re;let Ce=q.target>q.p?.18:ee?.9:.45;q.p+=(q.target-q.p)*(1-Math.exp(-N/Ce)),ne<1&&(ne=xe((k-me)/650,0,1));let Et=Math.abs(C.target-C.p)>5e-4||Math.abs(z.target-z.p)>5e-4||Math.abs(C.v)>5e-4||Math.abs(z.v)>5e-4||Math.abs(q.target-q.p)>.002||ne<1;Et||(C.p=C.target,z.p=z.target,C.v=0,z.v=0,q.p=q.target),L();let et=!1;if(V){Z.cam.mix<1&&K("video",Z.video)&&(I=!0),K("cam",Z.cam)&&(I=!0);for(let ze of[Z.video,Z.cam])ze.src&&!ze.failed&&!ze.element.paused&&(et=!0),ae(ze,N)&&(I=!0),ze.mix>0&&ze.mix<1&&(et=!0);let be=y.current,Ee=`${be.blurStrength}|${be.roughness}|${B.width}|${B.height}|${B.scale}`;Ee!==ue&&(ue=Ee,I=!0),I&&(Z.video.mix>0||Z.cam.mix>0)&&V.renderEnv({width:B.width,height:B.height,scale:B.scale,blur:be.blurStrength,roughness:be.roughness,video:Z.video,cam:Z.cam}),I=!1;let At=(be.enableTilt&&!Y?be.tiltStrength:0)*(Math.PI/180);V.renderPlate({width:B.width,height:B.height,rotateX:z.p*At,rotateY:-C.p*At,capture:1-(1-Z.video.mix)*(1-Z.cam.mix),glare:be.glare*q.p,pointerX:j.x,pointerY:j.y,settings:be})}(Et||et)&&W&&le&&(T=requestAnimationFrame(he))},se=()=>{T||re||!W||!le||(R=performance.now(),T=requestAnimationFrame(he))},Q=(k,N,ee=!0)=>{C.target=xe(k,-1,1),z.target=xe(N,-1,1),q.target=ee?1:0,X=0,se()},$=k=>{let N=t.getBoundingClientRect();if(!N.width||!N.height)return;let ee=(k.clientX-N.left)/N.width*2-1,pe=(k.clientY-N.top)/N.height*2-1;j.x=ee*B.width*.5,j.y=pe*B.height*.5,Q(ee,pe)},ie=()=>Q(0,0,!1),oe=k=>{k.pointerType==="mouse"&&$(k)},fe=k=>{(k.pointerType==="mouse"||k.pointerId===U)&&$(k)},ge=k=>{k.pointerType==="mouse"&&ie()},H=k=>{k.pointerType!=="mouse"&&(U=k.pointerId,$(k))},J=k=>{k.pointerId===U&&(U=null,ie())};t.addEventListener("pointerenter",oe),t.addEventListener("pointermove",fe),t.addEventListener("pointerleave",ge),t.addEventListener("pointerdown",H),t.addEventListener("pointerup",J),t.addEventListener("pointercancel",J);let de=k=>{k.preventDefault(),re=!0,cancelAnimationFrame(T),T=0};E.addEventListener("webglcontextlost",de);let Me=new ResizeObserver(()=>{ce(),se()});Me.observe(P),ce();let Ge=x.intro&&!Y,Fe=()=>{Ge=!1,C.p=.62,z.p=-.55,q.p=1,j.x=.62*B.width*.5,j.y=-.55*B.height*.5,ne=0,me=performance.now(),X=performance.now()+Zi},ke=new IntersectionObserver(k=>{if(W=k.some(N=>N.isIntersecting),W&&Ge&&Fe(),!Y)for(let N of[M,D])W&&(N.currentSrc||N.srcObject)?N.play().catch(()=>{}):!W&&N.currentSrc&&!N.srcObject&&N.pause();se()});ke.observe(t);let Oe=()=>{le=document.visibilityState!=="hidden",se()};document.addEventListener("visibilitychange",Oe);let Pe=()=>se(),Xe=["loadeddata","playing","seeked","emptied","error"];for(let k of[M,D])for(let N of Xe)k.addEventListener(N,Pe);return i&&(M.src=i,Y||M.play().catch(()=>{})),L(),se(),()=>{cancelAnimationFrame(T),Me.disconnect(),ke.disconnect(),document.removeEventListener("visibilitychange",Oe),t.removeEventListener("pointerenter",oe),t.removeEventListener("pointermove",fe),t.removeEventListener("pointerleave",ge),t.removeEventListener("pointerdown",H),t.removeEventListener("pointerup",J),t.removeEventListener("pointercancel",J),E.removeEventListener("webglcontextlost",de);for(let k of[M,D])for(let N of Xe)k.removeEventListener(N,Pe);V?.dispose()}}var ci={up:[0,1],down:[0,-1],left:[-1,0],right:[1,0]},an=`#version 300 es
in vec2 aPosition;
void main() {
  gl_Position = vec4(aPosition, 0.0, 1.0);
}`,on=`
float hash(vec3 p3) {
  p3 = fract(p3 * 0.1031);
  p3 += dot(p3, p3.zyx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

float smin(float a, float b, float k) {
  float r = exp2(-a / k) + exp2(-b / k);
  return -k * log2(r);
}

float sinlerp(float a, float b, float w) {
  return mix(a, b, (sin(w * 3.14159265 - 3.14159265 / 2.0) + 1.0) / 2.0);
}

float vn(vec2 p, float s, float seed) {
  vec2 cellp = floor(p / s);
  vec2 relp = mod(p, s);
  float g1 = hash(vec3(cellp, seed));
  float g2 = hash(vec3(cellp.x + 1.0, cellp.y, seed));
  float g3 = hash(vec3(cellp.x + 1.0, cellp.y + 1.0, seed));
  float g4 = hash(vec3(cellp.x, cellp.y + 1.0, seed));
  float bx = sinlerp(g1, g2, relp.x / s);
  float tx = sinlerp(g4, g3, relp.x / s);
  return sinlerp(bx, tx, relp.y / s);
}

float dbn(vec2 p, float s, float seed) {
  float o = s / 2.0;
  float n0 = vn(p, s, seed);
  float n1 = vn(p + vec2(o, o), s, seed + 0.1);
  float n2 = vn(p + vec2(-o, o), s, seed + 0.2);
  float n3 = vn(p + vec2(o, -o), s, seed + 0.3);
  float n4 = vn(p + vec2(-o, -o), s, seed + 0.4);
  return (2.0 * n0 + 1.5 * n1 + 1.25 * n2 + 1.125 * n3 + n4) / 7.0;
}
`,ln=`#version 300 es
precision highp float;
precision highp int;
uniform vec2 uResolution;
uniform float uTime;
uniform vec2 uFlow;
uniform float uSpeed;
uniform float uScale;
uniform float uTurbulence;
uniform float uFluidity;
uniform float uRimWidth;
uniform float uSharpness;
uniform float uShimmer;
uniform float uGlow;
uniform float uLine;
uniform float uMaxHalf;
uniform vec3 uColors[8];
uniform int uColorCount;
uniform vec4 uMagnet;
uniform vec4 uSwirl;
uniform float uReveal;
uniform float uLight;
uniform float uOpaque;
uniform vec3 uBackground;
uniform float uOpacity;
out vec4 outColor;
${on}

vec3 palette(float h) {
  float x = clamp(h, 0.0, 1.0) * float(uColorCount - 1);
  int i = int(floor(x));
  int j = min(i + 1, uColorCount - 1);
  return mix(uColors[i], uColors[j], smoothstep(0.0, 1.0, x - float(i)));
}

void main() {
  float ref = 700.0 / max(uScale, 0.05);
  vec2 frag = gl_FragCoord.xy;
  vec2 toMagnet = (frag - uMagnet.xy) / uResolution.y;
  float pull = uMagnet.z * exp(-dot(toMagnet, toMagnet) / (uMagnet.w * uMagnet.w));
  if (pull > 0.001) {
    float angle = pull * 0.55;
    float c = cos(angle);
    float s = sin(angle);
    frag = uMagnet.xy + mat2(c, s, -s, c) * (frag - uMagnet.xy);
  }
  if (uSwirl.w > 0.0) {
    vec2 d = frag - uSwirl.xy;
    float reach = uSwirl.z;
    float angle = uSwirl.w * exp(-dot(d, d) / (reach * reach));
    float c = cos(angle);
    float s = sin(angle);
    frag = uSwirl.xy + mat2(c, s, -s, c) * d;
  }
  vec2 p = frag / uResolution.y * ref;

  float spd = 200.0 * uSpeed;
  float t = uTime;
  vec2 dir = uFlow;
  vec2 perp = vec2(-dir.y, dir.x);
  float distort1 = vn(p + perp * (t * spd), 60.0, 10.0) * 50.0 * uTurbulence;
  float distort2 = vn(p - perp * (t * spd), 120.0, 15.0) * 100.0 * uTurbulence;
  float peaks = dbn(p + distort1 + dir * (t * spd * 0.5), 40.0, 1.0);
  float peaks2 = dbn(p + distort2 - dir * (t * spd * 0.5), 40.0, 0.0);
  float field = smin(peaks, peaks2, max(uFluidity, 0.001));

  float slope = length(vec2(dFdx(field), dFdy(field)));
  float gap = abs(field - 0.4);
  float pixels = gap / max(slope, 1e-6);
  float halfBand = max(uRimWidth, 0.001) * 0.5;
  float across = max(gap / halfBand, pixels / uMaxHalf);
  float band = 5.0 * uRimWidth * (1.0 - across);
  float reveal = smoothstep(0.2, 0.85, pull);
  float shimmer = vn(p + dir * (t * spd * 0.5), 60.0, 12.0) * uShimmer * (1.0 - reveal * 0.75);
  float lit = clamp(band - shimmer, 0.0, 1.0);
  float glow = pow(lit, uSharpness) * uGlow * (1.0 + reveal * 0.25);
  float core = uLine > 0.0 ? smoothstep(uLine + 0.75, uLine - 0.75, pixels) * max(smoothstep(0.08, 0.6, glow), reveal) : 0.0;
  float shine = clamp(glow, 0.0, 1.0);
  float energy = max(shine * shine, core * 0.85) * uReveal;

  float h = clamp(0.5 + (peaks - peaks2) * 0.8, 0.0, 1.0);
  vec3 tint = palette(h);

  if (uLight > 0.5) {
    float chroma = max(tint.r, max(tint.g, tint.b)) - min(tint.r, min(tint.g, tint.b));
    vec3 ink = mix(vec3(0.07, 0.07, 0.08), tint * 0.55, clamp(chroma * 1.6, 0.0, 1.0));
    float cover = energy * uOpacity;
    outColor = uOpaque > 0.5 ? vec4(mix(uBackground, ink, cover), 1.0) : vec4(ink * cover, cover);
    return;
  }

  vec3 light = tint * energy * uOpacity;
  outColor = uOpaque > 0.5 ? vec4(uBackground + light, 1.0) : vec4(light, max(light.r, max(light.g, light.b)));
}`,hi=(t,e,r)=>Math.min(r,Math.max(e,t)),fi=(t,e,r)=>{let i=t.createShader(e);return i?(t.shaderSource(i,r),t.compileShader(i),t.getShaderParameter(i,t.COMPILE_STATUS)?i:(t.deleteShader(i),null)):null},cn=t=>{let e=fi(t,t.VERTEX_SHADER,an),r=fi(t,t.FRAGMENT_SHADER,ln),i=t.createProgram();if(!e||!r||!i)return null;if(t.attachShader(i,e),t.attachShader(i,r),t.bindAttribLocation(i,0,"aPosition"),t.linkProgram(i),t.deleteShader(e),t.deleteShader(r),!t.getProgramParameter(i,t.LINK_STATUS))return t.deleteProgram(i),null;let n={},s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let a=0;a<s;a++){let l=t.getActiveUniform(i,a);l&&(n[l.name.replace("[0]","")]=t.getUniformLocation(i,l.name))}return{program:i,uniforms:n}};function ui(t,e={}){let{colors:r=["#ffffff","#ffffff","#ffffff"],speed:i=.5,scale:n=1.6,turbulence:s=1,fluidity:a=.1,rimWidth:l=.2,sharpness:o=2.5,shimmer:h=1.5,glow:c=2,lineWidth:p=1,flowDirection:d="down",opacity:f=1,mouseInteraction:u=!0,mouseStrength:g=1,mouseRadius:m=.35,mouseDampening:v=.15,clickSwirl:b=!0,intro:F=!0,lightMode:S=!1,transparent:x=!0,backgroundColor:y,paused:w=!1,dpr:G,mixBlendMode:P}=e,E={colors:Array.isArray(r)&&r.length?r.slice(0,8):["#ffffff"],speed:i,scale:Math.max(.05,n),turbulence:s,fluidity:Math.max(.001,a),rimWidth:Math.max(.001,l),sharpness:Math.max(.1,o),shimmer:Math.max(0,h),glow:Math.max(0,c),lineWidth:Math.max(0,p),flow:ci[d]??ci.down,opacity:hi(f,0,1),mouseInteraction:u,mouseStrength:Math.max(0,g),mouseRadius:Math.max(.01,m),mouseDampening:Math.max(0,v),clickSwirl:b,intro:F,lightMode:S,transparent:x,backgroundColor:y,paused:w,dpr:G};t.classList.add("flux-lines-container"),P&&(t.style.mixBlendMode=P);let _=document.createElement("canvas");_.className="flux-lines-canvas",_.setAttribute("aria-hidden","true"),t.appendChild(_);let A=_.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1}),O=A&&cn(A);if(!O)return _.remove(),null;let M=O.uniforms,D=A.createBuffer(),Y=A.createVertexArray();A.bindVertexArray(Y),A.bindBuffer(A.ARRAY_BUFFER,D),A.bufferData(A.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),A.STATIC_DRAW),A.enableVertexAttribArray(0),A.vertexAttribPointer(0,2,A.FLOAT,!1,0,0);let V=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),C=new Map,z=(Q,$)=>{if(!Q)return $;let ie=String(Q);if(C.has(ie))return C.get(ie);let oe=$;if(V){V.clearRect(0,0,1,1),V.fillStyle="#000000",V.fillStyle=ie,V.fillRect(0,0,1,1);let[fe,ge,H]=V.getImageData(0,0,1,1).data;oe=[fe/255,ge/255,H/255]}return C.set(ie,oe),oe},q=new Float32Array(8*3),j=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,B={x:0,y:0,inside:!1},te={x:0,y:0,active:0},Z={x:0,y:0,age:10},ne=0,me=E.intro&&!j?0:1,X=0,U=0,T=!0,R=()=>{let Q=_.width/Math.max(1,t.clientWidth);E.colors.forEach((fe,ge)=>q.set(z(fe,[1,1,1]),ge*3));let $=Math.min(1,me);A.viewport(0,0,_.width,_.height),A.useProgram(O.program),A.bindVertexArray(Y),A.uniform2f(M.uResolution,_.width,_.height),A.uniform1f(M.uTime,ne),A.uniform2f(M.uFlow,E.flow[0],E.flow[1]),A.uniform1f(M.uSpeed,E.speed),A.uniform1f(M.uScale,E.scale),A.uniform1f(M.uTurbulence,E.turbulence),A.uniform1f(M.uFluidity,E.fluidity),A.uniform1f(M.uRimWidth,E.rimWidth),A.uniform1f(M.uSharpness,E.sharpness),A.uniform1f(M.uShimmer,E.shimmer),A.uniform1f(M.uGlow,E.glow),A.uniform1f(M.uLine,E.lineWidth*Q*.5),A.uniform1f(M.uMaxHalf,28*Q),A.uniform3fv(M.uColors,q),A.uniform1i(M.uColorCount,E.colors.length),A.uniform4f(M.uMagnet,te.x,te.y,te.active*E.mouseStrength,E.mouseRadius);let ie=Z.age,oe=1.9*Math.min(1,ie/.23)*Math.exp(-Math.max(0,ie-.23)*1.1);A.uniform4f(M.uSwirl,Z.x,Z.y,_.height*.22*(1+ie*.5),ie<6?oe:0),A.uniform1f(M.uReveal,$*$*(3-2*$)),A.uniform1f(M.uLight,E.lightMode?1:0),A.uniform1f(M.uOpaque,E.transparent?0:1),A.uniform3fv(M.uBackground,z(E.backgroundColor,E.lightMode?[1,1,1]:[.0706,.0588,.0902])),A.uniform1f(M.uOpacity,E.opacity),A.drawArrays(A.TRIANGLES,0,3)},W=Q=>{if(X=0,!T||document.hidden)return;let $=U?hi((Q-U)/1e3,5e-4,.05):1/60;U=Q;let ie=E.paused||j?0:1;ne+=$*ie,Z.age+=$,E.intro&&!j&&me<1?me=Math.min(1,me+$/1.8):(!E.intro||j)&&(me=1);let oe=E.mouseInteraction&&B.inside,fe=E.mouseDampening>0?1-Math.exp(-$/E.mouseDampening):1;oe&&(te.x+=(B.x-te.x)*fe,te.y+=(B.y-te.y)*fe);let ge=oe?1:0;te.active+=(ge-te.active)*(1-Math.exp(-$/.3)),Math.abs(ge-te.active)<.001&&(te.active=ge),R(),ie>0||te.active!==ge||me<1||Z.age<6?X=requestAnimationFrame(W):U=0},le=()=>{!X&&T&&!document.hidden&&(X=requestAnimationFrame(W))},re=()=>{let Q=Math.max(1,t.clientWidth),$=Math.max(1,t.clientHeight),ie=Math.min(E.dpr||window.devicePixelRatio||1,2);_.width=Math.max(1,Math.round(Q*ie)),_.height=Math.max(1,Math.round($*ie)),R(),le()},ue=Q=>{let $=t.getBoundingClientRect(),ie=Q.clientX-$.left,oe=Q.clientY-$.top,fe=_.width/Math.max(1,$.width);B.inside=ie>=0&&oe>=0&&ie<=$.width&&oe<=$.height,B.x=ie*fe,B.y=($.height-oe)*fe},I=Q=>{let $=B.inside;ue(Q),B.inside&&!$&&te.active<.05&&(te.x=B.x,te.y=B.y),le()},L=Q=>{I(Q),!(!B.inside||!E.clickSwirl||j)&&(Z.x=B.x,Z.y=B.y,Z.age=0,le())},K=Q=>{Q.pointerType!=="mouse"&&(B.inside=!1)},ae=()=>{B.inside=!1},ce=()=>{U=0,le()},he=new ResizeObserver(re);he.observe(t);let se=new IntersectionObserver(Q=>{T=Q.some($=>$.isIntersecting),T&&(U=0,le())});return se.observe(t),window.addEventListener("pointermove",I,{passive:!0}),window.addEventListener("pointerdown",L,{passive:!0}),window.addEventListener("pointerup",K,{passive:!0}),window.addEventListener("pointercancel",K,{passive:!0}),document.documentElement.addEventListener("pointerleave",ae),document.addEventListener("visibilitychange",ce),re(),()=>{cancelAnimationFrame(X),he.disconnect(),se.disconnect(),window.removeEventListener("pointermove",I),window.removeEventListener("pointerdown",L),window.removeEventListener("pointerup",K),window.removeEventListener("pointercancel",K),document.documentElement.removeEventListener("pointerleave",ae),document.removeEventListener("visibilitychange",ce),A.deleteProgram(O.program),A.deleteBuffer(D),A.deleteVertexArray(Y),A.getExtension("WEBGL_lose_context")?.loseContext(),_.remove()}}var hn=t=>getComputedStyle(document.documentElement).getPropertyValue(t).trim(),fn="M25.732 83.2V45.256H35.452L36.316 50.656H36.82Q38.116 48.712 39.952 47.272Q41.788 45.832 44.02 45.112Q46.252 44.392 48.772 44.392Q52.66 44.392 55.396 45.94Q58.132 47.488 59.572 50.656H60.076Q61.372 48.712 63.208 47.272Q65.044 45.832 67.312 45.112Q69.58 44.392 72.028 44.392Q75.988 44.392 78.724 45.868Q81.46 47.344 82.936 50.332Q84.412 53.32 84.412 57.928V83.2H72.604V59.728Q72.604 58.144 72.244 57.028Q71.884 55.912 71.236 55.156Q70.588 54.4 69.58 54.04Q68.572 53.68 67.42 53.68Q65.548 53.68 64.072 54.652Q62.596 55.624 61.804 57.244Q61.012 58.864 61.012 61.024V83.2H49.204V59.728Q49.204 58.144 48.844 57.028Q48.484 55.912 47.836 55.156Q47.188 54.4 46.18 54.04Q45.172 53.68 44.02 53.68Q42.148 53.68 40.672 54.652Q39.196 55.624 38.368 57.244Q37.54 58.864 37.54 61.024V83.2Z",un=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 128 128"><path fill="#fff" fill-rule="evenodd" d="M30.4 4H97.6Q124 4 124 30.4V97.6Q124 124 97.6 124H30.4Q4 124 4 97.6V30.4Q4 4 30.4 4Z${fn}M93.53 70H106.73V83.2H93.53Z"/></svg>`)}`,bt=document.querySelector(".elogo-gl");bt&&$r(bt,{src:un,color:"#ffe9e6",glowColor:"#c94848",scale:.6,strands:4,bend:.6,crackle:1.5,arcs:1,speed:2.5,interactive:!0,theme:"dark"})&&bt.closest(".elogo").classList.add("is-live");document.querySelectorAll(".friend-grid .friend").forEach(t=>{li(t,{theme:"dark",tint:"#ffffff",metalness:1,roughness:.3,blurStrength:6,shine:1,glare:.5,width:"100%",height:440,radius:24})});var dn=t=>!!t.closest(".hero, .contact");document.querySelectorAll(".btn").forEach(t=>{if(t.classList.contains("btn-wa"))yt(t,{radius:999,tint:hn("--accent"),tintOpacity:1,textColor:"#ffffff",lineColor:"#ffffff",baseColor:"#7a2626",idleIntensity:.35,proximity:250});else{let e=dn(t)||document.documentElement.dataset.theme==="dark"||matchMedia("(prefers-color-scheme: dark)").matches;yt(t,{radius:999,tint:e?"#ffffff":"#2b2c2f",tintOpacity:.04,textColor:e?"#f3f2f1":"#2b2c2f",lineColor:e?"#ffffff":"#2b2c2f",baseColor:e?"#525252":"#c7c7c9",proximity:250})}});var pn=[[".btn-wa","WhatsApp"],[".f-hit","Abrir"],[".n3","Ver"],[".copy","Copiar"]];document.querySelectorAll("a, button, .chips label, input, textarea").forEach(t=>t.classList.add("cursor-target"));pn.forEach(([t,e])=>document.querySelectorAll(t).forEach(r=>r.setAttribute("data-cursor-label",e)));jr({spinDuration:2,hideDefaultCursor:!0,parallaxOn:!0,cursorColor:"#ffffff"});ti(document.body,{position:"bottom",target:"page",height:"6rem",strength:2,layers:8,curve:"linear",exponential:!0,tint:"color-mix(in srgb, var(--bg) 60%, transparent)",autoHide:!0,zIndex:7});var di=document.querySelector(".flux-bg");di&&ui(di,{colors:["#ffffff","#ffffff","#ffffff"],glow:2,rimWidth:.2,lineWidth:1,flowDirection:"down",mouseInteraction:!0,clickSwirl:!0,speed:.5,scale:1.6,turbulence:1,fluidity:.1,sharpness:2.5,shimmer:1.5,mouseStrength:1,mouseRadius:.35,intro:!0,lightMode:!1});})();
