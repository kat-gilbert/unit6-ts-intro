console.log("hello");

// variables

let yourName: string = "Kat";
let likesGames: boolean = true;

let students: string[] = ["Kat", "Steve", "Logan", "Momo"]; 
// arrays have to be like kinds- can't mix different data types 

let hikes: boolean[] = [true, true, false, false];
let evenNumbers: number[] = [2, 4, 6, 8];

students.push("DJ");

// functions - define parameter types and return types

                                // return type can be listed after parameter
                                // can also be set as void which means doesn't return anything
                                // return types help us validate it's the proper return type we're getting
function sayHello(name: string): string {
   return "Hello " + name;
}
console.log(sayHello("World"));

// arrow function
const highFive = (name: string): void => {
                                // if only want to console log can use void
    console.log("High-five " + name);
}
highFive("Alex");

// USING INTERFACE
interface Person {
    firstName: string; 
    lastName:string}

function greeter(person: Person):void {
    console.log("Hi " + person.firstName);
}

let myPerson: Person = {firstName: "Kat", lastName: "Gilbert"};

console.log(greeter(myPerson));

interface Pet {
    breed: string;
    name: string;
    age: number;
}

let jayna: Pet = {breed: "American Shorthair", name: "Jayna", age: 3}

// greeter(jayna) ---- invalid type!


const calculateChange = (total:number, payment: number):number => { //will show an error under return type until you have the function return something
    return payment - total;
}

// function calculateTotal(listOfNumbers: number[]):number {
//     let total:number = 0;

//     for (let i = 0; i < listOfNumbers.length; i++) {
//         total += listOfNumbers;
//     }
//     return total;
// }


// shows using default parameter
function add(num1: number, num2: number = 0):number {
    return num1 + num2;
}
console.log(add(1, 7));
console.log(add(5));


//EXERCISE - Write a function named getAreaOfCircle. 
//It takes a radius parameter (type number). 
//It calculates and returns (type number) the area of a circle with that radius.

function getAreaOfCircle(radius: number):number {
    return Math.PI * (radius * radius);
}
console.log(getAreaOfCircle(12));

// EX2
// Write a function named getCircumferenceOfCircle. It takes a radius parameter. 
// It calculates and returns the circumference of a circle with that radius.

function getCircumferenceOfCircle(radius: number):number {
    return 2 * Math.PI * radius;
}
console.log(getCircumferenceOfCircle(12));

// EX3
// Write a function named getAreaOfSquare. It takes a side parameter. 
//It calculates and returns the area of a square with that side length.

function getAreaOfSquare(side: number):number {
    return side * 4;
}
console.log(getAreaOfSquare(9));

// EX4
// Write a function named getAreaOfTriangle. It takes two parameters: base and height. 
//It calculates and returns the area of a triangle with that base and height.

function getAreaOfTriangle(base: number, height: number):number {
    return (base * height) / 2;
}
console.log(getAreaOfTriangle(5, 5));

// Interface Ecercise:

interface Car {
    make: string;
    model: string;
    color: string
}

let myNewCar: Car = {make: "Ford", model: "Escape", color: "black"};

function myCar(myNewCar: Car) {
    return `My ${myNewCar.make} ${myNewCar.model} is ${myNewCar.color}`;
}
console.log(myCar(myNewCar));
