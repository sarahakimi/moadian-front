(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[738],{64250:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/newOrder",function(){return r(55744)}])},55744:function(e,n,r){"use strict";r.r(n);var i=r(85893),t=r(83321),o=r(74231),a=r(42283),l=r(95496),s=r(66242),c=r(78445),u=r(44267),d=r(86886),m=r(67294),x=r(74931),h=r(98903),p=r(11496),_=r(94054),f=r(50135),v=r(56815),j=r(47312),b=r(18360),g=r(57709),Z=r(22224),y=r(5370);function P(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var q=o.Ry().shape({unique_tax_number:o.Z_().required("\u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a").typeError("\u0628\u0647 \u062f\u0631\u0633\u062a\u06cc \u0648\u0627\u0631\u062f \u0646\u0645\u0627\u06cc\u06cc\u062f"),invoice_type:o.Rx().required("\u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a").typeError("\u0628\u0647 \u062f\u0631\u0633\u062a\u06cc \u0648\u0627\u0631\u062f \u0646\u0645\u0627\u06cc\u06cc\u062f"),invoice_subject:o.Rx().required("\u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a").typeError("\u0628\u0647 \u062f\u0631\u0633\u062a\u06cc \u0648\u0627\u0631\u062f \u0646\u0645\u0627\u06cc\u06cc\u062f"),unique_tax_number_of_the_reference_invoice:o.Z_().required("\u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a").typeError("\u0628\u0647 \u062f\u0631\u0633\u062a\u06cc \u0648\u0627\u0631\u062f \u0646\u0645\u0627\u06cc\u06cc\u062f")}),w=(0,p.ZP)(t.Z)((function(e){return P({},e.theme.breakpoints.down("sm"),{width:"100%",textAlign:"center"})}));function C(){var e={unique_tax_number:"",invoice_type:0,invoice_subject:0,unique_tax_number_of_the_reference_invoice:""},n=(0,a.cI)({defaultValues:e,mode:"onChange",resolver:(0,l.X)(q)}),r=n.control,o=n.handleSubmit,p=n.reset,C=n.formState.errors,B=(0,m.useState)(""),E=B[0],O=B[1],S=(0,m.useState)(""),k=S[0],N=S[1],F=(0,m.useState)(""),z=F[0],I=F[1],Q=function(e,n){var r=e.target.files[0];if(r){var i=x.ZP.loading("\u062f\u0631 \u062d\u0627\u0644 \u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc \u0641\u0627\u06cc\u0644"),t=new h.gq(r,{endpoint:"https://api.zaminbar.ir/files/",retryDelays:[0],metadata:{filename:r.name,filetype:r.type},onError:function(){x.ZP.dismiss(i),x.ZP.error("\u062e\u0637\u0627 \u062f\u0631 \u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc \u0641\u0627\u06cc\u0644")},onSuccess:function(){n(t.url),x.ZP.dismiss(i),x.ZP.success("\u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc \u0634\u062f")}});t.start()}};return(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(c.Z,{title:"\u0627\u0641\u0632\u0648\u062f\u0646 \u06af\u0632\u0627\u0631\u0634 \u062c\u062f\u06cc\u062f"}),(0,i.jsx)(u.Z,{children:(0,i.jsx)("form",{onSubmit:o((function(n){x.ZP.promise(y.Z.post("invoice",function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(n){P(e,n,r[n])}))}return e}({},n,{riz:E,sanad:k,taraf_hesab_anbar:z}),{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))}).then((function(){p(e),O(""),I(""),N("")})),{loading:"\u062f\u0631 \u062d\u0627\u0644 \u062b\u0628\u062a",success:" \u062b\u0628\u062a \u0634\u062f",error:function(e){var n,r,i,t;return(null===(n=e.response)||void 0===n||null===(r=n.data)||void 0===r?void 0:r.message)?null===(i=e.response)||void 0===i||null===(t=i.data)||void 0===t?void 0:t.message:"\u062e\u0637\u0627\u06cc\u06cc \u0631\u062e \u062f\u0627\u062f\u0647 \u0627\u0633\u062a."}})})),children:(0,i.jsxs)(d.ZP,{container:!0,spacing:6,children:[(0,i.jsxs)(d.ZP,{item:!0,xs:12,xl:6,children:[(0,i.jsxs)(w,{component:"label",variant:"contained",htmlFor:"account-settings-upload-image",children:["\u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc \u0641\u0627\u06cc\u0644 \u0631\u06cc\u0632 \u062c\u0632\u0626\u06cc\u0627\u062a",(0,i.jsx)("input",{hidden:!0,type:"file",onChange:function(e){return Q(e,O)},accept:".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",id:"account-settings-upload-image",name:"image"})]}),E]})," ",(0,i.jsxs)(d.ZP,{item:!0,xs:12,xl:6,children:[(0,i.jsxs)(w,{component:"label",variant:"contained",htmlFor:"account-settings-upload-image",children:["\u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc \u0641\u0627\u06cc\u0644 \u0631\u06cc\u0632 \u062c\u0632\u0626\u06cc\u0627\u062a",(0,i.jsx)("input",{hidden:!0,type:"file",onChange:function(e){return Q(e,N)},accept:".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",id:"account-settings-upload-image",name:"image"})]}),k]})," ",(0,i.jsxs)(d.ZP,{item:!0,xs:12,children:[(0,i.jsxs)(w,{component:"label",variant:"contained",htmlFor:"account-settings-upload-image",children:["\u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc \u0641\u0627\u06cc\u0644 \u0637\u0631\u0641 \u062d\u0633\u0627\u0628 \u0627\u0646\u0628\u0627\u0631",(0,i.jsx)("input",{hidden:!0,type:"file",onChange:function(e){return Q(e,I)},accept:".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",id:"account-settings-upload-image",name:"image"})]}),z]}),(0,i.jsx)(d.ZP,{item:!0,xs:12,lg:6,children:(0,i.jsxs)(_.Z,{fullWidth:!0,sx:{mb:4},children:[(0,i.jsx)(a.Qr,{name:"unique_tax_number",control:r,rules:{required:!0},render:function(e){var n=e.field,r=n.value,t=n.onChange,o=n.onBlur;return(0,i.jsx)(f.Z,{label:"\u0634\u0645\u0627\u0631\u0647 \u0645\u0646\u062d\u0635\u0631 \u0628\u0647 \u0641\u0631\u062f \u0645\u0627\u0644\u06cc\u0627\u062a\u06cc",value:r,onBlur:o,onChange:t,error:Boolean(C.unique_tax_number)})}}),C.unique_tax_number&&(0,i.jsx)(v.Z,{sx:{color:"error.main"},children:C.unique_tax_number.message})]})})," ",(0,i.jsx)(d.ZP,{item:!0,xs:12,lg:6,children:(0,i.jsxs)(_.Z,{fullWidth:!0,sx:{mb:4},children:[(0,i.jsx)(a.Qr,{name:"invoice_type",control:r,rules:{required:!0},render:function(e){var n=e.field,r=n.onChange,t=n.onBlur;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(j.Z,{id:"demo-multiple-name-label",children:"\u0646\u0648\u0639 \u0635\u0648\u0631\u062a \u062d\u0633\u0627\u0628"}),(0,i.jsxs)(b.Z,{onBlur:t,labelId:"demo-multiple-name-label",id:"demo-multiple-name",onChange:r,error:Boolean(C.invoice_type),input:(0,i.jsx)(g.Z,{label:"Name"}),children:[(0,i.jsx)(Z.Z,{value:1,children:"\u0646\u0648\u0639 \u0627\u0648\u0644"}),(0,i.jsx)(Z.Z,{value:2,children:"\u0646\u0648\u0639 \u062f\u0648\u0645"}),(0,i.jsx)(Z.Z,{value:3,children:"\u0646\u0648\u0639 \u0633\u0648\u0645"})]})]})}}),C.invoice_type&&(0,i.jsx)(v.Z,{sx:{color:"error.main"},children:C.invoice_type.message})]})})," ",(0,i.jsx)(d.ZP,{item:!0,xs:12,lg:6,children:(0,i.jsxs)(_.Z,{fullWidth:!0,sx:{mb:4},children:[(0,i.jsx)(a.Qr,{name:"invoice_subject",control:r,rules:{required:!0},render:function(e){var n=e.field,r=n.onChange,t=n.onBlur;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(j.Z,{id:"demo-multiple-name-label",children:"\u0645\u0648\u0636\u0648\u0639 \u0635\u0648\u0631\u062a \u062d\u0633\u0627\u0628"}),(0,i.jsxs)(b.Z,{onBlur:t,labelId:"demo-multiple-name-label",id:"demo-multiple-name",onChange:r,error:Boolean(C.invoice_type),input:(0,i.jsx)(g.Z,{label:"Name"}),children:[(0,i.jsx)(Z.Z,{value:1,children:"\u0627\u0635\u0644\u06cc"}),(0,i.jsx)(Z.Z,{value:2,children:"\u0627\u0635\u0644\u0627\u062d\u06cc"}),(0,i.jsx)(Z.Z,{value:3,children:"\u0627\u0628\u0637\u0627\u0644\u06cc"}),(0,i.jsx)(Z.Z,{value:4,children:"\u0628\u0631\u06af\u0634\u062a \u0627\u0632 \u0641\u0631\u0648\u0634"})]})]})}}),C.invoice_subject&&(0,i.jsx)(v.Z,{sx:{color:"error.main"},children:C.invoice_subject.message})]})})," ",(0,i.jsx)(d.ZP,{item:!0,xs:12,lg:6,children:(0,i.jsxs)(_.Z,{fullWidth:!0,sx:{mb:4},children:[(0,i.jsx)(a.Qr,{name:"unique_tax_number_of_the_reference_invoice",control:r,rules:{required:!0},render:function(e){var n=e.field,r=n.value,t=n.onChange,o=n.onBlur;return(0,i.jsx)(f.Z,{label:"\u0634\u0645\u0627\u0631\u0647 \u0645\u0646\u062d\u0635\u0631 \u0628\u0647 \u0641\u0631\u062f \u0645\u0627\u0644\u06cc\u0627\u062a\u06cc \u0635\u0648\u0631\u062a\u062d\u0633\u0627\u0628 \u0645\u0631\u062c\u0639",value:r,onBlur:o,onChange:t,error:Boolean(C.unique_tax_number_of_the_reference_invoice)})}}),C.unique_tax_number_of_the_reference_invoice&&(0,i.jsx)(v.Z,{sx:{color:"error.main"},children:C.unique_tax_number_of_the_reference_invoice.message})]})}),(0,i.jsx)(d.ZP,{item:!0,xs:12,lg:6,children:(0,i.jsx)(t.Z,{size:"large",type:"submit",variant:"contained",sx:{m:1},color:"success",children:"\u062b\u0628\u062a \u0635\u0648\u0631\u062a \u062d\u0633\u0627\u0628"})})]})})})]})}C.acl={action:"read",subject:"every-page"},n.default=C}},function(e){e.O(0,[978,174,774,888,179],(function(){return n=64250,e(e.s=n);var n}));var n=e.O();_N_E=n}]);