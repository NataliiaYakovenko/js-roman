//Задача
//Створіть функцію, яка приймає число, додає до нього 5 і виводить результат у консоль

function summa(number){
 console.log(number + 5);
}
summa(5);
summa(7);
summa(10);

//Варіант2 Roma
function addFiveToNumber(number){
    let result = number + 5;
    console.log(result);
    return result;
}
const addFiveToNumberResult = addFiveToNumber(5);
addFiveToNumber('row');

//Задача. Написати функцію, яка складає два числа і повертає результат розрахунку

function addTwoNumbers(num1, num2){
    const result = num1+num2;
    return result;
}
//const functionResult = addTwoNumbers(2,5);
//console.log(functionResult);

//Якщо ми хочемо додати дві функції
const addTwoNumbersResult = addTwoNumbers(5,5);
console.log(addTwoNumbersResult+addFiveToNumberResult);
