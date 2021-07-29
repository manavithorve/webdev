// var [ideantifier]: [type-annotation] =value;
// var [identifier]: [type-annotation];
// var [identifier] = value;
// var [identifier];


function myfunc(){
    for(var i=1;i<=2;i++){
        console.log("Welcome!")
    }
    console.log("final value of i is :",i);
    //throws error
    for(let j=1;j<=2;j++){
        console.log("Welcome!")
    }
    //console.log("final value of j is :",j);
}

myfunc();

//boolean
let b:boolean = false;
console.log(b);

//numbers 

let num:number = 10;
console.log(num);

let hex:number = 0o123;
console.log(hex);

//strings

let message:string = "Hello";
console.log(message);

//arrays
let array_a:string[]=["ts","js"];
let array_b:Array<string> = ["TS","JS"];

//tuples
let tuple_a:[number,string];

//enum = named constants
//const value is preserved
const enum_a = 10;

//numeric enum
enum fruit {
    apple=1,
    banana,
    mango,
    orange
}
let fruitName : string = fruit[2];
console.log(fruitName);

//any = dealing with dynamic values

let anyvar:any;
anyvar = 10;
anyvar ="Hello";

//object - non primitive 


//type assertions 
let myvar;

let myvar2 = (<string>myvar).toUpperCase();
//or
let myvar3 = (myvar as string);


//functions
function product (x:number,y:number){
    return x*y;
}

product(10,20);

//annonymous 
let a=1;
let fun1 = function(x,y){
    return x*y+a;
}
console.log(fun1(3,2));

//arrow functions 
let ex = (a)=> console.log(a);
