(function(e,t){typeof define=="function"&&define.amd?define(["./SVGWidget","./Shape","./Text","css!./TextBox"],t):e.common_TextBox=t(e.common_SVGWidget,e.common_Shape,e.common_Text)})(this,function(e,t,n){function r(){e.call(this),this._shape=(new t).shape("rect"),this._text=new n}return r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.prototype._class+=" common_TextBox",r.prototype.publishProxy("text","_text"),r.prototype.publishProxy("shape_colorStroke","_shape","colorStroke"),r.prototype.publishProxy("shape_colorFill","_shape","colorFill"),r.prototype.publishProxy("text_colorFill","_text","colorFill"),r.prototype.publish("paddingLeft",4,"number","Padding:  Left",null,{tags:["Private"]}),r.prototype.publish("paddingRight",4,"number","Padding:  Right",null,{tags:["Private"]}),r.prototype.publish("paddingTop",4,"number","Padding:  Top",null,{tags:["Private"]}),r.prototype.publish("paddingBottom",4,"number","Padding:  Bottom",null,{tags:["Private"]}),r.prototype.publishProxy("anchor","_text"),r.prototype.publish("fixedSize",null),r.prototype.padding=function(e){return this.paddingLeft(e),this.paddingRight(e),this.paddingTop(e),this.paddingBottom(e),this},r.prototype.enter=function(t,n){e.prototype.enter.apply(this,arguments),this._shape.target(t).render(),this._text.target(t).render()},r.prototype.update=function(t,n){e.prototype.update.apply(this,arguments),this._text.render();var r=this._text.getBBox(!0),i={width:this.fixedSize()?this.fixedSize().width:r.width+this.paddingLeft()+this.paddingRight(),height:this.fixedSize()?this.fixedSize().height:r.height+this.paddingTop()+this.paddingBottom()};this._shape.width(i.width).height(i.height).render();if(this.fixedSize())switch(this.anchor()){case"start":this._text.x(-this.fixedSize().width/2+r.width/2+(this.paddingLeft()+this.paddingRight())/2).render();break;case"end":this._text.x(this.fixedSize().width/2-r.width/2-(this.paddingLeft()+this.paddingRight())/2).render()}},r.prototype.exit=function(t,n){this._shape.target(null),this._text.target(null),e.prototype.exit.apply(this,arguments)},r});