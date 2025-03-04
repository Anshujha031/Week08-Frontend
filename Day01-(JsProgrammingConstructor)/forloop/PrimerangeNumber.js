const prompt = require('prompt-sync')();

// Get user input
const start = parseInt(prompt("Enter the starting number of range: "));
const end = parseInt(prompt("Enter the ending number of range: "));

// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log("Prime numbers in the range " + start + " to " + end + ":");
for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}
