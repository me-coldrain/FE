(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[725],{9043:function(n,e,t){"use strict";t.d(e,{DB:function(){return u},Jg:function(){return j},ZP:function(){return k}});var l=t(5893),r=t(8347),s=t(4328),o=(t(7294),t(1192)),a=t(5219),d=t.n(a),i=d().button,c=d().coloredButton,f=d().checkBox;function u(n){var e=n.handleClick,t=n.content,r=n.length,s=(n.color,(0,o.L)(c,d()[r]));return(0,l.jsx)("button",{onClick:e,className:s,children:(0,l.jsx)("p",{children:t})})}function j(n){var e=n.checked,t=n.handleClick,a=n.content,i=((0,r.Z)(n,["checked","handleClick","content"]),(0,o.L)(f,d().long));return(0,l.jsxs)("button",{onClick:t,className:i,children:[(0,l.jsx)("p",{children:a}),(0,l.jsx)(s.Z,{checked:e})]})}function k(n){var e=n.handleClick,t=n.content,r=n.length,s=n.color,a=void 0!==s&&s,f=(0,o.L)(i,d()[r]),u=(0,o.L)(c,d()[r]);return(0,l.jsx)("button",{onClick:e,className:a?u:f,children:t})}},3006:function(n,e,t){"use strict";t.d(e,{ZP:function(){return l.ZP},DB:function(){return l.DB},Jg:function(){return l.Jg}});var l=t(9043)},8482:function(n,e,t){"use strict";t.d(e,{r:function(){return g}});var l=t(7261),r=t(5893),s=t(3006),o=t(7294),a=t(3935),d=t(9936);function i(){var n=(0,l.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 100;\n"]);return i=function(){return n},n}function c(){var n=(0,l.Z)(["\n  background: white;\n  width: 80vw;\n  height: 80vh;\n  border-radius: 15px;\n  padding: 15px;\n"]);return c=function(){return n},n}function f(){var n=(0,l.Z)(["\n  display: flex;\n  justify-content: flex-end;\n  font-size: 25px;\n"]);return f=function(){return n},n}function u(){var n=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  background: white;\n  width: 80%;\n  min-width: 360px;\n  height: 50%;\n  border-radius: 15px;\n  padding: 15px;\n  h1 {\n    font-size: 24px;\n    color: #2f4eb4;\n  }\n  p {\n    color: #a3a3a3;\n  }\n"]);return u=function(){return n},n}function j(){var n=(0,l.Z)(["\n  display: flex;\n  height: 600px;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n"]);return j=function(){return n},n}function k(){var n=(0,l.Z)(["\n  text-align: center;\n  font-size: 33px;\n  font-weight: 700;\n"]);return k=function(){return n},n}function h(){var n=(0,l.Z)(["\n  padding-top: 10px;\n  width: 400px;\n"]);return h=function(){return n},n}function x(){var n=(0,l.Z)([""]);return x=function(){return n},n}function p(){var n=(0,l.Z)(["\n  display: flex;\n  overflow: clip;\n  flex-wrap: wrap;\n"]);return p=function(){return n},n}var g=function(n){var e=n.show,t=n.onClose,l=n.children,d=n.title,i=n.verify,c=void 0!==i&&i,f=n.checked,u=void 0!==f&&f,j=n.setChecked,k=n.verifyContent,h=void 0===k?"\ud655\uc778\ud588\uc2b5\ub2c8\ub2e4.":k,x=n.handleVerified,p=void 0===x?function(){return console.log("clicked")}:x,g=(0,o.useState)(!1),b=g[0],B=g[1];(0,o.useEffect)((function(){B(!0)}),[]);var P=e?(0,r.jsx)(y,{children:(0,r.jsxs)(Z,{children:[(0,r.jsx)(w,{children:(0,r.jsx)("a",{href:"#",onClick:function(n){n.preventDefault(),t()},children:"x"})}),(0,r.jsx)(C,{children:d&&(0,r.jsxs)(m,{children:[(0,r.jsx)("h1",{children:d}),(0,r.jsx)(v,{children:l})]})}),c&&(0,r.jsxs)(_,{children:[(0,r.jsx)("div",{style:{marginBottom:"1rem"},children:(0,r.jsx)(s.Jg,{checked:u,content:h,handleClick:j})}),(0,r.jsx)(s.ZP,{length:"long",content:"\uc2e0\uccad\ud558\uae30",color:!!u,handleClick:p})]})]})}):null;if(b){var N=document.getElementById("modal-element");return a.createPortal(P,N)}return(0,r.jsx)(r.Fragment,{})},v=d.ZP.div(p()),_=d.ZP.div(x()),m=(d.ZP.div(h()),d.ZP.div(k())),C=d.ZP.div(j()),Z=d.ZP.div(u()),w=d.ZP.div(f()),y=(d.ZP.div(c()),d.ZP.div(i()))},6022:function(n,e,t){"use strict";t.d(e,{Z:function(){return r}});var l=t(5893);t(7294);function r(n){var e=n.color;return(0,l.jsx)("div",{style:{margin:"6rem",background:e}})}},6715:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSP:function(){return h},default:function(){return x}});var l=t(5893),r=t(7294),s=t(3006),o=t(8482),a=t(6022),d=t(9882),i=t.n(d),c=(i().question,i().questionBox,i().proposal),f=i().proposalMember,u=(i().proposalImage,i().proposalContent),j=i().proposalAnswer;function k(n){console.log("props =",n);var e=(0,r.useState)(),t=e[0],d=e[1],i=(0,r.useState)(),k=i[0],h=i[1],x=function(){console.log("send accept api"),d(!1)};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.r,{show:!!t,onClose:function(){return d(!1)},title:"\uacbd\uae30\ub97c \uc218\ub77d\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{style:{textAlign:"center",width:"100%"},children:"\uacbd\uae30 \uc218\ub77d\uc804 \ubbf8\ub9ac \uc0c1\ub300\ubc29\ud300\uacfc \ub0a0\uc9dc\uc640 \uc7a5\uc18c\ub97c \uc815\ud574\uc8fc\uc138\uc694."}),(0,l.jsx)(s.ZP,{content:"\uc218\ub77d\ud558\uae30",handleClick:x,length:"long",color:!0})]})}),(0,l.jsx)(o.r,{show:!!k,onClose:function(){return h(!1)},title:"\uacbd\uae30\ub97c \uac70\uc808\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"flex-start",backgroundColor:"#e5ebff",padding:"1rem",marginBottom:"1rem"},children:[(0,l.jsx)("p",{style:{textAlign:"center",width:"100%",color:"#3e3ee"},children:"\uc8fc\uc758"}),(0,l.jsx)("p",{style:{textAlign:"center",width:"100%",color:"#7e7e7e"},children:"\ud300\uc6d0 \uac70\uc808\uc2dc \ub418\ub3cc\ub9b4 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."})]}),(0,l.jsx)(s.ZP,{content:"\uac70\uc808\ud558\uae30",handleClick:x,length:"long",color:!0})]})}),(0,l.jsx)(a.Z,{}),(0,l.jsx)("div",{className:c,children:(0,l.jsxs)("div",{className:f,children:[(0,l.jsxs)("div",{className:u,children:[(0,l.jsx)("div",{style:{display:"flex",justifyContent:"space-between"},children:(0,l.jsx)("p",{children:"\ud300 \uc774\ub984"})}),(0,l.jsxs)("div",{children:[(0,l.jsx)(s.ZP,{handleClick:function(){h(!0)},content:"\uac70\ubd80",length:"short"}),(0,l.jsx)(s.ZP,{handleClick:function(){d(!0)},content:"\uc218\ub77d",length:"short",color:!0})]})]}),(0,l.jsxs)("div",{className:j,children:[(0,l.jsxs)("div",{style:{display:"flex"},children:[(0,l.jsx)("p",{children:"\uc2b9\uc810 900\uc810"}),(0,l.jsx)("p",{children:"\uc2b9\ub960 20%"})]}),"aslkdfjalskdjflaksjdflakjsd;lfakjdf;la kjsdl;fkajsd;lfkaaslkdfjalskdjflaksjdflakjsd;lfakjdf;lakjsdl;fkajsd;lfkaaslkdfjalskdjflaksjdflakjsd;lfakjdf;lakjsdl;fkajsd;lfkaaslkdfjalskdjflaksjdflakjsd;lfakjdf;lakjsdl;fkajsd;lfkaaslkdfjalskdjflaksjdflakjsd;lfakjdf;lakjsdl;fkajsd;lfkaaslkdfjalskdjflaksjdflakjsd;lfakjdf;lakjsdl;fkajsd;lfkaaslkdfjalskdjflaksjdflakjsd;lfakjdf;lakjsdl;fkajsd;lfkaaslkdfjalskdjflaksjdflakjsd;lfakjdf;lakjsdl;fkajsd;lfkaaslkdfjalskdjflaksjdflakjsd;lfakjdf;lakjsdl;fkajsd;lfkaaslkdfjalskdjflaksjdflakjsd;lfakjdf;lakjsdl;fkajsd;lfkaaslkdfjalskdjflaksjdflakjsd;lfakjdf;lakjsdl;fkajsd;lfka"]})]})})]})}var h=!0,x=function(n){var e=n.data,t=n.teamId;return(0,l.jsx)(k,{data:e,teamId:t})}},7593:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/team/[teamName]/challenges",function(){return t(6715)}])},5219:function(n){n.exports={button:"Button_button__2KtT-",coloredButton:"Button_coloredButton__2rHKf",short:"Button_short__3ec2l",long:"Button_long__3x6n-",round:"Button_round__TOsoe",checkBox:"Button_checkBox__3lnZa"}},9882:function(n){n.exports={question:"Challenges_question__v5-dJ",questionBox:"Challenges_questionBox__8ce-3",proposal:"Challenges_proposal__36hz4",proposalImage:"Challenges_proposalImage__h3-gp",proposalContent:"Challenges_proposalContent__1mVmj",proposalAnswer:"Challenges_proposalAnswer__368Sn"}}},function(n){n.O(0,[8430,4328,6588,9774,2888,179],(function(){return e=7593,n(n.s=e);var e}));var e=n.O();_N_E=e}]);