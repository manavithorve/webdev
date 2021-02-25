console.log("This is a message"); //global object in browser

/*window is an object in brower's js engine*/

//setTimeOut(); is
//clearTimeOut();

//setInterval();
//clearInterval();

/*
JS engine prefixes these statements as:
window.setTimeOut();
window.clearTimeOut();
window.setInterval();
window.clearInterval();
*/

/*
But there's no such object like window in NODE instead,
 it has global as an object
*/

/*
But it isn't work for variables
Eg : if we use global to display a variable it will print it as undefined!
*/

var message = "Hello user";
console.log(message);
global.console.log(message);
global.console.log(global.message);
