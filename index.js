//array.filter - використовується для створення нового масиву, який містить лише ті елементи, які задовільняють певній умові (немутуючий)

//Задача. 
//Створити новий масив, в який увійдут тільки парні елементи попереднього масиву
const numberArray1 = [5,3,-5,21,66,-8,6,4,9]
function filterFunction1(item){
   if(item % 2 === 0){
      return true
   } else {
      return false
   }
}
const newNumberArray1 = newNumberArray.filter(filterFunction1)
console.log(newNumberArray1);