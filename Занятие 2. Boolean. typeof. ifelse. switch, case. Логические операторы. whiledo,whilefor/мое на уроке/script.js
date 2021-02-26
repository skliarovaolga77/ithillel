// x = +prompt('Enter x',10);
// while(isNaN(x)){
// 	x = +prompt('Enter x',10);
// }
// console.log(x);

// y = +prompt('Enter y',20);
// while(isNaN(y)){
// 	y = +prompt('Enter y',20);
// }
// console.log(y);

// summ = x+y;
// console.log(summ);

// final = Math.pow(summ,3);

// document.write('Final result for argument X='+x+' and Y='+y+' is '+final);
// document.write(`Final result for argument X=${x} and Y=${y} is ${final} and ${x*y}`);


// HW2

// operation = prompt('Enter add, sub, mult, div');

// if(operation=='add' || operation == 'sub' || operation=='mult' || operation=='div'){
	
// 	x = +prompt('Enter x',10);
// 	while(isNaN(x)){
// 		x = +prompt('Enter x',10);
// 	}
// 	console.log(x);

// 	y = +prompt('Enter y',20);
// 	while(isNaN(y)){
// 		y = +prompt('Enter y',20);
// 	}
// 	console.log(y);

// 	if(operation=='add'){
// 		alert(`${x} + ${y} = ${x+y}`);
// 	} else if(operation=='sub'){
// 		alert(`${x} - ${y} = ${x-y}`);
// 	} else if(operation=='mult'){
// 		alert(`${x} * ${y} = ${x*y}`);
// 	} else if(operation=='div'){
// 		alert(`${x} / ${y} = ${x/y}`);
// 	}

// 	switch(operation){
// 		case 'add':
// 			alert(`${x} + ${y} = ${x+y}`);
// 			break;
// 		case 'sub':
// 			alert(`${x} - ${y} = ${x-y}`);
// 			break;
// 		case 'mult':
// 			alert(`${x} * ${y} = ${x*y}`);
// 			break;
// 		case 'div':
// 			alert(`${x} / ${y} = ${x/y}`);
// 			break;
// 	}

// } else{
// 	console.log('Operation not defined');
// }

// x = 10;
// y = 20;
// operation = 'ferferfer';

// switch(operation){
// 	case 'add':
// 		alert(`${x} + ${y} = ${x+y}`);
// 		//alert(x +'+' + y + '=' + (x+y));
// 		break;
// 	case 'sub':
// 		alert(`${x} - ${y} = ${x-y}`);
// 		break;
// 	case 'mult':
// 		alert(`${x} * ${y} = ${x*y}`);
// 		//alert(x +'*' + y + '=' + (x*y));
// 		break;
// 	case 'div':
// 		alert(`${x} / ${y} = ${x/y}`);
// 		break;
// 	default:
// 		alert('Operation is not defined');
// }


// x = 1;
// console.log(`before while ${x}`);

// while(x<10){
// 	//x = x+1;
// 	x += 1;
// 	console.log(`in while ${x}`)
// }
// console.log(`after while ${x}`);

// y = 10;
// do{
//  y -= 1;
//  console.log(`${y} in do-while`);
// }while(y > 0);

// console.log(y);


// x = +prompt('Enter x',10);
// while(isNaN(x)){
// 	x = +prompt('Enter x',10);
// }

// do{
// 	x = +prompt('Enter x',10);
// } while(isNaN(x));

// x = 1;
// y = 10;
// console.log(`x: ${x} before for`);
// console.log(`y: ${y} before for`);

// for(x=2,y=5; x>=2 || y>=10; x++,y--){
// 	console.log(`x: ${x} in for`);
// 	console.log(`y: ${y} in for`);
// }

// console.log(`x: ${x} after for`);
// console.log(`y: ${y} after for`);

// Array
// listOfNumbers = [10,5,27,348,459,24234,456456,234234];
// listOfChars = ['inna','oleg','ivan'];
// listOfData = ['inna',20,true,'',];

// console.log(listOfNumbers);
// console.log(listOfNumbers[2],listOfNumbers[3]);
// console.log(listOfNumbers.length);
// console.log(listOfNumbers[0] + listOfNumbers[1]);

// x0 = listOfNumbers[0];
// x1 = listOfNumbers[1];

// console.log(x0+x1);

// console.log(listOfNumbers[listOfNumbers.length-2]);

// x = 10;
// console.log(x);
// x += 10;
// console.log(x);

// arr = [10,20,30,40,-10,200,100];
// console.log(arr);

// for(index=0; index<arr.length; index++){
// 	arr[index] += 100;
// 	console.log(index, arr[index]);
// }
// console.log(arr);

// for(index=0; index<arr.length; index++){
// 	arr[index] += 200;
// 	console.log(index, arr[index]);
// }
// console.log(arr);

// x = 10;
// switch(x){
// 	case 10:
// 	case 20:
// 	case 30:
// 		console.log('ok');
// 		break;
// 	case 40:
// 		console.log('not ok');
// 		break;
// }

// arr = [10,20,30,40,-10,200,100];
// for(i=0,min=0,max=0; i<arr.length;i++){
// 	console.log(arr[i]);
	
// 	if(arr[i]>arr[max]){
// 		max=i;
// 	}

// 	if(arr[i]<arr[min]){
// 		min=i;
// 	}
// }

// console.log(`Max element: ${arr[max]}`);
// console.log(`Min element: ${arr[min]}`);

// x;
// console.log(x);

arr = [10,20,304,50,'sdfjskdf',true,100];
for(i=0,summ=0,mult=1;i<arr.length;i++){

	console.log(arr[i], typeof(arr[i]));
	
	if(typeof(arr[i]) == 'number'){
		summ += arr[i];
		mult *= arr[i];
	}

}

console.log(`Summ = ${summ}`);
console.log(`Mult = ${mult}`);
