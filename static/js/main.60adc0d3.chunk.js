(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],[,,,,,,,,,,,,function(e,a,t){},,,,,,,,,,,function(e,a,t){},,,function(e,a,t){e.exports=t.p+"static/media/logo.2f3fe1b4.png"},,,function(e,a,t){e.exports=t(63)},,,,,function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/about.bd21a28c.png"},,,function(e,a,t){e.exports=t.p+"static/media/startup_culture.b1f02106.jpg"},function(e,a,t){e.exports=t.p+"static/media/help.8b70fc8c.jpg"},function(e,a,t){e.exports=t.p+"static/media/help.45fe9fca.svg"},function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/allen.962fea9a.jpg"},function(e,a,t){e.exports=t.p+"static/media/ansif.439f1264.jpg"},function(e,a,t){e.exports=t.p+"static/media/aswin.a8c10ba8.jpg"},function(e,a,t){e.exports=t.p+"static/media/vivek.7cbcccc7.jpg"},function(e,a,t){e.exports=t.p+"static/media/hari.670aa261.jpg"},function(e,a,t){e.exports=t.p+"static/media/alan.06d2523a.jpg"},function(e,a,t){e.exports=t.p+"static/media/medha.2d06579b.jpg"},function(e,a,t){e.exports=t.p+"static/media/suvarna.6a5933e6.jpg"},function(e,a,t){e.exports=t.p+"static/media/ashmi.3b1f0ea8.jpg"},function(e,a,t){e.exports=t.p+"static/media/nikita.c915e509.jpg"},function(e,a,t){e.exports=t.p+"static/media/aditya.40b9fdd3.jpg"},function(e,a,t){e.exports=t.p+"static/media/aldrin.69f70a60.jpg"},function(e,a,t){e.exports=t.p+"static/media/meenakshi.4d3532b3.jpg"},function(e,a,t){e.exports=t.p+"static/media/ameen.29824939.jpg"},function(e,a,t){e.exports=t.p+"static/media/arti.20fa144e.jpg"},function(e,a,t){e.exports=t.p+"static/media/jagath.932e8826.jpg"},function(e,a,t){e.exports=t.p+"static/media/rindish.4e035ce3.jpg"},function(e,a,t){e.exports=t.p+"static/media/srinivas.54800e5e.jpg"},function(e,a,t){},,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(25),l=t.n(i),s=(t(12),t(34),t(16)),o=t(1),c=t(6),m=t(7),d=t(9),u=t(8),p=t(26),h=t.n(p),g=(t(15),function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).state={announcements:[]},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://raw.githubusercontent.com/IEDCMEC/data/master/data.json").then((function(e){return e.json()})).then((function(a){return e.setState({announcements:a.announcements})}))}},{key:"render",value:function(){var e=this.state.announcements.map((function(e){return r.a.createElement("div",{style:{"text-align":"center"}},r.a.createElement("h6",null,r.a.createElement("b",null,e.title)),r.a.createElement("p",{style:{fontSize:"80%"}},e.description))}));return r.a.createElement("div",{id:"bottom_margin"},r.a.createElement("section",{className:"home main_img",id:"box_curve_bottom",style:{}},r.a.createElement("div",{className:"container ",id:"home",style:{color:"rgb(223, 218, 218)"}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement("div",{className:"iedc_img"},r.a.createElement("img",{src:h.a,alt:"Logo",className:"responsive-img"}))),r.a.createElement("a",{target:"_blank",href:"https://www.freepik.es/fotos-vectores-gratis/fondo"}),r.a.createElement("div",{className:"col s24 m3 offset-m2"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h3",{id:"center_align",className:"announcement_header",style:{color:"#C33427"}},"Announcements"),r.a.createElement("br",null),r.a.createElement("div",{className:"announcement-box"},r.a.createElement("div",{className:"col s8 m6",id:"announcements_card"},r.a.createElement("div",{className:"card",id:"curve_border"},r.a.createElement("div",{className:"card-content",style:{color:"black",maxHeight:"100%"}},r.a.createElement("p",null,e))))))))))}}]),t}(n.Component)),E=t(13),f=t.n(E),v=function(){return Object(n.useEffect)((function(){f.a.AutoInit()})),r.a.createElement("section",{className:"about section",id:"about"},r.a.createElement("div",{className:"container"},r.a.createElement("br",null),r.a.createElement("h3",{className:"text-darken-3 center-align",id:"top_margin"},"About IEDC MEC"),r.a.createElement("br",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m5"},r.a.createElement("p",{style:{color:"black",marginBottom:"3rem"}},"Founded in January in the year 2009 as Entrepreneurship Cell, MEC and revamped as IEDC MEC under the guidance of Kerala Startup Mission as a Govt. of Kerala initiative in 2015, the Innovation and Entrepreneurship Development Cell of Model Engineering college has constantly worked towards helping the community find an intersection between technology and entrepreneurship.",r.a.createElement("br",null),r.a.createElement("br",null),"We strongly believe that entrepreneurship is the key to unlock the nation\u2019s true potential and therefore strive to promote the idea of job creation rather than job seeking. By consistently hosting a large number of inspiring and innovative events and through our flagship annual national level symposium- \u2018Technopreneur\u2019, IEDC MEC, from its humble beginnings is now one of the best functioning IEDCs in the state.",r.a.createElement("br",null),r.a.createElement("br",null),"IEDC MEC currently acts as a pre-incubator which helps in providing mentorship and support to the projects of our students and help to scale them into potential startup realities. We are funded by the Kerala Startup Mission (KSUM)."),r.a.createElement("button",{"data-target":"modal1",className:"btn modal-trigger z-depth-0",style:{backgroundColor:"#C33427","border-radius":"8px"}},r.a.createElement("i",{className:"material-icons right"},"arrow_forward"),"Read More"),r.a.createElement("div",{id:"modal1",className:"modal black-text ",style:{color:"grey",maxHeight:"85%",width:"85%",overflowY:"hidden"}},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{style:{"border-style":"solid","border-color":"#f08080","border-radius":"15px",padding:15,height:"75vh",overflowY:"scroll"}},r.a.createElement("h6",{className:"black-text"},"Technopreneur"),r.a.createElement("p",null,"Technopreneur, the flagship event of IEDC MEC is the annual entrepreneurial and managerial symposium of MEC which weaves the perfect symphony of technology meeting entrepreneurship. Over the years it has attracted the best minds in the country and has been a grand success in stimulating and inspiring the community through this national level symposium. Visit our Facebook page below to know more about it."),r.a.createElement("a",{href:"https://www.facebook.com/technopreneur.mec"},"Technopreneur Facebook"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h6",{className:"black-text"},"Vision"),r.a.createElement("p",null,"To promote and enrich the entrepreneurial culture in MEC, strengthening and supporting innovative ideas using technology and mentorship for social and economic growth."),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h6",{className:"black-text"},"Mission"),r.a.createElement("p",null,"To Develop, Nurture and Sustain the utopian dream of preparing MECians to be leaders of tomorrow and driving the change for the future."),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h6",{className:"black-text"},"Objectives"),r.a.createElement("ol",{style:{textAlign:"left"},className:"center"},r.a.createElement("li",null,r.a.createElement("p",null,"To be a self sustainable Technology Business Incubator")),r.a.createElement("li",null,r.a.createElement("p",null,"To organise Entrepreneurship Awareness Camps, Entrepreneurship Development Programmes, Faculty Development Programmes and Skill Development Programmes in the institution.")),r.a.createElement("li",null,r.a.createElement("p",null,"To organize Business Plan Competitions every year.")),r.a.createElement("li",null,r.a.createElement("p",null,"To guide and assist prospective entrepreneurs on various aspects such as preparing project reports, obtaining project approvals, loans and facilities from agencies of support system, information on technologies etc.")),r.a.createElement("li",null,r.a.createElement("p",null,"To arrange interaction with entrepreneurs and create a mentorship scheme for student entrepreneurs.")),r.a.createElement("li",null,r.a.createElement("p",null,"To inculcate a culture of innovation driven entrepreneurship."))),r.a.createElement("p",{className:"red-text text-darken-2"},"KTU awards activity points for B.Tech students participating in IEDC, NSS and Sports. A student should gain 100 activity points at the end of 4 years of his/her study. Points that can be gained in IEDC activities, workshops, social innovations,  internship in startup, Attended/ participated Exhibitions, project contest, prototype development, company registration, IPR, Start-up activity."))))),r.a.createElement("div",{className:"col s12 m6 offset-m1"},r.a.createElement("br",null),r.a.createElement("img",{src:t(35),alt:"about",className:"responsive-img",id:"about_img"})))))},b=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"top_margin",style:{"background-color":"rgb(223, 72, 59)"}},r.a.createElement("section",{id:"box_curve_top",className:"main_img"},r.a.createElement("div",{className:"row",style:{marginBottom:"0px"},id:"centre_mobile"},r.a.createElement("div",{className:"col s12 m12 l12 margin_top_mobile",id:"contact"},r.a.createElement("h4",{id:"bottom_margin"},"Follow Us"),r.a.createElement("div",{className:"col s12 m12 l12",id:"icons"},r.a.createElement("div",null,r.a.createElement("a",{href:"https://twitter.com/iedc_mec",target:"_blank",style:{color:"#C33427"},id:"icon_space"},r.a.createElement("i",{className:"fab circle fa-twitter fa-2x"})),r.a.createElement("a",{href:"http://linkedin.com/company/iedcmec",target:"_blank",style:{color:"#C33427"},id:"icon_space"},r.a.createElement("i",{className:"fab circle fa-linkedin fa-2x"})),r.a.createElement("a",{href:"https://www.instagram.com/iedcmec/",target:"_blank",style:{color:"#C33427"},id:"icon_space"},r.a.createElement("i",{className:"fab circle fa-instagram fa-2x"})),r.a.createElement("a",{href:"https://www.facebook.com/IEDCMEC/",target:"_blank",style:{color:"#C33427"},id:"icon_space"},r.a.createElement("i",{className:"fab circle fa-facebook fa-2x"})))),r.a.createElement("div",{style:{marginTop:"6rem",marginBottom:"3rem",marginLeft:"5px"}},r.a.createElement("h4",null,"Contact"),r.a.createElement("h6",null,"iedc@mec.ac.in"))))))}}]),t}(n.Component),y=t(27),N=t.n(y),k=function(e){Object(d.a)(n,e);var a=Object(u.a)(n);function n(){return Object(c.a)(this,n),a.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{style:{marginTop:"10px"}},r.a.createElement(N.a,{fill:"#DF483B",paused:!1,options:{height:60,amplitude:50,speed:.3,points:5}}),r.a.createElement("section",{className:"about section z-depth-1",id:"startup_culture",style:{marginTop:-10,"background-color":"#DF483B"}},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m5",style:{color:"white"}},r.a.createElement("h3",null,"The Startup Culture"),r.a.createElement("p",{style:{color:"white"}},"MEC has a wide network of students passionate about technology and learning and we nurture a system of guidance and support for those intending to bring their ideas into fruition. We consistently host technically stimulating workshops, talk sessions by accomplished entrepreneurs, design thinking workshops, exposure to business case studies, to hone the skill sets of our students as we are committed to the utopian dream of seeing each MECian live up to his/her true capabilities. We promote our startup culture by giving counsel and direction along with technical support and provide platforms to develop their entrepreneurial skills.",r.a.createElement("br",null),r.a.createElement("br",null),"Through its flagship annual symposium- \u2018Technopreneur\u2019, we have managed to scale our activities on a national level as well, having attracted the best minds in India for the symposium over the years. Dr. K. Radhakrishnan, former ISRO chairman, Mr. Kris Gopakrishnan, founder and former chairman of Infosys, etc to name a few from an elite legacy. Technopreneur has been a flagship event for MEC over the years and has lived up to the hype whenever it was organized garnering national attention. This year will be the 12th edition of Technopreneur.")),r.a.createElement("div",{className:"col s12 m6 offset-m1"},r.a.createElement("br",null),r.a.createElement("a",{target:"_blank",href:"https://www.freepik.com/free-photos-vectors/business"},r.a.createElement("img",{src:t(38),alt:"about",className:"responsive-img",id:"startup_img"})))))),r.a.createElement("section",{className:"section",id:"about",style:{"background-color":"#fafafa","padding-bottom":"5%"}},r.a.createElement("div",{className:"container",style:{marginTop:"50px"}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m5",style:{color:"white"}},r.a.createElement("a",{target:"_blank",href:"https://www.freepik.com/free-photos-vectors/business"},r.a.createElement("img",{src:t(39),alt:"about",className:"responsive-img",id:"about_img"}))),r.a.createElement("div",{className:"col s12 m6 offset-m1"},r.a.createElement("h3",null,"We are there for you"),r.a.createElement("p",{style:{color:"black"}},"Have an idea? Don't know how to implement it? We'll help you bring it to life. If you have a project or an idea in mind, we will provide you with the tools required to make it into a reality.",r.a.createElement("br",null),r.a.createElement("br",null),"IEDC MEC currently acts as a pre-incubator, we support various projects that our students work on, provide them financial assistance and help them with ideation and prototype development. We also provide them with mentorship and support from industry experts through our distinguished pool of mentors consisting of xMECians and accomplished entrepreneurs to scale their projects into sustainable and successful startup ventures."))))),r.a.createElement("section",{className:"projects section z-depth-4",style:{"background-color":"#DF483B"}},r.a.createElement("div",{className:"container",style:{marginTop:"50px"}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m5",style:{color:"white"}},r.a.createElement("h3",null,"Projects"),r.a.createElement("p",{style:{color:"white"}},"Coming soon!",r.a.createElement("br",null),r.a.createElement("br",null),"Having an exciting idea in your mind and not having the means to fulfill it can be frustrating. Well, good news! Here\u2019s a platform where you can work in collaboration with others on projects and turn your ideas into working prototypes.",r.a.createElement("br",null),r.a.createElement("br",null),"Bring us your ideas, and we'll help you unlock its true potential.")),r.a.createElement("div",{className:"col s12 m6 offset-m1"},r.a.createElement("br",null),r.a.createElement("a",{target:"_blank",href:"https://stories.freepik.com/?utm_source=Stories&utm_medium=referral&utm_campaign=web-attribution&utm_term=copy%20and%20attribute&utm_content=donwload-pop-up"},r.a.createElement("img",{src:t(40),alt:"about",className:"responsive-img",id:"about_img"})))))))}}]),n}(n.Component),w=(t(41),function(){return r.a.createElement("div",{className:"landing"},r.a.createElement(g,null),r.a.createElement(v,null),r.a.createElement(k,null),r.a.createElement(b,null))}),x=t(20),C=[{id:1,name:"Allen Joseph",designation:"Chief Executive Officer",imageUrl:t(42)},{id:2,name:"Ansif T A",designation:"Chief Operating Officer",imageUrl:t(43)},{id:3,name:"Aswin Shanil",designation:"Chief Financial Officer",imageUrl:t(44)},{id:4,name:"Vivek R",designation:"Chief Technology Officer",imageUrl:t(45)},{id:5,name:"Harinarayanan Shaji",designation:"Chief Design Officer",imageUrl:t(46)},{id:6,name:"Alan Sebastian",designation:"Chief Marketing Officer",imageUrl:t(47)},{id:7,name:"Medha Lakshman Rao",designation:"Chief Social Media Officer",imageUrl:t(48)},{id:8,name:"Suvarna Sivadas",designation:"Chief Content Officer",imageUrl:t(49)},{id:9,name:"Ashmi Fathima",designation:"Chief Publicity Officer",imageUrl:t(50)}],j=[{id:1,name:"Nikita Menon",designation:"Webmaster",imageUrl:t(51)},{id:2,name:"Aditya Anil Kumar",designation:"Webmaster",imageUrl:t(52)},{id:3,name:"Aldrin Jenson",designation:"Webmaster",imageUrl:t(53)},{id:4,name:"Meenakshi",designation:"Full Stack Developer",imageUrl:t(54)},{id:5,name:"Ameen",designation:"Full Stack Developer",imageUrl:t(55)},{id:6,name:"Arti Bhatia",designation:"Full Stack Developer",imageUrl:t(56)},{id:7,name:"Jagath Jijo",designation:"Full Stack Developer",imageUrl:t(57)},{id:8,name:"Rindish Krishna",designation:"Full Stack Developer",imageUrl:t(58)}],_=(t(23),function(e){var a=e.name,t=e.designation,n=e.imageUrl;return r.a.createElement("div",{class:"col s12 m6 l4 "},r.a.createElement("div",{id:"mobcard"},r.a.createElement("div",{className:"card team_card"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:n,alt:a,style:{height:"25em"}}),r.a.createElement("span",{className:"card-title"},a)),r.a.createElement("div",{className:"card-content team_card_content center"},r.a.createElement("p",{className:"designation"},t)))))}),M=function(){return r.a.createElement("div",{id:"team-page"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"title center-align bold"},"Nodal Officer"),r.a.createElement("div",{className:"row"},r.a.createElement("div",null,r.a.createElement(_,{key:"1",name:"Prof. Dr. Sreenivas P",designation:"Dept of Mechanical Engineering",imageUrl:t(59)})),r.a.createElement("div",{className:"black-text message"},r.a.createElement("p",null,'"Students in MEC always have had a knack for hacking problems and are passionate learners. At IEDC MEC we provide a platform for our extremely talented engineering minds to collaborate and learn with the faculty, students, our esteemed alumni and industry experts to stimulate themselves in this amazing environment and go beyond classroom based learning to focus more on problem based learning and come with innovative ideas and solutions to create a macroscopic impact in the society. Come join IEDC and let\'s find joy in working together to come up with innovative solutions and daring to dream."'))),r.a.createElement("h2",{className:"title center-align bold"},"EXECUTIVE COMMITTEE"),r.a.createElement("div",{className:"row",id:"executive-members-list"},C.map((function(e){var a=e.id,t=Object(x.a)(e,["id"]);return r.a.createElement(_,Object.assign({key:a},t))}))),r.a.createElement("br",null),r.a.createElement("h2",{className:"title center-align bold"},"WEB TEAM"),r.a.createElement("div",{className:"row  ",id:"web-team-list"},j.map((function(e){var a=e.id,t=Object(x.a)(e,["id"]);return r.a.createElement(_,Object.assign({key:a},t))}))),r.a.createElement("h2",{className:"title center-align bold"},"CORE TEAMS"),r.a.createElement("div",{className:"team"},r.a.createElement("h3",{className:"grey-text"},"Design"),r.a.createElement("h5",{className:"grey-text text-darken-4 names"},"Arpith S, Abhiram Anil, Ameen Azeez")),r.a.createElement("div",{className:"team"},r.a.createElement("h3",{className:"grey-text"},"Social Media"),r.a.createElement("h5",{className:"grey-text text-darken-4 names"},"Akshayraj KR, Namith Krishnan, Savion David, Amalraj K, Krishna Gaadha, Nayana Vinod, Lakshmipriya Mohandas")),r.a.createElement("div",{className:"team"},r.a.createElement("h3",{className:"grey-text"},"Publicity"),r.a.createElement("h5",{className:"grey-text text-darken-4 names"},"Jisna Jose, Gopika Murali, Devdutt Shenoi, Patrick Prakash, Rose Joseph, John Tharian")),r.a.createElement("div",{className:"team"},r.a.createElement("h3",{className:"grey-text"},"Content"),r.a.createElement("h5",{className:"grey-text text-darken-4 names"},"Aswathy S Menon, Abhiram V, Sharath Jacob Jacob, Ethena Mothi, Vishnumaya S Unni")),r.a.createElement("div",{className:"team"},r.a.createElement("h3",{className:"grey-text"},"Media"),r.a.createElement("h5",{className:"grey-text text-darken-4 names"},"Karthik Suresh, Adil Rafeek")),r.a.createElement("div",{className:"team"},r.a.createElement("h3",{className:"grey-text"},"Marketing"),r.a.createElement("h5",{className:"grey-text text-darken-4 names"},"Niranjana, Denil Geo Daise, Neetha Jayan, Razeen Muhammed, Nandakrishnan R"))))},D=(t(60),function(e){var a=e.image,t=e.title,n=e.link;return r.a.createElement("div",{class:"col s12 m6 l3 "},r.a.createElement("a",{href:n,target:"_blank"},r.a.createElement("div",{className:"container",style:{"padding-top":"70px"},id:"mobcard"},r.a.createElement("div",{className:"card case_study_card"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:a,style:{height:"15em"}})),r.a.createElement("div",{className:"card-content case_study_content center"},r.a.createElement("p",{className:"title"},t))))))}),S=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).state={case_studies:[]},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://raw.githubusercontent.com/IEDCMEC/data/master/case_study.json").then((function(e){return e.json()})).then((function(a){return e.setState({case_studies:a})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"row"},this.state.case_studies.map((function(e){return r.a.createElement(D,{image:"https://raw.githubusercontent.com/IEDCMEC/data/master/"+e.url,title:e.name,link:e.link})}))))}}]),t}(n.Component),O=t(17),T=function(){Object(n.useEffect)((function(){var e=document.querySelector("#mobile-nav");f.a.Sidenav.init(e,{})}),[]);var e=[{id:1,Name:"Home",to:"/#home"},{id:2,Name:"About",to:"/#about"},{id:3,Name:"Contact",to:"/#contact"},{id:4,Name:"Case Study",to:"/case-study"},{id:4,Name:"Team",to:"/team"}];return r.a.createElement("div",{className:"navbar"},r.a.createElement("div",{className:"navbar-fixed"},r.a.createElement("nav",{className:"nav-wrapper accent-1 nav_img"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"#","data-target":"mobile-nav",className:"sidenav-trigger"},r.a.createElement("i",{className:"material-icons",style:{color:"#C33427"}},"menu")),r.a.createElement("div",{className:"hide-on-large-only black-text",style:{position:"relative",left:-10,fontSize:20}},r.a.createElement("span",{className:"red-text"},"IEDC"),"MEC"),r.a.createElement("ul",{className:"right hide-on-med-and-down"},e.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(O.HashLink,{className:"black-text",to:e.to},e.Name))})))))),r.a.createElement("ul",{className:"sidenav",style:{paddingTop:"25vh"},id:"mobile-nav"},e.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(O.HashLink,{className:"black-text",style:{textAlign:"center"},to:e.to},e.Name))}))))};var A=function(){return r.a.createElement(s.HashRouter,null,r.a.createElement("div",{className:"App"},r.a.createElement(T,null),r.a.createElement(o.g,null,r.a.createElement(o.d,{exact:!0,path:"/",component:w}),r.a.createElement(o.d,{path:"/team",component:M}),r.a.createElement(o.d,{path:"/case-study",component:S}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[29,1,2]]]);
//# sourceMappingURL=main.60adc0d3.chunk.js.map