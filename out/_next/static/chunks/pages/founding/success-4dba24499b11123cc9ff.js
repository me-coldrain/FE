(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7889],{9614:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var r=t(5893),i=t(1664),s=(t(7294),t(8715)),o=t.n(s),c=o().round,u=o().login,a=o().normal,l=o().shares,d=o().editButton;function h(e){var n=e.url,t=void 0===n?"":n,s=e.children,o=void 0===s?"":s,h=e.bigRound,f=e.bigSquare,m=e.bigSquareLogin,_=e.onClick,p=e.nickname,x=void 0===p?"":p,v=e.preferedPosition,w=void 0===v?"":v,g=e.share,j=e.teamName,b=void 0===j?"":j,k=e.teamInfo,N=void 0===k?"":k,T=e.location,B=void 0===T?"":T,y=e.stadium,E=void 0===y?"":y,C=e.mine;return h?x?(0,r.jsx)("div",{className:c,onClick:_,children:(0,r.jsx)(i.default,{href:{pathname:t,query:{nickname:x,position:w}},prefetch:!0,as:t,children:(0,r.jsx)("a",{children:o})})}):C?(0,r.jsx)("div",{className:d,onClick:_,children:(0,r.jsx)(i.default,{href:{pathname:t},prefetch:!0,as:t,children:(0,r.jsx)("a",{children:o})})}):(0,r.jsx)("div",{className:c,onClick:_,children:(0,r.jsx)(i.default,{href:{pathname:t,query:{teamName:b,teamInfo:N,location:B,stadium:E}},prefetch:!0,as:t,children:(0,r.jsx)("a",{children:o})})}):f?(0,r.jsx)("div",{className:u,onClick:_,children:(0,r.jsx)(i.default,{href:{pathname:t,query:{nickname:x,position:w}},prefetch:!0,as:t,children:(0,r.jsx)("a",{children:o})})}):m?(0,r.jsx)("div",{className:u,onClick:_,children:(0,r.jsx)("a",{children:o})}):g?(0,r.jsx)("div",{className:l,onClick:_,children:(0,r.jsx)("p",{children:o})}):(0,r.jsx)("div",{className:a,onClick:_,children:(0,r.jsx)("p",{children:o})})}},3373:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return _}});var r=t(5893),i=t(7294),s=t(1664),o=t(9614),c=t(3804),u=t.n(c),a=t(4155),l=u().successBox,d=u().xBox,h=u().buttonLabel,f=u().successMsgBox,m=u().successMsg;function _(){return(0,i.useEffect)((function(){window.Kakao.init(a.env.NEXT_PUBLIC_KAKAO_API_KEY)}),[]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("main",{className:l,children:[(0,r.jsx)("div",{className:d,children:(0,r.jsx)(s.default,{href:"/",children:(0,r.jsx)("a",{children:"x"})})}),(0,r.jsxs)("div",{className:f,children:[(0,r.jsx)("p",{className:m,children:"\ud300\uc774 \uc0dd\uc131\ub418\uc5c8\uc2b5\ub2c8\ub2e4!"}),(0,r.jsx)("p",{children:"\ud300 \uc0c1\uc138\ud398\uc774\uc9c0\uc5d0\uc11c \uc218\uc815\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:h,children:"\ud300\uc6d0\ub4e4\uc744 \ucd08\ub300\ud574 \ud568\uaed8 \uacbd\uae30 \uc77c\uc815\uc744 \uacf5\uc720\ud574\ubcf4\uc138\uc694!"}),(0,r.jsx)(o.Z,{share:!0,onClick:function(){window.Kakao.Link.sendDefault({objectType:"feed",content:{title:"90\ubd84",description:"\ub204\uad6c\ub098 \uc27d\uace0, \uc7ac\ubc0c\uac8c \uc990\uae30\ub294 \ucd95\uad6c & \ud48b\uc0b4",imageUrl:"/img/MainLogoColor.png",link:{mobileWebUrl:"https://www.dorandorans.com/",webUrl:"https://www.dorandorans.com/"}},buttons:[{title:"\uc6f9\uc73c\ub85c \uc774\ub3d9",link:{mobileWebUrl:"https://www.dorandorans.com/"}}]})},children:"\ud300\uc6d0\ub4e4\uc5d0\uac8c \uacf5\uc720\ud558\uae30"})]})]})})}},6539:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/founding/success",function(){return t(3373)}])},8715:function(e){e.exports={round:"RouterButton_round__1FSZ4",editButton:"RouterButton_editButton__1JzXE",login:"RouterButton_login__BwO8W",normal:"RouterButton_normal__3XXZu",shares:"RouterButton_shares__q3kSL"}},3804:function(e){e.exports={successBox:"Success_successBox__3EF8_",xBox:"Success_xBox__62HdR",buttonLabel:"Success_buttonLabel__2K87Q",successMsgBox:"Success_successMsgBox__1V7qb",successMsg:"Success_successMsg__2xXkJ",placeholderAnimation:"Success_placeholderAnimation__6ZmNR"}},4155:function(e){var n,t,r=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function o(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:i}catch(e){n=i}try{t="function"===typeof clearTimeout?clearTimeout:s}catch(e){t=s}}();var c,u=[],a=!1,l=-1;function d(){a&&c&&(a=!1,c.length?u=c.concat(u):l=-1,u.length&&h())}function h(){if(!a){var e=o(d);a=!0;for(var n=u.length;n;){for(c=u,u=[];++l<n;)c&&c[l].run();l=-1,n=u.length}c=null,a=!1,function(e){if(t===clearTimeout)return clearTimeout(e);if((t===s||!t)&&clearTimeout)return t=clearTimeout,clearTimeout(e);try{t(e)}catch(n){try{return t.call(null,e)}catch(n){return t.call(this,e)}}}(e)}}function f(e,n){this.fun=e,this.array=n}function m(){}r.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];u.push(new f(e,n)),1!==u.length||a||o(h)},f.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},function(e){e.O(0,[9774,2888,179],(function(){return n=6539,e(e.s=n);var n}));var n=e.O();_N_E=n}]);