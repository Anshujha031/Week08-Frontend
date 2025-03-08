function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

let dieRolls = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0
};

let maxRolls = 10;
let reachedMax = false;

while (!reachedMax) {
    let roll = rollDie();
    dieRolls[roll]++;
    
    if (dieRolls[roll] === maxRolls) {
        reachedMax = true;
    }
}

let maxNumber = 1;
let minNumber = 1;

for (let number in dieRolls) {
    if (dieRolls[number] > dieRolls[maxNumber]) {
        maxNumber = number;
    }
    if (dieRolls[number] < dieRolls[minNumber]) {
        minNumber = number;
    }
}

console.log("Die roll results:", dieRolls);
console.log("Number that reached maximum times:", maxNumber);
console.log("Number that reached minimum times:", minNumber);