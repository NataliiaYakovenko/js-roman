//Деструктуризація - це спосіб створити змінну

const monitor = {//об'єкт монітор
  size: {// вкладений об'єкт розмір
    height: { // вкладений об'єкт висота
      value: 30,
      skale: "cm // 1", //одиниці виміру
    },
    width: {
      value: 50,
      skale: "cm // 2",
    },
  },
  brightness: 750,
  refresh: {
    //оновлення
    value: 144,
    skale: "Ggrc",
  },
  color: "black",
  resulution: "4k",
};

console.log(monitor.color);
console.log(monitor.size.height.value);
//або щоб знайти value можна зробити короче
//const height = monitor.size.height.value;
//console.log(height)

//Використовуємо деструтктуризацію
//const {resulution,color:monitorColor} = monitor; //створили дві змінні i перейменовуємо значення color
//console.log(resulution);
//console.log(monitorColor);

//Задача. витягнути value для висоти та ширини monitor
const {size:{height:{value: hightValue},width:{value: widthValue}}}=monitor;
console.log(hightValue);
console.log(widthValue);

const {size:{height:{skale:heightSkale},width:{skale:widthSkale}}} = monitor;
console.log(heightSkale);
console.log(widthSkale)

const {color,brightness,resulution,...restOfMonitor}=monitor;
console.log(color);
console.log(brightness);
console.log(resulution);
console.log(restOfMonitor);