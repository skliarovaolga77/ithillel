//Написать функцию, которая принимает как аргумент(параметр) два массива и сравнивает суммы всех ЧИСЛОВЫХ элементов. 
//Тот массив, сумма которого большая – должен вернутся функцией.
a = [1,2,3, 'hello',4,5];
b = [1,2,3, true, 4, undefined, 6];
function f1(){
 console.log(arguments);

 let numberArrayA = [];
 let numberArrayB = [];

 for(let i=0, sum=0;i<arguments[0].length;i++){
  if(typeof arguments[0][i] === 'number'){
   numberArrayA.push(arguments[0][i]);
  }
  
 }
 console.log(numberArrayA);

 for(let i=0;i<arguments[1].length;i++){
  if(typeof arguments[1][i] === 'number'){
   numberArrayB.push(arguments[1][i]);
  }
 }
 console.log(numberArrayB);

 

function summ(element){
 let summ = 0;
  for( let i=0;i<element.length; i++){
   summ += element[i];
  }
 
 return `рез-т ф-ции summ: ${summ}`;
 
}
summ(numberArrayA);
summ(numberArrayB);
 
} 

f1(a,b);
console.log(summ);