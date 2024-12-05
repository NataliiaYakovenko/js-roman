//Цикли - Loops

let iterator = 0;
//Прохід циклу (коло) називається інтерація
while(iterator <= 10){
    console.log(iterator);
    iterator++;
}

//Задача з паролем
let password = "1234";
let userPassword = "";

do{
    //userPassword = prompt('Enter password');
} while(userPassword !== password);
console.log('Password is correct');

// for
 for(let i = 0; i < 10; i++){
    console.log(i)
 }
 // let i = 0    - це початковий стан
 //  i < 10      - умова, за якої цикл повторюється
 // і++          - зміна лічильника на кожній ітерації