(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1389],{41453:function(e,t,n){"use strict";n.d(t,{Vi:function(){return i},DQ:function(){return s},_R:function(){return a},I_:function(){return p}});var r=n(67294),u=n(98702),o=n(95998),i=function(){var e=(0,o.I0)(),t=a(),n=(0,o.v9)((function(e){return e.pages})).pages[t];return(0,r.useEffect)((function(){n||e((0,u.fx)(t))}),[t]),n||{}},s=function(){var e=a(),t=(0,o.v9)((function(e){return e.pages})),n=t.pages[e],r=t.schema[e];return n||r||{}},c=n(11163),a=function(){return(0,c.useRouter)().query.page||"home"},p=function(){var e=(0,o.I0)(),t=(0,o.v9)((function(e){return e.pages})).schema;return(0,r.useEffect)((function(){Object.keys(t).length||e((0,u.J1)())}),[]),t}},75727:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});n(59999);var r=n(85893),u=n(67294),o=n(9008),i=n(41453),s=n(11163),c=n(65814),a=n(79311),p=n(61991),f=n.n(p),l=f().end,h=f().upperBox,d=f().upperBoxTitle,v=f().upperBoxSub,m=f().upperBoxSelect,x=(f().xButton,f().lowerBox),b=f().buttonBox,_=function(e){return e?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("title",{children:e}),(0,r.jsx)("meta",{name:"og:title",content:e})]}):(0,r.jsx)(r.Fragment,{})},w=function(e){return e?(0,r.jsx)("meta",{name:"description",property:"og:description",content:e}):(0,r.jsx)(r.Fragment,{})};function y(){var e=(0,s.useRouter)(),t=e.query,n=(t.teamId,t.matchId,t.teamName,(0,i.DQ)()),p=n.title,f=void 0===p?"":p,y=n.description,g=void 0===y?"":y,k=((0,i.Vi)().content,(0,u.useState)([""])),j=k[0];k[1];return(0,u.useEffect)((function(){(0,c.$)({method:"GET",auth:!0}).then((function(e){}))}),[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.default,{children:[_(f),w(g),(0,r.jsx)("meta",{name:"robots",content:"INDEX,FOLLOW"})]}),(0,r.jsxs)("div",{className:l,children:[(0,r.jsxs)("div",{className:h,children:[(0,r.jsx)("div",{className:d,children:(0,r.jsx)("p",{children:"\uacbd\uae30\uacb0\uacfc \uc800\uc7a5"})}),(0,r.jsx)("div",{className:v,children:(0,r.jsx)("p",{children:"\uacbd\uae30\uacb0\uacfc \uc800\uc7a5 \uc804 \ucd5c\uc885 \ud655\uc778\ud574\uc8fc\uc138\uc694."})}),(0,r.jsx)("div",{className:m})]}),(0,r.jsx)("div",{className:x}),(0,r.jsx)("div",{className:b,children:(0,r.jsx)(a.Xp,{content:"\uacbd\uae30\uacb0\uacfc \uc800\uc7a5",handleClick:function(){e.push({pathname:"",query:{substitutes:j}})},activeStyle:!0})})]})]})}},65814:function(e,t,n){"use strict";n.d(t,{$:function(){return v}});var r=n(809),u=n.n(r),o=n(26265),i=n(92447),s=n(74047),c=n(52700),a=n(6371),p=JSON.parse('{"pO":"DEBUG","Vi":"PROD","LB":{"LOCAL":"http://localhost:3000/api/v1","DEV":"","PROD":"http://ec2-52-78-86-217.ap-northeast-2.compute.amazonaws.com:3000/api/v1"}}'),f=n(34155),l=new(function(){function e(){(0,s.Z)(this,e),(0,o.Z)(this,"ENV",void 0),(0,o.Z)(this,"LOG_LEVEL",void 0),(0,o.Z)(this,"SERVER_URL",void 0),(0,o.Z)(this,"TOKEN",void 0),this.LOG_LEVEL=p.pO,this.ENV=p.Vi,this.SERVER_URL=p.LB[this.ENV],this.TOKEN=f.env.TEMP_TOKEN}return(0,c.Z)(e,[{key:"setToken",value:function(e,t,n){try{return a.t6.setCookie(e,t,n)}catch(r){return!1}}},{key:"getToken",value:function(){try{return a.t6.getCookie("token")}catch(e){return!1}}},{key:"getUser",value:function(){var e=(0,i.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={},e.abrupt("return",t);case 5:return e.prev=5,e.t0=e.catch(0),e.abrupt("return",!1);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"ServerUrl",get:function(){return this.SERVER_URL}}]),e}());function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=function(){var e=(0,i.Z)(u().mark((function e(t){var n,r,o,i,s,c,a,p,f,h,v,m,x,b,_,w,y,g,k,j,E;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.endpoint,r=t.method,o=void 0===r?"GET":r,i=t.retries,void 0===i?3:i,s=t.params,c=void 0===s?null:s,a=t.auth,p=void 0===a||a,f=t.isFile,h=void 0!==f&&f,v=t.notJson,m=void 0!==v&&v,x=t.token,b=d(d({method:o,headers:!0===h?{}:{Accept:"application/json","Content-Type":"application/json"}},c&&!0===h&&{body:c}),c&&!1===h&&{body:JSON.stringify(c)}),_="https://90minglm.kro.kr/api/"+n,e.prev=3,!p){e.next=32;break}if(w=l.getToken()||x){e.next=8;break}throw{message:"NO TOKENS",status:406};case 8:return b.headers.Authorization="Bearer ".concat(w),e.next=11,fetch(_,b);case 11:if(y=e.sent,!(m&&!h&&y.status<=201)){e.next=14;break}return e.abrupt("return",y);case 14:if(!(!1===h&&y.status<=201)){e.next=23;break}return e.next=17,y.json();case 17:if(!(g=e.sent)){e.next=22;break}return e.abrupt("return",g);case 22:return e.abrupt("return",y);case 23:if(!(!0===h&&y.status<=201)){e.next=25;break}return e.abrupt("return",y);case 25:return e.next=27,y.json();case 27:throw e.t0=e.sent,e.t1=y.status,{message:e.t0,status:e.t1};case 32:return e.next=34,fetch(_,b);case 34:if(200!==(k=e.sent).status){e.next=40;break}return e.next=38,k.json();case 38:return j=e.sent,e.abrupt("return",j);case 40:if(201!==k.status||"members/signup"!==n){e.next=42;break}return e.abrupt("return",k);case 42:if(201!==k.status){e.next=48;break}return e.next=45,k.json();case 45:return E=e.sent,l.setToken("token",null===E||void 0===E?void 0:E.accesstoken,30),e.abrupt("return",E);case 48:e.next=53;break;case 50:return e.prev=50,e.t2=e.catch(3),e.abrupt("return",!1);case 53:case"end":return e.stop()}}),e,null,[[3,50]])})));return function(t){return e.apply(this,arguments)}}()},47360:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/endmatch/preview",function(){return n(75727)}])},61991:function(e){e.exports={end:"Preview_end__CQkVa",upperBox:"Preview_upperBox__37m9K",upperBoxTitle:"Preview_upperBoxTitle__2AK_D",upperBoxSub:"Preview_upperBoxSub__3yd7o",upperBoxSelect:"Preview_upperBoxSelect__16Uba",xButton:"Preview_xButton__1hjBc",lowerBox:"Preview_lowerBox__2C_EI",buttonBox:"Preview_buttonBox__1Sbek",placeholderAnimation:"Preview_placeholderAnimation__2QcOH"}},34155:function(e){var t,n,r=e.exports={};function u(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===u||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:u}catch(e){t=u}try{n="function"===typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var s,c=[],a=!1,p=-1;function f(){a&&s&&(a=!1,s.length?c=s.concat(c):p=-1,c.length&&l())}function l(){if(!a){var e=i(f);a=!0;for(var t=c.length;t;){for(s=c,c=[];++p<t;)s&&s[p].run();p=-1,t=c.length}s=null,a=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function d(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new h(e,t)),1!==c.length||a||i(l)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=d,r.addListener=d,r.once=d,r.off=d,r.removeListener=d,r.removeAllListeners=d,r.emit=d,r.prependListener=d,r.prependOnceListener=d,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},function(e){e.O(0,[9774,2888,179],(function(){return t=47360,e(e.s=t);var t}));var t=e.O();_N_E=t}]);