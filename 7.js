// ex 7

function reversedArray (arr) {
    const reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i])
    }
    return reversed;
}

console.log(reversedArray(['a', 4, 6, 7, 'g']))

