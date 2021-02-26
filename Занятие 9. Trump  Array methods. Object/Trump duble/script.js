// Objects

// let userArr = ['Bogdan', 'Bogdan'];
// console.log(userArr);
// console.log(userArr[0], userArr[1]);

// let
// user1 = {
// 	name: 'Bogdan',
// 	surname: 'Bogdanov'
// },
// user2 = {
// 	name: 'Oleg',
// 	surname: 'Olegov'
// };

// let users = [user1,user2];
// console.log(users);

// let massiv = [10,20];
// console.log(massiv[100]);

// let x = 10;
// console.log(x);

// x = 100;
// console.log(x);

let user = {
	name: 'Anna',
	age: 23,
	married: true,
	children: ['Inna', 'Oleg'],
	animals: [
		{
			name: 'cat',
			age: 2
		},
		{
			name: 'dog',
			age: 10,
			username: 'Pushok'
		}
	],
	husband: {
		name: 'Aleksandr',
		age: 33
	}
}

console.log(user);
// console.log(user.name);
// console.log(user.husband.name);
// console.log(user.animals[1].username);

// user.exhusband = 'Sasha';
// user.married = false;
// user.Age = 30;
// delete user.children;

// console.log(user.children);

let trs = [];

for(let myKey in user){
	// console.log(myKey, user[myKey]);
	let tr = `<tr>
				<td>${myKey}</td>
				<td>${user[myKey]}</td>
			</tr>`;
	trs.push(tr);
}

console.log(trs);
document.write(`<table>${trs.join('')}</table>`);

// document.write([123,234,345,]);

// arr = [1000,234234,23423];
// arr[1]; //234234
