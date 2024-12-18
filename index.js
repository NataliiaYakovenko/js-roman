//array.reduce - використовується для обчислення якогось ОДНОГО значення на основі всіх елементів масиву (немутуючий)
//array.reduce - зводить всі елементи масиву до якогось одного результуючого значення
//array.reduce(calback, initialValue) - синтакс

const numberArray = [2,-5,6-9,44,86,3]
// потрібно знайти суму umberArra
function reducer(accumulator, currentItem){
// те, що повертає reducer - це оновлений accumulator
return accumulator + currentItem;
}

const sum = numberArray.reduce(reducer, 0);//0 це початкове значення, з якого ми починаємо рахувати суму
console.log(sum);