// Задача  for...in - 
//Написати функцію, яка приймає об'єкт і виводить значення всіх властивостей
// оформленні *...*, ключі формленні "..."

const obj ={
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
    key4: 'value4',
    key5: 'value5',
}
function stylingObject(obj){
    for(let key in obj){
        console.log(`"${key}" :>> in *${obj[key]}*`);
    }
}
console.log(stylingObject(obj));
//--------------------------------------------------



const user ={
    name: 'Nataliia',
    surname: 'Yakovenko',
    age: 41,
    'favorite color': 'red',
    movie: 'Pretty woman',
    avatar: 'http://...........'
}
for(let key in user){
    //console.log(key); варіант 1
    console.log(`${key} :>> in  ${user[key]}`);
}

    // синтаксис
    /*
    for ( змінна  in  об'єкт){
    код, що виконується до кожної властивості}
    змінні - яка буде приймати значення ключів властивостей
    об'єкт - ключи якого ми хочемо перебрати
    */