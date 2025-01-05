/*Задача
Клас Людина та похідний клас Студент.

1. Створити клас людина з його властивостями
- ПІБ
- Дата народження
- Стать

2. Створити похідний клас Студент, який наслідує властивості класу Людина
Додайте до класу Студент додаткові властивості
- Рік всупу
- Номер залікової книжки
- Середній бал

3. Реалізуйте наступні методи
в класі Людина
- greeting() - метод повертає привітання для людини в залежності від її статі
(Mr or Mrs)

в класі Студент
-isExcellentStudent() - цей метод перевіряє чи є студент відмінником 
на основі його середнього балу
Якщо середній бал студента більше або дорівнює 90, 
то метод поверне true, в іншому випадку - false
*/

class Person {
  constructor(fullName, birthYear, gender) {
    this.fullName = fullName;
    this.birthYear = birthYear;
    this.gender = gender;
  }
  //-----
  set fullName(value) {
    if (typeof value !== "string") {
      throw new TypeError("FullName must be a string");
    }
    if (value === " ") {
      throw new RangeError("FullName must not be empty");
    }
    this._fullName = value;
  }

  get fullName() {
    return this._fullName;
  }
  //-----
  set birthYear(value) {
    //тут потрібно валідувати дату
    this._birthYear = value;
  }

  get birthYear() {
    return this._birthYear;
  }
  //----
  set gender(value) {
    if (typeof value !== "string") {
      throw new TypeError("Gender must be a string");
    }
    this._gender = value;
  }

  get gender() {
    return this._gender;
  }

  greeting() {
    let prefix; //в цю змінну ми будемо класти або Mr. або Mrs. в залежності від статі

    if (this.gender === "male") {
      prefix = "Mr";
    } else if (this.gender === "female") {
      prefix = "Mrs";
    } else {
      prefix = prompt(`${this.fullName}, how should we address you?`);
    }
    return `Hello ${prefix} ${this.fullName}`;
  }
}

class Student extends Person {
  constructor(
    fullName,
    birthYear,
    gender,
    admissionYear,
    studentId,
    averageGrade
  ) {
    super(fullName, birthYear, gender);
    this.admissionYear = admissionYear;
    this.studentId = studentId;
    this.averageGrade = averageGrade;
  }
  //-----
  set admissionYear(value) {
    //тут потрібно валідувати дату
    this._admissionYear = value;
  }

  get admissionYear() {
    return this._admissionYear;
  }
  //-----
  set studentId(value) {
    //тут потрібно валідувати дату
    this._studentId = value;
  }

  get studentId() {
    return this._studentId;
  }
  //-----
  set averageGrade(value) {
    if (typeof value !== "number")
      throw new TypeError("Average grade must be a number");

    if (value < 0 || value > 100) {
      throw new RangeError("Average grade must be from 0 to 100");
    }

    this._averageGrade = value;
  }

  get averageGrade() {
    return this._averageGrade;
  }

  isExcellentStudent() {
    /*варіант 1
    if(this.averageGrade >= 90){
      return true
    }else{
      return false
    }
      
   варіант 2 
   const result = this.averageGrade >=90 ? true : false;   
   return result;
  }

  варіант 3*/
    return this.averageGrade >= 90;
  }
}

const person1 = new Person("Nataliia Yakovenko", "1983", "female");
console.log(person1);
console.log(person1.greeting());

const person2 = new Person("Evgen Yakovenko", "1976", "male");
console.log(person2);
console.log(person2.greeting());

const student1 = new Student("Roland Simonyan", "1998", "male",2020,45678,95);
console.log(student1);
console.log(student1.greeting())
console.log(student1.isExcellentStudent());

const student2 = new Student("Boris Jons", "1998", "male",2020,114560678,90);
console.log(student2);
console.log(student2.greeting())
console.log(student2.isExcellentStudent());

const student3 = new Student("Fiona Smit", "1995", "female",2020,6766745678,75);
console.log(student3);
console.log(student3.greeting())
console.log(student3.isExcellentStudent());

const student4 = new Student("Omar Froter", "1989", "male",2020,45678,99);
console.log(student4);
console.log(student4.greeting())
console.log(student4.isExcellentStudent());

//робимо масив
const arrayStudents =[student1,student2,student3,student4]
console.log(arrayStudents);