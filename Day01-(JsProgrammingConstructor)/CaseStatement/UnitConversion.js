const prompt = require('prompt-sync')();

// Get user input
console.log("Choose conversion:");
console.log("1. Feet to Inch");
console.log("2. Feet to Meter");
console.log("3. Inch to Feet");
console.log("4. Meter to Feet");
const choice = parseInt(prompt("Enter your choice (1-4): "));

switch (choice) {
    case 1:
        const feetToInch = parseFloat(prompt("Enter value in feet: "));
        console.log(feetToInch + " feet = " + (feetToInch * 12) + " inches");
        break;
    case 2:
        const feetToMeter = parseFloat(prompt("Enter value in feet: "));
        console.log(feetToMeter + " feet = " + (feetToMeter * 0.3048) + " meters");
        break;
    case 3:
        const inchToFeet = parseFloat(prompt("Enter value in inches: "));
        console.log(inchToFeet + " inches = " + (inchToFeet / 12) + " feet");
        break;
    case 4:
        const meterToFeet = parseFloat(prompt("Enter value in meters: "));
        console.log(meterToFeet + " meters = " + (meterToFeet * 3.28084) + " feet");
        break;
    default:
        console.log("Invalid choice! Please enter a number between 1 and 4.");
}
