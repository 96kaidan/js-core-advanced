/* Напишите функцию, которая принимает
строку и выводит в консоль последний
символ строки */

function getLastSign(str) {
    let arr = str.split('').reverse();
    return arr[0];
}

console.log(getLastSign('Some interesting string'));