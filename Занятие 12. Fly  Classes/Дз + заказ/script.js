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

  cheese(a=1,b=20){
    return `c сыром:
            <span>+${a}$, +${b} калорий</span>`;
  }
  salad(a=2,b=5){
    return `c салатом:
    <span>+${a}$, +${b} калорий</span>`;
  }
  potatoes(a=1,b=10){
    return `c картофелем:
    <span>+${a}$, +${b} калорий</span>`;
  }
  seasoning(a,b){
    return `c приправой:
    <span>+${a}$, +${b} калорий</span>`;
    
  }
  mayonnaise(a,b){
    let mayonnaiseA = 
    `c майонезом:
     <span>+${a}$, +${b} калорий</span>`;
    return mayonnaiseA;
  }
  
  render(){
    document.write(`
                    <div class="Hamburger">
                      <div class="manuHamburger">
                        <h1>Меню
                        <span>${this.name}</span></h1>
                        <img src="img/${this.name}.png" class="img-bigHamburger" alt="">
                        <div>${this.price}$, ${this.calories} калорий</div>
                      </div>
                      <ul class="list">
                        <li class="item">
                          <img src="img/cheese.png" class="img-photo" alt="">
                          <div class="item-text">${this.cheese()}</div>
                        </li>
                        <li class="item">
                          <img src="img/salad.jpg" class="img-photo" alt="">
                          <div class="item-text">${this.salad()}</div>
                        </li>
                        <li class="item">
                          <img src="img/potatoes.jpg" class="img-photo" alt="">
                          <div class="item-text">${ this.potatoes()}</div>
                        </li>
                        <li class="item">
                          <img src="img/flavoring.jpg" class="img-photo" alt="">
                          <div class="item-text">${this.seasoning(1.5,0)}</div>
                        </li>
                        <li class="item">
                          <img src="img/mayonnaise.jpg" class="img-photo" alt="">
                          <div class="item-text">${this.mayonnaise(1.5,0)}</div>
                        </li>
                      </ul>
                  </div>
                `);
  } 
  
}

class RunwayCondition{

	static renderTable(hamburger,additives){
    console.log(hamburger.price);
    hamburger.render(additives);
    console.log(additives);
		//ставим верстку
      let table = `
              <div class="Hamburger">
                <div class="manuHamburger">
                  <h1>Заказ 
                  <span>${hamburger.name}</span></h1>
                  <img src="img/${hamburger.name}.png" class="img-bigHamburger" alt="">
                  <div>${hamburger.price}$ , ${hamburger.calories} калорий</div>
                </div>
                  <div class="item">
                    <img src="img/cheese.png" class="img-photo" alt="">
                    <div class="item-text">${hamburger.cheese()}</div>
            </div>
          `;
      document.write(table);
  }

}

let 
    bigHamburger = new Hamburger('BigHamburger',10,40),
    smallHamburger = new Hamburger('SmallHamburger',5,20);

RunwayCondition.renderTable(bigHamburger,5);//первое значение (bigHamburger) передается в class RunwayCondition - это hamburger,
                                            // второе значение additives,добавки и приправы 
                                            //и выводим справо вместо 5
console.log(bigHamburger);
console.log(smallHamburger);
// bigHamburger.render();
// smallHamburger.render();


   
// getPrice(pricelement){
//   return this.price + pricelement;
// }
// getCalories(calorieslement){
//   return this.calories + calorieslement;
// }
    
   
   
   