const days = ['monday','tuesday','wednesday','thursday','friday'];
const users = ['Anna', 'Oleg','Irina', 'Ivan'];

let HOUR_START = 10;
let HOUR_END = 18;
let HOURS = [];

let usersSelect = document.querySelector('#usersSelect'),
	daysSelect = document.querySelector('#daysSelect'),
	hoursSelect = document.querySelector('#hoursSelect'),
	eventName = document.querySelector('#eventName'),
	popup__wrapper = document.querySelector('#popup__wrapper'),
	info = popup__wrapper.querySelector('.info');


let usersOptions = users.map(function(user){
	return `<option value="${user}">${user}</option>`;
})
usersSelect.innerHTML = usersOptions.join('');

let daysOptions = days.map(function(day){
	return `<option value="${day}">${day}</option>`;
})
daysSelect.innerHTML = daysOptions.join('');


for(; HOUR_START<=HOUR_END; HOUR_START++){
	let hour = `<option value="${HOUR_START}">${HOUR_START}:00</option>`;
	HOURS.push(hour);
}
hoursSelect.innerHTML = HOURS.join('');


let addEventForm = document.querySelector('#addEventForm');
addEventForm.addEventListener('submit',getDataForm);
//удалить дефолтные события form
function getDataForm(e){
	e.preventDefault();
	//забираем данные введение user
	let event = eventName.value;
	console.log(event);//вывод введенного в input Имени
	let	users = [...usersSelect.selectedOptions],
		day = daysSelect.value,
		hour = hoursSelect.value;

		users = users.map(function(user){
			return user.value;
		})
		console.log(day,hour);

	let calendar = JSON.parse(localStorage.calendar);

//проверка данных записаны в calendarили нет
	if(calendar[day] && calendar[day][hour]){
		info.classList.add('error');
		info.innerHTML = `Event for ${day} at ${hour} exist! Please, select another day or hour.`;
	} else {
		calendar[day] = calendar[day] ? calendar[day] : {};
		calendar[day][hour] = {
			name: event,
			users: users
		}
		//console.log(calendar);
	
		localStorage.calendar = JSON.stringify(calendar);

		info.classList.add('success');
		info.innerHTML = `Event for ${day} at ${hour} successfully added!`;
	}
}

let openForm = document.querySelector('#openForm'),
	popup = document.querySelector('#popup'),
	popup__close = document.querySelector('#popup__close');

openForm.addEventListener('click',function(e){
	e.stopPropagation();
	popup.classList.add('shown');//display:flex
})

popup__close.addEventListener('click',function(){
	closePopup();
})

document.addEventListener('click',function(){
	closePopup();
})

popup__wrapper.addEventListener('click',function(e){
	e.stopPropagation();
})

function closePopup(){
	info.classList.remove('success','error');
	info.innerHTML = ``;

	popup.classList.remove('shown');
}


//localStorage

// localStorage.setItem('hello','privet');
// localStorage.setItem('age',23);
// localStorage.setItem('married',true);

// let friends = {
// 	name: 'Anna',
// 	age: 100,
// 	animals: ['cat','dog']
// };

// localStorage.setItem('friends',JSON.stringify(friends));

// console.log(localStorage.getItem('age'));// вывод в консоль 23

// let friendsFromLocal = JSON.parse(localStorage.getItem('friends'));
// console.log(friendsFromLocal);
// console.log(friendsFromLocal.name);

//console.log(localStorage.getItem('anna'));

