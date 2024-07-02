/* Напишите функцию, которая принимает
массив и значение, и возвращает true, если
это значение присутствует в массиве, и false,
если нет. Используйте строгий режим */

'use strict'

function isValueInArray(array, value) {
    let result = array.indexOf(value);
    if (result != -1) return true;
    else return false;
}

console.log(isValueInArray([1, 2, 3], 1));
