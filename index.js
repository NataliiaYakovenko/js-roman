// for...in - використовується для перебору (ітерація) всіх ключів об'єкта
/*
У об'єкті user вивести назви всіх ключів і властивостей
 */
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