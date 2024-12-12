//Задача на шаблонні рядки
//є функція
/*function greetingUser (user){
}
//у на є об'єкт
const user = {
    name: 'John',
    surname: 'Doen',
    age: 19,
}*/
//Нписати фунцію greetingUser щоб вона вітала користувача і казала скільки
//йьому років виконається у наступному році
//задачу вирішити через шаблонний рядок

function greetingUser (user){
    return (`Hello, ${user.name} ${user.surname}! You will be ${user.age + 1} next year!`)
}
const user = {
    name: 'John',
    surname: 'Doen',
    age: 19,
}

console.log(greetingUser(user));