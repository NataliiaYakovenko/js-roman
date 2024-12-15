function saySomething(howToSay,whatToSay){
    howToSay(whatToSay);
}
saySomething(alert, 'Hello, user!');  //варіант1
saySomething(console.log, 'Hello, user!') //варіант2

//Як називаються функції, які приймають інші функції в якості аргумента?
//HOF - High Order Function - функція вищого порядку

//Як називається функція, яку ми передали, як аргумент
//callback - функція зворотнього виклику