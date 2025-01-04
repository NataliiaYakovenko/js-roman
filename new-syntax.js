/* setter and getter
Напичати клас Worker.
У працівника є: ім'я, прізвище, ставка за один робочий день,
 кількість відпрацьованих днів у цьому місяці
 Метод, який повертає зарплату цього працівника за поточний місяць
*/

class Worker {
  constructor(name, lastname, salary1Day, daysOfMonth, coefficient) {
    this.name = name;
    this.lastname = lastname;
    this.salary1Day = salary1Day;
    this.daysOfMonth = daysOfMonth;
    this.coefficient = coefficient;
  }
  //set - задавати значення
  //setter - це метод для встановлення значення
  set salary1Day(newValue) {
    //назва setter - назва приватного поле БЕЗ знаку нижнього підкреслення
    if (newValue < 0) {
      throw new RangeError("Salary1Day must be position number");
    }
    if (typeof newValue !== "number") {
      throw new TypeError("Salary1Day must be a number");
    }
    //але в середині setter ми працюємо з приватним полем
    this._salary1Day = newValue;
  }

  //get - отримувати значення
  //getter - це метод для отримання значення
  get salary1Day() {
    //назва getter - назва приватного поле БЕЗ знаку нижнього підкреслення
    //але в середині getter ми працюємо з приватним полем
    return this._salary1Day;
  }

  set name(newValue) {
    if (typeof newValue !== "string") {
      throw new TypeError("Name must be string");
    }
    if (newValue === " ") {
      throw new Error("Name must not be empty");
    }

    this._name = newValue;
  }

  get name() {
    return this._name;
  }

  set lastname(newValue) {
    if (typeof newValue !== "string") {
      throw new TypeError("Lastname must be a string");
    }
    if (newValue === " ") {
      throw new Error("Lastname must not be empty");
    }
    this._lastname = newValue;
  }

  get lastname() {
    return this._lastname;
  }

  set daysOfMonth(newValue) {
    if (newValue < 0 || newValue > 31) {
      throw new RangeError("DaysOfMonth must be from 0 to 31");
    }
    if (typeof newValue !== "number") {
      throw new TypeError("DaysOfMonth must be a number");
    }
    this._daysOfMonth = newValue;
  }

  get daysOfMonth() {
    return this._daysOfMonth;
  }

  set coefficient(newValue) {
    if (newValue < 0) {
      throw new RangeError("Coefficient must be position number");
    }
    if (typeof newValue !== "number") {
      throw new TypeError("Coefficient must be number");
    }
    this._coefficient = newValue;
  }

  get coefficient() {
    return this._coefficient;
  }

  getSalaryCurrentMonth() {
    if (this.coefficient) {
      return this._salary1Day * this._daysOfMonth * this._coefficient;
    } else {
      return this._salary1Day * this._daysOfMonth;
    }
  }
}
/* 
В середині класу сеттер/геттер- ми працюємо з приватними полями
А при звернені до класу зовні ми працюємо з сеттер/геттер
 */

const worker1 = new Worker("Nataliia", "Yakovenko", 1200, 24, 60);
console.log(worker1);
console.log(worker1.getSalaryCurrentMonth());
console.log(worker1.salary1Day);
worker1.salary1Day = 700;
console.log(worker1);

const worker2 = new Worker("Lidiia", "Yakovenko", 400, 5, 45);
console.log(worker2);
console.log(worker2.getSalary1Day);
