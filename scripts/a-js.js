define("a-js", ["require"], function (require) {
    "use strict";
    var A = (function () {
        function A() {
            this.a = "0";
            this.aa = 0;
            this.b = null;
            this.aaa = 0;
            this.validate = function(){
                return this.a !== "0";
            }
        }
        return A;
    }());
    return A;
});