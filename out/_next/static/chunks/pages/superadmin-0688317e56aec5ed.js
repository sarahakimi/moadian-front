(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7200],{83296:function(e,n,t){"use strict";var r;n.Z=void 0;var a=(0,((r=t(65129))&&r.__esModule?r:{default:r}).default)("M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z","DeleteOutline");n.Z=a},46160:function(e,n,t){"use strict";var r;n.Z=void 0;var a=(0,((r=t(65129))&&r.__esModule?r:{default:r}).default)("M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z","DotsVertical");n.Z=a},80030:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/superadmin",function(){return t(98804)}])},36376:function(e,n,t){"use strict";t.r(n);var r=t(85893),a=(t(67294),t(45697)),i=t.n(a),o=t(84808),l=t(98456);function s(e){var n=e.open;return(0,r.jsx)(o.Z,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+1}},open:n,children:(0,r.jsx)(l.Z,{color:"inherit"})})}s.propTypes={open:i().bool.isRequired},n.default=s},35515:function(e,n,t){"use strict";t.r(n);var r=t(85893),a=t(67294),i=t(58826),o=t(11057),l=t(11496),s=t(50135),c=t(15861),u=t(79172),d=t(94054),f=t(56815),m=t(74231),x=t(2638),p=t(42283),h=t(42734),v=t(57709),g=t(64666),b=t(33090),j=t(6514),y=t(31425),Z=t(58951),_=t(47312),w=t(18360),C=t(18972),S=t(5370),k=(0,l.ZP)(u.Z)((function(e){var n=e.theme;return{display:"flex",alignItems:"center",padding:n.spacing(3,4),justifyContent:"space-between",backgroundColor:n.palette.background.default}})),M=m.Ry().shape({duration_of_activity:m.Rx().required(" \u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a").min(1,"\u062d\u062f\u0627\u0642\u0644 1 \u0631\u0648\u0632").typeError("\u0628\u0627\u06cc\u062f \u0639\u062f\u062f \u0628\u0627\u0634\u062f"),active:m.O7().required("\u0627\u0644\u0632\u0627\u0645\u06cc \u0627\u0633\u062a").typeError("\u0641\u06cc\u0644\u062f \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f"),name:m.Z_()});n.default=function(e){var n=e.open,t=e.toggle,l=e.setChange,m=e.company,O=e.edit,P=e.setLoading,z=(0,a.useState)(!1),D=z[0],I=z[1],W={duration_of_activity:m.duration_of_activity,name:m.name,active:m.active},A=(0,p.cI)({defaultValues:W,mode:"onChange",resolver:(0,x.X)(M)}),T=A.reset,Y=A.control,B=A.handleSubmit,N=A.setError,E=A.formState.errors,H=function(){I(!1),l(!0),t(),T({duration_of_activity:0,name:"",active:!1})},L=function(){t(),T(W)};return(0,r.jsxs)(i.ZP,{open:n,anchor:"left",variant:"temporary",onClose:L,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,r.jsxs)(k,{children:[(0,r.jsxs)(c.Z,{variant:"h6",children:[" ",O?"\u062a\u063a\u06cc\u06cc\u0631 \u0627\u0634\u062a\u0631\u0627\u06a9":"\u0648\u06cc\u0631\u0627\u06cc\u0634 \u06a9\u0648\u0631\u06cc\u0631"]}),(0,r.jsx)(h.Z,{fontSize:"small",onClick:L,sx:{cursor:"pointer"}})]}),(0,r.jsx)(u.Z,{sx:{p:5,"& .MuiInputBase-input.Mui-disabled":{WebkitTextFillColor:"rgba(76,78,100,0.87)"},"& \t.MuiInputLabel-root.Mui-disabled":{WebkitTextFillColor:"rgba(76,78,100,0.87)"}},children:(0,r.jsxs)("form",{onSubmit:B((function(e){P(!0),S.Z.put("company/".concat(m.id),e,{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))}).then((function(){P(!1),H()})).catch((function(e){P(!1),N("name",{type:"custom",message:e.response.data.message})}))})),children:[(0,r.jsx)(d.Z,{fullWidth:!0,sx:{mb:4},children:(0,r.jsx)(p.Qr,{name:"name",control:Y,rules:{required:!0},render:function(e){var n=e.field,t=n.value,a=n.onChange,i=n.onBlur;return(0,r.jsx)(s.Z,{autoFocus:!0,label:"\u0646\u0627\u0645 \u0634\u0631\u06a9\u062a",value:t,onBlur:i,onChange:a,disabled:O||!1})}})}),(0,r.jsxs)(d.Z,{fullWidth:!0,sx:{mb:4},children:[(0,r.jsx)(p.Qr,{name:"duration_of_activity",control:Y,type:"number",rules:{required:!0},render:function(e){var n=e.field,t=n.value,a=n.onChange,i=n.onBlur;return(0,r.jsx)(s.Z,{autoFocus:!0,label:"\u0627\u0639\u062a\u0628\u0627\u0631 \u0627\u06a9\u0627\u0646\u062a (\u0631\u0648\u0632)",value:t,onBlur:i,onChange:a,error:Boolean(E.duration_of_activity)})}}),E.duration_of_activity&&(0,r.jsx)(f.Z,{sx:{color:"error.main"},children:E.duration_of_activity.message})]}),(0,r.jsxs)(d.Z,{fullWidth:!0,sx:{mb:4},children:[(0,r.jsx)(p.Qr,{name:"active",control:Y,render:function(e){var n=e.field,t=n.onChange,a=n.onBlur;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(_.Z,{id:"demo-multiple-name-label",children:"\u0648\u0636\u0639\u06cc\u062a"}),(0,r.jsxs)(w.Z,{onBlur:a,labelId:"demo-multiple-name-label",id:"demo-multiple-name",onChange:t,defaultValue:m.active,error:Boolean(E.active),input:(0,r.jsx)(v.Z,{label:"Name"}),children:[(0,r.jsx)(C.Z,{value:!0,children:"\u0641\u0639\u0627\u0644"}),(0,r.jsx)(C.Z,{value:!1,children:"\u063a\u06cc\u0631\u0641\u0639\u0627\u0644"})]})]})}}),E.active&&(0,r.jsx)(f.Z,{sx:{color:"error.main"},children:E.active.message})]}),(0,r.jsx)(o.Z,{size:"large",type:"submit",variant:"contained",sx:{mr:3},fullWidth:!0,children:"\u0630\u062e\u06cc\u0631\u0647"})]})}),(0,r.jsxs)(g.Z,{open:D,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,r.jsx)(b.Z,{id:"alert-dialog-title",children:"\u0648\u06cc\u0631\u0627\u06cc\u0634 \u0634\u0631\u06a9\u062a"}),(0,r.jsx)(j.Z,{children:(0,r.jsxs)(Z.Z,{id:"alert-dialog-description",children:["\u0634\u0631\u06a9\u062a ",m.name," \u0648\u06cc\u0631\u0627\u06cc\u0634 \u0634\u062f."]})}),(0,r.jsx)(y.Z,{children:(0,r.jsx)(o.Z,{onClick:H,autoFocus:!0,children:"\u0645\u062a\u0648\u062c\u0647 \u0634\u062f\u0645"})})]})]})}},18848:function(e,n,t){"use strict";t.r(n);var r=t(34051),a=t.n(r),i=t(85893),o=t(79172),l=t(11057),s=t(95534),c=t(83461),u=t(67294),d=t(3067),f=t.n(d),m=t(5370);function x(e,n,t,r,a,i,o){try{var l=e[i](o),s=l.value}catch(c){return void t(c)}l.done?n(s):Promise.resolve(s).then(r,a)}function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){p(e,n,t[n])}))}return e}n.default=function(e){var n=e.sortModel,t=e.toggle,r=e.setLoading,d=e.setAlert,p=(0,u.useState)([]),v=p[0],g=p[1],b=(0,u.useState)(!1),j=b[0],y=b[1];return(0,u.useEffect)((function(){v.length&&y(!0)}),[v]),(0,i.jsxs)(o.Z,{sx:{p:5,pb:0,display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"},children:[(0,i.jsxs)(l.Z,{sx:{mr:4,mb:2},color:"secondary",variant:"outlined",startIcon:(0,i.jsx)(s.Z,{fontSize:"small"}),onClick:function(){r(!0),m.Z.get("company/all/admin",n,{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))}).then(function(){var e,n=(e=a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g(n.data.map((function(e){var n=e.active?"\u0641\u0639\u0627\u0644":"\u063a\u06cc\u0631\u0641\u0639\u0627\u0644";return h({},e,{created_at:f()(e.created_at,"YYYY/MM/DD").locale("fa").format("YYYY/MM/DD"),active:n})}))),r(!1),d({open:!0,message:"\u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u0627\u0646\u062c\u0627\u0645 \u0634\u062f",variant:"success"});case 3:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function o(e){x(i,r,a,o,l,"next",e)}function l(e){x(i,r,a,o,l,"throw",e)}o(void 0)}))});return function(e){return n.apply(this,arguments)}}()).catch((function(e){var n,t;r(!1),(null===e||void 0===e||null===(n=e.response)||void 0===n||null===(t=n.data)||void 0===t?void 0:t.message)?d({open:!0,message:e.response.data.message,variant:"error"}):d({open:!0,message:"\u0645\u0634\u06a9\u0644\u06cc \u0628\u0647 \u0648\u062c\u0648\u062f \u0622\u0645\u062f\u0647 \u0627\u0633\u062a. \u0627\u0632 \u062e\u0627\u0644\u06cc \u0646\u0628\u0648\u062f\u0646 \u062e\u0631\u0648\u062c\u06cc \u0645\u0637\u0645\u0626\u0646 \u0634\u0648\u06cc\u062f \u0648 \u062f\u0648\u0628\u0627\u0631\u0647 \u0627\u0645\u062a\u062d\u0627\u0646 \u06a9\u0646\u06cc\u062f",variant:"error"})}))},children:["\u062e\u0631\u0648\u062c\u06cc",j&&(0,i.jsx)(c.CSVDownload,{data:v,headers:[{key:"id",label:"\u0634\u0646\u0627\u0633\u0647"},{key:"name",label:"\u062a\u0627\u0645 \u0634\u0631\u06a9\u062a"},{key:"duration_of_activity",label:"\u0627\u0634\u062a\u0631\u0627\u06a9"},{key:"active",label:"\u0648\u0636\u0639\u06cc\u062a"},{key:"created_at",label:"\u062a\u0627\u0631\u06cc\u062e \u0627\u06cc\u062c\u0627\u062f"}],target:"_blank"})]}),(0,i.jsx)(o.Z,{sx:{display:"flex",flexWrap:"wrap",alignItems:"center"},children:(0,i.jsx)(l.Z,{sx:{mb:2},onClick:t,variant:"contained",children:"\u0627\u0641\u0632\u0648\u062f\u0646 \u06a9\u0648\u0631\u06cc\u0631"})})]})}},98804:function(e,n,t){"use strict";t.r(n),t.d(n,{GridContainer:function(){return B}});var r=t(34051),a=t.n(r),i=t(85893),o=t(67294),l=t(86886),s=t(66242),c=t(15861),u=t(79172),d=t(38333),f=t(3512),m=t(94603),x=t(4718),p=t(50853),h=t(18972),v=t(11496),g=t(93946),b=t(3067),j=t.n(b),y=t(55113),Z=t(46160),_=t(3690),w=t(83296),C=t(95898),S=t(59872),k=t(5370),M=t(7071),O=t(46901),P=t(14866),z=t(46353),D=t(18848),I=t(35515),W=t(36376);function A(e,n,t,r,a,i,o){try{var l=e[i](o),s=l.value}catch(c){return void t(c)}l.done?n(s):Promise.resolve(s).then(r,a)}function T(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){T(e,n,t[n])}))}return e}var B=(0,v.ZP)(y.Z)({flexGrow:1,".MuiDataGrid-root":{border:"none"},".MuiTablePagination-displayedRows":{display:"none"}}),N={true:"success",false:"secondary"};function E(){var e=function(e){var n=e.company,t=(0,o.useState)(null),a=t[0],l=t[1],s=Boolean(a),c=function(){l(null)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(g.Z,{size:"small",onClick:function(e){l(e.currentTarget)},children:(0,i.jsx)(Z.Z,{})}),(0,i.jsxs)(d.Z,{keepMounted:!0,anchorEl:a,open:s,onClose:c,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},PaperProps:{style:{minWidth:"8rem"}},children:[(0,i.jsxs)(h.Z,{onClick:function(){return $(n),void pe()},children:[(0,i.jsx)(C.Z,{fontSize:"small",sx:{mr:2}}),"\u0646\u0645\u0627\u06cc\u0634 \u0634\u0631\u06a9\u062a"]}),(0,i.jsxs)(h.Z,{onClick:function(){return $(n),void xe()},children:[(0,i.jsx)(S.Z,{fontSize:"small",sx:{mr:2}}),"\u062a\u0645\u062f\u06cc\u062f \u0627\u0634\u062a\u0631\u0627\u06a9"]}),(0,i.jsxs)(h.Z,{onClick:function(){return $(n),void me()},children:[(0,i.jsx)(_.Z,{fontSize:"small",sx:{mr:2}}),"\u0648\u06cc\u0631\u0627\u06cc\u0634"]}),(0,i.jsxs)(h.Z,{onClick:function(){return e=n.id,r(!0),k.Z.delete("company/".concat(e),{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))}).then((function(){r(!1),U(!0)})).catch((function(e){r(!1),de({open:!0,message:e.response.data.message,variant:"error"})})),void c();var e},children:[(0,i.jsx)(w.Z,{fontSize:"small",sx:{mr:2}}),"\u062d\u0630\u0641"]})]})]})},n=(0,o.useState)(!1),t=n[0],r=n[1],v=(0,o.useState)(10),b=v[0],y=v[1],T=(0,o.useState)(!1),E=T[0],H=T[1],L=(0,o.useState)({page:1,page_size:10,sort_by:"id desc"}),V=L[0],F=L[1],q=(0,o.useState)([]),G=q[0],R=q[1],Q=(0,o.useState)(!1),X=Q[0],U=Q[1],J=(0,o.useState)({}),K=J[0],$=J[1],ee=(0,o.useState)(!1),ne=ee[0],te=ee[1],re=(0,o.useState)(!1),ae=re[0],ie=re[1],oe=(0,o.useState)(!1),le=oe[0],se=oe[1],ce=(0,o.useState)({open:!1,variant:"",message:""}),ue=ce[0],de=ce[1],fe=function(){return H(!E)},me=function(){return te(!ne)},xe=function(){return ie(!ae)},pe=function(){return se(!le)},he=(0,f.s)().filter((function(e){var n=e.value;return["contains"].includes(n)})),ve=[{flex:.1,minWidth:230,field:"name",filterOperators:he,headerName:"\u0646\u0627\u0645 \u06a9\u0648\u0631\u06cc\u0631",hideable:!1,renderCell:function(e){var n=e.row;return(0,i.jsx)(u.Z,{sx:{display:"flex",alignItems:"center"},children:(0,i.jsx)(u.Z,{sx:{display:"flex",alignItems:"flex-start",flexDirection:"column"},children:(0,i.jsx)(c.Z,{noWrap:!0,component:"a",variant:"subtitle2",sx:{color:"text.primary",textDecoration:"none"},children:n.name})})})}},{flex:.1,minWidth:230,field:"adminName",filterable:!1,headerName:"\u0646\u0627\u0645 \u0627\u062f\u0645\u06cc\u0646",sortable:!1,hideable:!1,renderCell:function(e){var n,t=e.row;return(0,i.jsx)(u.Z,{sx:{display:"flex",alignItems:"center"},children:(0,i.jsx)(u.Z,{sx:{display:"flex",alignItems:"flex-start",flexDirection:"column"},children:(0,i.jsx)(c.Z,{noWrap:!0,component:"a",variant:"subtitle2",sx:{color:"text.primary",textDecoration:"none"},children:null===t||void 0===t||null===(n=t.admin)||void 0===n?void 0:n.name})})})}},{flex:.2,minWidth:230,field:"adminUsername",headerName:"\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc \u0627\u062f\u0645\u06cc\u0646",filterable:!1,hideable:!1,sortable:!1,renderCell:function(e){var n,t=e.row;return(0,i.jsx)(u.Z,{sx:{display:"flex",alignItems:"center"},children:(0,i.jsx)(u.Z,{sx:{display:"flex",alignItems:"flex-start",flexDirection:"column"},children:(0,i.jsx)(c.Z,{noWrap:!0,component:"a",variant:"subtitle2",sx:{color:"text.primary",textDecoration:"none"},children:null===t||void 0===t||null===(n=t.admin)||void 0===n?void 0:n.username})})})}},{flex:.15,field:"created_at",minWidth:150,filterOperators:he,headerName:"\u062a\u0627\u0631\u06cc\u062e \u062b\u0628\u062a \u0646\u0627\u0645",hideable:!1,renderCell:function(e){var n=e.row;return(0,i.jsx)(u.Z,{sx:{display:"flex",alignItems:"center"},children:(0,i.jsx)(c.Z,{noWrap:!0,sx:{color:"text.secondary",textTransform:"capitalize"},children:j()(n.created_at,"YYYY/MM/DD").locale("fa").format("YYYY/MM/DD")})})}},{flex:.15,minWidth:120,headerName:"\u0627\u0634\u062a\u0631\u0627\u06a9",filterOperators:he,field:"duration_of_activity",hideable:!1,renderCell:function(e){var n=e.row;return(0,i.jsxs)(c.Z,{variant:"subtitle1",noWrap:!0,sx:{textTransform:"capitalize"},children:[n.duration_of_activity," \u0631\u0648\u0632"]})}},{flex:.1,minWidth:110,field:"active",filterable:!1,headerName:"\u0648\u0636\u0639\u06cc\u062a",hideable:!1,renderCell:function(e){var n=e.row;return(0,i.jsx)(M.Z,{skin:"light",size:"small",label:n.active?"\u0641\u0639\u0627\u0644":"\u063a\u06cc\u0631\u0641\u0639\u0627\u0644",color:N[n.active],sx:{textTransform:"capitalize","& .MuiChip-label":{lineHeight:"18px"}}})}},{flex:.1,minWidth:90,sortable:!1,hideable:!1,field:"\u06af\u0632\u06cc\u0646\u0647 \u0647\u0627",headerName:"\u06af\u0632\u06cc\u0646\u0647 \u0647\u0627",renderCell:function(n){var t=n.row;return(0,i.jsx)(e,{company:t})}}];(0,o.useEffect)((function(){X&&de({open:!0,message:"\u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u0627\u0646\u062c\u0627\u0645 \u0634\u062f",variant:"success"}),r(!0),k.Z.get("company/all/admin",V,{Authorization:"Bearer ".concat(window.localStorage.getItem("access_Token"))}).then(function(){var e,n=(e=a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===n.data?R([]):R(n.data),U(!1),r(!1);case 3:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function o(e){A(i,r,a,o,l,"next",e)}function l(e){A(i,r,a,o,l,"throw",e)}o(void 0)}))});return function(e){return n.apply(this,arguments)}}()).catch((function(e){r(!1),de({open:!0,message:e.response.data.message,variant:"error"})}))}),[V,X]);var ge=(0,o.useState)(0),be=ge[0],je=ge[1],ye=(0,o.useState)({}),Ze=ye[0],_e=ye[1],we=(0,o.useCallback)((function(e){var n,t;(_e(e),0!==Object.keys(e).length&&void 0!==(null===(n=e.items[0])||void 0===n?void 0:n.value))?F(Y({},V,{search:"".concat(e.items[0].columnField,"|").concat(null===(t=e.items[0])||void 0===t?void 0:t.value)})):F(Y({},V,{search:""}))}),[Ze,_e]);return(0,i.jsxs)(l.ZP,{container:!0,spacing:6,children:[(0,i.jsx)(l.ZP,{item:!0,xs:12,children:(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(D.default,{toggle:fe,setLoading:r,setAlert:de,sortModel:V}),(0,i.jsx)(P.Z,{open:ue.open,autoHideDuration:6e3,onClose:function(){de({open:!1,message:"",variant:""})},anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"error",children:(0,i.jsx)(O.Z,{severity:ue.variant,sx:{width:"100%"},children:ue.message})},"TransitionUp"),(0,i.jsx)(B,{sx:{p:4,m:1},children:(0,i.jsx)(m._,{autoHeight:!0,pagination:!0,rows:G,columns:ve,pageSize:b,disableSelectionOnClick:!0,rowsPerPageOptions:[10,25,50],sx:{"& .MuiDataGrid-columnHeaders":{borderRadius:0}},paginationMode:"server",onPageSizeChange:function(e){console.log(e),y(e),F(Y({},V,{page_size:e}))},localeText:x.T.components.MuiDataGrid.defaultProps.localeText,disableColumnSelector:!0,sortingMode:"server",onSortModelChange:function(e){var n,t,r=0!==e.length?"".concat(null===(n=e[0])||void 0===n?void 0:n.field," ").concat(null===(t=e[0])||void 0===t?void 0:t.sort):"id desc";F(Y({},V,{sort_by:"".concat(r)}))},onPageChange:function(e){je(e),F(Y({},V,{page:e+1}))},page:be,rowCount:50,onFilterModelChange:we,isLoading:t,components:{Toolbar:p.M}})})]})}),E&&(0,i.jsx)(z.default,{open:E,toggle:fe,setChange:U,edit:!1,company:null,setLoading:r}),ne&&(0,i.jsx)(I.default,{open:ne,toggle:me,setChange:U,company:K,edit:!1,setLoading:r}),ae&&(0,i.jsx)(I.default,{open:ae,toggle:xe,setChange:U,company:K,edit:!0,setLoading:r}),le&&(0,i.jsx)(z.default,{open:le,toggle:pe,setChange:U,edit:!0,company:K,setLoading:r}),(0,i.jsx)(W.default,{open:t})]})}E.acl={action:"read",subject:"acl-page"},n.default=E}},function(e){e.O(0,[4885,4386,2283,1524,9075,7693,4603,1433,2718,9762,6353,9774,2888,179],(function(){return n=80030,e(e.s=n);var n}));var n=e.O();_N_E=n}]);