(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7433],{9043:function(n,e,t){"use strict";t.d(e,{DB:function(){return h},Jg:function(){return f},ZP:function(){return p}});var r=t(5893),a=t(8347),i=t(4328),c=(t(7294),t(1192)),s=t(5219),o=t.n(s),u=o().button,l=o().coloredButton,d=o().checkBox;function h(n){var e=n.handleClick,t=n.content,a=n.length,i=(n.color,(0,c.L)(l,o()[a]));return(0,r.jsx)("button",{onClick:e,className:i,children:(0,r.jsx)("p",{children:t})})}function f(n){var e=n.checked,t=n.handleClick,s=n.content,u=((0,a.Z)(n,["checked","handleClick","content"]),(0,c.L)(d,o().long));return(0,r.jsxs)("button",{onClick:t,className:u,children:[(0,r.jsx)("p",{children:s}),(0,r.jsx)(i.Z,{checked:e})]})}function p(n){var e=n.handleClick,t=n.content,a=n.length,i=n.color,s=void 0!==i&&i,d=(0,c.L)(u,o()[a]),h=(0,c.L)(l,o()[a]);return(0,r.jsx)("button",{onClick:e,className:s?h:d,children:t})}},3006:function(n,e,t){"use strict";t.d(e,{ZP:function(){return r.ZP},DB:function(){return r.DB},Jg:function(){return r.Jg}});var r=t(9043)},8482:function(n,e,t){"use strict";t.d(e,{r:function(){return g},Z:function(){return b}});var r=t(7261),a=t(5893),i=t(7294),c=t(3935),s=t(9936);function o(){var n=(0,r.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 100;\n"]);return o=function(){return n},n}function u(){var n=(0,r.Z)(["\n  background: white;\n  width: 500px;\n  height: 600px;\n  border-radius: 15px;\n  padding: 15px;\n"]);return u=function(){return n},n}function l(){var n=(0,r.Z)(["\n  display: flex;\n  justify-content: flex-end;\n  font-size: 25px;\n"]);return l=function(){return n},n}function d(){var n=(0,r.Z)(["\n  display: flex;\n  flex-direction: column;\n  background: white;\n  width: 80%;\n  height: 50%;\n  border-radius: 15px;\n  padding: 15px;\n"]);return d=function(){return n},n}function h(){var n=(0,r.Z)(["\n  display: flex;\n  height: 600px;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n"]);return h=function(){return n},n}function f(){var n=(0,r.Z)(["\n  text-align: center;\n  font-size: 33px;\n  font-weight: 700;\n"]);return f=function(){return n},n}function p(){var n=(0,r.Z)(["\n  padding-top: 10px;\n  width: 400px;\n"]);return p=function(){return n},n}var g=function(n){var e=n.show,t=n.onClose,r=n.children,s=n.title,o=(0,i.useState)(!1),u=o[0],l=o[1];(0,i.useEffect)((function(){l(!0)}),[]);var d=e?(0,a.jsx)(C,{children:(0,a.jsxs)(j,{children:[(0,a.jsx)(_,{children:(0,a.jsx)("a",{href:"#",onClick:function(n){n.preventDefault(),t()},children:"x"})}),(0,a.jsxs)(v,{children:[s&&(0,a.jsx)(m,{children:s}),(0,a.jsx)(x,{children:r})]})]})}):null;if(u){var h=document.getElementById("modal-element");return c.createPortal(d,h)}return(0,a.jsx)(a.Fragment,{})},x=s.ZP.div(p()),m=s.ZP.p(f()),v=s.ZP.div(h()),j=s.ZP.div(d()),_=s.ZP.div(l()),k=s.ZP.div(u()),C=s.ZP.div(o()),b=function(n){var e=n.show,t=n.onClose,r=n.children,s=n.title,o=(0,i.useState)(!1),u=o[0],l=o[1];(0,i.useEffect)((function(){l(!0)}),[]);var d=e?(0,a.jsx)(C,{children:(0,a.jsxs)(k,{children:[(0,a.jsx)(_,{children:(0,a.jsx)("a",{href:"#",onClick:function(n){n.preventDefault(),t()},children:"x"})}),s&&(0,a.jsx)(m,{children:s}),(0,a.jsx)(x,{children:r})]})}):null;if(u){var h=document.getElementById("modal-element");return c.createPortal(d,h)}return(0,a.jsx)(a.Fragment,{})}},1453:function(n,e,t){"use strict";t.d(e,{Vi:function(){return c},DQ:function(){return s},_R:function(){return u},I_:function(){return l}});var r=t(7294),a=t(8702),i=t(5998),c=function(){var n=(0,i.I0)(),e=u(),t=(0,i.v9)((function(n){return n.pages})).pages[e];return(0,r.useEffect)((function(){t||n((0,a.fx)(e))}),[e]),t||{}},s=function(){var n=u(),e=(0,i.v9)((function(n){return n.pages})),t=e.pages[n],r=e.schema[n];return t||r||{}},o=t(1163),u=function(){return(0,o.useRouter)().query.page||"home"},l=function(){var n=(0,i.I0)(),e=(0,i.v9)((function(n){return n.pages})).schema;return(0,r.useEffect)((function(){Object.keys(e).length||n((0,a.J1)())}),[]),e}},7433:function(n,e,t){"use strict";t.d(e,{Z:function(){return K}});var r=t(809),a=t.n(r),i=t(2447),c=t(5893),s=t(7294),o=t(9008),u=t(1192),l=t(9237),d=t(22),h=t.n(d),f=t(8482),p=h().wrapper,g=h().landing,x=h().landingText,m=(h().landingImage,h().active),v=h().searchBar,j=h().searchBarIcon,_=h().filters;h().filtersIcon;function k(){var n=(0,s.useState)(!0),e=n[0],t=n[1],r=(0,s.useState)(!1),a=r[0],i=r[1],o=(0,s.useState)(!1),d=o[0],h=o[1],k=(0,s.useState)(!1),C=k[0],b=k[1],N=(0,s.useState)(!1),Z=N[0],y=N[1];return(0,c.jsxs)("div",{className:p,children:[(0,c.jsx)(f.Z,{title:"\uc9c0\uc5ed",show:a,onClose:function(){return i(!1)},children:"\uc9c0\uc5ed\ubaa8\ub2ec"}),(0,c.jsx)(f.Z,{title:"\uc694\uc77c",show:d,onClose:function(){return h(!1)},children:"\uc9c0\uc5ed\ubaa8\ub2ec"}),(0,c.jsx)(f.Z,{title:"\uc2dc\uac04",show:C,onClose:function(){return b(!1)},children:"\uc9c0\uc5ed\ubaa8\ub2ec"}),(0,c.jsx)(f.Z,{title:"\uc9c0\uc5ed",show:Z,onClose:function(){return y(!1)},children:"\uc9c0\uc5ed\ubaa8\ub2ec"}),(0,c.jsxs)("div",{className:g,children:[(0,c.jsxs)("div",{className:x,children:[(0,c.jsx)("p",{onClick:function(){console.log("fetchMatches : with"),t(!0)},className:(0,u.L)([m,!0===e]),style:{marginRight:"3rem"},children:"\ub300\uacb0"}),(0,c.jsx)("p",{onClick:function(){console.log("fetchRecruit :"),t(!1)},className:(0,u.L)([m,!1===e]),children:"\ud300\uc6d0 \ubaa8\uc9d1"})]}),(0,c.jsxs)("div",{className:v,children:[(0,c.jsx)("input",{placeholder:"\ud300 \uc774\ub984\uc744 \uac80\uc0c9\ud574\uc8fc\uc138\uc694."}),(0,c.jsx)(l.Z,{asset:"Calendar",className:j})]}),(0,c.jsxs)("div",{className:_,children:[(0,c.jsx)("div",{onClick:function(){return i(!a)},children:(0,c.jsx)("p",{children:"\uc9c0\uc5ed"})}),(0,c.jsx)("div",{onClick:function(){return h(!d)},children:(0,c.jsx)("p",{children:"\uc694\uc77c"})}),(0,c.jsx)("div",{onClick:function(){return b(!C)},children:(0,c.jsx)("p",{children:"\uc2dc\uac04"})}),(0,c.jsx)("div",{onClick:function(){return y(!Z)},children:(0,c.jsx)("p",{children:"\uc2b9\ub960"})})]})]})]})}var C=t(1453),b=t(1664),N=t(2306),Z=t.n(N),y=t(5998),w=t(3006),L=t(1163),E=t(5814),O=t(1875),P=Z().page,B=Z().pageLanding,I=(Z().pageContent,Z().placeholder,Z().teamCard),T=Z().teamCardFlex,R=Z().teamCardWinRate,D=Z().teamCardInfo,S=Z().teamCardIcon,V=Z().safeArea,A=Z().gettingMembers,F=function(n){return n?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("title",{children:n}),(0,c.jsx)("meta",{name:"og:title",content:n})]}):(0,c.jsx)(c.Fragment,{})},J=function(n){return n?(0,c.jsx)("meta",{name:"description",property:"og:description",content:n}):(0,c.jsx)(c.Fragment,{})};function K(n){var e=n.isLanding,t=(n.data,(0,C.DQ)()),r=t.title,d=void 0===r?"":r,h=t.description,f=void 0===h?"":h,p=((0,C.Vi)().content,(0,y.I0)()),g=function(){var n=(0,i.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,E.$)({endpoint:"home/teams",method:"GET",auth:!0}).then((function(n){return p((0,O.rO)(n.content))}));case 2:return n.next=4,(0,E.$)({endpoint:"home/teams",method:"GET",auth:!0});case 4:t=n.sent,console.log("useEffect data =",e,t);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();(0,s.useEffect)((function(){g()}),[]),console.log(n);var x=(0,y.v9)((function(n){return n.teams})),m=(0,u.L)(P,[B,e]);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(o.default,{children:[F(d),J(f),(0,c.jsx)("meta",{name:"robots",content:"INDEX,FOLLOW"})]}),(0,c.jsxs)("main",{className:m,children:[e&&(0,c.jsx)(k,{}),(0,c.jsxs)("section",{children:[(0,c.jsx)("div",{className:V,children:null===x||void 0===x?void 0:x.map((function(n,e){return(0,c.jsx)(b.default,{href:{pathname:"/team/[teamName]",query:{teamId:n.teamId,teamName:n.teamName}},children:(0,c.jsxs)("div",{className:I,children:[(0,c.jsx)("div",{className:T,children:(0,c.jsx)("h2",{children:n.teamName})}),(0,c.jsxs)("div",{className:R,children:[(0,c.jsx)("p",{children:"\uc2b9\ub960"}),(0,c.jsxs)("h3",{children:[n.winRate,"%"]}),(0,c.jsx)("h3",{children:"|"}),(0,c.jsxs)("h3",{children:[n.totalGameCount,"\uc804 ",n.winCount,"\uc2b9"," ",n.drawCount,"\ubb34 ",n.loseCount,"\ud328"]})]}),(0,c.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,c.jsxs)("div",{className:D,children:[(0,c.jsx)(l.Z,{asset:"Location",className:S}),(0,c.jsx)("p",{children:"\uc11c\uc6b8\ud2b9\ubcc4\uc2dc"})]}),(0,c.jsxs)("div",{className:D,children:[(0,c.jsx)(l.Z,{asset:"Location",className:S}),(0,c.jsx)("p",{children:"\ud648\uad6c\uc7a5 \uc120\ud638"})]}),(0,c.jsxs)("div",{className:D,children:[(0,c.jsx)(l.Z,{asset:"Calendar",className:S}),n.weekdays.map((function(n,e){return(0,c.jsx)("p",{children:n+"."},"weekday=".concat(e))})),n.time.map((function(n,e){return(0,c.jsx)("p",{children:n},"time-".concat(e))}))]})]})]})},"teamCard-".concat(e))}))}),(0,c.jsx)("div",{className:A,children:(0,c.jsx)(w.DB,{handleClick:function(){L.default.push("/create")},content:"+",length:"round"})})]})]})]})}},5814:function(n,e,t){"use strict";t.d(e,{$:function(){return g}});var r=t(809),a=t.n(r),i=t(6265),c=t(2447),s=t(4047),o=t(2700),u=t(6371),l=JSON.parse('{"pO":"DEBUG","Vi":"PROD","LB":{"LOCAL":"http://localhost:3000/api/v1","DEV":"","PROD":"http://ec2-52-78-86-217.ap-northeast-2.compute.amazonaws.com:3000/api/v1"}}'),d=t(46),h=new(function(){function n(){(0,s.Z)(this,n),(0,i.Z)(this,"ENV",void 0),(0,i.Z)(this,"LOG_LEVEL",void 0),(0,i.Z)(this,"SERVER_URL",void 0),(0,i.Z)(this,"TOKEN",void 0),this.LOG_LEVEL=l.pO,this.ENV=l.Vi,this.SERVER_URL=l.LB[this.ENV],this.TOKEN=d.env.TEMP_TOKEN}return(0,o.Z)(n,[{key:"setToken",value:function(n,e,t){try{return u.t6.setCookie(n,e,t)}catch(r){return console.log("getting token: services: ",r),!1}}},{key:"getToken",value:function(){try{return u.t6.getCookie("token")}catch(n){return console.log("getting token: services: ",n),!1}}},{key:"getUser",value:function(){var n=(0,c.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e={},n.abrupt("return",e);case 5:return n.prev=5,n.t0=n.catch(0),console.log("Config: storeHasPressed: error =",n.t0),n.abrupt("return",!1);case 9:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(){return n.apply(this,arguments)}}()},{key:"ServerUrl",get:function(){return this.SERVER_URL}}]),n}());function f(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function p(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?f(Object(t),!0).forEach((function(e){(0,i.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var g=function(){var n=(0,c.Z)(a().mark((function n(e){var t,r,i,c,s,o,u,l,d,f,g,x,m,v,j,_;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=e.endpoint,r=e.method,i=void 0===r?"GET":r,c=e.retries,void 0===c?3:c,s=e.params,o=void 0===s?null:s,u=e.auth,l=void 0===u||u,d=p({method:i,headers:{Accept:"application/json","Content-Type":"application/json"}},o&&{body:JSON.stringify(o)}),f="http://13.125.255.206/api/"+t,n.prev=3,!l){n.next=22;break}if(g=h.getToken()){n.next=8;break}throw{message:"NO TOKENS",status:406};case 8:return d.headers.Authorization="Bearer ".concat(g),n.next=11,fetch(f,d);case 11:if(x=n.sent,console.log("makeRequest: res =",x),200!==x.status){n.next=19;break}return n.next=16,x.json();case 16:return m=n.sent,console.log("makeRequest: json =",m),n.abrupt("return",m);case 19:throw{message:x.json(),status:x.status};case 22:return n.next=24,fetch(f,d);case 24:if(v=n.sent,console.log("res =",v),200!==v.status){n.next=32;break}return n.next=29,v.json();case 29:return j=n.sent,console.log("json =",j),n.abrupt("return",j);case 32:if(201!==v.status){n.next=39;break}return n.next=35,v.json();case 35:return _=n.sent,console.log("json =",_),h.setToken("token",null===_||void 0===_?void 0:_.accesstoken,30),n.abrupt("return",_);case 39:n.next=45;break;case 41:return n.prev=41,n.t0=n.catch(3),console.log("makeRequest: error =",n.t0),n.abrupt("return",!1);case 45:case"end":return n.stop()}}),n,null,[[3,41]])})));return function(e){return n.apply(this,arguments)}}()},5219:function(n){n.exports={button:"Button_button__2KtT-",coloredButton:"Button_coloredButton__2rHKf",short:"Button_short__3ec2l",long:"Button_long__3x6n-",round:"Button_round__TOsoe",checkBox:"Button_checkBox__3lnZa"}},2306:function(n){n.exports={page:"Page_page__2iZY9",pageLanding:"Page_pageLanding__Auwsu",pageContent:"Page_pageContent__1PKm4",placeholder:"Page_placeholder__2vXla",placeholderAnimation:"Page_placeholderAnimation__3h7rN",teamCard:"Page_teamCard__ft-0r",teamCardWinRate:"Page_teamCardWinRate__1k7s_",teamCardInfo:"Page_teamCardInfo__2pEt0",teamCardIcon:"Page_teamCardIcon__G67Oe",teamCardFlex:"Page_teamCardFlex__2ITdT",gettingMembers:"Page_gettingMembers__AlJKI"}},22:function(n){n.exports={wrapper:"Landing_wrapper__3aLmh",landing:"Landing_landing__3T_QE",landingText:"Landing_landingText__2jJau",landingTextActive:"Landing_landingTextActive__1qzbd",landingNavigationWrapper:"Landing_landingNavigationWrapper__4PZZt",landingImage:"Landing_landingImage__2bfF-",active:"Landing_active__13bU2",searchBar:"Landing_searchBar__C6pOy",searchBarIcon:"Landing_searchBarIcon__cXJKJ",filters:"Landing_filters__1tlHg",filtersIcon:"Landing_filtersIcon__3WhAT"}}}]);