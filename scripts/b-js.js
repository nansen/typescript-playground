define("b-js", ["require", "a-js"], function (require, A, $) {
    "use strict";
    var expectedResult = "0.4";
    var data = "0,8";

    var B = function () {
        var a = new A;
        a.b = new A;
        a.b.aa = data;
        a.b.aaa = a.b.aa / 2;
        a.b.a = a.b.aaa.toString();
        a.a = a.b.a;
        a.b.validate = function(){
            return a.b["a1"] === expectedResult;
        }
        test1(a);
        test2(a);
    };

    function test1(a) {
        console.log(a.b.a === expectedResult ? "Assignment 1(JS): pass" : "Assignment 1(JS): fail");
    }
    function test2(a) {
        console.log(a["a1"] === expectedResult && a.validate() && a.b.validate() ? "Assignment 2(JS): pass" : "Assignment 2(JS): fail");
    }

    B();
});