"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[420],{420:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var s=n(43),a=n(688),c=n(837),r=n(347),o=n(630),l=n(579);const i=e=>{const t=(0,s.useRef)(),{center:n,zoom:a}=e;return(0,s.useEffect)((()=>{const e=new window.google.maps.Map(t.current,{center:n,zoom:a});new window.google.maps.Marker({position:n,map:e})}),[n,a]),(0,l.jsx)("div",{ref:t,className:"map ".concat(e.className),style:e.style})};var d=n(626),h=n(863),m=n(886),u=n(171);const x=e=>{const{isLoading:t,error:n,sendRequest:a,clearError:x}=(0,u.x)(),j=(0,s.useContext)(m.c),[p,f]=(0,s.useState)(!1),[g,C]=(0,s.useState)(!1),v=()=>f(!1),b=()=>{C(!1)};return(0,l.jsxs)(s.Fragment,{children:[(0,l.jsx)(d.A,{error:n,onClear:x}),(0,l.jsx)(o.A,{show:p,onCancel:v,header:e.address,contentClass:"place-item__modal-content",footerClass:"place-item__modal-actions",footer:(0,l.jsx)(r.A,{onClick:v,children:"CLOSE"}),children:(0,l.jsx)("div",{className:"map-container",children:(0,l.jsx)(i,{center:e.coordinates,zoom:16})})}),(0,l.jsx)(o.A,{show:g,onCancel:b,header:"Are you sure?",footerClass:"place-item__modal-actions",footer:(0,l.jsxs)(s.Fragment,{children:[(0,l.jsx)(r.A,{inverse:!0,onClick:b,children:"CANCEL"}),(0,l.jsx)(r.A,{danger:!0,onClick:async()=>{C(!1);try{await a("https://muyang-mern-9c1bf9718551.herokuapp.com/api"+"/places/".concat(e.id),"DELETE",null,{Authorization:"Bearer "+j.token}),e.onDelete(e.id)}catch(t){}},children:"DELETE"})]}),children:(0,l.jsx)("p",{children:"Do you want to proceed and delete this place? Please note that it can't be undone thereafter."})}),(0,l.jsx)("li",{className:"place-item",children:(0,l.jsxs)(c.A,{className:"place-item__content",children:[t&&(0,l.jsx)(h.A,{asOverlay:!0}),(0,l.jsx)("div",{className:"place-item__image",children:(0,l.jsx)("img",{src:"".concat("https://muyang-mern-9c1bf9718551.herokuapp.com","/").concat(e.image),alt:e.title})}),(0,l.jsxs)("div",{className:"place-item__info",children:[(0,l.jsx)("h2",{children:e.title}),(0,l.jsx)("h3",{children:e.address}),(0,l.jsx)("p",{children:e.description})]}),(0,l.jsxs)("div",{className:"place-item__actions",children:[(0,l.jsx)(r.A,{inverse:!0,onClick:()=>f(!0),children:"VIEW ON MAP"}),j.userId===e.creatorId&&(0,l.jsx)(r.A,{to:"/places/".concat(e.id),children:"EDIT"}),j.userId===e.creatorId&&(0,l.jsx)(r.A,{danger:!0,onClick:()=>{C(!0)},children:"DELETE"})]})]})})]})},j=e=>0===e.items.length?(0,l.jsx)("div",{className:"place-list center",children:(0,l.jsxs)(c.A,{children:[(0,l.jsx)("h2",{children:"No places found. Maybe create one?"}),(0,l.jsx)(r.A,{to:"/places/new",children:"Share Place"})]})}):(0,l.jsx)("ul",{className:"place-list",children:e.items.map((t=>(0,l.jsx)(x,{id:t.id,image:t.image,title:t.title,description:t.description,address:t.address,creatorId:t.creator,coordinates:t.location,onDelete:e.onDeletePlace},t.id)))}),p=()=>{const[e,t]=(0,s.useState)(),{isLoading:n,error:c,sendRequest:r,clearError:o}=(0,u.x)(),i=(0,a.g)().userId;(0,s.useEffect)((()=>{(async()=>{try{const e=await r("".concat("https://muyang-mern-9c1bf9718551.herokuapp.com/api","/places/user/").concat(i));t(e.places)}catch(e){}})()}),[r,i]);return(0,l.jsxs)(s.Fragment,{children:[(0,l.jsx)(d.A,{error:c,onClear:o}),n&&(0,l.jsx)("div",{className:"center",children:(0,l.jsx)(h.A,{})}),!n&&e&&(0,l.jsx)(j,{items:e,onDeletePlace:e=>{t((t=>t.filter((t=>t.id!==e))))}})]})}},347:(e,t,n)=>{n.d(t,{A:()=>c});n(43);var s=n(582),a=n(579);const c=e=>e.href?(0,a.jsx)("a",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),href:e.href,children:e.children}):e.to?(0,a.jsx)(s.N_,{to:e.to,exact:e.exact,className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),children:e.children}):(0,a.jsx)("button",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),type:e.type,onClick:e.onClick,disabled:e.disabled,children:e.children})},837:(e,t,n)=>{n.d(t,{A:()=>a});n(43);var s=n(579);const a=e=>(0,s.jsx)("div",{className:"card ".concat(e.className),style:e.style,children:e.children})},626:(e,t,n)=>{n.d(t,{A:()=>r});n(43);var s=n(630),a=n(347),c=n(579);const r=e=>(0,c.jsx)(s.A,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:(0,c.jsx)(a.A,{onClick:e.onClear,children:"Okay"}),children:(0,c.jsx)("p",{children:e.error})})},630:(e,t,n)=>{n.d(t,{A:()=>i});var s=n(43),a=n(950),c=n(336),r=n(6),o=n(579);const l=e=>{const t=(0,o.jsxs)("div",{className:"modal ".concat(e.className),style:e.style,children:[(0,o.jsx)("header",{className:"modal__header ".concat(e.headerClass),children:(0,o.jsx)("h2",{children:e.header})}),(0,o.jsxs)("form",{onSubmit:e.onSubmit?e.onSubmit:e=>e.preventDefault(),children:[(0,o.jsx)("div",{className:"modal__content ".concat(e.contentClass),children:e.children}),(0,o.jsx)("footer",{className:"modal__footer ".concat(e.footerClass),children:e.footer})]})]});return a.createPortal(t,document.getElementById("modal-hook"))},i=e=>(0,o.jsxs)(s.Fragment,{children:[e.show&&(0,o.jsx)(r.A,{onClick:e.onCancel}),(0,o.jsx)(c.A,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal",children:(0,o.jsx)(l,{...e})})]})},171:(e,t,n)=>{n.d(t,{x:()=>a});var s=n(43);const a=()=>{const[e,t]=(0,s.useState)(!1),[n,a]=(0,s.useState)(),c=(0,s.useRef)([]),r=(0,s.useCallback)((async function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};t(!0);const o=new AbortController;c.current.push(o);try{const a=await fetch(e,{method:n,body:s,headers:r,signal:o.signal}),l=await a.json();if(c.current=c.current.filter((e=>e!==o)),!a.ok)throw new Error(l.message);return t(!1),l}catch(l){throw a(l.message),t(!1),l}}),[]);return(0,s.useEffect)((()=>()=>{c.current.forEach((e=>e.abort()))}),[]),{isLoading:e,error:n,sendRequest:r,clearError:()=>{a(null)}}}}}]);
//# sourceMappingURL=420.f644dee6.chunk.js.map