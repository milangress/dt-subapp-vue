webpackJsonp([1],{"2o5z":function(t,e){},"3Z3S":function(t,e){},"8srM":function(t,e){},BSLh:function(t,e){},E05U:function(t,e){},KxZh:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=i("VU/8")({name:"App"},s,!1,function(t){i("8srM")},null,null).exports,a=i("/ocq"),o=i("Zrlr"),h=i.n(o),l=i("wxAW"),c=i.n(l),d=Math.PI,u=2*Math.PI,g=Math.PI/2,p=Math.PI/12,f=function(){function t(e,i,n,s){h()(this,t),this.name=e,this.children=[],this.parent=null,this._radians=i,n.sort(),this._constraints=n,this.distance=3*s,this.applyConstraints()}return c()(t,[{key:"applyConstraints",value:function(){this._radians=Math.max(this._radians,this._constraints[0]),this._radians=Math.min(this._radians,this._constraints[1])}},{key:"setParent",value:function(t){t&&(this.parent=t)}},{key:"addChild",value:function(t){t&&-1===this.children.indexOf(t)&&this.children.push(t)}},{key:"getX",value:function(){return(this.parent?this.parent.x:0)+Math.cos(this.radians)*this.distance}},{key:"getY",value:function(){return(this.parent?this.parent.y:0)+Math.sin(this.radians)*this.distance}},{key:"getRadians",value:function(){return(this.parent?this.parent.radians:0)+this._radians}},{key:"getEdges",value:function(){var t=[];if(this.parent){var e={id:this.name,x1:this.parent.x,y1:this.parent.y,x2:this.parent.x+Math.cos(this.radians)*this.distance,y2:this.parent.y+Math.sin(this.radians)*this.distance};t.push(e)}return this.children.forEach(function(e){t=t.concat(e.getEdges())}),t}},{key:"rotate",value:function(){this._radians+=.1*(Math.random()*u-Math.PI),this.applyConstraints(),this.children.forEach(function(t){t.rotate()})}},{key:"x",get:function(){return this.getX()}},{key:"y",get:function(){return this.getY()}},{key:"radians",get:function(){return this.getRadians()}}],[{key:"link",value:function(t,e){e.setParent(t),t.addChild(e)}}]),t}(),m=function(){function t(){h()(this,t);var e=new f("hip",0,[0,0],0),i=new f("spine",3*g,[3*g-p,3*g+p],20);f.link(e,i);var n=new f("center-shoulder",0,[-2*p,2*p],50);f.link(i,n);var s=new f("head",0,[3*-p,3*p],30);f.link(n,s);var r=new f("left-shoulder",-g,[-g-p,-g+p],30);f.link(n,r);var a=new f("left-elbow",2*-p,[4*-p,3*p],30);f.link(r,a);var o=new f("left-wrist",0,[-g,p],30);f.link(a,o);var l=new f("left-hand",0,[-p,p],20);f.link(o,l);var c=new f("right-shoulder",g,[g-p,g+p],30);f.link(n,c);var u=new f("right-elbow",2*p,[3*-p,4*p],30);f.link(c,u);var m=new f("right-wrist",0,[-p,g],30);f.link(u,m);var v=new f("right-hand",0,[-p,p],20);f.link(m,v);var w=new f("left-hip",d-2*p,[d-3*p,d-p],20);f.link(e,w);var y=new f("left-knee",2*-p,[3*-p,3*p],50);f.link(w,y);var k=new f("left-ankle",0,[3*-p,3*p],50);f.link(y,k);var x=new f("left-foot",0,[3*-p,3*p],20);f.link(k,x);var C=new f("right-hip",2*p,[p,3*p],20);f.link(e,C);var _=new f("right-knee",2*p,[3*-p,3*p],50);f.link(C,_);var M=new f("right-ankle",0,[3*-p,3*p],50);f.link(_,M);var S=new f("right-foot",0,[3*-p,3*p],20);f.link(M,S),this.joints=[],this.joints.push(e)}return c()(t,[{key:"getEdges",value:function(){return this.joints.reduce(function(t,e){return t.concat(e.getEdges())},[])}},{key:"rotate",value:function(){this.joints.forEach(function(t){t.rotate()})}}]),t}(),v=new m,w={data:function(){return{currentTime:0}},mounted:function(){},computed:{svgSize:function(){return{width:window.innerWidth,height:window.innerHeight}},lines:function(){return 0===Math.round(this.$store.state.time%2)&&v.rotate(),v.getEdges()}},methods:{}},y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{width:"100vw",height:"100vh"}},[e("g",{attrs:{transform:"translate("+this.svgSize.width/2+", "+this.svgSize.height/2+")"}},this._l(this.lines,function(t,i){return e("line",{key:"line-"+i+"-"+t.id,attrs:{id:t.id,x1:t.x1,y1:t.y1,x2:t.x2,y2:t.y2}})}))])},staticRenderFns:[]};var k=i("VU/8")(w,y,!1,function(t){i("2o5z")},"data-v-61283fa2",null).exports,x={data:function(){return{scale:500,radius:.5,circleRadius:50,damping:5e-4,circleFill:"rgb(120,120,120)"}},computed:{viewBox:function(){return-1*this.scale+" "+-1*this.scale+" "+2*this.scale+" "+2*this.scale},time:function(){return this.$store.state.time},circlePos:function(){return{x:this.radius*Math.cos(this.time*this.damping)*this.scale,y:this.radius*Math.sin(this.time*this.damping)*this.scale}}},methods:{test:function(){this.circleFill="rgb("+parseInt(255*Math.random())+","+parseInt(255*Math.random())+","+parseInt(255*Math.random())+")"}}},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{width:"800",height:"800",viewBox:this.viewBox,preserveAspectRatio:"xMidYMid meet"}},[e("g",[e("circle",{attrs:{cx:this.circlePos.x,cy:this.circlePos.y,r:this.circleRadius,fill:this.circleFill},on:{click:this.test}})])])},staticRenderFns:[]};var _=i("VU/8")(x,C,!1,function(t){i("E05U")},"data-v-78940f6c",null).exports,M=new m,S={data:function(){return{grid:{columns:9,rows:16},currentTime:0,resizingCell:!1,lastFrameTime:-1,frameLength:1e3,lines:[]}},mouted:function(){},computed:{svgSize:function(){return{width:window.innerWidth,height:window.innerHeight}},gridCell:function(){return{width:this.svgSize.width/this.grid.columns,height:this.svgSize.height/this.grid.rows}},nextFrame:function(){return this.$store.state.time-this.lastFrameTime>=this.frameLength}},watch:{nextFrame:function(){this.lastFrameTime=this.$store.state.time,M.rotate(),this.updateSkeleton()}},methods:{initResizeCell:function(){this.resizingCell=!0},doResizeCell:function(t){this.resizingCell&&(this.grid.columns=Math.round(this.svgSize.width/t.clientX),this.grid.rows=Math.round(this.svgSize.height/t.clientY),this.updateSkeleton())},stopResizeCell:function(){this.resizingCell=!1},handleKeyUp:function(t){console.log(t)},updateSkeleton:function(){var t=M.getEdges(),e=Math.round(this.grid.columns/2),i=Math.round(this.grid.rows/2),n=this.gridCell.width,s=this.gridCell.height;this.lines=t.map(function(t){return{x1:e+Math.round(t.x1/n),y1:i+Math.round(t.y1/s),x2:e+Math.round(t.x2/n),y2:i+Math.round(t.y2/s)}})}}},z={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("svg",{attrs:{width:"100vw",height:"100vh"},on:{mousemove:t.doResizeCell,mouseup:t.stopResizeCell}},[i("defs",[i("pattern",{attrs:{id:"cell-pattern",width:t.gridCell.width,height:t.gridCell.height,patternUnits:"userSpaceOnUse"}},[i("path",{attrs:{d:"M "+t.gridCell.width+" 0 L 0 0 0 "+t.gridCell.height,fill:"none",stroke:"gray","stroke-width":"3"}})])]),i("g",[i("rect",{attrs:{width:"100%",height:"100%",fill:"url(#cell-pattern)"}}),t._l(t.lines,function(e,n){return i("line",{key:"line-"+n,attrs:{x1:e.x1*t.gridCell.width,y1:e.y1*t.gridCell.height,x2:e.x2*t.gridCell.width,y2:e.y2*t.gridCell.height}})}),i("ellipse",{class:{resizing:t.resizingCell},attrs:{id:"resize-handle",cx:t.gridCell.width,cy:t.gridCell.height,rx:"4",ry:"4"},on:{mousedown:t.initResizeCell}})],2)])},staticRenderFns:[]};var $={MrGriddle:i("VU/8")(S,z,!1,function(t){i("pxfZ")},"data-v-9a3e192a",null).exports},P={inheritAttrs:!1,props:["x","y","rx","ry","start","end","pieChart","closed"],computed:{arcPath:function(){var t=2*Math.PI,e=t*this.start,i=t*this.end;return{x1:this.x+Math.cos(e)*this.rx,y1:this.y+Math.sin(e)*this.ry,x2:this.x+Math.cos(i)*this.rx,y2:this.y+Math.sin(i)*this.ry}}}},E={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("g",[i("path",t._b({attrs:{stroke:t.pieChart&&!t.closed?"none":t.$attrs.stroke,d:"M "+t.arcPath.x1+","+t.arcPath.y1+" A "+t.rx+","+t.ry+" 1 "+(t.end-t.start<=.5?0:1)+" 1 "+t.arcPath.x2+","+t.arcPath.y2+(t.pieChart?"L "+t.x+","+t.y:"")+(t.closed?"Z":"")}},"path",t.$attrs,!1)),t.pieChart&&!t.closed?[i("path",t._b({attrs:{fill:"none",d:"M "+t.arcPath.x1+","+t.arcPath.y1+" A "+t.rx+","+t.ry+" 1 "+(t.end-t.start<=.5?0:1)+" 1 "+t.arcPath.x2+","+t.arcPath.y2}},"path",t.$attrs,!1))]:t._e()],2)},staticRenderFns:[]};var F={components:{svgArc:i("VU/8")(P,E,!1,function(t){i("3Z3S")},"data-v-013d995a",null).exports},data:function(){return{values:[0,.2,.44,.55,.7,1],colors:["red","limegreen","lightblue","orange","pink"],arc:{x:0,y:0,rx:200,ry:100,closed:!1,pieChart:!0}}},mounted:function(){},computed:{canvasSize:function(){return this.$refs.svgContainer?{width:this.$refs.svgContainer.clientWidth,height:this.$refs.svgContainer.clientHeight}:{width:window.innerWidth,height:window.innerHeight}},time:function(){return this.$store.state.time},segments:function(){var t=this,e=[],i=0;return this.values.forEach(function(n,s){n+=1e-4*t.time,s>0&&e.push([i,n]),i=n}),e}},methods:{handleClick:function(t){console.log("Clicked segment",t)}}},R={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("svg",{ref:"svgContainer",attrs:{width:"100vw",height:"100vh"}},[i("g",{attrs:{transform:"translate("+t.canvasSize.width/2+", "+t.canvasSize.height/2+")"}},[t._l(t.segments,function(e,n){return[i("g",{staticClass:"segment",attrs:{fill:t.colors[n],stroke:"black","stroke-width":"10"},on:{click:function(){t.handleClick(n)}}},[i("svg-arc",{attrs:{x:t.arc.x,y:t.arc.y,rx:t.arc.rx,ry:t.arc.ry,closed:t.arc.closed,pieChart:t.arc.pieChart,start:e[0],end:e[1]}})],1)]}),i("circle",{attrs:{cx:t.arc.x,cy:t.arc.y,r:"8",fill:"black"}})],2)])},staticRenderFns:[]};var A=i("VU/8")(F,R,!1,function(t){i("KxZh")},"data-v-b22c8c58",null).exports,T={data:function(){return{points:[],path:"",drag:!1,animate:!1,pathLength:[],colors:["#83AE9B","#C8C8A9","#F9CDAE","#F69A9A","#EF4566"],selectedColor:"#000000",usedColors:[],pathCollection:[],dashOffset:[],animations:[]}},computed:{animator:function(){var t=this;return this.animate?this.dashOffset.map(function(e){return e-=.1*t.$store.state.time%e}):0},svgSize:function(){return{width:window.innerWidth,height:window.innerHeight}}},methods:{initDraw:function(){this.drag=!0,this.path="",this.points=[]},draw:function(t){var e=t.clientX,i=t.clientY;this.drag&&(this.points.push(e+","+i),this.path=this.points.join(" "))},stopDraw:function(){this.pathLength.push(this.$el.querySelector(".drawing").getTotalLength()),this.dashOffset.push(this.$el.querySelector(".drawing").getTotalLength()),this.animations.push(!0),this.pathCollection.push(this.path),this.usedColors.push(this.selectedColor),this.path="",this.drag=!1},play:function(){this.animate=!0},stop:function(){this.animate=!1},circlesY:function(t){return this.svgSize.height/2*.85+50*t},selectColor:function(t){this.selectedColor=this.colors[t]}}},b={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("svg",{attrs:{width:"100vw",height:"100vh"}},[i("g",{on:{mousedown:t.initDraw,mousemove:t.draw,mouseup:t.stopDraw}},[i("rect",{attrs:{x:t.svgSize.width/2-t.svgSize.width/2*.85,y:t.svgSize.height/2-t.svgSize.height/2*.85,width:"85%",height:"85%",fill:"white",stroke:"grey","stroke-width":"3"}}),i("polyline",{class:{drawing:!0},style:{stroke:t.selectedColor},attrs:{points:t.path,fill:"none","stroke-linejoin":"round"}}),t._l(t.pathCollection,function(e,n){return i("polyline",{class:{drawing:!0},style:{stroke:t.usedColors[n],"stroke-dasharray":t.pathLength[n],"stroke-dashoffset":t.animations[n]?t.animator[n]:0},attrs:{points:t.pathCollection[n],fill:"none","stroke-linejoin":"round"}})})],2),i("g",[i("circle",{attrs:{cx:"50",cy:"20%",r:"20",stroke:"grey","stroke-width":"2",fill:"white"},on:{click:t.play}}),i("circle",{attrs:{cx:"50",cy:"30%",r:"20",stroke:"grey","stroke-width":"2",fill:"white"},on:{click:t.stop}}),t._l(t.colors,function(e,n){return i("circle",{attrs:{cx:"50",cy:t.circlesY(n),r:"20",stroke:"grey","stroke-width":"2",fill:e},on:{click:function(e){t.selectColor(n)}}})})],2)])])},staticRenderFns:[]};var I=i("VU/8")(T,b,!1,function(t){i("BSLh")},"data-v-3477a352",null).exports,U={data:function(){return{payload:{strategy:"local",username:void 0,password:void 0},loggedIn:!1,timelines:[]}},methods:{loginUser:function(){var t=this;return this.$store.dispatch("auth/authenticate",t.payload).then(function(){t.loggedIn=!0}).catch(function(e){t.loggedIn=!1,console.log(e),window.alert(e.message)})},listTimelines:function(){if(this.loggedIn){var t=this;this.$store.dispatch("maps/find",{query:{type:"Timeline"}}).then(function(e){console.log(e),t.timelines=e})}}}},L={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.loggedIn?i("div",{attrs:{id:"timelines"}},[t._v("We have "+t._s(t.timelines.length)+" timelines."),i("button",{on:{click:t.listTimelines}},[t._v("Fetch Timelines")])]):t._e(),t.loggedIn?t._e():i("div",{attrs:{id:"loginbox"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.payload.email,expression:"payload.email"}],attrs:{type:"text",placeholder:"email"},domProps:{value:t.payload.email},on:{input:function(e){e.target.composing||t.$set(t.payload,"email",e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.payload.password,expression:"payload.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:t.payload.password},on:{input:function(e){e.target.composing||t.$set(t.payload,"password",e.target.value)}}}),i("button",{on:{click:t.loginUser}},[t._v("Login")])])])},staticRenderFns:[]};var j=i("VU/8")(U,L,!1,function(t){i("rlH0")},"data-v-19e743e1",null).exports;n.a.use(a.a);var D=new a.a({routes:[{path:"/tests/skeleton",name:"SkeletonTest",component:k},{path:"/mr-griddle",name:"MrGriddle",component:$.MrGriddle},{path:"/rhythm-shoes",name:"RhythmAndShoes",component:A},{path:"/",name:"DanceOMat",component:_},{path:"/login",name:"Login",component:j},{path:"/path-drawer",name:"PathDrawer",component:I}]}),H=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;h()(this,t),this._fps=e,this._frametime=1e3/this._fps,this._resolution=i,this._store=n,this._time=Date.now(),this._running=!1}return c()(t,[{key:"start",value:function(){this._running=!0,this.checkAndSetTime()}},{key:"stop",value:function(){clearTimeout(this._running),this._running=!1}},{key:"checkAndSetTime",value:function(){var t=this;setTimeout(function(){t.checkAndSetTime()},this._resolution),Date.now()-this._time>=this._frametime&&(this._time=Date.now(),this._store&&this._store.commit("time",this._time))}}]),t}(),V=i("NYxO"),O=i("ddF3"),W=i.n(O),Y=i("Vjoj"),Z=i.n(Y),B=i("R3Xx"),G=i.n(B),N=i("P7rh"),X=i.n(N),q=i("GG98"),K=i.n(q);n.a.use(V.a);var J,Q,tt={idField:"uuid"},et=(J="https://motionbank-api.herokuapp.com",(Q=Z()()).configure(G()(J).superagent(K.a)),Q.configure(X()({storage:window.localStorage})),Q),it=W()(et,tt),nt=it.service,st=it.auth,rt=new V.a.Store({plugins:[nt("annotations",tt),nt("maps",tt),nt("users",tt),st({userService:"users"})],state:{time:0},mutations:{time:function(t,e){t.time=e}}});n.a.config.productionTip=!1,new H(50,10,rt).start(),new n.a({el:"#app",router:D,store:rt,components:{App:r},template:"<App/>"})},pxfZ:function(t,e){},rlH0:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.1b5758fb01f55a61faac.js.map