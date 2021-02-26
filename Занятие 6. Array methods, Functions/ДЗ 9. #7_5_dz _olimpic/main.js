//Массив видов спорта sports, который состоит из [Иконка вида спорта, Название вида спорта];
const sports = [
	['1F93A','fencing'],
	['26F8','figure skating'],
	['26F7','skier'],
	['1F3C2','snowboarder'],
	['1F3CC','golfing'],
	['1F6A3','rowing boat'],
	['1F3CA','swimming'],
	['1F938','gymnastics'],
	['1F93E','handball']
];
console.log(sports);

//Массив стран победителей на Олимпийских играх в каждом виде спорта winners, 
//который состоит из [Название вида спорта, Завоеванная медаль, Страна];
const winners = [
	['fencing','gold','fr'],
	['fencing','silver','it'],
	['fencing','bronze','us'],


	['figure skating','gold','ca'],
	['figure skating','silver','ru'],
	['figure skating','bronze','us'],


	['skier','gold','no'],
	['skier','silver','ru'],
	['skier','bronze','fr'],


	['snowboarder','gold','us'],
	['snowboarder','silver','jp'],
	['snowboarder','bronze','au'],


	['golfing','gold','gb'],
	['golfing','silver','se'],
	['golfing','bronze','us'],


	['rowing boat','gold','us'],
	['rowing boat','silver','gb'],
	['rowing boat','bronze','ro'],


	['swimming','gold','us'],
	['swimming','silver','gb'],
	['swimming','bronze','au'],


	['gymnastics','gold','ru'],
	['gymnastics','silver','ru'],
	['gymnastics','bronze','ua'],


	['handball','gold','dk'],
	['handball','silver','fr'],
	['handball','bronze','de'],
];
// console.log(winners);

//Массив колец с Олимпийской эмблемы olympic, который состоит из [Иконка олимпийского кольца];
const olympic = ['1F535','26AB','1F534','1F7E1','1F7E2'];
// console.log(olympic);


//Массив медалей medals, который состоит из [Иконка медали, Название медали];
const medals = [
	['1F947','gold'],
	['1F948','silver'],
	['1F949','bronze'],
];
console.log(medals);

//Массив стран и континентов continents, который состоит из [Название страны, Название контента];
const continents = [
	['fr','Europe'],
	['it','Europe'],
	['us','The Americas'],
	['ca','The Americas'],
	['ru','Europe'],
	['no','Europe'],
	['jp','Asia'],
	['au','Oceania'],
	['gb','Europe'],
	['se','Europe'],
	['ro','Europe'],
	['ua','Europe'],
	['dk','Europe'],
	['de','Europe']
];
// console.log(continents);

//Необходимо вывести таблицу победителей Олимпийских игр в соответствии с видом спорта и континентом команды. 
//Метод для преобразования unicode вида спорта в соответствующую иконку – String.fromCodePoint(parseInt(val, 16)); где val – unicode вида спорта.
//Метод для преобразования аббревиатуры страны в соответствующую
//иконку флага – 'ca'.toUpperCase().replace(/./g, char => String.fromCodePoint(char.charCodeAt(0)+127397)); где 'ca' – аббревиатура страны (Canada).	

let trs = [],
	Europe = [],
	America = [],
	Oceania = [],
	Asia = [];

//круги
let tdOlympic =	olympic
		.map(function(elementOlympic){
		//массив цветной круг
			return `<td>${icon(elementOlympic)}</td>`;
		})
// console.log(tdOlympic);

//медали
let iconMedals = medals
	.map (function(elementMedals){
		// console.log(elementMedals);
		return icon(elementMedals);
	})
console.log(iconMedals);

sports	
	.forEach(function(sport){
		//console.log(sport);

		//вытаскиваем с массива олимпийцев только тех, которые подходят под текущий вид спорта
		// fencing (winner[0]) и fencing sport[1]
		let currentWinners = winners
			.filter(function(winner){
				// console.log(winner[1]);
				return winner[0] === sport[1];
			})
		// console.log(currentWinners);// возвращает новый массив currentWinners ( напр ["fencing", "gold"]/)

		//получаем название континте каждого победителя для текущего вида спорта и добавляем его каждому победителю
		let winnersWithContinents = currentWinners
			.map(function(winner){
				let winnerContinent = getContinent(winner[2]);
				//console.log(winnerContinent);
				winner.push(winnerContinent);
				return winner;
			});
		// console.log(winnersWithContinents);// возвращает новый массив currentWinners ( напр ["fencing", "gold", "fr", "Europe"]/)

		//определяем каждого юзера в соответствующую колонку континента
		winnersWithContinents.forEach(function(winner){
			//console.log(winner);
			let winnerContinent = winner[3];
			// console.log(winnerContinent);
			switch(winnerContinent){
				case 'Europe':
					Europe.push(renderWinner(winner));
					break;
				case 'The Americas':
					America.push(renderWinner(winner));
					break;
				case 'Oceania':
					Oceania.push(renderWinner(winner));
					break;
				case 'Asia':
					Asia.push(renderWinner(winner));
					break;
			}
	})
		
		let tr =  `<tr>
						<td data-id="${sport[1]}" class="sport" style="background-color:#3dcca178; font-size: 50px;"; >${icon(sport[0])}</td>
						<td class="sport">${Europe.join('')}</td>
						<td class="sport">${America.join('')}</td>
						<td class="sport">${Oceania.join('')}</td>
						<td class="sport">${Asia.join('')}</td>
						<td class="sport"></td>
					</tr>`;
		trs.push(tr);
})

let trOlympic = `<tr><td>${tdOlympic.join('')}</td></tr>`;// tr
// console.log(trs);
document.write(`<table class="medals">${trOlympic}${trs.join('')}</table>`);

function getContinent(countryCode){
	let continent = continents.filter(function(country){
					//console.log(country[0],countryCode);
					return country[0] === countryCode; // сравниваем код страны победителя с кодом страны с массива continents (getContinent(winner[2]) 159 строка)
					})
		//console.log(continent);
		// console.log(continent[0][1]);
		return continent[0][1];
	}

function icon(unicode){
	return String.fromCodePoint(parseInt(unicode, 16));
}

function iconFlag(unicodeFlag){
	return unicodeFlag.toUpperCase().replace(/./g, char => String.fromCodePoint(char.charCodeAt(0)+127397));
}

function renderWinner(winner){
	let winnerMedal = medals.filter(function(medal){
		// console.log(medal[1]);//пройтись по массиву medals и достать с него медаль medal[1] (напр gold)
		return medal[1] === winner[1];
	})
	let medalIcon = icon(winnerMedal[0]);// преобразовали в иконку
	console.log(medalIcon);
	// console.log(winner[3]);//название континента (напр Europe)
	// console.log(winner[2]);//winner[2] название страны (напр ua)
	let flagIcon = iconFlag(winner[2]);
	let p = `<p class="gold">${medalIcon} - ${flagIcon}</p>`;
	if( medalIcon == '🥇'){
		p = `<p class="gold">${medalIcon} - ${flagIcon}</p>`
	}else if(medalIcon == '🥈'){
		p = `<p class="silver">${medalIcon} - ${flagIcon}</p>`
	}
	else if(medalIcon == '🥉'){
		p = `<p class="bronze">${medalIcon} - ${flagIcon}</p>`
	}
	return p;
}

// function getFlags($code){
// 	$code = $code.toUpperCase();
// 	if($code == 'FR') return '🇫🇷';
// 	if($code == 'IT') return '🇮🇹';
// 	if($code == 'US') return '🇺🇸';
// 	if($code == 'CA') return '🇨🇦';
// 	if($code == 'RU') return '🇷🇺';
// 	if($code == 'NO') return '🇳🇴';
// 	if($code == 'JP') return '🇯🇵';
// 	if($code == 'AU') return '🇦🇺';
// 	if($code == 'GB') return '🇬🇧';
// 	if($code == 'SE') return '🇸🇪';
// 	if($code == 'RO') return '🇷🇴';
// 	if($code == 'UA') return '🇺🇦';
// 	if($code == 'DK') return '🇩🇰';
// 	if($code == 'DE') return '🇩🇪';
// 	return '🏳️';
// }
// console.log(getFlags('fr'));
