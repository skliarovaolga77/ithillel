// class User{
// 		getName(){
// 			return this.name;
// 		}
	
// 		setName(name='Default Name'){
// 			this.name = name;
// 		}
// 	}
	
// 	let Alex = new User();
	
// 	Alex.setName('Alex');
// 	console.log( Alex.getName() );
	
	class Car{
		constructor(model){
			this.model = model;
		}
	
		getMaxSpeed(){
			return this.maxSpeed == undefined ? 300 : this.maxSpeed;
		}
	
		setMaxSpeed(value){
			this.maxSpeed = value;
		}
	}
	
	let Audi = new Car('Audi'),
		BMW = new Car('BMW');
	
	
	console.log(Audi);
	console.log(BMW);
	
	BMW.setMaxSpeed(290);
	
	console.log(`Max speed for BMW = ${BMW.getMaxSpeed()}`)
	
	