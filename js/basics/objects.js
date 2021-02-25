function myObjects(){
    var family = {father:"vijay", mother:"manisha", sister:"shivani", brother:"krishna"};
    document.write(family.father);
    document.write("<hr>");

    var state = new Object({mh:"mumbai",mp:"indore"});
    state.gujrat = "gandhinagar";
    document.write(state.gujrat);
    document.write("<hr>");

    //reference
    var x = family;
    x.brother = "manav";
    console.log(x);
    console.log(family);

    //prototype
    class employee {
        
        constructor(empName, jobTitle, age) {
            this.empName = empName;
            this.jobTitle = jobTitle;
            this.age = age;
        }
    }
    var emp1 = new employee("manavi","tester",20);
    var emp2 = new employee("shivani", "student", 18);
    console.log(emp1.empName);
    console.log(emp2.age);

    employee.prototype.phone = "Android";
    console.log(emp1);

    var emp3 = new employee("manav", "novice", 15);
    console.log(emp3);

    //type of
    console.log(typeof emp1);
    console.log(typeof 1);
}

