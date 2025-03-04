
const prompt = require('prompt-sync')();

// Get user input
const number = parseInt(prompt("Enter a number (1, 10, 100, 1000, etc.): "));

// Convert number to place value
if (number === 1) console.log("Unit");
else if (number === 10) console.log("Ten");
else if (number === 100) console.log("Hundred");
else if (number === 1000) console.log("Thousand");
else if (number === 10000) console.log("Ten Thousand");
else if (number === 100000) console.log("Lakh");
else if (number === 1000000) console.log("Ten Lakh");
else console.log("Invalid input! Please enter a valid place value (1, 10, 100, 1000, etc.).");

