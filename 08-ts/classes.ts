class myClass {
    j : number;
    constructor(k:number){
        this.j=k;
    }
    value(){
        return("The number is "+this.j);
    }
}

let myObj = new myClass(6);
console.log(myObj.value());