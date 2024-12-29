//Задача1
//Написати функцію, яка приймає рядок, 
//в якому кожне слово повинно починається в великої літери

function getCapitalLetter(string){
  //Розбиваємо рядок на окремі слова
  let words = string.split(' ')
  console.log(words);
  //Циклом проходимо по кожному слову і робтмо першу літеру великою
  for(let i = 0; i < words.length;i++){
    //перезаписуємо масив//words[i], words - наш масив,[i] - поточна позиція циклу.
    words[i]=words[i].charAt(0).toUpperCase()+words[i].slice(1);
                          // words[i] - отримуємо поточне переглядаєме слово
                          //charAt(0) - отримуємо доступ до першої літери кожного слова
                          //.toUpperCase() - робить літери великими
                          //words[i] - беремо поточне переглядаєме слово
                          //.slice(1) - прикліюємо кожне слово з другої літери            
  }
    return console.log(words.join(' '));//переобразовуємо масив в строку(не забуваєио між лапками пробіл)

}

getCapitalLetter('nataliia is beautiful girl! she lives in zaporizhzha.')
getCapitalLetter('It is snow outside')
