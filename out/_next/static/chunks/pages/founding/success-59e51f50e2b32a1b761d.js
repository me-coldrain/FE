(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7889],{99614:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var i=t(85893),r=t(41664),s=(t(67294),t(78715)),c=t.n(s),o=c().round,a=c().login,u=c().normal,l=c().shares,d=c().editButton;function h(e){var n=e.url,t=void 0===n?"":n,s=e.children,c=void 0===s?"":s,h=e.bigRound,f=e.bigSquare,m=e.bigSquareLogin,p=e.onClick,_=e.nickname,x=void 0===_?"":_,v=e.preferedPosition,b=void 0===v?"":v,g=e.share,j=e.teamName,k=void 0===j?"":j,w=e.teamInfo,T=void 0===w?"":w,N=e.location,B=void 0===N?"":N,y=e.stadium,E=void 0===y?"":y,C=e.mine,L=e.teamImageFile,S=void 0===L?"":L;return h?x?(0,i.jsx)("div",{className:o,onClick:p,children:(0,i.jsx)(r.default,{href:{pathname:t,query:{nickname:x,position:b}},prefetch:!0,as:t,children:(0,i.jsx)("a",{children:c})})}):C?(0,i.jsx)("div",{className:d,onClick:p,children:(0,i.jsx)(r.default,{href:{pathname:t},prefetch:!0,as:t,children:(0,i.jsx)("a",{children:c})})}):(0,i.jsx)("div",{className:o,onClick:p,children:(0,i.jsx)(r.default,{href:{pathname:t,query:{teamName:k,teamInfo:T,url:S,location:B,stadium:E}},prefetch:!0,as:t,children:(0,i.jsx)("a",{children:c})})}):f?(0,i.jsx)("div",{className:a,onClick:p,children:(0,i.jsx)(r.default,{href:{pathname:t,query:{nickname:x,position:b}},prefetch:!0,as:t,children:(0,i.jsx)("a",{children:c})})}):m?(0,i.jsx)("div",{className:a,onClick:p,children:(0,i.jsx)("a",{children:c})}):g?(0,i.jsx)("div",{className:l,onClick:p,children:(0,i.jsx)("p",{children:c})}):(0,i.jsx)("div",{className:u,onClick:p,children:(0,i.jsx)("p",{children:c})})}},93373:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p}});var i=t(85893),r=t(67294),s=t(41664),c=t(99614),o=t(83804),a=t.n(o),u=t(34155),l=a().successBox,d=a().xBox,h=a().buttonLabel,f=a().successMsgBox,m=a().successMsg;function p(){return(0,r.useEffect)((function(){window.Kakao.init(u.env.NEXT_PUBLIC_KAKAO_API_KEY)}),[]),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("main",{className:l,children:[(0,i.jsx)("div",{className:d,children:(0,i.jsx)(s.default,{href:"/",children:(0,i.jsx)("a",{children:"x"})})}),(0,i.jsxs)("div",{className:f,children:[(0,i.jsx)("p",{className:m,children:"\ud300\uc774 \uc0dd\uc131\ub418\uc5c8\uc2b5\ub2c8\ub2e4!"}),(0,i.jsx)("p",{children:"\ud300 \uc0c1\uc138\ud398\uc774\uc9c0\uc5d0\uc11c \uc218\uc815\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:h,children:"\ud300\uc6d0\ub4e4\uc744 \ucd08\ub300\ud574 \ud568\uaed8 \uacbd\uae30 \uc77c\uc815\uc744 \uacf5\uc720\ud574\ubcf4\uc138\uc694!"}),(0,i.jsx)(c.Z,{share:!0,onClick:function(){window.Kakao.Link.sendDefault({objectType:"feed",content:{title:"90\ubd84",description:"\ub204\uad6c\ub098 \uc27d\uace0, \uc7ac\ubc0c\uac8c \uc990\uae30\ub294 \ucd95\uad6c & \ud48b\uc0b4",imageUrl:"https://nasal-peony-253.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa7f6ea46-7362-434a-b493-9943f6181104%2FKakaoTalk_20220726_164634430.png?table=block&id=64b09693-ce5f-45bc-8b3a-14f13f579120&spaceId=b6a4d667-ebe0-4c26-8a4d-3f9c44e19612&width=250&userId=&cache=v2",link:{mobileWebUrl:"https://fe-90bun.vercel.app/",webUrl:"https://fe-90bun.vercel.app/"}},buttons:[{title:"\uc6f9\uc73c\ub85c \uc774\ub3d9",link:{mobileWebUrl:"https://fe-90bun.vercel.app/"}}]})},children:"\ud300\uc6d0\ub4e4\uc5d0\uac8c \uacf5\uc720\ud558\uae30"})]})]})})}},76539:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/founding/success",function(){return t(93373)}])},78715:function(e){e.exports={round:"RouterButton_round__1FSZ4",editButton:"RouterButton_editButton__1JzXE",login:"RouterButton_login__BwO8W",normal:"RouterButton_normal__3XXZu",shares:"RouterButton_shares__q3kSL"}},83804:function(e){e.exports={successBox:"Success_successBox__3EF8_",xBox:"Success_xBox__62HdR",buttonLabel:"Success_buttonLabel__2K87Q",successMsgBox:"Success_successMsgBox__1V7qb",successMsg:"Success_successMsg__2xXkJ",placeholderAnimation:"Success_placeholderAnimation__6ZmNR"}},34155:function(e){var n,t,i=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===r||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:r}catch(e){n=r}try{t="function"===typeof clearTimeout?clearTimeout:s}catch(e){t=s}}();var o,a=[],u=!1,l=-1;function d(){u&&o&&(u=!1,o.length?a=o.concat(a):l=-1,a.length&&h())}function h(){if(!u){var e=c(d);u=!0;for(var n=a.length;n;){for(o=a,a=[];++l<n;)o&&o[l].run();l=-1,n=a.length}o=null,u=!1,function(e){if(t===clearTimeout)return clearTimeout(e);if((t===s||!t)&&clearTimeout)return t=clearTimeout,clearTimeout(e);try{t(e)}catch(n){try{return t.call(null,e)}catch(n){return t.call(this,e)}}}(e)}}function f(e,n){this.fun=e,this.array=n}function m(){}i.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];a.push(new f(e,n)),1!==a.length||u||c(h)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}}},function(e){e.O(0,[9774,2888,179],(function(){return n=76539,e(e.s=n);var n}));var n=e.O();_N_E=n}]);