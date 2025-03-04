const prompt = require('prompt-sync')();

// Get user input
const number = parseInt(prompt("Enter a number (1, 10, 100, 1000, etc.): "));

// Convert number to place value using switch case
switch (number) {
    case 1:
        console.log("Unit");
        break;
    case 10:
        console.log("Ten");
        break;
    case 100:
        console.log("Hundred");
        break;
    case 1000:
        console.log("Thousand");
        break;
    case 10000:
        console.log("Ten Thousand");
        break;
    case 100000:
        console.log("Lakh");
        break;
    case 1000000:
        console.log("Ten Lakh");
        break;
    default:
        console.log("Invalid input! Please enter a valid place value (1, 10, 100, 1000, etc.).");
}