(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8623],{7938:function(n,e,t){"use strict";t.d(e,{K:function(){return h},Z:function(){return f}});var r=t(5893),o=(t(7294),t(1260));function i(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16;return"".concat(n/e,"rem")}var c=t(213),u=t.n(c),s=u().login,a=u().sign,l=u().nametag,d=u().signupBox;function h(n){var e=n.placeholder,t=void 0===e?"":e,c=(n.type,n.label),u=void 0===c?"":c,s=(n.id,n.onChange),a=n.value,l=void 0===a?"":a,d=(n.signup,n.error),h=void 0===d||d,f=(n.success,n.multiLine),p=void 0===f?5:f;return(0,r.jsx)(o.Z,{id:"fullWidth",value:l,onChange:s,label:u,multiline:!0,fullWidth:!0,rows:p,placeholder:t,sx:(h?("right ".concat(i(12)," center"),"".concat(i(16)," ").concat(i(16))):("right ".concat(i(12)," center"),"".concat(i(16)," ").concat(i(16))),{maxWidth:"100%"})})}function f(n){var e=n.placeholder,t=void 0===e?"":e,o=n.type,i=void 0===o?"":o,c=n.normal,u=n.label,h=void 0===u?"":u,f=n.id,p=void 0===f?"":f,v=n.onChange,x=n.value,g=void 0===x?void 0:x,m=n.signup,j=n.max;return c?(0,r.jsx)("input",{className:s,placeholder:t,type:i,id:p,value:g,onChange:v,maxLength:j}):m?(0,r.jsxs)("div",{className:d,children:[(0,r.jsx)("label",{htmlFor:p,className:l,children:h}),(0,r.jsx)("input",{className:a,id:p,placeholder:t,type:i,onChange:v,value:g,maxLength:j})]}):(0,r.jsx)(r.Fragment,{})}},9043:function(n,e,t){"use strict";t.d(e,{DB:function(){return h},Jg:function(){return f},ZP:function(){return p}});var r=t(5893),o=t(8347),i=t(4328),c=(t(7294),t(1192)),u=t(5219),s=t.n(u),a=s().button,l=s().coloredButton,d=s().checkBox;function h(n){var e=n.handleClick,t=n.content,o=n.length,i=(n.color,(0,c.L)(l,s()[o]));return(0,r.jsx)("button",{onClick:e,className:i,children:(0,r.jsx)("p",{children:t})})}function f(n){var e=n.checked,t=n.handleClick,u=n.content,a=((0,o.Z)(n,["checked","handleClick","content"]),(0,c.L)(d,s().long));return(0,r.jsxs)("button",{onClick:t,className:a,children:[(0,r.jsx)("p",{children:u}),(0,r.jsx)(i.Z,{checked:e})]})}function p(n){var e=n.handleClick,t=n.content,o=n.length,i=n.color,u=void 0!==i&&i,d=(0,c.L)(a,s()[o]),h=(0,c.L)(l,s()[o]);return(0,r.jsx)("button",{onClick:e,className:u?h:d,children:t})}},3006:function(n,e,t){"use strict";t.d(e,{ZP:function(){return r.ZP},DB:function(){return r.DB},Jg:function(){return r.Jg}});var r=t(9043)},8482:function(n,e,t){"use strict";t.d(e,{r:function(){return m}});var r=t(7261),o=t(5893),i=t(3006),c=t(7294),u=t(3935),s=t(9936);function a(){var n=(0,r.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 100;\n"]);return a=function(){return n},n}function l(){var n=(0,r.Z)(["\n  background: white;\n  width: 80vw;\n  height: 80vh;\n  border-radius: 15px;\n  padding: 15px;\n"]);return l=function(){return n},n}function d(){var n=(0,r.Z)(["\n  display: flex;\n  justify-content: flex-end;\n  font-size: 25px;\n"]);return d=function(){return n},n}function h(){var n=(0,r.Z)(["\n  display: flex;\n  flex-direction: column;\n  background: white;\n  width: 80%;\n  min-width: 360px;\n  height: 50%;\n  border-radius: 15px;\n  padding: 15px;\n  h1 {\n    font-size: 24px;\n    color: #2f4eb4;\n  }\n  p {\n    color: #a3a3a3;\n  }\n"]);return h=function(){return n},n}function f(){var n=(0,r.Z)(["\n  display: flex;\n  height: 600px;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n"]);return f=function(){return n},n}function p(){var n=(0,r.Z)(["\n  text-align: center;\n  font-size: 33px;\n  font-weight: 700;\n"]);return p=function(){return n},n}function v(){var n=(0,r.Z)(["\n  padding-top: 10px;\n  width: 400px;\n"]);return v=function(){return n},n}function x(){var n=(0,r.Z)([""]);return x=function(){return n},n}function g(){var n=(0,r.Z)(["\n  display: flex;\n  overflow: clip;\n  flex-wrap: wrap;\n"]);return g=function(){return n},n}var m=function(n){var e=n.show,t=n.onClose,r=n.children,s=n.title,a=n.verify,l=void 0!==a&&a,d=n.checked,h=void 0!==d&&d,f=n.setChecked,p=n.verifyContent,v=void 0===p?"\ud655\uc778\ud588\uc2b5\ub2c8\ub2e4.":p,x=n.handleVerified,g=void 0===x?function(){return console.log("clicked")}:x,m=(0,c.useState)(!1),O=m[0],E=m[1];(0,c.useEffect)((function(){E(!0)}),[]);var P=e?(0,o.jsx)(w,{children:(0,o.jsxs)(y,{children:[(0,o.jsx)(Z,{children:(0,o.jsx)("a",{href:"#",onClick:function(n){n.preventDefault(),t()},children:"x"})}),(0,o.jsx)(b,{children:s&&(0,o.jsxs)(_,{children:[(0,o.jsx)("h1",{children:s}),(0,o.jsx)(j,{children:r})]})}),l&&(0,o.jsxs)(k,{children:[(0,o.jsx)("div",{style:{marginBottom:"1rem"},children:(0,o.jsx)(i.Jg,{checked:h,content:v,handleClick:f})}),(0,o.jsx)(i.ZP,{length:"long",content:"\uc2e0\uccad\ud558\uae30",color:!!h,handleClick:g})]})]})}):null;if(O){var N=document.getElementById("modal-element");return u.createPortal(P,N)}return(0,o.jsx)(o.Fragment,{})},j=s.ZP.div(g()),k=s.ZP.div(x()),_=(s.ZP.div(v()),s.ZP.div(p())),b=s.ZP.div(f()),y=s.ZP.div(h()),Z=s.ZP.div(d()),w=(s.ZP.div(l()),s.ZP.div(a()))},6022:function(n,e,t){"use strict";t.d(e,{Z:function(){return o}});var r=t(5893);t(7294);function o(n){var e=n.color;return(0,r.jsx)("div",{style:{margin:"6rem",background:e}})}},4134:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSP:function(){return k},default:function(){return _}});var r=t(5893),o=t(7294),i=t(809),c=t.n(i),u=t(2447),s=t(5814),a=t(1163),l=t(6022),d=t(7938),h=t(152),f=t(2950),p=t.n(f),v=t(8482),x=p().question,g=p().questionBox,m=p().container;var j=function(n){var e=(0,a.useRouter)(),t=e.query,i=t.teamId,f=(t.teamName,n.data),p=(0,o.useState)(""),j=p[0],k=p[1],_=(0,o.useState)(!1),b=_[0],y=_[1],Z=function(){var n=(0,u.Z)(c().mark((function n(){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:(0,s.$)({endpoint:"home/teams/".concat(i,"/participate"),method:"POST",params:{answer:j},auth:!0}).then((function(){return y(!0)}));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(v.r,{show:b,onClose:function(){e.push("/")},title:"\uc2e0\uccad\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",children:(0,r.jsx)("p",{children:"\uc2e0\uccad\ud55c \ud300\uc740 \ub9c8\uc774\ud398\uc774\uc9c0\uc5d0\uc11c \ud655\uc778\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. "})}),(0,r.jsxs)("div",{className:x,children:[(0,r.jsx)(l.Z,{}),(0,r.jsx)("h1",{children:"\ud300\uc6d0\uc774 \ub418\uae30 \uc704\ud574 \ub2f5\ubcc0\uc744 \uc791\uc131\ud574\uc8fc\uc138\uc694."}),(0,r.jsx)("p",{children:"Q. \uc0ac\uc804 \uc9c8\ubb38"}),(0,r.jsx)("p",{children:"\ud300 \ub9ac\ub354\uc5d0\uac8c\ub9cc \uacf5\uac1c\ub429\ub2c8\ub2e4."}),(0,r.jsx)("div",{className:g,children:(0,r.jsx)("p",{children:null===f||void 0===f?void 0:f.question})})]}),(0,r.jsx)("div",{className:m,children:(0,r.jsx)(d.K,{label:"\ud300 \uc2e0\uccad",value:j,onChange:function(n){j.length<=200&&k(n.currentTarget.value)},placeholder:"10\uae00\uc790 \uc774\uc0c1 \uc791\uc131\ud574\uc8fc\uc138\uc694 (200)"})}),(0,r.jsx)(h.Xp,{content:"\uc2e0\uccad\ud558\uae30",activeStyle:!0,handleClick:Z})]})},k=!0,_=function(n){var e=n.data;return(0,r.jsx)(j,{data:e})}},5814:function(n,e,t){"use strict";t.d(e,{$:function(){return v}});var r=t(809),o=t.n(r),i=t(6265),c=t(2447),u=t(4047),s=t(2700),a=t(6371),l=JSON.parse('{"pO":"DEBUG","Vi":"PROD","LB":{"LOCAL":"http://localhost:3000/api/v1","DEV":"","PROD":"http://ec2-52-78-86-217.ap-northeast-2.compute.amazonaws.com:3000/api/v1"}}'),d=t(46),h=new(function(){function n(){(0,u.Z)(this,n),(0,i.Z)(this,"ENV",void 0),(0,i.Z)(this,"LOG_LEVEL",void 0),(0,i.Z)(this,"SERVER_URL",void 0),(0,i.Z)(this,"TOKEN",void 0),this.LOG_LEVEL=l.pO,this.ENV=l.Vi,this.SERVER_URL=l.LB[this.ENV],this.TOKEN=d.env.TEMP_TOKEN}return(0,s.Z)(n,[{key:"setToken",value:function(n,e,t){try{return a.t6.setCookie(n,e,t)}catch(r){return console.log("getting token: services: ",r),!1}}},{key:"getToken",value:function(){try{return a.t6.getCookie("token")}catch(n){return console.log("getting token: services: ",n),!1}}},{key:"getUser",value:function(){var n=(0,c.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e={},n.abrupt("return",e);case 5:return n.prev=5,n.t0=n.catch(0),console.log("Config: storeHasPressed: error =",n.t0),n.abrupt("return",!1);case 9:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(){return n.apply(this,arguments)}}()},{key:"ServerUrl",get:function(){return this.SERVER_URL}}]),n}());function f(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function p(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?f(Object(t),!0).forEach((function(e){(0,i.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var v=function(){var n=(0,c.Z)(o().mark((function n(e){var t,r,i,c,u,s,a,l,d,f,v,x,g,m,j,k,_,b,y;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=e.endpoint,r=e.method,i=void 0===r?"GET":r,c=e.retries,void 0===c?3:c,u=e.params,s=void 0===u?null:u,a=e.auth,l=void 0===a||a,d=e.isFile,f=void 0!==d&&d,v=e.token,x=p(p({method:i,headers:!0===f?{}:{Accept:"application/json","Content-Type":"application/json"}},s&&!0===f&&{body:s}),s&&!1===f&&{body:JSON.stringify(s)}),g="http://43.200.163.208/api/"+t,n.prev=3,!l){n.next=28;break}if(m=h.getToken()||v){n.next=8;break}throw{message:"NO TOKENS",status:406};case 8:return x.headers.Authorization="Bearer ".concat(m),n.next=11,fetch(g,x);case 11:if(j=n.sent,console.log("makeRequest: res =",j),!1!==f||200!==j.status){n.next=19;break}return n.next=16,j.json();case 16:return k=n.sent,console.log("makeRequest: json =",k),n.abrupt("return",k);case 19:if(!0!==f||200!==j.status){n.next=21;break}return n.abrupt("return",j);case 21:return n.next=23,j.json();case 23:throw n.t0=n.sent,n.t1=j.status,{message:n.t0,status:n.t1};case 28:return n.next=30,fetch(g,x);case 30:if(_=n.sent,console.log("res =",_),200!==_.status){n.next=38;break}return n.next=35,_.json();case 35:return b=n.sent,console.log("json =",b),n.abrupt("return",b);case 38:if(201!==_.status){n.next=45;break}return n.next=41,_.json();case 41:return y=n.sent,console.log("json =",y),h.setToken("token",null===y||void 0===y?void 0:y.accesstoken,30),n.abrupt("return",y);case 45:n.next=51;break;case 47:return n.prev=47,n.t2=n.catch(3),console.log("makeRequest: error =",n.t2),n.abrupt("return",!1);case 51:case"end":return n.stop()}}),n,null,[[3,47]])})));return function(e){return n.apply(this,arguments)}}()},6954:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/team/[teamName]/apply/question",function(){return t(4134)}])},213:function(n){n.exports={login:"Input_login__22loO",signupBox:"Input_signupBox__2e3jM",nametag:"Input_nametag__2ku1G",sign:"Input_sign__2n2ug"}},5219:function(n){n.exports={button:"Button_button__2KtT-",coloredButton:"Button_coloredButton__2rHKf",short:"Button_short__3ec2l",long:"Button_long__3x6n-",round:"Button_round__TOsoe",checkBox:"Button_checkBox__3lnZa"}},2950:function(n){n.exports={question:"Question_question__ptlyi",questionBox:"Question_questionBox__2Nd1l",container:"Question_container__2spxA"}}},function(n){n.O(0,[8430,1260,4328,6588,9774,2888,179],(function(){return e=6954,n(n.s=e);var e}));var e=n.O();_N_E=e}]);