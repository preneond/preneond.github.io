(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Dtc0:function(e,t,a){"use strict";a.r(t);var n=a("mwIZ"),i=a.n(n),r=a("q1tI"),l=a.n(r),c=a("eNIv"),s=a("6uTu"),m=a("STHm"),o=function(e){var t=e.about;return l.a.createElement(m.a,{title:"About Me"},l.a.createElement("div",{className:"mb-6"},l.a.createElement("p",null,t)))},u=a("Wbzz"),p=a("hbLQ"),d=function(e){var t=e.posts;return l.a.createElement(m.a,{title:"Latest Posts"},t.map((function(e){return l.a.createElement(p.a,{key:e.node.fields.slug,name:e.node.frontmatter.title,description:e.node.frontmatter.description,link:e.node.fields.slug,internal:!0})})),t.length>=5&&l.a.createElement(u.Link,{className:"text-gray-500 text-sm hover:text-black",to:"/blog"},"View all posts →"))},E="mt-2 ml-2 ",f="font-semibold text-gray-900 pb-1",g="text-md text-gray-600 font-light",k=function(e){var t=e.name,a=e.description;return l.a.createElement("div",{className:E},l.a.createElement("p",{className:f},t),l.a.createElement("p",{className:g},a))},h="mb-6",v="font-semibold text-gray-900 pb-1",b="text-sm font-light",x="text-lg text-gray-600 font-light",y="text-sm italic text-gray-500 font-light",N="text-sm text-gray-600 font-light",M=function(e){var t,a,n=e.name,i=e.position,r=e.period,c=e.description,s=e.subitems,m=e.link,o=void 0!==m&&m,p=e.internal;return t=void 0!==p&&p?l.a.createElement(u.Link,{to:o},n):l.a.createElement("a",{href:o},n),null!=s?(a=s.map((function(e){return l.a.createElement(k,{key:e.name,name:e.name,description:e.description})})),a=l.a.createElement("div",{className:b},l.a.createElement("p",null,"• Projects:"),a)):a="",l.a.createElement("div",{className:h},l.a.createElement("h3",{className:v+" "+(o?"hover:underline hover:text-black":"")},o?t:n),l.a.createElement("p",{className:x},i),l.a.createElement("p",{className:y},r),l.a.createElement("p",{className:N},c),a)},w=function(e){var t=e.experience;return t.length?(console.log(t),l.a.createElement(m.a,{title:"Experience"},t.map((function(e){return l.a.createElement(M,{key:e.name,name:e.name,position:e.position,period:e.period,link:e.link,description:e.description,subitems:e.subitems})})))):null},j=function(e){var t=e.projects;return t.length?l.a.createElement(m.a,{title:"Projects"},t.map((function(e){return l.a.createElement(p.a,{key:e.name,name:e.name,description:e.description,link:e.link})}))):null},L=function(e){var t=e.skills;return l.a.createElement(m.a,{title:"Skills"},t.map((function(e){return l.a.createElement(p.a,{key:e.name,name:e.name,description:e.description})})))},P=function(e){var t=e.education;return t.length?l.a.createElement(m.a,{title:"Education"},t.map((function(e){return l.a.createElement(p.a,{key:e.name,name:e.name,description:e.description,link:e.link})}))):null},I=function(e){var t=e.presentations;return t.length?l.a.createElement(m.a,{title:"Presentations"},t.map((function(e){return l.a.createElement(p.a,{key:e.name,name:e.name,description:e.description,link:e.link})}))):null},z=function(e){var t=e.certificates;return t.length?l.a.createElement(m.a,{title:"Certificates"},t.map((function(e){return l.a.createElement(p.a,{key:e.name,name:e.name,description:e.description,link:e.link})}))):null},J=a("ivnd");t.default=function(e){var t=e.data,a=i()(t,"site.siteMetadata.about",!1),n=i()(t,"site.siteMetadata.projects",!1),r=t.allMarkdownRemark.edges,m=i()(t,"site.siteMetadata.experience",!1),u=i()(t,"site.siteMetadata.skills",!1),p=i()(t,"site.siteMetadata.education",!1),E=!r||!r.length,f=i()(t,"site.siteMetadata.presentations",!1),g=i()(t,"site.siteMetadata.certificates",!1);return l.a.createElement(s.a,null,l.a.createElement(J.a,null),l.a.createElement(c.a,{metadata:t.site.siteMetadata,noBlog:E}),a&&l.a.createElement(o,{about:a}),n&&n.length&&l.a.createElement(j,{projects:n}),!E&&l.a.createElement(d,{posts:r}),m&&m.length&&l.a.createElement(w,{experience:m}),p&&p.length&&l.a.createElement(P,{education:p}),u&&u.length&&l.a.createElement(L,{skills:u}),f&&f.length&&l.a.createElement(I,{presentations:f}),g&&g.length&&l.a.createElement(z,{certificates:g}))}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-56379c57bbd05d107ca3.js.map