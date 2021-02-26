// let arr = [10,20,30,40,50];
// console.log(arr);

// .forEach(cb), .map(cb), .filter(cb), .some(cb), .every(cb)
// .reduce(cb,100)

// let summResult = arr.reduce(
// 	function(summ,element,index,arr){
// 		return summ+element
// 	}
// 	);

// console.log(`Summ for array = ${summResult}`);

// let minValue = arr.reduce(
// 	function(min, element){
// 		return element<min ? element : min;
// 	}
// )

// console.log(`Min value in array = ${minValue}`);

// let summ=0;
// for(let i=0; i<arr.length; i++){
// 	summ += arr[i];
// }
// console.log(summ);


// - Example -

// 1. Change second element in user array into years old.
// 2. Get users, which is older then 20 year.
// 3. Get all users years summ.
// 4. Render User data into table.

// let users = [
// 	['Anna', 1996, 'Petrova', ['Oleg', 'Ivanna']],
// 	['Misha', 2000, 'Ivanova'],
// 	['Yura', 1975, 'Andreev'],
// 	['Ivan', 1985, 'Andreev', ['Oleg', 'Ivanna', 'Anna']],
// ],
// 	date = new Date(),
// 	year = date.getFullYear(),
// 	trs = [];

// let filteredUsers = users
// 					.map(function(user){
// 						user[1] = year-user[1];
// 						return user;
// 					})
// 					.filter(function(user){
// 						return user[1]>20;
// 					});

// filteredUsers
// 	.forEach(function(user){
// 		let tds = user.
// 			map(function(userData){
// 				// if(Array.isArray(userData)){
// 				// 	userData.join(', ')
// 				// }
// 				userData = Array.isArray(userData) ? userData.join(', ') : userData;
// 				return `<td>${userData}</td>`
// 			})
// 			.join('');

// 		let tr = `<tr>${tds}</tr>`;
// 		trs.push(tr);
// 	})

// let finalSumm = filteredUsers
// 					.reduce(function(summ, user){
// 						return summ+user[1]
// 					},0);

// let tfoot = `<tfoot>
// 				<tr>
// 					<td colspan="4">Years summ: ${finalSumm}</td>
// 				</tr>
// 			</tfoot>`

// document.write(`<table class="userTables">${trs.join('')}${tfoot}</table>`);

// let summ = 0;
// for(i<arr.length;i++){
// 	summ += arra[i];
// }

// let summResult = arr.reduce(
// 	function(summ,element){
// 		return summ+element
// 	}
// )

// let arrayOfarrays1 = [
// 		[10,20,30],
// 		[100,200,300,[111,222,333]],
// 		[234,354,456]
// 	],
// 	arrayOfarrays2 = [
// 		['hello',20,30,[111,222,333]],
// 		['another hello',200,300],
// 		['the last one',354,456]
// 	],
// 	flatArrays = [arrayOfarrays1,arrayOfarrays2];

// console.log(flatArrays.flat(Infinity));

// [10,20,30,100,200,300,234,354,456];

// for(let i=0; i<arrayOfarrays.length; i++){
// 	flatArrays = flatArrays.concat(arrayOfarrays[i]);
// }
// console.log(flatArrays);

// let newArray = arrayOfarrays
// 				.reduce(
// 					function(flatArray,array){
// 						return flatArray.concat(array);
// 					}
// 					,[]);
// console.log(newArray);

//dd.mm.yyyy
//01.02.2020

// let products = [
// 	['apple','01.02.2020',35],
// 	['wine','11.11.2020',130],
// 	['meat','05.09.2020',200],
// 	['potato','05.09.2021',50]
// ],
// 	date = new Date(),
// 	threeMonthBefore = date.setMonth(date.getMonth() - 3);

// let filteredProducts = products
// 							.filter(function(product){
// 								let productDate = new Date(product[1]),
// 									productTimestamp = productDate.getTime();
// 								return productTimestamp>=threeMonthBefore;
// 							})

// console.log(filteredProducts);

// filteredProducts
// 	.forEach(function(product){
// 		productString = product
// 			.map(function(element){
// 				return `<span>${element}</span>`;
// 			})
// 			.join('');

// 		document.write(`<p class="product">${productString}</p>`);
// 	})

// let productSumm = filteredProducts
// 					.reduce(function(summ, product){
// 						return summ+product[2];
// 					},0);

// document.write(`<p>Summ for all products = ${productSumm}</p>`);
