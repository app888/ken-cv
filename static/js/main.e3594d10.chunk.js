(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){e.exports=t(35)},24:function(e,a,t){},28:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var n,l=t(0),r=t.n(l),c=t(12),s=t.n(c),o=(t(24),t(1)),i=t(2),m=t(4),u=t(3),d=t(5),h=t(8),p=t(13),E=t.n(p),f=(t(28),function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=this.props.data.occupation,t=this.props.data.social.map(function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:e.className})))});return r.a.createElement("header",{id:"home"},r.a.createElement("nav",{id:"nav-wrap"},r.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),r.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),r.a.createElement("ul",{id:"nav",className:"nav"},r.a.createElement("li",{className:"current"},r.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"Testimonials")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),r.a.createElement("div",{className:"row banner"},r.a.createElement("div",{className:"banner-text"},r.a.createElement("h1",{className:"responsive-headline"},e),r.a.createElement("h2",null,r.a.createElement("span",null,a)),r.a.createElement("hr",null),r.a.createElement("ul",{className:"social"},t))),r.a.createElement("p",{className:"scrolldown"},r.a.createElement("a",{className:"smoothscroll",href:"#about"},r.a.createElement("i",{className:"icon-down-circle"}))))}}]),a}(l.Component)),v=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map(function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.url},r.a.createElement("i",{className:e.className})))});return r.a.createElement("footer",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("ul",{className:"social-links"},e),r.a.createElement("ul",{className:"copyright"},r.a.createElement("li",null,"Copyright 2022 \xa9 Kenneth Yeung"))),r.a.createElement("div",{id:"go-top"},r.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},r.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(l.Component),b=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e="images/"+this.props.data.image,a=this.props.data.bio,t=this.props.data.email;return r.a.createElement("section",{id:"about"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"three columns"},r.a.createElement("img",{className:"profile-pic",src:e,alt:"Kenneth Profile Pic"})),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("h2",null,"About Me"),r.a.createElement("p",null,a),r.a.createElement("h3",null,r.a.createElement("a",{href:"mailto:"+t,className:"button"},"Contact me")))))}}]),a}(l.Component),g=t(7);t(33);function N(){return(N=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var w=function(e){return r.a.createElement("svg",N({id:"Capa_1",enableBackground:"new 0 0 512 512",height:512,viewBox:"0 0 512 512",width:512},e),n||(n=r.a.createElement("g",null,r.a.createElement("path",{d:"m467 14.292h-422c-24.813 0-45 20.187-45 45v305c0 24.813 20.187 45 45 45h151.198l-13.189 58.416h-63.275v30h272.532v-30h-63.275l-13.189-58.416h151.198c24.813 0 45-20.187 45-45v-305c0-24.813-20.187-45-45-45zm-422 30h422c8.271 0 15 6.729 15 15v240h-452v-240c0-8.271 6.729-15 15-15zm240.047 365 13.189 58.416h-84.471l13.189-58.416zm181.953-30h-422c-8.271 0-15-6.729-15-15v-35h452v35c0 8.271-6.729 15-15 15z"}),r.a.createElement("path",{d:"m134.582 156.792h142.836v30h-142.836z",transform:"matrix(.707 -.707 .707 .707 -61.139 195.981)"}),r.a.createElement("path",{d:"m234.582 156.792h142.836v30h-142.836z",transform:"matrix(.707 -.707 .707 .707 -31.85 266.691)"}))))},y=(t.p,[{id:1,company:"Accenture",title:"AWS Consultant",date:"August 2021 - Present",description:"Kenneth has been working on many client projects for two German premium car manufacturers and a national government. He supported in the area of Java, Sprint Boot, JavaScript, Dojo, Jenkins for Continious Integration/Continious Deployment, AWS Service, Azure cloud and Terraform as Infrastructure as a Code."},{id:2,company:"RUAG",title:"Quality Engineer",date:"September 2019 - June 2021",description:"As a Quality Engineer, Kenneth was responsible of the comfirmity and releases of the landing gear parts of the Airbus 320/321/XLR321 planes."},{id:3,company:"Voith Group",title:"Quality Engineer",date:"February 2019 - September 2019"},{id:4,company:"Lasco",title:"Project Manager PMO",date:"February 2018 - Dezember 2018"},{id:5,company:"BMW Group",title:"Quality Engineer Intern",date:"September 2017 - Dezember 2017"}]),j=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.education.map(function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("h3",null,e.school),r.a.createElement("p",{className:"info"},e.degree," ",r.a.createElement("span",null,"\u2022"),r.a.createElement("em",{className:"date"},e.graduated)),r.a.createElement("p",null,e.description))}),a=this.props.data.skills.map(function(e){return r.a.createElement("li",{key:e.name,style:{fontWeight:e.style}},e.name)}),t=this.props.data.devops.map(function(e){return r.a.createElement("li",{key:e.name,style:{fontWeight:e.style}},e.name)});var n={background:"rgb(33, 150, 243)"};return r.a.createElement("section",{id:"resume"},r.a.createElement("div",{className:"row work"},r.a.createElement("div",{id:"header-work",className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Work"))),r.a.createElement("div",{className:"main-colii"},r.a.createElement(g.VerticalTimeline,{animate:!1},y.map(function(e){return r.a.createElement(g.VerticalTimelineElement,{key:e.key,date:e.date,dateClassName:"date",iconStyle:n,icon:r.a.createElement(w,null),position:"right"},r.a.createElement("h3",{className:"vertical-timeline-element-title"},e.company),r.a.createElement("h4",{className:"info"},e.title),r.a.createElement("h5",{className:"vertical-timeline-element-subtitle"},e.location),r.a.createElement("p",{id:"description"},e.description))})))),r.a.createElement("div",{className:"row education"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Education"))),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("div",{className:"row item"},r.a.createElement("div",{className:"twelve columns"},e)))),r.a.createElement("div",{className:"row skill"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Progamming-Skills, DevOps and Cloud Technologies"))),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("div",{className:"blockList"},r.a.createElement("ul",{className:"block"},a,r.a.createElement("br",null),r.a.createElement("br",null),t)))))}}]),a}(l.Component),k=t(9),O=t(14),S=function(){var e=Object(l.useState)("Message"),a=Object(k.a)(e,2),t=a[0],n=a[1];var c=Object(l.useState)("000000"),s=Object(k.a)(c,2),o=s[0],i=s[1],m=function(){var e="000000"+(1e6*Math.random()|0);i(e.substring(e.length-6))};return r.a.createElement("section",{id:"contact"},r.a.createElement("div",{className:"row section-head"},r.a.createElement("div",{className:"two columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null))),r.a.createElement("div",{className:"ten columns"},r.a.createElement("p",{className:"lead"},"Get in Touch"),r.a.createElement("p",{className:"status-message"},t))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"eight columns"},r.a.createElement("form",{onSubmit:function(e){var a=document.querySelector("#contactForm"),t=document.querySelector(".status-message");e.preventDefault(),m(),O.a.sendForm("service_5r8zjjy","template_uxxecit",e.target,"GWuMTG9nkIhwj4ZSq").then(function(e){console.log("SUCCESS!",e.status,e.text),a.reset(),n("Message sent!"),t.className="status-message success",setTimeout(function(){t.className="status-message"},5e3)},function(e){console.log("FAILED...",e)})},id:"contactForm",name:"contactForm"},r.a.createElement("fieldset",null,r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"contactName"},"Name ",r.a.createElement("span",{className:"required"},"*")),r.a.createElement("input",{type:"text",size:"35",name:"name",className:"form-control"})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"contactEmail"},"Email ",r.a.createElement("span",{className:"required"},"*")),r.a.createElement("input",{type:"email",size:"35",name:"user_email",className:"form-control"})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"contactMessage"},"Message ",r.a.createElement("span",{className:"required"},"*")),r.a.createElement("textarea",{rows:"4",id:"contactMessage",name:"message",className:"form-control"}),r.a.createElement("input",{type:"hidden",name:"contact_number",value:o})),r.a.createElement("div",null,r.a.createElement("input",{type:"submit",name:"Send",className:" submit form-control btn btn-primary",value:"Send"}),r.a.createElement("span",{id:"image-loader"},r.a.createElement("img",{alt:"",src:"images/loader.gif"}))))))))},C=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.testimonials.map(function(e){return r.a.createElement("li",{key:e.user},r.a.createElement("blockquote",null,r.a.createElement("p",null,e.text),r.a.createElement("cite",null,e.user)))});return r.a.createElement("section",{id:"testimonials"},r.a.createElement("div",{className:"text-container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"two columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Client Testimonials"))),r.a.createElement("div",{className:"ten columns flex-container"},r.a.createElement("ul",{className:"slides"},e)))))}}]),a}(l.Component),D=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{id:"portfolio"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelve columns collapsed"},r.a.createElement("h1",null,"Check Out Some of My Works."),r.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"}))))}}]),a}(l.Component),x=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).state={foo:"bar",resumeData:{}},h.a.initialize("UA-110570651-1"),h.a.pageview(window.location.pathname),t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"getResumeData",value:function(){E.a.ajax({url:"/resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,a,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(l.StrictMode,null,r.a.createElement(f,{data:this.state.resumeData.main}),r.a.createElement(b,{data:this.state.resumeData.main}),r.a.createElement(j,{data:this.state.resumeData.resume}),r.a.createElement(D,{data:this.state.resumeData.portfolio}),r.a.createElement(C,{data:this.state.resumeData.testimonials}),r.a.createElement(S,{data:this.state.resumeData.main}),r.a.createElement(v,{data:this.state.resumeData.main})))}}]),a}(l.Component),M=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,36)).then(function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,r=a.getLCP,c=a.getTTFB;t(e),n(e),l(e),r(e),c(e)})},A=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function F(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null))),M(),function(){if("serviceWorker"in navigator){if(new URL("/ken-cv",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/ken-cv","/service-worker.js");A?function(e){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):F(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):F(e)})}}()}},[[15,3,2]]]);
//# sourceMappingURL=main.e3594d10.chunk.js.map