(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3561],{92069:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/explainations/AddUserDrawer",function(){return n(56182)}])},56182:function(e,r,n){"use strict";n.r(r);var t=n(85893),o=n(58826),a=n(69417),i=n(90948),u=n(50135),s=n(15861),c=n(99226),l=n(94054),d=n(56815),f=n(74231),p=n(95496),h=n(42283),x=n(42734),v=n(74931),m=n(10122),g=(0,i.ZP)(c.Z)((function(e){var r=e.theme;return{display:"flex",alignItems:"center",padding:r.spacing(3,4),justifyContent:"space-between",backgroundColor:r.palette.background.default}})),w=f.Ry().shape({name:f.Z_().required(" \u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a"),code:f.Rx().required(" \u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a").typeError("\u0628\u0627\u06cc\u062f \u0639\u062f\u062f \u0628\u0627\u0634\u062f"),tax_code:f.Rx().required(" \u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a").min(1e12,"\u0628\u0627\u06cc\u062f \u06f1\u06f3 \u0631\u0642\u0645 \u0628\u0627\u0634\u062f").max(9999999999999,"\u0628\u0627\u06cc\u062f \u06f1\u06f3 \u0631\u0642\u0645 \u0628\u0627\u0634\u062f").typeError("\u0628\u0627\u06cc\u062f \u0639\u062f\u062f \u0628\u0627\u0634\u062f")});r.default=function(e){var r=e.open,n=e.toggle,i=e.setChange,f=e.user,b=e.edit,Z=e.showUser,_={mame:"",code:0,tax_code:0},j=f?{name:f.name,code:f.code,tax_code:f.tax_code}:_,k=(0,h.cI)({defaultValues:j,mode:"onChange",resolver:(0,p.X)(w)}),C=k.reset,B=k.control,y=k.handleSubmit,P=k.formState.errors,U=function(){n(),C(_)};return(0,t.jsxs)(o.ZP,{open:r,anchor:"left",variant:"temporary",onClose:U,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,t.jsxs)(g,{children:[(0,t.jsx)(s.Z,{variant:"h6",children:"\u0627\u0637\u0644\u0627\u0639\u0627\u062a \u06a9\u0627\u0644\u0627/\u062e\u062f\u0645\u062a"}),(0,t.jsx)(x.Z,{fontSize:"small",onClick:U,sx:{cursor:"pointer"}})]}),(0,t.jsx)(c.Z,{sx:{p:5,"& .MuiInputBase-input.Mui-disabled":{WebkitTextFillColor:"rgba(76,78,100,0.87)"},"& \t.MuiInputLabel-root.Mui-disabled":{WebkitTextFillColor:"rgba(76,78,100,0.87)"}},children:(0,t.jsxs)("form",{onSubmit:y((function(e){b?v.ZP.promise((0,m.editUser)(f.id,e).then((function(){i(!0),U()})),{loading:"\u062f\u0631 \u062d\u0627\u0644 \u0648\u06cc\u0631\u0627\u06cc\u0634 \u06a9\u0627\u0644\u0627/\u062e\u062f\u0645\u062a",success:"\u06a9\u0627\u0644\u0627/\u062e\u062f\u0645\u062a \u0648\u06cc\u0631\u0627\u06cc\u0634 \u0634\u062f",error:function(e){var r,n,t,o;return(null===e||void 0===e||null===(r=e.response)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.message)?null===(t=e.response)||void 0===t||null===(o=t.data)||void 0===o?void 0:o.message:"\u062e\u0637\u0627\u06cc\u06cc \u0631\u062e \u062f\u0627\u062f\u0647 \u0627\u0633\u062a."}}):v.ZP.promise((0,m.registerUser)(e).then((function(){i(!0),U()})),{loading:"\u062f\u0631 \u062d\u0627\u0644 \u0627\u06cc\u062c\u0627\u062f \u06a9\u0627\u0644\u0627/\u062e\u062f\u0645\u062a",success:"\u06a9\u0627\u0644\u0627/\u062e\u062f\u0645\u062a \u0627\u06cc\u062c\u0627\u062f \u0634\u062f",error:function(e){var r,n,t,o;return(null===(r=e.response)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.message)?null===(t=e.response)||void 0===t||null===(o=t.data)||void 0===o?void 0:o.message:"\u062e\u0637\u0627\u06cc\u06cc \u0631\u062e \u062f\u0627\u062f\u0647 \u0627\u0633\u062a."}})})),children:[(0,t.jsxs)(l.Z,{fullWidth:!0,sx:{mb:4},children:[(0,t.jsx)(h.Qr,{fullWidth:!0,name:"name",control:B,rules:{required:!0},render:function(e){var r=e.field,n=r.value,o=r.onChange,a=r.onBlur;return(0,t.jsx)(u.Z,{label:"\u0646\u0627\u0645",value:n,onBlur:a,onChange:o,error:Boolean(P.name),disabled:Z})}}),P.name&&(0,t.jsx)(d.Z,{sx:{color:"error.main"},children:P.name.message})]})," ",(0,t.jsxs)(l.Z,{fullWidth:!0,sx:{mb:4},children:[(0,t.jsx)(h.Qr,{fullWidth:!0,name:"code",control:B,rules:{required:!0},render:function(e){var r=e.field,n=r.value,o=r.onChange,a=r.onBlur;return(0,t.jsx)(u.Z,{label:"\u06a9\u062f \u06a9\u0627\u0644\u0627",value:n,onBlur:a,onChange:o,error:Boolean(P.code),dir:"ltr",disabled:Z})}}),P.code&&(0,t.jsx)(d.Z,{sx:{color:"error.main"},children:P.code.message})]})," ",(0,t.jsxs)(l.Z,{fullWidth:!0,sx:{mb:4},children:[(0,t.jsx)(h.Qr,{fullWidth:!0,name:"tax_code",control:B,rules:{required:!0},render:function(e){var r=e.field,n=r.value,o=r.onChange,a=r.onBlur;return(0,t.jsx)(u.Z,{label:"\u06a9\u062f \u06f1\u06f3 \u0631\u0642\u0645\u06cc \u06a9\u0627\u0644\u0627",value:n,onBlur:a,onChange:o,error:Boolean(P.tax_code),inputProps:{maxLength:13},dir:"ltr",disabled:Z})}}),P.tax_code&&(0,t.jsx)(d.Z,{sx:{color:"error.main"},children:P.tax_code.message})]}),!Z&&(0,t.jsx)(a.Z,{size:"large",type:"submit",variant:"contained",sx:{mr:3},fullWidth:!0,children:"\u0630\u062e\u06cc\u0631\u0647"})]})})]})}},10122:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return h},deleteUser:function(){return d},editUser:function(){return p},fetchData:function(){return l},registerUser:function(){return f}});var t=n(34051),o=n.n(t),a=n(85893),i=n(5370),u=n(63543);function s(e,r,n,t,o,a,i){try{var u=e[a](i),s=u.value}catch(c){return void n(c)}u.done?r(s):Promise.resolve(s).then(t,o)}function c(e){return function(){var r=this,n=arguments;return new Promise((function(t,o){var a=e.apply(r,n);function i(e){s(a,t,o,i,u,"next",e)}function u(e){s(a,t,o,i,u,"throw",e)}i(void 0)}))}}var l=function(){var e=c(o().mark((function e(r){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get(u.Z.getusers,r,{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=c(o().mark((function e(r){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.delete(u.Z.singleUser(r),{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=c(o().mark((function e(r){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.post(u.Z.registerUser,r,{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=c(o().mark((function e(r,n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.put(u.Z.singleUser(r),n,{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}();function h(){return(0,a.jsx)("div",{})}}},function(e){e.O(0,[3978,8826,9774,2888,179],(function(){return r=92069,e(e.s=r);var r}));var r=e.O();_N_E=r}]);