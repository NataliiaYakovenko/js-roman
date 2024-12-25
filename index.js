// Прототипи Задача
/* Завдання 1
Створити функцію - конструктор для сходів (ladder)
Об'єкт має властивість:
curentStair - сходинка, на якій ми зараз знаходимиось. Початково = 0

Об'єкт має методи: - метоти запихнути в .prototype
up() - підіймає на сходинку вище
down() - опускає на сходинку нижче
showStair() - показує на якій сходинці ми зараз знаходимось
 */
function Labber() {
  this.curentStair = 0;
}

function LabberPrototype() {
  this.up = function () {
    this.curentStair++;
    return this;
  };

  this.down = function () {
    this.curentStair--;
    return this;
  };

  this.showStair = function () {
    return this.curentStair;
  };

}

Labber.prototype = new LabberPrototype();
const labber = new Labber();

/*console.log(labber.up())
console.log(labber.up())
console.log(labber.up())        //console.log для першої задачі
console.log(labber.down())
console.log(labber.showStair())*/

/*Завдання 2
Перепишіть методи таким чином щоб було використання ченінгу
тобто щоб було можна об'єднати виклик методів у ланцюжок

const labber = new Labber()
Labber.up().up().down().showStair()
 */
console.log(labber.up().up().up().down().showStair()); 

