// ex 5

function evenFrom(a, b) {
    const evenNumbers = [];
    for (let i = a + 1; i < b; i++) {
        if (i % 2 === 0) {
            evenNumbers.push(i)
        }
    }
    return evenNumbers;
}

console.log(evenFrom(9, 10))