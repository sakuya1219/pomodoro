import{g as L,o as j,a as x,n as W,u as T,b as U,r as _,w as B,c as O,s as A,d as D,e as F,f as w,V as R,h as v,i as I,t as P,j as C}from"./index-BEzTupd1.js";import{u as q}from"./list-C_C6QEs-.js";import{_ as z,u as H}from"./_plugin-vue_export-helper-DnDJCmWX.js";import{V as E,a as $}from"./VRow-DHX8iP8V.js";function k(e){return L()?(j(e),!0):!1}function y(){const e=new Set,t=o=>{e.delete(o)};return{on:o=>{e.add(o);const r=()=>t(o);return k(r),{off:r}},off:t,trigger:(...o)=>Promise.all(Array.from(e).map(r=>r(...o)))}}function V(e){return typeof e=="function"?e():T(e)}const J=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const K=Object.prototype.toString,Q=e=>K.call(e)==="[object Object]",X=()=>{};function Y(e){return U()}function Z(e,t=!0,n){Y()?x(e,n):t?e():W(e)}function ee(e){var t;const n=V(e);return(t=n==null?void 0:n.$el)!=null?t:n}const M=J?window:void 0;function te(...e){let t,n,i,o;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,i,o]=e,t=M):[t,n,i,o]=e,!t)return X;Array.isArray(n)||(n=[n]),Array.isArray(i)||(i=[i]);const r=[],s=()=>{r.forEach(l=>l()),r.length=0},p=(l,u,c,f)=>(l.addEventListener(u,c,f),()=>l.removeEventListener(u,c,f)),m=B(()=>[ee(t),V(o)],([l,u])=>{if(s(),!l)return;const c=Q(u)?{...u}:u;r.push(...n.flatMap(f=>i.map(h=>p(l,f,h,c))))},{immediate:!0,flush:"post"}),g=()=>{m(),s()};return k(g),g}function ne(){const e=_(!1),t=U();return t&&x(()=>{e.value=!0},t),e}function oe(e){const t=ne();return O(()=>(t.value,!!e()))}function re(e={}){const{window:t=M,requestPermissions:n=!0}=e,i=e,o=oe(()=>{if(!t||!("Notification"in t))return!1;try{new Notification("")}catch{return!1}return!0}),r=_(o.value&&"permission"in Notification&&Notification.permission==="granted"),s=_(null),p=async()=>{if(o.value)return!r.value&&Notification.permission!=="denied"&&await Notification.requestPermission()==="granted"&&(r.value=!0),r.value},{on:m,trigger:g}=y(),{on:l,trigger:u}=y(),{on:c,trigger:f}=y(),{on:h,trigger:b}=y(),N=async a=>{if(!o.value||!r.value)return;const d=Object.assign({},i,a);return s.value=new Notification(d.title||"",d),s.value.onclick=g,s.value.onshow=u,s.value.onerror=f,s.value.onclose=b,s.value},S=()=>{s.value&&s.value.close(),s.value=null};if(n&&Z(p),k(S),o.value&&t){const a=t.document;te(a,"visibilitychange",d=>{d.preventDefault(),a.visibilityState==="visible"&&S()})}return{isSupported:o,notification:s,ensurePermissions:p,permissionGranted:r,show:N,close:S,onClick:m,onShow:l,onError:c,onClose:h}}const se={__name:"index",setup(e){const t={STOP:0,COUNTING:1,PAUSE:2},n=_(t.STOP),i=q(),{currentItem:o,items:r,timeleft:s}=A(i),{setCurrentItem:p,countdown:m,setFinishItem:g}=i,l=H(),{selectedAlarmFile:u}=A(l);let c=0;const f=()=>{n.value===t.STOP&&r.value.length>0&&p(),n.value=t.COUNTING,c=setInterval(()=>{m(),s.value===0&&b()},1e3)},h=()=>{n.value=t.PAUSE,clearInterval(c)},b=()=>{clearInterval(c),n.value=t.STOP;const a=new Audio;a.src=u.value,a.play();const{show:d,isSupported:G}=re({title:"事項完成",body:o.value,icon:new URL(""+new URL("tomato-tm_sgEMz.png",import.meta.url).href,import.meta.url).href});G.value&&d(),g(),r.value.length>0&&f()},N=O(()=>o.value.length>0?o.value:r.value.length>0?"點擊開始":"沒有事項"),S=O(()=>{const a=Math.floor(s.value/60).toString().padStart(2,"0"),d=(s.value%60).toString().padStart(2,"0");return a+":"+d});return(a,d)=>(D(),F(R,{class:"bg-deep-purple-lighten-2"},{default:w(()=>[v($,null,{default:w(()=>[v(E,{cols:"12"},{default:w(()=>[I("h1",null,"目前事項 "+P(N.value),1),I("h2",null,"剩餘時間 "+P(S.value),1)]),_:1}),v(E,{cols:"12"},{default:w(()=>[v(C,{class:"bg-deep-purple-lighten-4",icon:"mdi-play",onClick:f,disabled:n.value===t.COUNTING||T(o).length===0&&T(r).length===0},null,8,["disabled"]),v(C,{class:"bg-deep-purple-lighten-4",icon:"mdi-pause",disabled:n.value!==t.COUNTING,onClick:h},null,8,["disabled"]),v(C,{class:"bg-deep-purple-lighten-4",icon:"mdi-skip-next",disabled:T(o).length===0,onClick:b},null,8,["disabled"])]),_:1})]),_:1})]),_:1}))}},ce=z(se,[["__scopeId","data-v-b0d9f20a"]]);export{ce as default};
