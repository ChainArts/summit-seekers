(()=>{"use strict";var e={519:(e,t,r)=>{r.d(t,{bl:()=>o});var n=r(196);function o(e){const[t,r]=(0,n.useState)([]),[o,a]=(0,n.useState)(!0),[l,c]=(0,n.useState)(null);return(0,n.useEffect)((()=>{!async function(){try{const t=await fetch(`http://cms.localhost/wp-json/wp/v2/posts?categories=${e}`);if(!t.ok)throw new Error("Network response was not ok");const n=await t.json();r(n)}catch(e){c(e)}finally{a(!1)}}()}),[e]),{posts:t,loading:o,error:l}}},196:e=>{e.exports=window.React}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=r(196);const t=window.ReactDOM;var n=r.n(t),o=r(519);const a=document.querySelectorAll(".icon-grid-update");function l(t){if(console.log(t),void 0===t.categoryID)return(0,e.createElement)("p",null,"Select a category");const{posts:r,loading:n,error:a}=(0,o.bl)(t.categoryID);return n?(0,e.createElement)("p",null,"Loading..."):a?(0,e.createElement)("p",null,"Error: ",a.message):(0,e.createElement)(e.Fragment,null,r.map((t=>(0,e.createElement)("div",{key:t.id},(0,e.createElement)("h3",null,t.title.rendered),(0,e.createElement)("div",{dangerouslySetInnerHTML:{__html:t.content.rendered}})))))}null!==a&&a.forEach((t=>{const r=JSON.parse(t.querySelector("pre").innerText);r&&n().render((0,e.createElement)(l,{...r}),t)}))})()})();