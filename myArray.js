
function MyArray() {
    this.length = 0; //у цього масива є довжина, яка дорівнює 0
  };
  
  function MyArrayPrototype () {
    //додати через push будь - яку кількість переданих елементів
    this.push = function (value) {
      for (let i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i]; // в поточну довжину запихуємо значення
        this.length++; //потрібно збільшити довжуну масива на 1
      }
      return this.length; //повертаємо поточну довжину масива
    },
  
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
    },
  
    this.forEach = function (callback) {
      for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
      }
    }
  }
  
  MyArray.prototype = new MyArrayPrototype;//прототипне посилання
  
  