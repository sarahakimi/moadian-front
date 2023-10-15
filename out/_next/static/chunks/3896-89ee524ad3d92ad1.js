"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3896],{83896:function(e,n,a){a.r(n);var t=a(85893),r=a(67294),i=a(86886),l=a(94054),o=a(42283),s=a(56815),c=a(33841),d=a(18360),u=a(57709),m=a(22224),p=a(69417),h=a(74931),x=a(9669),f=a.n(x),v=a(95496),j=a(74231),g=a(90948),b=a(3821);function Z(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}var _=j.Ry().shape({invoice_type:j.Rx().required("\u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a").typeError("\u0628\u0647 \u062f\u0631\u0633\u062a\u06cc \u0648\u0627\u0631\u062f \u0646\u0645\u0627\u06cc\u06cc\u062f"),invoice_subject:j.Rx().required("\u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a").typeError("\u0628\u0647 \u062f\u0631\u0633\u062a\u06cc \u0648\u0627\u0631\u062f \u0646\u0645\u0627\u06cc\u06cc\u062f"),riz:j.nK().required("\u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a"),sanad:j.nK().required("\u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a"),taraf_hesab_anbar:j.nK().required("\u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a")}),y=(0,g.ZP)(p.Z)((function(e){return Z({},e.theme.breakpoints.down("sm"),{width:"100%",textAlign:"center"})}));n.default=function(e){var n=e.setRows,a=e.handleNext,x=(0,r.useState)(""),j=x[0],g=x[1],C=(0,r.useState)(""),w=C[0],P=C[1],S=(0,r.useState)(""),O=S[0],A=S[1],k=(0,r.useState)(!1),q=k[0],z=k[1],B={riz:"",sanad:"",taraf_hesab_anbar:"",invoice_type:0,invoice_subject:0},F=(0,o.cI)({defaultValues:B,mode:"onChange",resolver:(0,v.X)(_)}),E=F.control,N=F.handleSubmit,Q=F.reset,I=F.formState.errors;return(0,t.jsxs)("div",{children:[(0,t.jsx)("form",{onSubmit:N((function(e){z(!0);var t=new FormData;t.append("riz",e.riz),t.append("sanad",e.sanad),t.append("taraf_hesab_anbar",e.taraf_hesab_anbar),t.append("invoice_subject",e.invoice_subject),t.append("invoice_type",e.invoice_type),h.ZP.promise(f().post("https://tax.api.havabaar.com/invoice/new",t,{headers:{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token")),"Content-Type":"multipart/form-data","Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":!0,"Access-Control-Allow-Methods":"*"}}).then((function(e){Q(B),g(null),A(null),P(null),n(e.data.flatMap((function(e,n){return function(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{},t=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),t.forEach((function(n){Z(e,n,a[n])}))}return e}({},e.body,e.header,{id:n})}))),z(!1),a()})),{loading:"\u062f\u0631 \u062d\u0627\u0644 \u062b\u0628\u062a",success:" \u062b\u0628\u062a \u0634\u062f",error:function(e){var n,a,t,r;return(null===(n=e.response)||void 0===n||null===(a=n.data)||void 0===a?void 0:a.message)?null===(t=e.response)||void 0===t||null===(r=t.data)||void 0===r?void 0:r.message:"\u062e\u0637\u0627\u06cc\u06cc \u0631\u062e \u062f\u0627\u062f\u0647 \u0627\u0633\u062a."}})})),children:(0,t.jsxs)(i.ZP,{container:!0,spacing:6,children:[(0,t.jsxs)(i.ZP,{item:!0,xs:12,xl:6,children:[(0,t.jsx)(l.Z,{sx:{mb:4},children:(0,t.jsx)(o.Qr,{name:"riz",control:E,defaultValue:"",render:function(e){var n=e.field;return(0,t.jsxs)(y,{component:"label",variant:"contained",htmlFor:"account-settings-upload-image",children:["\u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc \u0641\u0627\u06cc\u0644 \u0631\u06cc\u0632 \u062c\u0632\u0626\u06cc\u0627\u062a",(0,t.jsx)("input",{hidden:!0,type:"file",onChange:function(e){n.onChange(e.target.files[0]),g(e.target.files[0].name)},accept:".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",id:"account-settings-upload-image",name:"image"})]})}})}),j]})," ",(0,t.jsxs)(i.ZP,{item:!0,xs:12,xl:6,children:[(0,t.jsx)(l.Z,{sx:{mb:4},children:(0,t.jsx)(o.Qr,{name:"sanad",control:E,defaultValue:"",render:function(e){var n=e.field;return(0,t.jsxs)(y,{component:"label",variant:"contained",htmlFor:"account-settings-upload-image1",children:["\u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc \u0641\u0627\u06cc\u0644 \u0633\u0646\u062f",(0,t.jsx)("input",{hidden:!0,type:"file",onChange:function(e){n.onChange(e.target.files[0]),P(e.target.files[0].name)},accept:".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",id:"account-settings-upload-image1",name:"image"})]})}})}),w]})," ",(0,t.jsxs)(i.ZP,{item:!0,xs:12,children:[(0,t.jsx)(l.Z,{sx:{mb:4},children:(0,t.jsx)(o.Qr,{name:"taraf_hesab_anbar",control:E,defaultValue:"",render:function(e){var n=e.field;return(0,t.jsxs)(y,{component:"label",variant:"contained",htmlFor:"account-settings-upload-image2",children:["\u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc \u0641\u0627\u06cc\u0644 \u0637\u0631\u0641 \u062d\u0633\u0627\u0628 \u0627\u0646\u0628\u0627\u0631",(0,t.jsx)("input",{hidden:!0,type:"file",onChange:function(e){n.onChange(e.target.files[0]),A(e.target.files[0].name)},accept:".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",id:"account-settings-upload-image2",name:"image"})]})}})}),O]}),(0,t.jsx)(i.ZP,{item:!0,xs:12,lg:6,children:(0,t.jsxs)(l.Z,{fullWidth:!0,sx:{mb:4},children:[(0,t.jsx)(o.Qr,{name:"invoice_type",control:E,rules:{required:!0},render:function(e){var n=e.field,a=n.onChange,r=n.onBlur;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.Z,{id:"demo-multiple-name-label",children:"\u0646\u0648\u0639 \u0635\u0648\u0631\u062a \u062d\u0633\u0627\u0628"}),(0,t.jsxs)(d.Z,{onBlur:r,labelId:"demo-multiple-name-label",id:"demo-multiple-name",onChange:a,error:Boolean(I.invoice_type),input:(0,t.jsx)(u.Z,{label:"Name"}),children:[(0,t.jsx)(m.Z,{value:1,children:"\u0646\u0648\u0639 \u0627\u0648\u0644"}),(0,t.jsx)(m.Z,{value:2,children:"\u0646\u0648\u0639 \u062f\u0648\u0645"}),(0,t.jsx)(m.Z,{value:3,children:"\u0646\u0648\u0639 \u0633\u0648\u0645"})]})]})}}),I.invoice_type&&(0,t.jsx)(s.Z,{sx:{color:"error.main"},children:I.invoice_type.message})]})})," ",(0,t.jsx)(i.ZP,{item:!0,xs:12,lg:6,children:(0,t.jsxs)(l.Z,{fullWidth:!0,sx:{mb:4},children:[(0,t.jsx)(o.Qr,{name:"invoice_subject",control:E,rules:{required:!0},render:function(e){var n=e.field,a=n.onChange,r=n.onBlur;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.Z,{id:"demo-multiple-name-label",children:"\u0645\u0648\u0636\u0648\u0639 \u0635\u0648\u0631\u062a \u062d\u0633\u0627\u0628"}),(0,t.jsxs)(d.Z,{onBlur:r,labelId:"demo-multiple-name-label",id:"demo-multiple-name",onChange:a,error:Boolean(I.invoice_type),input:(0,t.jsx)(u.Z,{label:"Name"}),children:[(0,t.jsx)(m.Z,{value:1,children:"\u0627\u0635\u0644\u06cc"}),(0,t.jsx)(m.Z,{value:2,children:"\u0627\u0635\u0644\u0627\u062d\u06cc"}),(0,t.jsx)(m.Z,{value:3,children:"\u0627\u0628\u0637\u0627\u0644\u06cc"}),(0,t.jsx)(m.Z,{value:4,children:"\u0628\u0631\u06af\u0634\u062a \u0627\u0632 \u0641\u0631\u0648\u0634"})]})]})}}),I.invoice_subject&&(0,t.jsx)(s.Z,{sx:{color:"error.main"},children:I.invoice_subject.message})]})}),(0,t.jsx)(i.ZP,{item:!0,xs:12,lg:6,children:(0,t.jsx)(p.Z,{size:"large",type:"submit",variant:"contained",sx:{m:1},color:"success",children:"\u062b\u0628\u062a \u0635\u0648\u0631\u062a \u062d\u0633\u0627\u0628"})})]})}),(0,t.jsx)(b.Z,{open:q})]})}}}]);