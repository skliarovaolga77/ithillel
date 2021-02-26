// let request = (url, method = 'GET') => {
//   let xhr = new XMLHttpRequest();
//   //open метод - запрос на открыване файлика
//   //GET тип запроса 
//   //user.json название файла.к-й нужно получить
//   //false останавливает работу дальше кода, пока не получим данные из файла
//   //если true не ждет
//   xhr.open('GET', 'user.json', true);
//   //send - метод на получение информации
//   xhr.send();
//   // console.log(xhr);

//   //readystatechange изменение состояния нашего запроса ( 4 пункта readyState)
//   xhr.addEventListener('readystatechange', () => {
//     // console.log(xhr.readyState);
//     if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 400) {
//       //  console.log(xhr.responseText);//вывод в формате json
//       //преобразуем в объект
//       let response = JSON.parse(xhr.responseText);
//       // console.log(response);
//       return response;
//     }
//   });
// };
// let userData = request('user.json');
// console.log(userData);

//Promise  41 : 20
// let hasMoney = true;
// let getData = new Promise(() => {
//   console.log('hi');
//   setTimeout(()=>{
//     if(hasMoney){
//       ok(); 
//     }else {
//       notOk();
//       prodat(); 
//     }
//   },2000)

// })

// let ok = () => console.log('ok');
// let notOk = () => console.log('notOk');
// let prodat = () => console.log('prodat');

// function ok(){
//   console.log('ok');
// }

// function notOk(){
//   console.log('notOk');
// }

// let hasMoney = true;
// let getData = new Promise((resolve, reject) => {
//   console.log('hi');
//   setTimeout(()=>{
//     if(hasMoney){
//       resolve(); 
//     }else {
//       reject();
//     }
//   },2000)

// });

// //создание Promise
// // в getData нах-ся р-т р-ты Promise
// getData
//   .then(
//     //Описание resolve(); 
//     ()=>{
//       console.log('ok');
//     },
//     //Описание  reject(); 
//     ()=>{
//       console.log('not ok');
//     }
//   )

let hasMoney = 200;
let getData = new Promise((resolve, reject) => {
  console.log('hi');
  setTimeout(()=>{
    hasMoney<=100 ? reject(hasMoney) : resolve(hasMoney);
  },2000);

});

//создание Promise
// в getData нах-ся р-т р-ты Promise

let user = {};
console.log(user);

getData
//первый then = положительный
  .then(
    //Описание resolve(); 
    data => {
      console.log('это первый ok' , data);
      return new Promise((resolve, reject) => {
        reject ('от первого ok');
      })
    },
    //Описание  reject();
    data => {
      console.log('not ok', data);
      return 'от первого not Ok';
    }
  )
  .then(
     ok => console.log('это второй ок then', ok),
     notOk => {
       console.log('это второй not Ok then', notOk);
       return 'для второй not Ok then';
     }
  )
   .then(
     data => {
       user.name = data;
        console.log('final ок');
        
     } 
  );