// class Human{

// 	constructor(name){
// 		this.name = name;
// 	}

// // полиморфизм ( при одмнаковых входщий данных, метод может работать по разному )
// // run - ск-ть s/t km/h -  s растояние , t время
// 	run(s,t){
// 		let result = {
// 			speed: Math.round(s/t),
// 			text: `Human ${this.name}, with distance=${s} and time=${t} = ${Math.round(s/t)} km/h`
// 		}
// 		return result;
// 	}
// }

// class Sport extends Human{
// 	constructor(name,years){
// 		super(name);
// 		this.years = years;
// 	}

// 	run(s,t){
// 		let v = s/t,
// 			speedForSport = v*this.years;
// 		return `Human ${this.name}, with distance=${s} and time=${t} = ${Math.round(speedForSport)} km/h`;
// 	}
// }

// class Regular extends Human{
// 	constructor(name, smoking){
// 		super(name);
// 		this.smoking = smoking;
// 	}

// 	run(s,t){
// 		let humanRun = super.run(s,t),
// 			humanSpeed = humanRun.speed;

// 		if(this.smoking){
// 			humanSpeed *= 0.8;
// 		}

// 		return `${humanRun.text}. ${this.name} is ${this.smoking ? 'smoking' : 'not smoking'}. So, he's speed = ${humanSpeed}`;
// 	}
// }

// let Oleg = new Sport('Oleg', 3),
// 	Anna = new Sport('Anna', 2),
// 	Misha = new Human('Misha'),
// 	Anton = new Regular('Anton',true);

// console.log(Oleg);

// console.log( Oleg.run(40,3) );
// console.log( Anna.run(40,3) );
// console.log( Misha.run(40,3) );
// console.log( Anton.run(40,3) );

// class User{
// 	getName(){
// 		return this.name;
// 	}

// 	setName(name='Default Name'){
// 		this.name = name;
// 	}
// }

// let Alex = new User();

// Alex.setName('Alex');
// console.log( Alex.getName() );

// class Car{
// 	constructor(model){
// 		this.model = model;
// 	}

// 	getMaxSpeed(){
// 		return this.maxSpeed == undefined ? 300 : this.maxSpeed;
// 	}

// 	setMaxSpeed(value){
// 		this.maxSpeed = value;
// 	}
// }

// let Audi = new Car('Audi'),
// 	BMW = new Car('BMW');


// console.log(Audi);
// console.log(BMW);

// BMW.setMaxSpeed(290);

// console.log(`Max speed for BMW = ${BMW.getMaxSpeed()}`)

