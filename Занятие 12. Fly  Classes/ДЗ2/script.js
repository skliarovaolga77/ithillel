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
let line = ('--------------------');
// let fillings = [cheese,salad,potatoes];
class Hamburger{
    constructor(name){
    this.name = name;
    
  }
  menu(price,calories){
    this.price = price;
    this.calories = calories;
    return `${this.name}  ${this.price}$, ${this.calories} калорий`;
  }
  getPrice(pricelement){
    return this.price + pricelement;
  }
  getCalories(calorieslement){
    return this.calories + calorieslement;
  }

  cheeseHamburger(a,b){
    return `${this.name} c сыром: ${this.getPrice(a)}$, ${this.getCalories(b)} калорий`;
  }
  saladHamburger(a,b){
    return `${this.name} c салатом: ${this.getPrice(a)}$, ${this.getCalories(b)} калорий`;
  }
  potatoesHamburger(a,b){
    return `${this.name} c картофелем: ${this.getPrice(a)}$, ${this.getCalories(b)} калорий`;
  }
  seasoningHamburger(a,b){
    return `${this.name}  c приправой: ${this.getPrice(a)}$, ${this.getCalories(b)} калорий`;
  }
  mayonnaiseHamburger(a,b){
    return `${this.name} c майонезом: ${this.getPrice(a)}$, ${this.getCalories(b)} калорий`;
  }

}
let bigHamburger = new Hamburger('BigHamburger'),
    smallHamburger = new Hamburger('SmallHamburger');



    console.log(bigHamburger);
    console.log(smallHamburger);
    console.log(line);
    console.log(bigHamburger.menu(5,20));//5-price, 20 - calories
    console.log(smallHamburger.menu(10,40));//20-price, 40 - calories
    console.log(line);
    console.log(bigHamburger.cheeseHamburger(1,20));//1-price, 20 - calories
    console.log(smallHamburger.cheeseHamburger(1,20));
    console.log(line);
    console.log(bigHamburger.saladHamburger(2,5));
    console.log(smallHamburger.saladHamburger(2,5));
    console.log(line);
    console.log(bigHamburger.potatoesHamburger(1,10));//1,5
    console.log(smallHamburger.potatoesHamburger(1,10));//1,5
    console.log(line);
    console.log(bigHamburger.seasoningHamburger(1.5,0));//1,5
    console.log(smallHamburger.seasoningHamburger(1.5,0));//1,5
    console.log(line);
    console.log(bigHamburger.mayonnaiseHamburger(1.5,0));//1,5
    console.log(smallHamburger.mayonnaiseHamburger(1.5,0));//1,5