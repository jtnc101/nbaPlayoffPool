(this["webpackJsonpbb-pool"]=this["webpackJsonpbb-pool"]||[]).push([[3],{24:function(e,a,t){},34:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var s=t(1),n=t.n(s),l=t(18),i=t.n(l),c=(t(34),t(9)),r=t(5),o=(t(24),t(2)),p=t.n(o),b=t(3),j=function(e){return{type:"SET_PLAYERS_LIST",payload:e}},m=t(6),u=t(14),d=t(0),y=function(){var e=Object(u.b)().db,a=Object(m.b)(),t=Object(s.useState)(""),n=Object(r.a)(t,2),l=n[0],i=n[1],c=Object(m.c)((function(e){return e.allPlayersPicked})),o=function(){var t=Object(b.a)(p.a.mark((function t(s){var n,i;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!c.includes(l)){t.next=3;break}return alert("player already picked. Try again"),t.abrupt("return",!1);case 3:return t.next=5,e("NBA PLAYERS STATS").return().where({name:l}).one();case 5:if(n=t.sent,console.log(n),0!==Object.keys(n).length){t.next=10;break}return alert("no such player exists. Enter first and last name."),t.abrupt("return",!1);case 10:if(""!==(i=s.target).previousSibling.previousSibling.value){t.next=13;break}return t.abrupt("return",!1);case 13:i.style.display="none",i.nextSibling.style.display="inline-block",a({type:"ADD",payload:l}),i.previousSibling.innerHTML=l,i.previousSibling.style.display="inline-block",i.previousSibling.previousSibling.style.display="none",i.parentElement.nextSibling.innerHTML=n.team;case 20:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsxs)("tr",{className:"player-picked-row",children:[Object(d.jsxs)("td",{className:"player-picked-name player-picked-data",children:[Object(d.jsx)("input",{type:"txt",placeholder:"player name",value:l,onChange:function(e){i(e.target.value)},className:"player-picked-input"}),Object(d.jsx)("span",{className:"player-name-holder"}),Object(d.jsx)("i",{className:"fas fa-plus-square",onClick:o}),Object(d.jsx)("i",{class:"fas fa-edit",onClick:function(e){var t=e.target,s=t.previousSibling.previousSibling.innerHTML;t.previousSibling.style.display="inline-block",t.style.display="none",t.previousSibling.previousSibling.style.display="none",t.previousSibling.previousSibling.previousSibling.style.display="inline-block",a(function(e){return{type:"MINUS",payload:e}}(s)),t.parentElement.nextSibling.innerHTML=""}})]}),Object(d.jsx)("td",{className:"player-picked-team player-picked-data"}),Object(d.jsx)("td",{className:"player-picked-points player-picked-data",children:"0"}),Object(d.jsxs)("td",{className:"player-picked-bid player-picked-data",children:[Object(d.jsx)("input",{type:"txt",placeholder:"0",className:"bid-input"}),Object(d.jsx)("span",{className:"bid-holder"}),Object(d.jsx)("i",{className:"fas fa-plus-square",onClick:function(e){var a=e.target;a.style.display="none",a.nextSibling.style.display="inline-block",a.previousSibling.style.display="inline-block",a.previousSibling.innerHTML=a.previousSibling.previousSibling.value,a.previousSibling.previousSibling.style.display="none"}}),Object(d.jsx)("i",{class:"fas fa-edit",onClick:function(e){var a=e.target;a.style.display="none",a.previousSibling.style.display="inline-block",a.previousSibling.previousSibling.style.display="none",a.previousSibling.previousSibling.previousSibling.style.display="inline-block"}})]})]})},O=function(){var e=new Array(8).fill({}),a=Object(s.useState)(""),t=Object(r.a)(a,2),n=t[0],l=t[1];return Object(d.jsxs)("table",{className:"team",children:[Object(d.jsx)("tr",{className:"team-name-row",children:Object(d.jsxs)("th",{colspan:"4",className:"team-name-header",children:[Object(d.jsx)("input",{type:"txt",placeholder:"Team Name",className:"team-name-value",onChange:function(e){l(e.target.value)},value:n}),Object(d.jsx)("span",{className:"team-name-holder"}),Object(d.jsx)("i",{className:"fas fa-plus-square",onClick:function(e){var a=e.target;if(""===n)return!1;a.nextSibling.style.display="inline-block",a.style.display="none",a.previousSibling.previousSibling.style.display="none",a.previousSibling.style.display="inline-block",a.previousSibling.innerHTML=n}}),Object(d.jsx)("i",{class:"fas fa-edit",onClick:function(e){var a=e.target;a.style.display="none",a.previousSibling.style.display="inline-block",a.previousSibling.previousSibling.style.display="none",a.previousSibling.previousSibling.previousSibling.style.display="inline-block"}})]})}),Object(d.jsxs)("tr",{className:"title-playerTeamPointsBidRow",children:[Object(d.jsx)("th",{className:"title-player",children:"Player"}),Object(d.jsx)("th",{className:"title-Team",children:"Team"}),Object(d.jsx)("th",{className:"title-Points",children:"Points"}),Object(d.jsx)("th",{className:"title-Bid",children:"Bid"})]}),e.map((function(){return Object(d.jsx)(y,{})}))]})},h=function(){var e=Object(m.b)(),a=function(a){if("injuredPlayer"===a.target.value)return alert("Off season, no injured players."),a.target.checked=!1,!1;var t=document.querySelector(".injured-player").checked,s=document.querySelector(".teamOptions").value,n=document.querySelector(".sortBy").value;e(function(e){return{type:"UPDATE_FILTER",payload:e}}({injuredPlayers:t,teamSelected:s,sortBy:n}))};return Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{for:"injuredPlayer",className:"filter-label",children:"Select injured players"}),Object(d.jsx)("input",{type:"checkbox",value:"injuredPlayer",name:"injuredPlayer",className:"filter-checkbox injured-player",onClick:a}),Object(d.jsx)("label",{for:"teamOptions",className:"filter-label",children:"Select Team: "}),Object(d.jsxs)("select",{name:"teamOptions",className:"teamOptions",onChange:a,children:[Object(d.jsx)("option",{value:"ALL",className:"team-name",children:"ALL"}),Object(d.jsx)("option",{value:"ATL",className:"team-name",children:"Atlanta"}),Object(d.jsx)("option",{value:"BOS",className:"team-name",children:"Boston"}),Object(d.jsx)("option",{value:"BKN",className:"team-name",children:"Brooklyn"}),Object(d.jsx)("option",{value:"CHA",className:"team-name",children:"Charlotte"}),Object(d.jsx)("option",{value:"CHI",className:"team-name",children:"Chicago"}),Object(d.jsx)("option",{value:"CLE",className:"team-name",children:"Cleveland"}),Object(d.jsx)("option",{value:"DET",className:"team-name",children:"Detroit"}),Object(d.jsx)("option",{value:"IND",className:"team-name",children:"Indiana"}),Object(d.jsx)("option",{value:"MIA",className:"team-name",children:"Miami"}),Object(d.jsx)("option",{value:"MIL",className:"team-name",children:"Milwaukee"}),Object(d.jsx)("option",{value:"NYK",className:"team-name",children:"New York"}),Object(d.jsx)("option",{value:"ORL",className:"team-name",children:"Orlando"}),Object(d.jsx)("option",{value:"PHI",className:"team-name",children:"Philadelphia"}),Object(d.jsx)("option",{value:"TOR",className:"team-name",children:"Toronto"}),Object(d.jsx)("option",{value:"WAS",className:"team-name",children:"Washington"}),Object(d.jsx)("br",{}),Object(d.jsx)("option",{value:"blank",className:"team-name"}),Object(d.jsx)("option",{value:"DAL",className:"team-name",children:"Dallas"}),Object(d.jsx)("option",{value:"DEN",className:"team-name",children:"Denver"}),Object(d.jsx)("option",{value:"GSW",className:"team-name",children:"Golden State"}),Object(d.jsx)("option",{value:"HOU",className:"team-name",children:"Houston"}),Object(d.jsx)("option",{value:"LAC",className:"team-name",children:"LA Clippers"}),Object(d.jsx)("option",{value:"LAL",className:"team-name",children:"LA Lakers"}),Object(d.jsx)("option",{value:"MEM",className:"team-name",children:"Memphis"}),Object(d.jsx)("option",{value:"MIN",className:"team-name",children:"Minnesota"}),Object(d.jsx)("option",{value:"NOP",className:"team-name",children:"New Orleans"}),Object(d.jsx)("option",{value:"OKC",className:"team-name",children:"Oklahoma City"}),Object(d.jsx)("option",{value:"PHX",className:"team-name",children:"Phoenix"}),Object(d.jsx)("option",{value:"POR",className:"team-name",children:"Portland"}),Object(d.jsx)("option",{value:"SAC",className:"team-name",children:"Sacramento"}),Object(d.jsx)("option",{value:"SAS",className:"team-name",children:"San Antonio"}),Object(d.jsx)("option",{value:"UTA",className:"team-name",children:"Utah"})]}),Object(d.jsx)("label",{for:"sortBy",className:"sort-label",children:"Sort by: "}),Object(d.jsxs)("select",{name:"sortBy",className:"sortBy",onChange:a,children:[Object(d.jsx)("option",{value:"blank",className:"sort-option"}),Object(d.jsx)("option",{value:"sortByName",className:"sort-option",children:"name"}),Object(d.jsx)("option",{value:"sortByPoints",className:"sort-option",children:"points"})]})]})},x=function(e){var a=e.name,t=e.team,s=e.points,n=e.games_played,l=e.rebounds,i=e.assists,c=e.steals,r=e.blocks;return Object(d.jsxs)("div",{className:"playerstats-container",children:[Object(d.jsx)("span",{className:"playerstats-element",children:a}),Object(d.jsx)("span",{className:"playerstats-element",children:t}),Object(d.jsx)("span",{className:"playerstats-element",children:n}),Object(d.jsx)("span",{className:"playerstats-element",children:s}),Object(d.jsx)("span",{className:"playerstats-element",children:i}),Object(d.jsx)("span",{className:"playerstats-element",children:l}),Object(d.jsx)("span",{className:"playerstats-element",children:c}),Object(d.jsx)("span",{className:"playerstats-element",children:r})]})},v=function(){var e=Object(u.b)(),a=e.Frame,t=e.sync,n=e.configureFrame,l=e.db,i=Object(s.useState)([]),c=Object(r.a)(i,2),o=(c[0],c[1]),y=Object(s.useState)([]),O=Object(r.a)(y,2),h=O[0],v=O[1],N=Object(m.b)(),f=Object(m.c)((function(e){return e.filterList})),S=function(){var e=Object(b.a)(p.a.mark((function e(){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===f.teamSelected||"blank"===f.teamSelected||void 0===f.teamSelected||"ALL"===f.teamSelected){e.next=12;break}if("sortByName"!==f.sortBy){e.next=7;break}return e.next=4,l("NBA PLAYERS STATS").return().where({team:f.teamSelected}).orderBy({by:"name",sort:"asc"}).all();case 4:a=e.sent,e.next=10;break;case 7:return e.next=9,l("NBA PLAYERS STATS").return().where({team:f.teamSelected}).orderBy({by:"points",sort:"desc"}).all();case 9:a=e.sent;case 10:e.next=21;break;case 12:if("sortByName"!==f.sortBy){e.next=18;break}return e.next=15,l("NBA PLAYERS STATS").return().orderBy({by:"name",sort:"asc"}).all();case 15:a=e.sent,e.next=21;break;case 18:return e.next=20,l("NBA PLAYERS STATS").return().orderBy({by:"points",sort:"desc"}).all();case 20:a=e.sent;case 21:v(a);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(b.a)(p.a.mark((function e(){var s,n,i,c,r,b,m,u,d,y,O,h,x,v,f,g;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l("NBA PLAYERS STATS").return().all();case 2:if(s=e.sent,o(s),N(j(s)),S(),0===Object.keys(s).length){e.next=8;break}return e.abrupt("return");case 8:n=2300,i=493,c=1;case 11:if(!(c<=i)){e.next=40;break}return e.next=14,new Promise((function(e){return setTimeout(e,n)}));case 14:return e.next=16,fetch("https://www.balldontlie.io/api/v1/season_averages?season=2019&player_ids[]=".concat(c));case 16:return r=e.sent,e.next=19,r.json();case 19:if(0!==(b=e.sent).data.length){e.next=22;break}return e.abrupt("continue",37);case 22:return e.next=24,fetch("https://www.balldontlie.io/api/v1/players/".concat(c));case 24:return m=e.sent,e.next=27,m.json();case 27:u=e.sent,d=u.first_name+" "+u.last_name,y=u.team.abbreviation,O=b.data[0].games_played,h=b.data[0].pts,x=b.data[0].reb,v=b.data[0].ast,f=b.data[0].stl,g=b.data[0].blk,a().push({Name:d,"Games played":O,Points:h,Rebounds:x,Assists:v,Steals:f,Blocks:g,Team:y});case 37:c++,e.next=11;break;case 40:t();case 41:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){n({limit:400,offset:0}),t(),g()}),[]),Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{className:"filter-button",onClick:S,children:"FILTER"}),Object(d.jsxs)("div",{className:"playerstats-title-container",children:[Object(d.jsx)("span",{className:"playerstats-title",children:"Name"}),Object(d.jsx)("span",{className:"playerstats-title",children:"Team"}),Object(d.jsx)("span",{className:"playerstats-title",children:"Games Played"}),Object(d.jsx)("span",{className:"playerstats-title",children:"Points"}),Object(d.jsx)("span",{className:"playerstats-title",children:"Assists"}),Object(d.jsx)("span",{className:"playerstats-title",children:"Rebounds"}),Object(d.jsx)("span",{className:"playerstats-title",children:"Steals"}),Object(d.jsx)("span",{className:"playerstats-title",children:"Blocks"})]}),h.map((function(e){return Object(d.jsx)(x,{name:e.name,team:e.team,points:e.points,games_played:e.games_played,rebounds:e.rebounds,assists:e.assists,steals:e.steals,blocks:e.blocks})}))]})},N={integration:"react-1-WWZ3BnTP72-D6EM7A2kXashcdVvRD197xl-4y6FQOYf1WhPNIuWK05GlaLe0Ph0IcY3eU8qekyor-ltJpS06XXkLdLl9W3Tu6rIOwItfgaj-vyYhRxMJzIub",tt:"tt-1-NXP5HEQAelhU07twbZXhjVmMoYkcmP6Fj5pSK1iqcJw=",version:"2020-11-20"};var f=function(){var e=Object(s.useState)(new Array(4).fill(Object(d.jsx)(O,{}))),a=Object(r.a)(e,2),t=a[0],n=a[1];return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(u.a,{ebconfig:N,children:[Object(d.jsx)("header",{className:"header",children:"NBA Playoff's Pool"}),Object(d.jsx)("div",{className:"team-container",children:t}),Object(d.jsxs)("div",{className:"add-team-container",children:[Object(d.jsx)("span",{className:"add-team-label",children:"ADD TEAM"}),Object(d.jsx)("i",{onClick:function(e){n([].concat(Object(c.a)(t),[Object(d.jsx)(O,{})]))},class:"fas fa-plus-circle"})]}),Object(d.jsxs)("div",{className:"minus-team-container",children:[Object(d.jsx)("span",{className:"minus-team-label",children:"MINUS TEAM"}),Object(d.jsx)("i",{class:"fas fa-minus-circle",onClick:function(e){t.splice(t.length-1,1);for(var a=new Array(t.length).fill({}),s=0;s<a.length;s++)a[s]=t[s];n(a)}})]}),Object(d.jsxs)("div",{className:"filter-container",children:[Object(d.jsx)(h,{}),Object(d.jsx)(v,{})]})]})})},S=t(22),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD":return[].concat(Object(c.a)(e),[a.payload]);case"MINUS":return e.filter((function(e){return e!==a.payload}));default:return e}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_PLAYERS_LIST":return a.payload;default:return e}},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"UPDATE_FILTER":return a.payload;default:return e}},T=Object(S.a)({allPlayersPicked:g,allNBAPlayers:k,filterList:A}),L=Object(S.b)(T,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(m.a,{store:L,children:Object(d.jsx)(f,{})})}),document.getElementById("root"))}},[[43,4,5]]]);
//# sourceMappingURL=main.f9f47807.chunk.js.map