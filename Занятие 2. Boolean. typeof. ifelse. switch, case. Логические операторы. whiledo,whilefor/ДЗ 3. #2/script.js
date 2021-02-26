line = '-----';
// Посчитать сумму простых чисел от 0 до 250
for ( a=0,sumNumber=0; a <=250; a++){
	isNumber = true;
	if(a>2){
		// console.log(a);
		for(j=2;j<a;j++){
			// console.log(`${a} / ${j} = ${a%j}`);
			if(a%j === 0){
				isNumber = !isNumber;// числа являются непростыми
			 	break;
			}
		}
	}
	// console.log(`${a} является простым числом ${isNumber}` );
    sumNumber += isNumber ? a : 0;
}
console.log(`сумма простых чисел ${sumNumber}`);
console.log(line);


//Вывести n чисел из ряда Фибоначчи, где n - вводится с клавиатуры.

arrayFibonacci = [0,1];
	do{
		operation = +prompt('Enter N',5);
	}while(isNaN(operation));
	
	function Fibonacci(){
		if(operation==1){
			return `ряд Фибоначчи: ${arrayFibonacci[0]}`;
		}else if(operation==2){
			return `ряд Фибоначчи: ${arrayFibonacci[0]} + ${arrayFibonacci[1]}`;
		}else
			for(i=0; i<(operation-2);i++){
				n1 = arrayFibonacci[i];
				n2 = arrayFibonacci[i+1];
				newElement = n1 + n2;
				arrayFibonacci.push(newElement);	
			}

		return `ряд Фибоначчи: ${arrayFibonacci}`;
	}
	console.log(Fibonacci());
	console.log(line);


// Ввести с клавиатуры a и b, где а меньше b (проверку написать кодом).
	do{
		a = +prompt('Число a',1);
	}while(isNaN(a) || a>2);

	do{
		b = +prompt('Число b ,больше чем ' + a, 5);
	}while(isNaN(b) ||  b<=a );

	alert(' a = '+a+', b = '+b+'');// вывод   a = 1, b = 5
	//  Запустить цикл перебора от a до b с шагом h (ввод с клавиатуры).
	do{
		h = +prompt('Число h',1);
	}while(isNaN(h) || h<=0 || h>=b);

	// console.log(a,b,h);
//перебираемот 1 до 10
//   Посчитать сумму факториалов* чисел которые попадаются во время перебора.
//Добавляем в for sum=0
for(sum=0,factorialSum=0;a<=b;a+=h){

	isNumber = true;// все числа являются простыми

	//начинаем работать с а
	//проверять а 1,2 нет смыла , остаток от деления 0
	if(a>2){
		//тогда начинаем перебират ь a
		// console.log(a);//вывод все цифры от 3 до 10
		//начинаем работать с первой цифрой 3
		//j входящее число, условие j<a,lj,добавляем +1
		for(j=2;j<a;j++){
			//если у a будет остаток от деленияj будет = 0 
			//наше число уже не является простым 
			// a%j === 0;
			// console.log(`${a} / ${j} = ${a%j}`);
			//останавливаем цикл если число уже оказалось не простым ( =0),напр вывод 4 / 2 = 0  
			//и с числом 4 не работаем, переходим к перебору 5
			//возвращаемся в цикл, начинаем работать со следующим числом 
			//continue
			if(a%j === 0){
				isNumber = false;// числа являются непростыми
				break;
			}
			// if(a%j === 0) break; если одно слово (break) ,можно записать и так 
			//мы через переменную isNumber со значением true или false после цикла получем
			// вывод числа с описанием 5 является простым числом true
			//или 6 является простым числом false
		}

	}
	// console.log(`${a} является простым числом ${isNumber}` );
	// если число простое в переменную sum ссумирум само число
	// if(isNumber){
	// 	sum +=a;
	// }
	sum += isNumber ? a : 0;

	if(isNumber){
		for(i=1,factorial=1;i<=a;i++){
			factorial *= i;
		}
		factorialSum += factorial;
		// console.log(`факториал для ${a} = ${factorial}`);
	}
}
console.log(` Cумма факториалов: ${factorialSum}`);









