(this["webpackJsonptry-todolist"]=this["webpackJsonptry-todolist"]||[]).push([[0],{38:function(t,e,n){},44:function(t,e,n){},63:function(t,e,n){"use strict";n.r(e);var o=n(1),r=n(0),c=n.n(r),a=n(29),i=n.n(a),s=(n(38),n(19)),d=n(8),l=n(9),u=n(11),p=n(10),j=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(d.a)(this,n);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:t.props.todo.completed?"line-through":"none"}},t.btnStyle={background:"red",color:"white",border:"none",padding:"9px",borderRadius:"50%",float:"right",cursor:"pointer"},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props.todo,e=t.id,n=t.title;return Object(o.jsx)("div",{style:this.getStyle(),children:Object(o.jsxs)("p",{children:[Object(o.jsx)("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)})," "," ",n,Object(o.jsx)("button",{style:this.btnStyle,onClick:this.props.delTodo.bind(this,e),children:"x"})]})})}}]),n}(r.Component),b=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(){return Object(d.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){return Object(o.jsx)(j,{todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo},e.id)}))}}]),n}(r.Component),h=n(14),f=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(){return Object(d.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("header",{style:O,children:[Object(o.jsx)("h1",{children:"TodoList"}),Object(o.jsx)(h.b,{style:m,to:"/",children:"Home"})," |  ",Object(o.jsx)(h.b,{style:m,to:"/about",children:"About"})]})}}]),n}(r.Component),O={background:"#333",color:"#fff",padding:"10px",textAlign:"center"},m={color:"#fff"},x=f,y=(n(44),function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(d.a)(this,n);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={title:""},t.onChange=function(e){t.setState({title:document.getElementById("input").value})},t.onSubmit=function(e){e.preventDefault(),t.props.addTodo(t.state.title),t.setState({title:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("form",{onSubmit:this.onSubmit,style:{display:"flex"},children:[Object(o.jsx)("input",{id:"input",type:"text",style:{flex:"10",padding:"5px"},placeholder:"Add Todo ...",value:this.state.title,onChange:this.onChange}),Object(o.jsx)("input",{className:"btn",type:"submit",value:"Submit",style:{flex:"1"}})]})}}]),n}(r.Component));var v=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:"About"}),Object(o.jsx)("p",{children:"This is TodoLis app v1.0.0."})]})},g=n(2),k=n(31),C=n.n(k),S=n(32),T=n.n(S),A=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(d.a)(this,n);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={todos:[]},t.markComplete=function(e){t.setState(t.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t})))},t.delTodo=function(e){t.setState({todos:Object(s.a)(t.state.todos.filter((function(t){return t.id!==e})))})},t.addTodo=function(e){var n={id:C()(),title:e,completed:!1};t.setState({todos:[].concat(Object(s.a)(t.state.todos),[n])})},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;T.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((function(e){return t.setState({todos:e.data.filter((function(t){return!0!==t.completed}))})}))}},{key:"render",value:function(){var t=this;return Object(o.jsx)(h.a,{children:Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(x,{}),Object(o.jsx)(g.a,{exact:!0,path:"/",render:function(){return Object(o.jsxs)(c.a.Fragment,{children:[Object(o.jsx)(y,{addTodo:t.addTodo}),Object(o.jsx)(b,{todos:t.state.todos,markComplete:t.markComplete,delTodo:t.delTodo})]})}}),Object(o.jsx)(g.a,{path:"/about",component:v})]})})})}}]),n}(r.Component);i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(A,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.ab744411.chunk.js.map