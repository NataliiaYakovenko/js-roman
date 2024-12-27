
'use strict' // - це директива, яку включають на початку js-файлу для встановлення

/*rest - operator - це залишок
... - це rest - operator
rest працює з залишками аргументів, які не приймає функція,
і ці залишки ми засовуємо у [масив]

spread - operator - розпакувати ...
Він дозволяє розпаковувати елементи масиву і використовувати це окремо
*/

const numbers = [1,2,3,4,5]

function summa(a,b,...restArguments){
  console.log(restArguments);
  return a+b;
}

//console.log(summa(numbers[0],numbers[1],numbers[2],numbers[3],numbers[4]));
//або використовуємо spread - operator  ...
console.log(summa(...numbers));
//ми розпакували всі значення масиву numbers в виклик функції sum
//----------------------------------------------------------------------
// різниця
//rest - operator - знаходиться в аргументах функції, він бере і збирає всі залишки параметрів
/*function summa(a,b,...restArguments){
  console.log(restArguments);{
    return a+b;
  }*/
    
    
// spread - operator - ми виконуємо на масиві, він бере і розбиває масив на купу елементів  
//console.log(summa(...numbers));

//----------------------------------------------------------------------------
//Метематичний оператор   Math.min
//Math.min(2,3,1,5,4) - повертає мінімальне число із зазначених (1)
/*
Math.min(1,2,3,5,4,)   - повертає мінімальне число із зазначених (1)
1
Math.min([1,2,3,5,4])  - перетворюємо в масив
NaN                    - Math.min з масивом не працює
const numbersMath = [1,2,3,5,4] - створюємо змінну для нашого масиву
undefined
numbersMath         - визиваємо нашу змінну
(5) [1, 2, 3, 5, 4]
Math.min(numbersMath)  - Math.min не працює, тому
NaN
Math.min(...numbersMath) - Math.min спрацював з оператором ...spread
1
 */

//Приклад1 використання spread - operator
const numbersMath = [1,2,3,5,4] 
//Math.min(...numbersMath) //1
console.log(Math.min(...numbersMath));


//Приклад2 використання ...spread - operator
/*
Задача.
Зробити масив з назвою copyArray в який будуть входити
всі елементи з масиву numbersMath
 */
const copyArray = [...numbersMath]
//...spread - operator - дозволяє копіювати всі елементи з одного масиву до іншого
