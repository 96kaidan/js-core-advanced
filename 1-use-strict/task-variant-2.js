'use strict'

function isValueInArray(array, value) {
    let result = array.indexOf(value);
    if (result != -1) return true;
    else return false;
}

console.log(isValueInArray([1, 2, 3], 1));