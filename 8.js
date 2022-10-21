// ex 8

function isPositive (arr) {
    countPos = 0;
    countNeg = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            countPos++;
        } else {
            countNeg++;
        }
    }
    return countPos > countNeg;
}

console.log(isPositive([1, 2, 3, -4]))