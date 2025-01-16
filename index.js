//Задача МАР
/*
є два об'єкти users
сonst user1 = {
firstName: 'Alex',
lastName: 'Doe',
id: 1,

сonst user1 = {
firstName: 'John',
lastName: 'Doe',
id: 2,
}

const johnMessages = ['Hello', 'How are you?']
const alexMessages = ['Hi!', 'I am fine']

Задача. За допомогою Мар зв'язати користувача з його повідомленнями
щоб за id користувача можна було знайти його повідомлення 

*/
const user1 = {
    firstName: 'Alex',
    lastName: 'Doe',
    id: 1,
} 
    const user2 = {
    firstName: 'John',
    lastName: 'Doe',
    id: 2,
    }
    
    const johnMessages = ['Hello', 'How are you?']
    const alexMessages = ['Hi!', 'I am fine']

    const getMessage = new Map();
    getMessage.set(user1.id,johnMessages);
    getMessage.set(user2.id,alexMessages);

    console.log(getMessage.get(user1.id))
    console.log(getMessage.get(user2.id))