(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7499],{41453:function(e,t,r){"use strict";r.d(t,{Vi:function(){return i},DQ:function(){return c},_R:function(){return a},I_:function(){return p}});var n=r(67294),o=r(98702),u=r(95998),i=function(){var e=(0,u.I0)(),t=a(),r=(0,u.v9)((function(e){return e.pages})).pages[t];return(0,n.useEffect)((function(){r||e((0,o.fx)(t))}),[t]),r||{}},c=function(){var e=a(),t=(0,u.v9)((function(e){return e.pages})),r=t.pages[e],n=t.schema[e];return r||n||{}},s=r(11163),a=function(){return(0,s.useRouter)().query.page||"home"},p=function(){var e=(0,u.I0)(),t=(0,u.v9)((function(e){return e.pages})).schema;return(0,n.useEffect)((function(){Object.keys(t).length||e((0,o.J1)())}),[]),t}},76643:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});r(59999);var n=r(85893),o=r(67294),u=r(9008),i=r(41453),c=r(11163),s=r(65814),a=r(79311),p=r(91783),f=r.n(p),l=f().end,h=f().upperBox,d=f().upperBoxTitle,v=f().upperBoxSub,m=f().upperBoxSelect,x=(f().xButton,f().lowerBox),b=f().buttonBox,_=function(e){return e?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("title",{children:e}),(0,n.jsx)("meta",{name:"og:title",content:e})]}):(0,n.jsx)(n.Fragment,{})},y=function(e){return e?(0,n.jsx)("meta",{name:"description",property:"og:description",content:e}):(0,n.jsx)(n.Fragment,{})};function g(){var e=(0,c.useRouter)(),t=e.query,r=(t.teamId,t.matchId,t.teamName,(0,i.DQ)()),p=r.title,f=void 0===p?"":p,g=r.description,O=void 0===g?"":g,j=((0,i.Vi)().content,(0,o.useState)([""])),k=j[0];j[1];return(0,o.useEffect)((function(){(0,s.$)({method:"GET",auth:!0}).then((function(e){}))}),[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(u.default,{children:[_(f),y(O),(0,n.jsx)("meta",{name:"robots",content:"INDEX,FOLLOW"})]}),(0,n.jsxs)("div",{className:l,children:[(0,n.jsxs)("div",{className:h,children:[(0,n.jsx)("div",{className:d,children:(0,n.jsx)("p",{children:"\ub4dd\uc810\uc790\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694."})}),(0,n.jsx)("div",{className:v,children:(0,n.jsx)("p",{children:"\uace8\uc744 \ub123\uc740 \uc21c\uc11c\ub300\ub85c \ub4dd\uc810\uc790\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694."})}),(0,n.jsx)("div",{className:m})]}),(0,n.jsx)("div",{className:x}),(0,n.jsx)("div",{className:b,children:(0,n.jsx)(a.Xp,{content:"\ub2e4\uc74c",handleClick:function(){e.push({pathname:"",query:{substitutes:k}})},activeStyle:!0})})]})]})}},65814:function(e,t,r){"use strict";r.d(t,{$:function(){return v}});var n=r(809),o=r.n(n),u=r(26265),i=r(92447),c=r(74047),s=r(52700),a=r(6371),p=JSON.parse('{"pO":"DEBUG","Vi":"PROD","LB":{"LOCAL":"http://localhost:3000/api/v1","DEV":"","PROD":"http://ec2-52-78-86-217.ap-northeast-2.compute.amazonaws.com:3000/api/v1"}}'),f=r(34155),l=new(function(){function e(){(0,c.Z)(this,e),(0,u.Z)(this,"ENV",void 0),(0,u.Z)(this,"LOG_LEVEL",void 0),(0,u.Z)(this,"SERVER_URL",void 0),(0,u.Z)(this,"TOKEN",void 0),this.LOG_LEVEL=p.pO,this.ENV=p.Vi,this.SERVER_URL=p.LB[this.ENV],this.TOKEN=f.env.TEMP_TOKEN}return(0,s.Z)(e,[{key:"setToken",value:function(e,t,r){try{return a.t6.setCookie(e,t,r)}catch(n){return!1}}},{key:"getToken",value:function(){try{return a.t6.getCookie("token")}catch(e){return!1}}},{key:"getUser",value:function(){var e=(0,i.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={},e.abrupt("return",t);case 5:return e.prev=5,e.t0=e.catch(0),e.abrupt("return",!1);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"ServerUrl",get:function(){return this.SERVER_URL}}]),e}());function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,u.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=function(){var e=(0,i.Z)(o().mark((function e(t){var r,n,u,i,c,s,a,p,f,h,v,m,x,b,_,y,g,O,j,k,w;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.endpoint,n=t.method,u=void 0===n?"GET":n,i=t.retries,void 0===i?3:i,c=t.params,s=void 0===c?null:c,a=t.auth,p=void 0===a||a,f=t.isFile,h=void 0!==f&&f,v=t.notJson,m=void 0!==v&&v,x=t.token,b=d(d({method:u,headers:!0===h?{}:{Accept:"application/json","Content-Type":"application/json"}},s&&!0===h&&{body:s}),s&&!1===h&&{body:JSON.stringify(s)}),_="https://90minglm.kro.kr/api/"+r,e.prev=3,!p){e.next=32;break}if(y=l.getToken()||x){e.next=8;break}throw{message:"NO TOKENS",status:406};case 8:return b.headers.Authorization="Bearer ".concat(y),e.next=11,fetch(_,b);case 11:if(g=e.sent,!(m&&!h&&g.status<=201)){e.next=14;break}return e.abrupt("return",g);case 14:if(!(!1===h&&g.status<=201)){e.next=23;break}return e.next=17,g.json();case 17:if(!(O=e.sent)){e.next=22;break}return e.abrupt("return",O);case 22:return e.abrupt("return",g);case 23:if(!(!0===h&&g.status<=201)){e.next=25;break}return e.abrupt("return",g);case 25:return e.next=27,g.json();case 27:throw e.t0=e.sent,e.t1=g.status,{message:e.t0,status:e.t1};case 32:return e.next=34,fetch(_,b);case 34:if(200!==(j=e.sent).status){e.next=40;break}return e.next=38,j.json();case 38:return k=e.sent,e.abrupt("return",k);case 40:if(201!==j.status||"members/signup"!==r){e.next=42;break}return e.abrupt("return",j);case 42:if(201!==j.status){e.next=48;break}return e.next=45,j.json();case 45:return w=e.sent,l.setToken("token",null===w||void 0===w?void 0:w.accesstoken,30),e.abrupt("return",w);case 48:e.next=53;break;case 50:return e.prev=50,e.t2=e.catch(3),e.abrupt("return",!1);case 53:case"end":return e.stop()}}),e,null,[[3,50]])})));return function(t){return e.apply(this,arguments)}}()},84913:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/endmatch/scorer",function(){return r(76643)}])},91783:function(e){e.exports={end:"Scorer_end__3GGDA",upperBox:"Scorer_upperBox__1LKlD",upperBoxTitle:"Scorer_upperBoxTitle__1zb4W",upperBoxSub:"Scorer_upperBoxSub__2aZWq",upperBoxSelect:"Scorer_upperBoxSelect__3nxW3",xButton:"Scorer_xButton__z7OwT",lowerBox:"Scorer_lowerBox__1IiBm",buttonBox:"Scorer_buttonBox__3f5ST",placeholderAnimation:"Scorer_placeholderAnimation__3rrzt"}},34155:function(e){var t,r,n=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"===typeof clearTimeout?clearTimeout:u}catch(e){r=u}}();var c,s=[],a=!1,p=-1;function f(){a&&c&&(a=!1,c.length?s=c.concat(s):p=-1,s.length&&l())}function l(){if(!a){var e=i(f);a=!0;for(var t=s.length;t;){for(c=s,s=[];++p<t;)c&&c[p].run();p=-1,t=s.length}c=null,a=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function d(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];s.push(new h(e,t)),1!==s.length||a||i(l)},h.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=d,n.addListener=d,n.once=d,n.off=d,n.removeListener=d,n.removeAllListeners=d,n.emit=d,n.prependListener=d,n.prependOnceListener=d,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}}},function(e){e.O(0,[9774,2888,179],(function(){return t=84913,e(e.s=t);var t}));var t=e.O();_N_E=t}]);