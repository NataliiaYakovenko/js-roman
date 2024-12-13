// Потрібно перевірити чи є у цьому об'єкті певний ключ
const obj = {
    Mon:'drive lessons',
    Tue: 'dantist visit',
    Wed: 'go to party',
    Thu: 'hard work',
    Fri: 'rest',
    Sat: 'go to park',
    'favirite color': 'white',
    0: 'value'
}
// Оператор in
// in - бінарний оператор, тоєсть йому знадобится два операнди
//базовий синтекс оператора in
// 'key' in obj
console.log('Mon' in obj);
console.log('favirite color' in obj);
console.log('0' in obj);