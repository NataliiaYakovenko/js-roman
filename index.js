// Створюємо власний масив

/*function MyArray(){
    this.length = 0; //масив має свою довжину

    this.push = function(value){ //значення яке потрібно додати до масиву
          // значення value потрібно додати в КІНЕЦЬ масиву
     this[this.length] = value;
     this.length++;
     return this.length;     
    }
};

const array = new MyArray();
array.push(1);
array.push(2);
//-----------------------------------------------------------------------------------

// перепишіть push таким чином щоб push міг приймати та додавав до масиву будь-яку кількість переданих елементів
function MyArray(){
    this.length = 0; 
    
    this.push = function(value){ 
        for(let i =0; i < arguments.length; i++){
            this[this.length] = arguments[i];
            this.length++;
        }
        return this.length;     
    }
}
const array = new MyArray();
array.push(1);
array.push(2);
array.push(3,4,77,44,59,5)*/
//-----------------------------------------------------------------------------
// Видалити останній елемент

/*this.pop = function(){
if(this.length > 0){
    //1 Зберегти останні елемент
    const lastItem = this[this.length - 1];
    //2 Видалити останній елемент із масиву
    delete this[this.length - 1];
    //3 Зменшити довжину масиву на 1
    this.length--;
    //4 Повернути останній елемент
    return lastItem;
} else {
    return undefined;
}
}
const array = new MyArray();
array.push(1);
array.push(2);
array.push(3,4,77,44,59,5);*/
//----------------------------------------------------------------------

this.forEach = function(callback){
 for(let i = 0; i < this.length;i++){
    callback(this[i], i, this);
    //this[i] - поточний переглядаємий елементи масива
    //і - індекс цього елементу у маиві
    //this - посилання на поточний масив
 }
}
const array = new MyArray();
array.push(1);
array.push(2);
array.push(3,4,77)

//Відконсольлогувати квадрати кожного числа в масив array
 array.forEach((item)=>{
    console.log(item**2);//item виведений у квадрат
 })