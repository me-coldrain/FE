(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4388],{9614:function(e,n,i){"use strict";i.d(n,{Z:function(){return h}});var t=i(5893),r=i(1664),c=(i(7294),i(8715)),s=i.n(c),o=s().round,a=s().login,l=s().normal,u=s().shares,d=s().editButton;function h(e){var n=e.url,i=void 0===n?"":n,c=e.children,s=void 0===c?"":c,h=e.bigRound,m=e.bigSquare,f=e.bigSquareLogin,x=e.onClick,_=e.nickname,j=void 0===_?"":_,p=e.preferedPosition,v=void 0===p?"":p,k=e.share,N=e.teamName,C=void 0===N?"":N,g=e.teamInfo,B=void 0===g?"":g,b=e.location,S=void 0===b?"":b,Z=e.stadium,w=void 0===Z?"":Z,q=e.mine;return h?j?(0,t.jsx)("div",{className:o,onClick:x,children:(0,t.jsx)(r.default,{href:{pathname:i,query:{nickname:j,position:v}},prefetch:!0,as:i,children:(0,t.jsx)("a",{children:s})})}):q?(0,t.jsx)("div",{className:d,onClick:x,children:(0,t.jsx)(r.default,{href:{pathname:i},prefetch:!0,as:i,children:(0,t.jsx)("a",{children:s})})}):(0,t.jsx)("div",{className:o,onClick:x,children:(0,t.jsx)(r.default,{href:{pathname:i,query:{teamName:C,teamInfo:B,location:S,stadium:w}},prefetch:!0,as:i,children:(0,t.jsx)("a",{children:s})})}):m?(0,t.jsx)("div",{className:a,onClick:x,children:(0,t.jsx)(r.default,{href:{pathname:i,query:{nickname:j,position:v}},prefetch:!0,as:i,children:(0,t.jsx)("a",{children:s})})}):f?(0,t.jsx)("div",{className:a,onClick:x,children:(0,t.jsx)("a",{children:s})}):k?(0,t.jsx)("div",{className:u,onClick:x,children:(0,t.jsx)("p",{children:s})}):(0,t.jsx)("div",{className:l,onClick:x,children:(0,t.jsx)("p",{children:s})})}},7222:function(e,n,i){"use strict";i.d(n,{Z:function(){return o}});var t=i(5893),r=(i(7294),i(1163)),c=i(4693),s=i.n(c)().back;function o(){return(0,t.jsx)("button",{type:"button",onClick:function(){return r.default.back()},className:s,children:(0,t.jsx)("p",{children:" < "})})}},2348:function(e,n,i){"use strict";i.d(n,{Z:function(){return h}});var t=i(5893),r=(i(7294),i(8159)),c=i.n(r),s=c().normal,o=c().select,a=c().stadiumSelect,l=c().stadiumNormal,u=c().timeSelect,d=c().timeNormal;function h(e){var n=e.children,i=void 0===n?"":n,r=e.position,c=e.onClick,h=e.active,m=e.location,f=e.stadium,x=e.time;return r||m?h?(0,t.jsx)("div",{className:o,onClick:c,children:(0,t.jsx)("p",{children:i})}):(0,t.jsx)("div",{className:s,onClick:c,children:(0,t.jsx)("p",{children:i})}):f?h?(0,t.jsx)("div",{className:a,onClick:c,children:(0,t.jsx)("p",{children:i})}):(0,t.jsx)("div",{className:l,onClick:c,children:(0,t.jsx)("p",{children:i})}):x?h?(0,t.jsx)("div",{className:u,onClick:c,children:(0,t.jsx)("p",{children:i})}):(0,t.jsx)("div",{className:d,onClick:c,children:(0,t.jsx)("p",{children:i})}):(0,t.jsx)(t.Fragment,{})}},5903:function(e,n,i){"use strict";i.d(n,{Z:function(){return a}});var t=i(5893),r=(i(7294),i(9992)),c=i.n(r),s=c().progressbar,o=c().percent;function a(e){var n=e.size;return(0,t.jsx)("div",{className:s,children:(0,t.jsx)("div",{className:o,style:{width:n}})})}},6581:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return t.Z}});var t=i(9595)},9595:function(e,n,i){"use strict";i.d(n,{Z:function(){return h}});var t=i(5893),r=i(7294),c=i(1163),s=i(9614),o=i(7222),a=i(5903),l=i(2348),u=i(5745),d=i.n(u)().selectBox;function h(){var e=(0,c.useRouter)();console.log(e);var n=(0,r.useState)("fwd"),i=n[0],u=n[1],h=function(e){u(e)};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("main",{children:[(0,t.jsxs)("section",{children:[(0,t.jsx)(a.Z,{size:"66%"}),(0,t.jsx)(o.Z,{})]}),(0,t.jsxs)("h3",{children:["\uc120\ud638\ud558\ub294 \ud3ec\uc9c0\uc158\uc744",(0,t.jsx)("br",{}),"\uc120\ud0dd\ud574\uc8fc\uc138\uc694"]}),(0,t.jsx)("p",{children:"1\uac1c\uc758 \ud3ec\uc9c0\uc158\ub9cc \uc120\ud0dd \uac00\ub2a5\ud569\ub2c8\ub2e4."}),(0,t.jsxs)("div",{className:d,children:[(0,t.jsx)(l.Z,{position:!0,onClick:function(){return h("fwd")},active:"fwd"===i,children:"\uacf5\uaca9\uc218"}),(0,t.jsx)(l.Z,{position:!0,onClick:function(){return h("mf")},active:"mf"===i,children:"\ubbf8\ub4dc\ud544\ub354"}),(0,t.jsx)(l.Z,{position:!0,onClick:function(){return h("df")},active:"df"===i,children:"\uc218\ube44\uc218"}),(0,t.jsx)(l.Z,{position:!0,onClick:function(){return h("gk")},active:"gk"===i,children:"\uace8\ud0a4\ud37c"})]}),(0,t.jsx)(s.Z,{url:"/register/contact",bigRound:!0,nickname:e.query.nickname,preferedPosition:i,children:"\ub2e4\uc74c"})]})})}},2910:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register/position",function(){return i(6581)}])},8715:function(e){e.exports={round:"RouterButton_round__1FSZ4",editButton:"RouterButton_editButton__1JzXE",login:"RouterButton_login__BwO8W",normal:"RouterButton_normal__3XXZu",shares:"RouterButton_shares__q3kSL"}},4693:function(e){e.exports={back:"Back_back__irHIv"}},8159:function(e){e.exports={normal:"SelectButton_normal__OD8jr",select:"SelectButton_select__Ty49Y",stadiumNormal:"SelectButton_stadiumNormal__1M4j9",stadiumSelect:"SelectButton_stadiumSelect__3xFZ0",timeNormal:"SelectButton_timeNormal__-zsrE",timeSelect:"SelectButton_timeSelect__1zYIz"}},9992:function(e){e.exports={progressbar:"Progressbar_progressbar__18qY0",percent:"Progressbar_percent__2Gnqg"}},5745:function(e){e.exports={selectBox:"Position_selectBox__QkOLz"}}},function(e){e.O(0,[9774,2888,179],(function(){return n=2910,e(e.s=n);var n}));var n=e.O();_N_E=n}]);