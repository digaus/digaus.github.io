"use strict";(self.webpackChunkShellyHome=self.webpackChunkShellyHome||[]).push([[968],{20968:function(e,t,r){r.r(t),r.d(t,{StorageWeb:function(){return s}});var i=r(8239),n=r(68384);class s extends n.Uw{constructor(){super(...arguments),this.group="CapacitorStorage"}configure({group:e}){var t=this;return(0,i.Z)(function*(){"string"==typeof e&&(t.group=e)})()}get(e){var t=this;return(0,i.Z)(function*(){return{value:t.impl.getItem(t.applyPrefix(e.key))}})()}set(e){var t=this;return(0,i.Z)(function*(){t.impl.setItem(t.applyPrefix(e.key),e.value)})()}remove(e){var t=this;return(0,i.Z)(function*(){t.impl.removeItem(t.applyPrefix(e.key))})()}keys(){var e=this;return(0,i.Z)(function*(){return{keys:e.rawKeys().map(t=>t.substring(e.prefix.length))}})()}clear(){var e=this;return(0,i.Z)(function*(){for(const t of e.rawKeys())e.impl.removeItem(t)})()}migrate(){var e=this;return(0,i.Z)(function*(){var t;const r=[],i=[],n="_cap_",s=Object.keys(e.impl).filter(e=>0===e.indexOf(n));for(const o of s){const s=o.substring(n.length),u=null!==(t=e.impl.getItem(o))&&void 0!==t?t:"",{value:p}=yield e.get({key:s});"string"==typeof p?i.push(s):(yield e.set({key:s,value:u}),r.push(s))}return{migrated:r,existing:i}})()}removeOld(){var e=this;return(0,i.Z)(function*(){const t=Object.keys(e.impl).filter(e=>0===e.indexOf("_cap_"));for(const r of t)e.impl.removeItem(r)})()}get impl(){return window.localStorage}get prefix(){return"NativeStorage"===this.group?"":`${this.group}.`}rawKeys(){return Object.keys(this.impl).filter(e=>0===e.indexOf(this.prefix))}applyPrefix(e){return this.prefix+e}}}}]);