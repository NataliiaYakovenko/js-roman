class Animal {
  constructor(nickname, color) {
    this.nickname = nickname;
    this.color = color;
  }
  eat() {
    return `${this.nickname} is eating`;
  }
}
//const animal1 = new Animal("Tuzik", "black");
//console.log(animal1);
//console.log(animal1.eat());
//lass Dog extends(Animal) - клас Собаки розширює клас Тварини(наслідує цей клас)
class Dog extends(Animal){
  constructor(nickname, color) {
   super(nickname,color)
  }
  gav(){
    return `${this.nickname} gav-gav-gav`
  }
}

const dog1 = new Dog("Tuzik", "grey")
console.log(dog1);
console.log(dog1.eat());
console.log(dog1.gav());

