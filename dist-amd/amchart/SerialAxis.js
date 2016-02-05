(function(e,t){typeof define=="function"&&define.amd?define(["./Axis","d3"],t):e.amchart_SerialAxis=t(e.amchart_Axis,e.d3)})(this,function(e,t){function n(){e.call(this),this._parser=t.time.format("%Y-%m-%d").parse}n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.prototype._class+=" amchart_SerialAxis",n.prototype.publish("axisFontSize",null,"number","X/Y Axis Text Font Size",null,{tags:["Basic","Shared"]}),n.prototype.publish("axisBaselineColor","#000000","html-color","X Axis Baseline Color",null,{tags:["Basic","Shared"]}),n.prototype.publish("axisFontColor","#000000","html-color","Horizontal Axis Text Style (Color)",null,{tags:["Basic","Shared"]}),n.prototype.publish("axisTitle","","string","X-Axis Title",null,{tags:["Basic","Shared"]}),n.prototype.publish("axisTitleFontSize",null,"number","Vertical Axis Title Text Style (Font Size)",null,{tags:["Basic","Shared"]}),n.prototype.publish("axisTitleFontColor","#000000","html-color","Axis Title Text Style (Color)",null,{tags:["Basic","Shared"]}),n.prototype.publish("axisLabelRotation",null,"number","Axis Label Rotation",null,{min:0,max:90,step:.1,inputType:"range",tags:["Intermediate","Shared"]}),n.prototype.publish("axisLineWidth",1,"number","Axis Line Width",null,{tags:["Intermediate","Shared"]}),n.prototype.publish("axisAlpha",1,"number","Axis Alpha",null,{tags:["Intermediate"]}),n.prototype.publish("axisAutoGridCount",!0,"boolean","Specifies Whether Number of GridCount Is Specified Automatically, According To The Axis Size",null,{tags:["Advanced"]}),n.prototype.publish("axisGridPosition","start","set","Specifies If A Grid Line Is Placed On The Center of A Cell or On The Beginning of A Cell",["start","middle"],{tags:["Advanced"]}),n.prototype.publish("axisBoldPeriodBeginning",!0,"boolean","When parse dates is on for the category axis, the chart will try to highlight the beginning of the periods, like month, in bold.",null,{tags:["Intermediate"]}),n.prototype.publish("axisDashLength",0,"number","Length of a dash. 0 means line is not dashed.",null,{tags:["Advanced"]}),n.prototype.publish("axisFillAlpha",0,"number","Fill opacity. Every second space between grid lines can be filled with color. Set fillAlpha to a value greater than 0 to see the fills.",null,{tags:["Intermediate"]}),n.prototype.publish("axisFillColor",null,"html-color","Fill color. Every second space between grid lines can be filled with color. Set fillAlpha to a value greater than 0 to see the fills.",null,{tags:["Intermediate"]}),n.prototype.publish("axisGridAlpha",0,"number","Grid alpha.",null,{tags:["Intermediate"]}),n.prototype.publish("startOnAxis",!0,"boolean","Draw Chart Starting On Axis.",null,{tags:["Intermediate"]}),n.prototype.publish("axisTypeTimePattern","%Y-%m-%d","string","Time Series Pattern"),n.prototype.publish("axisType","ordinal","set","X-Axis Type",["ordinal","linear","time","pow","log","none"]),n.prototype.publish("axisTickFormat","","string","Y-Axis Tick Format"),n.prototype.publish("position",null,"set","Position of Axis",["top","bottom","left","right"]);var r=n.prototype.axisTypeTimePattern;return n.prototype.axisTypeTimePattern=function(e){var n=r.apply(this,arguments);return arguments.length&&(this._parser=t.time.format(e).parse),n},n});