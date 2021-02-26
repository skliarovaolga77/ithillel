class User{
	constructor(name,age){
		this.name = name;
		this.age = age;
		this.animals = [
			{
				type: 'dog',
				name: 'Charlie'
			},
			{
				type: 'cat',
				name: 'Lisa'
			},
		];
	}


	getAnimals(){
		//console.log(this);

		// let user = this;

		// this.animals.forEach(
		// 	function(animal){
		// 		console.log(`${user.name} has ${animal.type} ${animal.name}.`);
		// 	}
		// )

		this.animals.forEach(
			(element)=>{
            //     console.log(element);
            //     console.log(this);
				console.log(`${this.name} has ${element.type} ${element.name}.`);
			}
		)
	}
}

let Ivan = new User('Ivan',23);
console.log(Ivan);

Ivan.getAnimals();

// let result = (...)=>a+b;

// let sum = (a,b) => a+b;
// console.log( sum(10,20) );

// let sum = (a,b) => {
//     console.log('ok');
//     return a+b;
// };
// console.log( sum(10,50) );


class Car{
    //вывести имя машины
	getName(){
		return this.name;
	}
    //получить Car name
	setName(name){
		this.name = name;
	}

// 	get name(){
// 		return this.CarName ? this.CarName : 'Car name not defined';
// 	}

// 	set name(name){
// 		name = name === 'Audi' ? 'Audi RS' : name;
// 		this.CarName = name;
// 	}

// 	set fullName(full){
// 		this.name = full[0];
// 		this.age = full[1];
// 	}
}

let Audi = new Car();//пустой массив
console.log(Audi);

Audi.setName('Audi');// Car с name: "Audi"
console.log(Audi.getName());

// // Audi.name = 'Audi';
// // // Audi.setName('Audi');

// // console.log(Audi.name;

// Audi.fullName = ['Audi RS',2000];

// class Bulka{
//     getName(){
//     return this.name;
//     }
//     setName(name){
//         this.name = name;
//     }

// }
// let Hamburger = new Bulka();
// console.log(Hamburger);

// Hamburger.setName('bigHamburger');
// console.log(Hamburger.getName());
// document.write(Hamburger.getName());
