// Задача 2 map
// Дано масив 
//Зробити новий масив, де всі елементи якого = елемент зі сторого масиву + 100
//variant 1
const array = [2,44,11,234,8,2,4,1]
function items(number){
    return number + 100;
}
const newArray = array.map(items);
console.log(newArray);

//variant 1 стрілочна функція
const newArray1 = array.map ((item)=>item+100);