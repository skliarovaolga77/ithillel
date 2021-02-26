//Написать скрипт, который добавит класс `last` всем последним li в группах.

//Написать функцию setFirstItemClassName(level),
// где level - это номер уровня вложенности, в котором нужно произвести изменения. 
//Функция setFirstItemClassName должна установить первому тегу группы - класс `first-item`

//* при добавлении классов - должен изменится цвет фона на красный(first) и зеленый(last), с анимацией - задержка 2 секунды

// let myLi = document.querySelectorAll('li');
// console.dir(myLi);

function setFirstItemClassName(level) {
	let myLiFirst = document.querySelectorAll(level),
	
		myLiLast = document.querySelectorAll('li:nth-of-type(5)');

	setTimeout(function () {
		myLiLast.forEach(function (li) {
			li.classList.add('last');
		})
		myLiFirst.forEach(function (li) {
			li.classList.add('first-item'); //первым Li дала класс
		})
	}, 2000);

}

setFirstItemClassName('.root > li> ul > li:first-of-type');