(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7616],{27938:function(e,t,n){"use strict";n.d(t,{K:function(){return f},Z:function(){return d}});var r=n(85893),a=(n(67294),n(5133));function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16;return"".concat(e/t,"rem")}var i=n(50213),s=n.n(i),u=s().login,c=s().sign,l=s().nametag,p=s().signupBox;function f(e){var t=e.placeholder,n=void 0===t?"":t,i=(e.type,e.label),s=void 0===i?"":i,u=(e.id,e.onChange),c=e.value,l=void 0===c?"":c,p=(e.signup,e.error),f=void 0===p||p,d=(e.success,e.multiLine),h=void 0===d?5:d;return(0,r.jsx)(a.Z,{id:"fullWidth",value:l,onChange:u,label:s,multiline:!0,fullWidth:!0,rows:h,placeholder:n,sx:(f?("right ".concat(o(12)," center"),"".concat(o(16)," ").concat(o(16))):("right ".concat(o(12)," center"),"".concat(o(16)," ").concat(o(16))),{maxWidth:"100%"})})}function d(e){var t=e.placeholder,n=void 0===t?"":t,a=e.type,o=void 0===a?"":a,i=e.normal,s=e.label,f=void 0===s?"":s,d=e.id,h=void 0===d?"":d,v=e.onChange,g=e.value,m=void 0===g?void 0:g,b=e.signup,x=e.max;return i?(0,r.jsx)("input",{className:u,placeholder:n,type:o,id:h,value:m,onChange:v,maxLength:x}):b?(0,r.jsxs)("div",{className:p,children:[(0,r.jsx)("label",{htmlFor:h,className:l,children:f}),(0,r.jsx)("input",{className:c,id:h,placeholder:n,type:o,onChange:v,value:m,maxLength:x})]}):(0,r.jsx)(r.Fragment,{})}},41453:function(e,t,n){"use strict";n.d(t,{Vi:function(){return i},DQ:function(){return s},_R:function(){return c},I_:function(){return l}});var r=n(67294),a=n(98702),o=n(95998),i=function(){var e=(0,o.I0)(),t=c(),n=(0,o.v9)((function(e){return e.pages})).pages[t];return(0,r.useEffect)((function(){n||e((0,a.fx)(t))}),[t]),n||{}},s=function(){var e=c(),t=(0,o.v9)((function(e){return e.pages})),n=t.pages[e],r=t.schema[e];return n||r||{}},u=n(11163),c=function(){return(0,u.useRouter)().query.page||"home"},l=function(){var e=(0,o.I0)(),t=(0,o.v9)((function(e){return e.pages})).schema;return(0,r.useEffect)((function(){Object.keys(t).length||e((0,a.J1)())}),[]),t}},38213:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var r=n(26265),a=n(85893),o=n(67294),i=n(11163),s=n(9008),u=n(41453),c=n(65814),l=n(27938),p=n(79311),f=n(18297),d=n.n(f);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=function(e){return e?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("title",{children:e}),(0,a.jsx)("meta",{name:"og:title",content:e})]}):(0,a.jsx)(a.Fragment,{})},m=function(e){return e?(0,a.jsx)("meta",{name:"description",property:"og:description",content:e}):(0,a.jsx)(a.Fragment,{})};function b(){var e=(0,i.useRouter)(),t=d().user,n=d().ButtonBox,f=(0,u.DQ)(),h=f.title,b=void 0===h?"":h,x=f.description,O=void 0===x?"":x,j=(0,o.useState)({email:"",password:"",confirmpassword:""}),y=j[0],_=j[1],w=y.email,k=y.password,E=y.confirmpassword,N=function(e){var t=e.target.id,n=e.target.value;_((function(e){return v(v({},e),{},(0,r.Z)({},t,n))}))};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.default,{children:[g(b),m(O),(0,a.jsx)("meta",{name:"robots",content:"INDEX,FOLLOW"})]}),(0,a.jsxs)("main",{className:t,children:[(0,a.jsx)("section",{children:(0,a.jsx)("h2",{children:"\ud68c\uc6d0\uac00\uc785"})}),(0,a.jsxs)("section",{children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(l.Z,{id:"email",onChange:N,value:w||"",label:"\uc544\uc774\ub514",placeholder:"admin@gmail.com",signup:!0}),(0,a.jsx)(l.Z,{id:"password",type:"password",onChange:N,value:k||"",label:"\ube44\ubc00\ubc88\ud638",placeholder:"\uc601\ubb38 \ub300\uc18c\ubb38\uc790+\uc22b\uc790+\ud2b9\uc218\ubb38\uc790 \ud3ec\ud568 8~20\uc790\ub9ac",signup:!0}),(0,a.jsx)(l.Z,{id:"confirmpassword",type:"password",onChange:N,value:E||"",label:"\ube44\ubc00\ubc88\ud638 \uc7ac\ud655\uc778",placeholder:"\ube44\ubc00\ubc88\ud638\ub97c \ub2e4\uc2dc \ud55c\ubc88 \uc785\ub825\ud574\uc8fc\uc138\uc694.",signup:!0})]}),(0,a.jsx)("div",{className:n,children:(0,a.jsx)(p.Xp,{content:"\ud68c\uc6d0\uac00\uc785",activeStyle:!0,handleClick:function(){if(w&&k)if(k===E)if(function(e){return/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(e)}(w))if(function(e){return/^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{8,20}$/.test(e)}(k)){var t=y;(0,c.$)({endpoint:"members/signup",method:"POST",params:t,auth:!1}).then((function(t){(null===t||void 0===t?void 0:t.status)<=201?(window.alert("\ud68c\uc6d0\uac00\uc785\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),e.replace("/login")):window.alert("\ud68c\uc6d0\uac00\uc785\uc5d0 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4. \uc7a0\uc2dc\ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.")}))}else alert("\ube44\ubc00\ubc88\ud638\ub294 \ucd5c\uc18c 1\uac1c\uc758 \uc601\ubb38 \ub300\uc18c\ubb38\uc790+\uc22b\uc790+\ud2b9\uc218\ubb38\uc790\ub97c \ud3ec\ud568\ud558\uc5ec 8~20\uc790\ub9ac\uc774\uc5b4\uc57c \ud569\ub2c8\ub2e4.");else alert("\uc544\uc774\ub514\ub294 \uc774\uba54\uc77c \uc591\uc2dd\uc73c\ub85c \uc791\uc131\ud574\uc8fc\uc138\uc694!");else alert("\ube44\ubc00\ubc88\ud638\uc640 \ube44\ubc00\ubc88\ud638\ud655\uc778 \uac12\uc774 \ub2e4\ub985\ub2c8\ub2e4.");else alert("\ube48\uac12\uc774 \uc788\uc2b5\ub2c8\ub2e4.")}})})]})]})]})}},65814:function(e,t,n){"use strict";n.d(t,{$:function(){return v}});var r=n(809),a=n.n(r),o=n(26265),i=n(92447),s=n(74047),u=n(52700),c=n(6371),l=JSON.parse('{"pO":"DEBUG","Vi":"PROD","LB":{"LOCAL":"http://localhost:3000/api/v1","DEV":"","PROD":"http://ec2-52-78-86-217.ap-northeast-2.compute.amazonaws.com:3000/api/v1"}}'),p=n(34155),f=new(function(){function e(){(0,s.Z)(this,e),(0,o.Z)(this,"ENV",void 0),(0,o.Z)(this,"LOG_LEVEL",void 0),(0,o.Z)(this,"SERVER_URL",void 0),(0,o.Z)(this,"TOKEN",void 0),this.LOG_LEVEL=l.pO,this.ENV=l.Vi,this.SERVER_URL=l.LB[this.ENV],this.TOKEN=p.env.TEMP_TOKEN}return(0,u.Z)(e,[{key:"setToken",value:function(e,t,n){try{return c.t6.setCookie(e,t,n)}catch(r){return!1}}},{key:"getToken",value:function(){try{return c.t6.getCookie("token")}catch(e){return!1}}},{key:"getUser",value:function(){var e=(0,i.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={},e.abrupt("return",t);case 5:return e.prev=5,e.t0=e.catch(0),e.abrupt("return",!1);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"ServerUrl",get:function(){return this.SERVER_URL}}]),e}());function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=function(){var e=(0,i.Z)(a().mark((function e(t){var n,r,o,i,s,u,c,l,p,d,v,g,m,b,x,O,j,y,_,w,k;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.endpoint,r=t.method,o=void 0===r?"GET":r,i=t.retries,void 0===i?3:i,s=t.params,u=void 0===s?null:s,c=t.auth,l=void 0===c||c,p=t.isFile,d=void 0!==p&&p,v=t.notJson,g=void 0!==v&&v,m=t.token,b=h(h({method:o,headers:!0===d?{}:{Accept:"application/json","Content-Type":"application/json"}},u&&!0===d&&{body:u}),u&&!1===d&&{body:JSON.stringify(u)}),x="https://90minglm.kro.kr/api/"+n,e.prev=3,!l){e.next=32;break}if(O=f.getToken()||m){e.next=8;break}throw{message:"NO TOKENS",status:406};case 8:return b.headers.Authorization="Bearer ".concat(O),e.next=11,fetch(x,b);case 11:if(j=e.sent,!(g&&!d&&j.status<=201)){e.next=14;break}return e.abrupt("return",j);case 14:if(!(!1===d&&j.status<=201)){e.next=23;break}return e.next=17,j.json();case 17:if(!(y=e.sent)){e.next=22;break}return e.abrupt("return",y);case 22:return e.abrupt("return",j);case 23:if(!(!0===d&&j.status<=201)){e.next=25;break}return e.abrupt("return",j);case 25:return e.next=27,j.json();case 27:throw e.t0=e.sent,e.t1=j.status,{message:e.t0,status:e.t1};case 32:return e.next=34,fetch(x,b);case 34:if(200!==(_=e.sent).status){e.next=40;break}return e.next=38,_.json();case 38:return w=e.sent,e.abrupt("return",w);case 40:if(201!==_.status||"members/signup"!==n){e.next=42;break}return e.abrupt("return",_);case 42:if(201!==_.status){e.next=48;break}return e.next=45,_.json();case 45:return k=e.sent,f.setToken("token",null===k||void 0===k?void 0:k.accesstoken,30),e.abrupt("return",k);case 48:e.next=53;break;case 50:return e.prev=50,e.t2=e.catch(3),e.abrupt("return",!1);case 53:case"end":return e.stop()}}),e,null,[[3,50]])})));return function(t){return e.apply(this,arguments)}}()},36415:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){return n(38213)}])},50213:function(e){e.exports={login:"Input_login__22loO",signupBox:"Input_signupBox__2e3jM",nametag:"Input_nametag__2ku1G",sign:"Input_sign__2n2ug"}},18297:function(e){e.exports={user:"Signup_user__3Cbxm",ButtonBox:"Signup_ButtonBox__1Oox6",placeholderAnimation:"Signup_placeholderAnimation__2u9lo"}}},function(e){e.O(0,[8430,5133,9774,2888,179],(function(){return t=36415,e(e.s=t);var t}));var t=e.O();_N_E=t}]);