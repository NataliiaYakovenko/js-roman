//Створити новий масив, кожен елемент якого = елементи зі старого масиву*2

const array = [2,4,6,1,8,9]// старий масив

//вирішення через функцію декларейшен
function valueMultiplyTwo(item){
return item*2;
}
const newArray = array.map(valueMultiplyTwo) //новий масив
console.log(newArray);

//вирішення через стрілкову функцію
const newArray1 = array.map((item)=>{
  return item*2;
}).reverse()
console.log(newArray1);
//-------------------------------------------------------
//Потрібно взяти і змінити порядок слідування елементів в масиві newArray1 на протилежний
//варіант1
newArray1.reverse();
console.log(newArray1);

//варіант2
const newArray2 = array.map((item)=>{
    return item*2;
  }).reverse() //спочатку працює map потім reverse()
  //такий метод називається chaining - об'єднання методів у ланцюжок
  console.log(newArray2);
  //----------------------------------------------------------
  //Потрібно зробита з масива рядочок розділений комами

const newArray3 = array.map((item)=>{
    return item*2;
  }).reverse().join(',');

  console.log(newArray3);