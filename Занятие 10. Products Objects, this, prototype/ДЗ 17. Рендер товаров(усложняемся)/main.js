//Дано три массива kitchenProducts, devicesProducts, cosmeticsProducts с товарами в разных категориях:

let kitchenProducts = [
	{
		type: 'grater',
		price: 10,
		ingredients: [
			{
				name: 'Butter',
				count: '100 g'
			},
			{
				name: 'Bread',
				count: '200 g'
			},
			{
				name: 'Cheese',
				count: '500 g'
			}
		]},
	{
		type: 'pastry-bag',
		price: 25,
		ingredients: [
			{
				name: 'Powdered sugar',
				count: '210 g'
			},
			{
				name: 'Almond flour',
				count: '1 cup'
			},
			{
				name: 'Salt',
				count: '1 teaspoon'
			},
			{
				name: 'Egg whites',
				count: '3'
			},
			{
				name: 'Granulated sugar',
				count: '50 g'
			},
			{
				name: 'Pink gel food coloring',
				count: '2 drops'
			}
		]},
	{
		type: 'scale',
		price: 5,
		ingredients: [
			{
				name: 'Active dry yeast',
				count: '1 tablespoon'
			},
			{
				name: 'Sugar',
				count: '1 tablespoon'
			},
			{
				name: 'Salt',
				count: '1 tablespoon'
			},
			{
				name: 'Warm water',
				count: '2 cups'
			}
		]},
	{
		type: 'whisk',
		price: 15,
		ingredients: [
			{
				name: 'Freshly squeezed lemon juice',
				count: '2 tablespoon'
			},
			{
				name: 'Baking apples like Golden Delicious, Cortland, or Mutsu',
				count: '3 pounds'
			},
			{
				name: 'Sugar, plus more for sprinkling on the pie',
				count: '2/3 cup'
			},
			{
				name: 'Unsalted butter',
				count: '1/4 cup'
			},
			{
				name: 'Ground cinnamon',
				count: '1/4 teaspoon'
			},
			{
				name: 'large egg, lightly beaten',
				count: '1'
			},
		]}];

let devicesProducts = [
	{
		type: 'desktop',
		price: [100,1000],
		brands: ['hp','huawei']
	},
	{
		type: 'laptop',
		price: [50,1500],
		brands: ['hp','huawei','lenovo']
	},
	{
		type: 'smartphone',
		price: [80,2000],
		brands: ['hp','lenovo']
	},
	{
		type: 'tablet',
		price: [20,1300],
		brands: ['lenovo']
	}
];

let cosmeticsProducts = [
	{
		type: 'blush',
		price: 100,
		colors: ['#c62828','#ce93d8']
	},
	{
		type: 'eyeshadow',
		price: 50,
		colors: ['#ff8a80','#f50057','#c62828']
	},
	{
		type: 'lipstick',
		price: 80,
		colors: ['#f50057','#c62828']
	},
	{
		type: 'nail-polish',
		price: 200,
		colors: ['#c62828','#ce93d8']
	},
	{
		type: 'perfume',
		price: 300,
	}
];

let Kitchen = {
	category: 'kitchen',
	title: 'kitchenIngredients',
	render(){
		let ing = [];
		for(let key in this.ingredients){
			ingredientsProduct = this.ingredients[key];
			ingredientsProductImg = `<img class="figure" src="images/kitchenIngredients/${this.type}.svg">`;
			ing.push(`<li>${ingredientsProduct.name} : ${ingredientsProduct.count}</li>`);
		}
		return `<ul><p style="font-weight: bold;text-transform: capitalize;">ingredients:</p> ${ingredientsProductImg}${ing}</ul>`;
	}
};

let Devices = {
	category: 'devices',
	title: 'devicesBrands',
	render(){
		let brandsImg = [];
		for(let key in this.brands){
			brandsImgProduct = this.brands[key];
			// console.log(this.price);
			brandsImg.push(`<img class="figureBrands" src="images/devicesBrands/${brandsImgProduct}.svg">`);
		}
		return brandsImg;
	}
};
let Cosmetics = {
	category: 'сosmetics',
	render(){
		let colorsImg = [];
		for(let key in this.colors){
			colorsImgProduct = this.colors[key];
			colorsImg.push(`<div class="colorsImg" style="background-color: ${colorsImgProduct};"></div>`);
		}
		return colorsImg.join('');
	}
};

//ф-ция для каждого продукта сделать обьект прототип
function createPrototype(products, proto){
	return products
		.map(function(product){
			let productWithProto = Object.create(proto);
			for(let key in product){
				productWithProto[key] = product[key];
			}
			return productWithProto;
		});
}

let kitchen = createPrototype(kitchenProducts, Kitchen);
let devices = createPrototype(devicesProducts, Devices);
let сosmetics = createPrototype(cosmeticsProducts, Cosmetics);

console.log(kitchen);
console.log(devices);
console.log(сosmetics);



function renderCard(products){
	let objData = [];

	products
		.forEach(function(obj){
			let centralImg = `<img class="figure" src="images/${obj.category}/${obj.type}.svg">`;
			let td = `<td>
						<div class="content">
							<div class="content-product">
								${centralImg}
								<div>Name : <span>${obj.type}</span></div>
								
								<div>Price : $<span>${Array.isArray(obj.price) ? obj.price.join('-') : obj.price}</span></div>
							</div>
							<div class="content-duble">${obj.render()}</div>
					</td>`;
				objData.push(td);
		})
	products
		.reduce(function(el){
			products.category = el.category;
				return products;
		});
		document.write(`
		<table class="categories">
		<caption>Category : ${products.category} </caption>
			${objData.join('')}
		</table>`);
}

renderCard(kitchen);
renderCard(devices);
renderCard(сosmetics);

