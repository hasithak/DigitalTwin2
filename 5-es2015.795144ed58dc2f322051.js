(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{eXLF:function(l,n,t){"use strict";t.r(n);var e=t("8Y7J");class u{}var i=t("pMnS"),s=t("SVse");class a{constructor(){this.svg=document.getElementById("pump-line-canvas"),this.pumpLineStart=0,this.pumpLineEnd=200,this.pumpLineWidth=15,this.pumping=!0,this.fertilizing=!0}ngOnInit(){}ngAfterViewInit(){this.svg=document.getElementById("pump-line-canvas"),this.getViewDimentions(),this.drawPumpView(),this.pumpFertilizers()}getViewDimentions(){this.viewWidth=this.waterContainer.nativeElement.offsetWidth,this.viewHeight=this.waterContainer.nativeElement.offsetHeight,console.log("this.fertLineHeight",this.fertLineHeight)}drawPumpView(){this.mainPump=`M0,${this.pumpLineWidth/2} ${this.viewWidth},${this.pumpLineWidth/2}`;const l=this.drawPumpLine(this.mainPump,this.pumpLineWidth,"cornflowerblue");this.svg.appendChild(l);const n=this.drawPumpLine(this.mainPump,this.pumpLineWidth-10,"red");this.svg.appendChild(n),this.fertPump=`M${this.fertInputStart},${this.fertLineHeight} \n    ${this.fertInputStart},${this.pumpLineWidth-(this.pumpLineWidth-(this.pumpLineWidth-10))/2}`;const t=this.drawPumpLine(this.fertPump,this.pumpLineWidth,"cornflowerblue");this.svg.appendChild(t);const e=this.drawPumpLine(this.fertPump,this.pumpLineWidth-10,"red");this.svg.appendChild(e)}drawPumpLine(l,n,t){const e=document.createElementNS("http://www.w3.org/2000/svg","path");return e.setAttribute("d",l),e.style.stroke=t,e.style.fill="none",e.style.strokeWidth=n.toString(),this.svg.appendChild(e),e}pumpFertilizers(){if(this.pumping){const l=this.drawPumpLine(this.mainPump,0,"none");this.pumpFertilizer(1,l)}if(this.fertilizing){const l=this.drawPumpLine(this.fertPump,0,"none");this.pumpFertilizer(2,l)}}pumpFertilizer(l,n){const t=n.getTotalLength()/30;let e=0;const u=(this.pumpLineWidth-2).toString();for(let a=0;a<t;a++){const n=document.createElementNS("http://www.w3.org/2000/svg","rect");n.setAttribute("width",u),n.setAttribute("height",u),n.setAttribute("class","drop"+l),n.style.fill="yellow",this.svg.appendChild(n),e+=50}let i=0;const s=document.getElementsByClassName("drop"+l);requestAnimationFrame((function l(){for(let t=0;t<s.length;t++){const l=s[t],e=Number.parseInt(l.getAttribute("width"),10);l.setAttribute("transform","translate("+(n.getPointAtLength(30*t+i).x-e/2)+","+(n.getPointAtLength(30*t+i).y-e/2)+")")}30===(i+=10)&&(i=0),setTimeout(()=>{requestAnimationFrame(l)},200)}))}}var r=e.ob({encapsulation:0,styles:[[""]],data:{}});function o(l){return e.Jb(0,[e.Fb(671088640,1,{waterContainer:0}),(l()(),e.qb(1,0,[[1,0],["pumpLIneContainer",1]],null,1,"div",[["class","pump-line-container"]],null,null,null,null,null)),(l()(),e.qb(2,0,null,null,0,":svg:svg",[["id","pump-line-canvas"],["style","width: 100%; height: 100%;"]],null,null,null,null,null))],null,null)}function d(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,1,"app-pump-line",[],null,null,null,o,r)),e.pb(1,4308992,null,0,a,[],null,null)],(function(l,n){l(n,1,0)}),null)}var h=e.mb("app-pump-line",a,d,{fertInputStart:"fertInputStart",fertLineHeight:"fertLineHeight"},{},[]),p=t("4/Lt"),c=e.ob({encapsulation:2,styles:[],data:{}});function m(l){return e.Jb(0,[],null,null)}class g{constructor(){this.svg=document.getElementById("canvas"),this.fertPumpLines=[]}ngOnInit(){this.fertLevelsArray=this.fertLevels.split(",").map(Number),this.fertPumpStatusesArray=this.fertPumpStatuses.split(",").map(Number)}ngAfterViewInit(){this.svg=document.getElementById("canvas"),this.getViewDimentions(),this.initializeValues(),this.drawPumpView(),this.pumpFertilizers()}initializeValues(){this.viewWidth=1200,this.outputPumpY=0,this.outputPumpX=this.viewWidth/2,this.outputPumpHeight=0,this.fertTankWidth=this.viewWidth/8,this.fertTankHeight=160,this.fertTankDistance=this.viewWidth/8,this.fertTankStartX=0,this.fertMixtureStartX=this.fertTankStartX+this.fertTankWidth,this.fertMixtureStartY=this.outputPumpY+this.outputPumpHeight,this.fertMixtureWidth=3.5*(this.fertTankWidth+this.fertTankDistance),this.fertMixtureHeight=60,this.pumpLineWidth=this.fertMixtureHeight/5,this.fertMixtureTofertTankDistance=30,this.fertTankStartY=this.outputPumpY+this.outputPumpHeight+this.fertMixtureHeight+this.fertMixtureTofertTankDistance}getViewDimentions(){this.viewWidth=this.waterContainer.nativeElement.offsetWidth,this.viewHeight=this.waterContainer.nativeElement.offsetHeight}drawPumpView(){for(let l=0;l<4;l++)this.drawFertilizerTank(this.fertTankStartX+l*(this.fertTankDistance+this.fertTankWidth),this.fertTankStartY,this.fertTankWidth,this.fertTankHeight,l);this.drawfertMixture(this.fertMixtureStartX,this.fertMixtureStartY,this.fertMixtureWidth,this.fertMixtureHeight),this.drawPumpLines()}drawFertilizerTank(l,n,t,e,u){const i=document.createElementNS("http://www.w3.org/2000/svg","svg");i.setAttribute("width",t.toString()),i.setAttribute("height",e.toString()),i.setAttribute("x",l.toString()),i.setAttribute("y",n.toString());const s=document.createElementNS("http://www.w3.org/2000/svg","rect");s.setAttribute("width",t.toString()),s.setAttribute("height",e.toString()),s.setAttribute("x","0"),s.setAttribute("y","0"),s.style.stroke="#000",s.style.strokeWidth="2px",s.style.fill="pink",i.append(s);const a=2*this.fertLevelsArray[u]/(2*this.pumpLineWidth);for(let r=0;r<a;r++){const l=document.createElementNS("http://www.w3.org/2000/svg","rect");l.setAttribute("width",t.toString()),l.setAttribute("height",this.pumpLineWidth.toString()),l.setAttribute("x","0"),l.setAttribute("y",(e-r*this.pumpLineWidth*2-2*this.pumpLineWidth).toString()),i.append(l)}this.svg.appendChild(i)}drawfertMixture(l,n,t,e){const u=document.createElementNS("http://www.w3.org/2000/svg","svg");u.setAttribute("width",t.toString()),u.setAttribute("height",e.toString()),u.setAttribute("x",l.toString()),u.setAttribute("y",n.toString());const i=document.createElementNS("http://www.w3.org/2000/svg","rect");i.setAttribute("width",t.toString()),i.setAttribute("height",e.toString()),i.setAttribute("x","0"),i.setAttribute("y","0"),i.style.stroke="yellow",i.style.strokeWidth="2px",i.style.fill="pink",u.append(i),this.svg.appendChild(u)}drawPumpLines(){this.outputPumpLine=`M${this.outputPumpX},${this.outputPumpY} ${this.outputPumpX},${this.outputPumpY+this.outputPumpHeight}`;const l=this.drawPumpLine(this.outputPumpLine,this.pumpLineWidth,"cornflowerblue");this.svg.appendChild(l);const n=this.fertTankStartY+this.fertTankHeight-this.fertTankHeight/10;for(let t=0;t<5;t++){const l=this.fertTankStartX+t*(this.fertTankDistance+this.fertTankWidth)+(this.fertTankDistance/2+this.fertTankWidth),e=`M${this.fertTankStartX+t*(this.fertTankDistance+this.fertTankWidth)+this.fertTankWidth},${n} ${l},${n}  \n      ${l},${this.fertTankStartY-this.fertMixtureTofertTankDistance}`;this.fertPumpLines.push(e);const u=this.drawPumpLine(e,this.pumpLineWidth,"cornflowerblue");this.svg.appendChild(u)}}drawPumpLine(l,n,t){const e=document.createElementNS("http://www.w3.org/2000/svg","path");return e.setAttribute("d",l),e.style.stroke=t,e.style.fill="none",e.style.strokeWidth=n.toString(),this.svg.appendChild(e),e}pumpFertilizers(){let l=!1;for(let n=0;n<this.fertPumpStatusesArray.length;n++){const t=this.fertPumpStatusesArray[n];if(l=!(1!==t&&!l),1===t){const l=this.drawPumpLine(this.fertPumpLines[n],0,"none");this.pumpFertilizer(n,l,t)}}if(l){const l=this.drawPumpLine(this.outputPumpLine,0,"none");this.pumpFertilizer(1e3,l,1)}}pumpFertilizer(l,n,t){if(1===t){const t=n.getTotalLength()/30;let u=0;const i=(this.pumpLineWidth-2).toString();for(let n=0;n<t;n++){const n=document.createElementNS("http://www.w3.org/2000/svg","rect");n.setAttribute("width",i),n.setAttribute("height",i),n.setAttribute("class","drop"+l),n.style.fill="blue",this.svg.appendChild(n),u+=50}let s=0;const a=document.getElementsByClassName("drop"+l);function e(){for(let l=0;l<a.length;l++){const t=a[l],e=Number.parseInt(t.getAttribute("width"),10);t.setAttribute("transform","translate("+(n.getPointAtLength(30*l+s).x-e/2)+","+(n.getPointAtLength(30*l+s).y-e/2)+")")}30===(s+=10)&&(s=0),setTimeout(()=>{requestAnimationFrame(e)},100)}requestAnimationFrame(e)}}}var b=e.ob({encapsulation:0,styles:[[""]],data:{}});function f(l){return e.Jb(0,[e.Fb(671088640,1,{waterContainer:0}),(l()(),e.qb(1,0,[[1,0],["waterContainer",1]],null,1,"div",[["class","canvas-container"]],null,null,null,null,null)),(l()(),e.qb(2,0,null,null,0,":svg:svg",[["id","canvas"],["style","width: 100%; height: 100%;"],["viewBox","0 0 1200 250"]],null,null,null,null,null))],null,null)}function v(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,1,"app-fertilizer-system",[],null,null,null,f,b)),e.pb(1,4308992,null,0,g,[],null,null)],(function(l,n){l(n,1,0)}),null)}var w=e.mb("app-fertilizer-system",g,v,{fertLevels:"fertLevels",fertPumpStatuses:"fertPumpStatuses"},{},[]),k=t("hrfs");class q{}class x{}class y{}var P=t("ut55");class L{constructor(l){this.fieldService=l,this.pieChartOptions={responsive:!0,legend:{position:"bottom"},plugins:{datalabels:{formatter:(l,n)=>n.chart.data.labels[n.dataIndex]}}},this.pieChartLabels=[["Download","Sales"],["In","Store","Sales"],"Mail Sales"],this.pieChartData=[300,500,100],this.pieChartType="pie",this.pieChartLegend=!1,this.pieChartColors=[{backgroundColor:["rgba(255,0,0,0.3)","rgba(0,255,0,0.3)","rgba(0,0,255,0.3)"]}],this.gaugeValues={1:100,2:50,3:50,4:50,5:50,6:50,7:50},this.showPumpLine=!1,this.field=new P.a,this.schedule=new q,this.weather=new x,this.sensors=new y}ngOnInit(){this.getFieldDataRepeatedly()}ngAfterViewInit(){setTimeout(()=>{this.setDimentions(),setTimeout(()=>{this.showPumpLine=!0},1e3)},1e3)}getFieldDataRepeatedly(){setInterval(()=>{this.getFiledData()},2e3)}getFiledData(){this.fieldService.getField("").subscribe(l=>{console.log(l),this.field=l.field,this.schedule=l.schedule,this.weather=l.weather,this.sensors=l.sensors},l=>{})}setDimentions(){this.leftPaneWidth=this.leftPane.nativeElement.offsetWidth,this.rightPaneWidth=this.rightPane.nativeElement.offsetWidth,this.waterPumpWidth=this.waterPump.nativeElement.offsetWidth,this.fertPumpHeight=this.fertPump.nativeElement.offsetHeight,this.waterPumpContainerHeight=this.fertPumpContainer.nativeElement.offsetHeight,this.fieldBottomContentWidth=this.fieldBottomContent.nativeElement.offsetWidth}}var S=t("luxN"),H=e.ob({encapsulation:2,styles:[[".filed-box{position:relative}.field-stats{position:absolute;top:15px;right:15px;font-size:2vmin}.field-stats ul{list-style-type:none}.field-soil-stats{position:absolute;bottom:15px;right:15px;font-size:2vmin}.field-soil-stats ul{list-style-type:none}.weather-icon{position:absolute;top:15px;left:15px;width:15vmin}.filed-progress{position:absolute;bottom:15px;left:15px;font-size:2vmin}.filed-progress ul{-webkit-padding-start:14px;padding-inline-start:14px;list-style-type:none}.gauge-list,.pertilizer-data,.pertilizer-unit{height:30vh}.fertilizer-data-gauge-container{height:36%;overflow:hidden}.crop-filed,.crop-filed-nav,.prgress-charts{height:30vh}.gauge-container{height:65%}.main-gauge-title{font-family:digital-clock-font;font-size:3vmin}.tree-bottom,.tree-top{width:41vmin}.nav-next,.nav-previouse{font-size:6vmin;color:#be80ff}.field-nav{margin-top:2vmin}.plot-no{font-size:6vmin;color:#f8774b}.crop-type{color:#f8774b}.fert-unit-container{width:98%;height:inherit;bottom:2px}.water-pump-reading{font-family:digital-clock-font;font-size:3vmin;font-weight:bolder;text-align:right;list-style-type:none;bottom:0;right:0;margin-bottom:0;color:#d9ff03}.fert-level-text{font-size:2vmin}.water-pump-reading li{border:1px solid #f8774b;padding:2px 25px;margin:2px}.pump{width:7vw}.pump-line{position:absolute;z-index:1;display:block;width:100%}mwl-gauge{flex:1;display:block;padding:2px;margin:2px;border-radius:3px}mwl-gauge>.gauge>.dial{stroke:#345;stroke-width:2;fill:transparent}mwl-gauge>.gauge>.value{stroke:#2fe3ff;stroke-width:2;fill:transparent}mwl-gauge>.gauge>.value-text{fill:#2fe3ff;font-family:sans-serif;font-weight:700;font-size:.8em}mwl-gauge.fertilizer-gauge>.gauge>.dial{stroke:#eee;stroke-width:10}mwl-gauge.fertilizer-gauge>.gauge>.value{stroke:orange;stroke-dasharray:none;stroke-width:13}mwl-gauge.fertilizer-gauge>.gauge>.value-text{fill:orange}mwl-gauge.power>.gauge>.dial{stroke:#eee;stroke-width:2}mwl-gauge.power>.gauge>.value{stroke:#d42f6e;stroke-width:5}mwl-gauge.power>.gauge>.value-text{fill:#d42f6e}mwl-gauge.four>.gauge>.dial{stroke:#345;stroke-width:5}mwl-gauge.four>.gauge>.value{stroke:#be80ff;stroke-dasharray:none;stroke-width:5}mwl-gauge.four>.gauge>.value-text{fill:#be80ff}mwl-gauge.flow-meter>.gauge>.dial{stroke:#969993;stroke-dasharray:10 1;stroke-width:7}mwl-gauge.flow-meter>.gauge>.value{stroke:#16ff0a;stroke-dasharray:10 1;stroke-width:5}mwl-gauge.flow-meter>.gauge>.value-text{fill:#16ff0a;font-size:.7em}mwl-gauge.six>.gauge>.dial{stroke:#345;fill:#345;stroke-width:20}mwl-gauge.six>.gauge>.value{stroke:#ff6daf;stroke-width:20}mwl-gauge.six>.gauge>.value-text{fill:#ff6daf;font-size:.7em}mwl-gauge.seven>.gauge>.dial{stroke:transparent;stroke-width:5;transform:scale(.9,.9) translate3d(5.5px,5.5px,0);fill:rgba(148,112,57,.42)}mwl-gauge.seven>.gauge>.value{stroke:#f8774b;stroke-dasharray:none;stroke-width:5}"]],data:{}});function C(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,5,"div",[["class","pump-line"]],null,null,null,null,null)),e.Eb(512,null,s.s,s.t,[e.k,e.r,e.C]),e.pb(2,278528,null,0,s.l,[s.s],{ngStyle:[0,"ngStyle"]},null),e.Cb(3,{"top.px":0,"left.px":1,"width.px":2}),(l()(),e.qb(4,0,null,null,1,"app-pump-line",[],null,null,null,o,r)),e.pb(5,4308992,null,0,a,[],{fertInputStart:[0,"fertInputStart"],fertLineHeight:[1,"fertLineHeight"]},null)],(function(l,n){var t=n.component,u=l(n,3,0,e.Ab(n.parent,44).offsetTop+50,e.Ab(n.parent,45).offsetLeft+e.Ab(n.parent,45).width,t.leftPaneWidth+t.fieldBottomContentWidth-t.waterPumpWidth);l(n,2,0,u),l(n,5,0,(t.rightPaneWidth-t.waterPumpWidth)/2,t.waterPumpContainerHeight-t.fertPumpHeight)}),null)}function A(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,1,"mwl-gauge",[["class","power"]],null,null,null,m,c)),e.pb(1,4767744,null,0,p.d,[e.k,p.e],{max:[0,"max"],value:[1,"value"],animated:[2,"animated"],animationDuration:[3,"animationDuration"]},null)],(function(l,n){var t=n.component;l(n,1,0,t.sensors.totalPower,t.sensors.currPower,!0,1)}),null)}function z(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,1,"mwl-gauge",[["class","flow-meter"]],null,null,null,m,c)),e.pb(1,4767744,null,0,p.d,[e.k,p.e],{max:[0,"max"],value:[1,"value"],animated:[2,"animated"],animationDuration:[3,"animationDuration"]},null)],(function(l,n){var t=n.component;l(n,1,0,t.sensors.maxFlowRate,t.sensors.flowRate,!0,1)}),null)}function T(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,1,"mwl-gauge",[["class","flow-meter"]],null,null,null,m,c)),e.pb(1,4767744,null,0,p.d,[e.k,p.e],{max:[0,"max"],value:[1,"value"],animated:[2,"animated"],animationDuration:[3,"animationDuration"]},null)],(function(l,n){var t=n.component;l(n,1,0,t.sensors.maxPressure,t.sensors.pressure,!0,1)}),null)}function I(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,1,"mwl-gauge",[["class","flow-meter"]],null,null,null,m,c)),e.pb(1,4767744,null,0,p.d,[e.k,p.e],{max:[0,"max"],value:[1,"value"],animated:[2,"animated"],animationDuration:[3,"animationDuration"]},null)],(function(l,n){var t=n.component;l(n,1,0,t.sensors.ph,t.sensors.ec,!0,1)}),null)}function W(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,6,"ul",[["class","position-absolute water-pump-reading fert-level-text"]],null,null,null,null,null)),(l()(),e.qb(1,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Hb(2,null,[""," V"])),(l()(),e.qb(3,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Hb(4,null,[""," A"])),(l()(),e.qb(5,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Hb(6,null,[""," C"]))],null,(function(l,n){var t=n.component;l(n,2,0,t.sensors.currVoltage),l(n,4,0,t.sensors.currLoad),l(n,6,0,t.weather.temp)}))}function E(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,1,"mwl-gauge",[["class","fertilizer-gauge"]],null,null,null,m,c)),e.pb(1,4767744,null,0,p.d,[e.k,p.e],{dialStartAngle:[0,"dialStartAngle"],dialEndAngle:[1,"dialEndAngle"],max:[2,"max"],value:[3,"value"],animated:[4,"animated"],animationDuration:[5,"animationDuration"]},null)],(function(l,n){var t=n.component;l(n,1,0,180,0,t.sensors.NFullTankLevel,t.sensors.NCurrTankLevel,!0,1)}),null)}function D(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,1,"mwl-gauge",[["class","fertilizer-gauge"]],null,null,null,m,c)),e.pb(1,4767744,null,0,p.d,[e.k,p.e],{dialStartAngle:[0,"dialStartAngle"],dialEndAngle:[1,"dialEndAngle"],max:[2,"max"],value:[3,"value"],animated:[4,"animated"],animationDuration:[5,"animationDuration"]},null)],(function(l,n){var t=n.component;l(n,1,0,180,0,t.sensors.PFullTankLevel,t.sensors.PCurrTankLevel,!0,1)}),null)}function F(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,1,"mwl-gauge",[["class","fertilizer-gauge"]],null,null,null,m,c)),e.pb(1,4767744,null,0,p.d,[e.k,p.e],{dialStartAngle:[0,"dialStartAngle"],dialEndAngle:[1,"dialEndAngle"],max:[2,"max"],value:[3,"value"],animated:[4,"animated"],animationDuration:[5,"animationDuration"]},null)],(function(l,n){var t=n.component;l(n,1,0,180,0,t.sensors.KFullTankLevel,t.sensors.KCurrTankLevel,!0,1)}),null)}function _(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,1,"mwl-gauge",[["class","fertilizer-gauge"]],null,null,null,m,c)),e.pb(1,4767744,null,0,p.d,[e.k,p.e],{dialStartAngle:[0,"dialStartAngle"],dialEndAngle:[1,"dialEndAngle"],max:[2,"max"],value:[3,"value"],animated:[4,"animated"],animationDuration:[5,"animationDuration"]},null)],(function(l,n){var t=n.component;l(n,1,0,180,0,t.sensors.YFullTankLevel,t.sensors.YCurrTankLevel,!0,1)}),null)}function N(l){return e.Jb(0,[e.Fb(671088640,1,{leftPane:0}),e.Fb(671088640,2,{rightPane:0}),e.Fb(671088640,3,{waterPump:0}),e.Fb(671088640,4,{fertPump:0}),e.Fb(671088640,5,{fertPumpContainer:0}),e.Fb(671088640,6,{fieldBottomContent:0}),(l()(),e.fb(16777216,null,null,1,null,C)),e.pb(7,16384,null,0,s.i,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(8,0,null,null,174,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.qb(9,0,[[1,0],["leftPane",1]],null,101,"div",[["class","col"]],null,null,null,null,null)),(l()(),e.qb(10,0,null,null,32,"div",[["class","row gauge-list"]],null,null,null,null,null)),(l()(),e.qb(11,0,null,null,7,"div",[["class","col-3 text-center"]],null,null,null,null,null)),(l()(),e.qb(12,0,null,null,1,"p",[["class","text-center mb-0 d-inline border-bottom border-danger rounded-bottom-lg main-gauge-title"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,[" POWER"])),(l()(),e.qb(14,0,null,null,2,"div",[["class","gauge-container"]],null,null,null,null,null)),(l()(),e.fb(16777216,null,null,1,null,A)),e.pb(16,16384,null,0,s.i,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(17,0,null,null,1,"p",[["class","text-center mb-0"]],null,null,null,null,null)),(l()(),e.qb(18,0,null,null,0,"span",[["class","oi oi-arrow-thick-bottom"]],null,null,null,null,null)),(l()(),e.qb(19,0,null,null,7,"div",[["class","col  mb-0  text-center"]],null,null,null,null,null)),(l()(),e.qb(20,0,null,null,1,"p",[["class","text-center mb-0 d-inline border-bottom border-info rounded-bottom-lg main-gauge-title"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["FLOW RATE"])),(l()(),e.qb(22,0,null,null,2,"div",[["class","gauge-container"]],null,null,null,null,null)),(l()(),e.fb(16777216,null,null,1,null,z)),e.pb(24,16384,null,0,s.i,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(25,0,null,null,1,"p",[["class","text-center mb-0"]],null,null,null,null,null)),(l()(),e.qb(26,0,null,null,0,"span",[["class","oi oi-arrow-thick-bottom"]],null,null,null,null,null)),(l()(),e.qb(27,0,null,null,7,"div",[["class","col mb-0 text-center"]],null,null,null,null,null)),(l()(),e.qb(28,0,null,null,1,"p",[["class","text-center mb-0 d-inline border-bottom border-info rounded-bottom-lg main-gauge-title"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,[" PRESSURE"])),(l()(),e.qb(30,0,null,null,2,"div",[["class","gauge-container"]],null,null,null,null,null)),(l()(),e.fb(16777216,null,null,1,null,T)),e.pb(32,16384,null,0,s.i,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(33,0,null,null,1,"p",[["class","text-center mb-0"]],null,null,null,null,null)),(l()(),e.qb(34,0,null,null,0,"span",[["class","oi oi-arrow-thick-bottom"]],null,null,null,null,null)),(l()(),e.qb(35,0,null,null,7,"div",[["class","col text-center"]],null,null,null,null,null)),(l()(),e.qb(36,0,null,null,1,"p",[["class","text-center mb-0 d-inline border-bottom border-info rounded-bottom-lg main-gauge-title"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["EC"])),(l()(),e.qb(38,0,null,null,2,"div",[["class","gauge-container"]],null,null,null,null,null)),(l()(),e.fb(16777216,null,null,1,null,I)),e.pb(40,16384,null,0,s.i,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(41,0,null,null,1,"p",[["class","text-center mb-0"]],null,null,null,null,null)),(l()(),e.qb(42,0,null,null,0,"span",[["class","oi oi-arrow-thick-bottom"]],null,null,null,null,null)),(l()(),e.qb(43,0,null,null,8,"div",[["class","row pertilizer-unit"]],null,null,null,null,null)),(l()(),e.qb(44,0,[["waterPumpRow",1]],null,3,"div",[["class","col-4 position-relative"]],null,null,null,null,null)),(l()(),e.qb(45,0,[[3,0],["waterPump",1]],null,0,"img",[["alt","pump"],["class","pump"],["src","./assets/pump_img.png"]],null,null,null,null,null)),(l()(),e.fb(16777216,null,null,1,null,W)),e.pb(47,16384,null,0,s.i,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(48,0,[[5,0],["fertPumpContainer",1]],null,3,"div",[["class","col position-relative"]],null,null,null,null,null)),(l()(),e.qb(49,0,[[4,0],["fertPump",1]],null,2,"div",[["class","position-absolute fert-unit-container"]],null,null,null,null,null)),(l()(),e.qb(50,0,null,null,1,"app-fertilizer-system",[["fertLevels","50,100,0,80"],["fertPumpStatuses","1,0,0,1"]],null,null,null,f,b)),e.pb(51,4308992,null,0,g,[],{fertLevels:[0,"fertLevels"],fertPumpStatuses:[1,"fertPumpStatuses"]},null),(l()(),e.qb(52,0,null,null,58,"div",[["class","row pertilizer-data"]],null,null,null,null,null)),(l()(),e.qb(53,0,null,null,9,"div",[["class","col-4 text-right fert-level-text"]],null,null,null,null,null)),(l()(),e.qb(54,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["\xa0"])),(l()(),e.qb(56,0,null,null,0,"div",[["class","fertilizer-data-gauge-container invisible"]],null,null,null,null,null)),(l()(),e.qb(57,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,[" Flow Rate (l/min) "])),(l()(),e.qb(59,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,[" Volume "])),(l()(),e.qb(61,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,[" Fertilizer "])),(l()(),e.qb(63,0,null,null,11,"div",[["class","col text-center fert-level-text"]],null,null,null,null,null)),(l()(),e.qb(64,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["N"])),(l()(),e.qb(66,0,null,null,2,"div",[["class","fertilizer-data-gauge-container"]],null,null,null,null,null)),(l()(),e.fb(16777216,null,null,1,null,E)),e.pb(68,16384,null,0,s.i,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(69,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Hb(70,null,[" "," "])),(l()(),e.qb(71,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Hb(72,null,[" "," "])),(l()(),e.qb(73,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Hb(74,null,[" "," "])),(l()(),e.qb(75,0,null,null,11,"div",[["class","col text-center fert-level-text"]],null,null,null,null,null)),(l()(),e.qb(76,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["P"])),(l()(),e.qb(78,0,null,null,2,"div",[["class","fertilizer-data-gauge-container"]],null,null,null,null,null)),(l()(),e.fb(16777216,null,null,1,null,D)),e.pb(80,16384,null,0,s.i,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(81,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Hb(82,null,[" "," "])),(l()(),e.qb(83,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Hb(84,null,[" "," "])),(l()(),e.qb(85,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Hb(86,null,[" "," "])),(l()(),e.qb(87,0,null,null,11,"div",[["class","col text-center fert-level-text"]],null,null,null,null,null)),(l()(),e.qb(88,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["K"])),(l()(),e.qb(90,0,null,null,2,"div",[["class","fertilizer-data-gauge-container"]],null,null,null,null,null)),(l()(),e.fb(16777216,null,null,1,null,F)),e.pb(92,16384,null,0,s.i,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(93,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Hb(94,null,[" "," "])),(l()(),e.qb(95,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Hb(96,null,[" "," "])),(l()(),e.qb(97,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Hb(98,null,[" "," "])),(l()(),e.qb(99,0,null,null,11,"div",[["class","col  text-center fert-level-text"]],null,null,null,null,null)),(l()(),e.qb(100,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Y"])),(l()(),e.qb(102,0,null,null,2,"div",[["class","fertilizer-data-gauge-container"]],null,null,null,null,null)),(l()(),e.fb(16777216,null,null,1,null,_)),e.pb(104,16384,null,0,s.i,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(105,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Hb(106,null,[" "," "])),(l()(),e.qb(107,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Hb(108,null,[" "," "])),(l()(),e.qb(109,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e.Hb(110,null,[" "," "])),(l()(),e.qb(111,0,[[2,0],["rightPane",1]],null,71,"div",[["class","col"]],null,null,null,null,null)),(l()(),e.qb(112,0,null,null,13,"div",[["class","row crop-filed"]],null,null,null,null,null)),(l()(),e.qb(113,0,null,null,12,"div",[["class","col"]],null,null,null,null,null)),(l()(),e.qb(114,0,null,null,11,"div",[["class","d-block h-100"],["style","width: 97%;"]],null,null,null,null,null)),(l()(),e.qb(115,0,null,null,10,"div",[["class","filed-box d-flex justify-content-center border border-primary border-bottom-0 rounded-lg mt-1 ml-2 mr-1 h-100"]],null,null,null,null,null)),(l()(),e.qb(116,0,null,null,0,"img",[["alt",""],["class","align-self-end tree-top"],["src","./assets/tree_top.png"]],null,null,null,null,null)),(l()(),e.qb(117,0,null,null,7,"span",[["class","field-stats"]],null,null,null,null,null)),(l()(),e.qb(118,0,null,null,6,"ul",[],null,null,null,null,null)),(l()(),e.qb(119,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Hb(120,null,["","c"])),(l()(),e.qb(121,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Hb(122,null,[""," % PH"])),(l()(),e.qb(123,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Hb(124,null,[""," kmph"])),(l()(),e.qb(125,0,null,null,0,"img",[["alt",""],["class","weather-icon"],["src","https://developer.accuweather.com/sites/default/files/12-s.png"]],null,null,null,null,null)),(l()(),e.qb(126,0,[["fieldBottom",1]],null,40,"div",[["class","row crop-filed-nav"]],null,null,null,null,null)),(l()(),e.qb(127,0,null,null,39,"div",[["class","col"]],null,null,null,null,null)),(l()(),e.qb(128,0,null,null,18,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.qb(129,0,null,null,17,"div",[["class","col "]],null,null,null,null,null)),(l()(),e.qb(130,0,[[6,0],["fieldBottomContent",1]],null,16,"div",[["class","d-block"],["style","width: 97%;"]],null,null,null,null,null)),(l()(),e.qb(131,0,null,null,15,"div",[["class","d-flex justify-content-center border border-primary  border-top-0 rounded-bottom-lg  ml-2 mr-1"],["style","background-color: #b0855f;position: relative;"]],null,null,null,null,null)),(l()(),e.qb(132,0,null,null,0,"img",[["alt",""],["class","align-self-start tree-bottom"],["src","./assets/tree_root.png"]],null,null,null,null,null)),(l()(),e.qb(133,0,null,null,5,"span",[["class","filed-progress"]],null,null,null,null,null)),(l()(),e.qb(134,0,null,null,4,"ul",[],null,null,null,null,null)),(l()(),e.qb(135,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Last 2d 11h"])),(l()(),e.qb(137,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Next 2d 04h"])),(l()(),e.qb(139,0,null,null,7,"span",[["class","field-soil-stats"]],null,null,null,null,null)),(l()(),e.qb(140,0,null,null,6,"ul",[],null,null,null,null,null)),(l()(),e.qb(141,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["29.5'c"])),(l()(),e.qb(143,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["95% PH"])),(l()(),e.qb(145,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["34.3 kmph"])),(l()(),e.qb(147,0,null,null,19,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.qb(148,0,null,null,18,"div",[["class","col"]],null,null,null,null,null)),(l()(),e.qb(149,0,null,null,17,"div",[["class","d-block"],["style","width: 97%;"]],null,null,null,null,null)),(l()(),e.qb(150,0,null,null,16,"div",[["class","border border-primary rounded ml-2 mr-1 mt-2 pl-2 pr-2"]],null,null,null,null,null)),(l()(),e.qb(151,0,null,null,15,"div",[["class","d-flex align-items-stretch flex-row justify-content-between field-nav"]],null,null,null,null,null)),(l()(),e.qb(152,0,null,null,1,"div",[["class","nav-previouse"]],null,null,null,null,null)),(l()(),e.qb(153,0,null,null,0,"span",[["class","oi oi-caret-left"]],null,null,null,null,null)),(l()(),e.qb(154,0,null,null,5,"div",[],null,null,null,null,null)),(l()(),e.qb(155,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["PLOT #"])),(l()(),e.Hb(-1,null,["\xa0\xa0"])),(l()(),e.qb(158,0,null,null,1,"span",[["class","plot-no"]],null,null,null,null,null)),(l()(),e.Hb(159,null,["",""])),(l()(),e.qb(160,0,null,null,4,"div",[["class","d-flex align-items-end flex-column"]],null,null,null,null,null)),(l()(),e.qb(161,0,null,null,1,"span",[["class","crop-type"]],null,null,null,null,null)),(l()(),e.Hb(162,null,["",""])),(l()(),e.qb(163,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Hb(164,null,["","/",""])),(l()(),e.qb(165,0,null,null,1,"div",[["class","nav-next"]],null,null,null,null,null)),(l()(),e.qb(166,0,null,null,0,"span",[["class","oi oi-caret-right"]],null,null,null,null,null)),(l()(),e.qb(167,0,null,null,15,"div",[["class","row prgress-charts"]],null,null,null,null,null)),(l()(),e.qb(168,0,null,null,14,"div",[["class","col"]],null,null,null,null,null)),(l()(),e.qb(169,0,null,null,13,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.qb(170,0,null,null,5,"div",[["class","col d-flex justify-content-center"]],null,null,null,null,null)),(l()(),e.qb(171,0,null,null,4,"div",[["class","d-flex align-self-center align-items-center flex-column"]],null,null,null,null,null)),(l()(),e.qb(172,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["FERTIGATTION"])),(l()(),e.qb(174,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["2000L"])),(l()(),e.qb(176,0,null,null,2,"div",[["class","col d-flex justify-content-center align-items-center"]],null,null,null,null,null)),(l()(),e.qb(177,0,null,null,1,"canvas",[["baseChart",""],["style","width: inherit;height: inherit;"]],null,null,null,null,null)),e.pb(178,999424,null,0,k.a,[e.k,k.c],{data:[0,"data"],labels:[1,"labels"],options:[2,"options"],chartType:[3,"chartType"],colors:[4,"colors"],legend:[5,"legend"],plugins:[6,"plugins"]},null),(l()(),e.qb(179,0,null,null,3,"div",[["class","col gauge-container d-flex justify-content-center align-items-center"]],null,null,null,null,null)),(l()(),e.qb(180,0,null,null,2,"div",[["style","width: 70%;"]],null,null,null,null,null)),(l()(),e.qb(181,0,null,null,1,"mwl-gauge",[["class","power"]],null,null,null,m,c)),e.pb(182,4767744,null,0,p.d,[e.k,p.e],{max:[0,"max"],value:[1,"value"],animated:[2,"animated"],animationDuration:[3,"animationDuration"]},null)],(function(l,n){var t=n.component;l(n,7,0,t.showPumpLine),l(n,16,0,t.sensors),l(n,24,0,t.sensors),l(n,32,0,t.sensors),l(n,40,0,t.sensors),l(n,47,0,t.sensors),l(n,51,0,"50,100,0,80","1,0,0,1"),l(n,68,0,t.sensors),l(n,80,0,t.sensors),l(n,92,0,t.sensors),l(n,104,0,t.sensors),l(n,178,0,t.pieChartData,t.pieChartLabels,t.pieChartOptions,t.pieChartType,t.pieChartColors,t.pieChartLegend,t.pieChartOptions),l(n,182,0,100,60,!0,1)}),(function(l,n){var t=n.component;l(n,70,0,t.sensors.NRate),l(n,72,0,t.sensors.NSchedule),l(n,74,0,t.sensors.NUsed),l(n,82,0,t.sensors.PRate),l(n,84,0,t.sensors.PSchedule),l(n,86,0,t.sensors.PUsed),l(n,94,0,t.sensors.KRate),l(n,96,0,t.sensors.KSchedule),l(n,98,0,t.sensors.KUsed),l(n,106,0,t.sensors.YRate),l(n,108,0,t.sensors.YSchedule),l(n,110,0,t.sensors.YUsed),l(n,120,0,t.weather.temp),l(n,122,0,t.sensors.ec/t.sensors.ph*100),l(n,124,0,t.weather.wind),l(n,159,0,t.field.fieldId),l(n,162,0,t.field.crop),l(n,164,0,t.field.numOfPlant,t.field.aria)}))}function M(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,1,"app-dashboard",[],null,null,null,N,H)),e.pb(1,4308992,null,0,L,[S.a],null,null)],(function(l,n){l(n,1,0)}),null)}var J=e.mb("app-dashboard",L,M,{},{},[]),Y=t("liez"),V=t("iInd");class K{}var R=t("ygIp");class ${}var j=t("cUpR");const B=new e.M("8.2.3");let X;t("XNiG"),t("HDdC");try{X="undefined"!=typeof Intl&&Intl.v8BreakIterator}catch(nl){X=!1}t("JX91"),t("quSY"),t("LRne"),t("vkgz"),t("Kj3r"),t("pLZG"),t("lJxs"),t("IzEk");const O=new e.M("8.2.3"),U=new e.o("mat-sanity-checks",{providedIn:"root",factory:function(){return!0}});class G{constructor(l,n){this._sanityChecksEnabled=l,this._hammerLoader=n,this._hasDoneGlobalChecks=!1,this._hasCheckedHammer=!1,this._document="object"==typeof document&&document?document:null,this._window="object"==typeof window&&window?window:null,this._areChecksEnabled()&&!this._hasDoneGlobalChecks&&(this._checkDoctypeIsDefined(),this._checkThemeIsPresent(),this._checkCdkVersionMatch(),this._hasDoneGlobalChecks=!0)}_areChecksEnabled(){return this._sanityChecksEnabled&&Object(e.U)()&&!this._isTestEnv()}_isTestEnv(){const l=this._window;return l&&(l.__karma__||l.jasmine)}_checkDoctypeIsDefined(){this._document&&!this._document.doctype&&console.warn("Current document does not have a doctype. This may cause some Angular Material components not to behave as expected.")}_checkThemeIsPresent(){if(!this._document||!this._document.body||"function"!=typeof getComputedStyle)return;const l=this._document.createElement("div");l.classList.add("mat-theme-loaded-marker"),this._document.body.appendChild(l);const n=getComputedStyle(l);n&&"none"!==n.display&&console.warn("Could not find Angular Material core theme. Most Material components may not work as expected. For more info refer to the theming guide: https://material.angular.io/guide/theming"),this._document.body.removeChild(l)}_checkCdkVersionMatch(){O.full!==B.full&&console.warn("The Angular Material version ("+O.full+") does not match the Angular CDK version ("+B.full+").\nPlease ensure the versions of these two packages exactly match.")}_checkHammerIsAvailable(){!this._hasCheckedHammer&&this._window&&(!this._areChecksEnabled()||this._window.Hammer||this._hammerLoader||console.warn("Could not find HammerJS. Certain Angular Material components may not work correctly."),this._hasCheckedHammer=!0)}}let Z;try{Z="undefined"!=typeof Intl}catch(nl){Z=!1}t("IheW"),t("DH7j"),t("EY2u"),t("ZUHj"),t("l7GE"),t("JIr8"),t("nYR2"),t("w1tV");class Q{}t.d(n,"DashboardModuleNgFactory",(function(){return ll}));var ll=e.nb(u,[],(function(l){return e.yb([e.zb(512,e.j,e.Y,[[8,[i.a,J,w,h]],[3,e.j],e.v]),e.zb(4608,s.k,s.j,[e.s,[2,s.v]]),e.zb(4608,Y.b,Y.b,[e.s,[2,Y.d],[2,Y.c]]),e.zb(1073742336,s.b,s.b,[]),e.zb(1073742336,V.l,V.l,[[2,V.q],[2,V.k]]),e.zb(1073742336,K,K,[]),e.zb(1073742336,Y.a,Y.a,[]),e.zb(1073742336,R.a,R.a,[]),e.zb(1073742336,p.a,p.a,[]),e.zb(1073742336,$,$,[]),e.zb(1073742336,G,G,[[2,U],[2,j.f]]),e.zb(1073742336,Q,Q,[]),e.zb(1073742336,k.b,k.b,[]),e.zb(1073742336,u,u,[]),e.zb(1024,V.i,(function(){return[[{path:"",component:L},{path:"f",component:g},{path:"l",component:a}]]}),[])])}))}}]);