
/*Задача 1
Написати функцію checkSpam, яка повертає true,
якщо переданий рядок містить слова 'xxx'або 'viagra'.
Якщо заборонених слів у рядку не має повертнути falce

checkSpam('buy ViAgRa now') //true
checkSpam('free xxxxxxxxxxxx') //true
checkSpam('innocent rabbit') //falce
 */
//variant1
function checkSpam(string){
   const stringLowerCase = string.toLowerCase()
   //console.log(stringLowerCase)
if(stringLowerCase.includes('xxx')|| stringLowerCase.includes('viagra')){
  return true;
} else{
  return false;
}

}
console.log(checkSpam('buy ViAgRa now'));
console.log(checkSpam('free xxxxxxxxxxxx'));
console.log(checkSpam('innocent rabbit'));


//variant2
function checkSpam(string){
  const stringLowerCase = string.toLowerCase()
  return stringLowerCase.includes('xxx')|| stringLowerCase.includes('viagra')
 
}
console.log(checkSpam('buy ViAgRa now'));
console.log(checkSpam('free xxxxxxxxxxxx'));
console.log(checkSpam('innocent rabbit'));


//variant3
function checkSpam(string){
  const array = ['ViAgRa','xxx','drugs']
  for(let i = 0;i < array.length;i++)
  if(string.toLowerCase().includes(array[i])){
     return true
  }
  return false;
}
console.log(checkSpam('buy ViAgRa now'));
console.log(checkSpam('free xxxxxxxxxxxx'));
console.log(checkSpam('innocent rabbit'));



//-----------------------------------------------------------------------------------------
/*Задача 2
Написати функцію, яка перевіряє чи є переданий їй рядок - паліндромом, не зважаючі на регістр
паліндром - це коли рядок з обох сторін читається однаково

 */

/*Алгоритм рішення
  1. Приймаємо строку від користувача
  2. Приводимо строку до нижнього регістру
  3. Перевернути строку 
  4. Перевернуту строку перевірити з оригінальною строкою
 */
function isPalindrom(string){
  const newString = string.toLowerCase();
  console.log(newString)
  
  const arrayString = newString.split('').reverse().join('')
  console.log(arrayString);
  
  const result = newString === arrayString;
  return result
}



console.log(isPalindrom('Anna'));
console.log(isPalindrom('Mama'));
console.log(isPalindrom('Barab'));
