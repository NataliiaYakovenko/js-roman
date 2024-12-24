//Prototype - прототипи масиву

const cat = {              // об'єкт кота
    name: 'Barsik',
    color: 'red',
    age: 1
}

const cat2 = {              // об'єкт кота2
    name: 'Murzik',
    color: 'black',
    age: 5
}
// прототип
const catMethods = {          // методи кота
    run: function(){
        console.log(`${this.name} is running`);
    },
    myau: function(){
        console.log(`${this.name} said myau`);
    }
}
//Потрібно прикрепити catMethods до cat
//Свойство cat яке вказує на прототип об'єкта
//cat.__proto__  //cat.__(це два підкреслення)proto__(це два підкреслення)
cat.__proto__ = catMethods  //прототипне посилання
cat2.__proto__ = catMethods //прототипне посилання для кота2