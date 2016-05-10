"use strict";
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["../common/HTMLWidget","css!./UnorderedList"], factory);
    } else {
        root.other_UnorderedList = factory(root.common_HTMLWidget);
    }
}(this, function (HTMLWidget) {
    function UnorderedList() {
        HTMLWidget.call(this);
        this._tag = "div";
    }

    UnorderedList.prototype = Object.create(HTMLWidget.prototype);
    UnorderedList.prototype.constructor = UnorderedList;
    UnorderedList.prototype._class += " other_UnorderedList";

    UnorderedList.prototype.enter = function (domNode, element) {
        HTMLWidget.prototype.enter.apply(this, arguments);

        this._ul = element.append("ul");
    };

    UnorderedList.prototype.update = function (domNode, element) {
        HTMLWidget.prototype.update.apply(this, arguments);
        var li = this._ul.selectAll(".dataRow").data(this.data());

        li.enter()
            .append("li")
            .attr("class", "dataRow");

        li.text(function (d) { return d[0]; });

        li.exit().remove();
    };

    UnorderedList.prototype.exit = function (domNode, element) {
        HTMLWidget.prototype.exit.apply(this, arguments);
    };

    return UnorderedList;
}));