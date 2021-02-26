


// DOM

// console.dir(document);

// console.dir(document.all);

// for(let key in document.all){
// 	console.dir(document.all[key]);
// }

let myH1 = document.querySelector('h1');
console.dir(myH1);

//заменили на привет из html <h1>Hello</h1>
// myH1.innerText = 'Привет';
// setTimeout(function(){
// 	myH1.innerHTML = '<h1>Pri<em>vet</em>ik</h1>';
// }, 1000);

setTimeout(function(){
	myH1.outerHTML = '<h1 class="new">Pri<em>vet</em>ik</h1>';
}, 1000);

let myP = document.querySelectorAll('p');
// console.dir(myP);

//меняем только первый P
// setTimeout(function(){
// 	myP.innerHTML = 'Hello, <b>world!</b>';
// },1000);

//пройдемся по всем p и применим 
myP.forEach(function(p,index){
	setTimeout(function(){
		p.innerHTML = 'Hello, <b>world!</b>';
	},1000+index*1000);
})

let secondP = document.querySelector('p:nth-child(2)');
// secondP.style.backgroundColor = 'red';
// secondP.style.color = 'white';
// secondP.style.padding = '10px';
secondP.className = 'p--bright';
//замена св-в css 
// setTimeout(function(){
// 	// secondP.style.backgroundColor = 'blue';
// 	// secondP.style.color = 'black';
// 	// secondP.style.padding = '15px';
// 	// secondP.className = 'p--dark';
// 	secondP.classList.add('p--border');

// }, 2000);
// //когда много менять, добавляем в стили класс , напр .p--bright
// //удалим прежний класс p--bright
// setTimeout(function(){
// 	secondP.classList.remove('p--bright');
// 	secondP.style.padding = '25px';
// }, 2000);

// //удалим прежний класс p--bright
// //contains вывод false
// setTimeout(function(){
// 	console.log(secondP.classList.contains('p--bright'));// вывод false
// }, 2000);

//в html класс hello
let myPhello = document.querySelector('#hello');

setInterval(function(){
	//класс again в css
	myPhello.classList.toggle('again');
},1000);
