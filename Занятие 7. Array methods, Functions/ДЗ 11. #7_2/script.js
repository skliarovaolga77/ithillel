//You have array of Users in which every User has fields [username, team, score, items].
//У вас есть массив пользователей, в котором у каждого пользователя есть поля [имя пользователя, команда, счет, элементы]
var users = [
	[ "john", "red",5,["ball", "book", "pen"]],
	["becky","blue",10,["tape", "backpack", "pen"]],
	["susy","red",55,["ball", "eraser", "pen"]],
	["tyson","green",1,["book", "pen"]],
   ];
 

   console.log(users);

// Create a new array using forEach that has all usernames with a "!" to each of the usernames. Example: ["john!", "becky!", ...].
//Создайте новый массив( (newArrayUsing)- готов )  с помощью forEach, в котором все имена пользователей будут отмечены знаком "!" каждому из имен пользователей. Пример: [«джон!», «Бекки!», ...].
	// //ф-ция копирования массива
	let newArray = [],
	newArrayUsing = [];

	function copyArray(arrayFrom, arrayTo){
		for(let i=0; i<arrayFrom.length; i++){
			if(Array.isArray(arrayFrom[i])){
			arrayTo[i] = arrayFrom[i].slice();
			} else{
			arrayTo[i] = arrayFrom[i]
			}
		}
	}
	copyArray(users,newArrayUsing);

	newArrayUsing
	.forEach(function(element){  
		element[0] = `${element[0]}!`;
	});

	console.log(newArrayUsing);

//Create another new array using map that has all usernames with a "?" to each of the usernames. Example: ["john?", "becky?", ...].
//Создайте еще один новый массив, используя map, в которой все имена пользователей отмечены знаком "?" каждому из имен пользователей. Пример: ["john?", "becky?", ...].

// ф-ция копирования массива
let newArray2 = [],
	newArrayUsing2 = [];
	function copyArray(arrayFrom, arrayTo){
		for(let i=0; i<arrayFrom.length; i++){
			if(Array.isArray(arrayFrom[i])){
			arrayTo[i] = arrayFrom[i].slice();
			} else{
			arrayTo[i] = arrayFrom[i]
			}
		}
	}
copyArray(users,newArrayUsing2);

//изменение элемента в массиве
let arr = newArrayUsing2;
let newArrayUsingTwo = [];
arr
	.map(function(element){	
		element[0] = `${element[0]}?`;
		return newArrayUsingTwo.push(element);
	});
console.log(newArrayUsingTwo);

//Filter the original array of users to only include users who are on team: red.
//Отфильтруйте исходный массив пользователей, чтобы включить только пользователей, которые находятся в команде: красный.

let newArraUsersColor = users
	.filter(
		function(element){
			return  element[1] === "red";
		}
	);
console.log(newArraUsersColor);

//In filtered array find out the total score of all filtered users and print all user's data into table with <tfoot>Final summ</tfoot> tag
//В отфильтрованном массиве узнаем общий балл всех отфильтрованных пользователей и выводим все данные пользователя в таблицу с тегом <tfoot> Final summ </tfoot>

let usersTRS = [];
newArraUsersColor
	.forEach(function(user){
		// console.log(user);
		let userTDs = user
		.map(function(userName){
			return `<td>${userName}</td>`; // преобразовываем каждое значение юзера к виду <td>john</td>
		});
		let userTR = `<tr>${userTDs.join('')}</tr>`; // <tr><td>susy!</td><td>red</td><td>55</td><td>ball,eraser,pen</td></tr>
		// console.log(userTR);
		usersTRS.push(userTR); // добавляем каждый tr с юзером в один общий массив
	});
	let finalSumm = newArraUsersColor 
	.reduce(function(summ, user){
		// console.log(user[2]);
		return  summ+user[2];
	},0); //reduce возвращает только одно значение
	
//tfoot - это опоследняя колонка , общая, объеденяющая 4 строки в одну
let tfoot = `<tfoot> 
    <tr>
      <td colspan="4">Final summ: ${finalSumm}</td>
    </tr>
  </tfoot>`;
// console.log(usersTRS);

document.write(`<table border="1"> ${usersTRS.join('')}${tfoot} </table>`);
