(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7811],{66242:function(e,n,t){"use strict";t.d(n,{Z:function(){return v}});var r=t(87462),o=t(63366),a=t(67294),i=t(93680),s=t(27192),l=t(11496),c=t(71657),u=t(55113),f=t(28979);function d(e){return(0,f.Z)("MuiCard",e)}(0,t(76087).Z)("MuiCard",["root"]);var p=t(85893);const y=["className","raised"],h=(0,l.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,n)=>n.root})((()=>({overflow:"hidden"})));var v=a.forwardRef((function(e,n){const t=(0,c.Z)({props:e,name:"MuiCard"}),{className:a,raised:l=!1}=t,u=(0,o.Z)(t,y),f=(0,r.Z)({},t,{raised:l}),v=(e=>{const{classes:n}=e;return(0,s.Z)({root:["root"]},d,n)})(f);return(0,p.jsx)(h,(0,r.Z)({className:(0,i.Z)(v.root,a),elevation:l?8:void 0,ref:n,ownerState:f},u))}))},95534:function(e,n,t){"use strict";var r;n.Z=void 0;var o=(0,((r=t(65129))&&r.__esModule?r:{default:r}).default)("M12,1L8,5H11V14H13V5H16M18,23H6C4.89,23 4,22.1 4,21V9A2,2 0 0,1 6,7H9V9H6V21H18V9H15V7H18A2,2 0 0,1 20,9V21A2,2 0 0,1 18,23Z","ExportVariant");n.Z=o},54895:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/financial-contribution",function(){return t(2126)}])},85216:function(e,n,t){"use strict";var r=t(85893),o=t(67294),a=t(54776),i=t(50657),s=t(67564),l=t(6514),c=t(31425),u=t(83321),f=t(37645),d=t(58951),p=t(48075);function y(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var h=o.forwardRef((function(e,n){return(0,r.jsx)(a.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){y(e,n,t[n])}))}return e}({direction:"up",ref:n},e))}));n.Z=function(e){var n=e.closeFunction,t=e.setOpen,o=e.open,a=e.company,y=function(){t(!1)};return(0,r.jsxs)(i.Z,{open:o,TransitionComponent:h,keepMounted:!0,onClose:y,"aria-describedby":"alert-dialog-slide-description",children:[(0,r.jsxs)(f.Z,{sx:{display:"flex",gap:2},children:[(0,r.jsx)(s.Z,{color:"warning",component:p.Z}),"\u062d\u0630\u0641 "]}),(0,r.jsx)(l.Z,{children:(0,r.jsxs)(d.Z,{id:"alert-dialog-slide-description",children:["\u0627\u06cc\u0627 \u0627\u0632 \u062d\u0630\u0641 ",a.name," \u0645\u0637\u0645\u0626\u0646 \u0647\u0633\u062a\u06cc\u062f\u061f"]})}),(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(u.Z,{onClick:function(){t(!1),n(a)},children:"\u0628\u0644\u0647"}),(0,r.jsx)(u.Z,{onClick:y,children:"\u062e\u06cc\u0631"})]})]})}},40609:function(e,n,t){"use strict";t.d(n,{Z:function(){return p}});var r=t(85893),o=t(67294),a=t(93946),i=t(46160),s=t(38333),l=t(22224),c=t(95898),u=t(3690),f=t(83296),d=t(85216);function p(e){var n=e.company,t=e.setSelectedCompany,p=e.toggleEditUserDrawer,y=e.toggleShowUserDrawer,h=e.selectedCompany,v=e.deleteFunction,b=(0,o.useState)(null),g=b[0],m=b[1],x=Boolean(g),j=(0,o.useState)(!1),w=j[0],C=j[1],O=function(){m(null)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{size:"small",onClick:function(e){m(e.currentTarget)},children:(0,r.jsx)(i.Z,{})}),(0,r.jsxs)(s.Z,{keepMounted:!0,anchorEl:g,open:x,onClose:O,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},PaperProps:{style:{minWidth:"8rem"}},children:[(0,r.jsxs)(l.Z,{onClick:function(){return t(n),y(),void O()},children:[(0,r.jsx)(c.Z,{fontSize:"small",sx:{mr:2}}),"\u0646\u0645\u0627\u06cc\u0634"]}),(0,r.jsxs)(l.Z,{onClick:function(){return t(n),p(),void O()},children:[(0,r.jsx)(u.Z,{fontSize:"small",sx:{mr:2}}),"\u0648\u06cc\u0631\u0627\u06cc\u0634"]}),(0,r.jsxs)(l.Z,{onClick:function(){return t(n),O(),void C(!0)},children:[(0,r.jsx)(f.Z,{fontSize:"small",sx:{mr:2}}),"\u062d\u0630\u0641"]})]}),(0,r.jsx)(d.Z,{open:w,setOpen:C,company:h,closeFunction:v})]})}},12300:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(85893),o=t(79172),a=t(83321),i=t(67294),s=t(95534),l=t(83461);var c=function(e){var n=e.api,t=e.headers,o=e.data,c=(0,i.useState)(!1),u=c[0],f=c[1];return(0,i.useEffect)((function(){(null===o||void 0===o?void 0:o.length)>0&&f(!0)}),[o,u]),(0,r.jsxs)(a.Z,{sx:{mr:4,mb:2},color:"secondary",variant:"outlined",startIcon:(0,r.jsx)(s.Z,{fontSize:"small"}),onClick:function(){f(!1),n()},children:["\u062e\u0631\u0648\u062c\u06cc",u?(0,r.jsx)(l.CSVDownload,{data:o,headers:t,target:"_blank"}):null]})};var u=function(e){var n=e.toggle,t=e.data,i=e.headers,s=e.api,l=e.name,u=e.noAdd,f=e.children;return(0,r.jsxs)(o.Z,{sx:{p:5,pb:0,display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"},children:[(0,r.jsx)(c,{api:s,headers:i,data:t}),(0,r.jsxs)(o.Z,{sx:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:2},children:[f,!u&&(0,r.jsxs)(a.Z,{sx:{mb:2},onClick:n,variant:"contained",children:["\u0627\u0641\u0632\u0648\u062f\u0646 ",l]})]})]})}},46893:function(e,n,t){"use strict";var r=t(85893),o=t(67294),a=t(86117),i=t(4718),s=t(50853);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){l(e,n,t[n])}))}return e}n.Z=function(e){var n=e.data,t=e.columns,l=e.sortModel,u=e.setSortModel,f=e.selfFilter,d=e.noFilter,p=(0,o.useState)(10),y=p[0],h=p[1],v=(0,o.useState)(0),b=v[0],g=v[1],m=(0,o.useState)({}),x=m[0],j=m[1],w=(0,o.useCallback)((function(e){var n,t;(j(e),0!==Object.keys(e).length&&void 0!==(null===(n=e.items[0])||void 0===n?void 0:n.value))?u(c({},l,{search:"".concat(e.items[0].columnField,"|").concat(null===(t=e.items[0])||void 0===t?void 0:t.value)})):u(c({},l,{search:""}))}),[x,j]);return(0,r.jsx)(a._,{autoHeight:!0,pagination:!0,rows:n,columns:t,pageSize:y,disableSelectionOnClick:!0,rowsPerPageOptions:[10,25,50],sx:{"& .MuiDataGrid-columnHeaders":{borderRadius:0}},paginationMode:!f&&"server",onPageSizeChange:function(e){h(e),u(c({},l,{page_size:e}))},localeText:i.T.components.MuiDataGrid.defaultProps.localeText,disableColumnSelector:!0,sortingMode:!f&&"server",onSortModelChange:function(e){var n,t,r=0!==e.length?"".concat(null===(n=e[0])||void 0===n?void 0:n.field," ").concat(null===(t=e[0])||void 0===t?void 0:t.sort):"id desc";u(c({},l,{sort_by:"".concat(r)}))},onPageChange:function(e){g(e),u(c({},l,{page:e+1}))},page:b,rowCount:50,onFilterModelChange:w,components:!d&&{Toolbar:s.M}})}},2126:function(e,n,t){"use strict";t.r(n),t.d(n,{GridContainer:function(){return g}});var r=t(85893),o=t(67294),a=t(86886),i=t(66242),s=t(15861),l=t(79172),c=t(3512),u=t(11496),f=t(55113),d=t(74931),p=t(46893),y=t(12300),h=t(40609),v=t(37769),b=t(63699),g=(0,u.ZP)(f.Z)({flexGrow:1,".MuiDataGrid-root":{border:"none"},".MuiTablePagination-displayedRows":{display:"none"}});function m(){var e=(0,o.useState)({}),n=e[0],t=e[1],u=(0,o.useState)(!1),f=u[0],m=u[1],x=(0,o.useState)(!1),j=x[0],w=x[1],C=(0,o.useState)(!1),O=C[0],_=C[1],Z=(0,o.useState)({page:1,page_size:10,sort_by:"id desc",serach:""}),k=Z[0],S=Z[1],P=(0,o.useState)([]),M=P[0],F=P[1],E=(0,o.useState)(!1),D=E[0],R=E[1],T=(0,o.useState)([]),A=T[0],U=T[1],I=function(){return _(!O)},N=function(){return m(!f)},V=function(){return w(!j)},z=function(e){d.ZP.promise((0,v.deleteUser)(e.id).then(R(!0)),{loading:"\u062f\u0631 \u062d\u0627\u0644 \u062d\u0630\u0641 \u0645\u0634\u062a\u0631\u06cc",success:"\u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u062d\u0630\u0641 \u0634\u062f",error:function(e){return e.response.data.message?e.response.data.message:"\u062e\u0637\u0627\u06cc\u06cc \u0631\u062e \u062f\u0627\u062f\u0647 \u0627\u0633\u062a"}})},H=(0,c.s)().filter((function(e){var n=e.value;return["contains"].includes(n)})),W=[{flex:1,minWidth:150,field:"start_price",filterOperators:H,headerName:"\u0627\u0632 \u0642\u06cc\u0645\u062a",sortable:!1,hideable:!1,filterable:!1,renderCell:function(e){var n=e.row;return(0,r.jsx)(l.Z,{sx:{display:"flex",alignItems:"center"},children:(0,r.jsx)(l.Z,{sx:{display:"flex",alignItems:"flex-start",flexDirection:"column"},children:(0,r.jsxs)(s.Z,{noWrap:!0,component:"a",variant:"subtitle2",sx:{color:"text.primary",textDecoration:"none"},children:[n.start_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),"\u0631\u06cc\u0627\u0644"]})})})}},{flex:1,minWidth:150,field:"end_price",filterOperators:H,headerName:"\u062a\u0627 \u0642\u06cc\u0645\u062a",sortable:!1,hideable:!1,filterable:!1,renderCell:function(e){var n=e.row;return(0,r.jsx)(l.Z,{sx:{display:"flex",alignItems:"center"},children:(0,r.jsx)(l.Z,{sx:{display:"flex",alignItems:"flex-start",flexDirection:"column"},children:(0,r.jsxs)(s.Z,{noWrap:!0,component:"a",variant:"subtitle2",sx:{color:"text.primary",textDecoration:"none"},children:[n.end_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),"\u0631\u06cc\u0627\u0644"]})})})}},{flex:1,field:"representative_percent",minWidth:150,filterOperators:H,headerName:"\u062f\u0631\u0635\u062f \u0646\u0645\u0627\u06cc\u0646\u062f\u0647",sortable:!1,hideable:!1,filterable:!1,renderCell:function(e){var n=e.row;return(0,r.jsx)(l.Z,{sx:{display:"flex",alignItems:"center"},children:(0,r.jsx)(s.Z,{noWrap:!0,sx:{color:"text.secondary",textTransform:"capitalize"},children:n.representative_percent})})}},{flex:1,field:"marketer_percent",minWidth:150,filterOperators:H,headerName:"\u062f\u0631\u0635\u062f \u0628\u0627\u0632\u0627\u0631\u06cc\u0627\u0628",sortable:!1,hideable:!1,filterable:!1,renderCell:function(e){var n=e.row;return(0,r.jsx)(l.Z,{sx:{display:"flex",alignItems:"center"},children:(0,r.jsx)(s.Z,{noWrap:!0,sx:{color:"text.secondary",textTransform:"capitalize"},children:n.marketer_percent})})}},{flex:1,minWidth:50,sortable:!1,hideable:!1,filterable:!1,field:"\u06af\u0632\u06cc\u0646\u0647 \u0647\u0627",headerName:"\u06af\u0632\u06cc\u0646\u0647 \u0647\u0627",renderCell:function(e){var o=e.row;return(0,r.jsx)(h.Z,{company:o,toggleShowUserDrawer:V,toggleEditUserDrawer:N,setSelectedCompany:t,setChange:R,selectedCompany:n,deleteFunction:z})}}];return(0,o.useEffect)((function(){U([]),(0,v.fetchData)(k).then((function(e){null===e.data?F([]):F(e.data),D&&R(!1)})).catch((function(e){var n,t,r=(null===(n=e.response)||void 0===n||null===(t=n.data)||void 0===t?void 0:t.message)?e.response.data.message:"\u062e\u0637\u0627\u06cc\u06cc \u0631\u062e \u062f\u0627\u062f\u0647 \u0627\u0633\u062a";d.ZP.error(r)}))}),[k,U,D]),(0,r.jsxs)(a.ZP,{container:!0,spacing:6,children:[(0,r.jsx)(a.ZP,{item:!0,xs:12,children:(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(y.Z,{toggle:I,data:A,api:function(){return d.ZP.promise((0,v.fetchData)(k).then((function(e){return U(e.data)})),{loading:"\u062f\u0631 \u062d\u0627\u0644 \u062f\u0627\u0646\u0644\u0648\u062f",success:"\u062f\u0627\u0646\u0644\u0648\u062f \u0627\u0646\u062c\u0627\u0645 \u0634\u062f. \u062f\u0631 \u0635\u0648\u0631\u062a \u0639\u062f\u0645 \u062f\u0627\u0646\u0644\u0648\u062f \u0627\u0632 \u062e\u0627\u0644\u06cc \u0646\u0628\u0648\u062f\u0646 \u0645\u0648\u0627\u0631\u062f \u062f\u0627\u0646\u0644\u0648\u062f \u0645\u0637\u0645\u0626\u0646 \u0634\u0648\u06cc\u062f.",error:function(e){var n,t,r,o;return(null===(n=e.response)||void 0===n||null===(t=n.data)||void 0===t?void 0:t.message)?null===(r=e.response)||void 0===r||null===(o=r.data)||void 0===o?void 0:o.message:"\u062e\u0637\u0627\u06cc\u06cc \u0631\u062e \u062f\u0627\u062f\u0647 \u0627\u0633\u062a.\u0627\u0632 \u062e\u0627\u0644\u06cc \u0646\u0628\u0648\u062f\u0646 \u0645\u0648\u0627\u0631\u062f \u062f\u0627\u0646\u0644\u0648\u062f \u0645\u0637\u0645\u0626\u0646 \u0634\u0648\u06cc\u062f."}})},headers:[{key:"start_price",label:"\u0642\u06cc\u0645\u062a \u0634\u0631\u0648\u0639"},{key:"end_price",label:"\u0642\u06cc\u0645\u062a \u067e\u0627\u06cc\u0627\u0646"},{key:"representative_percent",label:"\u062f\u0631\u0635\u062f \u0646\u0645\u0627\u06cc\u0646\u062f\u0647"},{key:"marketer_percent",label:"\u062f\u0631\u0635\u062f \u0628\u0627\u0632\u0627\u0631\u06cc\u0627\u0628"}],name:"\u0642\u06cc\u0645\u062a"}),(0,r.jsx)(g,{sx:{p:4,m:1},children:(0,r.jsx)(p.Z,{columns:W,data:M,sortModel:k,setSortModel:S,noFilter:!0})})]})}),O&&(0,r.jsx)(b.default,{open:O,toggle:I,setChange:R,edit:!1,company:null,showUser:!1}),f&&(0,r.jsx)(b.default,{open:f,toggle:N,setChange:R,user:n,edit:!0,showUser:!1}),j&&(0,r.jsx)(b.default,{open:j,toggle:V,setChange:R,edit:!0,user:n,showUser:!0})]})}m.acl={action:"read",subject:"every-page"},n.default=m},83461:function(e,n,t){e.exports=t(5090)},89469:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,o=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),a=t(67294),i=(r=a)&&r.__esModule?r:{default:r},s=t(99182),l=t(69695);var c=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={},t}return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,e),o(n,[{key:"buildURI",value:function(){return s.buildURI.apply(void 0,arguments)}},{key:"componentDidMount",value:function(){var e=this.props,n=e.data,t=e.headers,r=e.separator,o=e.enclosingCharacter,a=e.uFEFF,i=e.target,s=e.specs,l=e.replace;this.state.page=window.open(this.buildURI(n,a,t,r,o),i,s,l)}},{key:"getWindow",value:function(){return this.state.page}},{key:"render",value:function(){return null}}]),n}(i.default.Component);c.defaultProps=Object.assign(l.defaultProps,{target:"_blank"}),c.propTypes=l.propTypes,n.default=c},26425:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),i=t(67294),s=(r=i)&&r.__esModule?r:{default:r},l=t(99182),c=t(69695);var u=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.buildURI=t.buildURI.bind(t),t}return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,e),a(n,[{key:"buildURI",value:function(){return l.buildURI.apply(void 0,arguments)}},{key:"handleLegacy",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(window.navigator.msSaveOrOpenBlob){e.preventDefault();var t=this.props,r=t.data,o=t.headers,a=t.separator,i=t.filename,s=t.enclosingCharacter,c=t.uFEFF,u=n&&"function"===typeof r?r():r,f=new Blob([c?"\ufeff":"",(0,l.toCSV)(u,o,a,s)]);return window.navigator.msSaveBlob(f,i),!1}}},{key:"handleAsyncClick",value:function(e){var n=this;this.props.onClick(e,(function(t){!1!==t?n.handleLegacy(e,!0):e.preventDefault()}))}},{key:"handleSyncClick",value:function(e){!1===this.props.onClick(e)?e.preventDefault():this.handleLegacy(e)}},{key:"handleClick",value:function(){var e=this;return function(n){if("function"===typeof e.props.onClick)return e.props.asyncOnClick?e.handleAsyncClick(n):e.handleSyncClick(n);e.handleLegacy(n)}}},{key:"render",value:function(){var e=this,n=this.props,t=n.data,r=n.headers,a=n.separator,i=n.filename,l=n.uFEFF,c=n.children,u=(n.onClick,n.asyncOnClick,n.enclosingCharacter),f=function(e,n){var t={};for(var r in e)n.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}(n,["data","headers","separator","filename","uFEFF","children","onClick","asyncOnClick","enclosingCharacter"]),d="undefined"===typeof window?"":this.buildURI(t,l,r,a,u);return s.default.createElement("a",o({download:i},f,{ref:function(n){return e.link=n},target:"_self",href:d,onClick:this.handleClick()}),c)}}]),n}(s.default.Component);u.defaultProps=c.defaultProps,u.propTypes=c.propTypes,n.default=u},99182:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function r(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}var o=n.isSafari=function(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},a=n.isJsons=function(e){return Array.isArray(e)&&e.every((function(e){return"object"===("undefined"===typeof e?"undefined":t(e))&&!(e instanceof Array)}))},i=n.isArrays=function(e){return Array.isArray(e)&&e.every((function(e){return Array.isArray(e)}))},s=n.jsonsHeaders=function(e){return Array.from(e.map((function(e){return Object.keys(e)})).reduce((function(e,n){return new Set([].concat(r(e),r(n)))}),[]))},l=n.jsons2arrays=function(e,n){var t=n=n||s(e),o=n;a(n)&&(t=n.map((function(e){return e.label})),o=n.map((function(e){return e.key})));var i=e.map((function(e){return o.map((function(n){return c(n,e)}))}));return[t].concat(r(i))},c=n.getHeaderValue=function(e,n){var t=e.replace(/\[([^\]]+)]/g,".$1").split(".").reduce((function(e,n,t,r){var o=e[n];if(void 0!==o&&null!==o)return o;r.splice(1)}),n);return void 0===t?e in n?n[e]:"":t},u=n.elementOrEmpty=function(e){return"undefined"===typeof e||null===e?"":e},f=n.joiner=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:'"';return e.filter((function(e){return e})).map((function(e){return e.map((function(e){return u(e)})).map((function(e){return""+t+e+t})).join(n)})).join("\n")},d=n.arrays2csv=function(e,n,t,o){return f(n?[n].concat(r(e)):e,t,o)},p=n.jsons2csv=function(e,n,t,r){return f(l(e,n),t,r)},y=n.string2csv=function(e,n,t,r){return n?n.join(t)+"\n"+e:e.replace(/"/g,'""')},h=n.toCSV=function(e,n,t,r){if(a(e))return p(e,n,t,r);if(i(e))return d(e,n,t,r);if("string"===typeof e)return y(e,n,t);throw new TypeError('Data should be a "String", "Array of arrays" OR "Array of objects" ')};n.buildURI=function(e,n,t,r,a){var i=h(e,t,r,a),s=o()?"application/csv":"text/csv",l=new Blob([n?"\ufeff":"",i],{type:s}),c="data:"+s+";charset=utf-8,"+(n?"\ufeff":"")+i,u=window.URL||window.webkitURL;return"undefined"===typeof u.createObjectURL?c:u.createObjectURL(l)}},5090:function(e,n,t){"use strict";n.CSVDownload=void 0;var r=a(t(89469)),o=a(t(26425));function a(e){return e&&e.__esModule?e:{default:e}}n.CSVDownload=r.default,o.default},69695:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.PropsNotForwarded=n.defaultProps=n.propTypes=void 0;var r,o=t(67294),a=((r=o)&&r.__esModule,t(45697));n.propTypes={data:(0,a.oneOfType)([a.string,a.array,a.func]).isRequired,headers:a.array,target:a.string,separator:a.string,filename:a.string,uFEFF:a.bool,onClick:a.func,asyncOnClick:a.bool,enclosingCharacter:a.string},n.defaultProps={separator:",",filename:"generatedBy_react-csv.csv",uFEFF:!0,asyncOnClick:!1,enclosingCharacter:'"'},n.PropsNotForwarded=["data","headers"]}},function(e){e.O(0,[3978,3438,6786,3699,9774,2888,179],(function(){return n=54895,e(e.s=n);var n}));var n=e.O();_N_E=n}]);