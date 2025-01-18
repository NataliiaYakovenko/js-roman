

//Задача Деструктуризація
//У нас є об'єкт user
//З використанням деструктуризації отримати значення name,city, email,phone
const user={
  name: 'Nataliia',
  age: 41,
  adress:{
    city:'Zaporizhzha',
    country:'Ukraine',
  },
  contacts:{
    email: 'yakovenkonatali@gmail.com',
    phone:'+30662865135',

  }
}
const{name,adress:{city},contacts:{email,phone}}=user;
console.log(name)
console.log(city);
console.log(email);
console.log(phone);


