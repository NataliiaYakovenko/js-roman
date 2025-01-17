//Set - множина набір унікальних значень 
//Основна суть Set - Дублікатів елементів не буде

const set = new Set()
console.log(set)
//------------------------------------------

//Методи Set

//Set.prototype.add() - додає новий елемент із заданим значенням у кінець об'єкта Set
set.add(1)
console.log(set);  //Set(1) {1}
set.add(4)
console.log(set); //Set(2) {1, 4}
set.add('hello')
console.log(set);  //Set(3) {1, 4, 'hello'}
set.add('hello')
console.log(set); // 2 hello не додався
//-------------------------------------------

//Set.prototype.has() - перевіряє наявність елементу у множині
console.log(set.has(1));  //true
console.log(set.has(12)); //false
//------------------------------------------

//Set.prototype.delete() - видаляє елемент із множини
set.delete('hello');
console.log(set) //Set(2) {1, 4}
//-------------------------------------------

const set2 = new Set([2,3,4,5])
console.log(set2);

//Set.prototype.values() - використовується для отримання ітератора, 
// який повертає нам всі значення з об'єкта Set
const valuesIterator = set.values()
console.log(valuesIterator)// SetIterator {1, 4}
console.log(valuesIterator.next())//{value: 1, done: false}
console.log(valuesIterator.next()) //{value: 4, done: false}
console.log(valuesIterator.next())//{value: undefined, done: true}

const arrayFromSet = [...set.values()]
console.log(arrayFromSet); //(2) [1, 4]
