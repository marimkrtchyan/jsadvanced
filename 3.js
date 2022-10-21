// ex 3

function numberSorter(arr) {
    const odd = [];
    const even = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2) {
            odd.push(arr[i]);
        } else {
            even.push(arr[i]);
        }
    }
    return [odd, even]
}

console.log(numberSorter([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))