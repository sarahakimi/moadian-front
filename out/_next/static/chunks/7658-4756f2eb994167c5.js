"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7658],{17658:function(e,r,n){n.r(r);var t=n(34051),a=n.n(t),o=n(85893),l=n(67294),i=n(79172),s=n(86886),u=n(50135),d=n(44267),c=n(42283),m=n(94054),h=n(56815),f=n(47312),p=n(57709),x=n(18360),v=n(22224),b=n(95496),g=n(74231),Z=n(74931),j=n(17288),y=n(5370),_=n(7071);function B(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function P(e,r,n,t,a,o,l){try{var i=e[o](l),s=i.value}catch(u){return void n(u)}i.done?r(s):Promise.resolve(s).then(t,a)}function w(e){return function(){var r=this,n=arguments;return new Promise((function(t,a){var o=e.apply(r,n);function l(e){P(o,t,a,l,i,"next",e)}function i(e){P(o,t,a,l,i,"throw",e)}l(void 0)}))}}function k(e){return function(e){if(Array.isArray(e))return B(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"===typeof e)return B(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return B(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var C=g.Ry().shape({natural_code:g.Z_().required("\u06a9\u062f\u0645\u0644\u06cc  \u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a").matches(/d*/,"\u06a9\u062f\u0645\u0644\u06cc \u0628\u0627\u06cc\u062f \u0639\u062f\u062f \u0628\u0627\u0634\u062f").test("len","\u06a9\u062f\u0645\u0644\u06cc \u0628\u0627\u06cc\u062f 10 \u0631\u0642\u0645 \u0628\u0627\u0634\u062f",(function(e){return 10===e.toString().length})),name:g.Z_().required("\u0646\u0627\u0645 \u0648 \u0646\u0627\u0645 \u062e\u0627\u0646\u0648\u0627\u062f\u06af\u06cc \u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a").min(5,"\u0641\u06cc\u0644\u062f \u0631\u0627 \u0628\u0647 \u062f\u0631\u0633\u062a\u06cc \u067e\u0631 \u06a9\u0646\u06cc\u062f"),phone:g.Z_().required("\u0645\u0648\u0628\u0627\u06cc\u0644 \u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a").matches(/d*/," \u0645\u0648\u0628\u0627\u06cc\u0644 \u0628\u0627\u06cc\u062f \u0639\u062f\u062f \u0628\u0627\u0634\u062f \u0648 \u0628\u0627 09 \u0634\u0631\u0648\u0639 \u0634\u0648\u062f").test("len","\u0645\u0648\u0628\u0627\u06cc\u0644 \u0628\u0627\u06cc\u062f 11 \u0631\u0642\u0645 \u0628\u0627\u0634\u062f",(function(e){return 11===e.toString().length})),hub_id:g.Rx().required("\u0647\u0627\u0628 \u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a"),username:g.Z_().required("\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc \u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a").min(4,"\u062d\u062f\u0627\u0642\u0644 \u0628\u0627\u06cc\u062f \u0639 \u06a9\u0627\u0631\u0627\u06a9\u062a\u0631 \u0628\u0627\u0634\u062f"),password:g.Z_().required("\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a").min(4,"\u062d\u062f\u0627\u0642\u0644 \u0628\u0627\u06cc\u062f \u0639 \u06a9\u0627\u0631\u0627\u06a9\u062a\u0631 \u0628\u0627\u0634\u062f"),roles:g.IX().required(" \u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a").min(1,"\u062d\u062f\u0627\u0642\u0644 1 \u062f\u0633\u062a\u0631\u0633\u06cc \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f")});r.default=function(){var e=(0,j.a)().user,r=(0,l.useState)([]),n=r[0],t=r[1],g=(0,l.useState)([]),B=g[0],P=g[1],I=(0,l.useState)(e),S=I[0],q=I[1],A=(0,c.cI)({defaultValues:(0,l.useMemo)((function(){return S}),[q]),mode:"onChange",resolver:(0,b.X)(C)}),W=A.control,L=A.reset,M=A.formState.errors;return(0,l.useEffect)((function(){var e=Z.ZP.loading("\u062f\u0631 \u062d\u0627\u0644 \u062f\u0631\u06cc\u0627\u0641\u062a \u0627\u0637\u0644\u0627\u0639\u0627\u062a");y.Z.get("user/me",{},{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))}).then(function(){var e=w(a().mark((function e(r){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===!r.data&&L(r.data);case 1:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()).catch((function(e){var r,n,t,a,o=(null===e||void 0===e||null===(r=e.response)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.message)?null===e||void 0===e||null===(t=e.response)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.message:"\u062e\u0637\u0627\u06cc\u06cc \u0631\u062e \u062f\u0627\u062f\u0647 \u0627\u0633\u062a";Z.ZP.error(o)})),y.Z.get("hub/company/all",{},{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))}).then(function(){var r=w(a().mark((function r(n){return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:Z.ZP.dismiss(e),Z.ZP.success("\u0627\u0646\u062c\u0627\u0645 \u0634\u062f"),null!=n.data?t([{id:0,name:"\u0627\u062f\u0645\u06cc\u0646 \u0627\u0635\u0644\u06cc \u0634\u0631\u06a9\u062a (\u0628\u062f\u0648\u0646 \u0647\u0627\u0628)"}].concat(k(n.data))):t([]);case 3:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()).catch((function(e){var r,n,t,a,o=(null===e||void 0===e||null===(r=e.response)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.message)?null===e||void 0===e||null===(t=e.response)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.message:"\u062e\u0637\u0627\u06cc\u06cc \u0631\u062e \u062f\u0627\u062f\u0647 \u0627\u0633\u062a";Z.ZP.error(o)})),y.Z.get("user/roles",{},{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))}).then(function(){var e=w(a().mark((function e(r){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null!=r.data?P(r.data):P([]);case 1:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()).catch((function(){}))}),[q]),(0,o.jsx)(d.Z,{children:(0,o.jsx)("form",{children:(0,o.jsxs)(s.ZP,{container:!0,spacing:6,sx:{"& .MuiInputBase-input.Mui-disabled":{WebkitTextFillColor:"rgba(76,78,100,0.87)"},"& \t.MuiInputLabel-root.Mui-disabled":{WebkitTextFillColor:"rgba(76,78,100,0.87)"}},children:[(0,o.jsx)(s.ZP,{item:!0,xs:12,sm:6,children:(0,o.jsxs)(m.Z,{fullWidth:!0,sx:{mb:4},children:[(0,o.jsx)(c.Qr,{fullWidth:!0,name:"natural_code",control:W,rules:{required:!0},render:function(e){var r=e.field,n=r.value,t=r.onChange,a=r.onBlur;return(0,o.jsx)(u.Z,{label:"\u06a9\u062f\u0645\u0644\u06cc",value:n,onBlur:a,onChange:t,error:Boolean(M.natural_code),inputProps:{maxLength:10},dir:"ltr",disabled:!0,InputLabelProps:{shrink:!0}})}}),M.natural_code&&(0,o.jsx)(h.Z,{sx:{color:"error.main"},children:M.natural_code.message})]})}),(0,o.jsx)(s.ZP,{item:!0,xs:12,sm:6,children:(0,o.jsxs)(m.Z,{fullWidth:!0,sx:{mb:4},children:[(0,o.jsx)(c.Qr,{name:"name",control:W,rules:{required:!0},render:function(e){var r=e.field,n=r.value,t=r.onChange,a=r.onBlur;return(0,o.jsx)(u.Z,{label:"\u0646\u0627\u0645 \u0648 \u0646\u0627\u0645 \u062e\u0627\u0646\u0648\u0627\u062f\u06af\u06cc",value:n,onBlur:a,onChange:t,error:Boolean(M.name),disabled:!0,InputLabelProps:{shrink:!0}})}}),M.name&&(0,o.jsx)(h.Z,{sx:{color:"error.main"},children:M.name.message})]})}),(0,o.jsx)(s.ZP,{item:!0,xs:12,sm:6,children:(0,o.jsxs)(m.Z,{fullWidth:!0,sx:{mb:4},children:[(0,o.jsx)(c.Qr,{name:"phone",control:W,rules:{required:!0},render:function(e){var r=e.field,n=r.value,t=r.onChange,a=r.onBlur;return(0,o.jsx)(u.Z,{label:"\u0645\u0648\u0628\u0627\u06cc\u0644",value:n,onBlur:a,onChange:t,error:Boolean(M.phone),inputProps:{maxLength:11},placeholder:"09*********",dir:"ltr",disabled:!0,InputLabelProps:{shrink:!0}})}}),M.phone&&(0,o.jsx)(h.Z,{sx:{color:"error.main"},children:M.phone.message})]})}),(0,o.jsx)(s.ZP,{item:!0,xs:12,sm:6,children:(0,o.jsxs)(m.Z,{fullWidth:!0,sx:{mb:4},children:[(0,o.jsx)(c.Qr,{name:"username",control:W,rules:{required:!0},render:function(e){var r=e.field,n=r.value,t=r.onChange,a=r.onBlur;return(0,o.jsx)(u.Z,{label:"\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc",value:n,onBlur:a,onChange:t,error:Boolean(M.username),disabled:!0,InputLabelProps:{shrink:!0}})}}),M.username&&(0,o.jsx)(h.Z,{sx:{color:"error.main"},children:M.username.message})]})}),(0,o.jsx)(s.ZP,{item:!0,xs:12,sm:6,children:(0,o.jsxs)(m.Z,{fullWidth:!0,sx:{mb:4},children:[(0,o.jsx)(c.Qr,{name:"hub_id",control:W,rules:{required:!0},render:function(r){var t=r.field,a=t.onChange,l=t.onBlur;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(f.Z,{children:"\u0647\u0627\u0628"}),(0,o.jsx)(x.Z,{type:"number",onBlur:l,id:"demo-multiple-name",onChange:a,input:(0,o.jsx)(p.Z,{label:"Name"}),error:Boolean(M.hub_id),disabled:!0,InputLabelProps:{shrink:!0},defaultValue:e.hub_id,children:n.map((function(e){return(0,o.jsx)(v.Z,{value:e.id,children:e.name},e.id)}))})]})}}),M.hub_id&&(0,o.jsx)(h.Z,{sx:{color:"error.main"},children:M.hub_id.message})]})}),(0,o.jsx)(s.ZP,{item:!0,xs:12,sm:6,children:(0,o.jsxs)(m.Z,{fullWidth:!0,sx:{mb:4},children:[(0,o.jsx)(c.Qr,{name:"roles",control:W,rules:{required:!0},render:function(r){var n=r.field,t=n.onChange,a=n.onBlur;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(f.Z,{id:"demo-multiple-name-label",InputLabelProps:{shrink:!0},children:"\u062f\u0633\u062a\u0631\u0633\u06cc \u0647\u0627"}),(0,o.jsx)(x.Z,{disabled:!0,onBlur:a,labelId:"demo-multiple-name-label",id:"demo-multiple-name",multiple:!0,defaultValue:e?e.roles:[],onChange:t,error:Boolean(M.roles),input:(0,o.jsx)(p.Z,{label:"Name"}),renderValue:function(e){return(0,o.jsx)(i.Z,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:e.map((function(e){var r;return(0,o.jsx)(_.Z,{label:null===(r=B[e-1])||void 0===r?void 0:r.name},e)}))})},children:B.slice(1,B.length-1).map((function(e){return(0,o.jsx)(v.Z,{value:e.id,disabled:!0,children:e.name},e.id)}))})]})}}),M.roles&&(0,o.jsx)(h.Z,{sx:{color:"error.main"},children:M.roles.message})]})})]})})})}}}]);