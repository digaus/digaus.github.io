"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9633],{1889:(S,E,g)=>{g.d(E,{Wi:()=>b,__:()=>a});var a=function(h){return h.Documents="DOCUMENTS",h.Data="DATA",h.Library="LIBRARY",h.Cache="CACHE",h.External="EXTERNAL",h.ExternalStorage="EXTERNAL_STORAGE",h}(a||{}),b=function(h){return h.UTF8="utf8",h.ASCII="ascii",h.UTF16="utf16",h}(b||{})},2739:(S,E,g)=>{g.d(E,{Wi:()=>b.Wi,YA:()=>k,__:()=>b.__});var a=g(5083),b=g(1889);const k=(0,a.F3)("Filesystem",{web:()=>g.e(2937).then(g.bind(g,2937)).then($=>new $.FilesystemWeb)})},551:(S,E,g)=>{g.d(E,{q:()=>b});const b=(0,g(9273).F3)("FileServer",{web:()=>g.e(4757).then(g.bind(g,4757)).then(k=>new k.FileServerWeb),electron:()=>window.CapacitorCustomPlatform.plugins.FileServer})},9273:(S,E,g)=>{g.d(E,{E_:()=>R,F3:()=>M});var a=g(467);typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"&&global;var W=function(n){return n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE",n}(W||{});class F extends Error{constructor(e,t,o){super(e),this.message=e,this.code=t,this.data=o}}const Q=n=>{var e,t,o,s,r;const l=n.CapacitorCustomPlatform||null,i=n.Capacitor||{},f=i.Plugins=i.Plugins||{},c=n.CapacitorPlatforms,_=(null===(e=null==c?void 0:c.currentPlatform)||void 0===e?void 0:e.getPlatform)||(()=>null!==l?l.name:(n=>{var e,t;return null!=n&&n.androidBridge?"android":null!==(t=null===(e=null==n?void 0:n.webkit)||void 0===e?void 0:e.messageHandlers)&&void 0!==t&&t.bridge?"ios":"web"})(n)),re=(null===(t=null==c?void 0:c.currentPlatform)||void 0===t?void 0:t.isNativePlatform)||(()=>"web"!==_()),ie=(null===(o=null==c?void 0:c.currentPlatform)||void 0===o?void 0:o.isPluginAvailable)||(d=>{const u=I.get(d);return!!(null!=u&&u.platforms.has(_())||V(d))}),V=(null===(s=null==c?void 0:c.currentPlatform)||void 0===s?void 0:s.getPluginHeader)||(d=>{var u;return null===(u=i.PluginHeaders)||void 0===u?void 0:u.find(O=>O.name===d)}),I=new Map,de=(null===(r=null==c?void 0:c.currentPlatform)||void 0===r?void 0:r.registerPlugin)||((d,u={})=>{const O=I.get(d);if(O)return console.warn(`Capacitor plugin "${d}" already registered. Cannot register plugins twice.`),O.proxy;const A=_(),U=V(d);let w;const ue=function(){var m=(0,a.A)(function*(){return!w&&A in u?w=w="function"==typeof u[A]?yield u[A]():u[A]:null!==l&&!w&&"web"in u&&(w=w="function"==typeof u.web?yield u.web():u.web),w});return function(){return m.apply(this,arguments)}}(),H=m=>{let v;const P=(...y)=>{const C=ue().then(p=>{const L=((m,v)=>{var P,y;if(!U){if(m)return null===(y=m[v])||void 0===y?void 0:y.bind(m);throw new F(`"${d}" plugin is not implemented on ${A}`,W.Unimplemented)}{const C=null==U?void 0:U.methods.find(p=>v===p.name);if(C)return"promise"===C.rtype?p=>i.nativePromise(d,v.toString(),p):(p,L)=>i.nativeCallback(d,v.toString(),p,L);if(m)return null===(P=m[v])||void 0===P?void 0:P.bind(m)}})(p,m);if(L){const j=L(...y);return v=null==j?void 0:j.remove,j}throw new F(`"${d}.${m}()" is not implemented on ${A}`,W.Unimplemented)});return"addListener"===m&&(C.remove=(0,a.A)(function*(){return v()})),C};return P.toString=()=>`${m.toString()}() { [capacitor code] }`,Object.defineProperty(P,"name",{value:m,writable:!1,configurable:!1}),P},z=H("addListener"),J=H("removeListener"),me=(m,v)=>{const P=z({eventName:m},v),y=function(){var p=(0,a.A)(function*(){const L=yield P;J({eventName:m,callbackId:L},v)});return function(){return p.apply(this,arguments)}}(),C=new Promise(p=>P.then(()=>p({remove:y})));return C.remove=(0,a.A)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield y()}),C},B=new Proxy({},{get(m,v){switch(v){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return U?me:z;case"removeListener":return J;default:return H(v)}}});return f[d]=B,I.set(d,{name:d,proxy:B,platforms:new Set([...Object.keys(u),...U?[A]:[]])}),B});return i.convertFileSrc||(i.convertFileSrc=d=>d),i.getPlatform=_,i.handleError=d=>n.console.error(d),i.isNativePlatform=re,i.isPluginAvailable=ie,i.pluginMethodNoop=(d,u,O)=>Promise.reject(`${O} does not have an implementation of "${u}".`),i.registerPlugin=de,i.Exception=F,i.DEBUG=!!i.DEBUG,i.isLoggingEnabled=!!i.isLoggingEnabled,i.platform=i.getPlatform(),i.isNative=i.isNativePlatform(),i},x=(n=>n.Capacitor=Q(n))(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),M=x.registerPlugin;class R{constructor(e){this.listeners={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,t){var o=this;this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t);const r=this.windowListeners[e];r&&!r.registered&&this.addWindowListener(r);const l=function(){var f=(0,a.A)(function*(){return o.removeListener(e,t)});return function(){return f.apply(this,arguments)}}(),i=Promise.resolve({remove:l});return Object.defineProperty(i,"remove",{value:(f=(0,a.A)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield l()}),function(){return f.apply(this,arguments)})}),i;var f}removeAllListeners(){var e=this;return(0,a.A)(function*(){e.listeners={};for(const t in e.windowListeners)e.removeWindowListener(e.windowListeners[t]);e.windowListeners={}})()}notifyListeners(e,t){const o=this.listeners[e];o&&o.forEach(s=>s(t))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:o=>{this.notifyListeners(t,o)}}}unimplemented(e="not implemented"){return new x.Exception(e,W.Unimplemented)}unavailable(e="not available"){return new x.Exception(e,W.Unavailable)}removeListener(e,t){var o=this;return(0,a.A)(function*(){const s=o.listeners[e];if(!s)return;const r=s.indexOf(t);o.listeners[e].splice(r,1),o.listeners[e].length||o.removeWindowListener(o.windowListeners[e])})()}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}}const G=n=>encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),K=n=>n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class Z extends R{getCookies(){return(0,a.A)(function*(){const e=document.cookie,t={};return e.split(";").forEach(o=>{if(o.length<=0)return;let[s,r]=o.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");s=K(s).trim(),r=K(r).trim(),t[s]=r}),t})()}setCookie(e){return(0,a.A)(function*(){try{const t=G(e.key),o=G(e.value),s=`; expires=${(e.expires||"").replace("expires=","")}`,r=(e.path||"/").replace("path=",""),l=null!=e.url&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${o||""}${s}; path=${r}; ${l};`}catch(t){return Promise.reject(t)}})()}deleteCookie(e){return(0,a.A)(function*(){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}})()}clearCookies(){return(0,a.A)(function*(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${(new Date).toUTCString()};path=/`)}catch(e){return Promise.reject(e)}})()}clearAllCookies(){var e=this;return(0,a.A)(function*(){try{yield e.clearCookies()}catch(t){return Promise.reject(t)}})()}}M("CapacitorCookies",{web:()=>new Z});const q=function(){var n=(0,a.A)(function*(e){return new Promise((t,o)=>{const s=new FileReader;s.onload=()=>{const r=s.result;t(r.indexOf(",")>=0?r.split(",")[1]:r)},s.onerror=r=>o(r),s.readAsDataURL(e)})});return function(t){return n.apply(this,arguments)}}();class ne extends R{request(e){return(0,a.A)(function*(){const t=((n,e={})=>{const t=Object.assign({method:n.method||"GET",headers:n.headers},e),s=((n={})=>{const e=Object.keys(n);return Object.keys(n).map(s=>s.toLocaleLowerCase()).reduce((s,r,l)=>(s[r]=n[e[l]],s),{})})(n.headers)["content-type"]||"";if("string"==typeof n.data)t.body=n.data;else if(s.includes("application/x-www-form-urlencoded")){const r=new URLSearchParams;for(const[l,i]of Object.entries(n.data||{}))r.set(l,i);t.body=r.toString()}else if(s.includes("multipart/form-data")||n.data instanceof FormData){const r=new FormData;if(n.data instanceof FormData)n.data.forEach((i,f)=>{r.append(f,i)});else for(const i of Object.keys(n.data))r.append(i,n.data[i]);t.body=r;const l=new Headers(t.headers);l.delete("content-type"),t.headers=l}else(s.includes("application/json")||"object"==typeof n.data)&&(t.body=JSON.stringify(n.data));return t})(e,e.webFetchExtra),o=((n,e=!0)=>n?Object.entries(n).reduce((o,s)=>{const[r,l]=s;let i,f;return Array.isArray(l)?(f="",l.forEach(c=>{i=e?encodeURIComponent(c):c,f+=`${r}=${i}&`}),f.slice(0,-1)):(i=e?encodeURIComponent(l):l,f=`${r}=${i}`),`${o}&${f}`},"").substr(1):null)(e.params,e.shouldEncodeUrlParams),s=o?`${e.url}?${o}`:e.url,r=yield fetch(s,t),l=r.headers.get("content-type")||"";let f,c,{responseType:i="text"}=r.ok?e:{};switch(l.includes("application/json")&&(i="json"),i){case"arraybuffer":case"blob":c=yield r.blob(),f=yield q(c);break;case"json":f=yield r.json();break;default:f=yield r.text()}const T={};return r.headers.forEach((_,D)=>{T[D]=_}),{data:f,headers:T,status:r.status,url:r.url}})()}get(e){var t=this;return(0,a.A)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"GET"}))})()}post(e){var t=this;return(0,a.A)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"POST"}))})()}put(e){var t=this;return(0,a.A)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"PUT"}))})()}patch(e){var t=this;return(0,a.A)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"PATCH"}))})()}delete(e){var t=this;return(0,a.A)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"DELETE"}))})()}}M("CapacitorHttp",{web:()=>new ne})}}]);