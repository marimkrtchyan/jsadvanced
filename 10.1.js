// ex 10.1

function commonWordFinder (arr1, arr2) {
    const commonWords = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                commonWords.push(arr1[i]);
            }
        }
    }
    return commonWords;
}

console.log(commonWordFinder([], []))