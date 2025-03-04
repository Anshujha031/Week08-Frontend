const prompt = require('prompt-sync')();

console.log("Think of a number between 1 and 100.");
let low = 1, high = 100;
let found = false;

while (!found && low <= high) {
    let mid = Math.floor((low + high) / 2);
    let response = prompt(`Is your number ${mid}? (yes/no): `).toLowerCase();
    
    if (response === "yes") {
        console.log(`Your magic number is ${mid}!`);
        found = true;
    } else {
        let hint = prompt(`Is your number less than ${mid}? (yes/no): `).toLowerCase();
        if (hint === "yes") {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
}