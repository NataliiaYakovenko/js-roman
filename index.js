//array.filter - використовується для створення нового масиву, який містить лише ті елементи, які задовільняють певній умові (немутуючий)
//array.filter(callback)
//callback буде викликатись для кожного елементу масиву, і ця callback функція в середині фільтру вона повинна повертати або true/false для кожного елементу масиву

const numberArray = [5,3,-5,21,66,-8,6,4,9]
//Відфільтрувати масив щоб залишились тільки додатні числа (числа > 0)
function filterFunction(item){
if(item > 0){
   return true
} else {
   return false
}
}
const newNumberArray = numberArray.filter(filterFunction)
console.log(newNumberArray);