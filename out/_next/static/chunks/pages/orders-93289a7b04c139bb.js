(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6660],{19159:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/orders",function(){return n(36319)}])},85216:function(e,r,n){"use strict";var t=n(85893),o=n(67294),i=n(54776),a=n(50657),l=n(67564),s=n(6514),c=n(31425),d=n(83321),u=n(37645),f=n(58951),m=n(48075);function p(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}var h=o.forwardRef((function(e,r){return(0,t.jsx)(i.Z,function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){p(e,r,n[r])}))}return e}({direction:"up",ref:r},e))}));r.Z=function(e){var r=e.closeFunction,n=e.setOpen,o=e.open,i=e.company,p=function(){n(!1)};return(0,t.jsxs)(a.Z,{open:o,TransitionComponent:h,keepMounted:!0,onClose:p,"aria-describedby":"alert-dialog-slide-description",children:[(0,t.jsxs)(u.Z,{sx:{display:"flex",gap:2},children:[(0,t.jsx)(l.Z,{color:"warning",component:m.Z}),"\u062d\u0630\u0641 "]}),(0,t.jsx)(s.Z,{children:(0,t.jsxs)(f.Z,{id:"alert-dialog-slide-description",children:["\u0627\u06cc\u0627 \u0627\u0632 \u062d\u0630\u0641 ",i.name," \u0645\u0637\u0645\u0626\u0646 \u0647\u0633\u062a\u06cc\u062f\u061f"]})}),(0,t.jsxs)(c.Z,{children:[(0,t.jsx)(d.Z,{onClick:function(){n(!1),r(i)},children:"\u0628\u0644\u0647"}),(0,t.jsx)(d.Z,{onClick:p,children:"\u062e\u06cc\u0631"})]})]})}},40609:function(e,r,n){"use strict";n.d(r,{Z:function(){return m}});var t=n(85893),o=n(67294),i=n(93946),a=n(46160),l=n(38333),s=n(22224),c=n(95898),d=n(3690),u=n(83296),f=n(85216);function m(e){var r=e.company,n=e.setSelectedCompany,m=e.toggleEditUserDrawer,p=e.toggleShowUserDrawer,h=e.selectedCompany,y=e.deleteFunction,v=(0,o.useState)(null),x=v[0],b=v[1],g=Boolean(x),_=(0,o.useState)(!1),j=_[0],k=_[1],C=function(){b(null)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.Z,{size:"small",onClick:function(e){b(e.currentTarget)},children:(0,t.jsx)(a.Z,{})}),(0,t.jsxs)(l.Z,{keepMounted:!0,anchorEl:x,open:g,onClose:C,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},PaperProps:{style:{minWidth:"8rem"}},children:[(0,t.jsxs)(s.Z,{onClick:function(){return n(r),p(),void C()},children:[(0,t.jsx)(c.Z,{fontSize:"small",sx:{mr:2}}),"\u0646\u0645\u0627\u06cc\u0634"]}),(0,t.jsxs)(s.Z,{onClick:function(){return n(r),m(),void C()},children:[(0,t.jsx)(d.Z,{fontSize:"small",sx:{mr:2}}),"\u0648\u06cc\u0631\u0627\u06cc\u0634"]}),(0,t.jsxs)(s.Z,{onClick:function(){return n(r),C(),void k(!0)},children:[(0,t.jsx)(u.Z,{fontSize:"small",sx:{mr:2}}),"\u062d\u0630\u0641"]})]}),(0,t.jsx)(f.Z,{open:j,setOpen:k,company:h,closeFunction:y})]})}},12300:function(e,r,n){"use strict";n.d(r,{Z:function(){return d}});var t=n(85893),o=n(79172),i=n(83321),a=n(67294),l=n(95534),s=n(83461);var c=function(e){var r=e.api,n=e.headers,o=e.data,c=(0,a.useState)(!1),d=c[0],u=c[1];return(0,a.useEffect)((function(){(null===o||void 0===o?void 0:o.length)>0&&u(!0)}),[o,d]),(0,t.jsxs)(i.Z,{sx:{mr:4,mb:2},color:"secondary",variant:"outlined",startIcon:(0,t.jsx)(l.Z,{fontSize:"small"}),onClick:function(){u(!1),r()},children:["\u062e\u0631\u0648\u062c\u06cc",d?(0,t.jsx)(s.CSVDownload,{data:o,headers:n,target:"_blank"}):null]})};var d=function(e){var r=e.toggle,n=e.data,a=e.headers,l=e.api,s=e.name,d=e.noAdd,u=e.children;return(0,t.jsxs)(o.Z,{sx:{p:5,pb:0,display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"},children:[(0,t.jsx)(c,{api:l,headers:a,data:n}),(0,t.jsxs)(o.Z,{sx:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:2},children:[u,!d&&(0,t.jsxs)(i.Z,{sx:{mb:2},onClick:r,variant:"contained",children:["\u0627\u0641\u0632\u0648\u062f\u0646 ",s]})]})]})}},46893:function(e,r,n){"use strict";var t=n(85893),o=n(67294),i=n(86117),a=n(4718),l=n(50853);function s(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){s(e,r,n[r])}))}return e}r.Z=function(e){var r=e.data,n=e.columns,s=e.sortModel,d=e.setSortModel,u=e.selfFilter,f=e.noFilter,m=(0,o.useState)(10),p=m[0],h=m[1],y=(0,o.useState)(0),v=y[0],x=y[1],b=(0,o.useState)({}),g=b[0],_=b[1],j=(0,o.useCallback)((function(e){var r,n;(_(e),0!==Object.keys(e).length&&void 0!==(null===(r=e.items[0])||void 0===r?void 0:r.value))?d(c({},s,{search:"".concat(e.items[0].columnField,"|").concat(null===(n=e.items[0])||void 0===n?void 0:n.value)})):d(c({},s,{search:""}))}),[g,_]);return(0,t.jsx)(i._,{autoHeight:!0,pagination:!0,rows:r,columns:n,pageSize:p,disableSelectionOnClick:!0,rowsPerPageOptions:[10,25,50],sx:{"& .MuiDataGrid-columnHeaders":{borderRadius:0}},paginationMode:!u&&"server",onPageSizeChange:function(e){h(e),d(c({},s,{page_size:e}))},localeText:a.T.components.MuiDataGrid.defaultProps.localeText,disableColumnSelector:!0,sortingMode:!u&&"server",onSortModelChange:function(e){var r,n,t=0!==e.length?"".concat(null===(r=e[0])||void 0===r?void 0:r.field," ").concat(null===(n=e[0])||void 0===n?void 0:n.sort):"id desc";d(c({},s,{sort_by:"".concat(t)}))},onPageChange:function(e){x(e),d(c({},s,{page:e+1}))},page:v,rowCount:50,onFilterModelChange:j,components:!f&&{Toolbar:l.M}})}},36319:function(e,r,n){"use strict";n.r(r),n.d(r,{GridContainer:function(){return C}});var t=n(85893),o=n(67294),i=n(86886),a=n(66242),l=n(15861),s=n(79172),c=n(3512),d=n(11496),u=n(3067),f=n.n(u),m=n(55113),p=n(74931),h=n(46893),y=n(12300),v=n(40609),x=n(83321),b=n(35823),g=n.n(b),_=n(4118),j=n(4893);function k(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}var C=(0,d.ZP)(m.Z)({flexGrow:1,".MuiDataGrid-root":{border:"none"},".MuiTablePagination-displayedRows":{display:"none"}});function Z(){var e=(0,o.useState)({}),r=e[0],n=e[1],d=(0,o.useState)(!1),u=d[0],m=d[1],b=(0,o.useState)(!1),Z=b[0],w=b[1],P=(0,o.useState)(!1),O=P[0],S=P[1],M=(0,o.useState)({page:1,sort_by:"id desc",serach:""}),D=M[0],N=M[1],W=(0,o.useState)([]),I=W[0],z=W[1],Y=(0,o.useState)(!1),E=Y[0],T=Y[1],F=(0,o.useState)([]),U=F[0],R=F[1],q=function(){return S(!O)},A=function(){return m(!u)},G=function(){return w(!Z)},B=function(e){p.ZP.promise((0,j.deleteUser)(e.order.id).then(T(!0)),{loading:"\u062f\u0631 \u062d\u0627\u0644 \u062d\u0630\u0641 \u0633\u0641\u0627\u0631\u0634",success:"\u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u062d\u0630\u0641 \u0634\u062f",error:function(e){return e.response.data.message?e.response.data.message:"\u062e\u0637\u0627\u06cc\u06cc \u0631\u062e \u062f\u0627\u062f\u0647 \u0627\u0633\u062a"}})},H=(0,c.s)().filter((function(e){var r=e.value;return["contains"].includes(r)})),L=[{flex:.1,minWidth:50,field:"id",filterOperators:H,headerName:"\u0634\u0645\u0627\u0631\u0647",hideable:!1,renderCell:function(e){var r=e.row;return(0,t.jsx)(s.Z,{sx:{display:"flex",alignItems:"center"},children:(0,t.jsx)(s.Z,{sx:{display:"flex",alignItems:"flex-start",flexDirection:"column"},children:(0,t.jsx)(l.Z,{noWrap:!0,component:"a",variant:"subtitle2",sx:{color:"text.primary",textDecoration:"none"},children:r.order.id})})})}},{flex:.1,minWidth:100,field:"created_at",filterOperators:H,headerName:"\u062a\u0627\u0631\u06cc\u062e \u062b\u0628\u062a",hideable:!1,renderCell:function(e){var r=e.row;return(0,t.jsx)(s.Z,{sx:{display:"flex",alignItems:"center"},children:(0,t.jsx)(s.Z,{sx:{display:"flex",alignItems:"flex-start",flexDirection:"column"},children:(0,t.jsx)(l.Z,{noWrap:!0,component:"a",variant:"subtitle2",sx:{color:"text.primary",textDecoration:"none"},children:f()(r.order.created_at,"YYYY/MM/DD").locale("fa").format("YYYY/MM/DD")})})})}},{flex:.15,field:"sender_name",minWidth:150,filterOperators:H,headerName:"\u0641\u0631\u0633\u062a\u0646\u062f\u0647",hideable:!1,renderCell:function(e){var r=e.row;return(0,t.jsx)(s.Z,{sx:{display:"flex",alignItems:"center"},children:(0,t.jsx)(l.Z,{noWrap:!0,sx:{color:"text.secondary",textTransform:"capitalize"},children:r.sender_customer.name})})}},{flex:.1,field:"sender_city",minWidth:150,filterOperators:H,headerName:"\u0634\u0647\u0631 \u0642\u0631\u0633\u062a\u0646\u062f\u0647",hideable:!1,renderCell:function(e){var r=e.row;return(0,t.jsx)(s.Z,{sx:{display:"flex",alignItems:"center"},children:(0,t.jsx)(l.Z,{noWrap:!0,sx:{color:"text.secondary",textTransform:"capitalize"},children:r.sender_customer.city})})}},{flex:.1,field:"reiever_name",minWidth:150,filterOperators:H,headerName:"\u06af\u06cc\u0631\u0646\u062f\u0647",hideable:!1,renderCell:function(e){var r=e.row;return(0,t.jsx)(s.Z,{sx:{display:"flex",alignItems:"center"},children:(0,t.jsx)(l.Z,{noWrap:!0,sx:{color:"text.secondary",textTransform:"capitalize"},children:r.receiver_customer.name})})}},{flex:.1,field:"reciever_city",minWidth:150,filterOperators:H,headerName:"\u0634\u0647\u0631 \u06af\u06cc\u0631\u0646\u062f\u0647",hideable:!1,renderCell:function(e){var r=e.row;return(0,t.jsx)(s.Z,{sx:{display:"flex",alignItems:"center"},children:(0,t.jsx)(l.Z,{noWrap:!0,sx:{color:"text.secondary",textTransform:"capitalize"},children:r.receiver_customer.city})})}},{flex:.2,field:"price",minWidth:100,filterOperators:H,headerName:"\u0645\u0628\u0644\u063a \u0633\u0641\u0627\u0631\u0634",hideable:!1,renderCell:function(e){var r=e.row;return(0,t.jsx)(s.Z,{sx:{display:"flex",alignItems:"center"},children:(0,t.jsxs)(l.Z,{noWrap:!0,sx:{color:"text.secondary",textTransform:"capitalize"},children:[r.order.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),"\u0631\u06cc\u0627\u0644"]})})}},{flex:.2,field:"state",minWidth:100,filterOperators:H,headerName:"\u0645\u0631\u062d\u0644\u0647",hideable:!1,renderCell:function(e){var r=e.row;return(0,t.jsx)(s.Z,{sx:{display:"flex",alignItems:"center"},children:(0,t.jsx)(l.Z,{noWrap:!0,sx:{color:"text.secondary",textTransform:"capitalize"},children:r.order.state})})}},{flex:.1,minWidth:50,sortable:!1,hideable:!1,filterable:!1,field:"\u06af\u0632\u06cc\u0646\u0647 \u0647\u0627",headerName:"\u06af\u0632\u06cc\u0646\u0647 \u0647\u0627",renderCell:function(e){var o=e.row;return(0,t.jsx)(v.Z,{company:o,toggleShowUserDrawer:G,toggleEditUserDrawer:A,setSelectedCompany:n,setChange:T,selectedCompany:r,deleteFunction:B})}},{flex:.2,field:"download",minWidth:100,filterOperators:H,headerName:"\u0645\u0631\u062d\u0644\u0647",hideable:!1,renderCell:function(e){var r=e.row;return(0,t.jsx)(s.Z,{sx:{display:"flex",alignItems:"center"},children:(0,t.jsx)(x.Z,{onClick:function(){return e=r.order.id,void p.ZP.promise((0,j.downloadOrder)(e).then((function(r){g()(r.data,"\u0633\u0641\u0627\u0631\u0634".concat(e,".pdf"))})),{loading:"\u062f\u0631 \u062d\u0627\u0644 \u062f\u0627\u0646\u0644\u0648\u062f \u0633\u0641\u0627\u0631\u0634",success:"\u062f\u0627\u0646\u0644\u0648\u062f \u0627\u0646\u062c\u0627\u0645 \u0634\u062f",error:function(e){var r,n,t,o;return(null===(r=e.response)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.message)?null===(t=e.response)||void 0===t||null===(o=t.data)||void 0===o?void 0:o.message:"\u062e\u0637\u0627\u06cc\u06cc \u0631\u062e \u062f\u0627\u062f\u0647 \u0627\u0633\u062a."}});var e},children:"\u062f\u0627\u0646\u0644\u0648\u062f"})})}}];return(0,o.useEffect)((function(){R([]),(0,j.fetchData)({}).then((function(e){null===e.data?z([]):z(e.data.map((function(e){return function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){k(e,r,n[r])}))}return e}({id:e.order.id},e)}))),E&&T(!1)})).catch((function(e){var r,n,t=(null===e||void 0===e||null===(r=e.response)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.message)?e.response.data.message:"\u062e\u0637\u0627\u06cc\u06cc \u0631\u062e \u062f\u0627\u062f\u0647 \u0627\u0633\u062a";p.ZP.error(t)}))}),[R,E]),(0,t.jsxs)(i.ZP,{container:!0,spacing:6,children:[(0,t.jsx)(i.ZP,{item:!0,xs:12,children:(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(y.Z,{toggle:q,data:U,api:function(){return p.ZP.promise((0,j.fetchData)({sort_by:D.sort_by,serach:D.serach}).then((function(e){R(e.data.map((function(e){return{senderCodeMelli:e.sender_customer.identity_code,senderName:e.sender_customer.name,senderMobile:e.sender_customer.mobile,senderPhone:e.sender_customer.tel,senderPhonePrefix:e.sender_customer.area_code,senderCompany:e.sender_customer.companyName,senderCounty:e.sender_customer.provence,senderCity:e.sender_customer.city,senderCodePosti:e.sender_customer.postal_code,senderOtherInfo:e.sender_customer.other_information,senderMainRoard:e.sender_customer.main_street,senderSubRoad:e.sender_customer.side_street,senderAlley:e.sender_customer.alley,senderPlaque:e.sender_customer.plaque,senderFloor:e.sender_customer.floor,senderUnit:e.sender_customer.home_unit,recieverCodeMelli:e.receiver_customer.identity_code,recieverName:e.receiver_customer.name,recieverMobile:e.receiver_customer.mobile,recieverPhone:e.receiver_customer.tel,recieverPhonePrefix:e.receiver_customer.area_code,recieverCompany:e.receiver_customer.companyName,recieverCounty:e.receiver_customer.provence,recieverCity:e.receiver_customer.city,recieverCodePosti:e.receiver_customer.postal_code,recieverMainRoard:e.receiver_customer.main_street,recieverSubRoad:e.receiver_customer.side_street,recieverAlley:e.receiver_customer.alley,recieverPlaque:e.receiver_customer.plaque,recieverFloor:e.receiver_customer.floor,recieverUnit:e.receiver_customer.home_unit,receiverOtherInfo:e.receiver_customer.other_information,weight:e.product.weight,length:e.product.length,width:e.product.width,height:e.product.height,money:e.product.product_cost,car:e.product.vehicle,needsSpecialCarry:e.product.special_vehicle_required?"\u0645\u06cc \u0628\u0627\u0634\u062f":"\u0646\u0645\u06cc \u0628\u0627\u0634\u062f",SpecialBox:e.product.special_product?"\u0645\u06cc \u0628\u0627\u0634\u062f":"\u0646\u0645\u06cc \u0628\u0627\u0634\u062f",paymentMethod:e.product.payment_method,needsEvacuate:e.product.product_unloading_required?"\u0645\u06cc \u0628\u0627\u0634\u062f":"\u0646\u0645\u06cc \u0628\u0627\u0634\u062f",needsLoading:e.product.product_loading_required?"\u0645\u06cc \u0628\u0627\u0634\u062f":"\u0646\u0645\u06cc \u0628\u0627\u0634\u062f",needsMovement:e.product.movement_required?"\u0645\u06cc \u0628\u0627\u0634\u062f":"\u0646\u0645\u06cc \u0628\u0627\u0634\u062f",createdAt:f()(e.order.created_at,"YYYY/MM/DD").locale("fa").format("YYYY/MM/DD"),price:e.order.price,state:e.order.state,isSuburb:e.product.is_suburb?"\u0645\u06cc \u0628\u0627\u0634\u062f":"\u0646\u0645\u06cc \u0628\u0627\u0634\u062f"}})))})),{loading:"\u062f\u0631 \u062d\u0627\u0644 \u062f\u0627\u0646\u0644\u0648\u062f",success:"\u062f\u0627\u0646\u0644\u0648\u062f \u0627\u0646\u062c\u0627\u0645 \u0634\u062f",error:function(e){var r,n,t,o;return(null===(r=e.response)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.message)?null===(t=e.response)||void 0===t||null===(o=t.data)||void 0===o?void 0:o.message:"\u062e\u0637\u0627\u06cc\u06cc \u0631\u062e \u062f\u0627\u062f\u0647 \u0627\u0633\u062a.\u0627\u0632 \u062e\u0627\u0644\u06cc \u0646\u0628\u0648\u062f\u0646 \u0645\u0648\u0627\u0631\u062f \u062f\u0627\u0646\u0644\u0648\u062f \u0645\u0637\u0645\u0626\u0646 \u0634\u0648\u06cc\u062f."}})},headers:[{key:"createdAt",label:"\u062a\u0627\u0631\u06cc\u062e \u062b\u0628\u062a"},{key:"price",label:"\u0645\u0628\u0644\u063a \u0633\u0641\u0627\u0631\u0634"},{key:"state",label:"\u0648\u0636\u0639\u06cc\u062a"},{key:"senderCodeMelli",label:"\u06a9\u062f\u0645\u0644\u06cc \u0641\u0631\u0633\u062a\u0646\u062f\u0647"},{key:"senderName",label:"\u0646\u0627\u0645 \u0641\u0631\u0633\u062a\u0646\u062f\u0647"},{key:"senderMobile",label:"\u0645\u0648\u0628\u0627\u06cc\u0644 \u0641\u0631\u0633\u062a\u0646\u062f\u0647"},{key:"senderPhone",label:"\u062a\u0644\u0641\u0646 \u0641\u0631\u0633\u062a\u0646\u062f\u0647"},{key:"senderPhonePrefix",label:"\u067e\u06cc\u0634 \u0634\u0645\u0627\u0631\u0647 \u062a\u0644\u0641\u0646 \u0641\u0631\u0633\u062a\u0646\u062f\u0647"},{key:"senderCompany",label:"\u0634\u0631\u06a9\u062a \u0641\u0631\u0633\u062a\u0646\u062f\u0647"},{key:"senderCounty",label:"\u0627\u0633\u062a\u0627\u0646 \u0641\u0631\u0633\u062a\u0646\u062f\u0647"},{key:"senderCity",label:"\u0634\u0647\u0631 \u0641\u0631\u0633\u062a\u0646\u062f\u0647"},{key:"senderCodePosti",label:"\u06a9\u062f\u067e\u0633\u062a\u06cc \u0641\u0631\u0633\u062a\u0646\u062f\u0647"},{key:"senderOtherInfo",label:"\u0633\u0627\u06cc\u0631 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0641\u0631\u0633\u062a\u0646\u062f\u0647"},{key:"senderMainRoard",label:"\u062e\u06cc\u0627\u0628\u0627\u0646 \u0627\u0635\u0644\u06cc \u0641\u0631\u0633\u062a\u0646\u062f\u0647"},{key:"senderSubRoad",label:"\u062e\u06cc\u0627\u0628\u0627\u0646 \u0641\u0631\u0639\u06cc \u0641\u0631\u0633\u062a\u0646\u062f\u0647"},{key:"senderAlley",label:"\u06a9\u0648\u0686\u0647 \u0641\u0631\u0633\u062a\u0646\u062f\u0647"},{key:"senderPlaque",label:"\u067e\u0644\u0627\u06a9 \u0641\u0631\u0633\u062a\u0646\u062f\u0647"},{key:"senderFloor",label:"\u0637\u0628\u0642\u0647 \u0641\u0631\u0633\u062a\u0646\u062f\u0647"},{key:"senderUnit",label:"\u0648\u0627\u062d\u062f \u0641\u0631\u0633\u062a\u0646\u062f\u0647"},{key:"recieverCodeMelli",label:"\u06a9\u062f\u0645\u0644\u06cc \u06af\u06cc\u0631\u0646\u062f\u0647"},{key:"recieverName",label:"\u0646\u0627\u0645 \u06af\u06cc\u0631\u0646\u062f\u0647"},{key:"recieverMobile",label:"\u0645\u0648\u0628\u0627\u06cc\u0644 \u06af\u06cc\u0631\u0646\u062f\u0647"},{key:"recieverPhone",label:"\u062a\u0644\u0641\u0646 \u06af\u06cc\u0631\u0646\u062f\u0647"},{key:"recieverPhonePrefix",label:"\u067e\u06cc\u0634 \u0634\u0645\u0627\u0631\u0647 \u06af\u06cc\u0631\u0646\u062f\u0647"},{key:"recieverCompany",label:"\u0634\u0631\u06a9\u062a \u06af\u06cc\u0631\u0646\u062f\u0647"},{key:"recieverCounty",label:"\u0627\u0633\u062a\u0627\u0646 \u06af\u06cc\u0631\u0646\u062f\u0647"},{key:"recieverCity",label:"\u0634\u0647\u0631 \u06af\u06cc\u0631\u0646\u062f\u0647"},{key:"recieverCodePosti",label:"\u06a9\u062f\u067e\u0633\u062a\u06cc \u06af\u06cc\u0631\u0646\u062f\u0647"},{key:"recieverMainRoard",label:"\u062e\u06cc\u0627\u0628\u0627\u0646 \u0627\u0635\u0644\u06cc \u06af\u06cc\u0631\u0646\u062f\u0647"},{key:"recieverSubRoad",label:"\u062e\u06cc\u0627\u0628\u0627\u0646 \u0641\u0631\u0639\u06cc \u06af\u06cc\u0631\u0646\u062f\u0647"},{key:"recieverAlley",label:"\u06a9\u0648\u0686\u0647 \u06af\u06cc\u0631\u0646\u062f\u0647"},{key:"recieverPlaque",label:"\u067e\u0644\u0627\u06a9 \u06af\u06cc\u0631\u0646\u062f\u0647"},{key:"recieverFloor",label:"\u0637\u0628\u0642\u0647 \u06af\u06cc\u0631\u0646\u062f\u0647"},{key:"recieverUnit",label:"\u0648\u0627\u062d\u062f \u06af\u06cc\u0631\u0646\u062f\u0647"},{key:"receiverOtherInfo",label:"\u0633\u0627\u06cc\u0631 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u06af\u06cc\u0631\u0646\u062f\u0647"},{key:"weight",label:"\u0648\u0632\u0646"},{key:"length",label:"\u0637\u0648\u0644"},{key:"width",label:"\u0639\u0631\u0636"},{key:"height",label:"\u0627\u0631\u062a\u0641\u0627\u0639"},{key:"money",label:"\u0627\u0631\u0632\u0634 \u0628\u0646\u0627 \u0628\u0647 \u0627\u0638\u0647\u0627\u0631 \u0641\u0631\u0633\u062a\u0646\u062f\u0647"},{key:"car",label:"\u0646\u0648\u0639 \u0645\u0627\u0634\u06cc\u0646 \u062d\u0645\u0644 \u06a9\u0646\u0646\u062f\u0647"},{key:"needsSpecialCarry",label:"\u0646\u06cc\u0627\u0632\u0645\u0646\u062f \u062d\u0645\u0644 \u0648\u06cc\u0698\u0647"},{key:"SpecialBox",label:"\u0628\u0627\u0631 \u062e\u0627\u0635"},{key:"paymentMethod",label:"\u0646\u062d\u0648\u0647 \u067e\u0631\u062f\u0627\u062e\u062a"},{key:"needsEvacuate",label:"\u0646\u06cc\u0627\u0632\u0645\u0646\u062f \u062a\u062e\u0644\u06cc\u0647"},{key:"needsLoading",label:"\u0646\u06cc\u0627\u0632\u0645\u0646\u062f \u0628\u0627\u0631\u06af\u06cc\u0631\u06cc"},{key:"needsMovement",label:"\u0646\u06cc\u0627\u0632\u0645\u0646\u062f \u062c\u0627\u0628\u062c\u0627\u06cc\u06cc"},{key:"isSuburb",label:"\u0628\u0631\u0648\u0646 \u0634\u0647\u0631\u06cc"}],name:"\u0633\u0641\u0627\u0631\u0634"}),(0,t.jsx)(C,{sx:{p:4,m:1},children:(0,t.jsx)(h.Z,{columns:L,data:I,sortModel:D,setSortModel:N,selfFilter:!0})})]})}),O&&(0,t.jsx)(_.default,{open:O,toggle:q,setChange:T,edit:!1,company:null,showUser:!1}),u&&(0,t.jsx)(_.default,{open:u,toggle:A,setChange:T,user:r,edit:!0,showUser:!1}),Z&&(0,t.jsx)(_.default,{open:Z,toggle:G,setChange:T,edit:!0,user:r,showUser:!0})]})}Z.acl={action:"read",subject:"every-page"},r.default=Z}},function(e){e.O(0,[4885,2634,3978,3438,5621,7438,6786,5307,9231,4118,9774,2888,179],(function(){return r=19159,e(e.s=r);var r}));var r=e.O();_N_E=r}]);