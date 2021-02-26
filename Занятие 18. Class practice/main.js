
//myCalendar
let data = {
    monday: {
        //ключ- время ,св-ва - значения
        10: {
            name: 'Daily Meeting',
            users: ['Anna', 'Ivan']
        },
        18: {
            name: 'Scrum Meeting',
            users: ['Anna', 'Oleg']
        }
    },
    friday: {
        13: {
            name: 'Grooming',
            users: ['Irina', 'Ivan']
        },
        18: {
            name: 'Scrum Meeting',
            users: ['Anna', 'Irina']
        }
    }

};
const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

class Calendar {
    constructor() {
        //внутрь поля Calendar пойдет то,что вернет метод 
        this.calendar = this.createCalendar();
    }

    //создали  календарь-объект =  св-ва недели и значение время
    //заголовки
    createCalendar() {
        let calendar = {};

        days.forEach(function (day) {
            // console.log(day);
            let hours = {};
            for (let i = 10; i <= 18; i++) {
                hours[i] = {};
            }
            //св-во monday(calendar[day]): значение 10(hours(hours[i]))
            calendar[day] = hours;
        });

        return calendar;
    }

    //создаем trs
    generateTr() {
        let trs = [],
            hour = 10;

        for (let i = 10; i <= 18; i++) {
            let tds = [`<td>${hour}</td>`];

            // (let td=0; td<Object.keys(this.calendar).length+1; td++ )
            for (let td = 0; td < days.length; td++) {
                // console.log(days[td]);
                tds.push(`<td data-hour="${hour}" data-day="${days[td]}"></td>`);
            }
            //в tr все td
            let tr = `<tr>${tds.join('')}</tr>`
            //  console.log(tr);
            trs.push(tr);
            //  console.log(trs);
            hour++;
        }
        return trs;
    }

    //создаем ths (заголовки)
    generateThs() {

        let ths = [];
        for (let key in this.calendar) {
            // console.log(key);//monday ...
            ths.push(`<th>${key}</th>`);

        }
        return ths;
    }

    //рисуем календарь (таблица)
    renderCalendar() {

        let table = document.createElement('table'),
            thead = table.createTHead(),
            tbody = table.createTBody();

        thead.innerHTML = `<tr><th>Name</th>${this.generateThs().join('')}</tr>`;
        tbody.innerHTML = `${this.generateTr().join('')}`;
        document.body.append(table);

        this.getUsers();
        //в начало body засунули то что возвращает метод renderUsers
        //Но prepend вернет только весь hml <select><options data-user="Ann....
        //поэтому нужно в renderUsers сделать select
        document.body.prepend(this.renderUsers());

    }

    //заполняем данными,к-е приши от user
    fillData(userName) {
        // console.log(this);//наш календарь
        // console.log(data);//данными,к-е приши от user
        let MYCL = this.calendar;
        // console.log(MYCL);//наш календарь

        //условия -данные от user ставим в календарь    
        for (let key in data) {
            //если в календаре есть поле с таким же ключом как в данных от user
            if (MYCL[key]) {
                let dayInMyCL = MYCL[key]; //это значения календаря - массив с часы (10,111..)

                    
                    for (let event in data[key]) {
                        if(userName){
                            if(data[key][event].users && data[key][event].users.includes(userName)){
                                // console.log(data[key][event]);
                             // console.log(data[key]);//прошлись по ключам данныx,к-е приши от user (data[key])
                             // console.log(`event: ${event}`);// //ключ - 10: {name: "Daily Meeting", users: Array(2)}
                             // console.log(data[key][event]);//значение - name: "Daily Meeting", users: Array(2)
                             dayInMyCL[event] = data[key][event]; // в календарь , в его значение засуннули значение ,к-е пришлоот user
                             //при условии что оно равно такому же значению
                             }else {
                                dayInMyCL[event] = '';
                             }

                        } else {
                            dayInMyCL[event] = data[key][event];
                        }
                        
                    }
            }

        }
      
        this.renderData();
    }

    //данные,полученные от user вывести в таблицу
    //вызываем его в  fillData
    renderData() {
        // console.log(this);
        //найти все не пустые значения
        //прошлись по данным user

        let myCL = this.calendar;
        for (let key in myCL) {
            let day = myCL[key];

            //прошлись по дням, заполн-м в нашем календаре
            for (let event in day) {
                // console.log(day[event]);//значение

                //заполняем td
                let td = document.querySelector(`td[data-hour="${event}"][data-day="${key}"]`);
                td.innerHTML = Object.keys(day[event]).length > 0 ? this.renderEvent(day[event]) : '';
            }
        }
        this.addRemoveEvent();
    }

    // вызываться в renderData
    renderEvent(event) {
        // console.log(event);
        return `<div class="event">${event.name} <img class="removeEvent" src="images/cancel.svg" alt="cancel" width="13"></div>`

    }

    addRemoveEvent() {
        let removeEvents = document.querySelectorAll('.removeEvent');
        // console.log(removeEvents);
        removeEvents.forEach(function (btn) {
            // console.log(btn);
            btn.addEventListener('click', function (e) {
                // console.dir(this);
                let td = this.parentElement.parentElement,
                    hour = td.dataset.hour,
                    day = td.dataset.day;
                // console.log( myCalendar.calendar[day][hour]);
                //Обнулилии св-ва
                myCalendar.calendar[day][hour] = {};
                // console.log(myCalendar);
                //удалить
                myCalendar.renderData();
            })
        });
    }

    // Получить Users
    //выз-м когда заполняем календарь датой fillData()
    getUsers(){
        //обр-ся в глобальному об-ту data
        //ищем в нем 
        let users = [];
        //форм-м массив
        //прошлись по приходящим нашим данным
        for (let key in data){
            // console.log(data);
            for(let event in data[key]){
                // console.log(data[key]);
                // console.log(data[key][event]);
                // console.log(data[key][event].users);// ["Anna", "Irina"]
                users.push(data[key][event].users);
            }
        }
        console.log(users);
        //собрали все имена в отдельный объект users из нескольких массивов методом flat
        //получили users
        myCalendar.users = users.flat().filter((v, i, a) => a.indexOf(v) === i);
        // console.log(myCalendar);

    }

    //отрисовать Users , вызываем в fillData
    renderUsers(){
        //option - user
        let options = [`<option value="all">All users</option>`];
        // console.log(this);
        //перебираем всех users
        for (let key in this.users){
            options.push(`<option data-user="${this.users[key]}">${this.users[key]}</option>`);
        }


        //так как prepend в renderCalendar возвращает на строку весь html
        //создаем select
        let select = document.createElement('select');
		select.innerHTML = `${options.join('')}`;
        // console.log(select);
        select.addEventListener('change',this.getUserEvent);
        return select;
    }

    getUserEvent(e){
    let selectedUser = e.target.value == 'all' ? undefined : e.target.value;
    // console.log(selectedUser);
    myCalendar.fillData(selectedUser);
    }

}
let myCalendar = new Calendar();
// console.log(myCalendar);
// Calendar.createCalendar();

myCalendar.renderCalendar();
myCalendar.fillData(data);





//localStorage

// localStorage.setItem('hello','privet');
// localStorage.setItem('age',23);
// localStorage.setItem('married',true);

// let friends = {
//  name: 'Anna',
//  age: 100,
//  animals: ['cat','dog']
// };

// localStorage.setItem('friends',JSON.stringify(friends));

// console.log(localStorage.getItem('age'));// вывод в консоль 23

// let friendsFromLocal = JSON.parse(localStorage.getItem('friends'));
// console.log(friendsFromLocal);
// console.log(friendsFromLocal.name);

//console.log(localStorage.getItem('anna'));

