
/*Задача
є клач авто
є клас паливо

Порахувати загальну вагу автомобіля (вага авто + вага палива)
об'єм * шільність
*/
class Fuil{
  constructor(volume,density){
     this.volume = volume;
     this.density = density;
  }
  getWeight(){
    return this.volume * this.density;
  }
}
const benzin = new Fuil(50,0.9)
console.log(benzin);
console.log(benzin.getWeight());

class Avto{
  constructor(brand,owenWeight, fuil){
      this.brand = brand;
      this.owenWeight = owenWeight;
      this.fuil = fuil;
  }
  //метод, який обчислює повну вагу
  //його власна вагаo wenWeight + вага палива
  getFullWeght(){
    return this.owenWeight + this.fuil.getWeight();
  }
}
const car = new Avto('Toyota',4000,benzin)
console.log(car)
console.log(car.getFullWeght());
