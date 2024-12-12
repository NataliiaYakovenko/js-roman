//Ми можемо змінювати об'єкти за посиланням

const user = {
    name: 'John',
    surname: 'Doen',
    age: 19,
}

function greetingUser (user){
    user.age = 50;// перевизначення властивостей
    return (`Hello, ${user.name} ${user.surname}! You will be ${user.age + 1} next year!`)
}
console.log(greetingUser(user));