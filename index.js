//Типи даних
// 7 - примітивних типів даних
/*- number
  - string
  - bigint
  - boolean
  - null
  - undefined
  - symbol 
 */
// 1 об'єкт

/* Примітивні типи даних копіюються завжди за значенням
 і не мають властивостей та методів
 Об'єкти можуть мати властивості і методи і вони завжди копіюються за посиланням
 */
///////////////////////////////////////////////////////////////////////////////////////////

//Boolean
//boolean.toString() - приведення булевого типу до строкию Метод не мутуючий
const boolean = true;
console.log(boolean.toString());  //true
/////////////////////////////////////////////////////////////////////////////////////////////

// null/undefined - не мають об'єктів обгорток, не маю методів і властивостей
// буде повертати помилку
//////////////////////////////////////////////////////////////////////////////////////////////

const string = new String ('Hello')
console.log(string);           //String {'Hello'}
console.log(string[0]);  // H
console.log(string[1]);  // e
console.log(string[2]);  // l
console.log(string[3]);  // l
console.log(string[4]);  // 0
///////////////////////////////////////////////////////////////////////////////////////////////

//String
//string.length - довжина рядка
console.log('Nataliia'.length); //8
//.toUpperCase() - приводить строку у верхній регістр. Метод не мутуючий
console.log('Nataliia'.toUpperCase());  //NATALIIA
console.log(typeof'Nataliia')  //string
//------------------------------------------------------------------------------------------- 

//.toUpperCase() - приводить строку у нижній регістр. Метод не мутуючий
console.log('NATALIIA'.toLocaleLowerCase());  //nataliia
console.log(typeof'NATALIIA')  //string
//------------------------------------------------------------------------------------------

//string.charAt() - використовується для повернення символу з рядка за вказаним індексом
const string1 = 'Yakovenko';
const newString1 = string1.charAt(2)
console.log(newString1)   // k
//------------------------------------------------------------------------------------------

//string.charCodeAt() - використовується для повернення кодової точки Unicode
//символу рядка за вказаним індексом
const string2 = 'Nataliia'
const newString2 = string2.charCodeAt(1)
console.log(newString2);  //97
//-----------------------------------------------------------------------------------------

//string.concat() - використовується для об'єднання (конкатенація ) двох або більше рядків
// і повертає новий рядок
const string3 = 'Nataliia'
const string03 = ' is beautiful girl!'
const string003 = ' She lives in Zaporizhzha.'
const newString3 = string3.concat(string03,string003)
console.log(newString3)   //Nataliia is beautiful girl! She lives in Zaporizhzha.
//-----------------------------------------------------------------------------------------

//string - можна перебрати через цикл
const string4 = 'Nataliia';
for(let i = 0; i < string4.length;i++)
  console.log(string4[i]); 
//----------------------------------------------------------------------------------------

//string - можна перетворити в масив
//variant1
const string5 = 'Olexander'
const stringArray = Array.from(string5)
console.log(stringArray)   // ['O', 'l', 'e', 'x', 'a', 'n', 'd', 'e', 'r']

//variant1 перевернути у зворотній бік
const string05 = 'Olexander'
const stringArray05 = Array.from(string05).reverse().join('');
console.log(stringArray05)   // rednaxelO
//----------------------------------------------------------------------------------------

//string.includes - використовується для перевірки, чи міститься певний рядок у заданому рядку
const string6 = 'Lidiia'
const newString6 = string6.includes('idi',1) //1- індекс з якої літери починається фрагмент
console.log(newString6);  //true
//-----------------------------------------------------------------------------------------

//string.indexOf - використовується для отримання першого входження підрядка в рядку
//якщо підрядка шукаємого не буде, ми отримаємо -1
const string7 = 'Lidiia'
const newString7 = string6.indexOf('ia') // тоді поверне 4 i
console.log(newString7)  //4
//----------------------------------------------------------------------------------------

//tring.repeat - використовується для повторення рядка задану кількість рядків
//і повертає новий рядок, який складається з повторень вихідного рядка
const string8 = 'Pich '
const newString8 = string8.repeat(100)
console.log(newString8);   //Pich Pich Pich Pich Pich Pich 
//----------------------------------------------------------------------------------------

//string.replace - використовується для заміни частини рядка іншимрядком або регулярним виразом
//('Cin',' ') - результат буде пустим і може працювати як видалення
const string9 = 'Cinema'
const newString9 = string9.replace('Cin','Suj')
console.log(newString9)
//----------------------------------------------------------------------------------------

//string.slice - викорисовується для вибору частини рядка за допомогою вказаних індексів
//string.slice  - приймає два параметри:
// (начальний індекс) ВКЛЮЧАЮЧИ - з якого потрібно починати вилучення 
// (кінцевий індекс) НЕ ВКЛЮЧАЮЧИ - яким потрібно закінчувати
const string10 = 'Nataliia'
const newString10 = string10.slice(0,4)
console.log(newString10)
//---------------------------------------------------------------------------------------

//string.trim - використовується для видалення пробілів з початку і кінця рядка
const string11 = '    Nataliia Yakovenko   '
console.log(string11);
const newString11 = string11.trim()
console.log(newString11)
//---------------------------------------------------------------------------------------

//string.split - використовується для розбивки вихідного рядка на підрядки,
//використовуючі роздільник (separator) як точку розриву між підрядками і
//повертає масив, що складається з цих підрядків
//variant1
const string12 = 'hi hi hi';
const newString12 = string12.split(' ') // потрібно зробити пробіл
console.log(newString12);

//variant2
const string13 = 'hhjhjd*jhjhcjkh*jasdju7d67t6yg*jkbkjsdkj';
const newString13 = string13.split('*') // * це розділитель
console.log(newString13);
//////////////////////////////////////////////////////////////////////////////////////////

//Numbers
/*number.isInteger - використовується для перевірки, 
чи є передане значення цілим числом.
//--------------------------------------------------------------------------------------
  number.isNaN - використовується для перевірки на NaN
 */
//-------------------------------------------------------------------------------------
//number.toFixed() - викорситовується для РЯДКОВОГО представлення числа 
//з потрібною кількістю знауів після десяткової коми
const number = 15.55555
const newNumber = number.toFixed(2)
console.log(newNumber)
console.log(typeof newNumber);
//--------------------------------------------------------------------------------------

//Задача. Потрібно додати на початок +38
let phone = '0998765544'
let phoneArray = Array.from(phone)  // робимо масив, 
phoneArray.unshift('+','3','8') //додаємо на початок значення
console.log(phoneArray); 
phone = phoneArray.join('')  //з'єднуємо всі елементи в один рядок
console.log(phone);


