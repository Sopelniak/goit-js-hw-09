const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body");let o=null;function a(t){t.disabled=!0}function r(t){t.disabled=!1}t.addEventListener("click",(function(){o=setInterval((()=>{n.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),a(t),r(e)})),e.addEventListener("click",(function(){clearInterval(o),r(t),a(e)})),a(e);
//# sourceMappingURL=01-color-switcher.935a51cf.js.map