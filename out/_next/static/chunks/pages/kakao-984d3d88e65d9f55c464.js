(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7466],{41453:function(t,e,n){"use strict";n.d(e,{Vi:function(){return i},DQ:function(){return c},_R:function(){return a},I_:function(){return f}});var r=n(67294),o=n(98702),u=n(95998),i=function(){var t=(0,u.I0)(),e=a(),n=(0,u.v9)((function(t){return t.pages})).pages[e];return(0,r.useEffect)((function(){n||t((0,o.fx)(e))}),[e]),n||{}},c=function(){var t=a(),e=(0,u.v9)((function(t){return t.pages})),n=e.pages[t],r=e.schema[t];return n||r||{}},s=n(11163),a=function(){return(0,s.useRouter)().query.page||"home"},f=function(){var t=(0,u.I0)(),e=(0,u.v9)((function(t){return t.pages})).schema;return(0,r.useEffect)((function(){Object.keys(e).length||t((0,o.J1)())}),[]),e}},35612:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return h}});var r=n(85893),o=n(67294),u=n(11163),i=n(9008),c=n(41453),s=n(65814),a=n(52038),f=n.n(a),p=function(t){return t?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("title",{children:t}),(0,r.jsx)("meta",{name:"og:title",content:t})]}):(0,r.jsx)(r.Fragment,{})},l=function(t){return t?(0,r.jsx)("meta",{name:"description",property:"og:description",content:t}):(0,r.jsx)(r.Fragment,{})};function h(){var t,e=(0,u.useRouter)(),n=null===(t=e.query)||void 0===t?void 0:t.code,a=f().user,h=(0,c.DQ)(),d=h.title,v=void 0===d?"":d,m=h.description,b=void 0===m?"":m;return(0,o.useEffect)((function(){setTimeout((function(){(0,s.$)({endpoint:"members/kakao/login?code=".concat(n),method:"GET",auth:!1}).then((function(t){void 0!==t&&(null!==t&&void 0!==t&&t.first?e.replace("/register/nickname"):e.replace("/"))}),[])}),10)})),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.default,{children:[p(v),l(b),(0,r.jsx)("meta",{name:"robots",content:"INDEX,FOLLOW"})]}),(0,r.jsx)("main",{className:a,children:(0,r.jsx)("section",{children:(0,r.jsx)("h2",{children:"\uce74\uce74\uc624\ub85c\uadf8\uc778 \uc911\uc785\ub2c8\ub2e4."})})})]})}},65814:function(t,e,n){"use strict";n.d(e,{$:function(){return v}});var r=n(809),o=n.n(r),u=n(26265),i=n(92447),c=n(74047),s=n(52700),a=n(6371),f=JSON.parse('{"pO":"DEBUG","Vi":"PROD","LB":{"LOCAL":"http://localhost:3000/api/v1","DEV":"","PROD":"http://ec2-52-78-86-217.ap-northeast-2.compute.amazonaws.com:3000/api/v1"}}'),p=n(34155),l=new(function(){function t(){(0,c.Z)(this,t),(0,u.Z)(this,"ENV",void 0),(0,u.Z)(this,"LOG_LEVEL",void 0),(0,u.Z)(this,"SERVER_URL",void 0),(0,u.Z)(this,"TOKEN",void 0),this.LOG_LEVEL=f.pO,this.ENV=f.Vi,this.SERVER_URL=f.LB[this.ENV],this.TOKEN=p.env.TEMP_TOKEN}return(0,s.Z)(t,[{key:"setToken",value:function(t,e,n){try{return a.t6.setCookie(t,e,n)}catch(r){return!1}}},{key:"getToken",value:function(){try{return a.t6.getCookie("token")}catch(t){return!1}}},{key:"getUser",value:function(){var t=(0,i.Z)(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e={},t.abrupt("return",e);case 5:return t.prev=5,t.t0=t.catch(0),t.abrupt("return",!1);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(){return t.apply(this,arguments)}}()},{key:"ServerUrl",get:function(){return this.SERVER_URL}}]),t}());function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){(0,u.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var v=function(){var t=(0,i.Z)(o().mark((function t(e){var n,r,u,i,c,s,a,f,p,h,v,m,b,k,g,y,E,O,x,w,T;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.endpoint,r=e.method,u=void 0===r?"GET":r,i=e.retries,void 0===i?3:i,c=e.params,s=void 0===c?null:c,a=e.auth,f=void 0===a||a,p=e.isFile,h=void 0!==p&&p,v=e.notJson,m=void 0!==v&&v,b=e.token,k=d(d({method:u,headers:!0===h?{}:{Accept:"application/json","Content-Type":"application/json"}},s&&!0===h&&{body:s}),s&&!1===h&&{body:JSON.stringify(s)}),g="https://90minglm.kro.kr/api/"+n,t.prev=3,!f){t.next=32;break}if(y=l.getToken()||b){t.next=8;break}throw{message:"NO TOKENS",status:406};case 8:return k.headers.Authorization="Bearer ".concat(y),t.next=11,fetch(g,k);case 11:if(E=t.sent,!(m&&!h&&E.status<=201)){t.next=14;break}return t.abrupt("return",E);case 14:if(!(!1===h&&E.status<=201)){t.next=23;break}return t.next=17,E.json();case 17:if(!(O=t.sent)){t.next=22;break}return t.abrupt("return",O);case 22:return t.abrupt("return",E);case 23:if(!(!0===h&&E.status<=201)){t.next=25;break}return t.abrupt("return",E);case 25:return t.next=27,E.json();case 27:throw t.t0=t.sent,t.t1=E.status,{message:t.t0,status:t.t1};case 32:return t.next=34,fetch(g,k);case 34:if(200!==(x=t.sent).status){t.next=40;break}return t.next=38,x.json();case 38:return w=t.sent,t.abrupt("return",w);case 40:if(201!==x.status||"members/signup"!==n){t.next=42;break}return t.abrupt("return",x);case 42:if(201!==x.status){t.next=48;break}return t.next=45,x.json();case 45:return T=t.sent,l.setToken("token",null===T||void 0===T?void 0:T.accesstoken,30),t.abrupt("return",T);case 48:t.next=53;break;case 50:return t.prev=50,t.t2=t.catch(3),t.abrupt("return",!1);case 53:case"end":return t.stop()}}),t,null,[[3,50]])})));return function(e){return t.apply(this,arguments)}}()},68522:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/kakao",function(){return n(35612)}])},52038:function(t){t.exports={user:"Kakao_user__190I_",ButtonBox:"Kakao_ButtonBox__3Rhi1",placeholderAnimation:"Kakao_placeholderAnimation__3i5GW"}},34155:function(t){var e,n,r=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function i(t){if(e===setTimeout)return setTimeout(t,0);if((e===o||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(n){try{return e.call(null,t,0)}catch(n){return e.call(this,t,0)}}}!function(){try{e="function"===typeof setTimeout?setTimeout:o}catch(t){e=o}try{n="function"===typeof clearTimeout?clearTimeout:u}catch(t){n=u}}();var c,s=[],a=!1,f=-1;function p(){a&&c&&(a=!1,c.length?s=c.concat(s):f=-1,s.length&&l())}function l(){if(!a){var t=i(p);a=!0;for(var e=s.length;e;){for(c=s,s=[];++f<e;)c&&c[f].run();f=-1,e=s.length}c=null,a=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===u||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function h(t,e){this.fun=t,this.array=e}function d(){}r.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new h(t,e)),1!==s.length||a||i(l)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=d,r.addListener=d,r.once=d,r.off=d,r.removeListener=d,r.removeAllListeners=d,r.emit=d,r.prependListener=d,r.prependOnceListener=d,r.listeners=function(t){return[]},r.binding=function(t){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(t){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},function(t){t.O(0,[9774,2888,179],(function(){return e=68522,t(t.s=e);var e}));var e=t.O();_N_E=e}]);