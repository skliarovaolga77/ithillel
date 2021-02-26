class User{

	static userAuthForm(e){
		e.preventDefault();

		let form = this;

		let name = form.querySelector('input[data-name="name"]');
		let email = form.querySelector('input[data-name="email"]');
		
		if(!formValidation.text(name.value)){
			name.classList.add('error');
		} else{
			let user = {
				name: name.value,
				email: email.value,
				color: userColor.value,
				colorChange: userData.dataset.color
			}

			User.sendUserData(user);
		}
	}

	static userColorChange(){
		userData.dataset.color = "true";
	}

	static async sendUserData(data){
		let response = await fetch('/', {
		  method: 'POST',
		  body: JSON.stringify(data)
		});

		let result = await response.json();
		alert(result.message);
	}
}

class formValidation{
	static text(string){
		return string.length>=10 ? true : false;
	}
}

let userAuth = document.querySelector('#userAuth');
userAuth.addEventListener('submit',User.userAuthForm);

let userColor = document.querySelector('#userColor');
userColor.addEventListener('change',User.userColorChange);

let userData = document.querySelector('#userData');


// const user = {
// 	name: 'Igor',
// 	age: 23
// }

// Object.defineProperty(user,'name',{
// 	// value: 100,
// 	// writable: false,
// 	// configurable: false,
// 	enumerable: false
// })

// // user.name = 24;
// // delete user.name;
// console.log(user);

// for(let key in user){
// 	console.log(user[key]);
// }

// let userSurname = "Ivanov";

// Object.defineProperty(user,'surname',{
// 	value: userSurname,
// 	writable: false,
// 	configurable: false,
// 	enumerable: false
// })

// let ageValue = 100;

// Object.defineProperty(user,'age',{
// 	get() {
// 		return ageValue;
// 	},
//   	set(newValue) {
//   		ageValue = newValue;
//   	},
// 	configurable: false,
// 	enumerable: false
// })

// console.log(user.age);

// user.age = 200;

// const arr = [10,20];

// Object.defineProperty(arr,0,{
// 	writable: false
// })

// arr[0] = 23;
// console.log(arr);


// let colors = ['red','green','blue','orange','pink'];
// let [red, green, myBlue, ...otherColors] = colors;

// console.log(red,green,myBlue);
// console.log(otherColors);

// let user = {
// 	userName: 'Anna',
// 	userAge: 23,
// 	userCountry: 'America',
// 	surname: 'Ivanova',
// 	city: 'Odessa',
// 	animals: ['cat','dog']
// }

// let {userName:name, userAge:age, userCountry:country='Ukraine', surname, city='Kiev', animals, animals:[myCat, myDog]} = user;

// console.log(name, age, country, surname, city, myCat,myDog, animals);


// let devices = {
// 	laptops: {
// 		mac: {
// 			serial: 123
// 		},
// 		lenovo: {
// 			serial: 424
// 		}
// 	}
// }

// let {laptops:{ mac:{serial:mac}, lenovo:{serial:lenovo} } } = devices;

// console.log(mac, lenovo);

let user = {
	name: 'Anna',
	age: 23,
	children: ['Misha','Dasha'],
	animals: {
		cat: {
			name: 'Alisa'
		}
	}
}

function userInfo({name, age, children:[boy,girl], animals:{cat:{name:kotik}} }){
	console.log(name,age,boy,girl,kotik);
}

userInfo(user);
