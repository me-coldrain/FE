(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9470],{59043:function(n,t,e){"use strict";e.d(t,{DB:function(){return v},Jg:function(){return g},ZP:function(){return b}});var r=e(26265),o=e(85893),c=e(38347),i=e(22887),u=(e(67294),e(81192)),s=e(95219),a=e.n(s);function l(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function f(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?l(Object(e),!0).forEach((function(t){(0,r.Z)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var d=a().button,h=a().coloredButton,p=a().checkBox;function v(n){var t=n.handleClick,e=n.content,r=n.length,c=(n.color,(0,u.L)(h,a()[r]));return(0,o.jsx)("button",{onClick:t,className:c,children:(0,o.jsx)("p",{children:e})})}function g(n){var t=n.checked,e=n.handleClick,r=n.content,s=((0,c.Z)(n,["checked","handleClick","content"]),(0,u.L)(p,a().long));return(0,o.jsxs)("button",{onClick:e,className:s,children:[(0,o.jsx)("p",{children:r}),(0,o.jsx)(i.Z,{checked:t})]})}function b(n){var t=n.handleClick,e=n.content,r=n.length,i=n.color,s=void 0!==i&&i,l=(0,c.Z)(n,["handleClick","content","length","color"]),p=(0,u.L)(d,a()[r]),v=(0,u.L)(h,a()[r]);return(0,o.jsx)("button",f(f({onClick:t,className:s?v:p},l),{},{children:e}))}},23006:function(n,t,e){"use strict";e.d(t,{ZP:function(){return r.ZP},DB:function(){return r.DB},Jg:function(){return r.Jg}});var r=e(59043)},58482:function(n,t,e){"use strict";e.d(t,{r:function(){return x}});var r=e(27261),o=e(85893),c=e(23006),i=e(67294),u=e(73935),s=e(59936);function a(){var n=(0,r.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 100;\n"]);return a=function(){return n},n}function l(){var n=(0,r.Z)(["\n  background: white;\n  width: 80vw;\n  height: 80vh;\n  border-radius: 15px;\n  padding: 15px;\n"]);return l=function(){return n},n}function f(){var n=(0,r.Z)(["\n  display: flex;\n  justify-content: flex-end;\n  font-size: 25px;\n"]);return f=function(){return n},n}function d(){var n=(0,r.Z)(["\n  display: flex;\n  flex-direction: column;\n  background: white;\n  width: 80%;\n  min-width: 360px;\n  height: 50%;\n  border-radius: 15px;\n  padding: 15px;\n  h1 {\n    font-size: 24px;\n    color: #2f4eb4;\n  }\n  p {\n    color: #a3a3a3;\n  }\n"]);return d=function(){return n},n}function h(){var n=(0,r.Z)(["\n  display: flex;\n  height: 600px;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n"]);return h=function(){return n},n}function p(){var n=(0,r.Z)(["\n  text-align: center;\n  font-size: 33px;\n  font-weight: 700;\n"]);return p=function(){return n},n}function v(){var n=(0,r.Z)(["\n  padding-top: 10px;\n  width: 400px;\n"]);return v=function(){return n},n}function g(){var n=(0,r.Z)([""]);return g=function(){return n},n}function b(){var n=(0,r.Z)(["\n  display: flex;\n  overflow: clip;\n  flex-wrap: wrap;\n"]);return b=function(){return n},n}var x=function(n){var t=n.show,e=n.onClose,r=n.children,s=n.title,a=n.verify,l=void 0!==a&&a,f=n.checked,d=void 0!==f&&f,h=n.setChecked,p=n.verifyContent,v=void 0===p?"\ud655\uc778\ud588\uc2b5\ub2c8\ub2e4.":p,g=n.handleVerified,b=void 0===g?function(){return console.log("clicked")}:g,x=n.buttonContent,P=(0,i.useState)(!1),E=P[0],_=P[1];(0,i.useEffect)((function(){_(!0)}),[]);var C=t?(0,o.jsx)(w,{children:(0,o.jsxs)(m,{children:[(0,o.jsx)(Z,{children:(0,o.jsx)("a",{href:"#",onClick:function(n){n.preventDefault(),e()},children:"x"})}),(0,o.jsx)(y,{children:s&&(0,o.jsxs)(O,{children:[(0,o.jsx)("h1",{children:s}),(0,o.jsx)(k,{children:r})]})}),l?(0,o.jsxs)(j,{children:[(0,o.jsx)("div",{style:{marginBottom:"1rem"},children:(0,o.jsx)(c.Jg,{checked:d,content:v,handleClick:h})}),(0,o.jsx)(c.ZP,{length:"long",content:x||"\uc2e0\uccad\ud558\uae30",color:!!d,handleClick:b})]}):(0,o.jsx)(j,{children:(0,o.jsx)(c.ZP,{length:"long",content:x||"\uc2e0\uccad\ud558\uae30",color:!0,handleClick:b})})]})}):null;if(E){var B=document.getElementById("modal-element");return u.createPortal(C,B)}return(0,o.jsx)(o.Fragment,{})},k=s.ZP.div(b()),j=s.ZP.div(g()),O=(s.ZP.div(v()),s.ZP.div(p())),y=s.ZP.div(h()),m=s.ZP.div(d()),Z=s.ZP.div(f()),w=(s.ZP.div(l()),s.ZP.div(a()))},65814:function(n,t,e){"use strict";e.d(t,{$:function(){return v}});var r=e(809),o=e.n(r),c=e(26265),i=e(92447),u=e(74047),s=e(52700),a=e(6371),l=JSON.parse('{"pO":"DEBUG","Vi":"PROD","LB":{"LOCAL":"http://localhost:3000/api/v1","DEV":"","PROD":"http://ec2-52-78-86-217.ap-northeast-2.compute.amazonaws.com:3000/api/v1"}}'),f=e(34155),d=new(function(){function n(){(0,u.Z)(this,n),(0,c.Z)(this,"ENV",void 0),(0,c.Z)(this,"LOG_LEVEL",void 0),(0,c.Z)(this,"SERVER_URL",void 0),(0,c.Z)(this,"TOKEN",void 0),this.LOG_LEVEL=l.pO,this.ENV=l.Vi,this.SERVER_URL=l.LB[this.ENV],this.TOKEN=f.env.TEMP_TOKEN}return(0,s.Z)(n,[{key:"setToken",value:function(n,t,e){try{return a.t6.setCookie(n,t,e)}catch(r){return console.log("getting token: services: ",r),!1}}},{key:"getToken",value:function(){try{return a.t6.getCookie("token")}catch(n){return console.log("getting token: services: ",n),!1}}},{key:"getUser",value:function(){var n=(0,i.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t={},n.abrupt("return",t);case 5:return n.prev=5,n.t0=n.catch(0),console.log("Config: storeHasPressed: error =",n.t0),n.abrupt("return",!1);case 9:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(){return n.apply(this,arguments)}}()},{key:"ServerUrl",get:function(){return this.SERVER_URL}}]),n}());function h(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function p(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?h(Object(e),!0).forEach((function(t){(0,c.Z)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):h(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var v=function(){var n=(0,i.Z)(o().mark((function n(t){var e,r,c,i,u,s,a,l,f,h,v,g,b,x,k,j,O,y,m,Z,w;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=t.endpoint,r=t.method,c=void 0===r?"GET":r,i=t.retries,void 0===i?3:i,u=t.params,s=void 0===u?null:u,a=t.auth,l=void 0===a||a,f=t.isFile,h=void 0!==f&&f,v=t.notJson,g=void 0!==v&&v,b=t.token,x=p(p({method:c,headers:!0===h?{}:{Accept:"application/json","Content-Type":"application/json"}},s&&!0===h&&{body:s}),s&&!1===h&&{body:JSON.stringify(s)}),k="https://90minglm.kro.kr/api/"+e,n.prev=3,!l){n.next=39;break}if(j=d.getToken()||b){n.next=8;break}throw{message:"NO TOKENS",status:406};case 8:return x.headers.Authorization="Bearer ".concat(j),n.next=11,fetch(k,x);case 11:if(O=n.sent,console.log("makeRequest: res =",O),!(g&&!h&&O.status<=201)){n.next=15;break}return n.abrupt("return",O);case 15:if(!(!1===h&&O.status<=201)){n.next=25;break}return n.next=18,O.json();case 18:if(!(y=n.sent)){n.next=24;break}return console.log("makeRequest: json =",y),n.abrupt("return",y);case 24:return n.abrupt("return",O);case 25:if(!(!0===h&&O.status<=201)){n.next=32;break}return n.t0=console,n.next=29,O.json();case 29:return n.t1=n.sent,n.t0.log.call(n.t0,n.t1),n.abrupt("return",O);case 32:return n.next=34,O.json();case 34:throw n.t2=n.sent,n.t3=O.status,{message:n.t2,status:n.t3};case 39:return n.next=41,fetch(k,x);case 41:if(m=n.sent,console.log("res =",m),200!==m.status){n.next=49;break}return n.next=46,m.json();case 46:return Z=n.sent,console.log("json =",Z),n.abrupt("return",Z);case 49:if(201!==m.status||"members/signup"!==e){n.next=51;break}return n.abrupt("return",m);case 51:if(201!==m.status){n.next=58;break}return n.next=54,m.json();case 54:return w=n.sent,console.log("json =",w),d.setToken("token",null===w||void 0===w?void 0:w.accesstoken,30),n.abrupt("return",w);case 58:n.next=64;break;case 60:return n.prev=60,n.t4=n.catch(3),console.log("makeRequest: error =",n.t4),n.abrupt("return",!1);case 64:case"end":return n.stop()}}),n,null,[[3,60]])})));return function(t){return n.apply(this,arguments)}}()},95219:function(n){n.exports={button:"Button_button__2KtT-",coloredButton:"Button_coloredButton__2rHKf",short:"Button_short__3ec2l",long:"Button_long__3x6n-",round:"Button_round__TOsoe",checkBox:"Button_checkBox__3lnZa"}}}]);