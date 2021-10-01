!function(){"use strict";(self.webpackChunkShellyHome=self.webpackChunkShellyHome||[]).push([[9695],{49695:function(e,t,n){n.r(t),n.d(t,{startInputShims:function(){return v}});var r,o=n(8239),i=n(52377),a=new WeakMap,u=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;a.has(e)!==n&&(n?s(e,t,r):l(e,t))},c=function(e){return e===e.getRootNode().activeElement},s=function(e,t,n){var r=t.parentNode,o=t.cloneNode(!1);o.classList.add("cloned-input"),o.tabIndex=-1,r.appendChild(o),a.set(e,o);var i="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform="translate3d(".concat(i,"px,").concat(n,"px,0) scale(0)")},l=function(e,t){var n=a.get(e);n&&(a.delete(e),n.remove()),e.style.pointerEvents="",t.style.transform=""},d="input, textarea, [no-blur], [contenteditable]",f=(r=(0,o.Z)(regeneratorRuntime.mark(function e(t,n,r,a,c){var s,l,d,f,m;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r||a){e.next=2;break}return e.abrupt("return");case 2:if(s=function(e,t,n){return function(e,t,n,r){var o=e.top,i=e.bottom,a=t.top,u=a+15,c=.75*Math.min(t.bottom,r-n)-i,s=u-o,l=Math.round(c<0?-c:s>0?-s:0),d=Math.min(l,o-a),f=Math.abs(d)/.3;return{scrollAmount:d,scrollDuration:Math.min(400,Math.max(150,f)),scrollPadding:n,inputSafeY:4-(o-u)}}((e.closest("ion-item,[ion-item]")||e).getBoundingClientRect(),t.getBoundingClientRect(),n,e.ownerDocument.defaultView.innerHeight)}(t,r||a,c),!(r&&Math.abs(s.scrollAmount)<4)){e.next=7;break}n.focus(),e.next=16;break;case 7:if(u(t,n,!0,s.inputSafeY),n.focus(),(0,i.r)(function(){return t.click()}),"undefined"==typeof window){e.next=16;break}if(d=function(){var e=(0,o.Z)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==l&&clearTimeout(l),window.removeEventListener("ionKeyboardDidShow",f),window.removeEventListener("ionKeyboardDidShow",d),e.t0=r,!e.t0){e.next=7;break}return e.next=7,r.scrollByPoint(0,s.scrollAmount,s.scrollDuration);case 7:u(t,n,!1,s.inputSafeY),n.focus();case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),f=function e(){window.removeEventListener("ionKeyboardDidShow",e),window.addEventListener("ionKeyboardDidShow",d)},!r){e.next=15;break}return e.next=12,r.getScrollElement();case 12:if(m=e.sent,!(s.scrollAmount>m.scrollHeight-m.clientHeight-m.scrollTop)){e.next=15;break}return e.abrupt("return",("password"===n.type?(s.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",f)):window.addEventListener("ionKeyboardDidShow",d),void(l=setTimeout(d,1e3))));case 15:d();case 16:case"end":return e.stop()}},e)})),function(e,t,n,o,i){return r.apply(this,arguments)}),m="$ionPaddingTimer",p=function(e,t){if(!("INPUT"!==e.tagName||e.parentElement&&"ION-INPUT"===e.parentElement.tagName||e.parentElement&&e.parentElement.parentElement&&"ION-SEARCHBAR"===e.parentElement.parentElement.tagName)){var n=e.closest("ion-content");if(null!==n){var r=n[m];r&&clearTimeout(r),t>0?n.style.setProperty("--keyboard-offset","".concat(t,"px")):n[m]=setTimeout(function(){n.style.setProperty("--keyboard-offset","0px")},120)}}},v=function(e){var t=document,n=e.getNumber("keyboardHeight",290),r=e.getBoolean("scrollAssist",!0),a=e.getBoolean("hideCaretOnScroll",!0),s=e.getBoolean("inputBlurring",!0),l=e.getBoolean("scrollPadding",!0),m=Array.from(t.querySelectorAll("ion-input, ion-textarea")),v=new WeakMap,h=new WeakMap,g=function(){var e=(0,o.Z)(regeneratorRuntime.mark(function e(t){var o,s,l,d,m,p;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise(function(e){return(0,i.c)(t,e)});case 2:o=t.shadowRoot||t,s=o.querySelector("input")||o.querySelector("textarea"),l=t.closest("ion-content"),d=l?null:t.closest("ion-footer"),s&&(l&&a&&!v.has(t)&&(m=function(e,t,n){if(!n||!t)return function(){};var r=function(n){c(t)&&u(e,t,n)},o=function(){return u(e,t,!1)},a=function(){return r(!0)},s=function(){return r(!1)};return(0,i.a)(n,"ionScrollStart",a),(0,i.a)(n,"ionScrollEnd",s),t.addEventListener("blur",o),function(){(0,i.b)(n,"ionScrollStart",a),(0,i.b)(n,"ionScrollEnd",s),t.addEventListener("ionBlur",o)}}(t,s,l),v.set(t,m)),(l||d)&&r&&!h.has(t)&&(p=function(e,t,n,r,o){var a,u=function(e){a=(0,i.p)(e)},s=function(u){if(a){var s=(0,i.p)(u);!function(e,t,n){if(t&&n){var r=t.x-n.x,o=t.y-n.y;return r*r+o*o>36}return!1}(0,a,s)&&!c(t)&&(u.stopPropagation(),f(e,t,n,r,o))}};return e.addEventListener("touchstart",u,!0),e.addEventListener("touchend",s,!0),function(){e.removeEventListener("touchstart",u,!0),e.removeEventListener("touchend",s,!0)}}(t,s,l,d,n),h.set(t,p)));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();s&&function(){var e=!0,t=!1,n=document;(0,i.a)(n,"ionScrollStart",function(){t=!0}),n.addEventListener("focusin",function(){e=!0},!0),n.addEventListener("touchend",function(r){if(t)t=!1;else{var o=n.activeElement;if(o&&!o.matches(d)){var i=r.target;i!==o&&(i.matches(d)||i.closest(d)||(e=!1,setTimeout(function(){e||o.blur()},50)))}}},!1)}(),l&&function(e){var t=document;t.addEventListener("focusin",function(t){p(t.target,e)}),t.addEventListener("focusout",function(e){p(e.target,0)})}(n);for(var w=0,E=m;w<E.length;w++){var b=E[w];g(b)}t.addEventListener("ionInputDidLoad",function(e){g(e.detail)}),t.addEventListener("ionInputDidUnload",function(e){!function(e){if(a){var t=v.get(e);t&&t(),v.delete(e)}if(r){var n=h.get(e);n&&n(),h.delete(e)}}(e.detail)})}}}])}();