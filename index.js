// This - у глобальній області видимості посилається на об'єкт Window

'use strict' // - це директива, яку включають на початку js-файлу для встановлення
//строго режиму.
//Строгий режим накладує більш суворі правила і встановлює обмеження, як js-код
//буде інтерпретуватися і виконуватись браузером
//При використанні 'use strict' this не буде вказувати на Window, він буде казувати undefined

//Глобальна область
console.log(this)  //=>Window    // this вказує на глобальний об'єкт Window  
//-----------------------------------------------------------------

//Протестуємо this у локальній області видимості

//Function Declaration
function test (){                
 console.log(this);           //=>Undefined  // this вказує на функцію

}
test();
//-------------------------------------------------------------------
//Function Expression
const test2 = function (){
  console.log(this);         //=>Undefined // this вказує на функцію
}
test2()

//{  } весь код огорнутий фігурними душками - контекст виконання
//'use strict'строгий режим запустив такий механізм, що у Function Declaration i Function Expression
//з'являється свій власний контекст виконання. Контекстам виконання функції стає сама функція,
 // а не Глоюальний об'єкт Window
//------------------------------------------------------------------------
 //Arrow Function
 const test3 = ()=>{
  console.log(this);   //=>Window    // this вказує на глобальний об'єкт Window 
 }
 test3();
 // у Arrow Function не має свого контексту виконання
 //------------------------------------------------------------------------

 //ПРИКЛАД
 //Є об'єкт газети

 const newspaper = {
    titel: 'News......',
    articles: [{
      author: 'Nataliia Yakovenko',
      date: '25-12-2024',
      text: 'Lorem'
    },{
      author: 'Lidiia Yakovenko',
      date: '20-04-2024',
      text: 'Lorem'
    },{
      author: 'Olexander Yakovenko',
      date: '12-10-2024',
      text: 'Lorem'
    }],
    showArticles: function(){
      this.articles.forEach ((item,index)=>{ 
        //this.articles  - вказує на масив articles в нашом об'єкті
        //forEach перебирає об'єкти в масиві articles
        // в середину forEach передаємо callback
       console.log(`${this.titel} ${index}-${item.author}`)
      })
    }

 }
 // у об'єкта newspaper викликаємо метод showArticles

newspaper.showArticles();