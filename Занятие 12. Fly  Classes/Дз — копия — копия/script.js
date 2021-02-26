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

const Hamburger = {
  //Hamburger.additives.cheese - гамбургес с добавкой cheese
  //добавки
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
  condiments:{
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

class Hamburgers{
  //additives=[] - массив для того что бы можно было добавлять зачения(добавлять несколько additives) , а неперезаписывать 
      constructor(name,additives=[],condiments=[]){
      this.name = name;
      this.additives = additives;
      this.condiments = condiments;
    }
    //set - добавить в зависимости от типа какието игридиенты
    setHamburger(type, ingredients){
      console.log(this);
      //this[type] - additives
      this[type].push(ingredients);

    }
}

let 
    bigHamburger = new Hamburgers('BigHamburger',[Hamburger.additives.cheese],[Hamburger.condiments.seasoning]);//если нет какого значения- обязательно !!!
    // пишем undefined
    smallHamburger = new Hamburgers('smallHamburger',undefined,[Hamburger.condiments.seasoning]);

    //добавить additives
// smallHamburger.additives = Hamburger.additives.cheese;
smallHamburger.setHamburger('additives', Hamburger.additives.cheese);
smallHamburger.setHamburger('additives', Hamburger.additives.salad);
bigHamburger.setHamburger('additives', {name:'salt'});//добавили имя salt - 1: {name: "salt"}

console.log(bigHamburger);
console.log(smallHamburger);


    
   

    
   
   
   