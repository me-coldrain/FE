(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2814],{9043:function(e,n,t){"use strict";t.d(n,{DB:function(){return f},Jg:function(){return p},ZP:function(){return h}});var r=t(5893),o=t(8347),i=t(4328),c=(t(7294),t(1192)),a=t(5219),s=t.n(a),u=s().button,l=s().coloredButton,d=s().checkBox;function f(e){var n=e.handleClick,t=e.content,o=e.length,i=(e.color,(0,c.L)(l,s()[o]));return(0,r.jsx)("button",{onClick:n,className:i,children:(0,r.jsx)("p",{children:t})})}function p(e){var n=e.checked,t=e.handleClick,a=e.content,u=((0,o.Z)(e,["checked","handleClick","content"]),(0,c.L)(d,s().long));return(0,r.jsxs)("button",{onClick:t,className:u,children:[(0,r.jsx)("p",{children:a}),(0,r.jsx)(i.Z,{checked:n})]})}function h(e){var n=e.handleClick,t=e.content,o=e.length,i=e.color,a=void 0!==i&&i,d=(0,c.L)(u,s()[o]),f=(0,c.L)(l,s()[o]);return(0,r.jsx)("button",{onClick:n,className:a?f:d,children:t})}},3006:function(e,n,t){"use strict";t.d(n,{ZP:function(){return r.ZP},DB:function(){return r.DB},Jg:function(){return r.Jg}});var r=t(9043)},881:function(e,n,t){"use strict";t.d(n,{I:function(){return m},Z:function(){return _}});var r,o=t(5893),i=t(4121),c=t(7294),a=t(1192),s=t(8951),u=t.n(s),l=u().image,d=u().placeholder,f=u().absoluteText,p=u().expectedMatch,h=u().matchingTeam;u().title;!function(e){e.Loading="IMAGE_LOADING",e.Loaded="IMAGE_LOADED",e.NotFound="IMAGE_NOT_FOUND",e.NotSpecified="IMAGE_NOT_SPECIFIED"}(r||(r={}));var v=function(){var e=(0,c.useState)((function(){return r.Loading})),n=e[0],t=e[1];return[(0,c.useCallback)((function(e){if(e)if(e.complete)t(r.Loaded);else{if(e.src){var n=function(){t(r.Loaded)},o=function(){t(r.NotFound)};return e.addEventListener("load",n),e.addEventListener("error",o),function(){e.removeEventListener("load",n),e.removeEventListener("error",o)}}t(r.NotSpecified)}}),[]),n]};function m(e){var n=e.src,t=void 0===n?"":n,r=e.alt,c=void 0===r?"":r,s=e.height,m=e.width,_=e.loading,x=void 0===_?"lazy":_,g=e.className,j=void 0===g?"":g,b=e.isPlaceholder,k=void 0!==b&&b,O=e.title,E=e.content,y=e.expected,w=v(),N=(0,i.Z)(w,2),P=N[0],Z=N[1],I=k?d:u()[Z];return y?(0,o.jsx)("div",{className:p,children:(0,o.jsxs)("div",{className:O,children:[(0,o.jsx)("div",{className:h,children:"\ub300\uacb0\ud300"}),(0,o.jsx)("h1",{children:"\uc11c\uc6b8FC"})]})}):(0,o.jsxs)("div",{role:"img","aria-label":c,className:(0,a.L)(l,I,[j,!!j]),children:[!k&&(0,o.jsx)("img",{src:t,alt:c,ref:P,height:s,width:m,loading:x}),(0,o.jsxs)("div",{className:f,children:[(0,o.jsx)("h3",{children:O}),(0,o.jsx)("h4",{children:E})]})]})}function _(e){var n=e.src,t=void 0===n?"":n,r=e.alt,c=void 0===r?"":r,s=e.height,f=e.width,p=e.loading,h=void 0===p?"lazy":p,m=e.className,_=void 0===m?"":m,x=e.isPlaceholder,g=void 0!==x&&x,j=v(),b=(0,i.Z)(j,2),k=b[0],O=b[1],E=g?d:u()[O];return(0,o.jsx)("div",{role:"img","aria-label":c,className:(0,a.L)(l,E,[_,!!_]),children:!g&&(0,o.jsx)("img",{src:t,alt:c,ref:k,height:s,width:f,loading:h})})}},8482:function(e,n,t){"use strict";t.d(n,{r:function(){return x}});var r=t(7261),o=t(5893),i=t(3006),c=t(7294),a=t(3935),s=t(9936);function u(){var e=(0,r.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 100;\n"]);return u=function(){return e},e}function l(){var e=(0,r.Z)(["\n  background: white;\n  width: 80vw;\n  height: 80vh;\n  border-radius: 15px;\n  padding: 15px;\n"]);return l=function(){return e},e}function d(){var e=(0,r.Z)(["\n  display: flex;\n  justify-content: flex-end;\n  font-size: 25px;\n"]);return d=function(){return e},e}function f(){var e=(0,r.Z)(["\n  display: flex;\n  flex-direction: column;\n  background: white;\n  width: 80%;\n  min-width: 360px;\n  height: 50%;\n  border-radius: 15px;\n  padding: 15px;\n  h1 {\n    font-size: 24px;\n    color: #2f4eb4;\n  }\n  p {\n    color: #a3a3a3;\n  }\n"]);return f=function(){return e},e}function p(){var e=(0,r.Z)(["\n  display: flex;\n  height: 600px;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n"]);return p=function(){return e},e}function h(){var e=(0,r.Z)(["\n  text-align: center;\n  font-size: 33px;\n  font-weight: 700;\n"]);return h=function(){return e},e}function v(){var e=(0,r.Z)(["\n  padding-top: 10px;\n  width: 400px;\n"]);return v=function(){return e},e}function m(){var e=(0,r.Z)([""]);return m=function(){return e},e}function _(){var e=(0,r.Z)(["\n  display: flex;\n  overflow: clip;\n  flex-wrap: wrap;\n"]);return _=function(){return e},e}var x=function(e){var n=e.show,t=e.onClose,r=e.children,s=e.title,u=e.verify,l=void 0!==u&&u,d=e.checked,f=void 0!==d&&d,p=e.setChecked,h=e.verifyContent,v=void 0===h?"\ud655\uc778\ud588\uc2b5\ub2c8\ub2e4.":h,m=e.handleVerified,_=void 0===m?function(){return console.log("clicked")}:m,x=(0,c.useState)(!1),w=x[0],N=x[1];(0,c.useEffect)((function(){N(!0)}),[]);var P=n?(0,o.jsx)(y,{children:(0,o.jsxs)(O,{children:[(0,o.jsx)(E,{children:(0,o.jsx)("a",{href:"#",onClick:function(e){e.preventDefault(),t()},children:"x"})}),(0,o.jsx)(k,{children:s&&(0,o.jsxs)(b,{children:[(0,o.jsx)("h1",{children:s}),(0,o.jsx)(g,{children:r})]})}),l&&(0,o.jsxs)(j,{children:[(0,o.jsx)("div",{style:{marginBottom:"1rem"},children:(0,o.jsx)(i.Jg,{checked:f,content:v,handleClick:p})}),(0,o.jsx)(i.ZP,{length:"long",content:"\uc2e0\uccad\ud558\uae30",color:!!f,handleClick:_})]})]})}):null;if(w){var Z=document.getElementById("modal-element");return a.createPortal(P,Z)}return(0,o.jsx)(o.Fragment,{})},g=s.ZP.div(_()),j=s.ZP.div(m()),b=(s.ZP.div(v()),s.ZP.div(h())),k=s.ZP.div(p()),O=s.ZP.div(f()),E=s.ZP.div(d()),y=(s.ZP.div(l()),s.ZP.div(u()))},6022:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(5893);t(7294);function o(e){var n=e.color;return(0,r.jsx)("div",{style:{margin:"6rem",background:n}})}},2236:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSP:function(){return w},default:function(){return N}});var r=t(5893),o=t(7294),i=t(6265),c=t(809),a=t.n(c),s=t(2447),u=t(3006),l=t(881),d=t(8482),f=t(6022),p=t(1163),h=t(5814),v=t(924),m=t.n(v);function _(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var x=m().question,g=m().questionBox,j=m().proposal,b=m().proposalMember,k=m().proposalImage,O=m().proposalContent,E=m().proposalAnswer;function y(e){var n,t=e.data,c=(0,p.useRouter)(),v=c.query,m=v.teamId,y=v.teamName,w=(0,o.useState)(!1),N=w[0],P=w[1],Z=(0,o.useState)(0),I=Z[0],C=Z[1],A=(0,o.useState)(!1),D=A[0],L=A[1],T=(0,o.useState)(!1),B=T[0],S=T[1],G=function(){var e=(0,s.Z)(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,h.$)({endpoint:"teams/".concat(m,"/members/").concat(n,"/offer"),method:"PATCH",auth:!0}).then((function(){return L(!0)}));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),M=function(){var e=(0,s.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,h.$)({endpoint:"teams/".concat(m,"/members/").concat(I,"/offer"),method:"DELETE",auth:!0}).then((function(){return S(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(e){var n=e.memberId,t=e.profileImageUrl,o=e.nickName,i=(e.mvpPoint,e.position,e.strikerPoint,e.midfielderPoint,e.defenderPoint,e.goalkeeperPoint,e.answer);return(0,r.jsxs)("div",{className:b,children:[(0,r.jsxs)("div",{className:O,children:[(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,r.jsx)(l.Z,{src:t||"https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0=",className:k}),(0,r.jsx)("p",{children:o})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(u.ZP,{handleClick:function(){return function(e){C(e),S(!0)}(n)},content:"\uac70\ubd80",length:"short"}),(0,r.jsx)(u.ZP,{handleClick:function(){return G(n)},content:"\uc218\ub77d",length:"short",color:!0})]})]}),(0,r.jsx)("div",{className:E,children:i})]})};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.r,{show:D,onClose:function(){c.push({pathname:"/team/[teamName]",query:{teamId:m,teamName:y}})},title:"\ud300\uc6d0\uc774 \ucd94\uac00\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",children:"\uba64\ubc84\uc18c\uac1c\uc5d0\uc11c \ud655\uc778\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),(0,r.jsx)(d.r,{show:B,onClose:function(){S(!1)},title:"\ud300\uc6d0\uc744 \uac70\uc808\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",verify:!0,verifyContent:"\ud300\uc6d0 \uac70\uc808 \uc2dc \ub2e4\uc2dc \ub418\ub3cc\ub9b4 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",checked:N,setChecked:P,handleVerified:function(){return M()},children:"\uba64\ubc84\uc18c\uac1c\uc5d0\uc11c \ud655\uc778\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),(0,r.jsxs)("div",{className:x,children:[(0,r.jsx)(f.Z,{}),(0,r.jsx)("p",{children:"Q. \uc0ac\uc804 \uc9c8\ubb38"}),(0,r.jsx)("div",{className:g,children:(0,r.jsx)("p",{children:null===t||void 0===t?void 0:t.question})})]}),(0,r.jsx)("div",{className:j,children:null===t||void 0===t||null===(n=t.offeredMembers)||void 0===n?void 0:n.map((function(e,n){return(0,r.jsx)(R,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?_(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e),"offered-member-".concat(n))}))})]})}var w=!0,N=function(e){var n=e.data;return(0,r.jsx)(y,{data:n})}},5814:function(e,n,t){"use strict";t.d(n,{$:function(){return v}});var r=t(809),o=t.n(r),i=t(6265),c=t(2447),a=t(4047),s=t(2700),u=t(6371),l=JSON.parse('{"pO":"DEBUG","Vi":"PROD","LB":{"LOCAL":"http://localhost:3000/api/v1","DEV":"","PROD":"http://ec2-52-78-86-217.ap-northeast-2.compute.amazonaws.com:3000/api/v1"}}'),d=t(46),f=new(function(){function e(){(0,a.Z)(this,e),(0,i.Z)(this,"ENV",void 0),(0,i.Z)(this,"LOG_LEVEL",void 0),(0,i.Z)(this,"SERVER_URL",void 0),(0,i.Z)(this,"TOKEN",void 0),this.LOG_LEVEL=l.pO,this.ENV=l.Vi,this.SERVER_URL=l.LB[this.ENV],this.TOKEN=d.env.TEMP_TOKEN}return(0,s.Z)(e,[{key:"setToken",value:function(e,n,t){try{return u.t6.setCookie(e,n,t)}catch(r){return console.log("getting token: services: ",r),!1}}},{key:"getToken",value:function(){try{return u.t6.getCookie("token")}catch(e){return console.log("getting token: services: ",e),!1}}},{key:"getUser",value:function(){var e=(0,c.Z)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={},e.abrupt("return",n);case 5:return e.prev=5,e.t0=e.catch(0),console.log("Config: storeHasPressed: error =",e.t0),e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"ServerUrl",get:function(){return this.SERVER_URL}}]),e}());function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var v=function(){var e=(0,c.Z)(o().mark((function e(n){var t,r,i,c,a,s,u,l,d,p,v,m,_,x,g,j,b,k,O;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.endpoint,r=n.method,i=void 0===r?"GET":r,c=n.retries,void 0===c?3:c,a=n.params,s=void 0===a?null:a,u=n.auth,l=void 0===u||u,d=n.isFile,p=void 0!==d&&d,v=n.token,m=h(h({method:i,headers:!0===p?{}:{Accept:"application/json","Content-Type":"application/json"}},s&&!0===p&&{body:s}),s&&!1===p&&{body:JSON.stringify(s)}),_="http://43.200.163.208/api/"+t,e.prev=3,!l){e.next=28;break}if(x=f.getToken()||v){e.next=8;break}throw{message:"NO TOKENS",status:406};case 8:return m.headers.Authorization="Bearer ".concat(x),e.next=11,fetch(_,m);case 11:if(g=e.sent,console.log("makeRequest: res =",g),!1!==p||200!==g.status){e.next=19;break}return e.next=16,g.json();case 16:return j=e.sent,console.log("makeRequest: json =",j),e.abrupt("return",j);case 19:if(!0!==p||200!==g.status){e.next=21;break}return e.abrupt("return",g);case 21:return e.next=23,g.json();case 23:throw e.t0=e.sent,e.t1=g.status,{message:e.t0,status:e.t1};case 28:return e.next=30,fetch(_,m);case 30:if(b=e.sent,console.log("res =",b),200!==b.status){e.next=38;break}return e.next=35,b.json();case 35:return k=e.sent,console.log("json =",k),e.abrupt("return",k);case 38:if(201!==b.status){e.next=45;break}return e.next=41,b.json();case 41:return O=e.sent,console.log("json =",O),f.setToken("token",null===O||void 0===O?void 0:O.accesstoken,30),e.abrupt("return",O);case 45:e.next=51;break;case 47:return e.prev=47,e.t2=e.catch(3),console.log("makeRequest: error =",e.t2),e.abrupt("return",!1);case 51:case"end":return e.stop()}}),e,null,[[3,47]])})));return function(n){return e.apply(this,arguments)}}()},9736:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/team/[teamName]/accept",function(){return t(2236)}])},5219:function(e){e.exports={button:"Button_button__2KtT-",coloredButton:"Button_coloredButton__2rHKf",short:"Button_short__3ec2l",long:"Button_long__3x6n-",round:"Button_round__TOsoe",checkBox:"Button_checkBox__3lnZa"}},8951:function(e){e.exports={image:"Image_image__1DE1A",imageContent:"Image_imageContent__2Beq2",placeholder:"Image_placeholder__3EwrN",IMAGE_LOADING:"Image_IMAGE_LOADING__1X8DB",placeholderAnimation:"Image_placeholderAnimation__3GrfH",IMAGE_LOADED:"Image_IMAGE_LOADED__3q7yg",IMAGE_NOT_FOUND:"Image_IMAGE_NOT_FOUND__1r1wC",IMAGE_NOT_SPECIFIED:"Image_IMAGE_NOT_SPECIFIED__1PX6P",absoluteText:"Image_absoluteText__35Eiu",expectedMatch:"Image_expectedMatch__2D8Mt",title:"Image_title__2nax7",matchingTeam:"Image_matchingTeam__27Zfm"}},924:function(e){e.exports={question:"Accept_question__1i4AJ",questionBox:"Accept_questionBox__1jVy3",proposal:"Accept_proposal__3SJSN",proposalMember:"Accept_proposalMember__3C73V",proposalImage:"Accept_proposalImage__1H6jB",proposalContent:"Accept_proposalContent__iuC4-",proposalAnswer:"Accept_proposalAnswer__3JZU3"}}},function(e){e.O(0,[8430,4328,6588,9774,2888,179],(function(){return n=9736,e(e.s=n);var n}));var n=e.O();_N_E=n}]);