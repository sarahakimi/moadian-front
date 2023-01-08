(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[134],{2638:function(e,t,r){"use strict";r.d(t,{X:function(){return i}});var n=r(2482),o=r(42283),i=function(e,t,r){return void 0===t&&(t={abortEarly:!1}),void 0===r&&(r={}),function(i,a,s){try{return Promise.resolve(function(n,o){try{var s=(t.context,Promise.resolve(e["sync"===r.mode?"validateSync":"validate"](i,Object.assign({},t,{context:a}))).then((function(e){return{values:e,errors:{}}})))}catch(n){return o(n)}return s&&s.then?s.then(void 0,o):s}(0,(function(e){return{values:{},errors:(0,n.D)((t=e,r="all"===s.criteriaMode,t.inner.reduce((function(e,t){if(e[t.path]||(e[t.path]={message:t.message,type:t.type}),r){var n=e[t.path].types,i=n&&n[t.type];e[t.path]=(0,o.KN)(t.path,r,e,t.type,i?[].concat(i,t.message):t.message)}return e}),{})),s.fields)};var t,r})))}catch(l){return Promise.reject(l)}}}},31425:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var n=r(63366),o=r(87462),i=r(67294),a=r(93680),s=r(27192),l=r(11496),c=r(71657),u=r(28979);function d(e){return(0,u.Z)("MuiDialogActions",e)}(0,r(76087).Z)("MuiDialogActions",["root","spacing"]);var f=r(85893);const p=["className","disableSpacing"],v=(0,l.ZP)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,!r.disableSpacing&&t.spacing]}})((({ownerState:e})=>(0,o.Z)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})));var m=i.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiDialogActions"}),{className:i,disableSpacing:l=!1}=r,u=(0,n.Z)(r,p),m=(0,o.Z)({},r,{disableSpacing:l}),Z=(e=>{const{classes:t,disableSpacing:r}=e,n={root:["root",!r&&"spacing"]};return(0,s.Z)(n,d,t)})(m);return(0,f.jsx)(v,(0,o.Z)({className:(0,a.Z)(Z.root,i),ownerState:m,ref:t},u))}))},58951:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var n=r(63366),o=r(87462),i=r(67294),a=r(27192),s=r(11496),l=r(71657),c=r(15861),u=r(28979);function d(e){return(0,u.Z)("MuiDialogContentText",e)}(0,r(76087).Z)("MuiDialogContentText",["root"]);var f=r(85893);const p=["children"],v=(0,s.ZP)(c.Z,{shouldForwardProp:e=>(0,s.FO)(e)||"classes"===e,name:"MuiDialogContentText",slot:"Root",overridesResolver:(e,t)=>t.root})({});var m=i.forwardRef((function(e,t){const r=(0,l.Z)({props:e,name:"MuiDialogContentText"}),i=(0,n.Z)(r,p),s=(e=>{const{classes:t}=e,r=(0,a.Z)({root:["root"]},d,t);return(0,o.Z)({},t,r)})(i);return(0,f.jsx)(v,(0,o.Z)({component:"p",variant:"body1",color:"text.secondary",ref:t,ownerState:i},r,{classes:s}))}))},6514:function(e,t,r){"use strict";r.d(t,{Z:function(){return Z}});var n=r(63366),o=r(87462),i=r(67294),a=r(93680),s=r(27192),l=r(11496),c=r(71657),u=r(28979);function d(e){return(0,u.Z)("MuiDialogContent",e)}(0,r(76087).Z)("MuiDialogContent",["root","dividers"]);var f=r(4472),p=r(85893);const v=["className","dividers"],m=(0,l.ZP)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.dividers&&t.dividers]}})((({theme:e,ownerState:t})=>(0,o.Z)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},t.dividers?{padding:"16px 24px",borderTop:`1px solid ${e.palette.divider}`,borderBottom:`1px solid ${e.palette.divider}`}:{[`.${f.Z.root} + &`]:{paddingTop:0}})));var Z=i.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiDialogContent"}),{className:i,dividers:l=!1}=r,u=(0,n.Z)(r,v),f=(0,o.Z)({},r,{dividers:l}),Z=(e=>{const{classes:t,dividers:r}=e,n={root:["root",r&&"dividers"]};return(0,s.Z)(n,d,t)})(f);return(0,p.jsx)(m,(0,o.Z)({className:(0,a.Z)(Z.root,i),ownerState:f,ref:t},u))}))},33090:function(e,t,r){"use strict";var n=r(87462),o=r(63366),i=r(67294),a=r(93680),s=r(27192),l=r(15861),c=r(11496),u=r(71657),d=r(4472),f=r(34182),p=r(85893);const v=["className","id"],m=(0,c.ZP)(l.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(e,t)=>t.root})({padding:"16px 24px",flex:"0 0 auto"}),Z=i.forwardRef((function(e,t){const r=(0,u.Z)({props:e,name:"MuiDialogTitle"}),{className:l,id:c}=r,Z=(0,o.Z)(r,v),g=r,x=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},d.a,t)})(g),{titleId:h=c}=i.useContext(f.Z);return(0,p.jsx)(m,(0,n.Z)({component:"h2",className:(0,a.Z)(x.root,l),ownerState:g,ref:t,variant:"h6",id:h},Z))}));t.Z=Z},4472:function(e,t,r){"use strict";r.d(t,{a:function(){return o}});var n=r(28979);function o(e){return(0,n.Z)("MuiDialogTitle",e)}const i=(0,r(76087).Z)("MuiDialogTitle",["root"]);t.Z=i},10606:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/superadmin/EditDuration",function(){return r(35515)}])},35515:function(e,t,r){"use strict";r.r(t);var n=r(85893),o=r(67294),i=r(58826),a=r(11057),s=r(11496),l=r(50135),c=r(15861),u=r(79172),d=r(94054),f=r(56815),p=r(74231),v=r(2638),m=r(42283),Z=r(42734),g=r(57709),x=r(64666),h=r(33090),j=r(6514),y=r(31425),b=r(58951),_=r(47312),w=r(18360),C=r(18972),S=r(5370),M=(0,s.ZP)(u.Z)((function(e){var t=e.theme;return{display:"flex",alignItems:"center",padding:t.spacing(3,4),justifyContent:"space-between",backgroundColor:t.palette.background.default}})),D=p.Ry().shape({duration_of_activity:p.Rx().required(" \u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a").min(1,"\u062d\u062f\u0627\u0642\u0644 1 \u0631\u0648\u0632").typeError("\u0628\u0627\u06cc\u062f \u0639\u062f\u062f \u0628\u0627\u0634\u062f"),active:p.O7().required("\u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a").typeError("\u0641\u06cc\u0644\u062f \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f"),name:p.Z_()});t.default=function(e){var t=e.open,r=e.toggle,s=e.setChange,p=e.company,N=e.edit,R=e.setLoading,P=(0,o.useState)(!1),T=P[0],k=P[1],B={duration_of_activity:p.duration_of_activity,name:p.name,active:p.active},E=(0,m.cI)({defaultValues:B,mode:"onChange",resolver:(0,v.X)(D)}),F=E.reset,I=E.control,O=E.handleSubmit,A=E.setError,W=E.formState.errors,q=function(){k(!1),s(!0),r(),F({duration_of_activity:0,name:"",active:!1})},X=function(){r(),F(B)};return(0,n.jsxs)(i.ZP,{open:t,anchor:"left",variant:"temporary",onClose:X,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,n.jsxs)(M,{children:[(0,n.jsxs)(c.Z,{variant:"h6",children:[" ",N?"\u062a\u063a\u06cc\u06cc\u0631 \u0627\u0634\u062a\u0631\u0627\u06a9":"\u0648\u06cc\u0631\u0627\u06cc\u0634 \u06a9\u0648\u0631\u06cc\u0631"]}),(0,n.jsx)(Z.Z,{fontSize:"small",onClick:X,sx:{cursor:"pointer"}})]}),(0,n.jsx)(u.Z,{sx:{p:5},children:(0,n.jsxs)("form",{onSubmit:O((function(e){R(!0),S.Z.put("company/".concat(p.id),e,{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))}).then((function(){R(!1),q()})).catch((function(e){R(!1),A("name",{type:"custom",message:e.response.data.message})}))})),children:[(0,n.jsx)(d.Z,{fullWidth:!0,sx:{mb:4},children:(0,n.jsx)(m.Qr,{name:"name",control:I,rules:{required:!0},render:function(e){var t=e.field,r=t.value,o=t.onChange,i=t.onBlur;return(0,n.jsx)(l.Z,{autoFocus:!0,label:"\u0646\u0627\u0645 \u0634\u0631\u06a9\u062a",value:r,onBlur:i,onChange:o,disabled:N||!1})}})}),(0,n.jsxs)(d.Z,{fullWidth:!0,sx:{mb:4},children:[(0,n.jsx)(m.Qr,{name:"duration_of_activity",control:I,type:"number",rules:{required:!0},render:function(e){var t=e.field,r=t.value,o=t.onChange,i=t.onBlur;return(0,n.jsx)(l.Z,{autoFocus:!0,label:"\u0627\u0639\u062a\u0628\u0627\u0631 \u0627\u06a9\u0627\u0646\u062a (\u0631\u0648\u0632)",value:r,onBlur:i,onChange:o,error:Boolean(W.duration_of_activity)})}}),W.duration_of_activity&&(0,n.jsx)(f.Z,{sx:{color:"error.main"},children:W.duration_of_activity.message})]}),(0,n.jsxs)(d.Z,{fullWidth:!0,sx:{mb:4},children:[(0,n.jsx)(m.Qr,{name:"active",control:I,render:function(e){var t=e.field,r=t.onChange,o=t.onBlur;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(_.Z,{id:"demo-multiple-name-label",children:"\u0648\u0636\u0639\u06cc\u062a"}),(0,n.jsxs)(w.Z,{onBlur:o,labelId:"demo-multiple-name-label",id:"demo-multiple-name",onChange:r,defaultValue:p.active,error:Boolean(W.active),input:(0,n.jsx)(g.Z,{label:"Name"}),children:[(0,n.jsx)(C.Z,{value:!0,children:"\u0641\u0639\u0627\u0644"}),(0,n.jsx)(C.Z,{value:!1,children:"\u063a\u06cc\u0631\u0641\u0639\u0627\u0644"})]})]})}}),W.active&&(0,n.jsx)(f.Z,{sx:{color:"error.main"},children:W.active.message})]}),(0,n.jsx)(a.Z,{size:"large",type:"submit",variant:"contained",sx:{mr:3},fullWidth:!0,children:"\u0630\u062e\u06cc\u0631\u0647"})]})}),(0,n.jsxs)(x.Z,{open:T,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,n.jsx)(h.Z,{id:"alert-dialog-title",children:"\u0648\u06cc\u0631\u0627\u06cc\u0634 \u0634\u0631\u06a9\u062a"}),(0,n.jsx)(j.Z,{children:(0,n.jsxs)(b.Z,{id:"alert-dialog-description",children:["\u0634\u0631\u06a9\u062a ",p.name," \u0648\u06cc\u0631\u0627\u06cc\u0634 \u0634\u062f."]})}),(0,n.jsx)(y.Z,{children:(0,n.jsx)(a.Z,{onClick:q,autoFocus:!0,children:"\u0645\u062a\u0648\u062c\u0647 \u0634\u062f\u0645"})})]})]})}}},function(e){e.O(0,[2283,1524,9075,9774,2888,179],(function(){return t=10606,e(e.s=t);var t}));var t=e.O();_N_E=t}]);