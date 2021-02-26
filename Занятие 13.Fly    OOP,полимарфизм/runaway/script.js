//Три аэродрома
//у каждого есть своя полоса с разновидностями
//ПЕРВЫЙ
//класс Airfield это аэродром
//создадим конструктор данных по аэродрому и этот класс будет нам рисовать полосу
//ВТОРОЙ
//класс Aircraft Это самолет
//ТРЕТИЙ
//данные по погоде на текущем аэродроме в данное время,позволяющие садит самолет наданном аэродроме
//данные о самолете
//отризовываем самолет 1  : 45
//Это самолет

class Aircraft{
	constructor(name, sidewind, visibility){
		this.name = name; // первое поле 
		this.sidewind = sidewind; // боковой ветер
		this.visibility = visibility;//допустимая минимальная видимость на полосе
	}
}

//данные о пилоте 
//у него будет имя name 
//у него будет фамилия  surname 
//у него будет и допуски visibility 
class Crew{
	constructor(name, surname, visibility){
		//visibility - максимальный допуск по visibility
		this.name = name;
		this.surname = surname;
		this.visibility = visibility;
	}
}

//данные о полосе
class Airfield{
	constructor(abbr, name, field, visibility){
				this.abbr = abbr; // поле, в к-е приходит первый парамерт
				this.name = name; //полное название 'Kiev Zhuliany','Gostomel', 'Kyiv Boryspil'
				this.field = field; //третий аргумент- массив [8,26,2310,45] 
				this.visibility = visibility;// последний из строки 1500 - максимальная видимость на аэродроме ( в метрах)
			}

//ставим всю верстку 
//отрисовка полосы 
	render(airfield){
		// console.log(this.field);//runaway
		console.log(airfield.name);
		document.write(`
				<div class="runaway">
					<span class="runaway__size">${this.field[2]}x${this.field[3]}</span>
					<img class="plane" src="images/${airfield.name}.svg" alt="airbus-320">
					
					<div class="runaway__lines">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<span class="runaway__number">${this.field[0]}</span>
					
				<span class="runaway__number">${this.field[1]}</span>
				<div class="runaway__lines">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		`);
	}
}

//для текущего самолета и текущей полосы, хочу запросить условия
//поэтому метод static
class RunwayCondition{
	static renderTable(airfield,plane,pilot){
		console.log(plane);
		console.log(airfield);
		airfield.render(plane);

		let metar = METAR[airfield.abbr];
		// console.log(metar);
		let weather = metar.split(' ');
		console.log(weather);
		let visibility = weather[3];
		let wind = +weather[2].slice(0,3);
		let windMPS = +weather[2].slice(3,5);
		let cloudData = Cloudiness[weather[4].slice(0,3)];
		// console.log(Cloudiness);
		// console.log(cloudData);
		// console.log(weather[4].slice(0,4));
		let edge = +weather[4].slice(3)*10;

		let runawayData = weather[7].slice(4);
		console.log(runawayData);
		let runawayER = ER[runawayData[0]];
		let runawayCR = CR[runawayData[1]];
		let runawayeReR = eReR[runawayData.slice(2,4)];
		// console.log(runawayData.slice(2,4));
		let runawayBRBR = runawayData.slice(4)/100;

		//строка горизонтальная видимость
		let visibilityCheck = (plane.visibility>visibility) || (pilot.visibility>visibility) || (airfield.visibility>visibility) ? 'disallowed' : 'allowed';
		let windSpeedCheck = windMPS>plane.sidewind ? 'disallowed' : 'allowed';
		let BRBRCheck = runawayBRBR<BRBR ? 'disallowed' : 'allowed';
		//если visibilityCheck  и windSpeedCheck и BRBRCheck не равен disallowed тогда go
		//те если все параметры зеленые - go
		let planeGo =  visibilityCheck!=='disallowed' && windSpeedCheck!=='disallowed' && BRBRCheck!=='disallowed' ? 'go' : 'stop';

		let runawayDIV = document.querySelector('.runaway');
		console.log(runawayDIV);
		runawayDIV.classList.add(planeGo); // добавили класс 
		// runawayDIV.className = planeGo; // заменили класс 

	
		let planeImg = document.querySelector('.plane');
		console.log(planeImg);
		let numberOfRunaway = weather[7].slice(1,3);
		// console.log(weather[7].slice(1,3));
		console.log(numberOfRunaway);
		console.log(airfield.field[1]);
		console.log(planeImg);

		if(numberOfRunaway !== airfield.field[1]){
			planeImg.classList.add('planeRight');
		}
		
	


		//ставим верстку
		let table = `
				<table class="data">
					<thead>
						<tr>
							<th>Parameters</th>
							<th>Самолет</th>
							<th>Капитан</th>
							<th>Аэропорт</th>
							<th>Runway condition</th>
						</tr>
						<tr>
							<th></th>
							<th>${plane.name}</th>
							<th>${pilot.name} ${pilot.surname}</th>
							<th>${airfield.abbr} ${airfield.surname}</th>
							<th>${metar}</th>
						</tr>
					</thead>
					<tbody>
						<tr class="${visibilityCheck}">
							<td>Горизонтальная видимость:</td>
							<td>${plane.visibility} m</td>
							<td>${pilot.visibility} m</td>
							<td>${airfield.visibility} m</td>
							<td>${visibility} m</td>
						</tr>
						<tr >
							<td>Направление ветра:</td>
							<td></td>
							<td></td>
							<td></td>
							<td>${wind}°</td>
						</tr>
						<tr class="${windSpeedCheck}">
							<td>Скорость ветра:</td>
							<td>${plane.sidewind} mps</td>
							<td></td>
							<td></td>
							<td>${windMPS} mps</td>
						</tr>
						<tr>
							<td>Облачность:</td>
							<td></td>
							<td></td>
							<td></td>
							<td>${cloudData}, ${edge}</td>
						</tr>
						<tr>
							<td>Er (характеристика условия покрытия):</td>
							<td></td>
							<td></td>
							<td></td>
							<td>${runawayER}</td>
						</tr>
						<tr>
							<td>CR (степень покрытия ВПП):</td>
							<td></td>
							<td></td>
							<td></td>
							<td>${runawayCR}</td>
						</tr>
						<tr>
							<td>eReR (толщина покрытия ВПП):</td>
							<td></td>
							<td></td>
							<td></td>
							<td>${runawayeReR}</td>
						</tr>
						<tr class="${BRBRCheck}">
							<td>BRBR (коэффициент сцепления или эффективности торможения):</td>
							<td></td>
							<td></td>
							<td>0,29</td>
							<td>${runawayBRBR}</td>
						</tr>
					</tbody>
				</table>`;
		
		document.write(table);
	}

}

let An24 = new Aircraft('АН-24',12,200),//name АН-24,sidewind - 12, visibility - 200
	Tu154 = new Aircraft('Ту-154',17,300),
	Tu134 = new Aircraft('Ту-134',20,400),
	SukhoiSuperjet100 = new Aircraft('Sukhoi Superjet 100',18,300),
	Boeing737 = new Aircraft('Boeing 737',18,100),
	Airbus320 = new Aircraft('Airbus 320',6,200);

let Ivanov = new Crew('Ivan','Ivanov',500),
	Petrov = new Crew('Petr','Petrov',1000);

	// //полосы - сокр название UKKK, UKKM, UKBB
	// //полное название 'Kiev Zhuliany','Gostomel', 'Kyiv Boryspil'
	// //[8,26,2310,45] 8,26- это номер полосы
	// //2310,45 - ширина и длина полосы
	// //1500 - максимальная видимость на аэродроме ( в метрах)
let UKKK = new Airfield('UKKK','Kiev Zhuliany',['08','26',2310,45],1500),
	UKLI = new Airfield('UKLI','Ivano-Frankivsk International Airport',['10','28',2507,44],1000),
	UKBB = new Airfield('UKBB','Kyiv Boryspil',['18L','36R',4000,60],1200);

// Er – характеристика условия покрытия
const ER = {
	0: 'чисто и сухо (dry and clear)',
	1: 'влажно (damp)',
	2: 'мокрая ли вода местами (wet or water patches)',
	3: 'иней или изморозь (rime or frost)',
	4: 'сухой снег (dry snow)',
	5: 'мокрый снег (wet snow)',
	6: 'слякоть (slush)',
	7: 'лед (ice)',
	8: 'уплотненный или укатанный снег (compacted or rolled snow)',
	9: 'замерзшая или не ровная поверхность (frozen ruts or ridges)',
	'/': 'тип отложений не указываются (type of deposit not reported)'
}

// CR — степень покрытия ВПП (contamination)
const CR = {
	1: 'менее 10% ВПП покрыто',
	2: 'от 11% до 25%',
	5: 'от 26% до 50%',
	9: 'от 51% до 100%',
	'/': 'нет данных'
}

// eReR — толщина покрытия ВПП
const eReR = {
	'00': 'менее 1мм',
	'01': '1мм',
	'02': '2мм',
	'90': '90мм',
	'91': 'в коде не применяется',
	'92': '10см',
	'93': '15см',
	'94': '20см и т.д.',
	'98': '40см',
	'99': 'ВПП не работает',
	'//': 'нет измерений или толщина покрытия незначительна'
}

// BRBR — коэффициент сцепления или эффективности торможения (braking action or friction coefficient).
const BRBR = 0.29;

// Облачность. Примеры: OVC006; SCT023CB; BKN080; VV001
const Cloudiness = {
	'FEW': 'несколько, незначительно, мало, 1-2 октанта',
	'SCT': 'scattered — рассеянные, разбросанные облака, 3-4 октанта',
	'BKN': 'broken — разорванная, значительная облачность, 5-7 октантов',
	'OVC': 'overcast — сплошная облачность, 8 октантов'
}

let METAR = {
	'UKKK': `UKKK 301600Z 13005MPS 1500 OVC003 08/08 Q1011 R26/290156`,
	'UKBB': `UKBB 301600Z 13004MPS 6000 SCT002 06/06 Q1011 R18L/290050`,
	'UKLI': `UKLI 301600Z 01520MPS 9999 BKN056 05/02 Q1005 R10/099870`
}	



RunwayCondition.renderTable(UKKK,An24,Petrov);//Для аэродрома UKKK, для самолета An24 запросим условия



