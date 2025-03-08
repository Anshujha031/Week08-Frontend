function findSecondLargestAndSmallest(arr) {
    if (arr.length < 2) {
        return "Array should have at least two elements";
    }

    arr.sort((a, b) => a - b);

    const secondSmallest = arr[1];
    const secondLargest = arr[arr.length - 2];

    return {
        secondSmallest: secondSmallest,
        secondLargest: secondLargest
    };
}

const array = [10, 5, 8, 12, 15, 6, 3, 9];
const result = findSecondLargestAndSmallest(array);
console.log(result);
