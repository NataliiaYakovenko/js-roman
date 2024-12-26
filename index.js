

'use strict' // - це директива, яку включають на початку js-файлу для встановлення

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
//----------------------------------------------------------------------------
// Написати стрілочеу функцію з використанням метода reduce
//при виклику reduce передайте йому стрілковий callback
const numbers1 =(...restArguments)=>{  //...restArguments - вся кількість аргументів
  return restArguments.reduce((accumulator,curentItem) => accumulator+curentItem,0);
  
};
console.log(numbers1(1,2,3,4,5,6))

//варіант2
const numbers2 =(...restArguments)=>{  
  const sum = restArguments.reduce((accumulator,curentItem) => {
    return accumulator+curentItem},
  0);
  return sum;
};
console.log(numbers2(1,2,3,4,5,6))

//варіант3
const numbers3 =(...restArguments)=> restArguments.reduce((accumulator,curentItem) => accumulator+curentItem,0);
console.log(numbers3(1,2,3,4,5,6))



