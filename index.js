//OOП - об'єктно орієнтоване прорамування
/*Загальні ідеї з ООП
1. ООП збудовано на навколо об'єктів
2. Поділ потрібний для тогоБ щоб можна було створювати, обслуговувати та перетворювати
   якісь частини програми не впливаючи при цьому на іншію
3.Сенс об'єкту у томуБ що він має якісь методи, тобто він може щось робити, прицьому інші об'кти
  не знають, як він це робить
4. Об'кт має поняття атрибуту і методу
   Атрибут - це будь-які данні, які зберігаються в середині об'єкта.
   Атрибути зазвичай виражаються змінними
   Методи - це будь-які дії, які можна здійснювати над об'єктом, атрибутами об'єкта  
   Методи зазвичай виражаються функціями
5. Об'єкти можна створювати за шаблоном - такі шаблони називають класами    
------------------------------------------------------------------------------------------------ 

Сеттори та Геттори називають аксессори(acces) - доступ

------------------------------------------------------------------------------------------------

Абстракція - коли ми зусереджуємось тільки на сутєвих на завданнях деталях (коли описуємо об'єкт)
і ігноруємо все інше.
Чим менше характеристик у об'кта, тим краще абстракція, але ключові характеристики не можна прибирати

Щоб працювати з абстракціями використовують інтерфейси
Інтерфейс - це спосіб взаємодії з об'єктом, який визначає, які операції можна здійснити з цим об'ктом,
які дані можна отримати або змінити
----------------------------------------------------------------------------------------------------

Інкапсуляція - це просес об'єднання даних та методів в одному об'єкі і приховування деталей 
реалізації від користувача
----------------------------------------------------------------------------------------------------

В чому різниця між Інкапсуляцією і Абстракцією?
Інкапсуляція зосереджена на організації та приховувані деталей реалізації об'єкта
Абстракція спрощує складність системи шляхом виділення ключових аспектів та приховувані незначних деталее
----------------------------------------------------------------------------------------------------

Спадкування - це здатність до копіювання, можливість описати новий клас на основі вже існуючого
----------------------------------------------------------------------------------------------------
*/

class Figure {
  constructor(sideQuantity) {
    this.sideQuantity = sideQuantity;
  }

  set sideQuantity(value){
   if(value < 0){
    throw new RangeError('Side quantity cannot be less 0')
   }
   this._sideQuantity = value
  }

  get sideQuantity(){
    return this._sideQuantity
  }

  getAera() {}
}

class Triangle extends Figure {
  constructor(a, b, angle) {
    super(3);
    this.a = a;
    this.b = b;
    this.angle = angle;
  }

  set a(value) {
    if (value < 0) {
      throw new RangeError("Side cannot be less 0");
    }
    this._a = value;
  }

  get a() {
    return this._a;
  }

  set b(value) {
    if (value < 0) {
      throw new RangeError("Side cannot be less 0");
    }
    this._b = value;
  }
  get b() {
    return this._b;
  }

  set angle(value) {
    if (value < 0) {
      throw new RangeError("Angle cannot be less 0");
    }
    this._angle = value
  }

  get angle() {
    return this._angle;
  }

  getAera() {
    return this.a * this.b * Math.sin(this.angle);
  }
}

class Square extends Figure {
  constructor(a) {
    super(4);
    this.a = a;
  }
 
  set a(value){
    if(value < 0){
      throw new RangeError('ide cannot be less 0')
    }
    this._a = value
  }

  get a (){
    return this._a
  }

  getAera() {
    return this.a * this.a; //this.a **2
  }
}

const square = new Square(4);
console.log(square);
console.log(square.getAera())

const triangle = new Triangle(5,5,1)
console.log(triangle);
console.log(triangle.getAera())