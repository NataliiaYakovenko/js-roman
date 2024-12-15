// МЕТОД МАСИВУ slise (немутуючий)
//array.slise - викорисовується для повернення нового масиву, який складається тільки з коїсь певної частини вихідного масиву
//array.slise([stsrt],[end]) - [stsrt] -це з якого індексу ми починаємо копіювати масив
//                              якщо [stsrt] буде від'ємним числом, то [stsrt] буде відлічуватись з кінця масиву
//                           -  [end]  -це до якого індексу ми копіюємо масив - end не включаємо
//Копіює масив з індексу М(включно) до індексу N(не включаючі)
//array.slise(M,N) - синтаксис

const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
const array2 = array1.slice(2, 4);
console.log(array2);

//уразі якщо я не передаю end, копіювання буде відбуватися від start до array01.length(до кінця масиву)
const array01 = [1, 2, 3, 4, 5, 6, 7, 8];
const array02 = array01.slice(2);
console.log(array02);
//------------------------------------------------------------------------------
//Задача. В масивах ми можемо зберігати будь-які типи даних, навіть об'єкти
const users = [
  {
    //масив, в якому об'єкти
    name: "Nataliia",
    lastName: "Yakovenko",
  },
  {
    name: "Roland",
    lastName: "Simonyan",
  },
  {
    name: "Bogdan",
    lastName: "Bondarenko",
  },
];
//потім Нам потрібно зробити копію маcиву users
const newUsers = users.slice(); //newUsers - це поверхнева копія
//якщо зміни відбуваються в поверхневій копії newUsers, зміниться і оригінал users
//потім Богдану потрібно змінити ім'я на Тарас
newUsers[2].name = "Taras";
console.log(newUsers[2]);

console.log(newUsers); // перевіряємо зміни
console.log(users); // перевіряємо зміни
//-------------------------------------------------------------------------------
//Якщо нам потрібно зробити копію з поверхневої копії
const users1 = [                    //оригінал
  {
    //масив, в якому об'єкти
    name: "Nataliia",
    lastName: "Yakovenko",
  },
  {
    name: "Roland",
    lastName: "Simonyan",
  },
  {
    name: "Bogdan",
    lastName: "Bondarenko",
  },
];
const newUsers1 = users1.slice(); //копія
const copUsers = newUsers1.slice(); //копія//copUsers - це поверхнева копія з поверхневої копії

console.log(users1);
console.log(newUsers1);
console.log(copUsers)

copUsers[0].lastName = 'Simonnyan';

console.log(users1);
console.log(newUsers1);
console.log(copUsers)
// Зміни відбулись у всіх копіях і воригіналі