// let request = (url, method='GET') => {
// 	let xhr = new XMLHttpRequest();
// 	xhr.open('GET','user.json',true);
// 	xhr.send();

// 	xhr.addEventListener('readystatechange',()=>{
// 		if(xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 400){
// 			console.log(xhr);

			// let json = xhr.responseText,
// 				response = JSON.parse(json);

// 			//console.log(response);
// 			return response;
// 		}
// 	})
// }

// let userData = request('user.json');
// console.log(userData);

// let hasMoney = 1001;

// let getData = new Promise((resolve, reject) => {
// 	console.log('hello');

// 	setTimeout(()=>{
// 		hasMoney>1000 ? resolve(hasMoney) : reject(hasMoney)
// 	},2000);
// });

// console.log('smth');

// let user = {};
// console.log(user);

// getData
// 	.then(
// 		data => {
// 			console.log('in first ok then',data);
			
// 			return new Promise((resolve,reject) => {
// 				reject('FROM FIRST OK THEN');
// 			})
// 		},
// 		data => {
// 			console.log('not ok',data);
// 			return 'FROM FIRST NOT OK THEN';
// 		}
// 	)
// 	.then(
// 		ok => console.log('in second ok then',ok),
// 		notok => {
// 			console.log('in second not ok then',notok);
// 			return 'FROM Second NOT OK THEN';
// 		}
// 	)
// 	.then(
// 		data => {
// 			user.name = data;
// 			console.log('final ok');
// 		}
// 	)

console.log('start');

let alertBtn = document.querySelector('#alertBtn');
alertBtn.addEventListener('click', function(){

	let getJson = new Promise((resolve,reject)=>{
		let xhr = new XMLHttpRequest();
		xhr.open('GET','user.json',true);
		xhr.send();

		xhr.addEventListener('readystatechange',()=>{
			if(xhr.readyState === 4){
				xhr.status>=200 && xhr.status<400 ? resolve(JSON.parse(xhr.responseText)) : reject(xhr.status);
			}
		})
	})

	getJson
		.then(
			function(ok){
				console.log(ok);

				if(Array.isArray(ok.children)){
					return ok.children;
				}

			},
			function(error){
				console.log(error);
				alert('File not found');
			}
		)
		.then(
			function(children){
				console.log(children);

				let girls = children.filter(function(child){
					return child.sex === 'girl';
				})

				return new Promise((resolve,reject) => {
					girls.length ? resolve(girls) : reject();
				})

			}
		)
		.then(
			function(girls){
				console.log(girls);
				girls.forEach(girl => {
					console.log(girl.name);
				})
			},
			function(){
				console.log('girls not found, will gwt animals');
				let getAnimals = new Promise((resolve,reject)=>{
					let xhr = new XMLHttpRequest();
					xhr.open('GET','animals.json',true);
					xhr.send();

					xhr.addEventListener('readystatechange',()=>{
						if(xhr.readyState === 4){
							xhr.status>=200 && xhr.status<400 ? resolve(JSON.parse(xhr.responseText)) : reject(xhr.status);
						}
					})
				})

				getAnimals
					.then(
						animals => console.log(animals)
					)
			}
		)
})

// let getNumber = value => {
// 	console.log(`Time is started: ${value}`);

// 	return new Promise((resolve,reject)=>{
// 		setTimeout(()=>console.log(`Time is over after ${value}`),value);
// 		value <=2000 ? resolve(value) : reject();
// 	})
// }

// Promise
// .all(
// 	[
// 		getNumber(1000),
// 		getNumber(2000),
// 		getNumber(1500)
// 	]
// )
// .then(
// 	ok => console.log('all is resolved',ok),
// 	error => console.log('someone is resolved'),
// )


// function getUser(url){}
// let getUser = function(url){}

let getUser = url => {
	return new Promise((resolve,reject)=>{
		let xhr = new XMLHttpRequest();
		xhr.open('GET',url,true);
		xhr.send();

		xhr.addEventListener('readystatechange',()=>{
			if(xhr.readyState === 4){
				xhr.status === 200 ? resolve(JSON.parse(xhr.responseText)) : reject();
			}
		})
	})
}

Promise
	.all(
		[
			getUser('userA.json'),
			getUser('userB.json'),
		]
	)
	.then(
		users => {
			console.log('all users',users);
			users.forEach(user=>console.log(user.name));
		},
		error => console.log('someone not found'),
	)

// let user = {
// 	email: 'sdc',
// 	pass: 'sdc'
// }

// let userJson = JSON.stringify(user);


// Promise
// async/await, fetch