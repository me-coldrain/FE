(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[742],{12759:function(e,t,n){"use strict";n.d(t,{p:function(){return a},Z:function(){return l}});var r=n(85893),i=(n(67294),n(75972)),o=n.n(i),s=o().profile,c=o().position,u=o().profileSelected;function a(e){return(0,r.jsxs)("div",{className:c,children:["striker"===e.position?(0,r.jsx)("h2",{style:{color:"#F14B3B"},children:"FW"}):"midfielder"===e.position?(0,r.jsx)("h2",{style:{color:"#00c667"},children:"MF"}):"defender"===e.position?(0,r.jsx)("h2",{style:{color:"#5cb1ff"},children:"DF"}):(0,r.jsx)("h2",{style:{color:"#DB9B16"},children:"GK"}),(0,r.jsx)("img",{src:e.src?e.src:"/img/profileImg.png"}),(0,r.jsx)("p",{children:e.nickname})]})}function l(e){var t=e.nickname,n=void 0===t?"\ub2c9\ub124\uc784":t,i=e.src,o=void 0===i?"":i,c=e.selected,a=void 0!==c&&c,l=e.children,p=e.onClick;return(0,r.jsxs)("div",{className:a?u:s,onClick:p,children:[(0,r.jsx)("img",{src:o||"/img/profileImg.png"}),(0,r.jsx)("p",{children:n}),l]})}},41453:function(e,t,n){"use strict";n.d(t,{Vi:function(){return s},DQ:function(){return c},_R:function(){return a},I_:function(){return l}});var r=n(67294),i=n(98702),o=n(95998),s=function(){var e=(0,o.I0)(),t=a(),n=(0,o.v9)((function(e){return e.pages})).pages[t];return(0,r.useEffect)((function(){n||e((0,i.fx)(t))}),[t]),n||{}},c=function(){var e=a(),t=(0,o.v9)((function(e){return e.pages})),n=t.pages[e],r=t.schema[e];return n||r||{}},u=n(11163),a=function(){return(0,u.useRouter)().query.page||"home"},l=function(){var e=(0,o.I0)(),t=(0,o.v9)((function(e){return e.pages})).schema;return(0,r.useEffect)((function(){Object.keys(t).length||e((0,i.J1)())}),[]),t}},49097:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var r=n(85893),i=n(67294),o=n(9008),s=n(41453),c=n(11163),u=n(65814),a=n(79311),l=n(12759),p=n(33502),d=n.n(p),f=d().end,h=d().upperBox,m=d().upperBoxTitle,x=d().upperBoxSub,v=d().upperBoxSelect,_=d().xButton,k=d().lowerBox,b=d().buttonBox,j=function(e){return e?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("title",{children:e}),(0,r.jsx)("meta",{name:"og:title",content:e})]}):(0,r.jsx)(r.Fragment,{})},g=function(e){return e?(0,r.jsx)("meta",{name:"description",property:"og:description",content:e}):(0,r.jsx)(r.Fragment,{})};function N(){var e=(0,c.useRouter)(),t=e.query,n=(t.teamId,t.matchId,t.teamName,(0,s.DQ)()),p=n.title,d=void 0===p?"":p,N=n.description,O=void 0===N?"":N,y=((0,s.Vi)().content,(0,i.useState)()),E=y[0],B=y[1],P=function(e){B(e)};return(0,i.useEffect)((function(){(0,u.$)({endpoint:"matches/1/score",method:"GET",auth:!0}).then((function(e){}))}),[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.default,{children:[j(d),g(O),(0,r.jsx)("meta",{name:"robots",content:"INDEX,FOLLOW"})]}),(0,r.jsxs)("div",{className:f,children:[(0,r.jsxs)("div",{className:h,children:[(0,r.jsx)("div",{className:m,children:(0,r.jsx)("p",{children:"MVP\ub97c \uc120\uc815\ud574\uc8fc\uc138\uc694 ."})}),(0,r.jsx)("div",{className:x,children:(0,r.jsx)("p",{children:"\ud300\uc6d0\ub4e4\uacfc \uc0c1\uc758 \ud6c4 \uc120\ud0dd\ud574\uc8fc\uc138\uc694.(1\uba85)"})}),(0,r.jsx)("div",{className:v,children:E&&(0,r.jsx)(l.Z,{nickname:null===E||void 0===E?void 0:E.nickName,src:"",children:(0,r.jsx)("div",{className:_,onClick:function(){B(void 0)},children:"x"})})})]}),(0,r.jsxs)("div",{className:k,children:[(0,r.jsx)(l.Z,{nickname:"\ub2c9\ub124\uc7841",src:"",selected:"\ub2c9\ub124\uc7841"===(null===E||void 0===E?void 0:E.nickName),onClick:function(){return P({memberId:12,memberProfileUrl:"src",nickName:"\ub2c9\ub124\uc7841"})}}),(0,r.jsx)(l.Z,{nickname:"\ub2c9\ub124\uc7842",src:"",selected:"\ub2c9\ub124\uc7842"===(null===E||void 0===E?void 0:E.nickName),onClick:function(){return P({memberId:13,memberProfileUrl:"src",nickName:"\ub2c9\ub124\uc7842"})}}),(0,r.jsx)(l.Z,{nickname:"\ub2c9\ub124\uc7843",src:"",selected:"\ub2c9\ub124\uc7843"===(null===E||void 0===E?void 0:E.nickName),onClick:function(){return P({memberId:14,memberProfileUrl:"src",nickName:"\ub2c9\ub124\uc7843"})}})]}),(0,r.jsx)("div",{className:b,children:(0,r.jsx)(a.Xp,{content:"\ub2e4\uc74c",handleClick:function(){e.push({pathname:"/endmatch/scorer"})},activeStyle:!0})})]})]})}},65814:function(e,t,n){"use strict";n.d(t,{$:function(){return m}});var r=n(809),i=n.n(r),o=n(26265),s=n(92447),c=n(74047),u=n(52700),a=n(6371),l=JSON.parse('{"pO":"DEBUG","Vi":"PROD","LB":{"LOCAL":"http://localhost:3000/api/v1","DEV":"","PROD":"http://ec2-52-78-86-217.ap-northeast-2.compute.amazonaws.com:3000/api/v1"}}'),p=n(34155),d=new(function(){function e(){(0,c.Z)(this,e),(0,o.Z)(this,"ENV",void 0),(0,o.Z)(this,"LOG_LEVEL",void 0),(0,o.Z)(this,"SERVER_URL",void 0),(0,o.Z)(this,"TOKEN",void 0),this.LOG_LEVEL=l.pO,this.ENV=l.Vi,this.SERVER_URL=l.LB[this.ENV],this.TOKEN=p.env.TEMP_TOKEN}return(0,u.Z)(e,[{key:"setToken",value:function(e,t,n){try{return a.t6.setCookie(e,t,n)}catch(r){return!1}}},{key:"getToken",value:function(){try{return a.t6.getCookie("token")}catch(e){return!1}}},{key:"getUser",value:function(){var e=(0,s.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={},e.abrupt("return",t);case 5:return e.prev=5,e.t0=e.catch(0),e.abrupt("return",!1);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"ServerUrl",get:function(){return this.SERVER_URL}}]),e}());function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m=function(){var e=(0,s.Z)(i().mark((function e(t){var n,r,o,s,c,u,a,l,p,f,m,x,v,_,k,b,j,g,N,O,y;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.endpoint,r=t.method,o=void 0===r?"GET":r,s=t.retries,void 0===s?3:s,c=t.params,u=void 0===c?null:c,a=t.auth,l=void 0===a||a,p=t.isFile,f=void 0!==p&&p,m=t.notJson,x=void 0!==m&&m,v=t.token,_=h(h({method:o,headers:!0===f?{}:{Accept:"application/json","Content-Type":"application/json"}},u&&!0===f&&{body:u}),u&&!1===f&&{body:JSON.stringify(u)}),k="https://90minglm.kro.kr/api/"+n,e.prev=3,!l){e.next=32;break}if(b=d.getToken()||v){e.next=8;break}throw{message:"NO TOKENS",status:406};case 8:return _.headers.Authorization="Bearer ".concat(b),e.next=11,fetch(k,_);case 11:if(j=e.sent,!(x&&!f&&j.status<=201)){e.next=14;break}return e.abrupt("return",j);case 14:if(!(!1===f&&j.status<=201)){e.next=23;break}return e.next=17,j.json();case 17:if(!(g=e.sent)){e.next=22;break}return e.abrupt("return",g);case 22:return e.abrupt("return",j);case 23:if(!(!0===f&&j.status<=201)){e.next=25;break}return e.abrupt("return",j);case 25:return e.next=27,j.json();case 27:throw e.t0=e.sent,e.t1=j.status,{message:e.t0,status:e.t1};case 32:return e.next=34,fetch(k,_);case 34:if(200!==(N=e.sent).status){e.next=40;break}return e.next=38,N.json();case 38:return O=e.sent,e.abrupt("return",O);case 40:if(201!==N.status||"members/signup"!==n){e.next=42;break}return e.abrupt("return",N);case 42:if(201!==N.status){e.next=48;break}return e.next=45,N.json();case 45:return y=e.sent,d.setToken("token",null===y||void 0===y?void 0:y.accesstoken,30),e.abrupt("return",y);case 48:e.next=53;break;case 50:return e.prev=50,e.t2=e.catch(3),e.abrupt("return",!1);case 53:case"end":return e.stop()}}),e,null,[[3,50]])})));return function(t){return e.apply(this,arguments)}}()},33605:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/endmatch/mvp",function(){return n(49097)}])},75972:function(e){e.exports={profile:"UserProfile_profile__3-y3a",profileSelected:"UserProfile_profileSelected__NIyOk",position:"UserProfile_position__EdrF8",placeholderAnimation:"UserProfile_placeholderAnimation__3kxdW"}},33502:function(e){e.exports={end:"MVP_end__Bq77v",upperBox:"MVP_upperBox__3CiNU",upperBoxTitle:"MVP_upperBoxTitle__2fubp",upperBoxSub:"MVP_upperBoxSub__oBmuv",upperBoxSelect:"MVP_upperBoxSelect__1yq16",xButton:"MVP_xButton__1Nsnb",lowerBox:"MVP_lowerBox__tDvro",buttonBox:"MVP_buttonBox__3IX0P",placeholderAnimation:"MVP_placeholderAnimation__13G8i"}}},function(e){e.O(0,[9774,2888,179],(function(){return t=33605,e(e.s=t);var t}));var t=e.O();_N_E=t}]);