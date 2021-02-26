
// let element = document.querySelector ('#hello');// вывод <div id="hello" align="center">Hello, world!</div>
// console.log(element);

// // let link = document.querySelector('a');
// // console.dir(link);

// let table = document.querySelector('#table');
// console.dir(table);

// let tableTr = document.querySelectorAll('#table > tbody > tr');
// console.dir(tableTr);
// tableTr.forEach(function(tr){
// 	tr.classList.add('first'); //первым Li дала класс
// })
// let tableTrTr = document.querySelectorAll('#table > tbody > tr > td');
// console.dir(tableTrTr);
// tableTrTr.forEach(function(tr){
// 	tr.classList.add('second'); //вторым Li дала класс
// })

// let tableTds = document.querySelectorAll('#table > tbody > tr > td > table > tbody > tr > td');
// console.dir(tableTds);//td все td первой вложенности
// //пройтись и определить в какой td не пустая
// //весь список td
// tableTds.forEach(function(td){
// 	//td все td первой вложенности
// 	console.dir(td);
// 	//длину массива children , увидим какая td не пустая
// 	// console.dir(td.children.length);//
// 	//если в td что то есть ( а именно length >0)
// 	//захожу в эту td и даю ей класс
// 	if(td.children.length>0){
// 		//td.children[0] это  #table > tbody > tr > td
// 		console.log(td.children[0]);
// 		let innerTable = td.children[0];
// 		//теперь в ЭТОЙ таблице найти первый tr последней td
// 		let tdLast = innerTable.querySelector('tr:first-of-type td:last-of-type');
// 		tdLast.classList.add('blue');

// 	}
// })

// let levelCount = document.querySelector('#levelCount');
// console.log(levelCount.value);

// let example = document.querySelector('#example');
//  console.dir(example);
//  //если нужно data-name
//  example.setAttribute('data-name','Alina');//вывод data-name="Alina"

//  //добавить data-свое название 
//  example.dataset.hello = 'privetik'; //вывод
//  for(let key in  example.dataset){
// 	 console.log(key);
//  }

// let body = document.querySelector('body');
// let example = document.querySelector('#example');

// setTimeout(function(){
// 	example.remove();

// 	console.dir(example);
// 	//append - в конец добавляет 
// 	body.append(example);
// 	// prepend - в начало body
// 	body.prepend(example);
// },1500);



//  let dataaboutBlock = document.querySelector('.example12345:nth-of-type(3)');
//  console.log(dataaboutBlock);
// 	dataaboutBlock.classList.add('blue');

//пример : динамически изменить картинку 
// let dog = document.querySelector('#dog');
// setTimeout(function(){
// 	dog.src = 'https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d'
// 	dog.classList.add('newImage');
// },1500)

//пример :
//пройтись по всем картинкам ,к-е есть в div images
//поменять всем src и добавить всем alt и добавить data-id ,к-й соответствует порядковому номеру src (1,2,3)
// let newImages = [

// 	{
// 		src: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_cool_summer_slideshow/1800x1200_dog_cool_summer_other.jpg',
// 		alt: 'Anna'
// 	},
// 	{
// 		src: 'https://i.guim.co.uk/img/media/684c9d087dab923db1ce4057903f03293b07deac/205_132_1915_1150/master/1915.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=14a95b5026c1567b823629ba35c40aa0',
// 		alt: 'Ivan'
// 	},
// 	{
// 		src: 'https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp',
// 		alt: 'Oleg'
// 	}
// ]

//в массив images
// let images = document.querySelector('.images');
// // console.dir(images);
// //первый способ - сохраняем всех его чилдренов
// let dogsImages = images.children;
// //dogsImages Это массив всех дочерних эл-в
// console.dir(dogsImages);

//второй способ

//в массив images
// let images = document.querySelectorAll('.images img');
// console.dir(images);
// //для каждой картинки меняем атрибут
// setTimeout (function(){
// 	images.forEach(function(img,index){
// 		img.src = newImages[index].src;
// 		img.alt = newImages[index].alt;
// 		// img.dataset.id = index+1; //вывод data-id="3"
// 		img.dataset.id = `dog-${index+1}`;//вывод data-id="dog-3"
// 	})

// },300)

// //Events

// let block = document.querySelector('.block');
// console.dir(block);

//эти ф-ции наз обработчик собитый - обрабатываем то что произошло
//собитие - навести мышкой
// block.onmouseover = function(event){
// 	// при наведении MouseEvent в к-м нах-ся все св-ва события которые произошли
// 	console.log(event, event.type); //event (объект) ,event.type = "mouseover"
// 	// console.log('over');
// 	// console.log(event.target);//текущий элемент - вывод  <div class="block" tabIndex=1> или this
// 	// console.log(this); //то же - те this это объект над которы м произведено это событие
// }
//собитие - убрать мышкой
// block.onmouseout = function(event){
// 	console.log(event, event.type);//event.type = "onmouseout"
// }
// function handler(event){
// 	console.log(event, event.type);
// }
//при block.onmouseover я буду запускать ф-цию handler
//событие - навести мышкой
// block.onmouseover = handler;
// //событие - убрать мышкой
// block.onmouseout = handler;
//событие внутри
// block.onmousemove = handler;
// игнорируем дочерние элементы
//отслеживает собития только основного блока 
// block.onmouseenter = handler;
// // block.onmouseleave = handler;
// block.onclick = handler;
// //двойной клик
//  block.ondblclick = handler;
 //нажатие правой кнопкой
//  block.oncontextmenu = handler;

// document.onclick = function(){
// 		console.log('hello');
// 	}

// //события к-е приходят склавиатуры
// let inputElement = document.querySelector('#inputElement');
// //работает когда вводим буквы( символы) и enter
// inputElement.onkeypress = handler;
// //работает остальные(кнопки вверх, вниз и т д )
// inputElement.onkeydown = handler;


//в инпут - при нажатии кноки с клавиатуры  стрелка вверх - alert - ArrowUp
// function handler38(event){
// 	console.log(event, event.type);
// 	if(event.keyCode === 38){
// 		alert(event.key);
// 	}
// }
// inputElement.onkeydown = handler38;

//пример запретить в инпут вводит все русские символы 
	
// let userName = document.querySelector('#userName');
// console.log(userName);

// userName.onkeypress = function(e){
// 	console.log(e);
// 	console.log(e.target.value);
// }//не показывает последний символ

// userName.oninput = function(e){
// 	console.log(e, e.type);
// 	console.log(e.target.value); // вся строка
// 	let currentValue = e.target.value;
// 	console.log(currentValue, currentValue.length);

// 	if(e.data === 'D'){
// 		//тек-ю строку разбиваем по осимвольно
// 	let arrString = currentValue.split('');
// 	//вывели этот массив
// 	console.log(arrString);
// 		//удаляем посл-й эл-т с пом-ю pop
// 		arrString.pop();// строка уже без D

// 		this.classList.add('error');

// 		setTimeout(
// 			function(){
// 				e.target.value = arrString.join('');////пересохранили новый массив
// 				e.target.classList.remove('error');
// 			},1000)
// 	}
// }


