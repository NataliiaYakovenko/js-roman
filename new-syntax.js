//Class
//Синтаксис класів
/*
class MyClass{
//методи класу
конструктор(){
}
method1() {......}
method2() {......}
method3() {......}
}

const user = new MyClass()
*/

class UserWoman {
  constructor(name, lastname, age) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }
  getFullName(){
     return `${this.name} ${this.lastname}`
  }
}
const user01 = new UserWoman('Nataliia','Yakovenko',41)
console.log(user01)
console.log(user01.getFullName())

const user02 = new UserWoman('Lidia','Yakovenko',71)
console.log(user02);
console.log(user02.getFullName())

console.log(user01.getFullName===user02.getFullName);

//Правила клісів
/*
1. constructor() при створені класу є обов'язковий
2. Ми не можемо самостійно звернутись до constructor()
3. constructor() має бути тільки один
4. Як і у функціях-конструктор назава класу повинна бути з великої літери
*/