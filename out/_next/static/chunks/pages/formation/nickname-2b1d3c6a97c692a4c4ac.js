(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[774],{9614:function(n,e,i){"use strict";i.d(e,{Z:function(){return d}});var r=i(5893),t=i(1664),a=(i(7294),i(8715)),s=i.n(a),c=s().round,o=s().login,u=s().normal,l=s().shares;function d(n){var e=n.url,i=void 0===e?"":e,a=n.children,s=void 0===a?"":a,d=n.bigRound,f=n.bigSquare,h=n.bigSquareLogin,x=n.onClick,m=n.nickname,_=void 0===m?"":m,p=n.preferedPosition,j=void 0===p?"":p,v=n.share,g=n.teamName,k=void 0===g?"":g,N=n.teamInfo,b=void 0===N?"":N,C=n.location,Z=void 0===C?"":C,w=n.stadium,B=void 0===w?"":w;return d?_?(0,r.jsx)("div",{className:c,onClick:x,children:(0,r.jsx)(t.default,{href:{pathname:i,query:{nickname:_,position:j}},prefetch:!0,as:i,children:(0,r.jsx)("a",{children:s})})}):(0,r.jsx)("div",{className:c,onClick:x,children:(0,r.jsx)(t.default,{href:{pathname:i,query:{teamName:k,teamInfo:b,location:Z,stadium:B}},prefetch:!0,as:i,children:(0,r.jsx)("a",{children:s})})}):f?(0,r.jsx)("div",{className:o,onClick:x,children:(0,r.jsx)(t.default,{href:{pathname:i,query:{nickname:_,position:j}},prefetch:!0,as:i,children:(0,r.jsx)("a",{children:s})})}):h?(0,r.jsx)("div",{className:o,onClick:x,children:(0,r.jsx)("a",{children:s})}):v?(0,r.jsx)("div",{className:l,onClick:x,children:(0,r.jsx)("p",{children:s})}):(0,r.jsx)("div",{className:u,onClick:x,children:(0,r.jsx)("p",{children:s})})}},7222:function(n,e,i){"use strict";i.d(e,{Z:function(){return c}});var r=i(5893),t=(i(7294),i(1163)),a=i(4693),s=i.n(a)().back;function c(){return(0,r.jsx)("button",{type:"button",onClick:function(){return t.default.back()},className:s,children:(0,r.jsx)("p",{children:" < "})})}},5903:function(n,e,i){"use strict";i.d(e,{Z:function(){return o}});var r=i(5893),t=(i(7294),i(9992)),a=i.n(t),s=a().progressbar,c=a().percent;function o(n){var e=n.size;return(0,r.jsx)("div",{className:s,children:(0,r.jsx)("div",{className:c,style:{width:e}})})}},2336:function(n,e,i){"use strict";i.d(e,{p:function(){return r}});i(7294);var r=function(n,e){n.preventDefault();var i=new FileReader,r=new FormData,t=n.target.files[0];i.onloadend=function(){var n=i.result;e(n)},r.append("photoFile",t),i.readAsDataURL(t)}},5714:function(n,e,i){"use strict";i.r(e),i.d(e,{default:function(){return r.Z}});var r=i(1335)},1335:function(n,e,i){"use strict";i.d(e,{Z:function(){return m}});var r=i(5893),t=i(7294),a=i(2336),s=i(9614),c=i(7222),o=i(5903),u=i(7858),l=i.n(u),d=l().filebox,f=l().image,h=l().close,x=l().textBox;function m(){var n=(0,t.useState)(""),e=n[0],i=n[1],u=(0,t.useState)(),l=u[0],m=u[1];return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("main",{children:[(0,r.jsxs)("section",{children:[(0,r.jsx)(o.Z,{size:"33%"}),(0,r.jsx)(c.Z,{})]}),(0,r.jsx)("h3",{children:"\ub2c9\ub124\uc784"}),(0,r.jsx)("input",{className:x,type:"text",placeholder:"\uc0ac\uc6a9\ud558\uc2e4 \ub2c9\ub124\uc784\uc744 \uc801\uc5b4\uc8fc\uc138\uc694",onChange:function(n){return function(n){m(n.target.value)}(n)}}),(0,r.jsx)("h3",{children:"\ud504\ub85c\ud544 \uc0ac\uc9c4\uc744 \uc9c0\uc815\ud574\uc8fc\uc138\uc694."}),""!==e?(0,r.jsxs)("div",{className:f,children:[(0,r.jsx)("img",{src:e}),(0,r.jsx)("span",{className:h,onClick:function(){i("")},children:"x"})]}):(0,r.jsxs)("div",{className:d,children:[(0,r.jsx)("label",{htmlFor:"ex_file",children:"+"}),(0,r.jsx)("input",{type:"file",id:"ex_file",accept:"image/jpg,impge/png,image/jpeg,image/gif",onChange:function(n){return(0,a.p)(n,i)}})]}),(0,r.jsx)(s.Z,{url:"/register/position",bigRound:!0,nickname:l,onClick:function(){(function(n){return/^[\uac00-\ud7a3a-zA-Z0-9]{2,8}$/.test(n)})(l)||alert("\uc601\uc5b4,\ud55c\uae00\uc744 \ud3ec\ud568\ud574 2~8\uc790\ub9ac\uc774\uc5b4\uc57c \ud569\ub2c8\ub2e4")},children:"\ub2e4\uc74c"})]})})}},4238:function(n,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/formation/nickname",function(){return i(5714)}])},8715:function(n){n.exports={round:"RouterButton_round__1FSZ4",login:"RouterButton_login__BwO8W",normal:"RouterButton_normal__3XXZu",shares:"RouterButton_shares__q3kSL"}},4693:function(n){n.exports={back:"Back_back__irHIv"}},9992:function(n){n.exports={progressbar:"Progressbar_progressbar__18qY0",percent:"Progressbar_percent__2Gnqg"}},7858:function(n){n.exports={textBox:"Nickname_textBox__3r87D",filebox:"Nickname_filebox__3DajT",image:"Nickname_image___ZVJl",close:"Nickname_close__1EWKs"}}},function(n){n.O(0,[9774,2888,179],(function(){return e=4238,n(n.s=e);var e}));var e=n.O();_N_E=e}]);