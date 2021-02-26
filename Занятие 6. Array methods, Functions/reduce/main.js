let arr = [10,20,30,40,50];
console.log(arr);

// .reduce(cb,100)

//возвращает что то
//перебирает , 
//входящие 3 элемента
//summ промежуточная переменная в которую возвращаем 
let summResult = arr.reduce(
  	function(summ,element,index,arr){
      // console.log(summ);
  		return summ+element
  	}
);
console.log(`сумма значений summResult: ${summResult}`);//вывод 150

// то же самое делали циклом
let summA=0;
for(let i=0; i<arr.length; i++){
	summA += arr[i];
}
console.log(`сумма всех значений маассива summA: ${summA}`);//вывод 150

let prev = arr.reduce(
  function(prev,element,index,arr){
    // console.log(prev);
    return prev+element
  },50 //изначально значение промежуточной переменной
);
console.log(`сумма всех значений маассива prev: ${prev}`);//вывод 200  сумма всех значений маассива + 50

array = [10,20 ,5,500];
let minValue = array.reduce(
	function(min, element){
    // console.log(min);
    //если текущий элемент element <min ,в то в таком случае в пременную element буду возвращать element
    //иначе будет возвращаться то значение что, там находиться , а именно min
		return element<min ? element : min;
	}
)

console.log(`минимальное значение = ${minValue}`);//вывод минимальное значение моего массива, а именоо 5

// - Example -

// 1. Change second element in user array into years old.
// 2. Get users, which is older then 20 year.- filter
// 3. Get all users years summ. - 
// 4. Render User data into table.

let users = [
	['Anna', 1996, 'Petrova', ['Oleg', 'Ivanna']],//отрисовать в td
	['Misha', 2000, 'Ivanova'],
	['Yura', 1975, 'Andreev'],
	['Ivan', 1985, 'Andreev', ['Oleg', 'Ivanna', 'Anna']],
],
	date = new Date(),
	year = date.getFullYear();//данные текущее время напр 2020год
  trs = [];
  
  //массив преобразованных
  let filteredUsers = users
  					.map(function(user){
              user[1] = year-user[1];
              console.log(user);
  						return user;
  					})
  					.filter(function(user){
  						return user[1]>20;
            })
//в отдельное переменной хранить отфильтрованных users 
//и выводим в таблицу
//останавливаемся после фиьтра и заносим в таблицу 
filteredUsers
  .forEach(function(user){
      // let tr = `<td></td>`;
      //сохранить в массив tds
      tds = user
      .map(function(userData){//данные по моаему user
        // Пройтись по каждому элементу массива и вывести в td
        // if(Array.isArray(userData)){
				// 	userData.join(', ')
        // }
        // или так написать 
        userData = Array.isArray(userData) ? userData.join(', ') : userData;
        return `<td>${userData}</td>`;
      })
      .join('');//получимли строку 
      //и хотим эту строку засунуть в tr
     console.log(tds)
     //теперь td  в tr, создаем trs = [];
     let tr = `<tr>${tds}</tr>`;
     // и эту tr  буду добавлять внутрь table
     // каждую tr в trs
     trs.push(tr);
  })
 
let finalSumm = filteredUsers 
            .reduce(function(summ, user){
              user[1]
              return  summ+user[1];
            },0); //reduce возвращает только одно значение
//tfoot - это опоследняя колонка , общая, объеденяющая 4 строки в одну
let tfoot = `<tfoot> 
    <tr>
      <td colspan="4">Years summ: ${finalSumm}</td>
    </tr>
  </tfoot>`;

  document.write(`<table class="userTables">${trs.join('')}${tfoot}</table>`);
  console.log(trs);

  console.log(filteredUsers);
  console.log(finalSumm);