(this["webpackJsonpdisplay-github-issues"]=this["webpackJsonpdisplay-github-issues"]||[]).push([[0],[,,function(e,t,n){e.exports={SideBar:"SideBar_SideBar__3ONzh",LabelContainer:"SideBar_LabelContainer__1UWH9"}},function(e,t,n){e.exports={RepoLabels:"RepoLabels_RepoLabels__2Mp-z",LabelWrapper:"RepoLabels_LabelWrapper__2GuKO"}},,,function(e,t,n){e.exports={pageWrapper:"App_pageWrapper__1Jej4"}},function(e,t,n){e.exports={issuePanel:"IssuePanel_issuePanel__3udtA"}},function(e,t,n){e.exports={IssueCard:"IssueCard_IssueCard__1qrDe"}},,,function(e,t,n){e.exports={MainContent:"MainContent_MainContent__1Rnt5"}},function(e,t,n){e.exports={issueNumber:"IssueNumber_issueNumber__2T69T"}},function(e,t,n){e.exports={label:"Label_label__ZE9FH"}},,function(e,t,n){e.exports={SidePanel:"SidePanel_SidePanel__3GxDG"}},function(e,t,n){e.exports={Searchbar:"Searchbar_Searchbar__1plLs"}},function(e,t,n){e.exports=n(23)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),o=n.n(c),l=(n(22),n(1)),s=n(6),u=n.n(s),i=n(7),m=n.n(i),b=n(8),p=n.n(b),f=n(9),h=n(11),d=n.n(h),E=function(e){var t=e.title,n=e.body;return r.a.createElement("div",{className:d.a.MainContent},r.a.createElement("h3",null,t),r.a.createElement(f.a,null,n))},_=n(2),v=n.n(_),N=n(12),g=n.n(N),L=function(e){var t=e.issueNumber;return r.a.createElement("div",{className:g.a.issueNumber},t)},S=n(13),y=n.n(S),j=n(14),F=function(e){return j.contrast(e,"#FFFFFF")>4.5?"#FFFFFF":"#000000"},w=function(e){var t=e.labelName,n=e.color;return r.a.createElement("div",{className:y.a.label,style:{background:"#".concat(n),color:F("#".concat(n))}},t)},x=function(e){var t=e.number,n=e.labels;return r.a.createElement("aside",{className:v.a.SideBar},r.a.createElement(L,{issueNumber:t}),r.a.createElement("div",{className:v.a.LabelContainer},n.map((function(e,t){return r.a.createElement(w,{key:t,labelName:e.name,color:e.color})}))))},O=function(e){var t=e.title,n=e.body,a=e.number,c=e.labels;return r.a.createElement("article",{className:p.a.IssueCard},r.a.createElement(x,{labels:c,number:a}),r.a.createElement(E,{title:t,body:n}))},R=function(e){var t=e.issues;return r.a.createElement("section",{className:m.a.IssuePanel},t.map((function(e,t){return r.a.createElement(O,{title:e.title,body:e.body,number:e.number,labels:e.labels,key:t})})))},C=n(15),k=n.n(C),I=n(3),W=n.n(I),P=function(e){var t=e.repoLabels;return r.a.createElement("div",{className:W.a.RepoLabels},r.a.createElement("h3",null,"Repo Labels"),r.a.createElement("div",{className:W.a.LabelWrapper},t.map((function(e,t){return r.a.createElement(w,{color:e.color,labelName:e.name,key:t})}))))},B=n(16),M=n.n(B),G=function(e){var t=e.fetchRepo;return r.a.createElement("input",{onKeyDown:function(e){"Enter"===e.key&&t(e.target.value)},className:M.a.Searchbar,placeholder:"Enter user/repo"})},D=function(e){e.repo;var t=e.repoLabels,n=e.fetchRepo;return r.a.createElement("section",{className:k.a.SidePanel},r.a.createElement("h1",null,"Github Issue Manager"),r.a.createElement(G,{fetchRepo:n}),r.a.createElement(P,{repoLabels:t}))},J=function(){var e=Object(a.useState)(["niallpaterson/gh-issue-manager"]),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)([]),s=Object(l.a)(o,2),i=s[0],m=s[1],b=Object(a.useState)([]),p=Object(l.a)(b,2),f=p[0],h=p[1],d=Object(a.useState)(!1),E=Object(l.a)(d,2),_=E[0],v=E[1],N=function(e){return e.map((function(e){return{name:e.name,color:e.color}}))},g=function(e){fetch("https://api.github.com/repos/".concat(e,"/issues")).then((function(e){return e.json()})).then((function(e){return h(e.map((function(e){return{title:e.title,number:e.number,labels:N(e.labels),body:e.body}})))})).catch((function(e){if(e)throw e}))};Object(a.useEffect)((function(){_||g(n)}),[n]),Object(a.useEffect)((function(){_||function(e){fetch("https://api.github.com/repos/".concat(e,"/labels")).then((function(e){return e.json()})).then((function(e){return m(N(e))})).catch((function(e){if(e)throw e}))}(n)}),[n]);return r.a.createElement("div",{className:u.a.pageWrapper},r.a.createElement(D,{fetchRepo:function(e){fetch("https://api.github.com/repos/".concat(e,"/issues")).then((function(t){200===t.status?(c(e),v(!1)):v(!0)})).catch((function(e){if(e)throw e}))},repo:n,repoLabels:i}),r.a.createElement("main",null,r.a.createElement("h2",null,_?"404: Repo not found":"".concat(n)),_?r.a.createElement("div",null):r.a.createElement(R,{issues:f})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[17,1,2]]]);
//# sourceMappingURL=main.51af1285.chunk.js.map