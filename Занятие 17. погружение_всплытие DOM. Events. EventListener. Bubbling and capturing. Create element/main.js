//добавить и удалить событие
//addEventListener
//removeEventListener
//захват и перетаскивание эл-в в любое место
//создание элемента

// let block = document.querySelector('.block');

// function first(e){
// 	console.log('first function', e.type);
// }

// function second(e){
// 	console.log('second function', e.type);
// }

// function handler(e){
// 	console.log(e.type);
// }

// block.addEventListener('click',first);//выз-ть ф-цию first, когда click на block
// block.addEventListener('click',second);
// block.addEventListener('mouseenter',handler);//событие при наведении мышкой

// setTimeout(function(){
// 	console.log('after 3 seconds');
// 	block.removeEventListener('click',first);
// },3000);

//пример
// let movie = document.querySelector('#movie');
// console.log(movie);
// movie.addEventListener('click',showBanner);

// function showBanner(){
// 	let userChoice = confirm('Give me money');
// 	console.log(userChoice);
// 	//если true ( согласился)
// 	if(userChoice){
// 		movie.removeEventListener('click',showBanner);
// 		//добавим ф-цию downloadMovie
// 		movie.addEventListener('click',downloadMovie);
// 	}
// }

// function downloadMovie(){
// 	document.write('процесс загрузки начался');
// }

//создание элемента и вывод его на страничку
