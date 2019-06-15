// This will be the functional programming concepts I learn 
// in javascript. 

// *************************************
	// PURE FUNCTIONS
// *************************************
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

// ****************************

const heightRequirement = 46;

function canRide(height) {
  return height >= heightRequirement;
}

// ****************************

const name = "ted";
var name = "tim";
console.log(name)

// This will produce the following error - Uncaught SyntaxError: Identifier 'name' has already been declared.
// This happens because const cant be reassigned. The way to change it is to add to it like this.

const name = {};
name.his = "tom";
console.log(name.his);

// ******************************

// Find Function

var profiles = [
  {id: 1, name: 'jed'},
  {id: 2, name: 'elen'},
  {id: 3, name: 'tom'}
];

var newUser = {id: 2, name: 'mike'};

function people(profiles, newUser){
	return profiles.find(function(profile){
		return profile.id === newUser.id;
	});
};

var result = people(profiles, newUser);
result.name

// ******************************************

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

// **************** Map Function ****************

let myList = [1, 2, 3, 4, 5];

myList.map(numbers => {
  return numbers * 2;
});

const cats = ['bengal', 'tabby', 'alley', 'manx'];

cats.map(felines => {
    return "my pet is a " + felines + " cat.";
});

// ***************** Filter ********************

let numbers = [1,2,3,4,5,6,7,8,9];

let underThree = numbers.filter(function(number){
  return number > 3;
});

console.log(underThree);

// --------------------------------------------

let even = (x) => {return x % 2 === 0};

let myArray = [1,2,3,4,5,6,7,8,9,10,11,12];

let myEvenArr = myArray.filter(even);

console.log(myEvenArr);

// ***************** MAP + Reduce **************

	function addTwoDigits(n){
		if(n > 10 && n <= 99 && n != null){
			console.log('good input');
			let digits = (`${n}`).split("")
				.map(e => parseInt(e))
				.reduce((a, b) => a + b, 0);
			return digits;
		} else {
			console.log('number is less than 10 or greater than 99, which is not allowed');
		}
	}
	
	console.log(addTwoDigits(29)); // this will equal 11
	console.log(addTwoDigits(52)); // this will equal 7

// *************** Reverse *********************

const reverse = ([x, ...xs]) => (x) ? [...reverse(xs), x] : [];
const array = [1,2,3,4,5];
array.reverse();

// ************* Reduce ************* 

const areParensBalanced = string => { 
	return !string.split("").reduce((char, parens) => {
	if(char < 0){return parens;}
	if(char === "("){ return ++parens;}
	if(char === ")"){ return --parens;}
	return parens;
	}, 0);
};

areParensBalanced("())"); // False
areParensBalanced("((()))"); // True
  
// **************** Flatten ****************

"use strict";
var array = [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]];
function flattenAndSort(array) {
  let x = [].concat(...array);
  let y = x.sort();
  return y;
}

flattenAndSort(array);

// *****************************************

function FirstFactorial(num) { 
    
    if (num < 0) { 
        return -1;
    } else if (num === 0) {
      return 1;
    } else {
      return (num * FirstFactorial(num - 1));
    }
    
    return num;
}

// keep this function call here 
FirstFactorial(6); 

********************************
    // CLOSURES
********************************

(function(){
    let outside = 'this can be reached from other locations';
    
    function inside(){
        console.log(outside);
    }

    return inside()
})();

***********************
      // Loops
***********************
	
const prepareMeal = () => 'Spaghetti';

const getMeal = (numOfServings) => {
  const bowls = [];
  
  for(let servings = 1; servings <= numOfServings; servings += 1) {
    const bowl = prepareMeal();
    bowls.push(bowl);
  }

  return bowls;
};


let meal = getMeal(3)
const letsEat = meal;

console.log(letsEat);

------------------------------

// ************************	

// First Lambda

const prepareCoke = () => 'coke';

const preparePepsi = () => 'pepsi';

const getTea = (pourSoda, numOfGlasses) => {
    const sodas = [];

    for (let glasses = 1; glasses <= numOfGlasses; glasses += 1) {
        const soda = pourSoda();
        sodas.push(soda);
    }

    return sodas;
};

let x = getTea(prepareCoke, 27);
let y = getTea(preparePepsi, 10);

const teamCoke = x;
const teamPepsi = y;

console.log(
    teamCoke,
    teamPepsi
);

// ***************************
	// ARROW FUNCTIONS
// ***************************

const capitalize = (input) => {
    input = input.toLowerCase()
	.split(' ')
	.map((x) => x.charAt(0).toUpperCase() + x.substring(1))
	.join(' ');
}

// ***************************
	// WORD FILTER
// ***************************

let wordsToFilter = ["freaking", "moron", "Numb nuts"];

let Rx = new RegExp(wordsToFilter.join("|"), "gi");

let phrase = "What kind of freaking moron decides to wear shorts in the snow? Numb nuts, that's who. </br></br>"

filter = (str) => {           
    return str.replace(Rx, "****");            
}

	// Examples
// Starting
document.write("Original Sentence - ");
document.writeln(phrase);
// Ending
document.write("Replaced Sentence - ");
document.writeln(filter(phrase));

