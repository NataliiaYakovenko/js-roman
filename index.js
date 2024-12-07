//Задача
//Створити об'єкт в об'єкті
const cat = {
  name:'Mursik',
  color:'Red',
  breed:'Dvoroviy',
  age: 2,
  eat: function(){
    return 'I am eating';
  },
  sleep: function(){
    return ' I am sleeping';
  }
}
//Додати об'єкт друга кота Мурзика до об'єкту кота Мурзика
cat.friend = {
  name: 'Tusok',
  color: 'Black',
  age: 2,
}
console.log(cat.friend.name);

