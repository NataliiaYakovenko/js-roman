// Задача. у нас є об'єкт ключем в якому є день тижня, а значенням плаихни на цей день
//прийняти через промпт від корстувача назву дня тижня 
// і виадати у альорт, що заплановано у користувача на цей тиждень
const obj = {
    Non:'drive lessons',
    Tue: 'dantist visit',
    Wed: 'go to party',
    Thu: 'hard work',
    Fri: 'rest',
    Sat: 'go to park',
}
const nameWeek = prompt('enter week day ( \n Monday = Mon, \n Tuesday = Tue, \n Wed, \n Thu, \n Fri, \n Sat )')
alert(`On ${nameWeek} you have ${obj[nameWeek]}`)

//alert(obj[nameWeek] ? obj[nameWeek] : 'Error happened') - зробити через тернальний оператор

