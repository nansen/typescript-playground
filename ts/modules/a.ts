import "jquery"

export default class B {
    init():void {
        let a = new A;
        a.b = new A;

        let fakeDiv = $('<span>0.7</span>');
        var wdfert;
        //a.b.aa = fakeDiv.text();
    }
}

class A{
    a : string;
    aa: number;
    b: A; 
}



