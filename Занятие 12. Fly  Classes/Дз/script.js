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
const Hamburger = {
  //Hamburger.additives.cheese - гамбургес с добавкой cheese
  //добавки
  
  size: {
    big: {
      price: 10,
      calories: 40

    },
    small: {
      price: 5,
      calories: 20

    }
  },
  additives: {
    cheese: {
      name: 'cheese',
      price: 1,
      calories: 20
    },
    salad: {
      name: 'salad',
      price: 2,
      calories: 5
    },
    potatoes: {
      name: 'potatoes',
      price: 1,
      calories: 10
    }
  },
  //приправы
  condiments: {
    seasoning: {
      name: 'seasoning',
      price: 1.5,
      calories: 10
    },
    mayonnaise: {
      name: 'mayonnaise',
      price: 1.5,
      calories: 10
    }
  }

}
console.log(Hamburger);

class Hamburgers {
  //additives=[] - массив для того что бы можно было добавлять зачения(добавлять несколько additives) , а неперезаписывать 
  constructor(name, size, ingredients = {}) {
    this.name = name,
      this.size = size,
      this.ingredients = ingredients
  }

  //set - добавить в зависимости от типа какие то игридиенты
  setIngredients(type, ingredient) {
    // console.log(ingredient);
    //проверка есть ли у user такой массив 
    if (!this[type]) {
      //если нет ,создать массив в к-й потом push
      this.ingredients[type] = [ingredient];
    } else {
      //если есть добвляем в этот массив
      this.ingredients[type].push(ingredient);
    }

  }

  //берет тип проходиться и выводит уже все с добавленным
  getPrice(type) {
    // this.ingredients[type] - this это additives ingredients
    //ingredients - потому что  все ингредиенты находятся в свойстве ingredients
    //[type] - весь массив {name: "cheese", price: 1, calories: 20}
    // console.log(this.ingredients[type]);
    let resultSum;
    if (type) {
      let arrayIngredients = this.ingredients[type];
      // console.log(arrayIngredients); //0: {name: "cheese", price: 1, calories: 20
      if (arrayIngredients.length > 0) {
        resultSum = arrayIngredients.reduce(function (finalPrice, ing) {
          return finalPrice + ing.price
        }, 0);
      }
      // if(type){
      //   this.getNamePrice(type);

      if (type == 'additives') {
        type = 'начинках';
      } else if (type == 'condiments') {
        type = 'приправах';
      }
      console.log(`Сумма в ${type} для ${this.name} : ${resultSum}$`);

    } else {
      let summForIngredients = 0;
      for (let key in this.ingredients) {
        summForIngredients += this.getPrice(key);
      }
      //console.log(summForIngredients);

      resultSum = summForIngredients + this.size.price;
      console.log(`Общая сумма каллорий для ${this.name} : ${resultSum}$`);
    }

    return resultSum;
  }

  getCalories(type) {
    let resultSum;
    if (type) {
      let arrayIngredients = this.ingredients[type];

      // console.log(arrayIngredients); //0: {name: "cheese", price: 1, calories: 20
      if (arrayIngredients.length > 0) {
        resultSum = arrayIngredients.reduce(function (finalCalories, ing) {
          return finalCalories + ing.calories
        }, 0);
      }
      // if(type){
      // this.getNameCalories(type);//не смогла ф-цию подключить, вместо проверки if

      if (type == 'additives') {
        type = 'начинках';
      } else if (type == 'condiments') {
        type = 'приправах';
      }
      console.log(`Каллорий в ${type} для ${this.name} : ${resultSum} сalories`);

    } else {
      let summForIngredients = 0;
      for (let key in this.ingredients) {
        summForIngredients += this.getCalories(key);
      }
      //console.log(summForIngredients);

      resultSum = summForIngredients + this.size.calories;
      console.log(`Общая сумма каллорий для ${this.name} : ${resultSum} сalories`);
    }
    return resultSum;
  }
  getNamePrice(type) {
    if (type == 'additives') {
      type = 'начинках';
    } else if (type == 'condiments') {
      type = 'приправах';
    }
    return `Сумма в ${type} для ${this.name} : ${resultSum}$`;
  }
  getNameCalories(type) {
    if (type == 'additives') {
      type = 'начинках';
    } else if (type == 'condiments') {
      type = 'приправах';
    }
    return `Каллорий в ${type} для ${this.name} : ${resultSum} сalories`;
  }
}

let bigHamburger = new Hamburgers('bigHamburger', Hamburger.size.big, {
  additives: [Hamburger.additives.cheese],
  condiments: [Hamburger.condiments.seasoning]
});
let smallHamburger = new Hamburgers('smallHamburger', Hamburger.size.small, {
  additives: [Hamburger.additives.cheese]
});

//  BigHamburger с салатом и приправой 
let saladBigHamburger = new Hamburgers('saladBigHamburger', Hamburger.size.big, {
  additives: [Hamburger.additives.salad],
  condiments: [Hamburger.condiments.seasoning]
});
//  BigHamburger с сыром и майонезом
let cheeseBigHamburger = new Hamburgers('cheeseBigHamburger', Hamburger.size.big, {
  additives: [Hamburger.additives.cheese],
  condiments: [Hamburger.condiments.mayonnaise]
});
console.log(cheeseBigHamburger);

console.log(saladBigHamburger);
saladBigHamburger.getPrice();
console.log(line);
saladBigHamburger.getCalories();
console.log(line);

bigHamburger.getPrice();
bigHamburger.getCalories();
console.log('--------------------');

smallHamburger.getPrice();
smallHamburger.getCalories();
console.log('--------------------');

cheeseBigHamburger.getPrice();
cheeseBigHamburger.getCalories();
console.log('--------------------');
