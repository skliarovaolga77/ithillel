// Object, this

// let user = {
// 	name: 'Anna',
// 	surname: 'Pavlova',
// 	age: 23,
// 	children: ['Ivan','Alexey'],
// 	husband: {
// 		name: 'Anton',
// 		surname: 'Pavlov',
// 		age: 33
// 	},
// 	animals: [
// 		{
// 			type: 'cat',
// 			name: 'Barsik'
// 		},
// 		{
// 			type: 'dog',
// 			name: 'Pushok'
// 		}
// 	],
// 	getFullName: getUserData,
// 	getNameAndAge(){
// 		return `${user.name}, ${user.age}`;
// 	}
// }
// console.log(user);

// console.log(user.name);
// console.log(user.getFullName(user.name, user.surname));
// console.log(user.getNameAndAge());

// function getUserData(name, surname){
// 	return `${name}, ${surname}`;
// }

// console.log(getUserData('Inna','Ivanova'));

// let user2 = {
// 	name: 'Alex'
// }

// function f1(){
// 	console.log(this); // window.f1();

// 	let animal = {
// 		type: 'cat',
// 		name: 'Alert',
// 		f2(){
// 			console.log(this); //animal
// 		}
// 	}

// 	animal.f2();
// }

// f1();

// function f2(){
// 	console.log(this); // animal
// }

// let data = {
// 	name: 'Data',
// 	age: 23,
// 	functionData: f2
// }

// function f1(){
// 	let x = 10;

// 	f2();
// 	data.functionData();
// }
// f1();

// function f2(){
// 	//console.log(x); //not defined
// 	console.log(this);
// }

// function foo(...myArgs){

// 	console.log(myArgs);
// 	myArgs.push('new data');

// 	console.log(this);

// 	return; //undefined;
// }

// console.log( foo(10,20,'hello',undefined, true) );

// for(let i=0; i<5; i++){
// 	console.log(i);
// 	console.log( this );
// }

// let user1 = {
// 	name: 'Anna',
// 	surname: 'Pavlova',
// 	age: 23,
// 	getData: userData
// };

// let user2 = {
// 	name: 'Ivan',
// 	surname: 'Pavlov',
// 	age: 25,
// 	getData: userData
// };

// function userData(){
// 	//console.log(this);

// 	let usersData = new Array(),
// 		trs = new Array();

// 	for(let key in this){
// 		if(typeof this[key] !== 'function'){
// 			usersData.push(`<td>${key}: ${this[key]}</td>`);
// 		}
// 	}

// 	let tr = `<tr>${usersData.join('')}</tr>`;
// 	trs.push(tr);

// 	document.write(`<table border="1">${trs.join('')}</table>`)
// 	return usersData.join('; ');
// }

// console.log(user1.getData());
// console.log(user2.getData());

// document.write([1,2,3,4]);

// let x = new Number(23);
// console.log(x);
// console.dir(x);

// Math.pow()

// let myMath = {
// 	PI: 3.141592653589793
// }

// console.log(myMath);
// console.log(myMath.PI);

let Parent = {
	name: 'Sasha',
	surname: 'Ivanov',
	country: 'Ukraune',
	getName(){
		return `${this.name}, ${this.surname}`
	},
	getCountry(){
		return this.country;
	}
}

let Anna = Object.create(Parent),
	Ivan = Object.create(Parent);

// 	console.dir(Object);

// Anna.name = 'Anna';
// Anna.age = 23;
// console.log(Anna);


// Ivan.name = 'Ivan';
// console.log(Ivan);

// // console.log(Anna.surname, Ivan.surname);

// console.log(Anna.getName()); // Anna
console.log(Ivan.getName());


// console.log(Parent.getCountry()); //Ukraine;
// console.log(Anna.getCountry());//Ukraine;

// Anna.country = 'Poland';
// console.log(Anna.getCountry()); //вывод Poland

// console.log(Ivan.getCountry());

// let Olena = {
// 	name: 'Olena'
// }
// console.log(Olena);
// console.log(Olena.surname);
// console.log(Olena.getCountry());

// console.log(typeof Anna);

// let ChildAnna = Object.create(Parent);
// ChildAnna.name = 'Anna';
// console.log(ChildAnna);

// console.log(ChildAnna.surname, ChildAnna.name, ChildAnna.age);

// console.log(ChildAnna.__proto__);

// let ChildPetr = {
// 	name: 'Petr',
// }

// console.dir(Object);

// Array.prototype.myLovelyNumber = 10000;
// Array.prototype.myLovelyFunction = function(){
// 	console.log(this);
// 	return `Hello, my Lovely Function, ${this[0]}`;
// }

// Array.prototype.mySuperPush = function(...valuesToAdd){
// 	console.log(this);
// 	console.log(valuesToAdd);

// 	for(let i=0; i<valuesToAdd.length; i++){
// 		this[this.length] = valuesToAdd[i];
// 	}

// 	// return this.length;
// }


// let arr = [1,2,3,4],
// 	arr2 = ['hello','world'];

// console.log(arr.myLovelyNumber);
// console.log(arr2.myLovelyNumber);

// console.log(arr.myLovelyFunction());
// console.log(arr2.myLovelyFunction());

// //arr.push(2000,200);

// arr.mySuperPush(1000,200,3000);
// console.log(arr);
// // console.log(arr.mySuperPush('Inna',"Ivan"));

// arr2.mySuperPush('new data');
// console.log(arr2);

// console.log(arr.push(10));


// console.dir(Array);