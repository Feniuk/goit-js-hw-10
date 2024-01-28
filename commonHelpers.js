import"./assets/styles-e17b8ff6.js";import{f as b,i as p}from"./assets/vendor-651d7991.js";const e=document.querySelector("button"),i=document.querySelector("input"),g=document.querySelector(".value[data-days]"),C=document.querySelector(".value[data-hours]"),S=document.querySelector(".value[data-minutes]"),v=document.querySelector(".value[data-seconds]");e.disabled=!0;let a,o,m,r=!1;const M={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){a=t[0],a<Date.now()?(p.show({message:"Please choose a date in the future",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight"}),e.disabled=!0):(e.disabled=!1,e.style.background="#4E75FF",e.style.color="#FFF")}};b("#datetime-picker",M);e.addEventListener("click",()=>{r||(e.disabled=!0,i.disabled=!0,e.style.background="#CFCFCF",e.style.color="#989898",o=a-Date.now(),u(s(o)),m=setInterval(()=>{o-=1e3,u(s(o)),x()},1e3),r=!0)});function s(t){const f=Math.floor(t/864e5),h=Math.floor(t%864e5/36e5),y=Math.floor(t%864e5%36e5/6e4),F=Math.floor(t%864e5%36e5%6e4/1e3);return{days:f,hours:h,minutes:y,seconds:F}}function u({days:t,hours:c,minutes:d,seconds:l}){g.textContent=`${Math.max(0,n(t))}`,C.textContent=`${Math.max(0,n(c))}`,S.textContent=`${Math.max(0,n(d))}`,v.textContent=`${Math.max(0,n(l))}`}function x(){o<=0&&(clearInterval(m),r=!1,e.disabled=!0,i.disabled=!1,e.style.background="#4E75FF",e.style.color="#FFF",o=0,u(s(o)))}function n(t){return t.toString().padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map
