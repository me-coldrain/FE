(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3947],{881:function(e,t,n){"use strict";n.d(t,{I:function(){return f},Z:function(){return _}});var r,a=n(5893),s=n(4121),i=n(7294),o=n(1192),c=n(8951),l=n.n(c),u=l().image,d=l().placeholder,m=l().absoluteText,h=l().expectedMatch,p=l().matchingTeam;l().title;!function(e){e.Loading="IMAGE_LOADING",e.Loaded="IMAGE_LOADED",e.NotFound="IMAGE_NOT_FOUND",e.NotSpecified="IMAGE_NOT_SPECIFIED"}(r||(r={}));var v=function(){var e=(0,i.useState)((function(){return r.Loading})),t=e[0],n=e[1];return[(0,i.useCallback)((function(e){if(e)if(e.complete)n(r.Loaded);else{if(e.src){var t=function(){n(r.Loaded)},a=function(){n(r.NotFound)};return e.addEventListener("load",t),e.addEventListener("error",a),function(){e.removeEventListener("load",t),e.removeEventListener("error",a)}}n(r.NotSpecified)}}),[]),t]};function f(e){var t=e.src,n=void 0===t?"":t,r=e.alt,i=void 0===r?"":r,c=e.height,f=e.width,_=e.loading,g=void 0===_?"lazy":_,T=e.className,x=void 0===T?"":T,N=e.isPlaceholder,b=void 0!==N&&N,j=e.title,y=e.content,E=e.expected,P=v(),O=(0,s.Z)(P,2),k=O[0],w=O[1],I=b?d:l()[w];return E?(0,a.jsx)("div",{className:h,children:(0,a.jsxs)("div",{className:j,children:[(0,a.jsx)("div",{className:p,children:"\ub300\uacb0\ud300"}),(0,a.jsx)("h1",{children:"\uc11c\uc6b8FC"})]})}):(0,a.jsxs)("div",{role:"img","aria-label":i,className:(0,o.L)(u,I,[x,!!x]),children:[!b&&(0,a.jsx)("img",{src:n,alt:i,ref:k,height:c,width:f,loading:g}),(0,a.jsxs)("div",{className:m,children:[(0,a.jsx)("h3",{children:j}),(0,a.jsx)("h4",{children:y})]})]})}function _(e){var t=e.src,n=void 0===t?"":t,r=e.alt,i=void 0===r?"":r,c=e.height,m=e.width,h=e.loading,p=void 0===h?"lazy":h,f=e.className,_=void 0===f?"":f,g=e.isPlaceholder,T=void 0!==g&&g,x=v(),N=(0,s.Z)(x,2),b=N[0],j=N[1],y=T?d:l()[j];return(0,a.jsx)("div",{role:"img","aria-label":i,className:(0,o.L)(u,y,[_,!!_]),children:!T&&(0,a.jsx)("img",{src:n,alt:i,ref:b,height:c,width:m,loading:p})})}},4022:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var r=n(5893),a=n(809),s=n.n(a),i=n(2447),o=n(7294),c=n(1163),l=n(881),u=n(1664),d=n(8550),m=n.n(d),h=n(5814),p=m().aboutTeam,v=m().aboutTeamImage,f=m().upperBox,_=m().top3Teams,g=m().top3TeamsProfile,T=m().top3TeamsNum1,x=m().top3TeamsNum2,N=m().top3TeamsNum3,b=m().top3TeamsName,j=m().top3TeamsRecord,y=m().top3TeamsRecordScore,E=m().tabs,P=m().tabsTitle,O=m().tabsContent,k=m().tabsTitlePos,w=m().tabsTitleTeam,I=m().tabsTitleScore,L=m().tabsContentPos,A=m().tabsContentTeam,S=m().tabsContentScore;function C(e){var t=e.data;console.log(t);var n=(0,c.useRouter)().query,a=n.teamId,d=n.teamName;console.log("fetch with teamId =",a,d);var m=(0,o.useState)("mvp"),C=(m[0],m[1],(0,o.useState)()),D=C[0],R=C[1],G=function(){var e=(0,i.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,h.$)({endpoint:"home/rank/members",method:"GET",auth:!0}).then((function(e){R(e),console.log(e)})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,o.useEffect)((function(){G()}),[]);var M=null===D||void 0===D?void 0:D.find((function(e){return 1===e.rank})),V=null===D||void 0===D?void 0:D.find((function(e){return 2===e.rank})),Z=null===D||void 0===D?void 0:D.find((function(e){return 3===e.rank}));return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("main",{className:p,children:[(0,r.jsxs)("div",{className:f,children:[(0,r.jsx)(l.I,{className:v,src:"/img/RealStadium.png"}),(0,r.jsxs)("div",{className:_,children:[(0,r.jsxs)("div",{className:x,children:[(0,r.jsx)("img",{src:"/img/flag1.png",className:g}),(0,r.jsx)("div",{className:b,children:null===V||void 0===V?void 0:V.nickName}),(0,r.jsxs)("div",{className:j,children:[(0,r.jsx)("div",{className:y,children:(0,r.jsx)("div",{children:null===M||void 0===M?void 0:M.abilityPoint})}),(0,r.jsx)("img",{src:"/img/top2.png"})]})]}),(0,r.jsxs)("div",{className:T,children:[(0,r.jsx)("img",{src:"/img/flag1.png",className:g}),(0,r.jsx)("div",{className:b,children:null===M||void 0===M?void 0:M.nickName}),(0,r.jsxs)("div",{className:j,children:[(0,r.jsx)("div",{className:y,children:(0,r.jsx)("div",{children:null===V||void 0===V?void 0:V.abilityPoint})}),(0,r.jsx)("img",{src:"/img/top1.png"})]})]}),(0,r.jsxs)("div",{className:N,children:[(0,r.jsx)("img",{src:"/img/flag1.png",className:g}),(0,r.jsx)("div",{className:b,children:null===Z||void 0===Z?void 0:Z.nickName}),(0,r.jsxs)("div",{className:j,children:[(0,r.jsx)("div",{className:y,children:(0,r.jsx)("div",{children:null===Z||void 0===Z?void 0:Z.abilityPoint})}),(0,r.jsx)("img",{src:"/img/top3.png"})]})]})]})]}),(0,r.jsxs)("section",{children:[(0,r.jsx)("h2",{children:"Top10 Rank"}),(0,r.jsxs)("div",{className:E,children:[(0,r.jsxs)("div",{className:P,children:[(0,r.jsx)("div",{className:k,children:"Pos"}),(0,r.jsx)("div",{className:w,children:"Team"}),(0,r.jsx)("div",{className:I,children:"Score"})]}),null===D||void 0===D?void 0:D.map((function(e){return(0,r.jsx)(u.default,{href:{pathname:"/team/[teamName]/members",query:{teamId:30,teamName:d}},as:"/team/[teamName]/members",children:(0,r.jsxs)("div",{className:O,children:[(0,r.jsxs)("div",{className:L,children:[(0,r.jsx)("div",{style:{position:"absolute",width:"0px",height:"0px",borderBottom:"6em solid #4b72f1",borderLeft:"3.5em solid #4b72f1",borderRight:"3.5em solid transparent"}}),(0,r.jsx)("span",{children:null===e||void 0===e?void 0:e.rank})]}),(0,r.jsxs)("div",{className:A,children:[null===e||void 0===e?void 0:e.teamName,1===(null===e||void 0===e?void 0:e.rank)?(0,r.jsxs)("span",{children:[" ",(0,r.jsx)("img",{src:"/img/flag1.png"})]}):2===(null===e||void 0===e?void 0:e.rank)?(0,r.jsxs)("span",{children:[" ",(0,r.jsx)("img",{src:"/img/flag2.png"})]}):3===(null===e||void 0===e?void 0:e.rank)?(0,r.jsxs)("span",{children:[" ",(0,r.jsx)("img",{src:"/img/flag3.png"})]}):null]}),(0,r.jsx)("div",{className:S,children:null===e||void 0===e?void 0:e.winPoint})]})},null===e||void 0===e?void 0:e.teamId)}))]})]})]})})}},5814:function(e,t,n){"use strict";n.d(t,{$:function(){return v}});var r=n(809),a=n.n(r),s=n(6265),i=n(2447),o=n(4047),c=n(2700),l=n(6371),u=JSON.parse('{"pO":"DEBUG","Vi":"PROD","LB":{"LOCAL":"http://localhost:3000/api/v1","DEV":"","PROD":"http://ec2-52-78-86-217.ap-northeast-2.compute.amazonaws.com:3000/api/v1"}}'),d=n(46),m=new(function(){function e(){(0,o.Z)(this,e),(0,s.Z)(this,"ENV",void 0),(0,s.Z)(this,"LOG_LEVEL",void 0),(0,s.Z)(this,"SERVER_URL",void 0),(0,s.Z)(this,"TOKEN",void 0),this.LOG_LEVEL=u.pO,this.ENV=u.Vi,this.SERVER_URL=u.LB[this.ENV],this.TOKEN=d.env.TEMP_TOKEN}return(0,c.Z)(e,[{key:"setToken",value:function(e,t,n){try{return l.t6.setCookie(e,t,n)}catch(r){return console.log("getting token: services: ",r),!1}}},{key:"getToken",value:function(){try{return l.t6.getCookie("token")}catch(e){return console.log("getting token: services: ",e),!1}}},{key:"getUser",value:function(){var e=(0,i.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={},e.abrupt("return",t);case 5:return e.prev=5,e.t0=e.catch(0),console.log("Config: storeHasPressed: error =",e.t0),e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"ServerUrl",get:function(){return this.SERVER_URL}}]),e}());function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=function(){var e=(0,i.Z)(a().mark((function e(t){var n,r,s,i,o,c,l,u,d,h,v,f,_,g,T,x;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.endpoint,r=t.method,s=void 0===r?"GET":r,i=t.retries,void 0===i?3:i,o=t.params,c=void 0===o?null:o,l=t.auth,u=void 0===l||l,d=p({method:s,headers:{Accept:"application/json","Content-Type":"application/json"}},c&&{body:JSON.stringify(c)}),h="http://13.125.255.206/api/"+n,e.prev=3,!u){e.next=22;break}if(v=m.getToken()){e.next=8;break}throw{message:"NO TOKENS",status:406};case 8:return d.headers.Authorization="Bearer ".concat(v),e.next=11,fetch(h,d);case 11:if(f=e.sent,console.log("makeRequest: res =",f),200!==f.status){e.next=19;break}return e.next=16,f.json();case 16:return _=e.sent,console.log("makeRequest: json =",_),e.abrupt("return",_);case 19:throw{message:f.json(),status:f.status};case 22:return e.next=24,fetch(h,d);case 24:if(g=e.sent,console.log("res =",g),200!==g.status){e.next=32;break}return e.next=29,g.json();case 29:return T=e.sent,console.log("json =",T),e.abrupt("return",T);case 32:if(201!==g.status){e.next=39;break}return e.next=35,g.json();case 35:return x=e.sent,console.log("json =",x),m.setToken("token",null===x||void 0===x?void 0:x.accesstoken,30),e.abrupt("return",x);case 39:e.next=45;break;case 41:return e.prev=41,e.t0=e.catch(3),console.log("makeRequest: error =",e.t0),e.abrupt("return",!1);case 45:case"end":return e.stop()}}),e,null,[[3,41]])})));return function(t){return e.apply(this,arguments)}}()},1508:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rank/player",function(){return n(4022)}])},8951:function(e){e.exports={image:"Image_image__1DE1A",imageContent:"Image_imageContent__2Beq2",placeholder:"Image_placeholder__3EwrN",IMAGE_LOADING:"Image_IMAGE_LOADING__1X8DB",placeholderAnimation:"Image_placeholderAnimation__3GrfH",IMAGE_LOADED:"Image_IMAGE_LOADED__3q7yg",IMAGE_NOT_FOUND:"Image_IMAGE_NOT_FOUND__1r1wC",IMAGE_NOT_SPECIFIED:"Image_IMAGE_NOT_SPECIFIED__1PX6P",absoluteText:"Image_absoluteText__35Eiu",expectedMatch:"Image_expectedMatch__2D8Mt",title:"Image_title__2nax7",matchingTeam:"Image_matchingTeam__27Zfm"}},8550:function(e){e.exports={aboutTeam:"Player_aboutTeam__1oJDc",upperBox:"Player_upperBox__dbvsn",top3Teams:"Player_top3Teams__peJx1",top3TeamsName:"Player_top3TeamsName__3VDnr",top3TeamsProfile:"Player_top3TeamsProfile__11ZZc",top3TeamsNum1:"Player_top3TeamsNum1__YFvCi",top3TeamsNum2:"Player_top3TeamsNum2__2tIYL",top3TeamsNum3:"Player_top3TeamsNum3__VlNm9",top3TeamsRecord:"Player_top3TeamsRecord__c3VyV",top3TeamsRecordScore:"Player_top3TeamsRecordScore__3k-E9",aboutTeamImage:"Player_aboutTeamImage__1u4PO",tabs:"Player_tabs__1hQoX",tabsTitle:"Player_tabsTitle__1mFaX",tabsTitlePos:"Player_tabsTitlePos__1qyxs",tabsTitleTeam:"Player_tabsTitleTeam__2pAdh",tabsTitleScore:"Player_tabsTitleScore__303S2",tabsContent:"Player_tabsContent__1mV_z",tabsContentPos:"Player_tabsContentPos__2YuAV",tabsContentTeam:"Player_tabsContentTeam__1rtji",tabsContentScore:"Player_tabsContentScore__3NnTr",placeholderAnimation:"Player_placeholderAnimation__2TM64"}},46:function(e){var t,n,r=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:a}catch(e){t=a}try{n="function"===typeof clearTimeout?clearTimeout:s}catch(e){n=s}}();var o,c=[],l=!1,u=-1;function d(){l&&o&&(l=!1,o.length?c=o.concat(c):u=-1,c.length&&m())}function m(){if(!l){var e=i(d);l=!0;for(var t=c.length;t;){for(o=c,c=[];++u<t;)o&&o[u].run();u=-1,t=c.length}o=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function p(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new h(e,t)),1!==c.length||l||i(m)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=p,r.addListener=p,r.once=p,r.off=p,r.removeListener=p,r.removeAllListeners=p,r.emit=p,r.prependListener=p,r.prependOnceListener=p,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},function(e){e.O(0,[9774,2888,179],(function(){return t=1508,e(e.s=t);var t}));var t=e.O();_N_E=t}]);