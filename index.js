class MyArray {
  constructor() {
    this.length = 0; // довжина нашого масиву завжди буде дорівнюати 0 при створені масиву
  }
  push() {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length] = arguments[i]; // в поточну довжину запихуємо значення
      this.length++; //потрібно збільшити довжуну масива на 1
    }
    return this.length; //повертаємо поточну довжину масива
  }

  pop() {
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
  }

  forEach(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  }
  map(callback) {
    // 1 створили новий масив - він буде нашим результуючим масивом
    const resultArray = new MyArray();
    // 2 пройтись по поточному масиву від початку і до кінця
    for (let i = 0; i < this.length; i++) {
      //Запихуємо у результуючий масив, значення яке нам буде повертати (return) callback
      resultArray.push(callback(this[i], i, this));
    }
    //3 Повернути як результат роботи методу map - результуючий масив
    return resultArray;
  }
}

const array1 = new MyArray();
console.log(array1.push(1, 2, 3, 4, 5));
console.log(array1);
console.log(array1.pop());
console.log(array1);
array1.forEach((item) => {
  console.log(item ** 2);
});
//Задача. Створити новий масив, який буде містити квадрати чисел з масиву array1
const doubleNumbers = array1.map((item)=>{
return item**2;
})
console.log(doubleNumbers)
