(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[725],{9043:function(n,e,t){"use strict";t.d(e,{DB:function(){return f},Jg:function(){return h},ZP:function(){return j}});var r=t(5893),l=t(8347),o=t(4328),s=(t(7294),t(1192)),i=t(5219),a=t.n(i),c=a().button,d=a().coloredButton,u=a().checkBox;function f(n){var e=n.handleClick,t=n.content,l=n.length,o=(n.color,(0,s.L)(d,a()[l]));return(0,r.jsx)("button",{onClick:e,className:o,children:(0,r.jsx)("p",{children:t})})}function h(n){var e=n.checked,t=n.handleClick,i=n.content,c=((0,l.Z)(n,["checked","handleClick","content"]),(0,s.L)(u,a().long));return(0,r.jsxs)("button",{onClick:t,className:c,children:[(0,r.jsx)("p",{children:i}),(0,r.jsx)(o.Z,{checked:e})]})}function j(n){var e=n.handleClick,t=n.content,l=n.length,o=n.color,i=void 0!==o&&o,u=(0,s.L)(c,a()[l]),f=(0,s.L)(d,a()[l]);return(0,r.jsx)("button",{onClick:e,className:i?f:u,children:t})}},3006:function(n,e,t){"use strict";t.d(e,{ZP:function(){return r.ZP},DB:function(){return r.DB},Jg:function(){return r.Jg}});var r=t(9043)},8482:function(n,e,t){"use strict";t.d(e,{r:function(){return k},Z:function(){return y}});var r=t(7261),l=t(5893),o=t(7294),s=t(3935),i=t(9936);function a(){var n=(0,r.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 100;\n"]);return a=function(){return n},n}function c(){var n=(0,r.Z)(["\n  background: white;\n  width: 80vw;\n  height: 80vh;\n  border-radius: 15px;\n  padding: 15px;\n"]);return c=function(){return n},n}function d(){var n=(0,r.Z)(["\n  display: flex;\n  justify-content: flex-end;\n  font-size: 25px;\n"]);return d=function(){return n},n}function u(){var n=(0,r.Z)(["\n  display: flex;\n  flex-direction: column;\n  background: white;\n  width: 80%;\n  height: 50%;\n  border-radius: 15px;\n  padding: 15px;\n  h1 {\n    font-size: 24px;\n    color: #2f4eb4;\n  }\n  p {\n    color: #a3a3a3;\n  }\n"]);return u=function(){return n},n}function f(){var n=(0,r.Z)(["\n  display: flex;\n  height: 600px;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n"]);return f=function(){return n},n}function h(){var n=(0,r.Z)(["\n  text-align: center;\n  font-size: 33px;\n  font-weight: 700;\n"]);return h=function(){return n},n}function j(){var n=(0,r.Z)(["\n  padding-top: 10px;\n  width: 400px;\n"]);return j=function(){return n},n}var k=function(n){var e=n.show,t=n.onClose,r=n.children,i=n.title,a=(0,o.useState)(!1),c=a[0],d=a[1];(0,o.useEffect)((function(){d(!0)}),[]);var u=e?(0,l.jsx)(w,{children:(0,l.jsxs)(m,{children:[(0,l.jsx)(v,{children:(0,l.jsx)("a",{href:"#",onClick:function(n){n.preventDefault(),t()},children:"x"})}),(0,l.jsx)(g,{children:i&&(0,l.jsxs)(x,{children:[(0,l.jsx)("h1",{children:i}),(0,l.jsx)("p",{children:r})]})})]})}):null;if(c){var f=document.getElementById("modal-element");return s.createPortal(u,f)}return(0,l.jsx)(l.Fragment,{})},p=i.ZP.div(j()),x=i.ZP.p(h()),g=i.ZP.div(f()),m=i.ZP.div(u()),v=i.ZP.div(d()),_=i.ZP.div(c()),w=i.ZP.div(a()),y=function(n){var e=n.show,t=n.onClose,r=n.children,i=n.title,a=(0,o.useState)(!1),c=a[0],d=a[1];(0,o.useEffect)((function(){d(!0)}),[]);var u=e?(0,l.jsx)(w,{children:(0,l.jsxs)(_,{children:[(0,l.jsx)(v,{children:(0,l.jsx)("a",{href:"#",onClick:function(n){n.preventDefault(),t()},children:"x"})}),i&&(0,l.jsx)(x,{children:i}),(0,l.jsx)(p,{children:r})]})}):null;if(c){var f=document.getElementById("modal-element");return s.createPortal(u,f)}return(0,l.jsx)(l.Fragment,{})}},6022:function(n,e,t){"use strict";t.d(e,{Z:function(){return l}});var r=t(5893);t(7294);function l(n){var e=n.color;return(0,r.jsx)("div",{style:{margin:"6rem",background:e}})}},6715:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return j}});var r=t(5893),l=t(3006),o=t(8482),s=t(6022),i=t(7294),a=t(9882),c=t.n(a),d=(c().question,c().questionBox,c().proposal),u=c().proposalMember,f=(c().proposalImage,c().proposalContent),h=c().proposalAnswer;function j(){var n=(0,i.useState)(),e=n[0],t=n[1],a=(0,i.useState)(),c=a[0],j=a[1],k=function(){console.log("send accept api"),t(!1)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.r,{show:!!e,onClose:function(){return t(!1)},title:"\uacbd\uae30\ub97c \uc218\ub77d\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{style:{textAlign:"center",width:"100%"},children:"\uacbd\uae30 \uc218\ub77d\uc804 \ubbf8\ub9ac \uc0c1\ub300\ubc29\ud300\uacfc \ub0a0\uc9dc\uc640 \uc7a5\uc18c\ub97c \uc815\ud574\uc8fc\uc138\uc694."}),(0,r.jsx)(l.ZP,{content:"\uc218\ub77d\ud558\uae30",handleClick:k,length:"long",color:!0})]})}),(0,r.jsx)(o.r,{show:!!c,onClose:function(){return j(!1)},title:"\uacbd\uae30\ub97c \uac70\uc808\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"flex-start",backgroundColor:"#e5ebff",padding:"1rem",marginBottom:"1rem"},children:[(0,r.jsx)("p",{style:{textAlign:"center",width:"100%",color:"#3e3ee"},children:"\uc8fc\uc758"}),(0,r.jsx)("p",{style:{textAlign:"center",width:"100%",color:"#7e7e7e"},children:"\ud300\uc6d0 \uac70\uc808\uc2dc \ub418\ub3cc\ub9b4 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."})]}),(0,r.jsx)(l.ZP,{content:"\uac70\uc808\ud558\uae30",handleClick:k,length:"long",color:!0})]})}),(0,r.jsx)(s.Z,{}),(0,r.jsx)("div",{className:d,children:(0,r.jsxs)("div",{className:u,children:[(0,r.jsxs)("div",{className:f,children:[(0,r.jsx)("div",{style:{display:"flex",justifyContent:"space-between"},children:(0,r.jsx)("p",{children:"\ud300 \uc774\ub984"})}),(0,r.jsxs)("div",{children:[(0,r.jsx)(l.ZP,{handleClick:function(){j(!0)},content:"\uac70\ubd80",length:"short"}),(0,r.jsx)(l.ZP,{handleClick:function(){t(!0)},content:"\uc218\ub77d",length:"short",color:!0})]})]}),(0,r.jsxs)("div",{className:h,children:[(0,r.jsxs)("div",{style:{display:"flex"},children:[(0,r.jsx)("p",{children:"\uc2b9\uc810 900\uc810"}),(0,r.jsx)("p",{children:"\uc2b9\ub960 20%"})]}),"aslkdfjalskdjflaksjdflakjsd;lfakjdf;la kjsdl;fkajsd;lfkaaslkdfjalskdjflaksjdflakjsd;lfakjdf;lakjsdl;fkajsd;lfkaaslkdfjalskdjflaksjdflakjsd;lfakjdf;lakjsdl;fkajsd;lfkaaslkdfjalskdjflaksjdflakjsd;lfakjdf;lakjsdl;fkajsd;lfkaaslkdfjalskdjflaksjdflakjsd;lfakjdf;lakjsdl;fkajsd;lfkaaslkdfjalskdjflaksjdflakjsd;lfakjdf;lakjsdl;fkajsd;lfkaaslkdfjalskdjflaksjdflakjsd;lfakjdf;lakjsdl;fkajsd;lfkaaslkdfjalskdjflaksjdflakjsd;lfakjdf;lakjsdl;fkajsd;lfkaaslkdfjalskdjflaksjdflakjsd;lfakjdf;lakjsdl;fkajsd;lfkaaslkdfjalskdjflaksjdflakjsd;lfakjdf;lakjsdl;fkajsd;lfkaaslkdfjalskdjflaksjdflakjsd;lfakjdf;lakjsdl;fkajsd;lfka"]})]})})]})}},7593:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/team/[teamName]/challenges",function(){return t(6715)}])},5219:function(n){n.exports={button:"Button_button__2KtT-",coloredButton:"Button_coloredButton__2rHKf",short:"Button_short__3ec2l",long:"Button_long__3x6n-",round:"Button_round__TOsoe",checkBox:"Button_checkBox__3lnZa"}},9882:function(n){n.exports={question:"Challenges_question__v5-dJ",questionBox:"Challenges_questionBox__8ce-3",proposal:"Challenges_proposal__36hz4",proposalImage:"Challenges_proposalImage__h3-gp",proposalContent:"Challenges_proposalContent__1mVmj",proposalAnswer:"Challenges_proposalAnswer__368Sn"}},46:function(n){var e,t,r=n.exports={};function l(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(n){if(e===setTimeout)return setTimeout(n,0);if((e===l||!e)&&setTimeout)return e=setTimeout,setTimeout(n,0);try{return e(n,0)}catch(t){try{return e.call(null,n,0)}catch(t){return e.call(this,n,0)}}}!function(){try{e="function"===typeof setTimeout?setTimeout:l}catch(n){e=l}try{t="function"===typeof clearTimeout?clearTimeout:o}catch(n){t=o}}();var i,a=[],c=!1,d=-1;function u(){c&&i&&(c=!1,i.length?a=i.concat(a):d=-1,a.length&&f())}function f(){if(!c){var n=s(u);c=!0;for(var e=a.length;e;){for(i=a,a=[];++d<e;)i&&i[d].run();d=-1,e=a.length}i=null,c=!1,function(n){if(t===clearTimeout)return clearTimeout(n);if((t===o||!t)&&clearTimeout)return t=clearTimeout,clearTimeout(n);try{t(n)}catch(e){try{return t.call(null,n)}catch(e){return t.call(this,n)}}}(n)}}function h(n,e){this.fun=n,this.array=e}function j(){}r.nextTick=function(n){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];a.push(new h(n,e)),1!==a.length||c||s(f)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=j,r.addListener=j,r.once=j,r.off=j,r.removeListener=j,r.removeAllListeners=j,r.emit=j,r.prependListener=j,r.prependOnceListener=j,r.listeners=function(n){return[]},r.binding=function(n){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(n){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},function(n){n.O(0,[8430,4328,6588,9774,2888,179],(function(){return e=7593,n(n.s=e);var e}));var e=n.O();_N_E=e}]);