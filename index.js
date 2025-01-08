/*
Symbol - символ

Symbol - представляє собою унікальний ідентифікатор
кожен створений символ має свій власний унікальний ідентифікатор,
який ніде і ніколи не буде повторюватись.

Особливість символів, вони завжди унікальні
Кожен створений символ, матиме унікальний ідентифікатор, 
який ніде і ніколи не буде повторюватись

Гарантія унікальності - єдине для чого Symbol і існує

*/


//const symb2 = Symbol('My second symbol') // label for human
//console.log(symb2)

const mySymb = Symbol(); // без new
const obj ={
  //у об'єкта ключами можуть бути рядки або символи
  test: 1,
  [mySymb]:123,
}
console.log(obj[mySymb]);