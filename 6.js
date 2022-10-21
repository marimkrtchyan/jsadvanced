// ex 6

function numberSplit (num) {
    let arr = [];
    let half = num/2;
    if (num % 2 === 0) {
        arr.push(half, half);
    } else {
        arr.push(Math.floor(half), Math.ceil(half))
    }
    return arr;
}

console.log(numberSplit(6))

