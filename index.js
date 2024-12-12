/*Розробка програми для керуванням книжковим магазином
1, потрібно створити конструктор об'єктів книг з наступними властивостями
Спроектувати методи для отримання і всановлення значень цих властивостей
2, Зробити для всіх книг метод, який би повернув ціну книжки зі знижкою

*/
function Book(title, auther,year, price){
  this.title = title;
  this.auther = auther;
  this.year = year;
  this.price = price;
  
  this.getTitle = function() {
    return this.title;
  };
  this.getAuther = function(){
    return this.auther;
  };
  this.getYear = function(){
    return this.year;
  };
  this.getPrice = function(){
    return this.price;
  };
  //змінити назву книги
  this.setTitle = function (newTitle) {
    //також можна реалізуваи якісь перевірки
    this.title = newTitle;
  }
    //змінити автора книги
  this.setAuther = function(newAuther){
       //також можна реалізуваи якісь перевірки
    this.auther = newAuther;
  }
    //змінити рік книги
  this.setYear = function(newYear){
     //також можна реалізуваи якісь перевірки
    this.year = newYear;
  }
    //змінити ціну книги
  this.setPrice = function(newPrice){
     //також можна реалізуваи якісь перевірки
    this.price = newPrice;
  }
  //метод, який би повернув ціну книжки зі знижкою
  this.culculateDiscountedPrice = function(discountPercentage){
const discountPrice = this.price - (this.price*(discountPercentage/100))
return discountPrice;
  }
};

const book1 = new Book('Чотири вітри','Крістін Геннан',2020,450);
/*console.log(book1.getTitel());
console.log(book1.getAuther());
console.log(book1.getYear());
console.log(book1.getPrice());

book1.setTitle('New Title');
book1.setAuther('New Auther');
book1.setYear(2025);
book1.setPrice(350);*/


//повернув ціну книжки зі знижкою
console.log(book1.culculateDiscountedPrice(10));