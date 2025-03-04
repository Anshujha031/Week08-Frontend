// Import prompt-sync
const prompt = require('prompt-sync')();

// Get user input for day and month
const day = parseInt(prompt("Enter day: "));
const month = parseInt(prompt("Enter month: "));

// Check if the date is between March 20 and June 20
if (month === 3 && day >= 20) {
    console.log(true);
} else if (month > 3 && month < 6) {
    console.log(true);
} else if (month === 6 && day <= 20) {
    console.log(true);
} else {
    console.log(false);
}
