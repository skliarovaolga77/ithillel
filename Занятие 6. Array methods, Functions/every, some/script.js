// every, some – отсеять по определенному критерию, возвращает boolean.
// Функции предикаты – возвращают буленовские значения.
// every проверка на заданое true false ко всему элементу 
//some проверка на заданое true false,оты бф к какому то эл



let arrD = [10,20,30,50];
//возвращает если все эл массива соответствуют правилу
let result = arrD.every(function(element){
    return typeof element === 'number';
})
console.log(result);//вывод true. тк все [10,20,30,50] явялются цифрами

//
let arrD2 = [10,20,30,true,50];
//возвращает если все эл массива соответствуют правилу
let result2 = arrD.every(function(element){
    return typeof element === 'number';
})
console.log(result2);//вывод false тк не все [10,20,30,true,50] явялются цифрами

let animals = [
    	['cat'],
    	['dog', true],
    	['fox']
    ];
    
    let everyResult = animals
    						.every(function(element){
    							return element[1] !== undefined;
    						});
    console.log(`Method every: ${everyResult}`);
    
    let someResult = animals
    						.some(function(element){
    							return element[1] !== undefined;
    						});
    console.log(`Method some: ${someResult}`);