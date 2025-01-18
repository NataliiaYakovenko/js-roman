/*Існує три види деструктуризації у JS

1. Деструктуризація об'єктів
2. Деструктуризація вхідних параметрів
3. Деструктуризація масивів
*/

// Деструктуризація вхідних параметрів

function getFullName({firstName,lastName,...restObject}){           //деструктуризуємо, що нам потрібно
  console.log(restObject)
  return `${firstName} ${lastName}`
};



const user ={
   firstName: 'Nataliia',
   lastName: 'Yakovenko',
   age:41,
   geolocation: '45.56677555.433.222222',
   browser: 'Ubuntu'
}

console.log(getFullName(user));





