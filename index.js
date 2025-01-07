//Патерни

/*
Фабричний метод - це спосіб створювати об'єкти, 
який дозволяє нам не вказувати конкретний клас об'єкта
Використовуємо спеціальну фабрику для використовування об'єктів
Фабрика знає, який саме об'єкт нам потрібно створити і повертає його нам 

new Student  //- так НЕ РОБИМО

Звертаємось до фабрики, фабриці повідомляємо, що нам потрібно
ш фабрика вже буде нам робии екземпляри потрібного класу

*/
//Абстрактний клас або інтерфейс
class Animal {
  constructor(nickname) {
    this.nickname = nickname;
  }

  makeSound() {
    // абстрактний метод
  }
}

//Конкретний клас для собаки
class Dog extends Animal{
    constructor(nickname){
  super(nickname);
    }

  makeSound(){   //віртуальний метод
      console.log('gav-gav');
  }  
}
//Конкретний клас для кота
class Cat extends Animal{
  constructor(nickname){
    super(nickname);
  }
  
  makeSound(){   //віртуальний метод
    console.log('myau-myau');
}  
}

//фабричний клас, який створює об'єкти
class AnimalFactory{
  creatAnimal(type,nickname){
     switch(type){
      case 'dog': return new Dog(nickname);
      case 'cat': return new Cat(nickname);
      default: throw new Error(`Unknown type of animal: ${type}`)
     }
  }
}

//Створення фабрики для використання об'єктів
const factory = new AnimalFactory()

//Створити об'єкт собаки
const dog = factory.creatAnimal('dog', 'Tuzik')
dog.makeSound()  //gav-gav

//Створити об'єкт кота
const cat = factory.creatAnimal('cat', 'Murzik')
cat.makeSound()  //myau-myau


