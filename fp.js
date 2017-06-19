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

// *********************

const name = "ted";
var name = "tim";
console.log(name)

// This will produce the following error - Uncaught SyntaxError: Identifier 'name' has already been declared.
// This happens because const cant be reassigned. The way to change it is to add to it like this.

const name = {};
name.his = "tom";
console.log(name.his);

// *********************

// *****  LOOP Function vs Recursion *****

// simple loop construct
var acc = 2;
for (var i = 1; i <= 10; ++i)
    acc += i;
console.log(acc); // prints 57

// without loop construct or variables (recursion)
function sumRange(start, end, acc) {
    if (start > end)
        return acc;
    return sumRange(start + 1, end, acc + start)
}
console.log(sumRange(1, 10, 2)); // prints 57

// ********** Map Function **********

var myList = [1, 2, 3, 4, 5];

myList.map(numbers => {
  return numbers * 2;
});

const cats = ['bengal', 'tabby', 'alley', 'manx'];

cats.map(felines => {
    return "my pet is a " + felines + "cat.";
});
