interface MyIntegers{
    s:number;
    t:string;
    myFunc();
}

class A implements MyIntegers{
    s:number;
    t:string;
    constructor(s:number,t:string){
        this.s=s;
        this.t=t;
    }
    myFunc(){
        console.log(this.t+" no "+this.s+" integer");
    }
}

let myObj = new A(1,"Hi");
console.log(myObj.myFunc());