// Create a variable named firstFavNumb and store your favorite number
let firstFavNumb = 15;
// Create a variable named secondFavNumb and store your second favorite number
let secondFavNumb = 30;

//COMPARISON //

//Greater Than
console.log(firstFavNumb > secondFavNumb); //false
//Less Than
console.log(firstFavNumb < secondFavNumb); //true

// RELATIONAL //

//Greater Than or Equal to 
console.log(firstFavNumb >= secondFavNumb); //false
//Less Than or Equal to
console.log(firstFavNumb <= secondFavNumb); //true
//strict Equality (===)
console.log(firstFavNumb === secondFavNumb); //false
//Loose Equality (==)
console.log(firstFavNumb == secondFavNumb); //false
//strict Inequality (!=)
console.log(firstFavNumb != secondFavNumb); //true
//Loose Inequality (!=)
console.log(firstFavNumb != secondFavNumb); //true

// LOGICAL OPEARTORS //

//AND
let x = 8;
let y = 26;
let z = 29;

console.log(x < y && y < z); //true
console.log(x >  y && z); //false

//OR
let a = "dog"
let b = "cat"
let c = "bird"

console.log(a === b || a === c): //true
console.log(a === b || b === c); //false

//NOT
let isapple = true;
let  ismango= false;

console.log(!isapple); //false
console.log(!ismango); //true

console.log(!isapple && ismango); //false
console.log(isapple && ismango); //true
console.log(isapple || ismango); //true
console.log(!isapple || ismango;) //false
console.log(isapple == ismango); //false
console.log(isapple == !ismango); //true