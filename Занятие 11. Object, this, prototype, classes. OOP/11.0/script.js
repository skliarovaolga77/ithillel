// Audi, Boeing747, Ukraine

// let Car = {
// 	maxSpeed: 250,
// 	doors: 4,
// 	render(){
// 		console.log('Hello, from Car');
// 	}
// }
// let Audi = Object.create(Car);

// let AudiData = {
// 	name: 'AudiRS',
// 	maxSpeed: 210
// }

// for(let key in AudiData){
// 	Audi[key] = AudiData[key];
// }

// let Plane = {
// 	engine: 2,
// 	render(){
// 		console.log('Hello, form Plane');
// 	}
// }
// let Boeing747 = Object.create(Plane);

// let Bicycle = {
// 	koleso: 2,
// 	render(){
// 		console.log('Hello, form Bicycle');
// 	}
// }
// let Ukraine = Object.create(Bicycle);


// function renderCard(obj){
// 	let objData = [];
// 	for(let key in obj){
// 		if(typeof obj[key] !== 'function'){
// 			let li = `<li>${key}: ${obj[key]}</li>`;
// 			objData.push(li);
// 		}
// 	}
// 	document.write(`<ul>${objData.join('')}</ul>`);
// }

// renderCard(Audi);
// renderCard(Boeing747);
// renderCard(Ukraine);

// Audi.render();
// Boeing747.render();
// Ukraine.render();

// let Parent = {
// 	name: 'Ivan',
// 	surname: 'Ivanov',
// 	getFullName(){
// 		return `${this.name} ${this.surname}`
// 	}
// }

// let Child = Object.create(Parent);
// Child.name = 'Anna';

// console.log(Child);

// function GrandParent(){}
// GrandParent.prototype.getCountry = function(){
// 	return `My country: ${this.country}`;
// }

// Parent.prototype = Object.create(GrandParent.prototype);

// function Parent(name, age, married){
// 	console.log(this);
	
// 	this.name = name;
// 	this.age = age;
// 	this.married = married;
// 	this.country = 'Ukraine';
// }

// Parent.prototype.getFullName = function (){
// 	return `${this.name} ${this.age}`;
// }

// let Anna = new Parent('Anna',32,true);
// let Petr = new Parent('Petr',20,false);

// console.log(Anna.getFullName());
// console.log(Petr.getFullName());


// Animal - fc
// Wild - fc
// Tiger - object

// OOP, ООП

// function Animal(){}
// Animal.prototype.getAnimalType = function(){
// 	return `My type is ${this.type}`;
// }

// Wild.prototype = Object.create(Animal.prototype);
// Wild.prototype.getMeat = function(){
// 	return `Zebra's meat`;
// }

// function Wild(name){
// 	this.type = 'wild';
// 	this.name = name;
// }

// let Tiger = new Wild('Sharhan');
// console.log(Tiger);

// console.log(Tiger.getAnimalType());
// console.log(Tiger.name);

// ES6

class Animal{
	constructor(animalGender){
		this.gender = animalGender;
	}

	getAnimalType(){
		return `My type is ${this.type}`;
	}
}

class Wild extends Animal{
	constructor(name, gender){
		super(gender);
		
		this.type = 'wild';
		this.name = name;
	}

	getMeat(){
		return `Zebra's meat`;
	}

	getName(){
		return `${this.name}`;
	}

}

let Tiger = new Wild('Sharhan','woman');
console.log(Tiger);

console.log(Tiger.getMeat());
console.log(Tiger.getName());
