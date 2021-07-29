class Parent {
    protected j : number;
    constructor(k:number){
        this.j=k;
    }
    value(){
        return("The number is "+this.j);
    }
}

class Child extends Parent{
    l:number;
    constructor(m:number,k:number){
        super(k);
        this.l=m;
    }
    value(){
        return("Value from parent is "+this.j+" and the value from child is "+this.l);
    }
}

let childObj = new Child(2,3);
console.log(childObj.value());