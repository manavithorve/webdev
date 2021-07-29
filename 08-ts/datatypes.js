// var [ideantifier]: [type-annotation] =value;
// var [identifier]: [type-annotation];
// var [identifier] = value;
// var [identifier];
function myfunc() {
    for (var i = 1; i <= 2; i++) {
        console.log("Welcome!");
    }
    console.log("final value of i is :", i);
    //throws error
    for (var j = 1; j <= 2; j++) {
        console.log("Welcome!");
    }
    console.log("final value of j is :", j);
}
myfunc();
//boolean
var b = false;
console.log(b);
//numbers 
var num = 10;
console.log(num);
var hex = 83;
console.log(hex);
//strings
var message = "Hello";
console.log(message);
//arrays
var array_a = ["ts", "js"];
var array_b = ["TS", "JS"];
//tuples
var tuple_a;
//enum = named constants
//const value is preserved
var enum_a = 10;
//numeric enum
var fruit;
(function (fruit) {
    fruit[fruit["apple"] = 1] = "apple";
    fruit[fruit["banana"] = 2] = "banana";
    fruit[fruit["mango"] = 3] = "mango";
    fruit[fruit["orange"] = 4] = "orange";
})(fruit || (fruit = {}));
var fruitName = fruit[2];
console.log(fruitName);
//any = dealing with dynamic values
var anyvar;
anyvar = 10;
anyvar = "Hello";
//object - non primitive 
