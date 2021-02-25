function printName(){
var fname = " Manavi ";
var lname = new String(" Thorve ");
document.write(fname+" "+lname);
document.write("<hr/>");

document.write("Length of fname : "+fname.length+"<br>");
document.write("Length of lname : "+lname.length+"<br>");
document.write("<hr/>");

//trim() removes whitespaces before and after the string
fname = fname.trim();
document.write("Length of fname after trim(): "+fname.length+"<br>");
lname = lname.trim();
document.write("Length of lname after trim(): "+lname.length+"<br>");
document.write("<hr/>");

//split("convertFactor") function converts String into an Array
var message = "I love my India.";
document.write(message+"<br>");
var messageArray = message.split(" ");
document.write(messageArray[3]);
document.write("<hr/>");

//join("joinFactor") function converts and Array to String
var fruitsArray = ["Banana", "Apple", "Kiwi", "Orange"];
document.write(fruitsArray+"<br>");
var fruits = fruitsArray.join(" and ");
document.write(fruits);
document.write("<hr/>");

//substr(index) function is used to extract a part of the string
document.write(message+"<br>");
document.write(message.substr(2)+"<br>");
//takes from index 7 and next 7 characters
document.write(message.substr(7,8));
document.write("<hr/>");

//substring(indexStart,indexEnd)
document.write(message.substring(0,6));
document.write("<hr/>");

//localeCompare() compares string alphabetically and return 1 if s1>s2, 0 if s1=s2 and -1 if s1<s2

document.write(fname.localeCompare("Manavi")+", ");
document.write(fname.localeCompare(lname)+", ");
document.write(fname.localeCompare(message)+", ");
document.write("<hr/>");

//replace(from,to);
document.write(message.replace("my","our"));
document.write("<hr/>");


//indexOf(str);
document.write(message.indexOf("my"));
document.write("<hr/>");

document.write(message.toLowerCase());
document.write("<hr/>");

document.write(message.valueOf("I"));
}
