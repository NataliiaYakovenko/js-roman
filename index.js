// Функція конструктор для об'єкта
const cat02 = Object();
//3. Функція конструктор для об'єкта з new
const cat03 = new Object();

// Конструктор визначає шаблон або скелет об'єктів, які будуть створюватися

//Угоди у функціях конструкторах:
//1. Ім'я функції-конструктора має починатися з великої літери
//2. Функція-конструктор повинна викоистовуватись за допомогою оператора new

//Задача. Написати функцію-конструктор для створення кота
function Cat(name,color,breed,age){
  this.name = name;
  this.color = color;
  this.breed = breed;
  this.age = age;
  this.run = function(){
    return this.name + ' is running';
  }
}
//Задача. Створити два кота за допомогою функції-конструктор
const cat1 = new Cat('Filia','white','siamskiy',2);
console.log(cat1);
const cat2 = new Cat('Sofa','grey','dvoroviy',1);
console.log(cat2);
const cat3 = new Cat('lui','blue','dvoroviy',3);
console.log(cat3);