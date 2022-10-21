// ex 4, 11 ( those two are the same)

function foo(arr) {
    const string = [];
    const number = [];
    for (i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "string") {
            string.push(arr[i]);
        } else if (typeof arr[i] === "number") {
            number.push(arr[i]);
        }
    }
    return [string, number]
}

console.log(foo([1, 2, 3, 4, 'fef', 'hj']))