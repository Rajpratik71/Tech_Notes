// STRINGS, NUMBERS, BOOLEAN, OBJECTS, ARRAYS

var x;           // Now x is undefined
x = 5;           // Now x is a Number
x = "John";      // Now x is a String

var y = 123e5;      // 12300000
var z = 123e-5;     // 0.00123

var x1 = 34.00;     // Written with decimals
var x2 = 34;        // Written without decimals

var answer = "It's alright";             // Single quote inside double quotes
var answer = "He is called 'Johnny'";    // Single quotes inside double quotes
var answer = 'He is called "Johnny"';    // Double quotes inside single quotes

var x = 5;
var y = 5;
var z = 6;
(x == y)       // Returns true
(x == z)       // Returns false

// ARRAY
var cars = ["Saab", "Volvo", "BMW"];

// OBJECT(?)

var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

// DETECT TYPE OF VARIABLE

typeof ""                  // Returns "string"

// NOTE VARIABLES CAN BE UNDEFINED

// SETTING TO NULL IN JS DOES NOT CHANGE THE OBJECT TYPE, USE
// UNDEFINED INSTEAD

typeof {name:'John', age:34} // Returns "object"
typeof [1,2,3,4]             // Returns "object" (not "array", see note below)
typeof null                  // Returns "object"
typeof function myFunc(){}   // Returns "function"

null === undefined         // false
null == undefined          // true

