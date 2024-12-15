// МЕТОДИ ОБХОДУ МАСИВА 
// map 
//array.map - працює як forEach (викликає функцію зворотнього виклику), тільки map буде повертати(створювати) новий масив
const array = [1,2,3,4,5,]
function square(number){
    return number * number;
}
const newArray = array.map(square);
console.log(newArray);

//можна вирішити цю задачу через стрілкову функцію
const newArray1 = array.map((item)=>{
    return item * item;
})
console.log(newArray1);

// Коли ми використовуємо map, в такому випдку, значення, яке ви повертаєте (return) з calback - воно і буде входити у результуючий масив