import{o as u,c as i,n as h,u as g,F as d,r as _,a as m,b as C,d as k,e as p,t as x,f as $,g as b}from"./vendor.34e7aed0.js";const L=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerpolicy&&(l.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?l.credentials="include":s.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(s){if(s.ep)return;s.ep=!0;const l=e(s);fetch(s.href,l)}};L();var y=(r,t)=>{const e=r.__vccOpts||r;for(const[n,s]of t)e[n]=s;return e};const S={props:{alive:Boolean},setup(r){const e=r.alive?"cell cell-alive":"cell cell-dead";return(n,s)=>(u(),i("div",{class:h(g(e))},null,2))}};var N=y(S,[["__scopeId","data-v-fad94d6e"]]);const A={class:"stage"},B={props:{stage:Array},emits:["coords"],setup(r,{emit:t}){function e(n,s){t("coords",{row:n,col:s})}return(n,s)=>(u(),i("div",A,[(u(!0),i(d,null,_(r.stage,(l,a)=>(u(),i("div",{class:"row",key:`row-${a}-${l}`},[(u(!0),i(d,null,_(l,(c,o)=>(u(),m(N,{key:`cell-${o}-${c}`,alive:c,onClick:f=>e(a,o)},null,8,["alive","onClick"]))),128))]))),128))]))}};var I=y(B,[["__scopeId","data-v-7f874eff"]]);function v(r,t,e){r[t+1][e]=!0,r[t+2][e+1]=!0,r[t+2][e+2]=!0,r[t][e+2]=!0,r[t+1][e+2]=!0}function O(r,t){const e=C({stage:[]});for(let n=0;n<r;n++){const s=[];for(let l=0;l<t;l++)s.push(!1);e.stage.push(s)}return v(e.stage,0,0),v(e.stage,20,20),e}function F(r,t,e){const n=r.length,s=r[0].length;return[t>0&&e>0?r[t-1][e-1]:!1,t>0?r[t-1][e]:!1,t>0&&e<=s-2?r[t-1][e+1]:!1,e>0?r[t][e-1]:!1,e<=s-2?r[t][e+1]:!1,t<=n-2&&e>0?r[t+1][e-1]:!1,t<=n-2?r[t+1][e]:!1,t<=n-2&&e<=s-2?r[t+1][e+1]:!1].filter(l=>l).length}function G(r){const t={stage:[]};for(let e=0;e<r.stage.length;e++){t.stage.push([]);for(let n=0;n<r.stage[e].length;n++){t.stage[e].push(r.stage[e][n]);let s=r.stage[e][n];const l=F(r.stage,e,n);s?l<2?s=!1:l===2||l===3?s=!0:l>3&&(s=!1):l===3&&(s=!0),t.stage[e][n]=s}}for(let e=0;e<r.stage.length;e++)for(let n=0;n<r.stage[e].length;n++)r.stage[e][n]=t.stage[e][n]}const P={setup(r){let t=null;const e=k(!0),n=O(30,70);function s(){t=setInterval(()=>{G(n)},300),e.value=!1}function l(){clearInterval(t),e.value=!0}function a({row:c,col:o}){!e.value||(n.stage[c][o]=!n.stage[c][o])}return(c,o)=>(u(),i(d,null,[p("h1",null,"Game of Life "+x(e.value?"(paused)":""),1),$(I,{stage:g(n).stage,onCoords:o[0]||(o[0]=f=>a(f))},null,8,["stage"]),p("button",{onClick:o[1]||(o[1]=f=>s())},"Start"),p("button",{onClick:o[2]||(o[2]=f=>l())},"Stop")],64))}};const E={setup(r){return(t,e)=>(u(),m(P))}};b(E).mount("#app");