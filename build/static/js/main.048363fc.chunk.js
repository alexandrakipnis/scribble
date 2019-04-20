(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){},103:function(e,t,n){},190:function(e,t,n){},191:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(88),i=n.n(r),c=(n(100),n(36)),s=n(37),l=n(39),u=n(38),m=n(40),d=(n(101),n(70)),b=n(94),f=(n(102),function(e){var t=e.currentNote,n=e.saveNote,a=e.removeCurrentNote,r=function(e){var a=Object(b.a)({},t);a[e.target.name]=e.target.value,n(a)};return o.a.createElement("div",{className:"NoteForm"},o.a.createElement("div",{className:"form-actions"},o.a.createElement("button",{type:"button",onClick:a},o.a.createElement("i",{className:"far fa-trash-alt"}))),o.a.createElement("form",null,o.a.createElement("p",null,o.a.createElement("input",{type:"text",name:"title",placeholder:"Title your note",value:t.title,onChange:r})),o.a.createElement("textarea",{name:"body",value:t.body,onChange:r})))}),g=(n(103),function(e){var t=e.note,n=e.setCurrentNote;return o.a.createElement("li",{className:"Note",onClick:function(){return n(t)}},o.a.createElement("div",{className:"note"},o.a.createElement("div",{className:"note-title"},t.title),o.a.createElement("div",{class:"note-body"},o.a.createElement("p",null,t.body))))}),h=function(e){var t=e.notes,n=e.setCurrentNote;return o.a.createElement("div",{className:"NoteList"},o.a.createElement("h3",null,"Notes"),o.a.createElement("ul",{id:"notes"},o.a.createElement("a",{className:"active"},t.map(function(e){return o.a.createElement(g,{key:e.id,note:e,setCurrentNote:n})}))))},p=n(6),N=n(89),v=n.n(N),E=n(90),w=n.n(E),O=n(91),C=n.n(O),y=p.a.create({sidebar:{width:"6rem",backgroundColor:"#f3f3f3",padding:"0.5rem 0",display:"flex",flexDirection:"column",alignItems:"center"},logo:{fontFamily:'"Fauna One"',color:"#666",fontSize:"3rem"},logoImg:{width:"3rem",paddingLeft:"0.4rem"},newNote:{marginTop:"2rem",position:"relative",width:"4rem"},newNoteImg:{position:"absolute",left:"0",width:"100%",transition:"opacity 0.25s ease-in-out"},newNoteImgHover:{":hover":{opacity:0}},signOut:{position:"absolute",bottom:"1rem"},button:{backgroundColor:"transparent",border:"0",color:"#008bf8",cursor:"pointer",outline:"none"},buttonIcon:{fontSize:"2rem"}}),I=function(e){var t=e.resetCurrentNote,n=e.signOut;return o.a.createElement("div",{className:Object(p.b)(y.sidebar)},o.a.createElement("div",{className:Object(p.b)(y.logo)},o.a.createElement("img",{src:v.a,alt:"Scribble",className:Object(p.b)(y.logoImg)})),o.a.createElement("a",{href:"/notes",className:Object(p.b)(y.newNote),onClick:function(e){e.preventDefault(),t()}},o.a.createElement("img",{src:C.a,alt:"New Note",className:Object(p.b)(y.newNoteImg)}),o.a.createElement("img",{src:w.a,alt:"New Note",className:Object(p.b)(y.newNoteImg,y.newNoteImgHover)})),o.a.createElement("div",{className:Object(p.b)(y.signOut)},o.a.createElement("button",{className:Object(p.b)(y.button),onClick:n},o.a.createElement("i",{className:"fas fa-sign-out-alt ".concat(Object(p.b)(y.buttonIcon)),title:"sign out"}," "))))},j=n(17),k=n.n(j),S=(n(183),n(92)),x=n.n(S),A=(n(188),k.a.initializeApp({apiKey:"AIzaSyAxzFARpr5XpEuc1BeqiPeCcrxwZ10TyLE",authDomain:"scribble-cs252.firebaseapp.com",databaseURL:"https://scribble-cs252.firebaseio.com",projectId:"scribble-cs252",storageBucket:"scribble-cs252.appspot.com",messagingSenderId:"1072152629926"})),z=k.a.database(A),D=new k.a.auth.GithubAuthProvider,W=new k.a.auth.GoogleAuthProvider,B=A.auth(),F=x.a.createClass(z),G=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).blankNote=function(){return{id:null,title:"",body:""}},e.setCurrentNote=function(t){e.setState({currentNote:t})},e.resetCurrentNote=function(){e.setCurrentNote(e.blankNote())},e.saveNote=function(t){var n=Object(d.a)(e.state.notes);if(t.id){var a=n.findIndex(function(e){return e.id===t.id});n[a]=t}else t.id=Date.now(),n.push(t);e.setState({notes:n}),e.setCurrentNote(t)},e.removeCurrentNote=function(){var t=Object(d.a)(e.state.notes),n=t.findIndex(function(t){return t.id===e.state.currentNote.id});n>-1&&(t.splice(n,1),e.setState({notes:t})),e.resetCurrentNote()},e.state={currentNote:e.blankNote(),notes:[]},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){F.syncState("notes/".concat(this.props.uid),{context:this,state:"notes",asArray:!0})}},{key:"render",value:function(){return o.a.createElement("div",{classname:"Main",style:H},o.a.createElement(I,{resetCurrentNote:this.resetCurrentNote,signOut:this.props.signOut}),o.a.createElement(h,{notes:this.state.notes,setCurrentNote:this.setCurrentNote}),o.a.createElement(f,{currentNote:this.state.currentNote,saveNote:this.saveNote,removeCurrentNote:this.removeCurrentNote}))}}]),t}(o.a.Component),H={display:"flex",height:"100vh",alignItems:"stretch"},L=G,P=(n(190),n(93)),T=n.n(P),q=function(){var e=function(e){B.signInWithPopup(e)};return o.a.createElement("div",{className:"SignIn"},o.a.createElement("header",{className:"Header"},o.a.createElement("img",{src:"media/quill.svg",alt:""}),o.a.createElement("span",{className:"title"})),o.a.createElement("main",null,o.a.createElement("h3",null,"Welcome to Scribble!"),o.a.createElement("p",null,"The best place to keep track of what you need to get done and scribble down your notes"),o.a.createElement("button",{className:"github",onClick:function(){return e(D)}},o.a.createElement("i",{className:"fab fa-github"}),"Sign in with GitHub"),o.a.createElement("button",{className:"google",onClick:function(){return e(W)}},o.a.createElement("img",{src:T.a,alt:""}),"Sign in with Google")))},M=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={uid:null},n.handleAuth=function(e){n.setState({uid:e.uid}),localStorage.setItem("uid",e.uid)},n.signedIn=function(){return n.state.uid},n.signOut=function(){n.setState({uid:null}),B.signOut(),localStorage.removeItem("uid")},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("uid");t&&this.setState({uid:t}),B.onAuthStateChanged(function(t){t?e.handleAuth(t):e.signOut()})}},{key:"render",value:function(){return o.a.createElement("div",{classname:"App"},this.signedIn()?o.a.createElement(L,{signOut:this.signOut,uid:this.state.uid}):o.a.createElement(q,{handleAuth:this.handleAuth}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},89:function(e,t,n){e.exports=n.p+"static/media/quill.d2ea47fa.svg"},90:function(e,t,n){e.exports=n.p+"static/media/new.2718a414.png"},91:function(e,t,n){e.exports=n.p+"static/media/new-hover.751b2c31.png"},93:function(e,t,n){e.exports=n.p+"static/media/google.ffe5e6be.svg"},95:function(e,t,n){e.exports=n(191)}},[[95,1,2]]]);
//# sourceMappingURL=main.048363fc.chunk.js.map