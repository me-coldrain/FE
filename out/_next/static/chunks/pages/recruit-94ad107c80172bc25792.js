(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6136],{7938:function(t,e,n){"use strict";n.d(e,{K:function(){return d},Z:function(){return p}});var r=n(5893),o=(n(7294),n(213)),c=n.n(o),s=n(1260);function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16;return"".concat(t/e,"rem")}var u=c().login,a=c().sign,l=c().nametag,h=c().signupBox;function d(t){var e=t.placeholder,n=void 0===e?"":e,o=(t.type,t.label),c=void 0===o?"":o,u=(t.id,t.onChange),a=t.value,l=void 0===a?"":a,h=(t.signup,t.error),d=void 0===h||h,p=(t.success,t.multiLine),f=void 0===p?5:p;return(0,r.jsx)(s.Z,{id:"fullWidth",value:l,onChange:u,label:c,multiline:!0,fullWidth:!0,rows:f,placeholder:n,sx:(d?("right ".concat(i(12)," center"),"".concat(i(16)," ").concat(i(16))):("right ".concat(i(12)," center"),"".concat(i(16)," ").concat(i(16))),{maxWidth:"100%"})})}function p(t){var e=t.placeholder,n=void 0===e?"":e,o=t.type,c=void 0===o?"":o,s=t.normal,i=t.label,d=void 0===i?"":i,p=t.id,f=void 0===p?"":p,v=t.onChange,g=t.value,_=void 0===g?"":g,k=t.signup;return s?(0,r.jsx)("input",{className:u,placeholder:n,type:c,id:f,value:_,onChange:v}):k?(0,r.jsxs)("div",{className:h,children:[(0,r.jsx)("label",{htmlFor:f,className:l,children:d}),(0,r.jsx)("input",{className:a,id:f,placeholder:n,type:c,onChange:v,value:_})]}):(0,r.jsx)(r.Fragment,{})}},9043:function(t,e,n){"use strict";n.d(e,{DB:function(){return d},Jg:function(){return p},ZP:function(){return f}});var r=n(5893),o=n(8347),c=n(4328),s=(n(7294),n(1192)),i=n(5219),u=n.n(i),a=u().button,l=u().coloredButton,h=u().checkBox;function d(t){var e=t.handleClick,n=t.content,o=t.length,c=(t.color,(0,s.L)(l,u()[o]));return(0,r.jsx)("button",{onClick:e,className:c,children:(0,r.jsx)("p",{children:n})})}function p(t){var e=t.checked,n=t.handleClick,i=t.content,a=((0,o.Z)(t,["checked","handleClick","content"]),(0,s.L)(h,u().long));return(0,r.jsxs)("button",{onClick:n,className:a,children:[(0,r.jsx)("p",{children:i}),(0,r.jsx)(c.Z,{checked:e})]})}function f(t){var e=t.handleClick,n=t.content,o=t.length,c=t.color,i=void 0!==c&&c,h=(0,s.L)(a,u()[o]),d=(0,s.L)(l,u()[o]);return(0,r.jsx)("button",{onClick:e,className:i?d:h,children:n})}},9741:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return f}});var r=n(5893),o=n(9043),c=n(7938),s=n(7294),i=n(5814),u=n(1742),a=n.n(u),l=a().container,h=a().getQuestion,d=a().questionInput,p=a().buttonBottom;function f(){var t=(0,s.useState)(""),e=t[0],n=t[1],u=(0,s.useState)(""),a=u[0],f=u[1],v=(0,s.useState)(0),g=v[0],_=v[1],k=(0,s.useState)(!1),x=(k[0],k[1],(0,s.useCallback)((function(){a.length<10&&n("10\uae00\uc790 \uc774\uc0c1 \uc791\uc131\ud574\uc8fc\uc138\uc694"),a.length>=200&&n("200\uae00\uc790\ub97c \ucd08\uacfc\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),_(a.length)}),[a]));return(0,s.useEffect)(x,[a]),(0,r.jsx)("main",{children:(0,r.jsx)("section",{children:(0,r.jsxs)("div",{className:l,children:[(0,r.jsxs)("div",{className:h,children:[(0,r.jsx)("h1",{children:"\ud568\uaed8\ud560 \ud300\uc6d0\uc5d0\uac8c \uc9c8\ubb38\uc744 \uc791\uc131\ud574\uc8fc\uc138\uc694"}),(0,r.jsx)("p",{children:"\uc88b\uc740 \ud300\uc6d0\uc744 \ub9cc\ub098\uae30 \uc704\ud574 \uc9c8\ubb38\uc744 \uc791\uc131\ud574\uc8fc\uc138\uc694"})]}),(0,r.jsxs)("div",{className:d,children:[(0,r.jsxs)("div",{style:{float:"right"},children:[g," / 200"]}),(0,r.jsx)(c.K,{value:a,onChange:function(t){a.length<=200&&f(t.currentTarget.value)},error:""!==e,label:"\uc9c8\ubb38",placeholder:"\ud300 \uc774\ub984\uc744 \uac80\uc0c9\ud574\uc8fc\uc138\uc694."})]}),(0,r.jsx)("div",{className:p,children:(0,r.jsx)(o.ZP,{handleClick:function(){if(a.length<10&&n("10\uae00\uc790 \uc774\uc0c1 \uc791\uc131\ud574\uc8fc\uc138\uc694"),a.length>200&&n("200\uae00\uc790\ub97c \ucd08\uacfc\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),g>=10&&g<=200){var t={question:a};(0,i.$)({endpoint:"home/teams/8/recruit/start",method:"POST",params:t,auth:!0})}},content:"\ubaa8\uc9d1\uae00 \uc644\ub8cc",color:!0,length:"long"})})]})})})}},5814:function(t,e,n){"use strict";n.d(e,{$:function(){return v}});var r=n(809),o=n.n(r),c=n(6265),s=n(2447),i=n(4047),u=n(2700),a=n(6371),l=JSON.parse('{"pO":"DEBUG","Vi":"PROD","LB":{"LOCAL":"http://localhost:3000/api/v1","DEV":"","PROD":"http://ec2-52-78-86-217.ap-northeast-2.compute.amazonaws.com:3000/api/v1"}}'),h=n(46),d=new(function(){function t(){(0,i.Z)(this,t),(0,c.Z)(this,"ENV",void 0),(0,c.Z)(this,"LOG_LEVEL",void 0),(0,c.Z)(this,"SERVER_URL",void 0),(0,c.Z)(this,"TOKEN",void 0),this.LOG_LEVEL=l.pO,this.ENV=l.Vi,this.SERVER_URL=l.LB[this.ENV],this.TOKEN=h.env.TEMP_TOKEN}return(0,u.Z)(t,[{key:"setToken",value:function(t,e,n){try{return a.t6.setCookie(t,e,n)}catch(r){return console.log("getting token: services: ",r),!1}}},{key:"getToken",value:function(){try{return a.t6.getCookie("token")}catch(t){return console.log("getting token: services: ",t),!1}}},{key:"getUser",value:function(){var t=(0,s.Z)(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e={},t.abrupt("return",e);case 5:return t.prev=5,t.t0=t.catch(0),console.log("Config: storeHasPressed: error =",t.t0),t.abrupt("return",!1);case 9:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(){return t.apply(this,arguments)}}()},{key:"ServerUrl",get:function(){return this.SERVER_URL}}]),t}());function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){(0,c.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var v=function(){var t=(0,s.Z)(o().mark((function t(e){var n,r,c,s,i,u,a,l,h,p,v,g,_,k,x,j,m;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.endpoint,r=e.method,c=void 0===r?"GET":r,s=e.retries,void 0===s?3:s,i=e.params,u=void 0===i?null:i,a=e.auth,l=void 0===a||a,h=e.token,p=f({method:c,headers:{Accept:"application/json","Content-Type":"application/json"}},u&&{body:JSON.stringify(u)}),v="http://13.125.255.206/api/"+n,t.prev=3,!l){t.next=22;break}if(g=d.getToken()||h){t.next=8;break}throw{message:"NO TOKENS",status:406};case 8:return p.headers.Authorization="Bearer ".concat(g),t.next=11,fetch(v,p);case 11:if(_=t.sent,console.log("makeRequest: res =",_),200!==_.status){t.next=19;break}return t.next=16,_.json();case 16:return k=t.sent,console.log("makeRequest: json =",k),t.abrupt("return",k);case 19:throw{message:_.json(),status:_.status};case 22:return t.next=24,fetch(v,p);case 24:if(x=t.sent,console.log("res =",x),200!==x.status){t.next=32;break}return t.next=29,x.json();case 29:return j=t.sent,console.log("json =",j),t.abrupt("return",j);case 32:if(201!==x.status){t.next=39;break}return t.next=35,x.json();case 35:return m=t.sent,console.log("json =",m),d.setToken("token",null===m||void 0===m?void 0:m.accesstoken,30),t.abrupt("return",m);case 39:t.next=45;break;case 41:return t.prev=41,t.t0=t.catch(3),console.log("makeRequest: error =",t.t0),t.abrupt("return",!1);case 45:case"end":return t.stop()}}),t,null,[[3,41]])})));return function(e){return t.apply(this,arguments)}}()},4272:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/recruit",function(){return n(9741)}])},213:function(t){t.exports={login:"Input_login__22loO",signupBox:"Input_signupBox__2e3jM",nametag:"Input_nametag__2ku1G",sign:"Input_sign__2n2ug"}},5219:function(t){t.exports={button:"Button_button__2KtT-",coloredButton:"Button_coloredButton__2rHKf",short:"Button_short__3ec2l",long:"Button_long__3x6n-",round:"Button_round__TOsoe",checkBox:"Button_checkBox__3lnZa"}},1742:function(t){t.exports={getQuestion:"Recruit_getQuestion__2ls8U",questionInput:"Recruit_questionInput__1_t-U",buttonBottom:"Recruit_buttonBottom__1HodF",container:"Recruit_container__1jyki"}}},function(t){t.O(0,[8430,5206,4328,9774,2888,179],(function(){return e=4272,t(t.s=e);var e}));var e=t.O();_N_E=e}]);