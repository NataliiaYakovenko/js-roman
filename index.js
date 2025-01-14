//Queue - черга
/*
Методи queue
1. Enqueue - вставляє елемент в кінець черги
2. Dequeue - видаляє елемент з початку черги
*/
//Створення черги
class Queue {
  constructor(head, tail) {
    this._head = 0;
    this._tail = 0;
  }
  get size() {
    return this._tail - this._head;
  }

  enqueue(value) {
    //tail відповідає на запитання, який елемент має бути останнім
    this[this._tail] = value;
    this._tail++; //на 1 збільшуємо наш tail
    return this.size;
  }

  dequeue() {
    if (this.size > 0) {
      const firstItem = this[this._head]; //це і буде елемент, який стоїть на початку черги
      delete this[this._head]; //видаляємо елемент що стоїть на початку черги
      this._head++;
      return firstItem;
    } else{
      return undefined;
    }
  }
}
const queue = new Queue()
console.log(queue)
console.log(queue.enqueue('task1'))
console.log(queue)
console.log(queue.enqueue('task2'))
console.log(queue)
console.log(queue.enqueue('task3'))
console.log(queue)
console.log(queue.dequeue())
console.log(queue)
console.log(queue.dequeue())
console.log(queue)
console.log(queue.dequeue())
console.log(queue)
console.log(queue.dequeue())
console.log(queue)
console.log(queue.size)
console.log(queue.dequeue())
