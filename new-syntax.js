
class Test{
  constructor(value1, value2){
    this.key1 = value1;
    this.key2 = value2;
  }
  method (){
    //тіло методу
  }
  //Варіант 2 для оголошення статичного методу - більш розповсюджений
  static myStaticMethod(parameter){
    //тіло функції - щось робимо
    console.log(parameter);
  }
}
//Статистичні методи - методи, якими ми можемо скористатися 
//не відбудовуючи екземпляр класу
//В середині статистичних методі ми не використовуємо this

//Варіант 1 для оголошення статичного методу
/*Test.myStaticMethod = function(parameter){
// тіло функції - щось ми робимо
console.log(parametr)
}*/

Test.myStaticMethod(12345);


const test1 = new Test('value1','value2')
console.log(test1);