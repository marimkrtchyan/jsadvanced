// ex 2

const arr = [14, 28, 3, 8, 2];
let max = arr[0];
let min = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
    if (arr[i] < min) {
        min = arr[i];
    }
}

const minMax = [min, max];

console.log(minMax)