define("assignment/a", ["require", "exports"], function (require, exports) {
    "use strict";
    var A = (function () {
        function A() {
            this.a = "0";
            this.aa = 0;
            this.b = null;
            this.aaa = 0;
        }
        A.prototype.validate = function () {
            return this.a !== "0";
        };
        return A;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = A;
});
define("assignment/b", ["require", "exports", "assignment/a"], function (require, exports, a_1) {
    "use strict";
    var data = "0,8";
    var expectedResult = "0.4";
    function B() {
        var a = new a_1.default;
        a.b = new a_1.default;
        a.b.aa = data;
        a.b.aaa = a.b.aa / 2;
        a.b.a = a.b.aaa.toString();
        a.a = a.b.a;
        a.b.validate = function () {
            return a.b.a === expectedResult;
        };
        test1(a);
        test2(a);
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = B;
    function test1(a) {
        console.log(a.b.a === expectedResult ? "Assignment 1: pass" : "Assignment 1: fail");
    }
    function test2(a) {
        var keyNames = Object.keys(a);
        var index = 0;
        for (var i in keyNames) {
            if (keyNames[i] === "a1") {
                console.log(a.a === expectedResult && a.validate() && a.b.validate() ? "Assignment 2: pass" : "Assignment 2: fail");
                return;
            }
            index++;
        }
        console.log("Assignment 2: fail");
    }
});
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
define("main", ["require", "exports", "modules/testModule", "assignment/b", "jquery"], function (require, exports, testModule_1, b_1) {
    "use strict";
    $(function () {
        console.log("start");
        var module = new testModule_1.default();
        module.init();
        b_1.default();
    });
});
//# sourceMappingURL=main.js.map