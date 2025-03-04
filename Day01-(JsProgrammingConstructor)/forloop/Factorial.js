const prompt = require('prompt-sync')();


const num = parseInt(prompt("Enter a number: "));


if (num < 0) {
    console.log("Invalid input! Factorial is not defined for negative numbers.");
} else {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    console.log(num + "! = " + fact);
}