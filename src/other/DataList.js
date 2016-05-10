"use strict";
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["../common/HTMLWidget","css!./DataList"], factory);
    } else {
        root.other_DataList = factory(root.common_HTMLWidget);
    }
}(this, function (HTMLWidget) {
    function DataList() {
        HTMLWidget.call(this);
        this._tag = "div";
    }

    DataList.prototype = Object.create(HTMLWidget.prototype);
    DataList.prototype.constructor = DataList;
    DataList.prototype._class += " other_DataList";

    DataList.prototype.enter = function (domNode, element) {
        HTMLWidget.prototype.enter.apply(this, arguments);

        this._ul = element.append("ul");
    };

    DataList.prototype.update = function (domNode, element) {
        HTMLWidget.prototype.update.apply(this, arguments);

        var li = this._ul.selectAll(".dataRow").data(this.data());

        li.enter()
            .append("li")
            .attr("class", "dataRow");

        li.text(function (d) {
            return d[0];
        });

        li.exit().remove();
    };

    DataList.prototype.exit = function (domNode, element) {
        HTMLWidget.prototype.exit.apply(this, arguments);
    };

    return DataList;
}));