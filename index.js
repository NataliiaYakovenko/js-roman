//Види функцій
/*
1. Об"явлена функція - functions declaration

function ім'я функції (аргумент1, аргумент2){
    тіло функції}

Викликаємо функцію
ім'я функції (аргумент1,аргумент2)

hoisting - оголошення функції піднімається до верхньої частини нашого коду
функцію ми можемо викликати в будь-якому місці

*/

function greetingUser(userName) {
    console.log('Hi, ' + userName);
}
greetingUser('Alex');

//2. functions expression - Функціональеі вирази
// const ім'я функції = function(аргумент) {
//   тіло функції
// function expression - викликається після того, як функція буде оголошена
// }
const greet = function(userName){
    console.log('Hi, ' + userName);
}
greet('Kevin');

//3. Стрілкові функції - Arrow functions
// const ім'я функції = (аргумент) => {
// тіло функції
//}

const greetArrow = (userName)=>{
    console.log('Hi, ' + userName);
}
greetArrow('Stepan');

// Задача написати функцію, яка виводить системну дату та час(поточні)

const getDateWithTime = function(){
    //круглі дужки, коли нам  непотрібні параметри
    //параметри не потрібні, коли робота функції залежіть від якогось зовнішнього значення
    const getDateWithTime = new Date();
    return getDateWithTime;
}

