// Set - задачі

/*
Дано масив [2,3,3,5,6,77,77,5,1,1,12,12,13]
Повернути масив без повторень
*/
//varsion1
const set = new Set([2,3,3,5,6,77,77,5,1,1,12,12,13])
const arraySet = Array.from(set)
console.log(arraySet);

//varsion2
const set1 = new Set([2,3,3,5,6,77,77,5,1,1,12,12,13])
const arraySet1 = [...set]
console.log(arraySet1)