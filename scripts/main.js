define("modules/testModule", ["require", "exports"], function (require, exports) {
    "use strict";
    var TestModule = (function () {
        function TestModule() {
        }
        TestModule.prototype.init = function () {
            console.log("module init");
        };
        return TestModule;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = TestModule;
});
define("main", ["require", "exports", "modules/testModule"], function (require, exports, testModule_1) {
    "use strict";
    console.log("start");
    var module = new testModule_1.default();
    module.init();
});
//# sourceMappingURL=main.js.map