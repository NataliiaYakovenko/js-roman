
function MyArray() {
    this.length = 0; // масив має свою довжину
    this.data = {}; // масив буде зберігати елементи як об'єкт

    // push метод, що додає кілька елементів
    this.push = function(...values) {
        for (let i = 0; i < values.length; i++) {
            this[this.length] = values[i];
            this.length++;
        }
        return this.length;
    }

    // pop метод для видалення останнього елемента
    this.pop = function() {
        if (this.length > 0) {
            const lastItem = this[this.length - 1];
            delete this[this.length - 1]; // видалення останнього елемента
            this.length--; // зменшення довжини
            return lastItem; // повертає останній елемент
        } else {
            return undefined; // якщо масив порожній
        }
    }

    // forEach метод для обробки кожного елемента
    this.forEach = function(callback) {
        for (let i = 0; i < this.length; i++) {
            callback(this[i], i, this);
        }
    }
}

// Створення нового екземпляра MyArray
const array = new MyArray();

// Додавання елементів
array.push(1);
array.push(2);
array.push(3, 4, 77, 44, 59, 5);

// Тестуємо метод pop
console.log(array.pop()); // Видалить 5
console.log(array.pop()); // Видалить 59

// Тестуємо метод forEach: виводимо квадрати кожного елемента
array.forEach(item => {
    console.log(item ** 2); // Виводимо квадрат числа
});