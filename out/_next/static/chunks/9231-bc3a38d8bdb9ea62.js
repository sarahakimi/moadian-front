(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9231],{44267:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(87462),o=n(63366),a=n(67294),i=n(93680),u=n(27192),c=n(11496),f=n(71657),s=n(28979);function l(e){return(0,s.Z)("MuiCardContent",e)}(0,n(76087).Z)("MuiCardContent",["root"]);var p=n(85893);const d=["className","component"],y=(0,c.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}})));var v=a.forwardRef((function(e,t){const n=(0,f.Z)({props:e,name:"MuiCardContent"}),{className:a,component:c="div"}=n,s=(0,o.Z)(n,d),v=(0,r.Z)({},n,{component:c}),b=(e=>{const{classes:t}=e;return(0,u.Z)({root:["root"]},l,t)})(v);return(0,p.jsx)(y,(0,r.Z)({as:c,className:(0,i.Z)(b.root,a),ownerState:v,ref:t},s))}))},35823:function(e){e.exports=function(e,t,n,r){var o=new Blob("undefined"!==typeof r?[r,e]:[e],{type:n||"application/octet-stream"});if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(o,t);else{var a=window.URL&&window.URL.createObjectURL?window.URL.createObjectURL(o):window.webkitURL.createObjectURL(o),i=document.createElement("a");i.style.display="none",i.href=a,i.setAttribute("download",t),"undefined"===typeof i.download&&i.setAttribute("target","_blank"),document.body.appendChild(i),i.click(),setTimeout((function(){document.body.removeChild(i),window.URL.revokeObjectURL(a)}),200)}}},95534:function(e,t,n){"use strict";var r;t.Z=void 0;var o=(0,((r=n(65129))&&r.__esModule?r:{default:r}).default)("M12,1L8,5H11V14H13V5H16M18,23H6C4.89,23 4,22.1 4,21V9A2,2 0 0,1 6,7H9V9H6V21H18V9H15V7H18A2,2 0 0,1 20,9V21A2,2 0 0,1 18,23Z","ExportVariant");t.Z=o},83461:function(e,t,n){e.exports=n(5090)},89469:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(67294),i=(r=a)&&r.__esModule?r:{default:r},u=n(99182),c=n(69695);var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"buildURI",value:function(){return u.buildURI.apply(void 0,arguments)}},{key:"componentDidMount",value:function(){var e=this.props,t=e.data,n=e.headers,r=e.separator,o=e.enclosingCharacter,a=e.uFEFF,i=e.target,u=e.specs,c=e.replace;this.state.page=window.open(this.buildURI(t,a,n,r,o),i,u,c)}},{key:"getWindow",value:function(){return this.state.page}},{key:"render",value:function(){return null}}]),t}(i.default.Component);f.defaultProps=Object.assign(c.defaultProps,{target:"_blank"}),f.propTypes=c.propTypes,t.default=f},26425:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(67294),u=(r=i)&&r.__esModule?r:{default:r},c=n(99182),f=n(69695);var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.buildURI=n.buildURI.bind(n),n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"buildURI",value:function(){return c.buildURI.apply(void 0,arguments)}},{key:"handleLegacy",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(window.navigator.msSaveOrOpenBlob){e.preventDefault();var n=this.props,r=n.data,o=n.headers,a=n.separator,i=n.filename,u=n.enclosingCharacter,f=n.uFEFF,s=t&&"function"===typeof r?r():r,l=new Blob([f?"\ufeff":"",(0,c.toCSV)(s,o,a,u)]);return window.navigator.msSaveBlob(l,i),!1}}},{key:"handleAsyncClick",value:function(e){var t=this;this.props.onClick(e,(function(n){!1!==n?t.handleLegacy(e,!0):e.preventDefault()}))}},{key:"handleSyncClick",value:function(e){!1===this.props.onClick(e)?e.preventDefault():this.handleLegacy(e)}},{key:"handleClick",value:function(){var e=this;return function(t){if("function"===typeof e.props.onClick)return e.props.asyncOnClick?e.handleAsyncClick(t):e.handleSyncClick(t);e.handleLegacy(t)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.data,r=t.headers,a=t.separator,i=t.filename,c=t.uFEFF,f=t.children,s=(t.onClick,t.asyncOnClick,t.enclosingCharacter),l=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["data","headers","separator","filename","uFEFF","children","onClick","asyncOnClick","enclosingCharacter"]),p="undefined"===typeof window?"":this.buildURI(n,c,r,a,s);return u.default.createElement("a",o({download:i},l,{ref:function(t){return e.link=t},target:"_self",href:p,onClick:this.handleClick()}),f)}}]),t}(u.default.Component);s.defaultProps=f.defaultProps,s.propTypes=f.propTypes,t.default=s},99182:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var o=t.isSafari=function(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},a=t.isJsons=function(e){return Array.isArray(e)&&e.every((function(e){return"object"===("undefined"===typeof e?"undefined":n(e))&&!(e instanceof Array)}))},i=t.isArrays=function(e){return Array.isArray(e)&&e.every((function(e){return Array.isArray(e)}))},u=t.jsonsHeaders=function(e){return Array.from(e.map((function(e){return Object.keys(e)})).reduce((function(e,t){return new Set([].concat(r(e),r(t)))}),[]))},c=t.jsons2arrays=function(e,t){var n=t=t||u(e),o=t;a(t)&&(n=t.map((function(e){return e.label})),o=t.map((function(e){return e.key})));var i=e.map((function(e){return o.map((function(t){return f(t,e)}))}));return[n].concat(r(i))},f=t.getHeaderValue=function(e,t){var n=e.replace(/\[([^\]]+)]/g,".$1").split(".").reduce((function(e,t,n,r){var o=e[t];if(void 0!==o&&null!==o)return o;r.splice(1)}),t);return void 0===n?e in t?t[e]:"":n},s=t.elementOrEmpty=function(e){return"undefined"===typeof e||null===e?"":e},l=t.joiner=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:'"';return e.filter((function(e){return e})).map((function(e){return e.map((function(e){return s(e)})).map((function(e){return""+n+e+n})).join(t)})).join("\n")},p=t.arrays2csv=function(e,t,n,o){return l(t?[t].concat(r(e)):e,n,o)},d=t.jsons2csv=function(e,t,n,r){return l(c(e,t),n,r)},y=t.string2csv=function(e,t,n,r){return t?t.join(n)+"\n"+e:e.replace(/"/g,'""')},v=t.toCSV=function(e,t,n,r){if(a(e))return d(e,t,n,r);if(i(e))return p(e,t,n,r);if("string"===typeof e)return y(e,t,n);throw new TypeError('Data should be a "String", "Array of arrays" OR "Array of objects" ')};t.buildURI=function(e,t,n,r,a){var i=v(e,n,r,a),u=o()?"application/csv":"text/csv",c=new Blob([t?"\ufeff":"",i],{type:u}),f="data:"+u+";charset=utf-8,"+(t?"\ufeff":"")+i,s=window.URL||window.webkitURL;return"undefined"===typeof s.createObjectURL?f:s.createObjectURL(c)}},5090:function(e,t,n){"use strict";t.CSVDownload=void 0;var r=a(n(89469)),o=a(n(26425));function a(e){return e&&e.__esModule?e:{default:e}}t.CSVDownload=r.default,o.default},69695:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PropsNotForwarded=t.defaultProps=t.propTypes=void 0;var r,o=n(67294),a=((r=o)&&r.__esModule,n(45697));t.propTypes={data:(0,a.oneOfType)([a.string,a.array,a.func]).isRequired,headers:a.array,target:a.string,separator:a.string,filename:a.string,uFEFF:a.bool,onClick:a.func,asyncOnClick:a.bool,enclosingCharacter:a.string},t.defaultProps={separator:",",filename:"generatedBy_react-csv.csv",uFEFF:!0,asyncOnClick:!1,enclosingCharacter:'"'},t.PropsNotForwarded=["data","headers"]}}]);