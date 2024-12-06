//ЗАДАЧІ

/*
1. Написати функцію, яка приймає два числа (діапазон) 
і виводить на консоль всі числа з цього діапазону, які діляться на 5
*/
//Варіант1
function printNumberDivisibleBy5(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }
}
printNumberDivisibleBy5(10, 50);

//Варіант2

function count() {
  let numberOne = Number(prompt("Enter number one"));
  let numberTwo = Number(prompt("Enter number two"));

  for (let it = numberOne; it <= numberTwo; it++) {
    if (it % 5 === 0) {
      console.log(it);
    } else {
      console.log("Number " + it + " There is not number % 5");
    }
  }
}
count()

//Варіант3 Максимально підходящий
function count() {
    let numberOne = Number(prompt("Enter number one"));
    let numberTwo = Number(prompt("Enter number two"));
    if(numberOne > numberTwo){
        console.log('Початкове число повинно бути меншим за кінцеве число');
        return; // достроковий вихід із циклу
    }
  
    for (let it = numberOne; it <= numberTwo; it++) {
      if (it % 5 === 0) {
        console.log(it);
      } else {
        console.log("Number " + it + " There is not number % 5");
      }
    }
  }
  count()

  //ЗАДАЧА   FizzBuzz - часто на спвбеседі
  // Написати гру FizzBuzz для 100 чисел
  //Починаємо з 1, і потім це число поступово збільшується інкрементується
  //Якщо число ділеться на 3, то гравець каже Fizz
   //Якщо число ділеться на 5, то гравець каже Buzz
   //Якщо число ділеться і на 3 і на 5, то гравець каже FizzBuzz
   //Якщо число ділеться ні на 3 ні на 5, то гравець називає це число

   function writeGameFor100Number(limit){
    for(let i = 1; i <= limit; i++){
        if(i %3 === 0  && i % 5 === 0){
            console.log('FizzBuzz');
        }else if(i % 3 === 0){
            console.log('Fizz');
        }else if(i % 5 === 0){
            console.log('Buzz');
        }else{
            console.log(i)
        }
    }
   }
   writeGameFor100Number(100)