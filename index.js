//Порівняння чисел <,>
const result1 = 4 > 5;//false
console.log(result1);

const result2 =  7 < 9;
console.log(result2);//true


//Порівняння рядків юнікод
const result3 = 'a' > 'A';// 61 > 41
console.log(result3); //true

const result4 = 'b' < 'u'; //62 < 75
console.log(result4); //true

const result5 = 'test' > 'word'; // 74 > 77
console.log(result5 );//false

const result6 = 'test' > 'tord'; //65 > 6F
console.log(result6);//false

//Перевірка рівності чисел
   // == приводить операнди ло одного типу даних і потім порівнює
   // == ОПЕРАТОР НЕ РЕКОМЕНДУЄТЬСЯ
const result7 = 5 == 6;  //false
console.log(result7);

const result8 = 6 == 6;
console.log(result8);//true

const result9 = '9' == 9;
console.log(result9); //true

   // === порівнює оператори і за значенням і за типом даних
   // === ОПЕРАТОР РЕКОМЕНДУЄТЬСЯ  
const result10 = '9' === 9;
console.log(result10); //false

const result11 = 9 === 9;
console.log(result11); //true

  // перевірки
  // більше-або-дорівнює
  const result12 = 3 >= 3;
  console.log(result12); //true 
  
  // меньше-або-дорівнює
const result13 = 6 <= 7;
console.log(result13); //true 


