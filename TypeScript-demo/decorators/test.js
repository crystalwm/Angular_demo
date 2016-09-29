function A(){

    function B(){

    }

    var c=2;

    return c>3 && B;
}

var c=A();

console.log(c);  //false