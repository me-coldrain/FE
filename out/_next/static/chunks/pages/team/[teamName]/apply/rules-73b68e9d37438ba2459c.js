(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6671],{22887:function(e,n,t){"use strict";t.d(n,{Z:function(){return F}});var o=t(19756),r=t(22122),c=t(67294),i=t(94780),a=t(94581),l=t(86010),d=t(98216),s=t(76019),u=t(72893),h=t(74423),p=t(32054),f=t(28562),m=t(1588);function v(e){return(0,f.Z)("PrivateSwitchBase",e)}(0,m.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var b=t(85893);const k=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],x=(0,s.ZP)(p.Z)((({ownerState:e})=>(0,r.Z)({padding:9,borderRadius:"50%"},"start"===e.edge&&{marginLeft:"small"===e.size?-3:-12},"end"===e.edge&&{marginRight:"small"===e.size?-3:-12}))),g=(0,s.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1});var Z=c.forwardRef((function(e,n){const{autoFocus:t,checked:c,checkedIcon:a,className:s,defaultChecked:p,disabled:f,disableFocusRipple:m=!1,edge:Z=!1,icon:j,id:y,inputProps:_,inputRef:B,name:C,onBlur:O,onChange:P,onFocus:w,readOnly:S,required:z,tabIndex:I,type:R,value:F}=e,N=(0,o.Z)(e,k),[E,$]=(0,u.Z)({controlled:c,default:Boolean(p),name:"SwitchBase",state:"checked"}),q=(0,h.Z)();let D=f;q&&"undefined"===typeof D&&(D=q.disabled);const L="checkbox"===R||"radio"===R,M=(0,r.Z)({},e,{checked:E,disabled:D,disableFocusRipple:m,edge:Z}),H=(e=>{const{classes:n,checked:t,disabled:o,edge:r}=e,c={root:["root",t&&"checked",o&&"disabled",r&&`edge${(0,d.Z)(r)}`],input:["input"]};return(0,i.Z)(c,v,n)})(M);return(0,b.jsxs)(x,(0,r.Z)({component:"span",className:(0,l.Z)(H.root,s),centerRipple:!0,focusRipple:!m,disabled:D,tabIndex:null,role:void 0,onFocus:e=>{w&&w(e),q&&q.onFocus&&q.onFocus(e)},onBlur:e=>{O&&O(e),q&&q.onBlur&&q.onBlur(e)},ownerState:M,ref:n},N,{children:[(0,b.jsx)(g,(0,r.Z)({autoFocus:t,checked:c,defaultChecked:p,className:H.input,disabled:D,id:L&&y,name:C,onChange:e=>{if(e.nativeEvent.defaultPrevented)return;const n=e.target.checked;$(n),P&&P(e,n)},readOnly:S,ref:B,required:z,ownerState:M,tabIndex:I,type:R},"checkbox"===R&&void 0===F?{}:{value:F},_)),E?a:j]}))})),j=t(15949),y=(0,j.Z)((0,b.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),_=(0,j.Z)((0,b.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),B=(0,j.Z)((0,b.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),C=t(65451);function O(e){return(0,f.Z)("MuiCheckbox",e)}var P=(0,m.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]);const w=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],S=(0,s.ZP)(Z,{shouldForwardProp:e=>(0,s.FO)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,t.indeterminate&&n.indeterminate,"default"!==t.color&&n[`color${(0,d.Z)(t.color)}`]]}})((({theme:e,ownerState:n})=>(0,r.Z)({color:(e.vars||e).palette.text.secondary},!n.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${"default"===n.color?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,a.Fq)("default"===n.color?e.palette.action.active:e.palette[n.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==n.color&&{[`&.${P.checked}, &.${P.indeterminate}`]:{color:(e.vars||e).palette[n.color].main},[`&.${P.disabled}`]:{color:(e.vars||e).palette.action.disabled}}))),z=(0,b.jsx)(_,{}),I=(0,b.jsx)(y,{}),R=(0,b.jsx)(B,{});var F=c.forwardRef((function(e,n){var t,a;const l=(0,C.Z)({props:e,name:"MuiCheckbox"}),{checkedIcon:s=z,color:u="primary",icon:h=I,indeterminate:p=!1,indeterminateIcon:f=R,inputProps:m,size:v="medium"}=l,k=(0,o.Z)(l,w),x=p?f:h,g=p?f:s,Z=(0,r.Z)({},l,{color:u,indeterminate:p,size:v}),j=(e=>{const{classes:n,indeterminate:t,color:o}=e,c={root:["root",t&&"indeterminate",`color${(0,d.Z)(o)}`]},a=(0,i.Z)(c,O,n);return(0,r.Z)({},n,a)})(Z);return(0,b.jsx)(S,(0,r.Z)({type:"checkbox",inputProps:(0,r.Z)({"data-indeterminate":p},m),icon:c.cloneElement(x,{fontSize:null!=(t=x.props.fontSize)?t:v}),checkedIcon:c.cloneElement(g,{fontSize:null!=(a=g.props.fontSize)?a:v}),ownerState:Z,ref:n},k,{classes:j}))}))},59043:function(e,n,t){"use strict";t.d(n,{DB:function(){return m},Jg:function(){return v},ZP:function(){return b}});var o=t(26265),r=t(85893),c=t(38347),i=t(22887),a=(t(67294),t(81192)),l=t(95219),d=t.n(l);function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var h=d().button,p=d().coloredButton,f=d().checkBox;function m(e){var n=e.handleClick,t=e.content,o=e.length,c=(e.color,(0,a.L)(p,d()[o]));return(0,r.jsx)("button",{onClick:n,className:c,children:(0,r.jsx)("p",{children:t})})}function v(e){var n=e.checked,t=e.handleClick,o=e.content,l=((0,c.Z)(e,["checked","handleClick","content"]),(0,a.L)(f,d().long));return(0,r.jsxs)("button",{onClick:t,className:l,children:[(0,r.jsx)("p",{children:o}),(0,r.jsx)(i.Z,{checked:n})]})}function b(e){var n=e.handleClick,t=e.content,o=e.length,i=e.color,l=void 0!==i&&i,s=(0,c.Z)(e,["handleClick","content","length","color"]),f=(0,a.L)(h,d()[o]),m=(0,a.L)(p,d()[o]);return(0,r.jsx)("button",u(u({onClick:n,className:l?m:f},s),{},{children:t}))}},23006:function(e,n,t){"use strict";t.d(n,{ZP:function(){return o.ZP},DB:function(){return o.DB},Jg:function(){return o.Jg}});var o=t(59043)},46022:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var o=t(85893);t(67294);function r(e){var n=e.color;return(0,o.jsx)("div",{style:{margin:"6rem",background:n}})}},76138:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var o=t(85893),r=t(67294),c=t(23006),i=t(46022),a=t(11163);var l=function(){var e=(0,a.useRouter)(),n=e.query,t=n.teamId,l=n.teamName,d=(0,r.useState)(!1),s=d[0],u=d[1];return(0,o.jsxs)("main",{children:[(0,o.jsx)("div",{children:(0,o.jsx)("h1",{children:"\ubaa8\ub450\uac00 \uc990\uac70\uc6b4 \uacbd\uae30\ub97c \ud560 \uc218 \uc788\ub3c4\ub85d \uaf2d \uc9c0\ucf1c\uc8fc\uc138\uc694!"})}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{children:"\uac11\uc790\uae30 \ucde8\uc18c\ub294 \uae08\uc9c0"}),(0,o.jsx)("p",{children:"\uac11\uc790\uae30 \ucde8\uc18c\ud558\ub294 \uacbd\uc6b0 \ud300\uc6d0\uc774 \ub9de\uc9c0 \uc54a\uc544 \uacbd\uae30\uc9c4\ud589\uc774 \uc5b4\ub835\uc2b5\ub2c8\ub2e4. \ucde8\uc18c\ud574\uc57c\ud55c\ub2e4\uba74 \ucd5c\uc18c 3\uc77c\uc804 \uc0c1\ub300\ud300\uc5d0\uac8c \ub9d0\uc500\ud574\uc8fc\uc138\uc694."})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{children:"\uc11c\ub85c \ubc30\ub824\ud558\uae30"}),(0,o.jsx)("p",{children:"\uc11c\ub85c \uc88b\uc740 \uacbd\uae30\ub97c \ud560 \uc218 \uc788\ub3c4\ub85d \uc0c1\ub300\ud300\uc744 \uc874\uc911\ud558\ub294 \ud0dc\ub3c4\ub97c \uc9c0\ucf1c\uc8fc\uc138\uc694."})]}),(0,o.jsx)(i.Z,{}),(0,o.jsx)("div",{style:{marginBottom:"1rem"},children:(0,o.jsx)(c.Jg,{checked:s,content:"\ud655\uc778\ud588\uc2b5\ub2c8\ub2e4.",handleClick:function(){u(!s)}})}),(0,o.jsx)(c.ZP,{length:"long",content:"\uc2e0\uccad\ud558\uae30",color:!!s,handleClick:function(){e.push({pathname:"/team/".concat(l,"/apply/question"),query:{teamId:t}})}})]})}},82916:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/team/[teamName]/apply/rules",function(){return t(76138)}])},95219:function(e){e.exports={button:"Button_button__2KtT-",coloredButton:"Button_coloredButton__2rHKf",short:"Button_short__3ec2l",long:"Button_long__3x6n-",round:"Button_round__TOsoe",checkBox:"Button_checkBox__3lnZa"}}},function(e){e.O(0,[8430,2054,9774,2888,179],(function(){return n=82916,e(e.s=n);var n}));var n=e.O();_N_E=n}]);