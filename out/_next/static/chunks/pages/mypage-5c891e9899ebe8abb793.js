(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8587],{2336:function(e,t,o){"use strict";o.d(t,{p:function(){return n}});o(7294);var n=function(e,t){e.preventDefault();var o=new FileReader,n=e.target.files[0];return o.onloadend=function(){var e=o.result;t(e)},o.readAsDataURL(n),n}},9247:function(e,t,o){"use strict";o.r(t),o.d(t,{__N_SSP:function(){return Z},default:function(){return F}});var n=o(5893),a=o(7294),r=o(6799),i=o(1664),s=o(1163),l=o(2336),c=o(5814),d=o(9237),u=o(9311),p=o(9638),m=o.n(p),_=o(6371),h=m().upperBox,g=m().leftBox,f=m().leftBoxName,x=m().leftBoxNameBox,v=m().leftBoxNamePosition,y=m().leftBoxContact,j=m().leftBoxContactBox,b=m().rightBox,B=m().myImage,N=m().myInfo,C=m().defaultProfile,k=m().preview,M=m().aboutTeam,w=m().scoreBoard,P=m().scoreBoardDetail,T=m().scoreBoardDetailBox,O=m().scoreBoardDetailBoxTitle,E=m().scoreBoardDetailBoxContent,D=(m().scoreBoardContentName,m().matchInfo),I=m().tabs,L=m().tabsIcon,R=m().secession,S=m().buttonBox;function H(e){var t,o;console.log(e);var p=(0,a.useState)({}),m=(p[0],p[1]),H=(0,a.useState)({nickname:"",profileImageUrl:"",contact:"",phone:0,position:"",mvpPoint:0,totalMyTeamWinCount:0,totalMyTeamGameCount:0,strikerPoint:0,midfielderPoint:0,defenderPoint:0,goalkeeperPoint:0,charmingPoint:0}),Z=H[0],F=H[1],V=(0,a.useState)([25,50,75,91,100]),A=V[0],G=V[1],U=(0,a.useState)(null===Z||void 0===Z?void 0:Z.profileImageUrl),X=(U[0],U[1]),W=function(e){var t=e.getContext("2d"),o=1*e.height,n=1*e.width,a=e.width/3.2,r=1.49*o,i=.87*n,s=t.createRadialGradient(o,n,a,r,i,1);return s.addColorStop(1,"rgba(176, 193, 249, 0.2)"),s.addColorStop(0,"rgba(75, 114, 241, 0.8)"),{labels:["\ubd84\uc704\uae30 \uba54\uc774\ucee4","\ubbf8\ub4dc\ud544\ub354","\uace8\ud0a4\ud37c","\uc218\ube44\uc218","\uacf5\uaca9\uc218"],datasets:[{label:"\ud3ec\uc9c0\uc158 \uc810\uc218",data:A,borderWidth:1,backgroundColor:s,borderColor:"#4B71EF",lineTension:0,pointBackgroundColor:"#4B72F1",pointBorderWidth:"2"},{data:[0],borderWidth:1,backgroundColor:s,borderColor:"#4B71EF",lineTension:0,pointBackgroundColor:"#4B72F1",pointBorderWidth:"2"}]}},K=null===e||void 0===e||null===(t=e.data)||void 0===t||null===(o=t.decodedData)||void 0===o?void 0:o.memberId;return(0,a.useEffect)((function(){(0,c.$)({endpoint:"home/members/".concat(K),method:"GET",auth:!0}).then((function(e){G([null===e||void 0===e?void 0:e.charmingPoint,null===e||void 0===e?void 0:e.midfielderPoint,null===e||void 0===e?void 0:e.goalkeeperPoint,null===e||void 0===e?void 0:e.defenderPoint,null===e||void 0===e?void 0:e.strikerPoint]),F(e),console.log(e)})).catch((function(e){return console.log(e)}))}),[]),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("main",{className:M,children:[(0,n.jsxs)("div",{className:h,children:[(0,n.jsxs)("div",{className:N,children:[(0,n.jsxs)("div",{className:g,children:[(0,n.jsxs)("div",{className:f,children:[(0,n.jsx)("div",{className:x,children:null===Z||void 0===Z?void 0:Z.nickname}),(0,n.jsxs)("div",{className:v,children:["#",null===Z||void 0===Z?void 0:Z.position]})]}),(0,n.jsxs)("div",{className:y,children:[(0,n.jsxs)("div",{className:j,children:[(0,n.jsx)(d.Z,{asset:"Chat"}),null===Z||void 0===Z?void 0:Z.contact]}),(0,n.jsx)("hr",{}),(0,n.jsxs)("div",{className:j,children:[(0,n.jsx)(d.Z,{asset:"Device"}),null===Z||void 0===Z?void 0:Z.phone]})]})]}),(0,n.jsx)("div",{className:b,children:(0,n.jsxs)("div",{className:B,children:[(0,n.jsx)("label",{htmlFor:"ex_file",children:(0,n.jsx)(d.Z,{asset:"Pen"})}),""!==(null===Z||void 0===Z?void 0:Z.profileImageUrl)?(0,n.jsx)("img",{className:k,src:null===Z||void 0===Z?void 0:Z.profileImageUrl}):(0,n.jsx)("div",{className:C,children:(0,n.jsx)(d.Z,{asset:"Person"})}),(0,n.jsx)("input",{type:"file",id:"ex_file",accept:"image/jpg,impge/png,image/jpeg,image/gif",onChange:function(e){return(0,l.p)(e,X).then((function(e){var t=new FormData;t.append("profileImageFile",e),m(t),(0,c.$)({endpoint:"home/members/information/profileimage",method:"PATCH",params:t,auth:!0,isFile:!0}).then((function(e){200===e.status?(window.alert("\ud504\ub85c\ud544 \uc774\ubbf8\uc9c0 \uc218\uc815\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),s.default.reload()):window.alert("\uc774\ubbf8\uc9c0 \ub4f1\ub85d\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4. \uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.")}))}))}})]})})]}),(0,n.jsx)("div",{className:w,children:(0,n.jsxs)("div",{className:P,children:[(0,n.jsxs)("div",{className:T,style:{borderRight:"1px solid rgba(190, 190, 190, 1)"},children:[(0,n.jsx)("div",{className:O,children:(0,n.jsx)("p",{children:"MVP"})}),(0,n.jsx)("div",{className:E,children:(0,n.jsx)("div",{children:(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:null===Z||void 0===Z?void 0:Z.mvpPoint}),"\ud68c"]})})})]}),(0,n.jsxs)("div",{className:T,style:{borderRight:"1px solid rgba(190, 190, 190, 1)"},children:[(0,n.jsx)("div",{className:O,children:(0,n.jsx)("p",{children:"\ud300 \uc6b0\uc2b9"})}),(0,n.jsx)("div",{className:E,children:(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:null===Z||void 0===Z?void 0:Z.totalMyTeamWinCount}),"\ud68c"]})})]}),(0,n.jsxs)("div",{className:T,children:[(0,n.jsx)("div",{className:O,children:(0,n.jsx)("p",{children:"\uacbd\uae30 \ucc38\uc5ec"})}),(0,n.jsx)("div",{className:E,children:(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:null===Z||void 0===Z?void 0:Z.totalMyTeamGameCount}),"\ud68c"]})})]})]})})]}),(0,n.jsxs)("div",{className:D,children:[(0,n.jsx)("h3",{children:"\ud3ec\uc9c0\uc158 \uc810\uc218"}),(0,n.jsx)("div",{children:(0,n.jsx)(r.Fk,{data:function(e){return W(e)},options:{responsive:!0,maintainAspectRatio:!0,layout:{beginAtZero:!0},scale:{gridLines:{circular:!0},ticks:{suggestedMin:0,suggestedMax:20,stepSize:2,maxTicksLimit:20,display:!1},pointLabels:{fontSize:12,fontColor:"#4B72F1"},scaleLabel:{display:!0}},legend:{display:!1},tooltips:{callbacks:{label:function(e){return e.Label}}}}})})]}),(0,n.jsxs)("div",{className:I,onClick:function(){window.alert("\ucee4\ubc0d\uc468! \uae30\ub2a5\uc774 \uc900\ube44\uc911\uc785\ub2c8\ub2e4 :)")},children:[(0,n.jsx)("p",{children:"\uacbd\uae30 \ud788\uc2a4\ud1a0\ub9ac"}),(0,n.jsx)(d.Z,{asset:"Right-Arrow",className:L})]}),(0,n.jsx)(i.default,{href:{pathname:"/myteam"},children:(0,n.jsxs)("div",{className:I,children:[(0,n.jsx)("p",{children:"\uc18c\uc18d&\uc2e0\uccad\ud55c \ud300"}),(0,n.jsx)(d.Z,{asset:"Right-Arrow",className:L})]})}),(0,n.jsx)("div",{className:S,children:(0,n.jsx)(u.Xp,{content:"\ub85c\uadf8\uc544\uc6c3",handleClick:function(){_.t6.eraseCookie("token"),s.default.replace("/introduction")},activeStyle:!0})}),(0,n.jsx)("div",{className:S,children:(0,n.jsx)(u.Xp,{content:"\uc218\uc815\ud558\uae30",handleClick:function(){},activeStyle:!0})}),(0,n.jsx)("div",{className:R,children:(0,n.jsx)("p",{children:"\ud68c\uc6d0 \ud0c8\ud1f4\ud558\uae30"})})]})})}var Z=!0,F=function(e){return console.log("props =",e),(0,n.jsx)(H,{data:e})}},5814:function(e,t,o){"use strict";o.d(t,{$:function(){return h}});var n=o(809),a=o.n(n),r=o(6265),i=o(2447),s=o(4047),l=o(2700),c=o(6371),d=JSON.parse('{"pO":"DEBUG","Vi":"PROD","LB":{"LOCAL":"http://localhost:3000/api/v1","DEV":"","PROD":"http://ec2-52-78-86-217.ap-northeast-2.compute.amazonaws.com:3000/api/v1"}}'),u=o(46),p=new(function(){function e(){(0,s.Z)(this,e),(0,r.Z)(this,"ENV",void 0),(0,r.Z)(this,"LOG_LEVEL",void 0),(0,r.Z)(this,"SERVER_URL",void 0),(0,r.Z)(this,"TOKEN",void 0),this.LOG_LEVEL=d.pO,this.ENV=d.Vi,this.SERVER_URL=d.LB[this.ENV],this.TOKEN=u.env.TEMP_TOKEN}return(0,l.Z)(e,[{key:"setToken",value:function(e,t,o){try{return c.t6.setCookie(e,t,o)}catch(n){return console.log("getting token: services: ",n),!1}}},{key:"getToken",value:function(){try{return c.t6.getCookie("token")}catch(e){return console.log("getting token: services: ",e),!1}}},{key:"getUser",value:function(){var e=(0,i.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={},e.abrupt("return",t);case 5:return e.prev=5,e.t0=e.catch(0),console.log("Config: storeHasPressed: error =",e.t0),e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"ServerUrl",get:function(){return this.SERVER_URL}}]),e}());function m(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function _(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?m(Object(o),!0).forEach((function(t){(0,r.Z)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):m(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var h=function(){var e=(0,i.Z)(a().mark((function e(t){var o,n,r,i,s,l,c,d,u,m,h,g,f,x,v,y,j,b,B;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=t.endpoint,n=t.method,r=void 0===n?"GET":n,i=t.retries,void 0===i?3:i,s=t.params,l=void 0===s?null:s,c=t.auth,d=void 0===c||c,u=t.isFile,m=void 0!==u&&u,h=t.token,g=_(_({method:r,headers:!0===m?{}:{Accept:"application/json","Content-Type":"application/json"}},l&&!0===m&&{body:l}),l&&!1===m&&{body:JSON.stringify(l)}),f="http://43.200.163.208/api/"+o,e.prev=3,!d){e.next=29;break}if(x=p.getToken()||h){e.next=8;break}throw{message:"NO TOKENS",status:406};case 8:return g.headers.Authorization="Bearer ".concat(x),e.next=11,fetch(f,g);case 11:if(v=e.sent,console.log("makeRequest: res =",v),!(!1===m&&v.status<=201)){e.next=19;break}return e.next=16,v.json();case 16:return y=e.sent,console.log("makeRequest: json =",y),e.abrupt("return",y);case 19:if(!(!0===m&&v.status<=201)){e.next=22;break}return console.log(v),e.abrupt("return",v);case 22:return e.next=24,v.json();case 24:throw e.t0=e.sent,e.t1=v.status,{message:e.t0,status:e.t1};case 29:return e.next=31,fetch(f,g);case 31:if(j=e.sent,console.log("res =",j),200!==j.status){e.next=39;break}return e.next=36,j.json();case 36:return b=e.sent,console.log("json =",b),e.abrupt("return",b);case 39:if(201!==j.status||"members/signup"!==o){e.next=41;break}return e.abrupt("return",j);case 41:if(201!==j.status){e.next=48;break}return e.next=44,j.json();case 44:return B=e.sent,console.log("json =",B),p.setToken("token",null===B||void 0===B?void 0:B.accesstoken,30),e.abrupt("return",B);case 48:e.next=54;break;case 50:return e.prev=50,e.t2=e.catch(3),console.log("makeRequest: error =",e.t2),e.abrupt("return",!1);case 54:case"end":return e.stop()}}),e,null,[[3,50]])})));return function(t){return e.apply(this,arguments)}}()},7756:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mypage",function(){return o(9247)}])},9638:function(e){e.exports={aboutTeam:"Mypage_aboutTeam__2jYBU",aboutTeamMain:"Mypage_aboutTeamMain__1B_kc",aboutTeamPicture:"Mypage_aboutTeamPicture__34Kgk",aboutTeamContent:"Mypage_aboutTeamContent__1D8Z0",aboutTeamHeader:"Mypage_aboutTeamHeader__3YrLS",aboutTeamImage:"Mypage_aboutTeamImage__13LQ_",about:"Mypage_about__2wdxp",rowDiv:"Mypage_rowDiv__1NK8N",followers:"Mypage_followers__1f83O",followersPlaceholder:"Mypage_followersPlaceholder__3O_mj",placeholderAnimation:"Mypage_placeholderAnimation__2h0Zo",followersIcon:"Mypage_followersIcon__36gAT",upperBox:"Mypage_upperBox__1C3Vc",myInfo:"Mypage_myInfo__3Viu6",leftBox:"Mypage_leftBox__wp7gA",leftBoxName:"Mypage_leftBoxName__3T4OG",leftBoxNameBox:"Mypage_leftBoxNameBox___UTrP",leftBoxNamePosition:"Mypage_leftBoxNamePosition__1ZDrx",leftBoxContact:"Mypage_leftBoxContact__zts5M",leftBoxContactBox:"Mypage_leftBoxContactBox__37QCP",rightBox:"Mypage_rightBox__LVufX",myImage:"Mypage_myImage__ODmH_",defaultProfile:"Mypage_defaultProfile__37PO5",preview:"Mypage_preview__7-Fmj",matchHistoryContainer:"Mypage_matchHistoryContainer__MF-XY",matchHistoryContainerimg:"Mypage_matchHistoryContainerimg__14S2q",matchHistoryContainerWin:"Mypage_matchHistoryContainerWin__1Xbhb",matchHistoryContainerResult:"Mypage_matchHistoryContainerResult__2G53t",matchHistoryContainerLose:"Mypage_matchHistoryContainerLose__2Htz0",matchHistoryContainerWinner:"Mypage_matchHistoryContainerWinner__2X6F-",matchHistoryContainerLoser:"Mypage_matchHistoryContainerLoser__2BtOG",routes:"Mypage_routes__35w-Y",scoreBoard:"Mypage_scoreBoard__3EBcH",scoreBoardContentName:"Mypage_scoreBoardContentName__2XGqB",scoreBoardDetail:"Mypage_scoreBoardDetail__G4XEu",scoreBoardDetailBox:"Mypage_scoreBoardDetailBox__1noKQ",scoreBoardDetailBoxTitle:"Mypage_scoreBoardDetailBoxTitle__3YlIR",scoreBoardDetailBoxContent:"Mypage_scoreBoardDetailBoxContent__w5Ig0",matchInfo:"Mypage_matchInfo__2twe-",tabs:"Mypage_tabs__10ARO",tabsIcon:"Mypage_tabsIcon__387IJ",secession:"Mypage_secession__3vHtu",buttonBox:"Mypage_buttonBox__2nIXo"}}},function(e){e.O(0,[9774,8698,4885,6799,2888,179],(function(){return t=7756,e(e.s=t);var t}));var t=e.O();_N_E=t}]);