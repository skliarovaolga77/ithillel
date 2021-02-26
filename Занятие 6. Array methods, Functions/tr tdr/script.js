//таблица
// вывести в таблицу
//td - строка

//ф-ция заполнения радомным числом					
let countArray = +prompt ('сколько нужно колонок?'),
	allArrays = [],
	arrA = generateArray(10, -10),				
	arrB = generateArray(12);		
function generateArray(length=10, min=0, max=100){				
	// console.log(arguments);				
		let arr = new Array(10);				
		for(let i=0; i<arr.length; i++){				
		arr[i] = Math.floor(Math.random() * (max - min)) + min;				
		}				
		return arr;				
	}				
				
// console.log(arrA);	

function generateTR(arr){
	//преобразовываю все в td
	let tds = arr
				.map(function(element){
					return `<td>${element}</td>`;
				})
				.join(''); 
		//возвращаю tr
		return `<tr>${tds}</tr>`;
}

for(let i=0; i<countArray; i++){
	let arr = generateArray();//вызываю ф-цию создания массива
	allArrays.push(arr); //данные в массив
}

console.log(allArrays);//вывод -массив сформированный  user

//работаем с массивом, нужно преобразовать в tr td
let finalTable = allArrays //будет находиться массив tr
	.map(
		function(element){
			// console.log(element);
			return generateTR(element);
		})
		//склеить строки между собой
		.join('')
	console.log(finalTable);
	//все засунуть в таблицу 
	document.write(`<table>${finalTable}</table>`);


//спрашиваем у user сколько колонок нужно
//прошлись циклом от 0 до этого числа , чт ополучили 
//сформировали столько массивов  с помощью ф-ции generateArray (ф-ция заполнения радомным числом	 )
//все созданные массивы асунули в allArrays (allArrays.push(arr)
//прохожусь по элемантам массива, а эл массива это созданный массив 
//и для каждого массива строка 40
//преобразовывем массив в tr, который состоит из td - метод map 41 строка
// все tr склеиваем между собой - метод join
// и  таблицу table - строка 50
