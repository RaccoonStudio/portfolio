(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{160:function(e,t,a){"use strict";a.r(t);a(75),a(55);var n=a(177),r=a.n(n),i=a(0),o=a.n(i),l=a(178),c=a(182),s=a.n(c),m={brand:{raccoon:"#333",raccoonBlue:"#0b486b",raccoonTurquoise:"#3b8686"},generic:{black:"#000",white:"#fff"},gray:{g50:"#fafafa",g100:"#f5f5f5",g200:"#eee",g300:"#ddd",g400:"#ccc",g600:"#888",g800:"#444",g900:"#161616"}};m.semantic={inverted:m.generic.white};var u=m,d={values:{unit:".1rem",double:".2rem",triple:".3rem",demi:".4rem",base:".8rem",decimal:"1rem",small:"1.2rem",medium:"1.6rem",large:"2.4rem",extraLarge:"3.2rem",full:"4rem"},blocks:{tablet:"85%",laptop:"1024px",desktop:"128px"},media:{tablet:"640px",laptop:"1024px",desktop:"1280px"}},g=d;function p(){var e=r()(["\n  ",";\n  z-index: 0;\n\n  @media (min-width: ",") {\n    padding-left: 160px;\n    padding-right: 160px;\n  }\n"]);return p=function(){return e},e}function f(){var e=r()(["\n  display: flex;\n  margin: 0 auto;\n  padding: 0;\n  width: 85%;\n  background: ",";\n  z-index: -3;\n\n  @media (min-width: ",") {\n    width: 1024px;\n  }\n\n  @media (min-width: ",") {\n    width: 1280px;\n  }\n"]);return f=function(){return e},e}var M={};M.default=Object(l.a)(f(),u.gray.g50,g.media.laptop,g.media.desktop),M.narrow=Object(l.a)(p(),M.default,g.media.desktop);var b=M,v=a(169),h=a(167);function y(){var e=r()(["\n  margin-left: ",";\n"]);return y=function(){return e},e}function N(){var e=r()(["\n  &:not(:first-child) {\n    margin-left: ",';\n\n    &::before {\n      content: "•";\n      padding-right: ',";\n      color: ",";\n    }\n  }\n"]);return N=function(){return e},e}function T(){var e=r()(["\n  display: flex;\n  justify-content: center;\n  margin-top: 0;\n  color: ",";\n\n  @media (min-width: ",") {\n    justify-content: center;\n  }\n"]);return T=function(){return e},e}function w(){var e=r()(["\n  margin-bottom: 0.3em;\n\n  @media (min-width: ",") {\n    font-size: 4.8rem;\n    font-weight: 100;\n    text-align: center;\n  }\n"]);return w=function(){return e},e}function k(){var e=r()([""]);return k=function(){return e},e}function E(){var e=r()(["\n  ","\n  flex-direction: column;\n\n  @media (min-width: ",") {\n    padding-top: ",";\n    padding-bottom: ",";\n  }\n"]);return E=function(){return e},e}a.d(t,"default",function(){return _}),a.d(t,"pageQuery",function(){return z});var L=l.b.article(E(),b.narrow,g.media.desktop,g.values.extraLarge,g.values.extraLarge),x=l.b.header(k()),I=l.b.h1(w(),g.media.desktop),A=l.b.dl(T(),u.gray.g800,g.media.desktop),D=l.b.dt(N(),g.values.base,g.values.base,u.brand.raccoonBlue),j=l.b.dd(y(),g.values.demi);function _(e){var t=e.data.markdownRemark,a=t.frontmatter,n=t.html;return o.a.createElement(v.a,{mainClass:"blog"},o.a.createElement(h.a,{title:a.title,keywords:a.tags}),o.a.createElement(L,null,o.a.createElement(x,null,o.a.createElement(I,{children:a.title}),o.a.createElement(A,null,o.a.createElement(D,{children:"Posted on"}),o.a.createElement(j,null,o.a.createElement("time",{pubdate:"pubdate",datetime:s()(a.date).format("YYYY-MM-DD"),children:a.date})),o.a.createElement(D,{children:"Writted by"}),o.a.createElement(j,{children:"Damien Senger"}))),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:n}})))}var z="2147736980"},162:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(32),c=a.n(l);a.d(t,"a",function(){return c.a});a(163);var s=r.a.createContext({}),m=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},163:function(e,t,a){var n;e.exports=(n=a(166))&&n.default||n},164:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAwMCIgaGVpZ2h0PSI1OTAiIHZpZXdCb3g9IjAgMCAxMDAwIDU5MCI+CiAgICA8dGl0bGU+UmFjY29vbiBTdHVkaW88L3RpdGxlPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiAgZD0iTTAgMHYxOTMuNzc3TDE4Mi45NzQgODUuMTA5IDAgMHptODE3LjAyNiA4NS4xMDlMMTAwMCAxOTMuODAzVi4wMjVsLTE4Mi45NzQgODUuMTF2LS4wMjZ6TTUwMCA0NjAuNDI0di0uMTAyLjA1MS0uMDUuMTAxbC0xMDkuMjgyIDY0Ljc2M0w1MDAgNTg5Ljk0OVY1OTB2LS4wNTEuMDUxLS4wNzZsMTA5LjIzLTY0Ljc2M0w1MDAgNDYwLjR2LjAyNXptLS42NDEtMjI4LjI3NGwtMjE5LjIzLTEwMS43MzNMLjM4NCAyOTYuNDUzbDMwMy43NDMgMTgwLjI2NCAxOTUuMjA1LTExNS45MzUgMTk1LjMzNCAxMTUuOTM1TDk5OC40MSAyOTYuNDUzIDcxOC42NjcgMTMwLjM5MiA0OTkuMzU5IDIzMi4xNXpNMzM1LjY5MiAzMzcuODM1TDMwMi4zNiAzMTguMTVsLTMzLjMzMyAxOS42ODQtMzguOTIzLTIyLjk0NyA3Mi4xOC00Mi43NTkgNzIuMTc5IDQyLjc1OS0zOC43NyAyMi45NDd6bTM5My44NDYgMGwtMzMuMzMzLTE5LjY4NC0zMy4zMzMgMTkuNjg0LTM4LjkyMy0yMi45NDcgNzIuMTgtNDIuNzU5IDcyLjE3OSA0Mi43NTktMzguNzcgMjIuOTQ3eiIvPgo8L3N2Zz4K"},165:function(e){e.exports={data:{site:{siteMetadata:{title:"Raccoon Studio",mainNavigation:[{label:"About me",link:"/"},{label:"Talks & Meetups",link:"https://speaking.raccoon.studio/"},{label:"Blog",link:"https://medium.com/@iamhiwelo"}],footerNetworks:[{icon:"twitter",label:"Visit @iamhiwelo on Twitter",target:"https://twitter.com/iamhiwelo"},{icon:"linkedin",label:"Connect with me on Linkedin",target:"https://linkedin.com/in/damiensenger/en"},{icon:"dribbble",label:"Discover my shots on Dribbble",target:"https://dribbble.com/hiwelo"},{icon:"instagram",label:"Take a look at my pictures on Instagram",target:"https://instagram.com/hiwelo"}]}}}}},166:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(54),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},167:function(e,t,a){"use strict";var n=a(168),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(176),s=a.n(c);function m(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,l=e.title,c=n.data.site,m=t||c.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:l},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:m}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=m},168:function(e){e.exports={data:{site:{siteMetadata:{title:"Raccoon Studio",description:"Raccoon is Damien Senger's design studio in Rotterdam (Netherlands) specialised in Web accessibility and inclusive design.",author:"@iamhiwelo"}}}}},169:function(e,t,a){"use strict";var n=a(165),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(162),s=a(145),m=a.n(s),u=(a(171),a(73),a(146)),d=a.n(u),g=a(170),p=a.n(g),f=function(e){return e.match(/^(?:f|ht)tps?:\/\//i)},M=function(e){var t=e.currentTarget;switch(t.hasAttribute("aria-expanded")){case!0:!function(e){e.removeAttribute("aria-expanded")}(t);break;case!1:!function(e){e.setAttribute("aria-expanded",!0),document.getElementById(e.attributes["aria-controls"].value).children[0].focus()}(t)}},b=function(e){var t=e.mainNavigation,a=e.componentId;return i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{className:d.a.navigation__button,"aria-haspopup":"true","aria-controls":a+"__navigation",onClick:M},"Menu"),i.a.createElement("nav",{className:d.a.navigation,"aria-label":"Main navigation",id:a+"__navigation"},t.map(function(e,t){return i.a.createElement(i.a.Fragment,null,f(e.link)&&i.a.createElement("a",{className:a+"__navItem",href:e.link,target:"_blaink",rel:"noopener noreferrer",key:t},e.label),!f(e.link)&&i.a.createElement(c.a,{className:a+"__navItem",to:e.link,key:t},e.label))})))};b.propTypes={mainNavigation:l.a.array,componentId:l.a.string},b.defaultProps={mainNavigation:null,componentId:p()()};var v=b,h=a(164),y=a.n(h),N=function(e){var t=e.siteTitle,a=e.mainNavigation;return i.a.createElement("header",{className:m.a.header},i.a.createElement("div",{className:m.a.header__container},i.a.createElement("div",{className:m.a.header__logo},i.a.createElement("img",{src:y.a,alt:t})),i.a.createElement(v,{mainNavigation:a})))};N.propTypes={siteTitle:l.a.string,mainNavigation:l.a.array},N.defaultProps={siteTitle:"",mainNavigation:null};var T=N,w=a(147),k=a.n(w),E=a(173),L=a(174),x=function(e){var t=e.siteTitle,a=e.networks,n=e.componentId;return i.a.createElement("footer",{className:k.a.footer,id:n},i.a.createElement("div",{className:k.a.footer__container},i.a.createElement("div",{className:k.a.footer__branding},i.a.createElement("img",{className:k.a.footer__logo,src:y.a,alt:t}),i.a.createElement("ul",{className:k.a.footer__networks},a.map(function(e,t){return i.a.createElement("li",{key:t},i.a.createElement("a",{className:k.a.footer__network,href:e.target,"aria-label":e.label,target:"_blank",rel:"noopener noreferrer"},i.a.createElement(E.a,{icon:["fab",e.icon]})))}))),i.a.createElement("div",{className:k.a.footer__storyContainer},i.a.createElement("h2",{className:k.a.footer__storyTitle},"Let's discuss together?"),i.a.createElement("p",{className:k.a.footer__story},"I love ",i.a.createElement("em",null,"rooibos tea"),", ",i.a.createElement("em",null,"oat-milk latte"),","," ",i.a.createElement("em",{lang:"sv"},"kanelbullar")," and discussing"," ",i.a.createElement("em",null,"how to make the Web a better place"),"."),i.a.createElement("p",{className:k.a.footer__story},"So, whether you are ",i.a.createElement("em",null,"a conference or meetup organiser"),","," ",i.a.createElement("em",null,"a project maker")," or just interested by my profile,"," ",i.a.createElement("em",null,"let's have a chat!")),i.a.createElement("p",{className:k.a.footer__contact},i.a.createElement("a",{className:k.a.footer__email,href:"mailto:hello@raccoon.studio"},"hello@raccoon.studio"),i.a.createElement(L.CopyToClipboard,{text:"hello@raccoon.studio"},i.a.createElement("button",{className:k.a.footer__emailCopy},"Copy email"))))))};x.propTypes={siteTitle:l.a.string,networks:l.a.array,componentId:l.a.string},x.defaultProps={siteTitle:"",networks:null,componentId:null};var I=x,A=a(148),D=a.n(A),j=function(e){var t=document.querySelector(e.currentTarget.attributes.href.value);t.setAttribute("tabIndex","-1"),t.addEventListener("blur",function(){t.removeAttribute("tabIndex")}),e.preventDefault(),t.focus()},_=function(){return i.a.createElement("div",{className:D.a.SkipLinks},i.a.createElement("a",{className:D.a.SkipLinks+"__navItem",href:"#main",onClick:j},"Skip to content"))};_.propTypes={},_.defaultProps={};var z=_,C=a(172),O=a(175);C.b.add(O.a);a(149);var S=function(e){var t=e.children,a=e.mainClass;return i.a.createElement(c.b,{query:"897743869",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(z,null),i.a.createElement(T,{siteTitle:e.site.siteMetadata.title,mainNavigation:e.site.siteMetadata.mainNavigation}),i.a.createElement("main",{id:"main",className:a||void 0},t),i.a.createElement(I,{siteTitle:e.site.siteMetadata.title,networks:e.site.siteMetadata.footerNetworks}))},data:n})};S.propTypes={children:l.a.node.isRequired};t.a=S}}]);
//# sourceMappingURL=component---src-templates-blog-template-js-ffd3289356a885767662.js.map