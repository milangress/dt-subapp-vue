webpackJsonp([1],{"2o5z":function(t,e){},"3Z3S":function(t,e){},"8srM":function(t,e){},BSLh:function(t,e){},JP6S:function(t,e){},JYwI:function(t,e){},KxZh:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=i("VU/8")({name:"App"},r,!1,function(t){i("8srM")},null,null).exports,a=i("/ocq"),o=i("Zrlr"),h=i.n(o),l=i("wxAW"),c=i.n(l),d=Math.PI,u=2*Math.PI,g=Math.PI/2,p=Math.PI/12,f=function(){function t(e,i,n,r){h()(this,t),this.name=e,this.children=[],this.parent=null,this._radians=i,n.sort(),this._constraints=n,this.distance=3*r,this.applyConstraints()}return c()(t,[{key:"applyConstraints",value:function(){this._radians=Math.max(this._radians,this._constraints[0]),this._radians=Math.min(this._radians,this._constraints[1])}},{key:"setParent",value:function(t){t&&(this.parent=t)}},{key:"addChild",value:function(t){t&&-1===this.children.indexOf(t)&&this.children.push(t)}},{key:"getX",value:function(){return(this.parent?this.parent.x:0)+Math.cos(this.radians)*this.distance}},{key:"getY",value:function(){return(this.parent?this.parent.y:0)+Math.sin(this.radians)*this.distance}},{key:"getRadians",value:function(){return(this.parent?this.parent.radians:0)+this._radians}},{key:"getEdges",value:function(){var t=[];if(this.parent){var e={id:this.name,x1:this.parent.x,y1:this.parent.y,x2:this.parent.x+Math.cos(this.radians)*this.distance,y2:this.parent.y+Math.sin(this.radians)*this.distance};t.push(e)}return this.children.forEach(function(e){t=t.concat(e.getEdges())}),t}},{key:"rotate",value:function(){this._radians+=.1*(Math.random()*u-Math.PI),this.applyConstraints(),this.children.forEach(function(t){t.rotate()})}},{key:"x",get:function(){return this.getX()}},{key:"y",get:function(){return this.getY()}},{key:"radians",get:function(){return this.getRadians()}}],[{key:"link",value:function(t,e){e.setParent(t),t.addChild(e)}}]),t}(),m=function(){function t(){h()(this,t);var e=new f("hip",0,[0,0],0),i=new f("spine",3*g,[3*g-p,3*g+p],20);f.link(e,i);var n=new f("center-shoulder",0,[-2*p,2*p],50);f.link(i,n);var r=new f("head",0,[3*-p,3*p],30);f.link(n,r);var s=new f("left-shoulder",-g,[-g-p,-g+p],30);f.link(n,s);var a=new f("left-elbow",2*-p,[4*-p,3*p],30);f.link(s,a);var o=new f("left-wrist",0,[-g,p],30);f.link(a,o);var l=new f("left-hand",0,[-p,p],20);f.link(o,l);var c=new f("right-shoulder",g,[g-p,g+p],30);f.link(n,c);var u=new f("right-elbow",2*p,[3*-p,4*p],30);f.link(c,u);var m=new f("right-wrist",0,[-p,g],30);f.link(u,m);var w=new f("right-hand",0,[-p,p],20);f.link(m,w);var v=new f("left-hip",d-2*p,[d-3*p,d-p],20);f.link(e,v);var y=new f("left-knee",2*-p,[3*-p,3*p],50);f.link(v,y);var S=new f("left-ankle",0,[3*-p,3*p],50);f.link(y,S);var x=new f("left-foot",0,[3*-p,3*p],20);f.link(S,x);var k=new f("right-hip",2*p,[p,3*p],20);f.link(e,k);var F=new f("right-knee",2*p,[3*-p,3*p],50);f.link(k,F);var M=new f("right-ankle",0,[3*-p,3*p],50);f.link(F,M);var _=new f("right-foot",0,[3*-p,3*p],20);f.link(M,_),this.joints=[],this.joints.push(e)}return c()(t,[{key:"getEdges",value:function(){return this.joints.reduce(function(t,e){return t.concat(e.getEdges())},[])}},{key:"rotate",value:function(){this.joints.forEach(function(t){t.rotate()})}}]),t}(),w=new m,v={data:function(){return{currentTime:0}},mounted:function(){},computed:{svgSize:function(){return{width:window.innerWidth,height:window.innerHeight}},lines:function(){return 0===Math.round(this.$store.state.time%2)&&w.rotate(),w.getEdges()}},methods:{}},y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{width:"100vw",height:"100vh"}},[e("g",{attrs:{transform:"translate("+this.svgSize.width/2+", "+this.svgSize.height/2+")"}},this._l(this.lines,function(t,i){return e("line",{key:"line-"+i+"-"+t.id,attrs:{id:t.id,x1:t.x1,y1:t.y1,x2:t.x2,y2:t.y2}})}))])},staticRenderFns:[]};var S=i("VU/8")(v,y,!1,function(t){i("2o5z")},"data-v-61283fa2",null).exports,x=i("Xxa5"),k=i.n(x),F=i("exGp"),M=i.n(F),_=i("//Fk"),C=i.n(_),z=i("GG98"),D=i.n(z),P=void 0,I=function(){return P?C.a.resolve(P):D.a.get(Object({NODE_ENV:"production"}).PARAM_HOST||"http://10.10.10.102:4444").then(function(t){return console.log(t),P=t.body}).catch(function(t){console.log("Params error",t)})},$={name:"StartSeite",data:function(){return{tools:[]}},mounted:function(){var t=this;return M()(k.a.mark(function e(){var i;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=t,e.next=3,t.$loginOrSignup(t.$store);case 3:I().then(function(t){console.log(t);var e=t.urls[0];i.tools=[{name:"Mr. Griddle",path:e.subappVue+"/#/mr-griddle"},{name:"Rezepte",path:e.subappQuasar+"/allrecipes"},{name:"Lost in Space",path:e.subappVue+"/#/lost-in-space"},{name:"Video Tool",path:e.subappQuasar+"/videosequencer"}],console.log(i.tools)});case 4:case"end":return e.stop()}},e,t)}))()}},L={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"tools"}},t._l(t.tools,function(e){return i("a",{key:e.path,staticClass:"tool",attrs:{href:e.path}},[i("h1",[t._v(t._s(e.name))])])}))},staticRenderFns:[]};var b=i("VU/8")($,L,!1,function(t){i("JYwI")},"data-v-61ad8e2e",null).exports,T=new m,E={data:function(){return{grid:{columns:9,rows:16},currentTime:0,resizingCell:!1,settingFrameLength:!1,lastFrameTime:-1,frameLength:100,lines:[],storedStates:[],currentState:-1}},mounted:function(){var t=this;return M()(k.a.mark(function e(){return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$loginOrSignup(t.$store);case 2:case"end":return e.stop()}},e,t)}))()},computed:{svgSize:function(){return{width:window.innerWidth,height:window.innerHeight}},gridCell:function(){return{width:this.svgSize.width/this.grid.columns,height:this.svgSize.height/this.grid.rows}},skeletonScale:function(){return Math.min(1,this.svgSize.width/900)},nextFrame:function(){var t=this.frameLength/180*2;return this.$store.state.time-this.lastFrameTime>=1e3/t}},watch:{nextFrame:function(){this.lastFrameTime=this.$store.state.time,this.updateFrame()}},methods:{handleClickLike:function(t){this.currentState=t===this.currentState?-1:t,this.storeState(),this.updateSkeleton()},bruteForceLogin:function(){var t=window.localStorage.getItem("user");t&&(t=JSON.parse(t),this.$store.dispatch("auth/authenticate",t).then(function(){}).catch(function(t){console.log(t)}))},updateFrame:function(){T.rotate(),this.storeState(),this.updateSkeleton()},storeState:function(){},getState:function(){return{skeleton:T.getEdges(),grid:this.grid,gridCell:this.gridCell,svgSize:this.svgSize}},handleGridChange:function(t,e){this.grid.columns+=t,this.grid.rows+=e,this.updateSkeleton()},initSetFrameLength:function(t){this.settingFrameLength=!0,this.frameLength=Math.min(180,Math.max(0,t.clientX-(this.svgSize.width-200-20)))},initResizeCell:function(){this.resizingCell=!0},doDragging:function(t){this.resizingCell&&(this.grid.columns=Math.round(this.svgSize.width/t.clientX),this.grid.rows=Math.round(this.svgSize.height/t.clientY),this.updateSkeleton()),this.settingFrameLength&&(this.frameLength=Math.min(180,Math.max(0,t.clientX-(this.svgSize.width-200-20))))},stopDragging:function(t){this.resizingCell&&(this.grid.columns=Math.round(this.svgSize.width/t.clientX),this.grid.rows=Math.round(this.svgSize.height/t.clientY)),(this.resizingCell||this.settingFrameLength)&&this.updateFrame(),this.resizingCell=!1,this.settingFrameLength=!1},handleLike:function(){this.storedStates.push(this.getState()),this.currentState=this.storedStates.length-1,this.updateFrame()},handleKeyUp:function(t){console.log(t)},updateSkeleton:function(){var t=this,e=[];if(-1===this.currentState)e=T.getEdges();else{var i=this.storedStates[this.currentState];e=i.skeleton,this.grid.columns=i.grid.columns,this.grid.rows=i.grid.rows,this.grid.width=i.grid.width,this.grid.height=i.grid.height}var n=Math.round(this.grid.columns/2),r=Math.round(this.grid.rows/2),s=this.svgSize.width/this.grid.columns,a=this.svgSize.height/this.grid.rows;this.lines=e.map(function(e){return{x1:n+Math.round(e.x1*t.skeletonScale/s),y1:r+Math.round(e.y1*t.skeletonScale/a),x2:n+Math.round(e.x2*t.skeletonScale/s),y2:r+Math.round(e.y2*t.skeletonScale/a)}})}}},A={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("svg",{attrs:{width:"100vw",height:"100vh"},on:{mousemove:t.doDragging,mouseup:t.stopDragging}},[i("defs",[i("pattern",{attrs:{id:"cell-pattern",width:t.gridCell.width,height:t.gridCell.height,patternUnits:"userSpaceOnUse"}},[i("path",{attrs:{d:"M "+t.gridCell.width+" 0 L 0 0 0 "+t.gridCell.height,fill:"none",stroke:"gray","stroke-width":"3"}})])]),i("g",{class:{random:-1===t.currentState},attrs:{id:"mr-griddle"}},[i("rect",{attrs:{width:"100%",height:"100%",fill:"url(#cell-pattern)"}}),t._l(t.lines,function(e,n){return i("line",{key:"line-"+n,attrs:{x1:e.x1*t.gridCell.width,y1:e.y1*t.gridCell.height,x2:e.x2*t.gridCell.width,y2:e.y2*t.gridCell.height}})})],2),i("g",{attrs:{id:"interface"}},[i("g",{attrs:{id:"liking"}},[i("ellipse",{attrs:{cx:"30",cy:t.svgSize.height-30,rx:"14",ry:"14",fill:"red"},on:{mousedown:t.handleLike}}),t._l(t.storedStates,function(e,n){return i("rect",{attrs:{x:60+40*n,y:t.svgSize.height-40,width:"20",height:"20",fill:t.currentState===n?"black":"white",stroke:"black","stroke-width":"2"},on:{mouseup:function(e){t.handleClickLike(n)}}})})],2),i("g",{attrs:{id:"resize-handle",transform:"translate("+t.gridCell.width+","+t.gridCell.height+")"}},[i("rect",{class:{resizing:t.resizingCell},attrs:{x:"-12",y:"-12",width:"24",height:"24"},on:{mousedown:t.initResizeCell}}),i("polygon",{attrs:{points:"12,-12 30,0 12,12"},on:{mousedown:function(e){t.handleGridChange(-2,0)}}}),i("polygon",{attrs:{points:"-12,-12 -30,0 -12,12"},on:{mousedown:function(e){t.handleGridChange(2,0)}}}),i("polygon",{attrs:{points:"-12,-12 0,-30 12,-12"},on:{mousedown:function(e){t.handleGridChange(0,2)}}}),i("polygon",{attrs:{points:"-12,12 0,30 12,12"},on:{mousedown:function(e){t.handleGridChange(0,-2)}}})]),i("g",{attrs:{id:"speed-handle"}},[i("rect",{attrs:{x:t.svgSize.width-20-200,y:20,width:"200",height:"20",fill:"white",stroke:"grey","stroke-width":"2"},on:{mousedown:t.initSetFrameLength}}),i("rect",{attrs:{x:t.svgSize.width-20-200+t.frameLength,y:20,width:"20",height:"20",fill:"grey",stroke:"none"}})])])])},staticRenderFns:[]};var V={MrGriddle:i("VU/8")(E,A,!1,function(t){i("X4Kv")},"data-v-20129ee7",null).exports},O={inheritAttrs:!1,props:["x","y","rx","ry","start","end","pieChart","closed"],computed:{arcPath:function(){var t=2*Math.PI,e=t*this.start,i=t*this.end;return{x1:this.x+Math.cos(e)*this.rx,y1:this.y+Math.sin(e)*this.ry,x2:this.x+Math.cos(i)*this.rx,y2:this.y+Math.sin(i)*this.ry}}}},R={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("g",[i("path",t._b({attrs:{stroke:t.pieChart&&!t.closed?"none":t.$attrs.stroke,d:"M "+t.arcPath.x1+","+t.arcPath.y1+" A "+t.rx+","+t.ry+" 1 "+(t.end-t.start<=.5?0:1)+" 1 "+t.arcPath.x2+","+t.arcPath.y2+(t.pieChart?"L "+t.x+","+t.y:"")+(t.closed?"Z":"")}},"path",t.$attrs,!1)),t.pieChart&&!t.closed?[i("path",t._b({attrs:{fill:"none",d:"M "+t.arcPath.x1+","+t.arcPath.y1+" A "+t.rx+","+t.ry+" 1 "+(t.end-t.start<=.5?0:1)+" 1 "+t.arcPath.x2+","+t.arcPath.y2}},"path",t.$attrs,!1))]:t._e()],2)},staticRenderFns:[]};var U={components:{svgArc:i("VU/8")(O,R,!1,function(t){i("3Z3S")},"data-v-013d995a",null).exports},data:function(){return{values:[0,.2,.44,.55,.7,1],colors:["red","limegreen","lightblue","orange","pink"],arc:{x:0,y:0,rx:200,ry:100,closed:!1,pieChart:!0}}},mounted:function(){},computed:{canvasSize:function(){return this.$refs.svgContainer?{width:this.$refs.svgContainer.clientWidth,height:this.$refs.svgContainer.clientHeight}:{width:window.innerWidth,height:window.innerHeight}},time:function(){return this.$store.state.time},segments:function(){var t=this,e=[],i=0;return this.values.forEach(function(n,r){n+=1e-4*t.time,r>0&&e.push([i,n]),i=n}),e}},methods:{handleClick:function(t){console.log("Clicked segment",t)}}},H={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("svg",{ref:"svgContainer",attrs:{width:"100vw",height:"100vh"}},[i("g",{attrs:{transform:"translate("+t.canvasSize.width/2+", "+t.canvasSize.height/2+")"}},[t._l(t.segments,function(e,n){return[i("g",{staticClass:"segment",attrs:{fill:t.colors[n],stroke:"black","stroke-width":"10"},on:{click:function(){t.handleClick(n)}}},[i("svg-arc",{attrs:{x:t.arc.x,y:t.arc.y,rx:t.arc.rx,ry:t.arc.ry,closed:t.arc.closed,pieChart:t.arc.pieChart,start:e[0],end:e[1]}})],1)]}),i("circle",{attrs:{cx:t.arc.x,cy:t.arc.y,r:"8",fill:"black"}})],2)])},staticRenderFns:[]};var W=i("VU/8")(U,H,!1,function(t){i("KxZh")},"data-v-b22c8c58",null).exports,j={data:function(){return{points:[],path:"",drag:!1,animate:!1,pathLength:[],colors:["#83AE9B","#C8C8A9","#F9CDAE","#F69A9A","#EF4566"],selectedColor:"#000000",usedColors:[],pathCollection:[],dashOffset:[],animations:[]}},computed:{animator:function(){var t=this;return this.animate?this.dashOffset.map(function(e){return e-=.1*t.$store.state.time%e}):0},svgSize:function(){return{width:window.innerWidth,height:window.innerHeight}}},methods:{initDraw:function(){this.drag=!0,this.path="",this.points=[]},draw:function(t){var e=t.clientX,i=t.clientY;this.drag&&(this.points.push(e+","+i),this.path=this.points.join(" "))},stopDraw:function(){this.pathLength.push(this.$el.querySelector(".drawing").getTotalLength()),this.dashOffset.push(this.$el.querySelector(".drawing").getTotalLength()),this.animations.push(!0),this.pathCollection.push(this.path),this.usedColors.push(this.selectedColor),this.path="",this.drag=!1},play:function(){this.animate=!0},stop:function(){this.animate=!1},circlesY:function(t){return this.svgSize.height/2*.85+50*t},selectColor:function(t){this.selectedColor=this.colors[t]}}},G={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("svg",{attrs:{width:"100vw",height:"100vh"}},[i("g",{on:{mousedown:t.initDraw,mousemove:t.draw,mouseup:t.stopDraw}},[i("rect",{attrs:{x:t.svgSize.width/2-t.svgSize.width/2*.85,y:t.svgSize.height/2-t.svgSize.height/2*.85,width:"85%",height:"85%",fill:"white",stroke:"grey","stroke-width":"3"}}),i("polyline",{class:{drawing:!0},style:{stroke:t.selectedColor},attrs:{points:t.path,fill:"none","stroke-linejoin":"round"}}),t._l(t.pathCollection,function(e,n){return i("polyline",{class:{drawing:!0},style:{stroke:t.usedColors[n],"stroke-dasharray":t.pathLength[n],"stroke-dashoffset":t.animations[n]?t.animator[n]:0},attrs:{points:t.pathCollection[n],fill:"none","stroke-linejoin":"round"}})})],2),i("g",[i("circle",{attrs:{cx:"50",cy:"20%",r:"20",stroke:"grey","stroke-width":"2",fill:"white"},on:{click:t.play}}),i("circle",{attrs:{cx:"50",cy:"30%",r:"20",stroke:"grey","stroke-width":"2",fill:"white"},on:{click:t.stop}}),t._l(t.colors,function(e,n){return i("circle",{attrs:{cx:"50",cy:t.circlesY(n),r:"20",stroke:"grey","stroke-width":"2",fill:e},on:{click:function(e){t.selectColor(n)}}})})],2)])])},staticRenderFns:[]};var X=i("VU/8")(j,G,!1,function(t){i("BSLh")},"data-v-3477a352",null).exports,q={name:"LostInSpace",data:function(){return{showShapeFilling:!0,showForceField:!1,showShapes:!1,forceFieldCellSize:60,numberOfParticles:100,frameLength:1e3/30,lastFrameTime:-1,currentShape:-1,shapeProtos:[],shapes:[],shapeIds:[],currentShapeId:"#ellipses-1",particles:[],forceFieldDimensions:{columns:-1,rows:-1,width:-1,height:-1},forceField:[],shapePolygonizerDetail:10,shapeFilling:{width:11,height:11}}},beforeDestroy:function(){window.removeEventListener("keyup",this.handleKey)},mounted:function(){var t=this;return M()(k.a.mark(function e(){var i,n,r,s,a,o,h,l;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=t,e.next=3,t.$loginOrSignup(t.$store);case 3:window.addEventListener("keyup",t.handleKey),n=t.$el.querySelectorAll("#shape-protos > g"),r=t.svgSize.width/2,s=t.svgSize.height/2,a=Math.min(t.svgSize.width,t.svgSize.height),o=.7*a,h=t.shapeFilling.width,l=t.shapeFilling.height,t.shapeIds=[],t.shapeProtos=Array(n.length).fill(0).map(function(e,a){var c=n[a];i.shapeIds.push(c.id);var d=Array(c.children.length).fill(0).map(function(e,i){var n=c.children[i],a=n.getTotalLength(),h=t.shapePolygonizerDetail,l=a/(h-1);return{points:Array(h).fill(0).map(function(t,e){var i=l*e,a=n.getPointAtLength(i);return{x:r+a.x/100*o,y:s+a.y/100*o}})}}),u=[];return d.forEach(function(t){var e=h;Array(e*l).fill(0).forEach(function(n,a){var h=a%e/e*150-75,l=Math.round(a/e)/e*150-75,c={x:r+h/100*o,y:s+l/100*o};i.isPointInPolygon(c,t.points)&&u.push({points:[c]})})}),d=d.concat(u)}),t.forceFieldDimensions.columns=Math.ceil(window.innerWidth/t.forceFieldCellSize),t.forceFieldDimensions.width=window.innerWidth/t.forceFieldDimensions.columns,t.forceFieldDimensions.rows=Math.ceil(window.innerHeight/t.forceFieldCellSize),t.forceFieldDimensions.height=window.innerHeight/t.forceFieldDimensions.rows,t.nextShape(),t.particles=Array(t.numberOfParticles).fill(0).map(function(){return i.makeParticle()});case 19:case"end":return e.stop()}},e,t)}))()},computed:{svgSize:function(){var t=.7*Math.min(window.innerWidth,window.innerHeight);return{width:window.innerWidth,height:window.innerHeight,side:t,scale:t/100}},nextFrame:function(){return this.$store.state.time-this.lastFrameTime>=this.frameLength}},watch:{nextFrame:function(){this.lastFrameTime=this.$store.state.time,this.updateParticles()}},methods:{bruteForceLogin:function(){var t=window.localStorage.getItem("user");t&&(t=JSON.parse(t),this.$store.dispatch("auth/authenticate",t).then(function(){}).catch(function(t){console.log(t)}))},updateParticles:function(){var t=this,e=this;this.particles&&(this.particles=this.particles.map(function(i,n){var r=t.getForceFieldValue(i.position.x,i.position.y),s=.05*Math.cos(r),a=.05*Math.sin(r);i.direction.x+=s,i.direction.y+=a;for(var o=n+1,h=e.particles.length;o<h;o++){var l=e.particles[o],c=l.position.x-i.position.x,d=l.position.y-i.position.y;if(Math.sqrt(c*c+d*d)<30){var u=Math.atan2(d,c),g=.5*Math.cos(u),p=.5*Math.sin(u);i.direction.x-=g,i.direction.y-=p,l.direction.x+=g,l.direction.y+=p}}e.shapes.map(function(t){var e=1===t.points.length;t.points.map(function(t){var n=t.x-i.position.x,r=t.y-i.position.y;if(Math.sqrt(n*n+r*r)<100){var s=e?.3:.2,a=Math.atan2(r,n),o=Math.cos(a)*s,h=Math.sin(a)*s;i.direction.x+=o,i.direction.y+=h}})});var f=Math.sqrt(i.direction.x*i.direction.x+i.direction.y*i.direction.y);return 0!==f&&1!==f&&(i.direction.x/=f,i.direction.y/=f),i.position.x+=i.direction.x*i.velocity,i.position.y+=i.direction.y*i.velocity,i.position.x>=e.svgSize.width&&(i.position.x=1),i.position.x<=0&&(i.position.x=e.svgSize.width-1),i.position.y>=e.svgSize.height&&(i.position.y=1),i.position.y<=0&&(i.position.y=e.svgSize.height-1),i}))},addParticle:function(t){this.particles.push(this.makeParticle(t.clientX,t.clientY))},radiansToColor:function(t){return"hsl("+t/(2*Math.PI)*360+" 100% 50%)"},getForceFieldValue:function(t,e){var i=Math.floor(t/this.forceFieldDimensions.width),n=Math.floor(e/this.forceFieldDimensions.height);return this.forceField[i+n*this.forceFieldDimensions.columns]},makeParticle:function(t,e){var i=Math.random()*Math.PI*2;return{position:{x:t||Math.random()*window.innerWidth,y:e||Math.random()*window.innerHeight},direction:{x:Math.cos(i),y:Math.sin(i)},velocity:1+2*Math.random()}},updateShapes:function(){},updateForceField:function(){var t=this,e=this.forceFieldDimensions.columns*this.forceFieldDimensions.rows;this.forceField=Array(e).fill(0).map(function(e,i){var n=i%t.forceFieldDimensions.columns,r=Math.round(i/t.forceFieldDimensions.columns),s=0,a=0;return t.shapes.map(function(e){e.points.length>1&&e.points.map(function(e){var i=Math.round(e.x/t.forceFieldDimensions.width),o=Math.round(e.y/t.forceFieldDimensions.height),h=i-n,l=o-r,c=Math.sqrt(h*h+l*l),d=1;c>0&&(d=1/(c*c*c)),s+=h*d,a+=l*d})}),Math.atan2(a,s)})},handleKey:function(t){" "===t.key&&this.nextShape()},nextShape:function(){this.currentShape++,this.currentShape%=this.shapeProtos.length,this.shapes=this.shapeProtos[this.currentShape],this.currentShapeId=this.shapeIds[this.currentShape],this.updateShapes(),this.updateForceField(),this.storeState()},storeState:function(){},isPointInPolygon:function(t,e){for(var i=t.x,n=t.y,r=!1,s=0,a=e.length-1;s<e.length;a=s++){var o=e[s].x,h=e[s].y,l=e[a].x,c=e[a].y;h>n!=c>n&&i<(l-o)*(n-h)/(c-h)+o&&(r=!r)}return r}}},Y={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("svg",{attrs:{width:"100vw",height:"100vh"},on:{mouseup:t.addParticle}},[i("defs",[i("g",{attrs:{id:"shape-protos"}},[i("g",{attrs:{id:"diagonal-lines-1"}},[i("line",{attrs:{x1:"-50",y1:"-50",x2:"50",y2:"50"}})]),i("g",{attrs:{id:"diagonal-lines-2"}},[i("line",{attrs:{x1:"-50",y1:"-50",x2:"50",y2:"50"}}),i("line",{attrs:{x1:"50",y1:"-50",x2:"-50",y2:"50"}})]),i("g",{attrs:{id:"two-triangles-1"}},[i("polygon",{attrs:{points:"-50,-50 50,-50 0,0"}}),i("polygon",{attrs:{points:"-50,50 50,50 0,0"}})]),i("g",{attrs:{id:"two-triangles-2"}},[i("polygon",{attrs:{points:"-50,-50 -50,50 0,0"}}),i("polygon",{attrs:{points:"50,-50 50,50 0,0"}})]),i("g",{attrs:{id:"two-triangles-3"}},[i("polygon",{attrs:{points:"-50,-50 50,-50 50,50"}})]),i("g",{attrs:{id:"rect-1"}},[i("rect",{attrs:{x:"-60",y:"-60",width:"120",height:"120"}})]),i("g",{attrs:{id:"ellipses-1"}},[i("ellipse",{attrs:{cx:"0",cy:"0",rx:"60",ry:"60"}})]),i("g",{attrs:{id:"ellipses-2"}},[i("ellipse",{attrs:{cx:"0",cy:"0",rx:"40",ry:"40"}})]),i("g",{attrs:{id:"ellipses-3"}},[i("ellipse",{attrs:{cx:"0",cy:"0",rx:"20",ry:"20"}})]),i("g",{attrs:{id:"ellipses-4"}},[i("ellipse",{attrs:{cx:"-30",cy:"-30",rx:"20",ry:"20"}}),i("ellipse",{attrs:{cx:"25",cy:"25",rx:"40",ry:"40"}})]),i("g",{attrs:{id:"triangle-1"}},[i("polygon",{attrs:{points:"3,50 -43,-24 43,-25"}})])])]),t.showForceField?i("g",{attrs:{id:"force-field"}},[t._l(t.forceField,function(e,n){return[i("rect",{attrs:{x:n%t.forceFieldDimensions.columns*t.forceFieldDimensions.width,y:Math.floor(n/t.forceFieldDimensions.columns)*t.forceFieldDimensions.height,width:t.forceFieldDimensions.width,height:t.forceFieldDimensions.height,fill:t.radiansToColor(e)}}),i("polygon",{attrs:{points:"10,0 -10,-10 0,0 -10,10",fill:"rgba(255, 255, 255, 0.7)",transform:"translate("+(t.forceFieldDimensions.width/2+n%t.forceFieldDimensions.columns*t.forceFieldDimensions.width)+","+(t.forceFieldDimensions.height/2+Math.floor(n/t.forceFieldDimensions.columns)*t.forceFieldDimensions.height)+") rotate("+e/(2*Math.PI)*360+") scale("+t.forceFieldDimensions.width/70+")"}})]})],2):t._e(),i("g",{attrs:{id:"shapes"}},[t._l(t.shapes,function(e){return t.showShapes?[e.points.length>1?[i("polygon",{attrs:{points:e.points.map(function(t){return t.x+","+t.y+" "}),fill:"none",stroke:"black","stroke-width":"5"}})]:t.showShapeFilling?[i("ellipse",{attrs:{cx:e.points[0].x,cy:e.points[0].y,rx:"10",ry:"10",fill:"white",stroke:"black","stroke-width":"2"}})]:t._e()]:t._e()}),i("use",{attrs:{x:"0",y:"0",href:"#"+t.currentShapeId,transform:"translate("+t.svgSize.width/2+","+t.svgSize.height/2+") scale("+t.svgSize.scale+")",fill:"none",stroke:"rgb(120,120,120)","stroke-width":"4"}})],2),i("g",{attrs:{id:"particles"}},[t._l(t.particles,function(t){return[i("ellipse",{attrs:{cx:t.position.x,cy:t.position.y,rx:"10",ry:"10"}})]})],2)])},staticRenderFns:[]};var N=i("VU/8")(q,Y,!1,function(t){i("JP6S")},"data-v-21d49c78",null).exports,J=i("mvHQ"),K=i.n(J),Z={data:function(){return{payload:{strategy:"local",username:void 0,password:void 0},loggedIn:!1,timelines:[]}},mounted:function(){var t=window.localStorage.getItem("user");t&&(t=JSON.parse(t),this.payload.username=t.username,this.payload.email=t.email,this.payload.password=t.password,this.loginUser())},methods:{loginUser:function(){var t=this;return this.$store.dispatch("auth/authenticate",t.payload).then(function(){t.loggedIn=!0,window.localStorage.setItem("user",K()(t.payload))}).catch(function(e){t.loggedIn=!1,console.log(e),window.alert(e.message)})},listTimelines:function(){if(this.loggedIn){var t=this;this.$store.dispatch("maps/find",{query:{type:"Timeline"}}).then(function(e){console.log(e),t.timelines=e})}}}},Q={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.loggedIn?i("div",{attrs:{id:"timelines"}},[t._v("We have "+t._s(t.timelines.length)+" timelines."),i("button",{on:{click:t.listTimelines}},[t._v("Fetch Timelines")])]):t._e(),t.loggedIn?t._e():i("div",{attrs:{id:"loginbox"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.payload.email,expression:"payload.email"}],attrs:{type:"text",placeholder:"email"},domProps:{value:t.payload.email},on:{input:function(e){e.target.composing||t.$set(t.payload,"email",e.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.payload.password,expression:"payload.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:t.payload.password},on:{input:function(e){e.target.composing||t.$set(t.payload,"password",e.target.value)}}}),i("button",{on:{click:t.loginUser}},[t._v("Login")])])])},staticRenderFns:[]};var B=i("VU/8")(Z,Q,!1,function(t){i("kQSV")},"data-v-6f566a4a",null).exports;n.a.use(a.a);var tt=new a.a({routes:[{path:"/tests/skeleton",name:"SkeletonTest",component:S},{path:"/mr-griddle",name:"MrGriddle",component:V.MrGriddle},{path:"/lost-in-space",name:"LostInSpace",component:N},{path:"/rhythm-shoes",name:"RhythmAndShoes",component:W},{path:"/",name:"StartSeite",component:b},{path:"/login",name:"Login",component:B},{path:"/path-drawer",name:"PathDrawer",component:X}]}),et=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;h()(this,t),this._fps=e,this._frametime=1e3/this._fps,this._resolution=i,this._store=n,this._time=Date.now(),this._running=!1}return c()(t,[{key:"start",value:function(){this._running=!0,this.checkAndSetTime()}},{key:"stop",value:function(){clearTimeout(this._running),this._running=!1}},{key:"checkAndSetTime",value:function(){var t=this;setTimeout(function(){t.checkAndSetTime()},this._resolution),Date.now()-this._time>=this._frametime&&(this._time=Date.now(),this._store&&this._store.commit("time",this._time))}}]),t}(),it=i("NYxO"),nt=i("ddF3"),rt=i.n(nt),st=i("Vjoj"),at=i.n(st),ot=i("R3Xx"),ht=i.n(ot),lt=i("P7rh"),ct=i.n(lt);n.a.use(it.a);var dt,ut,gt={idField:"uuid"},pt=(dt="http://10.10.10.102:3030",(ut=at()()).configure(ht()(dt).superagent(D.a)),ut.configure(ct()({storage:window.localStorage})),ut),ft=rt()(pt,gt),mt=ft.service,wt=ft.auth,vt=new it.a.Store({plugins:[mt("annotations",gt),mt("maps",gt),mt("users",gt),wt({userService:"users"})],state:{time:0},mutations:{time:function(t,e){t.time=e}}}),yt=i("8ytR"),St=function(){return localStorage.digitanzID?localStorage.digitanzID:(localStorage.setItem("digitanzID",yt.ObjectUtil.uuid4()),localStorage.digitanzID)},xt=function(t){return t.dispatch("auth/authenticate",{strategy:"local",email:localStorage.localLogin,password:localStorage.localPassword}).then(function(){if(!localStorage.localTimeline){var e={query:{author:t.state.auth.payload.userId}};return t.dispatch("maps/find",e)}}).then(function(e){if(!localStorage.localTimeline){if(!e||!e.length){var i={type:["Timeline"],title:"mytimeline",author:t.state.auth.payload.userId};return t.dispatch("maps/create",i).then(function(t){console.log("created timeline",t),localStorage.setItem("localTimeline",t.uuid)})}localStorage.setItem("localTimeline",e[0].uuid)}})},kt=function(t){var e=this;return localStorage.localLogin?xt(t):t.dispatch("users/create",{email:this.$localID()+"@fake.motionbank.org",password:this.$localID(),name:this.$localID()}).then(function(i){return console.log("created account",i),localStorage.setItem("localLogin",e.$localID()+"@fake.motionbank.org"),localStorage.setItem("localPassword",e.$localID()),xt(t)})};n.a.config.productionTip=!1,{Vue:n.a}.Vue.prototype.$localID=St,function(t){t.Vue.prototype.$loginOrSignup=kt}({Vue:n.a}),new et(50,10,vt).start(),new n.a({el:"#app",router:tt,store:vt,components:{App:s},template:"<App/>"})},X4Kv:function(t,e){},kQSV:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.afcaf94f48b8a6b024e5.js.map