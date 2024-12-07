//Способи створення об'єктів

//1. Літеральне створення об'єкта
const cat1 = {
}

//2. Функція конструктор для об'єкта
const cat2 = Object();

//3. Функція конструктор для об'єкта з new
const cat3 = new Object();
//__________________________________________

//Задача. Створити об'єкт кота
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
//Нам потрібно в об'єкті змінити вік кота з 2 до 3 років
cat.age = cat. age + 1;
console.log(cat.age);
//Нам потрібно видалити з об'єкта якусь властивість (наприклад метод sleep)
delete cat.sleep;
//Нам потрібно додати в об'єкт якусь властивість, використовується крапка .
//Додати ім'я друга кота Мурзика до об'єкту кота Мурзика
cat.friend = 'Tusik';
console.log(cat.friend);
//Додати улюблену іжу кота
cat.favoriteFood = 'fish';
console.log(cat.favoriteFood);
//Додати метод, що кіт стрибає
cat.jump = function(){
  return 'I am jumping';
}
console.log(cat.jump);