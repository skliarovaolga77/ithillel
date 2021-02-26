
//вывод рандомно данных
let gender = ['man','woman'],
	ethnicity = ['white','black','latino','asian','other'],
	age = [[18,29],[30,44],[45,64],[65,100]],
	education = ['college graduate','no college degree'],
	params = ['gender','ethnicity','age','education'];

//сформировать  массив заполненынный рандомными 10 users
//массив заполненный 
//ф-ция должна вернуть массив , сос-й из людей9избирателей-electors
function generateElectors(count){
	let electors = [];
	for(let i=0; i<count; i++){
		electors[i] = [
			gender[getRandomIntInclusive(gender.length)], //ф-ция внизу
			ethnicity[getRandomIntInclusive(ethnicity.length)],
			age[getRandomIntInclusive(age.length)],
			education[getRandomIntInclusive(education.length)]
		]
	}
	renderElectors(electors);
	return electors;
}

//прорисовавыем 
//создали массив всех наших users
//пршлись по каждому user преобразовали каждый эл в вид td
//все td объединили в tr, вкладывая между собой 
// и каждую tr ( ек-это данные по user) вкладываем в таблицу
// и отрисовываем таблицу
function renderElectors(electors){
	let electorTR = electors
		.map(function(elector, index){
			let electorInfo = elector
			//electorData Это элементы массива man", "black", Array(2), "college graduate", Array(4), "trump
					.map(function(electorData, index){
						// 'элемент 45,64 переделали в 45-64
						return index == 2 ? `<td>${electorData.join('-')}</td>` : `<td>${electorData}</td>`
						// return `<td>${electorData}</td>`;// в к-й нах-ся данные по избирателю
					})
					//соединили все td в однк строку
					.join('');
					//electorInfo это массив td  
					//каждую td засунуть в tr
					//electorTr - строка где будут выводиться все td
					//вывод строка tr внутри нее  td( тедешки )
					//рез- т map ля каждого моего user 
					// возврат строки tr ( получили массив tr ( теерок))
			return electorTr = `<tr>${electorInfo}</tr>`;//вывод все в один массив tr и в ней td ( в td это man,black и т д )

		})
		//объединяем между собой
		.join('');// получилась одна строка .к-ую можно вставлять в таблицу
	document.write(`<table cellspacing="10" class="electors">${renderThead(params)}<tbody>${electorTR}</tbody></table>`)
}

//вверху таблицу заголовки
//ф-ця пройдет п овсем эл-м массива params
//все params перебрать и вернуть в таблицу th - gender,ethnicity,  age, education
//вызывать ее в renderElectors
function renderThead(theadData){
	let thead = theadData
		.map(function(th){
			return `<th>${th}</th>`
		})
		.join('');
	return `<thead><tr>${thead}</tr></thead>`;
}

//рез-т голосования
//map и последним аргм push
function getStatistic(electors){
	let finalData = params
		.map(function(param, paramIndex){
			return getPercent(param, paramIndex, electors);
		});
	renderStatistic(finalData);
}

function getPercent(param, paramIndex, electors){

	let paramArray;
	switch(param){
		case 'gender':
			paramArray = gender;
			break;
		case 'ethnicity':
			paramArray = ethnicity;
			break;
		case 'age':
			paramArray = age;
			break;
		case 'education':
			paramArray = education;
			break;
	}

	let paramValues = paramArray
		.map(function(paramArrayValue, index){
			let eachValueCount = electors
				.filter(function(elector){
					return elector[paramIndex] === paramArray[index]
				}).length;
			return [paramArrayValue,eachValueCount];
		})
	paramValues.unshift(param);
	return paramValues;
}

function renderStatistic(data){
	let statistic = data
		.map(function(param){
			let paramBlock = param
				.map(function(paramData,index){
					return index == 0 ? '' : `<div style="width:${paramData[1]}0%">${paramData[0]} (${paramData[1]}0%)</div>`;
				})
				.join('');
			return `<div class="${param[0]}">${paramBlock}</div>`;
		})
		.join('');
	document.write(`<div class="statistic">${statistic}</div>`);
}
//определение за какого президента
function getChoices(electors){
	electors
		.map(function(elector, index){
			elector.push([]);
			elector
				.map(function(electorData, index, elector){
					// console.log(electorData);
					let president;
					if(index === 0){
						switch(electorData){
							case 'woman':
								president = 'clinton';
								break;
							case 'man':
								president = 'trump';
								break;
						}
						elector[elector.length-1].push(president);
					} else if(index === 1){
						switch(electorData){
							case 'white':
								president = 'clinton';
								break;
							default:
								president = 'trump';
								break;
						}
						elector[elector.length-1].push(president);
					} else if(index === 2){
						switch(electorData[0]){
							case 45:
								president = 'trump';
								break;
							default:
								president = 'clinton';
								break;
						}
						elector[elector.length-1].push(president);
					} else if(index === 3){
						switch(electorData){
							case 'college graduate':
								president = 'clinton';
								break;
							default:
								president = 'trump';
								break;
						}
						elector[elector.length-1].push(president);
					}
					return elector;
				});
			
			let trumpCount = elector[elector.length-1]
				.reduce(function(trumpCountValue, currentValue){
					return trumpCountValue += currentValue === 'trump' ? 1 : 0;
				},0);

			let clintonCount = elector[elector.length-1]
				.reduce(function(clintonCountValue, currentValue){
					return clintonCountValue += currentValue === 'clinton' ? 1 : 0;
				},0);

			let presidentName;

			if(trumpCount>clintonCount){
				presidentName = 'trump';
			} else if(trumpCount<clintonCount){
				presidentName = 'clinton';
			} else {
				presidentName = 'other';
			}

			elector.push(presidentName);
			let tr = document.querySelector(`.electors tbody tr:nth-child(${index+1})`);
			tr.classList.add(presidentName);
			return elector;
		})

	getPresident(electors);

	return electors;
}

//получить имя президента
function getPresident(electors){
	let presidents = ['trump','clinton','other'];

	let presidentsCount = presidents
		.map(function(president){
			return electors
					.filter(function(elector){
						return elector[elector.length-1] === president
					},0)
					.length; 
		})
		.reduce(function(maxVoices, presidentVoices, index, array){
			return maxVoices = presidentVoices>array[maxVoices] ? index : maxVoices;
		},0);

	console.log(presidents[presidentsCount]);
	let presidentImg = document.querySelector('.battle');
	presidentImg.src = `images/${presidents[presidentsCount]}.png`;
}

function getRandomIntInclusive(max, min=0) {
	min = Math.ceil(min);
  	max = Math.floor(max);
  	return Math.floor(Math.random() * (max - min)) + min;
}

let electors = generateElectors(10);
console.log(electors);

getChoices(electors);
getStatistic(electors);


