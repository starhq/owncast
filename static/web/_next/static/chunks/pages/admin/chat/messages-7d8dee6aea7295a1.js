(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7095],{62433:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/chat/messages",function(){return t(57533)}])},57533:function(e,s,t){"use strict";t.r(s),t.d(s,{OUTCOME_TIMEOUT:function(){return N},default:function(){return v}});var a=t(85893),i=t(67294),l=t(84485),n=t(71577),r=t(52206),c=t(89739),d=t(21640),o=t(94184),u=t.n(o),h=t(58091),m=t(64777),p=t(70241),g=t(94199),x=t(99611),w=t(90420);let y=e=>{let{isVisible:s,message:t,setMessage:l}=e;if(!t||(0,p.Qr)(t))return null;let r=null,[o,u]=(0,i.useState)(0),{id:h}=t||{},y=()=>{r=setTimeout(()=>{u(0)},N)};(0,i.useEffect)(()=>()=>{clearTimeout(r)});let f=async()=>{clearTimeout(r),u(0);let e=await (0,m.rQ)(m.hn,{auth:!0,method:"POST",data:{visible:!s,idArray:[h]}});e.success&&"changed"===e.message?(l({...t,visible:!s}),u(1)):(l({...t,visible:s}),u(-1)),y()},j=(0,a.jsx)(c.Z,{style:{color:"transparent"}});return o&&(j=o>0?(0,a.jsx)(c.Z,{style:{color:"var(--ant-success)"}}):(0,a.jsx)(d.Z,{style:{color:"var(--ant-warning)"}})),(0,a.jsxs)("div",{className:"toggle-switch ".concat(s?"":"hidden"),children:[(0,a.jsx)("span",{className:"outcome-icon",children:j}),(0,a.jsx)(g.Z,{title:"Click to ".concat(s?"hide":"show"," this message"),placement:"topRight",children:(0,a.jsx)(n.Z,{shape:"circle",size:"small",type:"text",icon:s?(0,a.jsx)(x.Z,{}):(0,a.jsx)(w.Z,{}),onClick:f})})]})};var f=t(35691);let{Title:j}=l.Z,N=3e3;function v(){let[e,s]=(0,i.useState)([]),[t,l]=(0,i.useState)([]),[o,g]=(0,i.useState)(!1),[x,w]=(0,i.useState)(null),[v,b]=(0,i.useState)(""),T=null,C=null,S=async()=>{try{let e=await (0,m.rQ)(m.WE,{auth:!0});(0,p.Qr)(e)?s([]):s(e)}catch(t){console.log("==== error",t)}};(0,i.useEffect)(()=>(S(),C=setInterval(()=>{S()},m.NE),()=>{clearTimeout(T),clearTimeout(C)}),[]);let Z=function(e){let s=e.reduce((e,s)=>{let t=s.user.id;return e.some(e=>e.text===t)||e.push({text:t,value:t}),e},[]);return s.sort((e,s)=>{let t=e.text.toUpperCase(),a=s.text.toUpperCase();return t<a?-1:t>a?1:0})}(e),_=t=>{let a=e.findIndex(e=>e.id===t.id);e.splice(a,1,t),s([...e])},k=()=>{T=setTimeout(()=>{w(null),b("")},N)},E=async i=>{g(!0);let n=await (0,m.rQ)(m.hn,{auth:!0,method:"POST",data:{visible:i,idArray:t}});if(n.success&&"changed"===n.message){w((0,a.jsx)(c.Z,{})),k();let r=[...e];t.map(s=>{let t=r.findIndex(e=>e.id===s),a={...e[t],visible:i};return r.splice(t,1,a),null}),s(r),l([])}else w((0,a.jsx)(d.Z,{})),k();g(!1)},I=()=>{b("show"),E(!0)},O=()=>{b("hide"),E(!1)},M=u()({"bulk-editor":!0,active:t.length});return(0,a.jsxs)("div",{className:"chat-messages",children:[(0,a.jsx)(j,{children:"Chat Messages"}),(0,a.jsx)("p",{children:"Manage the messages from viewers that show up on your stream."}),(0,a.jsxs)("div",{className:M,children:[(0,a.jsx)("span",{className:"label",children:"Check multiple messages to change their visibility to: "}),(0,a.jsx)(n.Z,{type:"primary",size:"small",shape:"round",className:"button",loading:"show"===v&&o,icon:"show"===v&&x,disabled:!t.length||v&&"show"!==v,onClick:I,children:"Show"}),(0,a.jsx)(n.Z,{type:"primary",size:"small",shape:"round",className:"button",loading:"hide"===v&&o,icon:"hide"===v&&x,disabled:!t.length||v&&"hide"!==v,onClick:O,children:"Hide"})]}),(0,a.jsx)(r.Z,{size:"small",className:"table-container",pagination:{defaultPageSize:100,showSizeChanger:!0},scroll:{y:540},rowClassName:e=>e.hiddenAt?"hidden":"",dataSource:e,columns:[{title:"Time",dataIndex:"timestamp",key:"timestamp",className:"timestamp-col",defaultSortOrder:"descend",render(e){let s=new Date(e);return(0,h.Z)(s,"PP pp")},sorter:(e,s)=>new Date(e.timestamp).getTime()-new Date(s.timestamp).getTime(),width:90},{title:"User",dataIndex:"user",key:"user",className:"name-col",filters:Z,onFilter:(e,s)=>s.user.id===e,sorter:(e,s)=>e.user.displayName.localeCompare(s.user.displayName),sortDirections:["ascend","descend"],ellipsis:!0,render(e){let{displayName:s}=e;return(0,a.jsx)(f.Z,{user:e,children:s})},width:110},{title:"Message",dataIndex:"body",key:"body",className:"message-col",width:320,render:e=>(0,a.jsx)("div",{className:"message-contents",dangerouslySetInnerHTML:{__html:e}})},{title:"",dataIndex:"hiddenAt",key:"hiddenAt",className:"toggle-col",filters:[{text:"Visible messages",value:!0},{text:"Hidden messages",value:!1}],onFilter:(e,s)=>s.visible===e,render:(e,s)=>(0,a.jsx)(y,{isVisible:!e,message:s,setMessage:_}),width:30}],rowKey:e=>e.id,rowSelection:{selectedRowKeys:t,onChange(e){l(e)}}})]})}}},function(e){e.O(0,[3662,8909,3903,4267,2206,8091,5938,8733,1494,9774,2888,179],function(){return e(e.s=62433)}),_N_E=e.O()}]);