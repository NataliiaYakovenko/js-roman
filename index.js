// Задача 1 forEach 
// Дано масив об'єктів
//Всім користувачам збільшити вік на 1

const users = [{
    name:'Nataliia',
    lastName:'Yakovenko',
    age: 41,
    email: 'yakovenkonatali999@gmail.com',
},{
    name:'Roland',
    lastName:'Simonyan',
    age: 26,
    email: 'roland@gmail.com',
},{
    name:'Bogdan',
    lastName:'Horobriy',
    age: 30,
    email: 'horobriy@gmail.com',
}]
//Варіант1 мій
users.forEach((item) => item.age += 1)
console.log(users);

//Варіант2 Рома
function plusOneYear(item){
    item.age +=1;
}
users.forEach(plusOneYear)