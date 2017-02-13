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
define("modules/a", ["require", "exports", "jquery"], function (require, exports) {
    "use strict";
    var B = (function () {
        function B() {
        }
        B.prototype.init = function () {
            var a = new A;
            a.b = new A;
            var fakeDiv = $('<span>0.7</span>');
            var wdfert;
        };
        return B;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = B;
    var A = (function () {
        function A() {
        }
        return A;
    }());
});
define("main", ["require", "exports", "modules/testModule", "modules/a", "jquery"], function (require, exports, testModule_1, a_1) {
    "use strict";
    $(function () {
        console.log("start");
        var module = new testModule_1.default();
        module.init();
        var b = new a_1.default();
        b.init();
    });
});
//# sourceMappingURL=main.js.map