//содаем класс, в к-м метод renderStudent будет выводить данные по студенту

// class getStudent{

// 	constructor(){
// 		this.students = {
// 			'Anna': {
// 				surname: 'Ivanova',
// 				age: 23
// 			},
// 			'Ivan': {
// 				surname: 'Petrov',
// 				age: 24
// 			}
// 		};
// 	}

// //метод renderStudent будет выводить данные по студенту
// //если есть name- выводим имя, не -ошибка
// 	renderStudent(name){
// 		if(this.students[name]){
// 			console.log(this.students[name]);
// 		} else{
// 			console.log(`Student with name ${name} not exist`);
// 			this.createStudent(name);
// 			this.renderStudent(name);
// 			console.log(this.students);
// 		}
// 	}

// // 	createStudent(name){
// // 		this.students[name] = {
// // 			surname: this.checkUserSurname(name),
// // 			age: +prompt(`Enter age for student ${name}`)
// // 		}
// // 	}

// // 	checkUserSurname(name){
// // 		let surname = prompt(`Enter surname for student ${name}`);
// // 		return surname === '' ? this.checkUserSurname(name) : surname;
// // 	}
// // }

// //является экземпляровом класса getStudent
// let data = new getStudent();

// data.renderStudent('Anna');
// data.renderStudent('Petr');

// class mySuperMath{

// 	constructor(){
// 		this.operations = {
// 			'+': this.add,
// 			'*': this.multiply
// 		}
// 	}

// 	add(x,y){
// 		return x+y;
// 	}

// 	multiply(x,y){
// 		return x*y;
// 	}

// 	getOperations(x,y,znak){
// 		// console.log(x,y,znak);
// 		if(this.operations[znak]){
// 			return this.operations[znak](x,y);
// 		} else{
// 			return `operation ${znak} not defined`;
// 		}
// 	}
// }

// let data = new mySuperMath();

// console.log( data.getOperations(10,20,'+') );


class User{
	
	static getName(name){
		return `My name is ${name}`;
	}

	static getSurname(surname){
		return `My surname is ${surname}`;
	}

	static getFullName(name, surname){
		return `${User.getName(name)}. ${User.getSurname(surname)}`;
	}

}

let myUser = new User();
console.log(myUser);

// console.log(myUser.getName());

console.log( User.getName('Anna') );
console.log( User.getFullName('Anna', 'Pavlova') );



