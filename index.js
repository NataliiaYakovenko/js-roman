 // МАСИВ (Array) Практика
/*Задача1
Дано масив чисел [3,6,8,2,3,5,1]
Напишіть функцію, яка приймає масив в якості аргументу
і повертає суму вміх елеметів масиву
 */
const sum =[3,6,8,2,3,5,1]

function summaAllElementsArray(sum){
  let result = 0;// створення змінної, де ми накопичуємо суму

  for(let i = 0; i < sum.length; i++){//цеклічне накопичення суми
   result+=sum[i];
  }
  return result;//повернення результату після проходження всього циклу
}
console.log(summaAllElementsArray(sum))











































