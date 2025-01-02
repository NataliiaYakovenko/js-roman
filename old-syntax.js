

function User(name,lastname,age){
 this.name = name;
 this.lastname = lastname;
 this.age = age

}
//прототипи
//__proto__ - працює з об'єктами, які створюються літерально
//.prototype - працює з функціями конструкторами

function UserPrototype (){
    this.getFullName = function(){
       return `${this.name} ${this.lastname}`
    }

}

User.prototype = new UserPrototype()

const user1 = new User('Nataliia','Yakovenko',41)
console.log(user1)
console.log(user1.getFullName())

const user2 = new User('Lidia','Yakovenko',71)
console.log(user2);
console.log(user2.getFullName())

console.log(user1.getFullName===user2.getFullName);