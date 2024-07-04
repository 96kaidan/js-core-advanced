function getSumOfHalf(array) {
    let sum = 0;
    let halfLength = Math.floor(array.length / 2);
    for (let i = 0; i < halfLength; i++) {
        array.pop();
    }
    for (let i = 0; i < halfLength; i++) {
        sum += array[i];
    }
    return sum;
}

console.log(getSumOfHalf([1, 2, 3, 4, 5, 6, 7]));