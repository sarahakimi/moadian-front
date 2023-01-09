(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6341],{59209:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts/recharts",function(){return r(53234)}])},10792:function(e,t,r){"use strict";var n=r(85893),a=r(86886);t.Z=function(e){var t=e.title,r=e.subtitle;return(0,n.jsxs)(a.ZP,{item:!0,xs:12,children:[t,r||null]})}},53234:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ke}});var n=r(85893),a=r(86886),s=r(50122),i=r(15861),l=r(10792),o=r(51514),c=(0,r(11496).ZP)("div")((function(e){var t=e.theme;return{"& .recharts-cartesian-grid-vertical, & .recharts-cartesian-grid-horizontal, & .recharts-polar-grid-angle, & .recharts-polar-radius-axis, & .recharts-cartesian-axis":{"& line":{stroke:t.palette.divider}},"& .recharts-polar-grid-concentric-polygon":{stroke:t.palette.divider},"& .recharts-cartesian-axis-tick-value, & .recharts-polar-radius-axis-tick-value":{fill:t.palette.text.primary},"& .recharts-default-tooltip":{border:"none !important",boxShadow:t.shadows[2],borderRadius:t.shape.borderRadius,backgroundColor:"".concat(t.palette.background.paper," !important")},"& .recharts-custom-tooltip":{padding:t.spacing(2.5),boxShadow:t.shadows[2],borderRadius:t.shape.borderRadius,backgroundColor:t.palette.background.paper},"& .recharts-tooltip-cursor":{fill:t.palette.action.hover},"& .recharts-yAxis .recharts-cartesian-axis-ticks .recharts-cartesian-axis-tick .recharts-cartesian-axis-tick-value":{textAnchor:"rtl"===t.direction?"end":void 0},"& .recharts-active-dot .recharts-dot":{fill:t.palette.secondary.main},"& .recharts-polar-angle-axis-tick-value":{fill:t.palette.text.primary},"& .recharts-tooltip-item":{color:"".concat(t.palette.text.primary," !important")}}})),d=r(64488),x=r(67294),u=r(79172),m=r(66242),f=r(67720),h=r(50135),p=r(78445),y=r(44267),j=r(87109),g=r(32912),b=r(9198),Z=r.n(b),v=r(29009),S=r(94831),k=r(14195),w=r(3023),I=r(75358),O=r(14888),A=r(87226),P=r(48866),C=r(37142),M=r(22875);function K(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function z(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function R(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,s=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(s.push(n.value),!t||s.length!==t);i=!0);}catch(o){l=!0,a=o}finally{try{i||null==r.return||r.return()}finally{if(l)throw a}}return s}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return K(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return K(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var D=[{name:"7/12",Apple:80,Samsung:130,Oneplus:150,Motorola:210},{name:"8/12",Apple:100,Samsung:150,Oneplus:170,Motorola:380},{name:"9/12",Apple:80,Samsung:140,Oneplus:160,Motorola:220},{name:"10/12",Apple:100,Samsung:150,Oneplus:170,Motorola:380},{name:"11/12",Apple:50,Samsung:90,Oneplus:110,Motorola:150},{name:"12/12",Apple:125,Samsung:90,Oneplus:100,Motorola:65},{name:"13/12",Apple:70,Samsung:110,Oneplus:130,Motorola:210},{name:"14/12",Apple:100,Samsung:150,Oneplus:170,Motorola:380},{name:"15/12",Apple:80,Samsung:100,Oneplus:120,Motorola:180},{name:"16/12",Apple:30,Samsung:60,Oneplus:70,Motorola:110}],T=function(e){var t=e.active,r=e.payload;return t&&r?(0,n.jsxs)("div",{className:"recharts-custom-tooltip",children:[(0,n.jsx)(i.Z,{children:e.label}),(0,n.jsx)(f.Z,{}),e&&e.payload&&e.payload.map((function(e){return(0,n.jsxs)(u.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,n.jsx)(P.Z,{sx:{color:e.fill,mr:2.5,fontSize:"0.6rem"}}),(0,n.jsxs)("span",{children:[e.dataKey," : ",e.payload[e.dataKey]]})]},e.dataKey)}))]}):null},V=function(e){var t=e.direction,r=(0,x.useState)(null),a=r[0],s=r[1],l=(0,x.useState)(new Date),o=l[0],c=l[1],d=(0,x.forwardRef)((function(e,t){var r=(0,g.Z)(e.start,"MM/dd/yyyy"),a=null!==e.end?" - ".concat((0,g.Z)(e.end,"MM/dd/yyyy")):null,s="".concat(r).concat(null!==a?a:"");return(0,n.jsx)(h.Z,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){z(e,t,r[t])}))}return e}({},e,{size:"small",value:s,inputRef:t,InputProps:{startAdornment:(0,n.jsx)(j.Z,{position:"start",children:(0,n.jsx)(C.Z,{})}),endAdornment:(0,n.jsx)(j.Z,{position:"end",children:(0,n.jsx)(M.Z,{})})}}))}));return(0,n.jsxs)(m.Z,{children:[(0,n.jsx)(p.Z,{title:"Brand Turnover",titleTypographyProps:{variant:"h6"},sx:{flexDirection:["column","row"],alignItems:["flex-start","center"],"& .MuiCardHeader-action":{mb:0},"& .MuiCardHeader-content":{mb:[2,0]}},action:(0,n.jsx)(Z(),{selectsRange:!0,id:"recharts-bar",endDate:a,selected:o,startDate:o,onChange:function(e){var t=R(e,2),r=t[0],n=t[1];c(r),s(n)},placeholderText:"Click to select a date",customInput:(0,n.jsx)(d,{start:o,end:a})})}),(0,n.jsxs)(y.Z,{children:[(0,n.jsxs)(u.Z,{sx:{mb:4,display:"flex",flexWrap:"wrap"},children:[(0,n.jsxs)(u.Z,{sx:{mr:6,display:"flex",alignItems:"center"},children:[(0,n.jsx)(P.Z,{sx:{mr:1.5,fontSize:"0.75rem",color:"#826af9"}}),(0,n.jsx)(i.Z,{children:"Apple"})]}),(0,n.jsxs)(u.Z,{sx:{mr:6,display:"flex",alignItems:"center"},children:[(0,n.jsx)(P.Z,{sx:{mr:1.5,fontSize:"0.75rem",color:"#9f87ff"}}),(0,n.jsx)(i.Z,{children:"Samsung"})]}),(0,n.jsxs)(u.Z,{sx:{mr:6,display:"flex",alignItems:"center"},children:[(0,n.jsx)(P.Z,{sx:{mr:1.5,fontSize:"0.75rem",color:"#d2b0ff"}}),(0,n.jsx)(i.Z,{children:"Oneplus"})]}),(0,n.jsxs)(u.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,n.jsx)(P.Z,{sx:{mr:1.5,fontSize:"0.75rem",color:"#f8d3ff"}}),(0,n.jsx)(i.Z,{children:"Motorola"})]})]}),(0,n.jsx)(u.Z,{sx:{height:350},children:(0,n.jsx)(v.h,{children:(0,n.jsxs)(S.v,{height:350,data:D,barSize:15,style:{direction:t},margin:{left:-20},children:[(0,n.jsx)(k.q,{strokeDasharray:"3 3"}),(0,n.jsx)(w.K,{dataKey:"name",reversed:"rtl"===t}),(0,n.jsx)(I.B,{orientation:"rtl"===t?"right":"left"}),(0,n.jsx)(O.u,{content:T}),(0,n.jsx)(A.$,{dataKey:"Apple",stackId:"a",fill:"#826af9"}),(0,n.jsx)(A.$,{dataKey:"Samsung",stackId:"a",fill:"#9f87ff"}),(0,n.jsx)(A.$,{dataKey:"Oneplus",stackId:"a",fill:"#d2b0ff"}),(0,n.jsx)(A.$,{dataKey:"Motorola",stackId:"a",fill:"#f8d3ff",radius:[15,15,0,0]})]})})})]})]})},_=r(1752),E=r(46208),H=r(43815),N=[{name:"R&D",value:50,color:"#00d4bd"},{name:"Operational",value:85,color:"#ffe700"},{name:"Networking",value:16,color:"#FFA1A1"},{name:"Hiring",value:50,color:"#826bf8"}],B=Math.PI/180,F=function(e){var t=e.cx,r=e.cy,a=e.midAngle,s=e.innerRadius,i=e.outerRadius,l=e.percent,o=s+.5*(i-s),c=t+o*Math.cos(-a*B),d=r+o*Math.sin(-a*B);return(0,n.jsx)("text",{x:c,y:d,fill:"#fff",textAnchor:"middle",dominantBaseline:"central",children:"".concat((100*l).toFixed(0),"%")})},$=function(){return(0,n.jsxs)(m.Z,{children:[(0,n.jsx)(p.Z,{title:"Expense Ratio",titleTypographyProps:{variant:"h6"},subheader:"Spending on various categories",subheaderTypographyProps:{variant:"caption",sx:{color:"text.disabled"}}}),(0,n.jsxs)(y.Z,{children:[(0,n.jsx)(u.Z,{sx:{height:350},children:(0,n.jsx)(v.h,{children:(0,n.jsxs)(_.u,{height:350,style:{direction:"ltr"},children:[(0,n.jsx)(E.b,{data:N,innerRadius:80,dataKey:"value",label:F,labelLine:!1,children:N.map((function(e,t){return(0,n.jsx)(H.b,{fill:e.color},"cell-".concat(t))}))}),(0,n.jsx)(O.u,{})]})})}),(0,n.jsxs)(u.Z,{sx:{display:"flex",flexWrap:"wrap",mb:4,justifyContent:"center"},children:[(0,n.jsxs)(u.Z,{sx:{mr:6,display:"flex",alignItems:"center"},children:[(0,n.jsx)(P.Z,{sx:{mr:1.5,fontSize:"0.75rem",color:"#00d4bd"}}),(0,n.jsx)(i.Z,{children:"R&D"})]}),(0,n.jsxs)(u.Z,{sx:{mr:6,display:"flex",alignItems:"center"},children:[(0,n.jsx)(P.Z,{sx:{mr:1.5,fontSize:"0.75rem",color:"#ffe700"}}),(0,n.jsx)(i.Z,{children:"Operational"})]}),(0,n.jsxs)(u.Z,{sx:{mr:6,display:"flex",alignItems:"center"},children:[(0,n.jsx)(P.Z,{sx:{mr:1.5,fontSize:"0.75rem",color:"#FFA1A1"}}),(0,n.jsx)(i.Z,{children:"Networking"})]}),(0,n.jsxs)(u.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,n.jsx)(P.Z,{sx:{mr:1.5,fontSize:"0.75rem",color:"#826bf8"}}),(0,n.jsx)(i.Z,{children:"Hiring"})]})]})]})]})},W=r(98687),q=r(56880),U=r(26317),X=r(7071),G=[{pv:280,name:"7/12"},{pv:200,name:"8/12"},{pv:220,name:"9/12"},{pv:180,name:"10/12"},{pv:270,name:"11/12"},{pv:250,name:"12/12"},{pv:70,name:"13/12"},{pv:90,name:"14/12"},{pv:200,name:"15/12"},{pv:150,name:"16/12"},{pv:160,name:"17/12"},{pv:100,name:"18/12"},{pv:150,name:"19/12"},{pv:100,name:"20/12"},{pv:50,name:"21/12"}];function L(e){var t=e.active,r=e.payload;return t&&r?(0,n.jsx)("div",{className:"recharts-custom-tooltip",children:(0,n.jsx)("span",{children:"".concat(r[0].value,"%")})}):null}var J=function(e){var t=e.direction;return(0,n.jsxs)(m.Z,{children:[(0,n.jsx)(p.Z,{title:"Balance",titleTypographyProps:{variant:"h6"},subheader:"Commercial networks & enterprises",subheaderTypographyProps:{variant:"caption",sx:{color:"text.disabled"}},sx:{flexDirection:["column","row"],alignItems:["flex-start","center"],"& .MuiCardHeader-action":{mb:0},"& .MuiCardHeader-content":{mb:[2,0]}},action:(0,n.jsxs)(u.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,n.jsx)(i.Z,{variant:"h6",sx:{mr:5},children:"$221,267"}),(0,n.jsx)(X.Z,{skin:"light",color:"success",sx:{fontWeight:500,borderRadius:1,fontSize:"0.875rem"},label:(0,n.jsxs)(u.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,n.jsx)(U.Z,{sx:{fontSize:"1rem",mr:1}}),(0,n.jsx)("span",{children:"22%"})]})})]})}),(0,n.jsx)(y.Z,{children:(0,n.jsx)(u.Z,{sx:{height:350},children:(0,n.jsx)(v.h,{children:(0,n.jsxs)(W.w,{height:350,data:G,style:{direction:t},margin:{left:-20},children:[(0,n.jsx)(k.q,{}),(0,n.jsx)(w.K,{dataKey:"name",reversed:"rtl"===t}),(0,n.jsx)(I.B,{orientation:"rtl"===t?"right":"left"}),(0,n.jsx)(O.u,{content:L}),(0,n.jsx)(q.x,{dataKey:"pv",stroke:"#ff9f43",strokeWidth:3})]})})})})]})},Q=r(46888),Y=r(86108);function ee(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function te(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function re(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,s=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(s.push(n.value),!t||s.length!==t);i=!0);}catch(o){l=!0,a=o}finally{try{i||null==r.return||r.return()}finally{if(l)throw a}}return s}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return ee(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ee(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var ne=[{name:"7/12",Sales:20,Clicks:60,Visits:100},{name:"8/12",Sales:40,Clicks:80,Visits:120},{name:"9/12",Sales:30,Clicks:70,Visits:90},{name:"10/12",Sales:70,Clicks:110,Visits:170},{name:"11/12",Sales:40,Clicks:80,Visits:130},{name:"12/12",Sales:60,Clicks:80,Visits:160},{name:"13/12",Sales:50,Clicks:100,Visits:140},{name:"14/12",Sales:140,Clicks:90,Visits:240},{name:"15/12",Sales:120,Clicks:180,Visits:220},{name:"16/12",Sales:100,Clicks:160,Visits:180},{name:"17/12",Sales:140,Clicks:140,Visits:270},{name:"18/12",Sales:180,Clicks:200,Visits:280},{name:"19/12",Sales:220,Clicks:220,Visits:375}],ae=function(e){var t=e.active,r=e.payload;return t&&r?(0,n.jsxs)("div",{className:"recharts-custom-tooltip",children:[(0,n.jsx)(i.Z,{children:e.label}),(0,n.jsx)(f.Z,{}),e&&e.payload&&e.payload.map((function(e){return(0,n.jsxs)(u.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,n.jsx)(P.Z,{sx:{color:e.fill,mr:2.5,fontSize:"0.6rem"}}),(0,n.jsxs)("span",{children:[e.dataKey," : ",e.payload[e.dataKey]]})]},e.dataKey)}))]}):null},se=function(e){var t=e.direction,r=(0,x.useState)(null),a=r[0],s=r[1],l=(0,x.useState)(new Date),o=l[0],c=l[1],d=(0,x.forwardRef)((function(e,t){var r=(0,g.Z)(e.start,"MM/dd/yyyy"),a=null!==e.end?" - ".concat((0,g.Z)(e.end,"MM/dd/yyyy")):null,s="".concat(r).concat(null!==a?a:"");return(0,n.jsx)(h.Z,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){te(e,t,r[t])}))}return e}({},e,{size:"small",value:s,inputRef:t,InputProps:{startAdornment:(0,n.jsx)(j.Z,{position:"start",children:(0,n.jsx)(C.Z,{})}),endAdornment:(0,n.jsx)(j.Z,{position:"end",children:(0,n.jsx)(M.Z,{})})}}))}));return(0,n.jsxs)(m.Z,{children:[(0,n.jsx)(p.Z,{title:"Website Data",titleTypographyProps:{variant:"h6"},sx:{flexDirection:["column","row"],alignItems:["flex-start","center"],"& .MuiCardHeader-action":{mb:0},"& .MuiCardHeader-content":{mb:[2,0]}},action:(0,n.jsx)(Z(),{selectsRange:!0,endDate:a,id:"recharts-area",selected:o,startDate:o,onChange:function(e){var t=re(e,2),r=t[0],n=t[1];c(r),s(n)},placeholderText:"Click to select a date",customInput:(0,n.jsx)(d,{start:o,end:a})})}),(0,n.jsxs)(y.Z,{children:[(0,n.jsxs)(u.Z,{sx:{display:"flex",mb:4},children:[(0,n.jsxs)(u.Z,{sx:{mr:6,display:"flex",alignItems:"center"},children:[(0,n.jsx)(P.Z,{sx:{mr:1.5,fontSize:"0.75rem",color:"rgb(115, 103, 240)"}}),(0,n.jsx)(i.Z,{children:"Click"})]}),(0,n.jsxs)(u.Z,{sx:{mr:6,display:"flex",alignItems:"center"},children:[(0,n.jsx)(P.Z,{sx:{mr:1.5,fontSize:"0.75rem",color:"rgba(115, 103, 240, .5)"}}),(0,n.jsx)(i.Z,{children:"Sales"})]}),(0,n.jsxs)(u.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,n.jsx)(P.Z,{sx:{mr:1.5,fontSize:"0.75rem",color:"rgba(115, 103, 240, .2)"}}),(0,n.jsx)(i.Z,{children:"Visits"})]})]}),(0,n.jsx)(u.Z,{sx:{height:350},children:(0,n.jsx)(v.h,{children:(0,n.jsxs)(Q.T,{height:350,data:ne,style:{direction:t},margin:{left:-20},children:[(0,n.jsx)(k.q,{}),(0,n.jsx)(w.K,{dataKey:"name",reversed:"rtl"===t}),(0,n.jsx)(I.B,{orientation:"rtl"===t?"right":"left"}),(0,n.jsx)(O.u,{content:ae}),(0,n.jsx)(Y.u,{dataKey:"Clicks",stackId:"Clicks",stroke:"0",fill:"rgb(115, 103, 240)"}),(0,n.jsx)(Y.u,{dataKey:"Sales",stackId:"Sales",stroke:"0",fill:"rgba(115, 103, 240, .5)"}),(0,n.jsx)(Y.u,{dataKey:"Visits",stackId:"Visits",stroke:"0",fill:"rgba(115, 103, 240, .2)"})]})})})]})]})},ie=r(98321),le=r(90508),oe=r(39277),ce=r(81508),de=r(50294),xe=[{subject:"Battery","iPhone 11":41,"Samsung s20":65},{subject:"Brand","iPhone 11":64,"Samsung s20":46},{subject:"Camera","iPhone 11":81,"Samsung s20":42},{subject:"Memory","iPhone 11":60,"Samsung s20":25},{subject:"Storage","iPhone 11":42,"Samsung s20":58},{subject:"Display","iPhone 11":42,"Samsung s20":63},{subject:"OS","iPhone 11":33,"Samsung s20":76},{subject:"Price","iPhone 11":23,"Samsung s20":43}],ue=function(e){var t=e.active,r=e.payload;return t&&r?(0,n.jsxs)("div",{className:"recharts-custom-tooltip",children:[(0,n.jsx)(i.Z,{children:e.label}),(0,n.jsx)(f.Z,{}),e&&e.payload&&e.payload.map((function(e){return(0,n.jsxs)(u.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,n.jsx)(P.Z,{sx:{color:e.fill,mr:2.5,fontSize:"0.6rem"}}),(0,n.jsxs)("span",{children:[e.dataKey,": ",e.payload[e.dataKey]]})]},e.dataKey)}))]}):null},me=function(){return(0,n.jsxs)(m.Z,{children:[(0,n.jsx)(p.Z,{title:"Mobile Comparison",titleTypographyProps:{variant:"h6"}}),(0,n.jsxs)(y.Z,{children:[(0,n.jsx)(u.Z,{sx:{height:350},children:(0,n.jsx)(v.h,{children:(0,n.jsxs)(ie.H,{cx:"50%",cy:"50%",height:350,data:xe,style:{direction:"ltr"},children:[(0,n.jsx)(le.n,{}),(0,n.jsx)(oe.I,{dataKey:"subject"}),(0,n.jsx)(ce.S,{}),(0,n.jsx)(O.u,{content:ue}),(0,n.jsx)(de.F,{dataKey:"iPhone 11",stroke:"#fde802",fill:"#fde802",fillOpacity:1}),(0,n.jsx)(de.F,{dataKey:"Samsung s20",stroke:"#9b88fa",fill:"#9b88fa",fillOpacity:.8})]})})}),(0,n.jsxs)(u.Z,{sx:{display:"flex",mb:4,justifyContent:"center"},children:[(0,n.jsxs)(u.Z,{sx:{mr:6,display:"flex",alignItems:"center"},children:[(0,n.jsx)(P.Z,{sx:{mr:1.5,fontSize:"0.75rem",color:"#fde802"}}),(0,n.jsx)(i.Z,{children:"iPhone 11"})]}),(0,n.jsxs)(u.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,n.jsx)(P.Z,{sx:{mr:1.5,fontSize:"0.75rem",color:"#9b88fa"}}),(0,n.jsx)(i.Z,{children:"Samsung s20"})]})]})]})]})},fe=r(2734),he=r(57478),pe=r(39746);function ye(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function je(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ge(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,s=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(s.push(n.value),!t||s.length!==t);i=!0);}catch(o){l=!0,a=o}finally{try{i||null==r.return||r.return()}finally{if(l)throw a}}return s}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return ye(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ye(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var be=[{x:5.4,y:170},{x:5.4,y:100},{x:5.7,y:110},{x:5.9,y:150},{x:6,y:200},{x:6.3,y:170},{x:5.7,y:140},{x:5.9,y:130},{x:7,y:150},{x:8,y:120},{x:9,y:170},{x:10,y:190},{x:11,y:220},{x:12,y:170},{x:13,y:230}],Ze=[{x:14,y:220},{x:15,y:280},{x:16,y:230},{x:18,y:320},{x:17.5,y:280},{x:19,y:250},{x:20,y:350},{x:20.5,y:320},{x:20,y:320},{x:19,y:280},{x:17,y:280},{x:22,y:300},{x:18,y:120}],ve=[{x:14,y:290},{x:13,y:190},{x:20,y:220},{x:21,y:350},{x:21.5,y:290},{x:22,y:220},{x:23,y:140},{x:19,y:400},{x:20,y:200},{x:22,y:90},{x:20,y:120}],Se=function(e){var t=e.direction,r=(0,x.useState)(null),a=r[0],s=r[1],l=(0,x.useState)(new Date),o=l[0],c=l[1],d=(0,fe.Z)(),f=(0,x.forwardRef)((function(e,t){var r=(0,g.Z)(e.start,"MM/dd/yyyy"),a=null!==e.end?" - ".concat((0,g.Z)(e.end,"MM/dd/yyyy")):null,s="".concat(r).concat(null!==a?a:"");return(0,n.jsx)(h.Z,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){je(e,t,r[t])}))}return e}({},e,{size:"small",value:s,inputRef:t,InputProps:{startAdornment:(0,n.jsx)(j.Z,{position:"start",children:(0,n.jsx)(C.Z,{})}),endAdornment:(0,n.jsx)(j.Z,{position:"end",children:(0,n.jsx)(M.Z,{})})}}))}));return(0,n.jsxs)(m.Z,{children:[(0,n.jsx)(p.Z,{title:"Framework Usage",titleTypographyProps:{variant:"h6"},sx:{flexDirection:["column","row"],alignItems:["flex-start","center"],"& .MuiCardHeader-action":{mb:0},"& .MuiCardHeader-content":{mb:[2,0]}},action:(0,n.jsx)(Z(),{selectsRange:!0,endDate:a,selected:o,id:"recharts-scatter",startDate:o,onChange:function(e){var t=ge(e,2),r=t[0],n=t[1];c(r),s(n)},placeholderText:"Click to select a date",customInput:(0,n.jsx)(f,{start:o,end:a})})}),(0,n.jsxs)(y.Z,{children:[(0,n.jsxs)(u.Z,{sx:{display:"flex",mb:4},children:[(0,n.jsxs)(u.Z,{sx:{mr:6,display:"flex",alignItems:"center"},children:[(0,n.jsx)(P.Z,{sx:{mr:1.5,fontSize:"0.75rem",color:"primary.main"}}),(0,n.jsx)(i.Z,{children:"React"})]}),(0,n.jsxs)(u.Z,{sx:{mr:6,display:"flex",alignItems:"center"},children:[(0,n.jsx)(P.Z,{sx:{mr:1.5,fontSize:"0.75rem",color:"success.main"}}),(0,n.jsx)(i.Z,{children:"Vue"})]}),(0,n.jsxs)(u.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,n.jsx)(P.Z,{sx:{mr:1.5,fontSize:"0.75rem",color:"error.main"}}),(0,n.jsx)(i.Z,{children:"Angular"})]})]}),(0,n.jsx)(u.Z,{sx:{height:350},children:(0,n.jsx)(v.h,{children:(0,n.jsxs)(he.G,{height:350,style:{direction:t},margin:{left:-20},children:[(0,n.jsx)(k.q,{}),(0,n.jsx)(w.K,{type:"number",dataKey:"x",reversed:"rtl"===t}),(0,n.jsx)(I.B,{type:"number",dataKey:"y",orientation:"rtl"===t?"right":"left"}),(0,n.jsx)(pe.b,{name:"Angular",data:be,fill:d.palette.error.main}),(0,n.jsx)(pe.b,{name:"Vue",data:Ze,fill:d.palette.success.main}),(0,n.jsx)(pe.b,{name:"React",data:ve,fill:d.palette.primary.main})]})})})]})]})};r(95828);var ke=function(){var e=(0,o.r)().settings;return(0,n.jsx)(c,{children:(0,n.jsx)(d.Z,{children:(0,n.jsxs)(a.ZP,{container:!0,spacing:6,children:[(0,n.jsx)(l.Z,{title:(0,n.jsx)(i.Z,{variant:"h5",children:(0,n.jsx)(s.Z,{href:"https://github.com/recharts/recharts",target:"_blank",children:"Recharts"})}),subtitle:(0,n.jsx)(i.Z,{variant:"body2",children:"Redefined chart library built with React and D3"})}),(0,n.jsx)(a.ZP,{item:!0,xs:12,children:(0,n.jsx)(J,{direction:e.direction})}),(0,n.jsx)(a.ZP,{item:!0,xs:12,children:(0,n.jsx)(se,{direction:e.direction})}),(0,n.jsx)(a.ZP,{item:!0,xs:12,children:(0,n.jsx)(Se,{direction:e.direction})}),(0,n.jsx)(a.ZP,{item:!0,xs:12,children:(0,n.jsx)(V,{direction:e.direction})}),(0,n.jsx)(a.ZP,{item:!0,xs:12,md:6,children:(0,n.jsx)(me,{})}),(0,n.jsx)(a.ZP,{item:!0,xs:12,md:6,children:(0,n.jsx)($,{})})]})})})}}},function(e){e.O(0,[1524,4661,8960,1551,9774,2888,179],(function(){return t=59209,e(e.s=t);var t}));var t=e.O();_N_E=t}]);