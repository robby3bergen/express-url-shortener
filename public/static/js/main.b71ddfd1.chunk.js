(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,n){e.exports=n(65)},36:function(e,t,n){},37:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(17),o=n(28),s=n.n(o),u=(n(36),n(6)),c=n(8),l=n(10),h=n(9),d=n(11),p=n(7),m=(n(37),n(13)),f=n(14),v=n.n(f),b=function e(){var t=this;Object(u.a)(this,e),this.addUrl=function(e){return t.shorten.post("/add",{destination:e}).then(function(e){return e.data})},this.getUrl=function(e){return t.shorten.get("/findbyid/".concat(e)).then(function(e){return e.data})},this.shorten=v.a.create({baseURL:"".concat("https://artificial-shortener.herokuapp.com","/url"),withCredentials:!0})},g=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(l.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){e.preventDefault();var t=e.target,a=t.name,r=t.value;n.setState(Object(m.a)({},a,r))},n.handleSubmit=function(e){e.preventDefault();var t=n.state.destination;n.shortenService.addUrl(t).then(function(e){var t="".concat("https://artificial-shortener.herokuapp.com","/").concat(e._id);n.setState({shortUrl:t})}).catch(function(e){return console.log(e)})},n.state={destination:"",shortUrl:""},n.shortenService=new b,n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("article",null,"Use this app to create a short url"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"Destination"),r.a.createElement("input",{name:"destination",type:"text",onChange:this.handleChange,value:this.state.destination,placeholder:"type or paste your url here"}),r.a.createElement("input",{type:"submit",value:"Get short url"})),r.a.createElement("p",null,"The following short url was created for you"),r.a.createElement("p",null,this.state.shortUrl))}}]),t}(a.Component),w=function e(){var t=this;Object(u.a)(this,e),this.signup=function(e,n){return t.authorise.post("/signup",{username:e,password:n}).then(function(e){return e.data})},this.login=function(e,n){return t.authorise.post("/login",{username:e,password:n}).then(function(e){return e.data})},this.userLoggedIn=function(){return t.authorise.get("/userloggedin").then(function(e){return e.data})},this.authorise=v.a.create({baseURL:"https://artificial-shortener.herokuapp.com",withCredentials:!0})},E=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(l.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){e.preventDefault();var t=e.target,a=t.name,r=t.value;n.setState(Object(m.a)({},a,r))},n.handleSubmit=function(e){e.preventDefault();var t=n.state,a=t.username,r=t.password;n.authService.signup(a,r).then(function(e){n.setState({username:"",password:""}),n.props.setCurrentUser(e)}).catch(function(e){return console.log("error: "+e)})},n.state={username:"",password:""},n.authService=new w,n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{name:"username",type:"text",placeholder:"username",value:this.state.username,onChange:this.handleChange}),r.a.createElement("label",null,"Password:"),r.a.createElement("input",{name:"password",type:"password",placeholder:"password",value:this.state.password,onChange:this.handleChange}),r.a.createElement("input",{type:"submit",value:"Signup"})),r.a.createElement("p",null,this.state.error))}}]),t}(a.Component),U=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(l.a)(this,Object(h.a)(t).call(this,e))).setCurrentUser=function(e){n.setState({currentUser:e})},n.state={currentUser:null},n.authService=new w,n.getCurrentUser(),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"getCurrentUser",value:function(){var e=this;this.state.currentUser||this.authService.userLoggedIn().then(function(t){e.setState({currentUser:t.currentUser})})}},{key:"redirectToDestination",value:function(e){(new b).getUrl(e).then(function(e){if(null!==e){var t=e.destination;window.location.href=t}}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/",component:g}),r.a.createElement(p.b,{exact:!0,path:"/signup"},r.a.createElement(E,{setCurrentUser:this.setCurrentUser})),r.a.createElement(p.b,{exact:!0,path:"/:id",render:function(t){var n=t.match;return e.redirectToDestination(n.params.id),r.a.createElement(p.a,{to:"/"})}})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(i.a,null,r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.b71ddfd1.chunk.js.map