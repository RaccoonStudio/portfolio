(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{159:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(163),o=a(170),l=a(168);t.default=function(){return i.a.createElement(o.a,null,i.a.createElement(l.a,{title:"Talks"}),i.a.createElement("h1",null,"Talks"),i.a.createElement(r.a,{to:"/"},"Go back to the homepage"))}},163:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),i=a.n(n),r=a(4),o=a.n(r),l=a(32),c=a.n(l);a.d(t,"a",function(){return c.a});a(164);var s=i.a.createContext({}),m=function(e){return i.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},164:function(e,t,a){var n;e.exports=(n=a(167))&&n.default||n},165:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAwMCIgaGVpZ2h0PSI1OTAiIHZpZXdCb3g9IjAgMCAxMDAwIDU5MCI+CiAgICA8dGl0bGU+UmFjY29vbiBTdHVkaW88L3RpdGxlPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiAgZD0iTTAgMHYxOTMuNzc3TDE4Mi45NzQgODUuMTA5IDAgMHptODE3LjAyNiA4NS4xMDlMMTAwMCAxOTMuODAzVi4wMjVsLTE4Mi45NzQgODUuMTF2LS4wMjZ6TTUwMCA0NjAuNDI0di0uMTAyLjA1MS0uMDUuMTAxbC0xMDkuMjgyIDY0Ljc2M0w1MDAgNTg5Ljk0OVY1OTB2LS4wNTEuMDUxLS4wNzZsMTA5LjIzLTY0Ljc2M0w1MDAgNDYwLjR2LjAyNXptLS42NDEtMjI4LjI3NGwtMjE5LjIzLTEwMS43MzNMLjM4NCAyOTYuNDUzbDMwMy43NDMgMTgwLjI2NCAxOTUuMjA1LTExNS45MzUgMTk1LjMzNCAxMTUuOTM1TDk5OC40MSAyOTYuNDUzIDcxOC42NjcgMTMwLjM5MiA0OTkuMzU5IDIzMi4xNXpNMzM1LjY5MiAzMzcuODM1TDMwMi4zNiAzMTguMTVsLTMzLjMzMyAxOS42ODQtMzguOTIzLTIyLjk0NyA3Mi4xOC00Mi43NTkgNzIuMTc5IDQyLjc1OS0zOC43NyAyMi45NDd6bTM5My44NDYgMGwtMzMuMzMzLTE5LjY4NC0zMy4zMzMgMTkuNjg0LTM4LjkyMy0yMi45NDcgNzIuMTgtNDIuNzU5IDcyLjE3OSA0Mi43NTktMzguNzcgMjIuOTQ3eiIvPgo8L3N2Zz4K"},166:function(e){e.exports={data:{site:{siteMetadata:{title:"Raccoon Studio",mainNavigation:[{label:"About me",link:"/"},{label:"Talks & Meetups",link:"https://speaking.raccoon.studio/"},{label:"Blog",link:"https://medium.com/@iamhiwelo"}],footerNetworks:[{icon:"twitter",label:"Visit @iamhiwelo on Twitter",target:"https://twitter.com/iamhiwelo"},{icon:"linkedin",label:"Connect with me on Linkedin",target:"https://linkedin.com/in/damiensenger/en"},{icon:"dribbble",label:"Discover my shots on Dribbble",target:"https://dribbble.com/hiwelo"},{icon:"instagram",label:"Take a look at my pictures on Instagram",target:"https://instagram.com/hiwelo"}]}}}}},167:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),i=a.n(n),r=a(4),o=a.n(r),l=a(54),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},168:function(e,t,a){"use strict";var n=a(169),i=a(0),r=a.n(i),o=a(4),l=a.n(o),c=a(177),s=a.n(c);function m(e){var t=e.description,a=e.lang,i=e.meta,o=e.keywords,l=e.title,c=n.data.site,m=t||c.siteMetadata.description;return r.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:l},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:m}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(i)})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=m},169:function(e){e.exports={data:{site:{siteMetadata:{title:"Raccoon Studio",description:"Raccoon is Damien Senger's design studio in Rotterdam (Netherlands) specialised in Web accessibility and inclusive design.",author:"@iamhiwelo"}}}}},170:function(e,t,a){"use strict";var n=a(166),i=a(0),r=a.n(i),o=a(4),l=a.n(o),c=a(163),s=a(172),m=a(174);s.b.add(m.a);var u=a(145),d=a.n(u),M=(a(173),a(146)),p=a.n(M),g=a(171),N=a.n(g),T=function(e){var t=e.currentTarget;switch(t.hasAttribute("aria-expanded")){case!0:!function(e){e.removeAttribute("aria-expanded")}(t);break;case!1:!function(e){e.setAttribute("aria-expanded",!0),document.getElementById(e.attributes["aria-controls"].value).children[0].focus()}(t)}},y=function(e){var t=e.mainNavigation,a=e.componentId;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:p.a.navigation__button,"aria-haspopup":"true","aria-controls":a+"__navigation",onClick:T},"Menu"),r.a.createElement("nav",{className:p.a.navigation,"aria-label":"Main navigation",id:a+"__navigation"},t.map(function(e,t){return r.a.createElement(c.a,{className:a+"__navItem",to:e.link,key:t},e.label)})))};y.propTypes={mainNavigation:l.a.array,componentId:l.a.string},y.defaultProps={mainNavigation:null,componentId:N()()};var b=y,f=a(165),v=a.n(f),E=function(e){var t=e.siteTitle,a=e.mainNavigation;return r.a.createElement("header",{className:d.a.header},r.a.createElement("div",{className:d.a.header__container},r.a.createElement("div",{className:d.a.header__logo},r.a.createElement("img",{src:v.a,alt:t})),r.a.createElement(b,{mainNavigation:a})))};E.propTypes={siteTitle:l.a.string,mainNavigation:l.a.array},E.defaultProps={siteTitle:"",mainNavigation:null};var h=E,k=a(147),w=a.n(k),A=a(175),I=a(176),L=function(e){var t=e.siteTitle,a=e.networks,n=e.componentId;return r.a.createElement("footer",{className:w.a.footer,id:n},r.a.createElement("div",{className:w.a.footer__container},r.a.createElement("div",{className:w.a.footer__branding},r.a.createElement("img",{className:w.a.footer__logo,src:v.a,alt:t}),r.a.createElement("ul",{className:w.a.footer__networks},a.map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("a",{className:w.a.footer__network,href:e.target,"aria-label":e.label,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(A.a,{icon:["fab",e.icon]})))}))),r.a.createElement("div",{className:w.a.footer__storyContainer},r.a.createElement("h2",{className:w.a.footer__storyTitle},"Let's discuss together?"),r.a.createElement("p",{className:w.a.footer__story},"I love ",r.a.createElement("em",null,"rooibos tea"),", ",r.a.createElement("em",null,"oat-milk latte"),","," ",r.a.createElement("em",{lang:"sv"},"kanelbullar")," and discussing"," ",r.a.createElement("em",null,"how to make the Web a better place"),"."),r.a.createElement("p",{className:w.a.footer__story},"So, whether you are ",r.a.createElement("em",null,"a conference or meetup organiser"),","," ",r.a.createElement("em",null,"a project maker")," or just interested by my profile,"," ",r.a.createElement("em",null,"let's have a chat!")),r.a.createElement("p",{className:w.a.footer__contact},r.a.createElement("a",{className:w.a.footer__email,href:"mailto:hello@raccoon.studio"},"hello@raccoon.studio"),r.a.createElement(I.CopyToClipboard,{text:"hello@raccoon.studio"},r.a.createElement("button",{className:w.a.footer__emailCopy},"Copy email"))))))};L.propTypes={siteTitle:l.a.string,networks:l.a.array,componentId:l.a.string},L.defaultProps={siteTitle:"",networks:null,componentId:null};var D=L,j=a(148),z=a.n(j),_=function(e){var t=document.querySelector(e.currentTarget.attributes.href.value);t.setAttribute("tabIndex","-1"),t.addEventListener("blur",function(){t.removeAttribute("tabIndex")}),e.preventDefault(),t.focus()},x=function(){return r.a.createElement("div",{className:z.a.SkipLinks},r.a.createElement("a",{className:z.a.SkipLinks+"__navItem",href:"#main",onClick:_},"Skip to content"))};x.propTypes={},x.defaultProps={};var C=x,O=(a(149),function(e){var t=e.children;return r.a.createElement(c.b,{query:"897743869",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,null),r.a.createElement(h,{siteTitle:e.site.siteMetadata.title,mainNavigation:e.site.siteMetadata.mainNavigation}),r.a.createElement("main",{id:"main"},t),r.a.createElement(D,{siteTitle:e.site.siteMetadata.title,networks:e.site.siteMetadata.footerNetworks}))},data:n})});O.propTypes={children:l.a.node.isRequired};t.a=O}}]);
//# sourceMappingURL=component---src-pages-talks-js-bc69c7c7895cdaaf0794.js.map