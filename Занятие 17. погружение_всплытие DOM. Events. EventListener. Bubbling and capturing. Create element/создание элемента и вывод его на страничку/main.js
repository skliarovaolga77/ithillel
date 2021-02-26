//создание элемента и вывод его на страничку

let wrapper = document.querySelector('#wrapper');
console.log(wrapper);

//если в html было, напро h2?то полностьб перезапишется и выведется только  h1
// wrapper.innerHTML = `<h1>hello</h1>`;
//что бы добавить к текущему нужно добавить +
wrapper.innerHTML += `<h1>hello</h1>`;
let h1 = wrapper.querySelector('h1');
h1.classList.add('hello');

//создать новый эл-т через js
let h4 = document.createElement('h4');
h4.innerHTML = 'создать h4';
h4.classList.add('new-elem','second','clas');
// h4.classList.remove('clas');// удалить класс
console.dir(h4);
//добавить h4 внутрь wrapper
wrapper.appendChild(h4); //вывод <h4 class="new-elem second clas">создать h4</h4>


// Пример
//данные по Cooper
// let Cooper = 
// 	{
// 		text: 'Mini Cooper',
// 		sale: true,
// 		price: 100000
// 	}


// //соз-ть эл-т cars (это будет div )
// let car = document.querySelector('div');
// // и этому div добавить позиции
// //в качестве ткста будет нах-с то,что нах-ся в Cooper в text
// car.innerHTML = `<b>${Cooper.text}</b>`;
// car.classList.add('car'); //classList - массив
// car.dataset.sale= Cooper.sale;
// car.dataset.price = Cooper.price;
// console.dir(car);

// let cars = document.createElement('#cars');
// console.log(cars);
// //в div из html добавляем созданный car
// cars.appendChild(car);

// Пример
//массив входящих данных

let newCars = [
	{
		text: 'Mini Cooper',
		sale: true,
		price: 100000
	},
	{
		text: 'Audi TT',
		sale: true,
		price: 50000
	},
	{
		text: 'Audi RS',
		sale: false,
		price: 50000
	}
];
console.log(newCars);
let cars = document.querySelector('#cars');
newCars.forEach(function(car){
    console.log(car);
    let newCar = document.createElement('div');

    newCar.innerHTML = `<b>${car.text}</b>`;
    newCar.classList.add('car'); 
    newCar.dataset.sale= car.sale;
    newCar.dataset.price = car.price;

    console.dir(newCar);
   cars.appendChild(newCar);
});