//Мутація - це зміна
//Мутабельне - те, що можна змінити
//Імутабельне - це те, що не може бути змінено

//Об'єкти є мутабельні
const user ={
    name: 'Nataliia',
    lastName: 'Yakovenko',
}
user.isHungry = false;

//Примітивні типи в JS (String, Number,Boolean,Null,Undefined,Symbol,Bigint) - Імутабельні
const userName = 'Nataliia Yakovenko';
userName.isHungry = false; // цю властивість не можна додати до userName