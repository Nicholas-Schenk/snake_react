(this["webpackJsonpmosh-app"]=this["webpackJsonpmosh-app"]||[]).push([[0],{15:function(t,e,s){},19:function(t,e,s){"use strict";s.r(e);var i=s(2),a=s(9),c=s.n(a),v=(s(15),s(16),s(8)),n=s.n(v),j=s(10),r=s(1),h=s(6),o=s(5),b=s(4),O=s(3),l=s(0),x=function(t){Object(h.a)(s,t);var e=Object(o.a)(s);function s(t){return Object(O.a)(this,s),e.call(this,t)}return Object(b.a)(s,[{key:"render",value:function(){return 0===this.props.active?Object(l.jsx)("div",{className:"border",style:{width:"4vw",height:"4vw"}}):1===this.props.active?Object(l.jsx)("div",{className:"border bg-warning",style:{width:"4vw",height:"4vw"}}):Object(l.jsx)("div",{className:"border bg-danger",style:{width:"4vw",height:"4vw"}})}}]),s}(i.Component),d=function t(e,s){Object(O.a)(this,t),this.next=s,this.pos=e},u=function(){function t(e,s){Object(O.a)(this,t),this.front=e,this.back=s}return Object(b.a)(t,[{key:"push",value:function(t){t.next=this.back,this.back=t}},{key:"move",value:function(t){var e=new d(t,null);this.back=this.back.next,this.front.next=e,this.front=e,null===this.back&&(this.back=e)}}]),t}(),f=function(t){Object(h.a)(s,t);var e=Object(o.a)(s);function s(t){var i;Object(O.a)(this,s),(i=e.call(this,t)).sleep=function(t){return new Promise((function(e){return setTimeout(e,t)}))};var a=new d(0,null);return i.state={active:[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],food:55,snake:new u(a,a),current:0,direction:"right",gameOver:!1,delay:1e3},i.handleArrowLeft=i.handleArrowLeft.bind(Object(r.a)(i)),i.handleArrowRight=i.handleArrowRight.bind(Object(r.a)(i)),i.handleArrowDown=i.handleArrowDown.bind(Object(r.a)(i)),i.handleArrowUp=i.handleArrowUp.bind(Object(r.a)(i)),i.handleKeyPress=i.handleKeyPress.bind(Object(r.a)(i)),i.restart=i.restart.bind(Object(r.a)(i)),i}return Object(b.a)(s,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyPress)}},{key:"newFood",value:function(t){for(var e=Math.floor(135*Math.random());2===t[e];)e=Math.floor(135*Math.random());return console.log("new food pos: "+e),e}},{key:"moveInDirection",value:function(){if("right"===this.state.direction)if(this.state.current%15!==14){var t=this.state.current+1,e=Array(135).fill(0),s=-1;e[this.state.food]=1;var i=this.state.snake;this.state.current+1===this.state.food?(i.push(new d(this.state.current)),i.move(this.state.current+1),s=-2):i.move(this.state.current+1);for(var a=i.back,c=0;null!=a;)console.log(c+", POS: "+a.pos),e[a.pos]=2,c++,a=a.next;-1!=s?(e[s=this.newFood(e)]=1,this.setState({current:t,active:e,snake:i,food:s})):this.setState({current:t,active:e,snake:i})}else this.setState({gameOver:!0});else if("left"===this.state.direction)if(this.state.current%15!==0){var v=this.state.current-1,n=Array(135).fill(0),j=this.state.snake,r=-1;n[this.state.food]=1,this.state.current-1===this.state.food?(j.push(new d(this.state.current)),j.move(this.state.current-1),r=-2):j.move(this.state.current-1);for(var h=j.back,o=0;null!=h;)console.log(o+", POS: "+h.pos),o++,n[h.pos]=2,h=h.next;-1!=r?(n[r=this.newFood(n)]=1,this.setState({current:v,active:n,snake:j,food:r})):this.setState({current:v,active:n,snake:j})}else this.setState({gameOver:!0});else if("down"===this.state.direction)if(this.state.current<120){var b=this.state.current+15,O=Array(135).fill(0);O[this.state.food]=1;var l=-1,x=this.state.snake;O[this.state.food]=1,this.state.current+15===this.state.food?(x.push(new d(this.state.current)),x.move(this.state.current+15),l=-2):x.move(this.state.current+15);for(var u=this.state.snake.back,f=0;null!=u;)console.log(f+", POS: "+u.pos),f++,O[u.pos]=2,u=u.next;-1!=l?(O[l=this.newFood(O)]=1,this.setState({current:b,active:O,snake:x,food:l})):this.setState({current:b,active:O,snake:x})}else this.setState({gameOver:!0});else if("up"===this.state.direction)if(this.state.current>14){var y=this.state.current-15,m=Array(135).fill(0),w=-1;m[this.state.food]=1;var k=this.state.snake;this.state.current-15===this.state.food?(k.push(new d(this.state.current)),k.move(this.state.current-15),w=-2):k.move(this.state.current-15);for(var p=k.back,A=0;null!=p;)console.log(A+", POS: "+p.pos),A++,m[p.pos]=2,p=p.next;-1!=w?(m[w=this.newFood(m)]=1,this.setState({current:y,active:m,snake:k,food:w})):this.setState({current:y,active:m,snake:k})}else this.setState({gameOver:!0})}},{key:"start",value:function(){var t=Object(j.a)(n.a.mark((function t(){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:0;case 1:if(this.state.gameOver){t.next=8;break}return t.next=4,this.sleep(this.state.delay);case 4:this.moveInDirection(),t.next=1;break;case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"handleArrowLeft",value:function(){"right"!==this.state.direction&&this.setState({direction:"left"})}},{key:"handleArrowUp",value:function(){"down"!==this.state.direction&&this.setState({direction:"up"})}},{key:"handleArrowRight",value:function(){"left"!==this.state.direction&&this.setState({direction:"right"})}},{key:"handleArrowDown",value:function(){"up"!==this.state.direction&&this.setState({direction:"down"})}},{key:"handleKeyPress",value:function(t){37===t.keyCode?this.handleArrowLeft():38===t.keyCode?this.handleArrowUp():39===t.keyCode?this.handleArrowRight():40===t.keyCode&&this.handleArrowDown()}},{key:"restartEasy",value:function(){this.restart(300)}},{key:"restartHard",value:function(){this.restart(100)}},{key:"restart",value:function(t){var e=new Array(135).fill(0);e[0]=2,e[55]=1;var s=new d(0,null);this.setState({active:e,current:0,food:55,snake:new u(s,s),gameOver:!1,direction:"right",delay:t})}},{key:"render",value:function(){if(!0===this.state.gameOver){for(var t=0,e=this.state.snake.back;null!=e;)t++,e=e.next;return Object(l.jsx)("div",{className:"container-fluid",style:{marginTop:75},children:Object(l.jsxs)("div",{className:"col-12",children:[Object(l.jsx)("div",{className:"row",style:{justifyContent:"center"},children:Object(l.jsx)("h3",{children:"GAME OVER!"})}),Object(l.jsx)("div",{className:"row",style:{justifyContent:"center"},children:Object(l.jsxs)("p",{children:["Your score was ",t," "]})}),Object(l.jsxs)("div",{className:"row",style:{justifyContent:"center"},children:[Object(l.jsx)("button",{className:"btn btn-primary m-4",onClick:this.restartEasy.bind(this),children:"PLAY AN EASY GAME"}),Object(l.jsx)("button",{className:"btn btn-primary m-4",onClick:this.restartHard.bind(this),children:"PLAY A HARD GAME"})]})]})})}return 1e3===this.state.delay?Object(l.jsx)("div",{className:"container-fluid",style:{marginTop:75},children:Object(l.jsx)("div",{className:"col-12",children:Object(l.jsxs)("div",{className:"row",style:{justifyContent:"center"},children:[Object(l.jsx)("button",{className:"btn btn-primary m-4",onClick:this.restartEasy.bind(this),children:"PLAY AN EASY GAME"}),Object(l.jsx)("button",{className:"btn btn-primary m-4",onClick:this.restartHard.bind(this),children:"PLAY A HARD GAME"})]})})}):Object(l.jsx)("div",{className:"container-fluid",children:Object(l.jsxs)("div",{className:"col-12",style:{marginTop:50,justifyContent:"center"},children:[Object(l.jsxs)("div",{className:"row",style:{justifyContent:"center"},children:[Object(l.jsx)(x,{active:this.state.active[0]}),Object(l.jsx)(x,{active:this.state.active[1]}),Object(l.jsx)(x,{active:this.state.active[2]}),Object(l.jsx)(x,{active:this.state.active[3]}),Object(l.jsx)(x,{active:this.state.active[4]}),Object(l.jsx)(x,{active:this.state.active[5]}),Object(l.jsx)(x,{active:this.state.active[6]}),Object(l.jsx)(x,{active:this.state.active[7]}),Object(l.jsx)(x,{active:this.state.active[8]}),Object(l.jsx)(x,{active:this.state.active[9]}),Object(l.jsx)(x,{active:this.state.active[10]}),Object(l.jsx)(x,{active:this.state.active[11]}),Object(l.jsx)(x,{active:this.state.active[12]}),Object(l.jsx)(x,{active:this.state.active[13]}),Object(l.jsx)(x,{active:this.state.active[14]})]}),Object(l.jsxs)("div",{className:"row",style:{justifyContent:"center"},children:[Object(l.jsx)(x,{active:this.state.active[15]}),Object(l.jsx)(x,{active:this.state.active[16]}),Object(l.jsx)(x,{active:this.state.active[17]}),Object(l.jsx)(x,{active:this.state.active[18]}),Object(l.jsx)(x,{active:this.state.active[19]}),Object(l.jsx)(x,{active:this.state.active[20]}),Object(l.jsx)(x,{active:this.state.active[21]}),Object(l.jsx)(x,{active:this.state.active[22]}),Object(l.jsx)(x,{active:this.state.active[23]}),Object(l.jsx)(x,{active:this.state.active[24]}),Object(l.jsx)(x,{active:this.state.active[25]}),Object(l.jsx)(x,{active:this.state.active[26]}),Object(l.jsx)(x,{active:this.state.active[27]}),Object(l.jsx)(x,{active:this.state.active[28]}),Object(l.jsx)(x,{active:this.state.active[29]})]}),Object(l.jsxs)("div",{className:"row",style:{justifyContent:"center"},children:[Object(l.jsx)(x,{active:this.state.active[30]}),Object(l.jsx)(x,{active:this.state.active[31]}),Object(l.jsx)(x,{active:this.state.active[32]}),Object(l.jsx)(x,{active:this.state.active[33]}),Object(l.jsx)(x,{active:this.state.active[34]}),Object(l.jsx)(x,{active:this.state.active[35]}),Object(l.jsx)(x,{active:this.state.active[36]}),Object(l.jsx)(x,{active:this.state.active[37]}),Object(l.jsx)(x,{active:this.state.active[38]}),Object(l.jsx)(x,{active:this.state.active[39]}),Object(l.jsx)(x,{active:this.state.active[40]}),Object(l.jsx)(x,{active:this.state.active[41]}),Object(l.jsx)(x,{active:this.state.active[42]}),Object(l.jsx)(x,{active:this.state.active[43]}),Object(l.jsx)(x,{active:this.state.active[44]})]}),Object(l.jsxs)("div",{className:"row",style:{justifyContent:"center"},children:[Object(l.jsx)(x,{active:this.state.active[45]}),Object(l.jsx)(x,{active:this.state.active[46]}),Object(l.jsx)(x,{active:this.state.active[47]}),Object(l.jsx)(x,{active:this.state.active[48]}),Object(l.jsx)(x,{active:this.state.active[49]}),Object(l.jsx)(x,{active:this.state.active[50]}),Object(l.jsx)(x,{active:this.state.active[51]}),Object(l.jsx)(x,{active:this.state.active[52]}),Object(l.jsx)(x,{active:this.state.active[53]}),Object(l.jsx)(x,{active:this.state.active[54]}),Object(l.jsx)(x,{active:this.state.active[55]}),Object(l.jsx)(x,{active:this.state.active[56]}),Object(l.jsx)(x,{active:this.state.active[57]}),Object(l.jsx)(x,{active:this.state.active[58]}),Object(l.jsx)(x,{active:this.state.active[59]})]}),Object(l.jsxs)("div",{className:"row",style:{justifyContent:"center"},children:[Object(l.jsx)(x,{active:this.state.active[60]}),Object(l.jsx)(x,{active:this.state.active[61]}),Object(l.jsx)(x,{active:this.state.active[62]}),Object(l.jsx)(x,{active:this.state.active[63]}),Object(l.jsx)(x,{active:this.state.active[64]}),Object(l.jsx)(x,{active:this.state.active[65]}),Object(l.jsx)(x,{active:this.state.active[66]}),Object(l.jsx)(x,{active:this.state.active[67]}),Object(l.jsx)(x,{active:this.state.active[68]}),Object(l.jsx)(x,{active:this.state.active[69]}),Object(l.jsx)(x,{active:this.state.active[70]}),Object(l.jsx)(x,{active:this.state.active[71]}),Object(l.jsx)(x,{active:this.state.active[72]}),Object(l.jsx)(x,{active:this.state.active[73]}),Object(l.jsx)(x,{active:this.state.active[74]})]}),Object(l.jsxs)("div",{className:"row",style:{justifyContent:"center"},children:[Object(l.jsx)(x,{active:this.state.active[75]}),Object(l.jsx)(x,{active:this.state.active[76]}),Object(l.jsx)(x,{active:this.state.active[77]}),Object(l.jsx)(x,{active:this.state.active[78]}),Object(l.jsx)(x,{active:this.state.active[79]}),Object(l.jsx)(x,{active:this.state.active[80]}),Object(l.jsx)(x,{active:this.state.active[81]}),Object(l.jsx)(x,{active:this.state.active[82]}),Object(l.jsx)(x,{active:this.state.active[83]}),Object(l.jsx)(x,{active:this.state.active[84]}),Object(l.jsx)(x,{active:this.state.active[85]}),Object(l.jsx)(x,{active:this.state.active[86]}),Object(l.jsx)(x,{active:this.state.active[87]}),Object(l.jsx)(x,{active:this.state.active[88]}),Object(l.jsx)(x,{active:this.state.active[89]})]}),Object(l.jsxs)("div",{className:"row",style:{justifyContent:"center"},children:[Object(l.jsx)(x,{active:this.state.active[90]}),Object(l.jsx)(x,{active:this.state.active[91]}),Object(l.jsx)(x,{active:this.state.active[92]}),Object(l.jsx)(x,{active:this.state.active[93]}),Object(l.jsx)(x,{active:this.state.active[94]}),Object(l.jsx)(x,{active:this.state.active[95]}),Object(l.jsx)(x,{active:this.state.active[96]}),Object(l.jsx)(x,{active:this.state.active[97]}),Object(l.jsx)(x,{active:this.state.active[98]}),Object(l.jsx)(x,{active:this.state.active[99]}),Object(l.jsx)(x,{active:this.state.active[100]}),Object(l.jsx)(x,{active:this.state.active[101]}),Object(l.jsx)(x,{active:this.state.active[102]}),Object(l.jsx)(x,{active:this.state.active[103]}),Object(l.jsx)(x,{active:this.state.active[104]})]}),Object(l.jsxs)("div",{className:"row",style:{justifyContent:"center"},children:[Object(l.jsx)(x,{active:this.state.active[105]}),Object(l.jsx)(x,{active:this.state.active[106]}),Object(l.jsx)(x,{active:this.state.active[107]}),Object(l.jsx)(x,{active:this.state.active[108]}),Object(l.jsx)(x,{active:this.state.active[109]}),Object(l.jsx)(x,{active:this.state.active[110]}),Object(l.jsx)(x,{active:this.state.active[111]}),Object(l.jsx)(x,{active:this.state.active[112]}),Object(l.jsx)(x,{active:this.state.active[113]}),Object(l.jsx)(x,{active:this.state.active[114]}),Object(l.jsx)(x,{active:this.state.active[115]}),Object(l.jsx)(x,{active:this.state.active[116]}),Object(l.jsx)(x,{active:this.state.active[117]}),Object(l.jsx)(x,{active:this.state.active[118]}),Object(l.jsx)(x,{active:this.state.active[119]})]}),Object(l.jsxs)("div",{className:"row",style:{justifyContent:"center"},children:[Object(l.jsx)(x,{active:this.state.active[120]}),Object(l.jsx)(x,{active:this.state.active[121]}),Object(l.jsx)(x,{active:this.state.active[122]}),Object(l.jsx)(x,{active:this.state.active[123]}),Object(l.jsx)(x,{active:this.state.active[124]}),Object(l.jsx)(x,{active:this.state.active[125]}),Object(l.jsx)(x,{active:this.state.active[126]}),Object(l.jsx)(x,{active:this.state.active[127]}),Object(l.jsx)(x,{active:this.state.active[128]}),Object(l.jsx)(x,{active:this.state.active[129]}),Object(l.jsx)(x,{active:this.state.active[130]}),Object(l.jsx)(x,{active:this.state.active[131]}),Object(l.jsx)(x,{active:this.state.active[132]}),Object(l.jsx)(x,{active:this.state.active[133]}),Object(l.jsx)(x,{active:this.state.active[134]})]}),Object(l.jsx)("div",{className:"row",style:{marginTop:25,justifyContent:"center"},children:Object(l.jsx)("button",{className:"btn btn-lg btn-danger",onClick:this.start.bind(this),children:"Click to Start!"})})]})})}}]),s}(i.Component);c.a.render(Object(l.jsx)(f,{}),document.getElementById("my-class"))}},[[19,1,2]]]);
//# sourceMappingURL=main.a8fa4a76.chunk.js.map