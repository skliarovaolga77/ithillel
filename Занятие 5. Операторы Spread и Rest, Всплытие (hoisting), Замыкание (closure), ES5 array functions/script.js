//global, local

// var x = 10;
// var y = 20;

// var array = [10,'hello',undefined,true, 100];
// // console.log(array);

// function modifyValue(value){
// 	var myArray = [...value];
	
// 	for(i=0; i<value.length; i++){
// 		myArray[i] = value[i]*10;
// 	}

// 	myArray[0] = 'MY VALUE';
// 	return myArray;
// }

// // string, number, bolean;

// console.log(modifyValue(array));
// console.log(array);


// function rainbow(red, green, blue, ...myMassiv){
// 	console.log(red, green, blue);
// 	console.log(myMassiv);
// }

// rainbow('red', 'green', 'blue', 'orange', 'yellow');

// function summFunc(name, lastname, ...chisla, lastNumer){
// 	console.log(x, y);
// 	console.log(chisla);
// 	console.log(lastNumer);

// 	// for(summ=0,i=0; i<chisla.length; i++){
// 	// 	summ += chisla[i];
// 	// }

// 	// return summ;
// }


// console.log( summFunc('Petya','Vasya',30,40,50) );
// // console.log( summFunc(10,20,30,40,50) );

// LE, scope
// arguments

// x = 10;

// function f1(){
// 	var x = 100;
// 	f2();
// }

// function f2(){
// 	console.log(x);
// }

// function myExampleFunction(){
// 	var c = 100;

// 	var localArray = new Array('FIRST', ...arguments, 'SECOND', 'LAST');
// 	console.log(localArray);

// 	localArray.unshift('Super');

	// let mass = [1,2,3,4];
	// mass.reverse();
	// console.log(mass);

	// arguments.reverse();

	// for(i=0;i<arguments.length; i++){
	// 	console.log(arguments[i]);
	// }
// }

// foo('sdcsdc',1000);
// myExampleFunction(10,'hello',true, undefined);

// let, const, var

// const mass = [1,2,3,4];
// mass[3] = 100;

// console.log(mass);


// let name = "The index to start the search at. If the index is greater than or equal to the array's length, -1 is returned, which means the array will not be searched. If the provided index value is a negative number, it is taken as the offset from the end of the array. Note: if the provided index is negative, the array is still searched from front to back. If the provided index is 0, then the whole array will be searched. Default: 0 (entire array is searched).";
// let arrayOfWords = name.split(' ');
// let arrayOfWordsSecond = arrayOfWords.join('____');
// console.log(arrayOfWordsSecond);


// let arrayOfTypes = [10,'hello',true,undefined,[10,20,30],[], new Array(1000,2000)];

// for(let i=0; i<arrayOfTypes.length; i++){

// 	if(Array.isArray(arrayOfTypes[i])){
// 		console.log(`${arrayOfTypes[i]} is array`);
// 	} else{
// 		console.log(`${arrayOfTypes[i]} – ${typeof arrayOfTypes[i]}`);
// 	}
// }

// .forEach(), .map(), .filter(), .reduce();


// function f1(){
// 	var x = 10;

// 	f2();

// 	function f2(){
// 		x *= 10;
// 		var y = 10;
// 		console.log(x);

// 		f3(y);

// 		function f3(yf3){
// 			x *= 20;
// 			// debugger;
// 			console.log(x,y);
// 		}
// 	}

// 	console.log(x);
// }

// f1();
