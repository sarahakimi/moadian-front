(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[134],{31425:function(e,r,n){"use strict";n.d(r,{Z:function(){return g}});var t=n(63366),o=n(87462),i=n(67294),a=n(93680),s=n(27192),u=n(11496),c=n(71657),l=n(28979);function d(e){return(0,l.Z)("MuiDialogActions",e)}(0,n(76087).Z)("MuiDialogActions",["root","spacing"]);var p=n(85893);const m=["className","disableSpacing"],f=(0,u.ZP)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:n}=e;return[r.root,!n.disableSpacing&&r.spacing]}})((({ownerState:e})=>(0,o.Z)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})));var g=i.forwardRef((function(e,r){const n=(0,c.Z)({props:e,name:"MuiDialogActions"}),{className:i,disableSpacing:u=!1}=n,l=(0,t.Z)(n,m),g=(0,o.Z)({},n,{disableSpacing:u}),v=(e=>{const{classes:r,disableSpacing:n}=e,t={root:["root",!n&&"spacing"]};return(0,s.Z)(t,d,r)})(g);return(0,p.jsx)(f,(0,o.Z)({className:(0,a.Z)(v.root,i),ownerState:g,ref:r},l))}))},58951:function(e,r,n){"use strict";n.d(r,{Z:function(){return g}});var t=n(63366),o=n(87462),i=n(67294),a=n(27192),s=n(11496),u=n(71657),c=n(15861),l=n(28979);function d(e){return(0,l.Z)("MuiDialogContentText",e)}(0,n(76087).Z)("MuiDialogContentText",["root"]);var p=n(85893);const m=["children"],f=(0,s.ZP)(c.Z,{shouldForwardProp:e=>(0,s.FO)(e)||"classes"===e,name:"MuiDialogContentText",slot:"Root",overridesResolver:(e,r)=>r.root})({});var g=i.forwardRef((function(e,r){const n=(0,u.Z)({props:e,name:"MuiDialogContentText"}),i=(0,t.Z)(n,m),s=(e=>{const{classes:r}=e,n=(0,a.Z)({root:["root"]},d,r);return(0,o.Z)({},r,n)})(i);return(0,p.jsx)(f,(0,o.Z)({component:"p",variant:"body1",color:"text.secondary",ref:r,ownerState:i},n,{classes:s}))}))},6514:function(e,r,n){"use strict";n.d(r,{Z:function(){return v}});var t=n(63366),o=n(87462),i=n(67294),a=n(93680),s=n(27192),u=n(11496),c=n(71657),l=n(28979);function d(e){return(0,l.Z)("MuiDialogContent",e)}(0,n(76087).Z)("MuiDialogContent",["root","dividers"]);var p=n(4472),m=n(85893);const f=["className","dividers"],g=(0,u.ZP)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:n}=e;return[r.root,n.dividers&&r.dividers]}})((({theme:e,ownerState:r})=>(0,o.Z)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},r.dividers?{padding:"16px 24px",borderTop:`1px solid ${e.palette.divider}`,borderBottom:`1px solid ${e.palette.divider}`}:{[`.${p.Z.root} + &`]:{paddingTop:0}})));var v=i.forwardRef((function(e,r){const n=(0,c.Z)({props:e,name:"MuiDialogContent"}),{className:i,dividers:u=!1}=n,l=(0,t.Z)(n,f),p=(0,o.Z)({},n,{dividers:u}),v=(e=>{const{classes:r,dividers:n}=e,t={root:["root",n&&"dividers"]};return(0,s.Z)(t,d,r)})(p);return(0,m.jsx)(g,(0,o.Z)({className:(0,a.Z)(v.root,i),ownerState:p,ref:r},l))}))},37645:function(e,r,n){"use strict";var t=n(87462),o=n(63366),i=n(67294),a=n(93680),s=n(27192),u=n(15861),c=n(11496),l=n(71657),d=n(4472),p=n(34182),m=n(85893);const f=["className","id"],g=(0,c.ZP)(u.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(e,r)=>r.root})({padding:"16px 24px",flex:"0 0 auto"}),v=i.forwardRef((function(e,r){const n=(0,l.Z)({props:e,name:"MuiDialogTitle"}),{className:u,id:c}=n,v=(0,o.Z)(n,f),Z=n,h=(e=>{const{classes:r}=e;return(0,s.Z)({root:["root"]},d.a,r)})(Z),{titleId:x=c}=i.useContext(p.Z);return(0,m.jsx)(g,(0,t.Z)({component:"h2",className:(0,a.Z)(h.root,u),ownerState:Z,ref:r,variant:"h6",id:x},v))}));r.Z=v},4472:function(e,r,n){"use strict";n.d(r,{a:function(){return o}});var t=n(28979);function o(e){return(0,t.Z)("MuiDialogTitle",e)}const i=(0,n(76087).Z)("MuiDialogTitle",["root"]);r.Z=i},10606:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/superadmin/EditDuration",function(){return n(35515)}])},63543:function(e,r){"use strict";r.Z={getCompaniesFromSuperAdminPageEndpoint:"company/all/admin",singleCompany:function(e){return"company/".concat(e)},registerEndpoint:"auth/user/login",storageTokenKeyName:"access_Token",registerCompany:"company/register",getusers:"user/admin/all?type=1",singleUser:function(e){return"user/admin/".concat(e)},registerUser:"user/admin/register",getCustomers:"customer/admin/3/all",singleCustomer:function(e){return"customer/admin/".concat(e)},registerCustomer:"customer/admin/3/register",getMarketers:"customer/admin/2/all",singleMarketer:function(e){return"customer/admin/".concat(e)},registerMarketer:"customer/admin/2/register",getRepresentatives:"customer/admin/1/all",singleRepresentatives:function(e){return"customer/admin/".concat(e)},registerRepresentatives:"customer/admin/1/register",createOrder:"ordering/admin/register",getAdminOrders:"ordering/admin/all",singleHub:function(e){return"hub/".concat(e)},registerHub:"hub/register",getHubsFromAdmin:"hub/company/all",myHub:"hub/me",getDrivers:"user/admin/all?type=2",registerDriver:"user/admin/courier/register",pricingPerKilometer:"pricing/per_kilometer",pricinPerSizeOfCar:function(e){return"pricing/size_of_car/".concat(e)},pricingOtherOptions:"pricing/other_options",getPricingSizeOfCar:"pricing/size_of_car",singleOrder:function(e){return"ordering/admin/".concat(e)},getOrder:function(e){return"ordering/".concat(e)}}},35515:function(e,r,n){"use strict";n.r(r);var t=n(85893),o=n(67294),i=n(58826),a=n(83321),s=n(11496),u=n(50135),c=n(15861),l=n(79172),d=n(94054),p=n(56815),m=n(74231),f=n(95496),g=n(42283),v=n(42734),Z=n(57709),h=n(50657),x=n(37645),b=n(6514),y=n(31425),C=n(58951),w=n(47312),_=n(18360),j=n(22224),S=n(74931),k=n(61585),M=(0,s.ZP)(l.Z)((function(e){var r=e.theme;return{display:"flex",alignItems:"center",padding:r.spacing(3,4),justifyContent:"space-between",backgroundColor:r.palette.background.default}})),D=m.Ry().shape({duration_of_activity:m.Rx().required(" \u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a").min(1,"\u062d\u062f\u0627\u0642\u0644 1 \u0631\u0648\u0632").typeError("\u0628\u0627\u06cc\u062f \u0639\u062f\u062f \u0628\u0627\u0634\u062f"),active:m.O7().required("\u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a").typeError("\u0641\u06cc\u0644\u062f \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f"),name:m.Z_()});r.default=function(e){var r=e.open,n=e.toggle,s=e.setChange,m=e.company,T=e.edit,P=(0,o.useState)(!1),R=P[0],N=P[1],B={duration_of_activity:m.duration_of_activity,name:m.name,active:m.active},O=(0,g.cI)({defaultValues:B,mode:"onChange",resolver:(0,f.X)(D)}),A=O.reset,E=O.control,I=O.handleSubmit,z=O.setError,F=O.formState.errors,W=function(){n(),A(B)};return(0,t.jsxs)(i.ZP,{open:r,anchor:"left",variant:"temporary",onClose:W,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,t.jsxs)(M,{children:[(0,t.jsxs)(c.Z,{variant:"h6",children:[" ",T?"\u062a\u063a\u06cc\u06cc\u0631 \u0627\u0634\u062a\u0631\u0627\u06a9":"\u0648\u06cc\u0631\u0627\u06cc\u0634 \u06a9\u0648\u0631\u06cc\u0631"]}),(0,t.jsx)(v.Z,{fontSize:"small",onClick:W,sx:{cursor:"pointer"}})]}),(0,t.jsx)(l.Z,{sx:{p:5,"& .MuiInputBase-input.Mui-disabled":{WebkitTextFillColor:"rgba(76,78,100,0.87)"},"& \t.MuiInputLabel-root.Mui-disabled":{WebkitTextFillColor:"rgba(76,78,100,0.87)"}},children:(0,t.jsxs)("form",{onSubmit:I((function(e){S.ZP.promise((0,k.editCompany)(m.id,e).then((function(){W(),s(!0)})).catch((function(e){z("name",{type:"custom",message:e.response.data.message})})),{loading:"\u062f\u0631 \u062d\u0627\u0644 \u0648\u06cc\u0631\u0627\u06cc\u0634 \u0634\u0631\u06a9\u062a",success:"\u0634\u0631\u06a9\u062a \u0648\u06cc\u0631\u0627\u06cc\u0634 \u0634\u062f",error:function(e){var r,n,t,o;return(null===(r=e.response)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.message)?null===(t=e.response)||void 0===t||null===(o=t.data)||void 0===o?void 0:o.message:"\u062e\u0637\u0627\u06cc\u06cc \u0631\u062e \u062f\u0627\u062f\u0647 \u0627\u0633\u062a."}})})),children:[(0,t.jsx)(d.Z,{fullWidth:!0,sx:{mb:4},children:(0,t.jsx)(g.Qr,{name:"name",control:E,rules:{required:!0},render:function(e){var r=e.field,n=r.value,o=r.onChange,i=r.onBlur;return(0,t.jsx)(u.Z,{label:"\u0646\u0627\u0645 \u0634\u0631\u06a9\u062a",value:n,onBlur:i,onChange:o,disabled:T||!1})}})}),(0,t.jsxs)(d.Z,{fullWidth:!0,sx:{mb:4},children:[(0,t.jsx)(g.Qr,{name:"duration_of_activity",control:E,type:"number",rules:{required:!0},render:function(e){var r=e.field,n=r.value,o=r.onChange,i=r.onBlur;return(0,t.jsx)(u.Z,{label:"\u0627\u0639\u062a\u0628\u0627\u0631 \u0627\u06a9\u0627\u0646\u062a (\u0631\u0648\u0632)",value:n,onBlur:i,onChange:o,error:Boolean(F.duration_of_activity)})}}),F.duration_of_activity&&(0,t.jsx)(p.Z,{sx:{color:"error.main"},children:F.duration_of_activity.message})]}),(0,t.jsxs)(d.Z,{fullWidth:!0,sx:{mb:4},children:[(0,t.jsx)(g.Qr,{name:"active",control:E,render:function(e){var r=e.field,n=r.onChange,o=r.onBlur;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(w.Z,{id:"demo-multiple-name-label",children:"\u0648\u0636\u0639\u06cc\u062a"}),(0,t.jsxs)(_.Z,{onBlur:o,labelId:"demo-multiple-name-label",id:"demo-multiple-name",onChange:n,defaultValue:m.active,error:Boolean(F.active),input:(0,t.jsx)(Z.Z,{label:"Name"}),children:[(0,t.jsx)(j.Z,{value:!0,children:"\u0641\u0639\u0627\u0644"}),(0,t.jsx)(j.Z,{value:!1,children:"\u063a\u06cc\u0631\u0641\u0639\u0627\u0644"})]})]})}}),F.active&&(0,t.jsx)(p.Z,{sx:{color:"error.main"},children:F.active.message})]}),(0,t.jsx)(a.Z,{size:"large",type:"submit",variant:"contained",sx:{mr:3},fullWidth:!0,children:"\u0630\u062e\u06cc\u0631\u0647"})]})}),(0,t.jsxs)(h.Z,{open:R,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,t.jsx)(x.Z,{id:"alert-dialog-title",children:"\u0648\u06cc\u0631\u0627\u06cc\u0634 \u0634\u0631\u06a9\u062a"}),(0,t.jsx)(b.Z,{children:(0,t.jsxs)(C.Z,{id:"alert-dialog-description",children:["\u0634\u0631\u06a9\u062a ",m.name," \u0648\u06cc\u0631\u0627\u06cc\u0634 \u0634\u062f."]})}),(0,t.jsx)(y.Z,{children:(0,t.jsx)(a.Z,{onClick:function(){N(!1),s(!0),n(),A({duration_of_activity:0,name:"",active:!1})},children:"\u0645\u062a\u0648\u062c\u0647 \u0634\u062f\u0645"})})]})]})}},61585:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return f},deleteCompany:function(){return d},editCompany:function(){return m},fetchData:function(){return l},registerCompany:function(){return p}});var t=n(34051),o=n.n(t),i=n(85893),a=n(5370),s=n(63543);function u(e,r,n,t,o,i,a){try{var s=e[i](a),u=s.value}catch(c){return void n(c)}s.done?r(u):Promise.resolve(u).then(t,o)}function c(e){return function(){var r=this,n=arguments;return new Promise((function(t,o){var i=e.apply(r,n);function a(e){u(i,t,o,a,s,"next",e)}function s(e){u(i,t,o,a,s,"throw",e)}a(void 0)}))}}var l=function(){var e=c(o().mark((function e(r){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get(s.Z.getCompaniesFromSuperAdminPageEndpoint,r,{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=c(o().mark((function e(r){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.delete(s.Z.singleCompany(r),{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=c(o().mark((function e(r){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.post(s.Z.registerCompany,r,{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),m=function(){var e=c(o().mark((function e(r,n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.put(s.Z.singleCompany(r),n,{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}();function f(){return(0,i.jsx)("div",{})}}},function(e){e.O(0,[3978,9774,2888,179],(function(){return r=10606,e(e.s=r);var r}));var r=e.O();_N_E=r}]);