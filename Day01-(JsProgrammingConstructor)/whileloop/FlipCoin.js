const prompt = require('prompt-sync')();

let headsCount = 0;
let tailsCount = 0;

while (headsCount < 11 && tailsCount < 11) {
    let flip = Math.random() < 0.5 ? "Heads" : "Tails";
    console.log(flip);
    
    if (flip === "Heads") {
        headsCount++;
    } else {
        tailsCount++;
    }
}

console.log(`Game Over! ${headsCount === 11 ? "Heads" : "Tails"} wins 11 times.`);
