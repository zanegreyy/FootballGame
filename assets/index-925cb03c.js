(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();var ka={},Zr={};Zr.byteLength=Ql;Zr.toByteArray=Yl;Zr.fromByteArray=th;var Xt=[],jt=[],Kl=typeof Uint8Array<"u"?Uint8Array:Array,xi="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var Ze=0,Wl=xi.length;Ze<Wl;++Ze)Xt[Ze]=xi[Ze],jt[xi.charCodeAt(Ze)]=Ze;jt["-".charCodeAt(0)]=62;jt["_".charCodeAt(0)]=63;function Fa(n){var t=n.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var e=n.indexOf("=");e===-1&&(e=t);var r=e===t?0:4-e%4;return[e,r]}function Ql(n){var t=Fa(n),e=t[0],r=t[1];return(e+r)*3/4-r}function Xl(n,t,e){return(t+e)*3/4-e}function Yl(n){var t,e=Fa(n),r=e[0],s=e[1],o=new Kl(Xl(n,r,s)),a=0,l=s>0?r-4:r,d;for(d=0;d<l;d+=4)t=jt[n.charCodeAt(d)]<<18|jt[n.charCodeAt(d+1)]<<12|jt[n.charCodeAt(d+2)]<<6|jt[n.charCodeAt(d+3)],o[a++]=t>>16&255,o[a++]=t>>8&255,o[a++]=t&255;return s===2&&(t=jt[n.charCodeAt(d)]<<2|jt[n.charCodeAt(d+1)]>>4,o[a++]=t&255),s===1&&(t=jt[n.charCodeAt(d)]<<10|jt[n.charCodeAt(d+1)]<<4|jt[n.charCodeAt(d+2)]>>2,o[a++]=t>>8&255,o[a++]=t&255),o}function Jl(n){return Xt[n>>18&63]+Xt[n>>12&63]+Xt[n>>6&63]+Xt[n&63]}function Zl(n,t,e){for(var r,s=[],o=t;o<e;o+=3)r=(n[o]<<16&16711680)+(n[o+1]<<8&65280)+(n[o+2]&255),s.push(Jl(r));return s.join("")}function th(n){for(var t,e=n.length,r=e%3,s=[],o=16383,a=0,l=e-r;a<l;a+=o)s.push(Zl(n,a,a+o>l?l:a+o));return r===1?(t=n[e-1],s.push(Xt[t>>2]+Xt[t<<4&63]+"==")):r===2&&(t=(n[e-2]<<8)+n[e-1],s.push(Xt[t>>10]+Xt[t>>4&63]+Xt[t<<2&63]+"=")),s.join("")}var cs={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */cs.read=function(n,t,e,r,s){var o,a,l=s*8-r-1,d=(1<<l)-1,m=d>>1,E=-7,P=e?s-1:0,x=e?-1:1,D=n[t+P];for(P+=x,o=D&(1<<-E)-1,D>>=-E,E+=l;E>0;o=o*256+n[t+P],P+=x,E-=8);for(a=o&(1<<-E)-1,o>>=-E,E+=r;E>0;a=a*256+n[t+P],P+=x,E-=8);if(o===0)o=1-m;else{if(o===d)return a?NaN:(D?-1:1)*(1/0);a=a+Math.pow(2,r),o=o-m}return(D?-1:1)*a*Math.pow(2,o-r)};cs.write=function(n,t,e,r,s,o){var a,l,d,m=o*8-s-1,E=(1<<m)-1,P=E>>1,x=s===23?Math.pow(2,-24)-Math.pow(2,-77):0,D=r?0:o-1,U=r?1:-1,j=t<0||t===0&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(l=isNaN(t)?1:0,a=E):(a=Math.floor(Math.log(t)/Math.LN2),t*(d=Math.pow(2,-a))<1&&(a--,d*=2),a+P>=1?t+=x/d:t+=x*Math.pow(2,1-P),t*d>=2&&(a++,d/=2),a+P>=E?(l=0,a=E):a+P>=1?(l=(t*d-1)*Math.pow(2,s),a=a+P):(l=t*Math.pow(2,P-1)*Math.pow(2,s),a=0));s>=8;n[e+D]=l&255,D+=U,l/=256,s-=8);for(a=a<<s|l,m+=s;m>0;n[e+D]=a&255,D+=U,a/=256,m-=8);n[e+D-U]|=j*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(n){var t=Zr,e=cs,r=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;n.Buffer=l,n.SlowBuffer=rt,n.INSPECT_MAX_BYTES=50;var s=2147483647;n.kMaxLength=s,l.TYPED_ARRAY_SUPPORT=o(),!l.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function o(){try{var g=new Uint8Array(1),h={foo:function(){return 42}};return Object.setPrototypeOf(h,Uint8Array.prototype),Object.setPrototypeOf(g,h),g.foo()===42}catch{return!1}}Object.defineProperty(l.prototype,"parent",{enumerable:!0,get:function(){if(l.isBuffer(this))return this.buffer}}),Object.defineProperty(l.prototype,"offset",{enumerable:!0,get:function(){if(l.isBuffer(this))return this.byteOffset}});function a(g){if(g>s)throw new RangeError('The value "'+g+'" is invalid for option "size"');var h=new Uint8Array(g);return Object.setPrototypeOf(h,l.prototype),h}function l(g,h,f){if(typeof g=="number"){if(typeof h=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return P(g)}return d(g,h,f)}l.poolSize=8192;function d(g,h,f){if(typeof g=="string")return x(g,h);if(ArrayBuffer.isView(g))return U(g);if(g==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof g);if(Ot(g,ArrayBuffer)||g&&Ot(g.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(Ot(g,SharedArrayBuffer)||g&&Ot(g.buffer,SharedArrayBuffer)))return j(g,h,f);if(typeof g=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var y=g.valueOf&&g.valueOf();if(y!=null&&y!==g)return l.from(y,h,f);var S=B(g);if(S)return S;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof g[Symbol.toPrimitive]=="function")return l.from(g[Symbol.toPrimitive]("string"),h,f);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof g)}l.from=function(g,h,f){return d(g,h,f)},Object.setPrototypeOf(l.prototype,Uint8Array.prototype),Object.setPrototypeOf(l,Uint8Array);function m(g){if(typeof g!="number")throw new TypeError('"size" argument must be of type number');if(g<0)throw new RangeError('The value "'+g+'" is invalid for option "size"')}function E(g,h,f){return m(g),g<=0?a(g):h!==void 0?typeof f=="string"?a(g).fill(h,f):a(g).fill(h):a(g)}l.alloc=function(g,h,f){return E(g,h,f)};function P(g){return m(g),a(g<0?0:Z(g)|0)}l.allocUnsafe=function(g){return P(g)},l.allocUnsafeSlow=function(g){return P(g)};function x(g,h){if((typeof h!="string"||h==="")&&(h="utf8"),!l.isEncoding(h))throw new TypeError("Unknown encoding: "+h);var f=it(g,h)|0,y=a(f),S=y.write(g,h);return S!==f&&(y=y.slice(0,S)),y}function D(g){for(var h=g.length<0?0:Z(g.length)|0,f=a(h),y=0;y<h;y+=1)f[y]=g[y]&255;return f}function U(g){if(Ot(g,Uint8Array)){var h=new Uint8Array(g);return j(h.buffer,h.byteOffset,h.byteLength)}return D(g)}function j(g,h,f){if(h<0||g.byteLength<h)throw new RangeError('"offset" is outside of buffer bounds');if(g.byteLength<h+(f||0))throw new RangeError('"length" is outside of buffer bounds');var y;return h===void 0&&f===void 0?y=new Uint8Array(g):f===void 0?y=new Uint8Array(g,h):y=new Uint8Array(g,h,f),Object.setPrototypeOf(y,l.prototype),y}function B(g){if(l.isBuffer(g)){var h=Z(g.length)|0,f=a(h);return f.length===0||g.copy(f,0,0,h),f}if(g.length!==void 0)return typeof g.length!="number"||be(g.length)?a(0):D(g);if(g.type==="Buffer"&&Array.isArray(g.data))return D(g.data)}function Z(g){if(g>=s)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s.toString(16)+" bytes");return g|0}function rt(g){return+g!=g&&(g=0),l.alloc(+g)}l.isBuffer=function(h){return h!=null&&h._isBuffer===!0&&h!==l.prototype},l.compare=function(h,f){if(Ot(h,Uint8Array)&&(h=l.from(h,h.offset,h.byteLength)),Ot(f,Uint8Array)&&(f=l.from(f,f.offset,f.byteLength)),!l.isBuffer(h)||!l.isBuffer(f))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(h===f)return 0;for(var y=h.length,S=f.length,k=0,M=Math.min(y,S);k<M;++k)if(h[k]!==f[k]){y=h[k],S=f[k];break}return y<S?-1:S<y?1:0},l.isEncoding=function(h){switch(String(h).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},l.concat=function(h,f){if(!Array.isArray(h))throw new TypeError('"list" argument must be an Array of Buffers');if(h.length===0)return l.alloc(0);var y;if(f===void 0)for(f=0,y=0;y<h.length;++y)f+=h[y].length;var S=l.allocUnsafe(f),k=0;for(y=0;y<h.length;++y){var M=h[y];if(Ot(M,Uint8Array))k+M.length>S.length?l.from(M).copy(S,k):Uint8Array.prototype.set.call(S,M,k);else if(l.isBuffer(M))M.copy(S,k);else throw new TypeError('"list" argument must be an Array of Buffers');k+=M.length}return S};function it(g,h){if(l.isBuffer(g))return g.length;if(ArrayBuffer.isView(g)||Ot(g,ArrayBuffer))return g.byteLength;if(typeof g!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof g);var f=g.length,y=arguments.length>2&&arguments[2]===!0;if(!y&&f===0)return 0;for(var S=!1;;)switch(h){case"ascii":case"latin1":case"binary":return f;case"utf8":case"utf-8":return In(g).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return f*2;case"hex":return f>>>1;case"base64":return Ce(g).length;default:if(S)return y?-1:In(g).length;h=(""+h).toLowerCase(),S=!0}}l.byteLength=it;function pt(g,h,f){var y=!1;if((h===void 0||h<0)&&(h=0),h>this.length||((f===void 0||f>this.length)&&(f=this.length),f<=0)||(f>>>=0,h>>>=0,f<=h))return"";for(g||(g="utf8");;)switch(g){case"hex":return Tn(this,h,f);case"utf8":case"utf-8":return qt(this,h,f);case"ascii":return Re(this,h,f);case"latin1":case"binary":return Se(this,h,f);case"base64":return v(this,h,f);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return fr(this,h,f);default:if(y)throw new TypeError("Unknown encoding: "+g);g=(g+"").toLowerCase(),y=!0}}l.prototype._isBuffer=!0;function Rt(g,h,f){var y=g[h];g[h]=g[f],g[f]=y}l.prototype.swap16=function(){var h=this.length;if(h%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var f=0;f<h;f+=2)Rt(this,f,f+1);return this},l.prototype.swap32=function(){var h=this.length;if(h%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var f=0;f<h;f+=4)Rt(this,f,f+3),Rt(this,f+1,f+2);return this},l.prototype.swap64=function(){var h=this.length;if(h%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var f=0;f<h;f+=8)Rt(this,f,f+7),Rt(this,f+1,f+6),Rt(this,f+2,f+5),Rt(this,f+3,f+4);return this},l.prototype.toString=function(){var h=this.length;return h===0?"":arguments.length===0?qt(this,0,h):pt.apply(this,arguments)},l.prototype.toLocaleString=l.prototype.toString,l.prototype.equals=function(h){if(!l.isBuffer(h))throw new TypeError("Argument must be a Buffer");return this===h?!0:l.compare(this,h)===0},l.prototype.inspect=function(){var h="",f=n.INSPECT_MAX_BYTES;return h=this.toString("hex",0,f).replace(/(.{2})/g,"$1 ").trim(),this.length>f&&(h+=" ... "),"<Buffer "+h+">"},r&&(l.prototype[r]=l.prototype.inspect),l.prototype.compare=function(h,f,y,S,k){if(Ot(h,Uint8Array)&&(h=l.from(h,h.offset,h.byteLength)),!l.isBuffer(h))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof h);if(f===void 0&&(f=0),y===void 0&&(y=h?h.length:0),S===void 0&&(S=0),k===void 0&&(k=this.length),f<0||y>h.length||S<0||k>this.length)throw new RangeError("out of range index");if(S>=k&&f>=y)return 0;if(S>=k)return-1;if(f>=y)return 1;if(f>>>=0,y>>>=0,S>>>=0,k>>>=0,this===h)return 0;for(var M=k-S,X=y-f,et=Math.min(M,X),st=this.slice(S,k),yt=h.slice(f,y),W=0;W<et;++W)if(st[W]!==yt[W]){M=st[W],X=yt[W];break}return M<X?-1:X<M?1:0};function mt(g,h,f,y,S){if(g.length===0)return-1;if(typeof f=="string"?(y=f,f=0):f>2147483647?f=2147483647:f<-2147483648&&(f=-2147483648),f=+f,be(f)&&(f=S?0:g.length-1),f<0&&(f=g.length+f),f>=g.length){if(S)return-1;f=g.length-1}else if(f<0)if(S)f=0;else return-1;if(typeof h=="string"&&(h=l.from(h,y)),l.isBuffer(h))return h.length===0?-1:A(g,h,f,y,S);if(typeof h=="number")return h=h&255,typeof Uint8Array.prototype.indexOf=="function"?S?Uint8Array.prototype.indexOf.call(g,h,f):Uint8Array.prototype.lastIndexOf.call(g,h,f):A(g,[h],f,y,S);throw new TypeError("val must be string, number or Buffer")}function A(g,h,f,y,S){var k=1,M=g.length,X=h.length;if(y!==void 0&&(y=String(y).toLowerCase(),y==="ucs2"||y==="ucs-2"||y==="utf16le"||y==="utf-16le")){if(g.length<2||h.length<2)return-1;k=2,M/=2,X/=2,f/=2}function et(Ve,Rn){return k===1?Ve[Rn]:Ve.readUInt16BE(Rn*k)}var st;if(S){var yt=-1;for(st=f;st<M;st++)if(et(g,st)===et(h,yt===-1?0:st-yt)){if(yt===-1&&(yt=st),st-yt+1===X)return yt*k}else yt!==-1&&(st-=st-yt),yt=-1}else for(f+X>M&&(f=M-X),st=f;st>=0;st--){for(var W=!0,_t=0;_t<X;_t++)if(et(g,st+_t)!==et(h,_t)){W=!1;break}if(W)return st}return-1}l.prototype.includes=function(h,f,y){return this.indexOf(h,f,y)!==-1},l.prototype.indexOf=function(h,f,y){return mt(this,h,f,y,!0)},l.prototype.lastIndexOf=function(h,f,y){return mt(this,h,f,y,!1)};function _(g,h,f,y){f=Number(f)||0;var S=g.length-f;y?(y=Number(y),y>S&&(y=S)):y=S;var k=h.length;y>k/2&&(y=k/2);for(var M=0;M<y;++M){var X=parseInt(h.substr(M*2,2),16);if(be(X))return M;g[f+M]=X}return M}function w(g,h,f,y){return pe(In(h,g.length-f),g,f,y)}function T(g,h,f,y){return pe(pi(h),g,f,y)}function I(g,h,f,y){return pe(Ce(h),g,f,y)}function C(g,h,f,y){return pe(We(h,g.length-f),g,f,y)}l.prototype.write=function(h,f,y,S){if(f===void 0)S="utf8",y=this.length,f=0;else if(y===void 0&&typeof f=="string")S=f,y=this.length,f=0;else if(isFinite(f))f=f>>>0,isFinite(y)?(y=y>>>0,S===void 0&&(S="utf8")):(S=y,y=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var k=this.length-f;if((y===void 0||y>k)&&(y=k),h.length>0&&(y<0||f<0)||f>this.length)throw new RangeError("Attempt to write outside buffer bounds");S||(S="utf8");for(var M=!1;;)switch(S){case"hex":return _(this,h,f,y);case"utf8":case"utf-8":return w(this,h,f,y);case"ascii":case"latin1":case"binary":return T(this,h,f,y);case"base64":return I(this,h,f,y);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return C(this,h,f,y);default:if(M)throw new TypeError("Unknown encoding: "+S);S=(""+S).toLowerCase(),M=!0}},l.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function v(g,h,f){return h===0&&f===g.length?t.fromByteArray(g):t.fromByteArray(g.slice(h,f))}function qt(g,h,f){f=Math.min(g.length,f);for(var y=[],S=h;S<f;){var k=g[S],M=null,X=k>239?4:k>223?3:k>191?2:1;if(S+X<=f){var et,st,yt,W;switch(X){case 1:k<128&&(M=k);break;case 2:et=g[S+1],(et&192)===128&&(W=(k&31)<<6|et&63,W>127&&(M=W));break;case 3:et=g[S+1],st=g[S+2],(et&192)===128&&(st&192)===128&&(W=(k&15)<<12|(et&63)<<6|st&63,W>2047&&(W<55296||W>57343)&&(M=W));break;case 4:et=g[S+1],st=g[S+2],yt=g[S+3],(et&192)===128&&(st&192)===128&&(yt&192)===128&&(W=(k&15)<<18|(et&63)<<12|(st&63)<<6|yt&63,W>65535&&W<1114112&&(M=W))}}M===null?(M=65533,X=1):M>65535&&(M-=65536,y.push(M>>>10&1023|55296),M=56320|M&1023),y.push(M),S+=X}return fi(y)}var fe=4096;function fi(g){var h=g.length;if(h<=fe)return String.fromCharCode.apply(String,g);for(var f="",y=0;y<h;)f+=String.fromCharCode.apply(String,g.slice(y,y+=fe));return f}function Re(g,h,f){var y="";f=Math.min(g.length,f);for(var S=h;S<f;++S)y+=String.fromCharCode(g[S]&127);return y}function Se(g,h,f){var y="";f=Math.min(g.length,f);for(var S=h;S<f;++S)y+=String.fromCharCode(g[S]);return y}function Tn(g,h,f){var y=g.length;(!h||h<0)&&(h=0),(!f||f<0||f>y)&&(f=y);for(var S="",k=h;k<f;++k)S+=An[g[k]];return S}function fr(g,h,f){for(var y=g.slice(h,f),S="",k=0;k<y.length-1;k+=2)S+=String.fromCharCode(y[k]+y[k+1]*256);return S}l.prototype.slice=function(h,f){var y=this.length;h=~~h,f=f===void 0?y:~~f,h<0?(h+=y,h<0&&(h=0)):h>y&&(h=y),f<0?(f+=y,f<0&&(f=0)):f>y&&(f=y),f<h&&(f=h);var S=this.subarray(h,f);return Object.setPrototypeOf(S,l.prototype),S};function gt(g,h,f){if(g%1!==0||g<0)throw new RangeError("offset is not uint");if(g+h>f)throw new RangeError("Trying to access beyond buffer length")}l.prototype.readUintLE=l.prototype.readUIntLE=function(h,f,y){h=h>>>0,f=f>>>0,y||gt(h,f,this.length);for(var S=this[h],k=1,M=0;++M<f&&(k*=256);)S+=this[h+M]*k;return S},l.prototype.readUintBE=l.prototype.readUIntBE=function(h,f,y){h=h>>>0,f=f>>>0,y||gt(h,f,this.length);for(var S=this[h+--f],k=1;f>0&&(k*=256);)S+=this[h+--f]*k;return S},l.prototype.readUint8=l.prototype.readUInt8=function(h,f){return h=h>>>0,f||gt(h,1,this.length),this[h]},l.prototype.readUint16LE=l.prototype.readUInt16LE=function(h,f){return h=h>>>0,f||gt(h,2,this.length),this[h]|this[h+1]<<8},l.prototype.readUint16BE=l.prototype.readUInt16BE=function(h,f){return h=h>>>0,f||gt(h,2,this.length),this[h]<<8|this[h+1]},l.prototype.readUint32LE=l.prototype.readUInt32LE=function(h,f){return h=h>>>0,f||gt(h,4,this.length),(this[h]|this[h+1]<<8|this[h+2]<<16)+this[h+3]*16777216},l.prototype.readUint32BE=l.prototype.readUInt32BE=function(h,f){return h=h>>>0,f||gt(h,4,this.length),this[h]*16777216+(this[h+1]<<16|this[h+2]<<8|this[h+3])},l.prototype.readIntLE=function(h,f,y){h=h>>>0,f=f>>>0,y||gt(h,f,this.length);for(var S=this[h],k=1,M=0;++M<f&&(k*=256);)S+=this[h+M]*k;return k*=128,S>=k&&(S-=Math.pow(2,8*f)),S},l.prototype.readIntBE=function(h,f,y){h=h>>>0,f=f>>>0,y||gt(h,f,this.length);for(var S=f,k=1,M=this[h+--S];S>0&&(k*=256);)M+=this[h+--S]*k;return k*=128,M>=k&&(M-=Math.pow(2,8*f)),M},l.prototype.readInt8=function(h,f){return h=h>>>0,f||gt(h,1,this.length),this[h]&128?(255-this[h]+1)*-1:this[h]},l.prototype.readInt16LE=function(h,f){h=h>>>0,f||gt(h,2,this.length);var y=this[h]|this[h+1]<<8;return y&32768?y|4294901760:y},l.prototype.readInt16BE=function(h,f){h=h>>>0,f||gt(h,2,this.length);var y=this[h+1]|this[h]<<8;return y&32768?y|4294901760:y},l.prototype.readInt32LE=function(h,f){return h=h>>>0,f||gt(h,4,this.length),this[h]|this[h+1]<<8|this[h+2]<<16|this[h+3]<<24},l.prototype.readInt32BE=function(h,f){return h=h>>>0,f||gt(h,4,this.length),this[h]<<24|this[h+1]<<16|this[h+2]<<8|this[h+3]},l.prototype.readFloatLE=function(h,f){return h=h>>>0,f||gt(h,4,this.length),e.read(this,h,!0,23,4)},l.prototype.readFloatBE=function(h,f){return h=h>>>0,f||gt(h,4,this.length),e.read(this,h,!1,23,4)},l.prototype.readDoubleLE=function(h,f){return h=h>>>0,f||gt(h,8,this.length),e.read(this,h,!0,52,8)},l.prototype.readDoubleBE=function(h,f){return h=h>>>0,f||gt(h,8,this.length),e.read(this,h,!1,52,8)};function lt(g,h,f,y,S,k){if(!l.isBuffer(g))throw new TypeError('"buffer" argument must be a Buffer instance');if(h>S||h<k)throw new RangeError('"value" argument is out of bounds');if(f+y>g.length)throw new RangeError("Index out of range")}l.prototype.writeUintLE=l.prototype.writeUIntLE=function(h,f,y,S){if(h=+h,f=f>>>0,y=y>>>0,!S){var k=Math.pow(2,8*y)-1;lt(this,h,f,y,k,0)}var M=1,X=0;for(this[f]=h&255;++X<y&&(M*=256);)this[f+X]=h/M&255;return f+y},l.prototype.writeUintBE=l.prototype.writeUIntBE=function(h,f,y,S){if(h=+h,f=f>>>0,y=y>>>0,!S){var k=Math.pow(2,8*y)-1;lt(this,h,f,y,k,0)}var M=y-1,X=1;for(this[f+M]=h&255;--M>=0&&(X*=256);)this[f+M]=h/X&255;return f+y},l.prototype.writeUint8=l.prototype.writeUInt8=function(h,f,y){return h=+h,f=f>>>0,y||lt(this,h,f,1,255,0),this[f]=h&255,f+1},l.prototype.writeUint16LE=l.prototype.writeUInt16LE=function(h,f,y){return h=+h,f=f>>>0,y||lt(this,h,f,2,65535,0),this[f]=h&255,this[f+1]=h>>>8,f+2},l.prototype.writeUint16BE=l.prototype.writeUInt16BE=function(h,f,y){return h=+h,f=f>>>0,y||lt(this,h,f,2,65535,0),this[f]=h>>>8,this[f+1]=h&255,f+2},l.prototype.writeUint32LE=l.prototype.writeUInt32LE=function(h,f,y){return h=+h,f=f>>>0,y||lt(this,h,f,4,4294967295,0),this[f+3]=h>>>24,this[f+2]=h>>>16,this[f+1]=h>>>8,this[f]=h&255,f+4},l.prototype.writeUint32BE=l.prototype.writeUInt32BE=function(h,f,y){return h=+h,f=f>>>0,y||lt(this,h,f,4,4294967295,0),this[f]=h>>>24,this[f+1]=h>>>16,this[f+2]=h>>>8,this[f+3]=h&255,f+4},l.prototype.writeIntLE=function(h,f,y,S){if(h=+h,f=f>>>0,!S){var k=Math.pow(2,8*y-1);lt(this,h,f,y,k-1,-k)}var M=0,X=1,et=0;for(this[f]=h&255;++M<y&&(X*=256);)h<0&&et===0&&this[f+M-1]!==0&&(et=1),this[f+M]=(h/X>>0)-et&255;return f+y},l.prototype.writeIntBE=function(h,f,y,S){if(h=+h,f=f>>>0,!S){var k=Math.pow(2,8*y-1);lt(this,h,f,y,k-1,-k)}var M=y-1,X=1,et=0;for(this[f+M]=h&255;--M>=0&&(X*=256);)h<0&&et===0&&this[f+M+1]!==0&&(et=1),this[f+M]=(h/X>>0)-et&255;return f+y},l.prototype.writeInt8=function(h,f,y){return h=+h,f=f>>>0,y||lt(this,h,f,1,127,-128),h<0&&(h=255+h+1),this[f]=h&255,f+1},l.prototype.writeInt16LE=function(h,f,y){return h=+h,f=f>>>0,y||lt(this,h,f,2,32767,-32768),this[f]=h&255,this[f+1]=h>>>8,f+2},l.prototype.writeInt16BE=function(h,f,y){return h=+h,f=f>>>0,y||lt(this,h,f,2,32767,-32768),this[f]=h>>>8,this[f+1]=h&255,f+2},l.prototype.writeInt32LE=function(h,f,y){return h=+h,f=f>>>0,y||lt(this,h,f,4,2147483647,-2147483648),this[f]=h&255,this[f+1]=h>>>8,this[f+2]=h>>>16,this[f+3]=h>>>24,f+4},l.prototype.writeInt32BE=function(h,f,y){return h=+h,f=f>>>0,y||lt(this,h,f,4,2147483647,-2147483648),h<0&&(h=4294967295+h+1),this[f]=h>>>24,this[f+1]=h>>>16,this[f+2]=h>>>8,this[f+3]=h&255,f+4};function wt(g,h,f,y,S,k){if(f+y>g.length)throw new RangeError("Index out of range");if(f<0)throw new RangeError("Index out of range")}function dr(g,h,f,y,S){return h=+h,f=f>>>0,S||wt(g,h,f,4),e.write(g,h,f,y,23,4),f+4}l.prototype.writeFloatLE=function(h,f,y){return dr(this,h,f,!0,y)},l.prototype.writeFloatBE=function(h,f,y){return dr(this,h,f,!1,y)};function de(g,h,f,y,S){return h=+h,f=f>>>0,S||wt(g,h,f,8),e.write(g,h,f,y,52,8),f+8}l.prototype.writeDoubleLE=function(h,f,y){return de(this,h,f,!0,y)},l.prototype.writeDoubleBE=function(h,f,y){return de(this,h,f,!1,y)},l.prototype.copy=function(h,f,y,S){if(!l.isBuffer(h))throw new TypeError("argument should be a Buffer");if(y||(y=0),!S&&S!==0&&(S=this.length),f>=h.length&&(f=h.length),f||(f=0),S>0&&S<y&&(S=y),S===y||h.length===0||this.length===0)return 0;if(f<0)throw new RangeError("targetStart out of bounds");if(y<0||y>=this.length)throw new RangeError("Index out of range");if(S<0)throw new RangeError("sourceEnd out of bounds");S>this.length&&(S=this.length),h.length-f<S-y&&(S=h.length-f+y);var k=S-y;return this===h&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(f,y,S):Uint8Array.prototype.set.call(h,this.subarray(y,S),f),k},l.prototype.fill=function(h,f,y,S){if(typeof h=="string"){if(typeof f=="string"?(S=f,f=0,y=this.length):typeof y=="string"&&(S=y,y=this.length),S!==void 0&&typeof S!="string")throw new TypeError("encoding must be a string");if(typeof S=="string"&&!l.isEncoding(S))throw new TypeError("Unknown encoding: "+S);if(h.length===1){var k=h.charCodeAt(0);(S==="utf8"&&k<128||S==="latin1")&&(h=k)}}else typeof h=="number"?h=h&255:typeof h=="boolean"&&(h=Number(h));if(f<0||this.length<f||this.length<y)throw new RangeError("Out of range index");if(y<=f)return this;f=f>>>0,y=y===void 0?this.length:y>>>0,h||(h=0);var M;if(typeof h=="number")for(M=f;M<y;++M)this[M]=h;else{var X=l.isBuffer(h)?h:l.from(h,S),et=X.length;if(et===0)throw new TypeError('The value "'+h+'" is invalid for argument "value"');for(M=0;M<y-f;++M)this[M+f]=X[M%et]}return this};var di=/[^+/0-9A-Za-z-_]/g;function Pe(g){if(g=g.split("=")[0],g=g.trim().replace(di,""),g.length<2)return"";for(;g.length%4!==0;)g=g+"=";return g}function In(g,h){h=h||1/0;for(var f,y=g.length,S=null,k=[],M=0;M<y;++M){if(f=g.charCodeAt(M),f>55295&&f<57344){if(!S){if(f>56319){(h-=3)>-1&&k.push(239,191,189);continue}else if(M+1===y){(h-=3)>-1&&k.push(239,191,189);continue}S=f;continue}if(f<56320){(h-=3)>-1&&k.push(239,191,189),S=f;continue}f=(S-55296<<10|f-56320)+65536}else S&&(h-=3)>-1&&k.push(239,191,189);if(S=null,f<128){if((h-=1)<0)break;k.push(f)}else if(f<2048){if((h-=2)<0)break;k.push(f>>6|192,f&63|128)}else if(f<65536){if((h-=3)<0)break;k.push(f>>12|224,f>>6&63|128,f&63|128)}else if(f<1114112){if((h-=4)<0)break;k.push(f>>18|240,f>>12&63|128,f>>6&63|128,f&63|128)}else throw new Error("Invalid code point")}return k}function pi(g){for(var h=[],f=0;f<g.length;++f)h.push(g.charCodeAt(f)&255);return h}function We(g,h){for(var f,y,S,k=[],M=0;M<g.length&&!((h-=2)<0);++M)f=g.charCodeAt(M),y=f>>8,S=f%256,k.push(S),k.push(y);return k}function Ce(g){return t.toByteArray(Pe(g))}function pe(g,h,f,y){for(var S=0;S<y&&!(S+f>=h.length||S>=g.length);++S)h[S+f]=g[S];return S}function Ot(g,h){return g instanceof h||g!=null&&g.constructor!=null&&g.constructor.name!=null&&g.constructor.name===h.name}function be(g){return g!==g}var An=function(){for(var g="0123456789abcdef",h=new Array(256),f=0;f<16;++f)for(var y=f*16,S=0;S<16;++S)h[y+S]=g[f]+g[S];return h}()})(ka);var Lr={},eh={get exports(){return Lr},set exports(n){Lr=n}},dt=eh.exports={},Wt,Qt;function qi(){throw new Error("setTimeout has not been defined")}function ji(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?Wt=setTimeout:Wt=qi}catch{Wt=qi}try{typeof clearTimeout=="function"?Qt=clearTimeout:Qt=ji}catch{Qt=ji}})();function Na(n){if(Wt===setTimeout)return setTimeout(n,0);if((Wt===qi||!Wt)&&setTimeout)return Wt=setTimeout,setTimeout(n,0);try{return Wt(n,0)}catch{try{return Wt.call(null,n,0)}catch{return Wt.call(this,n,0)}}}function nh(n){if(Qt===clearTimeout)return clearTimeout(n);if((Qt===ji||!Qt)&&clearTimeout)return Qt=clearTimeout,clearTimeout(n);try{return Qt(n)}catch{try{return Qt.call(null,n)}catch{return Qt.call(this,n)}}}var se=[],sn=!1,Me,Dr=-1;function rh(){!sn||!Me||(sn=!1,Me.length?se=Me.concat(se):Dr=-1,se.length&&Ma())}function Ma(){if(!sn){var n=Na(rh);sn=!0;for(var t=se.length;t;){for(Me=se,se=[];++Dr<t;)Me&&Me[Dr].run();Dr=-1,t=se.length}Me=null,sn=!1,nh(n)}}dt.nextTick=function(n){var t=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)t[e-1]=arguments[e];se.push(new La(n,t)),se.length===1&&!sn&&Na(Ma)};function La(n,t){this.fun=n,this.array=t}La.prototype.run=function(){this.fun.apply(null,this.array)};dt.title="browser";dt.browser=!0;dt.env={};dt.argv=[];dt.version="";dt.versions={};function ce(){}dt.on=ce;dt.addListener=ce;dt.once=ce;dt.off=ce;dt.removeListener=ce;dt.removeAllListeners=ce;dt.emit=ce;dt.prependListener=ce;dt.prependOnceListener=ce;dt.listeners=function(n){return[]};dt.binding=function(n){throw new Error("process.binding is not supported")};dt.cwd=function(){return"/"};dt.chdir=function(n){throw new Error("process.chdir is not supported")};dt.umask=function(){return 0};var ih=function(n){function t(){var r=this||self;return delete n.prototype.__magic__,r}if(typeof globalThis=="object")return globalThis;if(this)return t();n.defineProperty(n.prototype,"__magic__",{configurable:!0,get:t});var e=__magic__;return e}(Object),Be=ih;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},sh=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],l=n[e++],d=((s&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(d>>10)),t[r++]=String.fromCharCode(56320+(d&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Ba={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,l=a?n[s+1]:0,d=s+2<n.length,m=d?n[s+2]:0,E=o>>2,P=(o&3)<<4|l>>4;let x=(l&15)<<2|m>>6,D=m&63;d||(D=64,a||(x=64)),r.push(e[E],e[P],e[x],e[D])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Oa(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):sh(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],l=s<n.length?e[n.charAt(s)]:0;++s;const m=s<n.length?e[n.charAt(s)]:64;++s;const P=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||l==null||m==null||P==null)throw new oh;const x=o<<2|l>>4;if(r.push(x),m!==64){const D=l<<4&240|m>>2;if(r.push(D),P!==64){const U=m<<6&192|P;r.push(U)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class oh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ah=function(n){const t=Oa(n);return Ba.encodeByteArray(t,!0)},Or=function(n){return ah(n).replace(/\./g,"")},uh=function(n){try{return Ba.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof Be<"u")return Be;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hh=()=>lh().__FIREBASE_DEFAULTS__,ch=()=>{if(typeof Lr>"u"||typeof Lr.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},fh=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&uh(n[1]);return t&&JSON.parse(t)},fs=()=>{try{return hh()||ch()||fh()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},dh=n=>{var t,e;return(e=(t=fs())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},ph=n=>{const t=dh(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Ua=()=>{var n;return(n=fs())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gh(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n),l="";return[Or(JSON.stringify(e)),Or(JSON.stringify(a)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _h(){var n;const t=(n=fs())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(Be.process)==="[object process]"}catch{return!1}}function Eh(){return!_h()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function vh(){try{return typeof indexedDB=="object"}catch{return!1}}function wh(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th="FirebaseError";class yn extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Th,Object.setPrototypeOf(this,yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qa.prototype.create)}}class qa{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?Ih(o,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new yn(s,l,r)}}function Ih(n,t){return n.replace(Ah,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Ah=/\{\$([^}]+)}/g;function $i(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(Uo(o)&&Uo(a)){if(!$i(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function Uo(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Br(n){return n&&n._delegate?n._delegate:n}class Wn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new mh;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ph(t))try{this.getOrInitializeService({instanceIdentifier:Ne})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=Ne){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ne){return this.instances.has(t)}getOptions(t=Ne){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Sh(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ne){return this.component?this.component.multipleInstances?t:Ne:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sh(n){return n===Ne?void 0:n}function Ph(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Rh(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(J||(J={}));const bh={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},Vh=J.INFO,xh={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},Dh=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=xh[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ja{constructor(t){this.name=t,this._logLevel=Vh,this._logHandler=Dh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in J))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?bh[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...t),this._logHandler(this,J.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...t),this._logHandler(this,J.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,J.INFO,...t),this._logHandler(this,J.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,J.WARN,...t),this._logHandler(this,J.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...t),this._logHandler(this,J.ERROR,...t)}}const kh=(n,t)=>t.some(e=>n instanceof e);let qo,jo;function Fh(){return qo||(qo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Nh(){return jo||(jo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $a=new WeakMap,zi=new WeakMap,za=new WeakMap,Di=new WeakMap,ds=new WeakMap;function Mh(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(Ee(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&$a.set(e,n)}).catch(()=>{}),ds.set(t,n),t}function Lh(n){if(zi.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});zi.set(n,t)}let Gi={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return zi.get(n);if(t==="objectStoreNames")return n.objectStoreNames||za.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Ee(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Oh(n){Gi=n(Gi)}function Bh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(ki(this),t,...e);return za.set(r,t.sort?t.sort():[t]),Ee(r)}:Nh().includes(n)?function(...t){return n.apply(ki(this),t),Ee($a.get(this))}:function(...t){return Ee(n.apply(ki(this),t))}}function Uh(n){return typeof n=="function"?Bh(n):(n instanceof IDBTransaction&&Lh(n),kh(n,Fh())?new Proxy(n,Gi):n)}function Ee(n){if(n instanceof IDBRequest)return Mh(n);if(Di.has(n))return Di.get(n);const t=Uh(n);return t!==n&&(Di.set(n,t),ds.set(t,n)),t}const ki=n=>ds.get(n);function qh(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),l=Ee(a);return r&&a.addEventListener("upgradeneeded",d=>{r(Ee(a.result),d.oldVersion,d.newVersion,Ee(a.transaction),d)}),e&&a.addEventListener("blocked",d=>e(d.oldVersion,d.newVersion,d)),l.then(d=>{o&&d.addEventListener("close",()=>o()),s&&d.addEventListener("versionchange",m=>s(m.oldVersion,m.newVersion,m))}).catch(()=>{}),l}const jh=["get","getKey","getAll","getAllKeys","count"],$h=["put","add","delete","clear"],Fi=new Map;function $o(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Fi.get(t))return Fi.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=$h.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||jh.includes(e)))return;const o=async function(a,...l){const d=this.transaction(a,s?"readwrite":"readonly");let m=d.store;return r&&(m=m.index(l.shift())),(await Promise.all([m[e](...l),s&&d.done]))[0]};return Fi.set(t,o),o}Oh(n=>({...n,get:(t,e,r)=>$o(t,e)||n.get(t,e,r),has:(t,e)=>!!$o(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Gh(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Gh(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Hi="@firebase/app",zo="0.10.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue=new ja("@firebase/app"),Hh="@firebase/app-compat",Kh="@firebase/analytics-compat",Wh="@firebase/analytics",Qh="@firebase/app-check-compat",Xh="@firebase/app-check",Yh="@firebase/auth",Jh="@firebase/auth-compat",Zh="@firebase/database",tc="@firebase/database-compat",ec="@firebase/functions",nc="@firebase/functions-compat",rc="@firebase/installations",ic="@firebase/installations-compat",sc="@firebase/messaging",oc="@firebase/messaging-compat",ac="@firebase/performance",uc="@firebase/performance-compat",lc="@firebase/remote-config",hc="@firebase/remote-config-compat",cc="@firebase/storage",fc="@firebase/storage-compat",dc="@firebase/firestore",pc="@firebase/vertexai-preview",mc="@firebase/firestore-compat",gc="firebase",yc="10.12.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki="[DEFAULT]",_c={[Hi]:"fire-core",[Hh]:"fire-core-compat",[Wh]:"fire-analytics",[Kh]:"fire-analytics-compat",[Xh]:"fire-app-check",[Qh]:"fire-app-check-compat",[Yh]:"fire-auth",[Jh]:"fire-auth-compat",[Zh]:"fire-rtdb",[tc]:"fire-rtdb-compat",[ec]:"fire-fn",[nc]:"fire-fn-compat",[rc]:"fire-iid",[ic]:"fire-iid-compat",[sc]:"fire-fcm",[oc]:"fire-fcm-compat",[ac]:"fire-perf",[uc]:"fire-perf-compat",[lc]:"fire-rc",[hc]:"fire-rc-compat",[cc]:"fire-gcs",[fc]:"fire-gcs-compat",[dc]:"fire-fst",[mc]:"fire-fst-compat",[pc]:"fire-vertex","fire-js":"fire-js",[gc]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur=new Map,Ec=new Map,Wi=new Map;function Go(n,t){try{n.container.addComponent(t)}catch(e){Ue.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function qr(n){const t=n.name;if(Wi.has(t))return Ue.debug(`There were multiple attempts to register component ${t}.`),!1;Wi.set(t,n);for(const e of Ur.values())Go(e,n);for(const e of Ec.values())Go(e,n);return!0}function vc(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},ve=new qa("app","Firebase",wc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ve.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic=yc;function Ga(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ki,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw ve.create("bad-app-name",{appName:String(s)});if(e||(e=Ua()),!e)throw ve.create("no-options");const o=Ur.get(s);if(o){if($i(e,o.options)&&$i(r,o.config))return o;throw ve.create("duplicate-app",{appName:s})}const a=new Ch(s);for(const d of Wi.values())a.addComponent(d);const l=new Tc(e,r,a);return Ur.set(s,l),l}function Ac(n=Ki){const t=Ur.get(n);if(!t&&n===Ki&&Ua())return Ga();if(!t)throw ve.create("no-app",{appName:n});return t}function on(n,t,e){var r;let s=(r=_c[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const l=[`Unable to register library "${s}" with version "${t}":`];o&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ue.warn(l.join(" "));return}qr(new Wn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc="firebase-heartbeat-database",Sc=1,Qn="firebase-heartbeat-store";let Ni=null;function Ha(){return Ni||(Ni=qh(Rc,Sc,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Qn)}catch(e){console.warn(e)}}}}).catch(n=>{throw ve.create("idb-open",{originalErrorMessage:n.message})})),Ni}async function Pc(n){try{const e=(await Ha()).transaction(Qn),r=await e.objectStore(Qn).get(Ka(n));return await e.done,r}catch(t){if(t instanceof yn)Ue.warn(t.message);else{const e=ve.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ue.warn(e.message)}}}async function Ho(n,t){try{const r=(await Ha()).transaction(Qn,"readwrite");await r.objectStore(Qn).put(t,Ka(n)),await r.done}catch(e){if(e instanceof yn)Ue.warn(e.message);else{const r=ve.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Ue.warn(r.message)}}}function Ka(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc=1024,bc=30*24*60*60*1e3;class Vc{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Dc(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ko();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=bc}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ko(),{heartbeatsToSend:r,unsentEntries:s}=xc(this._heartbeatsCache.heartbeats),o=Or(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Ko(){return new Date().toISOString().substring(0,10)}function xc(n,t=Cc){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Wo(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Wo(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Dc{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vh()?wh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Pc(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ho(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ho(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Wo(n){return Or(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(n){qr(new Wn("platform-logger",t=>new zh(t),"PRIVATE")),qr(new Wn("heartbeat",t=>new Vc(t),"PRIVATE")),on(Hi,zo,n),on(Hi,zo,"esm2017"),on("fire-js","")}kc("");var Fc="firebase",Nc="10.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */on(Fc,Nc,"app");var Qo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof Be<"u"?Be:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Oe,Wa;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(A,_){function w(){}w.prototype=_.prototype,A.D=_.prototype,A.prototype=new w,A.prototype.constructor=A,A.C=function(T,I,C){for(var v=Array(arguments.length-2),qt=2;qt<arguments.length;qt++)v[qt-2]=arguments[qt];return _.prototype[I].apply(T,v)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,_,w){w||(w=0);var T=Array(16);if(typeof _=="string")for(var I=0;16>I;++I)T[I]=_.charCodeAt(w++)|_.charCodeAt(w++)<<8|_.charCodeAt(w++)<<16|_.charCodeAt(w++)<<24;else for(I=0;16>I;++I)T[I]=_[w++]|_[w++]<<8|_[w++]<<16|_[w++]<<24;_=A.g[0],w=A.g[1],I=A.g[2];var C=A.g[3],v=_+(C^w&(I^C))+T[0]+3614090360&4294967295;_=w+(v<<7&4294967295|v>>>25),v=C+(I^_&(w^I))+T[1]+3905402710&4294967295,C=_+(v<<12&4294967295|v>>>20),v=I+(w^C&(_^w))+T[2]+606105819&4294967295,I=C+(v<<17&4294967295|v>>>15),v=w+(_^I&(C^_))+T[3]+3250441966&4294967295,w=I+(v<<22&4294967295|v>>>10),v=_+(C^w&(I^C))+T[4]+4118548399&4294967295,_=w+(v<<7&4294967295|v>>>25),v=C+(I^_&(w^I))+T[5]+1200080426&4294967295,C=_+(v<<12&4294967295|v>>>20),v=I+(w^C&(_^w))+T[6]+2821735955&4294967295,I=C+(v<<17&4294967295|v>>>15),v=w+(_^I&(C^_))+T[7]+4249261313&4294967295,w=I+(v<<22&4294967295|v>>>10),v=_+(C^w&(I^C))+T[8]+1770035416&4294967295,_=w+(v<<7&4294967295|v>>>25),v=C+(I^_&(w^I))+T[9]+2336552879&4294967295,C=_+(v<<12&4294967295|v>>>20),v=I+(w^C&(_^w))+T[10]+4294925233&4294967295,I=C+(v<<17&4294967295|v>>>15),v=w+(_^I&(C^_))+T[11]+2304563134&4294967295,w=I+(v<<22&4294967295|v>>>10),v=_+(C^w&(I^C))+T[12]+1804603682&4294967295,_=w+(v<<7&4294967295|v>>>25),v=C+(I^_&(w^I))+T[13]+4254626195&4294967295,C=_+(v<<12&4294967295|v>>>20),v=I+(w^C&(_^w))+T[14]+2792965006&4294967295,I=C+(v<<17&4294967295|v>>>15),v=w+(_^I&(C^_))+T[15]+1236535329&4294967295,w=I+(v<<22&4294967295|v>>>10),v=_+(I^C&(w^I))+T[1]+4129170786&4294967295,_=w+(v<<5&4294967295|v>>>27),v=C+(w^I&(_^w))+T[6]+3225465664&4294967295,C=_+(v<<9&4294967295|v>>>23),v=I+(_^w&(C^_))+T[11]+643717713&4294967295,I=C+(v<<14&4294967295|v>>>18),v=w+(C^_&(I^C))+T[0]+3921069994&4294967295,w=I+(v<<20&4294967295|v>>>12),v=_+(I^C&(w^I))+T[5]+3593408605&4294967295,_=w+(v<<5&4294967295|v>>>27),v=C+(w^I&(_^w))+T[10]+38016083&4294967295,C=_+(v<<9&4294967295|v>>>23),v=I+(_^w&(C^_))+T[15]+3634488961&4294967295,I=C+(v<<14&4294967295|v>>>18),v=w+(C^_&(I^C))+T[4]+3889429448&4294967295,w=I+(v<<20&4294967295|v>>>12),v=_+(I^C&(w^I))+T[9]+568446438&4294967295,_=w+(v<<5&4294967295|v>>>27),v=C+(w^I&(_^w))+T[14]+3275163606&4294967295,C=_+(v<<9&4294967295|v>>>23),v=I+(_^w&(C^_))+T[3]+4107603335&4294967295,I=C+(v<<14&4294967295|v>>>18),v=w+(C^_&(I^C))+T[8]+1163531501&4294967295,w=I+(v<<20&4294967295|v>>>12),v=_+(I^C&(w^I))+T[13]+2850285829&4294967295,_=w+(v<<5&4294967295|v>>>27),v=C+(w^I&(_^w))+T[2]+4243563512&4294967295,C=_+(v<<9&4294967295|v>>>23),v=I+(_^w&(C^_))+T[7]+1735328473&4294967295,I=C+(v<<14&4294967295|v>>>18),v=w+(C^_&(I^C))+T[12]+2368359562&4294967295,w=I+(v<<20&4294967295|v>>>12),v=_+(w^I^C)+T[5]+4294588738&4294967295,_=w+(v<<4&4294967295|v>>>28),v=C+(_^w^I)+T[8]+2272392833&4294967295,C=_+(v<<11&4294967295|v>>>21),v=I+(C^_^w)+T[11]+1839030562&4294967295,I=C+(v<<16&4294967295|v>>>16),v=w+(I^C^_)+T[14]+4259657740&4294967295,w=I+(v<<23&4294967295|v>>>9),v=_+(w^I^C)+T[1]+2763975236&4294967295,_=w+(v<<4&4294967295|v>>>28),v=C+(_^w^I)+T[4]+1272893353&4294967295,C=_+(v<<11&4294967295|v>>>21),v=I+(C^_^w)+T[7]+4139469664&4294967295,I=C+(v<<16&4294967295|v>>>16),v=w+(I^C^_)+T[10]+3200236656&4294967295,w=I+(v<<23&4294967295|v>>>9),v=_+(w^I^C)+T[13]+681279174&4294967295,_=w+(v<<4&4294967295|v>>>28),v=C+(_^w^I)+T[0]+3936430074&4294967295,C=_+(v<<11&4294967295|v>>>21),v=I+(C^_^w)+T[3]+3572445317&4294967295,I=C+(v<<16&4294967295|v>>>16),v=w+(I^C^_)+T[6]+76029189&4294967295,w=I+(v<<23&4294967295|v>>>9),v=_+(w^I^C)+T[9]+3654602809&4294967295,_=w+(v<<4&4294967295|v>>>28),v=C+(_^w^I)+T[12]+3873151461&4294967295,C=_+(v<<11&4294967295|v>>>21),v=I+(C^_^w)+T[15]+530742520&4294967295,I=C+(v<<16&4294967295|v>>>16),v=w+(I^C^_)+T[2]+3299628645&4294967295,w=I+(v<<23&4294967295|v>>>9),v=_+(I^(w|~C))+T[0]+4096336452&4294967295,_=w+(v<<6&4294967295|v>>>26),v=C+(w^(_|~I))+T[7]+1126891415&4294967295,C=_+(v<<10&4294967295|v>>>22),v=I+(_^(C|~w))+T[14]+2878612391&4294967295,I=C+(v<<15&4294967295|v>>>17),v=w+(C^(I|~_))+T[5]+4237533241&4294967295,w=I+(v<<21&4294967295|v>>>11),v=_+(I^(w|~C))+T[12]+1700485571&4294967295,_=w+(v<<6&4294967295|v>>>26),v=C+(w^(_|~I))+T[3]+2399980690&4294967295,C=_+(v<<10&4294967295|v>>>22),v=I+(_^(C|~w))+T[10]+4293915773&4294967295,I=C+(v<<15&4294967295|v>>>17),v=w+(C^(I|~_))+T[1]+2240044497&4294967295,w=I+(v<<21&4294967295|v>>>11),v=_+(I^(w|~C))+T[8]+1873313359&4294967295,_=w+(v<<6&4294967295|v>>>26),v=C+(w^(_|~I))+T[15]+4264355552&4294967295,C=_+(v<<10&4294967295|v>>>22),v=I+(_^(C|~w))+T[6]+2734768916&4294967295,I=C+(v<<15&4294967295|v>>>17),v=w+(C^(I|~_))+T[13]+1309151649&4294967295,w=I+(v<<21&4294967295|v>>>11),v=_+(I^(w|~C))+T[4]+4149444226&4294967295,_=w+(v<<6&4294967295|v>>>26),v=C+(w^(_|~I))+T[11]+3174756917&4294967295,C=_+(v<<10&4294967295|v>>>22),v=I+(_^(C|~w))+T[2]+718787259&4294967295,I=C+(v<<15&4294967295|v>>>17),v=w+(C^(I|~_))+T[9]+3951481745&4294967295,A.g[0]=A.g[0]+_&4294967295,A.g[1]=A.g[1]+(I+(v<<21&4294967295|v>>>11))&4294967295,A.g[2]=A.g[2]+I&4294967295,A.g[3]=A.g[3]+C&4294967295}r.prototype.u=function(A,_){_===void 0&&(_=A.length);for(var w=_-this.blockSize,T=this.B,I=this.h,C=0;C<_;){if(I==0)for(;C<=w;)s(this,A,C),C+=this.blockSize;if(typeof A=="string"){for(;C<_;)if(T[I++]=A.charCodeAt(C++),I==this.blockSize){s(this,T),I=0;break}}else for(;C<_;)if(T[I++]=A[C++],I==this.blockSize){s(this,T),I=0;break}}this.h=I,this.o+=_},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var _=1;_<A.length-8;++_)A[_]=0;var w=8*this.o;for(_=A.length-8;_<A.length;++_)A[_]=w&255,w/=256;for(this.u(A),A=Array(16),_=w=0;4>_;++_)for(var T=0;32>T;T+=8)A[w++]=this.g[_]>>>T&255;return A};function o(A,_){var w=l;return Object.prototype.hasOwnProperty.call(w,A)?w[A]:w[A]=_(A)}function a(A,_){this.h=_;for(var w=[],T=!0,I=A.length-1;0<=I;I--){var C=A[I]|0;T&&C==_||(w[I]=C,T=!1)}this.g=w}var l={};function d(A){return-128<=A&&128>A?o(A,function(_){return new a([_|0],0>_?-1:0)}):new a([A|0],0>A?-1:0)}function m(A){if(isNaN(A)||!isFinite(A))return P;if(0>A)return B(m(-A));for(var _=[],w=1,T=0;A>=w;T++)_[T]=A/w|0,w*=4294967296;return new a(_,0)}function E(A,_){if(A.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(A.charAt(0)=="-")return B(E(A.substring(1),_));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=m(Math.pow(_,8)),T=P,I=0;I<A.length;I+=8){var C=Math.min(8,A.length-I),v=parseInt(A.substring(I,I+C),_);8>C?(C=m(Math.pow(_,C)),T=T.j(C).add(m(v))):(T=T.j(w),T=T.add(m(v)))}return T}var P=d(0),x=d(1),D=d(16777216);n=a.prototype,n.m=function(){if(j(this))return-B(this).m();for(var A=0,_=1,w=0;w<this.g.length;w++){var T=this.i(w);A+=(0<=T?T:4294967296+T)*_,_*=4294967296}return A},n.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(U(this))return"0";if(j(this))return"-"+B(this).toString(A);for(var _=m(Math.pow(A,6)),w=this,T="";;){var I=pt(w,_).g;w=Z(w,I.j(_));var C=((0<w.g.length?w.g[0]:w.h)>>>0).toString(A);if(w=I,U(w))return C+T;for(;6>C.length;)C="0"+C;T=C+T}},n.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function U(A){if(A.h!=0)return!1;for(var _=0;_<A.g.length;_++)if(A.g[_]!=0)return!1;return!0}function j(A){return A.h==-1}n.l=function(A){return A=Z(this,A),j(A)?-1:U(A)?0:1};function B(A){for(var _=A.g.length,w=[],T=0;T<_;T++)w[T]=~A.g[T];return new a(w,~A.h).add(x)}n.abs=function(){return j(this)?B(this):this},n.add=function(A){for(var _=Math.max(this.g.length,A.g.length),w=[],T=0,I=0;I<=_;I++){var C=T+(this.i(I)&65535)+(A.i(I)&65535),v=(C>>>16)+(this.i(I)>>>16)+(A.i(I)>>>16);T=v>>>16,C&=65535,v&=65535,w[I]=v<<16|C}return new a(w,w[w.length-1]&-2147483648?-1:0)};function Z(A,_){return A.add(B(_))}n.j=function(A){if(U(this)||U(A))return P;if(j(this))return j(A)?B(this).j(B(A)):B(B(this).j(A));if(j(A))return B(this.j(B(A)));if(0>this.l(D)&&0>A.l(D))return m(this.m()*A.m());for(var _=this.g.length+A.g.length,w=[],T=0;T<2*_;T++)w[T]=0;for(T=0;T<this.g.length;T++)for(var I=0;I<A.g.length;I++){var C=this.i(T)>>>16,v=this.i(T)&65535,qt=A.i(I)>>>16,fe=A.i(I)&65535;w[2*T+2*I]+=v*fe,rt(w,2*T+2*I),w[2*T+2*I+1]+=C*fe,rt(w,2*T+2*I+1),w[2*T+2*I+1]+=v*qt,rt(w,2*T+2*I+1),w[2*T+2*I+2]+=C*qt,rt(w,2*T+2*I+2)}for(T=0;T<_;T++)w[T]=w[2*T+1]<<16|w[2*T];for(T=_;T<2*_;T++)w[T]=0;return new a(w,0)};function rt(A,_){for(;(A[_]&65535)!=A[_];)A[_+1]+=A[_]>>>16,A[_]&=65535,_++}function it(A,_){this.g=A,this.h=_}function pt(A,_){if(U(_))throw Error("division by zero");if(U(A))return new it(P,P);if(j(A))return _=pt(B(A),_),new it(B(_.g),B(_.h));if(j(_))return _=pt(A,B(_)),new it(B(_.g),_.h);if(30<A.g.length){if(j(A)||j(_))throw Error("slowDivide_ only works with positive integers.");for(var w=x,T=_;0>=T.l(A);)w=Rt(w),T=Rt(T);var I=mt(w,1),C=mt(T,1);for(T=mt(T,2),w=mt(w,2);!U(T);){var v=C.add(T);0>=v.l(A)&&(I=I.add(w),C=v),T=mt(T,1),w=mt(w,1)}return _=Z(A,I.j(_)),new it(I,_)}for(I=P;0<=A.l(_);){for(w=Math.max(1,Math.floor(A.m()/_.m())),T=Math.ceil(Math.log(w)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),C=m(w),v=C.j(_);j(v)||0<v.l(A);)w-=T,C=m(w),v=C.j(_);U(C)&&(C=x),I=I.add(C),A=Z(A,v)}return new it(I,A)}n.A=function(A){return pt(this,A).h},n.and=function(A){for(var _=Math.max(this.g.length,A.g.length),w=[],T=0;T<_;T++)w[T]=this.i(T)&A.i(T);return new a(w,this.h&A.h)},n.or=function(A){for(var _=Math.max(this.g.length,A.g.length),w=[],T=0;T<_;T++)w[T]=this.i(T)|A.i(T);return new a(w,this.h|A.h)},n.xor=function(A){for(var _=Math.max(this.g.length,A.g.length),w=[],T=0;T<_;T++)w[T]=this.i(T)^A.i(T);return new a(w,this.h^A.h)};function Rt(A){for(var _=A.g.length+1,w=[],T=0;T<_;T++)w[T]=A.i(T)<<1|A.i(T-1)>>>31;return new a(w,A.h)}function mt(A,_){var w=_>>5;_%=32;for(var T=A.g.length-w,I=[],C=0;C<T;C++)I[C]=0<_?A.i(C+w)>>>_|A.i(C+w+1)<<32-_:A.i(C+w);return new a(I,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Wa=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=m,a.fromString=E,Oe=a}).apply(typeof Qo<"u"?Qo:typeof self<"u"?self:typeof window<"u"?window:{});var Cr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof Be<"u"?Be:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qa,Xa,qn,Ya,kr,Qi,Ja,Za,tu;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,u,c){return i==Array.prototype||i==Object.prototype||(i[u]=c.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Cr=="object"&&Cr];for(var u=0;u<i.length;++u){var c=i[u];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=e(this);function s(i,u){if(u)t:{var c=r;i=i.split(".");for(var p=0;p<i.length-1;p++){var R=i[p];if(!(R in c))break t;c=c[R]}i=i[i.length-1],p=c[i],u=u(p),u!=p&&u!=null&&t(c,i,{configurable:!0,writable:!0,value:u})}}function o(i,u){i instanceof String&&(i+="");var c=0,p=!1,R={next:function(){if(!p&&c<i.length){var V=c++;return{value:u(V,i[V]),done:!1}}return p=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(i){return i||function(){return o(this,function(u,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function d(i){var u=typeof i;return u=u!="object"?u:i?Array.isArray(i)?"array":u:"null",u=="array"||u=="object"&&typeof i.length=="number"}function m(i){var u=typeof i;return u=="object"&&i!=null||u=="function"}function E(i,u,c){return i.call.apply(i.bind,arguments)}function P(i,u,c){if(!i)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,p),i.apply(u,R)}}return function(){return i.apply(u,arguments)}}function x(i,u,c){return x=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:P,x.apply(null,arguments)}function D(i,u){var c=Array.prototype.slice.call(arguments,1);return function(){var p=c.slice();return p.push.apply(p,arguments),i.apply(this,p)}}function U(i,u){function c(){}c.prototype=u.prototype,i.aa=u.prototype,i.prototype=new c,i.prototype.constructor=i,i.Qb=function(p,R,V){for(var L=Array(arguments.length-2),ot=2;ot<arguments.length;ot++)L[ot-2]=arguments[ot];return u.prototype[R].apply(p,L)}}function j(i){const u=i.length;if(0<u){const c=Array(u);for(let p=0;p<u;p++)c[p]=i[p];return c}return[]}function B(i,u){for(let c=1;c<arguments.length;c++){const p=arguments[c];if(d(p)){const R=i.length||0,V=p.length||0;i.length=R+V;for(let L=0;L<V;L++)i[R+L]=p[L]}else i.push(p)}}class Z{constructor(u,c){this.i=u,this.j=c,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function rt(i){return/^[\s\xa0]*$/.test(i)}function it(){var i=l.navigator;return i&&(i=i.userAgent)?i:""}function pt(i){return pt[" "](i),i}pt[" "]=function(){};var Rt=it().indexOf("Gecko")!=-1&&!(it().toLowerCase().indexOf("webkit")!=-1&&it().indexOf("Edge")==-1)&&!(it().indexOf("Trident")!=-1||it().indexOf("MSIE")!=-1)&&it().indexOf("Edge")==-1;function mt(i,u,c){for(const p in i)u.call(c,i[p],p,i)}function A(i,u){for(const c in i)u.call(void 0,i[c],c,i)}function _(i){const u={};for(const c in i)u[c]=i[c];return u}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(i,u){let c,p;for(let R=1;R<arguments.length;R++){p=arguments[R];for(c in p)i[c]=p[c];for(let V=0;V<w.length;V++)c=w[V],Object.prototype.hasOwnProperty.call(p,c)&&(i[c]=p[c])}}function I(i){var u=1;i=i.split(":");const c=[];for(;0<u&&i.length;)c.push(i.shift()),u--;return i.length&&c.push(i.join(":")),c}function C(i){l.setTimeout(()=>{throw i},0)}function v(){var i=Tn;let u=null;return i.g&&(u=i.g,i.g=i.g.next,i.g||(i.h=null),u.next=null),u}class qt{constructor(){this.h=this.g=null}add(u,c){const p=fe.get();p.set(u,c),this.h?this.h.next=p:this.g=p,this.h=p}}var fe=new Z(()=>new fi,i=>i.reset());class fi{constructor(){this.next=this.g=this.h=null}set(u,c){this.h=u,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let Re,Se=!1,Tn=new qt,fr=()=>{const i=l.Promise.resolve(void 0);Re=()=>{i.then(gt)}};var gt=()=>{for(var i;i=v();){try{i.h.call(i.g)}catch(c){C(c)}var u=fe;u.j(i),100>u.h&&(u.h++,i.next=u.g,u.g=i)}Se=!1};function lt(){this.s=this.s,this.C=this.C}lt.prototype.s=!1,lt.prototype.ma=function(){this.s||(this.s=!0,this.N())},lt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function wt(i,u){this.type=i,this.g=this.target=u,this.defaultPrevented=!1}wt.prototype.h=function(){this.defaultPrevented=!0};var dr=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var i=!1,u=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const c=()=>{};l.addEventListener("test",c,u),l.removeEventListener("test",c,u)}catch{}return i}();function de(i,u){if(wt.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var c=this.type=i.type,p=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=u,u=i.relatedTarget){if(Rt){t:{try{pt(u.nodeName);var R=!0;break t}catch{}R=!1}R||(u=null)}}else c=="mouseover"?u=i.fromElement:c=="mouseout"&&(u=i.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:di[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&de.aa.h.call(this)}}U(de,wt);var di={2:"touch",3:"pen",4:"mouse"};de.prototype.h=function(){de.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Pe="closure_listenable_"+(1e6*Math.random()|0),In=0;function pi(i,u,c,p,R){this.listener=i,this.proxy=null,this.src=u,this.type=c,this.capture=!!p,this.ha=R,this.key=++In,this.da=this.fa=!1}function We(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Ce(i){this.src=i,this.g={},this.h=0}Ce.prototype.add=function(i,u,c,p,R){var V=i.toString();i=this.g[V],i||(i=this.g[V]=[],this.h++);var L=Ot(i,u,p,R);return-1<L?(u=i[L],c||(u.fa=!1)):(u=new pi(u,this.src,V,!!p,R),u.fa=c,i.push(u)),u};function pe(i,u){var c=u.type;if(c in i.g){var p=i.g[c],R=Array.prototype.indexOf.call(p,u,void 0),V;(V=0<=R)&&Array.prototype.splice.call(p,R,1),V&&(We(u),i.g[c].length==0&&(delete i.g[c],i.h--))}}function Ot(i,u,c,p){for(var R=0;R<i.length;++R){var V=i[R];if(!V.da&&V.listener==u&&V.capture==!!c&&V.ha==p)return R}return-1}var be="closure_lm_"+(1e6*Math.random()|0),An={};function g(i,u,c,p,R){if(p&&p.once)return y(i,u,c,p,R);if(Array.isArray(u)){for(var V=0;V<u.length;V++)g(i,u[V],c,p,R);return null}return c=yt(c),i&&i[Pe]?i.K(u,c,m(p)?!!p.capture:!!p,R):h(i,u,c,!1,p,R)}function h(i,u,c,p,R,V){if(!u)throw Error("Invalid event type");var L=m(R)?!!R.capture:!!R,ot=et(i);if(ot||(i[be]=ot=new Ce(i)),c=ot.add(u,c,p,L,V),c.proxy)return c;if(p=f(),c.proxy=p,p.src=i,p.listener=c,i.addEventListener)dr||(R=L),R===void 0&&(R=!1),i.addEventListener(u.toString(),p,R);else if(i.attachEvent)i.attachEvent(M(u.toString()),p);else if(i.addListener&&i.removeListener)i.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return c}function f(){function i(c){return u.call(i.src,i.listener,c)}const u=X;return i}function y(i,u,c,p,R){if(Array.isArray(u)){for(var V=0;V<u.length;V++)y(i,u[V],c,p,R);return null}return c=yt(c),i&&i[Pe]?i.L(u,c,m(p)?!!p.capture:!!p,R):h(i,u,c,!0,p,R)}function S(i,u,c,p,R){if(Array.isArray(u))for(var V=0;V<u.length;V++)S(i,u[V],c,p,R);else p=m(p)?!!p.capture:!!p,c=yt(c),i&&i[Pe]?(i=i.i,u=String(u).toString(),u in i.g&&(V=i.g[u],c=Ot(V,c,p,R),-1<c&&(We(V[c]),Array.prototype.splice.call(V,c,1),V.length==0&&(delete i.g[u],i.h--)))):i&&(i=et(i))&&(u=i.g[u.toString()],i=-1,u&&(i=Ot(u,c,p,R)),(c=-1<i?u[i]:null)&&k(c))}function k(i){if(typeof i!="number"&&i&&!i.da){var u=i.src;if(u&&u[Pe])pe(u.i,i);else{var c=i.type,p=i.proxy;u.removeEventListener?u.removeEventListener(c,p,i.capture):u.detachEvent?u.detachEvent(M(c),p):u.addListener&&u.removeListener&&u.removeListener(p),(c=et(u))?(pe(c,i),c.h==0&&(c.src=null,u[be]=null)):We(i)}}}function M(i){return i in An?An[i]:An[i]="on"+i}function X(i,u){if(i.da)i=!0;else{u=new de(u,this);var c=i.listener,p=i.ha||i.src;i.fa&&k(i),i=c.call(p,u)}return i}function et(i){return i=i[be],i instanceof Ce?i:null}var st="__closure_events_fn_"+(1e9*Math.random()>>>0);function yt(i){return typeof i=="function"?i:(i[st]||(i[st]=function(u){return i.handleEvent(u)}),i[st])}function W(){lt.call(this),this.i=new Ce(this),this.M=this,this.F=null}U(W,lt),W.prototype[Pe]=!0,W.prototype.removeEventListener=function(i,u,c,p){S(this,i,u,c,p)};function _t(i,u){var c,p=i.F;if(p)for(c=[];p;p=p.F)c.push(p);if(i=i.M,p=u.type||u,typeof u=="string")u=new wt(u,i);else if(u instanceof wt)u.target=u.target||i;else{var R=u;u=new wt(p,i),T(u,R)}if(R=!0,c)for(var V=c.length-1;0<=V;V--){var L=u.g=c[V];R=Ve(L,p,!0,u)&&R}if(L=u.g=i,R=Ve(L,p,!0,u)&&R,R=Ve(L,p,!1,u)&&R,c)for(V=0;V<c.length;V++)L=u.g=c[V],R=Ve(L,p,!1,u)&&R}W.prototype.N=function(){if(W.aa.N.call(this),this.i){var i=this.i,u;for(u in i.g){for(var c=i.g[u],p=0;p<c.length;p++)We(c[p]);delete i.g[u],i.h--}}this.F=null},W.prototype.K=function(i,u,c,p){return this.i.add(String(i),u,!1,c,p)},W.prototype.L=function(i,u,c,p){return this.i.add(String(i),u,!0,c,p)};function Ve(i,u,c,p){if(u=i.i.g[String(u)],!u)return!0;u=u.concat();for(var R=!0,V=0;V<u.length;++V){var L=u[V];if(L&&!L.da&&L.capture==c){var ot=L.listener,St=L.ha||L.src;L.fa&&pe(i.i,L),R=ot.call(St,p)!==!1&&R}}return R&&!p.defaultPrevented}function Rn(i,u,c){if(typeof i=="function")c&&(i=x(i,c));else if(i&&typeof i.handleEvent=="function")i=x(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(i,u||0)}function Gs(i){i.g=Rn(()=>{i.g=null,i.i&&(i.i=!1,Gs(i))},i.l);const u=i.h;i.h=null,i.m.apply(null,u)}class wl extends lt{constructor(u,c){super(),this.m=u,this.l=c,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Gs(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Sn(i){lt.call(this),this.h=i,this.g={}}U(Sn,lt);var Hs=[];function Ks(i){mt(i.g,function(u,c){this.g.hasOwnProperty(c)&&k(u)},i),i.g={}}Sn.prototype.N=function(){Sn.aa.N.call(this),Ks(this)},Sn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var mi=l.JSON.stringify,Tl=l.JSON.parse,Il=class{stringify(i){return l.JSON.stringify(i,void 0)}parse(i){return l.JSON.parse(i,void 0)}};function gi(){}gi.prototype.h=null;function Ws(i){return i.h||(i.h=i.i())}function Qs(){}var Pn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function yi(){wt.call(this,"d")}U(yi,wt);function _i(){wt.call(this,"c")}U(_i,wt);var xe={},Xs=null;function pr(){return Xs=Xs||new W}xe.La="serverreachability";function Ys(i){wt.call(this,xe.La,i)}U(Ys,wt);function Cn(i){const u=pr();_t(u,new Ys(u))}xe.STAT_EVENT="statevent";function Js(i,u){wt.call(this,xe.STAT_EVENT,i),this.stat=u}U(Js,wt);function Mt(i){const u=pr();_t(u,new Js(u,i))}xe.Ma="timingevent";function Zs(i,u){wt.call(this,xe.Ma,i),this.size=u}U(Zs,wt);function bn(i,u){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){i()},u)}function Vn(){this.g=!0}Vn.prototype.xa=function(){this.g=!1};function Al(i,u,c,p,R,V){i.info(function(){if(i.g)if(V)for(var L="",ot=V.split("&"),St=0;St<ot.length;St++){var tt=ot[St].split("=");if(1<tt.length){var Vt=tt[0];tt=tt[1];var xt=Vt.split("_");L=2<=xt.length&&xt[1]=="type"?L+(Vt+"="+tt+"&"):L+(Vt+"=redacted&")}}else L=null;else L=V;return"XMLHTTP REQ ("+p+") [attempt "+R+"]: "+u+`
`+c+`
`+L})}function Rl(i,u,c,p,R,V,L){i.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+R+"]: "+u+`
`+c+`
`+V+" "+L})}function Qe(i,u,c,p){i.info(function(){return"XMLHTTP TEXT ("+u+"): "+Pl(i,c)+(p?" "+p:"")})}function Sl(i,u){i.info(function(){return"TIMEOUT: "+u})}Vn.prototype.info=function(){};function Pl(i,u){if(!i.g)return u;if(!u)return null;try{var c=JSON.parse(u);if(c){for(i=0;i<c.length;i++)if(Array.isArray(c[i])){var p=c[i];if(!(2>p.length)){var R=p[1];if(Array.isArray(R)&&!(1>R.length)){var V=R[0];if(V!="noop"&&V!="stop"&&V!="close")for(var L=1;L<R.length;L++)R[L]=""}}}}return mi(c)}catch{return u}}var mr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},to={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ei;function gr(){}U(gr,gi),gr.prototype.g=function(){return new XMLHttpRequest},gr.prototype.i=function(){return{}},Ei=new gr;function me(i,u,c,p){this.j=i,this.i=u,this.l=c,this.R=p||1,this.U=new Sn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new eo}function eo(){this.i=null,this.g="",this.h=!1}var no={},vi={};function wi(i,u,c){i.L=1,i.v=vr(ee(u)),i.m=c,i.P=!0,ro(i,null)}function ro(i,u){i.F=Date.now(),yr(i),i.A=ee(i.v);var c=i.A,p=i.R;Array.isArray(p)||(p=[String(p)]),_o(c.i,"t",p),i.C=0,c=i.j.J,i.h=new eo,i.g=Mo(i.j,c?u:null,!i.m),0<i.O&&(i.M=new wl(x(i.Y,i,i.g),i.O)),u=i.U,c=i.g,p=i.ca;var R="readystatechange";Array.isArray(R)||(R&&(Hs[0]=R.toString()),R=Hs);for(var V=0;V<R.length;V++){var L=g(c,R[V],p||u.handleEvent,!1,u.h||u);if(!L)break;u.g[L.key]=L}u=i.H?_(i.H):{},i.m?(i.u||(i.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,u)):(i.u="GET",i.g.ea(i.A,i.u,null,u)),Cn(),Al(i.i,i.u,i.A,i.l,i.R,i.m)}me.prototype.ca=function(i){i=i.target;const u=this.M;u&&ne(i)==3?u.j():this.Y(i)},me.prototype.Y=function(i){try{if(i==this.g)t:{const xt=ne(this.g);var u=this.g.Ba();const Je=this.g.Z();if(!(3>xt)&&(xt!=3||this.g&&(this.h.h||this.g.oa()||Ro(this.g)))){this.J||xt!=4||u==7||(u==8||0>=Je?Cn(3):Cn(2)),Ti(this);var c=this.g.Z();this.X=c;e:if(io(this)){var p=Ro(this.g);i="";var R=p.length,V=ne(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){De(this),xn(this);var L="";break e}this.h.i=new l.TextDecoder}for(u=0;u<R;u++)this.h.h=!0,i+=this.h.i.decode(p[u],{stream:!(V&&u==R-1)});p.length=0,this.h.g+=i,this.C=0,L=this.h.g}else L=this.g.oa();if(this.o=c==200,Rl(this.i,this.u,this.A,this.l,this.R,xt,c),this.o){if(this.T&&!this.K){e:{if(this.g){var ot,St=this.g;if((ot=St.g?St.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!rt(ot)){var tt=ot;break e}}tt=null}if(c=tt)Qe(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ii(this,c);else{this.o=!1,this.s=3,Mt(12),De(this),xn(this);break t}}if(this.P){c=!0;let Gt;for(;!this.J&&this.C<L.length;)if(Gt=Cl(this,L),Gt==vi){xt==4&&(this.s=4,Mt(14),c=!1),Qe(this.i,this.l,null,"[Incomplete Response]");break}else if(Gt==no){this.s=4,Mt(15),Qe(this.i,this.l,L,"[Invalid Chunk]"),c=!1;break}else Qe(this.i,this.l,Gt,null),Ii(this,Gt);if(io(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),xt!=4||L.length!=0||this.h.h||(this.s=1,Mt(16),c=!1),this.o=this.o&&c,!c)Qe(this.i,this.l,L,"[Invalid Chunked Response]"),De(this),xn(this);else if(0<L.length&&!this.W){this.W=!0;var Vt=this.j;Vt.g==this&&Vt.ba&&!Vt.M&&(Vt.j.info("Great, no buffering proxy detected. Bytes received: "+L.length),bi(Vt),Vt.M=!0,Mt(11))}}else Qe(this.i,this.l,L,null),Ii(this,L);xt==4&&De(this),this.o&&!this.J&&(xt==4?Do(this.j,this):(this.o=!1,yr(this)))}else Gl(this.g),c==400&&0<L.indexOf("Unknown SID")?(this.s=3,Mt(12)):(this.s=0,Mt(13)),De(this),xn(this)}}}catch{}finally{}};function io(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function Cl(i,u){var c=i.C,p=u.indexOf(`
`,c);return p==-1?vi:(c=Number(u.substring(c,p)),isNaN(c)?no:(p+=1,p+c>u.length?vi:(u=u.slice(p,p+c),i.C=p+c,u)))}me.prototype.cancel=function(){this.J=!0,De(this)};function yr(i){i.S=Date.now()+i.I,so(i,i.I)}function so(i,u){if(i.B!=null)throw Error("WatchDog timer not null");i.B=bn(x(i.ba,i),u)}function Ti(i){i.B&&(l.clearTimeout(i.B),i.B=null)}me.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(Sl(this.i,this.A),this.L!=2&&(Cn(),Mt(17)),De(this),this.s=2,xn(this)):so(this,this.S-i)};function xn(i){i.j.G==0||i.J||Do(i.j,i)}function De(i){Ti(i);var u=i.M;u&&typeof u.ma=="function"&&u.ma(),i.M=null,Ks(i.U),i.g&&(u=i.g,i.g=null,u.abort(),u.ma())}function Ii(i,u){try{var c=i.j;if(c.G!=0&&(c.g==i||Ai(c.h,i))){if(!i.K&&Ai(c.h,i)&&c.G==3){try{var p=c.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var R=p;if(R[0]==0){t:if(!c.u){if(c.g)if(c.g.F+3e3<i.F)Rr(c),Ir(c);else break t;Ci(c),Mt(18)}}else c.za=R[1],0<c.za-c.T&&37500>R[2]&&c.F&&c.v==0&&!c.C&&(c.C=bn(x(c.Za,c),6e3));if(1>=uo(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else Fe(c,11)}else if((i.K||c.g==i)&&Rr(c),!rt(u))for(R=c.Da.g.parse(u),u=0;u<R.length;u++){let tt=R[u];if(c.T=tt[0],tt=tt[1],c.G==2)if(tt[0]=="c"){c.K=tt[1],c.ia=tt[2];const Vt=tt[3];Vt!=null&&(c.la=Vt,c.j.info("VER="+c.la));const xt=tt[4];xt!=null&&(c.Aa=xt,c.j.info("SVER="+c.Aa));const Je=tt[5];Je!=null&&typeof Je=="number"&&0<Je&&(p=1.5*Je,c.L=p,c.j.info("backChannelRequestTimeoutMs_="+p)),p=c;const Gt=i.g;if(Gt){const Pr=Gt.g?Gt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Pr){var V=p.h;V.g||Pr.indexOf("spdy")==-1&&Pr.indexOf("quic")==-1&&Pr.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Ri(V,V.h),V.h=null))}if(p.D){const Vi=Gt.g?Gt.g.getResponseHeader("X-HTTP-Session-Id"):null;Vi&&(p.ya=Vi,ut(p.I,p.D,Vi))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-i.F,c.j.info("Handshake RTT: "+c.R+"ms")),p=c;var L=i;if(p.qa=No(p,p.J?p.ia:null,p.W),L.K){lo(p.h,L);var ot=L,St=p.L;St&&(ot.I=St),ot.B&&(Ti(ot),yr(ot)),p.g=L}else Vo(p);0<c.i.length&&Ar(c)}else tt[0]!="stop"&&tt[0]!="close"||Fe(c,7);else c.G==3&&(tt[0]=="stop"||tt[0]=="close"?tt[0]=="stop"?Fe(c,7):Pi(c):tt[0]!="noop"&&c.l&&c.l.ta(tt),c.v=0)}}Cn(4)}catch{}}var bl=class{constructor(i,u){this.g=i,this.map=u}};function oo(i){this.l=i||10,l.PerformanceNavigationTiming?(i=l.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ao(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function uo(i){return i.h?1:i.g?i.g.size:0}function Ai(i,u){return i.h?i.h==u:i.g?i.g.has(u):!1}function Ri(i,u){i.g?i.g.add(u):i.h=u}function lo(i,u){i.h&&i.h==u?i.h=null:i.g&&i.g.has(u)&&i.g.delete(u)}oo.prototype.cancel=function(){if(this.i=ho(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function ho(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let u=i.i;for(const c of i.g.values())u=u.concat(c.D);return u}return j(i.i)}function Vl(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(d(i)){for(var u=[],c=i.length,p=0;p<c;p++)u.push(i[p]);return u}u=[],c=0;for(p in i)u[c++]=i[p];return u}function xl(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(d(i)||typeof i=="string"){var u=[];i=i.length;for(var c=0;c<i;c++)u.push(c);return u}u=[],c=0;for(const p in i)u[c++]=p;return u}}}function co(i,u){if(i.forEach&&typeof i.forEach=="function")i.forEach(u,void 0);else if(d(i)||typeof i=="string")Array.prototype.forEach.call(i,u,void 0);else for(var c=xl(i),p=Vl(i),R=p.length,V=0;V<R;V++)u.call(void 0,p[V],c&&c[V],i)}var fo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Dl(i,u){if(i){i=i.split("&");for(var c=0;c<i.length;c++){var p=i[c].indexOf("="),R=null;if(0<=p){var V=i[c].substring(0,p);R=i[c].substring(p+1)}else V=i[c];u(V,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function ke(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof ke){this.h=i.h,_r(this,i.j),this.o=i.o,this.g=i.g,Er(this,i.s),this.l=i.l;var u=i.i,c=new Fn;c.i=u.i,u.g&&(c.g=new Map(u.g),c.h=u.h),po(this,c),this.m=i.m}else i&&(u=String(i).match(fo))?(this.h=!1,_r(this,u[1]||"",!0),this.o=Dn(u[2]||""),this.g=Dn(u[3]||"",!0),Er(this,u[4]),this.l=Dn(u[5]||"",!0),po(this,u[6]||"",!0),this.m=Dn(u[7]||"")):(this.h=!1,this.i=new Fn(null,this.h))}ke.prototype.toString=function(){var i=[],u=this.j;u&&i.push(kn(u,mo,!0),":");var c=this.g;return(c||u=="file")&&(i.push("//"),(u=this.o)&&i.push(kn(u,mo,!0),"@"),i.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&i.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&i.push("/"),i.push(kn(c,c.charAt(0)=="/"?Nl:Fl,!0))),(c=this.i.toString())&&i.push("?",c),(c=this.m)&&i.push("#",kn(c,Ll)),i.join("")};function ee(i){return new ke(i)}function _r(i,u,c){i.j=c?Dn(u,!0):u,i.j&&(i.j=i.j.replace(/:$/,""))}function Er(i,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);i.s=u}else i.s=null}function po(i,u,c){u instanceof Fn?(i.i=u,Ol(i.i,i.h)):(c||(u=kn(u,Ml)),i.i=new Fn(u,i.h))}function ut(i,u,c){i.i.set(u,c)}function vr(i){return ut(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Dn(i,u){return i?u?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function kn(i,u,c){return typeof i=="string"?(i=encodeURI(i).replace(u,kl),c&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function kl(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var mo=/[#\/\?@]/g,Fl=/[#\?:]/g,Nl=/[#\?]/g,Ml=/[#\?@]/g,Ll=/#/g;function Fn(i,u){this.h=this.g=null,this.i=i||null,this.j=!!u}function ge(i){i.g||(i.g=new Map,i.h=0,i.i&&Dl(i.i,function(u,c){i.add(decodeURIComponent(u.replace(/\+/g," ")),c)}))}n=Fn.prototype,n.add=function(i,u){ge(this),this.i=null,i=Xe(this,i);var c=this.g.get(i);return c||this.g.set(i,c=[]),c.push(u),this.h+=1,this};function go(i,u){ge(i),u=Xe(i,u),i.g.has(u)&&(i.i=null,i.h-=i.g.get(u).length,i.g.delete(u))}function yo(i,u){return ge(i),u=Xe(i,u),i.g.has(u)}n.forEach=function(i,u){ge(this),this.g.forEach(function(c,p){c.forEach(function(R){i.call(u,R,p,this)},this)},this)},n.na=function(){ge(this);const i=Array.from(this.g.values()),u=Array.from(this.g.keys()),c=[];for(let p=0;p<u.length;p++){const R=i[p];for(let V=0;V<R.length;V++)c.push(u[p])}return c},n.V=function(i){ge(this);let u=[];if(typeof i=="string")yo(this,i)&&(u=u.concat(this.g.get(Xe(this,i))));else{i=Array.from(this.g.values());for(let c=0;c<i.length;c++)u=u.concat(i[c])}return u},n.set=function(i,u){return ge(this),this.i=null,i=Xe(this,i),yo(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[u]),this.h+=1,this},n.get=function(i,u){return i?(i=this.V(i),0<i.length?String(i[0]):u):u};function _o(i,u,c){go(i,u),0<c.length&&(i.i=null,i.g.set(Xe(i,u),j(c)),i.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],u=Array.from(this.g.keys());for(var c=0;c<u.length;c++){var p=u[c];const V=encodeURIComponent(String(p)),L=this.V(p);for(p=0;p<L.length;p++){var R=V;L[p]!==""&&(R+="="+encodeURIComponent(String(L[p]))),i.push(R)}}return this.i=i.join("&")};function Xe(i,u){return u=String(u),i.j&&(u=u.toLowerCase()),u}function Ol(i,u){u&&!i.j&&(ge(i),i.i=null,i.g.forEach(function(c,p){var R=p.toLowerCase();p!=R&&(go(this,p),_o(this,R,c))},i)),i.j=u}function Bl(i,u){const c=new Vn;if(l.Image){const p=new Image;p.onload=D(ye,c,"TestLoadImage: loaded",!0,u,p),p.onerror=D(ye,c,"TestLoadImage: error",!1,u,p),p.onabort=D(ye,c,"TestLoadImage: abort",!1,u,p),p.ontimeout=D(ye,c,"TestLoadImage: timeout",!1,u,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=i}else u(!1)}function Ul(i,u){const c=new Vn,p=new AbortController,R=setTimeout(()=>{p.abort(),ye(c,"TestPingServer: timeout",!1,u)},1e4);fetch(i,{signal:p.signal}).then(V=>{clearTimeout(R),V.ok?ye(c,"TestPingServer: ok",!0,u):ye(c,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(R),ye(c,"TestPingServer: error",!1,u)})}function ye(i,u,c,p,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),p(c)}catch{}}function ql(){this.g=new Il}function jl(i,u,c){const p=c||"";try{co(i,function(R,V){let L=R;m(R)&&(L=mi(R)),u.push(p+V+"="+encodeURIComponent(L))})}catch(R){throw u.push(p+"type="+encodeURIComponent("_badmap")),R}}function Nn(i){this.l=i.Ub||null,this.j=i.eb||!1}U(Nn,gi),Nn.prototype.g=function(){return new wr(this.l,this.j)},Nn.prototype.i=function(i){return function(){return i}}({});function wr(i,u){W.call(this),this.D=i,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}U(wr,W),n=wr.prototype,n.open=function(i,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=u,this.readyState=1,Ln(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(u.body=i),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Mn(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Ln(this)),this.g&&(this.readyState=3,Ln(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Eo(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function Eo(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var u=i.value?i.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!i.done}))&&(this.response=this.responseText+=u)}i.done?Mn(this):Ln(this),this.readyState==3&&Eo(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,Mn(this))},n.Qa=function(i){this.g&&(this.response=i,Mn(this))},n.ga=function(){this.g&&Mn(this)};function Mn(i){i.readyState=4,i.l=null,i.j=null,i.v=null,Ln(i)}n.setRequestHeader=function(i,u){this.u.append(i,u)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],u=this.h.entries();for(var c=u.next();!c.done;)c=c.value,i.push(c[0]+": "+c[1]),c=u.next();return i.join(`\r
`)};function Ln(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(wr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function vo(i){let u="";return mt(i,function(c,p){u+=p,u+=":",u+=c,u+=`\r
`}),u}function Si(i,u,c){t:{for(p in c){var p=!1;break t}p=!0}p||(c=vo(c),typeof i=="string"?c!=null&&encodeURIComponent(String(c)):ut(i,u,c))}function ct(i){W.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}U(ct,W);var $l=/^https?$/i,zl=["POST","PUT"];n=ct.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,u,c,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);u=u?u.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ei.g(),this.v=this.o?Ws(this.o):Ws(Ei),this.g.onreadystatechange=x(this.Ea,this);try{this.B=!0,this.g.open(u,String(i),!0),this.B=!1}catch(V){wo(this,V);return}if(i=c||"",c=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var R in p)c.set(R,p[R]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const V of p.keys())c.set(V,p.get(V));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(c.keys()).find(V=>V.toLowerCase()=="content-type"),R=l.FormData&&i instanceof l.FormData,!(0<=Array.prototype.indexOf.call(zl,u,void 0))||p||R||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,L]of c)this.g.setRequestHeader(V,L);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ao(this),this.u=!0,this.g.send(i),this.u=!1}catch(V){wo(this,V)}};function wo(i,u){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=u,i.m=5,To(i),Tr(i)}function To(i){i.A||(i.A=!0,_t(i,"complete"),_t(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,_t(this,"complete"),_t(this,"abort"),Tr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Tr(this,!0)),ct.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Io(this):this.bb())},n.bb=function(){Io(this)};function Io(i){if(i.h&&typeof a<"u"&&(!i.v[1]||ne(i)!=4||i.Z()!=2)){if(i.u&&ne(i)==4)Rn(i.Ea,0,i);else if(_t(i,"readystatechange"),ne(i)==4){i.h=!1;try{const L=i.Z();t:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break t;default:u=!1}var c;if(!(c=u)){var p;if(p=L===0){var R=String(i.D).match(fo)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),p=!$l.test(R?R.toLowerCase():"")}c=p}if(c)_t(i,"complete"),_t(i,"success");else{i.m=6;try{var V=2<ne(i)?i.g.statusText:""}catch{V=""}i.l=V+" ["+i.Z()+"]",To(i)}}finally{Tr(i)}}}}function Tr(i,u){if(i.g){Ao(i);const c=i.g,p=i.v[0]?()=>{}:null;i.g=null,i.v=null,u||_t(i,"ready");try{c.onreadystatechange=p}catch{}}}function Ao(i){i.I&&(l.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function ne(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<ne(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var u=this.g.responseText;return i&&u.indexOf(i)==0&&(u=u.substring(i.length)),Tl(u)}};function Ro(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Gl(i){const u={};i=(i.g&&2<=ne(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<i.length;p++){if(rt(i[p]))continue;var c=I(i[p]);const R=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const V=u[R]||[];u[R]=V,V.push(c)}A(u,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function On(i,u,c){return c&&c.internalChannelParams&&c.internalChannelParams[i]||u}function So(i){this.Aa=0,this.i=[],this.j=new Vn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=On("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=On("baseRetryDelayMs",5e3,i),this.cb=On("retryDelaySeedMs",1e4,i),this.Wa=On("forwardChannelMaxRetries",2,i),this.wa=On("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new oo(i&&i.concurrentRequestLimit),this.Da=new ql,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=So.prototype,n.la=8,n.G=1,n.connect=function(i,u,c,p){Mt(0),this.W=i,this.H=u||{},c&&p!==void 0&&(this.H.OSID=c,this.H.OAID=p),this.F=this.X,this.I=No(this,null,this.W),Ar(this)};function Pi(i){if(Po(i),i.G==3){var u=i.U++,c=ee(i.I);if(ut(c,"SID",i.K),ut(c,"RID",u),ut(c,"TYPE","terminate"),Bn(i,c),u=new me(i,i.j,u),u.L=2,u.v=vr(ee(c)),c=!1,l.navigator&&l.navigator.sendBeacon)try{c=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!c&&l.Image&&(new Image().src=u.v,c=!0),c||(u.g=Mo(u.j,null),u.g.ea(u.v)),u.F=Date.now(),yr(u)}Fo(i)}function Ir(i){i.g&&(bi(i),i.g.cancel(),i.g=null)}function Po(i){Ir(i),i.u&&(l.clearTimeout(i.u),i.u=null),Rr(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&l.clearTimeout(i.s),i.s=null)}function Ar(i){if(!ao(i.h)&&!i.s){i.s=!0;var u=i.Ga;Re||fr(),Se||(Re(),Se=!0),Tn.add(u,i),i.B=0}}function Hl(i,u){return uo(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=u.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=bn(x(i.Ga,i,u),ko(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const R=new me(this,this.j,i);let V=this.o;if(this.S&&(V?(V=_(V),T(V,this.S)):V=this.S),this.m!==null||this.O||(R.H=V,V=null),this.P)t:{for(var u=0,c=0;c<this.i.length;c++){e:{var p=this.i[c];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break e}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=c;break t}if(u===4096||c===this.i.length-1){u=c+1;break t}}u=1e3}else u=1e3;u=bo(this,R,u),c=ee(this.I),ut(c,"RID",i),ut(c,"CVER",22),this.D&&ut(c,"X-HTTP-Session-Id",this.D),Bn(this,c),V&&(this.O?u="headers="+encodeURIComponent(String(vo(V)))+"&"+u:this.m&&Si(c,this.m,V)),Ri(this.h,R),this.Ua&&ut(c,"TYPE","init"),this.P?(ut(c,"$req",u),ut(c,"SID","null"),R.T=!0,wi(R,c,null)):wi(R,c,u),this.G=2}}else this.G==3&&(i?Co(this,i):this.i.length==0||ao(this.h)||Co(this))};function Co(i,u){var c;u?c=u.l:c=i.U++;const p=ee(i.I);ut(p,"SID",i.K),ut(p,"RID",c),ut(p,"AID",i.T),Bn(i,p),i.m&&i.o&&Si(p,i.m,i.o),c=new me(i,i.j,c,i.B+1),i.m===null&&(c.H=i.o),u&&(i.i=u.D.concat(i.i)),u=bo(i,c,1e3),c.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),Ri(i.h,c),wi(c,p,u)}function Bn(i,u){i.H&&mt(i.H,function(c,p){ut(u,p,c)}),i.l&&co({},function(c,p){ut(u,p,c)})}function bo(i,u,c){c=Math.min(i.i.length,c);var p=i.l?x(i.l.Na,i.l,i):null;t:{var R=i.i;let V=-1;for(;;){const L=["count="+c];V==-1?0<c?(V=R[0].g,L.push("ofs="+V)):V=0:L.push("ofs="+V);let ot=!0;for(let St=0;St<c;St++){let tt=R[St].g;const Vt=R[St].map;if(tt-=V,0>tt)V=Math.max(0,R[St].g-100),ot=!1;else try{jl(Vt,L,"req"+tt+"_")}catch{p&&p(Vt)}}if(ot){p=L.join("&");break t}}}return i=i.i.splice(0,c),u.D=i,p}function Vo(i){if(!i.g&&!i.u){i.Y=1;var u=i.Fa;Re||fr(),Se||(Re(),Se=!0),Tn.add(u,i),i.v=0}}function Ci(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=bn(x(i.Fa,i),ko(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,xo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=bn(x(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Mt(10),Ir(this),xo(this))};function bi(i){i.A!=null&&(l.clearTimeout(i.A),i.A=null)}function xo(i){i.g=new me(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var u=ee(i.qa);ut(u,"RID","rpc"),ut(u,"SID",i.K),ut(u,"AID",i.T),ut(u,"CI",i.F?"0":"1"),!i.F&&i.ja&&ut(u,"TO",i.ja),ut(u,"TYPE","xmlhttp"),Bn(i,u),i.m&&i.o&&Si(u,i.m,i.o),i.L&&(i.g.I=i.L);var c=i.g;i=i.ia,c.L=1,c.v=vr(ee(u)),c.m=null,c.P=!0,ro(c,i)}n.Za=function(){this.C!=null&&(this.C=null,Ir(this),Ci(this),Mt(19))};function Rr(i){i.C!=null&&(l.clearTimeout(i.C),i.C=null)}function Do(i,u){var c=null;if(i.g==u){Rr(i),bi(i),i.g=null;var p=2}else if(Ai(i.h,u))c=u.D,lo(i.h,u),p=1;else return;if(i.G!=0){if(u.o)if(p==1){c=u.m?u.m.length:0,u=Date.now()-u.F;var R=i.B;p=pr(),_t(p,new Zs(p,c)),Ar(i)}else Vo(i);else if(R=u.s,R==3||R==0&&0<u.X||!(p==1&&Hl(i,u)||p==2&&Ci(i)))switch(c&&0<c.length&&(u=i.h,u.i=u.i.concat(c)),R){case 1:Fe(i,5);break;case 4:Fe(i,10);break;case 3:Fe(i,6);break;default:Fe(i,2)}}}function ko(i,u){let c=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(c*=2),c*u}function Fe(i,u){if(i.j.info("Error code "+u),u==2){var c=x(i.fb,i),p=i.Xa;const R=!p;p=new ke(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||_r(p,"https"),vr(p),R?Bl(p.toString(),c):Ul(p.toString(),c)}else Mt(2);i.G=0,i.l&&i.l.sa(u),Fo(i),Po(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),Mt(2)):(this.j.info("Failed to ping google.com"),Mt(1))};function Fo(i){if(i.G=0,i.ka=[],i.l){const u=ho(i.h);(u.length!=0||i.i.length!=0)&&(B(i.ka,u),B(i.ka,i.i),i.h.i.length=0,j(i.i),i.i.length=0),i.l.ra()}}function No(i,u,c){var p=c instanceof ke?ee(c):new ke(c);if(p.g!="")u&&(p.g=u+"."+p.g),Er(p,p.s);else{var R=l.location;p=R.protocol,u=u?u+"."+R.hostname:R.hostname,R=+R.port;var V=new ke(null);p&&_r(V,p),u&&(V.g=u),R&&Er(V,R),c&&(V.l=c),p=V}return c=i.D,u=i.ya,c&&u&&ut(p,c,u),ut(p,"VER",i.la),Bn(i,p),p}function Mo(i,u,c){if(u&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=i.Ca&&!i.pa?new ct(new Nn({eb:c})):new ct(i.pa),u.Ha(i.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Lo(){}n=Lo.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Sr(){}Sr.prototype.g=function(i,u){return new Bt(i,u)};function Bt(i,u){W.call(this),this.g=new So(u),this.l=i,this.h=u&&u.messageUrlParams||null,i=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(i?i["X-WebChannel-Content-Type"]=u.messageContentType:i={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(i?i["X-WebChannel-Client-Profile"]=u.va:i={"X-WebChannel-Client-Profile":u.va}),this.g.S=i,(i=u&&u.Sb)&&!rt(i)&&(this.g.m=i),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!rt(u)&&(this.g.D=u,i=this.h,i!==null&&u in i&&(i=this.h,u in i&&delete i[u])),this.j=new Ye(this)}U(Bt,W),Bt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Bt.prototype.close=function(){Pi(this.g)},Bt.prototype.o=function(i){var u=this.g;if(typeof i=="string"){var c={};c.__data__=i,i=c}else this.u&&(c={},c.__data__=mi(i),i=c);u.i.push(new bl(u.Ya++,i)),u.G==3&&Ar(u)},Bt.prototype.N=function(){this.g.l=null,delete this.j,Pi(this.g),delete this.g,Bt.aa.N.call(this)};function Oo(i){yi.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var u=i.__sm__;if(u){t:{for(const c in u){i=c;break t}i=void 0}(this.i=i)&&(i=this.i,u=u!==null&&i in u?u[i]:void 0),this.data=u}else this.data=i}U(Oo,yi);function Bo(){_i.call(this),this.status=1}U(Bo,_i);function Ye(i){this.g=i}U(Ye,Lo),Ye.prototype.ua=function(){_t(this.g,"a")},Ye.prototype.ta=function(i){_t(this.g,new Oo(i))},Ye.prototype.sa=function(i){_t(this.g,new Bo)},Ye.prototype.ra=function(){_t(this.g,"b")},Sr.prototype.createWebChannel=Sr.prototype.g,Bt.prototype.send=Bt.prototype.o,Bt.prototype.open=Bt.prototype.m,Bt.prototype.close=Bt.prototype.close,tu=function(){return new Sr},Za=function(){return pr()},Ja=xe,Qi={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},mr.NO_ERROR=0,mr.TIMEOUT=8,mr.HTTP_ERROR=6,kr=mr,to.COMPLETE="complete",Ya=to,Qs.EventType=Pn,Pn.OPEN="a",Pn.CLOSE="b",Pn.ERROR="c",Pn.MESSAGE="d",W.prototype.listen=W.prototype.K,qn=Qs,Xa=Nn,ct.prototype.listenOnce=ct.prototype.L,ct.prototype.getLastError=ct.prototype.Ka,ct.prototype.getLastErrorCode=ct.prototype.Ba,ct.prototype.getStatus=ct.prototype.Z,ct.prototype.getResponseJson=ct.prototype.Oa,ct.prototype.getResponseText=ct.prototype.oa,ct.prototype.send=ct.prototype.ea,ct.prototype.setWithCredentials=ct.prototype.Ha,Qa=ct}).apply(typeof Cr<"u"?Cr:typeof self<"u"?self:typeof window<"u"?window:{});const Xo="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}kt.UNAUTHENTICATED=new kt(null),kt.GOOGLE_CREDENTIALS=new kt("google-credentials-uid"),kt.FIRST_PARTY=new kt("first-party-uid"),kt.MOCK_USER=new kt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _n="10.12.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe=new ja("@firebase/firestore");function Un(){return qe.logLevel}function q(n,...t){if(qe.logLevel<=J.DEBUG){const e=t.map(ps);qe.debug(`Firestore (${_n}): ${n}`,...e)}}function le(n,...t){if(qe.logLevel<=J.ERROR){const e=t.map(ps);qe.error(`Firestore (${_n}): ${n}`,...e)}}function hn(n,...t){if(qe.logLevel<=J.WARN){const e=t.map(ps);qe.warn(`Firestore (${_n}): ${n}`,...e)}}function ps(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(n="Unexpected state"){const t=`FIRESTORE (${_n}) INTERNAL ASSERTION FAILED: `+n;throw le(t),new Error(t)}function at(n,t){n||G()}function K(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends yn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Mc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(kt.UNAUTHENTICATED))}shutdown(){}}class Lc{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Oc{constructor(t){this.t=t,this.currentUser=kt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const s=d=>this.i!==r?(r=this.i,e(d)):Promise.resolve();let o=new we;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new we,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const d=o;t.enqueueRetryable(async()=>{await d.promise,await s(this.currentUser)})},l=d=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(d=>l(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?l(d):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new we)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(at(typeof r.accessToken=="string"),new eu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return at(t===null||typeof t=="string"),new kt(t)}}class Bc{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=kt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Uc{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new Bc(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(kt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class qc{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class jc{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=o=>{o.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,q("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(at(typeof e.token=="string"),this.R=e.token,new qc(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $c(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=$c(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%t.length))}return r}}function nt(n,t){return n<t?-1:n>t?1:0}function cn(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new z(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new z(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new z(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new z(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return It.fromMillis(Date.now())}static fromDate(t){return It.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new It(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?nt(this.nanoseconds,t.nanoseconds):nt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(t){this.timestamp=t}static fromTimestamp(t){return new H(t)}static min(){return new H(new It(0,0))}static max(){return new H(new It(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(t,e,r){e===void 0?e=0:e>t.length&&G(),r===void 0?r=t.length-e:r>t.length-e&&G(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Xn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Xn?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=t.get(s),a=e.get(s);if(o<a)return-1;if(o>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class ft extends Xn{construct(t,e,r){return new ft(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new z(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new ft(e)}static emptyPath(){return new ft([])}}const zc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ct extends Xn{construct(t,e,r){return new Ct(t,e,r)}static isValidIdentifier(t){return zc.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ct.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ct(["__name__"])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new z(N.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new z(N.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const d=t[s+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new z(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=d,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(o(),s++)}if(o(),a)throw new z(N.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ct(e)}static emptyPath(){return new Ct([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(t){this.path=t}static fromPath(t){return new $(ft.fromString(t))}static fromName(t){return new $(ft.fromString(t).popFirst(5))}static empty(){return new $(ft.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ft.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return ft.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new $(new ft(t.slice()))}}function Gc(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=H.fromTimestamp(r===1e9?new It(e+1,0):new It(e,r));return new Te(s,$.empty(),t)}function Hc(n){return new Te(n.readTime,n.key,-1)}class Te{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Te(H.min(),$.empty(),-1)}static max(){return new Te(H.max(),$.empty(),-1)}}function Kc(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=$.comparator(n.documentKey,t.documentKey),e!==0?e:nt(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Qc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function or(n){if(n.code!==N.FAILED_PRECONDITION||n.message!==Wc)throw n;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new F((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof F?e:F.resolve(e)}catch(e){return F.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):F.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):F.reject(e)}static resolve(t){return new F((e,r)=>{e(t)})}static reject(t){return new F((e,r)=>{r(t)})}static waitFor(t){return new F((e,r)=>{let s=0,o=0,a=!1;t.forEach(l=>{++s,l.next(()=>{++o,a&&o===s&&e()},d=>r(d))}),a=!0,o===s&&e()})}static or(t){let e=F.resolve(!1);for(const r of t)e=e.next(s=>s?F.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new F((r,s)=>{const o=t.length,a=new Array(o);let l=0;for(let d=0;d<o;d++){const m=d;e(t[m]).next(E=>{a[m]=E,++l,l===o&&r(a)},E=>s(E))}})}static doWhile(t,e){return new F((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function Xc(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function ar(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}ms.oe=-1;function ti(n){return n==null}function jr(n){return n===0&&1/n==-1/0}function Yc(n){return typeof n=="number"&&Number.isInteger(n)&&!jr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function En(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function ru(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t,e){this.comparator=t,this.root=e||Pt.EMPTY}insert(t,e){return new ht(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Pt.BLACK,null,null))}remove(t){return new ht(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Pt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new br(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new br(this.root,t,this.comparator,!1)}getReverseIterator(){return new br(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new br(this.root,t,this.comparator,!0)}}class br{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Pt{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??Pt.RED,this.left=s??Pt.EMPTY,this.right=o??Pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new Pt(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Pt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return Pt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const t=this.left.check();if(t!==this.right.check())throw G();return t+(this.isRed()?0:1)}}Pt.EMPTY=null,Pt.RED=!0,Pt.BLACK=!1;Pt.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(t,e,r,s,o){return this}insert(t,e,r){return new Pt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(t){this.comparator=t,this.data=new ht(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Jo(this.data.getIterator())}getIteratorFrom(t){return new Jo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof bt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new bt(this.comparator);return e.data=t,e}}class Jo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(t){this.fields=t,t.sort(Ct.comparator)}static empty(){return new Kt([])}unionWith(t){let e=new bt(Ct.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Kt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return cn(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new iu("Invalid base64 string: "+o):o}}(t);return new Nt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new Nt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return nt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Nt.EMPTY_BYTE_STRING=new Nt("");const Jc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ie(n){if(at(!!n),typeof n=="string"){let t=0;const e=Jc.exec(n);if(at(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:vt(n.seconds),nanos:vt(n.nanos)}}function vt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function je(n){return typeof n=="string"?Nt.fromBase64String(n):Nt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function ys(n){const t=n.mapValue.fields.__previous_value__;return gs(t)?ys(t):t}function Yn(n){const t=Ie(n.mapValue.fields.__local_write_time__.timestampValue);return new It(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(t,e,r,s,o,a,l,d,m){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=d,this.useFetchStreams=m}}class Jn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Jn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Jn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function $e(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?gs(n)?4:tf(n)?9007199254740991:10:G()}function Zt(n,t){if(n===t)return!0;const e=$e(n);if(e!==$e(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Yn(n).isEqual(Yn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=Ie(s.timestampValue),l=Ie(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return je(s.bytesValue).isEqual(je(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return vt(s.geoPointValue.latitude)===vt(o.geoPointValue.latitude)&&vt(s.geoPointValue.longitude)===vt(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return vt(s.integerValue)===vt(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=vt(s.doubleValue),l=vt(o.doubleValue);return a===l?jr(a)===jr(l):isNaN(a)&&isNaN(l)}return!1}(n,t);case 9:return cn(n.arrayValue.values||[],t.arrayValue.values||[],Zt);case 10:return function(s,o){const a=s.mapValue.fields||{},l=o.mapValue.fields||{};if(Yo(a)!==Yo(l))return!1;for(const d in a)if(a.hasOwnProperty(d)&&(l[d]===void 0||!Zt(a[d],l[d])))return!1;return!0}(n,t);default:return G()}}function Zn(n,t){return(n.values||[]).find(e=>Zt(e,t))!==void 0}function fn(n,t){if(n===t)return 0;const e=$e(n),r=$e(t);if(e!==r)return nt(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return nt(n.booleanValue,t.booleanValue);case 2:return function(o,a){const l=vt(o.integerValue||o.doubleValue),d=vt(a.integerValue||a.doubleValue);return l<d?-1:l>d?1:l===d?0:isNaN(l)?isNaN(d)?0:-1:1}(n,t);case 3:return Zo(n.timestampValue,t.timestampValue);case 4:return Zo(Yn(n),Yn(t));case 5:return nt(n.stringValue,t.stringValue);case 6:return function(o,a){const l=je(o),d=je(a);return l.compareTo(d)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const l=o.split("/"),d=a.split("/");for(let m=0;m<l.length&&m<d.length;m++){const E=nt(l[m],d[m]);if(E!==0)return E}return nt(l.length,d.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const l=nt(vt(o.latitude),vt(a.latitude));return l!==0?l:nt(vt(o.longitude),vt(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(o,a){const l=o.values||[],d=a.values||[];for(let m=0;m<l.length&&m<d.length;++m){const E=fn(l[m],d[m]);if(E)return E}return nt(l.length,d.length)}(n.arrayValue,t.arrayValue);case 10:return function(o,a){if(o===Vr.mapValue&&a===Vr.mapValue)return 0;if(o===Vr.mapValue)return 1;if(a===Vr.mapValue)return-1;const l=o.fields||{},d=Object.keys(l),m=a.fields||{},E=Object.keys(m);d.sort(),E.sort();for(let P=0;P<d.length&&P<E.length;++P){const x=nt(d[P],E[P]);if(x!==0)return x;const D=fn(l[d[P]],m[E[P]]);if(D!==0)return D}return nt(d.length,E.length)}(n.mapValue,t.mapValue);default:throw G()}}function Zo(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return nt(n,t);const e=Ie(n),r=Ie(t),s=nt(e.seconds,r.seconds);return s!==0?s:nt(e.nanos,r.nanos)}function dn(n){return Xi(n)}function Xi(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Ie(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return je(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return $.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=Xi(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Xi(e.fields[a])}`;return s+"}"}(n.mapValue):G()}function Yi(n){return!!n&&"integerValue"in n}function _s(n){return!!n&&"arrayValue"in n}function ta(n){return!!n&&"nullValue"in n}function ea(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Fr(n){return!!n&&"mapValue"in n}function zn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return En(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=zn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=zn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function tf(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(t){this.value=t}static empty(){return new $t({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Fr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=zn(e)}setAll(t){let e=Ct.emptyPath(),r={},s=[];t.forEach((a,l)=>{if(!e.isImmediateParentOf(l)){const d=this.getFieldsMap(e);this.applyChanges(d,r,s),r={},s=[],e=l.popLast()}a?r[l.lastSegment()]=zn(a):s.push(l.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());Fr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Zt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];Fr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){En(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new $t(zn(this.value))}}function su(n){const t=[];return En(n.fields,(e,r)=>{const s=new Ct([e]);if(Fr(r)){const o=su(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new Kt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(t,e,r,s,o,a,l){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(t){return new Ft(t,0,H.min(),H.min(),H.min(),$t.empty(),0)}static newFoundDocument(t,e,r,s){return new Ft(t,1,e,H.min(),r,s,0)}static newNoDocument(t,e){return new Ft(t,2,e,H.min(),H.min(),$t.empty(),0)}static newUnknownDocument(t,e){return new Ft(t,3,e,H.min(),H.min(),$t.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=$t.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=$t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Ft&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(t,e){this.position=t,this.inclusive=e}}function na(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=$.comparator($.fromName(a.referenceValue),e.key):r=fn(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function ra(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Zt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(t,e="asc"){this.field=t,this.dir=e}}function ef(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{}class Tt extends ou{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new rf(t,e,r):e==="array-contains"?new af(t,r):e==="in"?new uf(t,r):e==="not-in"?new lf(t,r):e==="array-contains-any"?new hf(t,r):new Tt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new sf(t,r):new of(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(fn(e,this.value)):e!==null&&$e(this.value)===$e(e)&&this.matchesComparison(fn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class te extends ou{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new te(t,e)}matches(t){return au(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function au(n){return n.op==="and"}function uu(n){return nf(n)&&au(n)}function nf(n){for(const t of n.filters)if(t instanceof te)return!1;return!0}function Ji(n){if(n instanceof Tt)return n.field.canonicalString()+n.op.toString()+dn(n.value);if(uu(n))return n.filters.map(t=>Ji(t)).join(",");{const t=n.filters.map(e=>Ji(e)).join(",");return`${n.op}(${t})`}}function lu(n,t){return n instanceof Tt?function(r,s){return s instanceof Tt&&r.op===s.op&&r.field.isEqual(s.field)&&Zt(r.value,s.value)}(n,t):n instanceof te?function(r,s){return s instanceof te&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,l)=>o&&lu(a,s.filters[l]),!0):!1}(n,t):void G()}function hu(n){return n instanceof Tt?function(e){return`${e.field.canonicalString()} ${e.op} ${dn(e.value)}`}(n):n instanceof te?function(e){return e.op.toString()+" {"+e.getFilters().map(hu).join(" ,")+"}"}(n):"Filter"}class rf extends Tt{constructor(t,e,r){super(t,e,r),this.key=$.fromName(r.referenceValue)}matches(t){const e=$.comparator(t.key,this.key);return this.matchesComparison(e)}}class sf extends Tt{constructor(t,e){super(t,"in",e),this.keys=cu("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class of extends Tt{constructor(t,e){super(t,"not-in",e),this.keys=cu("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function cu(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>$.fromName(r.referenceValue))}class af extends Tt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return _s(e)&&Zn(e.arrayValue,this.value)}}class uf extends Tt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Zn(this.value.arrayValue,e)}}class lf extends Tt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Zn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Zn(this.value.arrayValue,e)}}class hf extends Tt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!_s(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Zn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(t,e=null,r=[],s=[],o=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=l,this.ue=null}}function ia(n,t=null,e=[],r=[],s=null,o=null,a=null){return new cf(n,t,e,r,s,o,a)}function Es(n){const t=K(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Ji(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),ti(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>dn(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>dn(r)).join(",")),t.ue=e}return t.ue}function vs(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!ef(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!lu(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!ra(n.startAt,t.startAt)&&ra(n.endAt,t.endAt)}function Zi(n){return $.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(t,e=null,r=[],s=[],o=null,a="F",l=null,d=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=d,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function ff(n,t,e,r,s,o,a,l){return new ei(n,t,e,r,s,o,a,l)}function ws(n){return new ei(n)}function sa(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function df(n){return n.collectionGroup!==null}function Gn(n){const t=K(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new bt(Ct.comparator);return a.filters.forEach(d=>{d.getFlattenedFilters().forEach(m=>{m.isInequality()&&(l=l.add(m.field))})}),l})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new zr(o,r))}),e.has(Ct.keyField().canonicalString())||t.ce.push(new zr(Ct.keyField(),r))}return t.ce}function Yt(n){const t=K(n);return t.le||(t.le=pf(t,Gn(n))),t.le}function pf(n,t){if(n.limitType==="F")return ia(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new zr(s.field,o)});const e=n.endAt?new $r(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new $r(n.startAt.position,n.startAt.inclusive):null;return ia(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function ts(n,t,e){return new ei(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function ni(n,t){return vs(Yt(n),Yt(t))&&n.limitType===t.limitType}function fu(n){return`${Es(Yt(n))}|lt:${n.limitType}`}function en(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>hu(s)).join(", ")}]`),ti(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>dn(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>dn(s)).join(",")),`Target(${r})`}(Yt(n))}; limitType=${n.limitType})`}function ri(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):$.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of Gn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,l,d){const m=na(a,l,d);return a.inclusive?m<=0:m<0}(r.startAt,Gn(r),s)||r.endAt&&!function(a,l,d){const m=na(a,l,d);return a.inclusive?m>=0:m>0}(r.endAt,Gn(r),s))}(n,t)}function mf(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function du(n){return(t,e)=>{let r=!1;for(const s of Gn(n)){const o=gf(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function gf(n,t,e){const r=n.field.isKeyField()?$.comparator(t.key,e.key):function(o,a,l){const d=a.data.field(o),m=l.data.field(o);return d!==null&&m!==null?fn(d,m):G()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){En(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return ru(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf=new ht($.comparator);function he(){return yf}const pu=new ht($.comparator);function jn(...n){let t=pu;for(const e of n)t=t.insert(e.key,e);return t}function mu(n){let t=pu;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function Le(){return Hn()}function gu(){return Hn()}function Hn(){return new vn(n=>n.toString(),(n,t)=>n.isEqual(t))}const _f=new ht($.comparator),Ef=new bt($.comparator);function Q(...n){let t=Ef;for(const e of n)t=t.add(e);return t}const vf=new bt(nt);function wf(){return vf}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:jr(t)?"-0":t}}function _u(n){return{integerValue:""+n}}function Tf(n,t){return Yc(t)?_u(t):yu(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(){this._=void 0}}function If(n,t,e){return n instanceof Gr?function(s,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&gs(o)&&(o=ys(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(e,t):n instanceof tr?vu(n,t):n instanceof er?wu(n,t):function(s,o){const a=Eu(s,o),l=oa(a)+oa(s.Pe);return Yi(a)&&Yi(s.Pe)?_u(l):yu(s.serializer,l)}(n,t)}function Af(n,t,e){return n instanceof tr?vu(n,t):n instanceof er?wu(n,t):e}function Eu(n,t){return n instanceof Hr?function(r){return Yi(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class Gr extends ii{}class tr extends ii{constructor(t){super(),this.elements=t}}function vu(n,t){const e=Tu(t);for(const r of n.elements)e.some(s=>Zt(s,r))||e.push(r);return{arrayValue:{values:e}}}class er extends ii{constructor(t){super(),this.elements=t}}function wu(n,t){let e=Tu(t);for(const r of n.elements)e=e.filter(s=>!Zt(s,r));return{arrayValue:{values:e}}}class Hr extends ii{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function oa(n){return vt(n.integerValue||n.doubleValue)}function Tu(n){return _s(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Rf(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof tr&&s instanceof tr||r instanceof er&&s instanceof er?cn(r.elements,s.elements,Zt):r instanceof Hr&&s instanceof Hr?Zt(r.Pe,s.Pe):r instanceof Gr&&s instanceof Gr}(n.transform,t.transform)}class Sf{constructor(t,e){this.version=t,this.transformResults=e}}class oe{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new oe}static exists(t){return new oe(void 0,t)}static updateTime(t){return new oe(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Nr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class si{}function Iu(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Ru(n.key,oe.none()):new ur(n.key,n.data,oe.none());{const e=n.data,r=$t.empty();let s=new bt(Ct.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new He(n.key,r,new Kt(s.toArray()),oe.none())}}function Pf(n,t,e){n instanceof ur?function(s,o,a){const l=s.value.clone(),d=ua(s.fieldTransforms,o,a.transformResults);l.setAll(d),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,t,e):n instanceof He?function(s,o,a){if(!Nr(s.precondition,o))return void o.convertToUnknownDocument(a.version);const l=ua(s.fieldTransforms,o,a.transformResults),d=o.data;d.setAll(Au(s)),d.setAll(l),o.convertToFoundDocument(a.version,d).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function Kn(n,t,e,r){return n instanceof ur?function(o,a,l,d){if(!Nr(o.precondition,a))return l;const m=o.value.clone(),E=la(o.fieldTransforms,d,a);return m.setAll(E),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),null}(n,t,e,r):n instanceof He?function(o,a,l,d){if(!Nr(o.precondition,a))return l;const m=la(o.fieldTransforms,d,a),E=a.data;return E.setAll(Au(o)),E.setAll(m),a.convertToFoundDocument(a.version,E).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(P=>P.field))}(n,t,e,r):function(o,a,l){return Nr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,t,e)}function Cf(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=Eu(r.transform,s||null);o!=null&&(e===null&&(e=$t.empty()),e.set(r.field,o))}return e||null}function aa(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&cn(r,s,(o,a)=>Rf(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class ur extends si{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class He extends si{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Au(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function ua(n,t,e){const r=new Map;at(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,l=t.data.field(o.field);r.set(o.field,Af(a,l,e[s]))}return r}function la(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,If(o,a,t))}return r}class Ru extends si{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class bf extends si{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Pf(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Kn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Kn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=gu();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=e.has(s.key)?null:l;const d=Iu(a,l);d!==null&&r.set(s.key,d),a.isValidDocument()||a.convertToNoDocument(H.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Q())}isEqual(t){return this.batchId===t.batchId&&cn(this.mutations,t.mutations,(e,r)=>aa(e,r))&&cn(this.baseMutations,t.baseMutations,(e,r)=>aa(e,r))}}class Ts{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){at(t.mutations.length===r.length);let s=function(){return _f}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new Ts(t,e,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Et,Y;function kf(n){switch(n){default:return G();case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0}}function Su(n){if(n===void 0)return le("GRPC error has no .code"),N.UNKNOWN;switch(n){case Et.OK:return N.OK;case Et.CANCELLED:return N.CANCELLED;case Et.UNKNOWN:return N.UNKNOWN;case Et.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case Et.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case Et.INTERNAL:return N.INTERNAL;case Et.UNAVAILABLE:return N.UNAVAILABLE;case Et.UNAUTHENTICATED:return N.UNAUTHENTICATED;case Et.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case Et.NOT_FOUND:return N.NOT_FOUND;case Et.ALREADY_EXISTS:return N.ALREADY_EXISTS;case Et.PERMISSION_DENIED:return N.PERMISSION_DENIED;case Et.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case Et.ABORTED:return N.ABORTED;case Et.OUT_OF_RANGE:return N.OUT_OF_RANGE;case Et.UNIMPLEMENTED:return N.UNIMPLEMENTED;case Et.DATA_LOSS:return N.DATA_LOSS;default:return G()}}(Y=Et||(Et={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf=new Oe([4294967295,4294967295],0);function ha(n){const t=Ff().encode(n),e=new Wa;return e.update(t),new Uint8Array(e.digest())}function ca(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Oe([e,r],0),new Oe([s,o],0)]}class Is{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new $n(`Invalid padding: ${e}`);if(r<0)throw new $n(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new $n(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new $n(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Oe.fromNumber(this.Ie)}Ee(t,e,r){let s=t.add(e.multiply(Oe.fromNumber(r)));return s.compare(Nf)===1&&(s=new Oe([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=ha(t),[r,s]=ca(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);if(!this.de(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Is(o,s,e);return r.forEach(l=>a.insert(l)),a}insert(t){if(this.Ie===0)return;const e=ha(t),[r,s]=ca(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class $n extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,lr.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new oi(H.min(),s,new ht(nt),he(),Q())}}class lr{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new lr(r,e,Q(),Q(),Q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(t,e,r,s){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=s}}class Pu{constructor(t,e){this.targetId=t,this.me=e}}class Cu{constructor(t,e,r=Nt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class fa{constructor(){this.fe=0,this.ge=pa(),this.pe=Nt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}Ce(){let t=Q(),e=Q(),r=Q();return this.ge.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:G()}}),new lr(this.pe,this.ye,t,e,r)}ve(){this.we=!1,this.ge=pa()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,at(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Mf{constructor(t){this.Le=t,this.Be=new Map,this.ke=he(),this.qe=da(),this.Qe=new ht(nt)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:G()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,s)=>{this.ze(s)&&e(s)})}He(t){const e=t.targetId,r=t.me.count,s=this.Je(e);if(s){const o=s.target;if(Zi(o))if(r===0){const a=new $(o.path);this.Ue(e,a,Ft.newNoDocument(a,H.min()))}else at(r===1);else{const a=this.Ye(e);if(a!==r){const l=this.Ze(t),d=l?this.Xe(l,t,a):1;if(d!==0){this.je(e);const m=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,m)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,l;try{a=je(r).toUint8Array()}catch(d){if(d instanceof iu)return hn("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{l=new Is(a,s,o)}catch(d){return hn(d instanceof $n?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return l.Ie===0?null:l}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.Ue(e,o,null),s++)}),s}rt(t){const e=new Map;this.Be.forEach((o,a)=>{const l=this.Je(a);if(l){if(o.current&&Zi(l.target)){const d=new $(l.target.path);this.ke.get(d)!==null||this.it(a,d)||this.Ue(a,d,Ft.newNoDocument(d,t))}o.be&&(e.set(a,o.Ce()),o.ve())}});let r=Q();this.qe.forEach((o,a)=>{let l=!0;a.forEachWhile(d=>{const m=this.Je(d);return!m||m.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(t));const s=new oi(t,e,this.Qe,this.ke,r);return this.ke=he(),this.qe=da(),this.Qe=new ht(nt),s}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).Ce();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new fa,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new bt(nt),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||q("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new fa),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function da(){return new ht($.comparator)}function pa(){return new ht($.comparator)}const Lf=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Of=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Bf=(()=>({and:"AND",or:"OR"}))();class Uf{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function es(n,t){return n.useProto3Json||ti(t)?t:{value:t}}function Kr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function bu(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function qf(n,t){return Kr(n,t.toTimestamp())}function Jt(n){return at(!!n),H.fromTimestamp(function(e){const r=Ie(e);return new It(r.seconds,r.nanos)}(n))}function As(n,t){return ns(n,t).canonicalString()}function ns(n,t){const e=function(s){return new ft(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Vu(n){const t=ft.fromString(n);return at(Nu(t)),t}function rs(n,t){return As(n.databaseId,t.path)}function Mi(n,t){const e=Vu(t);if(e.get(1)!==n.databaseId.projectId)throw new z(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new z(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new $(Du(e))}function xu(n,t){return As(n.databaseId,t)}function jf(n){const t=Vu(n);return t.length===4?ft.emptyPath():Du(t)}function is(n){return new ft(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Du(n){return at(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function ma(n,t,e){return{name:rs(n,t),fields:e.value.mapValue.fields}}function $f(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:G()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(m,E){return m.useProto3Json?(at(E===void 0||typeof E=="string"),Nt.fromBase64String(E||"")):(at(E===void 0||E instanceof ka.Buffer||E instanceof Uint8Array),Nt.fromUint8Array(E||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(m){const E=m.code===void 0?N.UNKNOWN:Su(m.code);return new z(E,m.message||"")}(a);e=new Cu(r,s,o,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Mi(n,r.document.name),o=Jt(r.document.updateTime),a=r.document.createTime?Jt(r.document.createTime):H.min(),l=new $t({mapValue:{fields:r.document.fields}}),d=Ft.newFoundDocument(s,o,a,l),m=r.targetIds||[],E=r.removedTargetIds||[];e=new Mr(m,E,d.key,d)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Mi(n,r.document),o=r.readTime?Jt(r.readTime):H.min(),a=Ft.newNoDocument(s,o),l=r.removedTargetIds||[];e=new Mr([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Mi(n,r.document),o=r.removedTargetIds||[];e=new Mr([],o,s,null)}else{if(!("filter"in t))return G();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new Df(s,o),l=r.targetId;e=new Pu(l,a)}}return e}function zf(n,t){let e;if(t instanceof ur)e={update:ma(n,t.key,t.value)};else if(t instanceof Ru)e={delete:rs(n,t.key)};else if(t instanceof He)e={update:ma(n,t.key,t.data),updateMask:Zf(t.fieldMask)};else{if(!(t instanceof bf))return G();e={verify:rs(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const l=a.transform;if(l instanceof Gr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof tr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof er)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Hr)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw G()}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:qf(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:G()}(n,t.precondition)),e}function Gf(n,t){return n&&n.length>0?(at(t!==void 0),n.map(e=>function(s,o){let a=s.updateTime?Jt(s.updateTime):Jt(o);return a.isEqual(H.min())&&(a=Jt(o)),new Sf(a,s.transformResults||[])}(e,t))):[]}function Hf(n,t){return{documents:[xu(n,t.path)]}}function Kf(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=xu(n,s);const o=function(m){if(m.length!==0)return Fu(te.create(m,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(m){if(m.length!==0)return m.map(E=>function(x){return{field:nn(x.field),direction:Xf(x.dir)}}(E))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=es(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(m){return{before:m.inclusive,values:m.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(m){return{before:!m.inclusive,values:m.position}}(t.endAt)),{_t:e,parent:s}}function Wf(n){let t=jf(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){at(r===1);const E=e.from[0];E.allDescendants?s=E.collectionId:t=t.child(E.collectionId)}let o=[];e.where&&(o=function(P){const x=ku(P);return x instanceof te&&uu(x)?x.getFilters():[x]}(e.where));let a=[];e.orderBy&&(a=function(P){return P.map(x=>function(U){return new zr(rn(U.field),function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(U.direction))}(x))}(e.orderBy));let l=null;e.limit&&(l=function(P){let x;return x=typeof P=="object"?P.value:P,ti(x)?null:x}(e.limit));let d=null;e.startAt&&(d=function(P){const x=!!P.before,D=P.values||[];return new $r(D,x)}(e.startAt));let m=null;return e.endAt&&(m=function(P){const x=!P.before,D=P.values||[];return new $r(D,x)}(e.endAt)),ff(t,s,a,o,l,"F",d,m)}function Qf(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function ku(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=rn(e.unaryFilter.field);return Tt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=rn(e.unaryFilter.field);return Tt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=rn(e.unaryFilter.field);return Tt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=rn(e.unaryFilter.field);return Tt.create(a,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(n):n.fieldFilter!==void 0?function(e){return Tt.create(rn(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return te.create(e.compositeFilter.filters.map(r=>ku(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return G()}}(e.compositeFilter.op))}(n):G()}function Xf(n){return Lf[n]}function Yf(n){return Of[n]}function Jf(n){return Bf[n]}function nn(n){return{fieldPath:n.canonicalString()}}function rn(n){return Ct.fromServerFormat(n.fieldPath)}function Fu(n){return n instanceof Tt?function(e){if(e.op==="=="){if(ea(e.value))return{unaryFilter:{field:nn(e.field),op:"IS_NAN"}};if(ta(e.value))return{unaryFilter:{field:nn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ea(e.value))return{unaryFilter:{field:nn(e.field),op:"IS_NOT_NAN"}};if(ta(e.value))return{unaryFilter:{field:nn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:nn(e.field),op:Yf(e.op),value:e.value}}}(n):n instanceof te?function(e){const r=e.getFilters().map(s=>Fu(s));return r.length===1?r[0]:{compositeFilter:{op:Jf(e.op),filters:r}}}(n):G()}function Zf(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Nu(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(t,e,r,s,o=H.min(),a=H.min(),l=Nt.EMPTY_BYTE_STRING,d=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=d}withSequenceNumber(t){return new _e(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new _e(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new _e(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new _e(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(t){this.ct=t}}function ed(n){const t=Wf({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ts(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(){this._n=new rd}addToCollectionParentIndex(t,e){return this._n.add(e),F.resolve()}getCollectionParents(t,e){return F.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return F.resolve()}deleteFieldIndex(t,e){return F.resolve()}deleteAllFieldIndexes(t){return F.resolve()}createTargetIndexes(t,e){return F.resolve()}getDocumentsMatchingTarget(t,e){return F.resolve(null)}getIndexType(t,e){return F.resolve(0)}getFieldIndexes(t,e){return F.resolve([])}getNextCollectionGroupToUpdate(t){return F.resolve(null)}getMinOffset(t,e){return F.resolve(Te.min())}getMinOffsetFromCollectionGroup(t,e){return F.resolve(Te.min())}updateCollectionGroup(t,e,r){return F.resolve()}updateIndexEntries(t,e){return F.resolve()}}class rd{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new bt(ft.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new bt(ft.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new pn(0)}static Ln(){return new pn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(){this.changes=new vn(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Ft.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?F.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&Kn(r.mutation,s,Kt.empty(),It.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,Q()).next(()=>r))}getLocalViewOfDocuments(t,e,r=Q()){const s=Le();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=jn();return o.forEach((l,d)=>{a=a.insert(l,d.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=Le();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,Q()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,l)=>{e.set(a,l)})})}computeViews(t,e,r,s){let o=he();const a=Hn(),l=function(){return Hn()}();return e.forEach((d,m)=>{const E=r.get(m.key);s.has(m.key)&&(E===void 0||E.mutation instanceof He)?o=o.insert(m.key,m):E!==void 0?(a.set(m.key,E.mutation.getFieldMask()),Kn(E.mutation,m,E.mutation.getFieldMask(),It.now())):a.set(m.key,Kt.empty())}),this.recalculateAndSaveOverlays(t,o).next(d=>(d.forEach((m,E)=>a.set(m,E)),e.forEach((m,E)=>{var P;return l.set(m,new sd(E,(P=a.get(m))!==null&&P!==void 0?P:null))}),l))}recalculateAndSaveOverlays(t,e){const r=Hn();let s=new ht((a,l)=>a-l),o=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const l of a)l.keys().forEach(d=>{const m=e.get(d);if(m===null)return;let E=r.get(d)||Kt.empty();E=l.applyToLocalView(m,E),r.set(d,E);const P=(s.get(l.batchId)||Q()).add(d);s=s.insert(l.batchId,P)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const d=l.getNext(),m=d.key,E=d.value,P=gu();E.forEach(x=>{if(!o.has(x)){const D=Iu(e.get(x),r.get(x));D!==null&&P.set(x,D),o=o.add(x)}}),a.push(this.documentOverlayCache.saveOverlays(t,m,P))}return F.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return $.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):df(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):F.resolve(Le());let l=-1,d=o;return a.next(m=>F.forEach(m,(E,P)=>(l<P.largestBatchId&&(l=P.largestBatchId),o.get(E)?F.resolve():this.remoteDocumentCache.getEntry(t,E).next(x=>{d=d.insert(E,x)}))).next(()=>this.populateOverlays(t,m,o)).next(()=>this.computeViews(t,d,m,Q())).next(E=>({batchId:l,changes:mu(E)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new $(e)).next(r=>{let s=jn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=jn();return this.indexManager.getCollectionParents(t,o).next(l=>F.forEach(l,d=>{const m=function(P,x){return new ei(x,null,P.explicitOrderBy.slice(),P.filters.slice(),P.limit,P.limitType,P.startAt,P.endAt)}(e,d.child(o));return this.getDocumentsMatchingCollectionQuery(t,m,r,s).next(E=>{E.forEach((P,x)=>{a=a.insert(P,x)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((d,m)=>{const E=m.getKey();a.get(E)===null&&(a=a.insert(E,Ft.newInvalidDocument(E)))});let l=jn();return a.forEach((d,m)=>{const E=o.get(d);E!==void 0&&Kn(E.mutation,m,Kt.empty(),It.now()),ri(e,m)&&(l=l.insert(d,m))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return F.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Jt(s.createTime)}}(e)),F.resolve()}getNamedQuery(t,e){return F.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(s){return{name:s.name,query:ed(s.bundledQuery),readTime:Jt(s.readTime)}}(e)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(){this.overlays=new ht($.comparator),this.hr=new Map}getOverlay(t,e){return F.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Le();return F.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.ht(t,e,o)}),F.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.hr.delete(r)),F.resolve()}getOverlaysForCollection(t,e,r){const s=Le(),o=e.length+1,a=new $(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const d=l.getNext().value,m=d.getKey();if(!e.isPrefixOf(m.path))break;m.path.length===o&&d.largestBatchId>r&&s.set(d.getKey(),d)}return F.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new ht((m,E)=>m-E);const a=this.overlays.getIterator();for(;a.hasNext();){const m=a.getNext().value;if(m.getKey().getCollectionGroup()===e&&m.largestBatchId>r){let E=o.get(m.largestBatchId);E===null&&(E=Le(),o=o.insert(m.largestBatchId,E)),E.set(m.getKey(),m)}}const l=Le(),d=o.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((m,E)=>l.set(m,E)),!(l.size()>=s)););return F.resolve(l)}ht(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new xf(e,r));let o=this.hr.get(e);o===void 0&&(o=Q(),this.hr.set(e,o)),this.hr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(){this.Pr=new bt(At.Ir),this.Tr=new bt(At.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const r=new At(t,e);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Ar(new At(t,e))}Rr(t,e){t.forEach(r=>this.removeReference(r,e))}Vr(t){const e=new $(new ft([])),r=new At(e,t),s=new At(e,t+1),o=[];return this.Tr.forEachInRange([r,s],a=>{this.Ar(a),o.push(a.key)}),o}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new $(new ft([])),r=new At(e,t),s=new At(e,t+1);let o=Q();return this.Tr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new At(t,0),r=this.Pr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class At{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return $.comparator(t.key,e.key)||nt(t.pr,e.pr)}static Er(t,e){return nt(t.pr,e.pr)||$.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new bt(At.Ir)}checkEmpty(t){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Vf(o,e,r,s);this.mutationQueue.push(a);for(const l of s)this.wr=this.wr.add(new At(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return F.resolve(a)}lookupMutationBatch(t,e){return F.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.br(r),o=s<0?0:s;return F.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new At(e,0),s=new At(e,Number.POSITIVE_INFINITY),o=[];return this.wr.forEachInRange([r,s],a=>{const l=this.Sr(a.pr);o.push(l)}),F.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new bt(nt);return e.forEach(s=>{const o=new At(s,0),a=new At(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([o,a],l=>{r=r.add(l.pr)})}),F.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;$.isDocumentKey(o)||(o=o.child(""));const a=new At(new $(o),0);let l=new bt(nt);return this.wr.forEachWhile(d=>{const m=d.key.path;return!!r.isPrefixOf(m)&&(m.length===s&&(l=l.add(d.pr)),!0)},a),F.resolve(this.Dr(l))}Dr(t){const e=[];return t.forEach(r=>{const s=this.Sr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){at(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return F.forEach(e.mutations,s=>{const o=new At(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,e){const r=new At(e,0),s=this.wr.firstAfterOrEqual(r);return F.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,F.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(t){this.vr=t,this.docs=function(){return new ht($.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.vr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return F.resolve(r?r.document.mutableCopy():Ft.newInvalidDocument(e))}getEntries(t,e){let r=he();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():Ft.newInvalidDocument(s))}),F.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=he();const a=e.path,l=new $(a.child("")),d=this.docs.getIteratorFrom(l);for(;d.hasNext();){const{key:m,value:{document:E}}=d.getNext();if(!a.isPrefixOf(m.path))break;m.path.length>a.length+1||Kc(Hc(E),r)<=0||(s.has(E.key)||ri(e,E))&&(o=o.insert(E.key,E.mutableCopy()))}return F.resolve(o)}getAllFromCollectionGroup(t,e,r,s){G()}Fr(t,e){return F.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new cd(this)}getSize(t){return F.resolve(this.size)}}class cd extends id{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.ar.addEntry(t,s)):this.ar.removeEntry(r)}),F.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(t){this.persistence=t,this.Mr=new vn(e=>Es(e),vs),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Rs,this.targetCount=0,this.Lr=pn.Nn()}forEachTarget(t,e){return this.Mr.forEach((r,s)=>e(s)),F.resolve()}getLastRemoteSnapshotVersion(t){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return F.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Or&&(this.Or=e),F.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new pn(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,F.resolve()}updateTargetData(t,e){return this.qn(e),F.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,F.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.Mr.forEach((a,l)=>{l.sequenceNumber<=e&&r.get(l.targetId)===null&&(this.Mr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)}),F.waitFor(o).next(()=>s)}getTargetCount(t){return F.resolve(this.targetCount)}getTargetData(t,e){const r=this.Mr.get(e)||null;return F.resolve(r)}addMatchingKeys(t,e,r){return this.Nr.dr(e,r),F.resolve()}removeMatchingKeys(t,e,r){this.Nr.Rr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),F.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),F.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Nr.gr(e);return F.resolve(r)}containsKey(t,e){return F.resolve(this.Nr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(t,e){this.Br={},this.overlays={},this.kr=new ms(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new fd(this),this.indexManager=new nd,this.remoteDocumentCache=function(s){return new hd(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new td(e),this.$r=new ad(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new ud,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Br[t.toKey()];return r||(r=new ld(e,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,r){q("MemoryPersistence","Starting transaction:",t);const s=new pd(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(o=>this.referenceDelegate.Wr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Gr(t,e){return F.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,e)))}}class pd extends Qc{constructor(t){super(),this.currentSequenceNumber=t}}class Ss{constructor(t){this.persistence=t,this.zr=new Rs,this.jr=null}static Hr(t){return new Ss(t)}get Jr(){if(this.jr)return this.jr;throw G()}addReference(t,e,r){return this.zr.addReference(r,e),this.Jr.delete(r.toString()),F.resolve()}removeReference(t,e,r){return this.zr.removeReference(r,e),this.Jr.add(r.toString()),F.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),F.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Jr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Jr,r=>{const s=$.fromPath(r);return this.Yr(t,s).next(o=>{o||e.removeEntry(s,H.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(r=>{r?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return F.or([()=>F.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.qi=r,this.Qi=s}static Ki(t,e){let r=Q(),s=Q();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Ps(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Eh()?8:Xc(yh())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.ji(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Hi(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new md;return this.Ji(t,e,a).next(l=>{if(o.result=l,this.Ui)return this.Yi(t,e,a,l.size)})}).next(()=>o.result)}Yi(t,e,r,s){return r.documentReadCount<this.Wi?(Un()<=J.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",en(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),F.resolve()):(Un()<=J.DEBUG&&q("QueryEngine","Query:",en(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(Un()<=J.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",en(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Yt(e))):F.resolve())}ji(t,e){if(sa(e))return F.resolve(null);let r=Yt(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=ts(e,null,"F"),r=Yt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=Q(...o);return this.zi.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,r).next(d=>{const m=this.Zi(e,l);return this.Xi(e,m,a,d.readTime)?this.ji(t,ts(e,null,"F")):this.es(t,m,e,d)}))})))}Hi(t,e,r,s){return sa(e)||s.isEqual(H.min())?F.resolve(null):this.zi.getDocuments(t,r).next(o=>{const a=this.Zi(e,o);return this.Xi(e,a,r,s)?F.resolve(null):(Un()<=J.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),en(e)),this.es(t,a,e,Gc(s,-1)).next(l=>l))})}Zi(t,e){let r=new bt(du(t));return e.forEach((s,o)=>{ri(t,o)&&(r=r.add(o))}),r}Xi(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Ji(t,e,r){return Un()<=J.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",en(e)),this.zi.getDocumentsMatchingQuery(t,e,Te.min(),r)}es(t,e,r,s){return this.zi.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(t,e,r,s){this.persistence=t,this.ts=e,this.serializer=s,this.ns=new ht(nt),this.rs=new vn(o=>Es(o),vs),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new od(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function _d(n,t,e,r){return new yd(n,t,e,r)}async function Mu(n,t){const e=K(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e._s(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],l=[];let d=Q();for(const m of s){a.push(m.batchId);for(const E of m.mutations)d=d.add(E.key)}for(const m of o){l.push(m.batchId);for(const E of m.mutations)d=d.add(E.key)}return e.localDocuments.getDocuments(r,d).next(m=>({us:m,removedBatchIds:a,addedBatchIds:l}))})})}function Ed(n,t){const e=K(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.os.newChangeBuffer({trackRemovals:!0});return function(l,d,m,E){const P=m.batch,x=P.keys();let D=F.resolve();return x.forEach(U=>{D=D.next(()=>E.getEntry(d,U)).next(j=>{const B=m.docVersions.get(U);at(B!==null),j.version.compareTo(B)<0&&(P.applyToRemoteDocument(j,m),j.isValidDocument()&&(j.setReadTime(m.commitVersion),E.addEntry(j)))})}),D.next(()=>l.mutationQueue.removeMutationBatch(d,P))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let d=Q();for(let m=0;m<l.mutationResults.length;++m)l.mutationResults[m].transformResults.length>0&&(d=d.add(l.batch.mutations[m].key));return d}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function Lu(n){const t=K(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function vd(n,t){const e=K(n),r=t.snapshotVersion;let s=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.os.newChangeBuffer({trackRemovals:!0});s=e.ns;const l=[];t.targetChanges.forEach((E,P)=>{const x=s.get(P);if(!x)return;l.push(e.Qr.removeMatchingKeys(o,E.removedDocuments,P).next(()=>e.Qr.addMatchingKeys(o,E.addedDocuments,P)));let D=x.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(P)!==null?D=D.withResumeToken(Nt.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):E.resumeToken.approximateByteSize()>0&&(D=D.withResumeToken(E.resumeToken,r)),s=s.insert(P,D),function(j,B,Z){return j.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-j.snapshotVersion.toMicroseconds()>=3e8?!0:Z.addedDocuments.size+Z.modifiedDocuments.size+Z.removedDocuments.size>0}(x,D,E)&&l.push(e.Qr.updateTargetData(o,D))});let d=he(),m=Q();if(t.documentUpdates.forEach(E=>{t.resolvedLimboDocuments.has(E)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,E))}),l.push(wd(o,a,t.documentUpdates).next(E=>{d=E.cs,m=E.ls})),!r.isEqual(H.min())){const E=e.Qr.getLastRemoteSnapshotVersion(o).next(P=>e.Qr.setTargetsMetadata(o,o.currentSequenceNumber,r));l.push(E)}return F.waitFor(l).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,d,m)).next(()=>d)}).then(o=>(e.ns=s,o))}function wd(n,t,e){let r=Q(),s=Q();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=he();return e.forEach((l,d)=>{const m=o.get(l);d.isFoundDocument()!==m.isFoundDocument()&&(s=s.add(l)),d.isNoDocument()&&d.version.isEqual(H.min())?(t.removeEntry(l,d.readTime),a=a.insert(l,d)):!m.isValidDocument()||d.version.compareTo(m.version)>0||d.version.compareTo(m.version)===0&&m.hasPendingWrites?(t.addEntry(d),a=a.insert(l,d)):q("LocalStore","Ignoring outdated watch update for ",l,". Current version:",m.version," Watch version:",d.version)}),{cs:a,ls:s}})}function Td(n,t){const e=K(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Id(n,t){const e=K(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Qr.getTargetData(r,t).next(o=>o?(s=o,F.resolve(s)):e.Qr.allocateTargetId(r).next(a=>(s=new _e(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.ns=e.ns.insert(r.targetId,r),e.rs.set(t,r.targetId)),r})}async function ss(n,t,e){const r=K(n),s=r.ns.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!ar(a))throw a;q("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.ns=r.ns.remove(t),r.rs.delete(s.target)}function ga(n,t,e){const r=K(n);let s=H.min(),o=Q();return r.persistence.runTransaction("Execute query","readwrite",a=>function(d,m,E){const P=K(d),x=P.rs.get(E);return x!==void 0?F.resolve(P.ns.get(x)):P.Qr.getTargetData(m,E)}(r,a,Yt(t)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(a,l.targetId).next(d=>{o=d})}).next(()=>r.ts.getDocumentsMatchingQuery(a,t,e?s:H.min(),e?o:Q())).next(l=>(Ad(r,mf(t),l),{documents:l,hs:o})))}function Ad(n,t,e){let r=n.ss.get(t)||H.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.ss.set(t,r)}class ya{constructor(){this.activeTargetIds=wf()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Rd{constructor(){this.no=new ya,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,r){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new ya,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{io(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xr=null;function Li(){return xr===null?xr=function(){return 268435456+Math.round(2147483648*Math.random())}():xr++,"0x"+xr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}Ao(t){this.Ro=t}onMessage(t){this.Vo=t}close(){this.ho()}send(t){this.lo(t)}mo(){this.Io()}fo(){this.Eo()}po(t){this.Ro(t)}yo(t){this.Vo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt="WebChannelConnection";class bd extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+e.host,this.So=`projects/${s}/databases/${o}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Do(){return!1}Co(e,r,s,o,a){const l=Li(),d=this.vo(e,r.toUriEncodedString());q("RestConnection",`Sending RPC '${e}' ${l}:`,d,s);const m={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(m,o,a),this.Mo(e,d,m,s).then(E=>(q("RestConnection",`Received RPC '${e}' ${l}: `,E),E),E=>{throw hn("RestConnection",`RPC '${e}' ${l} failed with error: `,E,"url: ",d,"request:",s),E})}xo(e,r,s,o,a,l){return this.Co(e,r,s,o,a)}Fo(e,r,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+_n}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>e[a]=o),s&&s.headers.forEach((o,a)=>e[a]=o)}vo(e,r){const s=Pd[e];return`${this.wo}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Mo(t,e,r,s){const o=Li();return new Promise((a,l)=>{const d=new Qa;d.setWithCredentials(!0),d.listenOnce(Ya.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case kr.NO_ERROR:const E=d.getResponseJson();q(Dt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(E)),a(E);break;case kr.TIMEOUT:q(Dt,`RPC '${t}' ${o} timed out`),l(new z(N.DEADLINE_EXCEEDED,"Request time out"));break;case kr.HTTP_ERROR:const P=d.getStatus();if(q(Dt,`RPC '${t}' ${o} failed with status:`,P,"response text:",d.getResponseText()),P>0){let x=d.getResponseJson();Array.isArray(x)&&(x=x[0]);const D=x==null?void 0:x.error;if(D&&D.status&&D.message){const U=function(B){const Z=B.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(Z)>=0?Z:N.UNKNOWN}(D.status);l(new z(U,D.message))}else l(new z(N.UNKNOWN,"Server responded with status "+d.getStatus()))}else l(new z(N.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{q(Dt,`RPC '${t}' ${o} completed.`)}});const m=JSON.stringify(s);q(Dt,`RPC '${t}' ${o} sending request:`,s),d.send(e,"POST",m,r,15)})}Oo(t,e,r){const s=Li(),o=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=tu(),l=Za(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(d.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(d.xmlHttpFactory=new Xa({})),this.Fo(d.initMessageHeaders,e,r),d.encodeInitMessageHeaders=!0;const E=o.join("");q(Dt,`Creating RPC '${t}' stream ${s}: ${E}`,d);const P=a.createWebChannel(E,d);let x=!1,D=!1;const U=new Cd({lo:B=>{D?q(Dt,`Not sending because RPC '${t}' stream ${s} is closed:`,B):(x||(q(Dt,`Opening RPC '${t}' stream ${s} transport.`),P.open(),x=!0),q(Dt,`RPC '${t}' stream ${s} sending:`,B),P.send(B))},ho:()=>P.close()}),j=(B,Z,rt)=>{B.listen(Z,it=>{try{rt(it)}catch(pt){setTimeout(()=>{throw pt},0)}})};return j(P,qn.EventType.OPEN,()=>{D||(q(Dt,`RPC '${t}' stream ${s} transport opened.`),U.mo())}),j(P,qn.EventType.CLOSE,()=>{D||(D=!0,q(Dt,`RPC '${t}' stream ${s} transport closed`),U.po())}),j(P,qn.EventType.ERROR,B=>{D||(D=!0,hn(Dt,`RPC '${t}' stream ${s} transport errored:`,B),U.po(new z(N.UNAVAILABLE,"The operation could not be completed")))}),j(P,qn.EventType.MESSAGE,B=>{var Z;if(!D){const rt=B.data[0];at(!!rt);const it=rt,pt=it.error||((Z=it[0])===null||Z===void 0?void 0:Z.error);if(pt){q(Dt,`RPC '${t}' stream ${s} received error:`,pt);const Rt=pt.status;let mt=function(w){const T=Et[w];if(T!==void 0)return Su(T)}(Rt),A=pt.message;mt===void 0&&(mt=N.INTERNAL,A="Unknown error status: "+Rt+" with message "+pt.message),D=!0,U.po(new z(mt,A)),P.close()}else q(Dt,`RPC '${t}' stream ${s} received:`,rt),U.yo(rt)}}),j(l,Ja.STAT_EVENT,B=>{B.stat===Qi.PROXY?q(Dt,`RPC '${t}' stream ${s} detected buffering proxy`):B.stat===Qi.NOPROXY&&q(Dt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{U.fo()},0),U}}function Oi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(n){return new Uf(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(t,e,r=1e3,s=1.5,o=6e4){this.oi=t,this.timerId=e,this.No=r,this.Lo=s,this.Bo=o,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(t){this.cancel();const e=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),s=Math.max(0,e-r);s>0&&q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),t())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(t,e,r,s,o,a,l,d){this.oi=t,this.Go=r,this.zo=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=d,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new Ou(t,e)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(t){this.s_(),this.stream.send(t)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(t,e){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,t!==4?this.Yo.reset():e&&e.code===N.RESOURCE_EXHAUSTED?(le(e.toString()),le("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):e&&e.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ao(e)}__(){}auth(){this.state=1;const t=this.a_(this.jo),e=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.jo===e&&this.u_(r,s)},r=>{t(()=>{const s=new z(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(s)})})}u_(t,e){const r=this.a_(this.jo);this.stream=this.l_(t,e),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{r(()=>this.c_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(t){return q("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}a_(t){return e=>{this.oi.enqueueAndForget(()=>this.jo===t?e():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Vd extends Bu{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}l_(t,e){return this.connection.Oo("Listen",t,e)}onMessage(t){this.Yo.reset();const e=$f(this.serializer,t),r=function(o){if(!("targetChange"in o))return H.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?H.min():a.readTime?Jt(a.readTime):H.min()}(t);return this.listener.h_(e,r)}P_(t){const e={};e.database=is(this.serializer),e.addTarget=function(o,a){let l;const d=a.target;if(l=Zi(d)?{documents:Hf(o,d)}:{query:Kf(o,d)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=bu(o,a.resumeToken);const m=es(o,a.expectedCount);m!==null&&(l.expectedCount=m)}else if(a.snapshotVersion.compareTo(H.min())>0){l.readTime=Kr(o,a.snapshotVersion.toTimestamp());const m=es(o,a.expectedCount);m!==null&&(l.expectedCount=m)}return l}(this.serializer,t);const r=Qf(this.serializer,t);r&&(e.labels=r),this.i_(e)}I_(t){const e={};e.database=is(this.serializer),e.removeTarget=t,this.i_(e)}}class xd extends Bu{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(t,e){return this.connection.Oo("Write",t,e)}onMessage(t){if(at(!!t.streamToken),this.lastStreamToken=t.streamToken,this.T_){this.Yo.reset();const e=Gf(t.writeResults,t.commitTime),r=Jt(t.commitTime);return this.listener.A_(r,e)}return at(!t.writeResults||t.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const t={};t.database=is(this.serializer),this.i_(t)}d_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>zf(this.serializer,r))};this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd extends class{}{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new z(N.FAILED_PRECONDITION,"The client has already been terminated.")}Co(t,e,r,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Co(t,ns(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(N.UNKNOWN,o.toString())})}xo(t,e,r,s,o){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.xo(t,ns(e,r),s,a,l,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new z(N.UNKNOWN,a.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class kd{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(t){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,t==="Online"&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(le(e),this.y_=!1):q("OnlineStateTracker",e)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=o,this.O_.io(a=>{r.enqueueAndForget(async()=>{Ke(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(d){const m=K(d);m.M_.add(4),await hr(m),m.N_.set("Unknown"),m.M_.delete(4),await ui(m)}(this))})}),this.N_=new kd(r,s)}}async function ui(n){if(Ke(n))for(const t of n.x_)await t(!0)}async function hr(n){for(const t of n.x_)await t(!1)}function Uu(n,t){const e=K(n);e.F_.has(t.targetId)||(e.F_.set(t.targetId,t),xs(e)?Vs(e):wn(e).Xo()&&bs(e,t))}function Cs(n,t){const e=K(n),r=wn(e);e.F_.delete(t),r.Xo()&&qu(e,t),e.F_.size===0&&(r.Xo()?r.n_():Ke(e)&&e.N_.set("Unknown"))}function bs(n,t){if(n.L_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(H.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}wn(n).P_(t)}function qu(n,t){n.L_.xe(t),wn(n).I_(t)}function Vs(n){n.L_=new Mf({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.F_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),wn(n).start(),n.N_.w_()}function xs(n){return Ke(n)&&!wn(n).Zo()&&n.F_.size>0}function Ke(n){return K(n).M_.size===0}function ju(n){n.L_=void 0}async function Nd(n){n.N_.set("Online")}async function Md(n){n.F_.forEach((t,e)=>{bs(n,t)})}async function Ld(n,t){ju(n),xs(n)?(n.N_.D_(t),Vs(n)):n.N_.set("Unknown")}async function Od(n,t,e){if(n.N_.set("Online"),t instanceof Cu&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const l of o.targetIds)s.F_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.F_.delete(l),s.L_.removeTarget(l))}(n,t)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Wr(n,r)}else if(t instanceof Mr?n.L_.Ke(t):t instanceof Pu?n.L_.He(t):n.L_.We(t),!e.isEqual(H.min()))try{const r=await Lu(n.localStore);e.compareTo(r)>=0&&await function(o,a){const l=o.L_.rt(a);return l.targetChanges.forEach((d,m)=>{if(d.resumeToken.approximateByteSize()>0){const E=o.F_.get(m);E&&o.F_.set(m,E.withResumeToken(d.resumeToken,a))}}),l.targetMismatches.forEach((d,m)=>{const E=o.F_.get(d);if(!E)return;o.F_.set(d,E.withResumeToken(Nt.EMPTY_BYTE_STRING,E.snapshotVersion)),qu(o,d);const P=new _e(E.target,d,m,E.sequenceNumber);bs(o,P)}),o.remoteSyncer.applyRemoteEvent(l)}(n,e)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await Wr(n,r)}}async function Wr(n,t,e){if(!ar(t))throw t;n.M_.add(1),await hr(n),n.N_.set("Offline"),e||(e=()=>Lu(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await e(),n.M_.delete(1),await ui(n)})}function $u(n,t){return t().catch(e=>Wr(n,e,t))}async function li(n){const t=K(n),e=Ae(t);let r=t.v_.length>0?t.v_[t.v_.length-1].batchId:-1;for(;Bd(t);)try{const s=await Td(t.localStore,r);if(s===null){t.v_.length===0&&e.n_();break}r=s.batchId,Ud(t,s)}catch(s){await Wr(t,s)}zu(t)&&Gu(t)}function Bd(n){return Ke(n)&&n.v_.length<10}function Ud(n,t){n.v_.push(t);const e=Ae(n);e.Xo()&&e.E_&&e.d_(t.mutations)}function zu(n){return Ke(n)&&!Ae(n).Zo()&&n.v_.length>0}function Gu(n){Ae(n).start()}async function qd(n){Ae(n).V_()}async function jd(n){const t=Ae(n);for(const e of n.v_)t.d_(e.mutations)}async function $d(n,t,e){const r=n.v_.shift(),s=Ts.from(r,t,e);await $u(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await li(n)}async function zd(n,t){t&&Ae(n).E_&&await async function(r,s){if(function(a){return kf(a)&&a!==N.ABORTED}(s.code)){const o=r.v_.shift();Ae(r).t_(),await $u(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await li(r)}}(n,t),zu(n)&&Gu(n)}async function Ea(n,t){const e=K(n);e.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=Ke(e);e.M_.add(3),await hr(e),r&&e.N_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.M_.delete(3),await ui(e)}async function Gd(n,t){const e=K(n);t?(e.M_.delete(2),await ui(e)):t||(e.M_.add(2),await hr(e),e.N_.set("Unknown"))}function wn(n){return n.B_||(n.B_=function(e,r,s){const o=K(e);return o.f_(),new Vd(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Po:Nd.bind(null,n),To:Md.bind(null,n),Ao:Ld.bind(null,n),h_:Od.bind(null,n)}),n.x_.push(async t=>{t?(n.B_.t_(),xs(n)?Vs(n):n.N_.set("Unknown")):(await n.B_.stop(),ju(n))})),n.B_}function Ae(n){return n.k_||(n.k_=function(e,r,s){const o=K(e);return o.f_(),new xd(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Po:()=>Promise.resolve(),To:qd.bind(null,n),Ao:zd.bind(null,n),R_:jd.bind(null,n),A_:$d.bind(null,n)}),n.x_.push(async t=>{t?(n.k_.t_(),await li(n)):(await n.k_.stop(),n.v_.length>0&&(q("RemoteStore",`Stopping write stream with ${n.v_.length} pending writes`),n.v_=[]))})),n.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new we,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,l=new Ds(t,e,a,s,o);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(N.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ks(n,t){if(le("AsyncQueue",`${t}: ${n}`),ar(n))return new z(N.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(t){this.comparator=t?(e,r)=>t(e,r)||$.comparator(e.key,r.key):(e,r)=>$.comparator(e.key,r.key),this.keyedMap=jn(),this.sortedSet=new ht(this.comparator)}static emptySet(t){return new an(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof an)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new an;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(){this.q_=new ht($.comparator)}track(t){const e=t.doc.key,r=this.q_.get(e);r?t.type!==0&&r.type===3?this.q_=this.q_.insert(e,t):t.type===3&&r.type!==1?this.q_=this.q_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.q_=this.q_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.q_=this.q_.remove(e):t.type===1&&r.type===2?this.q_=this.q_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):G():this.q_=this.q_.insert(e,t)}Q_(){const t=[];return this.q_.inorderTraversal((e,r)=>{t.push(r)}),t}}class mn{constructor(t,e,r,s,o,a,l,d,m){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=d,this.hasCachedResults=m}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach(l=>{a.push({type:0,doc:l})}),new mn(t,e,an.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ni(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(t=>t.G_())}}class Kd{constructor(){this.queries=new vn(t=>fu(t),ni),this.onlineState="Unknown",this.z_=new Set}}async function Wd(n,t){const e=K(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.W_()&&t.G_()&&(r=2):(o=new Hd,r=t.G_()?0:1);try{switch(r){case 0:o.K_=await e.onListen(s,!0);break;case 1:o.K_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const l=ks(a,`Initialization of query '${en(t.query)}' failed`);return void t.onError(l)}e.queries.set(s,o),o.U_.push(t),t.j_(e.onlineState),o.K_&&t.H_(o.K_)&&Fs(e)}async function Qd(n,t){const e=K(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.U_.indexOf(t);a>=0&&(o.U_.splice(a,1),o.U_.length===0?s=t.G_()?0:1:!o.W_()&&t.G_()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Xd(n,t){const e=K(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const l of a.U_)l.H_(s)&&(r=!0);a.K_=s}}r&&Fs(e)}function Yd(n,t,e){const r=K(n),s=r.queries.get(t);if(s)for(const o of s.U_)o.onError(e);r.queries.delete(t)}function Fs(n){n.z_.forEach(t=>{t.next()})}var os,wa;(wa=os||(os={})).J_="default",wa.Cache="cache";class Jd{constructor(t,e,r){this.query=t,this.Y_=e,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new mn(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Z_?this.ea(t)&&(this.Y_.next(t),e=!0):this.ta(t,this.onlineState)&&(this.na(t),e=!0),this.X_=t,e}onError(t){this.Y_.error(t)}j_(t){this.onlineState=t;let e=!1;return this.X_&&!this.Z_&&this.ta(this.X_,t)&&(this.na(this.X_),e=!0),e}ta(t,e){if(!t.fromCache||!this.G_())return!0;const r=e!=="Offline";return(!this.options.ra||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ea(t){if(t.docChanges.length>0)return!0;const e=this.X_&&this.X_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}na(t){t=mn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Z_=!0,this.Y_.next(t)}G_(){return this.options.source!==os.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(t){this.key=t}}class Ku{constructor(t){this.key=t}}class Zd{constructor(t,e){this.query=t,this.la=e,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=Q(),this.mutatedKeys=Q(),this.Ia=du(t),this.Ta=new an(this.Ia)}get Ea(){return this.la}da(t,e){const r=e?e.Aa:new va,s=e?e.Ta:this.Ta;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,l=!1;const d=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,m=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((E,P)=>{const x=s.get(E),D=ri(this.query,P)?P:null,U=!!x&&this.mutatedKeys.has(x.key),j=!!D&&(D.hasLocalMutations||this.mutatedKeys.has(D.key)&&D.hasCommittedMutations);let B=!1;x&&D?x.data.isEqual(D.data)?U!==j&&(r.track({type:3,doc:D}),B=!0):this.Ra(x,D)||(r.track({type:2,doc:D}),B=!0,(d&&this.Ia(D,d)>0||m&&this.Ia(D,m)<0)&&(l=!0)):!x&&D?(r.track({type:0,doc:D}),B=!0):x&&!D&&(r.track({type:1,doc:x}),B=!0,(d||m)&&(l=!0)),B&&(D?(a=a.add(D),o=j?o.add(E):o.delete(E)):(a=a.delete(E),o=o.delete(E)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const E=this.query.limitType==="F"?a.last():a.first();a=a.delete(E.key),o=o.delete(E.key),r.track({type:1,doc:E})}return{Ta:a,Aa:r,Xi:l,mutatedKeys:o}}Ra(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.Ta;this.Ta=t.Ta,this.mutatedKeys=t.mutatedKeys;const a=t.Aa.Q_();a.sort((E,P)=>function(D,U){const j=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return j(D)-j(U)}(E.type,P.type)||this.Ia(E.doc,P.doc)),this.Va(r),s=s!=null&&s;const l=e&&!s?this.ma():[],d=this.Pa.size===0&&this.current&&!s?1:0,m=d!==this.ha;return this.ha=d,a.length!==0||m?{snapshot:new mn(this.query,t.Ta,o,a,t.mutatedKeys,d===0,m,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:l}:{fa:l}}j_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new va,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(t){return!this.la.has(t)&&!!this.Ta.has(t)&&!this.Ta.get(t).hasLocalMutations}Va(t){t&&(t.addedDocuments.forEach(e=>this.la=this.la.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.la=this.la.delete(e)),this.current=t.current)}ma(){if(!this.current)return[];const t=this.Pa;this.Pa=Q(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const e=[];return t.forEach(r=>{this.Pa.has(r)||e.push(new Ku(r))}),this.Pa.forEach(r=>{t.has(r)||e.push(new Hu(r))}),e}pa(t){this.la=t.hs,this.Pa=Q();const e=this.da(t.documents);return this.applyChanges(e,!0)}ya(){return mn.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class tp{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class ep{constructor(t){this.key=t,this.wa=!1}}class np{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Sa={},this.ba=new vn(l=>fu(l),ni),this.Da=new Map,this.Ca=new Set,this.va=new ht($.comparator),this.Fa=new Map,this.Ma=new Rs,this.xa={},this.Oa=new Map,this.Na=pn.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function rp(n,t,e=!0){const r=Zu(n);let s;const o=r.ba.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.ya()):s=await Wu(r,t,e,!0),s}async function ip(n,t){const e=Zu(n);await Wu(e,t,!0,!1)}async function Wu(n,t,e,r){const s=await Id(n.localStore,Yt(t)),o=s.targetId,a=e?n.sharedClientState.addLocalQueryTarget(o):"not-current";let l;return r&&(l=await sp(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&Uu(n.remoteStore,s),l}async function sp(n,t,e,r,s){n.Ba=(P,x,D)=>async function(j,B,Z,rt){let it=B.view.da(Z);it.Xi&&(it=await ga(j.localStore,B.query,!1).then(({documents:A})=>B.view.da(A,it)));const pt=rt&&rt.targetChanges.get(B.targetId),Rt=rt&&rt.targetMismatches.get(B.targetId)!=null,mt=B.view.applyChanges(it,j.isPrimaryClient,pt,Rt);return Ia(j,B.targetId,mt.fa),mt.snapshot}(n,P,x,D);const o=await ga(n.localStore,t,!0),a=new Zd(t,o.hs),l=a.da(o.documents),d=lr.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),m=a.applyChanges(l,n.isPrimaryClient,d);Ia(n,e,m.fa);const E=new tp(t,e,a);return n.ba.set(t,E),n.Da.has(e)?n.Da.get(e).push(t):n.Da.set(e,[t]),m.snapshot}async function op(n,t,e){const r=K(n),s=r.ba.get(t),o=r.Da.get(s.targetId);if(o.length>1)return r.Da.set(s.targetId,o.filter(a=>!ni(a,t))),void r.ba.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ss(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&Cs(r.remoteStore,s.targetId),as(r,s.targetId)}).catch(or)):(as(r,s.targetId),await ss(r.localStore,s.targetId,!0))}async function ap(n,t){const e=K(n),r=e.ba.get(t),s=e.Da.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Cs(e.remoteStore,r.targetId))}async function up(n,t,e){const r=mp(n);try{const s=await function(a,l){const d=K(a),m=It.now(),E=l.reduce((D,U)=>D.add(U.key),Q());let P,x;return d.persistence.runTransaction("Locally write mutations","readwrite",D=>{let U=he(),j=Q();return d.os.getEntries(D,E).next(B=>{U=B,U.forEach((Z,rt)=>{rt.isValidDocument()||(j=j.add(Z))})}).next(()=>d.localDocuments.getOverlayedDocuments(D,U)).next(B=>{P=B;const Z=[];for(const rt of l){const it=Cf(rt,P.get(rt.key).overlayedDocument);it!=null&&Z.push(new He(rt.key,it,su(it.value.mapValue),oe.exists(!0)))}return d.mutationQueue.addMutationBatch(D,m,Z,l)}).next(B=>{x=B;const Z=B.applyToLocalDocumentSet(P,j);return d.documentOverlayCache.saveOverlays(D,B.batchId,Z)})}).then(()=>({batchId:x.batchId,changes:mu(P)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,d){let m=a.xa[a.currentUser.toKey()];m||(m=new ht(nt)),m=m.insert(l,d),a.xa[a.currentUser.toKey()]=m}(r,s.batchId,e),await cr(r,s.changes),await li(r.remoteStore)}catch(s){const o=ks(s,"Failed to persist write");e.reject(o)}}async function Qu(n,t){const e=K(n);try{const r=await vd(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Fa.get(o);a&&(at(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.wa=!0:s.modifiedDocuments.size>0?at(a.wa):s.removedDocuments.size>0&&(at(a.wa),a.wa=!1))}),await cr(e,r,t)}catch(r){await or(r)}}function Ta(n,t,e){const r=K(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.ba.forEach((o,a)=>{const l=a.view.j_(t);l.snapshot&&s.push(l.snapshot)}),function(a,l){const d=K(a);d.onlineState=l;let m=!1;d.queries.forEach((E,P)=>{for(const x of P.U_)x.j_(l)&&(m=!0)}),m&&Fs(d)}(r.eventManager,t),s.length&&r.Sa.h_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function lp(n,t,e){const r=K(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Fa.get(t),o=s&&s.key;if(o){let a=new ht($.comparator);a=a.insert(o,Ft.newNoDocument(o,H.min()));const l=Q().add(o),d=new oi(H.min(),new Map,new ht(nt),a,l);await Qu(r,d),r.va=r.va.remove(o),r.Fa.delete(t),Ns(r)}else await ss(r.localStore,t,!1).then(()=>as(r,t,e)).catch(or)}async function hp(n,t){const e=K(n),r=t.batch.batchId;try{const s=await Ed(e.localStore,t);Yu(e,r,null),Xu(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await cr(e,s)}catch(s){await or(s)}}async function cp(n,t,e){const r=K(n);try{const s=await function(a,l){const d=K(a);return d.persistence.runTransaction("Reject batch","readwrite-primary",m=>{let E;return d.mutationQueue.lookupMutationBatch(m,l).next(P=>(at(P!==null),E=P.keys(),d.mutationQueue.removeMutationBatch(m,P))).next(()=>d.mutationQueue.performConsistencyCheck(m)).next(()=>d.documentOverlayCache.removeOverlaysForBatchId(m,E,l)).next(()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,E)).next(()=>d.localDocuments.getDocuments(m,E))})}(r.localStore,t);Yu(r,t,e),Xu(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await cr(r,s)}catch(s){await or(s)}}function Xu(n,t){(n.Oa.get(t)||[]).forEach(e=>{e.resolve()}),n.Oa.delete(t)}function Yu(n,t,e){const r=K(n);let s=r.xa[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.xa[r.currentUser.toKey()]=s}}function as(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Da.get(t))n.ba.delete(r),e&&n.Sa.ka(r,e);n.Da.delete(t),n.isPrimaryClient&&n.Ma.Vr(t).forEach(r=>{n.Ma.containsKey(r)||Ju(n,r)})}function Ju(n,t){n.Ca.delete(t.path.canonicalString());const e=n.va.get(t);e!==null&&(Cs(n.remoteStore,e),n.va=n.va.remove(t),n.Fa.delete(e),Ns(n))}function Ia(n,t,e){for(const r of e)r instanceof Hu?(n.Ma.addReference(r.key,t),fp(n,r)):r instanceof Ku?(q("SyncEngine","Document no longer in limbo: "+r.key),n.Ma.removeReference(r.key,t),n.Ma.containsKey(r.key)||Ju(n,r.key)):G()}function fp(n,t){const e=t.key,r=e.path.canonicalString();n.va.get(e)||n.Ca.has(r)||(q("SyncEngine","New document in limbo: "+e),n.Ca.add(r),Ns(n))}function Ns(n){for(;n.Ca.size>0&&n.va.size<n.maxConcurrentLimboResolutions;){const t=n.Ca.values().next().value;n.Ca.delete(t);const e=new $(ft.fromString(t)),r=n.Na.next();n.Fa.set(r,new ep(e)),n.va=n.va.insert(e,r),Uu(n.remoteStore,new _e(Yt(ws(e.path)),r,"TargetPurposeLimboResolution",ms.oe))}}async function cr(n,t,e){const r=K(n),s=[],o=[],a=[];r.ba.isEmpty()||(r.ba.forEach((l,d)=>{a.push(r.Ba(d,t,e).then(m=>{var E;if((m||e)&&r.isPrimaryClient){const P=m?!m.fromCache:(E=e==null?void 0:e.targetChanges.get(d.targetId))===null||E===void 0?void 0:E.current;r.sharedClientState.updateQueryState(d.targetId,P?"current":"not-current")}if(m){s.push(m);const P=Ps.Ki(d.targetId,m);o.push(P)}}))}),await Promise.all(a),r.Sa.h_(s),await async function(d,m){const E=K(d);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",P=>F.forEach(m,x=>F.forEach(x.qi,D=>E.persistence.referenceDelegate.addReference(P,x.targetId,D)).next(()=>F.forEach(x.Qi,D=>E.persistence.referenceDelegate.removeReference(P,x.targetId,D)))))}catch(P){if(!ar(P))throw P;q("LocalStore","Failed to update sequence numbers: "+P)}for(const P of m){const x=P.targetId;if(!P.fromCache){const D=E.ns.get(x),U=D.snapshotVersion,j=D.withLastLimboFreeSnapshotVersion(U);E.ns=E.ns.insert(x,j)}}}(r.localStore,o))}async function dp(n,t){const e=K(n);if(!e.currentUser.isEqual(t)){q("SyncEngine","User change. New user:",t.toKey());const r=await Mu(e.localStore,t);e.currentUser=t,function(o,a){o.Oa.forEach(l=>{l.forEach(d=>{d.reject(new z(N.CANCELLED,a))})}),o.Oa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await cr(e,r.us)}}function pp(n,t){const e=K(n),r=e.Fa.get(t);if(r&&r.wa)return Q().add(r.key);{let s=Q();const o=e.Da.get(t);if(!o)return s;for(const a of o){const l=e.ba.get(a);s=s.unionWith(l.view.Ea)}return s}}function Zu(n){const t=K(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Qu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=pp.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=lp.bind(null,t),t.Sa.h_=Xd.bind(null,t.eventManager),t.Sa.ka=Yd.bind(null,t.eventManager),t}function mp(n){const t=K(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=hp.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=cp.bind(null,t),t}class Aa{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=ai(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return _d(this.persistence,new gd,t.initialUser,this.serializer)}createPersistence(t){return new dd(Ss.Hr,this.serializer)}createSharedClientState(t){return new Rd}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class gp{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ta(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=dp.bind(null,this.syncEngine),await Gd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Kd}()}createDatastore(t){const e=ai(t.databaseInfo.databaseId),r=function(o){return new bd(o)}(t.databaseInfo);return function(o,a,l,d){return new Dd(o,a,l,d)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,l){return new Fd(r,s,o,a,l)}(this.localStore,this.datastore,t.asyncQueue,e=>Ta(this.syncEngine,e,0),function(){return _a.D()?new _a:new Sd}())}createSyncEngine(t,e){return function(s,o,a,l,d,m,E){const P=new np(s,o,a,l,d,m);return E&&(P.La=!0),P}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(r){const s=K(r);q("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await hr(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ka(this.observer.next,t)}error(t){this.observer.error?this.Ka(this.observer.error,t):le("Uncaught Error in snapshot listener:",t.toString())}$a(){this.muted=!0}Ka(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(t,e,r,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=kt.UNAUTHENTICATED,this.clientId=nu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{q("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new z(N.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new we;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=ks(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Bi(n,t){n.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Mu(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Ra(n,t){n.asyncQueue.verifyOperationInProgress();const e=await vp(n);q("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Ea(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Ea(t.remoteStore,s)),n._onlineComponents=t}function Ep(n){return n.name==="FirebaseError"?n.code===N.FAILED_PRECONDITION||n.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function vp(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await Bi(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!Ep(e))throw e;hn("Error using user provided cache. Falling back to memory cache: "+e),await Bi(n,new Aa)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await Bi(n,new Aa);return n._offlineComponents}async function tl(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await Ra(n,n._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await Ra(n,new gp))),n._onlineComponents}function wp(n){return tl(n).then(t=>t.syncEngine)}async function Tp(n){const t=await tl(n),e=t.eventManager;return e.onListen=rp.bind(null,t.syncEngine),e.onUnlisten=op.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=ip.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=ap.bind(null,t.syncEngine),e}function Ip(n,t,e={}){const r=new we;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,l,d,m){const E=new yp({next:x=>{a.enqueueAndForget(()=>Qd(o,P));const D=x.docs.has(l);!D&&x.fromCache?m.reject(new z(N.UNAVAILABLE,"Failed to get document because the client is offline.")):D&&x.fromCache&&d&&d.source==="server"?m.reject(new z(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):m.resolve(x)},error:x=>m.reject(x)}),P=new Jd(ws(l.path),E,{includeMetadataChanges:!0,ra:!0});return Wd(o,P)}(await Tp(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(n,t,e){if(!e)throw new z(N.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Rp(n,t,e,r){if(t===!0&&r===!0)throw new z(N.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Pa(n){if(!$.isDocumentKey(n))throw new z(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ms(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":G()}function nr(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new z(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ms(n);throw new z(N.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new z(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new z(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Rp("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=el((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new z(N.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new z(N.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new z(N.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ls{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ca({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new z(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new z(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ca(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Mc;switch(r.type){case"firstParty":return new Uc(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Sa.get(e);r&&(q("ComponentProvider","Removing Datastore"),Sa.delete(e),r.terminate())}(this),Promise.resolve()}}function Sp(n,t,e,r={}){var s;const o=(n=nr(n,Ls))._getSettings(),a=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&hn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let l,d;if(typeof r.mockUserToken=="string")l=r.mockUserToken,d=kt.MOCK_USER;else{l=gh(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new z(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new kt(m)}n._authCredentials=new Lc(new eu(l,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Os(this.firestore,t,this._query)}}class zt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new zt(this.firestore,t,this._key)}}class rr extends Os{constructor(t,e,r){super(t,e,ws(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new zt(this.firestore,null,new $(t))}withConverter(t){return new rr(this.firestore,t,this._path)}}function Pp(n,t,...e){if(n=Br(n),arguments.length===1&&(t=nu.newId()),Ap("doc","path",t),n instanceof Ls){const r=ft.fromString(t,...e);return Pa(r),new zt(n,null,new $(r))}{if(!(n instanceof zt||n instanceof rr))throw new z(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ft.fromString(t,...e));return Pa(r),new zt(n.firestore,n instanceof rr?n.converter:null,new $(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new Ou(this,"async_queue_retry"),this.hu=()=>{const e=Oi();e&&q("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Yo.Wo()};const t=Oi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const e=Oi();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const e=new we;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(t){if(!ar(t))throw t;q("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(t){const e=this.iu.then(()=>(this.uu=!0,t().catch(r=>{this.au=r,this.uu=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw le("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.uu=!1,r))));return this.iu=e,e}enqueueAfterDelay(t,e,r){this.Pu(),this.lu.indexOf(t)>-1&&(e=0);const s=Ds.createAndSchedule(this,t,e,r,o=>this.Eu(o));return this._u.push(s),s}Pu(){this.au&&G()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const e of this._u)if(e.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this._u)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const e=this._u.indexOf(t);this._u.splice(e,1)}}class Bs extends Ls{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=function(){return new Cp}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||rl(this),this._firestoreClient.terminate()}}function bp(n,t){const e=typeof n=="object"?n:Ac(),r=typeof n=="string"?n:t||"(default)",s=vc(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=ph("firestore");o&&Sp(s,...o)}return s}function nl(n){return n._firestoreClient||rl(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function rl(n){var t,e,r;const s=n._freezeSettings(),o=function(l,d,m,E){return new Zc(l,d,m,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,el(E.experimentalLongPollingOptions),E.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new _p(n._authCredentials,n._appCheckCredentials,n._queue,o),!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new gn(Nt.fromBase64String(t))}catch(e){throw new z(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new gn(Nt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new z(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ct(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new z(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new z(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return nt(this._lat,t._lat)||nt(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp=/^__.*__$/;class xp{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new He(t,this.data,this.fieldMask,e,this.fieldTransforms):new ur(t,this.data,e,this.fieldTransforms)}}function sl(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class js{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.mu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(t){return new js(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:r,yu:!1});return s.wu(t),s}Su(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:r,yu:!1});return s.mu(),s}bu(t){return this.gu({path:void 0,yu:!0})}Du(t){return Qr(t,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}mu(){if(this.path)for(let t=0;t<this.path.length;t++)this.wu(this.path.get(t))}wu(t){if(t.length===0)throw this.Du("Document fields must not be empty");if(sl(this.fu)&&Vp.test(t))throw this.Du('Document fields cannot begin and end with "__"')}}class Dp{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||ai(t)}Fu(t,e,r,s=!1){return new js({fu:t,methodName:e,vu:r,path:Ct.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function kp(n){const t=n._freezeSettings(),e=ai(n._databaseId);return new Dp(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Fp(n,t,e,r,s,o={}){const a=n.Fu(o.merge||o.mergeFields?2:0,t,e,s);ll("Data must be an object, but it was:",a,r);const l=al(r,a);let d,m;if(o.merge)d=new Kt(a.fieldMask),m=a.fieldTransforms;else if(o.mergeFields){const E=[];for(const P of o.mergeFields){const x=Np(t,P,e);if(!a.contains(x))throw new z(N.INVALID_ARGUMENT,`Field '${x}' is specified in your field mask but missing from your input data.`);Lp(E,x)||E.push(x)}d=new Kt(E),m=a.fieldTransforms.filter(P=>d.covers(P.field))}else d=null,m=a.fieldTransforms;return new xp(new $t(l),d,m)}function ol(n,t){if(ul(n=Br(n)))return ll("Unsupported field value:",t,n),al(n,t);if(n instanceof il)return function(r,s){if(!sl(s.fu))throw s.Du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.yu&&t.fu!==4)throw t.Du("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const l of r){let d=ol(l,s.bu(a));d==null&&(d={nullValue:"NULL_VALUE"}),o.push(d),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=Br(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Tf(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=It.fromDate(r);return{timestampValue:Kr(s.serializer,o)}}if(r instanceof It){const o=new It(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Kr(s.serializer,o)}}if(r instanceof qs)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof gn)return{bytesValue:bu(s.serializer,r._byteString)};if(r instanceof zt){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Du(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:As(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Du(`Unsupported field value: ${Ms(r)}`)}(n,t)}function al(n,t){const e={};return ru(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):En(n,(r,s)=>{const o=ol(s,t.pu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function ul(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof It||n instanceof qs||n instanceof gn||n instanceof zt||n instanceof il)}function ll(n,t,e){if(!ul(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=Ms(e);throw r==="an object"?t.Du(n+" a custom object"):t.Du(n+" "+r)}}function Np(n,t,e){if((t=Br(t))instanceof Us)return t._internalPath;if(typeof t=="string")return hl(n,t);throw Qr("Field path arguments must be of type string or ",n,!1,void 0,e)}const Mp=new RegExp("[~\\*/\\[\\]]");function hl(n,t,e){if(t.search(Mp)>=0)throw Qr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Us(...t.split("."))._internalPath}catch{throw Qr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Qr(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let d="";return(o||a)&&(d+=" (found",o&&(d+=` in field ${r}`),a&&(d+=` in document ${s}`),d+=")"),new z(N.INVALID_ARGUMENT,l+n+d)}function Lp(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new zt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Op(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(fl("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Op extends cl{data(){return super.data()}}function fl(n,t){return typeof t=="string"?hl(n,t):t instanceof Us?t._internalPath:t._delegate._internalPath}class Bp{convertValue(t,e="none"){switch($e(t)){case 0:return null;case 1:return t.booleanValue;case 2:return vt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(je(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw G()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return En(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertGeoPoint(t){return new qs(vt(t.latitude),vt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=ys(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Yn(t));default:return null}}convertTimestamp(t){const e=Ie(t);return new It(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=ft.fromString(t);at(Nu(r));const s=new Jn(r.get(1),r.get(3)),o=new $(r.popFirst(5));return s.isEqual(e)||le(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class dl extends cl{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new jp(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(fl("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class jp extends dl{data(t={}){return super.data(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(n){n=nr(n,zt);const t=nr(n.firestore,Bs);return Ip(nl(t),n._key).then(e=>Hp(t,n,e))}class zp extends Bp{constructor(t){super(),this.firestore=t}convertBytes(t){return new gn(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new zt(this.firestore,null,e)}}function ba(n,t,e){n=nr(n,zt);const r=nr(n.firestore,Bs),s=Up(n.converter,t,e);return Gp(r,[Fp(kp(r),"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,oe.none())])}function Gp(n,t){return function(r,s){const o=new we;return r.asyncQueue.enqueueAndForget(async()=>up(await wp(r),s,o)),o.promise}(nl(n),t)}function Hp(n,t,e){const r=e.docs.get(t._key),s=new zp(n);return new dl(n,s,t._key,r,new qp(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(s){_n=s})(Ic),qr(new Wn("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new Bs(new Oc(r.getProvider("auth-internal")),new jc(r.getProvider("app-check-internal")),function(m,E){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new z(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Jn(m.options.projectId,E)}(a,s),a);return o=Object.assign({useFetchStreams:e},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),on(Xo,"4.6.4",t),on(Xo,"4.6.4","esm2017")})();require("dotenv").config();const Kp={apiKey:{}.APP_GOOGLE_API_KEY,authDomain:"footballpongdb.firebaseapp.com",projectId:"footballpongdb",storageBucket:"footballpongdb.appspot.com",messagingSenderId:"618518676972",appId:"1:618518676972:web:54a91d8629bc325ca2ecc9",measurementId:"G-3QJWQ45W1Y"},Wp=Ga(Kp),Qp=bp(Wp);async function Xp(n){console.log("Logged in as "+n.first_name+" "+n.last_name+" ("+n.id+(n.username?", @"+n.username:"")+")");try{const t=Pp(Qp,"players",n.id.toString());(await $p(t)).exists()?(await ba(t,{firstName:n.first_name,lastName:n.last_name,username:n.username||null,photoUrl:n.photo_url||null,authDate:n.auth_date,lastLogin:new Date().toISOString()},{merge:!0}),console.log("Player document updated")):(await ba(t,{firstName:n.first_name,lastName:n.last_name,username:n.username||null,photoUrl:n.photo_url||null,authDate:n.auth_date,createdAt:new Date().toISOString(),lastLogin:new Date().toISOString(),goalBits:0}),console.log("New player document created")),alert("Login successful!")}catch(t){console.error("Error saving player data:",t),alert("There was an error logging in. Please try again.")}}window.onTelegramAuth=Xp;const Xr=[],Yp=37,Jp=39,ir=[{ballSpeed:5,paddleSpeed:6,aiDifficulty:.5},{ballSpeed:5.5,paddleSpeed:6,aiDifficulty:.55},{ballSpeed:5.6,paddleSpeed:6,aiDifficulty:.6},{ballSpeed:5.7,paddleSpeed:6,aiDifficulty:.65},{ballSpeed:6.1,paddleSpeed:6,aiDifficulty:.7},{ballSpeed:6.2,paddleSpeed:6.5,aiDifficulty:.75},{ballSpeed:6.4,paddleSpeed:6.5,aiDifficulty:.8},{ballSpeed:6.5,paddleSpeed:7,aiDifficulty:.85},{ballSpeed:6.9,paddleSpeed:7,aiDifficulty:.9},{ballSpeed:7,paddleSpeed:7,aiDifficulty:.95}];let hi=0,us=0,$s=!1;const O=document.getElementById("canvas"),b=O.getContext("2d"),un=document.getElementById("startButton");document.getElementById("levelMessage");document.getElementById("levelStat");document.getElementById("aiDifficultyStat");document.getElementById("goalBitsStat");document.getElementById("paddle1ScoreElement");document.getElementById("paddle2ScoreElement");function ze(n,t){return{x:n,y:t}}O.width=window.innerWidth;O.height=window.innerHeight*.75;O.addEventListener("touchstart",function(n){us=n.touches[0].clientX,$s=!0});O.addEventListener("touchmove",function(n){if(n.preventDefault(),$s){const t=n.touches[0].clientX,e=t-us;Lt.pos.x+=e,us=t}});O.addEventListener("touchend",function(){$s=!1});window.addEventListener("resize",function(){O.width=window.innerWidth,O.height=window.innerHeight*.75});window.addEventListener("keydown",function(n){Xr[n.keyCode]=!0});window.addEventListener("keyup",function(n){Xr[n.keyCode]=!1});const ls=new(window.AudioContext||window.webkitAudioContext),hs={};function ci(n,t){fetch(t).then(e=>e.arrayBuffer()).then(e=>ls.decodeAudioData(e)).then(e=>{hs[n]=e}).catch(e=>console.error("Error loading sound:",e))}ci("paddleHit","/sounds/paddle-hit.mp3");ci("score","/sounds/goal.mp3");ci("victory","/sounds/yay.mp3");ci("gameOver","/sounds/game-over.mp3");function Yr(n){if(hs[n]){const t=ls.createBufferSource();t.buffer=hs[n],t.connect(ls.destination),t.start()}}let Ui=!0;const Va=document.getElementById("soundToggle");Va.addEventListener("click",()=>{Ui=!Ui,Va.textContent=Ui?"🔊":"🔇"});function Zp(n,t,e){this.pos=n,this.velocity=t,this.radius=e,this.trail=[],this.update=function(){this.pos.x+=this.velocity.x,this.pos.y+=this.velocity.y,this.trail.push({x:this.pos.x,y:this.pos.y}),this.trail.length>20&&this.trail.shift()},this.draw=function(){b.fillStyle="white",b.strokeStyle="white",b.beginPath(),b.arc(this.pos.x,this.pos.y,this.radius,0,Math.PI*2),b.fill(),b.stroke(),b.lineWidth=12;for(let r=0;r<this.trail.length-1;r++){let s=1-r/this.trail.length,o=r*10%60,a=b.createLinearGradient(this.trail[r].x,this.trail[r].y,this.trail[r+1].x,this.trail[r+1].y);if(a.addColorStop(0,`hsla(${o}, 100%, 50%, ${s})`),a.addColorStop(1,`hsla(${o+30}, 100%, 50%, ${s*.5})`),b.beginPath(),b.strokeStyle=a,b.moveTo(this.trail[r].x,this.trail[r].y),b.lineTo(this.trail[r+1].x,this.trail[r+1].y),b.stroke(),r%3===0){let l=Math.atan2(this.trail[r+1].y-this.trail[r].y,this.trail[r+1].x-this.trail[r].x),d=2*s;b.fillStyle=`hsla(${o}, 100%, 50%, ${s*.7})`,b.beginPath(),b.arc(this.trail[r].x+Math.cos(l+Math.PI/2)*(Math.random()*5),this.trail[r].y+Math.sin(l+Math.PI/2)*(Math.random()*5),d,0,Math.PI*2),b.fill()}}}}function pl(n,t,e,r){this.pos=n,this.velocity=t,this.width=e,this.height=r,this.score=0,this.update=function(){Xr[Yp]&&(this.pos.x-=this.velocity.x),Xr[Jp]&&(this.pos.x+=this.velocity.x)},this.draw=function(){let s=b.createLinearGradient(this.pos.x,this.pos.y,this.pos.x,this.pos.y+this.height);s.addColorStop(0,"#33ff00"),s.addColorStop(1,"#009900"),b.fillStyle=s;let o=10;b.beginPath(),b.moveTo(this.pos.x+o,this.pos.y),b.lineTo(this.pos.x+this.width-o,this.pos.y),b.quadraticCurveTo(this.pos.x+this.width,this.pos.y,this.pos.x+this.width,this.pos.y+o),b.lineTo(this.pos.x+this.width,this.pos.y+this.height-o),b.quadraticCurveTo(this.pos.x+this.width,this.pos.y+this.height,this.pos.x+this.width-o,this.pos.y+this.height),b.lineTo(this.pos.x+o,this.pos.y+this.height),b.quadraticCurveTo(this.pos.x,this.pos.y+this.height,this.pos.x,this.pos.y+this.height-o),b.lineTo(this.pos.x,this.pos.y+o),b.quadraticCurveTo(this.pos.x,this.pos.y,this.pos.x+o,this.pos.y),b.closePath(),b.fill(),b.lineWidth=5,b.strokeStyle="#006600",b.stroke(),b.shadowColor="rgba(0, 0, 0, 0.5)",b.shadowBlur=15,b.shadowOffsetX=5,b.shadowOffsetY=5,b.shadowColor="transparent"},this.getHalfWidth=function(){return this.width/2},this.getHalfHeight=function(){return this.height/2},this.getCenter=function(){return ze(this.pos.x+this.getHalfWidth(),this.pos.y+this.getHalfHeight())}}function tm(n){n.pos.x=Math.max(0,Math.min(n.pos.x,O.width-n.width))}function em(n){(n.pos.x+n.radius>=O.width||n.pos.x-n.radius<=0)&&(n.velocity.x*=-1)}function xa(n,t){let e=Math.abs(n.pos.x-t.getCenter().x),r=Math.abs(n.pos.y-t.getCenter().y);e<=n.radius+t.getHalfWidth()&&r<=t.getHalfHeight()+n.radius&&(n.velocity.y>0&&n.pos.y<t.getCenter().y||n.velocity.y<0&&n.pos.y>t.getCenter().y)&&(n.velocity.y*=-1,n.velocity.x+=(Math.random()-.5)*1.9,Yr("paddleHit"))}function nm(n,t){if(n.velocity.y<0){let e=n.pos.x-t.width/2,r=t.velocity.x*ir[ae].aiDifficulty;Math.abs(t.pos.x-e)>r&&(t.pos.x<e?t.pos.x+=r:t.pos.x-=r),t.pos.x=Math.max(0,Math.min(t.pos.x,O.width-t.width))}}function Jr(n){n.pos.x=O.width/2,n.pos.y=O.height/2,n.velocity.x=0,n.velocity.y=0,n.trail=[];let t=.75;const e=setInterval(()=>{if(t>0)t-=.1;else{clearInterval(e);let r=ir[ae].ballSpeed;n.velocity.x=(Math.random()>.5?1:-1)*r,n.velocity.y=(Math.random()>.5?1:-1)*r}},100)}function rm(n,t,e){n.pos.y<=0&&(t.score+=1,Yr("score"),t.score===3?Da():Jr(n)),n.pos.y>=O.height&&(e.score+=1,e.score===3?Da():Jr(n)),zs()}function im(){const n=document.getElementById("levelStat");n.textContent=`Level: ${ae+1}`}function sm(){const n=document.getElementById("aiDifficultyStat");n.textContent=`AI Difficulty: ${ir[ae].aiDifficulty.toFixed(2)}`}function om(){const n=document.getElementById("goalBitsStat");n.textContent=`GoalBits Earned: ${hi}`}function zs(){const n=document.getElementById("paddle1ScoreElement"),t=document.getElementById("paddle2ScoreElement");n&&t&&(n.textContent=`Human: ${Lt.score}`,t.textContent=`AI: ${Ut.score}`)}function ml(){im(),sm(),om(),zs()}let sr=!1;function am(n){Ge=!1,sr=!0;function t(){Ge=!0,sr=!1,Jr(Ht),O.removeEventListener("click",t)}O.addEventListener("click",t)}function Da(){if(Lt.score===3)if(hi+=3,ae++,ae<ir.length){const n=ir[ae];Lt.velocity.x=n.paddleSpeed,Ut.velocity.x=n.paddleSpeed,Lt.score=0,Ut.score=0,ml(),am()}else um("Human!!");else Ut.score===3&&gl()}function um(n){Yr(n==="Human!!"?"victory":"gameOver"),alert(n+" wins!"),Lt.score=0,Ut.score=0,document.getElementById("paddle1ScoreElement").textContent=Lt.score,document.getElementById("paddle2ScoreElement").textContent=Ut.score,zs(),ae=0,Ge=!1,un.style.display="block",vl()}function lm(){b.fillStyle="#2E7D32",b.fillRect(0,0,O.width,O.height),b.strokeStyle="#FFFFFF",b.lineWidth=3,b.beginPath(),b.moveTo(0,O.height/2),b.lineTo(O.width,O.height/2),b.stroke(),b.beginPath(),b.arc(O.width/2,O.height/2,70,0,Math.PI*2),b.stroke();for(let n=0;n<1e3;n++)b.fillStyle=`rgba(255, 255, 255, ${Math.random()*.05})`,b.fillRect(Math.random()*O.width,Math.random()*O.height,2,2);b.strokeStyle="#FFD700",b.lineWidth=5,b.beginPath(),b.rect(0,0,O.width,O.height),b.stroke()}let ae=0;function gl(){Ge=!1,ue=!1,un.style.display="block",un.textContent="Restart",un.onclick=function(){El()};const n=b.createRadialGradient(O.width/2,O.height/2,0,O.width/2,O.height/2,O.width/2);n.addColorStop(0,"#7e1a1a"),n.addColorStop(1,"#510000"),b.fillStyle=n,b.fillRect(0,0,O.width,O.height),b.fillStyle="rgba(255, 255, 255, 0.3)";for(let t=0;t<50;t++){const e=Math.random()*O.width,r=Math.random()*O.height;b.beginPath(),b.arc(e,r,2,0,Math.PI*2),b.fill(),b.font="36px Arial",b.fillStyle="white",b.textAlign="center",b.textBaseline="middle",b.fillText("TRY AGAIN!!",O.width/2,O.height/2)}}let ue=!1,yl;function _l(){ue=!ue,ue?(cancelAnimationFrame(yl),document.getElementById("pauseScreen").style.display="flex"):(document.getElementById("pauseScreen").style.display="none",ln())}const Ht=new Zp(ze(O.width/2,O.height/2),ze(6,6),10),Lt=new pl(ze(O.width/2-50,O.height-30),ze(15,0),60,20),Ut=new pl(ze(O.width/2-50,10),ze(5,0),60,20);let Ge=!1;function El(){Ht.update(),Lt.update(),tm(Lt),em(Ht),xa(Ht,Lt),xa(Ht,Ut),nm(Ht,Ut),(Ht.pos.y<=0||Ht.pos.y>=O.height)&&rm(Ht,Lt,Ut),lm(),ml(),Ht.draw(),Lt.draw(),Ut.draw()}const tn=50,re=O.width/2,ie=O.height/2-80;function vl(){b.fillStyle="#2E7D32",b.fillRect(0,0,O.width,O.height),b.strokeStyle="#FFFFFF",b.lineWidth=3,b.beginPath(),b.moveTo(0,O.height/2),b.lineTo(O.width,O.height/2),b.stroke(),b.beginPath(),b.arc(O.width/2,O.height/2,70,0,Math.PI*2),b.stroke(),b.fillStyle="#FFD700",b.font="bold 45px 'Arial Black', sans-serif",b.textAlign="center",b.shadowColor="rgba(0, 0, 0, 0.5)",b.shadowBlur=10,b.shadowOffsetX=5,b.shadowOffsetY=5,b.fillText("Football Pong",O.width/2,O.height/5),b.font="bold 30px Arial, sans-serif",b.fillStyle="#FFFFFF",b.shadowBlur=5,b.shadowOffsetX=2,b.shadowOffsetY=2,b.fillText("First to 3 wins!",O.width/2,O.height/3+13),b.shadowColor="transparent",b.shadowBlur=0,b.shadowOffsetX=0,b.shadowOffsetY=0}function hm(){const n=b.createRadialGradient(O.width/2,O.height/2,0,O.width/2,O.height/2,O.width/2);n.addColorStop(0,"#1a237e"),n.addColorStop(1,"#000051"),b.fillStyle=n,b.fillRect(0,0,O.width,O.height),b.fillStyle="rgba(255, 255, 255, 0.5)";for(let a=0;a<100;a++){const l=Math.random()*O.width,d=Math.random()*O.height,m=Math.random()*2;b.beginPath(),b.arc(l,d,m,0,Math.PI*2),b.fill()}function t(a,l,d,m,E){let P=Math.PI/2*3,x=a,D=l,U=Math.PI/d;b.beginPath(),b.moveTo(a,l-m);for(let j=0;j<d;j++)x=a+Math.cos(P)*m,D=l+Math.sin(P)*m,b.lineTo(x,D),P+=U,x=a+Math.cos(P)*E,D=l+Math.sin(P)*E,b.lineTo(x,D),P+=U;b.lineTo(a,l-m),b.closePath()}b.save(),b.fillStyle="#FFD700",t(re,ie,5,tn,tn/2),b.fill(),b.createRadialGradient(re,ie,0,re,ie,tn),n.addColorStop(0,"#FFD700"),n.addColorStop(1,"#FFA500"),b.fillStyle=n,b.fill(),b.shadowColor="#FFD700",b.shadowBlur=20,b.fill(),b.shadowBlur=0,b.fillStyle="#8B4513",b.font="bold 30px Arial",b.textAlign="center",b.textBaseline="middle",b.fillText("GB",re,ie);const e=Date.now()/1e3,r=.5;b.translate(re,ie),b.rotate(e*r),b.translate(-re,-ie),t(re,ie,5,tn,tn/2),b.fillStyle=n,b.fill(),b.fillStyle="#8B4513",b.fillText("GB",re,ie),b.restore();for(let a=0;a<5;a++){const l=Math.random()*Math.PI*2,d=Math.random()*tn*1.2,m=re+Math.cos(l)*d,E=ie+Math.sin(l)*d,P=Math.random()*4+2;b.fillStyle="white",b.beginPath(),b.arc(m,E,P,0,Math.PI*2),b.fill()}function s(a,l,d,m,E){b.font=`bold ${m}px Arial`,b.fillStyle="rgba(0, 0, 0, 0.5)",b.fillText(a,l+2,d+2),b.fillStyle=E,b.fillText(a,l,d)}s(`${hi} GoalBits Earned!`,O.width/2,O.height/2+30,36,"#FFD700"),s("Click to continue...",O.width/2,O.height-50,24,"#FFFFFF");const o=(Math.sin(Date.now()/300)+1)/2;b.globalAlpha=.5+o*.5,s("Click to continue...",O.width/2,O.height-50,24,"#FFFFFF"),b.globalAlpha=1}function ln(){ln.isRunning||(ln.isRunning=!0),b.clearRect(0,0,O.width,O.height),sr?hm():Ge&&!ue?El():gl(),ue||(yl=requestAnimationFrame(ln))}O.addEventListener("click",function(n){Ge&&!ue&&!sr&&_l()});document.getElementById("pauseScreen").addEventListener("click",function(n){ue&&_l(),n.stopPropagation()});un.addEventListener("click",function(){Ge=!0,un.style.display="none",Lt.score=0,Ut.score=0,ae=0,hi=0,Jr(Ht),Lt.pos.x=O.width/2-Lt.width/2,Ut.pos.x=O.width/2-Ut.width/2,ue=!1,sr=!1,document.getElementById("pauseScreen").style.display="none",ln.isRunning||ln()});vl();
