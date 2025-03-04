const prompt = require('prompt-sync')();

// Get user input
const a = parseInt(prompt("Enter first number (a): "));
const b = parseInt(prompt("Enter second number (b): "));
const c = parseInt(prompt("Enter third number (c): "));

// Perform arithmetic operations
const result1 = a + b * c;
const result2 = a % b + c;
const result3 = c + a / b;
const result4 = a * b + c;

// Find maximum and minimum
const max = Math.max(result1, result2, result3, result4);
const min = Math.min(result1, result2, result3, result4);

// Display results
console.log("Results:");
console.log("1. a + b * c =", result1);
console.log("2. a % b + c =", result2);
console.log("3. c + a / b =", result3);
console.log("4. a * b + c =", result4);
console.log("Maximum value:", max);
console.log("Minimum value:", min);
