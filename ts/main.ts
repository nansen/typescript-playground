import "jquery"
import TestModule from "modules/testModule"
import B from "assignment/b";

$(function(){
    console.log("start");
    var module = new TestModule();
    module.init();

    B();
});