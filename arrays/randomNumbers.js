function generateRandomNumbers() {
    let randomNumbers = [];
    for (let i = 0; i < 10; i++) {
        let randomNumber = Math.floor(Math.random() * 900) + 100; 
        randomNumbers.push(randomNumber);
    }
    return randomNumbers;
}


let numbersArray = generateRandomNumbers();
console.log("Generated Random Numbers: ", numbersArray);

function findSecondLargestAndSmallest(arr) {
    let firstLargest = -Infinity, secondLargest = -Infinity;
    let firstSmallest = Infinity, secondSmallest = Infinity;

    for (let num of arr) {
        if (num > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = num;
        } else if (num > secondLargest && num !== firstLargest) {
            secondLargest = num;
        }

        if (num < firstSmallest) {
            secondSmallest = firstSmallest;
            firstSmallest = num;
        } else if (num < secondSmallest && num !== firstSmallest) {
            secondSmallest = num;
        }
    }

    return {
        secondLargest: secondLargest,
        secondSmallest: secondSmallest
    };
}

let result = findSecondLargestAndSmallest(numbersArray);
console.log("Second Largest Number: ", result.secondLargest);
console.log("Second Smallest Number: ", result.secondSmallest);