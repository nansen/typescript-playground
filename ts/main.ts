import "jquery"
import TestModule from "modules/testModule"

$(function(){
    console.log("start");
    var module = new TestModule();
    module.init();
});