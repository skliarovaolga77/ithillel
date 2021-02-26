
//разбор лекции



// var array = [10,'hello',undefined,true, 100];
// console.log(array);

// function modifyValue(value){
	//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//     //Spread оператор ...
//     var myArray = [...value];//все элементы массива скопируются в myArray
//     console.log(myArray);
	
// 	// for(i=0; i<value.length; i++){
// 	// 	myArray[i] = value[i]*10;
// 	// }

// 	myArray[0] = 'MY VALUE';
// 	return myArray;
// }

// // string, number, bolean;


// console.log(modifyValue(array));
// console.log(array);

// function rainbow(red, green, blue, ...colors){
// 	// console.log(red, green, blue);
// 	console.log(colors);//вывод остаток , те есть вывод будет массив 'orange', 'yellow'
// }
// rainbow('red', 'green', 'blue', 'orange', 'yellow');

// function summFunc(...chisla) {
// 	// console.log(chisla);

// 	for (summa=0, i=0; i<chisla.length; i++){
// 		summa += chisla[i];
// 	}
// 	return summa;
// }

// console.log(summFunc(10,20));//вывод сумма чисел 10+20
// console.log(summFunc(10,20,30));//вывод сумма чисел 10+20+30

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//Rest это на остаток  создается массив, напр chisla
// function summFunc(x, y, ...chisla){
// 	console.log(x, y);
// 	console.log(chisla);
// 	// console.log(lastNumer);

// 	for(summ=0,i=0; i<chisla.length; i++){
// 		summ += chisla[i];
// 	}

// 	return summ;
// }

// console.log( summFunc('Petya','Vasya',30,40,50) );
// console.log( summFunc(10,20,30,40,50) );



//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//arguments - скрытый массив
// function foo(x,y){
// 	var c = 100;
// 	//arguments это только то что с скобках
// 	//100 не выведется, вывод 10,20
// 	console.log(arguments);

// }
// foo(10,20);


//arguments использовался до появления ...masiv
//не применяются методы
// function foo(){
// 	//вывод 'Petya','Vasya',30,40,50
// 	console.log(arguments);
// 	for(i=0;i<arguments.length; i++ ){
// 		console.log(arguments[i]);// вывод в столбик 'Petya','Vasya',30,40,50
// 	}

// }
// foo('Petya','Vasya',30,40,50);

//можно создать новый массив и передать туда arguments
// function foo(){
// 	var localArr = ['list', ...arguments];
// 	console.log(arguments);// вывод аргументы кторые в скобках ( передаются), те 'Petya','Vasya',30,40,50
// 	localArr.reverse();
// 	localArr.unshift('super');//добавить первым super
// 	console.log(localArr);// новый массив , поменяли значения
// 	// for(i=0;i<arguments.length; i++ ){
// 	// 	console.log(arguments[i]);// вывод в столбик 'Petya','Vasya',30,40,50
// 	// }

// }
// foo('Petya','Vasya',30,40,50);



