(this.webpackJsonprobolist=this.webpackJsonprobolist||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(0),s=n(3),c=n.n(s),a=n(6),i=n(2),h=n(15),u=n(16),l=(n(29),n(30),n(4)),d=n(5),b=n(8),j=n(7),p=function(e){var t=e.id,n=e.name,o=e.email;return Object(r.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(r.jsx)("img",{src:"https://robohash.org/".concat(t,"?200x200"),alt:" robo"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:n}),Object(r.jsx)("p",{children:o})]})]})},O=function(e){var t=e.robots.map((function(e){return Object(r.jsx)(p,{id:e.id,name:e.name,email:e.email},e.id)}));return Object(r.jsx)("div",{children:t})},g=function(e){var t=e.searchChange;return Object(r.jsx)("div",{className:"pa2",children:Object(r.jsx)("input",{type:"search",className:"pa3 ba b--green bg-lightest-blue",placeholder:"search robots",onChange:t})})},f=function(e){return Object(r.jsx)("div",{style:{overflowY:"scroll",border:"5px solid black",height:"500px"},children:e.children})},v=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(d.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(r.jsx)("h1",{children:"Errorr"}):this.props.children}}]),n}(o.Component),m=(n(31),"CHANGE_SEARCH_FIELD"),x="REQUEST_ROBOTS_PENDING",y="REQUEST_ROBOTS_SUCCESS",R="REQUEST_ROBOTS_FAILED",E=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.robots,o=e.isPending,s=e.onSearchChange,c=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return o?Object(r.jsx)("h1",{children:"Loading"}):Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)("h1",{children:"RoboFriends"}),Object(r.jsx)(g,{searchChange:s}),Object(r.jsx)(f,{children:Object(r.jsx)(v,{children:Object(r.jsx)(O,{robots:c})})})]})}}]),n}(o.Component),w=Object(a.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e((n=t.target.value,{type:m,payload:n}));var n},onRequestRobots:function(t){return e((function(e){e({type:x}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:y,payload:t})})).catch((function(t){return e({type:R,payload:t})}))}))}}}))(E);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C={searchField:" "},S={isPending:!1,robots:[],error:""},k=Object(i.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case m:return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case x:return Object.assign({},e,{isPending:!0});case y:return Object.assign({},e,{robots:t.payload,isPending:!1});case R:return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),F=Object(h.createLogger)(),P=Object(i.d)(k,Object(i.a)(u.a,F));c.a.render(Object(r.jsx)(a.a,{store:P,children:Object(r.jsx)(w,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.bb9ea581.chunk.js.map