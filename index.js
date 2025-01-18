/*
Замикання - дозволяє функціям зберігати доступ до змінних,
 навіть коли ті функції завершують своє виконання

Замикання - це здатність функції запам'ятовувати локальну область видимості

*/

//Створюємо функцію, яка буде щось логувати
let value = 10;

function wrapper() {
  let value = 20;
  console.log("WRAPPER function", value);

  return function log() {
    console.log("LOG function", value);
  };
}
//-------------------------------------------
//Буде повертати 1
function counter() {
  let i = 0;
  i++;
  return i;
}
console.log(counter()); //1
console.log(counter()); //1
console.log(counter()); //1
console.log(counter()); //1
//------------------------------------
//Буде повертати значення і збільшене на 1
function makeCounter() {
  let i = 0;
  return function () {
    return i++; // i - це змінна у замиканні
  };
}
const fn = makeCounter();
console.log(fn()); //0
console.log(fn()); //1
console.log(fn()); //2
console.log(fn()); //3
console.log(fn()); //4
//---------------------------------------

function makeCounter2() {
  let counter = 0;

  return {
    increment() {
      return ++counter;
    },
    dicrement() {
      return --counter;
    },
  };
}
const fnObj = makeCounter2();
console.log(fnObj); //{increment: ƒ, dicrement: ƒ}

console.log(fnObj.increment()); //1
console.log(fnObj.increment()); //2
console.log(fnObj.increment()); //3

console.log(fnObj.dicrement()); //2
console.log(fnObj.dicrement()); //1
console.log(fnObj.dicrement()); //0
//------------------------------------------------------
//Зробіть методи, які будуть збільшувати,зменшувати counter на певну кількість

function makeCounter3() {
  let counter = 0;

  return {
    increment(amount = 1) {
      return (counter += amount);
    },
    decrement(amount = 1) {
      return (counter -= amount);
    },
  };
}
const fnObj3 = makeCounter3();
console.log(fnObj3.increment(2));
console.log(fnObj3.decrement(1));
console.log(fnObj3.increment(3));
console.log(fnObj3.decrement(1));

