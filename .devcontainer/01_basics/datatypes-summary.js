// primitive data types
// string, number, bigInt, boolean, null, undefined, Symbol

//non-primitive or refernce
// Array,Object, Functions

//Js is dynamically typed language because we do not need to declaere variable type

const id = Symbol('123')
const anotherId = Symbol('123') 
console.log( id === anotherId);


//array

const heroes = ["ironman","batman","superman"]

// object key-value pair
let myDetails = {
  name: "pg",
  age: 21
};

console.log(myDetails.name); // pg
console.log(myDetails.age);  // 21

// functions

// const myFunction = function(){}

const myFunction = function(){
    console.log("Hello World");
}

function greet() {
    console.log("Hello World");
}

greet(); // calling the function

