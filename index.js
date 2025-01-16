// Map - методи продовження
//Конструктор new Map() - очикує від нас ітерірований об'єкт
//Картеж  <--[['key1', 'value1'],['key2','value2']], коли в основному масиві є пар масивів

const map1 = new Map([['key1', 'value1'],['key2','value2']])
console.log(map1);

//метод  set() може перезаписувати значення
map1.set('key2','value7');
console.log(map1);  //Map(2) {'key1' => 'value1', 'key2' => 'value7'}
//---------------------------------------------------------------

//Метод map.prototype.entries() - метод повертає ітератор. 
//Ітератор повертає пари (ключ, значення) для кожного елемента
console.log(map1.entries()); //MapIterator {'key1' => 'value1', 'key2' => 'value2'}

const entriesIterator = map1.entries()
console.log(entriesIterator);
//--------------------------------------------------------------

//Метод map.next() - виведення ключів і значень
// після виведення нвступного map.next() отримуємо наступний ключ і значення
console.log(entriesIterator.next()); //'key1' => 'value1'
console.log(entriesIterator.next())  //'key2' => 'value2'
console.log(entriesIterator.next())   //{value: undefined, done: true}
//----------------------------------------------------------------

//Метод map.keys() - повертає ітератор з усіма ключами з об'єкту map
const keysIterator = map1.keys()
console.log(keysIterator) //MapIterator {'key1', 'key2'}
console.log(keysIterator.next()) //{value: 'key1', done: false}
//-----------------------------------------------------------------

//Метод map.values() -повертає ітератор з усіма значеннями з об'єкту map
const valuesIterator = map1.values()
console.log(valuesIterator); //MapIterator {'value1', 'value7'}
//------------------------------------------------------------------

//Перетворюємо map в масив
const arrayMap = Array.from(map1)
console.log(arrayMap)
//-------------------------------------------------------------------

//Метод map.forEach() - використовується для iтерації (перебору) всіх елементів у МАР
// і виклику певної функції(callback) для кожного елемента нашої мар
//map.forEach() працює также, як forEach() в масиві
//Задача: вивести на консоль мар
map1.forEach((value,key,map)=>{
    console.log(`${key} - ${value}`);
})
//--------------------------------------------------------------------

//Метод map.delete() - використовується для видалення пари ключ-значення з об'єкта Мар
//відповідно до якогось ключа
console.log(map1.has('key2'))
//console.log(map1.delete('key2'));
console.log(map1)  //Map(1) {'key1' => 'value1'}
//-------------------------------------------------------------------

//Метод map.clear() - використовується для повного очищення об'єкта мар
//видаляючи всі пари ключ-значення, які знаходяться там
console.log(map1.size);
//console.log(map1.clear()); //Map(0) {size: 0}
console.log(map1) 
//--------------------------------------------------------------------

//Задача: вивести на консоль мар
console.log(...map1)
console.log(...map1.keys())
console.log(...map1.values())
