!function(t,o){"function"==typeof define&&define.amd?define(["d3","../common/HTMLWidget"],o):t.other_Audio=o(t.d3,t.common_HTMLWidget)}(this,function(t,o){function e(){o.call(this),this._tag="audio",this._sections={}}return e.prototype=Object.create(o.prototype),e.prototype.constructor=e,e.prototype._class+=" other_Audio",e.prototype.publish("source","","string","Audio Source"),e.prototype.section=function(t,o,e,n){return arguments.length?1===arguments.length?this._sections[t]:(this._sections[t]={label:t,offset:o,beatLength:e,beatCount:n,endOffset:o+n*e},this):this._sections},e.prototype.getType=function(t){switch(t){case"mp3":return"audio/mpeg; codecs='mp3'";case"ogg":return"audio/ogg; codecs='vorbis'"}return""},e.prototype.enter=function(t,o){var e=this;o.on("play",function(t){e.onPlay(t)})},e.prototype.update=function(t,o){var e=o.selectAll("source").data(this.source(),function(t){return t});e.enter().append("source").attr("src",function(t){return t})},e.prototype.createTimer=function(o,e,n){var i=this;t.timer(function(){return i.onTick(o.label,n,o),!0},n*o.beatLength,e+o.offset)},e.prototype.onTick=function(t,o,e){},e.prototype.onPlay=function(t){var o=Date.now();for(var e in this._sections)for(var n=this._sections[e],i=0;i<n.beatCount;++i)this.createTimer(n,o,i)},e.prototype.play=function(t){var o=this;this._element.on("canplaythrough",function(t){o.node().play()}),this.node().load()},e});