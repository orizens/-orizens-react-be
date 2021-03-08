(this["webpackJsonp@orizens/react-be-example"]=this["webpackJsonp@orizens/react-be-example"]||[]).push([[0],{22:function(e,t,a){e.exports=a(37)},23:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),s=a(11),l=a.n(s),o=a(21),c=a(9);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var m=new Set(["align","bg","border","d","display","embed","fixed","flex","float","font","h","justify","min","overflow","position","rounded","shadow","text","w","mr","ml","mt","mb","mx","my","m","pr","pl","pt","pb","px","py","p"]),d=function(e){var t=e.as,a=void 0===t?"div":t,r=e.role,s=e.children,l=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["as","role","children"]),o=u(l),c=o.className,m=o.otherProps;return Object(n.createElement)(a,i({},m,{className:(null===c||void 0===c?void 0:c.trim())||null,role:r}),s)},u=function(e){return Object.entries(e).reduce((function(e,t){var a,n=t[0],r=t[1];return m.has(n)?{className:e.className+" "+n+"-"+r,otherProps:e.otherProps}:i({},e,{otherProps:i({},e.otherProps,(a={},a[n]=r,a))})}),{className:"",otherProps:{}})},h=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],s=t[1];return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"main-body"},r.a.createElement("nav",{"aria-label":"breadcrumb",className:"main-breadcrumb"},r.a.createElement(d,{as:"h1",text:"center"},"React Bootstrap Element (BE)")),r.a.createElement(d,{d:"flex",flex:"column",align:"items-center",className:"gutters-sm"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement(d,{d:"flex",flex:"column",align:"items-center",text:"center"},r.a.createElement("img",{src:"https://bootdey.com/img/Content/avatar/avatar7.png",alt:"Admin",className:"rounded-circle",width:"150"}),r.a.createElement(d,{mt:"3",onClick:function(){return s("John")}},r.a.createElement("h4",null,"John Doe"),r.a.createElement(d,{as:"p",text:"secondary",mb:"1"},"Front End Engineer, ",a),r.a.createElement(d,{as:"p",text:"muted",className:"font-size-sm"},"Anywhere, Earth"),r.a.createElement("button",{className:"btn btn-primary"},"Follow"),r.a.createElement("button",{className:"btn btn-outline-primary"},"Message"))),r.a.createElement("h4",null,"this card is coded with BE (bootstrap element):"),r.a.createElement(c.a,{theme:c.b,text:"\n<Be d='flex' flex='column' align='items-center' text='center'>\n  <img\n    src='https://bootdey.com/img/Content/avatar/avatar7.png'\n    alt='Admin'\n    className='rounded-circle'\n    width='150'\n  />\n  <Be mt='3' onClick={toggleMessage}>\n    <h4>John Doe</h4>\n    <Be as='p' text='secondary' mb='1'>\n      Front End Engineer\n    </Be>\n    <Be as='p' text='muted' className='font-size-sm'>\n      Anywhere, Earth\n    </Be>\n    <button className='btn btn-primary'>Follow</button>\n    <button className='btn btn-outline-primary'>Message</button>\n  </Be>\n</Be>\n              ",language:"jsx",wrapLines:!0}))),r.a.createElement("div",{className:"card mt-3"},r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center flex-wrap"},r.a.createElement("a",{href:"https://orizens.com",className:"d-flex flex-row justify-content-between w-100"},r.a.createElement("h6",{className:"mb-0"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:"feather feather-globe mr-2 icon-inline"},r.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),r.a.createElement("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),r.a.createElement("path",{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"})),"Website"),r.a.createElement("span",{className:"text-secondary"},"https://orizens.com"))),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center flex-wrap"},r.a.createElement("a",{href:"https://github.com/orizens/-orizens-react-be",className:"d-flex flex-row justify-content-between w-100"},r.a.createElement("h6",{className:"mb-0"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:"feather feather-github mr-2 icon-inline"},r.a.createElement("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"})),"Github"),r.a.createElement("span",{className:"text-secondary"},"orizens"))),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center flex-wrap"},r.a.createElement("h6",{className:"mb-0"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:"feather feather-twitter mr-2 icon-inline text-info"},r.a.createElement("path",{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"})),"Twitter"),r.a.createElement("span",{className:"text-secondary"},"@orizens"))))),r.a.createElement(d,{as:"footer",d:"flex",flex:"row",p:"3",justify:"content-center"},r.a.createElement("a",{href:"https://www.bootdey.com/snippets/view/profile-with-data-and-skills"},"Design By bootdey.com"))))};l.a.render(r.a.createElement(h,null),document.getElementById("root"))}},[[22,152,154]]]);
//# sourceMappingURL=main.323f9cb6.chunk.js.map