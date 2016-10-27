"use strict";
var Logger2 = (function () {
    function Logger2() {
        this.logs = []; // capture logs for testing
    }
    Logger2.prototype.log = function (message) {
        this.logs.push(message);
        console.log(message);
    };
    return Logger2;
}());
exports.Logger2 = Logger2;
//# sourceMappingURL=logger2.service.js.map