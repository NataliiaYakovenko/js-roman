//Map (мапа, словник)
//Map створюють для створення словників
/*
Зберігає пари 'ключ: значення'
Має розмір (size) 

Ключ в Мар має бути унікальним

Відміності від звичайного об'єкта
1. Мар запам'ятовує елементи в тому порядку, в якому ми їх додаємо
2. в Мар ключем може бути любий тип даних: string, boolean,bigint,objact, function
Об'єкти (в тому числі функції) - передаються за посиланнями

*/

//Методи Мар
//set - доавати значення в Мар

const map = new Map();
console.log(map);

map.set(1, {});
console.log(map);

map.set("1", "value");
console.log(map);
//-----------------------------

// get - отримувати значення з Мар
console.log(map.get("1")); //value
//-----------------------------

//has - дозволяє швидко дізнатися чи є в нашій мар якийсь певний ключ
console.log(map.has(1)); //true
console.log(map.has("1")); //true
console.log(map.has(33)); //false
//------------------------------

//Створюємо словник
const vocabulary = new Map();
vocabulary.set("cat", "кіт");
vocabulary.set("dog", "собака");
vocabulary.set("eat", "їсти");

/*
Написати функцію, яка приймає строку англійською
і перекладає цю строку українською використовуючи наш словник
*/
function translate(string, vocabulary) {
  const arrayWords = string.toLowerCase().trim().split(" ");
  console.log(arrayWords);
  //у нас є словник vocabulary
  //перебрати arrayWords і переклад для кожного англійського слова у масиві
  const translatedArray = arrayWords.map((word) => {
    if(vocabulary.has(word)){
      return vocabulary.get(word);
    }else{
      return word;
    }
  });
  return translatedArray.join(' ');
  //дістати з нашого слованика vocabulary
}
console.log(translate("      Cat eat dog             ", vocabulary))
console.log(translate('Dog eat cat',vocabulary));