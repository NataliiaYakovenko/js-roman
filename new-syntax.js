//Задача
/*
Напичати клас Worker.
У працівника є: ім'я, прізвище, ставка за один робочий день,
 кількість відпрацьованих днів у цьому місяці
 Метод, який повертає зарплату цього працівника за поточний місяць
*/

class Worker{
  constructor(name,lastname,salary1Day,daysOfMonth,coefficient){

    if(name === '' || lastname === ''){
      throw new Error('Name and lastname must not be empty')
    }

    this.name = name;
    this.lastname = lastname;

    if(typeof salary1Day !== 'number' || typeof daysOfMonth !== 'number'){
      throw new TypeError('Salary1Day and DaysOfMonth must be a number')
    }

    if(salary1Day < 0){
      throw new RangeError('Salary1Day must be = or > 0')
    }

    this._salary1Day = salary1Day;

    if(daysOfMonth < 0 || daysOfMonth > 31){
      throw new RangeError('DaysOfMonth must be from 0 to 31')
    }
    
    this.daysOfMonth = daysOfMonth;
    this.coefficient = coefficient;
  }
  //set - задавати значення
  setSalary1Day(value){
    if(typeof value !== 'number'){
      throw new TypeError('Salary1Day must be a number')
    }

    if(value < 0){
      throw new RangeError('Salary1Day must be = or > 0')
    }

    this._salary1Day = value;
  }

//get - отримувати значення
getSalary1Day(){
  return this._salary1Day;
}

  getSalaryCurrentMonth(){
    if(this.coefficient){
      return this._salary1Day * this.daysOfMonth * this.coefficient;
    } else {
      return this._salary1Day * this.daysOfMonth;
    }
      
  }
}

const worker1 = new Worker('Nataliia','Yakovenko',1200, 24)
console.log(worker1)
console.log(worker1.getSalaryCurrentMonth());

const worker2 = new Worker('Lidiia','Yakovenko',400, 21)
console.log(worker2);
console.log(worker2.setSalary1Day(500));
console.log(worker2.getSalary1Day());


