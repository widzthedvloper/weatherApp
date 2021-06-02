(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>f});var r=t(645),o=t.n(r),i=t(667),a=t.n(i),c=t(996),s=t(267),d=t(321),u=o()((function(e){return e[1]})),l=a()(c),p=a()(s),m=a()(d);u.push([e.id,"* {\n  box-sizing: border-box;\n}\n\nhtml {\n  height: 100%;\n}\n\n.body {\n  height: 100%;\n  margin: 0;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-image: linear-gradient(blue 50%, white 100%);\n}\n\n.body-cloudy {\n  background-image: url("+l+");\n}\n\n.body-rainy {\n  background-image: url("+p+");\n}\n\n.body-sunny {\n  background-image: url("+m+");\n}\n\nh1 {\n  margin-top: 10%;\n}\n\n.location-form {\n  margin: 5% auto;\n  padding: 0;\n  justify-content: center;\n}\n\n.content {\n  border: 1px aliceblue solid;\n  border-radius: 20px;\n  padding: 60px;\n}\n\n.big-size {\n  font-size: 60px;\n}\n\n.city-span {\n  align-self: end;\n}\n\nspan {\n  padding-left: 5px;\n}\n",""]);const f=u},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},379:(e,n,t)=>{var r,o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function a(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},r=[],o=0;o<e.length;o++){var c=e[o],s=n.base?c[0]+n.base:c[0],d=t[s]||0,u="".concat(s," ").concat(d);t[s]=d+1;var l=a(u),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==l?(i[l].references++,i[l].updater(p)):i.push({identifier:u,updater:h(p,n),references:1}),r.push(u)}return r}function s(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var d,u=(d=[],function(e,n){return d[e]=n,d.filter(Boolean).join("\n")});function l(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function p(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,f=0;function h(e,n){var t,r,o;if(n.singleton){var i=f++;t=m||(m=s(n)),r=l.bind(null,t,i,!1),o=l.bind(null,t,i,!0)}else t=s(n),r=p.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=a(t[r]);i[o].references--}for(var s=c(e,n),d=0;d<t.length;d++){var u=a(t[d]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}t=s}}}},996:(e,n,t)=>{e.exports=t.p+"9b191af4ae6d3a60b3d3.png"},267:(e,n,t)=>{e.exports=t.p+"442faa31a501d5257c63.png"},321:(e,n,t)=>{e.exports=t.p+"381727607b38bf94d715.png"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e=t(379),n=t.n(e),r=t(426);n()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;const o=(e,n,t,r,o,i,a,c)=>{document.getElementById("main-temp").innerHTML=e,document.getElementById("degree").innerHTML=c,document.getElementById("city").innerHTML=n,document.getElementById("humidity").innerHTML=t,document.getElementById("temp_min").innerHTML=r,document.getElementById("temp_max").innerHTML=o,document.getElementById("weather-description").innerHTML=i,document.getElementById("pressure").innerHTML=a},i=e=>{fetch(`http://api.openweathermap.org/data/2.5/weather?q=${e}&APPID=c7911001fbb406aa98e26c70ab98ec78`,{mode:"cors"}).then((e=>e.json())).then((e=>{const n=Math.round(e.main.temp-273),t=e.name,{humidity:r}=e.main,i=Math.round(e.main.temp_min-273),a=Math.round(e.main.temp_max-273),{description:c}=e.weather[0],{pressure:s}=e.main;(e=>{const n=document.getElementById("my-body");e<=18?n.setAttribute("class","body-rainy"):e>18&&e<=30?n.setAttribute("class","body-cloudy"):e<30&&n.setAttribute("class","body-sunny")})(n),((e,n,t,r,i,a,c)=>{let s=0;document.getElementById("toggleButton").onclick=()=>{0===s?(o(e,n,t,r,i,a,c,"&#8451;"),s+=1):(((e,n,t,r,i,a,c,s)=>{o(1.8*e+32,n,t,1.8*r+32,1.8*i+32,a,c,"&#8457;")})(e,n,t,r,i,a,c),s=0)}})(n,t,r,i,a,c,s),o(n,t,r,i,a,c,s,"&#8451;")})).catch((e=>e))},a=async(e="San Francisco")=>{try{const n=await i(e);return document.getElementById("content").setAttribute("class","content"),n}catch(e){return e}};document.getElementById("button").onclick=()=>{const e=document.getElementById("inputLocation").value;a(e)},a()})()})();