(this["webpackJsonpthe-shoppies"]=this["webpackJsonpthe-shoppies"]||[]).push([[0],{27:function(e,t,n){},33:function(e,t,n){e.exports=n(67)},38:function(e,t,n){},40:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(29),o=n.n(i),c=n(9),l=(n(38),function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"The Shoppies"),r.a.createElement("p",null,"Nominate your favourite movies!"))}),s=n(7),u=n(15),m=n.n(u),f=n(30),p=(n(40),function(e){var t=e.setTerm,n=e.term;return r.a.createElement("form",{className:"searchForm"},r.a.createElement("label",{className:"visuallyHidden",htmlFor:"search"},"Search for a movie"),r.a.createElement("input",{type:"text",placeholder:"Search for a movie",id:"search",onChange:function(e){return t(e.target.value)},value:n}))}),E=n(31),d=n.n(E),v=(n(58),function(e){var t=e.setuserNominations,n=e.userNominations,i=e.setIsConfirmed,o=e.nominationsList,l=Object(a.useState)(""),u=Object(c.a)(l,2),E=u[0],v=u[1],h=Object(a.useState)([]),N=Object(c.a)(h,2),b=N[0],O=N[1];Object(a.useEffect)((function(){var e=function(){var e=Object(f.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("http://www.omdbapi.com/?apikey=".concat("c29c57fd"),{params:{s:E,type:"movie",r:"json",page:1}});case 3:t=e.sent,n=[],t.data.Search&&t.data.Search.forEach((function(e){var t={title:e.Title,year:e.Year,id:e.imdbID};n.push(t)})),O(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();if(E){var t=setTimeout((function(){e()}),200);return function(){clearInterval(t)}}}),[E]);var y=function(e){if(n)return n.find((function(t){return t.id===e}))},g=function(e){if(o)return!!o.find((function(t){return t.id===e}))},j=b.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("h3",null,e.title),r.a.createElement("p",null,e.year),r.a.createElement("button",{disabled:!(5!==n.length&&!y(e.id)&&!g(e.id)),type:"button",onClick:function(){return function(e){i(!1),t((function(t){return[].concat(Object(s.a)(t),[e])}))}(e)}},y(e.id)||g(e.id)?"Nominated":"Nominate"))}));return r.a.createElement("div",{className:"resultsContainer"},r.a.createElement(p,{setTerm:v,term:E}),r.a.createElement("h2",null,'Results for "',E,'"'),r.a.createElement("ul",{className:"results"},j))}),h=(n(27),function(e){var t=e.nominationsList,n=function(){if(t)return Object(s.a)(t).map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("h3",null,e.title),r.a.createElement("p",{className:"nomsListYear"},e.year))}))}();return r.a.createElement("section",{className:"wrapper"},r.a.createElement("h2",null,"Nominated Movies"),r.a.createElement("ul",{className:"results userNoms"},n))}),N=function(e){var t=e.userNominations,n=e.setuserNominations,a=e.setIsConfirmed,i=Object(s.a)(t),o=i.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("h3",null,e.title),r.a.createElement("p",null,e.year),r.a.createElement("button",{type:"button",onClick:function(){return function(e){var t=i.findIndex((function(t){return t.id===e}));i.splice(t,1),n(i)}(e.id)}},"X"))}));return r.a.createElement("div",{className:"userNomsContainer"},r.a.createElement("h2",null,"Your Nominations"),t.length?r.a.createElement("ul",{className:"results userNoms"},o):r.a.createElement("p",null,"Start nominating five of your favourite movies!"),r.a.createElement("button",{disabled:5!==t.length,type:"button",className:"confirmBtn",onClick:function(){var e=localStorage.getItem("nominations");if(e){var r=JSON.parse(e);localStorage.setItem("nominations",JSON.stringify([].concat(Object(s.a)(r),Object(s.a)(t))))}else localStorage.setItem("nominations",JSON.stringify(t));n([]),a(!0)}},"Confirm nominations"))},b=(n(59),function(){return r.a.createElement("div",{className:"modal"},r.a.createElement("p",null,"You have nominated five films. Please review and confirm your nominations."))}),O=n(13),y=n(1),g=(n(60),function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],i=t[1],o=Object(a.useState)([]),s=Object(c.a)(o,2),u=s[0],m=s[1],f=Object(a.useState)(!1),p=Object(c.a)(f,2),E=p[0],d=p[1];return Object(a.useEffect)((function(){var e=localStorage.getItem("nominations");m(JSON.parse(e))}),[E]),r.a.createElement("div",null,r.a.createElement(l,null),r.a.createElement("main",null,r.a.createElement(O.a,null,r.a.createElement("nav",{className:"mainNav wrapper"},r.a.createElement(O.b,{to:"/"},"Home"),r.a.createElement(O.b,{to:"/nominations-list"},"Nominated Movies")),r.a.createElement(y.a,{exact:!0,path:"/"},r.a.createElement("section",{className:"wrapper"},r.a.createElement(v,{setuserNominations:i,userNominations:n,setIsConfirmed:d,nominationsList:u}),r.a.createElement(N,{userNominations:n,setuserNominations:i,setIsConfirmed:d}))),r.a.createElement(y.a,{exact:!0,path:"/nominations-list"},r.a.createElement(h,{nominationsList:u}))),5===n.length?r.a.createElement(b,null):null))});n(66);o.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.77d19e24.chunk.js.map