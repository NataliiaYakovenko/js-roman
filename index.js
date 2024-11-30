let firstOperant = Number (prompt('Введіть перше число'));
let secondOperant = Number (prompt('Введіть друге число'));

let result = firstOperant + secondOperant;

if(Number.isNaN(result) === true) {
   console.log('Ти не правий введи число');
} else{
   console.log(result);
}
