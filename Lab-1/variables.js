"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var message = "Hello, TypeScript!";
var age = 25;
var isActive = true;
var anything = "Can be any type";
//------------------------------
console.log(message, age, isActive, anything);
var stringArray = ["apple", "banana", "cherry"];
var numberArray = [1, 2, 3, 4, 5];
console.log(stringArray, numberArray);
//----------------------------------
function greet(name, age) {
    if (age === void 0) { age = 30; }
    console.log("Hello, ".concat(name, ". You are ").concat(age, " years old."));
}
greet("Alice");
greet("Bob", 25);
//------------------------------------------
var readlineSync = require("readline-sync");
function calculateIceCreamCost(size, toppings, addMarshmallow) {
    if (addMarshmallow === void 0) { addMarshmallow = false; }
    var cost = 0;
    // Determine the cost based on size
    if (size === "small") {
        cost += 10;
    }
    else if (size === "large") {
        cost += 25;
    }
    // Add the cost of toppings
    for (var _i = 0, toppings_1 = toppings; _i < toppings_1.length; _i++) {
        var topping = toppings_1[_i];
        if (topping === "chocolate") {
            cost += 5;
        }
        else if (topping === "caramel") {
            cost += 6;
        }
        else if (topping === "berries") {
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
var size = readlineSync.question("Choose ice cream size (small/large): ") || "small";
var toppingsInput = readlineSync.question("Enter toppings (chocolate, caramel, berries), separated by commas: ") || "";
var addMarshmallow = readlineSync.keyInYN("Do you want to add marshmallow?");
// Convert null to boolean
addMarshmallow = addMarshmallow === true;
var toppings = toppingsInput.split(",").map(function (topping) { return topping.trim(); });
var totalCost = calculateIceCreamCost(size, toppings, addMarshmallow);
console.log("Total ice cream cost: ".concat(totalCost, " UAH"));
