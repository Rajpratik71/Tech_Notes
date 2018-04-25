
// IF THEN ELSE

var time = new Date().getHours(); 
if (time < 20) {
    console.log("Good day");
} else {
    console.log("Good night");
}

// SWITCH

var text;
var fruits = "Apple";

switch(fruits) {
    case "Banana":
        text = "Banana is good!";
        break;
    case "Orange":
        text = "I am not a fan of orange.";
        break;
    case "Apple":
        text = "How you like them apples?";
        break;
    default:
        text = "I have never heard of that fruit...";
}

console.log(text);

// FOR IN (OR FOR EACH)

var person = {fname:"John", lname:"Doe", age:25}; 

var text = "";
var x;
for (x in person) {
    text += person[x] + " ";
}

console.log(text);

// FOR LOOP WITH CONDITIONS

var text = "";
for (var i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
}

console.log(text);

// WHILE LOOP

var text = "";
var i = 0;
while (i < 5) {
    text += "<br>The number is " + i;
    i++;
}

console.log(text);

// TRY CATCH

var message, x;
message = "message";
var x = 3;
try { 
    if(x == "") throw "is Empty";
    if(isNaN(x)) throw "not a number";
    if(x > 10) throw "too high";
    if(x < 5) throw "too low";
}
catch(err) {
    console.log("ERROR: " + err);
}

// DEBUGGER IS LIKE A BREAK POINT

debugger;

