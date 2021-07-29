var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Parent = /** @class */ (function () {
    function Parent(k) {
        this.j = k;
    }
    Parent.prototype.value = function () {
        return ("The number is " + this.j);
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(m, k) {
        var _this = _super.call(this, k) || this;
        _this.l = m;
        return _this;
    }
    Child.prototype.value = function () {
        return ("Value from parent is " + this.j + " and the value from child is " + this.l);
    };
    return Child;
}(Parent));
var childObj = new Child(2, 3);
console.log(childObj.value());
