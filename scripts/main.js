define("modules/testModule", ["require", "exports", "jquery"], function (require, exports) {
    "use strict";
    var TestModule = (function () {
        function TestModule() {
        }
        TestModule.prototype.init = function () {
            console.log("module init");
            $("body").html("module init");
        };
        return TestModule;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = TestModule;
});
define("main", ["require", "exports", "modules/testModule", "jquery"], function (require, exports, testModule_1) {
    "use strict";
    $(function () {
        console.log("start");
        var module = new testModule_1.default();
        module.init();
    });
});
//# sourceMappingURL=main.js.map