import "jquery"

export default class TestModule{
    init() {
        console.log("module init");
        $("body").html("module init");
    }
}