(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();var ra={},kr={};kr.byteLength=fc;kr.toByteArray=pc;kr.fromByteArray=_c;var Gt=[],Lt=[],hc=typeof Uint8Array<"u"?Uint8Array:Array,hi="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var qe=0,lc=hi.length;qe<lc;++qe)Gt[qe]=hi[qe],Lt[hi.charCodeAt(qe)]=qe;Lt["-".charCodeAt(0)]=62;Lt["_".charCodeAt(0)]=63;function ia(n){var t=n.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var e=n.indexOf("=");e===-1&&(e=t);var r=e===t?0:4-e%4;return[e,r]}function fc(n){var t=ia(n),e=t[0],r=t[1];return(e+r)*3/4-r}function dc(n,t,e){return(t+e)*3/4-e}function pc(n){var t,e=ia(n),r=e[0],s=e[1],o=new hc(dc(n,r,s)),u=0,c=s>0?r-4:r,d;for(d=0;d<c;d+=4)t=Lt[n.charCodeAt(d)]<<18|Lt[n.charCodeAt(d+1)]<<12|Lt[n.charCodeAt(d+2)]<<6|Lt[n.charCodeAt(d+3)],o[u++]=t>>16&255,o[u++]=t>>8&255,o[u++]=t&255;return s===2&&(t=Lt[n.charCodeAt(d)]<<2|Lt[n.charCodeAt(d+1)]>>4,o[u++]=t&255),s===1&&(t=Lt[n.charCodeAt(d)]<<10|Lt[n.charCodeAt(d+1)]<<4|Lt[n.charCodeAt(d+2)]>>2,o[u++]=t>>8&255,o[u++]=t&255),o}function mc(n){return Gt[n>>18&63]+Gt[n>>12&63]+Gt[n>>6&63]+Gt[n&63]}function gc(n,t,e){for(var r,s=[],o=t;o<e;o+=3)r=(n[o]<<16&16711680)+(n[o+1]<<8&65280)+(n[o+2]&255),s.push(mc(r));return s.join("")}function _c(n){for(var t,e=n.length,r=e%3,s=[],o=16383,u=0,c=e-r;u<c;u+=o)s.push(gc(n,u,u+o>c?c:u+o));return r===1?(t=n[e-1],s.push(Gt[t>>2]+Gt[t<<4&63]+"==")):r===2&&(t=(n[e-2]<<8)+n[e-1],s.push(Gt[t>>10]+Gt[t>>4&63]+Gt[t<<2&63]+"=")),s.join("")}var Bi={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */Bi.read=function(n,t,e,r,s){var o,u,c=s*8-r-1,d=(1<<c)-1,m=d>>1,v=-7,C=e?s-1:0,b=e?-1:1,D=n[t+C];for(C+=b,o=D&(1<<-v)-1,D>>=-v,v+=c;v>0;o=o*256+n[t+C],C+=b,v-=8);for(u=o&(1<<-v)-1,o>>=-v,v+=r;v>0;u=u*256+n[t+C],C+=b,v-=8);if(o===0)o=1-m;else{if(o===d)return u?NaN:(D?-1:1)*(1/0);u=u+Math.pow(2,r),o=o-m}return(D?-1:1)*u*Math.pow(2,o-r)};Bi.write=function(n,t,e,r,s,o){var u,c,d,m=o*8-s-1,v=(1<<m)-1,C=v>>1,b=s===23?Math.pow(2,-24)-Math.pow(2,-77):0,D=r?0:o-1,L=r?1:-1,B=t<0||t===0&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(c=isNaN(t)?1:0,u=v):(u=Math.floor(Math.log(t)/Math.LN2),t*(d=Math.pow(2,-u))<1&&(u--,d*=2),u+C>=1?t+=b/d:t+=b*Math.pow(2,1-C),t*d>=2&&(u++,d/=2),u+C>=v?(c=0,u=v):u+C>=1?(c=(t*d-1)*Math.pow(2,s),u=u+C):(c=t*Math.pow(2,C-1)*Math.pow(2,s),u=0));s>=8;n[e+D]=c&255,D+=L,c/=256,s-=8);for(u=u<<s|c,m+=s;m>0;n[e+D]=u&255,D+=L,u/=256,m-=8);n[e+D-L]|=B*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(n){var t=kr,e=Bi,r=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;n.Buffer=c,n.SlowBuffer=et,n.INSPECT_MAX_BYTES=50;var s=2147483647;n.kMaxLength=s,c.TYPED_ARRAY_SUPPORT=o(),!c.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function o(){try{var g=new Uint8Array(1),h={foo:function(){return 42}};return Object.setPrototypeOf(h,Uint8Array.prototype),Object.setPrototypeOf(g,h),g.foo()===42}catch{return!1}}Object.defineProperty(c.prototype,"parent",{enumerable:!0,get:function(){if(c.isBuffer(this))return this.buffer}}),Object.defineProperty(c.prototype,"offset",{enumerable:!0,get:function(){if(c.isBuffer(this))return this.byteOffset}});function u(g){if(g>s)throw new RangeError('The value "'+g+'" is invalid for option "size"');var h=new Uint8Array(g);return Object.setPrototypeOf(h,c.prototype),h}function c(g,h,f){if(typeof g=="number"){if(typeof h=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return C(g)}return d(g,h,f)}c.poolSize=8192;function d(g,h,f){if(typeof g=="string")return b(g,h);if(ArrayBuffer.isView(g))return L(g);if(g==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof g);if(Ft(g,ArrayBuffer)||g&&Ft(g.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(Ft(g,SharedArrayBuffer)||g&&Ft(g.buffer,SharedArrayBuffer)))return B(g,h,f);if(typeof g=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var _=g.valueOf&&g.valueOf();if(_!=null&&_!==g)return c.from(_,h,f);var S=O(g);if(S)return S;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof g[Symbol.toPrimitive]=="function")return c.from(g[Symbol.toPrimitive]("string"),h,f);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof g)}c.from=function(g,h,f){return d(g,h,f)},Object.setPrototypeOf(c.prototype,Uint8Array.prototype),Object.setPrototypeOf(c,Uint8Array);function m(g){if(typeof g!="number")throw new TypeError('"size" argument must be of type number');if(g<0)throw new RangeError('The value "'+g+'" is invalid for option "size"')}function v(g,h,f){return m(g),g<=0?u(g):h!==void 0?typeof f=="string"?u(g).fill(h,f):u(g).fill(h):u(g)}c.alloc=function(g,h,f){return v(g,h,f)};function C(g){return m(g),u(g<0?0:Y(g)|0)}c.allocUnsafe=function(g){return C(g)},c.allocUnsafeSlow=function(g){return C(g)};function b(g,h){if((typeof h!="string"||h==="")&&(h="utf8"),!c.isEncoding(h))throw new TypeError("Unknown encoding: "+h);var f=nt(g,h)|0,_=u(f),S=_.write(g,h);return S!==f&&(_=_.slice(0,S)),_}function D(g){for(var h=g.length<0?0:Y(g.length)|0,f=u(h),_=0;_<h;_+=1)f[_]=g[_]&255;return f}function L(g){if(Ft(g,Uint8Array)){var h=new Uint8Array(g);return B(h.buffer,h.byteOffset,h.byteLength)}return D(g)}function B(g,h,f){if(h<0||g.byteLength<h)throw new RangeError('"offset" is outside of buffer bounds');if(g.byteLength<h+(f||0))throw new RangeError('"length" is outside of buffer bounds');var _;return h===void 0&&f===void 0?_=new Uint8Array(g):f===void 0?_=new Uint8Array(g,h):_=new Uint8Array(g,h,f),Object.setPrototypeOf(_,c.prototype),_}function O(g){if(c.isBuffer(g)){var h=Y(g.length)|0,f=u(h);return f.length===0||g.copy(f,0,0,h),f}if(g.length!==void 0)return typeof g.length!="number"||ve(g.length)?u(0):D(g);if(g.type==="Buffer"&&Array.isArray(g.data))return D(g.data)}function Y(g){if(g>=s)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s.toString(16)+" bytes");return g|0}function et(g){return+g!=g&&(g=0),c.alloc(+g)}c.isBuffer=function(h){return h!=null&&h._isBuffer===!0&&h!==c.prototype},c.compare=function(h,f){if(Ft(h,Uint8Array)&&(h=c.from(h,h.offset,h.byteLength)),Ft(f,Uint8Array)&&(f=c.from(f,f.offset,f.byteLength)),!c.isBuffer(h)||!c.isBuffer(f))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(h===f)return 0;for(var _=h.length,S=f.length,x=0,F=Math.min(_,S);x<F;++x)if(h[x]!==f[x]){_=h[x],S=f[x];break}return _<S?-1:S<_?1:0},c.isEncoding=function(h){switch(String(h).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},c.concat=function(h,f){if(!Array.isArray(h))throw new TypeError('"list" argument must be an Array of Buffers');if(h.length===0)return c.alloc(0);var _;if(f===void 0)for(f=0,_=0;_<h.length;++_)f+=h[_].length;var S=c.allocUnsafe(f),x=0;for(_=0;_<h.length;++_){var F=h[_];if(Ft(F,Uint8Array))x+F.length>S.length?c.from(F).copy(S,x):Uint8Array.prototype.set.call(S,F,x);else if(c.isBuffer(F))F.copy(S,x);else throw new TypeError('"list" argument must be an Array of Buffers');x+=F.length}return S};function nt(g,h){if(c.isBuffer(g))return g.length;if(ArrayBuffer.isView(g)||Ft(g,ArrayBuffer))return g.byteLength;if(typeof g!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof g);var f=g.length,_=arguments.length>2&&arguments[2]===!0;if(!_&&f===0)return 0;for(var S=!1;;)switch(h){case"ascii":case"latin1":case"binary":return f;case"utf8":case"utf-8":return cn(g).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return f*2;case"hex":return f>>>1;case"base64":return Ee(g).length;default:if(S)return _?-1:cn(g).length;h=(""+h).toLowerCase(),S=!0}}c.byteLength=nt;function ft(g,h,f){var _=!1;if((h===void 0||h<0)&&(h=0),h>this.length||((f===void 0||f>this.length)&&(f=this.length),f<=0)||(f>>>=0,h>>>=0,f<=h))return"";for(g||(g="utf8");;)switch(g){case"hex":return un(this,h,f);case"utf8":case"utf-8":return Ot(this,h,f);case"ascii":return ge(this,h,f);case"latin1":case"binary":return _e(this,h,f);case"base64":return E(this,h,f);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Xn(this,h,f);default:if(_)throw new TypeError("Unknown encoding: "+g);g=(g+"").toLowerCase(),_=!0}}c.prototype._isBuffer=!0;function It(g,h,f){var _=g[h];g[h]=g[f],g[f]=_}c.prototype.swap16=function(){var h=this.length;if(h%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var f=0;f<h;f+=2)It(this,f,f+1);return this},c.prototype.swap32=function(){var h=this.length;if(h%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var f=0;f<h;f+=4)It(this,f,f+3),It(this,f+1,f+2);return this},c.prototype.swap64=function(){var h=this.length;if(h%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var f=0;f<h;f+=8)It(this,f,f+7),It(this,f+1,f+6),It(this,f+2,f+5),It(this,f+3,f+4);return this},c.prototype.toString=function(){var h=this.length;return h===0?"":arguments.length===0?Ot(this,0,h):ft.apply(this,arguments)},c.prototype.toLocaleString=c.prototype.toString,c.prototype.equals=function(h){if(!c.isBuffer(h))throw new TypeError("Argument must be a Buffer");return this===h?!0:c.compare(this,h)===0},c.prototype.inspect=function(){var h="",f=n.INSPECT_MAX_BYTES;return h=this.toString("hex",0,f).replace(/(.{2})/g,"$1 ").trim(),this.length>f&&(h+=" ... "),"<Buffer "+h+">"},r&&(c.prototype[r]=c.prototype.inspect),c.prototype.compare=function(h,f,_,S,x){if(Ft(h,Uint8Array)&&(h=c.from(h,h.offset,h.byteLength)),!c.isBuffer(h))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof h);if(f===void 0&&(f=0),_===void 0&&(_=h?h.length:0),S===void 0&&(S=0),x===void 0&&(x=this.length),f<0||_>h.length||S<0||x>this.length)throw new RangeError("out of range index");if(S>=x&&f>=_)return 0;if(S>=x)return-1;if(f>=_)return 1;if(f>>>=0,_>>>=0,S>>>=0,x>>>=0,this===h)return 0;for(var F=x-S,Q=_-f,Z=Math.min(F,Q),rt=this.slice(S,x),mt=h.slice(f,_),K=0;K<Z;++K)if(rt[K]!==mt[K]){F=rt[K],Q=mt[K];break}return F<Q?-1:Q<F?1:0};function dt(g,h,f,_,S){if(g.length===0)return-1;if(typeof f=="string"?(_=f,f=0):f>2147483647?f=2147483647:f<-2147483648&&(f=-2147483648),f=+f,ve(f)&&(f=S?0:g.length-1),f<0&&(f=g.length+f),f>=g.length){if(S)return-1;f=g.length-1}else if(f<0)if(S)f=0;else return-1;if(typeof h=="string"&&(h=c.from(h,_)),c.isBuffer(h))return h.length===0?-1:A(g,h,f,_,S);if(typeof h=="number")return h=h&255,typeof Uint8Array.prototype.indexOf=="function"?S?Uint8Array.prototype.indexOf.call(g,h,f):Uint8Array.prototype.lastIndexOf.call(g,h,f):A(g,[h],f,_,S);throw new TypeError("val must be string, number or Buffer")}function A(g,h,f,_,S){var x=1,F=g.length,Q=h.length;if(_!==void 0&&(_=String(_).toLowerCase(),_==="ucs2"||_==="ucs-2"||_==="utf16le"||_==="utf-16le")){if(g.length<2||h.length<2)return-1;x=2,F/=2,Q/=2,f/=2}function Z(Te,ln){return x===1?Te[ln]:Te.readUInt16BE(ln*x)}var rt;if(S){var mt=-1;for(rt=f;rt<F;rt++)if(Z(g,rt)===Z(h,mt===-1?0:rt-mt)){if(mt===-1&&(mt=rt),rt-mt+1===Q)return mt*x}else mt!==-1&&(rt-=rt-mt),mt=-1}else for(f+Q>F&&(f=F-Q),rt=f;rt>=0;rt--){for(var K=!0,gt=0;gt<Q;gt++)if(Z(g,rt+gt)!==Z(h,gt)){K=!1;break}if(K)return rt}return-1}c.prototype.includes=function(h,f,_){return this.indexOf(h,f,_)!==-1},c.prototype.indexOf=function(h,f,_){return dt(this,h,f,_,!0)},c.prototype.lastIndexOf=function(h,f,_){return dt(this,h,f,_,!1)};function y(g,h,f,_){f=Number(f)||0;var S=g.length-f;_?(_=Number(_),_>S&&(_=S)):_=S;var x=h.length;_>x/2&&(_=x/2);for(var F=0;F<_;++F){var Q=parseInt(h.substr(F*2,2),16);if(ve(Q))return F;g[f+F]=Q}return F}function T(g,h,f,_){return se(cn(h,g.length-f),g,f,_)}function w(g,h,f,_){return se(Hr(h),g,f,_)}function I(g,h,f,_){return se(Ee(h),g,f,_)}function P(g,h,f,_){return se(Oe(h,g.length-f),g,f,_)}c.prototype.write=function(h,f,_,S){if(f===void 0)S="utf8",_=this.length,f=0;else if(_===void 0&&typeof f=="string")S=f,_=this.length,f=0;else if(isFinite(f))f=f>>>0,isFinite(_)?(_=_>>>0,S===void 0&&(S="utf8")):(S=_,_=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var x=this.length-f;if((_===void 0||_>x)&&(_=x),h.length>0&&(_<0||f<0)||f>this.length)throw new RangeError("Attempt to write outside buffer bounds");S||(S="utf8");for(var F=!1;;)switch(S){case"hex":return y(this,h,f,_);case"utf8":case"utf-8":return T(this,h,f,_);case"ascii":case"latin1":case"binary":return w(this,h,f,_);case"base64":return I(this,h,f,_);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return P(this,h,f,_);default:if(F)throw new TypeError("Unknown encoding: "+S);S=(""+S).toLowerCase(),F=!0}},c.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function E(g,h,f){return h===0&&f===g.length?t.fromByteArray(g):t.fromByteArray(g.slice(h,f))}function Ot(g,h,f){f=Math.min(g.length,f);for(var _=[],S=h;S<f;){var x=g[S],F=null,Q=x>239?4:x>223?3:x>191?2:1;if(S+Q<=f){var Z,rt,mt,K;switch(Q){case 1:x<128&&(F=x);break;case 2:Z=g[S+1],(Z&192)===128&&(K=(x&31)<<6|Z&63,K>127&&(F=K));break;case 3:Z=g[S+1],rt=g[S+2],(Z&192)===128&&(rt&192)===128&&(K=(x&15)<<12|(Z&63)<<6|rt&63,K>2047&&(K<55296||K>57343)&&(F=K));break;case 4:Z=g[S+1],rt=g[S+2],mt=g[S+3],(Z&192)===128&&(rt&192)===128&&(mt&192)===128&&(K=(x&15)<<18|(Z&63)<<12|(rt&63)<<6|mt&63,K>65535&&K<1114112&&(F=K))}}F===null?(F=65533,Q=1):F>65535&&(F-=65536,_.push(F>>>10&1023|55296),F=56320|F&1023),_.push(F),S+=Q}return Gr(_)}var re=4096;function Gr(g){var h=g.length;if(h<=re)return String.fromCharCode.apply(String,g);for(var f="",_=0;_<h;)f+=String.fromCharCode.apply(String,g.slice(_,_+=re));return f}function ge(g,h,f){var _="";f=Math.min(g.length,f);for(var S=h;S<f;++S)_+=String.fromCharCode(g[S]&127);return _}function _e(g,h,f){var _="";f=Math.min(g.length,f);for(var S=h;S<f;++S)_+=String.fromCharCode(g[S]);return _}function un(g,h,f){var _=g.length;(!h||h<0)&&(h=0),(!f||f<0||f>_)&&(f=_);for(var S="",x=h;x<f;++x)S+=hn[g[x]];return S}function Xn(g,h,f){for(var _=g.slice(h,f),S="",x=0;x<_.length-1;x+=2)S+=String.fromCharCode(_[x]+_[x+1]*256);return S}c.prototype.slice=function(h,f){var _=this.length;h=~~h,f=f===void 0?_:~~f,h<0?(h+=_,h<0&&(h=0)):h>_&&(h=_),f<0?(f+=_,f<0&&(f=0)):f>_&&(f=_),f<h&&(f=h);var S=this.subarray(h,f);return Object.setPrototypeOf(S,c.prototype),S};function pt(g,h,f){if(g%1!==0||g<0)throw new RangeError("offset is not uint");if(g+h>f)throw new RangeError("Trying to access beyond buffer length")}c.prototype.readUintLE=c.prototype.readUIntLE=function(h,f,_){h=h>>>0,f=f>>>0,_||pt(h,f,this.length);for(var S=this[h],x=1,F=0;++F<f&&(x*=256);)S+=this[h+F]*x;return S},c.prototype.readUintBE=c.prototype.readUIntBE=function(h,f,_){h=h>>>0,f=f>>>0,_||pt(h,f,this.length);for(var S=this[h+--f],x=1;f>0&&(x*=256);)S+=this[h+--f]*x;return S},c.prototype.readUint8=c.prototype.readUInt8=function(h,f){return h=h>>>0,f||pt(h,1,this.length),this[h]},c.prototype.readUint16LE=c.prototype.readUInt16LE=function(h,f){return h=h>>>0,f||pt(h,2,this.length),this[h]|this[h+1]<<8},c.prototype.readUint16BE=c.prototype.readUInt16BE=function(h,f){return h=h>>>0,f||pt(h,2,this.length),this[h]<<8|this[h+1]},c.prototype.readUint32LE=c.prototype.readUInt32LE=function(h,f){return h=h>>>0,f||pt(h,4,this.length),(this[h]|this[h+1]<<8|this[h+2]<<16)+this[h+3]*16777216},c.prototype.readUint32BE=c.prototype.readUInt32BE=function(h,f){return h=h>>>0,f||pt(h,4,this.length),this[h]*16777216+(this[h+1]<<16|this[h+2]<<8|this[h+3])},c.prototype.readIntLE=function(h,f,_){h=h>>>0,f=f>>>0,_||pt(h,f,this.length);for(var S=this[h],x=1,F=0;++F<f&&(x*=256);)S+=this[h+F]*x;return x*=128,S>=x&&(S-=Math.pow(2,8*f)),S},c.prototype.readIntBE=function(h,f,_){h=h>>>0,f=f>>>0,_||pt(h,f,this.length);for(var S=f,x=1,F=this[h+--S];S>0&&(x*=256);)F+=this[h+--S]*x;return x*=128,F>=x&&(F-=Math.pow(2,8*f)),F},c.prototype.readInt8=function(h,f){return h=h>>>0,f||pt(h,1,this.length),this[h]&128?(255-this[h]+1)*-1:this[h]},c.prototype.readInt16LE=function(h,f){h=h>>>0,f||pt(h,2,this.length);var _=this[h]|this[h+1]<<8;return _&32768?_|4294901760:_},c.prototype.readInt16BE=function(h,f){h=h>>>0,f||pt(h,2,this.length);var _=this[h+1]|this[h]<<8;return _&32768?_|4294901760:_},c.prototype.readInt32LE=function(h,f){return h=h>>>0,f||pt(h,4,this.length),this[h]|this[h+1]<<8|this[h+2]<<16|this[h+3]<<24},c.prototype.readInt32BE=function(h,f){return h=h>>>0,f||pt(h,4,this.length),this[h]<<24|this[h+1]<<16|this[h+2]<<8|this[h+3]},c.prototype.readFloatLE=function(h,f){return h=h>>>0,f||pt(h,4,this.length),e.read(this,h,!0,23,4)},c.prototype.readFloatBE=function(h,f){return h=h>>>0,f||pt(h,4,this.length),e.read(this,h,!1,23,4)},c.prototype.readDoubleLE=function(h,f){return h=h>>>0,f||pt(h,8,this.length),e.read(this,h,!0,52,8)},c.prototype.readDoubleBE=function(h,f){return h=h>>>0,f||pt(h,8,this.length),e.read(this,h,!1,52,8)};function at(g,h,f,_,S,x){if(!c.isBuffer(g))throw new TypeError('"buffer" argument must be a Buffer instance');if(h>S||h<x)throw new RangeError('"value" argument is out of bounds');if(f+_>g.length)throw new RangeError("Index out of range")}c.prototype.writeUintLE=c.prototype.writeUIntLE=function(h,f,_,S){if(h=+h,f=f>>>0,_=_>>>0,!S){var x=Math.pow(2,8*_)-1;at(this,h,f,_,x,0)}var F=1,Q=0;for(this[f]=h&255;++Q<_&&(F*=256);)this[f+Q]=h/F&255;return f+_},c.prototype.writeUintBE=c.prototype.writeUIntBE=function(h,f,_,S){if(h=+h,f=f>>>0,_=_>>>0,!S){var x=Math.pow(2,8*_)-1;at(this,h,f,_,x,0)}var F=_-1,Q=1;for(this[f+F]=h&255;--F>=0&&(Q*=256);)this[f+F]=h/Q&255;return f+_},c.prototype.writeUint8=c.prototype.writeUInt8=function(h,f,_){return h=+h,f=f>>>0,_||at(this,h,f,1,255,0),this[f]=h&255,f+1},c.prototype.writeUint16LE=c.prototype.writeUInt16LE=function(h,f,_){return h=+h,f=f>>>0,_||at(this,h,f,2,65535,0),this[f]=h&255,this[f+1]=h>>>8,f+2},c.prototype.writeUint16BE=c.prototype.writeUInt16BE=function(h,f,_){return h=+h,f=f>>>0,_||at(this,h,f,2,65535,0),this[f]=h>>>8,this[f+1]=h&255,f+2},c.prototype.writeUint32LE=c.prototype.writeUInt32LE=function(h,f,_){return h=+h,f=f>>>0,_||at(this,h,f,4,4294967295,0),this[f+3]=h>>>24,this[f+2]=h>>>16,this[f+1]=h>>>8,this[f]=h&255,f+4},c.prototype.writeUint32BE=c.prototype.writeUInt32BE=function(h,f,_){return h=+h,f=f>>>0,_||at(this,h,f,4,4294967295,0),this[f]=h>>>24,this[f+1]=h>>>16,this[f+2]=h>>>8,this[f+3]=h&255,f+4},c.prototype.writeIntLE=function(h,f,_,S){if(h=+h,f=f>>>0,!S){var x=Math.pow(2,8*_-1);at(this,h,f,_,x-1,-x)}var F=0,Q=1,Z=0;for(this[f]=h&255;++F<_&&(Q*=256);)h<0&&Z===0&&this[f+F-1]!==0&&(Z=1),this[f+F]=(h/Q>>0)-Z&255;return f+_},c.prototype.writeIntBE=function(h,f,_,S){if(h=+h,f=f>>>0,!S){var x=Math.pow(2,8*_-1);at(this,h,f,_,x-1,-x)}var F=_-1,Q=1,Z=0;for(this[f+F]=h&255;--F>=0&&(Q*=256);)h<0&&Z===0&&this[f+F+1]!==0&&(Z=1),this[f+F]=(h/Q>>0)-Z&255;return f+_},c.prototype.writeInt8=function(h,f,_){return h=+h,f=f>>>0,_||at(this,h,f,1,127,-128),h<0&&(h=255+h+1),this[f]=h&255,f+1},c.prototype.writeInt16LE=function(h,f,_){return h=+h,f=f>>>0,_||at(this,h,f,2,32767,-32768),this[f]=h&255,this[f+1]=h>>>8,f+2},c.prototype.writeInt16BE=function(h,f,_){return h=+h,f=f>>>0,_||at(this,h,f,2,32767,-32768),this[f]=h>>>8,this[f+1]=h&255,f+2},c.prototype.writeInt32LE=function(h,f,_){return h=+h,f=f>>>0,_||at(this,h,f,4,2147483647,-2147483648),this[f]=h&255,this[f+1]=h>>>8,this[f+2]=h>>>16,this[f+3]=h>>>24,f+4},c.prototype.writeInt32BE=function(h,f,_){return h=+h,f=f>>>0,_||at(this,h,f,4,2147483647,-2147483648),h<0&&(h=4294967295+h+1),this[f]=h>>>24,this[f+1]=h>>>16,this[f+2]=h>>>8,this[f+3]=h&255,f+4};function Et(g,h,f,_,S,x){if(f+_>g.length)throw new RangeError("Index out of range");if(f<0)throw new RangeError("Index out of range")}function Yn(g,h,f,_,S){return h=+h,f=f>>>0,S||Et(g,h,f,4),e.write(g,h,f,_,23,4),f+4}c.prototype.writeFloatLE=function(h,f,_){return Yn(this,h,f,!0,_)},c.prototype.writeFloatBE=function(h,f,_){return Yn(this,h,f,!1,_)};function ie(g,h,f,_,S){return h=+h,f=f>>>0,S||Et(g,h,f,8),e.write(g,h,f,_,52,8),f+8}c.prototype.writeDoubleLE=function(h,f,_){return ie(this,h,f,!0,_)},c.prototype.writeDoubleBE=function(h,f,_){return ie(this,h,f,!1,_)},c.prototype.copy=function(h,f,_,S){if(!c.isBuffer(h))throw new TypeError("argument should be a Buffer");if(_||(_=0),!S&&S!==0&&(S=this.length),f>=h.length&&(f=h.length),f||(f=0),S>0&&S<_&&(S=_),S===_||h.length===0||this.length===0)return 0;if(f<0)throw new RangeError("targetStart out of bounds");if(_<0||_>=this.length)throw new RangeError("Index out of range");if(S<0)throw new RangeError("sourceEnd out of bounds");S>this.length&&(S=this.length),h.length-f<S-_&&(S=h.length-f+_);var x=S-_;return this===h&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(f,_,S):Uint8Array.prototype.set.call(h,this.subarray(_,S),f),x},c.prototype.fill=function(h,f,_,S){if(typeof h=="string"){if(typeof f=="string"?(S=f,f=0,_=this.length):typeof _=="string"&&(S=_,_=this.length),S!==void 0&&typeof S!="string")throw new TypeError("encoding must be a string");if(typeof S=="string"&&!c.isEncoding(S))throw new TypeError("Unknown encoding: "+S);if(h.length===1){var x=h.charCodeAt(0);(S==="utf8"&&x<128||S==="latin1")&&(h=x)}}else typeof h=="number"?h=h&255:typeof h=="boolean"&&(h=Number(h));if(f<0||this.length<f||this.length<_)throw new RangeError("Out of range index");if(_<=f)return this;f=f>>>0,_=_===void 0?this.length:_>>>0,h||(h=0);var F;if(typeof h=="number")for(F=f;F<_;++F)this[F]=h;else{var Q=c.isBuffer(h)?h:c.from(h,S),Z=Q.length;if(Z===0)throw new TypeError('The value "'+h+'" is invalid for argument "value"');for(F=0;F<_-f;++F)this[F+f]=Q[F%Z]}return this};var Kr=/[^+/0-9A-Za-z-_]/g;function ye(g){if(g=g.split("=")[0],g=g.trim().replace(Kr,""),g.length<2)return"";for(;g.length%4!==0;)g=g+"=";return g}function cn(g,h){h=h||1/0;for(var f,_=g.length,S=null,x=[],F=0;F<_;++F){if(f=g.charCodeAt(F),f>55295&&f<57344){if(!S){if(f>56319){(h-=3)>-1&&x.push(239,191,189);continue}else if(F+1===_){(h-=3)>-1&&x.push(239,191,189);continue}S=f;continue}if(f<56320){(h-=3)>-1&&x.push(239,191,189),S=f;continue}f=(S-55296<<10|f-56320)+65536}else S&&(h-=3)>-1&&x.push(239,191,189);if(S=null,f<128){if((h-=1)<0)break;x.push(f)}else if(f<2048){if((h-=2)<0)break;x.push(f>>6|192,f&63|128)}else if(f<65536){if((h-=3)<0)break;x.push(f>>12|224,f>>6&63|128,f&63|128)}else if(f<1114112){if((h-=4)<0)break;x.push(f>>18|240,f>>12&63|128,f>>6&63|128,f&63|128)}else throw new Error("Invalid code point")}return x}function Hr(g){for(var h=[],f=0;f<g.length;++f)h.push(g.charCodeAt(f)&255);return h}function Oe(g,h){for(var f,_,S,x=[],F=0;F<g.length&&!((h-=2)<0);++F)f=g.charCodeAt(F),_=f>>8,S=f%256,x.push(S),x.push(_);return x}function Ee(g){return t.toByteArray(ye(g))}function se(g,h,f,_){for(var S=0;S<_&&!(S+f>=h.length||S>=g.length);++S)h[S+f]=g[S];return S}function Ft(g,h){return g instanceof h||g!=null&&g.constructor!=null&&g.constructor.name!=null&&g.constructor.name===h.name}function ve(g){return g!==g}var hn=function(){for(var g="0123456789abcdef",h=new Array(256),f=0;f<16;++f)for(var _=f*16,S=0;S<16;++S)h[_+S]=g[f]+g[S];return h}()})(ra);var Tr={},yc={get exports(){return Tr},set exports(n){Tr=n}},lt=yc.exports={},$t,zt;function Ei(){throw new Error("setTimeout has not been defined")}function vi(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?$t=setTimeout:$t=Ei}catch{$t=Ei}try{typeof clearTimeout=="function"?zt=clearTimeout:zt=vi}catch{zt=vi}})();function sa(n){if($t===setTimeout)return setTimeout(n,0);if(($t===Ei||!$t)&&setTimeout)return $t=setTimeout,setTimeout(n,0);try{return $t(n,0)}catch{try{return $t.call(null,n,0)}catch{return $t.call(this,n,0)}}}function Ec(n){if(zt===clearTimeout)return clearTimeout(n);if((zt===vi||!zt)&&clearTimeout)return zt=clearTimeout,clearTimeout(n);try{return zt(n)}catch{try{return zt.call(null,n)}catch{return zt.call(this,n)}}}var Jt=[],Ke=!1,Pe,gr=-1;function vc(){!Ke||!Pe||(Ke=!1,Pe.length?Jt=Pe.concat(Jt):gr=-1,Jt.length&&oa())}function oa(){if(!Ke){var n=sa(vc);Ke=!0;for(var t=Jt.length;t;){for(Pe=Jt,Jt=[];++gr<t;)Pe&&Pe[gr].run();gr=-1,t=Jt.length}Pe=null,Ke=!1,Ec(n)}}lt.nextTick=function(n){var t=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)t[e-1]=arguments[e];Jt.push(new aa(n,t)),Jt.length===1&&!Ke&&sa(oa)};function aa(n,t){this.fun=n,this.array=t}aa.prototype.run=function(){this.fun.apply(null,this.array)};lt.title="browser";lt.browser=!0;lt.env={};lt.argv=[];lt.version="";lt.versions={};function ne(){}lt.on=ne;lt.addListener=ne;lt.once=ne;lt.off=ne;lt.removeListener=ne;lt.removeAllListeners=ne;lt.emit=ne;lt.prependListener=ne;lt.prependOnceListener=ne;lt.listeners=function(n){return[]};lt.binding=function(n){throw new Error("process.binding is not supported")};lt.cwd=function(){return"/"};lt.chdir=function(n){throw new Error("process.chdir is not supported")};lt.umask=function(){return 0};var Tc=function(n){function t(){var r=this||self;return delete n.prototype.__magic__,r}if(typeof globalThis=="object")return globalThis;if(this)return t();n.defineProperty(n.prototype,"__magic__",{configurable:!0,get:t});var e=__magic__;return e}(Object),be=Tc;/**
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
 */const ua=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},wc=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],u=n[e++],c=n[e++],d=((s&7)<<18|(o&63)<<12|(u&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(d>>10)),t[r++]=String.fromCharCode(56320+(d&1023))}else{const o=n[e++],u=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|u&63)}}return t.join("")},ca={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],u=s+1<n.length,c=u?n[s+1]:0,d=s+2<n.length,m=d?n[s+2]:0,v=o>>2,C=(o&3)<<4|c>>4;let b=(c&15)<<2|m>>6,D=m&63;d||(D=64,u||(b=64)),r.push(e[v],e[C],e[b],e[D])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(ua(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):wc(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],c=s<n.length?e[n.charAt(s)]:0;++s;const m=s<n.length?e[n.charAt(s)]:64;++s;const C=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||c==null||m==null||C==null)throw new Ic;const b=o<<2|c>>4;if(r.push(b),m!==64){const D=c<<4&240|m>>2;if(r.push(D),C!==64){const L=m<<6&192|C;r.push(L)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ic extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ac=function(n){const t=ua(n);return ca.encodeByteArray(t,!0)},wr=function(n){return Ac(n).replace(/\./g,"")},Rc=function(n){try{return ca.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Sc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof be<"u")return be;throw new Error("Unable to locate global object.")}/**
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
 */const Pc=()=>Sc().__FIREBASE_DEFAULTS__,Cc=()=>{if(typeof Tr>"u"||typeof Tr.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Vc=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Rc(n[1]);return t&&JSON.parse(t)},ji=()=>{try{return Pc()||Cc()||Vc()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},bc=n=>{var t,e;return(e=(t=ji())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Dc=n=>{const t=bc(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},ha=()=>{var n;return(n=ji())===null||n===void 0?void 0:n.config};/**
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
 */class xc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function Nc(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n),c="";return[wr(JSON.stringify(e)),wr(JSON.stringify(u)),c].join(".")}/**
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
 */function kc(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Fc(){var n;const t=(n=ji())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(be.process)==="[object process]"}catch{return!1}}function Mc(){return!Fc()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Oc(){try{return typeof indexedDB=="object"}catch{return!1}}function Lc(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
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
 */const Uc="FirebaseError";class nn extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Uc,Object.setPrototypeOf(this,nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,la.prototype.create)}}class la{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],u=o?Bc(o,r):"Error",c=`${this.serviceName}: ${u} (${s}).`;return new nn(s,c,r)}}function Bc(n,t){return n.replace(jc,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const jc=/\{\$([^}]+)}/g;function Ti(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],u=t[s];if(fo(o)&&fo(u)){if(!Ti(o,u))return!1}else if(o!==u)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function fo(n){return n!==null&&typeof n=="object"}/**
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
 */function Ir(n){return n&&n._delegate?n._delegate:n}class kn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Se="[DEFAULT]";/**
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
 */class qc{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new xc;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(zc(t))try{this.getOrInitializeService({instanceIdentifier:Se})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=Se){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Se){return this.instances.has(t)}getOptions(t=Se){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,u]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&u.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&t(u,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$c(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Se){return this.component?this.component.multipleInstances?t:Se:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $c(n){return n===Se?void 0:n}function zc(n){return n.instantiationMode==="EAGER"}/**
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
 */class Gc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new qc(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var X;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(X||(X={}));const Kc={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},Hc=X.INFO,Qc={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},Wc=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=Qc[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class fa{constructor(t){this.name=t,this._logLevel=Hc,this._logHandler=Wc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in X))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Kc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...t),this._logHandler(this,X.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...t),this._logHandler(this,X.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,X.INFO,...t),this._logHandler(this,X.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,X.WARN,...t),this._logHandler(this,X.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...t),this._logHandler(this,X.ERROR,...t)}}const Xc=(n,t)=>t.some(e=>n instanceof e);let po,mo;function Yc(){return po||(po=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jc(){return mo||(mo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const da=new WeakMap,wi=new WeakMap,pa=new WeakMap,li=new WeakMap,qi=new WeakMap;function Zc(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",u)},o=()=>{e(he(n.result)),s()},u=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",u)});return t.then(e=>{e instanceof IDBCursor&&da.set(e,n)}).catch(()=>{}),qi.set(t,n),t}function th(n){if(wi.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",u),n.removeEventListener("abort",u)},o=()=>{e(),s()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",u),n.addEventListener("abort",u)});wi.set(n,t)}let Ii={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return wi.get(n);if(t==="objectStoreNames")return n.objectStoreNames||pa.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return he(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function eh(n){Ii=n(Ii)}function nh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(fi(this),t,...e);return pa.set(r,t.sort?t.sort():[t]),he(r)}:Jc().includes(n)?function(...t){return n.apply(fi(this),t),he(da.get(this))}:function(...t){return he(n.apply(fi(this),t))}}function rh(n){return typeof n=="function"?nh(n):(n instanceof IDBTransaction&&th(n),Xc(n,Yc())?new Proxy(n,Ii):n)}function he(n){if(n instanceof IDBRequest)return Zc(n);if(li.has(n))return li.get(n);const t=rh(n);return t!==n&&(li.set(n,t),qi.set(t,n)),t}const fi=n=>qi.get(n);function ih(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const u=indexedDB.open(n,t),c=he(u);return r&&u.addEventListener("upgradeneeded",d=>{r(he(u.result),d.oldVersion,d.newVersion,he(u.transaction),d)}),e&&u.addEventListener("blocked",d=>e(d.oldVersion,d.newVersion,d)),c.then(d=>{o&&d.addEventListener("close",()=>o()),s&&d.addEventListener("versionchange",m=>s(m.oldVersion,m.newVersion,m))}).catch(()=>{}),c}const sh=["get","getKey","getAll","getAllKeys","count"],oh=["put","add","delete","clear"],di=new Map;function go(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(di.get(t))return di.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=oh.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||sh.includes(e)))return;const o=async function(u,...c){const d=this.transaction(u,s?"readwrite":"readonly");let m=d.store;return r&&(m=m.index(c.shift())),(await Promise.all([m[e](...c),s&&d.done]))[0]};return di.set(t,o),o}eh(n=>({...n,get:(t,e,r)=>go(t,e)||n.get(t,e,r),has:(t,e)=>!!go(t,e)||n.has(t,e)}));/**
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
 */class ah{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(uh(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function uh(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ai="@firebase/app",_o="0.10.7";/**
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
 */const De=new fa("@firebase/app"),ch="@firebase/app-compat",hh="@firebase/analytics-compat",lh="@firebase/analytics",fh="@firebase/app-check-compat",dh="@firebase/app-check",ph="@firebase/auth",mh="@firebase/auth-compat",gh="@firebase/database",_h="@firebase/database-compat",yh="@firebase/functions",Eh="@firebase/functions-compat",vh="@firebase/installations",Th="@firebase/installations-compat",wh="@firebase/messaging",Ih="@firebase/messaging-compat",Ah="@firebase/performance",Rh="@firebase/performance-compat",Sh="@firebase/remote-config",Ph="@firebase/remote-config-compat",Ch="@firebase/storage",Vh="@firebase/storage-compat",bh="@firebase/firestore",Dh="@firebase/vertexai-preview",xh="@firebase/firestore-compat",Nh="firebase",kh="10.12.4";/**
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
 */const Ri="[DEFAULT]",Fh={[Ai]:"fire-core",[ch]:"fire-core-compat",[lh]:"fire-analytics",[hh]:"fire-analytics-compat",[dh]:"fire-app-check",[fh]:"fire-app-check-compat",[ph]:"fire-auth",[mh]:"fire-auth-compat",[gh]:"fire-rtdb",[_h]:"fire-rtdb-compat",[yh]:"fire-fn",[Eh]:"fire-fn-compat",[vh]:"fire-iid",[Th]:"fire-iid-compat",[wh]:"fire-fcm",[Ih]:"fire-fcm-compat",[Ah]:"fire-perf",[Rh]:"fire-perf-compat",[Sh]:"fire-rc",[Ph]:"fire-rc-compat",[Ch]:"fire-gcs",[Vh]:"fire-gcs-compat",[bh]:"fire-fst",[xh]:"fire-fst-compat",[Dh]:"fire-vertex","fire-js":"fire-js",[Nh]:"fire-js-all"};/**
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
 */const Ar=new Map,Mh=new Map,Si=new Map;function yo(n,t){try{n.container.addComponent(t)}catch(e){De.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Rr(n){const t=n.name;if(Si.has(t))return De.debug(`There were multiple attempts to register component ${t}.`),!1;Si.set(t,n);for(const e of Ar.values())yo(e,n);for(const e of Mh.values())yo(e,n);return!0}function Oh(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const Lh={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},le=new la("app","Firebase",Lh);/**
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
 */class Uh{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw le.create("app-deleted",{appName:this._name})}}/**
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
 */const Bh=kh;function ma(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ri,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw le.create("bad-app-name",{appName:String(s)});if(e||(e=ha()),!e)throw le.create("no-options");const o=Ar.get(s);if(o){if(Ti(e,o.options)&&Ti(r,o.config))return o;throw le.create("duplicate-app",{appName:s})}const u=new Gc(s);for(const d of Si.values())u.addComponent(d);const c=new Uh(e,r,u);return Ar.set(s,c),c}function jh(n=Ri){const t=Ar.get(n);if(!t&&n===Ri&&ha())return ma();if(!t)throw le.create("no-app",{appName:n});return t}function He(n,t,e){var r;let s=(r=Fh[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const c=[`Unable to register library "${s}" with version "${t}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&c.push("and"),u&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),De.warn(c.join(" "));return}Rr(new kn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const qh="firebase-heartbeat-database",$h=1,Fn="firebase-heartbeat-store";let pi=null;function ga(){return pi||(pi=ih(qh,$h,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Fn)}catch(e){console.warn(e)}}}}).catch(n=>{throw le.create("idb-open",{originalErrorMessage:n.message})})),pi}async function zh(n){try{const e=(await ga()).transaction(Fn),r=await e.objectStore(Fn).get(_a(n));return await e.done,r}catch(t){if(t instanceof nn)De.warn(t.message);else{const e=le.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});De.warn(e.message)}}}async function Eo(n,t){try{const r=(await ga()).transaction(Fn,"readwrite");await r.objectStore(Fn).put(t,_a(n)),await r.done}catch(e){if(e instanceof nn)De.warn(e.message);else{const r=le.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});De.warn(r.message)}}}function _a(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Gh=1024,Kh=30*24*60*60*1e3;class Hh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Wh(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=vo();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(u=>u.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(u=>{const c=new Date(u.date).valueOf();return Date.now()-c<=Kh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=vo(),{heartbeatsToSend:r,unsentEntries:s}=Qh(this._heartbeatsCache.heartbeats),o=wr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function vo(){return new Date().toISOString().substring(0,10)}function Qh(n,t=Gh){const e=[];let r=n.slice();for(const s of n){const o=e.find(u=>u.agent===s.agent);if(o){if(o.dates.push(s.date),To(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),To(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Wh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Oc()?Lc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await zh(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Eo(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Eo(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function To(n){return wr(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Xh(n){Rr(new kn("platform-logger",t=>new ah(t),"PRIVATE")),Rr(new kn("heartbeat",t=>new Hh(t),"PRIVATE")),He(Ai,_o,n),He(Ai,_o,"esm2017"),He("fire-js","")}Xh("");var Yh="firebase",Jh="10.12.4";/**
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
 */He(Yh,Jh,"app");var wo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof be<"u"?be:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ve,ya;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(A,y){function T(){}T.prototype=y.prototype,A.D=y.prototype,A.prototype=new T,A.prototype.constructor=A,A.C=function(w,I,P){for(var E=Array(arguments.length-2),Ot=2;Ot<arguments.length;Ot++)E[Ot-2]=arguments[Ot];return y.prototype[I].apply(w,E)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,y,T){T||(T=0);var w=Array(16);if(typeof y=="string")for(var I=0;16>I;++I)w[I]=y.charCodeAt(T++)|y.charCodeAt(T++)<<8|y.charCodeAt(T++)<<16|y.charCodeAt(T++)<<24;else for(I=0;16>I;++I)w[I]=y[T++]|y[T++]<<8|y[T++]<<16|y[T++]<<24;y=A.g[0],T=A.g[1],I=A.g[2];var P=A.g[3],E=y+(P^T&(I^P))+w[0]+3614090360&4294967295;y=T+(E<<7&4294967295|E>>>25),E=P+(I^y&(T^I))+w[1]+3905402710&4294967295,P=y+(E<<12&4294967295|E>>>20),E=I+(T^P&(y^T))+w[2]+606105819&4294967295,I=P+(E<<17&4294967295|E>>>15),E=T+(y^I&(P^y))+w[3]+3250441966&4294967295,T=I+(E<<22&4294967295|E>>>10),E=y+(P^T&(I^P))+w[4]+4118548399&4294967295,y=T+(E<<7&4294967295|E>>>25),E=P+(I^y&(T^I))+w[5]+1200080426&4294967295,P=y+(E<<12&4294967295|E>>>20),E=I+(T^P&(y^T))+w[6]+2821735955&4294967295,I=P+(E<<17&4294967295|E>>>15),E=T+(y^I&(P^y))+w[7]+4249261313&4294967295,T=I+(E<<22&4294967295|E>>>10),E=y+(P^T&(I^P))+w[8]+1770035416&4294967295,y=T+(E<<7&4294967295|E>>>25),E=P+(I^y&(T^I))+w[9]+2336552879&4294967295,P=y+(E<<12&4294967295|E>>>20),E=I+(T^P&(y^T))+w[10]+4294925233&4294967295,I=P+(E<<17&4294967295|E>>>15),E=T+(y^I&(P^y))+w[11]+2304563134&4294967295,T=I+(E<<22&4294967295|E>>>10),E=y+(P^T&(I^P))+w[12]+1804603682&4294967295,y=T+(E<<7&4294967295|E>>>25),E=P+(I^y&(T^I))+w[13]+4254626195&4294967295,P=y+(E<<12&4294967295|E>>>20),E=I+(T^P&(y^T))+w[14]+2792965006&4294967295,I=P+(E<<17&4294967295|E>>>15),E=T+(y^I&(P^y))+w[15]+1236535329&4294967295,T=I+(E<<22&4294967295|E>>>10),E=y+(I^P&(T^I))+w[1]+4129170786&4294967295,y=T+(E<<5&4294967295|E>>>27),E=P+(T^I&(y^T))+w[6]+3225465664&4294967295,P=y+(E<<9&4294967295|E>>>23),E=I+(y^T&(P^y))+w[11]+643717713&4294967295,I=P+(E<<14&4294967295|E>>>18),E=T+(P^y&(I^P))+w[0]+3921069994&4294967295,T=I+(E<<20&4294967295|E>>>12),E=y+(I^P&(T^I))+w[5]+3593408605&4294967295,y=T+(E<<5&4294967295|E>>>27),E=P+(T^I&(y^T))+w[10]+38016083&4294967295,P=y+(E<<9&4294967295|E>>>23),E=I+(y^T&(P^y))+w[15]+3634488961&4294967295,I=P+(E<<14&4294967295|E>>>18),E=T+(P^y&(I^P))+w[4]+3889429448&4294967295,T=I+(E<<20&4294967295|E>>>12),E=y+(I^P&(T^I))+w[9]+568446438&4294967295,y=T+(E<<5&4294967295|E>>>27),E=P+(T^I&(y^T))+w[14]+3275163606&4294967295,P=y+(E<<9&4294967295|E>>>23),E=I+(y^T&(P^y))+w[3]+4107603335&4294967295,I=P+(E<<14&4294967295|E>>>18),E=T+(P^y&(I^P))+w[8]+1163531501&4294967295,T=I+(E<<20&4294967295|E>>>12),E=y+(I^P&(T^I))+w[13]+2850285829&4294967295,y=T+(E<<5&4294967295|E>>>27),E=P+(T^I&(y^T))+w[2]+4243563512&4294967295,P=y+(E<<9&4294967295|E>>>23),E=I+(y^T&(P^y))+w[7]+1735328473&4294967295,I=P+(E<<14&4294967295|E>>>18),E=T+(P^y&(I^P))+w[12]+2368359562&4294967295,T=I+(E<<20&4294967295|E>>>12),E=y+(T^I^P)+w[5]+4294588738&4294967295,y=T+(E<<4&4294967295|E>>>28),E=P+(y^T^I)+w[8]+2272392833&4294967295,P=y+(E<<11&4294967295|E>>>21),E=I+(P^y^T)+w[11]+1839030562&4294967295,I=P+(E<<16&4294967295|E>>>16),E=T+(I^P^y)+w[14]+4259657740&4294967295,T=I+(E<<23&4294967295|E>>>9),E=y+(T^I^P)+w[1]+2763975236&4294967295,y=T+(E<<4&4294967295|E>>>28),E=P+(y^T^I)+w[4]+1272893353&4294967295,P=y+(E<<11&4294967295|E>>>21),E=I+(P^y^T)+w[7]+4139469664&4294967295,I=P+(E<<16&4294967295|E>>>16),E=T+(I^P^y)+w[10]+3200236656&4294967295,T=I+(E<<23&4294967295|E>>>9),E=y+(T^I^P)+w[13]+681279174&4294967295,y=T+(E<<4&4294967295|E>>>28),E=P+(y^T^I)+w[0]+3936430074&4294967295,P=y+(E<<11&4294967295|E>>>21),E=I+(P^y^T)+w[3]+3572445317&4294967295,I=P+(E<<16&4294967295|E>>>16),E=T+(I^P^y)+w[6]+76029189&4294967295,T=I+(E<<23&4294967295|E>>>9),E=y+(T^I^P)+w[9]+3654602809&4294967295,y=T+(E<<4&4294967295|E>>>28),E=P+(y^T^I)+w[12]+3873151461&4294967295,P=y+(E<<11&4294967295|E>>>21),E=I+(P^y^T)+w[15]+530742520&4294967295,I=P+(E<<16&4294967295|E>>>16),E=T+(I^P^y)+w[2]+3299628645&4294967295,T=I+(E<<23&4294967295|E>>>9),E=y+(I^(T|~P))+w[0]+4096336452&4294967295,y=T+(E<<6&4294967295|E>>>26),E=P+(T^(y|~I))+w[7]+1126891415&4294967295,P=y+(E<<10&4294967295|E>>>22),E=I+(y^(P|~T))+w[14]+2878612391&4294967295,I=P+(E<<15&4294967295|E>>>17),E=T+(P^(I|~y))+w[5]+4237533241&4294967295,T=I+(E<<21&4294967295|E>>>11),E=y+(I^(T|~P))+w[12]+1700485571&4294967295,y=T+(E<<6&4294967295|E>>>26),E=P+(T^(y|~I))+w[3]+2399980690&4294967295,P=y+(E<<10&4294967295|E>>>22),E=I+(y^(P|~T))+w[10]+4293915773&4294967295,I=P+(E<<15&4294967295|E>>>17),E=T+(P^(I|~y))+w[1]+2240044497&4294967295,T=I+(E<<21&4294967295|E>>>11),E=y+(I^(T|~P))+w[8]+1873313359&4294967295,y=T+(E<<6&4294967295|E>>>26),E=P+(T^(y|~I))+w[15]+4264355552&4294967295,P=y+(E<<10&4294967295|E>>>22),E=I+(y^(P|~T))+w[6]+2734768916&4294967295,I=P+(E<<15&4294967295|E>>>17),E=T+(P^(I|~y))+w[13]+1309151649&4294967295,T=I+(E<<21&4294967295|E>>>11),E=y+(I^(T|~P))+w[4]+4149444226&4294967295,y=T+(E<<6&4294967295|E>>>26),E=P+(T^(y|~I))+w[11]+3174756917&4294967295,P=y+(E<<10&4294967295|E>>>22),E=I+(y^(P|~T))+w[2]+718787259&4294967295,I=P+(E<<15&4294967295|E>>>17),E=T+(P^(I|~y))+w[9]+3951481745&4294967295,A.g[0]=A.g[0]+y&4294967295,A.g[1]=A.g[1]+(I+(E<<21&4294967295|E>>>11))&4294967295,A.g[2]=A.g[2]+I&4294967295,A.g[3]=A.g[3]+P&4294967295}r.prototype.u=function(A,y){y===void 0&&(y=A.length);for(var T=y-this.blockSize,w=this.B,I=this.h,P=0;P<y;){if(I==0)for(;P<=T;)s(this,A,P),P+=this.blockSize;if(typeof A=="string"){for(;P<y;)if(w[I++]=A.charCodeAt(P++),I==this.blockSize){s(this,w),I=0;break}}else for(;P<y;)if(w[I++]=A[P++],I==this.blockSize){s(this,w),I=0;break}}this.h=I,this.o+=y},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var y=1;y<A.length-8;++y)A[y]=0;var T=8*this.o;for(y=A.length-8;y<A.length;++y)A[y]=T&255,T/=256;for(this.u(A),A=Array(16),y=T=0;4>y;++y)for(var w=0;32>w;w+=8)A[T++]=this.g[y]>>>w&255;return A};function o(A,y){var T=c;return Object.prototype.hasOwnProperty.call(T,A)?T[A]:T[A]=y(A)}function u(A,y){this.h=y;for(var T=[],w=!0,I=A.length-1;0<=I;I--){var P=A[I]|0;w&&P==y||(T[I]=P,w=!1)}this.g=T}var c={};function d(A){return-128<=A&&128>A?o(A,function(y){return new u([y|0],0>y?-1:0)}):new u([A|0],0>A?-1:0)}function m(A){if(isNaN(A)||!isFinite(A))return C;if(0>A)return O(m(-A));for(var y=[],T=1,w=0;A>=T;w++)y[w]=A/T|0,T*=4294967296;return new u(y,0)}function v(A,y){if(A.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(A.charAt(0)=="-")return O(v(A.substring(1),y));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=m(Math.pow(y,8)),w=C,I=0;I<A.length;I+=8){var P=Math.min(8,A.length-I),E=parseInt(A.substring(I,I+P),y);8>P?(P=m(Math.pow(y,P)),w=w.j(P).add(m(E))):(w=w.j(T),w=w.add(m(E)))}return w}var C=d(0),b=d(1),D=d(16777216);n=u.prototype,n.m=function(){if(B(this))return-O(this).m();for(var A=0,y=1,T=0;T<this.g.length;T++){var w=this.i(T);A+=(0<=w?w:4294967296+w)*y,y*=4294967296}return A},n.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(L(this))return"0";if(B(this))return"-"+O(this).toString(A);for(var y=m(Math.pow(A,6)),T=this,w="";;){var I=ft(T,y).g;T=Y(T,I.j(y));var P=((0<T.g.length?T.g[0]:T.h)>>>0).toString(A);if(T=I,L(T))return P+w;for(;6>P.length;)P="0"+P;w=P+w}},n.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function L(A){if(A.h!=0)return!1;for(var y=0;y<A.g.length;y++)if(A.g[y]!=0)return!1;return!0}function B(A){return A.h==-1}n.l=function(A){return A=Y(this,A),B(A)?-1:L(A)?0:1};function O(A){for(var y=A.g.length,T=[],w=0;w<y;w++)T[w]=~A.g[w];return new u(T,~A.h).add(b)}n.abs=function(){return B(this)?O(this):this},n.add=function(A){for(var y=Math.max(this.g.length,A.g.length),T=[],w=0,I=0;I<=y;I++){var P=w+(this.i(I)&65535)+(A.i(I)&65535),E=(P>>>16)+(this.i(I)>>>16)+(A.i(I)>>>16);w=E>>>16,P&=65535,E&=65535,T[I]=E<<16|P}return new u(T,T[T.length-1]&-2147483648?-1:0)};function Y(A,y){return A.add(O(y))}n.j=function(A){if(L(this)||L(A))return C;if(B(this))return B(A)?O(this).j(O(A)):O(O(this).j(A));if(B(A))return O(this.j(O(A)));if(0>this.l(D)&&0>A.l(D))return m(this.m()*A.m());for(var y=this.g.length+A.g.length,T=[],w=0;w<2*y;w++)T[w]=0;for(w=0;w<this.g.length;w++)for(var I=0;I<A.g.length;I++){var P=this.i(w)>>>16,E=this.i(w)&65535,Ot=A.i(I)>>>16,re=A.i(I)&65535;T[2*w+2*I]+=E*re,et(T,2*w+2*I),T[2*w+2*I+1]+=P*re,et(T,2*w+2*I+1),T[2*w+2*I+1]+=E*Ot,et(T,2*w+2*I+1),T[2*w+2*I+2]+=P*Ot,et(T,2*w+2*I+2)}for(w=0;w<y;w++)T[w]=T[2*w+1]<<16|T[2*w];for(w=y;w<2*y;w++)T[w]=0;return new u(T,0)};function et(A,y){for(;(A[y]&65535)!=A[y];)A[y+1]+=A[y]>>>16,A[y]&=65535,y++}function nt(A,y){this.g=A,this.h=y}function ft(A,y){if(L(y))throw Error("division by zero");if(L(A))return new nt(C,C);if(B(A))return y=ft(O(A),y),new nt(O(y.g),O(y.h));if(B(y))return y=ft(A,O(y)),new nt(O(y.g),y.h);if(30<A.g.length){if(B(A)||B(y))throw Error("slowDivide_ only works with positive integers.");for(var T=b,w=y;0>=w.l(A);)T=It(T),w=It(w);var I=dt(T,1),P=dt(w,1);for(w=dt(w,2),T=dt(T,2);!L(w);){var E=P.add(w);0>=E.l(A)&&(I=I.add(T),P=E),w=dt(w,1),T=dt(T,1)}return y=Y(A,I.j(y)),new nt(I,y)}for(I=C;0<=A.l(y);){for(T=Math.max(1,Math.floor(A.m()/y.m())),w=Math.ceil(Math.log(T)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),P=m(T),E=P.j(y);B(E)||0<E.l(A);)T-=w,P=m(T),E=P.j(y);L(P)&&(P=b),I=I.add(P),A=Y(A,E)}return new nt(I,A)}n.A=function(A){return ft(this,A).h},n.and=function(A){for(var y=Math.max(this.g.length,A.g.length),T=[],w=0;w<y;w++)T[w]=this.i(w)&A.i(w);return new u(T,this.h&A.h)},n.or=function(A){for(var y=Math.max(this.g.length,A.g.length),T=[],w=0;w<y;w++)T[w]=this.i(w)|A.i(w);return new u(T,this.h|A.h)},n.xor=function(A){for(var y=Math.max(this.g.length,A.g.length),T=[],w=0;w<y;w++)T[w]=this.i(w)^A.i(w);return new u(T,this.h^A.h)};function It(A){for(var y=A.g.length+1,T=[],w=0;w<y;w++)T[w]=A.i(w)<<1|A.i(w-1)>>>31;return new u(T,A.h)}function dt(A,y){var T=y>>5;y%=32;for(var w=A.g.length-T,I=[],P=0;P<w;P++)I[P]=0<y?A.i(P+T)>>>y|A.i(P+T+1)<<32-y:A.i(P+T);return new u(I,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,ya=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=m,u.fromString=v,Ve=u}).apply(typeof wo<"u"?wo:typeof self<"u"?self:typeof window<"u"?window:{});var fr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof be<"u"?be:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ea,va,Pn,Ta,_r,Pi,wa,Ia,Aa;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,a,l){return i==Array.prototype||i==Object.prototype||(i[a]=l.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof fr=="object"&&fr];for(var a=0;a<i.length;++a){var l=i[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function s(i,a){if(a)t:{var l=r;i=i.split(".");for(var p=0;p<i.length-1;p++){var R=i[p];if(!(R in l))break t;l=l[R]}i=i[i.length-1],p=l[i],a=a(p),a!=p&&a!=null&&t(l,i,{configurable:!0,writable:!0,value:a})}}function o(i,a){i instanceof String&&(i+="");var l=0,p=!1,R={next:function(){if(!p&&l<i.length){var V=l++;return{value:a(V,i[V]),done:!1}}return p=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(i){return i||function(){return o(this,function(a,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},c=this||self;function d(i){var a=typeof i;return a=a!="object"?a:i?Array.isArray(i)?"array":a:"null",a=="array"||a=="object"&&typeof i.length=="number"}function m(i){var a=typeof i;return a=="object"&&i!=null||a=="function"}function v(i,a,l){return i.call.apply(i.bind,arguments)}function C(i,a,l){if(!i)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,p),i.apply(a,R)}}return function(){return i.apply(a,arguments)}}function b(i,a,l){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:C,b.apply(null,arguments)}function D(i,a){var l=Array.prototype.slice.call(arguments,1);return function(){var p=l.slice();return p.push.apply(p,arguments),i.apply(this,p)}}function L(i,a){function l(){}l.prototype=a.prototype,i.aa=a.prototype,i.prototype=new l,i.prototype.constructor=i,i.Qb=function(p,R,V){for(var M=Array(arguments.length-2),it=2;it<arguments.length;it++)M[it-2]=arguments[it];return a.prototype[R].apply(p,M)}}function B(i){const a=i.length;if(0<a){const l=Array(a);for(let p=0;p<a;p++)l[p]=i[p];return l}return[]}function O(i,a){for(let l=1;l<arguments.length;l++){const p=arguments[l];if(d(p)){const R=i.length||0,V=p.length||0;i.length=R+V;for(let M=0;M<V;M++)i[R+M]=p[M]}else i.push(p)}}class Y{constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function et(i){return/^[\s\xa0]*$/.test(i)}function nt(){var i=c.navigator;return i&&(i=i.userAgent)?i:""}function ft(i){return ft[" "](i),i}ft[" "]=function(){};var It=nt().indexOf("Gecko")!=-1&&!(nt().toLowerCase().indexOf("webkit")!=-1&&nt().indexOf("Edge")==-1)&&!(nt().indexOf("Trident")!=-1||nt().indexOf("MSIE")!=-1)&&nt().indexOf("Edge")==-1;function dt(i,a,l){for(const p in i)a.call(l,i[p],p,i)}function A(i,a){for(const l in i)a.call(void 0,i[l],l,i)}function y(i){const a={};for(const l in i)a[l]=i[l];return a}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(i,a){let l,p;for(let R=1;R<arguments.length;R++){p=arguments[R];for(l in p)i[l]=p[l];for(let V=0;V<T.length;V++)l=T[V],Object.prototype.hasOwnProperty.call(p,l)&&(i[l]=p[l])}}function I(i){var a=1;i=i.split(":");const l=[];for(;0<a&&i.length;)l.push(i.shift()),a--;return i.length&&l.push(i.join(":")),l}function P(i){c.setTimeout(()=>{throw i},0)}function E(){var i=un;let a=null;return i.g&&(a=i.g,i.g=i.g.next,i.g||(i.h=null),a.next=null),a}class Ot{constructor(){this.h=this.g=null}add(a,l){const p=re.get();p.set(a,l),this.h?this.h.next=p:this.g=p,this.h=p}}var re=new Y(()=>new Gr,i=>i.reset());class Gr{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let ge,_e=!1,un=new Ot,Xn=()=>{const i=c.Promise.resolve(void 0);ge=()=>{i.then(pt)}};var pt=()=>{for(var i;i=E();){try{i.h.call(i.g)}catch(l){P(l)}var a=re;a.j(i),100>a.h&&(a.h++,i.next=a.g,a.g=i)}_e=!1};function at(){this.s=this.s,this.C=this.C}at.prototype.s=!1,at.prototype.ma=function(){this.s||(this.s=!0,this.N())},at.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Et(i,a){this.type=i,this.g=this.target=a,this.defaultPrevented=!1}Et.prototype.h=function(){this.defaultPrevented=!0};var Yn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,a=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const l=()=>{};c.addEventListener("test",l,a),c.removeEventListener("test",l,a)}catch{}return i}();function ie(i,a){if(Et.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var l=this.type=i.type,p=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=a,a=i.relatedTarget){if(It){t:{try{ft(a.nodeName);var R=!0;break t}catch{}R=!1}R||(a=null)}}else l=="mouseover"?a=i.fromElement:l=="mouseout"&&(a=i.toElement);this.relatedTarget=a,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Kr[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&ie.aa.h.call(this)}}L(ie,Et);var Kr={2:"touch",3:"pen",4:"mouse"};ie.prototype.h=function(){ie.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var ye="closure_listenable_"+(1e6*Math.random()|0),cn=0;function Hr(i,a,l,p,R){this.listener=i,this.proxy=null,this.src=a,this.type=l,this.capture=!!p,this.ha=R,this.key=++cn,this.da=this.fa=!1}function Oe(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Ee(i){this.src=i,this.g={},this.h=0}Ee.prototype.add=function(i,a,l,p,R){var V=i.toString();i=this.g[V],i||(i=this.g[V]=[],this.h++);var M=Ft(i,a,p,R);return-1<M?(a=i[M],l||(a.fa=!1)):(a=new Hr(a,this.src,V,!!p,R),a.fa=l,i.push(a)),a};function se(i,a){var l=a.type;if(l in i.g){var p=i.g[l],R=Array.prototype.indexOf.call(p,a,void 0),V;(V=0<=R)&&Array.prototype.splice.call(p,R,1),V&&(Oe(a),i.g[l].length==0&&(delete i.g[l],i.h--))}}function Ft(i,a,l,p){for(var R=0;R<i.length;++R){var V=i[R];if(!V.da&&V.listener==a&&V.capture==!!l&&V.ha==p)return R}return-1}var ve="closure_lm_"+(1e6*Math.random()|0),hn={};function g(i,a,l,p,R){if(p&&p.once)return _(i,a,l,p,R);if(Array.isArray(a)){for(var V=0;V<a.length;V++)g(i,a[V],l,p,R);return null}return l=mt(l),i&&i[ye]?i.K(a,l,m(p)?!!p.capture:!!p,R):h(i,a,l,!1,p,R)}function h(i,a,l,p,R,V){if(!a)throw Error("Invalid event type");var M=m(R)?!!R.capture:!!R,it=Z(i);if(it||(i[ve]=it=new Ee(i)),l=it.add(a,l,p,M,V),l.proxy)return l;if(p=f(),l.proxy=p,p.src=i,p.listener=l,i.addEventListener)Yn||(R=M),R===void 0&&(R=!1),i.addEventListener(a.toString(),p,R);else if(i.attachEvent)i.attachEvent(F(a.toString()),p);else if(i.addListener&&i.removeListener)i.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return l}function f(){function i(l){return a.call(i.src,i.listener,l)}const a=Q;return i}function _(i,a,l,p,R){if(Array.isArray(a)){for(var V=0;V<a.length;V++)_(i,a[V],l,p,R);return null}return l=mt(l),i&&i[ye]?i.L(a,l,m(p)?!!p.capture:!!p,R):h(i,a,l,!0,p,R)}function S(i,a,l,p,R){if(Array.isArray(a))for(var V=0;V<a.length;V++)S(i,a[V],l,p,R);else p=m(p)?!!p.capture:!!p,l=mt(l),i&&i[ye]?(i=i.i,a=String(a).toString(),a in i.g&&(V=i.g[a],l=Ft(V,l,p,R),-1<l&&(Oe(V[l]),Array.prototype.splice.call(V,l,1),V.length==0&&(delete i.g[a],i.h--)))):i&&(i=Z(i))&&(a=i.g[a.toString()],i=-1,a&&(i=Ft(a,l,p,R)),(l=-1<i?a[i]:null)&&x(l))}function x(i){if(typeof i!="number"&&i&&!i.da){var a=i.src;if(a&&a[ye])se(a.i,i);else{var l=i.type,p=i.proxy;a.removeEventListener?a.removeEventListener(l,p,i.capture):a.detachEvent?a.detachEvent(F(l),p):a.addListener&&a.removeListener&&a.removeListener(p),(l=Z(a))?(se(l,i),l.h==0&&(l.src=null,a[ve]=null)):Oe(i)}}}function F(i){return i in hn?hn[i]:hn[i]="on"+i}function Q(i,a){if(i.da)i=!0;else{a=new ie(a,this);var l=i.listener,p=i.ha||i.src;i.fa&&x(i),i=l.call(p,a)}return i}function Z(i){return i=i[ve],i instanceof Ee?i:null}var rt="__closure_events_fn_"+(1e9*Math.random()>>>0);function mt(i){return typeof i=="function"?i:(i[rt]||(i[rt]=function(a){return i.handleEvent(a)}),i[rt])}function K(){at.call(this),this.i=new Ee(this),this.M=this,this.F=null}L(K,at),K.prototype[ye]=!0,K.prototype.removeEventListener=function(i,a,l,p){S(this,i,a,l,p)};function gt(i,a){var l,p=i.F;if(p)for(l=[];p;p=p.F)l.push(p);if(i=i.M,p=a.type||a,typeof a=="string")a=new Et(a,i);else if(a instanceof Et)a.target=a.target||i;else{var R=a;a=new Et(p,i),w(a,R)}if(R=!0,l)for(var V=l.length-1;0<=V;V--){var M=a.g=l[V];R=Te(M,p,!0,a)&&R}if(M=a.g=i,R=Te(M,p,!0,a)&&R,R=Te(M,p,!1,a)&&R,l)for(V=0;V<l.length;V++)M=a.g=l[V],R=Te(M,p,!1,a)&&R}K.prototype.N=function(){if(K.aa.N.call(this),this.i){var i=this.i,a;for(a in i.g){for(var l=i.g[a],p=0;p<l.length;p++)Oe(l[p]);delete i.g[a],i.h--}}this.F=null},K.prototype.K=function(i,a,l,p){return this.i.add(String(i),a,!1,l,p)},K.prototype.L=function(i,a,l,p){return this.i.add(String(i),a,!0,l,p)};function Te(i,a,l,p){if(a=i.i.g[String(a)],!a)return!0;a=a.concat();for(var R=!0,V=0;V<a.length;++V){var M=a[V];if(M&&!M.da&&M.capture==l){var it=M.listener,At=M.ha||M.src;M.fa&&se(i.i,M),R=it.call(At,p)!==!1&&R}}return R&&!p.defaultPrevented}function ln(i,a,l){if(typeof i=="function")l&&(i=b(i,l));else if(i&&typeof i.handleEvent=="function")i=b(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(i,a||0)}function ys(i){i.g=ln(()=>{i.g=null,i.i&&(i.i=!1,ys(i))},i.l);const a=i.h;i.h=null,i.m.apply(null,a)}class Lu extends at{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:ys(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fn(i){at.call(this),this.h=i,this.g={}}L(fn,at);var Es=[];function vs(i){dt(i.g,function(a,l){this.g.hasOwnProperty(l)&&x(a)},i),i.g={}}fn.prototype.N=function(){fn.aa.N.call(this),vs(this)},fn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qr=c.JSON.stringify,Uu=c.JSON.parse,Bu=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function Wr(){}Wr.prototype.h=null;function Ts(i){return i.h||(i.h=i.i())}function ws(){}var dn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Xr(){Et.call(this,"d")}L(Xr,Et);function Yr(){Et.call(this,"c")}L(Yr,Et);var we={},Is=null;function Jn(){return Is=Is||new K}we.La="serverreachability";function As(i){Et.call(this,we.La,i)}L(As,Et);function pn(i){const a=Jn();gt(a,new As(a))}we.STAT_EVENT="statevent";function Rs(i,a){Et.call(this,we.STAT_EVENT,i),this.stat=a}L(Rs,Et);function kt(i){const a=Jn();gt(a,new Rs(a,i))}we.Ma="timingevent";function Ss(i,a){Et.call(this,we.Ma,i),this.size=a}L(Ss,Et);function mn(i,a){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},a)}function gn(){this.g=!0}gn.prototype.xa=function(){this.g=!1};function ju(i,a,l,p,R,V){i.info(function(){if(i.g)if(V)for(var M="",it=V.split("&"),At=0;At<it.length;At++){var J=it[At].split("=");if(1<J.length){var Ct=J[0];J=J[1];var Vt=Ct.split("_");M=2<=Vt.length&&Vt[1]=="type"?M+(Ct+"="+J+"&"):M+(Ct+"=redacted&")}}else M=null;else M=V;return"XMLHTTP REQ ("+p+") [attempt "+R+"]: "+a+`
`+l+`
`+M})}function qu(i,a,l,p,R,V,M){i.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+R+"]: "+a+`
`+l+`
`+V+" "+M})}function Le(i,a,l,p){i.info(function(){return"XMLHTTP TEXT ("+a+"): "+zu(i,l)+(p?" "+p:"")})}function $u(i,a){i.info(function(){return"TIMEOUT: "+a})}gn.prototype.info=function(){};function zu(i,a){if(!i.g)return a;if(!a)return null;try{var l=JSON.parse(a);if(l){for(i=0;i<l.length;i++)if(Array.isArray(l[i])){var p=l[i];if(!(2>p.length)){var R=p[1];if(Array.isArray(R)&&!(1>R.length)){var V=R[0];if(V!="noop"&&V!="stop"&&V!="close")for(var M=1;M<R.length;M++)R[M]=""}}}}return Qr(l)}catch{return a}}var Zn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ps={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Jr;function tr(){}L(tr,Wr),tr.prototype.g=function(){return new XMLHttpRequest},tr.prototype.i=function(){return{}},Jr=new tr;function oe(i,a,l,p){this.j=i,this.i=a,this.l=l,this.R=p||1,this.U=new fn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Cs}function Cs(){this.i=null,this.g="",this.h=!1}var Vs={},Zr={};function ti(i,a,l){i.L=1,i.v=ir(Xt(a)),i.m=l,i.P=!0,bs(i,null)}function bs(i,a){i.F=Date.now(),er(i),i.A=Xt(i.v);var l=i.A,p=i.R;Array.isArray(p)||(p=[String(p)]),zs(l.i,"t",p),i.C=0,l=i.j.J,i.h=new Cs,i.g=uo(i.j,l?a:null,!i.m),0<i.O&&(i.M=new Lu(b(i.Y,i,i.g),i.O)),a=i.U,l=i.g,p=i.ca;var R="readystatechange";Array.isArray(R)||(R&&(Es[0]=R.toString()),R=Es);for(var V=0;V<R.length;V++){var M=g(l,R[V],p||a.handleEvent,!1,a.h||a);if(!M)break;a.g[M.key]=M}a=i.H?y(i.H):{},i.m?(i.u||(i.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,a)):(i.u="GET",i.g.ea(i.A,i.u,null,a)),pn(),ju(i.i,i.u,i.A,i.l,i.R,i.m)}oe.prototype.ca=function(i){i=i.target;const a=this.M;a&&Yt(i)==3?a.j():this.Y(i)},oe.prototype.Y=function(i){try{if(i==this.g)t:{const Vt=Yt(this.g);var a=this.g.Ba();const je=this.g.Z();if(!(3>Vt)&&(Vt!=3||this.g&&(this.h.h||this.g.oa()||Ys(this.g)))){this.J||Vt!=4||a==7||(a==8||0>=je?pn(3):pn(2)),ei(this);var l=this.g.Z();this.X=l;e:if(Ds(this)){var p=Ys(this.g);i="";var R=p.length,V=Yt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ie(this),_n(this);var M="";break e}this.h.i=new c.TextDecoder}for(a=0;a<R;a++)this.h.h=!0,i+=this.h.i.decode(p[a],{stream:!(V&&a==R-1)});p.length=0,this.h.g+=i,this.C=0,M=this.h.g}else M=this.g.oa();if(this.o=l==200,qu(this.i,this.u,this.A,this.l,this.R,Vt,l),this.o){if(this.T&&!this.K){e:{if(this.g){var it,At=this.g;if((it=At.g?At.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!et(it)){var J=it;break e}}J=null}if(l=J)Le(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ni(this,l);else{this.o=!1,this.s=3,kt(12),Ie(this),_n(this);break t}}if(this.P){l=!0;let jt;for(;!this.J&&this.C<M.length;)if(jt=Gu(this,M),jt==Zr){Vt==4&&(this.s=4,kt(14),l=!1),Le(this.i,this.l,null,"[Incomplete Response]");break}else if(jt==Vs){this.s=4,kt(15),Le(this.i,this.l,M,"[Invalid Chunk]"),l=!1;break}else Le(this.i,this.l,jt,null),ni(this,jt);if(Ds(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Vt!=4||M.length!=0||this.h.h||(this.s=1,kt(16),l=!1),this.o=this.o&&l,!l)Le(this.i,this.l,M,"[Invalid Chunked Response]"),Ie(this),_n(this);else if(0<M.length&&!this.W){this.W=!0;var Ct=this.j;Ct.g==this&&Ct.ba&&!Ct.M&&(Ct.j.info("Great, no buffering proxy detected. Bytes received: "+M.length),ui(Ct),Ct.M=!0,kt(11))}}else Le(this.i,this.l,M,null),ni(this,M);Vt==4&&Ie(this),this.o&&!this.J&&(Vt==4?io(this.j,this):(this.o=!1,er(this)))}else uc(this.g),l==400&&0<M.indexOf("Unknown SID")?(this.s=3,kt(12)):(this.s=0,kt(13)),Ie(this),_n(this)}}}catch{}finally{}};function Ds(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function Gu(i,a){var l=i.C,p=a.indexOf(`
`,l);return p==-1?Zr:(l=Number(a.substring(l,p)),isNaN(l)?Vs:(p+=1,p+l>a.length?Zr:(a=a.slice(p,p+l),i.C=p+l,a)))}oe.prototype.cancel=function(){this.J=!0,Ie(this)};function er(i){i.S=Date.now()+i.I,xs(i,i.I)}function xs(i,a){if(i.B!=null)throw Error("WatchDog timer not null");i.B=mn(b(i.ba,i),a)}function ei(i){i.B&&(c.clearTimeout(i.B),i.B=null)}oe.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?($u(this.i,this.A),this.L!=2&&(pn(),kt(17)),Ie(this),this.s=2,_n(this)):xs(this,this.S-i)};function _n(i){i.j.G==0||i.J||io(i.j,i)}function Ie(i){ei(i);var a=i.M;a&&typeof a.ma=="function"&&a.ma(),i.M=null,vs(i.U),i.g&&(a=i.g,i.g=null,a.abort(),a.ma())}function ni(i,a){try{var l=i.j;if(l.G!=0&&(l.g==i||ri(l.h,i))){if(!i.K&&ri(l.h,i)&&l.G==3){try{var p=l.Da.g.parse(a)}catch{p=null}if(Array.isArray(p)&&p.length==3){var R=p;if(R[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<i.F)cr(l),ar(l);else break t;ai(l),kt(18)}}else l.za=R[1],0<l.za-l.T&&37500>R[2]&&l.F&&l.v==0&&!l.C&&(l.C=mn(b(l.Za,l),6e3));if(1>=Fs(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else Re(l,11)}else if((i.K||l.g==i)&&cr(l),!et(a))for(R=l.Da.g.parse(a),a=0;a<R.length;a++){let J=R[a];if(l.T=J[0],J=J[1],l.G==2)if(J[0]=="c"){l.K=J[1],l.ia=J[2];const Ct=J[3];Ct!=null&&(l.la=Ct,l.j.info("VER="+l.la));const Vt=J[4];Vt!=null&&(l.Aa=Vt,l.j.info("SVER="+l.Aa));const je=J[5];je!=null&&typeof je=="number"&&0<je&&(p=1.5*je,l.L=p,l.j.info("backChannelRequestTimeoutMs_="+p)),p=l;const jt=i.g;if(jt){const lr=jt.g?jt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(lr){var V=p.h;V.g||lr.indexOf("spdy")==-1&&lr.indexOf("quic")==-1&&lr.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(ii(V,V.h),V.h=null))}if(p.D){const ci=jt.g?jt.g.getResponseHeader("X-HTTP-Session-Id"):null;ci&&(p.ya=ci,ot(p.I,p.D,ci))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-i.F,l.j.info("Handshake RTT: "+l.R+"ms")),p=l;var M=i;if(p.qa=ao(p,p.J?p.ia:null,p.W),M.K){Ms(p.h,M);var it=M,At=p.L;At&&(it.I=At),it.B&&(ei(it),er(it)),p.g=M}else no(p);0<l.i.length&&ur(l)}else J[0]!="stop"&&J[0]!="close"||Re(l,7);else l.G==3&&(J[0]=="stop"||J[0]=="close"?J[0]=="stop"?Re(l,7):oi(l):J[0]!="noop"&&l.l&&l.l.ta(J),l.v=0)}}pn(4)}catch{}}var Ku=class{constructor(i,a){this.g=i,this.map=a}};function Ns(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ks(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Fs(i){return i.h?1:i.g?i.g.size:0}function ri(i,a){return i.h?i.h==a:i.g?i.g.has(a):!1}function ii(i,a){i.g?i.g.add(a):i.h=a}function Ms(i,a){i.h&&i.h==a?i.h=null:i.g&&i.g.has(a)&&i.g.delete(a)}Ns.prototype.cancel=function(){if(this.i=Os(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Os(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let a=i.i;for(const l of i.g.values())a=a.concat(l.D);return a}return B(i.i)}function Hu(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(d(i)){for(var a=[],l=i.length,p=0;p<l;p++)a.push(i[p]);return a}a=[],l=0;for(p in i)a[l++]=i[p];return a}function Qu(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(d(i)||typeof i=="string"){var a=[];i=i.length;for(var l=0;l<i;l++)a.push(l);return a}a=[],l=0;for(const p in i)a[l++]=p;return a}}}function Ls(i,a){if(i.forEach&&typeof i.forEach=="function")i.forEach(a,void 0);else if(d(i)||typeof i=="string")Array.prototype.forEach.call(i,a,void 0);else for(var l=Qu(i),p=Hu(i),R=p.length,V=0;V<R;V++)a.call(void 0,p[V],l&&l[V],i)}var Us=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Wu(i,a){if(i){i=i.split("&");for(var l=0;l<i.length;l++){var p=i[l].indexOf("="),R=null;if(0<=p){var V=i[l].substring(0,p);R=i[l].substring(p+1)}else V=i[l];a(V,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Ae(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof Ae){this.h=i.h,nr(this,i.j),this.o=i.o,this.g=i.g,rr(this,i.s),this.l=i.l;var a=i.i,l=new vn;l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),Bs(this,l),this.m=i.m}else i&&(a=String(i).match(Us))?(this.h=!1,nr(this,a[1]||"",!0),this.o=yn(a[2]||""),this.g=yn(a[3]||"",!0),rr(this,a[4]),this.l=yn(a[5]||"",!0),Bs(this,a[6]||"",!0),this.m=yn(a[7]||"")):(this.h=!1,this.i=new vn(null,this.h))}Ae.prototype.toString=function(){var i=[],a=this.j;a&&i.push(En(a,js,!0),":");var l=this.g;return(l||a=="file")&&(i.push("//"),(a=this.o)&&i.push(En(a,js,!0),"@"),i.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&i.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(En(l,l.charAt(0)=="/"?Ju:Yu,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",En(l,tc)),i.join("")};function Xt(i){return new Ae(i)}function nr(i,a,l){i.j=l?yn(a,!0):a,i.j&&(i.j=i.j.replace(/:$/,""))}function rr(i,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);i.s=a}else i.s=null}function Bs(i,a,l){a instanceof vn?(i.i=a,ec(i.i,i.h)):(l||(a=En(a,Zu)),i.i=new vn(a,i.h))}function ot(i,a,l){i.i.set(a,l)}function ir(i){return ot(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function yn(i,a){return i?a?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function En(i,a,l){return typeof i=="string"?(i=encodeURI(i).replace(a,Xu),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Xu(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var js=/[#\/\?@]/g,Yu=/[#\?:]/g,Ju=/[#\?]/g,Zu=/[#\?@]/g,tc=/#/g;function vn(i,a){this.h=this.g=null,this.i=i||null,this.j=!!a}function ae(i){i.g||(i.g=new Map,i.h=0,i.i&&Wu(i.i,function(a,l){i.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}n=vn.prototype,n.add=function(i,a){ae(this),this.i=null,i=Ue(this,i);var l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(a),this.h+=1,this};function qs(i,a){ae(i),a=Ue(i,a),i.g.has(a)&&(i.i=null,i.h-=i.g.get(a).length,i.g.delete(a))}function $s(i,a){return ae(i),a=Ue(i,a),i.g.has(a)}n.forEach=function(i,a){ae(this),this.g.forEach(function(l,p){l.forEach(function(R){i.call(a,R,p,this)},this)},this)},n.na=function(){ae(this);const i=Array.from(this.g.values()),a=Array.from(this.g.keys()),l=[];for(let p=0;p<a.length;p++){const R=i[p];for(let V=0;V<R.length;V++)l.push(a[p])}return l},n.V=function(i){ae(this);let a=[];if(typeof i=="string")$s(this,i)&&(a=a.concat(this.g.get(Ue(this,i))));else{i=Array.from(this.g.values());for(let l=0;l<i.length;l++)a=a.concat(i[l])}return a},n.set=function(i,a){return ae(this),this.i=null,i=Ue(this,i),$s(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[a]),this.h+=1,this},n.get=function(i,a){return i?(i=this.V(i),0<i.length?String(i[0]):a):a};function zs(i,a,l){qs(i,a),0<l.length&&(i.i=null,i.g.set(Ue(i,a),B(l)),i.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],a=Array.from(this.g.keys());for(var l=0;l<a.length;l++){var p=a[l];const V=encodeURIComponent(String(p)),M=this.V(p);for(p=0;p<M.length;p++){var R=V;M[p]!==""&&(R+="="+encodeURIComponent(String(M[p]))),i.push(R)}}return this.i=i.join("&")};function Ue(i,a){return a=String(a),i.j&&(a=a.toLowerCase()),a}function ec(i,a){a&&!i.j&&(ae(i),i.i=null,i.g.forEach(function(l,p){var R=p.toLowerCase();p!=R&&(qs(this,p),zs(this,R,l))},i)),i.j=a}function nc(i,a){const l=new gn;if(c.Image){const p=new Image;p.onload=D(ue,l,"TestLoadImage: loaded",!0,a,p),p.onerror=D(ue,l,"TestLoadImage: error",!1,a,p),p.onabort=D(ue,l,"TestLoadImage: abort",!1,a,p),p.ontimeout=D(ue,l,"TestLoadImage: timeout",!1,a,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=i}else a(!1)}function rc(i,a){const l=new gn,p=new AbortController,R=setTimeout(()=>{p.abort(),ue(l,"TestPingServer: timeout",!1,a)},1e4);fetch(i,{signal:p.signal}).then(V=>{clearTimeout(R),V.ok?ue(l,"TestPingServer: ok",!0,a):ue(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(R),ue(l,"TestPingServer: error",!1,a)})}function ue(i,a,l,p,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),p(l)}catch{}}function ic(){this.g=new Bu}function sc(i,a,l){const p=l||"";try{Ls(i,function(R,V){let M=R;m(R)&&(M=Qr(R)),a.push(p+V+"="+encodeURIComponent(M))})}catch(R){throw a.push(p+"type="+encodeURIComponent("_badmap")),R}}function Tn(i){this.l=i.Ub||null,this.j=i.eb||!1}L(Tn,Wr),Tn.prototype.g=function(){return new sr(this.l,this.j)},Tn.prototype.i=function(i){return function(){return i}}({});function sr(i,a){K.call(this),this.D=i,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}L(sr,K),n=sr.prototype,n.open=function(i,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=a,this.readyState=1,In(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(a.body=i),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,wn(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,In(this)),this.g&&(this.readyState=3,In(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Gs(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function Gs(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var a=i.value?i.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!i.done}))&&(this.response=this.responseText+=a)}i.done?wn(this):In(this),this.readyState==3&&Gs(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,wn(this))},n.Qa=function(i){this.g&&(this.response=i,wn(this))},n.ga=function(){this.g&&wn(this)};function wn(i){i.readyState=4,i.l=null,i.j=null,i.v=null,In(i)}n.setRequestHeader=function(i,a){this.u.append(i,a)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=a.next();return i.join(`\r
`)};function In(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(sr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Ks(i){let a="";return dt(i,function(l,p){a+=p,a+=":",a+=l,a+=`\r
`}),a}function si(i,a,l){t:{for(p in l){var p=!1;break t}p=!0}p||(l=Ks(l),typeof i=="string"?l!=null&&encodeURIComponent(String(l)):ot(i,a,l))}function ct(i){K.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}L(ct,K);var oc=/^https?$/i,ac=["POST","PUT"];n=ct.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,a,l,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);a=a?a.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Jr.g(),this.v=this.o?Ts(this.o):Ts(Jr),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(a,String(i),!0),this.B=!1}catch(V){Hs(this,V);return}if(i=l||"",l=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var R in p)l.set(R,p[R]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const V of p.keys())l.set(V,p.get(V));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(l.keys()).find(V=>V.toLowerCase()=="content-type"),R=c.FormData&&i instanceof c.FormData,!(0<=Array.prototype.indexOf.call(ac,a,void 0))||p||R||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,M]of l)this.g.setRequestHeader(V,M);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Xs(this),this.u=!0,this.g.send(i),this.u=!1}catch(V){Hs(this,V)}};function Hs(i,a){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=a,i.m=5,Qs(i),or(i)}function Qs(i){i.A||(i.A=!0,gt(i,"complete"),gt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,gt(this,"complete"),gt(this,"abort"),or(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),or(this,!0)),ct.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ws(this):this.bb())},n.bb=function(){Ws(this)};function Ws(i){if(i.h&&typeof u<"u"&&(!i.v[1]||Yt(i)!=4||i.Z()!=2)){if(i.u&&Yt(i)==4)ln(i.Ea,0,i);else if(gt(i,"readystatechange"),Yt(i)==4){i.h=!1;try{const M=i.Z();t:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var p;if(p=M===0){var R=String(i.D).match(Us)[1]||null;!R&&c.self&&c.self.location&&(R=c.self.location.protocol.slice(0,-1)),p=!oc.test(R?R.toLowerCase():"")}l=p}if(l)gt(i,"complete"),gt(i,"success");else{i.m=6;try{var V=2<Yt(i)?i.g.statusText:""}catch{V=""}i.l=V+" ["+i.Z()+"]",Qs(i)}}finally{or(i)}}}}function or(i,a){if(i.g){Xs(i);const l=i.g,p=i.v[0]?()=>{}:null;i.g=null,i.v=null,a||gt(i,"ready");try{l.onreadystatechange=p}catch{}}}function Xs(i){i.I&&(c.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Yt(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Yt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var a=this.g.responseText;return i&&a.indexOf(i)==0&&(a=a.substring(i.length)),Uu(a)}};function Ys(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function uc(i){const a={};i=(i.g&&2<=Yt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<i.length;p++){if(et(i[p]))continue;var l=I(i[p]);const R=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const V=a[R]||[];a[R]=V,V.push(l)}A(a,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function An(i,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||a}function Js(i){this.Aa=0,this.i=[],this.j=new gn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=An("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=An("baseRetryDelayMs",5e3,i),this.cb=An("retryDelaySeedMs",1e4,i),this.Wa=An("forwardChannelMaxRetries",2,i),this.wa=An("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Ns(i&&i.concurrentRequestLimit),this.Da=new ic,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Js.prototype,n.la=8,n.G=1,n.connect=function(i,a,l,p){kt(0),this.W=i,this.H=a||{},l&&p!==void 0&&(this.H.OSID=l,this.H.OAID=p),this.F=this.X,this.I=ao(this,null,this.W),ur(this)};function oi(i){if(Zs(i),i.G==3){var a=i.U++,l=Xt(i.I);if(ot(l,"SID",i.K),ot(l,"RID",a),ot(l,"TYPE","terminate"),Rn(i,l),a=new oe(i,i.j,a),a.L=2,a.v=ir(Xt(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=a.v,l=!0),l||(a.g=uo(a.j,null),a.g.ea(a.v)),a.F=Date.now(),er(a)}oo(i)}function ar(i){i.g&&(ui(i),i.g.cancel(),i.g=null)}function Zs(i){ar(i),i.u&&(c.clearTimeout(i.u),i.u=null),cr(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&c.clearTimeout(i.s),i.s=null)}function ur(i){if(!ks(i.h)&&!i.s){i.s=!0;var a=i.Ga;ge||Xn(),_e||(ge(),_e=!0),un.add(a,i),i.B=0}}function cc(i,a){return Fs(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=a.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=mn(b(i.Ga,i,a),so(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const R=new oe(this,this.j,i);let V=this.o;if(this.S&&(V?(V=y(V),w(V,this.S)):V=this.S),this.m!==null||this.O||(R.H=V,V=null),this.P)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var p=this.i[l];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break e}p=void 0}if(p===void 0)break;if(a+=p,4096<a){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=eo(this,R,a),l=Xt(this.I),ot(l,"RID",i),ot(l,"CVER",22),this.D&&ot(l,"X-HTTP-Session-Id",this.D),Rn(this,l),V&&(this.O?a="headers="+encodeURIComponent(String(Ks(V)))+"&"+a:this.m&&si(l,this.m,V)),ii(this.h,R),this.Ua&&ot(l,"TYPE","init"),this.P?(ot(l,"$req",a),ot(l,"SID","null"),R.T=!0,ti(R,l,null)):ti(R,l,a),this.G=2}}else this.G==3&&(i?to(this,i):this.i.length==0||ks(this.h)||to(this))};function to(i,a){var l;a?l=a.l:l=i.U++;const p=Xt(i.I);ot(p,"SID",i.K),ot(p,"RID",l),ot(p,"AID",i.T),Rn(i,p),i.m&&i.o&&si(p,i.m,i.o),l=new oe(i,i.j,l,i.B+1),i.m===null&&(l.H=i.o),a&&(i.i=a.D.concat(i.i)),a=eo(i,l,1e3),l.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),ii(i.h,l),ti(l,p,a)}function Rn(i,a){i.H&&dt(i.H,function(l,p){ot(a,p,l)}),i.l&&Ls({},function(l,p){ot(a,p,l)})}function eo(i,a,l){l=Math.min(i.i.length,l);var p=i.l?b(i.l.Na,i.l,i):null;t:{var R=i.i;let V=-1;for(;;){const M=["count="+l];V==-1?0<l?(V=R[0].g,M.push("ofs="+V)):V=0:M.push("ofs="+V);let it=!0;for(let At=0;At<l;At++){let J=R[At].g;const Ct=R[At].map;if(J-=V,0>J)V=Math.max(0,R[At].g-100),it=!1;else try{sc(Ct,M,"req"+J+"_")}catch{p&&p(Ct)}}if(it){p=M.join("&");break t}}}return i=i.i.splice(0,l),a.D=i,p}function no(i){if(!i.g&&!i.u){i.Y=1;var a=i.Fa;ge||Xn(),_e||(ge(),_e=!0),un.add(a,i),i.v=0}}function ai(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=mn(b(i.Fa,i),so(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,ro(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=mn(b(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,kt(10),ar(this),ro(this))};function ui(i){i.A!=null&&(c.clearTimeout(i.A),i.A=null)}function ro(i){i.g=new oe(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var a=Xt(i.qa);ot(a,"RID","rpc"),ot(a,"SID",i.K),ot(a,"AID",i.T),ot(a,"CI",i.F?"0":"1"),!i.F&&i.ja&&ot(a,"TO",i.ja),ot(a,"TYPE","xmlhttp"),Rn(i,a),i.m&&i.o&&si(a,i.m,i.o),i.L&&(i.g.I=i.L);var l=i.g;i=i.ia,l.L=1,l.v=ir(Xt(a)),l.m=null,l.P=!0,bs(l,i)}n.Za=function(){this.C!=null&&(this.C=null,ar(this),ai(this),kt(19))};function cr(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function io(i,a){var l=null;if(i.g==a){cr(i),ui(i),i.g=null;var p=2}else if(ri(i.h,a))l=a.D,Ms(i.h,a),p=1;else return;if(i.G!=0){if(a.o)if(p==1){l=a.m?a.m.length:0,a=Date.now()-a.F;var R=i.B;p=Jn(),gt(p,new Ss(p,l)),ur(i)}else no(i);else if(R=a.s,R==3||R==0&&0<a.X||!(p==1&&cc(i,a)||p==2&&ai(i)))switch(l&&0<l.length&&(a=i.h,a.i=a.i.concat(l)),R){case 1:Re(i,5);break;case 4:Re(i,10);break;case 3:Re(i,6);break;default:Re(i,2)}}}function so(i,a){let l=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(l*=2),l*a}function Re(i,a){if(i.j.info("Error code "+a),a==2){var l=b(i.fb,i),p=i.Xa;const R=!p;p=new Ae(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||nr(p,"https"),ir(p),R?nc(p.toString(),l):rc(p.toString(),l)}else kt(2);i.G=0,i.l&&i.l.sa(a),oo(i),Zs(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),kt(2)):(this.j.info("Failed to ping google.com"),kt(1))};function oo(i){if(i.G=0,i.ka=[],i.l){const a=Os(i.h);(a.length!=0||i.i.length!=0)&&(O(i.ka,a),O(i.ka,i.i),i.h.i.length=0,B(i.i),i.i.length=0),i.l.ra()}}function ao(i,a,l){var p=l instanceof Ae?Xt(l):new Ae(l);if(p.g!="")a&&(p.g=a+"."+p.g),rr(p,p.s);else{var R=c.location;p=R.protocol,a=a?a+"."+R.hostname:R.hostname,R=+R.port;var V=new Ae(null);p&&nr(V,p),a&&(V.g=a),R&&rr(V,R),l&&(V.l=l),p=V}return l=i.D,a=i.ya,l&&a&&ot(p,l,a),ot(p,"VER",i.la),Rn(i,p),p}function uo(i,a,l){if(a&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=i.Ca&&!i.pa?new ct(new Tn({eb:l})):new ct(i.pa),a.Ha(i.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function co(){}n=co.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function hr(){}hr.prototype.g=function(i,a){return new Mt(i,a)};function Mt(i,a){K.call(this),this.g=new Js(a),this.l=i,this.h=a&&a.messageUrlParams||null,i=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(i?i["X-WebChannel-Content-Type"]=a.messageContentType:i={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(i?i["X-WebChannel-Client-Profile"]=a.va:i={"X-WebChannel-Client-Profile":a.va}),this.g.S=i,(i=a&&a.Sb)&&!et(i)&&(this.g.m=i),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!et(a)&&(this.g.D=a,i=this.h,i!==null&&a in i&&(i=this.h,a in i&&delete i[a])),this.j=new Be(this)}L(Mt,K),Mt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Mt.prototype.close=function(){oi(this.g)},Mt.prototype.o=function(i){var a=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.u&&(l={},l.__data__=Qr(i),i=l);a.i.push(new Ku(a.Ya++,i)),a.G==3&&ur(a)},Mt.prototype.N=function(){this.g.l=null,delete this.j,oi(this.g),delete this.g,Mt.aa.N.call(this)};function ho(i){Xr.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var a=i.__sm__;if(a){t:{for(const l in a){i=l;break t}i=void 0}(this.i=i)&&(i=this.i,a=a!==null&&i in a?a[i]:void 0),this.data=a}else this.data=i}L(ho,Xr);function lo(){Yr.call(this),this.status=1}L(lo,Yr);function Be(i){this.g=i}L(Be,co),Be.prototype.ua=function(){gt(this.g,"a")},Be.prototype.ta=function(i){gt(this.g,new ho(i))},Be.prototype.sa=function(i){gt(this.g,new lo)},Be.prototype.ra=function(){gt(this.g,"b")},hr.prototype.createWebChannel=hr.prototype.g,Mt.prototype.send=Mt.prototype.o,Mt.prototype.open=Mt.prototype.m,Mt.prototype.close=Mt.prototype.close,Aa=function(){return new hr},Ia=function(){return Jn()},wa=we,Pi={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Zn.NO_ERROR=0,Zn.TIMEOUT=8,Zn.HTTP_ERROR=6,_r=Zn,Ps.COMPLETE="complete",Ta=Ps,ws.EventType=dn,dn.OPEN="a",dn.CLOSE="b",dn.ERROR="c",dn.MESSAGE="d",K.prototype.listen=K.prototype.K,Pn=ws,va=Tn,ct.prototype.listenOnce=ct.prototype.L,ct.prototype.getLastError=ct.prototype.Ka,ct.prototype.getLastErrorCode=ct.prototype.Ba,ct.prototype.getStatus=ct.prototype.Z,ct.prototype.getResponseJson=ct.prototype.Oa,ct.prototype.getResponseText=ct.prototype.oa,ct.prototype.send=ct.prototype.ea,ct.prototype.setWithCredentials=ct.prototype.Ha,Ea=ct}).apply(typeof fr<"u"?fr:typeof self<"u"?self:typeof window<"u"?window:{});const Io="@firebase/firestore";/**
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
 */class Dt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Dt.UNAUTHENTICATED=new Dt(null),Dt.GOOGLE_CREDENTIALS=new Dt("google-credentials-uid"),Dt.FIRST_PARTY=new Dt("first-party-uid"),Dt.MOCK_USER=new Dt("mock-user");/**
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
 */let rn="10.12.3";/**
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
 */const xe=new fa("@firebase/firestore");function Sn(){return xe.logLevel}function U(n,...t){if(xe.logLevel<=X.DEBUG){const e=t.map($i);xe.debug(`Firestore (${rn}): ${n}`,...e)}}function te(n,...t){if(xe.logLevel<=X.ERROR){const e=t.map($i);xe.error(`Firestore (${rn}): ${n}`,...e)}}function We(n,...t){if(xe.logLevel<=X.WARN){const e=t.map($i);xe.warn(`Firestore (${rn}): ${n}`,...e)}}function $i(n){if(typeof n=="string")return n;try{/**
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
 */function $(n="Unexpected state"){const t=`FIRESTORE (${rn}) INTERNAL ASSERTION FAILED: `+n;throw te(t),new Error(t)}function st(n,t){n||$()}function G(n,t){return n}/**
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
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends nn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class fe{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class Ra{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Zh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Dt.UNAUTHENTICATED))}shutdown(){}}class tl{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class el{constructor(t){this.t=t,this.currentUser=Dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const s=d=>this.i!==r?(r=this.i,e(d)):Promise.resolve();let o=new fe;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new fe,t.enqueueRetryable(()=>s(this.currentUser))};const u=()=>{const d=o;t.enqueueRetryable(async()=>{await d.promise,await s(this.currentUser)})},c=d=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.auth.addAuthTokenListener(this.o),u()};this.t.onInit(d=>c(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?c(d):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new fe)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(st(typeof r.accessToken=="string"),new Ra(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return st(t===null||typeof t=="string"),new Dt(t)}}class nl{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=Dt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class rl{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new nl(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class il{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class sl{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=o=>{o.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,U("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(st(typeof e.token=="string"),this.R=e.token,new il(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function ol(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class Sa{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=ol(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%t.length))}return r}}function tt(n,t){return n<t?-1:n>t?1:0}function Xe(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
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
 */class Tt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new q(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new q(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new q(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new q(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Tt.fromMillis(Date.now())}static fromDate(t){return Tt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new Tt(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?tt(this.nanoseconds,t.nanoseconds):tt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class z{constructor(t){this.timestamp=t}static fromTimestamp(t){return new z(t)}static min(){return new z(new Tt(0,0))}static max(){return new z(new Tt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Mn{constructor(t,e,r){e===void 0?e=0:e>t.length&&$(),r===void 0?r=t.length-e:r>t.length-e&&$(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Mn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Mn?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=t.get(s),u=e.get(s);if(o<u)return-1;if(o>u)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class ht extends Mn{construct(t,e,r){return new ht(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new q(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new ht(e)}static emptyPath(){return new ht([])}}const al=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class St extends Mn{construct(t,e,r){return new St(t,e,r)}static isValidIdentifier(t){return al.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),St.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new St(["__name__"])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new q(k.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let u=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new q(k.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const d=t[s+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new q(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=d,s+=2}else c==="`"?(u=!u,s++):c!=="."||u?(r+=c,s++):(o(),s++)}if(o(),u)throw new q(k.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new St(e)}static emptyPath(){return new St([])}}/**
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
 */class j{constructor(t){this.path=t}static fromPath(t){return new j(ht.fromString(t))}static fromName(t){return new j(ht.fromString(t).popFirst(5))}static empty(){return new j(ht.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ht.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return ht.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new j(new ht(t.slice()))}}function ul(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=z.fromTimestamp(r===1e9?new Tt(e+1,0):new Tt(e,r));return new de(s,j.empty(),t)}function cl(n){return new de(n.readTime,n.key,-1)}class de{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new de(z.min(),j.empty(),-1)}static max(){return new de(z.max(),j.empty(),-1)}}function hl(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=j.comparator(n.documentKey,t.documentKey),e!==0?e:tt(n.largestBatchId,t.largestBatchId))}/**
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
 */const ll="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function zn(n){if(n.code!==k.FAILED_PRECONDITION||n.message!==ll)throw n;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class N{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&$(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new N((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof N?e:N.resolve(e)}catch(e){return N.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):N.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):N.reject(e)}static resolve(t){return new N((e,r)=>{e(t)})}static reject(t){return new N((e,r)=>{r(t)})}static waitFor(t){return new N((e,r)=>{let s=0,o=0,u=!1;t.forEach(c=>{++s,c.next(()=>{++o,u&&o===s&&e()},d=>r(d))}),u=!0,o===s&&e()})}static or(t){let e=N.resolve(!1);for(const r of t)e=e.next(s=>s?N.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new N((r,s)=>{const o=t.length,u=new Array(o);let c=0;for(let d=0;d<o;d++){const m=d;e(t[m]).next(v=>{u[m]=v,++c,c===o&&r(u)},v=>s(v))}})}static doWhile(t,e){return new N((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function dl(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Gn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class zi{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}zi.oe=-1;function Fr(n){return n==null}function Sr(n){return n===0&&1/n==-1/0}function pl(n){return typeof n=="number"&&Number.isInteger(n)&&!Sr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Ao(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function sn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Pa(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class ut{constructor(t,e){this.comparator=t,this.root=e||Rt.EMPTY}insert(t,e){return new ut(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Rt.BLACK,null,null))}remove(t){return new ut(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Rt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new dr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new dr(this.root,t,this.comparator,!1)}getReverseIterator(){return new dr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new dr(this.root,t,this.comparator,!0)}}class dr{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Rt{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??Rt.RED,this.left=s??Rt.EMPTY,this.right=o??Rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new Rt(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Rt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return Rt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw $();const t=this.left.check();if(t!==this.right.check())throw $();return t+(this.isRed()?0:1)}}Rt.EMPTY=null,Rt.RED=!0,Rt.BLACK=!1;Rt.EMPTY=new class{constructor(){this.size=0}get key(){throw $()}get value(){throw $()}get color(){throw $()}get left(){throw $()}get right(){throw $()}copy(t,e,r,s,o){return this}insert(t,e,r){return new Rt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Pt{constructor(t){this.comparator=t,this.data=new ut(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ro(this.data.getIterator())}getIteratorFrom(t){return new Ro(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof Pt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Pt(this.comparator);return e.data=t,e}}class Ro{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class qt{constructor(t){this.fields=t,t.sort(St.comparator)}static empty(){return new qt([])}unionWith(t){let e=new Pt(St.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new qt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Xe(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class Ca extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Nt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Ca("Invalid base64 string: "+o):o}}(t);return new Nt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let u=0;u<s.length;++u)o+=String.fromCharCode(s[u]);return o}(t);return new Nt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return tt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Nt.EMPTY_BYTE_STRING=new Nt("");const ml=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pe(n){if(st(!!n),typeof n=="string"){let t=0;const e=ml.exec(n);if(st(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:yt(n.seconds),nanos:yt(n.nanos)}}function yt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ne(n){return typeof n=="string"?Nt.fromBase64String(n):Nt.fromUint8Array(n)}/**
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
 */function Gi(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Ki(n){const t=n.mapValue.fields.__previous_value__;return Gi(t)?Ki(t):t}function On(n){const t=pe(n.mapValue.fields.__local_write_time__.timestampValue);return new Tt(t.seconds,t.nanos)}/**
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
 */class gl{constructor(t,e,r,s,o,u,c,d,m){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.longPollingOptions=d,this.useFetchStreams=m}}class Ln{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Ln("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ln&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const pr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ke(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Gi(n)?4:_l(n)?9007199254740991:10:$()}function Qt(n,t){if(n===t)return!0;const e=ke(n);if(e!==ke(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return On(n).isEqual(On(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const u=pe(s.timestampValue),c=pe(o.timestampValue);return u.seconds===c.seconds&&u.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return Ne(s.bytesValue).isEqual(Ne(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return yt(s.geoPointValue.latitude)===yt(o.geoPointValue.latitude)&&yt(s.geoPointValue.longitude)===yt(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return yt(s.integerValue)===yt(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const u=yt(s.doubleValue),c=yt(o.doubleValue);return u===c?Sr(u)===Sr(c):isNaN(u)&&isNaN(c)}return!1}(n,t);case 9:return Xe(n.arrayValue.values||[],t.arrayValue.values||[],Qt);case 10:return function(s,o){const u=s.mapValue.fields||{},c=o.mapValue.fields||{};if(Ao(u)!==Ao(c))return!1;for(const d in u)if(u.hasOwnProperty(d)&&(c[d]===void 0||!Qt(u[d],c[d])))return!1;return!0}(n,t);default:return $()}}function Un(n,t){return(n.values||[]).find(e=>Qt(e,t))!==void 0}function Ye(n,t){if(n===t)return 0;const e=ke(n),r=ke(t);if(e!==r)return tt(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return tt(n.booleanValue,t.booleanValue);case 2:return function(o,u){const c=yt(o.integerValue||o.doubleValue),d=yt(u.integerValue||u.doubleValue);return c<d?-1:c>d?1:c===d?0:isNaN(c)?isNaN(d)?0:-1:1}(n,t);case 3:return So(n.timestampValue,t.timestampValue);case 4:return So(On(n),On(t));case 5:return tt(n.stringValue,t.stringValue);case 6:return function(o,u){const c=Ne(o),d=Ne(u);return c.compareTo(d)}(n.bytesValue,t.bytesValue);case 7:return function(o,u){const c=o.split("/"),d=u.split("/");for(let m=0;m<c.length&&m<d.length;m++){const v=tt(c[m],d[m]);if(v!==0)return v}return tt(c.length,d.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,u){const c=tt(yt(o.latitude),yt(u.latitude));return c!==0?c:tt(yt(o.longitude),yt(u.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(o,u){const c=o.values||[],d=u.values||[];for(let m=0;m<c.length&&m<d.length;++m){const v=Ye(c[m],d[m]);if(v)return v}return tt(c.length,d.length)}(n.arrayValue,t.arrayValue);case 10:return function(o,u){if(o===pr.mapValue&&u===pr.mapValue)return 0;if(o===pr.mapValue)return 1;if(u===pr.mapValue)return-1;const c=o.fields||{},d=Object.keys(c),m=u.fields||{},v=Object.keys(m);d.sort(),v.sort();for(let C=0;C<d.length&&C<v.length;++C){const b=tt(d[C],v[C]);if(b!==0)return b;const D=Ye(c[d[C]],m[v[C]]);if(D!==0)return D}return tt(d.length,v.length)}(n.mapValue,t.mapValue);default:throw $()}}function So(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return tt(n,t);const e=pe(n),r=pe(t),s=tt(e.seconds,r.seconds);return s!==0?s:tt(e.nanos,r.nanos)}function Je(n){return Ci(n)}function Ci(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=pe(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Ne(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return j.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=Ci(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const u of r)o?o=!1:s+=",",s+=`${u}:${Ci(e.fields[u])}`;return s+"}"}(n.mapValue):$()}function Vi(n){return!!n&&"integerValue"in n}function Hi(n){return!!n&&"arrayValue"in n}function Po(n){return!!n&&"nullValue"in n}function Co(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function yr(n){return!!n&&"mapValue"in n}function bn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return sn(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=bn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=bn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function _l(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ut{constructor(t){this.value=t}static empty(){return new Ut({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!yr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=bn(e)}setAll(t){let e=St.emptyPath(),r={},s=[];t.forEach((u,c)=>{if(!e.isImmediateParentOf(c)){const d=this.getFieldsMap(e);this.applyChanges(d,r,s),r={},s=[],e=c.popLast()}u?r[c.lastSegment()]=bn(u):s.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());yr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Qt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];yr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){sn(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new Ut(bn(this.value))}}function Va(n){const t=[];return sn(n.fields,(e,r)=>{const s=new St([e]);if(yr(r)){const o=Va(r.mapValue).fields;if(o.length===0)t.push(s);else for(const u of o)t.push(s.child(u))}else t.push(s)}),new qt(t)}/**
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
 */class xt{constructor(t,e,r,s,o,u,c){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=u,this.documentState=c}static newInvalidDocument(t){return new xt(t,0,z.min(),z.min(),z.min(),Ut.empty(),0)}static newFoundDocument(t,e,r,s){return new xt(t,1,e,z.min(),r,s,0)}static newNoDocument(t,e){return new xt(t,2,e,z.min(),z.min(),Ut.empty(),0)}static newUnknownDocument(t,e){return new xt(t,3,e,z.min(),z.min(),Ut.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ut.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof xt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new xt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Pr{constructor(t,e){this.position=t,this.inclusive=e}}function Vo(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],u=n.position[s];if(o.field.isKeyField()?r=j.comparator(j.fromName(u.referenceValue),e.key):r=Ye(u,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function bo(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Qt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Cr{constructor(t,e="asc"){this.field=t,this.dir=e}}function yl(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class ba{}class vt extends ba{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new vl(t,e,r):e==="array-contains"?new Il(t,r):e==="in"?new Al(t,r):e==="not-in"?new Rl(t,r):e==="array-contains-any"?new Sl(t,r):new vt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Tl(t,r):new wl(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Ye(e,this.value)):e!==null&&ke(this.value)===ke(e)&&this.matchesComparison(Ye(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return $()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Wt extends ba{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Wt(t,e)}matches(t){return Da(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Da(n){return n.op==="and"}function xa(n){return El(n)&&Da(n)}function El(n){for(const t of n.filters)if(t instanceof Wt)return!1;return!0}function bi(n){if(n instanceof vt)return n.field.canonicalString()+n.op.toString()+Je(n.value);if(xa(n))return n.filters.map(t=>bi(t)).join(",");{const t=n.filters.map(e=>bi(e)).join(",");return`${n.op}(${t})`}}function Na(n,t){return n instanceof vt?function(r,s){return s instanceof vt&&r.op===s.op&&r.field.isEqual(s.field)&&Qt(r.value,s.value)}(n,t):n instanceof Wt?function(r,s){return s instanceof Wt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,u,c)=>o&&Na(u,s.filters[c]),!0):!1}(n,t):void $()}function ka(n){return n instanceof vt?function(e){return`${e.field.canonicalString()} ${e.op} ${Je(e.value)}`}(n):n instanceof Wt?function(e){return e.op.toString()+" {"+e.getFilters().map(ka).join(" ,")+"}"}(n):"Filter"}class vl extends vt{constructor(t,e,r){super(t,e,r),this.key=j.fromName(r.referenceValue)}matches(t){const e=j.comparator(t.key,this.key);return this.matchesComparison(e)}}class Tl extends vt{constructor(t,e){super(t,"in",e),this.keys=Fa("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class wl extends vt{constructor(t,e){super(t,"not-in",e),this.keys=Fa("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Fa(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>j.fromName(r.referenceValue))}class Il extends vt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Hi(e)&&Un(e.arrayValue,this.value)}}class Al extends vt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Un(this.value.arrayValue,e)}}class Rl extends vt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Un(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Un(this.value.arrayValue,e)}}class Sl extends vt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Hi(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Un(this.value.arrayValue,r))}}/**
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
 */class Pl{constructor(t,e=null,r=[],s=[],o=null,u=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=u,this.endAt=c,this.ue=null}}function Do(n,t=null,e=[],r=[],s=null,o=null,u=null){return new Pl(n,t,e,r,s,o,u)}function Qi(n){const t=G(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>bi(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Fr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Je(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Je(r)).join(",")),t.ue=e}return t.ue}function Wi(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!yl(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Na(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!bo(n.startAt,t.startAt)&&bo(n.endAt,t.endAt)}function Di(n){return j.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Mr{constructor(t,e=null,r=[],s=[],o=null,u="F",c=null,d=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=u,this.startAt=c,this.endAt=d,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Cl(n,t,e,r,s,o,u,c){return new Mr(n,t,e,r,s,o,u,c)}function Xi(n){return new Mr(n)}function xo(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Vl(n){return n.collectionGroup!==null}function Dn(n){const t=G(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let c=new Pt(St.comparator);return u.filters.forEach(d=>{d.getFlattenedFilters().forEach(m=>{m.isInequality()&&(c=c.add(m.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new Cr(o,r))}),e.has(St.keyField().canonicalString())||t.ce.push(new Cr(St.keyField(),r))}return t.ce}function Kt(n){const t=G(n);return t.le||(t.le=bl(t,Dn(n))),t.le}function bl(n,t){if(n.limitType==="F")return Do(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Cr(s.field,o)});const e=n.endAt?new Pr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Pr(n.startAt.position,n.startAt.inclusive):null;return Do(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function xi(n,t,e){return new Mr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Or(n,t){return Wi(Kt(n),Kt(t))&&n.limitType===t.limitType}function Ma(n){return`${Qi(Kt(n))}|lt:${n.limitType}`}function $e(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>ka(s)).join(", ")}]`),Fr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>Je(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>Je(s)).join(",")),`Target(${r})`}(Kt(n))}; limitType=${n.limitType})`}function Lr(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):j.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of Dn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(u,c,d){const m=Vo(u,c,d);return u.inclusive?m<=0:m<0}(r.startAt,Dn(r),s)||r.endAt&&!function(u,c,d){const m=Vo(u,c,d);return u.inclusive?m>=0:m>0}(r.endAt,Dn(r),s))}(n,t)}function Dl(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Oa(n){return(t,e)=>{let r=!1;for(const s of Dn(n)){const o=xl(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function xl(n,t,e){const r=n.field.isKeyField()?j.comparator(t.key,e.key):function(o,u,c){const d=u.data.field(o),m=c.data.field(o);return d!==null&&m!==null?Ye(d,m):$()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return $()}}/**
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
 */class on{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){sn(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return Pa(this.inner)}size(){return this.innerSize}}/**
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
 */const Nl=new ut(j.comparator);function ee(){return Nl}const La=new ut(j.comparator);function Cn(...n){let t=La;for(const e of n)t=t.insert(e.key,e);return t}function Ua(n){let t=La;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function Ce(){return xn()}function Ba(){return xn()}function xn(){return new on(n=>n.toString(),(n,t)=>n.isEqual(t))}const kl=new ut(j.comparator),Fl=new Pt(j.comparator);function H(...n){let t=Fl;for(const e of n)t=t.add(e);return t}const Ml=new Pt(tt);function Ol(){return Ml}/**
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
 */function ja(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Sr(t)?"-0":t}}function qa(n){return{integerValue:""+n}}function Ll(n,t){return pl(t)?qa(t):ja(n,t)}/**
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
 */class Ur{constructor(){this._=void 0}}function Ul(n,t,e){return n instanceof Vr?function(s,o){const u={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Gi(o)&&(o=Ki(o)),o&&(u.fields.__previous_value__=o),{mapValue:u}}(e,t):n instanceof Bn?za(n,t):n instanceof jn?Ga(n,t):function(s,o){const u=$a(s,o),c=No(u)+No(s.Pe);return Vi(u)&&Vi(s.Pe)?qa(c):ja(s.serializer,c)}(n,t)}function Bl(n,t,e){return n instanceof Bn?za(n,t):n instanceof jn?Ga(n,t):e}function $a(n,t){return n instanceof br?function(r){return Vi(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class Vr extends Ur{}class Bn extends Ur{constructor(t){super(),this.elements=t}}function za(n,t){const e=Ka(t);for(const r of n.elements)e.some(s=>Qt(s,r))||e.push(r);return{arrayValue:{values:e}}}class jn extends Ur{constructor(t){super(),this.elements=t}}function Ga(n,t){let e=Ka(t);for(const r of n.elements)e=e.filter(s=>!Qt(s,r));return{arrayValue:{values:e}}}class br extends Ur{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function No(n){return yt(n.integerValue||n.doubleValue)}function Ka(n){return Hi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function jl(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof Bn&&s instanceof Bn||r instanceof jn&&s instanceof jn?Xe(r.elements,s.elements,Qt):r instanceof br&&s instanceof br?Qt(r.Pe,s.Pe):r instanceof Vr&&s instanceof Vr}(n.transform,t.transform)}class ql{constructor(t,e){this.version=t,this.transformResults=e}}class Zt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Zt}static exists(t){return new Zt(void 0,t)}static updateTime(t){return new Zt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Er(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Br{}function Ha(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Wa(n.key,Zt.none()):new Kn(n.key,n.data,Zt.none());{const e=n.data,r=Ut.empty();let s=new Pt(St.comparator);for(let o of t.fields)if(!s.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?r.delete(o):r.set(o,u),s=s.add(o)}return new Fe(n.key,r,new qt(s.toArray()),Zt.none())}}function $l(n,t,e){n instanceof Kn?function(s,o,u){const c=s.value.clone(),d=Fo(s.fieldTransforms,o,u.transformResults);c.setAll(d),o.convertToFoundDocument(u.version,c).setHasCommittedMutations()}(n,t,e):n instanceof Fe?function(s,o,u){if(!Er(s.precondition,o))return void o.convertToUnknownDocument(u.version);const c=Fo(s.fieldTransforms,o,u.transformResults),d=o.data;d.setAll(Qa(s)),d.setAll(c),o.convertToFoundDocument(u.version,d).setHasCommittedMutations()}(n,t,e):function(s,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function Nn(n,t,e,r){return n instanceof Kn?function(o,u,c,d){if(!Er(o.precondition,u))return c;const m=o.value.clone(),v=Mo(o.fieldTransforms,d,u);return m.setAll(v),u.convertToFoundDocument(u.version,m).setHasLocalMutations(),null}(n,t,e,r):n instanceof Fe?function(o,u,c,d){if(!Er(o.precondition,u))return c;const m=Mo(o.fieldTransforms,d,u),v=u.data;return v.setAll(Qa(o)),v.setAll(m),u.convertToFoundDocument(u.version,v).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(C=>C.field))}(n,t,e,r):function(o,u,c){return Er(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):c}(n,t,e)}function zl(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=$a(r.transform,s||null);o!=null&&(e===null&&(e=Ut.empty()),e.set(r.field,o))}return e||null}function ko(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Xe(r,s,(o,u)=>jl(o,u))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Kn extends Br{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Fe extends Br{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Qa(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Fo(n,t,e){const r=new Map;st(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],u=o.transform,c=t.data.field(o.field);r.set(o.field,Bl(u,c,e[s]))}return r}function Mo(n,t,e){const r=new Map;for(const s of n){const o=s.transform,u=e.data.field(s.field);r.set(s.field,Ul(o,u,t))}return r}class Wa extends Br{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Gl extends Br{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Kl{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&$l(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Nn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Nn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Ba();return this.mutations.forEach(s=>{const o=t.get(s.key),u=o.overlayedDocument;let c=this.applyToLocalView(u,o.mutatedFields);c=e.has(s.key)?null:c;const d=Ha(u,c);d!==null&&r.set(s.key,d),u.isValidDocument()||u.convertToNoDocument(z.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),H())}isEqual(t){return this.batchId===t.batchId&&Xe(this.mutations,t.mutations,(e,r)=>ko(e,r))&&Xe(this.baseMutations,t.baseMutations,(e,r)=>ko(e,r))}}class Yi{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){st(t.mutations.length===r.length);let s=function(){return kl}();const o=t.mutations;for(let u=0;u<o.length;u++)s=s.insert(o[u].key,r[u].version);return new Yi(t,e,r,s)}}/**
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
 */class Hl{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Ql{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var _t,W;function Wl(n){switch(n){default:return $();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function Xa(n){if(n===void 0)return te("GRPC error has no .code"),k.UNKNOWN;switch(n){case _t.OK:return k.OK;case _t.CANCELLED:return k.CANCELLED;case _t.UNKNOWN:return k.UNKNOWN;case _t.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case _t.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case _t.INTERNAL:return k.INTERNAL;case _t.UNAVAILABLE:return k.UNAVAILABLE;case _t.UNAUTHENTICATED:return k.UNAUTHENTICATED;case _t.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case _t.NOT_FOUND:return k.NOT_FOUND;case _t.ALREADY_EXISTS:return k.ALREADY_EXISTS;case _t.PERMISSION_DENIED:return k.PERMISSION_DENIED;case _t.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case _t.ABORTED:return k.ABORTED;case _t.OUT_OF_RANGE:return k.OUT_OF_RANGE;case _t.UNIMPLEMENTED:return k.UNIMPLEMENTED;case _t.DATA_LOSS:return k.DATA_LOSS;default:return $()}}(W=_t||(_t={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Xl(){return new TextEncoder}/**
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
 */const Yl=new Ve([4294967295,4294967295],0);function Oo(n){const t=Xl().encode(n),e=new ya;return e.update(t),new Uint8Array(e.digest())}function Lo(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Ve([e,r],0),new Ve([s,o],0)]}class Ji{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Vn(`Invalid padding: ${e}`);if(r<0)throw new Vn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Vn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Vn(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Ve.fromNumber(this.Ie)}Ee(t,e,r){let s=t.add(e.multiply(Ve.fromNumber(r)));return s.compare(Yl)===1&&(s=new Ve([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Oo(t),[r,s]=Lo(e);for(let o=0;o<this.hashCount;o++){const u=this.Ee(r,s,o);if(!this.de(u))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),u=new Ji(o,s,e);return r.forEach(c=>u.insert(c)),u}insert(t){if(this.Ie===0)return;const e=Oo(t),[r,s]=Lo(e);for(let o=0;o<this.hashCount;o++){const u=this.Ee(r,s,o);this.Ae(u)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Vn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class jr{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,Hn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new jr(z.min(),s,new ut(tt),ee(),H())}}class Hn{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Hn(r,e,H(),H(),H())}}/**
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
 */class vr{constructor(t,e,r,s){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=s}}class Ya{constructor(t,e){this.targetId=t,this.me=e}}class Ja{constructor(t,e,r=Nt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class Uo{constructor(){this.fe=0,this.ge=jo(),this.pe=Nt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}Ce(){let t=H(),e=H(),r=H();return this.ge.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:$()}}),new Hn(this.pe,this.ye,t,e,r)}ve(){this.we=!1,this.ge=jo()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,st(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Jl{constructor(t){this.Le=t,this.Be=new Map,this.ke=ee(),this.qe=Bo(),this.Qe=new ut(tt)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:$()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,s)=>{this.ze(s)&&e(s)})}He(t){const e=t.targetId,r=t.me.count,s=this.Je(e);if(s){const o=s.target;if(Di(o))if(r===0){const u=new j(o.path);this.Ue(e,u,xt.newNoDocument(u,z.min()))}else st(r===1);else{const u=this.Ye(e);if(u!==r){const c=this.Ze(t),d=c?this.Xe(c,t,u):1;if(d!==0){this.je(e);const m=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,m)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let u,c;try{u=Ne(r).toUint8Array()}catch(d){if(d instanceof Ca)return We("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{c=new Ji(u,s,o)}catch(d){return We(d instanceof Vn?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return c.Ie===0?null:c}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const u=this.Le.tt(),c=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.Ue(e,o,null),s++)}),s}rt(t){const e=new Map;this.Be.forEach((o,u)=>{const c=this.Je(u);if(c){if(o.current&&Di(c.target)){const d=new j(c.target.path);this.ke.get(d)!==null||this.it(u,d)||this.Ue(u,d,xt.newNoDocument(d,t))}o.be&&(e.set(u,o.Ce()),o.ve())}});let r=H();this.qe.forEach((o,u)=>{let c=!0;u.forEachWhile(d=>{const m=this.Je(d);return!m||m.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(o))}),this.ke.forEach((o,u)=>u.setReadTime(t));const s=new jr(t,e,this.Qe,this.ke,r);return this.ke=ee(),this.qe=Bo(),this.Qe=new ut(tt),s}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).Ce();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Uo,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new Pt(tt),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||U("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Uo),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Bo(){return new ut(j.comparator)}function jo(){return new ut(j.comparator)}const Zl=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),tf=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),ef=(()=>({and:"AND",or:"OR"}))();class nf{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ni(n,t){return n.useProto3Json||Fr(t)?t:{value:t}}function Dr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Za(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function rf(n,t){return Dr(n,t.toTimestamp())}function Ht(n){return st(!!n),z.fromTimestamp(function(e){const r=pe(e);return new Tt(r.seconds,r.nanos)}(n))}function Zi(n,t){return ki(n,t).canonicalString()}function ki(n,t){const e=function(s){return new ht(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function tu(n){const t=ht.fromString(n);return st(su(t)),t}function Fi(n,t){return Zi(n.databaseId,t.path)}function mi(n,t){const e=tu(t);if(e.get(1)!==n.databaseId.projectId)throw new q(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new q(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new j(nu(e))}function eu(n,t){return Zi(n.databaseId,t)}function sf(n){const t=tu(n);return t.length===4?ht.emptyPath():nu(t)}function Mi(n){return new ht(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function nu(n){return st(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function qo(n,t,e){return{name:Fi(n,t),fields:e.value.mapValue.fields}}function of(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:$()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(m,v){return m.useProto3Json?(st(v===void 0||typeof v=="string"),Nt.fromBase64String(v||"")):(st(v===void 0||v instanceof ra.Buffer||v instanceof Uint8Array),Nt.fromUint8Array(v||new Uint8Array))}(n,t.targetChange.resumeToken),u=t.targetChange.cause,c=u&&function(m){const v=m.code===void 0?k.UNKNOWN:Xa(m.code);return new q(v,m.message||"")}(u);e=new Ja(r,s,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=mi(n,r.document.name),o=Ht(r.document.updateTime),u=r.document.createTime?Ht(r.document.createTime):z.min(),c=new Ut({mapValue:{fields:r.document.fields}}),d=xt.newFoundDocument(s,o,u,c),m=r.targetIds||[],v=r.removedTargetIds||[];e=new vr(m,v,d.key,d)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=mi(n,r.document),o=r.readTime?Ht(r.readTime):z.min(),u=xt.newNoDocument(s,o),c=r.removedTargetIds||[];e=new vr([],c,u.key,u)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=mi(n,r.document),o=r.removedTargetIds||[];e=new vr([],o,s,null)}else{if(!("filter"in t))return $();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,u=new Ql(s,o),c=r.targetId;e=new Ya(c,u)}}return e}function af(n,t){let e;if(t instanceof Kn)e={update:qo(n,t.key,t.value)};else if(t instanceof Wa)e={delete:Fi(n,t.key)};else if(t instanceof Fe)e={update:qo(n,t.key,t.data),updateMask:gf(t.fieldMask)};else{if(!(t instanceof Gl))return $();e={verify:Fi(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,u){const c=u.transform;if(c instanceof Vr)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Bn)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof jn)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof br)return{fieldPath:u.field.canonicalString(),increment:c.Pe};throw $()}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:rf(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:$()}(n,t.precondition)),e}function uf(n,t){return n&&n.length>0?(st(t!==void 0),n.map(e=>function(s,o){let u=s.updateTime?Ht(s.updateTime):Ht(o);return u.isEqual(z.min())&&(u=Ht(o)),new ql(u,s.transformResults||[])}(e,t))):[]}function cf(n,t){return{documents:[eu(n,t.path)]}}function hf(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=eu(n,s);const o=function(m){if(m.length!==0)return iu(Wt.create(m,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const u=function(m){if(m.length!==0)return m.map(v=>function(b){return{field:ze(b.field),direction:df(b.dir)}}(v))}(t.orderBy);u&&(e.structuredQuery.orderBy=u);const c=Ni(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(m){return{before:m.inclusive,values:m.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(m){return{before:!m.inclusive,values:m.position}}(t.endAt)),{_t:e,parent:s}}function lf(n){let t=sf(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){st(r===1);const v=e.from[0];v.allDescendants?s=v.collectionId:t=t.child(v.collectionId)}let o=[];e.where&&(o=function(C){const b=ru(C);return b instanceof Wt&&xa(b)?b.getFilters():[b]}(e.where));let u=[];e.orderBy&&(u=function(C){return C.map(b=>function(L){return new Cr(Ge(L.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(L.direction))}(b))}(e.orderBy));let c=null;e.limit&&(c=function(C){let b;return b=typeof C=="object"?C.value:C,Fr(b)?null:b}(e.limit));let d=null;e.startAt&&(d=function(C){const b=!!C.before,D=C.values||[];return new Pr(D,b)}(e.startAt));let m=null;return e.endAt&&(m=function(C){const b=!C.before,D=C.values||[];return new Pr(D,b)}(e.endAt)),Cl(t,s,u,o,c,"F",d,m)}function ff(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return $()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function ru(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Ge(e.unaryFilter.field);return vt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ge(e.unaryFilter.field);return vt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Ge(e.unaryFilter.field);return vt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Ge(e.unaryFilter.field);return vt.create(u,"!=",{nullValue:"NULL_VALUE"});default:return $()}}(n):n.fieldFilter!==void 0?function(e){return vt.create(Ge(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return $()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Wt.create(e.compositeFilter.filters.map(r=>ru(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return $()}}(e.compositeFilter.op))}(n):$()}function df(n){return Zl[n]}function pf(n){return tf[n]}function mf(n){return ef[n]}function ze(n){return{fieldPath:n.canonicalString()}}function Ge(n){return St.fromServerFormat(n.fieldPath)}function iu(n){return n instanceof vt?function(e){if(e.op==="=="){if(Co(e.value))return{unaryFilter:{field:ze(e.field),op:"IS_NAN"}};if(Po(e.value))return{unaryFilter:{field:ze(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Co(e.value))return{unaryFilter:{field:ze(e.field),op:"IS_NOT_NAN"}};if(Po(e.value))return{unaryFilter:{field:ze(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ze(e.field),op:pf(e.op),value:e.value}}}(n):n instanceof Wt?function(e){const r=e.getFilters().map(s=>iu(s));return r.length===1?r[0]:{compositeFilter:{op:mf(e.op),filters:r}}}(n):$()}function gf(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function su(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class ce{constructor(t,e,r,s,o=z.min(),u=z.min(),c=Nt.EMPTY_BYTE_STRING,d=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=c,this.expectedCount=d}withSequenceNumber(t){return new ce(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new ce(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new ce(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new ce(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class _f{constructor(t){this.ct=t}}function yf(n){const t=lf({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?xi(t,t.limit,"L"):t}/**
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
 */class Ef{constructor(){this._n=new vf}addToCollectionParentIndex(t,e){return this._n.add(e),N.resolve()}getCollectionParents(t,e){return N.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return N.resolve()}deleteFieldIndex(t,e){return N.resolve()}deleteAllFieldIndexes(t){return N.resolve()}createTargetIndexes(t,e){return N.resolve()}getDocumentsMatchingTarget(t,e){return N.resolve(null)}getIndexType(t,e){return N.resolve(0)}getFieldIndexes(t,e){return N.resolve([])}getNextCollectionGroupToUpdate(t){return N.resolve(null)}getMinOffset(t,e){return N.resolve(de.min())}getMinOffsetFromCollectionGroup(t,e){return N.resolve(de.min())}updateCollectionGroup(t,e,r){return N.resolve()}updateIndexEntries(t,e){return N.resolve()}}class vf{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new Pt(ht.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new Pt(ht.comparator)).toArray()}}/**
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
 */class Ze{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Ze(0)}static Ln(){return new Ze(-1)}}/**
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
 */class Tf{constructor(){this.changes=new on(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,xt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?N.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class wf{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class If{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&Nn(r.mutation,s,qt.empty(),Tt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,H()).next(()=>r))}getLocalViewOfDocuments(t,e,r=H()){const s=Ce();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let u=Cn();return o.forEach((c,d)=>{u=u.insert(c,d.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const r=Ce();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,H()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((u,c)=>{e.set(u,c)})})}computeViews(t,e,r,s){let o=ee();const u=xn(),c=function(){return xn()}();return e.forEach((d,m)=>{const v=r.get(m.key);s.has(m.key)&&(v===void 0||v.mutation instanceof Fe)?o=o.insert(m.key,m):v!==void 0?(u.set(m.key,v.mutation.getFieldMask()),Nn(v.mutation,m,v.mutation.getFieldMask(),Tt.now())):u.set(m.key,qt.empty())}),this.recalculateAndSaveOverlays(t,o).next(d=>(d.forEach((m,v)=>u.set(m,v)),e.forEach((m,v)=>{var C;return c.set(m,new wf(v,(C=u.get(m))!==null&&C!==void 0?C:null))}),c))}recalculateAndSaveOverlays(t,e){const r=xn();let s=new ut((u,c)=>u-c),o=H();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const c of u)c.keys().forEach(d=>{const m=e.get(d);if(m===null)return;let v=r.get(d)||qt.empty();v=c.applyToLocalView(m,v),r.set(d,v);const C=(s.get(c.batchId)||H()).add(d);s=s.insert(c.batchId,C)})}).next(()=>{const u=[],c=s.getReverseIterator();for(;c.hasNext();){const d=c.getNext(),m=d.key,v=d.value,C=Ba();v.forEach(b=>{if(!o.has(b)){const D=Ha(e.get(b),r.get(b));D!==null&&C.set(b,D),o=o.add(b)}}),u.push(this.documentOverlayCache.saveOverlays(t,m,C))}return N.waitFor(u)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(u){return j.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Vl(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const u=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):N.resolve(Ce());let c=-1,d=o;return u.next(m=>N.forEach(m,(v,C)=>(c<C.largestBatchId&&(c=C.largestBatchId),o.get(v)?N.resolve():this.remoteDocumentCache.getEntry(t,v).next(b=>{d=d.insert(v,b)}))).next(()=>this.populateOverlays(t,m,o)).next(()=>this.computeViews(t,d,m,H())).next(v=>({batchId:c,changes:Ua(v)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new j(e)).next(r=>{let s=Cn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let u=Cn();return this.indexManager.getCollectionParents(t,o).next(c=>N.forEach(c,d=>{const m=function(C,b){return new Mr(b,null,C.explicitOrderBy.slice(),C.filters.slice(),C.limit,C.limitType,C.startAt,C.endAt)}(e,d.child(o));return this.getDocumentsMatchingCollectionQuery(t,m,r,s).next(v=>{v.forEach((C,b)=>{u=u.insert(C,b)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(u=>{o.forEach((d,m)=>{const v=m.getKey();u.get(v)===null&&(u=u.insert(v,xt.newInvalidDocument(v)))});let c=Cn();return u.forEach((d,m)=>{const v=o.get(d);v!==void 0&&Nn(v.mutation,m,qt.empty(),Tt.now()),Lr(e,m)&&(c=c.insert(d,m))}),c})}}/**
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
 */class Af{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return N.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Ht(s.createTime)}}(e)),N.resolve()}getNamedQuery(t,e){return N.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(s){return{name:s.name,query:yf(s.bundledQuery),readTime:Ht(s.readTime)}}(e)),N.resolve()}}/**
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
 */class Rf{constructor(){this.overlays=new ut(j.comparator),this.hr=new Map}getOverlay(t,e){return N.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Ce();return N.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.ht(t,e,o)}),N.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.hr.delete(r)),N.resolve()}getOverlaysForCollection(t,e,r){const s=Ce(),o=e.length+1,u=new j(e.child("")),c=this.overlays.getIteratorFrom(u);for(;c.hasNext();){const d=c.getNext().value,m=d.getKey();if(!e.isPrefixOf(m.path))break;m.path.length===o&&d.largestBatchId>r&&s.set(d.getKey(),d)}return N.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new ut((m,v)=>m-v);const u=this.overlays.getIterator();for(;u.hasNext();){const m=u.getNext().value;if(m.getKey().getCollectionGroup()===e&&m.largestBatchId>r){let v=o.get(m.largestBatchId);v===null&&(v=Ce(),o=o.insert(m.largestBatchId,v)),v.set(m.getKey(),m)}}const c=Ce(),d=o.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((m,v)=>c.set(m,v)),!(c.size()>=s)););return N.resolve(c)}ht(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const u=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new Hl(e,r));let o=this.hr.get(e);o===void 0&&(o=H(),this.hr.set(e,o)),this.hr.set(e,o.add(r.key))}}/**
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
 */class ts{constructor(){this.Pr=new Pt(wt.Ir),this.Tr=new Pt(wt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const r=new wt(t,e);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Ar(new wt(t,e))}Rr(t,e){t.forEach(r=>this.removeReference(r,e))}Vr(t){const e=new j(new ht([])),r=new wt(e,t),s=new wt(e,t+1),o=[];return this.Tr.forEachInRange([r,s],u=>{this.Ar(u),o.push(u.key)}),o}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new j(new ht([])),r=new wt(e,t),s=new wt(e,t+1);let o=H();return this.Tr.forEachInRange([r,s],u=>{o=o.add(u.key)}),o}containsKey(t){const e=new wt(t,0),r=this.Pr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class wt{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return j.comparator(t.key,e.key)||tt(t.pr,e.pr)}static Er(t,e){return tt(t.pr,e.pr)||j.comparator(t.key,e.key)}}/**
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
 */class Sf{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new Pt(wt.Ir)}checkEmpty(t){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new Kl(o,e,r,s);this.mutationQueue.push(u);for(const c of s)this.wr=this.wr.add(new wt(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return N.resolve(u)}lookupMutationBatch(t,e){return N.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.br(r),o=s<0?0:s;return N.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new wt(e,0),s=new wt(e,Number.POSITIVE_INFINITY),o=[];return this.wr.forEachInRange([r,s],u=>{const c=this.Sr(u.pr);o.push(c)}),N.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new Pt(tt);return e.forEach(s=>{const o=new wt(s,0),u=new wt(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([o,u],c=>{r=r.add(c.pr)})}),N.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;j.isDocumentKey(o)||(o=o.child(""));const u=new wt(new j(o),0);let c=new Pt(tt);return this.wr.forEachWhile(d=>{const m=d.key.path;return!!r.isPrefixOf(m)&&(m.length===s&&(c=c.add(d.pr)),!0)},u),N.resolve(this.Dr(c))}Dr(t){const e=[];return t.forEach(r=>{const s=this.Sr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){st(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return N.forEach(e.mutations,s=>{const o=new wt(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,e){const r=new wt(e,0),s=this.wr.firstAfterOrEqual(r);return N.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,N.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Pf{constructor(t){this.vr=t,this.docs=function(){return new ut(j.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,u=this.vr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return N.resolve(r?r.document.mutableCopy():xt.newInvalidDocument(e))}getEntries(t,e){let r=ee();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():xt.newInvalidDocument(s))}),N.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=ee();const u=e.path,c=new j(u.child("")),d=this.docs.getIteratorFrom(c);for(;d.hasNext();){const{key:m,value:{document:v}}=d.getNext();if(!u.isPrefixOf(m.path))break;m.path.length>u.length+1||hl(cl(v),r)<=0||(s.has(v.key)||Lr(e,v))&&(o=o.insert(v.key,v.mutableCopy()))}return N.resolve(o)}getAllFromCollectionGroup(t,e,r,s){$()}Fr(t,e){return N.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Cf(this)}getSize(t){return N.resolve(this.size)}}class Cf extends Tf{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.ar.addEntry(t,s)):this.ar.removeEntry(r)}),N.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
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
 */class Vf{constructor(t){this.persistence=t,this.Mr=new on(e=>Qi(e),Wi),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.Or=0,this.Nr=new ts,this.targetCount=0,this.Lr=Ze.Nn()}forEachTarget(t,e){return this.Mr.forEach((r,s)=>e(s)),N.resolve()}getLastRemoteSnapshotVersion(t){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return N.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Or&&(this.Or=e),N.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new Ze(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,N.resolve()}updateTargetData(t,e){return this.qn(e),N.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,N.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.Mr.forEach((u,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.Mr.delete(u),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),N.waitFor(o).next(()=>s)}getTargetCount(t){return N.resolve(this.targetCount)}getTargetData(t,e){const r=this.Mr.get(e)||null;return N.resolve(r)}addMatchingKeys(t,e,r){return this.Nr.dr(e,r),N.resolve()}removeMatchingKeys(t,e,r){this.Nr.Rr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(u=>{o.push(s.markPotentiallyOrphaned(t,u))}),N.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),N.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Nr.gr(e);return N.resolve(r)}containsKey(t,e){return N.resolve(this.Nr.containsKey(e))}}/**
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
 */class bf{constructor(t,e){this.Br={},this.overlays={},this.kr=new zi(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new Vf(this),this.indexManager=new Ef,this.remoteDocumentCache=function(s){return new Pf(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new _f(e),this.$r=new Af(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Rf,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Br[t.toKey()];return r||(r=new Sf(e,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,r){U("MemoryPersistence","Starting transaction:",t);const s=new Df(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(o=>this.referenceDelegate.Wr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Gr(t,e){return N.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,e)))}}class Df extends fl{constructor(t){super(),this.currentSequenceNumber=t}}class es{constructor(t){this.persistence=t,this.zr=new ts,this.jr=null}static Hr(t){return new es(t)}get Jr(){if(this.jr)return this.jr;throw $()}addReference(t,e,r){return this.zr.addReference(r,e),this.Jr.delete(r.toString()),N.resolve()}removeReference(t,e,r){return this.zr.removeReference(r,e),this.Jr.add(r.toString()),N.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),N.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Jr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.Jr,r=>{const s=j.fromPath(r);return this.Yr(t,s).next(o=>{o||e.removeEntry(s,z.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(r=>{r?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return N.or([()=>N.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
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
 */class ns{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.qi=r,this.Qi=s}static Ki(t,e){let r=H(),s=H();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new ns(t,e.fromCache,r,s)}}/**
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
 */class xf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Nf{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Mc()?8:dl(kc())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.ji(t,e).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.Hi(t,e,s,r).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new xf;return this.Ji(t,e,u).next(c=>{if(o.result=c,this.Ui)return this.Yi(t,e,u,c.size)})}).next(()=>o.result)}Yi(t,e,r,s){return r.documentReadCount<this.Wi?(Sn()<=X.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",$e(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),N.resolve()):(Sn()<=X.DEBUG&&U("QueryEngine","Query:",$e(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(Sn()<=X.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",$e(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Kt(e))):N.resolve())}ji(t,e){if(xo(e))return N.resolve(null);let r=Kt(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=xi(e,null,"F"),r=Kt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const u=H(...o);return this.zi.getDocuments(t,u).next(c=>this.indexManager.getMinOffset(t,r).next(d=>{const m=this.Zi(e,c);return this.Xi(e,m,u,d.readTime)?this.ji(t,xi(e,null,"F")):this.es(t,m,e,d)}))})))}Hi(t,e,r,s){return xo(e)||s.isEqual(z.min())?N.resolve(null):this.zi.getDocuments(t,r).next(o=>{const u=this.Zi(e,o);return this.Xi(e,u,r,s)?N.resolve(null):(Sn()<=X.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),$e(e)),this.es(t,u,e,ul(s,-1)).next(c=>c))})}Zi(t,e){let r=new Pt(Oa(t));return e.forEach((s,o)=>{Lr(t,o)&&(r=r.add(o))}),r}Xi(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Ji(t,e,r){return Sn()<=X.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",$e(e)),this.zi.getDocumentsMatchingQuery(t,e,de.min(),r)}es(t,e,r,s){return this.zi.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
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
 */class kf{constructor(t,e,r,s){this.persistence=t,this.ts=e,this.serializer=s,this.ns=new ut(tt),this.rs=new on(o=>Qi(o),Wi),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new If(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function Ff(n,t,e,r){return new kf(n,t,e,r)}async function ou(n,t){const e=G(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e._s(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const u=[],c=[];let d=H();for(const m of s){u.push(m.batchId);for(const v of m.mutations)d=d.add(v.key)}for(const m of o){c.push(m.batchId);for(const v of m.mutations)d=d.add(v.key)}return e.localDocuments.getDocuments(r,d).next(m=>({us:m,removedBatchIds:u,addedBatchIds:c}))})})}function Mf(n,t){const e=G(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.os.newChangeBuffer({trackRemovals:!0});return function(c,d,m,v){const C=m.batch,b=C.keys();let D=N.resolve();return b.forEach(L=>{D=D.next(()=>v.getEntry(d,L)).next(B=>{const O=m.docVersions.get(L);st(O!==null),B.version.compareTo(O)<0&&(C.applyToRemoteDocument(B,m),B.isValidDocument()&&(B.setReadTime(m.commitVersion),v.addEntry(B)))})}),D.next(()=>c.mutationQueue.removeMutationBatch(d,C))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let d=H();for(let m=0;m<c.mutationResults.length;++m)c.mutationResults[m].transformResults.length>0&&(d=d.add(c.batch.mutations[m].key));return d}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function au(n){const t=G(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function Of(n,t){const e=G(n),r=t.snapshotVersion;let s=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=e.os.newChangeBuffer({trackRemovals:!0});s=e.ns;const c=[];t.targetChanges.forEach((v,C)=>{const b=s.get(C);if(!b)return;c.push(e.Qr.removeMatchingKeys(o,v.removedDocuments,C).next(()=>e.Qr.addMatchingKeys(o,v.addedDocuments,C)));let D=b.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(C)!==null?D=D.withResumeToken(Nt.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):v.resumeToken.approximateByteSize()>0&&(D=D.withResumeToken(v.resumeToken,r)),s=s.insert(C,D),function(B,O,Y){return B.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-B.snapshotVersion.toMicroseconds()>=3e8?!0:Y.addedDocuments.size+Y.modifiedDocuments.size+Y.removedDocuments.size>0}(b,D,v)&&c.push(e.Qr.updateTargetData(o,D))});let d=ee(),m=H();if(t.documentUpdates.forEach(v=>{t.resolvedLimboDocuments.has(v)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,v))}),c.push(Lf(o,u,t.documentUpdates).next(v=>{d=v.cs,m=v.ls})),!r.isEqual(z.min())){const v=e.Qr.getLastRemoteSnapshotVersion(o).next(C=>e.Qr.setTargetsMetadata(o,o.currentSequenceNumber,r));c.push(v)}return N.waitFor(c).next(()=>u.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,d,m)).next(()=>d)}).then(o=>(e.ns=s,o))}function Lf(n,t,e){let r=H(),s=H();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let u=ee();return e.forEach((c,d)=>{const m=o.get(c);d.isFoundDocument()!==m.isFoundDocument()&&(s=s.add(c)),d.isNoDocument()&&d.version.isEqual(z.min())?(t.removeEntry(c,d.readTime),u=u.insert(c,d)):!m.isValidDocument()||d.version.compareTo(m.version)>0||d.version.compareTo(m.version)===0&&m.hasPendingWrites?(t.addEntry(d),u=u.insert(c,d)):U("LocalStore","Ignoring outdated watch update for ",c,". Current version:",m.version," Watch version:",d.version)}),{cs:u,ls:s}})}function Uf(n,t){const e=G(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Bf(n,t){const e=G(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Qr.getTargetData(r,t).next(o=>o?(s=o,N.resolve(s)):e.Qr.allocateTargetId(r).next(u=>(s=new ce(t,u,"TargetPurposeListen",r.currentSequenceNumber),e.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.ns=e.ns.insert(r.targetId,r),e.rs.set(t,r.targetId)),r})}async function Oi(n,t,e){const r=G(n),s=r.ns.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,u=>r.persistence.referenceDelegate.removeTarget(u,s))}catch(u){if(!Gn(u))throw u;U("LocalStore",`Failed to update sequence numbers for target ${t}: ${u}`)}r.ns=r.ns.remove(t),r.rs.delete(s.target)}function $o(n,t,e){const r=G(n);let s=z.min(),o=H();return r.persistence.runTransaction("Execute query","readwrite",u=>function(d,m,v){const C=G(d),b=C.rs.get(v);return b!==void 0?N.resolve(C.ns.get(b)):C.Qr.getTargetData(m,v)}(r,u,Kt(t)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(u,c.targetId).next(d=>{o=d})}).next(()=>r.ts.getDocumentsMatchingQuery(u,t,e?s:z.min(),e?o:H())).next(c=>(jf(r,Dl(t),c),{documents:c,hs:o})))}function jf(n,t,e){let r=n.ss.get(t)||z.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.ss.set(t,r)}class zo{constructor(){this.activeTargetIds=Ol()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class qf{constructor(){this.no=new zo,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,r){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new zo,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class $f{io(t){}shutdown(){}}/**
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
 */class Go{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let mr=null;function gi(){return mr===null?mr=function(){return 268435456+Math.round(2147483648*Math.random())}():mr++,"0x"+mr.toString(16)}/**
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
 */const zf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Gf{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}Ao(t){this.Ro=t}onMessage(t){this.Vo=t}close(){this.ho()}send(t){this.lo(t)}mo(){this.Io()}fo(){this.Eo()}po(t){this.Ro(t)}yo(t){this.Vo(t)}}/**
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
 */const bt="WebChannelConnection";class Kf extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+e.host,this.So=`projects/${s}/databases/${o}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Do(){return!1}Co(e,r,s,o,u){const c=gi(),d=this.vo(e,r.toUriEncodedString());U("RestConnection",`Sending RPC '${e}' ${c}:`,d,s);const m={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(m,o,u),this.Mo(e,d,m,s).then(v=>(U("RestConnection",`Received RPC '${e}' ${c}: `,v),v),v=>{throw We("RestConnection",`RPC '${e}' ${c} failed with error: `,v,"url: ",d,"request:",s),v})}xo(e,r,s,o,u,c){return this.Co(e,r,s,o,u)}Fo(e,r,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+rn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}vo(e,r){const s=zf[e];return`${this.wo}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Mo(t,e,r,s){const o=gi();return new Promise((u,c)=>{const d=new Ea;d.setWithCredentials(!0),d.listenOnce(Ta.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case _r.NO_ERROR:const v=d.getResponseJson();U(bt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(v)),u(v);break;case _r.TIMEOUT:U(bt,`RPC '${t}' ${o} timed out`),c(new q(k.DEADLINE_EXCEEDED,"Request time out"));break;case _r.HTTP_ERROR:const C=d.getStatus();if(U(bt,`RPC '${t}' ${o} failed with status:`,C,"response text:",d.getResponseText()),C>0){let b=d.getResponseJson();Array.isArray(b)&&(b=b[0]);const D=b==null?void 0:b.error;if(D&&D.status&&D.message){const L=function(O){const Y=O.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(Y)>=0?Y:k.UNKNOWN}(D.status);c(new q(L,D.message))}else c(new q(k.UNKNOWN,"Server responded with status "+d.getStatus()))}else c(new q(k.UNAVAILABLE,"Connection failed."));break;default:$()}}finally{U(bt,`RPC '${t}' ${o} completed.`)}});const m=JSON.stringify(s);U(bt,`RPC '${t}' ${o} sending request:`,s),d.send(e,"POST",m,r,15)})}Oo(t,e,r){const s=gi(),o=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=Aa(),c=Ia(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(d.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(d.xmlHttpFactory=new va({})),this.Fo(d.initMessageHeaders,e,r),d.encodeInitMessageHeaders=!0;const v=o.join("");U(bt,`Creating RPC '${t}' stream ${s}: ${v}`,d);const C=u.createWebChannel(v,d);let b=!1,D=!1;const L=new Gf({lo:O=>{D?U(bt,`Not sending because RPC '${t}' stream ${s} is closed:`,O):(b||(U(bt,`Opening RPC '${t}' stream ${s} transport.`),C.open(),b=!0),U(bt,`RPC '${t}' stream ${s} sending:`,O),C.send(O))},ho:()=>C.close()}),B=(O,Y,et)=>{O.listen(Y,nt=>{try{et(nt)}catch(ft){setTimeout(()=>{throw ft},0)}})};return B(C,Pn.EventType.OPEN,()=>{D||(U(bt,`RPC '${t}' stream ${s} transport opened.`),L.mo())}),B(C,Pn.EventType.CLOSE,()=>{D||(D=!0,U(bt,`RPC '${t}' stream ${s} transport closed`),L.po())}),B(C,Pn.EventType.ERROR,O=>{D||(D=!0,We(bt,`RPC '${t}' stream ${s} transport errored:`,O),L.po(new q(k.UNAVAILABLE,"The operation could not be completed")))}),B(C,Pn.EventType.MESSAGE,O=>{var Y;if(!D){const et=O.data[0];st(!!et);const nt=et,ft=nt.error||((Y=nt[0])===null||Y===void 0?void 0:Y.error);if(ft){U(bt,`RPC '${t}' stream ${s} received error:`,ft);const It=ft.status;let dt=function(T){const w=_t[T];if(w!==void 0)return Xa(w)}(It),A=ft.message;dt===void 0&&(dt=k.INTERNAL,A="Unknown error status: "+It+" with message "+ft.message),D=!0,L.po(new q(dt,A)),C.close()}else U(bt,`RPC '${t}' stream ${s} received:`,et),L.yo(et)}}),B(c,wa.STAT_EVENT,O=>{O.stat===Pi.PROXY?U(bt,`RPC '${t}' stream ${s} detected buffering proxy`):O.stat===Pi.NOPROXY&&U(bt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{L.fo()},0),L}}function _i(){return typeof document<"u"?document:null}/**
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
 */function qr(n){return new nf(n,!0)}/**
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
 */class uu{constructor(t,e,r=1e3,s=1.5,o=6e4){this.oi=t,this.timerId=e,this.No=r,this.Lo=s,this.Bo=o,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(t){this.cancel();const e=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),s=Math.max(0,e-r);s>0&&U("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),t())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class cu{constructor(t,e,r,s,o,u,c,d){this.oi=t,this.Go=r,this.zo=s,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=c,this.listener=d,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new uu(t,e)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(t){this.s_(),this.stream.send(t)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(t,e){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,t!==4?this.Yo.reset():e&&e.code===k.RESOURCE_EXHAUSTED?(te(e.toString()),te("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):e&&e.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ao(e)}__(){}auth(){this.state=1;const t=this.a_(this.jo),e=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.jo===e&&this.u_(r,s)},r=>{t(()=>{const s=new q(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(s)})})}u_(t,e){const r=this.a_(this.jo);this.stream=this.l_(t,e),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{r(()=>this.c_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(t){return U("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}a_(t){return e=>{this.oi.enqueueAndForget(()=>this.jo===t?e():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Hf extends cu{constructor(t,e,r,s,o,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,u),this.serializer=o}l_(t,e){return this.connection.Oo("Listen",t,e)}onMessage(t){this.Yo.reset();const e=of(this.serializer,t),r=function(o){if(!("targetChange"in o))return z.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?z.min():u.readTime?Ht(u.readTime):z.min()}(t);return this.listener.h_(e,r)}P_(t){const e={};e.database=Mi(this.serializer),e.addTarget=function(o,u){let c;const d=u.target;if(c=Di(d)?{documents:cf(o,d)}:{query:hf(o,d)._t},c.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){c.resumeToken=Za(o,u.resumeToken);const m=Ni(o,u.expectedCount);m!==null&&(c.expectedCount=m)}else if(u.snapshotVersion.compareTo(z.min())>0){c.readTime=Dr(o,u.snapshotVersion.toTimestamp());const m=Ni(o,u.expectedCount);m!==null&&(c.expectedCount=m)}return c}(this.serializer,t);const r=ff(this.serializer,t);r&&(e.labels=r),this.i_(e)}I_(t){const e={};e.database=Mi(this.serializer),e.removeTarget=t,this.i_(e)}}class Qf extends cu{constructor(t,e,r,s,o,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,u),this.serializer=o,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(t,e){return this.connection.Oo("Write",t,e)}onMessage(t){if(st(!!t.streamToken),this.lastStreamToken=t.streamToken,this.T_){this.Yo.reset();const e=uf(t.writeResults,t.commitTime),r=Ht(t.commitTime);return this.listener.A_(r,e)}return st(!t.writeResults||t.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const t={};t.database=Mi(this.serializer),this.i_(t)}d_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>af(this.serializer,r))};this.i_(e)}}/**
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
 */class Wf extends class{}{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new q(k.FAILED_PRECONDITION,"The client has already been terminated.")}Co(t,e,r,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.Co(t,ki(e,r),s,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(k.UNKNOWN,o.toString())})}xo(t,e,r,s,o){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,c])=>this.connection.xo(t,ki(e,r),s,u,c,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new q(k.UNKNOWN,u.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class Xf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(t){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,t==="Online"&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(te(e),this.y_=!1):U("OnlineStateTracker",e)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class Yf{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=o,this.O_.io(u=>{r.enqueueAndForget(async()=>{Me(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(d){const m=G(d);m.M_.add(4),await Qn(m),m.N_.set("Unknown"),m.M_.delete(4),await $r(m)}(this))})}),this.N_=new Xf(r,s)}}async function $r(n){if(Me(n))for(const t of n.x_)await t(!0)}async function Qn(n){for(const t of n.x_)await t(!1)}function hu(n,t){const e=G(n);e.F_.has(t.targetId)||(e.F_.set(t.targetId,t),os(e)?ss(e):an(e).Xo()&&is(e,t))}function rs(n,t){const e=G(n),r=an(e);e.F_.delete(t),r.Xo()&&lu(e,t),e.F_.size===0&&(r.Xo()?r.n_():Me(e)&&e.N_.set("Unknown"))}function is(n,t){if(n.L_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(z.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}an(n).P_(t)}function lu(n,t){n.L_.xe(t),an(n).I_(t)}function ss(n){n.L_=new Jl({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.F_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),an(n).start(),n.N_.w_()}function os(n){return Me(n)&&!an(n).Zo()&&n.F_.size>0}function Me(n){return G(n).M_.size===0}function fu(n){n.L_=void 0}async function Jf(n){n.N_.set("Online")}async function Zf(n){n.F_.forEach((t,e)=>{is(n,t)})}async function td(n,t){fu(n),os(n)?(n.N_.D_(t),ss(n)):n.N_.set("Unknown")}async function ed(n,t,e){if(n.N_.set("Online"),t instanceof Ja&&t.state===2&&t.cause)try{await async function(s,o){const u=o.cause;for(const c of o.targetIds)s.F_.has(c)&&(await s.remoteSyncer.rejectListen(c,u),s.F_.delete(c),s.L_.removeTarget(c))}(n,t)}catch(r){U("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await xr(n,r)}else if(t instanceof vr?n.L_.Ke(t):t instanceof Ya?n.L_.He(t):n.L_.We(t),!e.isEqual(z.min()))try{const r=await au(n.localStore);e.compareTo(r)>=0&&await function(o,u){const c=o.L_.rt(u);return c.targetChanges.forEach((d,m)=>{if(d.resumeToken.approximateByteSize()>0){const v=o.F_.get(m);v&&o.F_.set(m,v.withResumeToken(d.resumeToken,u))}}),c.targetMismatches.forEach((d,m)=>{const v=o.F_.get(d);if(!v)return;o.F_.set(d,v.withResumeToken(Nt.EMPTY_BYTE_STRING,v.snapshotVersion)),lu(o,d);const C=new ce(v.target,d,m,v.sequenceNumber);is(o,C)}),o.remoteSyncer.applyRemoteEvent(c)}(n,e)}catch(r){U("RemoteStore","Failed to raise snapshot:",r),await xr(n,r)}}async function xr(n,t,e){if(!Gn(t))throw t;n.M_.add(1),await Qn(n),n.N_.set("Offline"),e||(e=()=>au(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await e(),n.M_.delete(1),await $r(n)})}function du(n,t){return t().catch(e=>xr(n,e,t))}async function zr(n){const t=G(n),e=me(t);let r=t.v_.length>0?t.v_[t.v_.length-1].batchId:-1;for(;nd(t);)try{const s=await Uf(t.localStore,r);if(s===null){t.v_.length===0&&e.n_();break}r=s.batchId,rd(t,s)}catch(s){await xr(t,s)}pu(t)&&mu(t)}function nd(n){return Me(n)&&n.v_.length<10}function rd(n,t){n.v_.push(t);const e=me(n);e.Xo()&&e.E_&&e.d_(t.mutations)}function pu(n){return Me(n)&&!me(n).Zo()&&n.v_.length>0}function mu(n){me(n).start()}async function id(n){me(n).V_()}async function sd(n){const t=me(n);for(const e of n.v_)t.d_(e.mutations)}async function od(n,t,e){const r=n.v_.shift(),s=Yi.from(r,t,e);await du(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await zr(n)}async function ad(n,t){t&&me(n).E_&&await async function(r,s){if(function(u){return Wl(u)&&u!==k.ABORTED}(s.code)){const o=r.v_.shift();me(r).t_(),await du(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await zr(r)}}(n,t),pu(n)&&mu(n)}async function Ko(n,t){const e=G(n);e.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=Me(e);e.M_.add(3),await Qn(e),r&&e.N_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.M_.delete(3),await $r(e)}async function ud(n,t){const e=G(n);t?(e.M_.delete(2),await $r(e)):t||(e.M_.add(2),await Qn(e),e.N_.set("Unknown"))}function an(n){return n.B_||(n.B_=function(e,r,s){const o=G(e);return o.f_(),new Hf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Po:Jf.bind(null,n),To:Zf.bind(null,n),Ao:td.bind(null,n),h_:ed.bind(null,n)}),n.x_.push(async t=>{t?(n.B_.t_(),os(n)?ss(n):n.N_.set("Unknown")):(await n.B_.stop(),fu(n))})),n.B_}function me(n){return n.k_||(n.k_=function(e,r,s){const o=G(e);return o.f_(),new Qf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Po:()=>Promise.resolve(),To:id.bind(null,n),Ao:ad.bind(null,n),R_:sd.bind(null,n),A_:od.bind(null,n)}),n.x_.push(async t=>{t?(n.k_.t_(),await zr(n)):(await n.k_.stop(),n.v_.length>0&&(U("RemoteStore",`Stopping write stream with ${n.v_.length} pending writes`),n.v_=[]))})),n.k_}/**
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
 */class as{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new fe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const u=Date.now()+r,c=new as(t,e,u,s,o);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(k.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function us(n,t){if(te("AsyncQueue",`${t}: ${n}`),Gn(n))return new q(k.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class Qe{constructor(t){this.comparator=t?(e,r)=>t(e,r)||j.comparator(e.key,r.key):(e,r)=>j.comparator(e.key,r.key),this.keyedMap=Cn(),this.sortedSet=new ut(this.comparator)}static emptySet(t){return new Qe(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Qe)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Qe;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class Ho{constructor(){this.q_=new ut(j.comparator)}track(t){const e=t.doc.key,r=this.q_.get(e);r?t.type!==0&&r.type===3?this.q_=this.q_.insert(e,t):t.type===3&&r.type!==1?this.q_=this.q_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.q_=this.q_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.q_=this.q_.remove(e):t.type===1&&r.type===2?this.q_=this.q_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):$():this.q_=this.q_.insert(e,t)}Q_(){const t=[];return this.q_.inorderTraversal((e,r)=>{t.push(r)}),t}}class tn{constructor(t,e,r,s,o,u,c,d,m){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=c,this.excludesMetadataChanges=d,this.hasCachedResults=m}static fromInitialDocuments(t,e,r,s,o){const u=[];return e.forEach(c=>{u.push({type:0,doc:c})}),new tn(t,e,Qe.emptySet(e),u,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Or(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class cd{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(t=>t.G_())}}class hd{constructor(){this.queries=new on(t=>Ma(t),Or),this.onlineState="Unknown",this.z_=new Set}}async function ld(n,t){const e=G(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.W_()&&t.G_()&&(r=2):(o=new cd,r=t.G_()?0:1);try{switch(r){case 0:o.K_=await e.onListen(s,!0);break;case 1:o.K_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(u){const c=us(u,`Initialization of query '${$e(t.query)}' failed`);return void t.onError(c)}e.queries.set(s,o),o.U_.push(t),t.j_(e.onlineState),o.K_&&t.H_(o.K_)&&cs(e)}async function fd(n,t){const e=G(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const u=o.U_.indexOf(t);u>=0&&(o.U_.splice(u,1),o.U_.length===0?s=t.G_()?0:1:!o.W_()&&t.G_()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function dd(n,t){const e=G(n);let r=!1;for(const s of t){const o=s.query,u=e.queries.get(o);if(u){for(const c of u.U_)c.H_(s)&&(r=!0);u.K_=s}}r&&cs(e)}function pd(n,t,e){const r=G(n),s=r.queries.get(t);if(s)for(const o of s.U_)o.onError(e);r.queries.delete(t)}function cs(n){n.z_.forEach(t=>{t.next()})}var Li,Qo;(Qo=Li||(Li={})).J_="default",Qo.Cache="cache";class md{constructor(t,e,r){this.query=t,this.Y_=e,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new tn(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Z_?this.ea(t)&&(this.Y_.next(t),e=!0):this.ta(t,this.onlineState)&&(this.na(t),e=!0),this.X_=t,e}onError(t){this.Y_.error(t)}j_(t){this.onlineState=t;let e=!1;return this.X_&&!this.Z_&&this.ta(this.X_,t)&&(this.na(this.X_),e=!0),e}ta(t,e){if(!t.fromCache||!this.G_())return!0;const r=e!=="Offline";return(!this.options.ra||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ea(t){if(t.docChanges.length>0)return!0;const e=this.X_&&this.X_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}na(t){t=tn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Z_=!0,this.Y_.next(t)}G_(){return this.options.source!==Li.Cache}}/**
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
 */class gu{constructor(t){this.key=t}}class _u{constructor(t){this.key=t}}class gd{constructor(t,e){this.query=t,this.la=e,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=H(),this.mutatedKeys=H(),this.Ia=Oa(t),this.Ta=new Qe(this.Ia)}get Ea(){return this.la}da(t,e){const r=e?e.Aa:new Ho,s=e?e.Ta:this.Ta;let o=e?e.mutatedKeys:this.mutatedKeys,u=s,c=!1;const d=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,m=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((v,C)=>{const b=s.get(v),D=Lr(this.query,C)?C:null,L=!!b&&this.mutatedKeys.has(b.key),B=!!D&&(D.hasLocalMutations||this.mutatedKeys.has(D.key)&&D.hasCommittedMutations);let O=!1;b&&D?b.data.isEqual(D.data)?L!==B&&(r.track({type:3,doc:D}),O=!0):this.Ra(b,D)||(r.track({type:2,doc:D}),O=!0,(d&&this.Ia(D,d)>0||m&&this.Ia(D,m)<0)&&(c=!0)):!b&&D?(r.track({type:0,doc:D}),O=!0):b&&!D&&(r.track({type:1,doc:b}),O=!0,(d||m)&&(c=!0)),O&&(D?(u=u.add(D),o=B?o.add(v):o.delete(v)):(u=u.delete(v),o=o.delete(v)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const v=this.query.limitType==="F"?u.last():u.first();u=u.delete(v.key),o=o.delete(v.key),r.track({type:1,doc:v})}return{Ta:u,Aa:r,Xi:c,mutatedKeys:o}}Ra(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.Ta;this.Ta=t.Ta,this.mutatedKeys=t.mutatedKeys;const u=t.Aa.Q_();u.sort((v,C)=>function(D,L){const B=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $()}};return B(D)-B(L)}(v.type,C.type)||this.Ia(v.doc,C.doc)),this.Va(r),s=s!=null&&s;const c=e&&!s?this.ma():[],d=this.Pa.size===0&&this.current&&!s?1:0,m=d!==this.ha;return this.ha=d,u.length!==0||m?{snapshot:new tn(this.query,t.Ta,o,u,t.mutatedKeys,d===0,m,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:c}:{fa:c}}j_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Ho,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(t){return!this.la.has(t)&&!!this.Ta.has(t)&&!this.Ta.get(t).hasLocalMutations}Va(t){t&&(t.addedDocuments.forEach(e=>this.la=this.la.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.la=this.la.delete(e)),this.current=t.current)}ma(){if(!this.current)return[];const t=this.Pa;this.Pa=H(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const e=[];return t.forEach(r=>{this.Pa.has(r)||e.push(new _u(r))}),this.Pa.forEach(r=>{t.has(r)||e.push(new gu(r))}),e}pa(t){this.la=t.hs,this.Pa=H();const e=this.da(t.documents);return this.applyChanges(e,!0)}ya(){return tn.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class _d{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class yd{constructor(t){this.key=t,this.wa=!1}}class Ed{constructor(t,e,r,s,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.Sa={},this.ba=new on(c=>Ma(c),Or),this.Da=new Map,this.Ca=new Set,this.va=new ut(j.comparator),this.Fa=new Map,this.Ma=new ts,this.xa={},this.Oa=new Map,this.Na=Ze.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function vd(n,t,e=!0){const r=Iu(n);let s;const o=r.ba.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.ya()):s=await yu(r,t,e,!0),s}async function Td(n,t){const e=Iu(n);await yu(e,t,!0,!1)}async function yu(n,t,e,r){const s=await Bf(n.localStore,Kt(t)),o=s.targetId,u=e?n.sharedClientState.addLocalQueryTarget(o):"not-current";let c;return r&&(c=await wd(n,t,o,u==="current",s.resumeToken)),n.isPrimaryClient&&e&&hu(n.remoteStore,s),c}async function wd(n,t,e,r,s){n.Ba=(C,b,D)=>async function(B,O,Y,et){let nt=O.view.da(Y);nt.Xi&&(nt=await $o(B.localStore,O.query,!1).then(({documents:A})=>O.view.da(A,nt)));const ft=et&&et.targetChanges.get(O.targetId),It=et&&et.targetMismatches.get(O.targetId)!=null,dt=O.view.applyChanges(nt,B.isPrimaryClient,ft,It);return Xo(B,O.targetId,dt.fa),dt.snapshot}(n,C,b,D);const o=await $o(n.localStore,t,!0),u=new gd(t,o.hs),c=u.da(o.documents),d=Hn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),m=u.applyChanges(c,n.isPrimaryClient,d);Xo(n,e,m.fa);const v=new _d(t,e,u);return n.ba.set(t,v),n.Da.has(e)?n.Da.get(e).push(t):n.Da.set(e,[t]),m.snapshot}async function Id(n,t,e){const r=G(n),s=r.ba.get(t),o=r.Da.get(s.targetId);if(o.length>1)return r.Da.set(s.targetId,o.filter(u=>!Or(u,t))),void r.ba.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Oi(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&rs(r.remoteStore,s.targetId),Ui(r,s.targetId)}).catch(zn)):(Ui(r,s.targetId),await Oi(r.localStore,s.targetId,!0))}async function Ad(n,t){const e=G(n),r=e.ba.get(t),s=e.Da.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),rs(e.remoteStore,r.targetId))}async function Rd(n,t,e){const r=xd(n);try{const s=await function(u,c){const d=G(u),m=Tt.now(),v=c.reduce((D,L)=>D.add(L.key),H());let C,b;return d.persistence.runTransaction("Locally write mutations","readwrite",D=>{let L=ee(),B=H();return d.os.getEntries(D,v).next(O=>{L=O,L.forEach((Y,et)=>{et.isValidDocument()||(B=B.add(Y))})}).next(()=>d.localDocuments.getOverlayedDocuments(D,L)).next(O=>{C=O;const Y=[];for(const et of c){const nt=zl(et,C.get(et.key).overlayedDocument);nt!=null&&Y.push(new Fe(et.key,nt,Va(nt.value.mapValue),Zt.exists(!0)))}return d.mutationQueue.addMutationBatch(D,m,Y,c)}).next(O=>{b=O;const Y=O.applyToLocalDocumentSet(C,B);return d.documentOverlayCache.saveOverlays(D,O.batchId,Y)})}).then(()=>({batchId:b.batchId,changes:Ua(C)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(u,c,d){let m=u.xa[u.currentUser.toKey()];m||(m=new ut(tt)),m=m.insert(c,d),u.xa[u.currentUser.toKey()]=m}(r,s.batchId,e),await Wn(r,s.changes),await zr(r.remoteStore)}catch(s){const o=us(s,"Failed to persist write");e.reject(o)}}async function Eu(n,t){const e=G(n);try{const r=await Of(e.localStore,t);t.targetChanges.forEach((s,o)=>{const u=e.Fa.get(o);u&&(st(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?u.wa=!0:s.modifiedDocuments.size>0?st(u.wa):s.removedDocuments.size>0&&(st(u.wa),u.wa=!1))}),await Wn(e,r,t)}catch(r){await zn(r)}}function Wo(n,t,e){const r=G(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.ba.forEach((o,u)=>{const c=u.view.j_(t);c.snapshot&&s.push(c.snapshot)}),function(u,c){const d=G(u);d.onlineState=c;let m=!1;d.queries.forEach((v,C)=>{for(const b of C.U_)b.j_(c)&&(m=!0)}),m&&cs(d)}(r.eventManager,t),s.length&&r.Sa.h_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Sd(n,t,e){const r=G(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Fa.get(t),o=s&&s.key;if(o){let u=new ut(j.comparator);u=u.insert(o,xt.newNoDocument(o,z.min()));const c=H().add(o),d=new jr(z.min(),new Map,new ut(tt),u,c);await Eu(r,d),r.va=r.va.remove(o),r.Fa.delete(t),hs(r)}else await Oi(r.localStore,t,!1).then(()=>Ui(r,t,e)).catch(zn)}async function Pd(n,t){const e=G(n),r=t.batch.batchId;try{const s=await Mf(e.localStore,t);Tu(e,r,null),vu(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Wn(e,s)}catch(s){await zn(s)}}async function Cd(n,t,e){const r=G(n);try{const s=await function(u,c){const d=G(u);return d.persistence.runTransaction("Reject batch","readwrite-primary",m=>{let v;return d.mutationQueue.lookupMutationBatch(m,c).next(C=>(st(C!==null),v=C.keys(),d.mutationQueue.removeMutationBatch(m,C))).next(()=>d.mutationQueue.performConsistencyCheck(m)).next(()=>d.documentOverlayCache.removeOverlaysForBatchId(m,v,c)).next(()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,v)).next(()=>d.localDocuments.getDocuments(m,v))})}(r.localStore,t);Tu(r,t,e),vu(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Wn(r,s)}catch(s){await zn(s)}}function vu(n,t){(n.Oa.get(t)||[]).forEach(e=>{e.resolve()}),n.Oa.delete(t)}function Tu(n,t,e){const r=G(n);let s=r.xa[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.xa[r.currentUser.toKey()]=s}}function Ui(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Da.get(t))n.ba.delete(r),e&&n.Sa.ka(r,e);n.Da.delete(t),n.isPrimaryClient&&n.Ma.Vr(t).forEach(r=>{n.Ma.containsKey(r)||wu(n,r)})}function wu(n,t){n.Ca.delete(t.path.canonicalString());const e=n.va.get(t);e!==null&&(rs(n.remoteStore,e),n.va=n.va.remove(t),n.Fa.delete(e),hs(n))}function Xo(n,t,e){for(const r of e)r instanceof gu?(n.Ma.addReference(r.key,t),Vd(n,r)):r instanceof _u?(U("SyncEngine","Document no longer in limbo: "+r.key),n.Ma.removeReference(r.key,t),n.Ma.containsKey(r.key)||wu(n,r.key)):$()}function Vd(n,t){const e=t.key,r=e.path.canonicalString();n.va.get(e)||n.Ca.has(r)||(U("SyncEngine","New document in limbo: "+e),n.Ca.add(r),hs(n))}function hs(n){for(;n.Ca.size>0&&n.va.size<n.maxConcurrentLimboResolutions;){const t=n.Ca.values().next().value;n.Ca.delete(t);const e=new j(ht.fromString(t)),r=n.Na.next();n.Fa.set(r,new yd(e)),n.va=n.va.insert(e,r),hu(n.remoteStore,new ce(Kt(Xi(e.path)),r,"TargetPurposeLimboResolution",zi.oe))}}async function Wn(n,t,e){const r=G(n),s=[],o=[],u=[];r.ba.isEmpty()||(r.ba.forEach((c,d)=>{u.push(r.Ba(d,t,e).then(m=>{var v;if((m||e)&&r.isPrimaryClient){const C=m?!m.fromCache:(v=e==null?void 0:e.targetChanges.get(d.targetId))===null||v===void 0?void 0:v.current;r.sharedClientState.updateQueryState(d.targetId,C?"current":"not-current")}if(m){s.push(m);const C=ns.Ki(d.targetId,m);o.push(C)}}))}),await Promise.all(u),r.Sa.h_(s),await async function(d,m){const v=G(d);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",C=>N.forEach(m,b=>N.forEach(b.qi,D=>v.persistence.referenceDelegate.addReference(C,b.targetId,D)).next(()=>N.forEach(b.Qi,D=>v.persistence.referenceDelegate.removeReference(C,b.targetId,D)))))}catch(C){if(!Gn(C))throw C;U("LocalStore","Failed to update sequence numbers: "+C)}for(const C of m){const b=C.targetId;if(!C.fromCache){const D=v.ns.get(b),L=D.snapshotVersion,B=D.withLastLimboFreeSnapshotVersion(L);v.ns=v.ns.insert(b,B)}}}(r.localStore,o))}async function bd(n,t){const e=G(n);if(!e.currentUser.isEqual(t)){U("SyncEngine","User change. New user:",t.toKey());const r=await ou(e.localStore,t);e.currentUser=t,function(o,u){o.Oa.forEach(c=>{c.forEach(d=>{d.reject(new q(k.CANCELLED,u))})}),o.Oa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Wn(e,r.us)}}function Dd(n,t){const e=G(n),r=e.Fa.get(t);if(r&&r.wa)return H().add(r.key);{let s=H();const o=e.Da.get(t);if(!o)return s;for(const u of o){const c=e.ba.get(u);s=s.unionWith(c.view.Ea)}return s}}function Iu(n){const t=G(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Eu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Dd.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Sd.bind(null,t),t.Sa.h_=dd.bind(null,t.eventManager),t.Sa.ka=pd.bind(null,t.eventManager),t}function xd(n){const t=G(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Pd.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Cd.bind(null,t),t}class Yo{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=qr(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Ff(this.persistence,new Nf,t.initialUser,this.serializer)}createPersistence(t){return new bf(es.Hr,this.serializer)}createSharedClientState(t){return new qf}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Nd{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Wo(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=bd.bind(null,this.syncEngine),await ud(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new hd}()}createDatastore(t){const e=qr(t.databaseInfo.databaseId),r=function(o){return new Kf(o)}(t.databaseInfo);return function(o,u,c,d){return new Wf(o,u,c,d)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,u,c){return new Yf(r,s,o,u,c)}(this.localStore,this.datastore,t.asyncQueue,e=>Wo(this.syncEngine,e,0),function(){return Go.D()?new Go:new $f}())}createSyncEngine(t,e){return function(s,o,u,c,d,m,v){const C=new Ed(s,o,u,c,d,m);return v&&(C.La=!0),C}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(r){const s=G(r);U("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await Qn(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
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
 */class kd{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ka(this.observer.next,t)}error(t){this.observer.error?this.Ka(this.observer.error,t):te("Uncaught Error in snapshot listener:",t.toString())}$a(){this.muted=!0}Ka(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class Fd{constructor(t,e,r,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=Dt.UNAUTHENTICATED,this.clientId=Sa.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{U("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(U("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new q(k.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new fe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=us(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function yi(n,t){n.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await ou(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Jo(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Od(n);U("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Ko(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Ko(t.remoteStore,s)),n._onlineComponents=t}function Md(n){return n.name==="FirebaseError"?n.code===k.FAILED_PRECONDITION||n.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Od(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await yi(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!Md(e))throw e;We("Error using user provided cache. Falling back to memory cache: "+e),await yi(n,new Yo)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await yi(n,new Yo);return n._offlineComponents}async function Au(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await Jo(n,n._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await Jo(n,new Nd))),n._onlineComponents}function Ld(n){return Au(n).then(t=>t.syncEngine)}async function Ud(n){const t=await Au(n),e=t.eventManager;return e.onListen=vd.bind(null,t.syncEngine),e.onUnlisten=Id.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Td.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Ad.bind(null,t.syncEngine),e}function Bd(n,t,e={}){const r=new fe;return n.asyncQueue.enqueueAndForget(async()=>function(o,u,c,d,m){const v=new kd({next:b=>{u.enqueueAndForget(()=>fd(o,C));const D=b.docs.has(c);!D&&b.fromCache?m.reject(new q(k.UNAVAILABLE,"Failed to get document because the client is offline.")):D&&b.fromCache&&d&&d.source==="server"?m.reject(new q(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):m.resolve(b)},error:b=>m.reject(b)}),C=new md(Xi(c.path),v,{includeMetadataChanges:!0,ra:!0});return ld(o,C)}(await Ud(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function Ru(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const Zo=new Map;/**
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
 */function jd(n,t,e){if(!e)throw new q(k.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function qd(n,t,e,r){if(t===!0&&r===!0)throw new q(k.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function ta(n){if(!j.isDocumentKey(n))throw new q(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ls(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":$()}function qn(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new q(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ls(n);throw new q(k.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */class ea{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new q(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new q(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}qd("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ru((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new q(k.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new q(k.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new q(k.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class fs{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ea({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new q(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new q(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ea(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Zh;switch(r.type){case"firstParty":return new rl(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Zo.get(e);r&&(U("ComponentProvider","Removing Datastore"),Zo.delete(e),r.terminate())}(this),Promise.resolve()}}function $d(n,t,e,r={}){var s;const o=(n=qn(n,fs))._getSettings(),u=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==u&&We("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:u,ssl:!1})),r.mockUserToken){let c,d;if(typeof r.mockUserToken=="string")c=r.mockUserToken,d=Dt.MOCK_USER;else{c=Nc(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new q(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new Dt(m)}n._authCredentials=new tl(new Ra(c,d))}}/**
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
 */class ds{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new ds(this.firestore,t,this._query)}}class Bt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $n(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Bt(this.firestore,t,this._key)}}class $n extends ds{constructor(t,e,r){super(t,e,Xi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Bt(this.firestore,null,new j(t))}withConverter(t){return new $n(this.firestore,t,this._path)}}function zd(n,t,...e){if(n=Ir(n),arguments.length===1&&(t=Sa.newId()),jd("doc","path",t),n instanceof fs){const r=ht.fromString(t,...e);return ta(r),new Bt(n,null,new j(r))}{if(!(n instanceof Bt||n instanceof $n))throw new q(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ht.fromString(t,...e));return ta(r),new Bt(n.firestore,n instanceof $n?n.converter:null,new j(r))}}/**
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
 */class Gd{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new uu(this,"async_queue_retry"),this.hu=()=>{const e=_i();e&&U("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Yo.Wo()};const t=_i();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const e=_i();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const e=new fe;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(t){if(!Gn(t))throw t;U("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(t){const e=this.iu.then(()=>(this.uu=!0,t().catch(r=>{this.au=r,this.uu=!1;const s=function(u){let c=u.message||"";return u.stack&&(c=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),c}(r);throw te("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.uu=!1,r))));return this.iu=e,e}enqueueAfterDelay(t,e,r){this.Pu(),this.lu.indexOf(t)>-1&&(e=0);const s=as.createAndSchedule(this,t,e,r,o=>this.Eu(o));return this._u.push(s),s}Pu(){this.au&&$()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const e of this._u)if(e.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this._u)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const e=this._u.indexOf(t);this._u.splice(e,1)}}class ps extends fs{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=function(){return new Gd}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Pu(this),this._firestoreClient.terminate()}}function Kd(n,t){const e=typeof n=="object"?n:jh(),r=typeof n=="string"?n:t||"(default)",s=Oh(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Dc("firestore");o&&$d(s,...o)}return s}function Su(n){return n._firestoreClient||Pu(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Pu(n){var t,e,r;const s=n._freezeSettings(),o=function(c,d,m,v){return new gl(c,d,m,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,Ru(v.experimentalLongPollingOptions),v.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new Fd(n._authCredentials,n._appCheckCredentials,n._queue,o),!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class en{constructor(t){this._byteString=t}static fromBase64String(t){try{return new en(Nt.fromBase64String(t))}catch(e){throw new q(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new en(Nt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class ms{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new q(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new St(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Cu{constructor(t){this._methodName=t}}/**
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
 */class gs{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new q(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new q(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return tt(this._lat,t._lat)||tt(this._long,t._long)}}/**
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
 */const Hd=/^__.*__$/;class Qd{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Fe(t,this.data,this.fieldMask,e,this.fieldTransforms):new Kn(t,this.data,e,this.fieldTransforms)}}function Vu(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $()}}class _s{constructor(t,e,r,s,o,u){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.mu(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(t){return new _s(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:r,yu:!1});return s.wu(t),s}Su(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:r,yu:!1});return s.mu(),s}bu(t){return this.gu({path:void 0,yu:!0})}Du(t){return Nr(t,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}mu(){if(this.path)for(let t=0;t<this.path.length;t++)this.wu(this.path.get(t))}wu(t){if(t.length===0)throw this.Du("Document fields must not be empty");if(Vu(this.fu)&&Hd.test(t))throw this.Du('Document fields cannot begin and end with "__"')}}class Wd{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||qr(t)}Fu(t,e,r,s=!1){return new _s({fu:t,methodName:e,vu:r,path:St.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Xd(n){const t=n._freezeSettings(),e=qr(n._databaseId);return new Wd(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Yd(n,t,e,r,s,o={}){const u=n.Fu(o.merge||o.mergeFields?2:0,t,e,s);Nu("Data must be an object, but it was:",u,r);const c=Du(r,u);let d,m;if(o.merge)d=new qt(u.fieldMask),m=u.fieldTransforms;else if(o.mergeFields){const v=[];for(const C of o.mergeFields){const b=Jd(t,C,e);if(!u.contains(b))throw new q(k.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);tp(v,b)||v.push(b)}d=new qt(v),m=u.fieldTransforms.filter(C=>d.covers(C.field))}else d=null,m=u.fieldTransforms;return new Qd(new Ut(c),d,m)}function bu(n,t){if(xu(n=Ir(n)))return Nu("Unsupported field value:",t,n),Du(n,t);if(n instanceof Cu)return function(r,s){if(!Vu(s.fu))throw s.Du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.yu&&t.fu!==4)throw t.Du("Nested arrays are not supported");return function(r,s){const o=[];let u=0;for(const c of r){let d=bu(c,s.bu(u));d==null&&(d={nullValue:"NULL_VALUE"}),o.push(d),u++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=Ir(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Ll(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=Tt.fromDate(r);return{timestampValue:Dr(s.serializer,o)}}if(r instanceof Tt){const o=new Tt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Dr(s.serializer,o)}}if(r instanceof gs)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof en)return{bytesValue:Za(s.serializer,r._byteString)};if(r instanceof Bt){const o=s.databaseId,u=r.firestore._databaseId;if(!u.isEqual(o))throw s.Du(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Zi(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Du(`Unsupported field value: ${ls(r)}`)}(n,t)}function Du(n,t){const e={};return Pa(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):sn(n,(r,s)=>{const o=bu(s,t.pu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function xu(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Tt||n instanceof gs||n instanceof en||n instanceof Bt||n instanceof Cu)}function Nu(n,t,e){if(!xu(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=ls(e);throw r==="an object"?t.Du(n+" a custom object"):t.Du(n+" "+r)}}function Jd(n,t,e){if((t=Ir(t))instanceof ms)return t._internalPath;if(typeof t=="string")return ku(n,t);throw Nr("Field path arguments must be of type string or ",n,!1,void 0,e)}const Zd=new RegExp("[~\\*/\\[\\]]");function ku(n,t,e){if(t.search(Zd)>=0)throw Nr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new ms(...t.split("."))._internalPath}catch{throw Nr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Nr(n,t,e,r,s){const o=r&&!r.isEmpty(),u=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let d="";return(o||u)&&(d+=" (found",o&&(d+=` in field ${r}`),u&&(d+=` in document ${s}`),d+=")"),new q(k.INVALID_ARGUMENT,c+n+d)}function tp(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class Fu{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new ep(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Mu("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class ep extends Fu{data(){return super.data()}}function Mu(n,t){return typeof t=="string"?ku(n,t):t instanceof ms?t._internalPath:t._delegate._internalPath}class np{convertValue(t,e="none"){switch(ke(t)){case 0:return null;case 1:return t.booleanValue;case 2:return yt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ne(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw $()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return sn(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertGeoPoint(t){return new gs(yt(t.latitude),yt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Ki(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(On(t));default:return null}}convertTimestamp(t){const e=pe(t);return new Tt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=ht.fromString(t);st(su(r));const s=new Ln(r.get(1),r.get(3)),o=new j(r.popFirst(5));return s.isEqual(e)||te(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */function rp(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}/**
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
 */class ip{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ou extends Fu{constructor(t,e,r,s,o,u){super(t,e,r,s,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new sp(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Mu("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class sp extends Ou{data(t={}){return super.data(t)}}/**
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
 */function op(n){n=qn(n,Bt);const t=qn(n.firestore,ps);return Bd(Su(t),n._key).then(e=>cp(t,n,e))}class ap extends np{constructor(t){super(),this.firestore=t}convertBytes(t){return new en(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Bt(this.firestore,null,e)}}function na(n,t,e){n=qn(n,Bt);const r=qn(n.firestore,ps),s=rp(n.converter,t,e);return up(r,[Yd(Xd(r),"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,Zt.none())])}function up(n,t){return function(r,s){const o=new fe;return r.asyncQueue.enqueueAndForget(async()=>Rd(await Ld(r),s,o)),o.promise}(Su(n),t)}function cp(n,t,e){const r=e.docs.get(t._key),s=new ap(n);return new Ou(n,s,t._key,r,new ip(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(s){rn=s})(Bh),Rr(new kn("firestore",(r,{instanceIdentifier:s,options:o})=>{const u=r.getProvider("app").getImmediate(),c=new ps(new el(r.getProvider("auth-internal")),new sl(r.getProvider("app-check-internal")),function(m,v){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new q(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ln(m.options.projectId,v)}(u,s),u);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),He(Io,"4.6.4",t),He(Io,"4.6.4","esm2017")})();require("dotenv").config();const hp={apiKey:{}.APP_GOOGLE_API_KEY,authDomain:"footballpongdb.firebaseapp.com",projectId:"footballpongdb",storageBucket:"footballpongdb.appspot.com",messagingSenderId:"618518676972",appId:"1:618518676972:web:54a91d8629bc325ca2ecc9",measurementId:"G-3QJWQ45W1Y"},lp=ma(hp),fp=Kd(lp);async function dp(n){console.log("Logged in as "+n.first_name+" "+n.last_name+" ("+n.id+(n.username?", @"+n.username:"")+")");try{const t=zd(fp,"players",n.id.toString());(await op(t)).exists()?(await na(t,{firstName:n.first_name,lastName:n.last_name,username:n.username||null,photoUrl:n.photo_url||null,authDate:n.auth_date,lastLogin:new Date().toISOString()},{merge:!0}),console.log("Player document updated")):(await na(t,{firstName:n.first_name,lastName:n.last_name,username:n.username||null,photoUrl:n.photo_url||null,authDate:n.auth_date,createdAt:new Date().toISOString(),lastLogin:new Date().toISOString(),goalBits:0}),console.log("New player document created")),alert("Login successful!")}catch(t){console.error("Error saving player data:",t),alert("There was an error logging in. Please try again.")}}window.onTelegramAuth=dp;
