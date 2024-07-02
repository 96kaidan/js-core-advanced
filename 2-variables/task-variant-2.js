/* Попробуйте объявить переменную с тем же
именем дважды, используя var, let и const.
Какие переменные позволяют повторное
объявление, а какие нет? */

/*
let a = 1;
let a = 0;

console.log(a);
// SyntaxError: Identifier 'a' has already been declared

const a = 1;
const a = 0;

console.log(a);
// SyntaxError: Identifier 'a' has already been declared

var a = 1;
var a = 0;

console.log(a);
// SyntaxError: Identifier 'a' has already been declared
*/

let a = 1;

if (true) {
    let a = 0;
    console.log(a);
    // 0
}
