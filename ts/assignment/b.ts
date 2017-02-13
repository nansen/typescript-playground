import A from "assignment/a"

var data = "0,8";
const expectedResult = "0.4";

export default function B() {
    let a = new A;
    a.b = new A;
    a.b.aa = data;
    a.b.aaa = a.b.aa / 2;
    a.b.a = a.b.aaa.toString();
    a.a = a.b.a;
    a.b.validate = function():boolean{
        return a.b.a === expectedResult;
    }
    test1(a);
    test2(a);        
}

function test1(a: A){
    console.log(a.b.a === expectedResult?"Assignment 1: pass": "Assignment 1: fail");
}

function test2(a: A){
    var keyNames = Object.keys(a);
    let index = 0;
    for (var i in keyNames) {
        if(keyNames[i] === "a1"){
            console.log(a.a === expectedResult && a.validate() && a.b.validate() ?"Assignment 2: pass": "Assignment 2: fail");
            return;
        }
        index++;
    }
    console.log("Assignment 2: fail");
}
