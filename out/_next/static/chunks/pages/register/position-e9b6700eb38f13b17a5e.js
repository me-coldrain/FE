(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4388],{9614:function(n,e,i){"use strict";i.d(e,{Z:function(){return d}});var t=i(5893),r=i(1664),c=(i(7294),i(8715)),s=i.n(c),o=s().round,l=s().login,a=s().normal,u=s().shares;function d(n){var e=n.url,i=void 0===e?"":e,c=n.children,s=void 0===c?"":c,d=n.bigRound,m=n.bigSquare,h=n.onClick,f=n.nickname,_=void 0===f?"":f,x=n.preferedPosition,j=void 0===x?"":x,p=n.share,v=n.teamName,k=void 0===v?"":v,N=n.teamInfo,C=void 0===N?"":N,g=n.location,b=void 0===g?"":g,S=n.stadium,B=void 0===S?"":S;return d?_?(0,t.jsx)("div",{className:o,onClick:h,children:(0,t.jsx)(r.default,{href:{pathname:i,query:{nickname:_,position:j}},prefetch:!0,as:i,children:(0,t.jsx)("a",{children:s})})}):(0,t.jsx)("div",{className:o,onClick:h,children:(0,t.jsx)(r.default,{href:{pathname:i,query:{teamName:k,teamInfo:C,location:b,stadium:B}},prefetch:!0,as:i,children:(0,t.jsx)("a",{children:s})})}):m?(0,t.jsx)("div",{className:l,onClick:h,children:(0,t.jsx)(r.default,{href:{pathname:i,query:{nickname:_,position:j}},prefetch:!0,as:i,children:(0,t.jsx)("a",{children:s})})}):p?(0,t.jsx)("div",{className:u,onClick:h,children:(0,t.jsx)("p",{children:s})}):(0,t.jsx)("div",{className:a,onClick:h,children:(0,t.jsx)("p",{children:s})})}},7222:function(n,e,i){"use strict";i.d(e,{Z:function(){return o}});var t=i(5893),r=(i(7294),i(1163)),c=i(4693),s=i.n(c)().back;function o(){return(0,t.jsx)("button",{type:"button",onClick:function(){return r.default.back()},className:s,children:(0,t.jsx)("p",{children:" < "})})}},5903:function(n,e,i){"use strict";i.d(e,{Z:function(){return l}});var t=i(5893),r=(i(7294),i(9992)),c=i.n(r),s=c().progressbar,o=c().percent;function l(n){var e=n.size;return(0,t.jsx)("div",{className:s,children:(0,t.jsx)("div",{className:o,style:{width:e}})})}},3397:function(n,e,i){"use strict";i.d(e,{Z:function(){return m}});var t=i(5893),r=(i(7294),i(3225)),c=i.n(r),s=c().normal,o=c().select,l=c().stadiumSelect,a=c().stadiumNormal,u=c().timeSelect,d=c().timeNormal;function m(n){var e=n.children,i=void 0===e?"":e,r=n.position,c=n.onClick,m=n.active,h=n.location,f=n.stadium,_=n.time;return r||h?m?(0,t.jsx)("div",{className:o,onClick:c,children:(0,t.jsx)("p",{children:i})}):(0,t.jsx)("div",{className:s,onClick:c,children:(0,t.jsx)("p",{children:i})}):f?m?(0,t.jsx)("div",{className:l,onClick:c,children:(0,t.jsx)("p",{children:i})}):(0,t.jsx)("div",{className:a,onClick:c,children:(0,t.jsx)("p",{children:i})}):_?m?(0,t.jsx)("div",{className:u,onClick:c,children:(0,t.jsx)("p",{children:i})}):(0,t.jsx)("div",{className:d,onClick:c,children:(0,t.jsx)("p",{children:i})}):(0,t.jsx)(t.Fragment,{})}},6581:function(n,e,i){"use strict";i.r(e),i.d(e,{default:function(){return t.Z}});var t=i(9595)},9595:function(n,e,i){"use strict";i.d(e,{Z:function(){return m}});var t=i(5893),r=i(7294),c=i(1163),s=i(9614),o=i(7222),l=i(5903),a=i(3397),u=i(5745),d=i.n(u)().selectBox;function m(){var n=(0,c.useRouter)();console.log(n);var e=(0,r.useState)("fwd"),i=e[0],u=e[1],m=function(n){u(n)};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("main",{children:[(0,t.jsxs)("section",{children:[(0,t.jsx)(l.Z,{size:"66%"}),(0,t.jsx)(o.Z,{})]}),(0,t.jsxs)("h3",{children:["\uc120\ud638\ud558\ub294 \ud3ec\uc9c0\uc158\uc744",(0,t.jsx)("br",{}),"\uc120\ud0dd\ud574\uc8fc\uc138\uc694"]}),(0,t.jsx)("p",{children:"1\uac1c\uc758 \ud3ec\uc9c0\uc158\ub9cc \uc120\ud0dd \uac00\ub2a5\ud569\ub2c8\ub2e4."}),(0,t.jsxs)("div",{className:d,children:[(0,t.jsx)(a.Z,{position:!0,onClick:function(){return m("fwd")},active:"fwd"===i,children:"\uacf5\uaca9\uc218"}),(0,t.jsx)(a.Z,{position:!0,onClick:function(){return m("mf")},active:"mf"===i,children:"\ubbf8\ub4dc\ud544\ub354"}),(0,t.jsx)(a.Z,{position:!0,onClick:function(){return m("df")},active:"df"===i,children:"\uc218\ube44\uc218"}),(0,t.jsx)(a.Z,{position:!0,onClick:function(){return m("gk")},active:"gk"===i,children:"\uace8\ud0a4\ud37c"})]}),(0,t.jsx)(s.Z,{url:"/register/contact",bigRound:!0,nickname:n.query.nickname,preferedPosition:i,children:"\ub2e4\uc74c"})]})})}},2910:function(n,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register/position",function(){return i(6581)}])},8715:function(n){n.exports={round:"RouterButton_round__1FSZ4",login:"RouterButton_login__BwO8W",normal:"RouterButton_normal__3XXZu",shares:"RouterButton_shares__q3kSL"}},4693:function(n){n.exports={back:"Back_back__irHIv"}},9992:function(n){n.exports={progressbar:"Progressbar_progressbar__18qY0",percent:"Progressbar_percent__2Gnqg"}},3225:function(n){n.exports={normal:"SelectButton_normal__3JeJb",select:"SelectButton_select__3V6Gl",stadiumNormal:"SelectButton_stadiumNormal__3OD26",stadiumSelect:"SelectButton_stadiumSelect__3OzIm",timeNormal:"SelectButton_timeNormal__26QCU",timeSelect:"SelectButton_timeSelect__2owji"}},5745:function(n){n.exports={selectBox:"Position_selectBox__QkOLz"}}},function(n){n.O(0,[9774,2888,179],(function(){return e=2910,n(n.s=e);var e}));var e=n.O();_N_E=e}]);