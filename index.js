
//Задача функція - конструктор
/*Створити функцію-конструктор собаки, у якого має бути ім'я, колір, вік
  Зробіть декілька собак
*/
function Dog(name, color,age){
  this.name = name;
  this.color = color;
  this.age = age;
  this.gav = function(){
    return this.name +' is gav-gav-gav';
  }
}
const dog1 = new Dog('Archy','grey',3);
console.log(dog1);
const dog2 = new Dog('Busia',null,2);
console.log(dog2);
const dog3 = new Dog('Jerry','black',null);
console.log(dog3);