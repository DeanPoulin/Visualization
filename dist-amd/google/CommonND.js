(function(e,t){typeof define=="function"&&define.amd?define(["d3","../google/Common","../api/INDChart","goog!visualization,1,packages:[corechart]"],t):e.google_CommonND=t(e.d3,e.google_Common,e.api_INDChart)})(this,function(e,t,n){function r(){t.call(this),n.call(this)}function i(e){var t=[];for(var n=0;n<e;n++)t.push({});return t}return r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.prototype._class+=" google_CommonND",r.prototype.implements(n.prototype),r.prototype.publish("paletteID","default","set","Palette ID",r.prototype._palette.switch(),{tags:["Basic","Shared"]}),r.prototype.publish("useClonedPalette",!1,"boolean","Enable or disable using a cloned palette",null,{tags:["Intermediate","Shared"]}),r.prototype.getChartOptions=function(){var e=t.prototype.getChartOptions.call(this);return e.series=i(this.getNumSeries()),e.axes={},e},r.prototype.update=function(e,n){this._palette=this._palette.switch(this.paletteID()),this.useClonedPalette()&&(this._palette=this._palette.cloneNotExists(this.paletteID()+"_"+this.id())),t.prototype.update.apply(this,arguments)},r});