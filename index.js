//ОБ'ЄКТИ

/*
Об'єкт

const назаваОб'єкту = {
   ключ: значення
}
Об'єкт мають:
 - властивості
 - методи
*/

const obj = {
  color: 'white',
  fontSize: 2,
}

// ООП (об'єктно орієнтовне програмування)
// ООП - парадигрма програмування, яка дозволяє створювати програми
// з використанням об'єктів, які маю властивості і методи

//Задача:Опишіть об'єкт лампочки
const bulb = {
  lightness: 200, // яскравість
  power:"200W",   //  потужність
  cap: 'small',    //  цоколь
  //оголошення методу
  on: function(){
    return 'The light on!';
  },
  off: function(){
     return 'The light off!';
  }
}
console.log(bulb.power);
console.log(bulb.off())
//______________________________

//Задача
const dog ={
  name: 'Tusik',
  'favorite food': 'meat',

}
console.log(dog.name);
console.log(dog['favorite food']);