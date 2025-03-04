let sum = 0;

for (let i = 0; i < 5; i++) {
    let randomNumber = Math.floor(Math.random() * 90) + 10; // Generates a 2-digit number (10-99)
    console.log(`Random Number ${i + 1}: ${randomNumber}`);
    sum += randomNumber;
}

let average = sum / 5;

console.log(`Sum: ${sum}`);
console.log(`Average: ${average}`);
