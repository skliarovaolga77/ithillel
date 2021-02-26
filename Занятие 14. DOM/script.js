

// let Anna = new Person('Anna', {dogs: [Pets.dogs.Bella, Pets.dogs.Max], birds: [Pets.birds.Lola]} );
// console.log(Anna);

// let Oleg = new Person('Oleg', {dogs: [Pets.dogs.Charlie], cats: [Pets.cats.Sam]});
// console.log(Oleg);


// // Oleg.birds = Pets.birds.Jasper;
// Oleg.setPet('birds', Pets.birds.Jasper);
// Oleg.setPet('birds', {name: 'Kesha'});

// //Anna.setPet('dogs',{name:'Golf'});

// Anna.setYearOfBirth('dogs');
// //Oleg.setYearOfBirth('cats');

// Oleg.setYearOfBirth();

// Oleg.getPetsIcon('birds');

// Anna.getPetsIcon();


// DOM

// console.dir(document);

// console.dir(document.all);

// for(let key in document.all){
// 	console.dir(document.all[key]);
// }

let myH1 = document.querySelector('h1');
console.dir(myH1);


// setTimeout(function(){
// 	myH1.outerHTML = '<h2 class="new">Pri<em>vet</em>ik</h2>';
// }, 1000);


let myP = document.querySelectorAll('p');
console.dir(myP);

myP.forEach(function(p,index){
	setTimeout(function(){
		p.innerHTML = 'Hello, <b>world!</b>';
	},1000+(index*1000));
})


let secondP = document.querySelector('p:nth-child(2)');
// secondP.style.backgroundColor = 'red';
// secondP.style.color = 'white';
// secondP.style.padding = '10px';
secondP.className = 'p--bright';

// setTimeout(function(){
	// secondP.style.backgroundColor = 'blue';
	// secondP.style.color = 'black';
	// secondP.style.padding = '15px';
// 	//secondP.className = 'p--dark';

// 	//secondP.className += ' p--border';
// 	secondP.classList.add('p--border');
// },2000);

// setTimeout(function(){
// 	secondP.classList.remove('p--bright');
// },3000);

// setTimeout(function(){
// 	console.log(secondP.classList.contains('p--border'));
// },4000);

let myPhello = document.querySelector('#hello');

setInterval(function(){
	myPhello.classList.toggle('again');
},1000);


// onmouseover
// onmouseout
// onmousemove

// onmouseenter
// onmouseleave

// ondblclick
// oncontextmenu