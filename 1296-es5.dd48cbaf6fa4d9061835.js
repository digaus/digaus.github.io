!function(){"use strict";(self.webpackChunkShellyHome=self.webpackChunkShellyHome||[]).push([[1296],{81296:function(e,t,n){n.r(t),n.d(t,{KEYBOARD_DID_CLOSE:function(){return o},KEYBOARD_DID_OPEN:function(){return i},copyVisualViewport:function(){return v},keyboardDidClose:function(){return b},keyboardDidOpen:function(){return p},keyboardDidResize:function(){return l},resetKeyboardAssist:function(){return a},setKeyboardClose:function(){return h},setKeyboardOpen:function(){return d},startKeyboardAssist:function(){return s},trackViewportChanges:function(){return y}});var i="ionKeyboardDidShow",o="ionKeyboardDidHide",r={},u={},f=!1,a=function(){r={},u={},f=!1},s=function(e){c(e),e.visualViewport&&(u=v(e.visualViewport),e.visualViewport.onresize=function(){y(e),p()||l(e)?d(e):b(e)&&h(e)})},c=function(e){e.addEventListener("keyboardDidShow",function(t){return d(e,t)}),e.addEventListener("keyboardDidHide",function(){return h(e)})},d=function(e,t){g(e,t),f=!0},h=function(e){w(e),f=!1},p=function(){return!f&&r.width===u.width&&(r.height-u.height)*u.scale>150},l=function(e){return f&&!b(e)},b=function(e){return f&&u.height===e.innerHeight},g=function(e,t){var n=new CustomEvent(i,{detail:{keyboardHeight:t?t.keyboardHeight:e.innerHeight-u.height}});e.dispatchEvent(n)},w=function(e){var t=new CustomEvent(o);e.dispatchEvent(t)},y=function(e){r=Object.assign({},u),u=v(e.visualViewport)},v=function(e){return{width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale}}}}])}();