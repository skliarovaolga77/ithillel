//Сеть фастфудов предлагает несколько видов гамбургеров:

//маленький (5$, 20 калорий)
//большой (10$, 40 калорий)


//Гамбургер может быть с одним из нескольких видов начинок:

//сыром (+ 1$, + 20 калорий)
//салатом (+ 2$, + 5 калорий)
//картофелем (+ 1,5$ , + 10 калорий)


//Можно добавить добавки:

//посыпать приправой (+ 1,5$, 0 калорий)
//полить майонезом (+ 2$, + 5 калорий).


//Напишите программу, рассчитывающую стоимость и калорийность гамбургера.

//Подсказка: нужен класс Гамбургер, глобальный объект HAMBURGER (с перечнем всех его ингредиентов и характеристик)
// и методы для выбора опций и расчета нужных величин.

class Hamburger{
    constructor(name,price,calories){
    this.name = name;
    this.price = price;
    this.calories = calories;
  }
}
let 
    bigHamburger = new Hamburger('BigHamburger',10,40),
    smallHamburger = new Hamburger('SmallHamburger',5,20);

class Filling{	
    constructor(name, price, calories){
    this.name = name; 
    this.price = price; 
    this.calories = calories;
  }
}

let cheese = new Filling('cheese',1,20),
    salad = new Filling('salad',2,5),
    potatoes = new Filling('potatoes',1,10),
    seasoning = new Filling('seasoning',1.5,0),
    mayonnaise = new Filling('mayonnaise',2,5) ;

class HamburgerCondition{
	static render(hamburger){
		let table = `
				<table class="data">
					<thead>
						<tr>
							<th></th>
							<th></th>
							<th>С сыром</th>
							<th>С салатом</th>
              <th>С картофелем</th>
              <th>С приправой</th>
              <th>С майонезом</th>
						</tr>
						<tr>
							<th>${hamburger.name}</th>
							<th></th>
							<th></th>
							<th></th>
              <th></th>
              <th></th>
              <th></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Цена:</td>
							<td>${hamburger.price}$</td>
							<td>+${cheese.price}$</td>
							<td>+${salad.price}$</td>
              <td>+${potatoes.price}$</td>
              <td>+${seasoning.price}$</td>
              <td>+${mayonnaise.price}$</td>
            </tr>
            <tr>
              <td>Каллории:</td>
              <td>${hamburger.calories}</td>
              <td>+${cheese.calories}</td>
              <td>+${salad.calories}</td>
              <td>+${potatoes.calories}</td>
              <td>+${seasoning.calories}$</td>
              <td>+${mayonnaise.calories}$</td>
            </tr>
					</tbody>
				</table>`;
		
		document.write(table);
	}
}

console.log(bigHamburger);
console.log(smallHamburger);

HamburgerCondition.render(bigHamburger);   
   
   