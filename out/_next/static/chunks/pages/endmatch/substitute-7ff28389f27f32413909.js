(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[981],{12759:function(e,t,n){"use strict";n.d(t,{p:function(){return l},Z:function(){return a}});var i=n(85893),r=(n(67294),n(75972)),o=n.n(r),s=o().profile,u=o().position,c=o().profileSelected;function l(e){return(0,i.jsxs)("div",{className:u,children:["striker"===e.position?(0,i.jsx)("h2",{style:{color:"#F14B3B"},children:"FW"}):"midfielder"===e.position?(0,i.jsx)("h2",{style:{color:"#00c667"},children:"MF"}):"defender"===e.position?(0,i.jsx)("h2",{style:{color:"#5cb1ff"},children:"DF"}):(0,i.jsx)("h2",{style:{color:"#DB9B16"},children:"GK"}),(0,i.jsx)("img",{src:e.src?e.src:"/img/profileImg.png"}),(0,i.jsx)("p",{children:e.nickname})]})}function a(e){var t=e.nickname,n=void 0===t?"\ub2c9\ub124\uc784":t,r=e.src,o=void 0===r?"":r,u=e.selected,l=void 0!==u&&u,a=e.children,p=e.onClick;return(0,i.jsxs)("div",{className:l?c:s,onClick:p,children:[(0,i.jsx)("img",{src:o||"/img/profileImg.png"}),(0,i.jsx)("p",{children:n}),a]})}},41453:function(e,t,n){"use strict";n.d(t,{Vi:function(){return s},DQ:function(){return u},_R:function(){return l},I_:function(){return a}});var i=n(67294),r=n(98702),o=n(95998),s=function(){var e=(0,o.I0)(),t=l(),n=(0,o.v9)((function(e){return e.pages})).pages[t];return(0,i.useEffect)((function(){n||e((0,r.fx)(t))}),[t]),n||{}},u=function(){var e=l(),t=(0,o.v9)((function(e){return e.pages})),n=t.pages[e],i=t.schema[e];return n||i||{}},c=n(11163),l=function(){return(0,c.useRouter)().query.page||"home"},a=function(){var e=(0,o.I0)(),t=(0,o.v9)((function(e){return e.pages})).schema;return(0,i.useEffect)((function(){Object.keys(t).length||e((0,r.J1)())}),[]),t}},42768:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});n(59999);var i=n(85893),r=n(67294),o=n(9008),s=n(41453),u=n(11163),c=n(79311),l=n(12759),a=n(13125),p=n.n(a),d=p().end,f=p().upperBox,x=p().upperBoxTitle,_=p().upperBoxSub,m=p().upperBoxSelect,h=(p().xButton,p().lowerBox),v=p().buttonBox,j=function(e){return e?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("title",{children:e}),(0,i.jsx)("meta",{name:"og:title",content:e})]}):(0,i.jsx)(i.Fragment,{})},B=function(e){return e?(0,i.jsx)("meta",{name:"description",property:"og:description",content:e}):(0,i.jsx)(i.Fragment,{})};function b(){var e=(0,u.useRouter)(),t=e.query,n=(t.teamId,t.matchId,t.teamName,(0,s.DQ)()),a=n.title,p=void 0===a?"":a,b=n.description,g=void 0===b?"":b,S=((0,s.Vi)().content,(0,r.useState)()),N=(S[0],S[1],(0,r.useState)([""])),k=N[0];N[1];return(0,r.useEffect)((function(){}),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.default,{children:[j(p),B(g),(0,i.jsx)("meta",{name:"robots",content:"INDEX,FOLLOW"})]}),(0,i.jsxs)("div",{className:d,children:[(0,i.jsxs)("div",{className:f,children:[(0,i.jsx)("div",{className:x,children:(0,i.jsx)("p",{children:"\uad50\uccb4\uc790 \uba85\ub2e8\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694."})}),(0,i.jsx)("div",{className:_,children:(0,i.jsx)("p",{children:"\uac1c\uc778\uc810\uc218\uac00 \ubd80\uc5ec\ub429\ub2c8\ub2e4."})}),(0,i.jsx)("div",{className:m,children:null===k||void 0===k?void 0:k.map((function(e,t){l.Z}))})]}),(0,i.jsx)("div",{className:h}),(0,i.jsx)("div",{className:v,children:(0,i.jsx)(c.Xp,{content:"\ub2e4\uc74c",handleClick:function(){e.push({pathname:"/endmatch/mvp",query:{substitutes:k}})},activeStyle:!0})})]})]})}},74138:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/endmatch/substitute",function(){return n(42768)}])},75972:function(e){e.exports={profile:"UserProfile_profile__3-y3a",profileSelected:"UserProfile_profileSelected__NIyOk",position:"UserProfile_position__EdrF8",placeholderAnimation:"UserProfile_placeholderAnimation__3kxdW"}},13125:function(e){e.exports={end:"Substitute_end__3F6zW",upperBox:"Substitute_upperBox__2Cwtc",upperBoxTitle:"Substitute_upperBoxTitle__1ih4E",upperBoxSub:"Substitute_upperBoxSub__1Lsp1",upperBoxSelect:"Substitute_upperBoxSelect__XXCmY",xButton:"Substitute_xButton__2VpDp",lowerBox:"Substitute_lowerBox__28CzM",buttonBox:"Substitute_buttonBox__N66Qu",placeholderAnimation:"Substitute_placeholderAnimation__mTcy6"}}},function(e){e.O(0,[9774,2888,179],(function(){return t=74138,e(e.s=t);var t}));var t=e.O();_N_E=t}]);