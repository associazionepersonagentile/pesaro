!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):e.quicklink=n()}(this,function(){var e={};function n(e){return new Promise(function(n,t){var r=new XMLHttpRequest;r.open("GET",e,r.withCredentials=!0),r.onload=function(){200===r.status?n():t()},r.send()})}var t,r,o=(t="prefetch",(r=document.createElement("link")).relList&&r.relList.supports&&r.relList.supports(t)?function(e){return new Promise(function(n,t){var r=document.createElement("link");r.rel="prefetch",r.href=e,r.onload=n,r.onerror=t,document.head.appendChild(r)})}:n);function i(t,r,i){if(!(e[t]||(i=navigator.connection)&&((i.effectiveType||"").includes("2g")||i.saveData)))return(r?function(e){return null==self.fetch?n(e):fetch(e,{credentials:"include"})}:o)(t).then(function(){e[t]=!0})}var u=window.requestIdleCallback||function(e){var n=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-n))}})},1)},c=new Set,f=window.IntersectionObserver&&new IntersectionObserver(function(e){e.forEach(function(e){if(e.isIntersecting){var n=e.target;c.has(n.href)&&(f.unobserve(n),a(n.href))}})});function a(e){c.delete(e),i(new URL(e,location.href).toString(),f.priority)}return function(e){e||(e={}),f&&(f.priority=e.priority||!1);var n=e.origins||[location.hostname],t=e.ignores||[];(e.timeoutFn||u)(function(){e.urls?e.urls.forEach(a):f&&Array.from((e.el||document).querySelectorAll("a"),function(e){f.observe(e),n.length&&!n.includes(e.hostname)||function e(n,t){return Array.isArray(t)?t.some(function(t){return e(n,t)}):(t.test||t).call(t,n.href,n)}(e,t)||c.add(e.href)})},{timeout:e.timeout||2e3})}});
