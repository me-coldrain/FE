(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3232],{34462:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return I}});var o=n(85893),r=n(809),a=n.n(r),i=n(92447),s=n(67294),c=n(41664),l=n(11163),h=n(65814),u=n(67421),d=n(79311),m=n(85470),_=n.n(m),x=_().aboutTeam,f=_().aboutTeamTitleBox,p=(_().scoreBoard,_().scoreBoardDetail,_().scoreBoardDetailBox,_().scoreBoardContentName,_().matchInfo),v=_().matchInfoContainer,g=_().matchInfoContainerIcon,j=_().matchInfoContainerBox,w=_().matchInfoContainerBoxText,b=(_().rowDiv,_().matchHistoryContainer,_().matchHistoryContainerWin,_().matchHistoryContainerLose,_().matchHistoryContainerResult,_().matchHistoryContainerWinner,_().matchHistoryContainerLoser,_().tabs,_().tabsIcon,_().team),C=_().upperBox,T=_().lowerBox,y=_().location,B=_().lowerBoxLeft,M=_().lowerBoxRight,N=_().lowerBoxRightContent,L=_().lowerBoxRightContentPercent,k=_().lowerBoxRightContentTotal,R=_().lowerBoxRightContentWin,E=_().lowerBoxRightContentDraw,O=_().lowerBoxRightContentLose;function I(){var t=(0,l.useRouter)().query,e=t.teamId,n=t.matchId,r=t.teamName;console.log("fetch with teamId =",e);var m=(0,s.useState)(),_=(m[0],m[1],(0,s.useState)()),I=_[0],P=_[1],D=(0,s.useState)(!0),H=(D[0],D[1],function(){var t=(0,i.Z)(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,h.$)({endpoint:"teams/".concat(e,"/matches/").concat(n,"/detail"),method:"GET",auth:!0}).then((function(t){console.log(t),P(t)})).catch((function(t){return console.log(t)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}());return(0,s.useEffect)((function(){H()}),[]),(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("main",{className:x,children:[(0,o.jsx)("p",{children:"\uc0c1\ub300\ud300"}),(0,o.jsx)("div",{className:f,children:(0,o.jsxs)("div",{className:b,children:[(0,o.jsx)("div",{className:C,children:(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{children:null===I||void 0===I?void 0:I.opposingTeamName}),(0,o.jsxs)("div",{className:y,children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(u.Z,{asset:"Location"}),(0,o.jsx)("p",{children:null===I||void 0===I?void 0:I.matchLocation})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(u.Z,{asset:"People"}),(0,o.jsxs)("p",{children:[null===I||void 0===I?void 0:I.opposingTeamMemberCount,"\uba85"]})]})]})]})}),(0,o.jsxs)("div",{className:T,children:[(0,o.jsxs)("div",{className:B,children:[(0,o.jsx)("p",{children:"\uc2b9\uc810"}),(0,o.jsx)("p",{children:null===I||void 0===I?void 0:I.opposingTeamPoint})]}),(0,o.jsxs)("div",{className:M,children:[(0,o.jsx)("p",{children:"\uc2b9\ub960"}),(0,o.jsxs)("div",{className:N,children:[(0,o.jsx)("div",{className:L,children:(0,o.jsxs)("p",{children:[null===I||void 0===I?void 0:I.opposingTeamWinRate,"%"]})}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:k,children:null===I||void 0===I?void 0:I.opposingTeamTotalGameCount}),(0,o.jsx)("div",{className:R,children:null===I||void 0===I?void 0:I.opposingTeamWinCount}),(0,o.jsx)("div",{className:E,children:null===I||void 0===I?void 0:I.opposingTeamDrawCount}),(0,o.jsx)("div",{className:O,children:null===I||void 0===I?void 0:I.opposingTeamLoseCount})]})]})]})]})]})}),(0,o.jsxs)("div",{className:p,children:[(0,o.jsx)("p",{children:"\ub300\uacb0 \uc815\ubcf4"}),(0,o.jsxs)("div",{className:v,children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(u.Z,{asset:"Location",className:g}),(0,o.jsx)("h4",{children:"\ub300\uacb0\uc7a5\uc18c"})]}),(0,o.jsx)("h5",{children:null===I||void 0===I?void 0:I.matchLocation})]}),(0,o.jsxs)("div",{className:v,children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(u.Z,{asset:"Calendar",className:g}),(0,o.jsx)("h4",{children:"\ub0a0\uc9dc/\uc2dc\uac04"})]}),(0,o.jsx)("h5",{children:null===I||void 0===I?void 0:I.matchDate})]}),(0,o.jsxs)("div",{className:v,children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(u.Z,{asset:"Calendar",className:g}),(0,o.jsx)("h4",{children:"\uc8fc\uc7a5 \uc5f0\ub77d\uc218\ub2e8"})]}),(0,o.jsx)("h5",{children:null===I||void 0===I?void 0:I.contact})]}),(0,o.jsxs)("div",{className:v,children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(u.Z,{asset:"Alarm",className:g}),(0,o.jsx)("h4",{children:"\uc8fc\uc7a5 \ud578\ub4dc\ud3f0"})]}),(0,o.jsx)("h5",{children:null===I||void 0===I?void 0:I.phone})]})]}),(0,o.jsx)("h3",{children:"\ud3ec\uba54\uc774\uc158"}),(0,o.jsx)(c.default,{href:{pathname:"/formation",query:{teamId:e,matchId:n,teamName:r}},children:(0,o.jsx)("div",{className:j,children:(0,o.jsxs)("div",{className:w,children:[(0,o.jsx)("div",{children:"+"}),(0,o.jsx)("p",{children:"\ud3ec\uba54\uc774\uc158\uc744 \ub4f1\ub85d\ud574\uc8fc\uc138\uc694"})]})})}),(0,o.jsx)(d.Xp,{content:"\uacbd\uae30\ucde8\uc18c",activeStyle:!1,handleClick:function(){}})]})})}},65814:function(t,e,n){"use strict";n.d(e,{$:function(){return x}});var o=n(809),r=n.n(o),a=n(26265),i=n(92447),s=n(74047),c=n(52700),l=n(6371),h=JSON.parse('{"pO":"DEBUG","Vi":"PROD","LB":{"LOCAL":"http://localhost:3000/api/v1","DEV":"","PROD":"http://ec2-52-78-86-217.ap-northeast-2.compute.amazonaws.com:3000/api/v1"}}'),u=n(34155),d=new(function(){function t(){(0,s.Z)(this,t),(0,a.Z)(this,"ENV",void 0),(0,a.Z)(this,"LOG_LEVEL",void 0),(0,a.Z)(this,"SERVER_URL",void 0),(0,a.Z)(this,"TOKEN",void 0),this.LOG_LEVEL=h.pO,this.ENV=h.Vi,this.SERVER_URL=h.LB[this.ENV],this.TOKEN=u.env.TEMP_TOKEN}return(0,c.Z)(t,[{key:"setToken",value:function(t,e,n){try{return l.t6.setCookie(t,e,n)}catch(o){return console.log("getting token: services: ",o),!1}}},{key:"getToken",value:function(){try{return l.t6.getCookie("token")}catch(t){return console.log("getting token: services: ",t),!1}}},{key:"getUser",value:function(){var t=(0,i.Z)(r().mark((function t(){var e;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e={},t.abrupt("return",e);case 5:return t.prev=5,t.t0=t.catch(0),console.log("Config: storeHasPressed: error =",t.t0),t.abrupt("return",!1);case 9:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(){return t.apply(this,arguments)}}()},{key:"ServerUrl",get:function(){return this.SERVER_URL}}]),t}());function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){(0,a.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var x=function(){var t=(0,i.Z)(r().mark((function t(e){var n,o,a,i,s,c,l,h,u,m,x,f,p,v,g,j,w,b,C,T,y;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.endpoint,o=e.method,a=void 0===o?"GET":o,i=e.retries,void 0===i?3:i,s=e.params,c=void 0===s?null:s,l=e.auth,h=void 0===l||l,u=e.isFile,m=void 0!==u&&u,x=e.notJson,f=void 0!==x&&x,p=e.token,v=_(_({method:a,headers:!0===m?{}:{Accept:"application/json","Content-Type":"application/json"}},c&&!0===m&&{body:c}),c&&!1===m&&{body:JSON.stringify(c)}),g="https://90minglm.kro.kr/api/"+n,t.prev=3,!h){t.next=39;break}if(j=d.getToken()||p){t.next=8;break}throw{message:"NO TOKENS",status:406};case 8:return v.headers.Authorization="Bearer ".concat(j),t.next=11,fetch(g,v);case 11:if(w=t.sent,console.log("makeRequest: res =",w),!(f&&!m&&w.status<=201)){t.next=15;break}return t.abrupt("return",w);case 15:if(!(!1===m&&w.status<=201)){t.next=25;break}return t.next=18,w.json();case 18:if(!(b=t.sent)){t.next=24;break}return console.log("makeRequest: json =",b),t.abrupt("return",b);case 24:return t.abrupt("return",w);case 25:if(!(!0===m&&w.status<=201)){t.next=32;break}return t.t0=console,t.next=29,w.json();case 29:return t.t1=t.sent,t.t0.log.call(t.t0,t.t1),t.abrupt("return",w);case 32:return t.next=34,w.json();case 34:throw t.t2=t.sent,t.t3=w.status,{message:t.t2,status:t.t3};case 39:return t.next=41,fetch(g,v);case 41:if(C=t.sent,console.log("res =",C),200!==C.status){t.next=49;break}return t.next=46,C.json();case 46:return T=t.sent,console.log("json =",T),t.abrupt("return",T);case 49:if(201!==C.status||"members/signup"!==n){t.next=51;break}return t.abrupt("return",C);case 51:if(201!==C.status){t.next=58;break}return t.next=54,C.json();case 54:return y=t.sent,console.log("json =",y),d.setToken("token",null===y||void 0===y?void 0:y.accesstoken,30),t.abrupt("return",y);case 58:t.next=64;break;case 60:return t.prev=60,t.t4=t.catch(3),console.log("makeRequest: error =",t.t4),t.abrupt("return",!1);case 64:case"end":return t.stop()}}),t,null,[[3,60]])})));return function(e){return t.apply(this,arguments)}}()},67005:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/myteam/match",function(){return n(34462)}])},85470:function(t){t.exports={aboutTeam:"Match_aboutTeam__2SQji",aboutTeamTitleBox:"Match_aboutTeamTitleBox__hrLJu",aboutTeamMain:"Match_aboutTeamMain__2zpXi",aboutTeamPicture:"Match_aboutTeamPicture__1CxLL",aboutTeamContent:"Match_aboutTeamContent__1iuoN",team:"Match_team__2KH0J",upperBox:"Match_upperBox__10R4h",location:"Match_location__2IgqE",lowerBox:"Match_lowerBox__3VYvV",lowerBoxLeft:"Match_lowerBoxLeft__2nVLk",lowerBoxRight:"Match_lowerBoxRight__26ksL",lowerBoxRightContent:"Match_lowerBoxRightContent__2jL5c",lowerBoxRightContentPercent:"Match_lowerBoxRightContentPercent__LFlAv",lowerBoxRightContentTotal:"Match_lowerBoxRightContentTotal__2Z6-c",lowerBoxRightContentWin:"Match_lowerBoxRightContentWin__22IXi",lowerBoxRightContentDraw:"Match_lowerBoxRightContentDraw__1zK7O",lowerBoxRightContentLose:"Match_lowerBoxRightContentLose__3v-Mw",aboutTeamHeader:"Match_aboutTeamHeader___GyNZ",aboutTeamImage:"Match_aboutTeamImage__3iFpZ",about:"Match_about__2xKh9",rowDiv:"Match_rowDiv__3iTE4",followers:"Match_followers__JU_5V",followersPlaceholder:"Match_followersPlaceholder__7K6qu",placeholderAnimation:"Match_placeholderAnimation__1Y3q8",followersIcon:"Match_followersIcon__Q4BkK",matchHistoryContainer:"Match_matchHistoryContainer__3vWs9",matchHistoryContainerimg:"Match_matchHistoryContainerimg__1b-lu",matchHistoryContainerWin:"Match_matchHistoryContainerWin__1LLqI",matchHistoryContainerResult:"Match_matchHistoryContainerResult__1dCs4",matchHistoryContainerLose:"Match_matchHistoryContainerLose__1AriT",matchHistoryContainerWinner:"Match_matchHistoryContainerWinner__125OL",matchHistoryContainerLoser:"Match_matchHistoryContainerLoser__2OGez",routes:"Match_routes__3Kc3D",scoreBoard:"Match_scoreBoard__XZPnF",scoreBoardContentName:"Match_scoreBoardContentName__1TxdI",scoreBoardDetail:"Match_scoreBoardDetail__2WY9o",scoreBoardDetailBox:"Match_scoreBoardDetailBox__3YQbA",matchInfo:"Match_matchInfo__3b_4P",matchInfoContainer:"Match_matchInfoContainer__21LRT",matchInfoContainerIcon:"Match_matchInfoContainerIcon__dDbsB",matchInfoContainerBox:"Match_matchInfoContainerBox__FIf5a",matchInfoContainerBoxText:"Match_matchInfoContainerBoxText__1v0tK",tabs:"Match_tabs__1uE08",tabsIcon:"Match_tabsIcon__3zMbQ"}},34155:function(t){var e,n,o=t.exports={};function r(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function i(t){if(e===setTimeout)return setTimeout(t,0);if((e===r||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(n){try{return e.call(null,t,0)}catch(n){return e.call(this,t,0)}}}!function(){try{e="function"===typeof setTimeout?setTimeout:r}catch(t){e=r}try{n="function"===typeof clearTimeout?clearTimeout:a}catch(t){n=a}}();var s,c=[],l=!1,h=-1;function u(){l&&s&&(l=!1,s.length?c=s.concat(c):h=-1,c.length&&d())}function d(){if(!l){var t=i(u);l=!0;for(var e=c.length;e;){for(s=c,c=[];++h<e;)s&&s[h].run();h=-1,e=c.length}s=null,l=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function m(t,e){this.fun=t,this.array=e}function _(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new m(t,e)),1!==c.length||l||i(d)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=_,o.addListener=_,o.once=_,o.off=_,o.removeListener=_,o.removeAllListeners=_,o.emit=_,o.prependListener=_,o.prependOnceListener=_,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}}},function(t){t.O(0,[9774,2888,179],(function(){return e=67005,t(t.s=e);var e}));var e=t.O();_N_E=e}]);