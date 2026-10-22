(()=>{function Le(t){let e=t[0],r=t[1],i=t[2];return Math.sqrt(e*e+r*r+i*i)}function He(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function Ft(t,e,r,i){return t[0]=e,t[1]=r,t[2]=i,t}function tt(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t}function rt(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t}function St(t,e,r){return t[0]=e[0]*r[0],t[1]=e[1]*r[1],t[2]=e[2]*r[2],t}function Tt(t,e,r){return t[0]=e[0]/r[0],t[1]=e[1]/r[1],t[2]=e[2]/r[2],t}function Ye(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t}function _t(t,e){let r=e[0]-t[0],i=e[1]-t[1],n=e[2]-t[2];return Math.sqrt(r*r+i*i+n*n)}function Rt(t,e){let r=e[0]-t[0],i=e[1]-t[1],n=e[2]-t[2];return r*r+i*i+n*n}function it(t){let e=t[0],r=t[1],i=t[2];return e*e+r*r+i*i}function Ct(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t}function Lt(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t}function $e(t,e){let r=e[0],i=e[1],n=e[2],s=r*r+i*i+n*n;return s>0&&(s=1/Math.sqrt(s)),t[0]=e[0]*s,t[1]=e[1]*s,t[2]=e[2]*s,t}function nt(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function st(t,e,r){let i=e[0],n=e[1],s=e[2],a=r[0],l=r[1],o=r[2];return t[0]=n*o-s*l,t[1]=s*a-i*o,t[2]=i*l-n*a,t}function Pt(t,e,r,i){let n=e[0],s=e[1],a=e[2];return t[0]=n+i*(r[0]-n),t[1]=s+i*(r[1]-s),t[2]=a+i*(r[2]-a),t}function zt(t,e,r,i,n){let s=Math.exp(-i*n),a=e[0],l=e[1],o=e[2];return t[0]=r[0]+(a-r[0])*s,t[1]=r[1]+(l-r[1])*s,t[2]=r[2]+(o-r[2])*s,t}function It(t,e,r){let i=e[0],n=e[1],s=e[2],a=r[3]*i+r[7]*n+r[11]*s+r[15];return a=a||1,t[0]=(r[0]*i+r[4]*n+r[8]*s+r[12])/a,t[1]=(r[1]*i+r[5]*n+r[9]*s+r[13])/a,t[2]=(r[2]*i+r[6]*n+r[10]*s+r[14])/a,t}function kt(t,e,r){let i=e[0],n=e[1],s=e[2],a=r[3]*i+r[7]*n+r[11]*s+r[15];return a=a||1,t[0]=(r[0]*i+r[4]*n+r[8]*s)/a,t[1]=(r[1]*i+r[5]*n+r[9]*s)/a,t[2]=(r[2]*i+r[6]*n+r[10]*s)/a,t}function Ut(t,e,r){let i=e[0],n=e[1],s=e[2];return t[0]=i*r[0]+n*r[3]+s*r[6],t[1]=i*r[1]+n*r[4]+s*r[7],t[2]=i*r[2]+n*r[5]+s*r[8],t}function Dt(t,e,r){let i=e[0],n=e[1],s=e[2],a=r[0],l=r[1],o=r[2],c=r[3],h=l*s-o*n,p=o*i-a*s,d=a*n-l*i,u=l*d-o*p,f=o*h-a*d,g=a*p-l*h,m=c*2;return h*=m,p*=m,d*=m,u*=2,f*=2,g*=2,t[0]=i+h+u,t[1]=n+p+f,t[2]=s+d+g,t}var Ot=function(){let t=[0,0,0],e=[0,0,0];return function(r,i){He(t,r),He(e,i),$e(t,t),$e(e,e);let n=nt(t,e);return n>1?0:n<-1?Math.PI:Math.acos(n)}}();function Bt(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}var pe=class t extends Array{constructor(e=0,r=e,i=e){return super(e,r,i),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this[0]=e}set y(e){this[1]=e}set z(e){this[2]=e}set(e,r=e,i=e){return e.length?this.copy(e):(Ft(this,e,r,i),this)}copy(e){return He(this,e),this}add(e,r){return r?tt(this,e,r):tt(this,this,e),this}sub(e,r){return r?rt(this,e,r):rt(this,this,e),this}multiply(e){return e.length?St(this,this,e):Ye(this,this,e),this}divide(e){return e.length?Tt(this,this,e):Ye(this,this,1/e),this}inverse(e=this){return Lt(this,e),this}len(){return Le(this)}distance(e){return e?_t(this,e):Le(this)}squaredLen(){return it(this)}squaredDistance(e){return e?Rt(this,e):it(this)}negate(e=this){return Ct(this,e),this}cross(e,r){return r?st(this,e,r):st(this,this,e),this}scale(e){return Ye(this,this,e),this}normalize(){return $e(this,this),this}dot(e){return nt(this,e)}equals(e){return Bt(this,e)}applyMatrix3(e){return Ut(this,this,e),this}applyMatrix4(e){return It(this,this,e),this}scaleRotateMatrix4(e){return kt(this,this,e),this}applyQuaternion(e){return Dt(this,this,e),this}angle(e){return Ot(this,e)}lerp(e,r){return Pt(this,this,e,r),this}smoothLerp(e,r,i){return zt(this,this,e,r,i),this}clone(){return new t(this[0],this[1],this[2])}fromArray(e,r=0){return this[0]=e[r],this[1]=e[r+1],this[2]=e[r+2],this}toArray(e=[],r=0){return e[r]=this[0],e[r+1]=this[1],e[r+2]=this[2],e}transformDirection(e){let r=this[0],i=this[1],n=this[2];return this[0]=e[0]*r+e[4]*i+e[8]*n,this[1]=e[1]*r+e[5]*i+e[9]*n,this[2]=e[2]*r+e[6]*i+e[10]*n,this.normalize()}};var Vt=new pe,ci=1,hi=1,qt=!1,Qe=class{constructor(e,r={}){e.canvas||console.error("gl not passed as first argument to Geometry"),this.gl=e,this.attributes=r,this.id=ci++,this.VAOs={},this.drawRange={start:0,count:0},this.instancedCount=0,this.gl.renderer.bindVertexArray(null),this.gl.renderer.currentGeometry=null,this.glState=this.gl.renderer.state;for(let i in r)this.addAttribute(i,r[i])}addAttribute(e,r){if(this.attributes[e]=r,r.id=hi++,r.size=r.size||1,r.type=r.type||(r.data.constructor===Float32Array?this.gl.FLOAT:r.data.constructor===Uint16Array?this.gl.UNSIGNED_SHORT:this.gl.UNSIGNED_INT),r.target=e==="index"?this.gl.ELEMENT_ARRAY_BUFFER:this.gl.ARRAY_BUFFER,r.normalized=r.normalized||!1,r.stride=r.stride||0,r.offset=r.offset||0,r.count=r.count||(r.stride?r.data.byteLength/r.stride:r.data.length/r.size),r.divisor=r.instanced||0,r.needsUpdate=!1,r.usage=r.usage||this.gl.STATIC_DRAW,r.buffer||this.updateAttribute(r),r.divisor){if(this.isInstanced=!0,this.instancedCount&&this.instancedCount!==r.count*r.divisor)return console.warn("geometry has multiple instanced buffers of different length"),this.instancedCount=Math.min(this.instancedCount,r.count*r.divisor);this.instancedCount=r.count*r.divisor}else e==="index"?this.drawRange.count=r.count:this.attributes.index||(this.drawRange.count=Math.max(this.drawRange.count,r.count))}updateAttribute(e){let r=!e.buffer;r&&(e.buffer=this.gl.createBuffer()),this.glState.boundBuffer!==e.buffer&&(this.gl.bindBuffer(e.target,e.buffer),this.glState.boundBuffer=e.buffer),r?this.gl.bufferData(e.target,e.data,e.usage):this.gl.bufferSubData(e.target,0,e.data),e.needsUpdate=!1}setIndex(e){this.addAttribute("index",e)}setDrawRange(e,r){this.drawRange.start=e,this.drawRange.count=r}setInstancedCount(e){this.instancedCount=e}createVAO(e){this.VAOs[e.attributeOrder]=this.gl.renderer.createVertexArray(),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.bindAttributes(e)}bindAttributes(e){e.attributeLocations.forEach((r,{name:i,type:n})=>{if(!this.attributes[i]){console.warn(`active attribute ${i} not being supplied`);return}let s=this.attributes[i];this.gl.bindBuffer(s.target,s.buffer),this.glState.boundBuffer=s.buffer;let a=1;n===35674&&(a=2),n===35675&&(a=3),n===35676&&(a=4);let l=s.size/a,o=a===1?0:a*a*4,c=a===1?0:a*4;for(let h=0;h<a;h++)this.gl.vertexAttribPointer(r+h,l,s.type,s.normalized,s.stride+o,s.offset+h*c),this.gl.enableVertexAttribArray(r+h),this.gl.renderer.vertexAttribDivisor(r+h,s.divisor)}),this.attributes.index&&this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.attributes.index.buffer)}draw({program:e,mode:r=this.gl.TRIANGLES}){this.gl.renderer.currentGeometry!==`${this.id}_${e.attributeOrder}`&&(this.VAOs[e.attributeOrder]||this.createVAO(e),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.gl.renderer.currentGeometry=`${this.id}_${e.attributeOrder}`),e.attributeLocations.forEach((n,{name:s})=>{let a=this.attributes[s];a.needsUpdate&&this.updateAttribute(a)});let i=2;this.attributes.index?.type===this.gl.UNSIGNED_INT&&(i=4),this.isInstanced?this.attributes.index?this.gl.renderer.drawElementsInstanced(r,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*i,this.instancedCount):this.gl.renderer.drawArraysInstanced(r,this.drawRange.start,this.drawRange.count,this.instancedCount):this.attributes.index?this.gl.drawElements(r,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*i):this.gl.drawArrays(r,this.drawRange.start,this.drawRange.count)}getPosition(){let e=this.attributes.position;if(e.data)return e;if(!qt)return console.warn("No position buffer data found to compute bounds"),qt=!0}computeBoundingBox(e){e||(e=this.getPosition());let r=e.data,i=e.size;this.bounds||(this.bounds={min:new pe,max:new pe,center:new pe,scale:new pe,radius:1/0});let n=this.bounds.min,s=this.bounds.max,a=this.bounds.center,l=this.bounds.scale;n.set(1/0),s.set(-1/0);for(let o=0,c=r.length;o<c;o+=i){let h=r[o],p=r[o+1],d=r[o+2];n.x=Math.min(h,n.x),n.y=Math.min(p,n.y),n.z=Math.min(d,n.z),s.x=Math.max(h,s.x),s.y=Math.max(p,s.y),s.z=Math.max(d,s.z)}l.sub(s,n),a.add(n,s).divide(2)}computeBoundingSphere(e){e||(e=this.getPosition());let r=e.data,i=e.size;this.bounds||this.computeBoundingBox(e);let n=0;for(let s=0,a=r.length;s<a;s+=i)Vt.fromArray(r,s),n=Math.max(n,this.bounds.center.squaredDistance(Vt));this.bounds.radius=Math.sqrt(n)}remove(){for(let e in this.VAOs)this.gl.renderer.deleteVertexArray(this.VAOs[e]),delete this.VAOs[e];for(let e in this.attributes)this.gl.deleteBuffer(this.attributes[e].buffer),delete this.attributes[e]}};var fi=1,Gt={},De=class{constructor(e,{vertex:r,fragment:i,uniforms:n={},transparent:s=!1,cullFace:a=e.BACK,frontFace:l=e.CCW,depthTest:o=!0,depthWrite:c=!0,depthFunc:h=e.LEQUAL}={}){e.canvas||console.error("gl not passed as first argument to Program"),this.gl=e,this.uniforms=n,this.id=fi++,r||console.warn("vertex shader not supplied"),i||console.warn("fragment shader not supplied"),this.transparent=s,this.cullFace=a,this.frontFace=l,this.depthTest=o,this.depthWrite=c,this.depthFunc=h,this.blendFunc={},this.blendEquation={},this.stencilFunc={},this.stencilOp={},this.transparent&&!this.blendFunc.src&&(this.gl.renderer.premultipliedAlpha?this.setBlendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA):this.setBlendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)),this.vertexShader=e.createShader(e.VERTEX_SHADER),this.fragmentShader=e.createShader(e.FRAGMENT_SHADER),this.program=e.createProgram(),e.attachShader(this.program,this.vertexShader),e.attachShader(this.program,this.fragmentShader),this.setShaders({vertex:r,fragment:i})}setShaders({vertex:e,fragment:r}){if(e&&(this.gl.shaderSource(this.vertexShader,e),this.gl.compileShader(this.vertexShader),this.gl.getShaderInfoLog(this.vertexShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${Wt(e)}`)),r&&(this.gl.shaderSource(this.fragmentShader,r),this.gl.compileShader(this.fragmentShader),this.gl.getShaderInfoLog(this.fragmentShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${Wt(r)}`)),this.gl.linkProgram(this.program),!this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS))return console.warn(this.gl.getProgramInfoLog(this.program));this.uniformLocations=new Map;let i=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_UNIFORMS);for(let a=0;a<i;a++){let l=this.gl.getActiveUniform(this.program,a);this.uniformLocations.set(l,this.gl.getUniformLocation(this.program,l.name));let o=l.name.match(/(\w+)/g);l.uniformName=o[0],l.nameComponents=o.slice(1)}this.attributeLocations=new Map;let n=[],s=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){let l=this.gl.getActiveAttrib(this.program,a),o=this.gl.getAttribLocation(this.program,l.name);o!==-1&&(n[o]=l.name,this.attributeLocations.set(l,o))}this.attributeOrder=n.join("")}setBlendFunc(e,r,i,n){this.blendFunc.src=e,this.blendFunc.dst=r,this.blendFunc.srcAlpha=i,this.blendFunc.dstAlpha=n,e&&(this.transparent=!0)}setBlendEquation(e,r){this.blendEquation.modeRGB=e,this.blendEquation.modeAlpha=r}setStencilFunc(e,r,i){this.stencilRef=r,this.stencilFunc.func=e,this.stencilFunc.ref=r,this.stencilFunc.mask=i}setStencilOp(e,r,i){this.stencilOp.stencilFail=e,this.stencilOp.depthFail=r,this.stencilOp.depthPass=i}applyState(){this.depthTest?this.gl.renderer.enable(this.gl.DEPTH_TEST):this.gl.renderer.disable(this.gl.DEPTH_TEST),this.cullFace?this.gl.renderer.enable(this.gl.CULL_FACE):this.gl.renderer.disable(this.gl.CULL_FACE),this.blendFunc.src?this.gl.renderer.enable(this.gl.BLEND):this.gl.renderer.disable(this.gl.BLEND),this.cullFace&&this.gl.renderer.setCullFace(this.cullFace),this.gl.renderer.setFrontFace(this.frontFace),this.gl.renderer.setDepthMask(this.depthWrite),this.gl.renderer.setDepthFunc(this.depthFunc),this.blendFunc.src&&this.gl.renderer.setBlendFunc(this.blendFunc.src,this.blendFunc.dst,this.blendFunc.srcAlpha,this.blendFunc.dstAlpha),this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB,this.blendEquation.modeAlpha),this.stencilFunc.func||this.stencilOp.stencilFail?this.gl.renderer.enable(this.gl.STENCIL_TEST):this.gl.renderer.disable(this.gl.STENCIL_TEST),this.gl.renderer.setStencilFunc(this.stencilFunc.func,this.stencilFunc.ref,this.stencilFunc.mask),this.gl.renderer.setStencilOp(this.stencilOp.stencilFail,this.stencilOp.depthFail,this.stencilOp.depthPass)}use({flipFaces:e=!1}={}){let r=-1;this.gl.renderer.state.currentProgram===this.id||(this.gl.useProgram(this.program),this.gl.renderer.state.currentProgram=this.id),this.uniformLocations.forEach((n,s)=>{let a=this.uniforms[s.uniformName];for(let l of s.nameComponents){if(!a)break;if(l in a)a=a[l];else{if(Array.isArray(a.value))break;a=void 0;break}}if(!a)return Xt(`Active uniform ${s.name} has not been supplied`);if(a&&a.value===void 0)return Xt(`${s.name} uniform is missing a value parameter`);if(a.value.texture)return r=r+1,a.value.update(r),at(this.gl,s.type,n,r);if(a.value.length&&a.value[0].texture){let l=[];return a.value.forEach(o=>{r=r+1,o.update(r),l.push(r)}),at(this.gl,s.type,n,l)}at(this.gl,s.type,n,a.value)}),this.applyState(),e&&this.gl.renderer.setFrontFace(this.frontFace===this.gl.CCW?this.gl.CW:this.gl.CCW)}remove(){this.gl.deleteProgram(this.program)}};function at(t,e,r,i){i=i.length?ui(i):i;let n=t.renderer.state.uniformLocations.get(r);if(i.length)if(n===void 0||n.length!==i.length)t.renderer.state.uniformLocations.set(r,i.slice(0));else{if(di(n,i))return;n.set?n.set(i):pi(n,i),t.renderer.state.uniformLocations.set(r,n)}else{if(n===i)return;t.renderer.state.uniformLocations.set(r,i)}switch(e){case 5126:return i.length?t.uniform1fv(r,i):t.uniform1f(r,i);case 35664:return t.uniform2fv(r,i);case 35665:return t.uniform3fv(r,i);case 35666:return t.uniform4fv(r,i);case 35670:case 5124:case 35678:case 36306:case 35680:case 36289:return i.length?t.uniform1iv(r,i):t.uniform1i(r,i);case 35671:case 35667:return t.uniform2iv(r,i);case 35672:case 35668:return t.uniform3iv(r,i);case 35673:case 35669:return t.uniform4iv(r,i);case 35674:return t.uniformMatrix2fv(r,!1,i);case 35675:return t.uniformMatrix3fv(r,!1,i);case 35676:return t.uniformMatrix4fv(r,!1,i)}}function Wt(t){let e=t.split(`
`);for(let r=0;r<e.length;r++)e[r]=r+1+": "+e[r];return e.join(`
`)}function ui(t){let e=t.length,r=t[0].length;if(r===void 0)return t;let i=e*r,n=Gt[i];n||(Gt[i]=n=new Float32Array(i));for(let s=0;s<e;s++)n.set(t[s],s*r);return n}function di(t,e){if(t.length!==e.length)return!1;for(let r=0,i=t.length;r<i;r++)if(t[r]!==e[r])return!1;return!0}function pi(t,e){for(let r=0,i=t.length;r<i;r++)t[r]=e[r]}var ot=0;function Xt(t){ot>100||(console.warn(t),ot++,ot>100&&console.warn("More than 100 program warnings - stopping logs."))}var lt=new pe,mi=1,Oe=class{constructor({canvas:e=document.createElement("canvas"),width:r=300,height:i=150,dpr:n=1,alpha:s=!1,depth:a=!0,stencil:l=!1,antialias:o=!1,premultipliedAlpha:c=!1,preserveDrawingBuffer:h=!1,powerPreference:p="default",autoClear:d=!0,webgl:u=2}={}){let f={alpha:s,depth:a,stencil:l,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:p};this.dpr=n,this.alpha=s,this.color=!0,this.depth=a,this.stencil=l,this.premultipliedAlpha=c,this.autoClear=d,this.id=mi++,u===2&&(this.gl=e.getContext("webgl2",f)),this.isWebgl2=!!this.gl,this.gl||(this.gl=e.getContext("webgl",f)),this.gl||console.error("unable to create webgl context"),this.gl.renderer=this,this.setSize(r,i),this.state={},this.state.blendFunc={src:this.gl.ONE,dst:this.gl.ZERO},this.state.blendEquation={modeRGB:this.gl.FUNC_ADD},this.state.cullFace=!1,this.state.frontFace=this.gl.CCW,this.state.depthMask=!0,this.state.depthFunc=this.gl.LEQUAL,this.state.premultiplyAlpha=!1,this.state.flipY=!1,this.state.unpackAlignment=4,this.state.framebuffer=null,this.state.viewport={x:0,y:0,width:null,height:null},this.state.textureUnits=[],this.state.activeTextureUnit=0,this.state.boundBuffer=null,this.state.uniformLocations=new Map,this.state.currentProgram=null,this.extensions={},this.isWebgl2?(this.getExtension("EXT_color_buffer_float"),this.getExtension("OES_texture_float_linear")):(this.getExtension("OES_texture_float"),this.getExtension("OES_texture_float_linear"),this.getExtension("OES_texture_half_float"),this.getExtension("OES_texture_half_float_linear"),this.getExtension("OES_element_index_uint"),this.getExtension("OES_standard_derivatives"),this.getExtension("EXT_sRGB"),this.getExtension("WEBGL_depth_texture"),this.getExtension("WEBGL_draw_buffers")),this.getExtension("WEBGL_compressed_texture_astc"),this.getExtension("EXT_texture_compression_bptc"),this.getExtension("WEBGL_compressed_texture_s3tc"),this.getExtension("WEBGL_compressed_texture_etc1"),this.getExtension("WEBGL_compressed_texture_pvrtc"),this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),this.vertexAttribDivisor=this.getExtension("ANGLE_instanced_arrays","vertexAttribDivisor","vertexAttribDivisorANGLE"),this.drawArraysInstanced=this.getExtension("ANGLE_instanced_arrays","drawArraysInstanced","drawArraysInstancedANGLE"),this.drawElementsInstanced=this.getExtension("ANGLE_instanced_arrays","drawElementsInstanced","drawElementsInstancedANGLE"),this.createVertexArray=this.getExtension("OES_vertex_array_object","createVertexArray","createVertexArrayOES"),this.bindVertexArray=this.getExtension("OES_vertex_array_object","bindVertexArray","bindVertexArrayOES"),this.deleteVertexArray=this.getExtension("OES_vertex_array_object","deleteVertexArray","deleteVertexArrayOES"),this.drawBuffers=this.getExtension("WEBGL_draw_buffers","drawBuffers","drawBuffersWEBGL"),this.parameters={},this.parameters.maxTextureUnits=this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),this.parameters.maxAnisotropy=this.getExtension("EXT_texture_filter_anisotropic")?this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}setSize(e,r){this.width=e,this.height=r,this.gl.canvas.width=e*this.dpr,this.gl.canvas.height=r*this.dpr,this.gl.canvas.style&&Object.assign(this.gl.canvas.style,{width:e+"px",height:r+"px"})}setViewport(e,r,i=0,n=0){this.state.viewport.width===e&&this.state.viewport.height===r||(this.state.viewport.width=e,this.state.viewport.height=r,this.state.viewport.x=i,this.state.viewport.y=n,this.gl.viewport(i,n,e,r))}setScissor(e,r,i=0,n=0){this.gl.scissor(i,n,e,r)}enable(e){this.state[e]!==!0&&(this.gl.enable(e),this.state[e]=!0)}disable(e){this.state[e]!==!1&&(this.gl.disable(e),this.state[e]=!1)}setBlendFunc(e,r,i,n){this.state.blendFunc.src===e&&this.state.blendFunc.dst===r&&this.state.blendFunc.srcAlpha===i&&this.state.blendFunc.dstAlpha===n||(this.state.blendFunc.src=e,this.state.blendFunc.dst=r,this.state.blendFunc.srcAlpha=i,this.state.blendFunc.dstAlpha=n,i!==void 0?this.gl.blendFuncSeparate(e,r,i,n):this.gl.blendFunc(e,r))}setBlendEquation(e,r){e=e||this.gl.FUNC_ADD,!(this.state.blendEquation.modeRGB===e&&this.state.blendEquation.modeAlpha===r)&&(this.state.blendEquation.modeRGB=e,this.state.blendEquation.modeAlpha=r,r!==void 0?this.gl.blendEquationSeparate(e,r):this.gl.blendEquation(e))}setCullFace(e){this.state.cullFace!==e&&(this.state.cullFace=e,this.gl.cullFace(e))}setFrontFace(e){this.state.frontFace!==e&&(this.state.frontFace=e,this.gl.frontFace(e))}setDepthMask(e){this.state.depthMask!==e&&(this.state.depthMask=e,this.gl.depthMask(e))}setDepthFunc(e){this.state.depthFunc!==e&&(this.state.depthFunc=e,this.gl.depthFunc(e))}setStencilMask(e){this.state.stencilMask!==e&&(this.state.stencilMask=e,this.gl.stencilMask(e))}setStencilFunc(e,r,i){this.state.stencilFunc===e&&this.state.stencilRef===r&&this.state.stencilFuncMask===i||(this.state.stencilFunc=e||this.gl.ALWAYS,this.state.stencilRef=r||0,this.state.stencilFuncMask=i||0,this.gl.stencilFunc(e||this.gl.ALWAYS,r||0,i||0))}setStencilOp(e,r,i){this.state.stencilFail===e&&this.state.stencilDepthFail===r&&this.state.stencilDepthPass===i||(this.state.stencilFail=e,this.state.stencilDepthFail=r,this.state.stencilDepthPass=i,this.gl.stencilOp(e,r,i))}activeTexture(e){this.state.activeTextureUnit!==e&&(this.state.activeTextureUnit=e,this.gl.activeTexture(this.gl.TEXTURE0+e))}bindFramebuffer({target:e=this.gl.FRAMEBUFFER,buffer:r=null}={}){this.state.framebuffer!==r&&(this.state.framebuffer=r,this.gl.bindFramebuffer(e,r))}getExtension(e,r,i){return r&&this.gl[r]?this.gl[r].bind(this.gl):(this.extensions[e]||(this.extensions[e]=this.gl.getExtension(e)),r?this.extensions[e]?this.extensions[e][i].bind(this.extensions[e]):null:this.extensions[e])}sortOpaque(e,r){return e.renderOrder!==r.renderOrder?e.renderOrder-r.renderOrder:e.program.id!==r.program.id?e.program.id-r.program.id:e.zDepth!==r.zDepth?e.zDepth-r.zDepth:r.id-e.id}sortTransparent(e,r){return e.renderOrder!==r.renderOrder?e.renderOrder-r.renderOrder:e.zDepth!==r.zDepth?r.zDepth-e.zDepth:r.id-e.id}sortUI(e,r){return e.renderOrder!==r.renderOrder?e.renderOrder-r.renderOrder:e.program.id!==r.program.id?e.program.id-r.program.id:r.id-e.id}getRenderList({scene:e,camera:r,frustumCull:i,sort:n}){let s=[];if(r&&i&&r.updateFrustum(),e.traverse(a=>{if(!a.visible)return!0;a.draw&&(i&&a.frustumCulled&&r&&!r.frustumIntersectsMesh(a)||s.push(a))}),n){let a=[],l=[],o=[];s.forEach(c=>{c.program.transparent?c.program.depthTest?l.push(c):o.push(c):a.push(c),c.zDepth=0,!(c.renderOrder!==0||!c.program.depthTest||!r)&&(c.worldMatrix.getTranslation(lt),lt.applyMatrix4(r.projectionViewMatrix),c.zDepth=lt.z)}),a.sort(this.sortOpaque),l.sort(this.sortTransparent),o.sort(this.sortUI),s=a.concat(l,o)}return s}render({scene:e,camera:r,target:i=null,update:n=!0,sort:s=!0,frustumCull:a=!0,clear:l}){i===null?(this.bindFramebuffer(),this.setViewport(this.width*this.dpr,this.height*this.dpr)):(this.bindFramebuffer(i),this.setViewport(i.width,i.height)),(l||this.autoClear&&l!==!1)&&(this.depth&&(!i||i.depth)&&(this.enable(this.gl.DEPTH_TEST),this.setDepthMask(!0)),(this.stencil||!i||i.stencil)&&(this.enable(this.gl.STENCIL_TEST),this.setStencilMask(255)),this.gl.clear((this.color?this.gl.COLOR_BUFFER_BIT:0)|(this.depth?this.gl.DEPTH_BUFFER_BIT:0)|(this.stencil?this.gl.STENCIL_BUFFER_BIT:0))),n&&e.updateMatrixWorld(),r&&r.updateMatrixWorld(),this.getRenderList({scene:e,camera:r,frustumCull:a,sort:s}).forEach(c=>{c.draw({camera:r})})}};function Ht(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function $t(t,e,r,i,n){return t[0]=e,t[1]=r,t[2]=i,t[3]=n,t}function Yt(t,e){let r=e[0],i=e[1],n=e[2],s=e[3],a=r*r+i*i+n*n+s*s;return a>0&&(a=1/Math.sqrt(a)),t[0]=r*a,t[1]=i*a,t[2]=n*a,t[3]=s*a,t}function Qt(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3]}function jt(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function Zt(t,e,r){r=r*.5;let i=Math.sin(r);return t[0]=i*e[0],t[1]=i*e[1],t[2]=i*e[2],t[3]=Math.cos(r),t}function ct(t,e,r){let i=e[0],n=e[1],s=e[2],a=e[3],l=r[0],o=r[1],c=r[2],h=r[3];return t[0]=i*h+a*l+n*c-s*o,t[1]=n*h+a*o+s*l-i*c,t[2]=s*h+a*c+i*o-n*l,t[3]=a*h-i*l-n*o-s*c,t}function Kt(t,e,r){r*=.5;let i=e[0],n=e[1],s=e[2],a=e[3],l=Math.sin(r),o=Math.cos(r);return t[0]=i*o+a*l,t[1]=n*o+s*l,t[2]=s*o-n*l,t[3]=a*o-i*l,t}function Jt(t,e,r){r*=.5;let i=e[0],n=e[1],s=e[2],a=e[3],l=Math.sin(r),o=Math.cos(r);return t[0]=i*o-s*l,t[1]=n*o+a*l,t[2]=s*o+i*l,t[3]=a*o-n*l,t}function er(t,e,r){r*=.5;let i=e[0],n=e[1],s=e[2],a=e[3],l=Math.sin(r),o=Math.cos(r);return t[0]=i*o+n*l,t[1]=n*o-i*l,t[2]=s*o+a*l,t[3]=a*o-s*l,t}function tr(t,e,r,i){let n=e[0],s=e[1],a=e[2],l=e[3],o=r[0],c=r[1],h=r[2],p=r[3],d,u,f,g,m;return u=n*o+s*c+a*h+l*p,u<0&&(u=-u,o=-o,c=-c,h=-h,p=-p),1-u>1e-6?(d=Math.acos(u),f=Math.sin(d),g=Math.sin((1-i)*d)/f,m=Math.sin(i*d)/f):(g=1-i,m=i),t[0]=g*n+m*o,t[1]=g*s+m*c,t[2]=g*a+m*h,t[3]=g*l+m*p,t}function rr(t,e){let r=e[0],i=e[1],n=e[2],s=e[3],a=r*r+i*i+n*n+s*s,l=a?1/a:0;return t[0]=-r*l,t[1]=-i*l,t[2]=-n*l,t[3]=s*l,t}function ir(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t}function nr(t,e){let r=e[0]+e[4]+e[8],i;if(r>0)i=Math.sqrt(r+1),t[3]=.5*i,i=.5/i,t[0]=(e[5]-e[7])*i,t[1]=(e[6]-e[2])*i,t[2]=(e[1]-e[3])*i;else{let n=0;e[4]>e[0]&&(n=1),e[8]>e[n*3+n]&&(n=2);let s=(n+1)%3,a=(n+2)%3;i=Math.sqrt(e[n*3+n]-e[s*3+s]-e[a*3+a]+1),t[n]=.5*i,i=.5/i,t[3]=(e[s*3+a]-e[a*3+s])*i,t[s]=(e[s*3+n]+e[n*3+s])*i,t[a]=(e[a*3+n]+e[n*3+a])*i}return t}function sr(t,e,r="YXZ"){let i=Math.sin(e[0]*.5),n=Math.cos(e[0]*.5),s=Math.sin(e[1]*.5),a=Math.cos(e[1]*.5),l=Math.sin(e[2]*.5),o=Math.cos(e[2]*.5);return r==="XYZ"?(t[0]=i*a*o+n*s*l,t[1]=n*s*o-i*a*l,t[2]=n*a*l+i*s*o,t[3]=n*a*o-i*s*l):r==="YXZ"?(t[0]=i*a*o+n*s*l,t[1]=n*s*o-i*a*l,t[2]=n*a*l-i*s*o,t[3]=n*a*o+i*s*l):r==="ZXY"?(t[0]=i*a*o-n*s*l,t[1]=n*s*o+i*a*l,t[2]=n*a*l+i*s*o,t[3]=n*a*o-i*s*l):r==="ZYX"?(t[0]=i*a*o-n*s*l,t[1]=n*s*o+i*a*l,t[2]=n*a*l-i*s*o,t[3]=n*a*o+i*s*l):r==="YZX"?(t[0]=i*a*o+n*s*l,t[1]=n*s*o+i*a*l,t[2]=n*a*l-i*s*o,t[3]=n*a*o-i*s*l):r==="XZY"&&(t[0]=i*a*o-n*s*l,t[1]=n*s*o-i*a*l,t[2]=n*a*l+i*s*o,t[3]=n*a*o+i*s*l),t}var ar=Ht,or=$t;var lr=Qt;var cr=Yt;var je=class extends Array{constructor(e=0,r=0,i=0,n=1){super(e,r,i,n),this.onChange=()=>{},this._target=this;let s=["0","1","2","3"];return new Proxy(this,{set(a,l){let o=Reflect.set(...arguments);return o&&s.includes(l)&&a.onChange(),o}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}get w(){return this[3]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set w(e){this._target[3]=e,this.onChange()}identity(){return jt(this._target),this.onChange(),this}set(e,r,i,n){return e.length?this.copy(e):(or(this._target,e,r,i,n),this.onChange(),this)}rotateX(e){return Kt(this._target,this._target,e),this.onChange(),this}rotateY(e){return Jt(this._target,this._target,e),this.onChange(),this}rotateZ(e){return er(this._target,this._target,e),this.onChange(),this}inverse(e=this._target){return rr(this._target,e),this.onChange(),this}conjugate(e=this._target){return ir(this._target,e),this.onChange(),this}copy(e){return ar(this._target,e),this.onChange(),this}normalize(e=this._target){return cr(this._target,e),this.onChange(),this}multiply(e,r){return r?ct(this._target,e,r):ct(this._target,this._target,e),this.onChange(),this}dot(e){return lr(this._target,e)}fromMatrix3(e){return nr(this._target,e),this.onChange(),this}fromEuler(e,r){return sr(this._target,e,e.order),r||this.onChange(),this}fromAxisAngle(e,r){return Zt(this._target,e,r),this.onChange(),this}slerp(e,r){return tr(this._target,this._target,e,r),this.onChange(),this}fromArray(e,r=0){return this._target[0]=e[r],this._target[1]=e[r+1],this._target[2]=e[r+2],this._target[3]=e[r+3],this.onChange(),this}toArray(e=[],r=0){return e[r]=this[0],e[r+1]=this[1],e[r+2]=this[2],e[r+3]=this[3],e}};var vi=1e-6;function hr(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function fr(t,e,r,i,n,s,a,l,o,c,h,p,d,u,f,g,m){return t[0]=e,t[1]=r,t[2]=i,t[3]=n,t[4]=s,t[5]=a,t[6]=l,t[7]=o,t[8]=c,t[9]=h,t[10]=p,t[11]=d,t[12]=u,t[13]=f,t[14]=g,t[15]=m,t}function ur(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function dr(t,e){let r=e[0],i=e[1],n=e[2],s=e[3],a=e[4],l=e[5],o=e[6],c=e[7],h=e[8],p=e[9],d=e[10],u=e[11],f=e[12],g=e[13],m=e[14],v=e[15],E=r*l-i*a,y=r*o-n*a,b=r*c-s*a,x=i*o-n*l,w=i*c-s*l,M=n*c-s*o,B=h*g-p*f,T=h*m-d*f,P=h*v-u*f,U=p*m-d*g,N=p*v-u*g,I=d*v-u*m,A=E*I-y*N+b*U+x*P-w*T+M*B;return A?(A=1/A,t[0]=(l*I-o*N+c*U)*A,t[1]=(n*N-i*I-s*U)*A,t[2]=(g*M-m*w+v*x)*A,t[3]=(d*w-p*M-u*x)*A,t[4]=(o*P-a*I-c*T)*A,t[5]=(r*I-n*P+s*T)*A,t[6]=(m*b-f*M-v*y)*A,t[7]=(h*M-d*b+u*y)*A,t[8]=(a*N-l*P+c*B)*A,t[9]=(i*P-r*N-s*B)*A,t[10]=(f*w-g*b+v*E)*A,t[11]=(p*b-h*w-u*E)*A,t[12]=(l*T-a*U-o*B)*A,t[13]=(r*U-i*T+n*B)*A,t[14]=(g*y-f*x-m*E)*A,t[15]=(h*x-p*y+d*E)*A,t):null}function ht(t){let e=t[0],r=t[1],i=t[2],n=t[3],s=t[4],a=t[5],l=t[6],o=t[7],c=t[8],h=t[9],p=t[10],d=t[11],u=t[12],f=t[13],g=t[14],m=t[15],v=e*a-r*s,E=e*l-i*s,y=e*o-n*s,b=r*l-i*a,x=r*o-n*a,w=i*o-n*l,M=c*f-h*u,B=c*g-p*u,T=c*m-d*u,P=h*g-p*f,U=h*m-d*f,N=p*m-d*g;return v*N-E*U+y*P+b*T-x*B+w*M}function ft(t,e,r){let i=e[0],n=e[1],s=e[2],a=e[3],l=e[4],o=e[5],c=e[6],h=e[7],p=e[8],d=e[9],u=e[10],f=e[11],g=e[12],m=e[13],v=e[14],E=e[15],y=r[0],b=r[1],x=r[2],w=r[3];return t[0]=y*i+b*l+x*p+w*g,t[1]=y*n+b*o+x*d+w*m,t[2]=y*s+b*c+x*u+w*v,t[3]=y*a+b*h+x*f+w*E,y=r[4],b=r[5],x=r[6],w=r[7],t[4]=y*i+b*l+x*p+w*g,t[5]=y*n+b*o+x*d+w*m,t[6]=y*s+b*c+x*u+w*v,t[7]=y*a+b*h+x*f+w*E,y=r[8],b=r[9],x=r[10],w=r[11],t[8]=y*i+b*l+x*p+w*g,t[9]=y*n+b*o+x*d+w*m,t[10]=y*s+b*c+x*u+w*v,t[11]=y*a+b*h+x*f+w*E,y=r[12],b=r[13],x=r[14],w=r[15],t[12]=y*i+b*l+x*p+w*g,t[13]=y*n+b*o+x*d+w*m,t[14]=y*s+b*c+x*u+w*v,t[15]=y*a+b*h+x*f+w*E,t}function pr(t,e,r){let i=r[0],n=r[1],s=r[2],a,l,o,c,h,p,d,u,f,g,m,v;return e===t?(t[12]=e[0]*i+e[4]*n+e[8]*s+e[12],t[13]=e[1]*i+e[5]*n+e[9]*s+e[13],t[14]=e[2]*i+e[6]*n+e[10]*s+e[14],t[15]=e[3]*i+e[7]*n+e[11]*s+e[15]):(a=e[0],l=e[1],o=e[2],c=e[3],h=e[4],p=e[5],d=e[6],u=e[7],f=e[8],g=e[9],m=e[10],v=e[11],t[0]=a,t[1]=l,t[2]=o,t[3]=c,t[4]=h,t[5]=p,t[6]=d,t[7]=u,t[8]=f,t[9]=g,t[10]=m,t[11]=v,t[12]=a*i+h*n+f*s+e[12],t[13]=l*i+p*n+g*s+e[13],t[14]=o*i+d*n+m*s+e[14],t[15]=c*i+u*n+v*s+e[15]),t}function mr(t,e,r){let i=r[0],n=r[1],s=r[2];return t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t[3]=e[3]*i,t[4]=e[4]*n,t[5]=e[5]*n,t[6]=e[6]*n,t[7]=e[7]*n,t[8]=e[8]*s,t[9]=e[9]*s,t[10]=e[10]*s,t[11]=e[11]*s,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function gr(t,e,r,i){let n=i[0],s=i[1],a=i[2],l=Math.hypot(n,s,a),o,c,h,p,d,u,f,g,m,v,E,y,b,x,w,M,B,T,P,U,N,I,A,k;return Math.abs(l)<vi?null:(l=1/l,n*=l,s*=l,a*=l,o=Math.sin(r),c=Math.cos(r),h=1-c,p=e[0],d=e[1],u=e[2],f=e[3],g=e[4],m=e[5],v=e[6],E=e[7],y=e[8],b=e[9],x=e[10],w=e[11],M=n*n*h+c,B=s*n*h+a*o,T=a*n*h-s*o,P=n*s*h-a*o,U=s*s*h+c,N=a*s*h+n*o,I=n*a*h+s*o,A=s*a*h-n*o,k=a*a*h+c,t[0]=p*M+g*B+y*T,t[1]=d*M+m*B+b*T,t[2]=u*M+v*B+x*T,t[3]=f*M+E*B+w*T,t[4]=p*P+g*U+y*N,t[5]=d*P+m*U+b*N,t[6]=u*P+v*U+x*N,t[7]=f*P+E*U+w*N,t[8]=p*I+g*A+y*k,t[9]=d*I+m*A+b*k,t[10]=u*I+v*A+x*k,t[11]=f*I+E*A+w*k,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t)}function xr(t,e){return t[0]=e[12],t[1]=e[13],t[2]=e[14],t}function ut(t,e){let r=e[0],i=e[1],n=e[2],s=e[4],a=e[5],l=e[6],o=e[8],c=e[9],h=e[10];return t[0]=Math.hypot(r,i,n),t[1]=Math.hypot(s,a,l),t[2]=Math.hypot(o,c,h),t}function vr(t){let e=t[0],r=t[1],i=t[2],n=t[4],s=t[5],a=t[6],l=t[8],o=t[9],c=t[10],h=e*e+r*r+i*i,p=n*n+s*s+a*a,d=l*l+o*o+c*c;return Math.sqrt(Math.max(h,p,d))}var dt=function(){let t=[1,1,1];return function(e,r){let i=t;ut(i,r);let n=1/i[0],s=1/i[1],a=1/i[2],l=r[0]*n,o=r[1]*s,c=r[2]*a,h=r[4]*n,p=r[5]*s,d=r[6]*a,u=r[8]*n,f=r[9]*s,g=r[10]*a,m=l+p+g,v=0;return m>0?(v=Math.sqrt(m+1)*2,e[3]=.25*v,e[0]=(d-f)/v,e[1]=(u-c)/v,e[2]=(o-h)/v):l>p&&l>g?(v=Math.sqrt(1+l-p-g)*2,e[3]=(d-f)/v,e[0]=.25*v,e[1]=(o+h)/v,e[2]=(u+c)/v):p>g?(v=Math.sqrt(1+p-l-g)*2,e[3]=(u-c)/v,e[0]=(o+h)/v,e[1]=.25*v,e[2]=(d+f)/v):(v=Math.sqrt(1+g-l-p)*2,e[3]=(o-h)/v,e[0]=(u+c)/v,e[1]=(d+f)/v,e[2]=.25*v),e}}();function yr(t,e,r,i){let n=Le([t[0],t[1],t[2]]),s=Le([t[4],t[5],t[6]]),a=Le([t[8],t[9],t[10]]);ht(t)<0&&(n=-n),r[0]=t[12],r[1]=t[13],r[2]=t[14];let o=t.slice(),c=1/n,h=1/s,p=1/a;o[0]*=c,o[1]*=c,o[2]*=c,o[4]*=h,o[5]*=h,o[6]*=h,o[8]*=p,o[9]*=p,o[10]*=p,dt(e,o),i[0]=n,i[1]=s,i[2]=a}function wr(t,e,r,i){let n=t,s=e[0],a=e[1],l=e[2],o=e[3],c=s+s,h=a+a,p=l+l,d=s*c,u=s*h,f=s*p,g=a*h,m=a*p,v=l*p,E=o*c,y=o*h,b=o*p,x=i[0],w=i[1],M=i[2];return n[0]=(1-(g+v))*x,n[1]=(u+b)*x,n[2]=(f-y)*x,n[3]=0,n[4]=(u-b)*w,n[5]=(1-(d+v))*w,n[6]=(m+E)*w,n[7]=0,n[8]=(f+y)*M,n[9]=(m-E)*M,n[10]=(1-(d+g))*M,n[11]=0,n[12]=r[0],n[13]=r[1],n[14]=r[2],n[15]=1,n}function Mr(t,e){let r=e[0],i=e[1],n=e[2],s=e[3],a=r+r,l=i+i,o=n+n,c=r*a,h=i*a,p=i*l,d=n*a,u=n*l,f=n*o,g=s*a,m=s*l,v=s*o;return t[0]=1-p-f,t[1]=h+v,t[2]=d-m,t[3]=0,t[4]=h-v,t[5]=1-c-f,t[6]=u+g,t[7]=0,t[8]=d+m,t[9]=u-g,t[10]=1-c-p,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function Er(t,e,r,i,n){let s=1/Math.tan(e/2),a=1/(i-n);return t[0]=s/r,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=s,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(n+i)*a,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*n*i*a,t[15]=0,t}function br(t,e,r,i,n,s,a){let l=1/(e-r),o=1/(i-n),c=1/(s-a);return t[0]=-2*l,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*o,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*c,t[11]=0,t[12]=(e+r)*l,t[13]=(n+i)*o,t[14]=(a+s)*c,t[15]=1,t}function Ar(t,e,r,i){let n=e[0],s=e[1],a=e[2],l=i[0],o=i[1],c=i[2],h=n-r[0],p=s-r[1],d=a-r[2],u=h*h+p*p+d*d;u===0?d=1:(u=1/Math.sqrt(u),h*=u,p*=u,d*=u);let f=o*d-c*p,g=c*h-l*d,m=l*p-o*h;return u=f*f+g*g+m*m,u===0&&(c?l+=1e-6:o?c+=1e-6:o+=1e-6,f=o*d-c*p,g=c*h-l*d,m=l*p-o*h,u=f*f+g*g+m*m),u=1/Math.sqrt(u),f*=u,g*=u,m*=u,t[0]=f,t[1]=g,t[2]=m,t[3]=0,t[4]=p*m-d*g,t[5]=d*f-h*m,t[6]=h*g-p*f,t[7]=0,t[8]=h,t[9]=p,t[10]=d,t[11]=0,t[12]=n,t[13]=s,t[14]=a,t[15]=1,t}function pt(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t[3]=e[3]+r[3],t[4]=e[4]+r[4],t[5]=e[5]+r[5],t[6]=e[6]+r[6],t[7]=e[7]+r[7],t[8]=e[8]+r[8],t[9]=e[9]+r[9],t[10]=e[10]+r[10],t[11]=e[11]+r[11],t[12]=e[12]+r[12],t[13]=e[13]+r[13],t[14]=e[14]+r[14],t[15]=e[15]+r[15],t}function mt(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t[3]=e[3]-r[3],t[4]=e[4]-r[4],t[5]=e[5]-r[5],t[6]=e[6]-r[6],t[7]=e[7]-r[7],t[8]=e[8]-r[8],t[9]=e[9]-r[9],t[10]=e[10]-r[10],t[11]=e[11]-r[11],t[12]=e[12]-r[12],t[13]=e[13]-r[13],t[14]=e[14]-r[14],t[15]=e[15]-r[15],t}function Fr(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t[4]=e[4]*r,t[5]=e[5]*r,t[6]=e[6]*r,t[7]=e[7]*r,t[8]=e[8]*r,t[9]=e[9]*r,t[10]=e[10]*r,t[11]=e[11]*r,t[12]=e[12]*r,t[13]=e[13]*r,t[14]=e[14]*r,t[15]=e[15]*r,t}var Ae=class extends Array{constructor(e=1,r=0,i=0,n=0,s=0,a=1,l=0,o=0,c=0,h=0,p=1,d=0,u=0,f=0,g=0,m=1){return super(e,r,i,n,s,a,l,o,c,h,p,d,u,f,g,m),this}get x(){return this[12]}get y(){return this[13]}get z(){return this[14]}get w(){return this[15]}set x(e){this[12]=e}set y(e){this[13]=e}set z(e){this[14]=e}set w(e){this[15]=e}set(e,r,i,n,s,a,l,o,c,h,p,d,u,f,g,m){return e.length?this.copy(e):(fr(this,e,r,i,n,s,a,l,o,c,h,p,d,u,f,g,m),this)}translate(e,r=this){return pr(this,r,e),this}rotate(e,r,i=this){return gr(this,i,e,r),this}scale(e,r=this){return mr(this,r,typeof e=="number"?[e,e,e]:e),this}add(e,r){return r?pt(this,e,r):pt(this,this,e),this}sub(e,r){return r?mt(this,e,r):mt(this,this,e),this}multiply(e,r){return e.length?r?ft(this,e,r):ft(this,this,e):Fr(this,this,e),this}identity(){return ur(this),this}copy(e){return hr(this,e),this}fromPerspective({fov:e,aspect:r,near:i,far:n}={}){return Er(this,e,r,i,n),this}fromOrthogonal({left:e,right:r,bottom:i,top:n,near:s,far:a}){return br(this,e,r,i,n,s,a),this}fromQuaternion(e){return Mr(this,e),this}setPosition(e){return this.x=e[0],this.y=e[1],this.z=e[2],this}inverse(e=this){return dr(this,e),this}compose(e,r,i){return wr(this,e,r,i),this}decompose(e,r,i){return yr(this,e,r,i),this}getRotation(e){return dt(e,this),this}getTranslation(e){return xr(e,this),this}getScaling(e){return ut(e,this),this}getMaxScaleOnAxis(){return vr(this)}lookAt(e,r,i){return Ar(this,e,r,i),this}determinant(){return ht(this)}fromArray(e,r=0){return this[0]=e[r],this[1]=e[r+1],this[2]=e[r+2],this[3]=e[r+3],this[4]=e[r+4],this[5]=e[r+5],this[6]=e[r+6],this[7]=e[r+7],this[8]=e[r+8],this[9]=e[r+9],this[10]=e[r+10],this[11]=e[r+11],this[12]=e[r+12],this[13]=e[r+13],this[14]=e[r+14],this[15]=e[r+15],this}toArray(e=[],r=0){return e[r]=this[0],e[r+1]=this[1],e[r+2]=this[2],e[r+3]=this[3],e[r+4]=this[4],e[r+5]=this[5],e[r+6]=this[6],e[r+7]=this[7],e[r+8]=this[8],e[r+9]=this[9],e[r+10]=this[10],e[r+11]=this[11],e[r+12]=this[12],e[r+13]=this[13],e[r+14]=this[14],e[r+15]=this[15],e}};function Sr(t,e,r="YXZ"){return r==="XYZ"?(t[1]=Math.asin(Math.min(Math.max(e[8],-1),1)),Math.abs(e[8])<.99999?(t[0]=Math.atan2(-e[9],e[10]),t[2]=Math.atan2(-e[4],e[0])):(t[0]=Math.atan2(e[6],e[5]),t[2]=0)):r==="YXZ"?(t[0]=Math.asin(-Math.min(Math.max(e[9],-1),1)),Math.abs(e[9])<.99999?(t[1]=Math.atan2(e[8],e[10]),t[2]=Math.atan2(e[1],e[5])):(t[1]=Math.atan2(-e[2],e[0]),t[2]=0)):r==="ZXY"?(t[0]=Math.asin(Math.min(Math.max(e[6],-1),1)),Math.abs(e[6])<.99999?(t[1]=Math.atan2(-e[2],e[10]),t[2]=Math.atan2(-e[4],e[5])):(t[1]=0,t[2]=Math.atan2(e[1],e[0]))):r==="ZYX"?(t[1]=Math.asin(-Math.min(Math.max(e[2],-1),1)),Math.abs(e[2])<.99999?(t[0]=Math.atan2(e[6],e[10]),t[2]=Math.atan2(e[1],e[0])):(t[0]=0,t[2]=Math.atan2(-e[4],e[5]))):r==="YZX"?(t[2]=Math.asin(Math.min(Math.max(e[1],-1),1)),Math.abs(e[1])<.99999?(t[0]=Math.atan2(-e[9],e[5]),t[1]=Math.atan2(-e[2],e[0])):(t[0]=0,t[1]=Math.atan2(e[8],e[10]))):r==="XZY"&&(t[2]=Math.asin(-Math.min(Math.max(e[4],-1),1)),Math.abs(e[4])<.99999?(t[0]=Math.atan2(e[6],e[5]),t[1]=Math.atan2(e[8],e[0])):(t[0]=Math.atan2(-e[9],e[10]),t[1]=0)),t}var Tr=new Ae,Ze=class extends Array{constructor(e=0,r=e,i=e,n="YXZ"){super(e,r,i),this.order=n,this.onChange=()=>{},this._target=this;let s=["0","1","2"];return new Proxy(this,{set(a,l){let o=Reflect.set(...arguments);return o&&s.includes(l)&&a.onChange(),o}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set(e,r=e,i=e){return e.length?this.copy(e):(this._target[0]=e,this._target[1]=r,this._target[2]=i,this.onChange(),this)}copy(e){return this._target[0]=e[0],this._target[1]=e[1],this._target[2]=e[2],this.onChange(),this}reorder(e){return this._target.order=e,this.onChange(),this}fromRotationMatrix(e,r=this.order){return Sr(this._target,e,r),this.onChange(),this}fromQuaternion(e,r=this.order,i){return Tr.fromQuaternion(e),this._target.fromRotationMatrix(Tr,r),i||this.onChange(),this}fromArray(e,r=0){return this._target[0]=e[r],this._target[1]=e[r+1],this._target[2]=e[r+2],this}toArray(e=[],r=0){return e[r]=this[0],e[r+1]=this[1],e[r+2]=this[2],e}};var Ke=class{constructor(){this.parent=null,this.children=[],this.visible=!0,this.matrix=new Ae,this.worldMatrix=new Ae,this.matrixAutoUpdate=!0,this.worldMatrixNeedsUpdate=!1,this.position=new pe,this.quaternion=new je,this.scale=new pe(1),this.rotation=new Ze,this.up=new pe(0,1,0),this.rotation._target.onChange=()=>this.quaternion.fromEuler(this.rotation,!0),this.quaternion._target.onChange=()=>this.rotation.fromQuaternion(this.quaternion,void 0,!0)}setParent(e,r=!0){this.parent&&e!==this.parent&&this.parent.removeChild(this,!1),this.parent=e,r&&e&&e.addChild(this,!1)}addChild(e,r=!0){~this.children.indexOf(e)||this.children.push(e),r&&e.setParent(this,!1)}removeChild(e,r=!0){~this.children.indexOf(e)&&this.children.splice(this.children.indexOf(e),1),r&&e.setParent(null,!1)}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.worldMatrixNeedsUpdate||e)&&(this.parent===null?this.worldMatrix.copy(this.matrix):this.worldMatrix.multiply(this.parent.worldMatrix,this.matrix),this.worldMatrixNeedsUpdate=!1,e=!0);for(let r=0,i=this.children.length;r<i;r++)this.children[r].updateMatrixWorld(e)}updateMatrix(){this.matrix.compose(this.quaternion,this.position,this.scale),this.worldMatrixNeedsUpdate=!0}traverse(e){if(!e(this))for(let r=0,i=this.children.length;r<i;r++)this.children[r].traverse(e)}decompose(){this.matrix.decompose(this.quaternion._target,this.position,this.scale),this.rotation.fromQuaternion(this.quaternion)}lookAt(e,r=!1){r?this.matrix.lookAt(this.position,e,this.up):this.matrix.lookAt(e,this.position,this.up),this.matrix.getRotation(this.quaternion._target),this.rotation.fromQuaternion(this.quaternion)}};function _r(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[4],t[4]=e[5],t[5]=e[6],t[6]=e[8],t[7]=e[9],t[8]=e[10],t}function Rr(t,e){let r=e[0],i=e[1],n=e[2],s=e[3],a=r+r,l=i+i,o=n+n,c=r*a,h=i*a,p=i*l,d=n*a,u=n*l,f=n*o,g=s*a,m=s*l,v=s*o;return t[0]=1-p-f,t[3]=h-v,t[6]=d+m,t[1]=h+v,t[4]=1-c-f,t[7]=u-g,t[2]=d-m,t[5]=u+g,t[8]=1-c-p,t}function Cr(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function Lr(t,e,r,i,n,s,a,l,o,c){return t[0]=e,t[1]=r,t[2]=i,t[3]=n,t[4]=s,t[5]=a,t[6]=l,t[7]=o,t[8]=c,t}function Pr(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function zr(t,e){let r=e[0],i=e[1],n=e[2],s=e[3],a=e[4],l=e[5],o=e[6],c=e[7],h=e[8],p=h*a-l*c,d=-h*s+l*o,u=c*s-a*o,f=r*p+i*d+n*u;return f?(f=1/f,t[0]=p*f,t[1]=(-h*i+n*c)*f,t[2]=(l*i-n*a)*f,t[3]=d*f,t[4]=(h*r-n*o)*f,t[5]=(-l*r+n*s)*f,t[6]=u*f,t[7]=(-c*r+i*o)*f,t[8]=(a*r-i*s)*f,t):null}function gt(t,e,r){let i=e[0],n=e[1],s=e[2],a=e[3],l=e[4],o=e[5],c=e[6],h=e[7],p=e[8],d=r[0],u=r[1],f=r[2],g=r[3],m=r[4],v=r[5],E=r[6],y=r[7],b=r[8];return t[0]=d*i+u*a+f*c,t[1]=d*n+u*l+f*h,t[2]=d*s+u*o+f*p,t[3]=g*i+m*a+v*c,t[4]=g*n+m*l+v*h,t[5]=g*s+m*o+v*p,t[6]=E*i+y*a+b*c,t[7]=E*n+y*l+b*h,t[8]=E*s+y*o+b*p,t}function Ir(t,e,r){let i=e[0],n=e[1],s=e[2],a=e[3],l=e[4],o=e[5],c=e[6],h=e[7],p=e[8],d=r[0],u=r[1];return t[0]=i,t[1]=n,t[2]=s,t[3]=a,t[4]=l,t[5]=o,t[6]=d*i+u*a+c,t[7]=d*n+u*l+h,t[8]=d*s+u*o+p,t}function kr(t,e,r){let i=e[0],n=e[1],s=e[2],a=e[3],l=e[4],o=e[5],c=e[6],h=e[7],p=e[8],d=Math.sin(r),u=Math.cos(r);return t[0]=u*i+d*a,t[1]=u*n+d*l,t[2]=u*s+d*o,t[3]=u*a-d*i,t[4]=u*l-d*n,t[5]=u*o-d*s,t[6]=c,t[7]=h,t[8]=p,t}function Ur(t,e,r){let i=r[0],n=r[1];return t[0]=i*e[0],t[1]=i*e[1],t[2]=i*e[2],t[3]=n*e[3],t[4]=n*e[4],t[5]=n*e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function Dr(t,e){let r=e[0],i=e[1],n=e[2],s=e[3],a=e[4],l=e[5],o=e[6],c=e[7],h=e[8],p=e[9],d=e[10],u=e[11],f=e[12],g=e[13],m=e[14],v=e[15],E=r*l-i*a,y=r*o-n*a,b=r*c-s*a,x=i*o-n*l,w=i*c-s*l,M=n*c-s*o,B=h*g-p*f,T=h*m-d*f,P=h*v-u*f,U=p*m-d*g,N=p*v-u*g,I=d*v-u*m,A=E*I-y*N+b*U+x*P-w*T+M*B;return A?(A=1/A,t[0]=(l*I-o*N+c*U)*A,t[1]=(o*P-a*I-c*T)*A,t[2]=(a*N-l*P+c*B)*A,t[3]=(n*N-i*I-s*U)*A,t[4]=(r*I-n*P+s*T)*A,t[5]=(i*P-r*N-s*B)*A,t[6]=(g*M-m*w+v*x)*A,t[7]=(m*b-f*M-v*y)*A,t[8]=(f*w-g*b+v*E)*A,t):null}var Je=class extends Array{constructor(e=1,r=0,i=0,n=0,s=1,a=0,l=0,o=0,c=1){return super(e,r,i,n,s,a,l,o,c),this}set(e,r,i,n,s,a,l,o,c){return e.length?this.copy(e):(Lr(this,e,r,i,n,s,a,l,o,c),this)}translate(e,r=this){return Ir(this,r,e),this}rotate(e,r=this){return kr(this,r,e),this}scale(e,r=this){return Ur(this,r,e),this}multiply(e,r){return r?gt(this,e,r):gt(this,this,e),this}identity(){return Pr(this),this}copy(e){return Cr(this,e),this}fromMatrix4(e){return _r(this,e),this}fromQuaternion(e){return Rr(this,e),this}fromBasis(e,r,i){return this.set(e[0],e[1],e[2],r[0],r[1],r[2],i[0],i[1],i[2]),this}inverse(e=this){return zr(this,e),this}getNormalMatrix(e){return Dr(this,e),this}};var Ei=0,Be=class extends Ke{constructor(e,{geometry:r,program:i,mode:n=e.TRIANGLES,frustumCulled:s=!0,renderOrder:a=0}={}){super(),e.canvas||console.error("gl not passed as first argument to Mesh"),this.gl=e,this.id=Ei++,this.geometry=r,this.program=i,this.mode=n,this.frustumCulled=s,this.renderOrder=a,this.modelViewMatrix=new Ae,this.normalMatrix=new Je,this.beforeRenderCallbacks=[],this.afterRenderCallbacks=[]}onBeforeRender(e){return this.beforeRenderCallbacks.push(e),this}onAfterRender(e){return this.afterRenderCallbacks.push(e),this}draw({camera:e}={}){e&&(this.program.uniforms.modelMatrix||Object.assign(this.program.uniforms,{modelMatrix:{value:null},viewMatrix:{value:null},modelViewMatrix:{value:null},normalMatrix:{value:null},projectionMatrix:{value:null},cameraPosition:{value:null}}),this.program.uniforms.projectionMatrix.value=e.projectionMatrix,this.program.uniforms.cameraPosition.value=e.worldPosition,this.program.uniforms.viewMatrix.value=e.viewMatrix,this.modelViewMatrix.multiply(e.viewMatrix,this.worldMatrix),this.normalMatrix.getNormalMatrix(this.modelViewMatrix),this.program.uniforms.modelMatrix.value=this.worldMatrix,this.program.uniforms.modelViewMatrix.value=this.modelViewMatrix,this.program.uniforms.normalMatrix.value=this.normalMatrix),this.beforeRenderCallbacks.forEach(i=>i&&i({mesh:this,camera:e}));let r=this.program.cullFace&&this.worldMatrix.determinant()<0;this.program.use({flipFaces:r}),this.geometry.draw({mode:this.mode,program:this.program}),this.afterRenderCallbacks.forEach(i=>i&&i({mesh:this,camera:e}))}};var Or=new Uint8Array(4);function Br(t){return(t&t-1)===0}var bi=1,Ie=class{constructor(e,{image:r,target:i=e.TEXTURE_2D,type:n=e.UNSIGNED_BYTE,format:s=e.RGBA,internalFormat:a=s,wrapS:l=e.CLAMP_TO_EDGE,wrapT:o=e.CLAMP_TO_EDGE,wrapR:c=e.CLAMP_TO_EDGE,generateMipmaps:h=i===(e.TEXTURE_2D||e.TEXTURE_CUBE_MAP),minFilter:p=h?e.NEAREST_MIPMAP_LINEAR:e.LINEAR,magFilter:d=e.LINEAR,premultiplyAlpha:u=!1,unpackAlignment:f=4,flipY:g=i==(e.TEXTURE_2D||e.TEXTURE_3D),anisotropy:m=0,level:v=0,width:E,height:y=E,length:b=1}={}){this.gl=e,this.id=bi++,this.image=r,this.target=i,this.type=n,this.format=s,this.internalFormat=a,this.minFilter=p,this.magFilter=d,this.wrapS=l,this.wrapT=o,this.wrapR=c,this.generateMipmaps=h,this.premultiplyAlpha=u,this.unpackAlignment=f,this.flipY=g,this.anisotropy=Math.min(m,this.gl.renderer.parameters.maxAnisotropy),this.level=v,this.width=E,this.height=y,this.length=b,this.texture=this.gl.createTexture(),this.store={image:null},this.glState=this.gl.renderer.state,this.state={},this.state.minFilter=this.gl.NEAREST_MIPMAP_LINEAR,this.state.magFilter=this.gl.LINEAR,this.state.wrapS=this.gl.REPEAT,this.state.wrapT=this.gl.REPEAT,this.state.anisotropy=0}bind(){this.glState.textureUnits[this.glState.activeTextureUnit]!==this.id&&(this.gl.bindTexture(this.target,this.texture),this.glState.textureUnits[this.glState.activeTextureUnit]=this.id)}update(e=0){let r=!(this.image===this.store.image&&!this.needsUpdate);if((r||this.glState.textureUnits[e]!==this.id)&&(this.gl.renderer.activeTexture(e),this.bind()),!!r){if(this.needsUpdate=!1,this.flipY!==this.glState.flipY&&(this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,this.flipY),this.glState.flipY=this.flipY),this.premultiplyAlpha!==this.glState.premultiplyAlpha&&(this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),this.glState.premultiplyAlpha=this.premultiplyAlpha),this.unpackAlignment!==this.glState.unpackAlignment&&(this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,this.unpackAlignment),this.glState.unpackAlignment=this.unpackAlignment),this.minFilter!==this.state.minFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MIN_FILTER,this.minFilter),this.state.minFilter=this.minFilter),this.magFilter!==this.state.magFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MAG_FILTER,this.magFilter),this.state.magFilter=this.magFilter),this.wrapS!==this.state.wrapS&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_S,this.wrapS),this.state.wrapS=this.wrapS),this.wrapT!==this.state.wrapT&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_T,this.wrapT),this.state.wrapT=this.wrapT),this.wrapR!==this.state.wrapR&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_R,this.wrapR),this.state.wrapR=this.wrapR),this.anisotropy&&this.anisotropy!==this.state.anisotropy&&(this.gl.texParameterf(this.target,this.gl.renderer.getExtension("EXT_texture_filter_anisotropic").TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropy),this.state.anisotropy=this.anisotropy),this.image){if(this.image.width&&(this.width=this.image.width,this.height=this.image.height),this.target===this.gl.TEXTURE_CUBE_MAP)for(let i=0;i<6;i++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+i,this.level,this.internalFormat,this.format,this.type,this.image[i]);else if(ArrayBuffer.isView(this.image))this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,this.image):(this.target===this.gl.TEXTURE_2D_ARRAY||this.target===this.gl.TEXTURE_3D)&&this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,this.image);else if(this.image.isCompressedTexture)for(let i=0;i<this.image.length;i++)this.gl.compressedTexImage2D(this.target,i,this.internalFormat,this.image[i].width,this.image[i].height,0,this.image[i].data);else this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.format,this.type,this.image):this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,this.image);this.generateMipmaps&&(!this.gl.renderer.isWebgl2&&(!Br(this.image.width)||!Br(this.image.height))?(this.generateMipmaps=!1,this.wrapS=this.wrapT=this.gl.CLAMP_TO_EDGE,this.minFilter=this.gl.LINEAR):this.gl.generateMipmap(this.target)),this.onUpdate&&this.onUpdate()}else if(this.target===this.gl.TEXTURE_CUBE_MAP)for(let i=0;i<6;i++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,Or);else this.width?this.target===this.gl.TEXTURE_2D?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,null):this.gl.texImage3D(this.target,this.level,this.internalFormat,this.width,this.height,this.length,0,this.format,this.type,null):this.gl.texImage2D(this.target,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,Or);this.store.image=this.image}}};var Ne=class extends Qe{constructor(e,{attributes:r={}}={}){Object.assign(r,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),super(e,r)}};var Hr=`data:image/svg+xml;charset=utf-8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><path d="M39 3 12 37h17l-4 24 27-34H35z" fill="#fff"/></svg>')}`,Ai=560,ve=4,Ve=1e20,Re=5,qe=3,Fi=4e6,Nr=t=>{let e=String(t||"").replace("#","");e.length===3&&(e=e.replace(/./g,i=>i+i));let r=parseInt(e.slice(0,6),16);return Number.isNaN(r)?[1,1,1]:[(r>>16&255)/255,(r>>8&255)/255,(r&255)/255]},Vr=(t,e,r,i,n)=>{let s=0;r[0]=0,i[0]=-Ve,i[1]=Ve;for(let a=1;a<n;a++){let l=(t[a]+a*a-(t[r[s]]+r[s]*r[s]))/(2*a-2*r[s]);for(;l<=i[s];)s--,l=(t[a]+a*a-(t[r[s]]+r[s]*r[s]))/(2*a-2*r[s]);s++,r[s]=a,i[s]=l,i[s+1]=Ve}s=0;for(let a=0;a<n;a++){for(;i[s+1]<a;)s++;e[a]=(a-r[s])*(a-r[s])+t[r[s]]}},qr=(t,e,r)=>{let i=Math.max(e,r),n=new Float64Array(i),s=new Float64Array(i),a=new Int32Array(i),l=new Float64Array(i+1);for(let o=0;o<e;o++){for(let c=0;c<r;c++)n[c]=t[c*e+o];Vr(n,s,a,l,r);for(let c=0;c<r;c++)t[c*e+o]=s[c]}for(let o=0;o<r;o++){for(let c=0;c<e;c++)n[c]=t[o*e+c];Vr(n,s,a,l,e);for(let c=0;c<e;c++)t[o*e+c]=s[c]}},Gr=(t,e,r,i,n,s)=>{let a=1/(2*s+1),l=0;for(let o=0;o<=s&&o<n;o++)l+=t[r+o*i];for(let o=0;o<n;o++)e[r+o*i]=l*a,o+s+1<n&&(l+=t[r+(o+s+1)*i]),o-s>=0&&(l-=t[r+(o-s)*i])},Wr=(t,e,r,i)=>{let n=new Float32Array(e*r);for(let s=0;s<3;s++){for(let a=0;a<r;a++)Gr(t,n,a*e,1,e,i);for(let a=0;a<e;a++)Gr(n,t,a,e,r,i)}},Si=(t,e,r)=>{let i=new Float32Array(e*r),n=0;for(let h=0;h<e*r;h++)t[h*4+3]<250&&n++;if(n>e*r*.01){for(let h=0;h<e*r;h++)i[h]=t[h*4+3]/255;return i}let s=0,a=0,l=0,o=0,c=h=>{s+=t[h*4],a+=t[h*4+1],l+=t[h*4+2],o++};for(let h=0;h<e;h++)c(h),c((r-1)*e+h);for(let h=0;h<r;h++)c(h*e),c(h*e+e-1);s/=o,a/=o,l/=o;for(let h=0;h<e*r;h++){let p=Math.max(Math.abs(t[h*4]-s),Math.abs(t[h*4+1]-a),Math.abs(t[h*4+2]-l));i[h]=Math.min(1,Math.max(0,(p-24)/48))}return i},Xr=(t,e,r)=>{let{field:i,width:n,height:s}=t,a=Math.min(Math.max(e,.5),n-.5),l=Math.min(Math.max(r,.5),s-.5),o=Math.min(Math.floor(a-.5),n-2),c=Math.min(Math.floor(l-.5),s-2),h=a-.5-o,p=l-.5-c,d=c*n+o,u=i[d]+(i[d+1]-i[d])*h,f=i[d+n]+(i[d+n+1]-i[d+n])*h;return u+(f-u)*p+Math.hypot(e-a,r-l)},Ti=t=>{let e=t.naturalWidth||t.width,r=t.naturalHeight||t.height;if(!e||!r)return null;let i=Ai/Math.max(e,r),n=Math.max(2,Math.round(e*i)),s=Math.max(2,Math.round(r*i)),a=document.createElement("canvas");a.width=n,a.height=s;let l=a.getContext("2d",{willReadFrequently:!0});if(!l)return null;l.drawImage(t,0,0,n,s);let o=Si(l.getImageData(0,0,n,s).data,n,s),c=n,h=s,p=-1,d=-1;for(let C=0;C<s;C++)for(let q=0;q<n;q++)o[C*n+q]<=.01||(q<c&&(c=q),q>p&&(p=q),C<h&&(h=C),C>d&&(d=C));if(p<0)return null;let u=p-c+1,f=d-h+1,g=Math.ceil(Math.max(u,f)*.25)+2,m=u+g*2,v=f+g*2,E=new Float32Array(m*v),y=new Float32Array(m*v);for(let C=0;C<v;C++)for(let q=0;q<m;q++){let j=q-g+c,H=C-g+h,le=j>=0&&H>=0&&j<n&&H<s?o[H*n+j]:0,K=C*m+q;if(le>=1)E[K]=0,y[K]=Ve;else if(le<=0)E[K]=Ve,y[K]=0;else{let ee=.5-le;E[K]=ee>0?ee*ee:0,y[K]=ee<0?ee*ee:0}}qr(E,m,v),qr(y,m,v);let b=new Float32Array(m*v);for(let C=0;C<m*v;C++)b[C]=Math.sqrt(E[C])-Math.sqrt(y[C]);let x=[];for(let C=1;C<v-1;C++)for(let q=1;q<m-1;q++){let j=C*m+q,H=b[j];if(H>0||b[j-1]<=0&&b[j+1]<=0&&b[j-m]<=0&&b[j+m]<=0)continue;let le=b[j+1]-b[j-1],K=b[j+m]-b[j-m],ee=Math.hypot(le,K)||1;x.push(q+.5-H*le/ee,C+.5-H*K/ee)}let w=Math.max(1,Math.ceil(x.length/2/3e3))*2,M=[];for(let C=0;C<x.length;C+=w)M.push(x[C],x[C+1]);let B=Math.max(u,f),T=Math.ceil(B*.7/ve),P=Math.ceil(u/ve)+T*2,U=Math.ceil(f/ve)+T*2,N=new Float32Array(P*U);for(let C=0;C<v;C++){let q=Math.floor((C-g)/ve)+T;for(let j=0;j<m;j++){let H=Math.floor((j-g)/ve)+T;N[q*P+H]+=Math.exp(-Math.abs(b[C*m+j])/1.5)/(ve*ve)}}let I=N.slice(),A=Math.max(1,Math.round(B*.035/ve)),k=Math.max(2,Math.round(B*.13/ve));Wr(N,P,U,A),Wr(I,P,U,k);let $=Math.sqrt(2*Math.PI*(A*A+A))*ve/3,G=Math.sqrt(2*Math.PI*(k*k+k))*ve/3,_=new Float32Array(P*U*2);for(let C=0;C<P*U;C++)_[C*2]=N[C]*$,_[C*2+1]=I[C]*G;return{field:b,edges:M,width:m,height:v,pad:g,logoWidth:u,logoHeight:f,glow:_,glowWidth:P,glowHeight:U,glowOffset:g-T*ve}},xt=(t,e,r)=>{let{edges:i,logoWidth:n,logoHeight:s}=t,a=i.length/2;if(a<2)return null;let l=Math.max(n,s),o=Math.floor(Math.random()*a);if(r){let p=!1;for(let d=0;d<40&&!p;d++){let u=Math.floor(Math.random()*a);Math.hypot(i[u*2]-r.x,i[u*2+1]-r.y)<r.radius&&(o=u,p=!0)}if(!p)return null}let c=i[o*2],h=i[o*2+1];for(let p=0;p<24;p++){let d=Math.floor(Math.random()*a),u=i[d*2],f=i[d*2+1],g=Math.hypot(u-c,f-h);if(g<l*.08||g>l*.3)continue;let m=-(f-h)/g,v=(u-c)/g,E=g*(.2+Math.random()*.3),y=(c+u)/2,b=(h+f)/2,x=Xr(t,y+m*E,b+v*E),w=Xr(t,y-m*E,b-v*E);if(!(Math.max(x,w)<=0))return{ax:c,ay:h,bx:u,by:f,bow:x>=w?E:-E,seed:1+Math.random()*60,born:e,life:.35+Math.random()*.45}}return null},_i=`#version 300 es
in vec2 position;
in vec2 uv;
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`,Ri=`#version 300 es
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
uniform vec4 uPulses[${qe}];
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
uniform vec4 uArcEnds[${Re}];
uniform vec4 uArcShape[${Re}];

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
  return textureLod(tex, f / (size.zw * ${ve}.0), 0.0).rg;
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
  for (int i = 0; i < ${qe}; i++) {
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

  for (int i = 0; i < ${Re}; i++) addArc(pr, uArcEnds[i], uArcShape[i], t, light, energy, hot);

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
`,Ci={src:Hr,color:"#ecc7ff",glowColor:"#ad6dff",scale:.7,intensity:1,glow:1,thickness:1.5,strands:4,bend:.6,crackle:1.5,arcs:1,flicker:.6,fill:0,speed:2.5,interactive:!0,cursorIntensity:.75,cursorRadius:100,theme:"dark",onRender:void 0};function $r(t,e={}){let r={...Ci,...e},i={current:null},n=new Oe({dpr:Math.min(window.devicePixelRatio||1,2),alpha:!0,premultipliedAlpha:!0,antialias:!1}),s=n.gl;if(!n.isWebgl2)return s.getExtension("WEBGL_lose_context")?.loseContext(),null;let a=!0,l=S=>{let F=new Image;F.crossOrigin="anonymous",F.decoding="async",F.onload=()=>{if(!a)return;let V=null;try{V=Ti(F)}catch{V=null}V&&(i.current=V)},F.src=S||Hr};l(r.src),t.classList.add("electric-logo"),s.clearColor(0,0,0,0);let o=s.canvas;o.style.display="block",o.style.width="100%",o.style.height="100%",t.appendChild(o);let c=()=>({shape:null,field:new Ie(s,{image:new Float32Array([1e3]),width:1,height:1,internalFormat:s.R16F,format:s.RED,type:s.FLOAT,minFilter:s.LINEAR,magFilter:s.LINEAR,generateMipmaps:!1,flipY:!1,unpackAlignment:1}),glow:new Ie(s,{image:new Float32Array([0,0]),width:1,height:1,internalFormat:s.RG16F,format:s.RG,type:s.FLOAT,minFilter:s.LINEAR,magFilter:s.LINEAR,generateMipmaps:!1,flipY:!1,unpackAlignment:1})}),h=[c(),c()],p=Array.from({length:Re*4},()=>0),d=Array.from({length:Re*4},()=>0),u=Array.from({length:qe*4},()=>0),f={tFieldFrom:{value:h[1].field},tGlowFrom:{value:h[1].glow},tFieldTo:{value:h[0].field},tGlowTo:{value:h[0].glow},uMapFrom:{value:[0,0,1,0]},uSizeFrom:{value:[1,1,1,1]},uMapTo:{value:[0,0,1,0]},uSizeTo:{value:[1,1,1,1]},uMorph:{value:1},uResolution:{value:[1,1]},uUnit:{value:1},uTime:{value:0},uPresence:{value:0},uHover:{value:[0,0,0]},uHoverRadius:{value:120},uPulses:{value:u},uPulseBoost:{value:0},uFlash:{value:0},uColor:{value:[1,1,1]},uGlowColor:{value:[.43,.48,1]},uIntensity:{value:1},uGlow:{value:1},uThickness:{value:1.8},uStrands:{value:3},uBend:{value:1},uCrackle:{value:1},uFlicker:{value:.4},uFill:{value:.5},uInk:{value:0},uArcEnds:{value:p},uArcShape:{value:d}},g=new Be(s,{geometry:new Ne(s),program:new De(s,{vertex:_i,fragment:Ri,uniforms:f,depthTest:!1,depthWrite:!1})}),m=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,v={x:0,y:0,over:!1},E={x:0,y:0,vx:0,vy:0,power:0},y=[],b=[],x=0,w=null,M=1,B=null,T=0,P=0,U=[[1,1,1],[1,1,1]],N=!1,I=0,A=1,k=1,$=0,G=performance.now(),_=!0,C=(S,F)=>{S.shape=F,S.field.image=F.field,S.field.width=F.width,S.field.height=F.height,S.field.needsUpdate=!0,S.glow.image=F.glow,S.glow.width=F.glowWidth,S.glow.height=F.glowHeight,S.glow.needsUpdate=!0},q=(S,F)=>{let V=Math.max(1e-4,Math.min(A*F.scale/S.logoWidth,k*F.scale/S.logoHeight));return{fit:V,ox:A/2-(S.pad+S.logoWidth/2)*V,oy:k/2-(S.pad+S.logoHeight/2)*V,unit:Math.max(S.logoWidth,S.logoHeight)*V/100}},j=()=>{A=Math.max(1,t.clientWidth),k=Math.max(1,t.clientHeight),n.dpr=Math.min(window.devicePixelRatio||1,2,Math.sqrt(Fi/(A*k))),n.setSize(A,k),f.uResolution.value=[A,k]},H=S=>{$=0;let F=r,V=Math.min(.05,Math.max(0,(S-G)/1e3));G=S;let ae=i.current;ae&&ae!==h[x].shape&&(w=ae),w&&M>=1&&(h[x].shape&&(x=1-x,M=0,y.length=0),C(h[x],w),w=null),M<1&&(M=Math.min(1,M+V/(w?.3:1.6)));let J=h[x].shape,ce=M<1?h[1-x].shape:null;J&&(T=Math.min(1,T+V/1.4));let z=T*T*(3-2*T);if(J&&F){let R=q(J,F),Z=ce?q(ce,F):R,re=M*M*(3-2*M),ie=Z.unit+(R.unit-Z.unit)*re,oe=F.interactive&&v.over;oe&&E.power<.01&&(E.x=v.x,E.y=v.y,E.vx=0,E.vy=0),E.vx+=((v.x-E.x)*120-E.vx*19)*V,E.vy+=((v.y-E.y)*120-E.vy*19)*V,E.x+=E.vx*V,E.y+=E.vy*V,E.power+=((oe?1:0)-E.power)*(1-Math.exp(-V/(oe?.3:.55)));let te=m?.2:1;I+=V*F.speed*te;for(let W=y.length-1;W>=0;W--)I-y[W].born>y[W].life&&y.splice(W,1);let he=W=>({x:(W.x-R.ox)/R.fit,y:(W.y-R.oy)/R.fit,radius:Math.max(1,F.cursorRadius)/R.fit});if(B&&M>=1&&F.arcs>0)for(let W=0;W<3&&y.length<Re;W++){let Y=xt(J,I,he(B));Y&&y.push(Y)}if(B=null,!m&&z>.8&&M>=1&&y.length<Re){let W=V*F.speed*F.arcs;if(Math.random()<W*6*E.power*F.cursorIntensity){let Y=xt(J,I,he(E));Y&&y.push(Y)}else if(Math.random()<W*2.2){let Y=xt(J,I,null);Y&&y.push(Y)}}for(let W=0;W<Re;W++){let Y=W*4,ne=y[W];if(!ne){d[Y+1]=0;continue}let ye=(I-ne.born)/ne.life;p[Y]=R.ox+ne.ax*R.fit,p[Y+1]=R.oy+ne.ay*R.fit,p[Y+2]=R.ox+ne.bx*R.fit,p[Y+3]=R.oy+ne.by*R.fit,d[Y]=ne.bow*R.fit,d[Y+1]=Math.sin(Math.PI*Math.min(1,Math.max(0,ye)))*z,d[Y+2]=ne.seed}let fe=0,we=0;for(let W=b.length-1;W>=0;W--)(S-b[W].born)/1e3>2&&b.splice(W,1);for(let W=0;W<qe;W++){let Y=W*4,ne=b[W];if(!ne){u[Y+3]=0;continue}let ye=(S-ne.born)/1e3;u[Y]=ne.x,u[Y+1]=ne.y,u[Y+2]=ye,u[Y+3]=1,fe=Math.max(fe,Math.exp(-ye*1.7)),we+=Math.exp(-ye*7)}let de=h[1-x];f.tFieldTo.value=h[x].field,f.tGlowTo.value=h[x].glow,f.tFieldFrom.value=de.field,f.tGlowFrom.value=de.glow,f.uMapTo.value=[R.ox,R.oy,R.fit,J.glowOffset],f.uSizeTo.value=[J.width,J.height,J.glowWidth,J.glowHeight],ce&&(f.uMapFrom.value=[Z.ox,Z.oy,Z.fit,ce.glowOffset],f.uSizeFrom.value=[ce.width,ce.height,ce.glowWidth,ce.glowHeight]),f.uMorph.value=M,f.uUnit.value=ie,f.uTime.value=I,f.uPresence.value=z,f.uHover.value=[E.x,E.y,E.power*Math.max(0,F.cursorIntensity)],f.uHoverRadius.value=Math.max(1,F.cursorRadius),f.uPulseBoost.value=fe,f.uFlash.value=we;let ge=[Nr(F.color),Nr(F.glowColor)],Ee=N?1-Math.exp(-V/.35):1;N=!0;for(let W=0;W<2;W++)for(let Y=0;Y<3;Y++)U[W][Y]+=(ge[W][Y]-U[W][Y])*Ee;f.uColor.value=U[0].slice(),f.uGlowColor.value=U[1].slice(),f.uIntensity.value=F.intensity,f.uGlow.value=F.glow,f.uThickness.value=F.thickness,f.uStrands.value=Math.max(1,Math.min(6,Math.round(F.strands))),f.uBend.value=F.bend,f.uCrackle.value=F.crackle,f.uFlicker.value=m?0:F.flicker,P+=((F.theme==="light"?1:0)-P)*(1-Math.exp(-V/.25)),f.uFill.value=F.fill,f.uInk.value=P,n.render({scene:g}),F.onRender?.(o)}_&&($=requestAnimationFrame(H))},le=()=>{$||!_||(G=performance.now(),$=requestAnimationFrame(H))},K=S=>{let F=t.getBoundingClientRect();v.x=S.clientX-F.left,v.y=S.clientY-F.top,v.over=!0},ee=S=>{K(S),!(!r.interactive||m)&&(b.push({x:v.x,y:v.y,born:performance.now()}),b.length>qe&&b.shift(),B={x:v.x,y:v.y})},me=()=>{v.over=!1};t.addEventListener("pointermove",K),t.addEventListener("pointerdown",ee),t.addEventListener("pointerleave",me),t.addEventListener("pointercancel",me);let X=new ResizeObserver(j);X.observe(t);let D=new IntersectionObserver(([S])=>{_=S.isIntersecting,le()});return D.observe(t),j(),le(),{update(S){let F=S.src&&S.src!==r.src;Object.assign(r,S),F&&l(r.src)},destroy(){a=!1,_=!1,cancelAnimationFrame($),X.disconnect(),D.disconnect(),t.removeEventListener("pointermove",K),t.removeEventListener("pointerdown",ee),t.removeEventListener("pointerleave",me),t.removeEventListener("pointercancel",me),s.getExtension("WEBGL_lose_context")?.loseContext(),o.parentNode&&o.parentNode.removeChild(o)}}}var Yr=[0,90,180,270],Qr=Math.PI/2,Fe=(t,e,r,i,n)=>{let a=n/2;for(let l=0;l<2;l++)t.v+=(r*(e-t.x)-i*t.v)*a,t.x+=t.v*a},Li=t=>(t&&"current"in t?t.current:t)||null,Pi={targetSelector:".cursor-target",cursorColor:"#ffffff",cursorColorOnTarget:void 0,spinDuration:2,hoverDuration:.2,parallaxOn:!0,hideDefaultCursor:!0,size:36,cornerSize:12,thickness:3,padding:6,matchRadius:!0,dotSize:4,blendMode:"difference",showLabel:!0,clickEffect:!0,container:void 0},zi=t=>({...t,hoverDuration:Math.max(.05,t.hoverDuration),size:Math.max(4,t.size),cornerSize:Math.max(2,t.cornerSize),thickness:Math.max(.5,t.thickness),dotSize:Math.max(0,t.dotSize)});function jr(t={}){let e=zi({...Pi,...t}),r=window.matchMedia("(hover: hover) and (pointer: fine)"),i=null,n=()=>{let a=document.createElement("div");a.className="target-cursor",a.style.mixBlendMode=e.blendMode,a.style.opacity="0",a.setAttribute("aria-hidden","true");let l=Yr.map(()=>{let X=document.createElement("span");return X.className="target-cursor__corner",a.appendChild(X),X}),o=document.createElement("span");o.className="target-cursor__dot";let c=document.createElement("span");c.className="target-cursor__label",a.append(o,c),document.body.appendChild(a);let h=window.matchMedia("(prefers-reduced-motion: reduce)").matches,p=document.createElement("style");document.head.appendChild(p);let d={x:0,y:0,inside:!1,seen:!1,pressed:!1},u={x:0,v:0},f={x:0,v:0},g={x:0,v:0},m={x:0,v:0},v={x:0,v:0},E={x:0,v:0},y={x:0,v:0},b={x:0,v:0},x={x:0,v:0},w=null,M=0,B=0,T=0,P=0,U=0,N="",I="",A=null,k=()=>Li(e.container),$=()=>{let X=e,D=k();D!==A&&(A?.removeAttribute("data-target-cursor-scope"),D?.setAttribute("data-target-cursor-scope",""),A=D);let S=D?"[data-target-cursor-scope]":"html",F=X.hideDefaultCursor&&d.inside?`${S}, ${S} * { cursor: none !important; }`:"";p.textContent!==F&&(p.textContent=F)},G=(X,D,S)=>{let F=e,ae=(S||document.elementFromPoint(X,D))?.closest?.(F.targetSelector)||null,J=k();return ae&&J&&!J.contains(ae)?null:ae},_=X=>{if(X!==w&&(w=X,w)){let D=E.x;B=Math.round(D/Qr),M=parseFloat(getComputedStyle(w).borderTopLeftRadius)||0,T=0}},C=X=>{P=0;let D=e,S=U?Math.min(.05,(X-U)/1e3):1/60;U=X,w&&!w.isConnected&&_(null);let F=w?w.getBoundingClientRect():null,V=!!F&&d.inside,ae=4.6/D.hoverDuration,J=ae*ae,ce=2*.62*ae;Fe(x,d.inside?1:0,260,32,S),Fe(y,V?1:0,J,2*ae,S),Fe(b,d.pressed&&D.clickEffect?1:0,900,40,S);let z=d.x,R=d.y,Z=D.size/2,re=D.size/2,ie=Math.min(2,D.cornerSize/4);if(V){let Q=F.left+F.width/2,se=F.top+F.height/2,xe=D.parallaxOn?.08:0;z=Q+(d.x-Q)*xe,R=se+(d.y-se)*xe;let Te=Math.abs(B)%2===1,_e=F.width/2+D.padding,Ce=F.height/2+D.padding;Z=Te?Ce:_e,re=Te?_e:Ce,ie=D.matchRadius?Math.min(M+Math.max(0,D.padding),D.cornerSize):0}!d.inside&&x.x<.01&&(d.seen=!1),d.seen||(u.x=z,f.x=R,g.x=Z,m.x=re,d.seen=d.inside);let oe=V?J:2200,te=V?ce:2*Math.sqrt(2200);if(Fe(u,z,oe,te,S),Fe(f,R,oe,te,S),Fe(g,Z,J,ce,S),Fe(m,re,J,ce,S),Fe(v,ie,J,2*ae,S),V)Fe(E,B*Qr,J,ce,S);else{let Q=D.spinDuration>0&&!h?Math.PI*2/D.spinDuration:0;T+=(Q-T)*(1-Math.exp(-S*3)),E.v=T,E.x+=T*S}let he=1-b.x*.14,fe=Math.cos(E.x),we=Math.sin(E.x),de=Math.max(0,g.x)*he,ge=Math.max(0,m.x)*he,Ee=[[-de,-ge],[de,-ge],[de,ge],[-de,ge]],W=Math.max(0,Math.min(v.x,D.cornerSize)),Y=E.x*180/Math.PI,ne=1/0,ye=1/0;l.forEach((Q,se)=>{let[xe,Te]=Ee[se],_e=u.x+xe*fe-Te*we,Ce=f.x+xe*we+Te*fe;ne=Math.min(ne,_e),ye=Math.min(ye,Ce),Q.style.transform=`translate3d(${_e.toFixed(2)}px, ${Ce.toFixed(2)}px, 0) rotate(${(Yr[se]+Y).toFixed(2)}deg)`,Q.style.width=`${D.cornerSize}px`,Q.style.height=`${D.cornerSize}px`,Q.style.borderWidth=`${D.thickness}px 0 0 ${D.thickness}px`,Q.style.borderTopLeftRadius=`${W.toFixed(2)}px`});let We=1-b.x*.35;o.style.transform=`translate3d(${d.x}px, ${d.y}px, 0) translate(-50%, -50%) scale(${We.toFixed(3)})`,o.style.width=`${D.dotSize}px`,o.style.height=`${D.dotSize}px`;let Se=D.showLabel&&w&&w.getAttribute("data-cursor-label")||"";Se&&Se!==N&&(c.textContent=Se),Se&&(N=Se);let ke=Se?Math.max(0,Math.min(1,y.x)):0;c.style.transform=`translate3d(${ne.toFixed(2)}px, ${(ye-8).toFixed(2)}px, 0) translateY(-100%) translateY(${((1-ke)*4).toFixed(2)}px)`,c.style.opacity=ke.toFixed(3);let Ue=D.cursorColorOnTarget?Math.round(Math.max(0,Math.min(1,y.x))*100):0,Pe=Ue?`color-mix(in oklab, ${D.cursorColorOnTarget} ${Ue}%, ${D.cursorColor})`:D.cursorColor;Pe!==I&&(a.style.setProperty("--target-cursor-color",Pe),I=Pe),a.style.opacity=Math.max(0,Math.min(1,x.x)).toFixed(3);let Xe=!d.inside&&x.x<.002&&Math.abs(x.v)<.002&&Math.abs(y.x)<.002&&Math.abs(b.x)<.002,L=d.inside&&!V&&T>1e-4,O=Math.abs(u.v)+Math.abs(f.v)+Math.abs(g.v)+Math.abs(m.v)+Math.abs(E.v)>.01||Math.abs(z-u.x)+Math.abs(R-f.x)>.05||Math.abs(y.v)+Math.abs(b.v)+Math.abs(x.v)>.001;!Xe&&(L||O||V)?P=requestAnimationFrame(C):U=0},q=()=>{P||(P=requestAnimationFrame(C))},j=(X,D,S)=>{let F=k();if(!F||S&&F.contains(S))return!0;let V=F.getBoundingClientRect();return X>=V.left&&X<=V.right&&D>=V.top&&D<=V.bottom},H=X=>{if(X.pointerType&&X.pointerType!=="mouse")return;d.x=X.clientX,d.y=X.clientY;let D=j(d.x,d.y,X.target);D!==d.inside&&(d.inside=D,$()),_(D?G(d.x,d.y,X.target):null),q()},le=X=>{X.pointerType&&X.pointerType!=="mouse"||(d.pressed=!0,q())},K=()=>{d.pressed=!1,q()},ee=()=>{d.inside=!1,d.pressed=!1,_(null),$(),q()},me=()=>{d.inside&&(_(G(d.x,d.y)),q())};return window.addEventListener("pointermove",H,{passive:!0}),window.addEventListener("pointerdown",le,{passive:!0}),window.addEventListener("pointerup",K,{passive:!0}),window.addEventListener("scroll",me,{passive:!0,capture:!0}),document.documentElement.addEventListener("pointerleave",ee),window.addEventListener("blur",ee),()=>{cancelAnimationFrame(P),window.removeEventListener("pointermove",H),window.removeEventListener("pointerdown",le),window.removeEventListener("pointerup",K),window.removeEventListener("scroll",me,{capture:!0}),document.documentElement.removeEventListener("pointerleave",ee),window.removeEventListener("blur",ee),A?.removeAttribute("data-target-cursor-scope"),p.remove(),a.remove()}},s=()=>{r.matches&&!i?i=n():!r.matches&&i&&(i(),i=null)};return s(),r.addEventListener("change",s),()=>{r.removeEventListener("change",s),i?.(),i=null}}var Zr={linear:t=>t,bezier:t=>t*t*(3-2*t),"ease-in":t=>t*t,"ease-out":t=>1-(1-t)*(1-t),"ease-in-out":t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2},Kr={top:"to top",bottom:"to bottom",left:"to left",right:"to right"},ei=t=>Math.min(Math.max(t,0),1),Jr=t=>typeof t=="number"?`${t}px`:t,Ii=t=>typeof t=="number"?`${t}s`:t,ki=(t,e,r,i)=>{if(t)return typeof t=="string"?document.querySelector(t):"current"in t?t.current:t;if(r==="page")return window;let n=e.parentElement;if(!n)return null;let s=l=>{let o=getComputedStyle(l);return/(auto|scroll|overlay)/.test(i?o.overflowY:o.overflowX)};return Array.from(n.children).find(l=>l!==e&&s(l))||(s(n)?n:null)},Ui={position:"bottom",target:"parent",height:"6rem",width:void 0,strength:2,layers:8,curve:"linear",exponential:!0,opacity:1,saturation:1,tint:"transparent",autoHide:!1,container:void 0,hoverIntensity:1,duration:.3,easing:"ease-out",zIndex:1e3,className:"",style:void 0},Di=t=>{let e=Kr[t.position]?t.position:"bottom",r=Math.min(Math.max(Math.round(t.layers)||1,1),16),i=Zr[t.curve]||Zr.linear,n=Math.max(t.strength,0)*12,s=u=>{let f=i(ei(u));return n*(t.exponential?(Math.pow(2,4*f)-1)/15:f)},a=Math.pow(Math.max(t.saturation,0),1/r),l=`${Ii(t.duration)} ${t.easing}`,o=Kr[e],c=[];for(let u=0;u<r;u++){let f=s(u/r),g=s((u+1)/r),v=[`blur(calc(${Math.sqrt(Math.max(g*g-f*f,0)).toFixed(3)}px * var(--gradual-blur-reveal, 1) * var(--gradual-blur-hover, 1)))`,a!==1?`saturate(calc(1 + ${(a-1).toFixed(4)} * var(--gradual-blur-reveal, 1)))`:""].filter(Boolean).join(" "),E=`linear-gradient(${o}, transparent ${(u/r*100).toFixed(2)}%, #000 ${((u+1)/r*100).toFixed(2)}%)`;c.push({position:"absolute",inset:"0",borderRadius:"inherit",backdropFilter:v,webkitBackdropFilter:v,maskImage:E,webkitMaskImage:E,opacity:String(t.opacity),transition:`backdrop-filter ${l}, -webkit-backdrop-filter ${l}`})}let h=Array.from({length:9},(u,f)=>{let g=f/8,m=i(g);return`rgba(0, 0, 0, ${(m*m*m*(m*(m*6-15)+10)).toFixed(3)}) ${(g*100).toFixed(1)}%`}).join(", "),p=`linear-gradient(${o}, ${h})`,d=t.tint&&t.tint!=="transparent"?{position:"absolute",inset:"0",borderRadius:"inherit",background:t.tint,maskImage:p,webkitMaskImage:p,opacity:"calc(var(--gradual-blur-reveal, 1) * min(var(--gradual-blur-hover, 1), 1))",transition:`opacity ${l}`}:null;return{steps:c,wash:d,edge:e}};function ti(t,e={}){let r={...Ui,...e},{steps:i,wash:n,edge:s}=Di(r),a=s==="top"||s==="bottom",l=[],o=document.createElement("div");o.className=`gradual-blur ${r.className}`.trim(),o.setAttribute("aria-hidden","true");for(let u of i){let f=document.createElement("div");Object.assign(f.style,u),o.appendChild(f)}if(n){let u=document.createElement("div");Object.assign(u.style,n),o.appendChild(u)}let c=Jr(a?r.height:r.width??r.height),h=a&&r.width!=null?Jr(r.width):null,p=r.target!=="page"&&!h,d=(u,f)=>p&&(s===u||s===f)?"inherit":"";if(Object.assign(o.style,{position:r.target==="page"?"fixed":"absolute",zIndex:String(r.zIndex),borderTopLeftRadius:d("top","left"),borderTopRightRadius:d("top","right"),borderBottomLeftRadius:d("bottom","left"),borderBottomRightRadius:d("bottom","right"),top:s==="bottom"?"":"0",bottom:s==="top"?"":"0",left:s==="right"?"":"0",right:s==="left"?"":"0",height:a?c:"",width:a?h??"":c,marginInline:h?"auto":"",...r.style||{}}),t.appendChild(o),r.autoHide){let u=ki(r.container,o,r.target,a);if(u){let f=u instanceof Element?u:null,g=s==="top"||s==="left",m=()=>{let y=document.documentElement,b=f?a?f.scrollTop:f.scrollLeft:a?window.scrollY:window.scrollX,x=f?a?f.scrollHeight-f.clientHeight:f.scrollWidth-f.clientWidth:a?y.scrollHeight-window.innerHeight:y.scrollWidth-window.innerWidth,w=o.getBoundingClientRect(),M=Math.max(a?w.height:w.width,1),B=g?b:x-b;o.style.setProperty("--gradual-blur-reveal",ei(B/M).toFixed(3))};m();let v=f??window;v.addEventListener("scroll",m,{passive:!0}),window.addEventListener("resize",m);let E=f&&typeof ResizeObserver<"u"?new ResizeObserver(m):null;E&&f&&(E.observe(f),f.firstElementChild&&E.observe(f.firstElementChild)),l.push(()=>{v.removeEventListener("scroll",m),window.removeEventListener("resize",m),E?.disconnect()})}}if(r.hoverIntensity!==1){let u=0,f=!1,g=null,m=()=>{if(u=0,!g)return;let y=o.getBoundingClientRect(),b=g.x>=y.left&&g.x<=y.right&&g.y>=y.top&&g.y<=y.bottom;b!==f&&(f=b,o.style.setProperty("--gradual-blur-hover",f?String(Math.max(r.hoverIntensity,0)):"1"))},v=y=>{g={x:y.clientX,y:y.clientY},u||(u=requestAnimationFrame(m))},E=()=>{g=null,f=!1,o.style.setProperty("--gradual-blur-hover","1")};window.addEventListener("pointermove",v,{passive:!0}),document.documentElement.addEventListener("pointerleave",E),l.push(()=>{cancelAnimationFrame(u),window.removeEventListener("pointermove",v),document.documentElement.removeEventListener("pointerleave",E),o.style.removeProperty("--gradual-blur-hover")})}return()=>{l.forEach(u=>u()),o.remove()}}var Oi=Math.PI*2,Bi=`#version 300 es
in vec2 aPosition;
void main() {
  gl_Position = vec4(aPosition, 0.0, 1.0);
}`,Ni=`#version 300 es
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
}`,Vi=["uCenter","uHalf","uRadius","uPx","uSpot","uEntry","uLineColor","uBaseColor","uIntensity","uWindow","uThickness","uGlow"],vt=(t,e,r)=>Math.min(r,Math.max(e,t)),Ge=t=>t-Math.floor(t),ri=(t,e,r,i,n)=>{let s=r-n,a=i-n,l=Math.PI/2*n,o=s+a+l,c=Math.abs(t),h=Math.abs(e),p=c-s,d=h-a,u;return p>0&&d>0?u=a+Math.atan2(d,p)*n:p>d?u=Math.min(h,a):u=a+l+s-Math.min(c,s),t<0?u=e>=0?2*o-u:2*o+u:e<0&&(u=4*o-u),Ge(u/Math.max(4*o,1e-4))},qi=(t,e,r,i)=>{let n=e-i,s=r-i,a=Math.PI/2*i,l=n+s+a,o=Ge(t)*4*l,c=1,h=1;o>3*l?(o=4*l-o,h=-1):o>2*l?(o-=2*l,c=-1,h=-1):o>l&&(o=2*l-o,c=-1);let p=n-(o-s-a),d=r;if(o<=s)p=e,d=o;else if(o<=s+a){let u=(o-s)/Math.max(i,1e-4);p=n+Math.cos(u)*i,d=s+Math.sin(u)*i}return[p*c,d*h]},ii=(t,e,r)=>{let i=t.createShader(e);return i?(t.shaderSource(i,r),t.compileShader(i),t.getShaderParameter(i,t.COMPILE_STATUS)?i:(t.deleteShader(i),null)):null},Gi=t=>{let e=ii(t,t.VERTEX_SHADER,Bi),r=ii(t,t.FRAGMENT_SHADER,Ni),i=t.createProgram();return!e||!r||!i?null:(t.attachShader(i,e),t.attachShader(i,r),t.bindAttribLocation(i,0,"aPosition"),t.linkProgram(i),t.deleteShader(e),t.deleteShader(r),t.getProgramParameter(i,t.LINK_STATUS)?i:(t.deleteProgram(i),null))};function yt(t,e={}){let{radius:r=18,tint:i="#ffffff",tintOpacity:n=.04,blur:s=0,textColor:a="#f5f5f5",lineColor:l="#ffffff",baseColor:o="#525252",intensity:c=1,idleIntensity:h=.35,shineSize:p=10,shineFade:d=34,thickness:u=1.2,glow:f=1,speed:g=.35,followMouse:m=!0,proximity:v=250,autoAnimate:E=!1,disabled:y=!1}=e,b={radius:Math.max(0,r),lineColor:String(l),baseColor:String(o),intensity:Math.max(0,c),idleIntensity:vt(h,0,1),shineSize:Math.max(0,p),shineFade:Math.max(0,d),thickness:Math.max(0,u),glow:Math.max(0,f),speed:g,followMouse:m,proximity:Math.max(1,v),autoAnimate:E,disabled:y};t.classList.add("specular-button"),t.style.setProperty("--sb-radius",`${r}px`),t.style.setProperty("--sb-tint",i),t.style.setProperty("--sb-tint-opacity",String(n)),t.style.setProperty("--sb-blur",`${s}px`),t.style.setProperty("--sb-text-color",a);let x=document.createElement("span");x.className="specular-button__label",x.append(...t.childNodes);let w=document.createElement("canvas");w.className="specular-button__light",w.setAttribute("aria-hidden","true"),t.append(w,x);let M=w.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1});if(!M)return null;let B=Gi(M);if(!B)return null;let T={};for(let z of Vi)T[z]=M.getUniformLocation(B,z);let P=M.createBuffer(),U=M.createVertexArray();M.bindVertexArray(U),M.bindBuffer(M.ARRAY_BUFFER,P),M.bufferData(M.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),M.STATIC_DRAW),M.enableVertexAttribArray(0),M.vertexAttribPointer(0,2,M.FLOAT,!1,0,0),M.bindVertexArray(null);let N=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),I=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,A=new Map,k={width:1,height:1,ratio:1},$={x:0,y:0,known:!1},G={spot:0,level:0,press:0,ready:!1},_=0,C=0,q=!0,j=z=>{if(A.has(z))return A.get(z);let R=[1,1,1];if(N){N.clearRect(0,0,1,1),N.fillStyle="#000000",N.fillStyle=z,N.fillRect(0,0,1,1);let[Z,re,ie]=N.getImageData(0,0,1,1).data;R=[Z/255,re/255,ie/255]}return A.set(z,R),R},H=z=>Math.min(z.radius,k.width/2,k.height/2),le=z=>{let R=H(z),Z=R*(1-Math.SQRT1_2);return ri(Z-k.width/2,k.height/2-Z,k.width/2,k.height/2,R)},K=z=>{if(!z.followMouse||z.disabled||!$.known)return null;let R=t.getBoundingClientRect(),Z=R.width/k.width||1,re=k.width/2,ie=k.height/2,oe=($.x-R.left-R.width/2)/Z,te=(R.top+R.height/2-$.y)/Z,he=Math.hypot(Math.max(Math.abs(oe)-re,0),Math.max(Math.abs(te)-ie,0)),fe=vt(1-he/z.proximity,0,1),we=fe*fe*(3-2*fe),de=ri(oe,te,re,ie,H(z));if(he>0)return{spot:de,near:we};let ge=vt(Math.min(re-Math.abs(oe),ie-Math.abs(te))/(ie*.8),0,1),Ee=le(z)-oe/re*.06-te/ie*.02,W=Ee-de-Math.round(Ee-de);return{spot:Ge(de+W*ge*ge*(3-2*ge)),near:we}},ee=z=>{let{width:R,height:Z}=k,re=w.width/(R+24*2),ie=w.height/(Z+24*2);M.viewport(0,0,w.width,w.height),M.clearColor(0,0,0,0),M.clear(M.COLOR_BUFFER_BIT),M.useProgram(B),M.uniform2f(T.uCenter,(24+R/2)*re,(24+Z/2)*ie),M.uniform2f(T.uHalf,R/2*re,Z/2*ie),M.uniform1f(T.uRadius,Math.min(z.radius,R/2,Z/2)*re),M.uniform1f(T.uPx,k.ratio);let oe=Math.min(z.radius,R/2,Z/2),[te,he]=qi(G.spot,R/2,Z/2,oe),fe=1-Math.min(.35*(Z/2),Math.hypot(te,he))/Math.max(Math.hypot(te,he),1e-4);M.uniform1f(T.uSpot,G.spot),M.uniform2f(T.uEntry,te*fe*re,he*fe*ie),M.uniform3fv(T.uLineColor,j(z.lineColor)),M.uniform3fv(T.uBaseColor,j(z.baseColor)),M.uniform1f(T.uIntensity,z.intensity*(G.level+G.press*.8)),M.uniform2f(T.uWindow,z.shineSize/360+G.press*.06,z.shineFade/360+1e-4),M.uniform1f(T.uThickness,z.thickness),M.uniform1f(T.uGlow,z.glow),M.bindVertexArray(U),M.drawArrays(M.TRIANGLES,0,3),M.bindVertexArray(null)},me=z=>{if(_=0,!q)return;let R=b,Z=C?Math.min(.05,(z-C)/1e3):1/60;C=z;let re=K(R),ie=R.autoAnimate&&!I,oe=!!re&&re.near>0;G.ready||(G.spot=le(R),G.level=R.autoAnimate?1:R.idleIntensity,G.ready=!0);let te=0;ie&&!oe?G.spot=Ge(G.spot+R.speed/Oi*Z):(te=(oe?re.spot:le(R))-G.spot,te-=Math.round(te),G.spot=Ge(G.spot+te*(1-Math.exp(-Z*8))));let he=R.autoAnimate?1:R.idleIntensity+(1-R.idleIntensity)*(re?re.near:0);G.level+=(he-G.level)*(1-Math.exp(-Z*7)),G.press*=Math.exp(-Z*5),ee(R),Math.abs(te)>2e-4||Math.abs(he-G.level)>.001||G.press>.002||ie&&!oe?_=requestAnimationFrame(me):C=0},X=()=>{!_&&q&&(_=requestAnimationFrame(me))},D=z=>{let R=z?.borderBoxSize?.[0];k.width=Math.max(1,R?R.inlineSize:t.offsetWidth),k.height=Math.max(1,R?R.blockSize:t.offsetHeight),k.ratio=Math.min(window.devicePixelRatio||1,3),w.width=Math.max(1,Math.round((k.width+24*2)*k.ratio)),w.height=Math.max(1,Math.round((k.height+24*2)*k.ratio)),G.ready&&ee(b),X()},S=z=>{$.x=z.clientX,$.y=z.clientY,$.known=!0,X()},F=z=>{$.x=z.clientX,$.y=z.clientY,$.known=!0,b.disabled||(G.press=1),X()},V=z=>{z.pointerType!=="mouse"&&($.known=!1,X())},ae=()=>{$.known=!1,X()},J=new ResizeObserver(z=>D(z[z.length-1]));J.observe(t);let ce=new IntersectionObserver(z=>{q=z.some(R=>R.isIntersecting),q&&(C=0,X())});return ce.observe(t),window.addEventListener("pointermove",S,{passive:!0}),window.addEventListener("pointerup",V,{passive:!0}),window.addEventListener("pointercancel",V,{passive:!0}),document.documentElement.addEventListener("pointerleave",ae),t.addEventListener("pointerdown",F),D(),()=>{cancelAnimationFrame(_),J.disconnect(),ce.disconnect(),window.removeEventListener("pointermove",S),window.removeEventListener("pointerup",V),window.removeEventListener("pointercancel",V),document.documentElement.removeEventListener("pointerleave",ae),t.removeEventListener("pointerdown",F),M.deleteBuffer(P),M.deleteVertexArray(U),M.deleteProgram(B),M.getExtension("WEBGL_lose_context")?.loseContext()}}var Wi={dark:{"--rc-base":"#1d1c22","--rc-shadow":"0 22px 44px -20px rgba(0, 0, 0, 0.8), 0 6px 16px -8px rgba(0, 0, 0, 0.5)","--rc-ink":"#f4f4f5","--rc-muted":"rgba(244, 244, 245, 0.6)","--rc-tile":"linear-gradient(180deg, #3a3644 0%, #27242f 100%)","--rc-tile-edge":"rgba(255, 255, 255, 0.07)","--rc-tile-highlight":"rgba(255, 255, 255, 0.12)","--rc-tile-shadow":"0 4px 10px -4px rgba(0, 0, 0, 0.7)","--rc-rim":"rgba(255, 255, 255, 0.07)","--rc-rim-highlight":"rgba(255, 255, 255, 0.1)"},light:{"--rc-base":"#e7e7ea","--rc-shadow":"0 22px 44px -22px rgba(24, 24, 27, 0.3), 0 6px 16px -10px rgba(24, 24, 27, 0.16)","--rc-ink":"#18181b","--rc-muted":"rgba(24, 24, 27, 0.6)","--rc-tile":"linear-gradient(180deg, #ffffff 0%, #f6f6f8 100%)","--rc-tile-edge":"rgba(24, 24, 27, 0.08)","--rc-tile-highlight":"rgba(255, 255, 255, 1)","--rc-tile-shadow":"0 4px 10px -5px rgba(24, 24, 27, 0.25)","--rc-rim":"rgba(24, 24, 27, 0.08)","--rc-rim-highlight":"rgba(255, 255, 255, 0.8)"}},Xi=900,Mt=1.2,Hi=1400,$i=.35,Yi=`#version 300 es
in vec2 aPosition;
out vec2 vUv;
void main() {
  vUv = aPosition * 0.5 + 0.5;
  gl_Position = vec4(aPosition, 0.0, 1.0);
}`,Qi=`#version 300 es
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
}`,ji=`#version 300 es
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
}`,Zi=`#version 300 es
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

const float VIEW = ${Xi.toFixed(1)};
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
}`,ue=(t,e,r)=>Math.min(r,Math.max(e,t)),ni=t=>typeof t=="number"?`${t}px`:t,Ki=t=>{let e=String(t||"").trim(),r=/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(e);if(r){let n=r[1].length===3?r[1].replace(/./g,s=>s+s):r[1];return[0,2,4].map(s=>parseInt(n.slice(s,s+2),16)/255)}let i=/^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)/i.exec(e);return i?[i[1],i[2],i[3]].map(n=>ue(parseFloat(n)/255,0,1)):[1,1,1]},si=(t,e,r)=>{let i=t.createShader(e);return i?(t.shaderSource(i,r),t.compileShader(i),t.getShaderParameter(i,t.COMPILE_STATUS)?i:(console.error(t.getShaderInfoLog(i)),t.deleteShader(i),null)):null},wt=(t,e)=>{let r=si(t,t.VERTEX_SHADER,Yi),i=si(t,t.FRAGMENT_SHADER,e),n=r&&i?t.createProgram():null;if(!r||!i||!n)return r&&t.deleteShader(r),i&&t.deleteShader(i),null;if(t.attachShader(n,r),t.attachShader(n,i),t.bindAttribLocation(n,0,"aPosition"),t.linkProgram(n),t.deleteShader(r),t.deleteShader(i),!t.getProgramParameter(n,t.LINK_STATUS))return console.error(t.getProgramInfoLog(n)),t.deleteProgram(n),null;let s={},a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let l=0;l<a;l++){let o=t.getActiveUniform(n,l);o&&(s[o.name]=t.getUniformLocation(n,o.name))}return{program:n,uniforms:s}},ai=(t,e,r,i)=>{let n=t/Math.max(1,e),s=n>r?r/n:1,a=n>r?1:n/r,l=i?-s:s;return[l,-a,.5-l*.5,.5+a*.5]},oi=(t,e,r,i)=>{let n=t/Math.max(1,e),s=t*(n>i?i/n:1);return Math.max(0,Math.log2(Math.max(1,s/Math.max(1,r)))-.5)},Ji=t=>{let e=t.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1,powerPreference:"default"});if(!e)return null;let r=wt(e,Qi),i=wt(e,ji),n=wt(e,Zi);if(!r||!i||!n){for(let x of[r,i,n])x&&e.deleteProgram(x.program);return null}let s=(x,w)=>{let M=e.createTexture();return e.bindTexture(e.TEXTURE_2D,M),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,x?e.LINEAR_MIPMAP_LINEAR:e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,w),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,w),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([0,0,0,255])),M},a=()=>{let x=s(!1,e.MIRRORED_REPEAT),w=e.createFramebuffer();return e.bindFramebuffer(e.FRAMEBUFFER,w),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,x,0),e.bindFramebuffer(e.FRAMEBUFFER,null),{texture:x,framebuffer:w,width:1,height:1}},l=(x,w,M)=>{x.width===w&&x.height===M||(x.width=w,x.height=M,e.bindTexture(e.TEXTURE_2D,x.texture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,w,M,0,e.RGBA,e.UNSIGNED_BYTE,null))},o=e.createVertexArray();e.bindVertexArray(o);let c=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,c),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.disable(e.BLEND),e.disable(e.DEPTH_TEST);let h={video:s(!0,e.CLAMP_TO_EDGE),cam:s(!0,e.CLAMP_TO_EDGE)},p=a(),d=a(),u=a(),f=new Float32Array(9),g=(x,w)=>(e.bindFramebuffer(e.FRAMEBUFFER,x?x.framebuffer:null),e.viewport(0,0,x?x.width:t.width,x?x.height:t.height),e.useProgram(w.program),w.uniforms),m=(x,w)=>{e.activeTexture(e.TEXTURE0+x),e.bindTexture(e.TEXTURE_2D,w)};return{upload:(x,w)=>{try{return e.bindTexture(e.TEXTURE_2D,h[x]),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,w),e.generateMipmap(e.TEXTURE_2D),!0}catch{return!1}},renderEnv:({width:x,height:w,scale:M,blur:B,roughness:T,video:P,cam:U})=>{let N=ue(2.5/Math.max(B,.01),.12,M),I=Math.max(8,Math.ceil(x*Mt*N)),A=Math.max(8,Math.ceil(w*Mt*N));l(p,I,A),l(d,I,A),l(u,I,A);let k=x/Math.max(1,w),$=1-(1-P.mix)*(1-U.mix),G=$>0?U.mix/$:0,_=g(p,r);m(0,h.video),m(1,h.cam),e.uniform1i(_.uVideo,0),e.uniform1i(_.uCam,1),e.uniform4fv(_.uVideoMap,P.ready?ai(P.width,P.height,k,!1):[1,1,0,0]),e.uniform4fv(_.uCamMap,U.ready?ai(U.width,U.height,k,!0):[1,1,0,0]),e.uniform2f(_.uWeights,P.ready&&$>0?1-G:0,U.ready?G:0),e.uniform2f(_.uLod,P.ready?oi(P.width,P.height,I,k):0,U.ready?oi(U.width,U.height,I,k):0),e.drawArrays(e.TRIANGLES,0,3),_=g(d,i),m(0,p.texture),e.uniform1i(_.uTexture,0),e.uniform2f(_.uStep,1/I,0),e.uniform1f(_.uSigma,B*N),e.drawArrays(e.TRIANGLES,0,3),_=g(u,i),m(0,d.texture),e.uniform1i(_.uTexture,0),e.uniform2f(_.uStep,0,1/A),e.uniform1f(_.uSigma,(B*(1+1.5*T)+10*T)*N),e.drawArrays(e.TRIANGLES,0,3)},renderPlate:({width:x,height:w,rotateX:M,rotateY:B,capture:T,glare:P,pointerX:U,pointerY:N,settings:I})=>{let A=Math.cos(M),k=Math.sin(M),$=Math.cos(B),G=Math.sin(B);f.set([$,k*G,-A*G,0,A,k,G,-k*$,A*$]);let _=g(null,n);m(0,u.texture),e.uniform1i(_.uEnv,0),e.uniform2f(_.uEnvSize,u.width,u.height),e.uniform2f(_.uSize,x,w),e.uniform1f(_.uRadius,I.radius),e.uniform1f(_.uScale,t.width/Math.max(1,x)),e.uniformMatrix3fv(_.uRotate,!1,f),e.uniform1f(_.uCapture,T),e.uniform1f(_.uBlur,I.blurStrength),e.uniform1f(_.uRough,I.roughness),e.uniform1f(_.uMetal,I.metalness),e.uniform3fv(_.uTint,I.tint),e.uniform1f(_.uGray,I.grayscale),e.uniform1f(_.uWarp,I.warp),e.uniform1f(_.uWarpScale,I.warpScale),e.uniform1f(_.uShine,I.shine),e.uniform1f(_.uBevel,I.bevel),e.uniform1f(_.uGlare,P),e.uniform2f(_.uPointer,U,N),e.uniform1f(_.uTheme,I.theme),e.drawArrays(e.TRIANGLES,0,3)},dispose:()=>{if(!e.isContextLost()){for(let x of[p,d,u])e.deleteFramebuffer(x.framebuffer),e.deleteTexture(x.texture);e.deleteTexture(h.video),e.deleteTexture(h.cam),e.deleteBuffer(c),e.deleteVertexArray(o);for(let x of[r,i,n])e.deleteProgram(x.program)}}}};function li(t,e={}){let{theme:r="dark",videoSrc:i,tint:n="#ffffff",metalness:s=1,roughness:a=.3,blurStrength:l=6,grayscale:o=1,warp:c=.6,warpScale:h=1,shine:p=1,bevel:d=3,glare:u=.5,enableTilt:f=!0,tiltStrength:g=12,intro:m=!0,width:v=320,height:E=500,radius:y=24}=e,b=r==="light"?"light":"dark",x={tint:Ki(n).map(L=>Math.pow(L,2.2)),metalness:ue(s,0,1),roughness:ue(a,0,1),blurStrength:ue(l,0,40),grayscale:ue(o,0,1),warp:ue(c,0,2),warpScale:ue(h,.2,4),shine:ue(p,0,3),bevel:ue(d,0,16),glare:ue(u,0,1),enableTilt:f,tiltStrength:ue(g,0,30),radius:Math.max(0,y),theme:b==="light"?1:0,intro:m},w={current:x},M=Math.max(0,y),B={...Wi[b],"--rc-width":ni(v),"--rc-height":ni(E),"--rc-radius":`${M}px`,"--rc-pad":`${Math.round(ue(M*.8,16,22))}px`,"--rc-tile-radius":`${Math.round(ue(M*.5,8,14))}px`};t.classList.add("reflective-card");for(let[L,O]of Object.entries(B))t.style.setProperty(L,O);let T=document.createElement("div");T.className="reflective-card__body";let P=document.createElement("canvas");P.className="reflective-card__canvas",P.setAttribute("aria-hidden","true");let U=document.createElement("div");U.className="reflective-card__content",U.append(...t.childNodes);let N=document.createElement("span");N.className="reflective-card__rim",T.append(P,U,N);let I=()=>{let L=document.createElement("video");return L.className="reflective-card__media",L.muted=!0,L.playsInline=!0,L.setAttribute("aria-hidden","true"),L},A=I();A.loop=!0,A.crossOrigin="anonymous";let k=I();t.append(T,A,k);let $=window.matchMedia("(prefers-reduced-motion: reduce)").matches;x.intro&&!$&&(t.style.setProperty("--rc-presence","0"),t.style.setProperty("--rc-lift","14px"));let G=Ji(P),_={p:0,v:0,target:0},C={p:0,v:0,target:0},q={p:0,target:0},j={x:0,y:0},H={width:T.offsetWidth,height:T.offsetHeight,scale:1},le=L=>({element:L,src:"",time:-1,ready:!1,failed:!1,width:0,height:0,mix:0}),K={video:le(A),cam:le(k)},ee=1,me=0,X=0,D=null,S=0,F=0,V=!0,ae=document.visibilityState!=="hidden",J=!1,ce="",z=!1,R=()=>{let{enableTilt:L,tiltStrength:O}=w.current,Q=L&&!$?O:0,se=t.style;se.setProperty("--rc-rotate-x",`${(C.p*Q).toFixed(3)}deg`),se.setProperty("--rc-rotate-y",`${(-_.p*Q).toFixed(3)}deg`);let xe=1-Math.pow(1-ee,3);se.setProperty("--rc-presence",xe.toFixed(4)),se.setProperty("--rc-lift",`${((1-xe)*14).toFixed(2)}px`)},Z=(L,O)=>{let Q=O.element,se=Q.srcObject?"stream":Q.currentSrc;if(se!==O.src&&(O.src=se,O.failed=!1,O.time=-1),!se)return O.ready=!1,!1;if(Q.error)return O.failed=!0,!1;if(Q.readyState<2||!Q.videoWidth)return!1;let xe=Q.currentTime;return O.ready&&xe===O.time?!1:!G||!G.upload(L,Q)?(O.failed=!0,!1):(O.time=xe,O.width=Q.videoWidth,O.height=Q.videoHeight,O.ready=!0,!0)},re=(L,O)=>{let Q=L.ready&&!L.failed&&L.src?1:0,se=L.mix;return L.mix+=(Q-L.mix)*(1-Math.exp(-O/$i)),Math.abs(Q-L.mix)<.002&&(L.mix=Q),L.mix!==se},ie=()=>{H.width=T.offsetWidth,H.height=T.offsetHeight,H.scale=Math.min(window.devicePixelRatio||1,2);let L=Math.max(1,Math.round(H.width*H.scale)),O=Math.max(1,Math.round(H.height*H.scale));(P.width!==L||P.height!==O)&&(P.width=L,P.height=O),z=!0},oe=L=>{if(S=0,J)return;let O=Math.min(.05,(L-F)/1e3||0);F=L;let Q=L<X,se=Q?24:120,xe=Q?9:16,Te=Math.max(1,Math.ceil(O/(1/120))),_e=O/Te;for(let Me=0;Me<Te;Me++)for(let be of[_,C])be.v+=(se*(be.target-be.p)-xe*be.v)*_e,be.p+=be.v*_e;let Ce=q.target>q.p?.18:Q?.9:.45;q.p+=(q.target-q.p)*(1-Math.exp(-O/Ce)),ee<1&&(ee=ue((L-me)/650,0,1));let bt=Math.abs(_.target-_.p)>5e-4||Math.abs(C.target-C.p)>5e-4||Math.abs(_.v)>5e-4||Math.abs(C.v)>5e-4||Math.abs(q.target-q.p)>.002||ee<1;bt||(_.p=_.target,C.p=C.target,_.v=0,C.v=0,q.p=q.target),R();let et=!1;if(G){K.cam.mix<1&&Z("video",K.video)&&(z=!0),Z("cam",K.cam)&&(z=!0);for(let ze of[K.video,K.cam])ze.src&&!ze.failed&&!ze.element.paused&&(et=!0),re(ze,O)&&(z=!0),ze.mix>0&&ze.mix<1&&(et=!0);let Me=w.current,be=`${Me.blurStrength}|${Me.roughness}|${H.width}|${H.height}|${H.scale}`;be!==ce&&(ce=be,z=!0),z&&(K.video.mix>0||K.cam.mix>0)&&G.renderEnv({width:H.width,height:H.height,scale:H.scale,blur:Me.blurStrength,roughness:Me.roughness,video:K.video,cam:K.cam}),z=!1;let At=(Me.enableTilt&&!$?Me.tiltStrength:0)*(Math.PI/180);G.renderPlate({width:H.width,height:H.height,rotateX:C.p*At,rotateY:-_.p*At,capture:1-(1-K.video.mix)*(1-K.cam.mix),glare:Me.glare*q.p,pointerX:j.x,pointerY:j.y,settings:Me})}(bt||et)&&V&&ae&&(S=requestAnimationFrame(oe))},te=()=>{S||J||!V||!ae||(F=performance.now(),S=requestAnimationFrame(oe))},he=(L,O,Q=!0)=>{_.target=ue(L,-1,1),C.target=ue(O,-1,1),q.target=Q?1:0,X=0,te()},fe=L=>{let O=t.getBoundingClientRect();if(!O.width||!O.height)return;let Q=(L.clientX-O.left)/O.width*2-1,se=(L.clientY-O.top)/O.height*2-1;j.x=Q*H.width*.5,j.y=se*H.height*.5,he(Q,se)},we=()=>he(0,0,!1),de=L=>{L.pointerType==="mouse"&&fe(L)},ge=L=>{(L.pointerType==="mouse"||L.pointerId===D)&&fe(L)},Ee=L=>{L.pointerType==="mouse"&&we()},W=L=>{L.pointerType!=="mouse"&&(D=L.pointerId,fe(L))},Y=L=>{L.pointerId===D&&(D=null,we())};t.addEventListener("pointerenter",de),t.addEventListener("pointermove",ge),t.addEventListener("pointerleave",Ee),t.addEventListener("pointerdown",W),t.addEventListener("pointerup",Y),t.addEventListener("pointercancel",Y);let ne=L=>{L.preventDefault(),J=!0,cancelAnimationFrame(S),S=0};P.addEventListener("webglcontextlost",ne);let ye=new ResizeObserver(()=>{ie(),te()});ye.observe(T),ie();let We=x.intro&&!$,Se=()=>{We=!1,_.p=.62,C.p=-.55,q.p=1,j.x=.62*H.width*.5,j.y=-.55*H.height*.5,ee=0,me=performance.now(),X=performance.now()+Hi},ke=new IntersectionObserver(L=>{if(V=L.some(O=>O.isIntersecting),V&&We&&Se(),!$)for(let O of[A,k])V&&(O.currentSrc||O.srcObject)?O.play().catch(()=>{}):!V&&O.currentSrc&&!O.srcObject&&O.pause();te()});ke.observe(t);let Ue=()=>{ae=document.visibilityState!=="hidden",te()};document.addEventListener("visibilitychange",Ue);let Pe=()=>te(),Xe=["loadeddata","playing","seeked","emptied","error"];for(let L of[A,k])for(let O of Xe)L.addEventListener(O,Pe);return i&&(A.src=i,$||A.play().catch(()=>{})),R(),te(),()=>{cancelAnimationFrame(S),ye.disconnect(),ke.disconnect(),document.removeEventListener("visibilitychange",Ue),t.removeEventListener("pointerenter",de),t.removeEventListener("pointermove",ge),t.removeEventListener("pointerleave",Ee),t.removeEventListener("pointerdown",W),t.removeEventListener("pointerup",Y),t.removeEventListener("pointercancel",Y),P.removeEventListener("webglcontextlost",ne);for(let L of[A,k])for(let O of Xe)L.removeEventListener(O,Pe);G?.dispose()}}var en=t=>getComputedStyle(document.documentElement).getPropertyValue(t).trim(),tn="M25.732 83.2V45.256H35.452L36.316 50.656H36.82Q38.116 48.712 39.952 47.272Q41.788 45.832 44.02 45.112Q46.252 44.392 48.772 44.392Q52.66 44.392 55.396 45.94Q58.132 47.488 59.572 50.656H60.076Q61.372 48.712 63.208 47.272Q65.044 45.832 67.312 45.112Q69.58 44.392 72.028 44.392Q75.988 44.392 78.724 45.868Q81.46 47.344 82.936 50.332Q84.412 53.32 84.412 57.928V83.2H72.604V59.728Q72.604 58.144 72.244 57.028Q71.884 55.912 71.236 55.156Q70.588 54.4 69.58 54.04Q68.572 53.68 67.42 53.68Q65.548 53.68 64.072 54.652Q62.596 55.624 61.804 57.244Q61.012 58.864 61.012 61.024V83.2H49.204V59.728Q49.204 58.144 48.844 57.028Q48.484 55.912 47.836 55.156Q47.188 54.4 46.18 54.04Q45.172 53.68 44.02 53.68Q42.148 53.68 40.672 54.652Q39.196 55.624 38.368 57.244Q37.54 58.864 37.54 61.024V83.2Z",rn=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 128 128"><path fill="#fff" fill-rule="evenodd" d="M30.4 4H97.6Q124 4 124 30.4V97.6Q124 124 97.6 124H30.4Q4 124 4 97.6V30.4Q4 4 30.4 4Z${tn}M93.53 70H106.73V83.2H93.53Z"/></svg>`)}`,Et=document.querySelector(".elogo-gl");Et&&$r(Et,{src:rn,color:"#ffe9e6",glowColor:"#c94848",scale:.6,strands:4,bend:.6,crackle:1.5,arcs:1,speed:2.5,interactive:!0,theme:"dark"})&&Et.closest(".elogo").classList.add("is-live");document.querySelectorAll(".friend-grid .friend").forEach(t=>{li(t,{theme:"dark",tint:"#ffffff",metalness:1,roughness:.3,blurStrength:6,shine:1,glare:.5,width:"100%",height:440,radius:24})});var nn=t=>!!t.closest(".hero, .contact");document.querySelectorAll(".btn").forEach(t=>{if(t.classList.contains("btn-wa"))yt(t,{radius:999,tint:en("--accent"),tintOpacity:1,textColor:"#ffffff",lineColor:"#ffffff",baseColor:"#7a2626",idleIntensity:.35,proximity:250});else{let e=nn(t)||matchMedia("(prefers-color-scheme: dark)").matches;yt(t,{radius:999,tint:e?"#ffffff":"#2b2c2f",tintOpacity:.04,textColor:e?"#f3f2f1":"#2b2c2f",lineColor:e?"#ffffff":"#2b2c2f",baseColor:e?"#525252":"#c7c7c9",proximity:250})}});var sn=[[".btn-wa","WhatsApp"],[".f-hit","Abrir"],[".n3","Ver"],[".copy","Copiar"]];document.querySelectorAll("a, button, .chips label, input, textarea").forEach(t=>t.classList.add("cursor-target"));sn.forEach(([t,e])=>document.querySelectorAll(t).forEach(r=>r.setAttribute("data-cursor-label",e)));jr({spinDuration:2,hideDefaultCursor:!0,parallaxOn:!0,cursorColor:"#ffffff"});ti(document.body,{position:"bottom",target:"page",height:"6rem",strength:2,layers:8,curve:"linear",exponential:!0,tint:"color-mix(in srgb, var(--bg) 60%, transparent)",autoHide:!0,zIndex:7});(()=>{let t=document.querySelector(".hero"),e=document.getElementById("flux");if(!t||!e)return;let r=e.getContext("2d"),i=matchMedia("(prefers-reduced-motion: reduce)").matches,n=0,s=0,a=1,l=0,o=!0,c={x:-9999,y:-9999,k:0,tk:0},h=260,p=()=>{a=Math.min(devicePixelRatio||1,2),n=t.clientWidth,s=t.clientHeight,e.width=n*a,e.height=s*a,r.setTransform(a,0,0,a,0,0)},d=()=>{r.clearRect(0,0,n,s),c.k+=(c.tk-c.k)*.08;let f=Math.max(16,Math.round(n/34)),g=12;r.strokeStyle="#ffffff";for(let m=0;m<f;m++){let v=(m+.5)/f*n,E=[];for(let y=-g;y<=s+g;y+=g){let b=v+22*Math.sin(y*.006-l*.5+m*.47)+10*Math.sin(y*.014+l*.7+m*1.3),x=b-c.x,w=y-c.y,M=Math.hypot(x,w),B=0;if(M<h){B=Math.pow(1-M/h,2)*c.k;let T=Math.atan2(w,x)+1.2;b+=(c.x-b)*B*.45+Math.cos(T)*24*B}E.push([b,y,B])}r.lineWidth=1,r.globalAlpha=.09,r.beginPath(),E.forEach(([y,b],x)=>x?r.lineTo(y,b):r.moveTo(y,b)),r.stroke(),r.lineWidth=1.3;for(let y=1;y<E.length;y++){let b=Math.max(E[y][2],E[y-1][2]);b<.02||(r.globalAlpha=Math.min(.9,b*1.8),r.beginPath(),r.moveTo(E[y-1][0],E[y-1][1]),r.lineTo(E[y][0],E[y][1]),r.stroke())}}r.globalAlpha=1},u=()=>{o&&(l+=.016,d(),requestAnimationFrame(u))};t.addEventListener("pointermove",f=>{let g=t.getBoundingClientRect();c.x=f.clientX-g.left,c.y=f.clientY-g.top,c.tk=1},{passive:!0}),t.addEventListener("pointerleave",()=>{c.tk=0}),new ResizeObserver(()=>{p(),i&&d()}).observe(t),new IntersectionObserver(([f])=>{let g=o;o=f.isIntersecting&&!i,o&&!g&&u()}).observe(t),p(),i?(o=!1,d()):u()})();})();
