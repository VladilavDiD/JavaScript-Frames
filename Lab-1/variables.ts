let message: string = "Hello, TypeScript!";
let age: number = 25;
let isActive: boolean = true;
let anything: any = "Can be any type";

//------------------------------

console.log(message, age, isActive, anything);

let stringArray: string[] = ["apple", "banana", "cherry"];
let numberArray: number[] = [1, 2, 3, 4, 5];

console.log(stringArray, numberArray);

//----------------------------------

function greet(name: string, age: number = 30): void {
    console.log(`Hello, ${name}. You are ${age} years old.`);
}

greet("Alice");
greet("Bob", 25);

//------------------------------------------

import * as readlineSync from 'readline-sync';

function calculateIceCreamCost(size: string, toppings: string[], addMarshmallow: boolean = false): number {
    let cost = 0;

    // Determine the cost based on size
    if (size === "small") {
        cost += 10;
    } else if (size === "large") {
        cost += 25;
    }

    // Add the cost of toppings
    for (let topping of toppings) {
        if (topping === "chocolate") {
            cost += 5;
        } else if (topping === "caramel") {
            cost += 6;
        } else if (topping === "berries") {
            cost += 10;
        }
    }

    // Add marshmallow (optional)
    if (addMarshmallow) {
        cost += 5;
    }

    return cost;
}

// User input through readline-sync
let size = readlineSync.question("Choose ice cream size (small/large): ") || "small";
let toppingsInput = readlineSync.question("Enter toppings (chocolate, caramel, berries), separated by commas: ") || "";
let addMarshmallow = readlineSync.keyInYN("Do you want to add marshmallow?");

// Convert null to boolean
addMarshmallow = addMarshmallow === true;

let toppings = toppingsInput.split(",").map(topping => topping.trim());

let totalCost = calculateIceCreamCost(size, toppings, addMarshmallow);
console.log(`Total ice cream cost: ${totalCost} UAH`);



