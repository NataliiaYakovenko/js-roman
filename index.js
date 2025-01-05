class User{
    constructor(name, surname,age){
      this.name = name;
      this.surname = surname;
      this.age = age;
    }
    getFullName(){
        return `${this.name} ${this.surname}`
    }
}
class Moderator extends(User){
constructor(name, surname,age){
  super (name, surname,age)
}
getFullName(){
    return `${this.name} ${this.surname} --> ${this.age}`
}
creatPost(text){
console.log('Post successful created!')
}
deletePost(id){
    console.log('Post successful deleted!')
}
}

class Admin extends(Moderator){
    constructor(name, surname,age,uniquePrefix){
   super(name, surname,age)
   this.uniquePrefix = uniquePrefix;
    }
makeModerator(userId){
    console.log('Moderator successful sett!')
}
deleteModerator(userId){
    console.log('Moderator successful deleted!')
}

}
class Support extends(Admin){
    constructor(name,uniquePrefix){
      super(name, null,null,uniquePrefix)
    }
    getFullName(){
        return `${this.name} --> ${this.uniquePrefix}`
    }
}

const user1 = new User('Nataliia','Yakovenko',41)
console.log(user1);
console.log(user1.getFullName());

const moderator1 = new Moderator('lidiia','Yakovenko',71)
console.log(moderator1)
console.log(moderator1.getFullName())
console.log(moderator1.creatPost());
console.log(moderator1.deletePost());

const admin1 = new Admin('Olexander','Yakovenko',72,'Head of Sales')
console.log(admin1);
console.log(admin1.getFullName())
console.log(admin1.creatPost());
console.log(admin1.deletePost());
console.log(admin1.makeModerator());
console.log(admin1.deleteModerator());

const support1 = new Support('Evgen','Head of support')
console.log(support1)
console.log(support1.getFullName())
console.log(support1.creatPost());
console.log(support1.deletePost());
console.log(support1.makeModerator());
console.log(support1.deleteModerator());