!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/number-to-color/",n(n.s=1)}([function(t,e){function n(t){const e=t<0?t+1:t%1;return e<1/6?6*e:e<.5?1:e<2/3?6*(2/3-e):0}function r(t){return Math.round(255*t)}t.exports=function(t){return{r:r(n(t+1/3)),g:r(n(t)),b:r(n(t-1/3))}}},function(t,e,n){n(2),t.exports=n(4)},function(t,e,n){const r=n(3),o=n(0),u=document.getElementById("states"),c=document.getElementById("colors");function i(){const t=u.value;c.innerHTML="";for(let e=0;e<t;e+=1){const n=e/t,u=r(n),i=o(n),l=document.createElement("div");l.setAttribute("class","color"),l.setAttribute("title",`${u}\n${JSON.stringify(i,null,1)}`),l.setAttribute("style",`background-color: ${u}`),l.innerText=e,c.appendChild(l)}}document.addEventListener("DOMContentLoaded",()=>{u.oninput=i,i()},!1)},function(t,e,n){const r=n(0);function o(t){let e=Number(t).toString(16);return e.length<2&&(e=`0${e}`),e}t.exports=function(t){const{r:e,g:n,b:u}=r(t);return`#${o(e)}${o(n)}${o(u)}`}},function(t,e,n){}]);