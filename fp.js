// This will be the functional programming concepts I learn 
// in javascript. 

// *** The first practice lesson is on pure functions. *** 
// This is a pure function because the result takes no variables
// or arguments from outside the function

const PI = 3.14;
const calculateArea = (radius, PI) => radius * radius * PI;
console.log(calculateArea(3, 1));

    // This should log 9 in part because we're 
    // only logging whole numbers.


// *** The second practice is immutability ***
// immutable data never changes, but you can make updates to the 
// data with variable reassignment.

var me = {
    name : 'Levi',
    age : 35,
    status : 'married'
};

me.age = me.age + 4;
console.log(me.age)

const name = "ted";
var name = "tim";
console.log(name)

