			
arrA = [10, 'hello', undefined, true, 20, 3, -15, 'world'];
arrB = [1, 2, 23, -105];
arrC = [1, 2, 23, 10000,365,189];
	
	console.log(arrA);
				
//  chain methods 
//отфильтровать в тип number - метод filter
//преобразовать отфильтрованные элементы - метод map
//вывод на страницу - метод 

let resultArrAarrA = arrA
	.filter(
		function(element){
			return typeof element ==='number' || typeof element ==='boolean';//вывод [10, 20, 3, -15]
			// return typeof element ==='number';
		}//получу массив отфильтрованных данны по типу number
	)
	//к отфильтрованным значениям сумирование 
	.map(
		function(element){
			return element+10;//вывод [20, 11б 30, 13, -5]
		}
	)
	//вывод  на страницу
	.forEach(
		function(element){
		document.write(`<div>${element}</div>`);
		}
	)
// console.log(resultArrAarrA);



console.log( '-------------------');
//еще один пример
//массив из массивов
// фильтр не страше 18 - метод filter
//фильтр - не замужем - метод filter
//измениние элемента массива - метод map
//вывод  - метод
let users = [ 
	['oleg', 1994 , true],
	['ira', 1971 , true],
	['vera', 1980 , false],
	['ivan', 2010 , true],
];

let filterUsers = users
	.filter(function(element){
	console.log(element);
	//возвращем того users у которого под вторым значением >18  
	//и третий  значение true ( вопрос -замужем или нет)
	return element[1]>18 && element[2] === true;
	})
	//измениние элемента массива
	// index 
	.map(function(element,index){
		if(index%2 !== 0){
			element.push(element[0]+' hello');
		}
		return element;
	})
	.forEach(function(element){
		console.log(element.join(' '));
	})
	// console.log(filterUsers);
console.log( '-------------------');


