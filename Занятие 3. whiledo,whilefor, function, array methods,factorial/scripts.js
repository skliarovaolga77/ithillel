// arr = [];
// arr.length = 10;

// arr2 = new Array(10);
// arr4 = new Array(5);

// for(i=0; i<arr.length; i++){
// 	arr[i] = Math.floor(Math.random() * (20 - 10) + 10);
// }

// for(i=0; i<arr2.length; i++){
// 	arr2[i] = Math.floor(Math.random() * (20 - 10) + 10);
// }

// for(i=0; i<arr4.length; i++){
// 	arr4[i] = Math.floor(Math.random() * (20 - 10) + 10);
// }

// console.log(arr,arr2);

//метод дсохраняет сумму первое и второго массива 
// arr3 = arr.concat(arr2,arr4);
// console.log(arr3);


//slice
// x = arr.slice(2,8);
// console.log(x);
// x[0] = 100;

//делает копию элементов  с массива , указываем индекс какие нужно скопировать
// y = arr.splice(2,4);
// console.log(y);

// y[0] = 1000;
// console.log(y[0]);


// arr2[0] = 'start';
// arr2[arr2.length-1] = 'end';
// console.log(arr2);

//меняем местами
// arrReversed = arr2.reverse();
// console.log(arrReversed);


// .push() / .pop();
// к конец массива push

// arr10 = new Array(10);
// for(i=0; i<arr10.length; i++){
// 	arr10[i] = Math.floor(Math.random() * (20 - 10) + 10);
// }
// console.log(arr10);

// arr10.push('PUSH');

// console.log(arr10.push('PUSH SECOND','PUSH THIRD'));

// lastItem = arr10[arr10.length-1];
// arr10.pop();
// console.log(lastItem);

// console.log( arr10.pop() );


// .shift() / .unshift();
//удаляет первый элемент массива shift

// arr10.unshift('new first', 'new second');
// console.log(arr10.unshift('new third'));

// arr10.shift();
// console.log(arr10.shift());


// arrJoined = arr10.join(' ');
// console.log(arrJoined);


// FUNCTIONS

// randomValues('privetik','poka');
// randomValues(y=10,x=20);

// randomValues(undefined, 'my y', 'my z');

// randomValues('my x', undefined, 'my z');


// function randomValues(x='DEFAULT X', y='EMPTY', z){
// 	if(y !== 'EMPTY'){
// 		console.log(`${x} - ${y} - ${z}`);
// 	}

// 	console.log(`${x} 2`);
// 	console.log(`${x} 3`);
// 	console.log('-----');
// }

// randomValues();
// randomValues();

// console.log('MY CONSOLE');

// randomValues();
// randomValues();

// for(){
// 	break;
// 	continue;
// 	...
// }

// function summ(x,y){
// 	x += y;
// 	console.log(x);
	
// 	x = Math.pow(x,x);
// 	console.log(x);
	
// 	return x;
// 	console.log('sdfsd');
// 	x += 10000;
// }

// z = summ(2,3);
// console.log(z);

// x = function(name){
// 	return `Hello, ${name}`;
// };

// function getName(name){
// 	return `Hello, ${name}`;
// }

// console.log( x('Anna') );
// console.log( x('Vadim') );

// console.log( getName('Jack') );

function getAge(age){
	return `My age is ${age}`;
}

for(i=0;i<5;i++){
	age = Math.floor(Math.random() * Math.floor(20))
	console.log(getAge(age));
}

