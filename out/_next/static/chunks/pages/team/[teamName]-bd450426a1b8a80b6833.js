(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8792],{40881:function(e,t,n){"use strict";n.d(t,{I:function(){return v},Z:function(){return x}});var a,r=n(85893),o=n(64121),i=n(67294),s=n(81192),c=n(8951),l=n.n(c),d=l().image,u=l().placeholder,h=l().absoluteText,m=l().expectedMatch,f=l().matchingTeam;l().title;!function(e){e.Loading="IMAGE_LOADING",e.Loaded="IMAGE_LOADED",e.NotFound="IMAGE_NOT_FOUND",e.NotSpecified="IMAGE_NOT_SPECIFIED"}(a||(a={}));var _=function(){var e=(0,i.useState)((function(){return a.Loading})),t=e[0],n=e[1];return[(0,i.useCallback)((function(e){if(e)if(e.complete)n(a.Loaded);else{if(e.src){var t=function(){n(a.Loaded)},r=function(){n(a.NotFound)};return e.addEventListener("load",t),e.addEventListener("error",r),function(){e.removeEventListener("load",t),e.removeEventListener("error",r)}}n(a.NotSpecified)}}),[]),t]};function v(e){var t=e.src,n=void 0===t?"":t,a=e.alt,i=void 0===a?"":a,c=e.height,v=e.width,x=e.loading,p=void 0===x?"lazy":x,j=e.className,g=void 0===j?"":j,N=e.isPlaceholder,T=void 0!==N&&N,y=e.title,b=e.content,w=e.expected,C=_(),I=(0,o.Z)(C,2),E=I[0],k=I[1],D=T?u:l()[k];return w?(0,r.jsx)("div",{className:m,children:(0,r.jsxs)("div",{className:y,children:[(0,r.jsx)("div",{className:f,children:"\ub300\uacb0\ud300"}),(0,r.jsx)("h1",{children:"\uc11c\uc6b8FC"})]})}):(0,r.jsxs)("div",{role:"img","aria-label":i,className:(0,s.L)(d,D,[g,!!g]),children:[!T&&(0,r.jsx)("img",{src:n,alt:i,ref:E,height:c,width:v,loading:p}),(0,r.jsxs)("div",{className:h,children:[(0,r.jsx)("h3",{children:y}),(0,r.jsx)("h4",{children:b})]})]})}function x(e){var t=e.src,n=void 0===t?"":t,a=e.alt,i=void 0===a?"":a,c=e.height,h=e.width,m=e.loading,f=void 0===m?"lazy":m,v=e.className,x=void 0===v?"":v,p=e.isPlaceholder,j=void 0!==p&&p,g=_(),N=(0,o.Z)(g,2),T=N[0],y=N[1],b=j?u:l()[y];return(0,r.jsx)("div",{role:"img","aria-label":i,className:(0,s.L)(d,b,[x,!!x]),children:!j&&(0,r.jsx)("img",{src:n,alt:i,ref:T,height:c,width:h,loading:f})})}},46022:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var a=n(85893);n(67294);function r(e){var t=e.color;return(0,a.jsx)("div",{style:{margin:"6rem",background:t}})}},80473:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return K},default:function(){return $}});var a=n(85893),r=n(67294),o=n(809),i=n.n(o),s=n(92447),c=n(11163),l=n(40881),d=n(59237),u=(n(81192),n(41664)),h=n(73660),m=n.n(h),f=m().container,_=(m().title,m().contentBox),v=m().containerIcon,x=(m().containerJSX,m().containerEntire),p=function(e){var t=e.label,n=e.content,r=e.arrowLink,o=e.linkType,i=void 0===o||o;e.arrowLinkAs;return(0,a.jsxs)("div",{className:f,children:[(0,a.jsxs)("div",{className:x,children:[(0,a.jsx)("h3",{children:t}),i?(0,a.jsx)(u.default,{href:r,children:(0,a.jsx)(d.Z,{asset:"Right-Arrow",className:v})}):(0,a.jsx)("p",{style:{color:"#868686",fontSize:"18px",cursor:"pointer"},children:"\uc804\uccb4\ubcf4\uae30"})]}),(0,a.jsx)("div",{className:_,children:n})]})};var j=n(46022),g=n(79311);function N(){return(0,a.jsx)("div",{style:{width:"12px",height:"12px",backgroundColor:"#FF7979",borderRadius:"50%",marginLeft:"5px"}})}var T=n(65814),y=n(97597),b=n.n(y),w=b().aboutTeam,C=b().aboutTeamImage,I=b().scoreBoard,E=b().scoreBoardDetail,k=b().scoreBoardDetailBox,D=b().scoreBoardDetailBoxContent,B=b().scoreBoardDetailBoxContentTotal,L=b().scoreBoardDetailBoxContentWin,O=b().scoreBoardDetailBoxContentDraw,A=b().scoreBoardDetailBoxContentLose,P=b().scoreBoardContentName,S=b().matchInfo,H=b().matchInfoContainer,Z=b().matchInfoContainerIcon,R=b().rowDiv,M=b().matchHistoryContainer,G=b().matchHistoryContainerWin,q=b().matchHistoryContainerLose,W=b().matchHistoryContainerResult,F=b().matchHistoryContainerWinner,U=b().matchHistoryContainerLoser,V=b().tabs,X=b().tabsIcon;function z(e){var t,n,o;console.log(e);var h=(0,c.useRouter)(),m=null===e||void 0===e?void 0:e.data,f=h.query,_=f.teamId,v=f.teamName,x=f.status;console.log("fetch with teamId =",typeof _,v);var y=(0,r.useState)(),b=y[0],z=y[1],K=(0,r.useState)(!1),$=(K[0],K[1]),J=(0,r.useState)(null),Q=J[0],Y=J[1],ee=(0,r.useState)(null),te=ee[0],ne=ee[1],ae=(0,r.useState)(),re=(ae[0],ae[1]),oe=(0,r.useState)(),ie=oe[0],se=oe[1],ce={pathname:"/team/[teamName]/matches",query:{teamId:_,teamName:v},as:"/team/".concat(v,"/matches")};(0,r.useEffect)((function(){z(m),$("true"===x),null!==b&&void 0!==b&&b.match?Y(!0):Y(!1),null!==b&&void 0!==b&&b.recruit?ne(!0):ne(!1)}),[]);var le=function(){var e=(0,s.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Q){e.next=5;break}return e.next=3,(0,T.$)({endpoint:"home/teams/".concat(_,"/match/cancel"),method:"POST",auth:!0}).then((function(){return Y(!1)})).catch((function(e){return console.log(e)}));case 3:e.next=7;break;case 5:return e.next=7,(0,T.$)({endpoint:"home/teams/".concat(_,"/match/regist"),method:"POST",auth:!0}).then((function(){return Y(!0)})).catch((function(e){return console.log(e)}));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),de=function(){var e=(0,s.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!te){e.next=5;break}return e.next=3,(0,T.$)({endpoint:"home/teams/".concat(_,"/recruit/end"),method:"POST",auth:!0}).then((function(){return ne(!1)})).catch((function(e){return console.log(e)}));case 3:e.next=6;break;case 5:h.push({pathname:"[teamName]/recruit",query:{teamId:_,teamName:v}});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ue=function(){var e=(0,s.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,T.$)({endpoint:"home/teams/".concat(_),method:"DELETE",auth:!0}).then((function(){return h.push("/")}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),he=function(){Y(null),ne(null),se(""),re(null)};(0,r.useEffect)((function(){return he}),[]);var me=(0,a.jsxs)("div",{className:M,children:[(0,a.jsxs)("div",{className:G,children:[(0,a.jsx)("div",{className:F,children:(0,a.jsx)("p",{children:"\uc2b9\ub9ac"})}),(0,a.jsx)("p",{children:"A\ud300"})]}),(0,a.jsxs)("div",{className:W,children:[(0,a.jsx)("p",{children:"2022.03.04"}),(0,a.jsx)("p",{style:{fontWeight:"bold",fontSize:"30px",margin:"0.5rem"},children:"4:2"})]}),(0,a.jsxs)("div",{className:q,children:[(0,a.jsx)("div",{className:U,children:(0,a.jsx)("p",{children:"\ud328\ubc30"})}),(0,a.jsx)("p",{children:"B\ud300"})]})]});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(j.Z,{}),(0,a.jsx)(l.I,{className:C,src:null===b||void 0===b?void 0:b.teamImageFileUrl,alt:"Desktop & Mobile PWA Application",width:"100%",title:v,content:null===b||void 0===b?void 0:b.introduce}),(0,a.jsx)("div",{className:I,children:(0,a.jsxs)("div",{className:E,children:[(0,a.jsxs)("div",{className:k,style:{borderRight:"1px solid rgba(200, 200, 200, 1)"},children:[(0,a.jsx)("div",{className:P,children:(0,a.jsx)("p",{children:"\uc2b9\uc810"})}),(0,a.jsx)("div",{children:(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{children:null===b||void 0===b?void 0:b.winPoint}),"\uc810"]})})]}),(0,a.jsxs)("div",{className:k,children:[(0,a.jsx)("div",{className:P,children:(0,a.jsx)("p",{children:"\uc2b9\ub960"})}),(0,a.jsxs)("div",{className:D,children:[(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{children:null===b||void 0===b?void 0:b.winRate}),"%"]}),(0,a.jsxs)("div",{className:D,children:[(0,a.jsx)("div",{className:B,children:null===b||void 0===b?void 0:b.totalGameCount}),(0,a.jsx)("div",{className:L,children:null===b||void 0===b?void 0:b.winCount}),(0,a.jsx)("div",{className:O,children:null===b||void 0===b?void 0:b.drawCount}),(0,a.jsx)("div",{className:A,children:null===b||void 0===b?void 0:b.loseCount})]})]})]})]})}),(0,a.jsxs)("main",{className:w,children:[(0,a.jsxs)("div",{className:S,children:[(0,a.jsx)("h3",{children:"\ub300\uacb0 \uc815\ubcf4"}),(0,a.jsxs)("div",{className:H,children:[(0,a.jsx)(d.Z,{asset:"Location",className:Z}),(0,a.jsx)("h4",{children:"\ud65c\ub3d9 \uc9c0\uc5ed"}),(0,a.jsx)("h5",{children:null===b||void 0===b?void 0:b.mainArea})]}),(0,a.jsxs)("div",{className:H,children:[(0,a.jsx)(d.Z,{asset:"Person-Pin",className:Z}),(0,a.jsx)("h4",{children:"\uc120\ud638 \uc7a5\uc18c"}),"home"===(null===b||void 0===b?void 0:b.preferredArea)?(0,a.jsx)("h5",{children:"\uc800\ud76c \ud648\uad6c\uc7a5\uc5d0\uc11c \ud558\uace0 \uc2f6\uc2b5\ub2c8\ub2e4."}):(0,a.jsx)("h5",{children:"\uc5b4\ub514\ub4e0 \ub2ec\ub824\uac11\ub2c8\ub2e4."})]}),(0,a.jsxs)("div",{className:H,children:[(0,a.jsx)(d.Z,{asset:"Calendar",className:Z}),(0,a.jsx)("h4",{children:"\uac00\ub2a5 \uc694\uc77c"}),null===b||void 0===b||null===(t=b.weekdays)||void 0===t?void 0:t.map((function(e,t){return(0,a.jsxs)("h5",{children:[e,". "]},"weekday-".concat(t))}))]}),(0,a.jsxs)("div",{className:H,children:[(0,a.jsx)(d.Z,{asset:"Alarm",className:Z}),(0,a.jsx)("h4",{children:"\uac00\ub2a5 \uc2dc\uac04"}),null===b||void 0===b||null===(n=b.time)||void 0===n?void 0:n.map((function(e,t){return(0,a.jsxs)("h5",{children:[e,". "]},"times-".concat(t))}))]})]}),(0,a.jsx)("div",{style:{display:"flex",width:"100%"},children:(0,a.jsx)(u.default,{href:{pathname:"/team/[teamName]/matches",query:{teamId:_,teamName:v}},children:(0,a.jsx)("div",{className:R,children:(0,a.jsx)(p,{label:"\uacbd\uae30 \ud788\uc2a4\ud1a0\ub9ac",content:me,length:"long",linkType:!1,arrowLink:ce,arrowLinkAs:ce.as})})})}),(0,a.jsx)(u.default,{href:{pathname:"/team/[teamName]/members",query:{teamId:_,teamName:v}},children:(0,a.jsxs)("div",{className:V,children:[(0,a.jsxs)("p",{children:["\uba64\ubc84 \uc18c\uac1c(",null===b||void 0===b?void 0:b.headCount,")"]}),(0,a.jsx)(d.Z,{asset:"Right-Arrow",className:X})]})}),(0,a.jsx)(u.default,{href:{pathname:"/team/".concat(v,"/schedule"),query:{teamId:_,teamName:v}},children:(0,a.jsxs)("div",{className:V,children:[(0,a.jsx)("p",{children:"\uc608\uc815\ub41c \uacbd\uae30 \uc77c\uc815"}),(0,a.jsx)(d.Z,{asset:"Right-Arrow",className:X})]})}),(null===b||void 0===b?void 0:b.teamCaptain)&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u.default,{href:{pathname:"/team/[teamName]/challenges",query:{teamId:_,teamName:v}},as:"/team/[teamName]/challenges",children:(0,a.jsxs)("div",{className:V,children:[(0,a.jsx)("p",{children:"\ub300\uacb0 \uc694\uccad"}),(0,a.jsx)(d.Z,{asset:"Right-Arrow",className:X})]})}),(0,a.jsx)(u.default,{href:{pathname:"/team/[teamName]/accept",query:{teamId:_,teamName:v}},as:"/team/[teamName]/accept",children:(0,a.jsxs)("div",{className:V,children:[(0,a.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,a.jsx)("p",{children:"\ud300\uc6d0 \uc218\ub77d"}),(0,a.jsx)(N,{})]}),(0,a.jsx)(d.Z,{asset:"Right-Arrow",className:X})]})})]}),null!==b&&void 0!==b&&b.teamCaptain?(0,a.jsxs)("div",{style:{display:"flex"},children:[(0,a.jsx)("div",{style:{display:"flex",width:"50%"},children:(0,a.jsx)(g.Xp,{content:Q?"\ub300\uacb0\ub4f1\ub85d \uc911":"\ub300\uacb0\ub4f1\ub85d\ud558\uae30",handleClick:le,activeStyle:!!Q})}),(0,a.jsx)("div",{style:{display:"flex",width:"50%"},children:(0,a.jsx)(g.Xp,{handleClick:de,content:te?"\ud300\uc6d0 \ubaa8\uc9d1 \uc911":"\ud300\uc6d0\ubaa8\uc9d1\ud558\uae30",activeStyle:!!te})})]}):(0,a.jsx)(g.Xp,{handleClick:function(){null!==b&&void 0!==b&&b.apply?console.log("\ub9e4\uce58 \ucde8\uc18c api"):h.push({pathname:"/team/[teamName]/match",query:{teamId:_,teamName:v}})},content:null!==m&&void 0!==m&&m.participate?"\ud0c8\ud1f4\ud558\uae30":x?"\ub300\uacb0\ud558\uae30":"\uc2e0\uccad\ud558\uae30",activeStyle:!(null===m||void 0===m||!m.recruit)}),ie&&(0,a.jsx)("p",{style:{color:"red"},children:ie}),(null===b||void 0===b?void 0:b.teamCaptain)&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(g.dz,{content:(0,a.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",width:"100vw"},children:[(0,a.jsx)("h5",{onClick:function(){return h.push("/founding/edit")},children:"\uc218\uc815\ud558\uae30"}),(0,a.jsx)("h5",{onClick:ue,children:"\ud300 \ud574\uccb4\ud558\uae30"})]})}),(0,a.jsx)(g.dz,{content:"\ucc3d\ub2e8 \uc77c\uc790: ".concat(null===b||void 0===b||null===(o=b.createdDate)||void 0===o?void 0:o.split("T")[0])})]})]})]})}var K=!0,$=function(e){var t=e.data;return(0,a.jsx)(z,{data:t})}},65814:function(e,t,n){"use strict";n.d(t,{$:function(){return _}});var a=n(809),r=n.n(a),o=n(26265),i=n(92447),s=n(74047),c=n(52700),l=n(6371),d=JSON.parse('{"pO":"DEBUG","Vi":"PROD","LB":{"LOCAL":"http://localhost:3000/api/v1","DEV":"","PROD":"http://ec2-52-78-86-217.ap-northeast-2.compute.amazonaws.com:3000/api/v1"}}'),u=n(34155),h=new(function(){function e(){(0,s.Z)(this,e),(0,o.Z)(this,"ENV",void 0),(0,o.Z)(this,"LOG_LEVEL",void 0),(0,o.Z)(this,"SERVER_URL",void 0),(0,o.Z)(this,"TOKEN",void 0),this.LOG_LEVEL=d.pO,this.ENV=d.Vi,this.SERVER_URL=d.LB[this.ENV],this.TOKEN=u.env.TEMP_TOKEN}return(0,c.Z)(e,[{key:"setToken",value:function(e,t,n){try{return l.t6.setCookie(e,t,n)}catch(a){return console.log("getting token: services: ",a),!1}}},{key:"getToken",value:function(){try{return l.t6.getCookie("token")}catch(e){return console.log("getting token: services: ",e),!1}}},{key:"getUser",value:function(){var e=(0,i.Z)(r().mark((function e(){var t;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={},e.abrupt("return",t);case 5:return e.prev=5,e.t0=e.catch(0),console.log("Config: storeHasPressed: error =",e.t0),e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"ServerUrl",get:function(){return this.SERVER_URL}}]),e}());function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _=function(){var e=(0,i.Z)(r().mark((function e(t){var n,a,o,i,s,c,l,d,u,m,_,v,x,p,j,g,N,T,y;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.endpoint,a=t.method,o=void 0===a?"GET":a,i=t.retries,void 0===i?3:i,s=t.params,c=void 0===s?null:s,l=t.auth,d=void 0===l||l,u=t.isFile,m=void 0!==u&&u,_=t.token,v=f(f({method:o,headers:!0===m?{}:{Accept:"application/json","Content-Type":"application/json"}},c&&!0===m&&{body:c}),c&&!1===m&&{body:JSON.stringify(c)}),x="http://43.200.163.208/api/"+n,e.prev=3,!d){e.next=33;break}if(p=h.getToken()||_){e.next=8;break}throw{message:"NO TOKENS",status:406};case 8:return v.headers.Authorization="Bearer ".concat(p),e.next=11,fetch(x,v);case 11:if(j=e.sent,console.log("makeRequest: res =",j),!(!1===m&&j.status<=201)){e.next=23;break}return e.next=16,j.json();case 16:if(!(g=e.sent)){e.next=22;break}return console.log("makeRequest: json =",g),e.abrupt("return",g);case 22:return e.abrupt("return",j);case 23:if(!(!0===m&&j.status<=201)){e.next=26;break}return console.log(j),e.abrupt("return",j);case 26:return e.next=28,j.json();case 28:throw e.t0=e.sent,e.t1=j.status,{message:e.t0,status:e.t1};case 33:return e.next=35,fetch(x,v);case 35:if(N=e.sent,console.log("res =",N),200!==N.status){e.next=43;break}return e.next=40,N.json();case 40:return T=e.sent,console.log("json =",T),e.abrupt("return",T);case 43:if(201!==N.status||"members/signup"!==n){e.next=45;break}return e.abrupt("return",N);case 45:if(201!==N.status){e.next=52;break}return e.next=48,N.json();case 48:return y=e.sent,console.log("json =",y),h.setToken("token",null===y||void 0===y?void 0:y.accesstoken,30),e.abrupt("return",y);case 52:e.next=58;break;case 54:return e.prev=54,e.t2=e.catch(3),console.log("makeRequest: error =",e.t2),e.abrupt("return",!1);case 58:case"end":return e.stop()}}),e,null,[[3,54]])})));return function(t){return e.apply(this,arguments)}}()},84095:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/team/[teamName]",function(){return n(80473)}])},73660:function(e){e.exports={container:"PlaceholderWithTitle_container__aPW-w",containerEntire:"PlaceholderWithTitle_containerEntire__2Bu4E",containerIcon:"PlaceholderWithTitle_containerIcon__4INeH",contentBox:"PlaceholderWithTitle_contentBox__2HMHN",short:"PlaceholderWithTitle_short__3fqMM",long:"PlaceholderWithTitle_long__jr5uA",placeholderAnimation:"PlaceholderWithTitle_placeholderAnimation__31dHI"}},8951:function(e){e.exports={image:"Image_image__1DE1A",imageContent:"Image_imageContent__2Beq2",placeholder:"Image_placeholder__3EwrN",IMAGE_LOADING:"Image_IMAGE_LOADING__1X8DB",placeholderAnimation:"Image_placeholderAnimation__3GrfH",IMAGE_LOADED:"Image_IMAGE_LOADED__3q7yg",IMAGE_NOT_FOUND:"Image_IMAGE_NOT_FOUND__1r1wC",IMAGE_NOT_SPECIFIED:"Image_IMAGE_NOT_SPECIFIED__1PX6P",absoluteText:"Image_absoluteText__35Eiu",expectedMatch:"Image_expectedMatch__2D8Mt",title:"Image_title__2nax7",matchingTeam:"Image_matchingTeam__27Zfm"}},97597:function(e){e.exports={aboutTeam:"Team_aboutTeam__hkhbM",aboutTeamMain:"Team_aboutTeamMain__2IjEU",aboutTeamPicture:"Team_aboutTeamPicture__26X3a",aboutTeamContent:"Team_aboutTeamContent__1L-la",aboutTeamHeader:"Team_aboutTeamHeader__F6qZ0",aboutTeamImage:"Team_aboutTeamImage__2O0yk",about:"Team_about__1_7K2",rowDiv:"Team_rowDiv__2qqWe",followers:"Team_followers__2eofi",followersPlaceholder:"Team_followersPlaceholder__2itZz",placeholderAnimation:"Team_placeholderAnimation__2fMLm",followersIcon:"Team_followersIcon__3LDoh",matchHistoryContainer:"Team_matchHistoryContainer__31qxG",matchHistoryContainerimg:"Team_matchHistoryContainerimg__3vX2V",matchHistoryContainerWin:"Team_matchHistoryContainerWin__1rB_7",matchHistoryContainerResult:"Team_matchHistoryContainerResult__1ooDE",matchHistoryContainerLose:"Team_matchHistoryContainerLose__20NB8",matchHistoryContainerWinner:"Team_matchHistoryContainerWinner__3XCt7",matchHistoryContainerLoser:"Team_matchHistoryContainerLoser__21-dl",routes:"Team_routes__ecgfR",scoreBoard:"Team_scoreBoard__3oqn0",scoreBoardContentName:"Team_scoreBoardContentName__anfOk",scoreBoardDetail:"Team_scoreBoardDetail__1rAkL",scoreBoardDetailBox:"Team_scoreBoardDetailBox__31DH-",scoreBoardDetailBoxContent:"Team_scoreBoardDetailBoxContent__2YnAC",scoreBoardDetailBoxContentTotal:"Team_scoreBoardDetailBoxContentTotal__1Hc1w",scoreBoardDetailBoxContentWin:"Team_scoreBoardDetailBoxContentWin__2J9-n",scoreBoardDetailBoxContentDraw:"Team_scoreBoardDetailBoxContentDraw__1s3da",scoreBoardDetailBoxContentLose:"Team_scoreBoardDetailBoxContentLose__8hyO4",matchInfo:"Team_matchInfo__1E4a1",matchInfoContainer:"Team_matchInfoContainer__2qCGb",matchInfoContainerIcon:"Team_matchInfoContainerIcon__2QSfL",tabs:"Team_tabs__lbsNn",tabsIcon:"Team_tabsIcon__PUKaI"}},34155:function(e){var t,n,a=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:r}catch(e){t=r}try{n="function"===typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var s,c=[],l=!1,d=-1;function u(){l&&s&&(l=!1,s.length?c=s.concat(c):d=-1,c.length&&h())}function h(){if(!l){var e=i(u);l=!0;for(var t=c.length;t;){for(s=c,c=[];++d<t;)s&&s[d].run();d=-1,t=c.length}s=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function f(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new m(e,t)),1!==c.length||l||i(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=f,a.addListener=f,a.once=f,a.off=f,a.removeListener=f,a.removeAllListeners=f,a.emit=f,a.prependListener=f,a.prependOnceListener=f,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}}},function(e){e.O(0,[9774,2888,179],(function(){return t=84095,e(e.s=t);var t}));var t=e.O();_N_E=t}]);