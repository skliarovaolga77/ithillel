



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
      constructor(name,size,ingredients={}){
      this.name = name,
      this.size = size,
      this.ingredients = ingredients
      }

    //set - добавить в зависимости от типа какие то игридиенты
    setIngredients(type,ingredient){
      console.log(ingredient);
      //проверка есть ли у user такой массив 
      if(!this[type]){
        //если нет ,создать массив в к-й потом push
        this[type] = [ingredient];
        this['ingredients'][type].push(ingredient);
      } else{
        //если есть добвляем в этот массив
        this['ingredients'][type].push(ingredient);
      }

    }
  
  //берет тип проходиться и выводит уже все с добавленным
    setPrice(type,value){
      // console.log(value.size.price);
      let arrayIngredients = this.ingredients[type];
        // console.log(arrayIngredients);
        if(arrayIngredients.length>0){
          arrayIngredients.map(function(ing){
            // console.log( ing.price);
            // console.log( ing.calories);
            // console.log(value.size.price);
            ing.price += value.size.price;
            ing.calories += value.size.calories;
            console.log(ing);
                  // return ing;
          }) 
        }

    }
 
    
}

let bigHamburger = new Hamburgers('bigHamburger', Hamburger.size.big, {additives:[Hamburger.additives.cheese],condiments: [Hamburger.condiments.seasoning]});
    console.log(bigHamburger);
let smallHamburger = new Hamburgers('smallHamburger', Hamburger.size.small,{additives:[Hamburger.additives.cheese]});
    console.log(smallHamburger);

    bigHamburger.setPrice('additives',smallHamburger);
 

  
  

    
    
   

    
   
   
   




