(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[725],{9043:function(n,e,t){"use strict";t.d(e,{D:function(){return i},Z:function(){return f}});var l=t(5893),s=(t(7294),t(1192)),r=t(5219),a=t.n(r),o=a().button,d=a().coloredButton;function i(n){var e=n.handleClick,t=n.content,r=n.length,o=(n.color,(0,s.L)(d,a()[r]));return(0,l.jsx)("button",{onClick:e,className:o,children:(0,l.jsx)("p",{children:t})})}function f(n){var e=n.handleClick,t=n.content,r=n.length,i=n.color,f=void 0!==i&&i,c=(0,s.L)(o,a()[r]),u=(0,s.L)(d,a()[r]);return(0,l.jsx)("button",{onClick:e,className:f?u:c,children:t})}},3006:function(n,e,t){"use strict";t.d(e,{Z:function(){return l.Z},D:function(){return l.D}});var l=t(9043)},8482:function(n,e,t){"use strict";t.d(e,{r:function(){return h},Z:function(){return w}});var l=t(7261),s=t(5893),r=t(7294),a=t(3935),o=t(9936);function d(){var n=(0,l.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 100;\n"]);return d=function(){return n},n}function i(){var n=(0,l.Z)(["\n  background: white;\n  width: 500px;\n  height: 600px;\n  border-radius: 15px;\n  padding: 15px;\n"]);return i=function(){return n},n}function f(){var n=(0,l.Z)(["\n  display: flex;\n  justify-content: flex-end;\n  font-size: 25px;\n"]);return f=function(){return n},n}function c(){var n=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  background: white;\n  width: 80%;\n  height: 50%;\n  border-radius: 15px;\n  padding: 15px;\n"]);return c=function(){return n},n}function u(){var n=(0,l.Z)(["\n  display: flex;\n  height: 600px;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n"]);return u=function(){return n},n}function j(){var n=(0,l.Z)(["\n  text-align: center;\n  font-size: 33px;\n  font-weight: 700;\n"]);return j=function(){return n},n}function k(){var n=(0,l.Z)(["\n  padding-top: 10px;\n  width: 400px;\n"]);return k=function(){return n},n}var h=function(n){var e=n.show,t=n.onClose,l=n.children,o=n.title,d=(0,r.useState)(!1),i=d[0],f=d[1];(0,r.useEffect)((function(){f(!0)}),[]);var c=e?(0,s.jsx)(C,{children:(0,s.jsxs)(_,{children:[(0,s.jsx)(v,{children:(0,s.jsx)("a",{href:"#",onClick:function(n){n.preventDefault(),t()},children:"x"})}),(0,s.jsxs)(g,{children:[o&&(0,s.jsx)(p,{children:o}),(0,s.jsx)(x,{children:l})]})]})}):null;if(i){var u=document.getElementById("modal-element");return a.createPortal(c,u)}return(0,s.jsx)(s.Fragment,{})},x=o.ZP.div(k()),p=o.ZP.p(j()),g=o.ZP.div(u()),_=o.ZP.div(c()),v=o.ZP.div(f()),m=o.ZP.div(i()),C=o.ZP.div(d()),w=function(n){var e=n.show,t=n.onClose,l=n.children,o=n.title,d=(0,r.useState)(!1),i=d[0],f=d[1];(0,r.useEffect)((function(){f(!0)}),[]);var c=e?(0,s.jsx)(C,{children:(0,s.jsxs)(m,{children:[(0,s.jsx)(v,{children:(0,s.jsx)("a",{href:"#",onClick:function(n){n.preventDefault(),t()},children:"x"})}),o&&(0,s.jsx)(p,{children:o}),(0,s.jsx)(x,{children:l})]})}):null;if(i){var u=document.getElementById("modal-element");return a.createPortal(c,u)}return(0,s.jsx)(s.Fragment,{})}},6022:function(n,e,t){"use strict";t.d(e,{Z:function(){return s}});var l=t(5893);t(7294);function s(n){var e=n.color;return(0,l.jsx)("div",{style:{margin:"8rem",background:e}})}},6715:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return k}});var l=t(5893),s=t(3006),r=t(8482),a=t(6022),o=t(7294),d=t(9882),i=t.n(d),f=(i().question,i().questionBox,i().proposal),c=i().proposalMember,u=(i().proposalImage,i().proposalContent),j=i().proposalAnswer;function k(){var n=(0,o.useState)(),e=n[0],t=n[1],d=(0,o.useState)(),i=d[0],k=d[1],h=function(){console.log("send accept api"),t(!1)};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.r,{show:!!e,onClose:function(){return t(!1)},title:"\uacbd\uae30\ub97c \uc218\ub77d\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{style:{textAlign:"center",width:"100%"},children:"\uacbd\uae30 \uc218\ub77d\uc804 \ubbf8\ub9ac \uc0c1\ub300\ubc29\ud300\uacfc \ub0a0\uc9dc\uc640 \uc7a5\uc18c\ub97c \uc815\ud574\uc8fc\uc138\uc694."}),(0,l.jsx)(s.Z,{content:"\uc218\ub77d\ud558\uae30",handleClick:h,length:"long",color:!0})]})}),(0,l.jsx)(r.r,{show:!!i,onClose:function(){return k(!1)},title:"\uacbd\uae30\ub97c \uac70\uc808\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"flex-start",backgroundColor:"#e5ebff",padding:"1rem",marginBottom:"1rem"},children:[(0,l.jsx)("p",{style:{textAlign:"center",width:"100%",color:"#3e3ee"},children:"\uc8fc\uc758"}),(0,l.jsx)("p",{style:{textAlign:"center",width:"100%",color:"#7e7e7e"},children:"\ud300\uc6d0 \uac70\uc808\uc2dc \ub418\ub3cc\ub9b4 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."})]}),(0,l.jsx)(s.Z,{content:"\uac70\uc808\ud558\uae30",handleClick:h,length:"long",color:!0})]})}),(0,l.jsx)(a.Z,{}),(0,l.jsx)("div",{className:f,children:(0,l.jsxs)("div",{className:c,children:[(0,l.jsxs)("div",{className:u,children:[(0,l.jsx)("div",{style:{display:"flex",justifyContent:"space-between"},children:(0,l.jsx)("p",{children:"\ud300 \uc774\ub984"})}),(0,l.jsxs)("div",{children:[(0,l.jsx)(s.Z,{handleClick:function(){k(!0)},content:"\uac70\ubd80",length:"short"}),(0,l.jsx)(s.Z,{handleClick:function(){t(!0)},content:"\uc218\ub77d",length:"short",color:!0})]})]}),(0,l.jsxs)("div",{className:j,children:[(0,l.jsxs)("div",{style:{display:"flex"},children:[(0,l.jsx)("p",{children:"\uc2b9\uc810 900\uc810"}),(0,l.jsx)("p",{children:"\uc2b9\ub960 20%"})]}),"aslkdfjalskdjflaksjdflakjsd;lfakjdf;la kjsdl;fkajsd;lfkaaslkdfjalskdjflaksjdflakjsd;lfakjdf;lakjsdl;fkajsd;lfkaaslkdfjalskdjflaksjdflakjsd;lfakjdf;lakjsdl;fkajsd;lfkaaslkdfjalskdjflaksjdflakjsd;lfakjdf;lakjsdl;fkajsd;lfkaaslkdfjalskdjflaksjdflakjsd;lfakjdf;lakjsdl;fkajsd;lfkaaslkdfjalskdjflaksjdflakjsd;lfakjdf;lakjsdl;fkajsd;lfkaaslkdfjalskdjflaksjdflakjsd;lfakjdf;lakjsdl;fkajsd;lfkaaslkdfjalskdjflaksjdflakjsd;lfakjdf;lakjsdl;fkajsd;lfkaaslkdfjalskdjflaksjdflakjsd;lfakjdf;lakjsdl;fkajsd;lfkaaslkdfjalskdjflaksjdflakjsd;lfakjdf;lakjsdl;fkajsd;lfkaaslkdfjalskdjflaksjdflakjsd;lfakjdf;lakjsdl;fkajsd;lfka"]})]})})]})}},7593:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/team/[teamName]/challenges",function(){return t(6715)}])},5219:function(n){n.exports={button:"Button_button__2KtT-",coloredButton:"Button_coloredButton__2rHKf",short:"Button_short__3ec2l",long:"Button_long__3x6n-",round:"Button_round__TOsoe"}},9882:function(n){n.exports={question:"Challenges_question__v5-dJ",questionBox:"Challenges_questionBox__8ce-3",proposal:"Challenges_proposal__36hz4",proposalImage:"Challenges_proposalImage__h3-gp",proposalContent:"Challenges_proposalContent__1mVmj",proposalAnswer:"Challenges_proposalAnswer__368Sn"}}},function(n){n.O(0,[6588,9774,2888,179],(function(){return e=7593,n(n.s=e);var e}));var e=n.O();_N_E=e}]);