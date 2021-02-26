
//form
//onsubmit
//onfocus
//onchange

// let userLogin = document.querySelector('#userLogin');

// let inputUserLogin = userLogin.querySelectorAll('input');
// // console.log(inputUserLogin);

// //соб-е, к-е отлавливается кнопкой submit И передает данные
// let labalesUserLogin = userLogin.querySelectorAll('label');

// userLogin.onsubmit = function(e){
// 	//нужно оостановить дефолтные события формы, это делает метод preventDefault()
// 	e.preventDefault();
	
// 	//пойдет только инпут с name=color]
// 	let selectedColor = this.querySelector('input[name=color]:checked');
// 	// console.dir(selectedColor);
// 	// console.log(selectedColor.value);
// 	//label инпута
// 	let	parentLabel = selectedColor.parentElement;// это Label  активного input

// 		//вначале очищаем все label ф-цией emptyLabels() 
// 		emptyLabels(labalesUserLogin);
// 		//текущему label добавляем backgroundColor
// 		parentLabel.style.backgroundColor = selectedColor.value;// background у label

// 	// this.style.backgroundColor = selectedColor.value;

// 	console.log(e, e.target);
// }

// function emptyLabels(labels){
// 	labels.forEach(function(label){
// 		//обнуляю значения что лежит в  label
// 		label.style.backgroundColor = null;
// 	})
// }

// let link = document.querySelector('a');
// //отлавливаю нажатие на ссылку
// link.onclick = function(e){
// 	//запрещаю нажатие на ссылку
// 	e.preventDefault();
// 	console.log(e.target.href);//вывела ссылку
// 	e.target.href = 'https://ithillel.ua/';

// 	console.dir(e.target);
// 	this.target = '_blank';

// 	//замена ссылки
// 	document.location.href = e.target.href;

	
// }

// //onfocus
// //делает фокус

// inputUserLogin.forEach(function(input){
// 	//при фокусена эти инпуты добавим класс
// 	input.onfocus = function(){
// 		this.classList.add('focus');
// 	}
// })


//onchange
//сохраняет данные ,если value  изменились
let userName = document.querySelector('#userName');
console.log(userName);

//забирать данные введеные данные user e.target.value только по событию onchange
//те тольео те данные ,к-е изменилоись, а не все те данные, что вводит user
// userName.onchange = function(e){
// console.log(e, e.target);
// console.log(e.target.value);
// }

userName.onchange = function(e){
	let currentValue = this.value;
	console.log(currentValue);

	//проверили что в троке есть @ 1:19
	//м.indexOf дает индекс currentValue
	if(currentValue.indexOf('@')===-1){
		console.log('error');
	}
	console.log(`последний эл-т: ${currentValue[currentValue.length-1]}`);
	//currentValue.length-1   =это мой последний эл-т в троке
	if(currentValue[currentValue.length-1]==='.'){
		console.log('error');
	}


}