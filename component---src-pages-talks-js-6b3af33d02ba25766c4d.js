(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{158:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(165),o=a(173),l=a(171);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(l.a,{title:"Talks"}),r.a.createElement("h1",null,"Talks"),r.a.createElement(i.a,{to:"/"},"Go back to the homepage"))}},165:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(32),c=a.n(l);a.d(t,"a",function(){return c.a});a(166);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},166:function(e,t,a){var n;e.exports=(n=a(170))&&n.default||n},167:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAwMCIgaGVpZ2h0PSI1OTAiIHZpZXdCb3g9IjAgMCAxMDAwIDU5MCI+CiAgICA8dGl0bGU+UmFjY29vbiBTdHVkaW88L3RpdGxlPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiAgZD0iTTAgMHYxOTMuNzc3TDE4Mi45NzQgODUuMTA5IDAgMHptODE3LjAyNiA4NS4xMDlMMTAwMCAxOTMuODAzVi4wMjVsLTE4Mi45NzQgODUuMTF2LS4wMjZ6TTUwMCA0NjAuNDI0di0uMTAyLjA1MS0uMDUuMTAxbC0xMDkuMjgyIDY0Ljc2M0w1MDAgNTg5Ljk0OVY1OTB2LS4wNTEuMDUxLS4wNzZsMTA5LjIzLTY0Ljc2M0w1MDAgNDYwLjR2LjAyNXptLS42NDEtMjI4LjI3NGwtMjE5LjIzLTEwMS43MzNMLjM4NCAyOTYuNDUzbDMwMy43NDMgMTgwLjI2NCAxOTUuMjA1LTExNS45MzUgMTk1LjMzNCAxMTUuOTM1TDk5OC40MSAyOTYuNDUzIDcxOC42NjcgMTMwLjM5MiA0OTkuMzU5IDIzMi4xNXpNMzM1LjY5MiAzMzcuODM1TDMwMi4zNiAzMTguMTVsLTMzLjMzMyAxOS42ODQtMzguOTIzLTIyLjk0NyA3Mi4xOC00Mi43NTkgNzIuMTc5IDQyLjc1OS0zOC43NyAyMi45NDd6bTM5My44NDYgMGwtMzMuMzMzLTE5LjY4NC0zMy4zMzMgMTkuNjg0LTM4LjkyMy0yMi45NDcgNzIuMTgtNDIuNzU5IDcyLjE3OSA0Mi43NTktMzguNzcgMjIuOTQ3eiIvPgo8L3N2Zz4K"},168:function(e,t,a){"use strict";a(73),a(54);var n=a(163),r=a.n(n),i=a(164),o={brand:{raccoon:"#333",raccoonBlue:"#0b486b",raccoonTurquoise:"#3b8686"},generic:{black:"#000",white:"#fff"},gray:{g50:"#fafafa",g100:"#f5f5f5",g200:"#eee",g300:"#ddd",g400:"#ccc",g600:"#888",g800:"#444",g900:"#161616"}};o.semantic={inverted:o.generic.white};var l=o,c={values:{unit:".1rem",double:".2rem",triple:".3rem",demi:".4rem",base:".8rem",decimal:"1rem",small:"1.2rem",medium:"1.6rem",large:"2.4rem",extraLarge:"3.2rem",full:"4rem",wide:"4.8rem",wider:"5.6rem"},blocks:{tablet:"85%",laptop:"1024px",desktop:"128px"}};c.margins={paragraph:"2em",pre:c.values.large},c.media={tablet:"640px",laptop:"1024px",desktop:"1280px"};var s=c;function u(){var e=r()(["\n  ",";\n\n  &:active,\n  &:focus {\n    position: fixed;\n    top: 0;\n    left: 0;\n    display: block;\n    height: auto;\n    margin: ",";\n    padding: "," ",";\n    width: auto;\n    background: ",";\n    color: ",";\n    clip: auto;\n    outline-offset: initial;\n    overflow: visible;\n    transition: none;\n    white-space: normal;\n    z-index: 50;\n  }\n"]);return u=function(){return e},e}function d(){var e=r()(["\n  position: absolute;\n  height: 1px;\n  padding: 0;\n  width: 1px;\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  overflow: hidden;\n  white-space: nowrap;\n"]);return d=function(){return e},e}function m(){var e=r()(["\n  &:active,\n  &:focus {\n    outline: 0.2rem dashed ",";\n    outline-offset: ",";\n  }\n"]);return m=function(){return e},e}function p(){var e=r()(["\n  &:active,\n  &:focus {\n    outline: 0.2rem dashed ",";\n    outline-offset: ",";\n  }\n"]);return p=function(){return e},e}var g={};g.outline=Object(i.a)(p(),l.brand.raccoon,s.values.demi),g.outlineInverted=Object(i.a)(m(),l.semantic.inverted,s.values.demi),g.srOnly=Object(i.a)(d()),g.srOnlyFocusable=Object(i.a)(u(),g.outlineInverted,s.demi,s.base,s.large,l.brand.raccoon,l.generic.white);var f=g;function M(){var e=r()(["\n  ",";\n  z-index: 0;\n\n  @media (min-width: ",") {\n    padding-left: 80px;\n    padding-right: 80px;\n  }\n\n  @media (min-width: ",") {\n    padding-left: 160px;\n    padding-right: 160px;\n  }\n"]);return M=function(){return e},e}function b(){var e=r()(["\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n  padding: 0;\n  width: 85%;\n  background: ",";\n  z-index: -3;\n\n  @media (min-width: ",") {\n    width: 1024px;\n  }\n\n  @media (min-width: ",") {\n    width: 1280px;\n  }\n"]);return b=function(){return e},e}var v={};v.default=Object(i.a)(b(),l.gray.g50,s.media.laptop,s.media.desktop),v.narrow=Object(i.a)(M(),v.default,s.media.laptop,s.media.desktop);var h=v,w={lineheight:{comfortable:"1.5"},sizes:{defaultSize:"1.6rem",blogContent:"1.8rem",smallContent:"1.4rem"},stack:{defaultStack:"Montserrat, Helvetica, Arial, sans-serif",titleStack:"Playfair Display, Times New Roman, serif"},weights:{hairstyle:100,thin:200,light:300,default:400,bold:600,bolder:700}},y=w;a.d(t,"a",function(){return f}),a.d(t,"b",function(){return l}),a.d(t,"c",function(){return h}),a.d(t,"d",function(){return s}),a.d(t,"e",function(){return y})},169:function(e){e.exports={data:{site:{siteMetadata:{title:"Raccoon Studio",mainNavigation:[{label:"About me",link:"/"},{label:"Talks & Meetups",link:"https://speaking.raccoon.studio/"},{label:"Blog",link:"/blog"}],footerNetworks:[{icon:"twitter",label:"Visit @iamhiwelo on Twitter",target:"https://twitter.com/iamhiwelo"},{icon:"linkedin",label:"Connect with me on Linkedin",target:"https://linkedin.com/in/damiensenger/en"},{icon:"dribbble",label:"Discover my shots on Dribbble",target:"https://dribbble.com/hiwelo"},{icon:"instagram",label:"Take a look at my pictures on Instagram",target:"https://instagram.com/hiwelo"}]}}}}},170:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(55),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},171:function(e,t,a){"use strict";var n=a(172),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(180),s=a.n(c);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,l=e.title,c=n.data.site,u=t||c.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:l},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=u},172:function(e){e.exports={data:{site:{siteMetadata:{title:"Raccoon Studio",description:"Raccoon is Damien Senger's design studio in Rotterdam (Netherlands) specialised in Web accessibility and inclusive design.",author:"@iamhiwelo"}}}}},173:function(e,t,a){"use strict";var n=a(163),r=a.n(n),i=a(169),o=a(0),l=a.n(o),c=a(4),s=a.n(c),u=a(164),d=a(165),m=a(146),p=a.n(m),g=(a(175),a(74),a(147)),f=a.n(g),M=a(174),b=a.n(M),v=function(e){return e.match(/^(?:f|ht)tps?:\/\//i)},h=function(e){var t=e.currentTarget;switch(t.hasAttribute("aria-expanded")){case!0:!function(e){e.removeAttribute("aria-expanded")}(t);break;case!1:!function(e){e.setAttribute("aria-expanded",!0),document.getElementById(e.attributes["aria-controls"].value).children[0].focus()}(t)}},w=function(e){var t=e.mainNavigation,a=e.componentId;return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{className:f.a.navigation__button,"aria-haspopup":"true","aria-controls":a+"__navigation",onClick:h},"Menu"),l.a.createElement("nav",{className:f.a.navigation,"aria-label":"Main navigation",id:a+"__navigation"},t.map(function(e,t){return l.a.createElement(l.a.Fragment,{key:t},v(e.link)&&l.a.createElement("a",{className:a+"__navItem",href:e.link,target:"_blaink",rel:"noopener noreferrer"},e.label),!v(e.link)&&l.a.createElement(d.a,{className:a+"__navItem",to:e.link,key:t},e.label))})))};w.propTypes={mainNavigation:s.a.array,componentId:s.a.string},w.defaultProps={mainNavigation:null,componentId:b()()};var y=w,N=a(167),T=a.n(N),k=function(e){var t=e.siteTitle,a=e.mainNavigation;return l.a.createElement("header",{className:p.a.header},l.a.createElement("div",{className:p.a.header__container},l.a.createElement("div",{className:p.a.header__logo},l.a.createElement("img",{src:T.a,alt:t})),l.a.createElement(y,{mainNavigation:a})))};k.propTypes={siteTitle:s.a.string,mainNavigation:s.a.array},k.defaultProps={siteTitle:"",mainNavigation:null};var E=k,x=a(148),I=a.n(x),A=a(177),j=a(178),L=function(e){var t=e.siteTitle,a=e.networks,n=e.componentId;return l.a.createElement("footer",{className:I.a.footer,id:n},l.a.createElement("div",{className:I.a.footer__container},l.a.createElement("div",{className:I.a.footer__branding},l.a.createElement("img",{className:I.a.footer__logo,src:T.a,alt:t}),l.a.createElement("ul",{className:I.a.footer__networks},a.map(function(e,t){return l.a.createElement("li",{key:t},l.a.createElement("a",{className:I.a.footer__network,href:e.target,"aria-label":e.label,target:"_blank",rel:"noopener noreferrer"},l.a.createElement(A.a,{icon:["fab",e.icon]})))}))),l.a.createElement("div",{className:I.a.footer__storyContainer},l.a.createElement("h2",{className:I.a.footer__storyTitle},"Let's discuss together?"),l.a.createElement("p",{className:I.a.footer__story},"I love ",l.a.createElement("em",null,"rooibos tea"),", ",l.a.createElement("em",null,"oat-milk latte"),","," ",l.a.createElement("em",{lang:"sv"},"kanelbullar")," and discussing"," ",l.a.createElement("em",null,"how to make the Web a better place"),"."),l.a.createElement("p",{className:I.a.footer__story},"So, whether you are ",l.a.createElement("em",null,"a conference or meetup organiser"),","," ",l.a.createElement("em",null,"a project maker")," or just interested by my profile,"," ",l.a.createElement("em",null,"let's have a chat!")),l.a.createElement("p",{className:I.a.footer__contact},l.a.createElement("a",{className:I.a.footer__email,href:"mailto:hello@raccoon.studio"},"hello@raccoon.studio"),l.a.createElement(j.CopyToClipboard,{text:"hello@raccoon.studio"},l.a.createElement("button",{className:I.a.footer__emailCopy},"Copy email"))))))};L.propTypes={siteTitle:s.a.string,networks:s.a.array,componentId:s.a.string},L.defaultProps={siteTitle:"",networks:null,componentId:null};var z=L,D=a(149),_=a.n(D),C=function(e){var t=document.querySelector(e.currentTarget.attributes.href.value);t.setAttribute("tabIndex","-1"),t.addEventListener("blur",function(){t.removeAttribute("tabIndex")}),e.preventDefault(),t.focus()},O=function(){return l.a.createElement("div",{className:_.a.SkipLinks},l.a.createElement("a",{className:_.a.SkipLinks+"__navItem",href:"#main",onClick:C},"Skip to content"))};O.propTypes={},O.defaultProps={};var S=O,R=a(168),P=a(176),U=a(179);P.b.add(U.a);a(150);function Z(){var e=r()(["\n  ","\n"]);return Z=function(){return e},e}var q=u.b.main(Z(),function(e){return e.narrowContainer&&R.c.narrow}),Y=function(e){var t=e.children,a=e.mainClass,n=e.narrowContent;return l.a.createElement(d.b,{query:"897743869",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(S,null),l.a.createElement(E,{siteTitle:e.site.siteMetadata.title,mainNavigation:e.site.siteMetadata.mainNavigation}),l.a.createElement(q,{id:"main",className:a||void 0,narrowContainer:n},t),l.a.createElement(z,{siteTitle:e.site.siteMetadata.title,networks:e.site.siteMetadata.footerNetworks}))},data:i})};Y.propTypes={children:s.a.node.isRequired,narrowContent:s.a.bool},Y.defaultProps={narrowContent:!1};t.a=Y}}]);
//# sourceMappingURL=component---src-pages-talks-js-6b3af33d02ba25766c4d.js.map