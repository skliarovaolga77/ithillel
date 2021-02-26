//Дано три массива kitchenProducts, devicesProducts, cosmeticsProducts с товарами в разных категориях:

let kitchenProducts = [
	{
		type: 'grater',
		price: 10
	},
	{
		type: 'pastry-bag',
		price: 25
	},
	{
		type: 'scale',
		price: 5
	},
	{
		type: 'whisk',
		price: 15
	}
];

let devicesProducts = [
	{
		type: 'desktop',
		price: [100,1000]
	},
	{
		type: 'laptop',
		price: [50,1500]
	},
	{
		type: 'smartphone',
		price: [80,2000]
	},
	{
		type: 'tablet',
		price: [20,1300]
	}
];

let cosmeticsProducts = [
	{
		type: 'blush',
		price: 100
	},
	{
		type: 'eyeshadow',
		price: 50
	},
	{
		type: 'lipstick',
		price: 80
	},
	{
		type: 'nail-polish',
		price: 200
	},
	{
		type: 'perfume',
		price: 300,
	}
];

//создаем родителя

let Kitchen = {
	category: 'kitchen'
};
let Devices = {
	category: 'devices'
};
let Cosmetics = {
	category: 'сosmetics'
};

//grater,desktop,blush
//создаем прототип
let kitchen = Object.create(Kitchen); // объект grater
let devices = Object.create(Devices);// объект desktop
let сosmetics = Object.create(Cosmetics);// объект blush


//Всем товарам с массивов kitchenProducts, devicesProducts, cosmeticsProducts 
//добавить в качестве объекта-прототипа объекты, созданные на первом шаге.
//После этого, дополнить каждый товар своими свойствами. 


//добавляем св-ва
for(let key in kitchenProducts){
	kitchen[key] = kitchenProducts[key];
	// console.log(grater[key].type);
}
for(let key in devicesProducts){
	devices[key] = devicesProducts[key];
}
for(let key in cosmeticsProducts){
	сosmetics[key] = cosmeticsProducts[key];
}


console.log(kitchen);//добавили св-ва
console.log(devices);//добавили св-ва
console.log(сosmetics);//добавили св-ва


function renderCard(obj){
	let objData = [];

	for(let key in obj){
		// console.log(obj[key]);
		// console.log(obj );
		// console.log(obj.category);
		let product = obj[key];
		// console.log(product);
		if(typeof product === 'object'){

            let centralImg = `<img class="figure" src="images/${obj.category}/${product.type}.svg">`;
            let td = `<td>
                    <div class="content">
                        ${centralImg}
                        <div> Name : <span>${product.type}</span></div>
                        <div> Price : $<span>${product.price}</span></div>
                    </div>
                </td>`;

            objData.push(td);

        }
	}
	document.write(`
		<table class="categories">
			<caption>Category : ${obj.category}</caption>
			${objData.join('')}
		</table>`);
}

renderCard(kitchen);
renderCard(devices);
renderCard(сosmetics);




