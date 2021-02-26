function generateArray(length=10, min=0, max=100){
	let arr = new Array(10);
	for(let i=0; i<arr.length; i++){
		arr[i] = Math.floor(Math.random() * (max - min)) + min;
	}
	return arr;
}

let arrA = generateArray(10, -10),
	arrB = generateArray(12);

console.log(arrA);

// Перебирающие методы массивов в js
// Функции высшего порядка – которые вызывают внутри себя callback-функции

// forEach – метод перебора массива.

// for(let i=0; i<arrA.length; i++){
// 	arrA[i] *= 10; 
// }

// function cbForEach(element, index, array){
// 	console.log(`Index ${index} for element = ${element}`);
// }

// arrForEach = arrA.forEach(cbForEach);
// console.log(arrForEach);
// console.log('----');
// arrB.forEach(cbForEach);

//filter метод возвращает элементы массива, для которых условие истинно.
// Отсеивание элементов по определенном критерию.


// newArr = arrA.filter(cbFilter);

// function cbFilter(element, index, arr){
// 	// console.log(element, index, arr);
// 	return element>10;
// }

// console.log(newArr);

// arrA
// 	.filter(
// 		function(element){
// 			return element>0
// 		}
// 	)
// 	.filter(function(element){return element>10})
// 	.forEach(function(element){console.log(element)});

// map - преобразовать каждый элемент

// let mapResult = arrA.map(cbMap);

// function cbMap(element, index, array){
// 	// console.log(element, index, array);
// 	let nextElement = index === (array.length-1) ? `` : `next element: ${array[index+1]}`;
// 	console.log(`current element: ${element}, ${nextElement}`);
// 	return index%2 === 0 ? element*10 : element;
// }
// console.log(mapResult);

// -- chain methods ---

// let arrC = [10,true,undefined,100,200,'hello, world'];
// console.log(arrC);

// let result = arrC
// 	.filter(
// 		function(element){
// 			return typeof element === 'number' || typeof element === 'boolean';
// 		}
// 	)
// 	.map(
// 		function(element){
// 			return element+10;
// 		}
// 	)
// 	.forEach(
// 		function(element){
// 			document.write(`<div>${element}</div>`);
// 		}
// 	)

// console.log(result);

// User [name, age, isMarried]

// let users = [
// 	['Andriy',19,false],
// 	['Oleg',23,true],
// 	['Inna',20,false],
// 	['Anna',18,false],
// 	['Ivan',56,false]
// ];


// let filteredUsers = users
// 	.filter(function(element){
// 		// console.log(element);
// 		return element[1]>18 && element[2] === false
// 	})
// 	.map(function(element, index){
// 		if(index%2 !== 0){
// 			element.push(element[0]+`, hello!`);
// 		}
// 		return element;
// 	})
// 	.forEach(function(element){
// 		console.log(element.join(' '));
// 	})

// -- example map, forEach --

// let countArray = +prompt('Please, enter count of trs'),
// 	allArrays = [];

// for(let i=0; i<countArray; i++){
// 	allArrays.push(generateArray());
// }
// console.log(allArrays);

// finalTable = allArrays
// 	.map(function(el){
// 		return generateTR(el);
// 	})
// 	.join('');

// function generateTR(arr){
// 	let tds = arr
// 				.map(function(element){
// 					return `<td>${element}</td>`;
// 				})
// 				.join('');
// 	return `<tr>${tds}</tr>`;
// }

// document.write(`<table>${finalTable}</table>`);

// every, some – отсеять по определенному критерию, возвращает boolean.
// Функции предикаты – возвращают буленовские значения.


// let arrD = [10,20,30,true,50];

// let result = arrD.every(function(element){
// 	return typeof element === 'number';
// })

// console.log(result);

// if(x==10 && y==10)
// if(x==10 || y==10)

// let animals = [
// 	['cat'],
// 	['dog', true],
// 	['fox']
// ];

// let everyResult = animals
// 						.every(function(element){
// 							return element[1] !== undefined;
// 						});
// console.log(`Method every: ${everyResult}`);

// let someResult = animals
// 						.some(function(element){
// 							return element[1] !== undefined;
// 						});
// console.log(`Method some: ${someResult}`);


// let arrayOfNumbers = [10,234,true,123],
// 	// isOnlyNumbers = true,
// 	summ = 0;

// for(let i=0; i<arrayOfNumbers.length; i++){
// 	if(typeof arrayOfNumbers[i] !== 'number'){
// 		isOnlyNumbers = false;
// 		break;
// 	}
// }

// let isOnlyNumbers = arrayOfNumbers
// 						.some(function(element){
// 							console.log(element);
// 							return typeof element === 'number'
// 						});

// if(isOnlyNumbers){
// 	for(let i=0; i<arrayOfNumbers.length; i++){
// 		summ += arrayOfNumbers[i];
// 	}
// 	console.log(summ);
// }

// if(secondArgExist){
// 	let filteredData = animals
// 		.filter(function(element){
// 			return element[1];
// 		})

// 	console.log(filteredData);
// }


// break in cb functions;

// let arrF = [123,345,567,234,true,123];

// for(let i=0; i<arrF.length; i++){
// 	console.log(arrF[i]);
// 	if(typeof arrF[i] !== 'number') continue;
// 	console.log('---');
// }

// arrF
// 	.map(function(element){
// 		console.log(element);
// 		if(typeof element !== 'number') break;
// 		return element;
// 	})


// reduce (сокращать) - метод, который позволяет что-то вычислять и между вычислениями сохранять какое-то промежуточное значение.