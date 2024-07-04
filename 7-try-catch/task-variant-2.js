/* Напишите функцию, которая использует блок
try-catch для перехвата и обработки ошибки
TypeError при доступе к свойству
неопределенного объекта. */

try {
    let variable;
    variable.toUpperCase();
}
catch (err) {
    console.log('Error:');
    console.log(err.name);
    console.log(err.message);
}