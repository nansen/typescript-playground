import "jquery"
import TestModule from "modules/testModule"
import B from "modules/a";

$(function(){
    console.log("start");
    var module = new TestModule();
    module.init();
    let b = new B();
    b.init();
});