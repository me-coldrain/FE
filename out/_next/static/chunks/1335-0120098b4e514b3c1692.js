(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1335],{27938:function(e,t,n){"use strict";n.d(t,{K:function(){return f},Z:function(){return h}});var r=n(85893),i=(n(67294),n(5133));function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16;return"".concat(e/t,"rem")}var o=n(50213),s=n.n(o),c=s().login,u=s().sign,l=s().nametag,p=s().signupBox;function f(e){var t=e.placeholder,n=void 0===t?"":t,o=(e.type,e.label),s=void 0===o?"":o,c=(e.id,e.onChange),u=e.value,l=void 0===u?"":u,p=(e.signup,e.error),f=void 0===p||p,h=(e.success,e.multiLine),d=void 0===h?5:h;return(0,r.jsx)(i.Z,{id:"fullWidth",value:l,onChange:c,label:s,multiline:!0,fullWidth:!0,rows:d,placeholder:n,sx:(f?("right ".concat(a(12)," center"),"".concat(a(16)," ").concat(a(16))):("right ".concat(a(12)," center"),"".concat(a(16)," ").concat(a(16))),{maxWidth:"100%"})})}function h(e){var t=e.placeholder,n=void 0===t?"":t,i=e.type,a=void 0===i?"":i,o=e.normal,s=e.label,f=void 0===s?"":s,h=e.id,d=void 0===h?"":h,m=e.onChange,v=e.value,g=void 0===v?void 0:v,x=e.signup,b=e.max;return o?(0,r.jsx)("input",{className:c,placeholder:n,type:a,id:d,value:g,onChange:m,maxLength:b}):x?(0,r.jsxs)("div",{className:p,children:[(0,r.jsx)("label",{htmlFor:d,className:l,children:f}),(0,r.jsx)("input",{className:u,id:d,placeholder:n,type:a,onChange:m,value:g,maxLength:b})]}):(0,r.jsx)(r.Fragment,{})}},85903:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(85893),i=(n(67294),n(79992)),a=n.n(i),o=a().progressbar,s=a().percent;function c(e){var t=e.size;return(0,r.jsx)("div",{className:o,children:(0,r.jsx)("div",{className:s,style:{width:t}})})}},92336:function(e,t,n){"use strict";n.d(t,{p:function(){return o}});n(67294);var r=n(809),i=n.n(r),a=n(92447),o=function(){var e=(0,a.Z)(i().mark((function e(t,n){var r,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.preventDefault();case 2:return e.next=4,new FileReader;case 4:return r=e.sent,e.next=7,t.target.files[0];case 7:return o=e.sent,r.onloadend=(0,a.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.result;case 2:t=e.sent,n(t);case 4:case"end":return e.stop()}}),e)}))),r.readAsDataURL(o),e.abrupt("return",o);case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},31335:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(85893),i=n(67294),a=n(92336),o=n(11163),s=n(85903),c=n(27938),u=n(65814),l=n(79311),p=n(77858),f=n.n(p),h=f().filebox,d=f().image,m=f().close,v=f().container,g=f().profileBox,x=f().footerBox;function b(){var e=(0,i.useState)({}),t=e[0],n=e[1],p=(0,i.useState)(""),f=p[0],b=p[1],_=(0,i.useState)(),k=_[0],y=_[1];return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("main",{className:v,children:[(0,r.jsxs)("section",{children:[(0,r.jsx)(s.Z,{size:"33%"}),(0,r.jsx)("h2",{children:"\ud504\ub85c\ud544\uc744 \uc791\uc131\ud574\uc8fc\uc138\uc694"}),(0,r.jsx)(c.Z,{type:"text",placeholder:"\ucd5c\ub300 12\uae00\uc790\uae4c\uc9c0 \uac00\ub2a5\ud569\ub2c8\ub2e4",onChange:function(e){return function(e){y(e.target.value)}(e)},label:"\ub2c9\ub124\uc784(\ud544\uc218)",signup:!0,value:k||""}),(0,r.jsxs)("div",{className:g,children:[(0,r.jsx)("h3",{children:"\ud504\ub85c\ud544"}),""!==f?(0,r.jsxs)("div",{className:d,children:[(0,r.jsx)("img",{src:f}),(0,r.jsx)("span",{className:m,onClick:function(){b("")},children:"x"})]}):(0,r.jsxs)("div",{className:h,children:[(0,r.jsx)("label",{htmlFor:"ex_file",children:"+"}),(0,r.jsx)("input",{type:"file",id:"ex_file",accept:"image/jpg,impge/png,image/jpeg,image/gif",onChange:function(e){return(0,a.p)(e,b).then((function(e){var t=new FormData;t.append("profileImageFile",e),n(t)}))}})]})]})]}),(0,r.jsx)("div",{className:x,children:(0,r.jsx)(l.Xp,{content:"\ub2e4\uc74c",activeStyle:!0,handleClick:function(){(function(e){return/^[\uac00-\ud7a3a-zA-Z0-9]{2,8}$/.test(e)})(k)?(0,u.$)({endpoint:"home/members/information/profileimage",method:"PATCH",params:t,auth:!0,isFile:!0}).then((function(e){200===e.status?o.default.push({pathname:"/register/position",query:{nickname:k}},"/register/position"):window.alert("\uc774\ubbf8\uc9c0 \ub4f1\ub85d\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4. \uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.")})):alert("\uc601\uc5b4,\ud55c\uae00\uc744 \ud3ec\ud568\ud574 2~8\uc790\ub9ac\uc774\uc5b4\uc57c \ud569\ub2c8\ub2e4")}})})]})})}},65814:function(e,t,n){"use strict";n.d(t,{$:function(){return m}});var r=n(809),i=n.n(r),a=n(26265),o=n(92447),s=n(74047),c=n(52700),u=n(6371),l=JSON.parse('{"pO":"DEBUG","Vi":"PROD","LB":{"LOCAL":"http://localhost:3000/api/v1","DEV":"","PROD":"http://ec2-52-78-86-217.ap-northeast-2.compute.amazonaws.com:3000/api/v1"}}'),p=n(34155),f=new(function(){function e(){(0,s.Z)(this,e),(0,a.Z)(this,"ENV",void 0),(0,a.Z)(this,"LOG_LEVEL",void 0),(0,a.Z)(this,"SERVER_URL",void 0),(0,a.Z)(this,"TOKEN",void 0),this.LOG_LEVEL=l.pO,this.ENV=l.Vi,this.SERVER_URL=l.LB[this.ENV],this.TOKEN=p.env.TEMP_TOKEN}return(0,c.Z)(e,[{key:"setToken",value:function(e,t,n){try{return u.t6.setCookie(e,t,n)}catch(r){return!1}}},{key:"getToken",value:function(){try{return u.t6.getCookie("token")}catch(e){return!1}}},{key:"getUser",value:function(){var e=(0,o.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={},e.abrupt("return",t);case 5:return e.prev=5,e.t0=e.catch(0),e.abrupt("return",!1);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"ServerUrl",get:function(){return this.SERVER_URL}}]),e}());function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m=function(){var e=(0,o.Z)(i().mark((function e(t){var n,r,a,o,s,c,u,l,p,h,m,v,g,x,b,_,k,y,j,w,O;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.endpoint,r=t.method,a=void 0===r?"GET":r,o=t.retries,void 0===o?3:o,s=t.params,c=void 0===s?null:s,u=t.auth,l=void 0===u||u,p=t.isFile,h=void 0!==p&&p,m=t.notJson,v=void 0!==m&&m,g=t.token,x=d(d({method:a,headers:!0===h?{}:{Accept:"application/json","Content-Type":"application/json"}},c&&!0===h&&{body:c}),c&&!1===h&&{body:JSON.stringify(c)}),b="https://90minglm.kro.kr/api/"+n,e.prev=3,!l){e.next=32;break}if(_=f.getToken()||g){e.next=8;break}throw{message:"NO TOKENS",status:406};case 8:return x.headers.Authorization="Bearer ".concat(_),e.next=11,fetch(b,x);case 11:if(k=e.sent,!(v&&!h&&k.status<=201)){e.next=14;break}return e.abrupt("return",k);case 14:if(!(!1===h&&k.status<=201)){e.next=23;break}return e.next=17,k.json();case 17:if(!(y=e.sent)){e.next=22;break}return e.abrupt("return",y);case 22:return e.abrupt("return",k);case 23:if(!(!0===h&&k.status<=201)){e.next=25;break}return e.abrupt("return",k);case 25:return e.next=27,k.json();case 27:throw e.t0=e.sent,e.t1=k.status,{message:e.t0,status:e.t1};case 32:return e.next=34,fetch(b,x);case 34:if(200!==(j=e.sent).status){e.next=40;break}return e.next=38,j.json();case 38:return w=e.sent,e.abrupt("return",w);case 40:if(201!==j.status||"members/signup"!==n){e.next=42;break}return e.abrupt("return",j);case 42:if(201!==j.status){e.next=48;break}return e.next=45,j.json();case 45:return O=e.sent,f.setToken("token",null===O||void 0===O?void 0:O.accesstoken,30),e.abrupt("return",O);case 48:e.next=53;break;case 50:return e.prev=50,e.t2=e.catch(3),e.abrupt("return",!1);case 53:case"end":return e.stop()}}),e,null,[[3,50]])})));return function(t){return e.apply(this,arguments)}}()},50213:function(e){e.exports={login:"Input_login__22loO",signupBox:"Input_signupBox__2e3jM",nametag:"Input_nametag__2ku1G",sign:"Input_sign__2n2ug"}},79992:function(e){e.exports={progressbar:"Progressbar_progressbar__18qY0",percent:"Progressbar_percent__2Gnqg"}},77858:function(e){e.exports={container:"Nickname_container__31vW9",textBox:"Nickname_textBox__3r87D",profileBox:"Nickname_profileBox__eRfn_",filebox:"Nickname_filebox__3DajT",image:"Nickname_image___ZVJl",close:"Nickname_close__1EWKs",footerBox:"Nickname_footerBox__9_N93"}},34155:function(e){var t,n,r=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function o(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"===typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var s,c=[],u=!1,l=-1;function p(){u&&s&&(u=!1,s.length?c=s.concat(c):l=-1,c.length&&f())}function f(){if(!u){var e=o(p);u=!0;for(var t=c.length;t;){for(s=c,c=[];++l<t;)s&&s[l].run();l=-1,t=c.length}s=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function d(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new h(e,t)),1!==c.length||u||o(f)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=d,r.addListener=d,r.once=d,r.off=d,r.removeListener=d,r.removeAllListeners=d,r.emit=d,r.prependListener=d,r.prependOnceListener=d,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}}]);