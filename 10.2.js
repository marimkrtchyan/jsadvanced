// ex 10.2

function foo (arr1, arr2) {
    let counter = 0;
    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (arr2[i] === arr1[j]) {
                counter++;
            }
        }
    }
    return arr2.length === counter;
}

console.log(foo(['a', 'b', 'c', 'd'], ['a', 'b']))


