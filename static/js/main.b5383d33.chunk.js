(this["webpackJsonpdisplay-github-issues"]=this["webpackJsonpdisplay-github-issues"]||[]).push([[0],[,,function(e,t,n){e.exports={SideBar:"SideBar_SideBar__3ONzh",LabelContainer:"SideBar_LabelContainer__1UWH9"}},function(e,t,n){e.exports={RepoLabels:"RepoLabels_RepoLabels__2Mp-z",LabelWrapper:"RepoLabels_LabelWrapper__2GuKO"}},,,function(e,t,n){e.exports={pageWrapper:"App_pageWrapper__1Jej4"}},function(e,t,n){e.exports={issuePanel:"IssuePanel_issuePanel__3udtA"}},function(e,t,n){e.exports={IssueCard:"IssueCard_IssueCard__1qrDe"}},,,function(e,t,n){e.exports={MainContent:"MainContent_MainContent__1Rnt5"}},function(e,t,n){e.exports={issueNumber:"IssueNumber_issueNumber__2T69T"}},function(e,t,n){e.exports={label:"Label_label__ZE9FH"}},function(e,t,n){e.exports={SidePanel:"SidePanel_SidePanel__3GxDG"}},function(e,t,n){e.exports={Searchbar:"Searchbar_Searchbar__1plLs"}},function(e,t,n){e.exports=n(22)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),o=n.n(c),s=(n(21),n(1)),l=n(6),u=n.n(l),i=n(7),m=n.n(i),b=n(8),p=n.n(b),f=n(9),h=n(11),d=n.n(h),E=function(e){var t=e.title,n=e.body;return r.a.createElement("div",{className:d.a.MainContent},r.a.createElement("h3",null,t),r.a.createElement(f.a,null,n))},_=n(2),v=n.n(_),N=n(12),g=n.n(N),L=function(e){var t=e.issueNumber;return r.a.createElement("div",{className:g.a.issueNumber},t)},y=n(13),S=n.n(y),w=function(e){var t=e.labelName,n=e.color;return r.a.createElement("div",{className:S.a.label,style:{background:"#".concat(n)}},t)},x=function(e){var t=e.number,n=e.labels;return r.a.createElement("aside",{className:v.a.SideBar},r.a.createElement(L,{issueNumber:t}),r.a.createElement("div",{className:v.a.LabelContainer},n.map((function(e,t){return r.a.createElement(w,{key:t,labelName:e.name,color:e.color})}))))},j=function(e){var t=e.title,n=e.body,a=e.number,c=e.labels;return r.a.createElement("article",{className:p.a.IssueCard},r.a.createElement(x,{labels:c,number:a}),r.a.createElement(E,{title:t,body:n}))},C=function(e){var t=e.issues;return r.a.createElement("section",{className:m.a.IssuePanel},t.map((function(e,t){return r.a.createElement(j,{title:e.title,body:e.body,number:e.number,labels:e.labels,key:t})})))},R=n(14),O=n.n(R),k=n(3),I=n.n(k),W=function(e){var t=e.repoLabels;return r.a.createElement("div",{className:I.a.RepoLabels},r.a.createElement("h3",null,"Repo Labels"),r.a.createElement("div",{className:I.a.LabelWrapper},t.map((function(e,t){return r.a.createElement(w,{color:e.color,labelName:e.name,key:t})}))))},P=n(15),B=n.n(P),M=function(e){var t=e.fetchRepo;return r.a.createElement("input",{onKeyDown:function(e){"Enter"===e.key&&t(e.target.value)},className:B.a.Searchbar,placeholder:"Enter user/repo"})},G=function(e){e.repo;var t=e.repoLabels,n=e.fetchRepo;return r.a.createElement("section",{className:O.a.SidePanel},r.a.createElement("h1",null,"Github Issue Manager"),r.a.createElement(M,{fetchRepo:n}),r.a.createElement(W,{repoLabels:t}))},D=function(){var e=Object(a.useState)(["niallpaterson/gh-issue-manager"]),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)([]),l=Object(s.a)(o,2),i=l[0],m=l[1],b=Object(a.useState)([]),p=Object(s.a)(b,2),f=p[0],h=p[1],d=function(e){return e.map((function(e){return{name:e.name,color:e.color}}))},E=function(e){fetch("https://api.github.com/repos/".concat(e,"/issues")).then((function(e){return e.json()})).then((function(e){return h(e.map((function(e){return{title:e.title,number:e.number,labels:d(e.labels),body:e.body}})))})).catch((function(e){if(e)throw e}))};return Object(a.useEffect)((function(){return E(n)}),[n]),Object(a.useEffect)((function(){return function(e){fetch("https://api.github.com/repos/".concat(e,"/labels")).then((function(e){return e.json()})).then((function(e){return m(d(e))})).catch((function(e){if(e)throw e}))}(n)}),[n]),r.a.createElement("div",{className:u.a.pageWrapper},r.a.createElement(G,{fetchRepo:function(e){fetch("https://api.github.com/repos/".concat(e,"/issues")).then((function(t){200===t.status&&c(e)})).catch((function(e){if(e)throw e}))},repo:n,repoLabels:i}),r.a.createElement("main",null,r.a.createElement("h2",null,"github.com/".concat(n)),r.a.createElement(C,{issues:f})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[16,1,2]]]);
//# sourceMappingURL=main.b5383d33.chunk.js.map