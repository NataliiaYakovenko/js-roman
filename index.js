// rest - operator

'use strict' // - це директива, яку включають на початку js-файлу для встановлення



//Задача
/*У функції sum знайди суму двох елементів, а усі інші аргументи, які передані у функцію зовні,
при виклику - потрібно покласти у масив

rest - operator - це залишок
... - це rest - operator
rest працює з залишками аргументів, які не приймає функція,
і ці залишки ми засовуємо у [масив]
*/


function sum (a,b,...restArguments){   //restArguments - це назва масива, в який ми засунули залишки аргументів
  console.log(restArguments);
  return a+b;
}
console.log(sum(1,2,3,4,5,6))
//-------------------------------------------------------------------------
//Задача
//Написати стрілочну функцію, яка сумує будь - яку кількість чисел

const numbers =(...restArguments)=>{  //...restArguments - вся кількість аргументів
  let result = 0;
  for(let i = 0; i < restArguments.length; i++ ){
    result += restArguments[i]
  }
  return result;
}

console.log(numbers(1,2,3,4,5,6))







