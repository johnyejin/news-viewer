(this["webpackJsonpnews-viewer"]=this["webpackJsonpnews-viewer"]||[]).push([[0],{34:function(e,n,t){e.exports=t(61)},61:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(28),i=t.n(c),o=t(5),l=t(6),u=t(10);function m(){var e=Object(o.a)(["\n  font-size: 1.125rem;\n  cursor: pointer;\n  white-space: pre;\n  text-decoration: none;\n  color: inherit;\n  padding-bottom: 0.25rem;\n\n  &:hover {\n    color: #495057;\n  }\n\n  &.active {\n    font-weight: 600;\n    border-bottom: 2px solid #22b8cf;\n    color: #22b8cf;\n    &:hover {\n      color: #3bc9db;\n    }\n  }\n\n  & + & {\n    margin-left: 1rem;\n  }\n"]);return m=function(){return e},e}function s(){var e=Object(o.a)(["\n  display: flex;\n  padding: 1rem;\n  width: 768px;\n  margin: 0 auto;\n  @media screen and (max-width: 768px) {\n    width: 100%;\n    overflow-x: auto;\n  }\n"]);return s=function(){return e},e}var p=[{name:"all",text:"\uc804\uccb4\ubcf4\uae30"},{name:"business",text:"\ube44\uc988\ub2c8\uc2a4"},{name:"entertainment",text:"\uc5d4\ud130\ud14c\uc778\uba3c\ud2b8"},{name:"health",text:"\uac74\uac15"},{name:"science",text:"\uacfc\ud559"},{name:"sports",text:"\uc2a4\ud3ec\uce20"},{name:"technology",text:"\uae30\uc220"}],f=l.a.div(s()),d=Object(l.a)(u.b)(m()),b=function(){return r.a.createElement(f,null,p.map((function(e){return r.a.createElement(d,{key:e.name,activeClassName:"active",exact:"all"===e.name,to:"all"===e.name?"/":"/".concat(e.name)},e.text)})))},h=t(7);function g(){var e=Object(o.a)(["\n  display: flex;\n  .thumbnail {\n    margin-right: 1rem;\n    img {\n      display: block;\n      width: 160px;\n      height: 100px;\n      object-fit: cover;\n    }\n  }\n  .contents {\n    h2 {\n      margin: 0;\n      a {\n        color: black;\n      }\n    }\n    p {\n      margin: 0;\n      line-height: 1.5;\n      margin-top: 0.5rem;\n      white-space: normal;\n    }\n  }\n  & + & {\n    margin-top: 3rem;\n  }\n"]);return g=function(){return e},e}var v=l.a.div(g()),x=function(e){var n=e.article,t=n.title,a=n.description,c=n.url,i=n.urlToImage;return r.a.createElement(v,null,i&&r.a.createElement("div",{className:"thumbnail"},r.a.createElement("a",{href:c,target:"black",rel:"noopener noreferrer"},r.a.createElement("img",{src:i,alt:"thumbnail"}))),r.a.createElement("div",{className:"contents"},r.a.createElement("h2",null,r.a.createElement("a",{href:c,target:"_black",rel:"noopener noreferrer"},t)),r.a.createElement("p",null,a)))},E=t(32),w=t.n(E),j=t(16),y=t.n(j),O=t(33);function k(){var e=Object(o.a)(["\n  box-sizing: border-box;\n  padding-bottom: 3rem;\n  width: 768px;\n  margin: 0 auto;\n  margin-top: 2rem;\n  @media screen and (max-width: 768px) {\n    width: 100%;\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n"]);return k=function(){return e},e}var N=l.a.div(k()),S=function(e){var n=e.category,t=function(e,n){var t=Object(a.useState)(!1),r=Object(h.a)(t,2),c=r[0],i=r[1],o=Object(a.useState)(null),l=Object(h.a)(o,2),u=l[0],m=l[1],s=Object(a.useState)(null),p=Object(h.a)(s,2),f=p[0],d=p[1];return Object(a.useEffect)((function(){(function(){var n=Object(O.a)(y.a.mark((function n(){var t;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i(!0),n.prev=1,n.next=4,e();case 4:t=n.sent,m(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),d(n.t0);case 11:i(!1);case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(){return n.apply(this,arguments)}})()()}),n),[c,u,f]}((function(){var e="all"===n?"":"&category=".concat(n);return w.a.get("https://newsapi.org/v2/top-headlines?country=kr".concat(e,"&apiKey=9249616b688441e9860ffd82dbbeb607"))}),[n]),c=Object(h.a)(t,3),i=c[0],o=c[1],l=c[2];if(i)return r.a.createElement(N,null,"Loading...");if(!o)return null;if(l)return r.a.createElement(N,null,"\uc5d0\ub7ec \ubc1c\uc0dd!");var u=o.data.articles;return r.a.createElement(N,null,u.map((function(e){return r.a.createElement(x,{key:e.url,article:e})})))},z=function(e){var n=e.match.params.category||"all";return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null),r.a.createElement(S,{category:n}))},I=t(1),J=function(){return r.a.createElement(I.a,{path:"/:category?",component:z})};i.a.render(r.a.createElement(u.a,null,r.a.createElement(J,null)),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.3e6010c1.chunk.js.map