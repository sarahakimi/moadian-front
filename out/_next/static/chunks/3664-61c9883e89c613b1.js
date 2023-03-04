"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3664],{2638:function(e,r,n){n.d(r,{X:function(){return a}});var t=n(2482),i=n(42283),a=function(e,r,n){return void 0===r&&(r={abortEarly:!1}),void 0===n&&(n={}),function(a,o,s){try{return Promise.resolve(function(t,i){try{var s=(r.context,Promise.resolve(e["sync"===n.mode?"validateSync":"validate"](a,Object.assign({},r,{context:o}))).then((function(e){return{values:e,errors:{}}})))}catch(t){return i(t)}return s&&s.then?s.then(void 0,i):s}(0,(function(e){return{values:{},errors:(0,t.D)((r=e,n="all"===s.criteriaMode,r.inner.reduce((function(e,r){if(e[r.path]||(e[r.path]={message:r.message,type:r.type}),n){var t=e[r.path].types,a=t&&t[r.type];e[r.path]=(0,i.KN)(r.path,n,e,r.type,a?[].concat(a,r.message):r.message)}return e}),{})),s.fields)};var r,n})))}catch(u){return Promise.reject(u)}}}},63543:function(e,r){r.Z={getCompaniesFromSuperAdminPageEndpoint:"company/all/admin",singleCompany:function(e){return"company/".concat(e)},registerEndpoint:"auth/user/login",storageTokenKeyName:"access_Token",registerCompany:"company/register",getusers:"user/admin/all?type=1",singleUser:function(e){return"user/admin/".concat(e)},registerUser:"user/admin/register",getCustomers:"customer/admin/3/all",singleCustomer:function(e){return"customer/admin/".concat(e)},registerCustomer:"customer/admin/3/register",getMarketers:"customer/admin/2/all",singleMarketer:function(e){return"customer/admin/".concat(e)},registerMarketer:"customer/admin/2/register",getRepresentatives:"customer/admin/1/all",singleRepresentatives:function(e){return"customer/admin/".concat(e)},registerRepresentatives:"customer/admin/1/register",createOrder:"ordering/admin/register",getAdminOrders:"ordering/admin/all",singleHub:function(e){return"hub/".concat(e)},registerHub:"hub/register",getHubsFromAdmin:"hub/company/all",myHub:"hub/me",getDrivers:"user/admin/all?type=2",registerDriver:"user/admin/courier/register",pricingPerKilometer:"pricing/per_kilometer",pricinPerSizeOfCar:function(e){return"pricing/size_of_car/".concat(e)},pricingOtherOptions:"pricing/other_options",getPricingSizeOfCar:"pricing/size_of_car"}},3664:function(e,r,n){n.r(r);var t=n(34051),i=n.n(t),a=n(85893),o=n(67294),s=n(58826),u=n(83321),l=n(11496),c=n(50135),d=n(15861),m=n(79172),f=n(94054),p=n(56815),g=n(74231),h=n(2638),v=n(42283),x=n(42734),b=n(5306),y=n(50657),Z=n(37645),j=n(6514),w=n(31425),C=n(58951),P=n(57438),k=n(98903),B=n(74931),_=n(92024),S=n(68773);function O(e,r,n,t,i,a,o){try{var s=e[a](o),u=s.value}catch(l){return void n(l)}s.done?r(u):Promise.resolve(u).then(t,i)}function q(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function z(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){q(e,r,n[r])}))}return e}var I=(0,l.ZP)(m.Z)((function(e){var r=e.theme;return{display:"flex",alignItems:"center",padding:r.spacing(3,4),justifyContent:"space-between",backgroundColor:r.palette.background.default}})),M=g.Ry().shape({image:g.nK(),name:g.Z_().required("\u0646\u0627\u0645 \u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a"),fax:g.Z_().required("\u0641\u06af\u0633 \u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a").matches(/^[0-9]*$/," \u0628\u0627\u06cc\u062f \u0639\u062f\u062f \u0628\u0627\u0634\u062f"),provence:g.Z_().required("\u0627\u0633\u062a\u0627\u0646 \u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a"),city:g.Z_().required("\u0634\u0647\u0631 \u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a"),telephone:g.Z_().required("\u062a\u0644\u0641\u0646 \u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a").matches(/^[0-9]*$/," \u0628\u0627\u06cc\u062f \u0639\u062f\u062f \u0628\u0627\u0634\u062f")});r.default=function(e){var r=e.open,n=e.toggle,t=e.setChange,l=e.user,g=e.edit,q=e.showUser,F=(0,o.useState)(""),W=F[0],T=F[1],A=(0,o.useState)(!1),E=A[0],H=A[1],U=(0,o.useState)(g?l.image:""),D=U[0],Q=U[1],K={image:null,name:"",fax:"",telephone:"",provence:"",city:""},N=l||K,R=(0,v.cI)({defaultValues:N,mode:"onChange",resolver:(0,h.X)(M)}),L=R.reset,X=R.control,$=R.handleSubmit,V=R.setError,G=R.formState.errors,J=function(){n(),L(K)},Y=function(e){var r=e.target.files[0];if(r){var n=B.ZP.loading("\u062f\u0631 \u062d\u0627\u0644 \u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc \u0644\u0648\u06af\u0648"),t=new k.gq(r,{endpoint:"https://api.zaminbar.ir/files/",retryDelays:[0],metadata:{filename:r.name,filetype:r.type},onError:function(){V("hub_id",{type:"custom",message:"\u0645\u0634\u06a9\u0644 \u062f\u0631 \u0628\u0627\u0631\u06af\u0630\u0627\u06cc \u0639\u06a9\u0633. \u0645\u062c\u062f\u062f \u062a\u0644\u0627\u0634 \u06a9\u0646\u06cc\u062f"}),B.ZP.dismiss(n),B.ZP.error("\u062e\u0637\u0627 \u062f\u0631 \u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc \u0644\u0648\u06af\u0648")},onSuccess:function(){Q(t.url),B.ZP.dismiss(n),B.ZP.success("\u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc \u0634\u062f")}});t.start()}},ee=function(){var e,r=(e=i().mark((function e(r){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g?B.ZP.promise((0,S.editUser)(l.id,z({},r,{image:D})).then((function(){t(!0),J()})),{loading:"\u062f\u0631 \u062d\u0627\u0644 \u0648\u06cc\u0631\u0627\u06cc\u0634 \u0647\u0627\u0628",success:"\u0647\u0627\u0628 \u0648\u06cc\u0631\u0627\u06cc\u0634 \u0634\u062f",error:function(e){var r,n,t,i;return(null===(r=e.response)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.message)?null===(t=e.response)||void 0===t||null===(i=t.data)||void 0===i?void 0:i.message:"\u062e\u0637\u0627\u06cc\u06cc \u0631\u062e \u062f\u0627\u062f\u0647 \u0627\u0633\u062a."}}):B.ZP.promise((0,S.registerUser)(z({},r,{image:D})).then((function(){t(!0),J()})),{loading:"\u062f\u0631 \u062d\u0627\u0644 \u0627\u06cc\u062c\u0627\u062f \u0647\u0627\u0628",success:"\u0647\u0627\u0628 \u0627\u06cc\u062c\u0627\u062f \u0634\u062f",error:function(e){var r,n,t,i;return(null===(r=e.response)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.message)?null===(t=e.response)||void 0===t||null===(i=t.data)||void 0===i?void 0:i.message:"\u062e\u0637\u0627\u06cc\u06cc \u0631\u062e \u062f\u0627\u062f\u0647 \u0627\u0633\u062a."}});case 1:case"end":return e.stop()}}),e)})),function(){var r=this,n=arguments;return new Promise((function(t,i){var a=e.apply(r,n);function o(e){O(a,t,i,o,s,"next",e)}function s(e){O(a,t,i,o,s,"throw",e)}o(void 0)}))});return function(e){return r.apply(this,arguments)}}();return(0,a.jsxs)(s.ZP,{open:r,anchor:"left",variant:"temporary",onClose:J,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,a.jsxs)(I,{children:[(0,a.jsx)(d.Z,{variant:"h6",children:"\u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0647\u0627\u0628"}),(0,a.jsx)(x.Z,{fontSize:"small",onClick:J,sx:{cursor:"pointer"}})]}),(0,a.jsx)(m.Z,{sx:{p:5,"& .MuiInputBase-input.Mui-disabled":{WebkitTextFillColor:"rgba(76,78,100,0.87)"},"& \t.MuiInputLabel-root.Mui-disabled":{WebkitTextFillColor:"rgba(76,78,100,0.87)"}},children:(0,a.jsxs)("form",{onSubmit:$(ee),children:[(0,a.jsxs)(f.Z,{fullWidth:!0,sx:{mb:4},children:[(0,a.jsx)(v.Qr,{name:"imagee",control:X,rules:{required:!0},render:function(e){var r=e.field,n=r.value,t=r.onBlur;return(0,a.jsxs)(m.Z,{sx:{display:"flex",alignItems:"center",gap:2},children:[(0,a.jsx)(c.Z,{inputProps:{accept:"image/*"},disabled:q,style:{display:"none"},id:"raised-button-file",multiple:!0,type:"file",onChange:Y,value:n,onBlur:t,error:Boolean(G.name),sx:{display:"inline"}}),(0,a.jsx)(_.Z,{src:D,sx:{width:56,height:56}}),!q&&(0,a.jsx)("label",{htmlFor:"raised-button-file",children:(0,a.jsx)(u.Z,{variant:"text",component:"span",children:"\u0627\u0641\u0632\u0648\u062f\u0646 \u0644\u0648\u06af\u0648"})})]})}}),G.image&&(0,a.jsx)(p.Z,{sx:{color:"error.main"},children:G.image.message})]}),(0,a.jsxs)(f.Z,{fullWidth:!0,sx:{mb:4},children:[(0,a.jsx)(v.Qr,{name:"name",control:X,rules:{required:!0},render:function(e){var r=e.field,n=r.value,t=r.onChange,i=r.onBlur;return(0,a.jsx)(c.Z,{autoFocus:!0,label:"\u0646\u0627\u0645 \u0647\u0627\u0628",value:n,onBlur:i,onChange:t,error:Boolean(G.name),disabled:q})}}),G.name&&(0,a.jsx)(p.Z,{sx:{color:"error.main"},children:G.name.message})]}),(0,a.jsxs)(f.Z,{fullWidth:!0,sx:{mb:4},children:[(0,a.jsx)(v.Qr,{name:"telephone",control:X,rules:{required:!0},render:function(e){var r=e.field,n=r.value,t=r.onChange,i=r.onBlur;return(0,a.jsx)(c.Z,{autoFocus:!0,label:"\u062a\u0644\u0641\u0646",value:n,onBlur:i,onChange:t,error:Boolean(G.telephone),inputProps:{maxLength:11},placeholder:"021*******",dir:"ltr",disabled:q})}}),G.telephone&&(0,a.jsx)(p.Z,{sx:{color:"error.main"},children:G.telephone.message})]}),(0,a.jsxs)(f.Z,{fullWidth:!0,sx:{mb:4},children:[(0,a.jsx)(v.Qr,{name:"fax",control:X,rules:{required:!0},render:function(e){var r=e.field,n=r.value,t=r.onChange,i=r.onBlur;return(0,a.jsx)(c.Z,{autoFocus:!0,label:"\u0641\u06a9\u0633",value:n,onBlur:i,onChange:t,error:Boolean(G.fax),disabled:q,inputProps:{maxLength:12},dir:"ltr"})}}),G.fax&&(0,a.jsx)(p.Z,{sx:{color:"error.main"},children:G.fax.message})]}),(0,a.jsxs)(f.Z,{fullWidth:!0,sx:{mb:4},children:[(0,a.jsx)(v.Qr,{fullWidth:!0,name:"provence",control:X,rules:{required:!0},render:function(e){var r=e.field,n=r.onChange,t=r.value,i=r.onBlur;return(0,a.jsx)(b.Z,{onBlur:i,select:!0,options:P.ostan.map((function(e){return e.name})),onChange:function(e,r,t){return function(e,r,n){var t;r(n),T(null===(t=P.ostan.find((function(r){return r.name===e.target.innerText})))||void 0===t?void 0:t.id)}(e,n,r)},value:t,disabled:q,disableClearable:!0,renderInput:function(e){return(0,a.jsx)(c.Z,z({},e,{label:"\u0627\u0633\u062a\u0627\u0646",variant:"outlined",onChange:n,error:Boolean(G.provence),disabled:q}))}})}}),G.provence&&(0,a.jsx)(p.Z,{sx:{color:"error.main"},children:G.provence.message})]}),(0,a.jsxs)(f.Z,{fullWidth:!0,sx:{mb:4},children:[(0,a.jsx)(v.Qr,{name:"city",control:X,rules:{required:!0},render:function(e){var r=e.field,n=r.value,t=r.onChange,i=r.onBlur;return(0,a.jsx)(b.Z,{onBlur:i,select:!0,options:P.shahr.filter((function(e){return e.ostan===W})).map((function(e){return e.name})),onChange:function(e,r){return t(r)},value:n,disabled:q,disableClearable:!0,renderInput:function(e){return(0,a.jsx)(c.Z,z({},e,{label:"\u0634\u0647\u0631",variant:"outlined",onChange:t,error:Boolean(G.city),disabled:q}))}})}}),G.city&&(0,a.jsx)(p.Z,{sx:{color:"error.main"},children:G.city.message})]}),!q&&(0,a.jsx)(u.Z,{size:"large",type:"submit",variant:"contained",sx:{mr:3},fullWidth:!0,children:"\u0630\u062e\u06cc\u0631\u0647"})]})}),(0,a.jsxs)(y.Z,{open:E,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,a.jsx)(Z.Z,{id:"alert-dialog-title",children:"\u0627\u06cc\u062c\u0627\u062f \u0647\u0627\u0628"}),(0,a.jsx)(j.Z,{children:(0,a.jsx)(C.Z,{id:"alert-dialog-description",children:"\u0647\u0627\u0628 \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u0627\u06cc\u062c\u0627\u062f \u0634\u062f"})}),(0,a.jsx)(w.Z,{children:(0,a.jsx)(u.Z,{onClick:function(){H(!1),t(!0)},autoFocus:!0,children:"\u0645\u062a\u0648\u062c\u0647 \u0634\u062f\u0645"})})]})]})}},68773:function(e,r,n){n.r(r),n.d(r,{default:function(){return p},deleteUser:function(){return d},editUser:function(){return f},fetchData:function(){return c},registerUser:function(){return m}});var t=n(34051),i=n.n(t),a=n(85893),o=n(5370),s=n(63543);function u(e,r,n,t,i,a,o){try{var s=e[a](o),u=s.value}catch(l){return void n(l)}s.done?r(u):Promise.resolve(u).then(t,i)}function l(e){return function(){var r=this,n=arguments;return new Promise((function(t,i){var a=e.apply(r,n);function o(e){u(a,t,i,o,s,"next",e)}function s(e){u(a,t,i,o,s,"throw",e)}o(void 0)}))}}var c=function(){var e=l(i().mark((function e(r){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get(s.Z.getHubsFromAdmin,r,{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=l(i().mark((function e(r){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.delete(s.Z.singleHub(r),{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),m=function(){var e=l(i().mark((function e(r){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.post(s.Z.registerHub,r,{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=l(i().mark((function e(r,n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.put(s.Z.singleHub(r),n,{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}();function p(){return(0,a.jsx)("div",{})}}}]);