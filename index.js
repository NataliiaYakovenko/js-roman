//ЗАДАЧІ
/*
Задача1
Зробити функцію конструктор Country, яка приймає в якості аргументів
- надва країни
- популяцію (population)
- площа (area)
Спроектувати метод густоти населення
Густата населення = популяція цієї країни / на площу цієї країни

*/

function Country(name,population, area){
this.name = name;
this.population = population;
this.area = area;

this.getPopulationDensity = function(){
return this.population / this.area
}
}

const country1 = new Country('Denmark', 10000,42956)
console.log(country1);
console.log(country1.getPopulationDensity());


/*
Задача2
Зпробити функцію - конструктор авто, яка має
- назву
-максимальну швидкість
- поточна швидкість
Спроектувати
- метод прискорення accelearte - приймає в якості аргумента певне прискорення
зауважти проскорення не може бути більше максимальної швидкості
- метод сповільнення deaccelearte - приймає в якості аргкменту певне сповільнення
зауважте при сповільнені поточна швидкість не може бути за нуль
-метод зупинк stop

 */
function Avto(brand,maxSpeed, speed){
    this.brand = brand;
    this.maxSpeed = maxSpeed;
    this.speed = 0;
    
    this.accelearte = function(increaseSpeed){
        this.speed = this.speed + increaseSpeed;//до поточної швидкості додаємо прискорення
        if(this.speed > this.maxSpeed){
            this.speed = this.maxSpeed;
        }
        return this.speed
    }

    this.deaccelearte = function(decreaseSpeed){
        this.speed = this.speed - decreaseSpeed;
        if(this.speed < 0){
            this.speed = 0;
        }
        return this.speed
    }
    this.stop = function(){
        this.speed = 0
        return this.speed;
    }
    }
  const avto1 = new Avto('Reno', 300, 60)
  console.log(avto1);
 


