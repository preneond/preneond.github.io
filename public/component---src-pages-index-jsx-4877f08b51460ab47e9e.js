(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Dtc0:function(e,t,a){"use strict";a.r(t);var n=a("mwIZ"),r=a.n(n),l=a("q1tI"),i=a.n(l),c=a("eNIv"),s=a("6uTu"),o=a("STHm"),m=function(e){var t=e.about;return i.a.createElement(o.a,{title:"About Me"},i.a.createElement("div",{className:"mb-6"},i.a.createElement("p",null,t)))},u=a("Wbzz"),d=a("hbLQ"),p=function(e){var t=e.posts;return i.a.createElement(o.a,{title:"Latest Posts"},t.map((function(e){return i.a.createElement(d.a,{key:e.node.fields.slug,name:e.node.frontmatter.title,description:e.node.frontmatter.description,link:e.node.fields.slug,internal:!0})})),t.length>=5&&i.a.createElement(u.Link,{className:"text-gray-500 text-sm hover:text-black",to:"/blog"},"View all posts →"))},E=function(e){var t=e.experience;return t.length?i.a.createElement(o.a,{title:"Experience"},t.map((function(e){return i.a.createElement(d.a,{key:e.name,name:e.name,description:e.description,link:e.link})}))):null},k=function(e){var t=e.projects;return t.length?i.a.createElement(o.a,{title:"Projects"},t.map((function(e){return i.a.createElement(d.a,{key:e.name,name:e.name,description:e.description,link:e.link})}))):null},f=function(e){var t=e.skills;return i.a.createElement(o.a,{title:"Skills"},t.map((function(e){return i.a.createElement(d.a,{key:e.name,name:e.name,description:e.description})})))},g=a("ivnd");t.default=function(e){var t=e.data,a=r()(t,"site.siteMetadata.about",!1),n=r()(t,"site.siteMetadata.projects",!1),l=t.allMarkdownRemark.edges,o=r()(t,"site.siteMetadata.experience",!1),u=r()(t,"site.siteMetadata.skills",!1),d=!l||!l.length;return i.a.createElement(s.a,null,i.a.createElement(g.a,null),i.a.createElement(c.a,{metadata:t.site.siteMetadata,noBlog:d}),a&&i.a.createElement(m,{about:a}),n&&n.length&&i.a.createElement(k,{projects:n}),!d&&i.a.createElement(p,{posts:l}),o&&o.length&&i.a.createElement(E,{experience:o}),u&&u.length&&i.a.createElement(f,{skills:u}))}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-4877f08b51460ab47e9e.js.map