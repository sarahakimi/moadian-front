(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2712],{70896:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/apps/invoice/add",function(){return r(71045)}])},50882:function(e,n,r){"use strict";var t=r(85893);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}n.Z=function(e){for(var n=e.count,r=e.tag,s=e.children,a=r||"div",l=[],o=0;o<n;o++)l.push(s(o));return(0,t.jsx)(a,function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){i(e,n,r[n])}))}return e}({},e,{children:l}))}},71045:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return xe},default:function(){return ue}});var t=r(85893),i=r(67294),s=r(86886),a=r(66242),l=r(7906),o=r(11057),c=r(67720),d=r(34386),x=r(68509),u=r(57922),m=r(295),h=r(50135),p=r(93946),j=r(15861),f=r(47312),Z=r(79172),y=r(87109),v=r(72882),b=r(11496),g=r(41796),C=r(2734),w=r(18360),P=r(18972),S=r(98102),I=r(44267),A=r(65834),_=r(42734),k=r(9198),D=r.n(k),O=r(30152),B=r(50882),z=r(64488);function W(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function N(){return N=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},N.apply(this,arguments)}function T(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){W(e,n,r[n])}))}return e}var U=(0,i.forwardRef)((function(e,n){var r=N({},e);return(0,t.jsx)(h.Z,T({size:"small",inputRef:n,sx:{width:{sm:"250px",xs:"170px"},"& .MuiInputBase-input":{color:"text.secondary"}}},r))})),q=(0,b.ZP)(S.Z)((function(e){var n=e.theme;return{borderBottom:0,padding:"".concat(n.spacing(1,0)," !important")}})),E=(0,b.ZP)(Z.Z)((function(e){return{display:"flex",alignItems:"center",justifyContent:"space-between","&:not(:last-of-type)":{marginBottom:e.theme.spacing(2)}}})),M=(0,b.ZP)(s.ZP)((function(e){var n=e.theme;return W({paddingRight:0,display:"flex",position:"relative",borderRadius:n.shape.borderRadius,border:"1px solid ".concat(n.palette.divider),"& .col-title":{top:"-1.5rem",position:"absolute"},"& .MuiInputBase-input":{color:n.palette.text.secondary}},n.breakpoints.down("lg"),{"& .col-title":{top:"0",position:"relative"}})})),R=(0,b.ZP)(I.Z)((function(e){var n=e.theme;return{paddingTop:n.spacing(12),paddingBottom:n.spacing(5.5),"& .repeater-wrapper + .repeater-wrapper":{marginTop:n.spacing(12)}}})),F=(0,b.ZP)(Z.Z)((function(e){var n=e.theme;return{display:"flex",flexDirection:"column",justifyContent:"flex-start",padding:n.spacing(2,1),borderLeft:"1px solid ".concat(n.palette.divider)}})),H=(0,b.ZP)(P.Z)((function(e){var n=e.theme;return{backgroundColor:"transparent !important","&:hover":{backgroundColor:"".concat((0,g.Fq)(n.palette.success.main,.1)," !important")}}})),V=new Date,Q=V.setDate(V.getDate()+7);var $=function(e){var n=e.clients,r=e.invoiceNumber,b=e.selectedClient,g=e.setSelectedClient,S=e.toggleAddCustomerDrawer,k=(0,i.useState)(1),W=k[0],N=k[1],V=(0,i.useState)(""),$=V[0],G=V[1],X=(0,i.useState)(new Date),K=X[0],L=X[1],Y=(0,i.useState)(new Date(Q)),J=Y[0],ee=Y[1],ne=(0,C.Z)(),re=function(e){e.preventDefault(),e.target.closest(".repeater-wrapper").remove()};return(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(I.Z,{children:(0,t.jsxs)(s.ZP,{container:!0,children:[(0,t.jsx)(s.ZP,{item:!0,xl:6,xs:12,sx:{mb:{xl:0,xs:4}},children:(0,t.jsxs)(Z.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,t.jsxs)(Z.Z,{sx:{mb:6,display:"flex",alignItems:"center"},children:[(0,t.jsxs)("svg",{width:40,fill:"none",height:22,viewBox:"0 0 268 150",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("rect",{rx:"25.1443",width:"50.2886",height:"143.953",fill:ne.palette.primary.main,transform:"matrix(-0.865206 0.501417 0.498585 0.866841 195.571 0)"}),(0,t.jsx)("rect",{rx:"25.1443",width:"50.2886",height:"143.953",fillOpacity:"0.4",fill:"url(#paint0_linear_7821_79167)",transform:"matrix(-0.865206 0.501417 0.498585 0.866841 196.084 0)"}),(0,t.jsx)("rect",{rx:"25.1443",width:"50.2886",height:"143.953",fill:ne.palette.primary.main,transform:"matrix(0.865206 0.501417 -0.498585 0.866841 173.147 0)"}),(0,t.jsx)("rect",{rx:"25.1443",width:"50.2886",height:"143.953",fill:ne.palette.primary.main,transform:"matrix(-0.865206 0.501417 0.498585 0.866841 94.1973 0)"}),(0,t.jsx)("rect",{rx:"25.1443",width:"50.2886",height:"143.953",fillOpacity:"0.4",fill:"url(#paint1_linear_7821_79167)",transform:"matrix(-0.865206 0.501417 0.498585 0.866841 94.1973 0)"}),(0,t.jsx)("rect",{rx:"25.1443",width:"50.2886",height:"143.953",fill:ne.palette.primary.main,transform:"matrix(0.865206 0.501417 -0.498585 0.866841 71.7728 0)"}),(0,t.jsxs)("defs",{children:[(0,t.jsxs)("linearGradient",{y1:"0",x1:"25.1443",x2:"25.1443",y2:"143.953",id:"paint0_linear_7821_79167",gradientUnits:"userSpaceOnUse",children:[(0,t.jsx)("stop",{}),(0,t.jsx)("stop",{offset:"1",stopOpacity:"0"})]}),(0,t.jsxs)("linearGradient",{y1:"0",x1:"25.1443",x2:"25.1443",y2:"143.953",id:"paint1_linear_7821_79167",gradientUnits:"userSpaceOnUse",children:[(0,t.jsx)("stop",{}),(0,t.jsx)("stop",{offset:"1",stopOpacity:"0"})]})]})]}),(0,t.jsx)(j.Z,{variant:"h6",sx:{ml:2,fontWeight:700,lineHeight:1.2},children:O.Z.templateName})]}),(0,t.jsxs)(Z.Z,{children:[(0,t.jsx)(j.Z,{variant:"body2",sx:{mb:1},children:"Office 149, 450 South Brand Brooklyn"}),(0,t.jsx)(j.Z,{variant:"body2",sx:{mb:1},children:"San Diego County, CA 91905, USA"}),(0,t.jsx)(j.Z,{variant:"body2",children:"+1 (123) 456 7891, +44 (876) 543 2198"})]})]})}),(0,t.jsx)(s.ZP,{item:!0,xl:6,xs:12,children:(0,t.jsx)(z.Z,{sx:{"& .react-datepicker-wrapper":{width:"auto"}},children:(0,t.jsxs)(Z.Z,{sx:{display:"flex",flexDirection:"column",alignItems:{xl:"flex-end",xs:"flex-start"}},children:[(0,t.jsxs)(Z.Z,{sx:{mb:4,display:"flex",alignItems:"center"},children:[(0,t.jsx)(j.Z,{variant:"h6",sx:{mr:1,width:"105px"},children:"Invoice"}),(0,t.jsx)(h.Z,{size:"small",value:r,sx:{width:{sm:"250px",xs:"170px"}},InputProps:{disabled:!0,startAdornment:(0,t.jsx)(y.Z,{position:"start",children:"#"})}})]}),(0,t.jsxs)(Z.Z,{sx:{mb:4,display:"flex",alignItems:"center"},children:[(0,t.jsx)(j.Z,{variant:"body2",sx:{mr:2,width:"100px"},children:"Date Issued:"}),(0,t.jsx)(D(),{id:"issue-date",selected:K,customInput:(0,t.jsx)(U,{}),onChange:function(e){return L(e)}})]}),(0,t.jsxs)(Z.Z,{sx:{display:"flex"},children:[(0,t.jsx)(j.Z,{variant:"body2",sx:{mr:2,width:"100px"},children:"Date Due:"}),(0,t.jsx)(D(),{id:"due-date",selected:J,customInput:(0,t.jsx)(U,{}),onChange:function(e){return ee(e)}})]})]})})})]})}),(0,t.jsx)(c.Z,{sx:{mt:1,mb:1}}),(0,t.jsx)(I.Z,{sx:{pb:2},children:(0,t.jsxs)(s.ZP,{container:!0,children:[(0,t.jsxs)(s.ZP,{item:!0,xs:12,sm:6,sx:{mb:{lg:0,xs:4}},children:[(0,t.jsx)(j.Z,{variant:"subtitle2",sx:{mb:3,color:"text.primary"},children:"Invoice To:"}),(0,t.jsxs)(w.Z,{size:"small",value:$,onChange:function(e){G(e.target.value),void 0!==n&&g(n.filter((function(n){return n.name===e.target.value}))[0])},sx:{mb:4,width:"200px"},children:[(0,t.jsx)(H,{value:"",children:(0,t.jsx)(o.Z,{fullWidth:!0,size:"small",color:"success",onClick:function(){S()},startIcon:(0,t.jsx)(A.Z,{fontSize:"small"}),sx:{"&:hover":{backgroundColor:"transparent"}},children:"Add New Customer"})}),void 0!==n&&n.map((function(e){return(0,t.jsx)(P.Z,{value:e.name,children:e.name},e.name)}))]}),null!==b&&void 0!==b?(0,t.jsxs)(Z.Z,{children:[(0,t.jsx)(j.Z,{variant:"body2",sx:{mb:1,color:"text.primary"},children:b.company}),(0,t.jsx)(j.Z,{variant:"body2",sx:{mb:1,color:"text.primary"},children:b.address}),(0,t.jsx)(j.Z,{variant:"body2",sx:{mb:1,color:"text.primary"},children:b.contact}),(0,t.jsx)(j.Z,{variant:"body2",sx:{mb:1,color:"text.primary"},children:b.companyEmail})]}):null]}),(0,t.jsx)(s.ZP,{item:!0,xs:12,sm:6,sx:{display:"flex",justifyContent:["flex-start","flex-end"]},children:(0,t.jsxs)("div",{children:[(0,t.jsx)(j.Z,{variant:"subtitle2",sx:{mb:2.5,color:"text.primary"},children:"Bill To:"}),(0,t.jsx)(v.Z,{children:(0,t.jsx)(l.Z,{children:(0,t.jsxs)(m.Z,{children:[(0,t.jsxs)(x.Z,{children:[(0,t.jsx)(q,{children:(0,t.jsx)(j.Z,{variant:"body2",children:"Total Due:"})}),(0,t.jsx)(q,{children:(0,t.jsx)(j.Z,{variant:"body2",children:"$12,110.55"})})]}),(0,t.jsxs)(x.Z,{children:[(0,t.jsx)(q,{children:(0,t.jsx)(j.Z,{variant:"body2",children:"Bank name:"})}),(0,t.jsx)(q,{children:(0,t.jsx)(j.Z,{variant:"body2",children:"American Bank"})})]}),(0,t.jsxs)(x.Z,{children:[(0,t.jsx)(q,{children:(0,t.jsx)(j.Z,{variant:"body2",children:"Country:"})}),(0,t.jsx)(q,{children:(0,t.jsx)(j.Z,{variant:"body2",children:"United States"})})]}),(0,t.jsxs)(x.Z,{children:[(0,t.jsx)(q,{children:(0,t.jsx)(j.Z,{variant:"body2",children:"IBAN:"})}),(0,t.jsx)(q,{children:(0,t.jsx)(j.Z,{variant:"body2",children:"ETD95476213874685"})})]}),(0,t.jsxs)(x.Z,{children:[(0,t.jsx)(q,{children:(0,t.jsx)(j.Z,{variant:"body2",children:"SWIFT code:"})}),(0,t.jsx)(q,{children:(0,t.jsx)(j.Z,{variant:"body2",children:"BR91905"})})]})]})})})]})})]})}),(0,t.jsx)(c.Z,{sx:{mb:1.25}}),(0,t.jsxs)(R,{children:[(0,t.jsx)(B.Z,{count:W,children:function(e){var n=0===e?Z.Z:u.Z;return(0,t.jsx)(n,T({className:"repeater-wrapper"},0!==e?{in:!0}:{},{children:(0,t.jsx)(s.ZP,{container:!0,children:(0,t.jsxs)(M,{item:!0,xs:12,children:[(0,t.jsxs)(s.ZP,{container:!0,sx:{py:4,width:"100%",pr:{lg:0,xs:4}},children:[(0,t.jsxs)(s.ZP,{item:!0,lg:6,md:5,xs:12,sx:{px:4,my:{lg:0,xs:4}},children:[(0,t.jsx)(j.Z,{variant:"subtitle2",className:"col-title",sx:{mb:{md:2,xs:0},color:"text.primary"},children:"Item"}),(0,t.jsxs)(w.Z,{fullWidth:!0,size:"small",defaultValue:"App Design",children:[(0,t.jsx)(P.Z,{value:"App Design",children:"App Design"}),(0,t.jsx)(P.Z,{value:"App Customization",children:"App Customization"}),(0,t.jsx)(P.Z,{value:"ABC Template",children:"ABC Template"}),(0,t.jsx)(P.Z,{value:"App Development",children:"App Development"})]}),(0,t.jsx)(h.Z,{rows:2,fullWidth:!0,multiline:!0,size:"small",sx:{mt:3.5},defaultValue:"Customization & Bug Fixes"})]}),(0,t.jsxs)(s.ZP,{item:!0,lg:2,md:3,xs:12,sx:{px:4,my:{lg:0,xs:4}},children:[(0,t.jsx)(j.Z,{variant:"subtitle2",className:"col-title",sx:{mb:{md:2,xs:0},color:"text.primary"},children:"Cost"}),(0,t.jsx)(h.Z,{size:"small",type:"number",placeholder:"24",defaultValue:"24",InputProps:{inputProps:{min:0}}}),(0,t.jsxs)(Z.Z,{sx:{mt:3.5},children:[(0,t.jsx)(j.Z,{component:"span",variant:"body2",sx:{lineHeight:2},children:"Discount:"})," ",(0,t.jsx)(j.Z,{component:"span",variant:"body2",children:"0%"}),(0,t.jsx)(d.Z,{title:"Tax 1",placement:"top",children:(0,t.jsx)(j.Z,{component:"span",variant:"body2",sx:{mx:2},children:"0%"})}),(0,t.jsx)(d.Z,{title:"Tax 2",placement:"top",children:(0,t.jsx)(j.Z,{component:"span",variant:"body2",children:"0%"})})]})]}),(0,t.jsxs)(s.ZP,{item:!0,lg:2,md:2,xs:12,sx:{px:4,my:{lg:0,xs:4}},children:[(0,t.jsx)(j.Z,{variant:"subtitle2",className:"col-title",sx:{mb:{md:2,xs:0},color:"text.primary"},children:"Hours"}),(0,t.jsx)(h.Z,{size:"small",type:"number",placeholder:"1",defaultValue:"1",InputProps:{inputProps:{min:0}}})]}),(0,t.jsxs)(s.ZP,{item:!0,lg:2,md:1,xs:12,sx:{px:4,my:{lg:0},mt:2},children:[(0,t.jsx)(j.Z,{variant:"subtitle2",className:"col-title",sx:{mb:{md:2,xs:0},color:"text.primary"},children:"Price"}),(0,t.jsx)(j.Z,{variant:"body2",children:"$24.00"})]})]}),(0,t.jsx)(F,{children:(0,t.jsx)(p.Z,{size:"small",onClick:re,children:(0,t.jsx)(_.Z,{fontSize:"small"})})})]})})}),e)}}),(0,t.jsx)(s.ZP,{container:!0,sx:{mt:4.75},children:(0,t.jsx)(s.ZP,{item:!0,xs:12,sx:{px:0},children:(0,t.jsx)(o.Z,{size:"small",variant:"contained",startIcon:(0,t.jsx)(A.Z,{fontSize:"small"}),onClick:function(){return N(W+1)},children:"Add Item"})})})]}),(0,t.jsx)(c.Z,{}),(0,t.jsx)(I.Z,{children:(0,t.jsxs)(s.ZP,{container:!0,children:[(0,t.jsxs)(s.ZP,{item:!0,xs:12,sm:9,sx:{order:{sm:1,xs:2}},children:[(0,t.jsxs)(Z.Z,{sx:{mb:4,display:"flex",alignItems:"center"},children:[(0,t.jsx)(j.Z,{variant:"body2",sx:{mr:2,color:"text.primary",fontWeight:600,letterSpacing:".25px"},children:"Salesperson:"}),(0,t.jsx)(h.Z,{size:"small",defaultValue:"Tommy Shelby",sx:{maxWidth:"150px","& .MuiInputBase-input":{color:"text.secondary"}}})]}),(0,t.jsx)(h.Z,{size:"small",placeholder:"Thanks for your business",sx:{maxWidth:"300px","& .MuiInputBase-input":{color:"text.secondary"}}})]}),(0,t.jsxs)(s.ZP,{item:!0,xs:12,sm:3,sx:{mb:{sm:0,xs:4},order:{sm:2,xs:1}},children:[(0,t.jsxs)(E,{children:[(0,t.jsx)(j.Z,{variant:"body2",children:"Subtotal:"}),(0,t.jsx)(j.Z,{variant:"body2",sx:{fontWeight:600,color:"text.primary",lineHeight:".25px"},children:"$1800"})]}),(0,t.jsxs)(E,{children:[(0,t.jsx)(j.Z,{variant:"body2",children:"Discount:"}),(0,t.jsx)(j.Z,{variant:"body2",sx:{fontWeight:600,color:"text.primary",lineHeight:".25px"},children:"$28"})]}),(0,t.jsxs)(E,{children:[(0,t.jsx)(j.Z,{variant:"body2",children:"Tax:"}),(0,t.jsx)(j.Z,{variant:"body2",sx:{fontWeight:600,color:"text.primary",lineHeight:".25px"},children:"21%"})]}),(0,t.jsx)(c.Z,{sx:{mt:6,mb:1.5}}),(0,t.jsxs)(E,{children:[(0,t.jsx)(j.Z,{variant:"body2",children:"Total:"}),(0,t.jsx)(j.Z,{variant:"body2",sx:{fontWeight:600,color:"text.primary",lineHeight:".25px"},children:"$1690"})]})]})]})}),(0,t.jsx)(c.Z,{sx:{my:1}}),(0,t.jsxs)(I.Z,{sx:{pt:4},children:[(0,t.jsx)(f.Z,{htmlFor:"invoice-note",children:"Note:"}),(0,t.jsx)(h.Z,{rows:2,fullWidth:!0,multiline:!0,id:"invoice-note",sx:{"& .MuiInputBase-input":{color:"text.secondary"}},defaultValue:"It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!"})]})]})},G=r(41664),X=r.n(G),K=r(72852),L=r(95489),Y=(0,b.ZP)(Z.Z)((function(){return{display:"flex",alignItems:"center",justifyContent:"space-between"}})),J=function(){return(0,t.jsxs)(Z.Z,{children:[(0,t.jsx)(a.Z,{sx:{mb:4},children:(0,t.jsxs)(I.Z,{children:[(0,t.jsx)(o.Z,{fullWidth:!0,sx:{mb:3.5},variant:"contained",startIcon:(0,t.jsx)(L.Z,{}),children:"Send Invoice"}),(0,t.jsx)(X(),{href:"/apps/invoice/preview/4987",passHref:!0,children:(0,t.jsx)(o.Z,{fullWidth:!0,component:"a",sx:{mb:3.5},variant:"outlined",children:"Preview"})}),(0,t.jsx)(o.Z,{fullWidth:!0,variant:"outlined",sx:{mb:3.5},children:"Save"})]})}),(0,t.jsxs)(w.Z,{fullWidth:!0,defaultValue:"Internet Banking",sx:{mb:4},children:[(0,t.jsx)(P.Z,{value:"Internet Banking",children:"Internet Banking"}),(0,t.jsx)(P.Z,{value:"Debit Card",children:"Debit Card"}),(0,t.jsx)(P.Z,{value:"Credit Card",children:"Credit Card"}),(0,t.jsx)(P.Z,{value:"Paypal",children:"Paypal"}),(0,t.jsx)(P.Z,{value:"UPI Transfer",children:"UPI Transfer"})]}),(0,t.jsxs)(Y,{sx:{mb:1},children:[(0,t.jsx)(f.Z,{htmlFor:"invoice-add-payment-terms",sx:{cursor:"pointer",fontSize:"0.875rem",color:"text.secondary"},children:"Payment Terms"}),(0,t.jsx)(K.Z,{defaultChecked:!0,id:"invoice-add-payment-terms"})]}),(0,t.jsxs)(Y,{sx:{mb:1},children:[(0,t.jsx)(f.Z,{htmlFor:"invoice-add-client-notes",sx:{cursor:"pointer",fontSize:"0.875rem",color:"text.secondary"},children:"Client Notes"}),(0,t.jsx)(K.Z,{id:"invoice-add-client-notes"})]}),(0,t.jsxs)(Y,{children:[(0,t.jsx)(f.Z,{htmlFor:"invoice-add-payment-stub",sx:{cursor:"pointer",fontSize:"0.875rem",color:"text.secondary"},children:"Payment Stub"}),(0,t.jsx)(K.Z,{id:"invoice-add-payment-stub"})]})]})},ee=r(58826),ne=r(94054),re=r(56815),te=r(74231),ie=r(2638),se=r(42283);function ae(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function le(e){return function(e){if(Array.isArray(e))return ae(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return ae(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ae(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var oe=(0,b.ZP)(Z.Z)((function(e){var n=e.theme;return{display:"flex",alignItems:"center",padding:n.spacing(3,4),justifyContent:"space-between",backgroundColor:n.palette.background.default}})),ce=te.Ry().shape({name:te.Z_().required(),email:te.Z_().email().required(),company:te.Z_().required(),contact:te.Z_().min(10).max(10).required(),address:te.Z_().max(120).required()}),de=function(e){var n=e.open,r=e.toggle,i=e.setSelectedClient,s=e.clients,a=e.setClients,l=(0,se.cI)({resolver:(0,ie.X)(ce),defaultValues:{name:"",email:"",company:"",address:"",country:"USA",contact:""}}),c=l.reset,d=l.control,x=l.handleSubmit,u=l.formState.errors,m=function(){r(),c({name:"",email:"",company:"",address:"",country:"USA",contact:""})};return(0,t.jsxs)(ee.ZP,{open:n,anchor:"right",variant:"temporary",onClose:m,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:[300,400]}},children:[(0,t.jsxs)(oe,{children:[(0,t.jsx)(j.Z,{variant:"h6",children:"Add New Customer"}),(0,t.jsx)(_.Z,{fontSize:"small",onClick:r,sx:{cursor:"pointer"}})]}),(0,t.jsxs)(Z.Z,{component:"form",sx:{p:5},onSubmit:x((function(e){var n=e.address,t=e.company,l=e.contact,o=e.country,d=e.email,x={name:e.name,country:o,contact:l,company:t,address:n,companyEmail:d};void 0!==s&&a(le(s).concat([x])),i(x),r(),c({name:"",email:"",company:"",address:"",country:"USA",contact:""})})),children:[(0,t.jsxs)(ne.Z,{fullWidth:!0,sx:{mb:6},children:[(0,t.jsx)(se.Qr,{name:"name",control:d,rules:{required:!0},render:function(e){var n=e.field,r=n.value,i=n.onChange;return(0,t.jsx)(h.Z,{label:"Name",value:r,variant:"outlined",onChange:i,error:Boolean(u.name)})}}),u.name&&(0,t.jsx)(re.Z,{sx:{color:"error.main"},id:"invoice-name-error",children:u.name.message})]}),(0,t.jsxs)(ne.Z,{fullWidth:!0,sx:{mb:6},children:[(0,t.jsx)(se.Qr,{name:"company",control:d,rules:{required:!0},render:function(e){var n=e.field,r=n.value,i=n.onChange;return(0,t.jsx)(h.Z,{value:r,label:"Company",variant:"outlined",onChange:i,error:Boolean(u.company)})}}),u.company&&(0,t.jsx)(re.Z,{sx:{color:"error.main"},id:"invoice-company-error",children:u.company.message})]}),(0,t.jsxs)(ne.Z,{fullWidth:!0,sx:{mb:6},children:[(0,t.jsx)(se.Qr,{name:"email",control:d,rules:{required:!0},render:function(e){var n=e.field,r=n.value,i=n.onChange;return(0,t.jsx)(h.Z,{type:"email",label:"Email",value:r,variant:"outlined",onChange:i,error:Boolean(u.email)})}}),u.email&&(0,t.jsx)(re.Z,{sx:{color:"error.main"},id:"invoice-email-error",children:u.email.message})]}),(0,t.jsxs)(ne.Z,{fullWidth:!0,sx:{mb:6},children:[(0,t.jsx)(se.Qr,{name:"address",control:d,rules:{required:!0},render:function(e){var n=e.field,r=n.value,i=n.onChange;return(0,t.jsx)(h.Z,{rows:6,multiline:!0,value:r,label:"Address",variant:"outlined",onChange:i,error:Boolean(u.address),placeholder:"1037 Lady Bug Drive New York"})}}),u.address&&(0,t.jsx)(re.Z,{sx:{color:"error.main"},id:"invoice-address-error",children:u.address.message})]}),(0,t.jsxs)(ne.Z,{fullWidth:!0,sx:{mb:6},children:[(0,t.jsx)(f.Z,{id:"invoice-country",children:"Country"}),(0,t.jsx)(se.Qr,{name:"country",control:d,rules:{required:!0},render:function(e){var n=e.field,r=n.value,i=n.onChange;return(0,t.jsxs)(w.Z,{label:"Country",value:r,onChange:i,labelId:"invoice-country",error:Boolean(u.country),children:[(0,t.jsx)(P.Z,{value:"USA",children:"USA"}),(0,t.jsx)(P.Z,{value:"UK",children:"UK"}),(0,t.jsx)(P.Z,{value:"Russia",children:"Russia"}),(0,t.jsx)(P.Z,{value:"Australia",children:"Australia"}),(0,t.jsx)(P.Z,{value:"Canada",children:"Canada"})]})}}),u.country&&(0,t.jsx)(re.Z,{sx:{color:"error.main"},id:"invoice-country-error",children:u.country.message})]}),(0,t.jsxs)(ne.Z,{fullWidth:!0,sx:{mb:6},children:[(0,t.jsx)(se.Qr,{name:"contact",control:d,rules:{required:!0},render:function(e){var n=e.field,r=n.value,i=n.onChange;return(0,t.jsx)(h.Z,{type:"number",value:r,variant:"outlined",onChange:i,label:"Contact Number",placeholder:"763-242-9206",error:Boolean(u.contact)})}}),u.contact&&(0,t.jsx)(re.Z,{sx:{color:"error.main"},id:"invoice-contact-error",children:u.contact.message})]}),(0,t.jsxs)(Z.Z,{children:[(0,t.jsx)(o.Z,{size:"large",type:"submit",variant:"contained",sx:{mr:4},children:"Add"}),(0,t.jsx)(o.Z,{size:"large",variant:"outlined",color:"secondary",onClick:m,children:"Cancel"})]})]})]})};r(95828);var xe=!0,ue=function(e){var n=e.apiClientData,r=e.invoiceNumber,a=(0,i.useState)(!1),l=a[0],o=a[1],c=(0,i.useState)(null),d=c[0],x=c[1],u=(0,i.useState)(n),m=u[0],h=u[1],p=function(){return o(!l)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.ZP,{container:!0,spacing:6,children:[(0,t.jsx)(s.ZP,{item:!0,xl:9,md:8,xs:12,children:(0,t.jsx)($,{clients:m,invoiceNumber:r,selectedClient:d,setSelectedClient:x,toggleAddCustomerDrawer:p})}),(0,t.jsx)(s.ZP,{item:!0,xl:3,md:4,xs:12,children:(0,t.jsx)(J,{})})]}),(0,t.jsx)(de,{clients:m,open:l,setClients:h,toggle:p,setSelectedClient:x})]})}}},function(e){e.O(0,[4386,2283,1524,9075,4661,8960,240,9774,2888,179],(function(){return n=70896,e(e.s=n);var n}));var n=e.O();_N_E=n}]);