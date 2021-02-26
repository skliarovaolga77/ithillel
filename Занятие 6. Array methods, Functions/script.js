// HW1

// function f1(){
// 	// debugger;
// 	// console.log(arguments);

// 	let numbersArray = [];
// 	let functionsArray = [];

// 	for(let i=0; i<arguments.length; i++){
// 		// console.log(`${arguments[i]} type = ${typeof arguments[i]}`);
// 		if(typeof arguments[i] === 'number'){
// 			numbersArray.push(arguments[i]);
// 		} else if(typeof arguments[i] === 'function'){
// 			functionsArray.push(arguments[i]);
// 		}
// 	}

// 	// console.log(numbersArray);
// 	// console.log(functionsArray);

// 	let summResult = summ(numbersArray);
// 	// console.log(summResult);

// 	for(let i=0; i<functionsArray.length; i++){
// 		console.log( functionsArray[i](summResult) );
// 	}

// 	return `Result for function Summ: ${summResult}`;
// }

// function summ(){
// 	// debugger;
// 	let summ = 0;
// 	for(let i=0; i<arguments[0].length;i++){
// 		summ += arguments[0][i];
// 	}
// 	return summ;
// }

// function multiply(value){
// 	// debugger;
// 	return `Result for function Multiply: ${value*10}`;
// }

// function power(value){
// 	// debugger;
// 	return `Result for function Power: ${Math.pow(value,3)}`;
// }

// console.log( f1(100,'hello',200,400,123,multiply,300,400,power,500) );


// HW2

// let arrA = [10,20,true,'hello',30],
// 	arrB = [40,true,'hello',50,60],
// 	arrC = [100,true,'hello',200,300];

// function getSumm(){
// 	console.log(arguments[0]);
// 	let numbersArray = getNumersFromArray(arguments[0]),
// 		summ = 0;

// 	for(let i=0; i<numbersArray.length; i++){
// 		summ += numbersArray[i];
// 	}

// 	console.log(summ);
// 	return summ;
// }

// function getNumersFromArray(arr){
// 	let numbersArray = [];
	
// 	for(let i=0; i<arr.length; i++){
// 		if(typeof arr[i] === 'number'){
// 			numbersArray.push(arr[i]);
// 		}
// 	}
// 	console.log(numbersArray);
// 	return numbersArray;
// }

// function getArrayWithBiggerSumm(){
// 	let arraysResult = [];

// 	for(let i=0; i<arguments.length; i++){
// 		arraysResult.push([getSumm(arguments[i]), arguments[i]]);
// 		console.log('---');
// 	}

// 	console.log(arraysResult);
	
// 	let indexOfMaxValue = getMaxValue(arraysResult);

// 	console.log(`indexOfMaxValue: ${indexOfMaxValue}`);

// 	return arraysResult[indexOfMaxValue][1];
// }

// function getMaxValue(arr){
// 	let max = 0;
// 	for(let i=0; i<arr.length; i++){
// 		if(arr[i][0] > arr[0][0]){
// 			max = i;
// 		}
// 	}
// 	return max;
// }

// let finalResult = getArrayWithBiggerSumm(arrA, arrB, arrC);
// console.log(finalResult);


// Spread example

// function foo(...myFavList){
// 	console.log(myFavList);

// 	myFavList.push(10000);
// }

// foo(10,123,345,57,234);

// -- Find max elements ina arrays -- 

// let arrA = [10,20,304],
// 	arrB = [1000,20,304],
// 	arrC = [1000,200000,304],
// 	arrD = [1000,200000,5000004];

// function getMaxElement(arr){
// 	console.log(arr);
// 	let max = 0;
	
// 	for(let i=0; i<arr.length; i++){
// 		if(arr[i] > arr[max]){
// 			max = i;
// 		}
// 	}
// 	console.log(arr[max]);
// 	return arr[max];
// }

// function getMaxElementsInArrays(...arrays){
// 	console.log(arrays);

// 	let maxElements = [];

// 	for(let i=0; i<arrays.length; i++){
// 		maxElements.push(getMaxElement(arrays[i]));
// 		console.log('---');
// 	}

// 	console.log(maxElements);
// 	return maxElements.join('; ');
// }

// console.log( getMaxElementsInArrays(arrA,arrB,arrC,arrD) );


// -- HW3 --
// Реализовать функцию 'copy(list)' по копированию массива.
// Предусмотреть возможность передачи вторым аргументом функции.
// При копировании массива – функция применяется к каждому элементу копируемого массива.
// newList = copy(list, function(value){ return value*10; })

// let arr = [10,20,304,'hello',undefined,true, false,1000];
// console.log(arr);

// function copy(list,someFunc){
// 	// let myArray = [...list];
// 	let myArray = list.slice();
// 	console.log(myArray);

// 	if(typeof someFunc === 'function'){
// 		for(let i=0; i<myArray.length; i++){
// 			myArray[i] = someFunc(myArray[i]);
// 		}
// 	}
// }

// copy(arr,modifyElement);

// function modifyElement(value){
// 	return value*10;
// }

// Перебирающие методы массивов в js
// Функции высшего порядка – которые вызывают внутри себя callback-функции

// forEach – метод перебора массива.


// filter метод возвращает элементы массива, для которых условие истинно.
// Отсеивание элементов по определенном критерию.


// map - преобразовать каждый элемент


// every, some – отсеять по определенному критерию, возвращает boolean.
// Функции предикаты – возвращают буленовские значения.

// reduce (сокращать) - метод, который позволяет что-то вычислять и между вычислениями сохранять какое-то промежуточное значение.