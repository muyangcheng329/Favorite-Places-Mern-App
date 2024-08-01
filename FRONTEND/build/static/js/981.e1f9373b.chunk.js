"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[981],{981:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var n=a(43),s=a(688),r=a(244),l=a(347),i=a(626),o=a(863),c=a(356),d=a(962),u=a(789),p=a(171),h=a(886),m=(a(284),a(579));const v=()=>{const e=(0,n.useContext)(h.c),{isLoading:t,error:a,sendRequest:v,clearError:x}=(0,p.x)(),[f,g]=(0,u.m)({title:{value:"",isValid:!1},description:{value:"",isValid:!1},address:{value:"",isValid:!1},image:{value:null,isValid:!1}},!1),j=(0,s.W6)();return(0,m.jsxs)(n.Fragment,{children:[(0,m.jsx)(i.A,{error:a,onClear:x}),(0,m.jsxs)("form",{className:"place-form",onSubmit:async t=>{t.preventDefault();try{const t=new FormData;t.append("title",f.inputs.title.value),t.append("description",f.inputs.description.value),t.append("address",f.inputs.address.value),t.append("image",f.inputs.image.value),await v("https://muyang-mern-9c1bf9718551.herokuapp.com/api/places","POST",t,{Authorization:"Bearer "+e.token}),j.push("/")}catch(a){}},children:[t&&(0,m.jsx)(o.A,{asOverlay:!0}),(0,m.jsx)(r.A,{id:"title",element:"input",type:"text",label:"Title",validators:[(0,d.B_)()],errorText:"Please enter a valid title.",onInput:g}),(0,m.jsx)(r.A,{id:"description",element:"textarea",label:"Description",validators:[(0,d.Ik)(5)],errorText:"Please enter a valid description (at least 5 characters).",onInput:g}),(0,m.jsx)(r.A,{id:"address",element:"input",label:"Address",validators:[(0,d.B_)()],errorText:"Please enter a valid address.",onInput:g}),(0,m.jsx)(c.A,{id:"image",onInput:g,errorText:"Please provide an image."}),(0,m.jsx)(l.A,{type:"submit",disabled:!f.isValid,children:"ADD PLACE"})]})]})}},347:(e,t,a)=>{a.d(t,{A:()=>r});a(43);var n=a(582),s=a(579);const r=e=>e.href?(0,s.jsx)("a",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),href:e.href,children:e.children}):e.to?(0,s.jsx)(n.N_,{to:e.to,exact:e.exact,className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),children:e.children}):(0,s.jsx)("button",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),type:e.type,onClick:e.onClick,disabled:e.disabled,children:e.children})},356:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(43),s=a(347),r=a(579);const l=e=>{const[t,a]=(0,n.useState)(),[l,i]=(0,n.useState)(),[o,c]=(0,n.useState)(!1),d=(0,n.useRef)();(0,n.useEffect)((()=>{if(!t)return;const e=new FileReader;e.onload=()=>{i(e.result)},e.readAsDataURL(t)}),[t]);return(0,r.jsxs)("div",{className:"form-control",children:[(0,r.jsx)("input",{id:e.id,ref:d,style:{display:"none"},type:"file",accept:".jpg,.png,.jpeg",onChange:t=>{let n,s=o;t.target.files&&1===t.target.files.length?(n=t.target.files[0],a(n),c(!0),s=!0):(c(!1),s=!1),e.onInput(e.id,n,s)}}),(0,r.jsxs)("div",{className:"image-upload ".concat(e.center&&"center"),children:[(0,r.jsxs)("div",{className:"image-upload__preview",children:[l&&(0,r.jsx)("img",{src:l,alt:"Preview"}),!l&&(0,r.jsx)("p",{children:"Please pick an image."})]}),(0,r.jsx)(s.A,{type:"button",onClick:()=>{d.current.click()},children:"PICK IMAGE"})]}),!o&&(0,r.jsx)("p",{children:e.errorText})]})}},244:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(43),s=a(962),r=a(579);const l=(e,t)=>{switch(t.type){case"CHANGE":return{...e,value:t.val,isValid:(0,s.tf)(t.val,t.validators)};case"TOUCH":return{...e,isTouched:!0};default:return e}},i=e=>{const[t,a]=(0,n.useReducer)(l,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),{id:s,onInput:i}=e,{value:o,isValid:c}=t;(0,n.useEffect)((()=>{i(s,o,c)}),[s,o,c,i]);const d=t=>{a({type:"CHANGE",val:t.target.value,validators:e.validators})},u=()=>{a({type:"TOUCH"})},p="input"===e.element?(0,r.jsx)("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:d,onBlur:u,value:t.value}):(0,r.jsx)("textarea",{id:e.id,rows:e.rows||3,onChange:d,onBlur:u,value:t.value});return(0,r.jsxs)("div",{className:"form-control ".concat(!t.isValid&&t.isTouched&&"form-control--invalid"),children:[(0,r.jsx)("label",{htmlFor:e.id,children:e.label}),p,!t.isValid&&t.isTouched&&(0,r.jsx)("p",{children:e.errorText})]})}},626:(e,t,a)=>{a.d(t,{A:()=>l});a(43);var n=a(630),s=a(347),r=a(579);const l=e=>(0,r.jsx)(n.A,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:(0,r.jsx)(s.A,{onClick:e.onClear,children:"Okay"}),children:(0,r.jsx)("p",{children:e.error})})},630:(e,t,a)=>{a.d(t,{A:()=>c});var n=a(43),s=a(950),r=a(336),l=a(6),i=a(579);const o=e=>{const t=(0,i.jsxs)("div",{className:"modal ".concat(e.className),style:e.style,children:[(0,i.jsx)("header",{className:"modal__header ".concat(e.headerClass),children:(0,i.jsx)("h2",{children:e.header})}),(0,i.jsxs)("form",{onSubmit:e.onSubmit?e.onSubmit:e=>e.preventDefault(),children:[(0,i.jsx)("div",{className:"modal__content ".concat(e.contentClass),children:e.children}),(0,i.jsx)("footer",{className:"modal__footer ".concat(e.footerClass),children:e.footer})]})]});return s.createPortal(t,document.getElementById("modal-hook"))},c=e=>(0,i.jsxs)(n.Fragment,{children:[e.show&&(0,i.jsx)(l.A,{onClick:e.onCancel}),(0,i.jsx)(r.A,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal",children:(0,i.jsx)(o,{...e})})]})},789:(e,t,a)=>{a.d(t,{m:()=>r});var n=a(43);const s=(e,t)=>{switch(t.type){case"INPUT_CHANGE":let a=!0;for(const n in e.inputs)e.inputs[n]&&(a=n===t.inputId?a&&t.isValid:a&&e.inputs[n].isValid);return{...e,inputs:{...e.inputs,[t.inputId]:{value:t.value,isValid:t.isValid}},isValid:a};case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},r=(e,t)=>{const[a,r]=(0,n.useReducer)(s,{inputs:e,isValid:t});return[a,(0,n.useCallback)(((e,t,a)=>{r({type:"INPUT_CHANGE",value:t,isValid:a,inputId:e})}),[]),(0,n.useCallback)(((e,t)=>{r({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]}},171:(e,t,a)=>{a.d(t,{x:()=>s});var n=a(43);const s=()=>{const[e,t]=(0,n.useState)(!1),[a,s]=(0,n.useState)(),r=(0,n.useRef)([]),l=(0,n.useCallback)((async function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};t(!0);const i=new AbortController;r.current.push(i);try{const s=await fetch(e,{method:a,body:n,headers:l,signal:i.signal}),o=await s.json();if(r.current=r.current.filter((e=>e!==i)),!s.ok)throw new Error(o.message);return t(!1),o}catch(o){throw s(o.message),t(!1),o}}),[]);return(0,n.useEffect)((()=>()=>{r.current.forEach((e=>e.abort()))}),[]),{isLoading:e,error:a,sendRequest:l,clearError:()=>{s(null)}}}},962:(e,t,a)=>{a.d(t,{B_:()=>i,Ik:()=>o,i$:()=>c,tf:()=>d});const n="REQUIRE",s="MINLENGTH",r="MAXLENGTH",l="EMAIL",i=()=>({type:n}),o=e=>({type:s,val:e}),c=()=>({type:l}),d=(e,t)=>{let a=!0;for(const i of t)i.type===n&&(a=a&&e.trim().length>0),i.type===s&&(a=a&&e.trim().length>=i.val),i.type===r&&(a=a&&e.trim().length<=i.val),"MIN"===i.type&&(a=a&&+e>=i.val),"MAX"===i.type&&(a=a&&+e<=i.val),i.type===l&&(a=a&&/^\S+@\S+\.\S+$/.test(e));return a}},284:()=>{}}]);
//# sourceMappingURL=981.e1f9373b.chunk.js.map