function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("eWCmQ");e(i).Notify.init({fontSize:"20px",width:"400px",position:"center-bottom",timeout:5e3});const u=document.querySelector(".form");document.querySelector(".form button");function l(t,n){new Promise(((e,o)=>{setTimeout((()=>{Math.random()>.3?e(`✅ Fulfilled promise ${t} in ${n}ms`):o(`❌ Rejected promise ${t} in ${n}ms`)}),n)})).then((t=>e(i).Notify.success(t))).catch((t=>e(i).Notify.failure(t)))}u.addEventListener("submit",(function(e){e.preventDefault();const{elements:{delay:t,step:n,amount:o}}=e.currentTarget,r={};r[t.name]=t.value,r[n.name]=n.value,r[o.name]=o.value;let i=Number(t.value);for(let e=1;e<=o.value;e++)1===e?l(e,t.value):(i+=Number(n.value),l(e,i))}));
//# sourceMappingURL=03-promises.0abbf8d2.js.map