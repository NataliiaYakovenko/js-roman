//if - оператор логічної умови. Спосіб перевірити, чи виконується певна умова, 
//і в залежності від цього зробити певні дії або виконати певний код
if(2+2===5){
   console.log('Числа рівні між собою');//виконується якщо умова true
}
else{
   console.log('Числа нерівні між собою');
}

/* Задаача
Створити змінні 
a = 3;
b = 6;
n = 8;

Якщо b - парне (четне, ділиться на 2), тоді n збільшити на 5 (n+=5), 
у іншому випадку а - зробити = 15

Вивести в консоль
*/
 let a = 3;
 let b = 6;
 let n = 8;

 if (b % 2 ===0 )//парне (четне, ділиться на 2)
  {
     console.log(n+=5);
 }
 else {
   console.log(a = 15);
 }
 