// Set - задачі

/*
Дано два масиви:
const array1 = [4,3,7,5,-11]
const array2 =[3,4,8,7,2,-11]
Повернути з функції масив, що складається з різниці двох масивів
(тобто тих значень, які не повторюються в обох масивах)

Алгоритм
Ви приймаєте два маисиви
Васм потрібно зробити новий масив, але там неповинно бути дублювань
*/
//varius1
const array1 = [4,3,7,5,-11]
const array2 =[3,4,8,7,2,-11]
const arraySet = [...array1,...array2];
console.log(arraySet);
const set = new Set(arraySet)
console.log(set)
const arr = Array.from(set)
console.log(arr);

//varius3 with function
function twoArraysWithoutDoubles(array1,array2){
  return [...new Set([...array1,...array2])]
}
const arrayWithout = twoArraysWithoutDoubles(array1,array2)
console.log(arrayWithout)


