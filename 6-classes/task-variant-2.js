/* Создайте класс под названием
«Прямоугольник» со свойствами ширины и
высоты. Включите два метода расчета
площади и периметра прямоугольника.
Создайте экземпляр класса «Прямоугольник»
и вычислите его площадь и периметр. */

class rectangle {

    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    getArea() {
        return this.length * this.width;
    }

    getPerimeter() {
        return 2 * (this.length + this.width);
    }
}

const newRectangle = new rectangle(5, 2);
let newArea = newRectangle.getArea();
let newPerimeter = newRectangle.getPerimeter();

console.log(newArea);
console.log(newPerimeter);