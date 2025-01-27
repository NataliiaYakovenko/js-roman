//Алгоритм

const array = [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 8, 7, 6, 5, 4, 3];
//Задача. Реалізувати функцію лінійного пошуку якогось значення в масиві

//Лінійна складність алгоритму
function leanerSearch(array, value) {
  //array- наш масив,value - значення в масиві, яке ми хочемо знайти
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      //якщо значення нашого маисву = value
      return i; // повертаємо це значення
    }
  }
  return -1; //якщо нашого значення в масиві не має.-1 означає,що такого значення не існує
}
console.log(leanerSearch(array, 9));

/*
Лінійна складність (найгірше), коли Big O, тобто коли стільки ітерацій (операцій),
скільки в нас вхідних даних. Поки ми не пройдемо всі значення в масиві
*/
//-----------------------------------------------------------------------------------------

//Квадратична складність
//Вивести таблицю множення
function multiTable(limit) {//limit - до якого числа ми будемо друкувати таблицю множення
  const table = []; //таблиця множення буде масивом
  for (let i = 1; i <= limit; i++) { //починаємо таблицю множення з 1
    for (let j = 1; j <= limit; j++) {//другий цикл на що ми будемо множити
    const number = i * j;
    table.push(`${i} * ${j} = ${number}`)
    }
  }
  return table;
}
console.log(multiTable(1)); //['1 * 1 = 1']
console.log(multiTable(2)); //(4) ['1 * 1 = 1', '1 * 2 = 2', '2 * 1 = 2', '2 * 2 = 4']
console.log(multiTable(3)); //(9) ['1 * 1 = 1', '1 * 2 = 2', '1 * 3 = 3', '2 * 1 = 2', '2 * 2 = 4', '2 * 3 = 6', '3 * 1 = 3', '3 * 2 = 6', '3 * 3 = 9']
console.log(multiTable(10));

//Подвійні цикли - це є квадратична складність
/*
Квадаратична складність, коли ми на виході отримуємо 
кількість вхідних даних (n) в квадраті
*/
//----------------------------------------------------------------------------------------------------

//Логарифмічна складність
//На 100 вхідних даних даних буде приблизно 6 ітерацій(операцій)

//стоврюємо відсартирований масив по зростанню
//якщо не буде відстортування логарифм працювати не буде
const array2 = [2,3,4,5,6,7,8,9,10]

// потрібне доопрацювання
function binorySearch(array,whatToFinde){ //array - приймаємо якийсть масив,whatToFinde - те,що ми шукаємо
//перевіряємо чи є внаявності наше шукаєме значення
if(whatToFinde > array[array.length-1]){  // якщо наш шукаєме значення більше ніж довжина масива
return -Infinity  // це позначка, що такого значення вмаисві  не має
}
let start = 0 ; // початковий індекс масиву
let end = array.length-1; //кінцевий індекс масиву
let middle = Math.round((start + end) /2); //середній індекс масиву
                                          //Math.round - округлює десятичну дробь(20.3 буде 20, 20.7 буде 21)
while(true){
    if(array[middle]===whatToFinde){ //якщо середній елемент такий, який ми шукаємо
        return middle;
    }
    if(array[middle] < whatToFinde){  //якщо середній елемент менше шукаємого
        start = middle;
        middle = Math.ceil((start+end)/2); //Math.ceil - округлює в більшу сторону
    }else{  //якщо середній елемент більше шукаємого
        end = middle;
        middle = Math.ceil((start+end)/2);//Math.ceil - округлює в більшу сторону
    }
}
}
console.log(array2)//(9) [2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(binorySearch(array2,6)); //4