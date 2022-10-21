// ex 1

const arr = ["a", "a", "b", "a"];
let notRepeating = [];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (i !== j && arr[i] === arr[j]) {
            break;
        } else if (j === arr.length - 1) {
            notRepeating.push(arr[i])
        }
    }
}
console.log(notRepeating)




