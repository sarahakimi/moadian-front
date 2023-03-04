"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2053],{63543:function(e,r){r.Z={getCompaniesFromSuperAdminPageEndpoint:"company/all/admin",singleCompany:function(e){return"company/".concat(e)},registerEndpoint:"auth/user/login",storageTokenKeyName:"access_Token",registerCompany:"company/register",getusers:"user/admin/all?type=1",singleUser:function(e){return"user/admin/".concat(e)},registerUser:"user/admin/register",getCustomers:"customer/admin/3/all",singleCustomer:function(e){return"customer/admin/".concat(e)},registerCustomer:"customer/admin/3/register",getMarketers:"customer/admin/2/all",singleMarketer:function(e){return"customer/admin/".concat(e)},registerMarketer:"customer/admin/2/register",getRepresentatives:"customer/admin/1/all",singleRepresentatives:function(e){return"customer/admin/".concat(e)},registerRepresentatives:"customer/admin/1/register",createOrder:"ordering/admin/register",getAdminOrders:"ordering/admin/all",singleHub:function(e){return"hub/".concat(e)},registerHub:"hub/register",getHubsFromAdmin:"hub/company/all",myHub:"hub/me",getDrivers:"user/admin/all?type=2",registerDriver:"user/admin/courier/register",pricingPerKilometer:"pricing/per_kilometer",pricinPerSizeOfCar:function(e){return"pricing/size_of_car/".concat(e)},pricingOtherOptions:"pricing/other_options",getPricingSizeOfCar:"pricing/size_of_car"}},2053:function(e,r,n){n.r(r);var t=n(85893),o=n(67294),a=n(58826),i=n(83321),s=n(11496),u=n(50135),l=n(15861),c=n(79172),d=n(94054),m=n(56815),p=n(74231),h=n(2638),g=n(42283),f=n(42734),v=n(50657),x=n(37645),Z=n(6514),b=n(31425),j=n(58951),w=n(47312),C=n(57709),_=n(87109),k=n(93946),y=n(95898),B=n(42218),S=n(74931),P=n(94473),q=(0,s.ZP)(c.Z)((function(e){var r=e.theme;return{display:"flex",alignItems:"center",padding:r.spacing(3,4),justifyContent:"space-between",backgroundColor:r.palette.background.default}})),F=p.Ry().shape({natural_code:p.Z_().required("\u06a9\u062f\u0645\u0644\u06cc  \u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a").matches(/d*/,"\u06a9\u062f\u0645\u0644\u06cc \u0628\u0627\u06cc\u062f \u0639\u062f\u062f \u0628\u0627\u0634\u062f").test("len","\u06a9\u062f\u0645\u0644\u06cc \u0628\u0627\u06cc\u062f 10 \u0631\u0642\u0645 \u0628\u0627\u0634\u062f",(function(e){return 10===e.toString().length})),name:p.Z_().required("\u0646\u0627\u0645 \u0648 \u0646\u0627\u0645 \u062e\u0627\u0646\u0648\u0627\u062f\u06af\u06cc \u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a").min(5,"\u0641\u06cc\u0644\u062f \u0631\u0627 \u0628\u0647 \u062f\u0631\u0633\u062a\u06cc \u067e\u0631 \u06a9\u0646\u06cc\u062f"),phone:p.Z_().required("\u0645\u0648\u0628\u0627\u06cc\u0644 \u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a").matches(/09d*/," \u0645\u0648\u0628\u0627\u06cc\u0644 \u0628\u0627\u06cc\u062f \u0639\u062f\u062f \u0628\u0627\u0634\u062f \u0648 \u0628\u0627 09 \u0634\u0631\u0648\u0639 \u0634\u0648\u062f").test("len","\u0645\u0648\u0628\u0627\u06cc\u0644 \u0628\u0627\u06cc\u062f 11 \u0631\u0642\u0645 \u0628\u0627\u0634\u062f",(function(e){return 11===e.toString().length})),username:p.Z_().required("\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc \u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a").min(4,"\u062d\u062f\u0627\u0642\u0644 \u0628\u0627\u06cc\u062f \u0639 \u06a9\u0627\u0631\u0627\u06a9\u062a\u0631 \u0628\u0627\u0634\u062f"),password:p.Z_().required("\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a").min(4,"\u062d\u062f\u0627\u0642\u0644 \u0628\u0627\u06cc\u062f \u0639 \u06a9\u0627\u0631\u0627\u06a9\u062a\u0631 \u0628\u0627\u0634\u062f"),vehicle:p.Z_().required(" \u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a").min(3,"\u0628\u0647 \u062f\u0631\u0633\u062a\u06cc \u0648\u0627\u0631\u062f \u0646\u0645\u0627\u06cc\u06cc\u062f")});r.default=function(e){var r=e.open,n=e.toggle,s=e.setChange,p=e.user,M=e.edit,z=e.showUser,U=(0,o.useState)(!1),I=U[0],W=U[1],A=(0,o.useState)(!1),D=A[0],T=A[1],O=p?{natural_code:p.natural_code,name:p.name,phone:p.phone,username:p.username,password:"*****",vehicle:p.vehicle}:{natural_code:"",name:"",phone:"",username:"",password:"",vehicle:""},Q=(0,g.cI)({defaultValues:O,mode:"onChange",resolver:(0,h.X)(F)}),E=Q.reset,H=Q.control,R=Q.handleSubmit,L=Q.formState.errors,N=function(){n(),E(O)};return(0,t.jsxs)(a.ZP,{open:r,anchor:"left",variant:"temporary",onClose:N,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,t.jsxs)(q,{children:[(0,t.jsx)(l.Z,{variant:"h6",children:"\u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0631\u0627\u0646\u0646\u062f\u0647"}),(0,t.jsx)(f.Z,{fontSize:"small",onClick:N,sx:{cursor:"pointer"}})]}),(0,t.jsx)(c.Z,{sx:{p:5,"& .MuiInputBase-input.Mui-disabled":{WebkitTextFillColor:"rgba(76,78,100,0.87)"},"& \t.MuiInputLabel-root.Mui-disabled":{WebkitTextFillColor:"rgba(76,78,100,0.87)"}},children:(0,t.jsxs)("form",{onSubmit:R((function(e){M?(delete e.password,S.ZP.promise((0,P.editUser)(p.id,e).then((function(){s(!0),N()})),{loading:"\u062f\u0631 \u062d\u0627\u0644 \u0648\u06cc\u0631\u0627\u06cc\u0634 \u0631\u0627\u0646\u0646\u062f\u0647",success:"\u0631\u0627\u0646\u0646\u062f\u0647 \u0648\u06cc\u0631\u0627\u06cc\u0634 \u0634\u062f",error:function(e){var r,n,t,o;return(null===(r=e.response)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.message)?null===(t=e.response)||void 0===t||null===(o=t.data)||void 0===o?void 0:o.message:"\u062e\u0637\u0627\u06cc\u06cc \u0631\u062e \u062f\u0627\u062f\u0647 \u0627\u0633\u062a."}})):S.ZP.promise((0,P.registerUser)(e).then((function(){s(!0),N()})),{loading:"\u062f\u0631 \u062d\u0627\u0644 \u0627\u06cc\u062c\u0627\u062f \u0631\u0627\u0646\u0646\u062f\u0647",success:"\u0631\u0627\u0646\u0646\u062f\u0647 \u0627\u06cc\u062c\u0627\u062f \u0634\u062f",error:function(e){var r,n,t,o;return(null===(r=e.response)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.message)?null===(t=e.response)||void 0===t||null===(o=t.data)||void 0===o?void 0:o.message:"\u062e\u0637\u0627\u06cc\u06cc \u0631\u062e \u062f\u0627\u062f\u0647 \u0627\u0633\u062a."}})})),children:[(0,t.jsxs)(d.Z,{fullWidth:!0,sx:{mb:4},children:[(0,t.jsx)(g.Qr,{fullWidth:!0,name:"natural_code",control:H,rules:{required:!0},render:function(e){var r=e.field,n=r.value,o=r.onChange,a=r.onBlur;return(0,t.jsx)(u.Z,{autoFocus:!0,label:"\u06a9\u062f\u0645\u0644\u06cc",value:n,onBlur:a,onChange:o,error:Boolean(L.natural_code),inputProps:{maxLength:10},dir:"ltr",disabled:z})}}),L.natural_code&&(0,t.jsx)(m.Z,{sx:{color:"error.main"},children:L.natural_code.message})]}),(0,t.jsxs)(d.Z,{fullWidth:!0,sx:{mb:4},children:[(0,t.jsx)(g.Qr,{name:"name",control:H,rules:{required:!0},render:function(e){var r=e.field,n=r.value,o=r.onChange,a=r.onBlur;return(0,t.jsx)(u.Z,{autoFocus:!0,label:"\u0646\u0627\u0645 \u0648 \u0646\u0627\u0645 \u062e\u0627\u0646\u0648\u0627\u062f\u06af\u06cc",value:n,onBlur:a,onChange:o,error:Boolean(L.name),disabled:z})}}),L.name&&(0,t.jsx)(m.Z,{sx:{color:"error.main"},children:L.name.message})]}),(0,t.jsxs)(d.Z,{fullWidth:!0,sx:{mb:4},children:[(0,t.jsx)(g.Qr,{name:"phone",control:H,rules:{required:!0},render:function(e){var r=e.field,n=r.value,o=r.onChange,a=r.onBlur;return(0,t.jsx)(u.Z,{autoFocus:!0,label:"\u0645\u0648\u0628\u0627\u06cc\u0644",value:n,onBlur:a,onChange:o,error:Boolean(L.phone),inputProps:{maxLength:11},placeholder:"09*********",dir:"ltr",disabled:z})}}),L.phone&&(0,t.jsx)(m.Z,{sx:{color:"error.main"},children:L.phone.message})]}),(0,t.jsxs)(d.Z,{fullWidth:!0,sx:{mb:4},children:[(0,t.jsx)(g.Qr,{name:"vehicle",control:H,rules:{required:!0},render:function(e){var r=e.field,n=r.value,o=r.onChange,a=r.onBlur;return(0,t.jsx)(u.Z,{autoFocus:!0,label:"\u0648\u0633\u06cc\u0644\u0647 \u0646\u0642\u0644\u06cc\u0647",value:n,onBlur:a,onChange:o,error:Boolean(L.vehicle),disabled:z})}}),L.vehicle&&(0,t.jsx)(m.Z,{sx:{color:"error.main"},children:L.vehicle.message})]}),(0,t.jsxs)(d.Z,{fullWidth:!0,sx:{mb:4},children:[(0,t.jsx)(g.Qr,{name:"username",control:H,rules:{required:!0},render:function(e){var r=e.field,n=r.value,o=r.onChange,a=r.onBlur;return(0,t.jsx)(u.Z,{autoFocus:!0,label:"\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc",value:n,onBlur:a,onChange:o,error:Boolean(L.username),disabled:z})}}),L.username&&(0,t.jsx)(m.Z,{sx:{color:"error.main"},children:L.username.message})]}),!M&&(0,t.jsxs)(d.Z,{fullWidth:!0,sx:{mb:4},children:[(0,t.jsx)(w.Z,{htmlFor:"auth-login-v2-password",error:Boolean(L.password),children:"\u06a9\u0644\u0645\u0647 \u0639\u0628\u0648\u0631"}),(0,t.jsx)(g.Qr,{name:"password",control:H,rules:{required:!0},render:function(e){var r=e.field,n=r.value,o=r.onChange,a=r.onBlur;return(0,t.jsx)(C.Z,{disabled:z,value:n,onBlur:a,label:"Password",onChange:o,id:"auth-login-v2-password",error:Boolean(L.password),type:D?"text":"password",endAdornment:(0,t.jsx)(_.Z,{position:"end",children:(0,t.jsx)(k.Z,{edge:"end",onMouseDown:function(e){return e.preventDefault()},onClick:function(){return!z&&T(!D)},children:D?(0,t.jsx)(y.Z,{}):(0,t.jsx)(B.Z,{})})})})}})]}),(0,t.jsx)(c.Z,{sx:{display:"flex",alignItems:"center"},children:!z&&(0,t.jsx)(i.Z,{size:"large",type:"submit",variant:"contained",sx:{mr:3},children:"\u0630\u062e\u06cc\u0631\u0647"})})]})}),(0,t.jsxs)(v.Z,{open:I,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,t.jsx)(x.Z,{id:"alert-dialog-title",children:"\u0627\u06cc\u062c\u0627\u062f \u0631\u0627\u0646\u0646\u062f\u0647"}),(0,t.jsx)(Z.Z,{children:(0,t.jsx)(j.Z,{id:"alert-dialog-description",children:"\u0631\u0627\u0646\u0646\u062f\u0647 \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u0627\u06cc\u062c\u0627\u062f \u0634\u062f"})}),(0,t.jsx)(b.Z,{children:(0,t.jsx)(i.Z,{onClick:function(){W(!1),s(!0)},autoFocus:!0,children:"\u0645\u062a\u0648\u062c\u0647 \u0634\u062f\u0645"})})]})]})}},94473:function(e,r,n){n.r(r),n.d(r,{default:function(){return h},deleteUser:function(){return d},editUser:function(){return p},fetchData:function(){return c},registerUser:function(){return m}});var t=n(34051),o=n.n(t),a=n(85893),i=n(5370),s=n(63543);function u(e,r,n,t,o,a,i){try{var s=e[a](i),u=s.value}catch(l){return void n(l)}s.done?r(u):Promise.resolve(u).then(t,o)}function l(e){return function(){var r=this,n=arguments;return new Promise((function(t,o){var a=e.apply(r,n);function i(e){u(a,t,o,i,s,"next",e)}function s(e){u(a,t,o,i,s,"throw",e)}i(void 0)}))}}var c=function(){var e=l(o().mark((function e(r){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get(s.Z.getDrivers,r,{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=l(o().mark((function e(r){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.delete(s.Z.singleUser(r),{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),m=function(){var e=l(o().mark((function e(r){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.post(s.Z.registerDriver,r,{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=l(o().mark((function e(r,n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.put(s.Z.singleUser(r),n,{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}();function h(){return(0,a.jsx)("div",{})}}}]);