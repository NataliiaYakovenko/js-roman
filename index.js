//Задача
//Створити об'єкт собаки
//Додати властивості і методи: бігти, спати, гавкати

const dog = {
  name: 'Sharik',
  color: 'Black',
  age: 2,
  breed: 'Mops',
  run:function(){
    return 'I am runing';
  },
  sleep: function(){
    return 'I am sleeping';
  },
  gavkat: function(){
    return 'I am gav-gav-gav'
  }
}
console.log(dog.name);
console.log(dog.color);
console.log(dog.age);
console.log(dog.breed);
console.log(dog.run);
console.log(dog.sleep);
console.log(dog.gavkat);