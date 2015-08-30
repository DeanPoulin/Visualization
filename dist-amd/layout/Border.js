(function(e,t){typeof define=="function"&&define.amd?define(["d3","../common/HTMLWidget","./Cell","../common/Text","css!./Border"],t):e.layout_Border=t(e.d3,e.common_HTMLWidget,e.layout_Cell,e.common_Text)})(this,function(e,t,n,r){function i(){t.call(this),this._tag="div",this._colCount=0,this._rowCount=0,this._colSize=0,this._rowSize=0,this.content([])}return i.prototype=Object.create(t.prototype),i.prototype._class+=" layout_Border",i.prototype.publish("gutter",4,"number","Gap Between Widgets",null,{tags:["Private"]}),i.prototype.publish("designMode",!1,"boolean","Design Mode",null,{tags:["Private"]}),i.prototype.publish("layoutType","Default","set","This determines the placement/size of the Cells relative to the Border._target element",["Default"],{tags:["Private"]}),i.prototype.publish("topCellSize",100,"number","Height of the 'Top' Cell (px)",null,{tags:["Private"]}),i.prototype.publish("leftCellSize",150,"number","Width of the 'Left' Cell (px)",null,{tags:["Private"]}),i.prototype.publish("rightCellSize",250,"number","Width of the 'Right' Cell (px)",null,{tags:["Private"]}),i.prototype.publish("bottomCellSize",80,"number","Height of the 'Bottom' Cell (px)",null,{tags:["Private"]}),i.prototype.publish("topCellPercentage",0,"number","Percentage (of parent) Height of the 'Top' Cell",null,{tags:["Private"]}),i.prototype.publish("leftCellPercentage",0,"number","Percentage (of parent) Width of the 'Left' Cell",null,{tags:["Private"]}),i.prototype.publish("rightCellPercentage",0,"number","Percentage (of parent) Width of the 'Right' Cell",null,{tags:["Private"]}),i.prototype.publish("bottomCellPercentage",0,"number","Percentage (of parent) Height of the 'Bottom' Cell",null,{tags:["Private"]}),i.prototype.publish("cellPadding","0px","string","Cell Padding (px)",null,{tags:["Intermediate"]}),i.prototype.publish("content",[],"widgetArray","widgets",null,{tags:["Private"]}),i.prototype.publish("sectionTypes",[],"array","Section Types sharing an index with 'content' - Used to determine position/size.",null,{tags:["Private"]}),i.prototype.testData=function(){return this.leftCellSize(64).rightCellSize(64).setContent("topSection",(new r).testData()).setContent("rightSection",(new r).testData()).setContent("bottomSection",(new r).testData()).setContent("leftSection",(new r).testData()).setContent("centerSection",(new r).testData()),this},i.prototype.applyLayoutType=function(e){var t=this.borderLayoutObject(e);for(var n in this.content())this.content()[n]._fixedLeft=t[this.sectionTypes()[n]].left,this.content()[n]._fixedTop=t[this.sectionTypes()[n]].top,this.content()[n]._fixedWidth=t[this.sectionTypes()[n]].width,this.content()[n]._fixedHeight=t[this.sectionTypes()[n]].height,this.content()[n]._dragHandles=this.cellSpecificDragHandles(this.sectionTypes()[n])},i.prototype.cellSpecificDragHandles=function(e){switch(this.layoutType()){default:switch(e){case"topSection":return["s"];case"rightSection":return["w"];case"bottomSection":return["n"];case"leftSection":return["e"];case"centerSection":return[]}}},i.prototype.borderLayoutObject=function(e){function g(e){e.width.px=typeof e.width.px!="undefined"?e.width.px:0,e.width["%"]=typeof e.width["%"]!="undefined"?e.width["%"]:0,e.height.px=typeof e.height.px!="undefined"?e.height.px:0,e.height["%"]=typeof e.height["%"]!="undefined"?e.height["%"]:0;var t={width:e.width.px+e.width["%"]/100*m.width,height:e.height.px+e.height["%"]/100*m.height,top:e.top.px+e.top["%"]/100*m.height+u.gutter()/2,left:e.left.px+e.left["%"]/100*m.width+u.gutter()/2};return t}var t,n,r,i,s,o={},u=this,a,f,l,c,h,p,d,v,m=this.target().getBoundingClientRect();switch(e){default:this.sectionTypes().indexOf("topSection")!==-1&&(a=this.topCellSize(),f=this.topCellPercentage()),this.sectionTypes().indexOf("bottomSection")!==-1&&(l=this.bottomCellSize(),c=this.bottomCellPercentage()),this.sectionTypes().indexOf("leftSection")!==-1&&(h=this.leftCellSize(),p=this.leftCellPercentage()),this.sectionTypes().indexOf("rightSection")!==-1&&(d=this.rightCellSize(),v=this.rightCellPercentage()),t=g({width:{px:0,"%":100},height:{px:a,"%":f},top:{px:0,"%":0},left:{px:0,"%":0}}),n=g({width:{px:0,"%":100},height:{px:l,"%":c},top:{px:0,"%":100},left:{px:0,"%":0}}),n.top-=n.height,i=g({width:{px:h,"%":p},height:{px:-t.height-n.height,"%":100},top:{px:t.height,"%":0},left:{px:0,"%":0}}),r=g({width:{px:d,"%":v},height:{px:-t.height-n.height,"%":100},top:{px:t.height,"%":0},left:{px:0,"%":100}}),r.left-=r.width,s=g({width:{px:-r.width-i.width,"%":100},height:{px:-t.height-n.height,"%":100},top:{px:t.height,"%":0},left:{px:i.width,"%":0}}),o.topSection=t,o.bottomSection=n,o.rightSection=r,o.leftSection=i,o.centerSection=s}return o},i.prototype.clearContent=function(){this.content(this.content().filter(function(e){return e.target(null),!1})),this.sectionTypes([])},i.prototype.setContent=function(e,t,r){r=typeof r!="undefined"?r:"";var i=this.sectionTypes();if(t){var s=(new n).widget(t).title(r);this.content().push(s),i.push(e)}return this.sectionTypes(i),this},i.prototype.getContent=function(e){var t=null;return this.content().some(function(n){return n.widget()._id===e?(t=n.widget(),!0):!1}),t},i.prototype.getCellSize=function(e){switch(this.sectionTypes()[e]){case"topSection":return this.topCellSize();case"rightSection":return this.rightCellSize();case"bottomSection":return this.bottomCellSize();case"leftSection":return this.leftCellSize()}},i.prototype.changeCellSize=function(e,t){switch(this.sectionTypes()[e]){case"topSection":this.topCellSize(this.topCellSize()+t);break;case"rightSection":this.rightCellSize(this.rightCellSize()+t);break;case"bottomSection":this.bottomCellSize(this.bottomCellSize()+t);break;case"leftSection":this.leftCellSize(this.leftCellSize()+t);break;case"centerSection":this.centerCellSize(this.centerCellSize()+t)}},i.prototype.overHandle=function(e){var t="",n=this._dragCell.handleSize(),r=this._offsetY+this._dragCell._fixedTop-this.gutter()/2,i=this._offsetX+this._dragCell._fixedLeft-this.gutter()/2,s=this._dragCell._fixedWidth,o=this._dragCell._fixedHeight;return Math.ceil(r+o-this.gutter())>=e.clientY&&Math.floor(r+o-n-this.gutter())<=e.clientY?t="s":Math.floor(r)<=e.clientY&&Math.ceil(r+n)>=e.clientY&&(t="n"),Math.ceil(i+s-this.gutter())>=e.clientX&&Math.floor(i+s-n-this.gutter())<=e.clientX?t+="e":Math.floor(i)<=e.clientX&&Math.ceil(i+n)>=e.clientX&&(t+="w"),t},i.prototype.setLayoutOffsets=function(){this._offsetX=this._element.node().getBoundingClientRect().left+this.gutter()/2,this._offsetY=this._element.node().getBoundingClientRect().top+this.gutter()/2},i.prototype.dragStart=function(t,n){e.event.sourceEvent.stopPropagation();var r=this;this._dragCell=t,this._dragCellStartSize=this.getCellSize(n),r._handle=r.overHandle(e.event.sourceEvent),r._dragCell._dragHandles.indexOf(r._handle)===-1&&(r._handle=undefined),this._dragPrevX=e.event.sourceEvent.clientX,this._dragPrevY=e.event.sourceEvent.clientY},i.prototype.dragTick=function(t,n){if(this._handle){var r=this._dragPrevX-e.event.sourceEvent.clientX,i=this._dragPrevY-e.event.sourceEvent.clientY;switch(this._sectionTypeArr[n]){case"topSection":i!==0&&this.changeCellSize(n,-i);break;case"rightSection":r!==0&&this.changeCellSize(n,r);break;case"bottomSection":i!==0&&this.changeCellSize(n,i);break;case"leftSection":r!==0&&this.changeCellSize(n,-r);break;case"centerSection":}this._dragPrevX=e.event.sourceEvent.clientX,this._dragPrevY=e.event.sourceEvent.clientY}this.render()},i.prototype.dragEnd=function(e){this.render()},i.prototype.enter=function(e,n){t.prototype.enter.apply(this,arguments),n.style("position","relative"),this.dropDiv=n.append("div"),this.contentDiv=n.append("div"),this._scrollBarWidth=this.getScrollbarWidth()},i.prototype.update=function(n,r){t.prototype.update.apply(this,arguments),this._sectionTypeArr=this.sectionTypes();var i=this;this.setLayoutOffsets();var s=this.contentDiv.selectAll(".cell_"+this._id).data(this.content(),function(e){return e._id});s.enter().append("div").attr("class","cell_"+this._id).style("position","absolute").each(function(e){e.target(this)});var o=e.behavior.drag().on("dragstart",function(e,t){i.dragStart.call(i,e,t)}).on("drag",function(e,t){i.dragTick.call(i,e,t)}).on("dragend",function(e,t){i.dragEnd.call(i,e,t)});this.designMode()?this.contentDiv.selectAll(".cell_"+this._id).call(o):this.contentDiv.selectAll(".cell_"+this._id).on(".drag",null),this.applyLayoutType(this.layoutType()),s.style("left",function(e){return e._fixedLeft+"px"}).style("top",function(e){return e._fixedTop+"px"}).style("width",function(e){return e._fixedWidth-i.gutter()+"px"}).style("height",function(e){return e._fixedHeight-i.gutter()+"px"}).each(function(e){e._parentElement.attr("draggable",i.designMode()).selectAll(".dragHandle").attr("draggable",i.designMode()),e.surfacePadding(i.cellPadding()).resize()}),s.exit().each(function(e){e.target(null)}).remove()},i.prototype.exit=function(e,n){t.prototype.exit.apply(this,arguments)},i.prototype.render=function(e){var n=this;return t.prototype.render.call(this,function(t){if(n.content().length){var r=n.content().length;n.content().forEach(function(n,i){setTimeout(function(){n.render(function(){--r===0&&e&&e(t)})},0)})}else e&&e(t)}),this},i});