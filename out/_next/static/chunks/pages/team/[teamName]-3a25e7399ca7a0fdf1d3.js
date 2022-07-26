(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8792],{881:function(e,t,n){"use strict";n.d(t,{I:function(){return v},Z:function(){return _}});var a,r=n(5893),o=n(4121),i=n(7294),s=n(1192),c=n(8951),l=n.n(c),u=l().image,d=l().placeholder,h=l().absoluteText,m=l().expectedMatch,f=l().matchingTeam;l().title;!function(e){e.Loading="IMAGE_LOADING",e.Loaded="IMAGE_LOADED",e.NotFound="IMAGE_NOT_FOUND",e.NotSpecified="IMAGE_NOT_SPECIFIED"}(a||(a={}));var p=function(){var e=(0,i.useState)((function(){return a.Loading})),t=e[0],n=e[1];return[(0,i.useCallback)((function(e){if(e)if(e.complete)n(a.Loaded);else{if(e.src){var t=function(){n(a.Loaded)},r=function(){n(a.NotFound)};return e.addEventListener("load",t),e.addEventListener("error",r),function(){e.removeEventListener("load",t),e.removeEventListener("error",r)}}n(a.NotSpecified)}}),[]),t]};function v(e){var t=e.src,n=void 0===t?"":t,a=e.alt,i=void 0===a?"":a,c=e.height,v=e.width,_=e.loading,x=void 0===_?"lazy":_,j=e.className,g=void 0===j?"":j,y=e.isPlaceholder,N=void 0!==y&&y,T=e.title,b=e.content,w=e.expected,E=p(),I=(0,o.Z)(E,2),k=I[0],C=I[1],L=N?d:l()[C];return w?(0,r.jsx)("div",{className:m,children:(0,r.jsxs)("div",{className:T,children:[(0,r.jsx)("div",{className:f,children:"\ub300\uacb0\ud300"}),(0,r.jsx)("h1",{children:"\uc11c\uc6b8FC"})]})}):(0,r.jsxs)("div",{role:"img","aria-label":i,className:(0,s.L)(u,L,[g,!!g]),children:[!N&&(0,r.jsx)("img",{src:n,alt:i,ref:k,height:c,width:v,loading:x}),(0,r.jsxs)("div",{className:h,children:[(0,r.jsx)("h3",{children:T}),(0,r.jsx)("h4",{children:b})]})]})}function _(e){var t=e.src,n=void 0===t?"":t,a=e.alt,i=void 0===a?"":a,c=e.height,h=e.width,m=e.loading,f=void 0===m?"lazy":m,v=e.className,_=void 0===v?"":v,x=e.isPlaceholder,j=void 0!==x&&x,g=p(),y=(0,o.Z)(g,2),N=y[0],T=y[1],b=j?d:l()[T];return(0,r.jsx)("div",{role:"img","aria-label":i,className:(0,s.L)(u,b,[_,!!_]),children:!j&&(0,r.jsx)("img",{src:n,alt:i,ref:N,height:c,width:h,loading:f})})}},6022:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var a=n(5893);n(7294);function r(e){var t=e.color;return(0,a.jsx)("div",{style:{margin:"6rem",background:t}})}},473:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return W},default:function(){return U}});var a=n(5893),r=n(7294),o=n(809),i=n.n(o),s=n(2447),c=n(1163),l=n(881),u=n(9237),d=(n(1192),n(1664)),h=n(3660),m=n.n(h),f=m().container,p=(m().title,m().contentBox),v=m().containerIcon,_=(m().containerJSX,m().containerEntire),x=function(e){var t=e.label,n=e.content,r=e.arrowLink,o=e.linkType,i=void 0===o||o;e.arrowLinkAs;return(0,a.jsxs)("div",{className:f,children:[(0,a.jsxs)("div",{className:_,children:[(0,a.jsx)("h3",{children:t}),i?(0,a.jsx)(d.default,{href:r,children:(0,a.jsx)(u.Z,{asset:"Right-Arrow",className:v})}):(0,a.jsx)("p",{style:{color:"#868686",fontSize:"18px",cursor:"pointer"},children:"\uc804\uccb4\ubcf4\uae30"})]}),(0,a.jsx)("div",{className:p,children:n})]})};var j=n(6022),g=n(9311);function y(){return(0,a.jsx)("div",{style:{width:"12px",height:"12px",backgroundColor:"#FF7979",borderRadius:"50%",marginLeft:"5px"}})}var N=n(5814),T=n(7597),b=n.n(T),w=b().aboutTeam,E=b().aboutTeamImage,I=b().scoreBoard,k=b().scoreBoardDetail,C=b().scoreBoardDetailBox,L=b().scoreBoardContentName,O=b().matchInfo,A=b().matchInfoContainer,D=b().matchInfoContainerIcon,P=b().rowDiv,S=b().matchHistoryContainer,H=b().matchHistoryContainerWin,Z=b().matchHistoryContainerLose,B=b().matchHistoryContainerResult,R=b().matchHistoryContainerWinner,M=b().matchHistoryContainerLoser,G=b().tabs,q=b().tabsIcon;function F(e){var t,n,o;console.log(e);var h=(0,c.useRouter)(),m=null===e||void 0===e?void 0:e.data,f=h.query,p=f.teamId,v=f.teamName,_=f.status;console.log("fetch with teamId =",typeof p,v);var T=(0,r.useState)(),b=T[0],F=T[1],W=(0,r.useState)(!1),U=W[0],V=W[1],X=(0,r.useState)(null),z=X[0],K=X[1],$=(0,r.useState)(null),J=$[0],Q=$[1],Y=(0,r.useState)(),ee=Y[0],te=Y[1],ne=(0,r.useState)(),ae=ne[0],re=ne[1],oe={pathname:"/team/[teamName]/matches",query:{teamId:p,teamName:v},as:"/team/".concat(v,"/matches")};(0,r.useEffect)((function(){F(m),V("true"===_),null!==b&&void 0!==b&&b.matching?K(!0):K(!1),null!==b&&void 0!==b&&b.recruit?Q(!0):Q(!1)}),[]);var ie=function(){var e=(0,s.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!z){e.next=5;break}return e.next=3,(0,N.$)({endpoint:"home/teams/".concat(p,"/match/cancel"),method:"POST",auth:!0}).then((function(){return K(!1)})).catch((function(e){return console.log(e)}));case 3:e.next=7;break;case 5:return e.next=7,(0,N.$)({endpoint:"home/teams/".concat(p,"/match/regist"),method:"POST",auth:!0}).then((function(){return K(!0)})).catch((function(e){return console.log(e)}));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),se=function(){var e=(0,s.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!J){e.next=5;break}return e.next=3,(0,N.$)({endpoint:"home/teams/".concat(p,"/recruit/end"),method:"POST",auth:!0}).then((function(){return Q(!1)})).catch((function(e){return console.log(e)}));case 3:e.next=6;break;case 5:h.push({pathname:"[teamName]/recruit",query:{teamId:p,teamName:v}});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ce=function(){var e=(0,s.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===b||void 0===b||!b.participate){e.next=5;break}return e.next=3,(0,N.$)({endpoint:"home/teams/".concat(p,"/leave"),method:"DELETE",auth:!0});case 3:e.next=6;break;case 5:h.push({pathname:"/team/[teamName]/apply/rules",query:{teamId:p,teamName:v}});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),le=function(){var e=(0,s.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,N.$)({endpoint:"home/teams/".concat(p),method:"DELETE",auth:!0}).then((function(){return h.push("/")}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ue=function(){K(null),Q(null),re(""),te(null)};(0,r.useEffect)((function(){return ue}),[]),console.log(U);var de=(0,a.jsxs)("div",{className:S,children:[(0,a.jsxs)("div",{className:H,children:[(0,a.jsx)("div",{className:R,children:(0,a.jsx)("p",{children:"\uc2b9\ub9ac"})}),(0,a.jsx)("p",{children:"A\ud300"})]}),(0,a.jsxs)("div",{className:B,children:[(0,a.jsx)("p",{children:"2022.03.04"}),(0,a.jsx)("p",{style:{fontWeight:"bold",fontSize:"30px",margin:"0.5rem"},children:"4:2"})]}),(0,a.jsxs)("div",{className:Z,children:[(0,a.jsx)("div",{className:M,children:(0,a.jsx)("p",{children:"\ud328\ubc30"})}),(0,a.jsx)("p",{children:"B\ud300"})]})]});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(j.Z,{}),(0,a.jsx)(l.I,{className:E,src:null===b||void 0===b?void 0:b.teamImageFileUrl,alt:"Desktop & Mobile PWA Application",width:"100%",height:"220px",title:v,content:null===b||void 0===b?void 0:b.introduce}),(0,a.jsxs)("div",{className:I,children:[(0,a.jsxs)("div",{className:L,children:[(0,a.jsx)("h5",{children:"\uc2b9\uc810"}),(0,a.jsx)("h5",{children:"\uc2b9\ub960"})]}),(0,a.jsxs)("div",{className:k,children:[(0,a.jsx)("div",{className:C,style:{borderRight:"1px solid"},children:(0,a.jsx)("p",{children:null===b||void 0===b?void 0:b.winPoint})}),(0,a.jsxs)("div",{className:C,children:[(0,a.jsxs)("p",{children:[null===b||void 0===b?void 0:b.winRate,"%"]}),(0,a.jsxs)("p",{children:[null===b||void 0===b?void 0:b.totalGameCount,"\uc804 ",null===b||void 0===b?void 0:b.winCount,"\uc2b9"," ",null===b||void 0===b?void 0:b.drawCount,"\ubb34 ",null===b||void 0===b?void 0:b.loseCount,"\ud328"]})]})]})]}),(0,a.jsxs)("main",{className:w,children:[(0,a.jsxs)("div",{className:O,children:[(0,a.jsx)("h3",{children:"\ub300\uacb0 \uc815\ubcf4"}),(0,a.jsxs)("div",{className:A,children:[(0,a.jsx)(u.Z,{asset:"Location",className:D}),(0,a.jsx)("h4",{children:"\ud65c\ub3d9 \uc9c0\uc5ed"}),(0,a.jsx)("h5",{children:null===b||void 0===b?void 0:b.mainArea})]}),(0,a.jsxs)("div",{className:A,children:[(0,a.jsx)(u.Z,{asset:"Person-Pin",className:D}),(0,a.jsx)("h4",{children:"\uc120\ud638 \uc7a5\uc18c"}),"home"===(null===b||void 0===b?void 0:b.preferredArea)?(0,a.jsx)("h5",{children:"\uc800\ud76c \ud648\uad6c\uc7a5\uc5d0\uc11c \ud558\uace0 \uc2f6\uc2b5\ub2c8\ub2e4."}):(0,a.jsx)("h5",{children:"\uc5b4\ub514\ub4e0 \ub2ec\ub824\uac11\ub2c8\ub2e4."})]}),(0,a.jsxs)("div",{className:A,children:[(0,a.jsx)(u.Z,{asset:"Calendar",className:D}),(0,a.jsx)("h4",{children:"\uac00\ub2a5 \uc694\uc77c"}),null===b||void 0===b||null===(t=b.weekdays)||void 0===t?void 0:t.map((function(e,t){return(0,a.jsxs)("h5",{children:[e,". "]},"weekday-".concat(t))}))]}),(0,a.jsxs)("div",{className:A,children:[(0,a.jsx)(u.Z,{asset:"Alarm",className:D}),(0,a.jsx)("h4",{children:"\uac00\ub2a5 \uc2dc\uac04"}),null===b||void 0===b||null===(n=b.time)||void 0===n?void 0:n.map((function(e,t){return(0,a.jsxs)("h5",{children:[e,". "]},"times-".concat(t))}))]})]}),(0,a.jsx)("div",{style:{display:"flex",width:"100%"},children:(0,a.jsx)(d.default,{href:{pathname:"/team/[teamName]/matches",query:{teamId:p,teamName:v}},children:(0,a.jsx)("div",{className:P,children:(0,a.jsx)(x,{label:"\uacbd\uae30 \ud788\uc2a4\ud1a0\ub9ac",content:de,length:"long",linkType:!1,arrowLink:oe,arrowLinkAs:oe.as})})})}),(0,a.jsx)(d.default,{href:{pathname:"/team/[teamName]/members",query:{teamId:p,teamName:v}},children:(0,a.jsxs)("div",{className:G,children:[(0,a.jsxs)("p",{children:["\uba64\ubc84 \uc18c\uac1c(",null===b||void 0===b?void 0:b.headCount,")"]}),(0,a.jsx)(u.Z,{asset:"Right-Arrow",className:q})]})}),ee&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.default,{href:{pathname:"/team/[teamName]/challenges",query:{teamId:p,teamName:v}},as:"/team/[teamName]/challenges",children:(0,a.jsxs)("div",{className:G,children:[(0,a.jsx)("p",{children:"\ub300\uacb0 \uc694\uccad"}),(0,a.jsx)(u.Z,{asset:"Right-Arrow",className:q})]})}),(0,a.jsx)(d.default,{href:{pathname:"/team/[teamName]/accept",query:{teamId:p,teamName:v}},as:"/team/[teamName]/accept",children:(0,a.jsxs)("div",{className:G,children:[(0,a.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,a.jsx)("p",{children:"\ud300\uc6d0 \uc218\ub77d"}),(0,a.jsx)(y,{})]}),(0,a.jsx)(u.Z,{asset:"Right-Arrow",className:q})]})})]}),null!==b&&void 0!==b&&b.teamCaptain?(0,a.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",border:"1px solid"},children:[(0,a.jsx)("div",{style:{display:"flex",width:"10vw"},children:(0,a.jsx)(g.Xp,{content:z?"\ub300\uacb0\ub4f1\ub85d \uc911":"\ub300\uacb0\ub4f1\ub85d\ud558\uae30",handleClick:ie,activeStyle:!!z})}),(0,a.jsx)("div",{style:{display:"flex",width:"10vw"},children:(0,a.jsx)(g.Xp,{handleClick:se,content:J?"\ud300\uc6d0 \ubaa8\uc9d1 \uc911":"\ud300\uc6d0\ubaa8\uc9d1\ud558\uae30",activeStyle:!!J})})]}):ee||!1!==U?(0,a.jsx)(g.Xp,{handleClick:function(){null!==b&&void 0!==b&&b.apply?console.log("\ub9e4\uce58 \ucde8\uc18c api"):h.push({pathname:"/team/[teamName]/match",query:{teamId:p,teamName:v}})},content:null!==b&&void 0!==b&&b.apply?"\ub300\uacb0 \uc2e0\uccad \ucde8\uc18c":"\ub300\uacb0 \uc2e0\uccad",activeStyle:!1===!(null===b||void 0===b||!b.apply)}):(0,a.jsx)(g.Xp,{handleClick:ce,content:null!==b&&void 0!==b&&b.participate?"\ud0c8\ud1f4\ud558\uae30":"\uc2e0\uccad\ud558\uae30",activeStyle:!1===(null===b||void 0===b?void 0:b.participate)}),ae&&(0,a.jsx)("p",{style:{color:"red"},children:ae}),(null===b||void 0===b?void 0:b.teamCaptain)&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(g.dz,{content:(0,a.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",width:"100vw"},children:[(0,a.jsx)("h5",{onClick:function(){return h.push("/founding/edit")},children:"\uc218\uc815\ud558\uae30"}),(0,a.jsx)("h5",{onClick:le,children:"\ud300 \ud574\uccb4\ud558\uae30"})]})}),(0,a.jsx)(g.dz,{content:"\ucc3d\ub2e8 \uc77c\uc790: ".concat(null===b||void 0===b||null===(o=b.createdDate)||void 0===o?void 0:o.split("T")[0])})]})]})]})}var W=!0,U=function(e){var t=e.data;return(0,a.jsx)(F,{data:t})}},5814:function(e,t,n){"use strict";n.d(t,{$:function(){return p}});var a=n(809),r=n.n(a),o=n(6265),i=n(2447),s=n(4047),c=n(2700),l=n(6371),u=JSON.parse('{"pO":"DEBUG","Vi":"PROD","LB":{"LOCAL":"http://localhost:3000/api/v1","DEV":"","PROD":"http://ec2-52-78-86-217.ap-northeast-2.compute.amazonaws.com:3000/api/v1"}}'),d=n(46),h=new(function(){function e(){(0,s.Z)(this,e),(0,o.Z)(this,"ENV",void 0),(0,o.Z)(this,"LOG_LEVEL",void 0),(0,o.Z)(this,"SERVER_URL",void 0),(0,o.Z)(this,"TOKEN",void 0),this.LOG_LEVEL=u.pO,this.ENV=u.Vi,this.SERVER_URL=u.LB[this.ENV],this.TOKEN=d.env.TEMP_TOKEN}return(0,c.Z)(e,[{key:"setToken",value:function(e,t,n){try{return l.t6.setCookie(e,t,n)}catch(a){return console.log("getting token: services: ",a),!1}}},{key:"getToken",value:function(){try{return l.t6.getCookie("token")}catch(e){return console.log("getting token: services: ",e),!1}}},{key:"getUser",value:function(){var e=(0,i.Z)(r().mark((function e(){var t;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={},e.abrupt("return",t);case 5:return e.prev=5,e.t0=e.catch(0),console.log("Config: storeHasPressed: error =",e.t0),e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"ServerUrl",get:function(){return this.SERVER_URL}}]),e}());function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=function(){var e=(0,i.Z)(r().mark((function e(t){var n,a,o,i,s,c,l,u,d,m,p,v,_,x,j,g,y,N,T;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.endpoint,a=t.method,o=void 0===a?"GET":a,i=t.retries,void 0===i?3:i,s=t.params,c=void 0===s?null:s,l=t.auth,u=void 0===l||l,d=t.isFile,m=void 0!==d&&d,p=t.token,v=f(f({method:o,headers:!0===m?{}:{Accept:"application/json","Content-Type":"application/json"}},c&&!0===m&&{body:c}),c&&!1===m&&{body:JSON.stringify(c)}),_="http://43.200.163.208/api/"+n,e.prev=3,!u){e.next=29;break}if(x=h.getToken()||p){e.next=8;break}throw{message:"NO TOKENS",status:406};case 8:return v.headers.Authorization="Bearer ".concat(x),e.next=11,fetch(_,v);case 11:if(j=e.sent,console.log("makeRequest: res =",j),!(!1===m&&j.status<=201)){e.next=19;break}return e.next=16,j.json();case 16:return g=e.sent,console.log("makeRequest: json =",g),e.abrupt("return",g);case 19:if(!(!0===m&&j.status<=201)){e.next=22;break}return console.log(j),e.abrupt("return",j);case 22:return e.next=24,j.json();case 24:throw e.t0=e.sent,e.t1=j.status,{message:e.t0,status:e.t1};case 29:return e.next=31,fetch(_,v);case 31:if(y=e.sent,console.log("res =",y),200!==y.status){e.next=39;break}return e.next=36,y.json();case 36:return N=e.sent,console.log("json =",N),e.abrupt("return",N);case 39:if(201!==y.status||"members/signup"!==n){e.next=41;break}return e.abrupt("return",y);case 41:if(201!==y.status){e.next=48;break}return e.next=44,y.json();case 44:return T=e.sent,console.log("json =",T),h.setToken("token",null===T||void 0===T?void 0:T.accesstoken,30),e.abrupt("return",T);case 48:e.next=54;break;case 50:return e.prev=50,e.t2=e.catch(3),console.log("makeRequest: error =",e.t2),e.abrupt("return",!1);case 54:case"end":return e.stop()}}),e,null,[[3,50]])})));return function(t){return e.apply(this,arguments)}}()},4095:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/team/[teamName]",function(){return n(473)}])},3660:function(e){e.exports={container:"PlaceholderWithTitle_container__aPW-w",containerEntire:"PlaceholderWithTitle_containerEntire__2Bu4E",containerIcon:"PlaceholderWithTitle_containerIcon__4INeH",contentBox:"PlaceholderWithTitle_contentBox__2HMHN",short:"PlaceholderWithTitle_short__3fqMM",long:"PlaceholderWithTitle_long__jr5uA",placeholderAnimation:"PlaceholderWithTitle_placeholderAnimation__31dHI"}},8951:function(e){e.exports={image:"Image_image__1DE1A",imageContent:"Image_imageContent__2Beq2",placeholder:"Image_placeholder__3EwrN",IMAGE_LOADING:"Image_IMAGE_LOADING__1X8DB",placeholderAnimation:"Image_placeholderAnimation__3GrfH",IMAGE_LOADED:"Image_IMAGE_LOADED__3q7yg",IMAGE_NOT_FOUND:"Image_IMAGE_NOT_FOUND__1r1wC",IMAGE_NOT_SPECIFIED:"Image_IMAGE_NOT_SPECIFIED__1PX6P",absoluteText:"Image_absoluteText__35Eiu",expectedMatch:"Image_expectedMatch__2D8Mt",title:"Image_title__2nax7",matchingTeam:"Image_matchingTeam__27Zfm"}},7597:function(e){e.exports={aboutTeam:"Team_aboutTeam__hkhbM",aboutTeamMain:"Team_aboutTeamMain__2IjEU",aboutTeamPicture:"Team_aboutTeamPicture__26X3a",aboutTeamContent:"Team_aboutTeamContent__1L-la",aboutTeamHeader:"Team_aboutTeamHeader__F6qZ0",aboutTeamImage:"Team_aboutTeamImage__2O0yk",about:"Team_about__1_7K2",rowDiv:"Team_rowDiv__2qqWe",followers:"Team_followers__2eofi",followersPlaceholder:"Team_followersPlaceholder__2itZz",placeholderAnimation:"Team_placeholderAnimation__2fMLm",followersIcon:"Team_followersIcon__3LDoh",matchHistoryContainer:"Team_matchHistoryContainer__31qxG",matchHistoryContainerimg:"Team_matchHistoryContainerimg__3vX2V",matchHistoryContainerWin:"Team_matchHistoryContainerWin__1rB_7",matchHistoryContainerResult:"Team_matchHistoryContainerResult__1ooDE",matchHistoryContainerLose:"Team_matchHistoryContainerLose__20NB8",matchHistoryContainerWinner:"Team_matchHistoryContainerWinner__3XCt7",matchHistoryContainerLoser:"Team_matchHistoryContainerLoser__21-dl",routes:"Team_routes__ecgfR",scoreBoard:"Team_scoreBoard__3oqn0",scoreBoardContentName:"Team_scoreBoardContentName__anfOk",scoreBoardDetail:"Team_scoreBoardDetail__1rAkL",scoreBoardDetailBox:"Team_scoreBoardDetailBox__31DH-",matchInfo:"Team_matchInfo__1E4a1",matchInfoContainer:"Team_matchInfoContainer__2qCGb",matchInfoContainerIcon:"Team_matchInfoContainerIcon__2QSfL",tabs:"Team_tabs__lbsNn",tabsIcon:"Team_tabsIcon__PUKaI"}},46:function(e){var t,n,a=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:r}catch(e){t=r}try{n="function"===typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var s,c=[],l=!1,u=-1;function d(){l&&s&&(l=!1,s.length?c=s.concat(c):u=-1,c.length&&h())}function h(){if(!l){var e=i(d);l=!0;for(var t=c.length;t;){for(s=c,c=[];++u<t;)s&&s[u].run();u=-1,t=c.length}s=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function f(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new m(e,t)),1!==c.length||l||i(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=f,a.addListener=f,a.once=f,a.off=f,a.removeListener=f,a.removeAllListeners=f,a.emit=f,a.prependListener=f,a.prependOnceListener=f,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}}},function(e){e.O(0,[9774,2888,179],(function(){return t=4095,e(e.s=t);var t}));var t=e.O();_N_E=t}]);