(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8792],{7665:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var r=n(5893),o=n(809),a=n.n(o),i=n(2447),s=n(7294),c=n(1163),u=n(7597),m=n.n(u),l=n(5814),f=m().aboutTeam;m().aboutTeamImage,m().scoreBoard,m().scoreBoardDetail,m().scoreBoardDetailBox,m().scoreBoardContentName,m().matchInfo,m().matchInfoContainer,m().matchInfoContainerIcon,m().rowDiv,m().matchHistoryContainer,m().matchHistoryContainerWin,m().matchHistoryContainerLose,m().matchHistoryContainerResult,m().matchHistoryContainerWinner,m().matchHistoryContainerLoser,m().tabs,m().tabsIcon;function h(e){var t=e.data;console.log(t);var n=(0,c.useRouter)().query,o=n.teamId,u=n.teamName;console.log("fetch with teamId =",o,u);var m=(0,s.useState)(),h=(m[0],m[1],(0,s.useState)()),_=(h[0],h[1],(0,s.useState)(!0)),p=(_[0],_[1]),T=(0,s.useState)(),d=T[0],b=T[1],v=function(){var e=(0,i.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.$)({endpoint:"home/teams/8",method:"GET",auth:!0}).then((function(e){return b(e)})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,s.useEffect)((function(){v()}),[]);(0,s.useEffect)((function(){null!==d&&void 0!==d&&d.teamCaptain?p(!0):p(!1)}),[]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("main",{className:f})})}},5814:function(e,t,n){"use strict";n.d(t,{$:function(){return p}});var r=n(809),o=n.n(r),a=n(6265),i=n(2447),s=n(4047),c=n(2700),u=n(6371),m=JSON.parse('{"pO":"DEBUG","Vi":"PROD","LB":{"LOCAL":"http://localhost:3000/api/v1","DEV":"","PROD":"http://ec2-52-78-86-217.ap-northeast-2.compute.amazonaws.com:3000/api/v1"}}'),l=n(4155),f=new(function(){function e(){(0,s.Z)(this,e),(0,a.Z)(this,"ENV",void 0),(0,a.Z)(this,"LOG_LEVEL",void 0),(0,a.Z)(this,"SERVER_URL",void 0),(0,a.Z)(this,"TOKEN",void 0),this.LOG_LEVEL=m.pO,this.ENV=m.Vi,this.SERVER_URL=m.LB[this.ENV],this.TOKEN=l.env.TEMP_TOKEN}return(0,c.Z)(e,[{key:"setToken",value:function(e,t,n){try{return u.t6.setCookie(e,t,n)}catch(r){return console.log("getting token: services: ",r),!1}}},{key:"getToken",value:function(){try{return u.t6.getCookie("token")}catch(e){return console.log("getting token: services: ",e),!1}}},{key:"getUser",value:function(){var e=(0,i.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={},e.abrupt("return",t);case 5:return e.prev=5,e.t0=e.catch(0),console.log("Config: storeHasPressed: error =",e.t0),e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"ServerUrl",get:function(){return this.SERVER_URL}}]),e}());function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=function(){var e=(0,i.Z)(o().mark((function e(t){var n,r,a,i,s,c,u,m,l,h,p,T,d,b,v,y;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.endpoint,r=t.method,a=void 0===r?"GET":r,i=t.retries,void 0===i?3:i,s=t.params,c=void 0===s?null:s,u=t.auth,m=void 0===u||u,l=_({method:a,headers:{Accept:"application/json","Content-Type":"application/json"}},c&&{body:JSON.stringify(c)}),h="http://13.125.255.206/api/"+n,e.prev=3,!m){e.next=22;break}if(p=f.getToken()){e.next=8;break}throw{message:"NO TOKENS",status:406};case 8:return l.headers.Authorization="Bearer ".concat(p),e.next=11,fetch(h,l);case 11:if(T=e.sent,console.log("makeRequest: res =",T),200!==T.status){e.next=19;break}return e.next=16,T.json();case 16:return d=e.sent,console.log("makeRequest: json =",d),e.abrupt("return",d);case 19:throw{message:T.json(),status:T.status};case 22:return e.next=24,fetch(h,l);case 24:if(b=e.sent,console.log("res =",b),200!==b.status){e.next=32;break}return e.next=29,b.json();case 29:return v=e.sent,console.log("json =",v),e.abrupt("return",v);case 32:if(201!==b.status){e.next=39;break}return e.next=35,b.json();case 35:return y=e.sent,console.log("json =",y),f.setToken("token",null===y||void 0===y?void 0:y.accesstoken,30),e.abrupt("return",y);case 39:e.next=45;break;case 41:return e.prev=41,e.t0=e.catch(3),console.log("makeRequest: error =",e.t0),e.abrupt("return",!1);case 45:case"end":return e.stop()}}),e,null,[[3,41]])})));return function(t){return e.apply(this,arguments)}}()},4095:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/team/[teamName]",function(){return n(7665)}])},7597:function(e){e.exports={aboutTeam:"Team_aboutTeam__hkhbM",aboutTeamMain:"Team_aboutTeamMain__2IjEU",aboutTeamPicture:"Team_aboutTeamPicture__26X3a",aboutTeamContent:"Team_aboutTeamContent__1L-la",aboutTeamHeader:"Team_aboutTeamHeader__F6qZ0",aboutTeamImage:"Team_aboutTeamImage__2O0yk",about:"Team_about__1_7K2",rowDiv:"Team_rowDiv__2qqWe",followers:"Team_followers__2eofi",followersPlaceholder:"Team_followersPlaceholder__2itZz",placeholderAnimation:"Team_placeholderAnimation__2fMLm",followersIcon:"Team_followersIcon__3LDoh",matchHistoryContainer:"Team_matchHistoryContainer__31qxG",matchHistoryContainerimg:"Team_matchHistoryContainerimg__3vX2V",matchHistoryContainerWin:"Team_matchHistoryContainerWin__1rB_7",matchHistoryContainerResult:"Team_matchHistoryContainerResult__1ooDE",matchHistoryContainerLose:"Team_matchHistoryContainerLose__20NB8",matchHistoryContainerWinner:"Team_matchHistoryContainerWinner__3XCt7",matchHistoryContainerLoser:"Team_matchHistoryContainerLoser__21-dl",routes:"Team_routes__ecgfR",scoreBoard:"Team_scoreBoard__3oqn0",scoreBoardContentName:"Team_scoreBoardContentName__anfOk",scoreBoardDetail:"Team_scoreBoardDetail__1rAkL",scoreBoardDetailBox:"Team_scoreBoardDetailBox__31DH-",matchInfo:"Team_matchInfo__1E4a1",matchInfoContainer:"Team_matchInfoContainer__2qCGb",matchInfoContainerIcon:"Team_matchInfoContainerIcon__2QSfL",tabs:"Team_tabs__lbsNn",tabsIcon:"Team_tabsIcon__PUKaI"}},4155:function(e){var t,n,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"===typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var s,c=[],u=!1,m=-1;function l(){u&&s&&(u=!1,s.length?c=s.concat(c):m=-1,c.length&&f())}function f(){if(!u){var e=i(l);u=!0;for(var t=c.length;t;){for(s=c,c=[];++m<t;)s&&s[m].run();m=-1,t=c.length}s=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function _(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new h(e,t)),1!==c.length||u||i(f)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=_,r.addListener=_,r.once=_,r.off=_,r.removeListener=_,r.removeAllListeners=_,r.emit=_,r.prependListener=_,r.prependOnceListener=_,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},function(e){e.O(0,[9774,2888,179],(function(){return t=4095,e(e.s=t);var t}));var t=e.O();_N_E=t}]);