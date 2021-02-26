//захват и перетаскивание блока в любое место
// Drag&Drop
//навешиваем событие на мышку 
//перетаскивать эл-т по блоку 
//собитие mouseup 

let block = document.querySelector('.block');
//в момент нажатия с мышки - mousedown
//навешиваем событие на мышку ф-цию mouseDownFunc,отлеживание за нашим блоком
block.addEventListener('mousedown',mouseDownFunc);

//ф-ция нажать на мышку и запомнить где нах-ся блок
// 1. нашли координаты x и y,
// 2. сохранили нахождения блока в переменную blockLeft и blockTop в момент нахождения
function mouseDownFunc(e){
	console.log(e,e.type);
	// clientX и clientY положение мышки в момент нажатия
	// 1.
	x = e.clientX;
	y = e.clientY;
	console.log(`x:${x}`);//координаты
	console.log(`y:${y}`);

	// 2. взяли местонахождение нашего блока 
	//если там есть значения , если ничего нет 
	//забираем значение blockLeft и преобразуем его в число
	blockLeft = +this.style.left.replace('px', '');
	blockTop = +this.style.top.replace('px', '');

	block.addEventListener('mousemove',mouseMoveFunc);
	//в момент снятия с мышки - mouseup
	//навешиваем событие на мышку ф-цию mouseDownFunc,к-я выводит координаты
	document.addEventListener('mouseup',mouseUpFunc);

}

// в момент движения мышки
//ф-ция к-я будет срабатывать когда что то делать внутри блока
function mouseMoveFunc(e){
	// console.log( e.type);
	x_after = e.clientX;
	y_after = e.clientY;
	
	//разница где оказался блок после перемещения и где был вначале = diff_x
	diff_x = x_after - x;
	diff_y = y_after - y;

	//на сколько передвинуть блок по left и по top
	this.style.left = `${blockLeft+diff_x }px`;
	this.style.top = `${blockTop+diff_y}px`;

}

//ф-ция происходит ,когда мышку сняли с блока
//сняли mouseMoveFunc(что блок не ходил за мышкой)
function mouseUpFunc(e){

	//mousemove событие внутри блока
	block.removeEventListener('mousemove',mouseMoveFunc);
	document.removeEventListener('mouseup',mouseUpFunc);
}

