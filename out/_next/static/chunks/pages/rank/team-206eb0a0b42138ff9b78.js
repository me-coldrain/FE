(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5179],{40881:function(e,t,n){"use strict";n.d(t,{I:function(){return _},Z:function(){return f}});var r,a=n(85893),o=n(64121),i=n(67294),s=n(81192),c=n(8951),l=n.n(c),u=l().image,d=l().placeholder,m=l().absoluteText,h=l().expectedMatch,p=l().matchingTeam;l().title;!function(e){e.Loading="IMAGE_LOADING",e.Loaded="IMAGE_LOADED",e.NotFound="IMAGE_NOT_FOUND",e.NotSpecified="IMAGE_NOT_SPECIFIED"}(r||(r={}));var v=function(){var e=(0,i.useState)((function(){return r.Loading})),t=e[0],n=e[1];return[(0,i.useCallback)((function(e){if(e)if(e.complete)n(r.Loaded);else{if(e.src){var t=function(){n(r.Loaded)},a=function(){n(r.NotFound)};return e.addEventListener("load",t),e.addEventListener("error",a),function(){e.removeEventListener("load",t),e.removeEventListener("error",a)}}n(r.NotSpecified)}}),[]),t]};function _(e){var t=e.src,n=void 0===t?"":t,r=e.alt,i=void 0===r?"":r,c=e.height,_=e.width,f=e.loading,T=void 0===f?"lazy":f,g=e.className,x=void 0===g?"":g,b=e.isPlaceholder,N=void 0!==b&&b,j=e.title,E=e.content,k=e.expected,O=v(),w=(0,o.Z)(O,2),I=w[0],y=w[1],P=N?d:l()[y];return k?(0,a.jsx)("div",{className:h,children:(0,a.jsxs)("div",{className:j,children:[(0,a.jsx)("div",{className:p,children:"\ub300\uacb0\ud300"}),(0,a.jsx)("h1",{children:"\uc11c\uc6b8FC"})]})}):(0,a.jsxs)("div",{role:"img","aria-label":i,className:(0,s.L)(u,P,[x,!!x]),children:[!N&&(0,a.jsx)("img",{src:n,alt:i,ref:I,height:c,width:_,loading:T}),(0,a.jsxs)("div",{className:m,children:[(0,a.jsx)("h3",{children:j}),(0,a.jsx)("h4",{children:E})]})]})}function f(e){var t=e.src,n=void 0===t?"":t,r=e.alt,i=void 0===r?"":r,c=e.height,m=e.width,h=e.loading,p=void 0===h?"lazy":h,_=e.className,f=void 0===_?"":_,T=e.isPlaceholder,g=void 0!==T&&T,x=v(),b=(0,o.Z)(x,2),N=b[0],j=b[1],E=g?d:l()[j];return(0,a.jsx)("div",{role:"img","aria-label":i,className:(0,s.L)(u,E,[f,!!f]),children:!g&&(0,a.jsx)("img",{src:n,alt:i,ref:N,height:c,width:m,loading:p})})}},57465:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return B}});var r=n(85893),a=n(809),o=n.n(a),i=n(92447),s=n(67294),c=n(11163),l=n(65814),u=n(40881),d=n(41664),m=n(10692),h=n.n(m),p=h().aboutTeam,v=h().aboutTeamImage,_=h().upperBox,f=h().logoImg,T=h().upperBoxTitle,g=h().uppberBoxTitleSelected,x=h().top3Teams,b=h().top3TeamsProfile,N=h().top3TeamsNum1,j=h().top3TeamsNum2,E=h().top3TeamsNum3,k=h().top3TeamsName,O=h().top3TeamsRecord,w=h().top3TeamsRecordScore,I=h().tabs,y=h().tabsTitle,P=h().tabsContent,L=h().tabsTitlePos,A=h().tabsTitleTeam,C=h().tabsTitleScore,S=h().tabsContentPos,D=h().tabsContentTeam,R=h().tabsContentScore;function B(e){var t=e.data;console.log(t);var n=(0,c.useRouter)(),a=n.query,m=a.teamId,h=a.teamName;console.log("fetch with teamId =",m,h);var B=(0,s.useState)(),G=B[0],M=B[1],Z=function(){var e=(0,i.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.$)({endpoint:"home/rank/teams",method:"GET",auth:!0}).then((function(e){M(e),console.log(e)})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,s.useEffect)((function(){Z()}),[]);var F=null===G||void 0===G?void 0:G.find((function(e){return 1===e.rank})),U=null===G||void 0===G?void 0:G.find((function(e){return 2===e.rank})),V=null===G||void 0===G?void 0:G.find((function(e){return 3===e.rank}));return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("main",{className:p,children:[(0,r.jsxs)("div",{className:_,children:[(0,r.jsx)("div",{className:f}),(0,r.jsxs)("div",{className:T,children:[(0,r.jsx)("div",{className:g,children:"\ud300\ub7ad\ud0b9"}),(0,r.jsx)("div",{onClick:function(){n.push("/rank/player")},children:"\uac1c\uc778\ub7ad\ud0b9"})]}),(0,r.jsx)(u.I,{className:v,src:"/img/RealStadium.png"}),(0,r.jsxs)("div",{className:x,children:[(0,r.jsxs)("div",{className:j,children:[(0,r.jsx)("img",{src:null===U||void 0===U?void 0:U.teamProfileUrl,className:b}),(0,r.jsx)("div",{className:k,children:null===U||void 0===U?void 0:U.teamName}),(0,r.jsxs)("div",{className:O,children:[(0,r.jsx)("div",{className:w,children:(0,r.jsx)("div",{children:null===U||void 0===U?void 0:U.winPoint})}),(0,r.jsx)("img",{src:"/img/top2.png"})]})]}),(0,r.jsxs)("div",{className:N,children:[(0,r.jsx)("img",{src:null===F||void 0===F?void 0:F.teamProfileUrl,className:b}),(0,r.jsx)("div",{className:k,children:null===F||void 0===F?void 0:F.teamName}),(0,r.jsxs)("div",{className:O,children:[(0,r.jsx)("div",{className:w,children:(0,r.jsx)("div",{children:null===F||void 0===F?void 0:F.winPoint})}),(0,r.jsx)("img",{src:"/img/top1.png"})]})]}),(0,r.jsxs)("div",{className:E,children:[(0,r.jsx)("img",{src:null===V||void 0===V?void 0:V.teamProfileUrl,className:b}),(0,r.jsx)("div",{className:k,children:null===V||void 0===V?void 0:V.teamName}),(0,r.jsxs)("div",{className:O,children:[(0,r.jsx)("div",{className:w,children:(0,r.jsx)("div",{children:null===V||void 0===V?void 0:V.winPoint})}),(0,r.jsx)("img",{src:"/img/top3.png"})]})]})]})]}),(0,r.jsxs)("section",{children:[(0,r.jsx)("h2",{children:"Top10 Rank"}),(0,r.jsxs)("div",{className:I,children:[(0,r.jsxs)("div",{className:y,children:[(0,r.jsx)("div",{className:L,children:"Pos"}),(0,r.jsx)("div",{className:A,children:"Team"}),(0,r.jsx)("div",{className:C,children:"Score"})]}),null===G||void 0===G?void 0:G.map((function(e,t){return(0,r.jsx)(d.default,{href:{pathname:"/team/[teamName]",query:{teamId:null===e||void 0===e?void 0:e.teamId,teamName:null===e||void 0===e?void 0:e.teamName}},children:(0,r.jsxs)("div",{className:P,children:[(0,r.jsxs)("div",{className:S,children:[(0,r.jsx)("div",{style:{position:"absolute",width:"0px",height:"0px",borderBottom:"6em solid #4b72f1",borderLeft:"3.5em solid #4b72f1",borderRight:"3.5em solid transparent",zIndex:0}}),(0,r.jsx)("span",{children:null===e||void 0===e?void 0:e.rank})]}),(0,r.jsxs)("div",{className:D,children:[null===e||void 0===e?void 0:e.teamName,1===(null===e||void 0===e?void 0:e.rank)?(0,r.jsxs)("span",{children:[" ",(0,r.jsx)("img",{src:"/img/flag1.png"})]}):2===(null===e||void 0===e?void 0:e.rank)?(0,r.jsxs)("span",{children:[" ",(0,r.jsx)("img",{src:"/img/flag2.png"})]}):3===(null===e||void 0===e?void 0:e.rank)?(0,r.jsxs)("span",{children:[" ",(0,r.jsx)("img",{src:"/img/flag3.png"})]}):null]}),(0,r.jsx)("div",{className:R,children:null===e||void 0===e?void 0:e.winPoint})]})},"teamCard-".concat(t))}))]})]})]})})}},65814:function(e,t,n){"use strict";n.d(t,{$:function(){return v}});var r=n(809),a=n.n(r),o=n(26265),i=n(92447),s=n(74047),c=n(52700),l=n(6371),u=JSON.parse('{"pO":"DEBUG","Vi":"PROD","LB":{"LOCAL":"http://localhost:3000/api/v1","DEV":"","PROD":"http://ec2-52-78-86-217.ap-northeast-2.compute.amazonaws.com:3000/api/v1"}}'),d=n(34155),m=new(function(){function e(){(0,s.Z)(this,e),(0,o.Z)(this,"ENV",void 0),(0,o.Z)(this,"LOG_LEVEL",void 0),(0,o.Z)(this,"SERVER_URL",void 0),(0,o.Z)(this,"TOKEN",void 0),this.LOG_LEVEL=u.pO,this.ENV=u.Vi,this.SERVER_URL=u.LB[this.ENV],this.TOKEN=d.env.TEMP_TOKEN}return(0,c.Z)(e,[{key:"setToken",value:function(e,t,n){try{return l.t6.setCookie(e,t,n)}catch(r){return console.log("getting token: services: ",r),!1}}},{key:"getToken",value:function(){try{return l.t6.getCookie("token")}catch(e){return console.log("getting token: services: ",e),!1}}},{key:"getUser",value:function(){var e=(0,i.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={},e.abrupt("return",t);case 5:return e.prev=5,e.t0=e.catch(0),console.log("Config: storeHasPressed: error =",e.t0),e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"ServerUrl",get:function(){return this.SERVER_URL}}]),e}());function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=function(){var e=(0,i.Z)(a().mark((function e(t){var n,r,o,i,s,c,l,u,d,h,v,_,f,T,g,x,b,N,j;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.endpoint,r=t.method,o=void 0===r?"GET":r,i=t.retries,void 0===i?3:i,s=t.params,c=void 0===s?null:s,l=t.auth,u=void 0===l||l,d=t.isFile,h=void 0!==d&&d,v=t.token,_=p(p({method:o,headers:!0===h?{}:{Accept:"application/json","Content-Type":"application/json"}},c&&!0===h&&{body:c}),c&&!1===h&&{body:JSON.stringify(c)}),f="http://43.200.163.208/api/"+n,e.prev=3,!u){e.next=33;break}if(T=m.getToken()||v){e.next=8;break}throw{message:"NO TOKENS",status:406};case 8:return _.headers.Authorization="Bearer ".concat(T),e.next=11,fetch(f,_);case 11:if(g=e.sent,console.log("makeRequest: res =",g),!(!1===h&&g.status<=201)){e.next=23;break}return e.next=16,g.json();case 16:if(!(x=e.sent)){e.next=22;break}return console.log("makeRequest: json =",x),e.abrupt("return",x);case 22:return e.abrupt("return",g);case 23:if(!(!0===h&&g.status<=201)){e.next=26;break}return console.log(g),e.abrupt("return",g);case 26:return e.next=28,g.json();case 28:throw e.t0=e.sent,e.t1=g.status,{message:e.t0,status:e.t1};case 33:return e.next=35,fetch(f,_);case 35:if(b=e.sent,console.log("res =",b),200!==b.status){e.next=43;break}return e.next=40,b.json();case 40:return N=e.sent,console.log("json =",N),e.abrupt("return",N);case 43:if(201!==b.status||"members/signup"!==n){e.next=45;break}return e.abrupt("return",b);case 45:if(201!==b.status){e.next=52;break}return e.next=48,b.json();case 48:return j=e.sent,console.log("json =",j),m.setToken("token",null===j||void 0===j?void 0:j.accesstoken,30),e.abrupt("return",j);case 52:e.next=58;break;case 54:return e.prev=54,e.t2=e.catch(3),console.log("makeRequest: error =",e.t2),e.abrupt("return",!1);case 58:case"end":return e.stop()}}),e,null,[[3,54]])})));return function(t){return e.apply(this,arguments)}}()},5863:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rank/team",function(){return n(57465)}])},8951:function(e){e.exports={image:"Image_image__1DE1A",imageContent:"Image_imageContent__2Beq2",placeholder:"Image_placeholder__3EwrN",IMAGE_LOADING:"Image_IMAGE_LOADING__1X8DB",placeholderAnimation:"Image_placeholderAnimation__3GrfH",IMAGE_LOADED:"Image_IMAGE_LOADED__3q7yg",IMAGE_NOT_FOUND:"Image_IMAGE_NOT_FOUND__1r1wC",IMAGE_NOT_SPECIFIED:"Image_IMAGE_NOT_SPECIFIED__1PX6P",absoluteText:"Image_absoluteText__35Eiu",expectedMatch:"Image_expectedMatch__2D8Mt",title:"Image_title__2nax7",matchingTeam:"Image_matchingTeam__27Zfm"}},10692:function(e){e.exports={aboutTeam:"Team_aboutTeam__3BRHU",upperBox:"Team_upperBox__3VO7i",logoImg:"Team_logoImg__ruIIf",upperBoxTitle:"Team_upperBoxTitle__3MxO1",uppberBoxTitleSelected:"Team_uppberBoxTitleSelected__3uikL",top3Teams:"Team_top3Teams__LNqL9",top3TeamsName:"Team_top3TeamsName__1FTKE",top3TeamsProfile:"Team_top3TeamsProfile__zhfJ6",top3TeamsNum1:"Team_top3TeamsNum1__HBZHb",top3TeamsNum2:"Team_top3TeamsNum2__1tP3w",top3TeamsNum3:"Team_top3TeamsNum3__3ChvN",top3TeamsRecord:"Team_top3TeamsRecord__3boTv",top3TeamsRecordScore:"Team_top3TeamsRecordScore__2ubsd",aboutTeamImage:"Team_aboutTeamImage__3JI8K",tabs:"Team_tabs__xQMB3",tabsTitle:"Team_tabsTitle__2Fo3H",tabsTitlePos:"Team_tabsTitlePos__DetAq",tabsTitleTeam:"Team_tabsTitleTeam__1_MY0",tabsTitleScore:"Team_tabsTitleScore__1_AB8",tabsContent:"Team_tabsContent__2U2-K",tabsContentPos:"Team_tabsContentPos__2BP2Q",tabsContentTeam:"Team_tabsContentTeam__2FXwM",tabsContentScore:"Team_tabsContentScore__2RNrz",placeholderAnimation:"Team_placeholderAnimation__36Qvu"}},34155:function(e){var t,n,r=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:a}catch(e){t=a}try{n="function"===typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var s,c=[],l=!1,u=-1;function d(){l&&s&&(l=!1,s.length?c=s.concat(c):u=-1,c.length&&m())}function m(){if(!l){var e=i(d);l=!0;for(var t=c.length;t;){for(s=c,c=[];++u<t;)s&&s[u].run();u=-1,t=c.length}s=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function p(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new h(e,t)),1!==c.length||l||i(m)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=p,r.addListener=p,r.once=p,r.off=p,r.removeListener=p,r.removeAllListeners=p,r.emit=p,r.prependListener=p,r.prependOnceListener=p,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},function(e){e.O(0,[9774,2888,179],(function(){return t=5863,e(e.s=t);var t}));var t=e.O();_N_E=t}]);