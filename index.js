// Створюємо власний масив
//масив пишимо через функцію констрктор
function MyArray() {
  this.length = 0; //у цього масива є довжина, яка дорівнює 0

  //додати через push будь - яку кількість переданих елементів
  this.push = function (value) {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length] = arguments[i]; // в поточну довжину запихуємо значення
      this.length++; //потрібно збільшити довжуну масива на 1
    }
    return this.length; //повертаємо поточну довжину масива
  };

  this.pop = function () {
    if (this.length > 0) {
      //якщо довжина масив більше 0
      //1. Зберегти останній елемент
      const lastItem = this[this.length - 1]; //потрібно від поточної довжини масива - 1
      //2.Видалити останній елемент з масиву
      delete this[this.length - 1];
      //3.Після видалення останнього елементу нам потрібно зменшити довжину масиву на 1
      this.length--;
      //4. Повернути останній елемент
      return lastItem;
    } else {
      return undefined;
    }
  };

  this.forEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  };
}
const array = new MyArray(); //створюємо мій масив на снові масива
//додаємо 1
array.push(1);
//додаємо 2
array.push(2);
array.push(3, 4, 5, 6, 7, 8);
console.log(array)

array.pop()
console.log(array);
//Відконсольлогувати квадрати кожного числа в масив array
array.forEach((item) => {
  console.log(item ** 2); //item виведений у квадрат
});
