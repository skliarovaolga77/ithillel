
//Если аргументы a и b не переданы, они равны по умолчанию 2 и 3 соответсвенно.

//Если аргумент c передан и он является функцией, то он выполняется после вызова функции sum.

//Функция f должна возвращать результат функции аргумента c, если он есть, либо результат функции sum.

function f (a=2, b=3, c) { 

    let sumResult = sum(a, b);

    //вызываю с , которая является функцией multiply

    //сохраняем результат в новую переменную multiplyResult

    //проверка на функцию

    // если c функция, 

    //возвращаем сумму двух фукций а и b и с(а это сумму а и b *10)

    //если нет возвращаем сумму а и b

        if(typeof c === 'function'){

            // console.log(typeof c);

            var multiplyResult = c(sumResult);

            //multiplyResult не let так как нужна видимость ее не только в if

        }else multiplyResult = sumResult;

    //возвращаем сумму двух фукций а и b и с(а это сумму а и b *10)

    return multiplyResult;

    } 

    //переменные x y локальные и их значения применительны только в этой функции

    function sum(x, y){

    return x + y;

  }

  function multiply(value){

    return value * 10;

  }

  

  console.log( f(2,undefined,multiply));



