(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3459],{7938:function(e,t,n){"use strict";n.d(t,{K:function(){return f},Z:function(){return h}});var r=n(5893),o=(n(7294),n(1260));function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16;return"".concat(e/t,"rem")}var a=n(213),s=n.n(a),c=s().login,u=s().sign,l=s().nametag,p=s().signupBox;function f(e){var t=e.placeholder,n=void 0===t?"":t,a=(e.type,e.label),s=void 0===a?"":a,c=(e.id,e.onChange),u=e.value,l=void 0===u?"":u,p=(e.signup,e.error),f=void 0===p||p,h=(e.success,e.multiLine),d=void 0===h?5:h;return(0,r.jsx)(o.Z,{id:"fullWidth",value:l,onChange:c,label:s,multiline:!0,fullWidth:!0,rows:d,placeholder:n,sx:(f?("right ".concat(i(12)," center"),"".concat(i(16)," ").concat(i(16))):("right ".concat(i(12)," center"),"".concat(i(16)," ").concat(i(16))),{maxWidth:"100%"})})}function h(e){var t=e.placeholder,n=void 0===t?"":t,o=e.type,i=void 0===o?"":o,a=e.normal,s=e.label,f=void 0===s?"":s,h=e.id,d=void 0===h?"":h,g=e.onChange,v=e.value,m=void 0===v?void 0:v,b=e.signup,x=e.max;return a?(0,r.jsx)("input",{className:c,placeholder:n,type:i,id:d,value:m,onChange:g,maxLength:x}):b?(0,r.jsxs)("div",{className:p,children:[(0,r.jsx)("label",{htmlFor:d,className:l,children:f}),(0,r.jsx)("input",{className:u,id:d,placeholder:n,type:i,onChange:g,value:m,maxLength:x})]}):(0,r.jsx)(r.Fragment,{})}},97:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(5893),o=n(6265),i=n(7294),a=n(1664),s=n(1163),c=n(5814),u=n(7938),l=n(9311),p=n(4878),f=n.n(p);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(){var e=f().logo,t=f().user,n=f().inputBox,p=f().signup,h=f().kakao,g=f().buttonBox,v=f().kakaoBox,m=(0,i.useState)({email:"",password:""}),b=m[0],x=m[1],_=b.email,y=b.password,O=function(e){var t=e.target.id,n=e.target.value;x((function(e){return d(d({},e),{},(0,o.Z)({},t,n))}))};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("main",{className:t,children:(0,r.jsxs)("section",{children:[(0,r.jsx)("div",{className:e}),(0,r.jsxs)("div",{className:n,children:[(0,r.jsx)(u.Z,{id:"email",type:"id",placeholder:"\uc544\uc774\ub514",onChange:O,value:_||"",normal:!0}),(0,r.jsx)(u.Z,{id:"password",type:"password",placeholder:"\ube44\ubc00\ubc88\ud638",onChange:O,value:y||"",normal:!0}),(0,r.jsx)("div",{className:g,children:(0,r.jsx)(l.Xp,{content:"\ub85c\uadf8\uc778",activeStyle:!0,handleClick:function(){var e=b;console.log(e),(0,c.$)({endpoint:"members/login",method:"POST",params:e,auth:!1}).then((function(e){console.log(e),void 0!==e?null!==e&&void 0!==e&&e.first?s.default.replace("/register/nickname"):s.default.replace("/"):window.alert("\uc544\uc774\ub514 \ud639\uc740 \ube44\ubc00\ubc88\ud638\ub97c \ub2e4\uc2dc \uc785\ub825\ud574\uc8fc\uc138\uc694.")}))}})})]}),(0,r.jsx)("div",{className:p,children:(0,r.jsx)(a.default,{href:"/signup",children:(0,r.jsx)("a",{children:"\ud68c\uc6d0\uac00\uc785"})})}),(0,r.jsxs)("div",{className:h,children:[(0,r.jsx)("p",{children:"SNS\uacc4\uc815\uc73c\ub85c \uac04\ud3b8 \ub85c\uadf8\uc778"}),(0,r.jsx)("div",{className:v,children:(0,r.jsx)(l.Xp,{content:"KAKAO",activeStyle:!0,handleClick:function(){window.alert("\ucee4\ubc0d\uc468! \uae30\ub2a5\uc774 \uc900\ube44\uc911\uc785\ub2c8\ub2e4.")}})})]})]})})})}},5814:function(e,t,n){"use strict";n.d(t,{$:function(){return g}});var r=n(809),o=n.n(r),i=n(6265),a=n(2447),s=n(4047),c=n(2700),u=n(6371),l=JSON.parse('{"pO":"DEBUG","Vi":"PROD","LB":{"LOCAL":"http://localhost:3000/api/v1","DEV":"","PROD":"http://ec2-52-78-86-217.ap-northeast-2.compute.amazonaws.com:3000/api/v1"}}'),p=n(46),f=new(function(){function e(){(0,s.Z)(this,e),(0,i.Z)(this,"ENV",void 0),(0,i.Z)(this,"LOG_LEVEL",void 0),(0,i.Z)(this,"SERVER_URL",void 0),(0,i.Z)(this,"TOKEN",void 0),this.LOG_LEVEL=l.pO,this.ENV=l.Vi,this.SERVER_URL=l.LB[this.ENV],this.TOKEN=p.env.TEMP_TOKEN}return(0,c.Z)(e,[{key:"setToken",value:function(e,t,n){try{return u.t6.setCookie(e,t,n)}catch(r){return console.log("getting token: services: ",r),!1}}},{key:"getToken",value:function(){try{return u.t6.getCookie("token")}catch(e){return console.log("getting token: services: ",e),!1}}},{key:"getUser",value:function(){var e=(0,a.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={},e.abrupt("return",t);case 5:return e.prev=5,e.t0=e.catch(0),console.log("Config: storeHasPressed: error =",e.t0),e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"ServerUrl",get:function(){return this.SERVER_URL}}]),e}());function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=function(){var e=(0,a.Z)(o().mark((function e(t){var n,r,i,a,s,c,u,l,p,h,g,v,m,b,x,_,y,O,j;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.endpoint,r=t.method,i=void 0===r?"GET":r,a=t.retries,void 0===a?3:a,s=t.params,c=void 0===s?null:s,u=t.auth,l=void 0===u||u,p=t.isFile,h=void 0!==p&&p,g=t.token,v=d(d({method:i,headers:!0===h?{"Content-Type":"multipart/form-data"}:{Accept:"application/json","Content-Type":"application/json"}},c&&!0===h&&{body:c}),c&&!1===h&&{body:JSON.stringify(c)}),m="http://43.200.163.208/api/"+n,e.prev=3,!l){e.next=28;break}if(b=f.getToken()||g){e.next=8;break}throw{message:"NO TOKENS",status:406};case 8:return v.headers.Authorization="Bearer ".concat(b),e.next=11,fetch(m,v);case 11:if(x=e.sent,console.log("makeRequest: res =",x),!(!1===h&&x.status<=201)){e.next=19;break}return e.next=16,x.json();case 16:return _=e.sent,console.log("makeRequest: json =",_),e.abrupt("return",_);case 19:if(!(!0===h&&x.status<=201)){e.next=21;break}return e.abrupt("return",x);case 21:return e.next=23,x.json();case 23:throw e.t0=e.sent,e.t1=x.status,{message:e.t0,status:e.t1};case 28:return e.next=30,fetch(m,v);case 30:if(y=e.sent,console.log("res =",y),200!==y.status){e.next=38;break}return e.next=35,y.json();case 35:return O=e.sent,console.log("json =",O),e.abrupt("return",O);case 38:if(201!==y.status||"members/signup"!==n){e.next=40;break}return e.abrupt("return",y);case 40:if(201!==y.status){e.next=46;break}return e.next=43,null===y||void 0===y?void 0:y.json();case 43:return j=e.sent,f.setToken("token",null===j||void 0===j?void 0:j.accesstoken,30),e.abrupt("return",y);case 46:e.next=52;break;case 48:return e.prev=48,e.t2=e.catch(3),console.log("makeRequest: error =",e.t2),e.abrupt("return",!1);case 52:case"end":return e.stop()}}),e,null,[[3,48]])})));return function(t){return e.apply(this,arguments)}}()},7237:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return n(97)}])},213:function(e){e.exports={login:"Input_login__22loO",signupBox:"Input_signupBox__2e3jM",nametag:"Input_nametag__2ku1G",sign:"Input_sign__2n2ug"}},4878:function(e){e.exports={user:"Login_user__3g074",logo:"Login_logo__Gqeb0",inputBox:"Login_inputBox__3O0Ps",buttonBox:"Login_buttonBox__1pQpf",signup:"Login_signup__3Pzft",placeholder:"Login_placeholder__1HPHp",placeholderAnimation:"Login_placeholderAnimation__22t-V",kakao:"Login_kakao__1uedl",kakaoBox:"Login_kakaoBox__3-KrR"}},46:function(e){var t,n,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"===typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var s,c=[],u=!1,l=-1;function p(){u&&s&&(u=!1,s.length?c=s.concat(c):l=-1,c.length&&f())}function f(){if(!u){var e=a(p);u=!0;for(var t=c.length;t;){for(s=c,c=[];++l<t;)s&&s[l].run();l=-1,t=c.length}s=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function d(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new h(e,t)),1!==c.length||u||a(f)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=d,r.addListener=d,r.once=d,r.off=d,r.removeListener=d,r.removeAllListeners=d,r.emit=d,r.prependListener=d,r.prependOnceListener=d,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},function(e){e.O(0,[8430,1260,9774,2888,179],(function(){return t=7237,e(e.s=t);var t}));var t=e.O();_N_E=t}]);