var A = /** @class */ (function () {
    function A(s, t) {
        this.s = s;
        this.t = t;
    }
    A.prototype.myFunc = function () {
        console.log(this.t + " no " + this.s + " integer");
    };
    return A;
}());
var myObj = new A(1, "Hi");
console.log(myObj.myFunc());
