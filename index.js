// Задача  for...in - 
//  У нас є об'єкт з зарплатами повсім відділем
//Написати функцію, яка повертає загальну суму витрачену на зарплату всх відділів

//Варіант мій
/*const departmentSalary = {
  HR: 120000,
  development: 5500000,
  PR: 50000,
  marketing:120000,
  assistant: 'undefind',
}
function amountSpentSalary(departmentSalary){
 let amount = 0;
 for(let key in departmentSalary){
  if(typeof departmentSalary[key]==='number'){
    amount+=departmentSalary[key];
  }
}
return amount;

  }
    console.log(amountSpentSalary(departmentSalary));*/
    //--------------------------------------------------------------------------------
    
//Варіант Роми    
/*const departmentSalary = {
  HR: 120000,
  development: 5500000,
  PR: 50000,
  marketing:120000,
  assistant: 'undefind',
}
function sumSalary(salaryObjact){
  let sum = 0;//потрібно створити змінну, яка накаплює нашу суму
  for(let key in salaryObjact){// перевіряємо ключі в нашому об'єкті
    if(typeof salaryObjact[key]==='number'){//якщо тип даних нашого обєкта равен number
    sum+=salaryObjact[key]//sum = sum + salaryObjact[key]// тоді ми накопичуємо суму.
    //до суми додаємо всі ключі в нашому об'єкті
  }
}
  return sum;
}
console.log(sumSalary(departmentSalary));*/
//----------------------------------------------------------------------------------------

//Варіант Роми коли декілька підприємств

const departmentSalaryInCompany1 = {
  HR: 120000,
  development: 5500000,
  PR: 50000,
  marketing:120000,
  assistant: undefined,
}
const departmentSalaryInCompany2 = {
  HR: 500000,
  JS: 5500000,
  PR: 50000,
  QA:800000,
  clojure: 250000,
  frontend: 365800,
  strategyExecution: undefined,
  cLevel: undefined
}

function sumSalary(salaryObjact){
  let sum = 0;//потрібно створити змінну, яка накаплює нашу суму
  for(let key in salaryObjact){// перевіряємо ключі в нашому об'єкті
    if(typeof salaryObjact[key]==='number'){//якщо тип даних нашого обєкта равен number
    sum+=salaryObjact[key]//sum = sum + salaryObjact[key]// тоді ми накопичуємо суму.
    //до суми додаємо всі ключі в нашому об'єкті
  }
}
  return sum;
}
console.log(sumSalary(departmentSalaryInCompany1));
console.log(sumSalary(departmentSalaryInCompany2));