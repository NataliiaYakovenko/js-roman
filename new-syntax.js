//Задача
/*
Напичати клас Worker.
У працівника є: ім'я, прізвище, ставка за один робочий день,
 кількість відпрацьованих днів у цьому місяці
 Метод, який повертає зарплату цього працівника за поточний місяць
*/

class Worker{
  constructor(name,lastname,salary1Day,daysOfMonth){
    this.name = name;
    this.lastname = lastname;
    this.salary1Day = salary1Day;
    this.daysOfMonth = daysOfMonth;
  }
  getSalaryCurrentMonth(){
     return this.salary1Day * this.daysOfMonth;
  }
}

const worker1 = new Worker('Nataliia','Yakovenko',1200, 24)
console.log(worker1)
console.log(worker1.getSalaryCurrentMonth());


