(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=r(i);fetch(i.href,a)}})();var Pi={},it={};it.byteLength=Fi;it.toByteArray=Vi;it.fromByteArray=Oi;var Q=[],q=[],Di=typeof Uint8Array<"u"?Uint8Array:Array,wt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var _e=0,Ci=wt.length;_e<Ci;++_e)Q[_e]=wt[_e],q[wt.charCodeAt(_e)]=_e;q["-".charCodeAt(0)]=62;q["_".charCodeAt(0)]=63;function en(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");r===-1&&(r=e);var n=r===e?0:4-r%4;return[r,n]}function Fi(t){var e=en(t),r=e[0],n=e[1];return(r+n)*3/4-n}function ki(t,e,r){return(e+r)*3/4-r}function Vi(t){var e,r=en(t),n=r[0],i=r[1],a=new Di(ki(t,n,i)),l=0,c=i>0?n-4:n,f;for(f=0;f<c;f+=4)e=q[t.charCodeAt(f)]<<18|q[t.charCodeAt(f+1)]<<12|q[t.charCodeAt(f+2)]<<6|q[t.charCodeAt(f+3)],a[l++]=e>>16&255,a[l++]=e>>8&255,a[l++]=e&255;return i===2&&(e=q[t.charCodeAt(f)]<<2|q[t.charCodeAt(f+1)]>>4,a[l++]=e&255),i===1&&(e=q[t.charCodeAt(f)]<<10|q[t.charCodeAt(f+1)]<<4|q[t.charCodeAt(f+2)]>>2,a[l++]=e>>8&255,a[l++]=e&255),a}function Bi(t){return Q[t>>18&63]+Q[t>>12&63]+Q[t>>6&63]+Q[t&63]}function Ni(t,e,r){for(var n,i=[],a=e;a<r;a+=3)n=(t[a]<<16&16711680)+(t[a+1]<<8&65280)+(t[a+2]&255),i.push(Bi(n));return i.join("")}function Oi(t){for(var e,r=t.length,n=r%3,i=[],a=16383,l=0,c=r-n;l<c;l+=a)i.push(Ni(t,l,l+a>c?c:l+a));return n===1?(e=t[r-1],i.push(Q[e>>2]+Q[e<<4&63]+"==")):n===2&&(e=(t[r-2]<<8)+t[r-1],i.push(Q[e>>10]+Q[e>>4&63]+Q[e<<2&63]+"=")),i.join("")}var Ht={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */Ht.read=function(t,e,r,n,i){var a,l,c=i*8-n-1,f=(1<<c)-1,m=f>>1,y=-7,w=r?i-1:0,E=r?-1:1,b=t[e+w];for(w+=E,a=b&(1<<-y)-1,b>>=-y,y+=c;y>0;a=a*256+t[e+w],w+=E,y-=8);for(l=a&(1<<-y)-1,a>>=-y,y+=n;y>0;l=l*256+t[e+w],w+=E,y-=8);if(a===0)a=1-m;else{if(a===f)return l?NaN:(b?-1:1)*(1/0);l=l+Math.pow(2,n),a=a-m}return(b?-1:1)*l*Math.pow(2,a-n)};Ht.write=function(t,e,r,n,i,a){var l,c,f,m=a*8-i-1,y=(1<<m)-1,w=y>>1,E=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,b=n?0:a-1,z=n?1:-1,le=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(c=isNaN(e)?1:0,l=y):(l=Math.floor(Math.log(e)/Math.LN2),e*(f=Math.pow(2,-l))<1&&(l--,f*=2),l+w>=1?e+=E/f:e+=E*Math.pow(2,1-w),e*f>=2&&(l++,f/=2),l+w>=y?(c=0,l=y):l+w>=1?(c=(e*f-1)*Math.pow(2,i),l=l+w):(c=e*Math.pow(2,w-1)*Math.pow(2,i),l=0));i>=8;t[r+b]=c&255,b+=z,c/=256,i-=8);for(l=l<<i|c,m+=i;m>0;t[r+b]=l&255,b+=z,l/=256,m-=8);t[r+b-z]|=le*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(t){var e=it,r=Ht,n=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;t.Buffer=c,t.SlowBuffer=hi,t.INSPECT_MAX_BYTES=50;var i=2147483647;t.kMaxLength=i,c.TYPED_ARRAY_SUPPORT=a(),!c.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function a(){try{var u=new Uint8Array(1),s={foo:function(){return 42}};return Object.setPrototypeOf(s,Uint8Array.prototype),Object.setPrototypeOf(u,s),u.foo()===42}catch{return!1}}Object.defineProperty(c.prototype,"parent",{enumerable:!0,get:function(){if(c.isBuffer(this))return this.buffer}}),Object.defineProperty(c.prototype,"offset",{enumerable:!0,get:function(){if(c.isBuffer(this))return this.byteOffset}});function l(u){if(u>i)throw new RangeError('The value "'+u+'" is invalid for option "size"');var s=new Uint8Array(u);return Object.setPrototypeOf(s,c.prototype),s}function c(u,s,o){if(typeof u=="number"){if(typeof s=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return w(u)}return f(u,s,o)}c.poolSize=8192;function f(u,s,o){if(typeof u=="string")return E(u,s);if(ArrayBuffer.isView(u))return z(u);if(u==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof u);if(Y(u,ArrayBuffer)||u&&Y(u.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(Y(u,SharedArrayBuffer)||u&&Y(u.buffer,SharedArrayBuffer)))return le(u,s,o);if(typeof u=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var h=u.valueOf&&u.valueOf();if(h!=null&&h!==u)return c.from(h,s,o);var d=Me(u);if(d)return d;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof u[Symbol.toPrimitive]=="function")return c.from(u[Symbol.toPrimitive]("string"),s,o);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof u)}c.from=function(u,s,o){return f(u,s,o)},Object.setPrototypeOf(c.prototype,Uint8Array.prototype),Object.setPrototypeOf(c,Uint8Array);function m(u){if(typeof u!="number")throw new TypeError('"size" argument must be of type number');if(u<0)throw new RangeError('The value "'+u+'" is invalid for option "size"')}function y(u,s,o){return m(u),u<=0?l(u):s!==void 0?typeof o=="string"?l(u).fill(s,o):l(u).fill(s):l(u)}c.alloc=function(u,s,o){return y(u,s,o)};function w(u){return m(u),l(u<0?0:mt(u)|0)}c.allocUnsafe=function(u){return w(u)},c.allocUnsafeSlow=function(u){return w(u)};function E(u,s){if((typeof s!="string"||s==="")&&(s="utf8"),!c.isEncoding(s))throw new TypeError("Unknown encoding: "+s);var o=dr(u,s)|0,h=l(o),d=h.write(u,s);return d!==o&&(h=h.slice(0,d)),h}function b(u){for(var s=u.length<0?0:mt(u.length)|0,o=l(s),h=0;h<s;h+=1)o[h]=u[h]&255;return o}function z(u){if(Y(u,Uint8Array)){var s=new Uint8Array(u);return le(s.buffer,s.byteOffset,s.byteLength)}return b(u)}function le(u,s,o){if(s<0||u.byteLength<s)throw new RangeError('"offset" is outside of buffer bounds');if(u.byteLength<s+(o||0))throw new RangeError('"length" is outside of buffer bounds');var h;return s===void 0&&o===void 0?h=new Uint8Array(u):o===void 0?h=new Uint8Array(u,s):h=new Uint8Array(u,s,o),Object.setPrototypeOf(h,c.prototype),h}function Me(u){if(c.isBuffer(u)){var s=mt(u.length)|0,o=l(s);return o.length===0||u.copy(o,0,0,s),o}if(u.length!==void 0)return typeof u.length!="number"||yt(u.length)?l(0):b(u);if(u.type==="Buffer"&&Array.isArray(u.data))return b(u.data)}function mt(u){if(u>=i)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+i.toString(16)+" bytes");return u|0}function hi(u){return+u!=u&&(u=0),c.alloc(+u)}c.isBuffer=function(s){return s!=null&&s._isBuffer===!0&&s!==c.prototype},c.compare=function(s,o){if(Y(s,Uint8Array)&&(s=c.from(s,s.offset,s.byteLength)),Y(o,Uint8Array)&&(o=c.from(o,o.offset,o.byteLength)),!c.isBuffer(s)||!c.isBuffer(o))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(s===o)return 0;for(var h=s.length,d=o.length,p=0,g=Math.min(h,d);p<g;++p)if(s[p]!==o[p]){h=s[p],d=o[p];break}return h<d?-1:d<h?1:0},c.isEncoding=function(s){switch(String(s).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},c.concat=function(s,o){if(!Array.isArray(s))throw new TypeError('"list" argument must be an Array of Buffers');if(s.length===0)return c.alloc(0);var h;if(o===void 0)for(o=0,h=0;h<s.length;++h)o+=s[h].length;var d=c.allocUnsafe(o),p=0;for(h=0;h<s.length;++h){var g=s[h];if(Y(g,Uint8Array))p+g.length>d.length?c.from(g).copy(d,p):Uint8Array.prototype.set.call(d,g,p);else if(c.isBuffer(g))g.copy(d,p);else throw new TypeError('"list" argument must be an Array of Buffers');p+=g.length}return d};function dr(u,s){if(c.isBuffer(u))return u.length;if(ArrayBuffer.isView(u)||Y(u,ArrayBuffer))return u.byteLength;if(typeof u!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof u);var o=u.length,h=arguments.length>2&&arguments[2]===!0;if(!h&&o===0)return 0;for(var d=!1;;)switch(s){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":return gt(u).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o*2;case"hex":return o>>>1;case"base64":return Ir(u).length;default:if(d)return h?-1:gt(u).length;s=(""+s).toLowerCase(),d=!0}}c.byteLength=dr;function fi(u,s,o){var h=!1;if((s===void 0||s<0)&&(s=0),s>this.length||((o===void 0||o>this.length)&&(o=this.length),o<=0)||(o>>>=0,s>>>=0,o<=s))return"";for(u||(u="utf8");;)switch(u){case"hex":return bi(this,s,o);case"utf8":case"utf-8":return gr(this,s,o);case"ascii":return Ei(this,s,o);case"latin1":case"binary":return Ii(this,s,o);case"base64":return wi(this,s,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ti(this,s,o);default:if(h)throw new TypeError("Unknown encoding: "+u);u=(u+"").toLowerCase(),h=!0}}c.prototype._isBuffer=!0;function he(u,s,o){var h=u[s];u[s]=u[o],u[o]=h}c.prototype.swap16=function(){var s=this.length;if(s%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var o=0;o<s;o+=2)he(this,o,o+1);return this},c.prototype.swap32=function(){var s=this.length;if(s%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var o=0;o<s;o+=4)he(this,o,o+3),he(this,o+1,o+2);return this},c.prototype.swap64=function(){var s=this.length;if(s%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var o=0;o<s;o+=8)he(this,o,o+7),he(this,o+1,o+6),he(this,o+2,o+5),he(this,o+3,o+4);return this},c.prototype.toString=function(){var s=this.length;return s===0?"":arguments.length===0?gr(this,0,s):fi.apply(this,arguments)},c.prototype.toLocaleString=c.prototype.toString,c.prototype.equals=function(s){if(!c.isBuffer(s))throw new TypeError("Argument must be a Buffer");return this===s?!0:c.compare(this,s)===0},c.prototype.inspect=function(){var s="",o=t.INSPECT_MAX_BYTES;return s=this.toString("hex",0,o).replace(/(.{2})/g,"$1 ").trim(),this.length>o&&(s+=" ... "),"<Buffer "+s+">"},n&&(c.prototype[n]=c.prototype.inspect),c.prototype.compare=function(s,o,h,d,p){if(Y(s,Uint8Array)&&(s=c.from(s,s.offset,s.byteLength)),!c.isBuffer(s))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof s);if(o===void 0&&(o=0),h===void 0&&(h=s?s.length:0),d===void 0&&(d=0),p===void 0&&(p=this.length),o<0||h>s.length||d<0||p>this.length)throw new RangeError("out of range index");if(d>=p&&o>=h)return 0;if(d>=p)return-1;if(o>=h)return 1;if(o>>>=0,h>>>=0,d>>>=0,p>>>=0,this===s)return 0;for(var g=p-d,T=h-o,S=Math.min(g,T),R=this.slice(d,p),V=s.slice(o,h),x=0;x<S;++x)if(R[x]!==V[x]){g=R[x],T=V[x];break}return g<T?-1:T<g?1:0};function pr(u,s,o,h,d){if(u.length===0)return-1;if(typeof o=="string"?(h=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,yt(o)&&(o=d?0:u.length-1),o<0&&(o=u.length+o),o>=u.length){if(d)return-1;o=u.length-1}else if(o<0)if(d)o=0;else return-1;if(typeof s=="string"&&(s=c.from(s,h)),c.isBuffer(s))return s.length===0?-1:mr(u,s,o,h,d);if(typeof s=="number")return s=s&255,typeof Uint8Array.prototype.indexOf=="function"?d?Uint8Array.prototype.indexOf.call(u,s,o):Uint8Array.prototype.lastIndexOf.call(u,s,o):mr(u,[s],o,h,d);throw new TypeError("val must be string, number or Buffer")}function mr(u,s,o,h,d){var p=1,g=u.length,T=s.length;if(h!==void 0&&(h=String(h).toLowerCase(),h==="ucs2"||h==="ucs-2"||h==="utf16le"||h==="utf-16le")){if(u.length<2||s.length<2)return-1;p=2,g/=2,T/=2,o/=2}function S(br,Tr){return p===1?br[Tr]:br.readUInt16BE(Tr*p)}var R;if(d){var V=-1;for(R=o;R<g;R++)if(S(u,R)===S(s,V===-1?0:R-V)){if(V===-1&&(V=R),R-V+1===T)return V*p}else V!==-1&&(R-=R-V),V=-1}else for(o+T>g&&(o=g-T),R=o;R>=0;R--){for(var x=!0,Le=0;Le<T;Le++)if(S(u,R+Le)!==S(s,Le)){x=!1;break}if(x)return R}return-1}c.prototype.includes=function(s,o,h){return this.indexOf(s,o,h)!==-1},c.prototype.indexOf=function(s,o,h){return pr(this,s,o,h,!0)},c.prototype.lastIndexOf=function(s,o,h){return pr(this,s,o,h,!1)};function di(u,s,o,h){o=Number(o)||0;var d=u.length-o;h?(h=Number(h),h>d&&(h=d)):h=d;var p=s.length;h>p/2&&(h=p/2);for(var g=0;g<h;++g){var T=parseInt(s.substr(g*2,2),16);if(yt(T))return g;u[o+g]=T}return g}function pi(u,s,o,h){return Ue(gt(s,u.length-o),u,o,h)}function mi(u,s,o,h){return Ue(Si(s),u,o,h)}function gi(u,s,o,h){return Ue(Ir(s),u,o,h)}function yi(u,s,o,h){return Ue(Ri(s,u.length-o),u,o,h)}c.prototype.write=function(s,o,h,d){if(o===void 0)d="utf8",h=this.length,o=0;else if(h===void 0&&typeof o=="string")d=o,h=this.length,o=0;else if(isFinite(o))o=o>>>0,isFinite(h)?(h=h>>>0,d===void 0&&(d="utf8")):(d=h,h=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var p=this.length-o;if((h===void 0||h>p)&&(h=p),s.length>0&&(h<0||o<0)||o>this.length)throw new RangeError("Attempt to write outside buffer bounds");d||(d="utf8");for(var g=!1;;)switch(d){case"hex":return di(this,s,o,h);case"utf8":case"utf-8":return pi(this,s,o,h);case"ascii":case"latin1":case"binary":return mi(this,s,o,h);case"base64":return gi(this,s,o,h);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return yi(this,s,o,h);default:if(g)throw new TypeError("Unknown encoding: "+d);d=(""+d).toLowerCase(),g=!0}},c.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function wi(u,s,o){return s===0&&o===u.length?e.fromByteArray(u):e.fromByteArray(u.slice(s,o))}function gr(u,s,o){o=Math.min(u.length,o);for(var h=[],d=s;d<o;){var p=u[d],g=null,T=p>239?4:p>223?3:p>191?2:1;if(d+T<=o){var S,R,V,x;switch(T){case 1:p<128&&(g=p);break;case 2:S=u[d+1],(S&192)===128&&(x=(p&31)<<6|S&63,x>127&&(g=x));break;case 3:S=u[d+1],R=u[d+2],(S&192)===128&&(R&192)===128&&(x=(p&15)<<12|(S&63)<<6|R&63,x>2047&&(x<55296||x>57343)&&(g=x));break;case 4:S=u[d+1],R=u[d+2],V=u[d+3],(S&192)===128&&(R&192)===128&&(V&192)===128&&(x=(p&15)<<18|(S&63)<<12|(R&63)<<6|V&63,x>65535&&x<1114112&&(g=x))}}g===null?(g=65533,T=1):g>65535&&(g-=65536,h.push(g>>>10&1023|55296),g=56320|g&1023),h.push(g),d+=T}return _i(h)}var yr=4096;function _i(u){var s=u.length;if(s<=yr)return String.fromCharCode.apply(String,u);for(var o="",h=0;h<s;)o+=String.fromCharCode.apply(String,u.slice(h,h+=yr));return o}function Ei(u,s,o){var h="";o=Math.min(u.length,o);for(var d=s;d<o;++d)h+=String.fromCharCode(u[d]&127);return h}function Ii(u,s,o){var h="";o=Math.min(u.length,o);for(var d=s;d<o;++d)h+=String.fromCharCode(u[d]);return h}function bi(u,s,o){var h=u.length;(!s||s<0)&&(s=0),(!o||o<0||o>h)&&(o=h);for(var d="",p=s;p<o;++p)d+=xi[u[p]];return d}function Ti(u,s,o){for(var h=u.slice(s,o),d="",p=0;p<h.length-1;p+=2)d+=String.fromCharCode(h[p]+h[p+1]*256);return d}c.prototype.slice=function(s,o){var h=this.length;s=~~s,o=o===void 0?h:~~o,s<0?(s+=h,s<0&&(s=0)):s>h&&(s=h),o<0?(o+=h,o<0&&(o=0)):o>h&&(o=h),o<s&&(o=s);var d=this.subarray(s,o);return Object.setPrototypeOf(d,c.prototype),d};function C(u,s,o){if(u%1!==0||u<0)throw new RangeError("offset is not uint");if(u+s>o)throw new RangeError("Trying to access beyond buffer length")}c.prototype.readUintLE=c.prototype.readUIntLE=function(s,o,h){s=s>>>0,o=o>>>0,h||C(s,o,this.length);for(var d=this[s],p=1,g=0;++g<o&&(p*=256);)d+=this[s+g]*p;return d},c.prototype.readUintBE=c.prototype.readUIntBE=function(s,o,h){s=s>>>0,o=o>>>0,h||C(s,o,this.length);for(var d=this[s+--o],p=1;o>0&&(p*=256);)d+=this[s+--o]*p;return d},c.prototype.readUint8=c.prototype.readUInt8=function(s,o){return s=s>>>0,o||C(s,1,this.length),this[s]},c.prototype.readUint16LE=c.prototype.readUInt16LE=function(s,o){return s=s>>>0,o||C(s,2,this.length),this[s]|this[s+1]<<8},c.prototype.readUint16BE=c.prototype.readUInt16BE=function(s,o){return s=s>>>0,o||C(s,2,this.length),this[s]<<8|this[s+1]},c.prototype.readUint32LE=c.prototype.readUInt32LE=function(s,o){return s=s>>>0,o||C(s,4,this.length),(this[s]|this[s+1]<<8|this[s+2]<<16)+this[s+3]*16777216},c.prototype.readUint32BE=c.prototype.readUInt32BE=function(s,o){return s=s>>>0,o||C(s,4,this.length),this[s]*16777216+(this[s+1]<<16|this[s+2]<<8|this[s+3])},c.prototype.readIntLE=function(s,o,h){s=s>>>0,o=o>>>0,h||C(s,o,this.length);for(var d=this[s],p=1,g=0;++g<o&&(p*=256);)d+=this[s+g]*p;return p*=128,d>=p&&(d-=Math.pow(2,8*o)),d},c.prototype.readIntBE=function(s,o,h){s=s>>>0,o=o>>>0,h||C(s,o,this.length);for(var d=o,p=1,g=this[s+--d];d>0&&(p*=256);)g+=this[s+--d]*p;return p*=128,g>=p&&(g-=Math.pow(2,8*o)),g},c.prototype.readInt8=function(s,o){return s=s>>>0,o||C(s,1,this.length),this[s]&128?(255-this[s]+1)*-1:this[s]},c.prototype.readInt16LE=function(s,o){s=s>>>0,o||C(s,2,this.length);var h=this[s]|this[s+1]<<8;return h&32768?h|4294901760:h},c.prototype.readInt16BE=function(s,o){s=s>>>0,o||C(s,2,this.length);var h=this[s+1]|this[s]<<8;return h&32768?h|4294901760:h},c.prototype.readInt32LE=function(s,o){return s=s>>>0,o||C(s,4,this.length),this[s]|this[s+1]<<8|this[s+2]<<16|this[s+3]<<24},c.prototype.readInt32BE=function(s,o){return s=s>>>0,o||C(s,4,this.length),this[s]<<24|this[s+1]<<16|this[s+2]<<8|this[s+3]},c.prototype.readFloatLE=function(s,o){return s=s>>>0,o||C(s,4,this.length),r.read(this,s,!0,23,4)},c.prototype.readFloatBE=function(s,o){return s=s>>>0,o||C(s,4,this.length),r.read(this,s,!1,23,4)},c.prototype.readDoubleLE=function(s,o){return s=s>>>0,o||C(s,8,this.length),r.read(this,s,!0,52,8)},c.prototype.readDoubleBE=function(s,o){return s=s>>>0,o||C(s,8,this.length),r.read(this,s,!1,52,8)};function N(u,s,o,h,d,p){if(!c.isBuffer(u))throw new TypeError('"buffer" argument must be a Buffer instance');if(s>d||s<p)throw new RangeError('"value" argument is out of bounds');if(o+h>u.length)throw new RangeError("Index out of range")}c.prototype.writeUintLE=c.prototype.writeUIntLE=function(s,o,h,d){if(s=+s,o=o>>>0,h=h>>>0,!d){var p=Math.pow(2,8*h)-1;N(this,s,o,h,p,0)}var g=1,T=0;for(this[o]=s&255;++T<h&&(g*=256);)this[o+T]=s/g&255;return o+h},c.prototype.writeUintBE=c.prototype.writeUIntBE=function(s,o,h,d){if(s=+s,o=o>>>0,h=h>>>0,!d){var p=Math.pow(2,8*h)-1;N(this,s,o,h,p,0)}var g=h-1,T=1;for(this[o+g]=s&255;--g>=0&&(T*=256);)this[o+g]=s/T&255;return o+h},c.prototype.writeUint8=c.prototype.writeUInt8=function(s,o,h){return s=+s,o=o>>>0,h||N(this,s,o,1,255,0),this[o]=s&255,o+1},c.prototype.writeUint16LE=c.prototype.writeUInt16LE=function(s,o,h){return s=+s,o=o>>>0,h||N(this,s,o,2,65535,0),this[o]=s&255,this[o+1]=s>>>8,o+2},c.prototype.writeUint16BE=c.prototype.writeUInt16BE=function(s,o,h){return s=+s,o=o>>>0,h||N(this,s,o,2,65535,0),this[o]=s>>>8,this[o+1]=s&255,o+2},c.prototype.writeUint32LE=c.prototype.writeUInt32LE=function(s,o,h){return s=+s,o=o>>>0,h||N(this,s,o,4,4294967295,0),this[o+3]=s>>>24,this[o+2]=s>>>16,this[o+1]=s>>>8,this[o]=s&255,o+4},c.prototype.writeUint32BE=c.prototype.writeUInt32BE=function(s,o,h){return s=+s,o=o>>>0,h||N(this,s,o,4,4294967295,0),this[o]=s>>>24,this[o+1]=s>>>16,this[o+2]=s>>>8,this[o+3]=s&255,o+4},c.prototype.writeIntLE=function(s,o,h,d){if(s=+s,o=o>>>0,!d){var p=Math.pow(2,8*h-1);N(this,s,o,h,p-1,-p)}var g=0,T=1,S=0;for(this[o]=s&255;++g<h&&(T*=256);)s<0&&S===0&&this[o+g-1]!==0&&(S=1),this[o+g]=(s/T>>0)-S&255;return o+h},c.prototype.writeIntBE=function(s,o,h,d){if(s=+s,o=o>>>0,!d){var p=Math.pow(2,8*h-1);N(this,s,o,h,p-1,-p)}var g=h-1,T=1,S=0;for(this[o+g]=s&255;--g>=0&&(T*=256);)s<0&&S===0&&this[o+g+1]!==0&&(S=1),this[o+g]=(s/T>>0)-S&255;return o+h},c.prototype.writeInt8=function(s,o,h){return s=+s,o=o>>>0,h||N(this,s,o,1,127,-128),s<0&&(s=255+s+1),this[o]=s&255,o+1},c.prototype.writeInt16LE=function(s,o,h){return s=+s,o=o>>>0,h||N(this,s,o,2,32767,-32768),this[o]=s&255,this[o+1]=s>>>8,o+2},c.prototype.writeInt16BE=function(s,o,h){return s=+s,o=o>>>0,h||N(this,s,o,2,32767,-32768),this[o]=s>>>8,this[o+1]=s&255,o+2},c.prototype.writeInt32LE=function(s,o,h){return s=+s,o=o>>>0,h||N(this,s,o,4,2147483647,-2147483648),this[o]=s&255,this[o+1]=s>>>8,this[o+2]=s>>>16,this[o+3]=s>>>24,o+4},c.prototype.writeInt32BE=function(s,o,h){return s=+s,o=o>>>0,h||N(this,s,o,4,2147483647,-2147483648),s<0&&(s=4294967295+s+1),this[o]=s>>>24,this[o+1]=s>>>16,this[o+2]=s>>>8,this[o+3]=s&255,o+4};function wr(u,s,o,h,d,p){if(o+h>u.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function _r(u,s,o,h,d){return s=+s,o=o>>>0,d||wr(u,s,o,4),r.write(u,s,o,h,23,4),o+4}c.prototype.writeFloatLE=function(s,o,h){return _r(this,s,o,!0,h)},c.prototype.writeFloatBE=function(s,o,h){return _r(this,s,o,!1,h)};function Er(u,s,o,h,d){return s=+s,o=o>>>0,d||wr(u,s,o,8),r.write(u,s,o,h,52,8),o+8}c.prototype.writeDoubleLE=function(s,o,h){return Er(this,s,o,!0,h)},c.prototype.writeDoubleBE=function(s,o,h){return Er(this,s,o,!1,h)},c.prototype.copy=function(s,o,h,d){if(!c.isBuffer(s))throw new TypeError("argument should be a Buffer");if(h||(h=0),!d&&d!==0&&(d=this.length),o>=s.length&&(o=s.length),o||(o=0),d>0&&d<h&&(d=h),d===h||s.length===0||this.length===0)return 0;if(o<0)throw new RangeError("targetStart out of bounds");if(h<0||h>=this.length)throw new RangeError("Index out of range");if(d<0)throw new RangeError("sourceEnd out of bounds");d>this.length&&(d=this.length),s.length-o<d-h&&(d=s.length-o+h);var p=d-h;return this===s&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(o,h,d):Uint8Array.prototype.set.call(s,this.subarray(h,d),o),p},c.prototype.fill=function(s,o,h,d){if(typeof s=="string"){if(typeof o=="string"?(d=o,o=0,h=this.length):typeof h=="string"&&(d=h,h=this.length),d!==void 0&&typeof d!="string")throw new TypeError("encoding must be a string");if(typeof d=="string"&&!c.isEncoding(d))throw new TypeError("Unknown encoding: "+d);if(s.length===1){var p=s.charCodeAt(0);(d==="utf8"&&p<128||d==="latin1")&&(s=p)}}else typeof s=="number"?s=s&255:typeof s=="boolean"&&(s=Number(s));if(o<0||this.length<o||this.length<h)throw new RangeError("Out of range index");if(h<=o)return this;o=o>>>0,h=h===void 0?this.length:h>>>0,s||(s=0);var g;if(typeof s=="number")for(g=o;g<h;++g)this[g]=s;else{var T=c.isBuffer(s)?s:c.from(s,d),S=T.length;if(S===0)throw new TypeError('The value "'+s+'" is invalid for argument "value"');for(g=0;g<h-o;++g)this[g+o]=T[g%S]}return this};var vi=/[^+/0-9A-Za-z-_]/g;function Ai(u){if(u=u.split("=")[0],u=u.trim().replace(vi,""),u.length<2)return"";for(;u.length%4!==0;)u=u+"=";return u}function gt(u,s){s=s||1/0;for(var o,h=u.length,d=null,p=[],g=0;g<h;++g){if(o=u.charCodeAt(g),o>55295&&o<57344){if(!d){if(o>56319){(s-=3)>-1&&p.push(239,191,189);continue}else if(g+1===h){(s-=3)>-1&&p.push(239,191,189);continue}d=o;continue}if(o<56320){(s-=3)>-1&&p.push(239,191,189),d=o;continue}o=(d-55296<<10|o-56320)+65536}else d&&(s-=3)>-1&&p.push(239,191,189);if(d=null,o<128){if((s-=1)<0)break;p.push(o)}else if(o<2048){if((s-=2)<0)break;p.push(o>>6|192,o&63|128)}else if(o<65536){if((s-=3)<0)break;p.push(o>>12|224,o>>6&63|128,o&63|128)}else if(o<1114112){if((s-=4)<0)break;p.push(o>>18|240,o>>12&63|128,o>>6&63|128,o&63|128)}else throw new Error("Invalid code point")}return p}function Si(u){for(var s=[],o=0;o<u.length;++o)s.push(u.charCodeAt(o)&255);return s}function Ri(u,s){for(var o,h,d,p=[],g=0;g<u.length&&!((s-=2)<0);++g)o=u.charCodeAt(g),h=o>>8,d=o%256,p.push(d),p.push(h);return p}function Ir(u){return e.toByteArray(Ai(u))}function Ue(u,s,o,h){for(var d=0;d<h&&!(d+o>=s.length||d>=u.length);++d)s[d+o]=u[d];return d}function Y(u,s){return u instanceof s||u!=null&&u.constructor!=null&&u.constructor.name!=null&&u.constructor.name===s.name}function yt(u){return u!==u}var xi=function(){for(var u="0123456789abcdef",s=new Array(256),o=0;o<16;++o)for(var h=o*16,d=0;d<16;++d)s[h+d]=u[o]+u[d];return s}()})(Pi);var He={},Mi={get exports(){return He},set exports(t){He=t}},P=Mi.exports={},J,X;function Pt(){throw new Error("setTimeout has not been defined")}function Dt(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?J=setTimeout:J=Pt}catch{J=Pt}try{typeof clearTimeout=="function"?X=clearTimeout:X=Dt}catch{X=Dt}})();function tn(t){if(J===setTimeout)return setTimeout(t,0);if((J===Pt||!J)&&setTimeout)return J=setTimeout,setTimeout(t,0);try{return J(t,0)}catch{try{return J.call(null,t,0)}catch{return J.call(this,t,0)}}}function Ui(t){if(X===clearTimeout)return clearTimeout(t);if((X===Dt||!X)&&clearTimeout)return X=clearTimeout,clearTimeout(t);try{return X(t)}catch{try{return X.call(null,t)}catch{return X.call(this,t)}}}var te=[],Ee=!1,de,qe=-1;function Li(){!Ee||!de||(Ee=!1,de.length?te=de.concat(te):qe=-1,te.length&&rn())}function rn(){if(!Ee){var t=tn(Li);Ee=!0;for(var e=te.length;e;){for(de=te,te=[];++qe<e;)de&&de[qe].run();qe=-1,e=te.length}de=null,Ee=!1,Ui(t)}}P.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];te.push(new nn(t,e)),te.length===1&&!Ee&&tn(rn)};function nn(t,e){this.fun=t,this.array=e}nn.prototype.run=function(){this.fun.apply(null,this.array)};P.title="browser";P.browser=!0;P.env={};P.argv=[];P.version="";P.versions={};function se(){}P.on=se;P.addListener=se;P.once=se;P.off=se;P.removeListener=se;P.removeAllListeners=se;P.emit=se;P.prependListener=se;P.prependOnceListener=se;P.listeners=function(t){return[]};P.binding=function(t){throw new Error("process.binding is not supported")};P.cwd=function(){return"/"};P.chdir=function(t){throw new Error("process.chdir is not supported")};P.umask=function(){return 0};var $i=function(t){function e(){var n=this||self;return delete t.prototype.__magic__,n}if(typeof globalThis=="object")return globalThis;if(this)return e();t.defineProperty(t.prototype,"__magic__",{configurable:!0,get:e});var r=__magic__;return r}(Object),vr=$i;/**
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
 */const sn=function(t){const e=[];let r=0;for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);i<128?e[r++]=i:i<2048?(e[r++]=i>>6|192,e[r++]=i&63|128):(i&64512)===55296&&n+1<t.length&&(t.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++n)&1023),e[r++]=i>>18|240,e[r++]=i>>12&63|128,e[r++]=i>>6&63|128,e[r++]=i&63|128):(e[r++]=i>>12|224,e[r++]=i>>6&63|128,e[r++]=i&63|128)}return e},ji=function(t){const e=[];let r=0,n=0;for(;r<t.length;){const i=t[r++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const a=t[r++];e[n++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=t[r++],l=t[r++],c=t[r++],f=((i&7)<<18|(a&63)<<12|(l&63)<<6|c&63)-65536;e[n++]=String.fromCharCode(55296+(f>>10)),e[n++]=String.fromCharCode(56320+(f&1023))}else{const a=t[r++],l=t[r++];e[n++]=String.fromCharCode((i&15)<<12|(a&63)<<6|l&63)}}return e.join("")},on={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<t.length;i+=3){const a=t[i],l=i+1<t.length,c=l?t[i+1]:0,f=i+2<t.length,m=f?t[i+2]:0,y=a>>2,w=(a&3)<<4|c>>4;let E=(c&15)<<2|m>>6,b=m&63;f||(b=64,l||(E=64)),n.push(r[y],r[w],r[E],r[b])}return n.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(sn(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ji(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const r=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<t.length;){const a=r[t.charAt(i++)],c=i<t.length?r[t.charAt(i)]:0;++i;const m=i<t.length?r[t.charAt(i)]:64;++i;const w=i<t.length?r[t.charAt(i)]:64;if(++i,a==null||c==null||m==null||w==null)throw new zi;const E=a<<2|c>>4;if(n.push(E),m!==64){const b=c<<4&240|m>>2;if(n.push(b),w!==64){const z=m<<6&192|w;n.push(z)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class zi extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qi=function(t){const e=sn(t);return on.encodeByteArray(e,!0)},Ge=function(t){return qi(t).replace(/\./g,"")},Hi=function(t){try{return on.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Gi(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof vr<"u")return vr;throw new Error("Unable to locate global object.")}/**
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
 */const Wi=()=>Gi().__FIREBASE_DEFAULTS__,Ki=()=>{if(typeof He>"u"||typeof He.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Yi=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Hi(t[1]);return e&&JSON.parse(e)},an=()=>{try{return Wi()||Ki()||Yi()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ji=t=>{var e,r;return(r=(e=an())===null||e===void 0?void 0:e.emulatorHosts)===null||r===void 0?void 0:r[t]},Xi=t=>{const e=Ji(t);if(!e)return;const r=e.lastIndexOf(":");if(r<=0||r+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(r+1),10);return e[0]==="["?[e.substring(1,r-1),n]:[e.substring(0,r),n]},cn=()=>{var t;return(t=an())===null||t===void 0?void 0:t.config};/**
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
 */class Qi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}wrapCallback(e){return(r,n)=>{r?this.reject(r):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(r):e(r,n))}}}/**
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
 */function Zi(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const r={alg:"none",type:"JWT"},n=e||"demo-project",i=t.iat||0,a=t.sub||t.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},t),c="";return[Ge(JSON.stringify(r)),Ge(JSON.stringify(l)),c].join(".")}function es(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function un(){try{return typeof indexedDB=="object"}catch{return!1}}function ln(){return new Promise((t,e)=>{try{let r=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),t(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var a;e(((a=i.error)===null||a===void 0?void 0:a.message)||"")}}catch(r){e(r)}})}function ts(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const rs="FirebaseError";class ue extends Error{constructor(e,r,n){super(r),this.code=e,this.customData=n,this.name=rs,Object.setPrototypeOf(this,ue.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,st.prototype.create)}}class st{constructor(e,r,n){this.service=e,this.serviceName=r,this.errors=n}create(e,...r){const n=r[0]||{},i=`${this.service}/${e}`,a=this.errors[e],l=a?ns(a,n):"Error",c=`${this.serviceName}: ${l} (${i}).`;return new ue(i,c,n)}}function ns(t,e){return t.replace(is,(r,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const is=/\{\$([^}]+)}/g;function We(t,e){if(t===e)return!0;const r=Object.keys(t),n=Object.keys(e);for(const i of r){if(!n.includes(i))return!1;const a=t[i],l=e[i];if(Ar(a)&&Ar(l)){if(!We(a,l))return!1}else if(a!==l)return!1}for(const i of n)if(!r.includes(i))return!1;return!0}function Ar(t){return t!==null&&typeof t=="object"}/**
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
 */const ss=1e3,os=2,as=4*60*60*1e3,cs=.5;function Sr(t,e=ss,r=os){const n=e*Math.pow(r,t),i=Math.round(cs*n*(Math.random()-.5)*2);return Math.min(as,n+i)}/**
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
 */function re(t){return t&&t._delegate?t._delegate:t}class ne{constructor(e,r,n){this.name=e,this.instanceFactory=r,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const fe="[DEFAULT]";/**
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
 */class us{constructor(e,r){this.name=e,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const r=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(r)){const n=new Qi;if(this.instancesDeferred.set(r,n),this.isInitialized(r)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:r});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(e){var r;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(r=e==null?void 0:e.optional)!==null&&r!==void 0?r:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(a){if(i)return null;throw a}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hs(e))try{this.getOrInitializeService({instanceIdentifier:fe})}catch{}for(const[r,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(r);try{const a=this.getOrInitializeService({instanceIdentifier:i});n.resolve(a)}catch{}}}}clearInstance(e=fe){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...e.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fe){return this.instances.has(e)}getOptions(e=fe){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:r={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:r});for(const[a,l]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(a);n===c&&l.resolve(i)}return i}onInit(e,r){var n;const i=this.normalizeInstanceIdentifier(r),a=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;a.add(e),this.onInitCallbacks.set(i,a);const l=this.instances.get(i);return l&&e(l,i),()=>{a.delete(e)}}invokeOnInitCallbacks(e,r){const n=this.onInitCallbacks.get(r);if(n)for(const i of n)try{i(e,r)}catch{}}getOrInitializeService({instanceIdentifier:e,options:r={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:ls(e),options:r}),this.instances.set(e,n),this.instancesOptions.set(e,r),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=fe){return this.component?this.component.multipleInstances?e:fe:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ls(t){return t===fe?void 0:t}function hs(t){return t.instantiationMode==="EAGER"}/**
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
 */class fs{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const r=this.getProvider(e.name);if(r.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);r.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const r=new us(e,this);return this.providers.set(e,r),r}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var A;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(A||(A={}));const ds={debug:A.DEBUG,verbose:A.VERBOSE,info:A.INFO,warn:A.WARN,error:A.ERROR,silent:A.SILENT},ps=A.INFO,ms={[A.DEBUG]:"log",[A.VERBOSE]:"log",[A.INFO]:"info",[A.WARN]:"warn",[A.ERROR]:"error"},gs=(t,e,...r)=>{if(e<t.logLevel)return;const n=new Date().toISOString(),i=ms[e];if(i)console[i](`[${n}]  ${t.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gt{constructor(e){this.name=e,this._logLevel=ps,this._logHandler=gs,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in A))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ds[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,A.DEBUG,...e),this._logHandler(this,A.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,A.VERBOSE,...e),this._logHandler(this,A.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,A.INFO,...e),this._logHandler(this,A.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,A.WARN,...e),this._logHandler(this,A.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,A.ERROR,...e),this._logHandler(this,A.ERROR,...e)}}const ys=(t,e)=>e.some(r=>t instanceof r);let Rr,xr;function ws(){return Rr||(Rr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _s(){return xr||(xr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hn=new WeakMap,Ct=new WeakMap,fn=new WeakMap,_t=new WeakMap,Wt=new WeakMap;function Es(t){const e=new Promise((r,n)=>{const i=()=>{t.removeEventListener("success",a),t.removeEventListener("error",l)},a=()=>{r(oe(t.result)),i()},l=()=>{n(t.error),i()};t.addEventListener("success",a),t.addEventListener("error",l)});return e.then(r=>{r instanceof IDBCursor&&hn.set(r,t)}).catch(()=>{}),Wt.set(e,t),e}function Is(t){if(Ct.has(t))return;const e=new Promise((r,n)=>{const i=()=>{t.removeEventListener("complete",a),t.removeEventListener("error",l),t.removeEventListener("abort",l)},a=()=>{r(),i()},l=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",a),t.addEventListener("error",l),t.addEventListener("abort",l)});Ct.set(t,e)}let Ft={get(t,e,r){if(t instanceof IDBTransaction){if(e==="done")return Ct.get(t);if(e==="objectStoreNames")return t.objectStoreNames||fn.get(t);if(e==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return oe(t[e])},set(t,e,r){return t[e]=r,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function bs(t){Ft=t(Ft)}function Ts(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...r){const n=t.call(Et(this),e,...r);return fn.set(n,e.sort?e.sort():[e]),oe(n)}:_s().includes(t)?function(...e){return t.apply(Et(this),e),oe(hn.get(this))}:function(...e){return oe(t.apply(Et(this),e))}}function vs(t){return typeof t=="function"?Ts(t):(t instanceof IDBTransaction&&Is(t),ys(t,ws())?new Proxy(t,Ft):t)}function oe(t){if(t instanceof IDBRequest)return Es(t);if(_t.has(t))return _t.get(t);const e=vs(t);return e!==t&&(_t.set(t,e),Wt.set(e,t)),e}const Et=t=>Wt.get(t);function dn(t,e,{blocked:r,upgrade:n,blocking:i,terminated:a}={}){const l=indexedDB.open(t,e),c=oe(l);return n&&l.addEventListener("upgradeneeded",f=>{n(oe(l.result),f.oldVersion,f.newVersion,oe(l.transaction),f)}),r&&l.addEventListener("blocked",f=>r(f.oldVersion,f.newVersion,f)),c.then(f=>{a&&f.addEventListener("close",()=>a()),i&&f.addEventListener("versionchange",m=>i(m.oldVersion,m.newVersion,m))}).catch(()=>{}),c}const As=["get","getKey","getAll","getAllKeys","count"],Ss=["put","add","delete","clear"],It=new Map;function Pr(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(It.get(e))return It.get(e);const r=e.replace(/FromIndex$/,""),n=e!==r,i=Ss.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||As.includes(r)))return;const a=async function(l,...c){const f=this.transaction(l,i?"readwrite":"readonly");let m=f.store;return n&&(m=m.index(c.shift())),(await Promise.all([m[r](...c),i&&f.done]))[0]};return It.set(e,a),a}bs(t=>({...t,get:(e,r,n)=>Pr(e,r)||t.get(e,r,n),has:(e,r)=>!!Pr(e,r)||t.has(e,r)}));/**
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
 */class Rs{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(xs(r)){const n=r.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(r=>r).join(" ")}}function xs(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const kt="@firebase/app",Dr="0.10.7";/**
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
 */const me=new Gt("@firebase/app"),Ps="@firebase/app-compat",Ds="@firebase/analytics-compat",Cs="@firebase/analytics",Fs="@firebase/app-check-compat",ks="@firebase/app-check",Vs="@firebase/auth",Bs="@firebase/auth-compat",Ns="@firebase/database",Os="@firebase/database-compat",Ms="@firebase/functions",Us="@firebase/functions-compat",Ls="@firebase/installations",$s="@firebase/installations-compat",js="@firebase/messaging",zs="@firebase/messaging-compat",qs="@firebase/performance",Hs="@firebase/performance-compat",Gs="@firebase/remote-config",Ws="@firebase/remote-config-compat",Ks="@firebase/storage",Ys="@firebase/storage-compat",Js="@firebase/firestore",Xs="@firebase/vertexai-preview",Qs="@firebase/firestore-compat",Zs="firebase",eo="10.12.4";/**
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
 */const Vt="[DEFAULT]",to={[kt]:"fire-core",[Ps]:"fire-core-compat",[Cs]:"fire-analytics",[Ds]:"fire-analytics-compat",[ks]:"fire-app-check",[Fs]:"fire-app-check-compat",[Vs]:"fire-auth",[Bs]:"fire-auth-compat",[Ns]:"fire-rtdb",[Os]:"fire-rtdb-compat",[Ms]:"fire-fn",[Us]:"fire-fn-compat",[Ls]:"fire-iid",[$s]:"fire-iid-compat",[js]:"fire-fcm",[zs]:"fire-fcm-compat",[qs]:"fire-perf",[Hs]:"fire-perf-compat",[Gs]:"fire-rc",[Ws]:"fire-rc-compat",[Ks]:"fire-gcs",[Ys]:"fire-gcs-compat",[Js]:"fire-fst",[Qs]:"fire-fst-compat",[Xs]:"fire-vertex","fire-js":"fire-js",[Zs]:"fire-js-all"};/**
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
 */const Ke=new Map,ro=new Map,Bt=new Map;function Cr(t,e){try{t.container.addComponent(e)}catch(r){me.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,r)}}function ce(t){const e=t.name;if(Bt.has(e))return me.debug(`There were multiple attempts to register component ${e}.`),!1;Bt.set(e,t);for(const r of Ke.values())Cr(r,t);for(const r of ro.values())Cr(r,t);return!0}function Ne(t,e){const r=t.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const no={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},ae=new st("app","Firebase",no);/**
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
 */class io{constructor(e,r,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ne("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ae.create("app-deleted",{appName:this._name})}}/**
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
 */const so=eo;function pn(t,e={}){let r=t;typeof e!="object"&&(e={name:e});const n=Object.assign({name:Vt,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw ae.create("bad-app-name",{appName:String(i)});if(r||(r=cn()),!r)throw ae.create("no-options");const a=Ke.get(i);if(a){if(We(r,a.options)&&We(n,a.config))return a;throw ae.create("duplicate-app",{appName:i})}const l=new fs(i);for(const f of Bt.values())l.addComponent(f);const c=new io(r,n,l);return Ke.set(i,c),c}function mn(t=Vt){const e=Ke.get(t);if(!e&&t===Vt&&cn())return pn();if(!e)throw ae.create("no-app",{appName:t});return e}function Z(t,e,r){var n;let i=(n=to[t])!==null&&n!==void 0?n:t;r&&(i+=`-${r}`);const a=i.match(/\s|\//),l=e.match(/\s|\//);if(a||l){const c=[`Unable to register library "${i}" with version "${e}":`];a&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&l&&c.push("and"),l&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),me.warn(c.join(" "));return}ce(new ne(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const oo="firebase-heartbeat-database",ao=1,De="firebase-heartbeat-store";let bt=null;function gn(){return bt||(bt=dn(oo,ao,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(De)}catch(r){console.warn(r)}}}}).catch(t=>{throw ae.create("idb-open",{originalErrorMessage:t.message})})),bt}async function co(t){try{const r=(await gn()).transaction(De),n=await r.objectStore(De).get(yn(t));return await r.done,n}catch(e){if(e instanceof ue)me.warn(e.message);else{const r=ae.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});me.warn(r.message)}}}async function Fr(t,e){try{const n=(await gn()).transaction(De,"readwrite");await n.objectStore(De).put(e,yn(t)),await n.done}catch(r){if(r instanceof ue)me.warn(r.message);else{const n=ae.create("idb-set",{originalErrorMessage:r==null?void 0:r.message});me.warn(n.message)}}}function yn(t){return`${t.name}!${t.options.appId}`}/**
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
 */const uo=1024,lo=30*24*60*60*1e3;class ho{constructor(e){this.container=e,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new po(r),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,r;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=kr();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)===null||r===void 0?void 0:r.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(l=>l.date===a)))return this._heartbeatsCache.heartbeats.push({date:a,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const c=new Date(l.date).valueOf();return Date.now()-c<=lo}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const r=kr(),{heartbeatsToSend:n,unsentEntries:i}=fo(this._heartbeatsCache.heartbeats),a=Ge(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=r,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}}function kr(){return new Date().toISOString().substring(0,10)}function fo(t,e=uo){const r=[];let n=t.slice();for(const i of t){const a=r.find(l=>l.agent===i.agent);if(a){if(a.dates.push(i.date),Vr(r)>e){a.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),Vr(r)>e){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}class po{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return un()?ln().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await co(this.app);return r!=null&&r.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var r;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fr(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var r;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fr(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Vr(t){return Ge(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function mo(t){ce(new ne("platform-logger",e=>new Rs(e),"PRIVATE")),ce(new ne("heartbeat",e=>new ho(e),"PRIVATE")),Z(kt,Dr,t),Z(kt,Dr,"esm2017"),Z("fire-js","")}mo("");var go="firebase",yo="10.12.4";/**
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
 */Z(go,yo,"app");/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const wo={};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */let wn="google#safe";function _o(){if(typeof window<"u")return window.trustedTypes}function _n(){var t;return wn!==""&&(t=_o())!==null&&t!==void 0?t:null}let $e;function Eo(){var t,e;if($e===void 0)try{$e=(e=(t=_n())===null||t===void 0?void 0:t.createPolicy(wn,{createHTML:r=>r,createScript:r=>r,createScriptURL:r=>r}))!==null&&e!==void 0?e:null}catch{$e=null}return $e}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */class En{constructor(e,r){this.privateDoNotAccessOrElseWrappedResourceUrl=e}toString(){return this.privateDoNotAccessOrElseWrappedResourceUrl.toString()}}function Br(t){var e;const r=t,n=(e=Eo())===null||e===void 0?void 0:e.createScriptURL(r);return n??new En(r,wo)}function Io(t){var e;if(!((e=_n())===null||e===void 0)&&e.isScriptURL(t))return t;if(t instanceof En)return t.privateDoNotAccessOrElseWrappedResourceUrl;{let r="";throw new Error(r)}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function bo(t,...e){if(e.length===0)return Br(t[0]);t[0].toLowerCase();let r=t[0];for(let n=0;n<e.length;n++)r+=encodeURIComponent(e[n])+t[n+1];return Br(r)}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function To(t){return vo("script",t)}function vo(t,e){var r;const n=e.document,i=(r=n.querySelector)===null||r===void 0?void 0:r.call(n,`${t}[nonce]`);return i&&(i.nonce||i.getAttribute("nonce"))||""}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Ao(t){const e=t.ownerDocument&&t.ownerDocument.defaultView,r=To(e||window);r&&t.setAttribute("nonce",r)}function So(t,e,r){t.src=Io(e),!(r!=null&&r.omitNonce)&&Ao(t)}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */globalThis&&globalThis.__awaiter;const In="@firebase/installations",Kt="0.6.8";/**
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
 */const bn=1e4,Tn=`w:${Kt}`,vn="FIS_v2",Ro="https://firebaseinstallations.googleapis.com/v1",xo=60*60*1e3,Po="installations",Do="Installations";/**
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
 */const Co={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},ge=new st(Po,Do,Co);function An(t){return t instanceof ue&&t.code.includes("request-failed")}/**
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
 */function Sn({projectId:t}){return`${Ro}/projects/${t}/installations`}function Rn(t){return{token:t.token,requestStatus:2,expiresIn:ko(t.expiresIn),creationTime:Date.now()}}async function xn(t,e){const n=(await e.json()).error;return ge.create("request-failed",{requestName:t,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function Pn({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Fo(t,{refreshToken:e}){const r=Pn(t);return r.append("Authorization",Vo(e)),r}async function Dn(t){const e=await t();return e.status>=500&&e.status<600?t():e}function ko(t){return Number(t.replace("s","000"))}function Vo(t){return`${vn} ${t}`}/**
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
 */async function Bo({appConfig:t,heartbeatServiceProvider:e},{fid:r}){const n=Sn(t),i=Pn(t),a=e.getImmediate({optional:!0});if(a){const m=await a.getHeartbeatsHeader();m&&i.append("x-firebase-client",m)}const l={fid:r,authVersion:vn,appId:t.appId,sdkVersion:Tn},c={method:"POST",headers:i,body:JSON.stringify(l)},f=await Dn(()=>fetch(n,c));if(f.ok){const m=await f.json();return{fid:m.fid||r,registrationStatus:2,refreshToken:m.refreshToken,authToken:Rn(m.authToken)}}else throw await xn("Create Installation",f)}/**
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
 */function Cn(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function No(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Oo=/^[cdef][\w-]{21}$/,Nt="";function Mo(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const r=Uo(t);return Oo.test(r)?r:Nt}catch{return Nt}}function Uo(t){return No(t).substr(0,22)}/**
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
 */function ot(t){return`${t.appName}!${t.appId}`}/**
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
 */const Fn=new Map;function kn(t,e){const r=ot(t);Vn(r,e),Lo(r,e)}function Vn(t,e){const r=Fn.get(t);if(r)for(const n of r)n(e)}function Lo(t,e){const r=$o();r&&r.postMessage({key:t,fid:e}),jo()}let pe=null;function $o(){return!pe&&"BroadcastChannel"in self&&(pe=new BroadcastChannel("[Firebase] FID Change"),pe.onmessage=t=>{Vn(t.data.key,t.data.fid)}),pe}function jo(){Fn.size===0&&pe&&(pe.close(),pe=null)}/**
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
 */const zo="firebase-installations-database",qo=1,ye="firebase-installations-store";let Tt=null;function Yt(){return Tt||(Tt=dn(zo,qo,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ye)}}})),Tt}async function Ye(t,e){const r=ot(t),i=(await Yt()).transaction(ye,"readwrite"),a=i.objectStore(ye),l=await a.get(r);return await a.put(e,r),await i.done,(!l||l.fid!==e.fid)&&kn(t,e.fid),e}async function Bn(t){const e=ot(t),n=(await Yt()).transaction(ye,"readwrite");await n.objectStore(ye).delete(e),await n.done}async function at(t,e){const r=ot(t),i=(await Yt()).transaction(ye,"readwrite"),a=i.objectStore(ye),l=await a.get(r),c=e(l);return c===void 0?await a.delete(r):await a.put(c,r),await i.done,c&&(!l||l.fid!==c.fid)&&kn(t,c.fid),c}/**
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
 */async function Jt(t){let e;const r=await at(t.appConfig,n=>{const i=Ho(n),a=Go(t,i);return e=a.registrationPromise,a.installationEntry});return r.fid===Nt?{installationEntry:await e}:{installationEntry:r,registrationPromise:e}}function Ho(t){const e=t||{fid:Mo(),registrationStatus:0};return Nn(e)}function Go(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ge.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const r={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},n=Wo(t,r);return{installationEntry:r,registrationPromise:n}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Ko(t)}:{installationEntry:e}}async function Wo(t,e){try{const r=await Bo(t,e);return Ye(t.appConfig,r)}catch(r){throw An(r)&&r.customData.serverCode===409?await Bn(t.appConfig):await Ye(t.appConfig,{fid:e.fid,registrationStatus:0}),r}}async function Ko(t){let e=await Nr(t.appConfig);for(;e.registrationStatus===1;)await Cn(100),e=await Nr(t.appConfig);if(e.registrationStatus===0){const{installationEntry:r,registrationPromise:n}=await Jt(t);return n||r}return e}function Nr(t){return at(t,e=>{if(!e)throw ge.create("installation-not-found");return Nn(e)})}function Nn(t){return Yo(t)?{fid:t.fid,registrationStatus:0}:t}function Yo(t){return t.registrationStatus===1&&t.registrationTime+bn<Date.now()}/**
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
 */async function Jo({appConfig:t,heartbeatServiceProvider:e},r){const n=Xo(t,r),i=Fo(t,r),a=e.getImmediate({optional:!0});if(a){const m=await a.getHeartbeatsHeader();m&&i.append("x-firebase-client",m)}const l={installation:{sdkVersion:Tn,appId:t.appId}},c={method:"POST",headers:i,body:JSON.stringify(l)},f=await Dn(()=>fetch(n,c));if(f.ok){const m=await f.json();return Rn(m)}else throw await xn("Generate Auth Token",f)}function Xo(t,{fid:e}){return`${Sn(t)}/${e}/authTokens:generate`}/**
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
 */async function Xt(t,e=!1){let r;const n=await at(t.appConfig,a=>{if(!On(a))throw ge.create("not-registered");const l=a.authToken;if(!e&&ea(l))return a;if(l.requestStatus===1)return r=Qo(t,e),a;{if(!navigator.onLine)throw ge.create("app-offline");const c=ra(a);return r=Zo(t,c),c}});return r?await r:n.authToken}async function Qo(t,e){let r=await Or(t.appConfig);for(;r.authToken.requestStatus===1;)await Cn(100),r=await Or(t.appConfig);const n=r.authToken;return n.requestStatus===0?Xt(t,e):n}function Or(t){return at(t,e=>{if(!On(e))throw ge.create("not-registered");const r=e.authToken;return na(r)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Zo(t,e){try{const r=await Jo(t,e),n=Object.assign(Object.assign({},e),{authToken:r});return await Ye(t.appConfig,n),r}catch(r){if(An(r)&&(r.customData.serverCode===401||r.customData.serverCode===404))await Bn(t.appConfig);else{const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ye(t.appConfig,n)}throw r}}function On(t){return t!==void 0&&t.registrationStatus===2}function ea(t){return t.requestStatus===2&&!ta(t)}function ta(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+xo}function ra(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function na(t){return t.requestStatus===1&&t.requestTime+bn<Date.now()}/**
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
 */async function ia(t){const e=t,{installationEntry:r,registrationPromise:n}=await Jt(e);return n?n.catch(console.error):Xt(e).catch(console.error),r.fid}/**
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
 */async function sa(t,e=!1){const r=t;return await oa(r),(await Xt(r,e)).token}async function oa(t){const{registrationPromise:e}=await Jt(t);e&&await e}/**
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
 */function aa(t){if(!t||!t.options)throw vt("App Configuration");if(!t.name)throw vt("App Name");const e=["projectId","apiKey","appId"];for(const r of e)if(!t.options[r])throw vt(r);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function vt(t){return ge.create("missing-app-config-values",{valueName:t})}/**
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
 */const Mn="installations",ca="installations-internal",ua=t=>{const e=t.getProvider("app").getImmediate(),r=aa(e),n=Ne(e,"heartbeat");return{app:e,appConfig:r,heartbeatServiceProvider:n,_delete:()=>Promise.resolve()}},la=t=>{const e=t.getProvider("app").getImmediate(),r=Ne(e,Mn).getImmediate();return{getId:()=>ia(r),getToken:i=>sa(r,i)}};function ha(){ce(new ne(Mn,ua,"PUBLIC")),ce(new ne(ca,la,"PRIVATE"))}ha();Z(In,Kt);Z(In,Kt,"esm2017");/**
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
 */const Je="analytics",fa="firebase_id",da="origin",pa=60*1e3,ma="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ga="https://www.googletagmanager.com/gtag/js";/**
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
 */const U=new Gt("@firebase/analytics");/**
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
 */function Un(t){return Promise.all(t.map(e=>e.catch(r=>r)))}function ya(t,e){const r=document.createElement("script"),n=bo`https://www.googletagmanager.com/gtag/js?l=${t}&id=${e}`;So(r,n),r.async=!0,document.head.appendChild(r)}function wa(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function _a(t,e,r,n,i,a){const l=n[i];try{if(l)await e[l];else{const f=(await Un(r)).find(m=>m.measurementId===i);f&&await e[f.appId]}}catch(c){U.error(c)}t("config",i,a)}async function Ea(t,e,r,n,i){try{let a=[];if(i&&i.send_to){let l=i.send_to;Array.isArray(l)||(l=[l]);const c=await Un(r);for(const f of l){const m=c.find(w=>w.measurementId===f),y=m&&e[m.appId];if(y)a.push(y);else{a=[];break}}}a.length===0&&(a=Object.values(e)),await Promise.all(a),t("event",n,i||{})}catch(a){U.error(a)}}function Ia(t,e,r,n){async function i(a,...l){try{if(a==="event"){const[c,f]=l;await Ea(t,e,r,c,f)}else if(a==="config"){const[c,f]=l;await _a(t,e,r,n,c,f)}else if(a==="consent"){const[c,f]=l;t("consent",c,f)}else if(a==="get"){const[c,f,m]=l;t("get",c,f,m)}else if(a==="set"){const[c]=l;t("set",c)}else t(a,...l)}catch(c){U.error(c)}}return i}function ba(t,e,r,n,i){let a=function(...l){window[n].push(arguments)};return window[i]&&typeof window[i]=="function"&&(a=window[i]),window[i]=Ia(a,t,e,r),{gtagCore:a,wrappedGtag:window[i]}}function Ta(t){const e=window.document.getElementsByTagName("script");for(const r of Object.values(e))if(r.src&&r.src.includes(ga)&&r.src.includes(t))return r;return null}/**
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
 */const va={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},G=new st("analytics","Analytics",va);/**
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
 */const Aa=30,Sa=1e3;class Ra{constructor(e={},r=Sa){this.throttleMetadata=e,this.intervalMillis=r}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,r){this.throttleMetadata[e]=r}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Ln=new Ra;function xa(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Pa(t){var e;const{appId:r,apiKey:n}=t,i={method:"GET",headers:xa(n)},a=ma.replace("{app-id}",r),l=await fetch(a,i);if(l.status!==200&&l.status!==304){let c="";try{const f=await l.json();!((e=f.error)===null||e===void 0)&&e.message&&(c=f.error.message)}catch{}throw G.create("config-fetch-failed",{httpStatus:l.status,responseMessage:c})}return l.json()}async function Da(t,e=Ln,r){const{appId:n,apiKey:i,measurementId:a}=t.options;if(!n)throw G.create("no-app-id");if(!i){if(a)return{measurementId:a,appId:n};throw G.create("no-api-key")}const l=e.getThrottleMetadata(n)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new ka;return setTimeout(async()=>{c.abort()},r!==void 0?r:pa),$n({appId:n,apiKey:i,measurementId:a},l,c,e)}async function $n(t,{throttleEndTimeMillis:e,backoffCount:r},n,i=Ln){var a;const{appId:l,measurementId:c}=t;try{await Ca(n,e)}catch(f){if(c)return U.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:l,measurementId:c};throw f}try{const f=await Pa(t);return i.deleteThrottleMetadata(l),f}catch(f){const m=f;if(!Fa(m)){if(i.deleteThrottleMetadata(l),c)return U.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${m==null?void 0:m.message}]`),{appId:l,measurementId:c};throw f}const y=Number((a=m==null?void 0:m.customData)===null||a===void 0?void 0:a.httpStatus)===503?Sr(r,i.intervalMillis,Aa):Sr(r,i.intervalMillis),w={throttleEndTimeMillis:Date.now()+y,backoffCount:r+1};return i.setThrottleMetadata(l,w),U.debug(`Calling attemptFetch again in ${y} millis`),$n(t,w,n,i)}}function Ca(t,e){return new Promise((r,n)=>{const i=Math.max(e-Date.now(),0),a=setTimeout(r,i);t.addEventListener(()=>{clearTimeout(a),n(G.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Fa(t){if(!(t instanceof ue)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class ka{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Va(t,e,r,n,i){if(i&&i.global){t("event",r,n);return}else{const a=await e,l=Object.assign(Object.assign({},n),{send_to:a});t("event",r,l)}}/**
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
 */async function Ba(){if(un())try{await ln()}catch(t){return U.warn(G.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return U.warn(G.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Na(t,e,r,n,i,a,l){var c;const f=Da(t);f.then(b=>{r[b.measurementId]=b.appId,t.options.measurementId&&b.measurementId!==t.options.measurementId&&U.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${b.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(b=>U.error(b)),e.push(f);const m=Ba().then(b=>{if(b)return n.getId()}),[y,w]=await Promise.all([f,m]);Ta(a)||ya(a,y.measurementId),i("js",new Date);const E=(c=l==null?void 0:l.config)!==null&&c!==void 0?c:{};return E[da]="firebase",E.update=!0,w!=null&&(E[fa]=w),i("config",y.measurementId,E),y.measurementId}/**
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
 */class Oa{constructor(e){this.app=e}_delete(){return delete Se[this.app.options.appId],Promise.resolve()}}let Se={},Mr=[];const Ur={};let At="dataLayer",Ma="gtag",Lr,jn,$r=!1;function Ua(){const t=[];if(es()&&t.push("This is a browser extension environment."),ts()||t.push("Cookies are not available."),t.length>0){const e=t.map((n,i)=>`(${i+1}) ${n}`).join(" "),r=G.create("invalid-analytics-context",{errorInfo:e});U.warn(r.message)}}function La(t,e,r){Ua();const n=t.options.appId;if(!n)throw G.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)U.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw G.create("no-api-key");if(Se[n]!=null)throw G.create("already-exists",{id:n});if(!$r){wa(At);const{wrappedGtag:a,gtagCore:l}=ba(Se,Mr,Ur,At,Ma);jn=a,Lr=l,$r=!0}return Se[n]=Na(t,Mr,Ur,e,Lr,At,r),new Oa(t)}function $a(t=mn()){t=re(t);const e=Ne(t,Je);return e.isInitialized()?e.getImmediate():ja(t)}function ja(t,e={}){const r=Ne(t,Je);if(r.isInitialized()){const i=r.getImmediate();if(We(e,r.getOptions()))return i;throw G.create("already-initialized")}return r.initialize({options:e})}function za(t,e,r,n){t=re(t),Va(jn,Se[t.app.options.appId],e,r,n).catch(i=>U.error(i))}const jr="@firebase/analytics",zr="0.10.6";function qa(){ce(new ne(Je,(e,{options:r})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return La(n,i,r)},"PUBLIC")),ce(new ne("analytics-internal",t,"PRIVATE")),Z(jr,zr),Z(jr,zr,"esm2017");function t(e){try{const r=e.getProvider(Je).getImmediate();return{logEvent:(n,i,a)=>za(r,n,i,a)}}catch(r){throw G.create("interop-component-reg-failed",{reason:r})}}}qa();/**
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
 */class O{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}O.UNAUTHENTICATED=new O(null),O.GOOGLE_CREDENTIALS=new O("google-credentials-uid"),O.FIRST_PARTY=new O("first-party-uid"),O.MOCK_USER=new O("mock-user");/**
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
 */let Ae="10.12.3";/**
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
 */const be=new Gt("@firebase/firestore");function Xe(t,...e){if(be.logLevel<=A.DEBUG){const r=e.map(Zt);be.debug(`Firestore (${Ae}): ${t}`,...r)}}function Qt(t,...e){if(be.logLevel<=A.ERROR){const r=e.map(Zt);be.error(`Firestore (${Ae}): ${t}`,...r)}}function zn(t,...e){if(be.logLevel<=A.WARN){const r=e.map(Zt);be.warn(`Firestore (${Ae}): ${t}`,...r)}}function Zt(t){if(typeof t=="string")return t;try{/**
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
*/return function(r){return JSON.stringify(r)}(t)}catch{return t}}/**
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
 */function D(t="Unexpected state"){const e=`FIRESTORE (${Ae}) INTERNAL ASSERTION FAILED: `+t;throw Qt(e),new Error(e)}function L(t,e){t||D()}function qn(t,e){return t}/**
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
 */const qr="ok",Ha="cancelled",Re="unknown",v="invalid-argument",Ga="deadline-exceeded",Wa="not-found",Ka="permission-denied",Ot="unauthenticated",Ya="resource-exhausted",Te="failed-precondition",Ja="aborted",Xa="out-of-range",Qa="unimplemented",Za="internal",ec="unavailable";class _ extends ue{constructor(e,r){super(e,r),this.code=e,this.message=r,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Hn{constructor(e,r){this.user=r,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class tc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,r){e.enqueueRetryable(()=>r(O.UNAUTHENTICATED))}shutdown(){}}class rc{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,r){this.changeListener=r,e.enqueueRetryable(()=>r(this.token.user))}shutdown(){this.changeListener=null}}class nc{constructor(e){this.auth=null,e.onInit(r=>{this.auth=r})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(L(typeof e.accessToken=="string"),new Hn(e.accessToken,new O(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,r){}shutdown(){}}class ic{constructor(e,r,n){this.t=e,this.i=r,this.o=n,this.type="FirstParty",this.user=O.FIRST_PARTY,this.u=new Map}l(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.l();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class sc{constructor(e,r,n){this.t=e,this.i=r,this.o=n}getToken(){return Promise.resolve(new ic(this.t,this.i,this.o))}start(e,r){e.enqueueRetryable(()=>r(O.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class oc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ac{constructor(e){this.h=e,this.appCheck=null,e.onInit(r=>{this.appCheck=r})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(L(typeof e.token=="string"),new oc(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,r){}shutdown(){}}/**
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
 */class cc{constructor(e,r,n,i,a,l,c,f,m){this.databaseId=e,this.appId=r,this.persistenceKey=n,this.host=i,this.ssl=a,this.forceLongPolling=l,this.autoDetectLongPolling=c,this.longPollingOptions=f,this.useFetchStreams=m}}class Ce{constructor(e,r){this.projectId=e,this.database=r||"(default)"}static empty(){return new Ce("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ce&&e.projectId===this.projectId&&e.database===this.database}}class Fe{constructor(e,r,n){r===void 0?r=0:r>e.length&&D(),n===void 0?n=e.length-r:n>e.length-r&&D(),this.segments=e,this.offset=r,this.len=n}get length(){return this.len}isEqual(e){return Fe.comparator(this,e)===0}child(e){const r=this.segments.slice(this.offset,this.limit());return e instanceof Fe?e.forEach(n=>{r.push(n)}):r.push(e),this.construct(r)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let r=0;r<this.length;r++)if(this.get(r)!==e.get(r))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let r=0;r<this.length;r++)if(this.get(r)!==e.get(r))return!1;return!0}forEach(e){for(let r=this.offset,n=this.limit();r<n;r++)e(this.segments[r])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,r){const n=Math.min(e.length,r.length);for(let i=0;i<n;i++){const a=e.get(i),l=r.get(i);if(a<l)return-1;if(a>l)return 1}return e.length<r.length?-1:e.length>r.length?1:0}}class k extends Fe{construct(e,r,n){return new k(e,r,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const r=[];for(const n of e){if(n.indexOf("//")>=0)throw new _(v,`Invalid segment (${n}). Paths must not contain // in them.`);r.push(...n.split("/").filter(i=>i.length>0))}return new k(r)}static emptyPath(){return new k([])}}const uc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class W extends Fe{construct(e,r,n){return new W(e,r,n)}static isValidIdentifier(e){return uc.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),W.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new W(["__name__"])}static fromServerFormat(e){const r=[];let n="",i=0;const a=()=>{if(n.length===0)throw new _(v,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);r.push(n),n=""};let l=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new _(v,"Path has trailing escape character: "+e);const f=e[i+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new _(v,"Path has invalid escape sequence: "+e);n+=f,i+=2}else c==="`"?(l=!l,i++):c!=="."||l?(n+=c,i++):(a(),i++)}if(a(),l)throw new _(v,"Unterminated ` in path: "+e);return new W(r)}static emptyPath(){return new W([])}}/**
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
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(k.fromString(e))}static fromName(e){return new K(k.fromString(e).popFirst(5))}static empty(){return new K(k.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&k.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,r){return k.comparator(e.path,r.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new k(e.slice()))}}/**
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
 */function lc(t,e,r){if(!r)throw new _(v,`Function ${t}() cannot be called with an empty ${e}.`)}function Hr(t){if(!K.isDocumentKey(t))throw new _(v,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function er(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":D()}function ct(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new _(v,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const r=er(t);throw new _(v,`Expected type '${e.name}', but it was: ${r}`)}}return t}/**
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
 */function Gn(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */let je=null;function hc(){return je===null?je=function(){return 268435456+Math.round(2147483648*Math.random())}():je++,"0x"+je.toString(16)}function Qe(t){return t===0&&1/t==-1/0}/**
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
 */const fc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */var Gr,I;function Wr(t){if(t===void 0)return Qt("RPC_ERROR","HTTP error has no status"),Re;switch(t){case 200:return qr;case 400:return Te;case 401:return Ot;case 403:return Ka;case 404:return Wa;case 409:return Ja;case 416:return Xa;case 429:return Ya;case 499:return Ha;case 500:return Re;case 501:return Qa;case 503:return ec;case 504:return Ga;default:return t>=200&&t<300?qr:t>=400&&t<500?Te:t>=500&&t<600?Za:Re}}/**
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
 */(I=Gr||(Gr={}))[I.OK=0]="OK",I[I.CANCELLED=1]="CANCELLED",I[I.UNKNOWN=2]="UNKNOWN",I[I.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",I[I.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",I[I.NOT_FOUND=5]="NOT_FOUND",I[I.ALREADY_EXISTS=6]="ALREADY_EXISTS",I[I.PERMISSION_DENIED=7]="PERMISSION_DENIED",I[I.UNAUTHENTICATED=16]="UNAUTHENTICATED",I[I.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",I[I.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",I[I.ABORTED=10]="ABORTED",I[I.OUT_OF_RANGE=11]="OUT_OF_RANGE",I[I.UNIMPLEMENTED=12]="UNIMPLEMENTED",I[I.INTERNAL=13]="INTERNAL",I[I.UNAVAILABLE=14]="UNAVAILABLE",I[I.DATA_LOSS=15]="DATA_LOSS";class dc extends class{constructor(r){this.databaseInfo=r,this.databaseId=r.databaseId;const n=r.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.m=n+"://"+r.host,this.A=`projects/${i}/databases/${a}`,this.T=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${a}`}get R(){return!1}P(r,n,i,a,l){const c=hc(),f=this.I(r,n.toUriEncodedString());Xe("RestConnection",`Sending RPC '${r}' ${c}:`,f,i);const m={"google-cloud-resource-prefix":this.A,"x-goog-request-params":this.T};return this.V(m,a,l),this.p(r,f,m,i).then(y=>(Xe("RestConnection",`Received RPC '${r}' ${c}: `,y),y),y=>{throw zn("RestConnection",`RPC '${r}' ${c} failed with error: `,y,"url: ",f,"request:",i),y})}g(r,n,i,a,l,c){return this.P(r,n,i,a,l)}V(r,n,i){r["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ae}(),r["Content-Type"]="text/plain",this.databaseInfo.appId&&(r["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((a,l)=>r[l]=a),i&&i.headers.forEach((a,l)=>r[l]=a)}I(r,n){const i=fc[r];return`${this.m}/v1/${n}:${i}`}terminate(){}}{constructor(e,r){super(e),this.F=r}v(e,r){throw new Error("Not supported by FetchConnection")}async p(e,r,n,i){var a;const l=JSON.stringify(i);let c;try{c=await this.F(r,{method:"POST",headers:n,body:l})}catch(f){const m=f;throw new _(Wr(m.status),"Request failed with error: "+m.statusText)}if(!c.ok){let f=await c.json();Array.isArray(f)&&(f=f[0]);const m=(a=f==null?void 0:f.error)===null||a===void 0?void 0:a.message;throw new _(Wr(c.status),`Request failed with error: ${m??c.statusText}`)}return c.json()}}/**
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
 */function pc(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),r=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(r);else for(let n=0;n<t;n++)r[n]=Math.floor(256*Math.random());return r}/**
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
 */class mc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=pc(40);for(let a=0;a<i.length;++a)n.length<20&&i[a]<r&&(n+=e.charAt(i[a]%e.length))}return n}}function ke(t,e){return t<e?-1:t>e?1:0}function Wn(t,e,r){return t.length===e.length&&t.every((n,i)=>r(n,e[i]))}/**
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
 */function Kr(t){let e=0;for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&e++;return e}function Oe(t,e){for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&e(r,t[r])}/**
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
 */class gc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ie{constructor(e){this.binaryString=e}static fromBase64String(e){const r=function(i){try{return atob(i)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new gc("Invalid base64 string: "+a):a}}(e);return new ie(r)}static fromUint8Array(e){const r=function(i){let a="";for(let l=0;l<i.length;++l)a+=String.fromCharCode(i[l]);return a}(e);return new ie(r)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(r){return btoa(r)}(this.binaryString)}toUint8Array(){return function(r){const n=new Uint8Array(r.length);for(let i=0;i<r.length;i++)n[i]=r.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ie.EMPTY_BYTE_STRING=new ie("");const yc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ve(t){if(L(!!t),typeof t=="string"){let e=0;const r=yc.exec(t);if(L(!!r),r[1]){let i=r[1];i=(i+"000000000").substr(0,9),e=Number(i)}const n=new Date(t);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:M(t.seconds),nanos:M(t.nanos)}}function M(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Mt(t){return typeof t=="string"?ie.fromBase64String(t):ie.fromUint8Array(t)}/**
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
 */class ${constructor(e,r){if(this.seconds=e,this.nanoseconds=r,r<0)throw new _(v,"Timestamp nanoseconds out of range: "+r);if(r>=1e9)throw new _(v,"Timestamp nanoseconds out of range: "+r);if(e<-62135596800)throw new _(v,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new _(v,"Timestamp seconds out of range: "+e)}static now(){return $.fromMillis(Date.now())}static fromDate(e){return $.fromMillis(e.getTime())}static fromMillis(e){const r=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*r));return new $(r,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ke(this.nanoseconds,e.nanoseconds):ke(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */function Kn(t){var e,r;return((r=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||r===void 0?void 0:r.stringValue)==="server_timestamp"}function Yn(t){const e=t.mapValue.fields.__previous_value__;return Kn(e)?Yn(e):e}function Ut(t){const e=Ve(t.mapValue.fields.__local_write_time__.timestampValue);return new $(e.seconds,e.nanos)}function Lt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Kn(t)?4:function(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(t)?9007199254740991:10:D()}function $t(t,e){if(t===e)return!0;const r=Lt(t);if(r!==Lt(e))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ut(t).isEqual(Ut(e));case 3:return function(i,a){if(typeof i.timestampValue=="string"&&typeof a.timestampValue=="string"&&i.timestampValue.length===a.timestampValue.length)return i.timestampValue===a.timestampValue;const l=Ve(i.timestampValue),c=Ve(a.timestampValue);return l.seconds===c.seconds&&l.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,a){return Mt(i.bytesValue).isEqual(Mt(a.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,a){return M(i.geoPointValue.latitude)===M(a.geoPointValue.latitude)&&M(i.geoPointValue.longitude)===M(a.geoPointValue.longitude)}(t,e);case 2:return function(i,a){if("integerValue"in i&&"integerValue"in a)return M(i.integerValue)===M(a.integerValue);if("doubleValue"in i&&"doubleValue"in a){const l=M(i.doubleValue),c=M(a.doubleValue);return l===c?Qe(l)===Qe(c):isNaN(l)&&isNaN(c)}return!1}(t,e);case 9:return Wn(t.arrayValue.values||[],e.arrayValue.values||[],$t);case 10:return function(i,a){const l=i.mapValue.fields||{},c=a.mapValue.fields||{};if(Kr(l)!==Kr(c))return!1;for(const f in l)if(l.hasOwnProperty(f)&&(c[f]===void 0||!$t(l[f],c[f])))return!1;return!0}(t,e);default:return D()}}function St(t){return!!t&&"mapValue"in t}function xe(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Oe(t.mapValue.fields,(r,n)=>e.mapValue.fields[r]=xe(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let r=0;r<(t.arrayValue.values||[]).length;++r)e.arrayValue.values[r]=xe(t.arrayValue.values[r]);return e}return Object.assign({},t)}/**
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
 */class B{constructor(e){this.timestamp=e}static fromTimestamp(e){return new B(e)}static min(){return new B(new $(0,0))}static max(){return new B(new $(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ze{constructor(e,r){this.comparator=e,this.root=r||F.EMPTY}insert(e,r){return new Ze(this.comparator,this.root.insert(e,r,this.comparator).copy(null,null,F.BLACK,null,null))}remove(e){return new Ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,F.BLACK,null,null))}get(e){let r=this.root;for(;!r.isEmpty();){const n=this.comparator(e,r.key);if(n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}indexOf(e){let r=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return r+n.left.size;i<0?n=n.left:(r+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((r,n)=>(e(r,n),!1))}toString(){const e=[];return this.inorderTraversal((r,n)=>(e.push(`${r}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ze(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ze(this.root,e,this.comparator,!1)}getReverseIterator(){return new ze(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ze(this.root,e,this.comparator,!0)}}class ze{constructor(e,r,n,i){this.isReverse=i,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=r?n(e.key,r):1,r&&i&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const r={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return r}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class F{constructor(e,r,n,i,a){this.key=e,this.value=r,this.color=n??F.RED,this.left=i??F.EMPTY,this.right=a??F.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,r,n,i,a){return new F(e??this.key,r??this.value,n??this.color,i??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,r,n){let i=this;const a=n(e,i.key);return i=a<0?i.copy(null,null,null,i.left.insert(e,r,n),null):a===0?i.copy(null,r,null,null,null):i.copy(null,null,null,null,i.right.insert(e,r,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return F.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,r){let n,i=this;if(r(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,r),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),r(e,i.key)===0){if(i.right.isEmpty())return F.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,r))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,F.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,F.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),r=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,r)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw D();const e=this.left.check();if(e!==this.right.check())throw D();return e+(this.isRed()?0:1)}}F.EMPTY=null,F.RED=!0,F.BLACK=!1;F.EMPTY=new class{constructor(){this.size=0}get key(){throw D()}get value(){throw D()}get color(){throw D()}get left(){throw D()}get right(){throw D()}copy(e,r,n,i,a){return this}insert(e,r,n){return new F(e,r)}remove(e,r){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class et{constructor(e){this.comparator=e,this.data=new Ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((r,n)=>(e(r),!1))}forEachInRange(e,r){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;r(i.key)}}forEachWhile(e,r){let n;for(n=r!==void 0?this.data.getIteratorFrom(r):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const r=this.data.getIteratorFrom(e);return r.hasNext()?r.getNext().key:null}getIterator(){return new Yr(this.data.getIterator())}getIteratorFrom(e){return new Yr(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let r=this;return r.size<e.size&&(r=e,e=this),e.forEach(n=>{r=r.add(n)}),r}isEqual(e){if(!(e instanceof et)||this.size!==e.size)return!1;const r=this.data.getIterator(),n=e.data.getIterator();for(;r.hasNext();){const i=r.getNext().key,a=n.getNext().key;if(this.comparator(i,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(r=>{e.push(r)}),e}toString(){const e=[];return this.forEach(r=>e.push(r)),"SortedSet("+e.toString()+")"}copy(e){const r=new et(this.comparator);return r.data=e,r}}class Yr{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class we{constructor(e){this.fields=e,e.sort(W.comparator)}static empty(){return new we([])}unionWith(e){let r=new et(W.comparator);for(const n of this.fields)r=r.add(n);for(const n of e)r=r.add(n);return new we(r.toArray())}covers(e){for(const r of this.fields)if(r.isPrefixOf(e))return!0;return!1}isEqual(e){return Wn(this.fields,e.fields,(r,n)=>r.isEqual(n))}}/**
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
 */class H{constructor(e){this.value=e}static empty(){return new H({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let r=this.value;for(let n=0;n<e.length-1;++n)if(r=(r.mapValue.fields||{})[e.get(n)],!St(r))return null;return r=(r.mapValue.fields||{})[e.lastSegment()],r||null}}set(e,r){this.getFieldsMap(e.popLast())[e.lastSegment()]=xe(r)}setAll(e){let r=W.emptyPath(),n={},i=[];e.forEach((l,c)=>{if(!r.isImmediateParentOf(c)){const f=this.getFieldsMap(r);this.applyChanges(f,n,i),n={},i=[],r=c.popLast()}l?n[c.lastSegment()]=xe(l):i.push(c.lastSegment())});const a=this.getFieldsMap(r);this.applyChanges(a,n,i)}delete(e){const r=this.field(e.popLast());St(r)&&r.mapValue.fields&&delete r.mapValue.fields[e.lastSegment()]}isEqual(e){return $t(this.value,e.value)}getFieldsMap(e){let r=this.value;r.mapValue.fields||(r.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=r.mapValue.fields[e.get(n)];St(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},r.mapValue.fields[e.get(n)]=i),r=i}return r.mapValue.fields}applyChanges(e,r,n){Oe(r,(i,a)=>e[i]=a);for(const i of n)delete e[i]}clone(){return new H(xe(this.value))}}/**
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
 */class ee{constructor(e,r,n,i,a,l,c){this.key=e,this.documentType=r,this.version=n,this.readTime=i,this.createTime=a,this.data=l,this.documentState=c}static newInvalidDocument(e){return new ee(e,0,B.min(),B.min(),B.min(),H.empty(),0)}static newFoundDocument(e,r,n,i){return new ee(e,1,r,B.min(),n,i,0)}static newNoDocument(e,r){return new ee(e,2,r,B.min(),B.min(),H.empty(),0)}static newUnknownDocument(e,r){return new ee(e,3,r,B.min(),B.min(),H.empty(),2)}convertToFoundDocument(e,r){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=r,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=H.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=H.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ee&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ee(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class wc{constructor(e,r=null,n=[],i=[],a=null,l="F",c=null,f=null){this.path=e,this.collectionGroup=r,this.explicitOrderBy=n,this.filters=i,this.limit=a,this.limitType=l,this.startAt=c,this.endAt=f,this.S=null,this.N=null,this.O=null,this.startAt,this.endAt}}/**
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
 */function Jn(t,e){return function(n){return typeof n=="number"&&Number.isInteger(n)&&!Qe(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}(e)?function(n){return{integerValue:""+n}}(e):function(n,i){if(n.useProto3Json){if(isNaN(i))return{doubleValue:"NaN"};if(i===1/0)return{doubleValue:"Infinity"};if(i===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qe(i)?"-0":i}}(t,e)}/**
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
 */class ut{constructor(){this._=void 0}}class _c extends ut{}class Ec extends ut{constructor(e){super(),this.elements=e}}class Ic extends ut{constructor(e){super(),this.elements=e}}class Xn extends ut{constructor(e,r){super(),this.serializer=e,this.q=r}}/**
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
 */class bc{constructor(e,r){this.field=e,this.transform=r}}class Ie{constructor(e,r){this.updateTime=e,this.exists=r}static none(){return new Ie}static exists(e){return new Ie(void 0,e)}static updateTime(e){return new Ie(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class lt{}class Qn extends lt{constructor(e,r,n,i=[]){super(),this.key=e,this.value=r,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class tr extends lt{constructor(e,r,n,i,a=[]){super(),this.key=e,this.data=r,this.fieldMask=n,this.precondition=i,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}class Tc extends lt{constructor(e,r){super(),this.key=e,this.precondition=r,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class vc extends lt{constructor(e,r){super(),this.key=e,this.precondition=r,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}class Ac{constructor(e,r){this.databaseId=e,this.useProto3Json=r}}function jt(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Sc(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Rc(t,e){return jt(t,e.toTimestamp())}function Rt(t){return L(!!t),B.fromTimestamp(function(r){const n=Ve(r);return new $(n.seconds,n.nanos)}(t))}function Zn(t,e){return zt(t,e).canonicalString()}function zt(t,e){const r=function(i){return new k(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?r:r.child(e)}function tt(t,e){return Zn(t.databaseId,e.path)}function Jr(t,e){const r=function(i){const a=k.fromString(i);return L(ei(a)),a}(e);if(r.get(1)!==t.databaseId.projectId)throw new _(v,"Tried to deserialize key from different project: "+r.get(1)+" vs "+t.databaseId.projectId);if(r.get(3)!==t.databaseId.database)throw new _(v,"Tried to deserialize key from different database: "+r.get(3)+" vs "+t.databaseId.database);return new K(function(i){return L(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}(r))}function Xr(t,e,r){return{name:tt(t,e),fields:r.value.mapValue.fields}}function xc(t,e){return"found"in e?function(n,i){L(!!i.found),i.found.name,i.found.updateTime;const a=Jr(n,i.found.name),l=Rt(i.found.updateTime),c=i.found.createTime?Rt(i.found.createTime):B.min(),f=new H({mapValue:{fields:i.found.fields}});return ee.newFoundDocument(a,l,c,f)}(t,e):"missing"in e?function(n,i){L(!!i.missing),L(!!i.readTime);const a=Jr(n,i.missing),l=Rt(i.readTime);return ee.newNoDocument(a,l)}(t,e):D()}function Pc(t,e){let r;if(e instanceof Qn)r={update:Xr(t,e.key,e.value)};else if(e instanceof Tc)r={delete:tt(t,e.key)};else if(e instanceof tr)r={update:Xr(t,e.key,e.data),updateMask:Dc(e.fieldMask)};else{if(!(e instanceof vc))return D();r={verify:tt(t,e.key)}}return e.fieldTransforms.length>0&&(r.updateTransforms=e.fieldTransforms.map(n=>function(a,l){const c=l.transform;if(c instanceof _c)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Ec)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Ic)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Xn)return{fieldPath:l.field.canonicalString(),increment:c.q};throw D()}(0,n))),e.precondition.isNone||(r.currentDocument=function(i,a){return a.updateTime!==void 0?{updateTime:Rc(i,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:D()}(t,e.precondition)),r}function Dc(t){const e=[];return t.fields.forEach(r=>e.push(r.canonicalString())),{fieldPaths:e}}function ei(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */function rr(t){return new Ac(t,!0)}/**
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
 */class Cc extends class{}{constructor(e,r,n,i){super(),this.authCredentials=e,this.appCheckCredentials=r,this.connection=n,this.serializer=i,this.Y=!1}Z(){if(this.Y)throw new _(Te,"The client has already been terminated.")}P(e,r,n,i){return this.Z(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.P(e,zt(r,n),i,a,l)).catch(a=>{throw a.name==="FirebaseError"?(a.code===Ot&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new _(Re,a.toString())})}g(e,r,n,i,a){return this.Z(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.g(e,zt(r,n),i,l,c,a)).catch(l=>{throw l.name==="FirebaseError"?(l.code===Ot&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new _(Re,l.toString())})}terminate(){this.Y=!0,this.connection.terminate()}}async function ti(t,e){const r=qn(t),n={writes:e.map(i=>Pc(r.serializer,i))};await r.P("Commit",r.serializer.databaseId,k.emptyPath(),n)}async function Fc(t,e){const r=qn(t),n={documents:e.map(c=>tt(r.serializer,c))},i=await r.g("BatchGetDocuments",r.serializer.databaseId,k.emptyPath(),n,e.length),a=new Map;i.forEach(c=>{const f=xc(r.serializer,c);a.set(f.key.toString(),f)});const l=[];return e.forEach(c=>{const f=a.get(c.toString());L(!!f),l.push(f)}),l}/**
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
 */const Pe=new Map;function nr(t){if(t._terminated)throw new _(Te,"The client has already been terminated.");if(!Pe.has(t)){Xe("ComponentProvider","Initializing Datastore");const e=function(a){return new dc(a,fetch.bind(null))}(function(a,l,c,f){return new cc(a,l,c,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Gn(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,t.app.options.appId||"",t._persistenceKey,t._freezeSettings())),r=rr(t._databaseId),n=function(a,l,c,f){return new Cc(a,l,c,f)}(t._authCredentials,t._appCheckCredentials,e,r);Pe.set(t,n)}return Pe.get(t)}class Qr{constructor(e){var r,n;if(e.host===void 0){if(e.ssl!==void 0)throw new _(v,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(r=e.ssl)===null||r===void 0||r;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new _(v,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(a,l,c,f){if(l===!0&&f===!0)throw new _(v,`${a} and ${c} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Gn((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new _(v,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new _(v,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new _(v,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ir{constructor(e,r,n,i){this._authCredentials=e,this._appCheckCredentials=r,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qr({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new _(Te,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new _(Te,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qr(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new tc;switch(n.type){case"firstParty":return new sc(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new _(v,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(r){const n=Pe.get(r);n&&(Xe("ComponentProvider","Removing Datastore"),Pe.delete(r),n.terminate())}(this),Promise.resolve()}}function kc(t,e){const r=typeof t=="object"?t:mn(),n=typeof t=="string"?t:e||"(default)",i=Ne(r,"firestore/lite").getImmediate({identifier:n});if(!i._initialized){const a=Xi("firestore");a&&Vc(i,...a)}return i}function Vc(t,e,r,n={}){var i;const a=(t=ct(t,ir))._getSettings(),l=`${e}:${r}`;if(a.host!=="firestore.googleapis.com"&&a.host!==l&&zn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},a),{host:l,ssl:!1})),n.mockUserToken){let c,f;if(typeof n.mockUserToken=="string")c=n.mockUserToken,f=O.MOCK_USER;else{c=Zi(n.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const m=n.mockUserToken.sub||n.mockUserToken.user_id;if(!m)throw new _(v,"mockUserToken must contain 'sub' or 'user_id' field!");f=new O(m)}t._authCredentials=new rc(new Hn(c,f))}}/**
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
 */class sr{constructor(e,r,n){this.converter=r,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new sr(this.firestore,e,this._query)}}class j{constructor(e,r,n){this.converter=r,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Be(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new j(this.firestore,e,this._key)}}class Be extends sr{constructor(e,r,n){super(e,r,function(a){return new wc(a)}(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new j(this.firestore,null,new K(e))}withConverter(e){return new Be(this.firestore,e,this._path)}}function or(t,e,...r){if(t=re(t),arguments.length===1&&(e=mc.newId()),lc("doc","path",e),t instanceof ir){const n=k.fromString(e,...r);return Hr(n),new j(t,null,new K(n))}{if(!(t instanceof j||t instanceof Be))throw new _(v,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=t._path.child(k.fromString(e,...r));return Hr(n),new j(t.firestore,t instanceof Be?t.converter:null,new K(n))}}/**
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
 */class ve{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ve(ie.fromBase64String(e))}catch(r){throw new _(v,"Failed to construct data from Base64 string: "+r)}}static fromUint8Array(e){return new ve(ie.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ht{constructor(...e){for(let r=0;r<e.length;++r)if(e[r].length===0)throw new _(v,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new W(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ft{constructor(e){this._methodName=e}}/**
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
 */class ar{constructor(e,r){if(!isFinite(e)||e<-90||e>90)throw new _(v,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(r)||r<-180||r>180)throw new _(v,"Longitude must be a number between -180 and 180, but was: "+r);this._lat=e,this._long=r}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ke(this._lat,e._lat)||ke(this._long,e._long)}}/**
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
 */const Bc=/^__.*__$/;class Nc{constructor(e,r,n){this.data=e,this.fieldMask=r,this.fieldTransforms=n}toMutation(e,r){return this.fieldMask!==null?new tr(e,this.data,this.fieldMask,r,this.fieldTransforms):new Qn(e,this.data,r,this.fieldTransforms)}}class ri{constructor(e,r,n){this.data=e,this.fieldMask=r,this.fieldTransforms=n}toMutation(e,r){return new tr(e,this.data,this.fieldMask,r,this.fieldTransforms)}}function ni(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw D()}}class cr{constructor(e,r,n,i,a,l){this.settings=e,this.databaseId=r,this.serializer=n,this.ignoreUndefinedProperties=i,a===void 0&&this.tt(),this.fieldTransforms=a||[],this.fieldMask=l||[]}get path(){return this.settings.path}get et(){return this.settings.et}rt(e){return new cr(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}nt(e){var r;const n=(r=this.path)===null||r===void 0?void 0:r.child(e),i=this.rt({path:n,it:!1});return i.st(e),i}ot(e){var r;const n=(r=this.path)===null||r===void 0?void 0:r.child(e),i=this.rt({path:n,it:!1});return i.tt(),i}ut(e){return this.rt({path:void 0,it:!0})}_t(e){return rt(e,this.settings.methodName,this.settings.ct||!1,this.path,this.settings.lt)}contains(e){return this.fieldMask.find(r=>e.isPrefixOf(r))!==void 0||this.fieldTransforms.find(r=>e.isPrefixOf(r.field))!==void 0}tt(){if(this.path)for(let e=0;e<this.path.length;e++)this.st(this.path.get(e))}st(e){if(e.length===0)throw this._t("Document fields must not be empty");if(ni(this.et)&&Bc.test(e))throw this._t('Document fields cannot begin and end with "__"')}}class Oc{constructor(e,r,n){this.databaseId=e,this.ignoreUndefinedProperties=r,this.serializer=n||rr(e)}ht(e,r,n,i=!1){return new cr({et:e,methodName:r,lt:n,path:W.emptyPath(),it:!1,ct:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ii(t){const e=t._freezeSettings(),r=rr(t._databaseId);return new Oc(t._databaseId,!!e.ignoreUndefinedProperties,r)}function Mc(t,e,r,n,i,a={}){const l=t.ht(a.merge||a.mergeFields?2:0,e,r,i);lr("Data must be an object, but it was:",l,n);const c=si(n,l);let f,m;if(a.merge)f=new we(l.fieldMask),m=l.fieldTransforms;else if(a.mergeFields){const y=[];for(const w of a.mergeFields){const E=qt(e,w,r);if(!l.contains(E))throw new _(v,`Field '${E}' is specified in your field mask but missing from your input data.`);ai(y,E)||y.push(E)}f=new we(y),m=l.fieldTransforms.filter(w=>f.covers(w.field))}else f=null,m=l.fieldTransforms;return new Nc(new H(c),f,m)}class dt extends ft{_toFieldTransform(e){if(e.et!==2)throw e.et===1?e._t(`${this._methodName}() can only appear at the top level of your update data`):e._t(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof dt}}class ur extends ft{constructor(e,r){super(e),this.ft=r}_toFieldTransform(e){const r=new Xn(e.serializer,Jn(e.serializer,this.ft));return new bc(e.path,r)}isEqual(e){return e instanceof ur&&this.ft===e.ft}}function Uc(t,e,r,n){const i=t.ht(1,e,r);lr("Data must be an object, but it was:",i,n);const a=[],l=H.empty();Oe(n,(f,m)=>{const y=hr(e,f,r);m=re(m);const w=i.ot(y);if(m instanceof dt)a.push(y);else{const E=pt(m,w);E!=null&&(a.push(y),l.set(y,E))}});const c=new we(a);return new ri(l,c,i.fieldTransforms)}function Lc(t,e,r,n,i,a){const l=t.ht(1,e,r),c=[qt(e,n,r)],f=[i];if(a.length%2!=0)throw new _(v,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<a.length;E+=2)c.push(qt(e,a[E])),f.push(a[E+1]);const m=[],y=H.empty();for(let E=c.length-1;E>=0;--E)if(!ai(m,c[E])){const b=c[E];let z=f[E];z=re(z);const le=l.ot(b);if(z instanceof dt)m.push(b);else{const Me=pt(z,le);Me!=null&&(m.push(b),y.set(b,Me))}}const w=new we(m);return new ri(y,w,l.fieldTransforms)}function pt(t,e){if(oi(t=re(t)))return lr("Unsupported field value:",e,t),si(t,e);if(t instanceof ft)return function(n,i){if(!ni(i.et))throw i._t(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i._t(`${n._methodName}() is not currently supported inside arrays`);const a=n._toFieldTransform(i);a&&i.fieldTransforms.push(a)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.it&&e.et!==4)throw e._t("Nested arrays are not supported");return function(n,i){const a=[];let l=0;for(const c of n){let f=pt(c,i.ut(l));f==null&&(f={nullValue:"NULL_VALUE"}),a.push(f),l++}return{arrayValue:{values:a}}}(t,e)}return function(n,i){if((n=re(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Jn(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const a=$.fromDate(n);return{timestampValue:jt(i.serializer,a)}}if(n instanceof $){const a=new $(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:jt(i.serializer,a)}}if(n instanceof ar)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ve)return{bytesValue:Sc(i.serializer,n._byteString)};if(n instanceof j){const a=i.databaseId,l=n.firestore._databaseId;if(!l.isEqual(a))throw i._t(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Zn(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i._t(`Unsupported field value: ${er(n)}`)}(t,e)}function si(t,e){const r={};return function(i){for(const a in i)if(Object.prototype.hasOwnProperty.call(i,a))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Oe(t,(n,i)=>{const a=pt(i,e.nt(n));a!=null&&(r[n]=a)}),{mapValue:{fields:r}}}function oi(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof $||t instanceof ar||t instanceof ve||t instanceof j||t instanceof ft)}function lr(t,e,r){if(!oi(r)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(r)){const n=er(r);throw n==="an object"?e._t(t+" a custom object"):e._t(t+" "+n)}}function qt(t,e,r){if((e=re(e))instanceof ht)return e._internalPath;if(typeof e=="string")return hr(t,e);throw rt("Field path arguments must be of type string or ",t,!1,void 0,r)}const $c=new RegExp("[~\\*/\\[\\]]");function hr(t,e,r){if(e.search($c)>=0)throw rt(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,r);try{return new ht(...e.split("."))._internalPath}catch{throw rt(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,r)}}function rt(t,e,r,n,i){const a=n&&!n.isEmpty(),l=i!==void 0;let c=`Function ${e}() called with invalid data`;r&&(c+=" (via `toFirestore()`)"),c+=". ";let f="";return(a||l)&&(f+=" (found",a&&(f+=` in field ${n}`),l&&(f+=` in document ${i}`),f+=")"),new _(v,c+t+f)}function ai(t,e){return t.some(r=>r.isEqual(e))}/**
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
 */class ci{constructor(e,r,n,i,a){this._firestore=e,this._userDataWriter=r,this._key=n,this._document=i,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new j(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new jc(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const r=this._document.data.field(zc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r)}}}class jc extends ci{data(){return super.data()}}function zc(t,e){return typeof e=="string"?hr(t,e):e instanceof ht?e._internalPath:e._delegate._internalPath}/**
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
 */function qc(t,e,r){let n;return n=t?r&&(r.merge||r.mergeFields)?t.toFirestore(e,r):t.toFirestore(e):e,n}class Hc extends class{convertValue(r,n="none"){switch(Lt(r)){case 0:return null;case 1:return r.booleanValue;case 2:return M(r.integerValue||r.doubleValue);case 3:return this.convertTimestamp(r.timestampValue);case 4:return this.convertServerTimestamp(r,n);case 5:return r.stringValue;case 6:return this.convertBytes(Mt(r.bytesValue));case 7:return this.convertReference(r.referenceValue);case 8:return this.convertGeoPoint(r.geoPointValue);case 9:return this.convertArray(r.arrayValue,n);case 10:return this.convertObject(r.mapValue,n);default:throw D()}}convertObject(r,n){return this.convertObjectMap(r.fields,n)}convertObjectMap(r,n="none"){const i={};return Oe(r,(a,l)=>{i[a]=this.convertValue(l,n)}),i}convertGeoPoint(r){return new ar(M(r.latitude),M(r.longitude))}convertArray(r,n){return(r.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(r,n){switch(n){case"previous":const i=Yn(r);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(Ut(r));default:return null}}convertTimestamp(r){const n=Ve(r);return new $(n.seconds,n.nanos)}convertDocumentKey(r,n){const i=k.fromString(r);L(ei(i));const a=new Ce(i.get(1),i.get(3)),l=new K(i.popFirst(5));return a.isEqual(n)||Qt(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),l}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new ve(e)}convertReference(e){const r=this.convertDocumentKey(e,this.firestore._databaseId);return new j(this.firestore,null,r)}}function ui(t){const e=nr((t=ct(t,j)).firestore),r=new Hc(t.firestore);return Fc(e,[t._key]).then(n=>{L(n.length===1);const i=n[0];return new ci(t.firestore,r,t._key,i.isFoundDocument()?i:null,t.converter)})}function Gc(t,e,r){const n=qc((t=ct(t,j)).converter,e,r),i=Mc(ii(t.firestore),"setDoc",t._key,n,t.converter!==null,r);return ti(nr(t.firestore),[i.toMutation(t._key,Ie.none())])}function Wc(t,e,r,...n){const i=ii((t=ct(t,j)).firestore);let a;return a=typeof(e=re(e))=="string"||e instanceof ht?Lc(i,"updateDoc",t._key,e,r,n):Uc(i,"updateDoc",t._key,e),ti(nr(t.firestore),[a.toMutation(t._key,Ie.exists(!0))])}function Zr(t){return new ur("increment",t)}(function(){(function(r){Ae=r})(`${so}_lite`),ce(new ne("firestore/lite",(e,{instanceIdentifier:r,options:n})=>{const i=e.getProvider("app").getImmediate(),a=new ir(new nc(e.getProvider("auth-internal")),new ac(e.getProvider("app-check-internal")),function(c,f){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new _(v,'"projectId" not provided in firebase.initializeApp.');return new Ce(c.options.projectId,f)}(i,r),i);return n&&a._setSettings(n),a},"PUBLIC").setMultipleInstances(!0)),Z("firestore-lite","4.6.4",""),Z("firestore-lite","4.6.4","esm2017")})();const Kc={apiKey:"AIzaSyDueT8tDjIOnPbHozo5Ea5BUUrJdcVbmbs",authDomain:"footballpongdb.firebaseapp.com",projectId:"footballpongdb",storageBucket:"footballpongdb.appspot.com",messagingSenderId:"618518676972",appId:"1:618518676972:web:54a91d8629bc325ca2ecc9",measurementId:"G-3QJWQ45W1Y"},li=pn(Kc),fr=kc(li);$a(li);const nt="testUser123";async function Yc(){const t=or(fr,"players",nt);(await ui(t)).exists()?console.log("Test user already exists"):(await Gc(t,{userId:nt,username:"TestPlayer",goalbitBalance:0,lastPlayed:new Date,totalGamesPlayed:0}),console.log("Test user initialized"))}async function Jc(t){const e=or(fr,"players",nt);try{await Wc(e,{goalbitBalance:Zr(t),lastPlayed:new Date,totalGamesPlayed:Zr(1)}),console.log(`Updated test user. Added ${t} Goalbits.`)}catch(r){console.error("Error updating test user:",r)}}async function Xc(){const t=or(fr,"players",nt),e=await ui(t);if(e.exists()){const r=e.data();console.log(`Current Goalbit balance: ${r.goalbitBalance}`),console.log(`Total games played: ${r.totalGamesPlayed}`)}else console.log("Test user not found")}async function xt(t){await Jc(t),await Xc()}async function Qc(){await Yc(),await xt(50),await xt(30),await xt(100)}Qc().catch(console.error);
