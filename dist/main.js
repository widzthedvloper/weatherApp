(()=>{"use strict";var e,n,t,r={426:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(645),a=t.n(r)()((function(e){return e[1]}));a.push([e.id,"* {\n  box-sizing: border-box;\n}\n\nhtml {\n  height: 100%;\n}\n\nbody {\n  height: 100%;\n  margin: 0;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-image: linear-gradient(blue 50%, white 100%);\n}\n\nh1 {\n  margin-top: 10%;\n}\n\n.location-form {\n  margin: 5% auto;\n  padding: 0;\n  justify-content: center;\n}\n",""]);const o=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&a[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},379:(e,n,t)=>{var r,a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),o=[];function i(e){for(var n=-1,t=0;t<o.length;t++)if(o[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},r=[],a=0;a<e.length;a++){var c=e[a],s=n.base?c[0]+n.base:c[0],u=t[s]||0,d="".concat(s," ").concat(u);t[s]=u+1;var l=i(d),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==l?(o[l].references++,o[l].updater(f)):o.push({identifier:d,updater:m(f,n),references:1}),r.push(d)}return r}function s(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var u,d=(u=[],function(e,n){return u[e]=n,u.filter(Boolean).join("\n")});function l(e,n,t,r){var a=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(n,a);else{var o=document.createTextNode(a),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(o,i[n]):e.appendChild(o)}}function f(e,n,t){var r=t.css,a=t.media,o=t.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,p=0;function m(e,n){var t,r,a;if(n.singleton){var o=p++;t=h||(h=s(n)),r=l.bind(null,t,o,!1),a=l.bind(null,t,o,!0)}else t=s(n),r=f.bind(null,t,n),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else a()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var a=i(t[r]);o[a].references--}for(var s=c(e,n),u=0;u<t.length;u++){var d=i(t[u]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}t=s}}}}},a={};function o(e){var n=a[e];if(void 0!==n)return n.exports;var t=a[e]={id:e,exports:{}};return r[e](t,t.exports,o),t.exports}o.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return o.d(n,{a:n}),n},o.d=(e,n)=>{for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},o.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),e=o(379),n=o.n(e),t=o(426),n()(t.Z,{insert:"head",singleton:!1}),t.Z.locals,(async e=>{try{await void fetch("http://api.openweathermap.org/data/2.5/weather?q=miami&APPID=c7911001fbb406aa98e26c70ab98ec78",{mode:"cors"}).then((e=>e.json())).then((e=>{const n=Math.round(e.main.temp-273),t=e.name,{humidity:r}=e.main,a=Math.round(e.main.temp_min-273),o=Math.round(e.main.temp_max-273),{description:i}=e.weather[0];console.log(n,t,r,a,o,i)})).catch((e=>e))}catch(e){return e}})()})();