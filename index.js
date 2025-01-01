//Задача
//Написати функцію сум додатніх чисел
/**
 * Функція знаходить суму двох додатніх чисел
 * @param {number} a число 1
 * @param {number} b  число 2
 * @returns {number} сума
 * @throws {RangeError}  якщо а || b не є цілим числом
 * @throws {TypeError} якщо а || b не є числом
 */
function sumPositiveNumber(a, b) {
  if (a < 0 || b < 0) {
    //повинні викинути помилку
    const error = new RangeError("Any numbers are less 0");
    throw error; // return тільки для помилок
    console.log(error);
  }
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("It must be number");
  }
  return a + b;
}

try {
  //пропсуємо якийсь код, очикуючі, що тут може виникнути помилка
  console.log(sumPositiveNumber(2, "3"));
} catch (error) {
  console.log(error);
}


//throw об'єкт_помилка
