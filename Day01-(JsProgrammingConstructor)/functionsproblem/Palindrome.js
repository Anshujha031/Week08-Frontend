const prompt = require('prompt-sync')();

function isPalindrome(num) {
    let strNum = num.toString();
    let reversedNum = strNum.split('').reverse().join('');
    return strNum === reversedNum;
}

const num1 = parseInt(prompt("Enter first number: "));
const num2 = parseInt(prompt("Enter second number: "));

if (isPalindrome(num1)) {
    console.log(`${num1} is a palindrome.`);
} else {
    console.log(`${num1} is not a palindrome.`);
}

if (isPalindrome(num2)) {
    console.log(`${num2} is a palindrome.`);
} else {
    console.log(`${num2} is not a palindrome.`);
}
