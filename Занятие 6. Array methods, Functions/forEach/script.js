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
					
	console.log(arrA);				
					
	//calback функция- это ф-ция,к-я нах в др-й ф-ции				
	//ф-ция с использованием forEach				
	// forEach – метод перебора массива.				
	//самостоятельно запускает цикл				
	// в круглых скобках что м.forEach делает с каждым эл-том нашего массива				
	//т е ставим ф-цию, к-я будет работать с каждым эл-м нашего массива				
	//приходят только три эл-та				
	//первый ccылка на эл-т - element				
	// второй - индекс - если с этими эл-ми не работает то и не записываем				
	//третий - это ссылка на массив - если с этими эл-ми не работает то и не записываем				
					
	//ф-ция с использованием forEach				
					
	function workWithEachElement(element,index){				
	element *=10;//каждый эл-т *10				
	document.write(`<p>'значение элемента массива *10 = '${element}</p>`);				
					
	}				
	console.log(arrA);//вывод эл-ты массива *10				
	arrA.forEach(workWithEachElement);//calback функция- это ф-ция,к-я нах в др-й ф-ции				
					
					
	//пример использования forEach				
	let nomber = [1,5 ,25];				
	let number = [100, 5 ,25];				
					
	nomber.forEach(				
	function(element){				
	document.write(`<p>'значение массива nomber ' ${element}</p>`);				
	});//вывод на страницу 1,5,25				
					
	number.f forEach(				
	function(element,index,number){				
	document.write(number.join('; '));				
	});//вывод на страницу 100; 5; 25100; 5; 25100; 5; 25				
					
	//ф-ция с использованием forEach				
	function cbForEach(element,index,array ){				
	console.log(`index ${index} для элемента = ${element}`);				
					
	}				
	arrA.forEach(cbForEach);				
	console.log('______');				
	arrA.forEach(cbForEach);				
	//вывод		