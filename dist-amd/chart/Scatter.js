(function(e,t){typeof define=="function"&&define.amd?define(["d3","../common/SVGWidget","./XYAxis","../api/INDChart","css!./Scatter"],t):e.chart_Scatter=t(e.d3,e.common_SVGWidget,e.chart_XYAxis,e.api_INDChart)})(this,function(e,t,n,r){function i(e){n.call(this),r.call(this)}return i.prototype=Object.create(n.prototype),i.prototype._class+=" chart_Scatter",i.prototype.implements(r.prototype),i.prototype.publish("paletteID","default","set","Palette ID",i.prototype._palette.switch(),{tags:["Basic","Shared"]}),i.prototype.publish("pointShape","cross","set","Shape of the data points",["circle","rectangle","cross"]),i.prototype.publish("pointSize",6,"number","Point Size"),i.prototype.publish("interpolate","","set","Interpolate Data",["","linear","step","step-before","step-after","basis","bundle","cardinal","monotone"]),i.prototype.publish("interpolateFill",!1,"boolean","Fill Interpolation"),i.prototype.publish("interpolateFillOpacity",.66,"number","Fill Interpolation Opacity"),i.prototype.xPos=function(e){return this.orientation()==="horizontal"?this.dataPos(e.label):this.valuePos(e.value)},i.prototype.yPos=function(e){return this.orientation()==="horizontal"?this.valuePos(e.value):this.dataPos(e.label)},i.prototype.updateChart=function(t,n,r,i,s){function u(e){switch(e){case"rectangle":return"rect";case"circle":return"circle";case"cross":return"path"}}var o=this;this._palette=this._palette.switch(this.paletteID()),this._prevPointShape!==this.pointShape()&&(this.svgData.selectAll(".data").remove(),this._prevPointShape=this.pointShape());var a=this.flattenData().map(function(e){return e.shape=u(o.pointShape()),e}),f=this.svgData.selectAll(".point").data(a,function(e,t){return e.shape+"_"+t});f.enter().append("g").attr("class","point").on("click",function(e,t){o.click(o.rowToObj(o.data()[e.rowIdx]),o._columns[e.colIdx])}).each(function(t){var n=e.select(this);n.append(t.shape).append("title")}),f.each(function(t){var n=e.select(this).select(t.shape);switch(t.shape){case"rect":n.attr("x",function(e){return o.xPos(e)-o.pointSize()/2}).attr("y",function(e){return o.yPos(e)-o.pointSize()/2}).attr("width",o.pointSize()).attr("height",o.pointSize()).style("fill",function(e,t){return o._palette(o._columns[e.colIdx])});break;case"circle":n.attr("cx",function(e){return o.xPos(e)}).attr("cy",function(e){return o.yPos(e)}).attr("r",o.pointSize()/2).style("fill",function(e,t){return o._palette(o._columns[e.colIdx])});break;case"path":n.attr("d",function(e){return"M"+(o.xPos(e)-o.pointSize()/2)+" "+(o.yPos(e)-o.pointSize()/2)+" "+"L"+(o.xPos(e)+o.pointSize()/2)+" "+(o.yPos(e)+o.pointSize()/2)+" "+"M"+(o.xPos(e)-o.pointSize()/2)+" "+(o.yPos(e)+o.pointSize()/2)+" "+"L"+(o.xPos(e)+o.pointSize()/2)+" "+(o.yPos(e)-o.pointSize()/2)}).style("stroke",function(e,t){return o._palette(o._columns[e.colIdx])})}n.select("title").text(function(e,t){return o.data()[e.rowIdx][0]+" ("+o.columns()[e.colIdx]+")"+": "+e.value})}),f.exit().remove();var l=this.svgData.selectAll(".area").data(this.columns().filter(function(e,t){return o.interpolate()&&o.interpolateFill()&&t>0}));l.enter().append("path").attr("class","area");var c=e.svg.area().interpolate(this.interpolate());switch(this.orientation()){case"horizontal":c.x(function(e){return o.xPos(e)}).y0(function(e){return s}).y1(function(e){return o.yPos(e)});break;default:c.y(function(e){return o.yPos(e)}).x0(function(e){return 0}).x1(function(e){return o.xPos(e)})}l.each(function(t,n){var r=e.select(this);r.attr("d",c(a.filter(function(e){return e.colIdx===n+1}))).style("opacity",o.interpolateFillOpacity()).style("stroke","none").style("fill",function(t,r){return e.hsl(o._palette(o._columns[n+1])).brighter()})}),l.exit().remove();var h=this.svgData.selectAll(".line").data(this.columns().filter(function(e,t){return o.interpolate()&&t>0}));h.enter().append("path").attr("class","line");var p=e.svg.line().x(function(e){return o.xPos(e)}).y(function(e){return o.yPos(e)}).interpolate(this.interpolate());h.each(function(t,n){var r=e.select(this),i=a.filter(function(e){return e.colIdx===n+1});r.attr("d",p(i)).style("stroke",function(e,t){return o._palette(o._columns[n+1])}).style("fill","none")}),h.exit().remove()},i.prototype.exit=function(e,n){t.prototype.exit.apply(this,arguments)},i});