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

        this._tag = "ul";
    }
    UnorderedList.prototype = Object.create(HTMLWidget.prototype);
    UnorderedList.prototype.constructor = UnorderedList;
    UnorderedList.prototype._class += " other_UnorderedList";

    UnorderedList.prototype.enter = function (domNode, element) {

    };

    UnorderedList.prototype.update = function (domNode, element) {

    };

    UnorderedList.prototype.exit = function (domNode, element) {
        HTMLWidget.prototype.exit.apply(this, arguments);
    };

    return UnorderedList;
}));