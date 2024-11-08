let k = 0; 
// Збільшити значення к на 3
k = k + 3;  //Перевизначаємо к
console.log(k);

// Зменшити значення к на 2
k = k - 2;  //Перевизначаємо к
console.log(k);

//Інший спосіб
// Збільшити значення к на 3
k += 3;
console.log(k);

// Зменшити значення к на 2
k -= 2;
console.log(k);

// Помножити значення к на 3
k *= 3;
console.log(k);

// Поділити значення к на 2
k /= 2;
console.log(k)

//Унарні оператори
-k;
+k;

// '+' як оператор приведення строки до числа
//let thisIsNumber = '455'; це string type
let thisIsNumber = Number('455'); //змінився на number type
console.log(typeof thisIsNumber);

