// ex 9

function uniqueValue (arr) {
    let unique = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i !== j && arr[i] === arr[j]) {
                break;
            } else if (j === arr.length - 1) {
                unique.push(arr[i])
            }
        }
    }
    return unique;
}

console.log(uniqueValue([1, 2, 2, 3]))