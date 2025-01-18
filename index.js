/*Існує три види деструктуризації у JS

1. Деструктуризація об'єктів
2. Деструктуризація вхідних параметрів
3. Деструктуризація масивів
*/

//Деструктуризація масивів
//Масиви надають читкий порядок елементів
const arr =[1,2,3,4,5,6];

//const firstElement = arr[0]; //- виводимо перший елемент
//виводимо перший елемент через деструктуризацію масива
//const[firstElement,secondElement,thirdElement,fourthElement]=arr;

//Якщо нам потрібно тільки перші два елементи масиву
const[firstElement,secondElement,...restOfArr]=arr;



//------------------------------------------------------------
//Дестректурузувати маисв з об'єкта
//Задача 2
const user={
  name: 'Nataliia',
  age: 41,
  adress:{
    city:'Zaporizhzha',
    country:'Ukraine',
  },
  contacts:{
    email: 'yakovenkonatali@gmail.com',
    phone:[+380662865135,+380997865534,+380674532412],

  }
}
const{contacts:{phone:[firstNumber,secondNumber,thirdNumber]}}=user

//const[firstNumber,secondNumber,thirdNumber]=phone;
console.log(firstNumber);
console.log(secondNumber);
console.log(thirdNumber);



