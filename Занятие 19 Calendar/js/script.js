let data = {
	monday:
		{
			10: {
				name: 'Daily Meeting',
				users: ['Anna', 'Ivan']
			},
			18: {
				name: 'Scrum Meeting',
				users: ['Anna', 'Oleg']
			}
		}
	,
	friday: {
		13: {
			name: 'Grooming',
			users: ['Irina', 'Ivan']
		},
		18:
			{
			name: 'Scrum Meeting',
			users: ['Anna', 'Irina']
		}
	}
};

if(localStorage.calendar){
	data = JSON.parse(localStorage.getItem('calendar'));
} else{
	localStorage.setItem('calendar',JSON.stringify(data));
}

const days = ['monday','tuesday','wednesday','thursday','friday'];

class Calendar{

	constructor(){
		this.calendar = this.createCalendar();
	}

	createCalendar(){
		let calendar = {};

		days.forEach(function(day){
			let hours = {};
				for(let i=10; i<=18; i++){
					hours[i] = {};
				}
			calendar[day] = hours;
		});
		return calendar;
	}

	renderCalendar(){
		let ths = [],
			trs = [],
			hour = 10;

		for(let i=10; i<=18; i++){
			let tds = [`<td>${hour}:00</td>`];

			for(let td=0; td<days.length; td++){
				tds.push(`<td data-hour="${hour}" data-day="${days[td]}"></td>`);
			}

			let tr = `<tr>${tds.join('')}</tr>`;
			trs.push(tr);

			hour++;
		}

		for(let key in this.calendar){
			ths.push(`<th>${key}</th>`);
		}

		let table = document.createElement('table'),
				thead = table.createTHead(),
				tbody = table.createTBody();

		thead.innerHTML = `<tr><th>Name</th>${ths.join('')}</tr>`;
		tbody.innerHTML = `${trs.join('')}`;
		
		let maket = document.createElement('div');
		maket.classList.add('maket');

		let maket__info = document.createElement('div');
		maket__info.classList.add('maket__info');

		this.getUsers();
		maket__info.append(this.renderUsers());
		maket__info.append(this.renderBtnAdd());
		maket__info.append(this.renderLinkAdd());

		maket.append(maket__info);
		maket.append(table);

		document.body.append(maket);
	}

	renderBtnAdd(){
		let btnAdd = document.createElement('button');
		btnAdd.classList.add('btn');
		btnAdd.id = 'btnAdd';
		btnAdd.innerText = '+ Event';
		return btnAdd;
	}

	renderLinkAdd(){
		let linkAdd = document.createElement('a');
		linkAdd.classList.add('btn');
		linkAdd.id = 'linkAdd';
		linkAdd.innerText = '+ Event';
		linkAdd.href = 'form.html';
		linkAdd.target = '_blank';
		return linkAdd;
	}

	fillData(userName){
		console.log(this);
		console.log( this.calendar);
		let MYCL = this.calendar;
		for(let key in data){
			if(MYCL[key]){
				let dayInMyCL = MYCL[key];

				for(let event in data[key]){
					if(userName){
						if(data[key][event].users && data[key][event].users.includes(userName)){
							//console.log(data[key][event]);
							dayInMyCL[event] = data[key][event];
						} else{
							dayInMyCL[event] = '';
						}
					} else{
						dayInMyCL[event] = data[key][event];
					}
				}
			}
		}

		this.renderData();
	}

	renderData(){
		let myCL = this.calendar;
		for(let key in myCL){
			let day = myCL[key];
			for(let event in day){
				let td = document.querySelector(`td[data-hour="${event}"][data-day="${key}"]`);
				td.innerHTML = Object.keys(day[event]).length>0 ? this.renderEvent(day[event]) : '';
			}
		}
		this.addRemoveEvent();
	}

	renderEvent(event){
		return `<div class="event">
			<div class="event__info">${event.name} <img class="removeEvent" src="images/cancel.svg" alt="cancel" width="13"></div>
			<p class="event__users">${event.users.join(', ')}</p>
		</div>`;
	}

	addRemoveEvent(){
		let removeEvents = document.querySelectorAll('.removeEvent');
		removeEvents.forEach(function(btn){
			btn.addEventListener('click',function(e){
				let td = this.closest('td'),
					hour = td.dataset.hour,
					day = td.dataset.day;
					
				//чистим объект календаря
				myCalendar.calendar[day][hour] = {};
				delete data[day][hour];
				localStorage.calendar = JSON.stringify(data);
				myCalendar.renderData();
			})
		});
	}

	getUsers(){
		let users = [];

		for(let key in data){
			for(let event in data[key]){
				users.push(data[key][event].users);
			}
		}

		myCalendar.users = users.flat().filter((v, i, a) => a.indexOf(v) === i);
	}

	renderUsers(){
		let options = ['<option value="all">All users</option>'];
		for(let key in this.users){
			options.push(`<option data-user="${this.users[key]}">${this.users[key]}</option>`)
		}

		let select = document.createElement('select');
		select.innerHTML = `${options.join('')}`;

		select.addEventListener('change',this.getUserEvent);
		return select;
	}

	getUserEvent(e){
		let selectedUser = e.target.value === 'all' ? undefined : e.target.value;
		myCalendar.fillData(selectedUser);
	}

}

let myCalendar = new Calendar();

myCalendar.renderCalendar();
myCalendar.fillData();