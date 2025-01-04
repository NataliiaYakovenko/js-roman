

/*
Задача
Напишіть клас RangeValidator
В класі має бути дві властивості: from , to
from , to  - це числа за типом даних

Завдання: реалізувати setter і getter для обох властивостей
Реалізувати потрібно такі обмеження: from не може бути більше ніж to

Реалізувати звичайни метод getRange, який має повертати масив цілих чисел з цього діпозону
const object1 = new RangeValidator(2,5)
object1.getRange() // повертає масив [2,3,4,5]

*/

class RangeValidator{
  constructor(from,to){
    this.to = to;
    this.from = from;
  }

  set from(newValue){
    if(typeof newValue !== 'number'){
      throw new TypeError('From must be a number')
    }
    if(newValue > this.to){
      throw new RangeError('From must not be more to')
    }
    this._from = newValue;
  }

  get from(){
    return this._from;
  }


  set to(newValue){
    if(typeof newValue !== 'number'){
      throw new TypeError('To must be a number')
    }

    this._to = newValue;
  }
  
  get to(){
    return this._to;
  }

  getRange(){
   const array = [];
   for (let i = this.from; i <= this.to; i++){
    array.push (i)
   }
   return array;
  }

}

const object1 = new RangeValidator(1,5)
console.log(object1);
console.log(object1.getRange());