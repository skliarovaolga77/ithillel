//Сделать 3 асинхронные операции (симулируем при помощи функции getPromise(),
// внутри которой находится setTimeout(resolve(),timer)).
// В каждом промисе (getPromise) возвращается число от 0 до 100.

// //Создать обертку runAfter(), которая получает в качестве аргумента – 3 функции в массиве,
// // которые выполнятся после окончания всех 3-х асинхронных операций.

// //function afterFirstPromise(){};
// //function afterSecondPromise(){};
// //function afterThirdPromise(){};

// //function runAfter([afterFirstPromise,afterSecondPromise,afterThirdPromise]){}

//Функция создания массива радомных чисел
function getRandomInt(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

let afterFirstPromise = () => getRandomInt(1, 100);
let afterSecondPromise = () => getRandomInt(1, 100);
let afterThirdPromise = () => getRandomInt(1, 100);

function runAfter(data) {
   data.forEach(fun => console.log(fun))
}

let getPromise = timer => {
   return new Promise((resolve, reject) => {
      let randomValue = getRandomInt(1, 100);
      setTimeout(resolve(randomValue), timer);
   })
};

Promise
   .all([
      getPromise(1000)
      .then(
         data => afterFirstPromise(data)
      ),
      getPromise(2000)
      .then(
         data => afterSecondPromise(data)
      ),
      getPromise(3000)
      .then(
         data => afterThirdPromise(data)
      )
   ])

   .then(
      data => runAfter(data)
   );