//Создать класс SuperMath с методом check(obj), 
//параметр obj которого имеет свойства X, Y, znak.
//Пример объекта: obj = { X:12, Y:3, znak: “/”}, возможные варианты znak=> + - / * %.
// При вводе znak нужно сделать проверку корректности ввода на возможные математические действия.
//Пример объекта: obj = { X:12, Y:3, znak: “/”}, 
//возможные варианты znak=> + - / * %. 
//При вводе znak нужно сделать проверку корректности ввода на возможные математические действия.

//Метод check должен подтвердить у пользователя хочет ли он произвести действие znak c Х и У. 
//Если - да, сделать математическое действие znak(которое описано в классе), 
//иначе - запросить ввод новых данных через метод input() с класса SuperMath.

class mySuperMath{

	constructor(){
		//объект, в котором описаны все оерации, к-е нужно произвести
		this.operations = {
			'/': this.division,
			'+': this.add,
			'*': this.multiply,
			'%': this.percent
		};
	}
	//если от user придет division, вызываем /
	division(x,y){
		return x/y;
	}
	add(x,y){
		return x+y;
	}
	multiply(x,y){
		return x*y;
	}
	percent(x,y){
		return x%y;
	}
	input(x,y){
		let newZnak = prompt(`enter for X and Y`);
		if(this.operations[newZnak]){
			return this.getOperations(x,y,newZnak);

		}else {
			this.input(x,y);
		}
	}

	getOperations(x,y,znak){
		// console.log(x,y,znak);
		if(this.operations[znak]){
			//вызов ф-ции, к-я закреплена за значением знака, к-е передается на 89 строке в '/' ( напр /)
			return this.operations[znak](x,y);

		}else{
			return this.input(x,y,znak);
		}
	}
}
let p = new mySuperMath();
console.log( p.getOperations(12, 3,'') );