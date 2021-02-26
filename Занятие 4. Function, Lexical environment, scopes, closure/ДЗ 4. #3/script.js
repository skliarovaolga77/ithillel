
//Функция вывода max, min значений
function getMaximumValue(nameValue){

	for(i=0,min=0,max=0; i<nameValue.length;i++){

		if(nameValue[i]>nameValue[max]){
		max=i;
		}
		
		if(nameValue[i]<nameValue[min]){
		min=i;
		}
	}
	
	console.log(`Max element: ${newArrB[max]}`);
	console.log(`Min element: ${newArrB[min]}`);
}
//Функция создания массива радомных чисел
function generalArray(arrayName, max=20, min=7){

	for(i=0; i<arrayName.length; i++){
		//формируем рандомное число
		arrayName[i] = Math.floor(Math.random() * (max - min) + min);
	}
	return;
}

//Функция проверка всеx числа на простоту
function Prostoe(ProstoeValue){
	for(i=0,min=0,max=0; i<ProstoeValue.length;i++){
		// console.log(ProstoeValue[i]);
		if(ProstoeValue[i]>ProstoeValue[max]){
			max=i;
		}
	
		if(ProstoeValue[i]<ProstoeValue[min]){
			min=i;
			}
		}
	
	console.log(`Max element: ${ProstoeValue[max]}`);
	console.log(`Min element: ${ProstoeValue[min]}`);
	
}

link = ('---------------------');

//1.Создать массивы А и В. 
//Заполнить случайными числами.
//Найти и вывести в консоль все элементы, которые повторяются в массивах А и Б.
arrA = new Array(10);
arrB = new Array(5);

generalArray(arrA);//max=20,min=7
generalArray(arrB,20,15);//max=20,min=15
// generalArray(new Array(20));//можно сразу новый массив

//Найти и вывести в консоль все элементы, которые повторяются в массивах А и Б.
for(indexA=0; indexA<arrA.length; indexA++){
	// console.log(arrA[indexA]);
	
	for(indexB=0; indexB<arrB.length; indexB++){
		if(arrA[indexA] === arrB[indexB]){
			console.log(`${arrA[indexA]} = ${arrB[indexB]}`);
		}
	}
}
// console.log(arrA,arrB);
console.log(link);

//2.Создать новый массив А размерностью n.
// Заполнить случайными числами в любом диапазоне. Например A = [23,1,2,52,5,34,23,6,246,436];
//проверить все числа на простоту, и найденные простые числа сохранить в новый массив B.
//в полученному массиве B найти максимальное и минимальное число.

newArrA = [5,8,23,36,258,30,202,26];
newArrB = [];

function newElement(variable){
	//проверка все числа на простоту
	for(i=0; i<variable.length; i++){
		isNumber = true;
		// console.log(variable[i]);
		if(variable[i]>2){
			for(j=2;j<variable[i];j++){
				// console.log(`${newArr[i]} / ${j} = ${i%j}`);
				if(variable[i]%j === 0){
					isNumber = !isNumber;
					break;
				}
				
			}
		}
		// console.log(`${variable[i]} является простым числом ${isNumber}`);
		//найденные простые числа сохранить в новый массив B.
		if(isNumber){
			newArrB.push(variable[i]);
		}
	}
	// return; // можно не писать 

}
	newElement(newArrA);
	console.log(newArrA);
	console.log(link);
	console.log(newArrB);
	console.log(link);
	//в полученному массиве B найти максимальное и минимальное число.
	getMaximumValue(newArrB);
	console.log(link);


	//Создать новый массив А размерностью n. Элементы массива между min -- max записать в новый массив B.

	massivNewA = new Array(20);
	massivNewB = [];

	generalArray(massivNewA);
	console.log(massivNewA);

	//Элементы массива между min -- max записать в новый массив B.
	massivNewB = massivNewA.splice(min,max);
	console.log(massivNewB);
	console.log(link);

	//Создать новый массив A размерностью n. В нем найти и поменять местами min и max.

	massivArray = new Array(10);
	generalArray(massivArray);
	console.log(massivArray);
	Prostoe(massivArray);
	ProstoeMax = massivArray[min];
	massivArray[min] = massivArray[max];
	console.log( `min = ${massivArray[min]}`);
	massivArray[max] = ProstoeMax;
	console.log( `max = ${massivArray[max]}`);
