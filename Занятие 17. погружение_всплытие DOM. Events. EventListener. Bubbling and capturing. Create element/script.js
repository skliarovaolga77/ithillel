//addEventListener

// let block = document.querySelector('.block');

// block.onclick = function(e){
// 	first(e);
// 	second(e);
// }

// function first(e){
// 	console.log('first function', e.type);
// }

// function second(e){
// 	console.log('second function', e.type);
// }

// function handler(e){
// 	console.log(e.type);
// }

// block.addEventListener('click',first);
// block.addEventListener('click',second);
// block.addEventListener('mouseenter',handler);

// setTimeout(function(){
// 	console.log('after 3 seconds');
// 	block.removeEventListener('click',first);
// },3000);

// let movie = document.querySelector('#movie');

// movie.addEventListener('click',showBanner);
// movie.addEventListener('click',consoleReport);

// movie.addEventListener('mouseenter',consoleReport);

// function showBanner(){
// 	let userChoice = confirm('Give me money');

// 	if(userChoice){
// 		movie.removeEventListener('click',showBanner);
// 		movie.addEventListener('click',downloadMovie);
// 	}
// }

// function downloadMovie(){
// 	let body = document.querySelector('body');
// 	body.append('Dowloading was started');
// }

// function consoleReport(e){
// 	console.dir(this);
// }

//mousedown, mousemove, mouseup

//event.stopPropagation();

// let first = document.querySelector('.first'),
// 	second = document.querySelector('.second'),
// 	third = document.querySelector('.third');

// first.addEventListener('click',firstHandler,true);
// first.addEventListener('click',anotherFirstFunction,false);

// second.addEventListener('click',secondHandler,true);
// third.addEventListener('click',thirdHandler,false);

// function firstHandler(e){
// 	console.log('first hadler');
// 	//e.stopPropagation();
// }

// function anotherFirstFunction(e){
// 	console.log(`anotherFirstFunction`);
// }

// function secondHandler(e){
// 	console.log('second hadler');
// }

// function thirdHandler(e){
// 	console.log('third hadler');
// 	e.stopPropagation();
// }

// function f1(){
// 	let x = 10;

// 	function f2(){
// 		console.log(x);
// 	}

// 	f2();
// }


// Drag&Drop

// function mousedownFunc(e){
// 	x = e.clientX;
// 	y = e.clientY;
// 	console.log(e.type, x,y);

// 	blockLeft = +this.style.left.replace('px',''); //0, 144px => 144
// 	blockTop = +this.style.top.replace('px',''); // 12

// 	console.log(blockLeft,blockTop);

// 	block.addEventListener('mousemove',mousemoveFunc);
// 	document.addEventListener('mouseup',mouseupFunc);
// }

// function mousemoveFunc(e){
// 	x_ = e.clientX;
// 	y_ = e.clientY;
// 	//console.log(e.type, x_,y_);

// 	//console.log(`X: ${x}, Y: ${y}`);

// 	diff_x = x_-x;
// 	diff_y = y_-y;

// 	this.style.left = `${blockLeft+diff_x}px`;
// 	this.style.top = `${blockTop+diff_y}px`;

// 	//console.log(`After X: ${x}, After Y: ${y}`);
// }

// function mouseupFunc(e){
// 	block.removeEventListener('mousemove',mousemoveFunc);
// 	document.removeEventListener('mouseup',mouseupFunc);
// }

// let block = document.querySelector('.block');

// console.log('dfvdf');

// block.addEventListener('mousedown',mousedownFunc);

//createElement

let wrapper = document.querySelector('#wrapper');

wrapper.innerHTML += '<h1>Hello, world</h1>';
let h1 = wrapper.querySelector('h1');
h1.classList.add('hello');

let newCars = [
	{
		text: 'Mini Cooper',
		sale: true,
		price: 100000
	},
	{
		text: 'Audi TT',
		sale: false,
		price: 50000
	},
	{
		text: 'Audi RS',
		sale: false,
		price: 50000
	}
];

let cars = document.querySelector('#cars');

newCars.forEach(function(car){
	let newCar = document.createElement('div');
	
	newCar.innerHTML = `<b>${car.text}</b>`;
	newCar.classList.add('car');
	newCar.dataset.name = car.text;
	newCar.dataset.sale = car.sale;
	newCar.dataset.price = car.price;

	console.dir(newCar);
	
	cars.append(newCar);

	newCar.dataset.new = 'new';

	//cars.innerHTML += `<div class="car" data-name="${car.text}"><b>${car.text}</b></div>`;
})

// let myHeading = document.createElement('h4');
// myHeading.innerHTML = 'H4 heading';
// myHeading.classList.add('anotherClass','thirdClass','sale');

// console.log(myHeading.classList);

// console.log(myHeading.classList.contains('thirdClass'));

// console.dir(h4);

//wrapper.appendChild(h4);

