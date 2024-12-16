/*Задача
На основі задачі масива users створити новий масив users.
При цьому об'єкти в новому масиві мають бути у такому іигляді:
    fullname:'Nataliia Yakovenko',
    email: 'yakovenkonatali999@gmail.com',
 */
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

//Варіант мій
function changeValueInObject(user){  //функція буде приймати елемент об'єкта
    return {                         // повертаємо новий об'єкт
        fullname: `${user.name} ${user.lastName}`,
        email: user.email
    }
}

const newUsers = users.map(changeValueInObject)
console.log(newUsers);
//----------------------------------------------------------------------------
// Задача 2
// на основі нашої задачі зменшити вік користувачів

function ageDecrement(user){
    user.age -=1;
}
users.forEach(ageDecrement)