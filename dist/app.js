!function(e){var t={};function n(r){if(t[r])return t[r].exports;var l=t[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(r,l,function(t){return e[t]}.bind(null,l));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){n(1),e.exports=n(2)},function(e,t,n){"use strict";var r,l,i,o;n.r(t),null!=document.getElementById("breadcrumbContainer")&&setTimeout((function(){document.getElementById("breadcrumbContainer").classList.remove("opacity-0")}),100),r=document.querySelector(".hamburger"),l=document.querySelectorAll(".hamburger"),i=document.querySelector("header"),o=document.querySelector(".vd-menu__container"),l.forEach((function(e){e.addEventListener("click",(function(){r.classList.toggle("is-active"),i.classList.toggle("overflow-y-auto"),i.classList.toggle("h-full"),o.classList.toggle("hidden")}))})),null!==document.getElementById("breadcrumbContainer")&&function(){var e=null!=document.getElementById("breadcrumbList")?document.getElementById("breadcrumbList"):null,t=null!=e?Array.from(e.children):null,n=window.location.pathname.split("/"),r=n[n.length-1];r.includes("-")&&(r=(r=r.split("-")).join(" "));var l=null!=document.getElementById("breadcrumbTitle")?document.getElementById("breadcrumbTitle").innerHTML:r;e&&(e.firstElementChild.firstElementChild.innerHTML='<i class="icon-home"></i>'),t&&(t.forEach((function(e){e.innerHTML+='<i class="icon-right-big mr-1"></i>'})),e.innerHTML+='<li class="capitalize">Página Actual</li>');var i=null!=document.getElementById("breadcrumbDescription")?document.getElementById("breadcrumbDescription"):null,o=null!=document.getElementById("breadcrumbContent")?document.getElementById("breadcrumbContent"):null;o?(l?o.firstElementChild.innerHTML=l:o.firstElementChild.classList.add("hidden"),i?(o.lastElementChild.innerHTML=i.innerHTML,i.parentElement.classList.add("hidden")):o.lastElementChild.classList.add("hidden")):document.getElementById("breadcrumbContent").classList.add("hidden")}()},function(e,t){}]);