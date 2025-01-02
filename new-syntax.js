
const MIN_ZP = 7100;
const WORK_DAYS = 21;
const MIN_RATE = MIN_ZP / WORK_DAYS; //MIN_RATE мінімальна ставка

class Worker{
  constructor(name,lastname,salary1Day = MIN_RATE,daysOfMonth = WORK_DAYS){
    this.name = name;
    this.lastname = lastname;
    this.salary1Day = Number(salary1Day.toFixed(2));//зробити округлення до 2 знаків пісял коми/Number робить суму числом
    this.daysOfMonth = daysOfMonth;
  }
  getSalaryCurrentMonth(){
     return this.salary1Day * this.daysOfMonth;
  }
}

const worker1 = new Worker('Nataliia','Yakovenko',1200, 21)
console.log(worker1)
console.log(worker1.getSalaryCurrentMonth());

const worker2 = new Worker('Lidia','Yakovenko')
console.log(worker2)
console.log(worker2.getSalaryCurrentMonth());
//------------------------------------------------------------------------------
//Параметри за замовченням

function sum(a =10,b =5){
  return a+b;
}
console.log(sum()); //15
console.log(sum(3,3)); //6
console.log(sum(3)); //8