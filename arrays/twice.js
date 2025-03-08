const repeatedTwice = [];

for (let i = 0; i <= 100; i++) {
    const str = i.toString();
    if (str.length === 2 && str[0] === str[1]) {
        repeatedTwice.push(i);
    }
}

console.log(repeatedTwice);