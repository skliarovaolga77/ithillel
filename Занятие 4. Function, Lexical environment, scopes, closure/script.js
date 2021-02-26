// -- variables, array ---

// a = [];
// a.length = 10;

// b = new Array(20);

// function createArray(nameOfArray=[], min=10, max=20){

// 	for(index=0; index<nameOfArray.length; index++){
// 		nameOfArray[index] = Math.floor(Math.random() * (max - min) + min);
// 	}

// }

// createArray(a);
// createArray(b,30,50);

// createArray();


// a = [10,11,12,13];
// b = [10,30,10,228374,10];

// console.log(a);
// console.log(b);

// for(indexA=0; indexA<a.length; indexA++){
// 	console.log(a[indexA]);
	
// 	for(indexB=0; indexB<b.length; indexB++){
// 		// a[i] === b[j]
// 		//console.log(`${a[indexA]}, ${b[indexB]}, ${indexB}`);
// 		if(a[indexA] === b[indexB]){
// 			console.log(`${a[indexA]}, ${b[indexB]} = equels`);
// 		}
// 	}
// }

// -- second HW ---

// massivA = new Array(30);
// massivB = [];

// createArray(massivA);
// console.log(massivA);

// for(i=0;i<massivA.length;i++){

// 	isPrime = true;

// 	for(j=2; j<massivA[i]; j++){
// 		if(massivA[i]%j === 0){
// 			isPrime = false;
// 			break;
// 		}
// 	}

// 	if(isPrime){
// 		massivB.push(massivA[i]);
// 	}
	
// 	// if(massivA[i]%2 === 0){
// 	// 	massivB.unshift(massivA[i]);
// 	// }

// }

//massivB = [10,6,9,11,2,3];

// console.log(massivB);

// for(i=0,max=0,min=0; i<massivB.length; i++){

// 	// console.log(`indexOfMaxElement: ${max}, value of max Element: ${massivB[max]}`);
// 	// console.log(`indexOfMinElement: ${min}, value of min Element: ${massivB[min]}`);
	
// 	if(massivB[i]>massivB[max]){
// 		max = i;
// 	}

// 	if(massivB[i]<massivB[min]){
// 		min = i;
// 	}
// }

// massivB[2] = -1;
// massivB[4] = 13;

// prevMin = massivB[2];

// massivB[2] = massivB[4];
// massivB[4] = prevMin;


// -- exmample ---

// massivA = [1,2,3,4,5];
// massivB = [1,2,3,4];

// function getMiddleElements(array){
// 	// isEven = false;
	
// 	// if(array.length%2 === 0){
// 	// 	isEven = true;
// 	// }

// 	isEven = (array.length%2 === 0) ? true : false;

// 	middleIndex = Math.floor(array.length/2);
	
// 	// if(isEven){
// 	// 	middleIndex = middleIndex-1;
// 	// }

// 	middleIndex = isEven ? middleIndex-- : middleIndex;

// 	countOfElements = isEven ? 2 : 1;
	
// 	// if(isEven){
// 	// 	countOfElements = 2;
// 	// } else{
// 	// 	countOfElements = 1;
// 	// }

// 	finalResult = array.splice(middleIndex, countOfElements);
// 	return finalResult;
// }

// console.log(getMiddleElements(massivA));
// console.log(getMiddleElements(massivB));

// --- several return ---

// function foo(x){
// 	if(x<=10){
// 		return 'ten';
// 		console.log('hello');
// 		return 'ten again';
// 	} else{
// 		return 'not ten';
// 	}
// }

// console.log(foo(10));

// global, local

// x = 10;

// function modifyVariable(y,x=30){
// 	// debugger;
// 	window.x = 50;
// 	return y*10;
// }

// console.log( modifyVariable(x) );

// console.log(x);

var z = 30;
console.log(window.z);

function f1(x,z=100){
	console.log(x); // 10

	f2(20);
}

function f2(y){
	//debugger;
	var x = 1000;
	var z = 2000;
	//debugger;
	console.log(x,y,z); // undefined, 20;
}

f1(10);
console.log(x,z);
