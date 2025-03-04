const prompt = require('prompt-sync')();


const n = parseInt(prompt("Enter a number (n): "));

// Calculate nth harmonic number
let harmonicNumber = 0;
for (let i = 1; i <= n; i++) {
    harmonicNumber += 1 / i;
}


console.log("The "+ n +"th Harmonic Number is: " + harmonicNumber);