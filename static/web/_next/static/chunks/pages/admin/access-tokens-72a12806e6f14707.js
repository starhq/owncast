(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9882,8733],{48689:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(1413),o=n(67294),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},a=n(42135),s=function(e,t){return o.createElement(a.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:c}))};s.displayName="DeleteOutlined";var i=o.forwardRef(s)},15746:function(e,t,n){"use strict";var r=n(21584);t.Z=r.Z},99134:function(e,t,n){"use strict";var r=(0,n(67294).createContext)({});t.Z=r},21584:function(e,t,n){"use strict";var r=n(4942),o=n(87462),c=n(71002),a=n(94184),s=n.n(a),i=n(67294),l=n(53124),u=n(99134),f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n},d=["xs","sm","md","lg","xl","xxl"],p=i.forwardRef(function(e,t){var n,a=i.useContext(l.E_),p=a.getPrefixCls,h=a.direction,v=i.useContext(u.Z),m=v.gutter,y=v.wrap,x=v.supportFlexGap,Z=e.prefixCls,b=e.span,g=e.order,j=e.offset,w=e.push,O=e.pull,k=e.className,C=e.children,E=e.flex,S=e.style,N=f(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),P=p("col",Z),T={};d.forEach(function(t){var n,a={},s=e[t];"number"==typeof s?a.span=s:"object"===(0,c.Z)(s)&&(a=s||{}),delete N[t],T=(0,o.Z)((0,o.Z)({},T),(n={},(0,r.Z)(n,"".concat(P,"-").concat(t,"-").concat(a.span),void 0!==a.span),(0,r.Z)(n,"".concat(P,"-").concat(t,"-order-").concat(a.order),a.order||0===a.order),(0,r.Z)(n,"".concat(P,"-").concat(t,"-offset-").concat(a.offset),a.offset||0===a.offset),(0,r.Z)(n,"".concat(P,"-").concat(t,"-push-").concat(a.push),a.push||0===a.push),(0,r.Z)(n,"".concat(P,"-").concat(t,"-pull-").concat(a.pull),a.pull||0===a.pull),(0,r.Z)(n,"".concat(P,"-rtl"),"rtl"===h),n))});var _=s()(P,(n={},(0,r.Z)(n,"".concat(P,"-").concat(b),void 0!==b),(0,r.Z)(n,"".concat(P,"-order-").concat(g),g),(0,r.Z)(n,"".concat(P,"-offset-").concat(j),j),(0,r.Z)(n,"".concat(P,"-push-").concat(w),w),(0,r.Z)(n,"".concat(P,"-pull-").concat(O),O),n),k,T),A={};if(m&&m[0]>0){var I=m[0]/2;A.paddingLeft=I,A.paddingRight=I}if(m&&m[1]>0&&!x){var R=m[1]/2;A.paddingTop=R,A.paddingBottom=R}return E&&(A.flex="number"==typeof E?"".concat(E," ").concat(E," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(E)?"0 0 ".concat(E):E,!1!==y||A.minWidth||(A.minWidth=0)),i.createElement("div",(0,o.Z)({},N,{style:(0,o.Z)((0,o.Z)({},A),S),className:_,ref:t}),C)});t.Z=p},92820:function(e,t,n){"use strict";var r=n(87462),o=n(4942),c=n(71002),a=n(97685),s=n(94184),i=n.n(s),l=n(67294),u=n(53124),f=n(98082),d=n(24308),p=n(93355),h=n(99134),v=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function m(e,t){var n=l.useState("string"==typeof e?e:""),r=(0,a.Z)(n,2),o=r[0],s=r[1],i=function(){if("object"===(0,c.Z)(e))for(var n=0;n<d.c4.length;n++){var r=d.c4[n];if(t[r]){var o=e[r];if(void 0!==o){s(o);return}}}};return l.useEffect(function(){i()},[JSON.stringify(e),t]),o}(0,p.b)("top","middle","bottom","stretch"),(0,p.b)("start","end","center","space-around","space-between","space-evenly");var y=l.forwardRef(function(e,t){var n,s,p=e.prefixCls,y=e.justify,x=e.align,Z=e.className,b=e.style,g=e.children,j=e.gutter,w=void 0===j?0:j,O=e.wrap,k=v(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),C=l.useContext(u.E_),E=C.getPrefixCls,S=C.direction,N=l.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),P=(0,a.Z)(N,2),T=P[0],_=P[1],A=l.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),I=(0,a.Z)(A,2),R=I[0],M=I[1],D=m(x,R),G=m(y,R),H=(0,f.Z)(),$=l.useRef(w);l.useEffect(function(){var e=d.ZP.subscribe(function(e){M(e);var t=$.current||0;(!Array.isArray(t)&&"object"===(0,c.Z)(t)||Array.isArray(t)&&("object"===(0,c.Z)(t[0])||"object"===(0,c.Z)(t[1])))&&_(e)});return function(){return d.ZP.unsubscribe(e)}},[]);var z=E("row",p),W=(n=[void 0,void 0],(Array.isArray(w)?w:[w,void 0]).forEach(function(e,t){if("object"===(0,c.Z)(e))for(var r=0;r<d.c4.length;r++){var o=d.c4[r];if(T[o]&&void 0!==e[o]){n[t]=e[o];break}}else n[t]=e}),n),B=i()(z,(s={},(0,o.Z)(s,"".concat(z,"-no-wrap"),!1===O),(0,o.Z)(s,"".concat(z,"-").concat(G),G),(0,o.Z)(s,"".concat(z,"-").concat(D),D),(0,o.Z)(s,"".concat(z,"-rtl"),"rtl"===S),s),Z),F={},U=null!=W[0]&&W[0]>0?-(W[0]/2):void 0,L=null!=W[1]&&W[1]>0?-(W[1]/2):void 0;if(U&&(F.marginLeft=U,F.marginRight=U),H){var Q=(0,a.Z)(W,2);F.rowGap=Q[1]}else L&&(F.marginTop=L,F.marginBottom=L);var X=(0,a.Z)(W,2),Y=X[0],J=X[1],K=l.useMemo(function(){return{gutter:[Y,J],wrap:O,supportFlexGap:H}},[Y,J,O,H]);return l.createElement(h.Z.Provider,{value:K},l.createElement("div",(0,r.Z)({},k,{className:B,style:(0,r.Z)((0,r.Z)({},F),b),ref:t}),g))});t.Z=y},71230:function(e,t,n){"use strict";var r=n(92820);t.Z=r.Z},20550:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var r=n(4942),o=n(87462),c=n(97685),a=n(97937),s=n(94184),i=n.n(s),l=n(98423),u=n(67294),f=n(53124),d=n(98787),p=n(68349),h=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n},v=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n},m=RegExp("^(".concat(d.Y.join("|"),")(-inverse)?$")),y=RegExp("^(".concat(d.E.join("|"),")$")),x=u.forwardRef(function(e,t){var n,s=e.prefixCls,d=e.className,h=e.style,x=e.children,Z=e.icon,b=e.color,g=e.onClose,j=e.closeIcon,w=e.closable,O=v(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),k=u.useContext(f.E_),C=k.getPrefixCls,E=k.direction,S=u.useState(!0),N=(0,c.Z)(S,2),P=N[0],T=N[1];u.useEffect(function(){"visible"in O&&T(O.visible)},[O.visible]);var _=function(){return!!b&&(m.test(b)||y.test(b))},A=(0,o.Z)({backgroundColor:b&&!_()?b:void 0},h),I=_(),R=C("tag",s),M=i()(R,(n={},(0,r.Z)(n,"".concat(R,"-").concat(b),I),(0,r.Z)(n,"".concat(R,"-has-color"),b&&!I),(0,r.Z)(n,"".concat(R,"-hidden"),!P),(0,r.Z)(n,"".concat(R,"-rtl"),"rtl"===E),n),d),D=function(e){e.stopPropagation(),null==g||g(e),!e.defaultPrevented&&("visible"in O||T(!1))},G="onClick"in O||x&&"a"===x.type,H=(0,l.Z)(O,["visible"]),$=Z||null,z=$?u.createElement(u.Fragment,null,$,u.createElement("span",null,x)):x,W=u.createElement("span",(0,o.Z)({},H,{ref:t,className:M,style:A}),z,void 0!==w&&w?j?u.createElement("span",{className:"".concat(R,"-close-icon"),onClick:D},j):u.createElement(a.Z,{className:"".concat(R,"-close-icon"),onClick:D}):null);return G?u.createElement(p.Z,null,W):W});x.CheckableTag=function(e){var t,n=e.prefixCls,c=e.className,a=e.checked,s=e.onChange,l=e.onClick,d=h(e,["prefixCls","className","checked","onChange","onClick"]),p=(0,u.useContext(f.E_).getPrefixCls)("tag",n),v=i()(p,(t={},(0,r.Z)(t,"".concat(p,"-checkable"),!0),(0,r.Z)(t,"".concat(p,"-checkable-checked"),a),t),c);return u.createElement("span",(0,o.Z)({},d,{className:v,onClick:function(e){null==s||s(!a),null==l||l(e)}}))};var Z=x},27561:function(e,t,n){var r=n(67990),o=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(o,""):e}},67990:function(e){var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},23279:function(e,t,n){var r=n(13218),o=n(7771),c=n(14841),a=Math.max,s=Math.min;e.exports=function(e,t,n){var i,l,u,f,d,p,h=0,v=!1,m=!1,y=!0;if("function"!=typeof e)throw TypeError("Expected a function");function x(t){var n=i,r=l;return i=l=void 0,h=t,f=e.apply(r,n)}function Z(e){var n=e-p,r=e-h;return void 0===p||n>=t||n<0||m&&r>=u}function b(){var e,n,r,c=o();if(Z(c))return g(c);d=setTimeout(b,(e=c-p,n=c-h,r=t-e,m?s(r,u-n):r))}function g(e){return(d=void 0,y&&i)?x(e):(i=l=void 0,f)}function j(){var e,n=o(),r=Z(n);if(i=arguments,l=this,p=n,r){if(void 0===d)return h=e=p,d=setTimeout(b,t),v?x(e):f;if(m)return clearTimeout(d),d=setTimeout(b,t),x(p)}return void 0===d&&(d=setTimeout(b,t)),f}return t=c(t)||0,r(n)&&(v=!!n.leading,u=(m="maxWait"in n)?a(c(n.maxWait)||0,t):u,y="trailing"in n?!!n.trailing:y),j.cancel=function(){void 0!==d&&clearTimeout(d),h=0,i=p=l=d=void 0},j.flush=function(){return void 0===d?f:g(o())},j}},33448:function(e,t,n){var r=n(44239),o=n(37005);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==r(e)}},7771:function(e,t,n){var r=n(55639);e.exports=function(){return r.Date.now()}},14841:function(e,t,n){var r=n(27561),o=n(13218),c=n(33448),a=0/0,s=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,l=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(c(e))return a;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=i.test(e);return n||l.test(e)?u(e.slice(2),n?2:8):s.test(e)?a:+e}},26562:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/access-tokens",function(){return n(23341)}])},23341:function(e,t,n){"use strict";n.r(t);var r=n(85893),o=n(67294),c=n(84485),a=n(94199),s=n(20550),i=n(15746),l=n(32808),u=n(85402),f=n(69677),d=n(71230),p=n(71577),h=n(26713),v=n(52206),m=n(48689),y=n(58091),x=n(64777);let{Title:Z,Paragraph:b}=c.Z,g={CAN_SEND_SYSTEM_MESSAGES:{name:"System messages",description:"Can send official messages on behalf of the system.",color:"purple"},CAN_SEND_MESSAGES:{name:"User chat messages",description:"Can send chat messages on behalf of the owner of this token.",color:"green"},HAS_ADMIN_ACCESS:{name:"Has admin access",description:"Can perform administrative actions such as moderation, get server statuses, etc.",color:"red"}},j=e=>{let{onOk:t,onCancel:n,open:c}=e,[a,s]=(0,o.useState)([]),[h,v]=(0,o.useState)(""),m=Object.keys(g).map(e=>({value:e,label:g[e].description})),y={disabled:0===a.length||""===h},x=m.map(e=>(0,r.jsx)(i.Z,{span:8,children:(0,r.jsx)(l.Z,{value:e.value,children:e.label})},e.value));return(0,r.jsxs)(u.Z,{title:"Create New Access token",open:c,onOk:function(){t(h,a),s([]),v("")},onCancel:n,okButtonProps:y,children:[(0,r.jsxs)("p",{children:[(0,r.jsx)("p",{children:"The name will be displayed as the chat user when sending messages with this access token."}),(0,r.jsx)(f.Z,{value:h,placeholder:"Name of bot, service, or integration",onChange:e=>v(e.currentTarget.value)})]}),(0,r.jsx)("p",{children:"Select the permissions this access token will have. It cannot be edited after it's created."}),(0,r.jsx)(l.Z.Group,{style:{width:"100%"},value:a,onChange:function(e){s(e)},children:(0,r.jsx)(d.Z,{children:x})}),(0,r.jsx)("p",{children:(0,r.jsx)(p.Z,{type:"primary",onClick:function(){s(Object.keys(g))},children:"Select all"})})]})},w=()=>{let[e,t]=(0,o.useState)([]),[n,c]=(0,o.useState)(!1);function i(e){console.error("error",e)}async function l(){try{let e=await (0,x.rQ)(x.ms);t(e)}catch(n){i(n)}}async function u(e){try{await (0,x.rQ)(x.Wr,{method:"POST",data:{token:e}}),l()}catch(t){i(t)}}async function d(n,r){try{let o=await (0,x.rQ)(x.IO,{method:"POST",data:{name:n,scopes:r}});t(e.concat(o))}catch(c){i(c)}}(0,o.useEffect)(()=>{l()},[]);let w=()=>{c(!0)},O=(e,t)=>{c(!1),d(e,t)},k=()=>{c(!1)};return(0,r.jsxs)("div",{children:[(0,r.jsx)(Z,{children:"Access Tokens"}),(0,r.jsx)(b,{children:"Access tokens are used to allow external, 3rd party tools to perform specific actions on your Owncast server. They should be kept secure and never included in client code, instead they should be kept on a server that you control."}),(0,r.jsxs)(b,{children:["Read more about how to use these tokens, with examples, at"," ",(0,r.jsx)("a",{href:"https://owncast.online/docs/integrations/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"our documentation"}),"."]}),(0,r.jsx)(v.Z,{rowKey:"token",columns:[{title:"",key:"delete",render:(e,t)=>(0,r.jsx)(h.Z,{size:"middle",children:(0,r.jsx)(p.Z,{onClick:()=>u(t.accessToken),icon:(0,r.jsx)(m.Z,{})})})},{title:"Name",dataIndex:"displayName",key:"displayName"},{title:"Token",dataIndex:"accessToken",key:"accessToken",render:e=>(0,r.jsx)(f.Z.Password,{size:"small",bordered:!1,value:e})},{title:"Scopes",dataIndex:"scopes",key:"scopes",render:e=>(0,r.jsx)(r.Fragment,{children:e.map(e=>(function(e){if(!e||!g[e])return null;let t=g[e];return(0,r.jsx)(a.Z,{title:t.description,children:(0,r.jsx)(s.Z,{color:t.color,children:t.name})},e)})(e))})},{title:"Last Used",dataIndex:"lastUsed",key:"lastUsed",render(e){if(!e)return"Never";let t=new Date(e);return(0,y.Z)(t,"P p")}}],dataSource:e,pagination:!1}),(0,r.jsx)("br",{}),(0,r.jsx)(p.Z,{type:"primary",onClick:w,children:"Create Access Token"}),(0,r.jsx)(j,{open:n,onOk:O,onCancel:k})]})};t.default=w}},function(e){e.O(0,[8909,3903,4267,2206,8091,9774,2888,179],function(){return e(e.s=26562)}),_N_E=e.O()}]);