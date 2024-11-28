//Зада
/*Число r
Якщо r > 12 - вивести в консоль більше 12
Якщо r < 5 - вивести в консоль меньше 5
В противному випадку - вивести в консоль діапозон між 5 і 12
 */
//варіант 1
/*let r = 6;
if (r>12) {
   console.log('більше 12');
} else if (r<5) {
   console.log('меньше 5');
} else {
   console.log('діапозон між 5 і 12');
}*/

//Варіант 2
let r = 6;
let strWithR = 'r= '+ r;
if (r>12) {
   console.log(strWithR + ', більше 12');
} else if (r<5) {
   console.log(strWithR + ', меньше 5');
} else {
   console.log(strWithR + ', діапозон між 5 та 12');
}


