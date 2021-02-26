//ф-ция заполнения радомным числом				
				
function generateArray(length=10, min=0, max=100){				
	// console.log(arguments);			
	let arr = new Array(10);			
	for(let i=0; i<arr.length; i++){			
		arr[i] = Math.floor(Math.random() * (max - min)) + min;		
	}			
	return arr;			
}				
let arrA = generateArray(10, -10),				
	arrB = generateArray(12);			
				
// console.log(arrA);				
				
//ф-ция с использованием forEach				
function cbForEach(element,index,array ){				
	console.log(`index ${index} для элемента = ${element}`);			
				
}				
arrA.forEach(cbForEach);				
// console.log('______');				
arrA.forEach(cbForEach);				
				
//filter метод возвращает элементы массива, для которых условие истинно.				
// Отсеивание элементов по определенном критерию.				
//приходят только три эл-та element, индекс, ссылка на массив				
				
				
newarrB = arrB.filter(cbfilter);				
function cbfilter(element,index,array){				
	//возвращает только если ответ на вопрос true			
	// console.log(element,index,array);			
	//вывод если element > 10 ,то true иначе false			
	//return element > 10 ? true : false			
	return element>10;			
}				
//созадлся новый массив и сохранятся все значения после перебора , которые отвечают вопросу элемент больше 10				
console.log(newarrB);				
				
				
//filter возвращает новый массив				
//!!!!!!!!!!!!!!!!!!!!!!!!!				