(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5787],{12759:function(e,t,r){"use strict";r.d(t,{p:function(){return u},Z:function(){return l}});var n=r(85893),o=(r(67294),r(75972)),i=r.n(o),s=i().profile,c=i().position,a=i().profileSelected;function u(e){return(0,n.jsxs)("div",{className:c,children:["striker"===e.position?(0,n.jsx)("h2",{style:{color:"#F14B3B"},children:"FW"}):"midfielder"===e.position?(0,n.jsx)("h2",{style:{color:"#00c667"},children:"MF"}):"defender"===e.position?(0,n.jsx)("h2",{style:{color:"#5cb1ff"},children:"DF"}):(0,n.jsx)("h2",{style:{color:"#DB9B16"},children:"GK"}),(0,n.jsx)("img",{src:e.src?e.src:"/img/profileImg.png"}),(0,n.jsx)("p",{children:e.nickname})]})}function l(e){var t=e.nickname,r=void 0===t?"\ub2c9\ub124\uc784":t,o=e.src,i=void 0===o?"":o,c=e.selected,u=void 0!==c&&c;return(0,n.jsxs)("div",{className:u?a:s,children:[(0,n.jsx)("img",{src:i||"/img/profileImg.png"}),(0,n.jsx)("p",{children:r})]})}},4757:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var n=r(85893),o=r(809),i=r.n(o),s=r(92447),c=r(67294),a=r(95998),u=r(65814),l=r(11163),f=r(12759),p=r(21538),m=r(79311),d=r(51742),h=r.n(d),v=(h().scorers,h().scorersBox,h().scorersWin,h().scorersIcon,h().scorersLose,h().formation),k=h().formationField,_=h().formationStriker,b=h().formationMidFielder,x=h().formationDefender,y=h().formationGoalKeeper;h().substitute,h().substituteBox,h().horizontalContainer;function g(){var e=(0,l.useRouter)(),t=e.query,r=t.teamId,o=t.matchId;console.log(r,o);var d=(0,a.v9)((function(e){return e.formations}));console.log("formations =",d);var h=(0,c.useState)([{memberId:3,position:"striker",anonymous:!0,memberProfileUrl:"string",nickName:"string"}]),g=h[0],j=(h[1],function(){var t=(0,s.Z)(i().mark((function t(){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=null===g||void 0===g?void 0:g.forEach((function(e){delete e.memberProfileUrl,delete e.nickName})),t.next=3,(0,u.$)({endpoint:"teams/".concat(r,"/matches/").concat(o,"/formation"),method:"POST",params:n,auth:!0}).then((function(){return e.push({pathname:"/team/[teamName]",query:{status:!0,teamName:e.query.teamName,teamId:r}})}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}());return(0,n.jsxs)("main",{children:[(0,n.jsx)("h1",{children:"\ud3ec\uba54\uc774\uc158 \ub4f1\ub85d"}),(0,n.jsx)("h5",{children:"\ub4dc\ub798\uadf8\ub97c \ud1b5\ud574 \ud3ec\uba54\uc774\uc158\uc744 \uc644\uc131\ud574\uc8fc\uc138\uc694."}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:"\ud3ec\uba54\uc774\uc158"}),(0,n.jsxs)("div",{className:v,children:[(0,n.jsx)(p.Z,{asset:"Soccer-Field",className:k}),(0,n.jsx)("div",{className:_,children:d.filter((function(e,t){return"striker"===e.position})).map((function(e,t){return(0,n.jsx)(f.p,{src:e.memberProfileUrl,nickname:e.nickName,position:"striker"},"striker-".concat(t))}))}),(0,n.jsx)("div",{className:b,children:d.filter((function(e,t){return"midfielder"===e.position})).map((function(e,t){return(0,n.jsx)(f.p,{src:e.memberProfileUrl,nickname:e.nickName,position:"striker"},"striker-".concat(t))}))}),(0,n.jsx)("div",{className:x,children:d.filter((function(e,t){return"defender"===e.position})).map((function(e,t){return(0,n.jsx)(f.p,{src:e.memberProfileUrl,nickname:e.nickName,position:"defender"},"defender-".concat(t))}))}),(0,n.jsx)("div",{className:y,children:d.filter((function(e,t){return"goalkeeper"===e.position})).map((function(e,t){return(0,n.jsx)(f.p,{src:e.memberProfileUrl,nickname:e.nickName,position:"goalkeeper"},"goalkeeper-".concat(t))}))})]})]}),(0,n.jsx)(m.Xp,{content:"\uc800\uc7a5\ud558\uae30",handleClick:j,activeStyle:!0})]})}},65814:function(e,t,r){"use strict";r.d(t,{$:function(){return h}});var n=r(809),o=r.n(n),i=r(26265),s=r(92447),c=r(74047),a=r(52700),u=r(6371),l=JSON.parse('{"pO":"DEBUG","Vi":"PROD","LB":{"LOCAL":"http://localhost:3000/api/v1","DEV":"","PROD":"http://ec2-52-78-86-217.ap-northeast-2.compute.amazonaws.com:3000/api/v1"}}'),f=r(34155),p=new(function(){function e(){(0,c.Z)(this,e),(0,i.Z)(this,"ENV",void 0),(0,i.Z)(this,"LOG_LEVEL",void 0),(0,i.Z)(this,"SERVER_URL",void 0),(0,i.Z)(this,"TOKEN",void 0),this.LOG_LEVEL=l.pO,this.ENV=l.Vi,this.SERVER_URL=l.LB[this.ENV],this.TOKEN=f.env.TEMP_TOKEN}return(0,a.Z)(e,[{key:"setToken",value:function(e,t,r){try{return u.t6.setCookie(e,t,r)}catch(n){return console.log("getting token: services: ",n),!1}}},{key:"getToken",value:function(){try{return u.t6.getCookie("token")}catch(e){return console.log("getting token: services: ",e),!1}}},{key:"getUser",value:function(){var e=(0,s.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={},e.abrupt("return",t);case 5:return e.prev=5,e.t0=e.catch(0),console.log("Config: storeHasPressed: error =",e.t0),e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"ServerUrl",get:function(){return this.SERVER_URL}}]),e}());function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=function(){var e=(0,s.Z)(o().mark((function e(t){var r,n,i,s,c,a,u,l,f,m,h,v,k,_,b,x,y,g,j,w,O;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.endpoint,n=t.method,i=void 0===n?"GET":n,s=t.retries,void 0===s?3:s,c=t.params,a=void 0===c?null:c,u=t.auth,l=void 0===u||u,f=t.isFile,m=void 0!==f&&f,h=t.notJson,v=void 0!==h&&h,k=t.token,_=d(d({method:i,headers:!0===m?{}:{Accept:"application/json","Content-Type":"application/json"}},a&&!0===m&&{body:a}),a&&!1===m&&{body:JSON.stringify(a)}),b="https://90minglm.kro.kr/api/"+r,e.prev=3,!l){e.next=39;break}if(x=p.getToken()||k){e.next=8;break}throw{message:"NO TOKENS",status:406};case 8:return _.headers.Authorization="Bearer ".concat(x),e.next=11,fetch(b,_);case 11:if(y=e.sent,console.log("makeRequest: res =",y),!(v&&!m&&y.status<=201)){e.next=15;break}return e.abrupt("return",y);case 15:if(!(!1===m&&y.status<=201)){e.next=25;break}return e.next=18,y.json();case 18:if(!(g=e.sent)){e.next=24;break}return console.log("makeRequest: json =",g),e.abrupt("return",g);case 24:return e.abrupt("return",y);case 25:if(!(!0===m&&y.status<=201)){e.next=32;break}return e.t0=console,e.next=29,y.json();case 29:return e.t1=e.sent,e.t0.log.call(e.t0,e.t1),e.abrupt("return",y);case 32:return e.next=34,y.json();case 34:throw e.t2=e.sent,e.t3=y.status,{message:e.t2,status:e.t3};case 39:return e.next=41,fetch(b,_);case 41:if(j=e.sent,console.log("res =",j),200!==j.status){e.next=49;break}return e.next=46,j.json();case 46:return w=e.sent,console.log("json =",w),e.abrupt("return",w);case 49:if(201!==j.status||"members/signup"!==r){e.next=51;break}return e.abrupt("return",j);case 51:if(201!==j.status){e.next=58;break}return e.next=54,j.json();case 54:return O=e.sent,console.log("json =",O),p.setToken("token",null===O||void 0===O?void 0:O.accesstoken,30),e.abrupt("return",O);case 58:e.next=64;break;case 60:return e.prev=60,e.t4=e.catch(3),console.log("makeRequest: error =",e.t4),e.abrupt("return",!1);case 64:case"end":return e.stop()}}),e,null,[[3,60]])})));return function(t){return e.apply(this,arguments)}}()},21428:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/formation/detail",function(){return r(4757)}])},75972:function(e){e.exports={profile:"UserProfile_profile__3-y3a",profileSelected:"UserProfile_profileSelected__NIyOk",position:"UserProfile_position__EdrF8",placeholderAnimation:"UserProfile_placeholderAnimation__3kxdW"}},51742:function(e){e.exports={scorers:"History_scorers__35BqU",scorersBox:"History_scorersBox__3SbSU",scorersIcon:"History_scorersIcon__1uHzQ",formation:"History_formation__23_2L",formationField:"History_formationField__20xW9",formationStriker:"History_formationStriker__1IIhu",formationMidFielder:"History_formationMidFielder__3dJnu",formationDefender:"History_formationDefender__2ZbUj",formationGoalKeeper:"History_formationGoalKeeper__3Bxk1",substitute:"History_substitute__1nb_S",substituteBox:"History_substituteBox__2Uwsw",horizontalContainer:"History_horizontalContainer__3NgmW"}},34155:function(e){var t,r,n=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"===typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var c,a=[],u=!1,l=-1;function f(){u&&c&&(u=!1,c.length?a=c.concat(a):l=-1,a.length&&p())}function p(){if(!u){var e=s(f);u=!0;for(var t=a.length;t;){for(c=a,a=[];++l<t;)c&&c[l].run();l=-1,t=a.length}c=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function d(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];a.push(new m(e,t)),1!==a.length||u||s(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=d,n.addListener=d,n.once=d,n.off=d,n.removeListener=d,n.removeAllListeners=d,n.emit=d,n.prependListener=d,n.prependOnceListener=d,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}}},function(e){e.O(0,[9774,2888,179],(function(){return t=21428,e(e.s=t);var t}));var t=e.O();_N_E=t}]);