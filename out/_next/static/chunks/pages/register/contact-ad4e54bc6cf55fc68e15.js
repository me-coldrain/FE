(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7214],{9614:function(n,e,i){"use strict";i.d(e,{Z:function(){return h}});var t=i(5893),r=i(1664),c=(i(7294),i(8715)),s=i.n(c),a=s().round,o=s().login,l=s().normal,u=s().shares,d=s().editButton;function h(n){var e=n.url,i=void 0===e?"":e,c=n.children,s=void 0===c?"":c,h=n.bigRound,x=n.bigSquare,_=n.bigSquareLogin,f=n.onClick,m=n.nickname,p=void 0===m?"":m,j=n.preferedPosition,v=void 0===j?"":j,k=n.share,g=n.teamName,N=void 0===g?"":g,C=n.teamInfo,b=void 0===C?"":C,B=n.location,q=void 0===B?"":B,Z=n.stadium,y=void 0===Z?"":Z,R=n.mine;return h?p?(0,t.jsx)("div",{className:a,onClick:f,children:(0,t.jsx)(r.default,{href:{pathname:i,query:{nickname:p,position:v}},prefetch:!0,as:i,children:(0,t.jsx)("a",{children:s})})}):R?(0,t.jsx)("div",{className:d,onClick:f,children:(0,t.jsx)(r.default,{href:{pathname:i},prefetch:!0,as:i,children:(0,t.jsx)("a",{children:s})})}):(0,t.jsx)("div",{className:a,onClick:f,children:(0,t.jsx)(r.default,{href:{pathname:i,query:{teamName:N,teamInfo:b,location:q,stadium:y}},prefetch:!0,as:i,children:(0,t.jsx)("a",{children:s})})}):x?(0,t.jsx)("div",{className:o,onClick:f,children:(0,t.jsx)(r.default,{href:{pathname:i,query:{nickname:p,position:v}},prefetch:!0,as:i,children:(0,t.jsx)("a",{children:s})})}):_?(0,t.jsx)("div",{className:o,onClick:f,children:(0,t.jsx)("a",{children:s})}):k?(0,t.jsx)("div",{className:u,onClick:f,children:(0,t.jsx)("p",{children:s})}):(0,t.jsx)("div",{className:l,onClick:f,children:(0,t.jsx)("p",{children:s})})}},7222:function(n,e,i){"use strict";i.d(e,{Z:function(){return a}});var t=i(5893),r=(i(7294),i(1163)),c=i(4693),s=i.n(c)().back;function a(){return(0,t.jsx)("button",{type:"button",onClick:function(){return r.default.back()},className:s,children:(0,t.jsx)("p",{children:" < "})})}},5903:function(n,e,i){"use strict";i.d(e,{Z:function(){return o}});var t=i(5893),r=(i(7294),i(9992)),c=i.n(r),s=c().progressbar,a=c().percent;function o(n){var e=n.size;return(0,t.jsx)("div",{className:s,children:(0,t.jsx)("div",{className:a,style:{width:e}})})}},4465:function(n,e,i){"use strict";i.r(e),i.d(e,{default:function(){return t.Z}});var t=i(8713)},8713:function(n,e,i){"use strict";i.d(e,{Z:function(){return j}});var t=i(5893),r=i(7294),c=i(1163),s=i(5998),a=i(384),o=i(9614),l=i(7222),u=i(5903),d=i(8074),h=i.n(d),x=h().main,_=h().circleBox,f=h().circle,m=h().active,p=(h().circletag,h().input);function j(){var n=(0,c.useRouter)(),e=(0,s.I0)();console.log(n);var i=(0,r.useState)("kakao"),d=i[0],h=i[1],j=(0,r.useState)(),v=j[0],k=j[1],g=(0,r.useState)(),N=g[0],C=g[1];return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("main",{children:[(0,t.jsxs)("section",{children:[(0,t.jsx)(u.Z,{size:"100%"}),(0,t.jsx)(l.Z,{})]}),(0,t.jsxs)("section",{className:x,children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"\uac1c\uc778 \uc5f0\ub77d\ub9dd"}),(0,t.jsx)("p",{children:"\uc774\uba54\uc77c \ud639\uc740 \uce74\ud1a1 \uc544\uc774\ub514\ub97c \ud544\uc218\ub85c \uae30\uc785\ud574\uc8fc\uc138\uc694."})]}),(0,t.jsxs)("div",{className:_,children:[(0,t.jsx)("div",{className:"kakao"===d?m:f,onClick:function(){h("kakao")},children:"\uce74\ud1a1"}),(0,t.jsx)("div",{className:"email"===d?m:f,onClick:function(){h("email")},children:"\uc774\uba54\uc77c"})]}),(0,t.jsxs)("div",{className:p,children:[(0,t.jsx)("label",{htmlFor:"sns",children:"SNS \uc544\uc774\ub514"}),(0,t.jsx)("input",{id:"sns",placeholder:"kakao"===d?"\uce74\uce74\uc624\ud1a1 \uc544\uc774\ub514\ub97c \uc801\uc5b4\uc8fc\uc138\uc694":"\uc774\uba54\uc77c\uc744 \uc801\uc5b4\uc8fc\uc138\uc694",type:"text",onChange:function(n){!function(n){k(n.target.value)}(n)}})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"(\uc120\ud0dd) \ud734\ub300\ud3f0 \ubc88\ud638 \uc785\ub825"}),(0,t.jsx)("p",{children:"\ud300\uc6d0 \ubaa8\uc9d1 \ub4f1\uc5d0 \uc0ac\uc6a9\ub420 \uc608\uc815\uc785\ub2c8\ub2e4."})]}),(0,t.jsxs)("div",{className:p,children:[(0,t.jsx)("label",{htmlFor:"phone",children:"\ud578\ub4dc\ud3f0 \ubc88\ud638"}),(0,t.jsx)("input",{id:"phone",placeholder:"01012345678",type:"text",onChange:function(n){!function(n){C(n.target.value)}(n)}})]})]}),(0,t.jsx)(o.Z,{bigRound:!0,onClick:function(){!function(){var i={nickname:n.query.nickname,position:n.query.position,snsId:v,phone:N};e((0,a.PR)(i))}(),function(n){return/^\d+$/.test(n)}(N)||alert("\uc22b\uc790\ub9cc \uac00\ub2a5\ud569\ub2c8\ub2e4.")},children:"\uc785\ub825\uc644\ub8cc"})]})})}},8299:function(n,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register/contact",function(){return i(4465)}])},8715:function(n){n.exports={round:"RouterButton_round__1FSZ4",editButton:"RouterButton_editButton__1JzXE",login:"RouterButton_login__BwO8W",normal:"RouterButton_normal__3XXZu",shares:"RouterButton_shares__q3kSL"}},4693:function(n){n.exports={back:"Back_back__irHIv"}},9992:function(n){n.exports={progressbar:"Progressbar_progressbar__18qY0",percent:"Progressbar_percent__2Gnqg"}},8074:function(n){n.exports={main:"Contact_main__2vM9T",circleBox:"Contact_circleBox__pHOIV",circle:"Contact_circle__2bxnu",active:"Contact_active__3hTrE",circletag:"Contact_circletag__aCfJj",input:"Contact_input__1ed98"}}},function(n){n.O(0,[9774,2888,179],(function(){return e=8299,n(n.s=e);var e}));var e=n.O();_N_E=e}]);