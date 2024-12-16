//argument - схожий на масив, але він НЕ є масивом

function t(){
    arguments[0]
    arguments[1]
    arguments[2]
    arguments[3]= 'Nataliia'
    console.log(arguments);

}
t(1,2,3,4,5,6,);

//console.log(t);
console.dir(t) //console.dir - дозволяє більш розгорнуто передивитись функцію

//будь-яка JS функція - є об'єкт
//-------------------------------------------------------------------------
//Приклад argument
//функція, яка буде додавати два числа
function sum (a,b){
 console.log(arguments);
 return a+b;
}
//console.log(sum(3, 4));
//--------------------------------------------------------------------------
//Створити нормальний масив із об'єкта arguments
//Написати функцію, яка повертає суму БУДЬ-ЯКОЇ кількості переданої в неї аргументів
function sum (){
const arrayArgs = Array.from(arguments)
let sum = 0;
for(let i = 0;i < arrayArgs.length; i++){
    sum += arrayArgs[i];
}
return sum;
   }
   console.log(sum(1,2,3,4,5,6,7,8,9));
