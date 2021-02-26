// Ввести с клавиатуры a и b, где а меньше b (проверку написать кодом).
// Запустить цикл перебора от a до b с шагом h (ввод с клавиатуры).
// Посчитать сумму факториалов* простых чисел которые попадаются во время перебора.

do{
	a = +prompt('Enter a',1);
} while(isNaN(a) || a<1);

do{
	b = +prompt('Enter b, which bigger than '+a,5);
} while(isNaN(b) || b<=a);

alert('A = '+a+'. B = '+b+'.');

do{
	h = +prompt('Enter h',1);
} while(isNaN(h) || h<=0 || h>=b);

console.log(a,b,h);

for(summ=0,factorialSumm=0;a<=b;a+=h){

	prostoe = true;
	
	if(a>2){
		
		for(j=2;j<a;j++){
			console.log(`${a} / ${j} = ${a%j}`);
			
			// if(a%j === 0){
			// 	break;
			// }

			//if(a%j === 0) continue;
			
			if(a%j === 0){
				prostoe = !prostoe;
				break;
			}
		}
	}

	console.log(`${a} is Prostoe ${prostoe}`);

	// if(prostoe){
	// 	summ += a;
	// }
	summ += prostoe ? a : 0;
	// div.backgroundColor = x===10 ? 'red' : 'green';

	if(prostoe){
		for(i=1,factorial=1;i<=a;i++){
			factorial *= i;
		}
		factorialSumm += factorial;
		console.log(`factorial for ${a} = ${factorial}`);
	}

	console.log('-----');
}

console.log(summ);
console.log(factorialSumm);

// 3
// // 3%1 = 0
// 3%2 = ...
// // 3%3 = 0;

// 4

// 4%2 = 0; - !isPrime
// 4%3

// 6

// 6%2 = 0 - !isPrime
// 6%3 = 0
// 6%4 = ...
// 6%5



