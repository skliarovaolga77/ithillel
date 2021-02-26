			
arrA = [10, 20, 3, -15];
arrB = [1, 2, 23, -105];
arrC = [1, 2, 23, 10000,365,189];
	
	// console.log(arrA);
				
// arrA
// 	.filter(function(element){return element>0})
// 	.forEach(function(element){console.log(element)});

// map - преобразовать каждый элемент
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let mapResult = arrA.map(cbMap);

// function cbMap(element,index,number){
// 	// console.log(element,index,number);
// 	return element*10;//преебирает и сразу сохранянет эл-ты *10
// }	
//Новый массив с преобразованными данные
// console.log(mapResult);

console.log(`arrB :  ${arrB}`);
let mapResultB = arrB.map(cbMap);

function cbMap(element,index,number){
	// console.log(element,index,number);
	console.log(`mapResultB :  текущий эл-т: ${element}, следующий эл-т ${arrB[index+1]}`);
	return index%2 === 0 ? element*10 : element;//если индекс текущего элемента парный
}	
//Новый массив с преобразованными данные
console.log(`mapResultB :  ${mapResultB}`);

console.log(`arrC :  ${arrC}`);
let mapResultC = arrC.map(cbMap);

function cbMap(element,index,number){
	// console.log(element,index,number);
	//если текущий индекс равен длине нашего массива , те index === (arrC.length-1)
	// будем выводит пустуб строку , т е `` 
	//иначе ...
	let nextElement = index === (arrC.length-1) ? `` : `следующий эл-т: ${arrC[index+1]}`;
	let nextIndex = index === (arrC.length-1) ? `` : `следующий индекс: ${index+1}`;
	console.log(`mapResultС :  текущий эл-т: ${element}, ${nextElement}`);
	console.log(`mapResultС :  текущий индекс: ${index}, ${nextIndex}`);
	return index%2 === 0 ? element*10 : element;//если индекс текущего элемента парный
}	
//Новый массив с преобразованными данные
console.log(`mapResultС :  ${mapResultC}`);