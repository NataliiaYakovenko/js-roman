// ПРАКТИКА МАСИВИ sort

const dogArray = [
  {
    nickname: "Tuzic",
    color: "black",
    weght: 3,
    age: 2,
  },
  {
    nickname: "Doly",
    color: "white",
    weght: 5,
    age: 3,
  },
  {
    nickname: "Fagot",
    color: "black",
    weght: 9,
    age: 5,
  },
  {
    nickname: "Stus",
    color: "black",
    weght: 15,
    age: 1,
  },
];
//Задача. Відсортувати собак за вагою на збільшення у порядку зростання
//variant1
/*dogArray.sort((dog1, dog2) => {
  //dog1, dog2 - два сусідніх об'єкта
  if (dog1.weght < dog2.weght) {
    // уразі якщо у вес у собаки1 меньше ніж у собаки2
    return -1;
  } else {
    //уразі якщо у вес у собаки1 більше ніж у собаки2
    return 1;
  }
});*/

//variant2
//dogArray.sort((dog1,dog2)=>{
    //return dog1.weght - dog2.weght; //від меньшого до більшого
    //return dog2.weght - dog1.weght; //від більшого до меншого
//})
//-----------------------------------------------------------------------
// Задача. Відсортувати собак від найстаршого до молодшого
//variant1
/*dogArray.sort((dog1,dog2)=>{
if(dog2.age > dog1.age){
    return 1;
}else {
    return-1
}
})*/
//variant2
dogArray.sort((dog1,dog2)=>{
return dog2.age - dog1.age;
})
