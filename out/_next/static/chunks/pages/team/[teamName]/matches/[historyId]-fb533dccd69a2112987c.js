(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7613],{12759:function(e,r,s){"use strict";s.d(r,{p:function(){return l},Z:function(){return m}});var i=s(85893),n=(s(67294),s(75972)),t=s.n(n),o=t().profile,c=t().position,a=t().profileSelected;function l(e){return(0,i.jsxs)("div",{className:c,children:["striker"===e.position?(0,i.jsx)("h2",{style:{color:"#F14B3B"},children:"FW"}):"midfielder"===e.position?(0,i.jsx)("h2",{style:{color:"#00c667"},children:"MF"}):"defender"===e.position?(0,i.jsx)("h2",{style:{color:"#5cb1ff"},children:"DF"}):(0,i.jsx)("h2",{style:{color:"#DB9B16"},children:"GK"}),(0,i.jsx)("img",{src:e.src?e.src:"/img/profileImg.png"}),(0,i.jsx)("p",{children:e.nickname})]})}function m(e){var r=e.nickname,s=void 0===r?"\ub2c9\ub124\uc784":r,n=e.src,t=void 0===n?"":n,c=e.selected,l=void 0!==c&&c,m=e.children,d=e.onClick;return(0,i.jsxs)("div",{className:l?a:o,onClick:d,children:[(0,i.jsx)("img",{src:t||"/img/profileImg.png"}),(0,i.jsx)("p",{children:s}),m]})}},72290:function(e,r,s){"use strict";s.r(r),s.d(r,{__N_SSP:function(){return T},default:function(){return S}});var i=s(85893),n=(s(67294),s(67421)),t=s(12759),o=s(6922),c=s.n(o),a=s(51742),l=s.n(a),m=c().matchHistoryContainer,d=c().matchHistoryContainerWin,h=c().matchHistoryContainerLose,u=c().matchHistoryContainerResult,p=c().matchHistoryContainerWinner,f=c().matchHistoryContainerLoser,x=l().scorers,j=l().scorersBox,_=l().scorersWin,N=l().scorersIcon,k=l().scorersLose,b=l().formation,y=l().formationField,v=l().formationStriker,g=l().formationMidFielder,B=l().formationDefender,H=l().formationGoalKeeper,M=l().substitute,F=l().substituteBox;l().horizontalContainer;function C(e){e.query;var r=e.data;return(0,i.jsxs)("main",{children:[(0,i.jsxs)("div",{className:m,style:{marginBottom:0},children:[(0,i.jsxs)("div",{className:d,children:[(0,i.jsx)("div",{className:p,children:(0,i.jsx)("p",{children:"\uc2b9\ub9ac"})}),(0,i.jsx)("p",{children:"\uc2b9\ub9ac"===r.team.record?r.team.teamName:r.opposingTeam.teamName})]}),(0,i.jsxs)("div",{className:u,children:[(0,i.jsx)("p",{children:r.matchDate.split("T")[0]}),(0,i.jsx)("p",{style:{fontWeight:"bold",fontSize:"30px",margin:"0.5rem"},children:"\uc2b9\ub9ac"===r.team.record?"".concat(r.team.score," : ").concat(r.opposingTeam.score," "):"".concat(r.opposingTeam.score," : ").concat(r.team.score)})]}),(0,i.jsxs)("div",{className:h,children:[(0,i.jsx)("div",{className:f,children:(0,i.jsx)("p",{children:"\ud328\ubc30"})}),(0,i.jsx)("p",{children:"\uc2b9\ub9ac"===r.team.record?r.opposingTeam.teamName:r.team.teamName})]})]}),(0,i.jsxs)("div",{className:x,style:{marginBottom:"2rem"},children:[(0,i.jsx)("div",{className:_,children:"\uc2b9\ub9ac"===r.team.record?r.team.scorer.map((function(e,r){return(0,i.jsxs)("div",{className:j,children:[(0,i.jsx)(n.Z,{asset:"Soccer-Ball",className:N}),(0,i.jsx)("p",{children:e})]},"winner-score-".concat(r))})):r.opposingTeam.scorer.map((function(e,r){return(0,i.jsxs)("div",{className:j,children:[(0,i.jsx)(n.Z,{asset:"Soccer-Ball",className:N}),(0,i.jsx)("p",{children:e})]},"winner-score-".concat(r))}))}),0===r.team.score||0===r.opposingTeam.score?(0,i.jsx)(i.Fragment,{}):(0,i.jsx)("div",{className:N,children:(0,i.jsx)(n.Z,{asset:"Down-Arrow"})}),(0,i.jsx)("div",{className:k,children:"\uc2b9\ub9ac"===r.team.record?r.opposingTeam.scorer.map((function(e,r){return(0,i.jsxs)("div",{className:j,children:[(0,i.jsx)(n.Z,{asset:"Soccer-Ball",className:N}),(0,i.jsx)("p",{children:e})]},"loser-score-".concat(r))})):r.team.scorer.map((function(e,r){return(0,i.jsxs)("div",{className:j,children:[(0,i.jsx)(n.Z,{asset:"Soccer-Ball",className:N}),(0,i.jsx)("p",{children:e})]},"loser-score-".concat(r))}))})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{children:"\ud3ec\uba54\uc774\uc158"}),(0,i.jsxs)("div",{className:b,children:[(0,i.jsx)(n.Z,{asset:"Soccer-Field",className:y}),(0,i.jsx)("div",{className:v,children:r.team.fieldMembers.striker.map((function(e,r){return(0,i.jsx)(t.p,{src:e.memberProfileUrl,nickname:e.nickName,position:"striker"},"striker-".concat(r))}))}),(0,i.jsx)("div",{className:g,children:r.team.fieldMembers.midfielder.map((function(e,r){return(0,i.jsx)(t.p,{src:e.memberProfileUrl,nickname:e.nickName,position:"midfielder"},"midfielder-".concat(r))}))}),(0,i.jsx)("div",{className:B,children:r.team.fieldMembers.defender.map((function(e,r){return(0,i.jsx)(t.p,{src:e.memberProfileUrl,nickname:e.nickName,position:"defender"},"defender-".concat(r))}))}),(0,i.jsx)("div",{className:H,children:r.team.fieldMembers.goalkeeper.map((function(e,r){return(0,i.jsx)(t.p,{src:e.memberProfileUrl,nickname:e.nickName,position:"goalkeeper"},"goalkeeper-".concat(r))}))})]}),(0,i.jsxs)("div",{className:F,children:[r.team.substituteMembers.striker.map((function(e,r){return(0,i.jsxs)("div",{className:M,children:[(0,i.jsx)("h3",{style:{color:"#F14B3B"},children:"FW"}),(0,i.jsx)("h3",{children:e.nickName})]},"substitute-striker-".concat(r))})),r.team.substituteMembers.midfielder.map((function(e,r){return(0,i.jsxs)("div",{className:M,children:[(0,i.jsx)("h3",{style:{color:"#F14B3B"},children:"MF"}),(0,i.jsx)("h3",{children:e.nickName})]},"substitute-midfielder-".concat(r))})),r.team.substituteMembers.defender.map((function(e,r){return(0,i.jsxs)("div",{className:M,children:[(0,i.jsx)("h3",{style:{color:"#F14B3B"},children:"DF"}),(0,i.jsx)("h3",{children:e.nickName})]},"substitute-defender-".concat(r))})),r.team.substituteMembers.goalkeeper.map((function(e,r){return(0,i.jsxs)("div",{className:M,children:[(0,i.jsx)("h3",{style:{color:"#F14B3B"},children:"FW"}),(0,i.jsx)("h3",{children:e.nickName})]},"substitute-goalkeeper-".concat(r))}))]})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{children:"\ud3ec\uba54\uc774\uc158"}),(0,i.jsxs)("div",{className:b,children:[(0,i.jsx)(n.Z,{asset:"Soccer-Field",className:y}),(0,i.jsx)("div",{className:v,children:r.opposingTeam.fieldMembers.striker.map((function(e,r){return(0,i.jsx)(t.p,{src:e.memberProfileUrl,nickname:e.nickName,position:"striker"},"striker-".concat(r))}))}),(0,i.jsx)("div",{className:g,children:r.opposingTeam.fieldMembers.midfielder.map((function(e,r){return(0,i.jsx)(t.p,{src:e.memberProfileUrl,nickname:e.nickName,position:"midfielder"},"midfielder-".concat(r))}))}),(0,i.jsx)("div",{className:B,children:r.opposingTeam.fieldMembers.defender.map((function(e,r){return(0,i.jsx)(t.p,{src:e.memberProfileUrl,nickname:e.nickName,position:"defender"},"defender-".concat(r))}))}),(0,i.jsx)("div",{className:H,children:r.opposingTeam.fieldMembers.goalkeeper.map((function(e,r){return(0,i.jsx)(t.p,{src:e.memberProfileUrl,nickname:e.nickName,position:"goalkeeper"},"goalkeeper-".concat(r))}))})]}),(0,i.jsxs)("div",{className:F,children:[r.opposingTeam.substituteMembers.striker.map((function(e,r){return(0,i.jsxs)("div",{className:M,children:[(0,i.jsx)("h3",{style:{color:"#F14B3B"},children:"FW"}),(0,i.jsx)("h3",{children:e.nickName})]},"substitute-striker-".concat(r))})),r.opposingTeam.substituteMembers.midfielder.map((function(e,r){return(0,i.jsxs)("div",{className:M,children:[(0,i.jsx)("h3",{style:{color:"#F14B3B"},children:"MF"}),(0,i.jsx)("h3",{children:e.nickName})]},"substitute-midfielder-".concat(r))})),r.opposingTeam.substituteMembers.defender.map((function(e,r){return(0,i.jsxs)("div",{className:M,children:[(0,i.jsx)("h3",{style:{color:"#F14B3B"},children:"DF"}),(0,i.jsx)("h3",{children:e.nickName})]},"substitute-defender-".concat(r))})),r.opposingTeam.substituteMembers.goalkeeper.map((function(e,r){return(0,i.jsxs)("div",{className:M,children:[(0,i.jsx)("h3",{style:{color:"#F14B3B"},children:"FW"}),(0,i.jsx)("h3",{children:e.nickName})]},"substitute-goalkeeper-".concat(r))}))]})]})]})}var T=!0,S=function(e){var r=e.query,s=e.data;return(0,i.jsx)(C,{query:r,data:s})}},74089:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/team/[teamName]/matches/[historyId]",function(){return s(72290)}])},75972:function(e){e.exports={profile:"UserProfile_profile__3-y3a",profileSelected:"UserProfile_profileSelected__NIyOk",position:"UserProfile_position__EdrF8",placeholderAnimation:"UserProfile_placeholderAnimation__3kxdW"}},6922:function(e){e.exports={container:"Matches_container__3_zwE",matchHistoryContainer:"Matches_matchHistoryContainer__2YaTz",matchHistoryContainerimg:"Matches_matchHistoryContainerimg__2bKXM",matchHistoryContainerWin:"Matches_matchHistoryContainerWin__djhwv",matchHistoryContainerResult:"Matches_matchHistoryContainerResult__3pTUa",matchHistoryContainerLose:"Matches_matchHistoryContainerLose__1hsCy",matchHistoryContainerWinner:"Matches_matchHistoryContainerWinner__33Y8-",matchHistoryContainerLoser:"Matches_matchHistoryContainerLoser__JHe_c"}},51742:function(e){e.exports={scorers:"History_scorers__35BqU",scorersBox:"History_scorersBox__3SbSU",scorersIcon:"History_scorersIcon__1uHzQ",formation:"History_formation__23_2L",formationField:"History_formationField__20xW9",formationStriker:"History_formationStriker__1IIhu",formationMidFielder:"History_formationMidFielder__3dJnu",formationDefender:"History_formationDefender__2ZbUj",formationGoalKeeper:"History_formationGoalKeeper__3Bxk1",substitute:"History_substitute__1nb_S",substituteBox:"History_substituteBox__2Uwsw",horizontalContainer:"History_horizontalContainer__3NgmW"}}},function(e){e.O(0,[9774,2888,179],(function(){return r=74089,e(e.s=r);var r}));var r=e.O();_N_E=r}]);