//Для массива tasks необходимо выполнить следующую цепочку методов:

//Сконвертировать время потраченное на выполнение задач в часы, вместо минут.
//Отфильтровать задачи, на выполнение, которых ушло два часа или больше.
//Умножить результат на часовую ставку.
//Вывести в html таблицу, которая состоит из ячеек с отфильтрованными задачами в виде:
var amount = 100;
var monday = [
  ['Write a tutorial',180],
  ['Some web development',120]
];
var tuesday = [
  ['Keep writing that tutorial',240],
  ['Some more web development',180],
   ['A whole lot of nothing',240]
];
// console.log('---------------------');
var tasks = [monday,tuesday];
var sumAmount = 0;

tasks = monday.concat(tuesday);
// console.log(tasks);

function taskAmount(newArr){

    let arrayTRS = [];

    let newTaskAmount = newArr
        .map(function(element){
            element[1] = element[1]/60;
            return element;
        })
        .filter(
            function(element){
                // console.log(element[1]);
                // console.log(element);
            return element[1]>2;
        })
        // console.log(newTaskAmount);
        // let usersWithAge = newTaskAmount
        .map(function(element){
            element.push(element[1]*amount)
            // console.log(resulyTaskAmount); //300,400
            return element;//вывод новый  массив  с третьим значением
        })
        
		.map(function(element){
            
            let firsttd = element[0],
                secondtd = element[1],
                third = element[2];
            
            let elementTR = `<tr>
                <td>Task name: ${firsttd}</td>
                <td>Taks duration: ${secondtd} hours</td>
                <td>Taks amount: ${third}</td>
            </tr>`;

            arrayTRS.push(elementTR);
        
        })

        document.write(`<table>${arrayTRS.join('')}</table>`);
}
taskAmount(tasks);