const prompt = require('prompt-sync')();

// Get user input
const number = parseInt(prompt("Enter a number (1-7): "));

// Convert number to weekday using switch case
switch (number) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid input! Please enter a number between 1 and 7.");
}
