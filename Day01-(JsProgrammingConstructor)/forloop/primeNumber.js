const prompt = require('prompt-sync')();

// Get user input
const n = parseInt(prompt("Enter a number: "));

// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Check and display result
if (isPrime(n)) {
    console.log(n + " is a prime number.");
} else {
    console.log(n + " is not a prime number.");
}
