//на странице находятся элементы:
//div - фигура, которая может принимать какие-то формы
//select - выбрать тип фигуры (квадрат, прямоугольник, круг). При изменении значения в нем, меняется фигура
//input для выбора цвета. При его изменении меняется цвет фигуры

let wrapper = document.querySelector('#wrapper');

//select
let select = document.createElement('select');

let Figures = ['square', 'rectangle', 'circle'];
    console.log(Figures);
    for(let key in Figures){
        console.log(Figures[key]);
    }
    let usersOptions = Figures.map(function(user){
        return `<option value="${user}">${user}</option>`;
    })  
select.innerHTML = usersOptions.join('');
wrapper.append(select);
select.addEventListener('change', selectOption);

//radioBlock
let radioBlock = document.createElement('div');
radioBlock.classList.add('radio-block');
const colors = ['red', 'green', 'blue'];

colors.forEach(function (color) {
    let label = document.createElement('label'),
        input = document.createElement('input'),
        span = document.createElement('span');

    input.type = 'radio';
    input.value = color;
    input.name = 'color';

    span.innerText = color;

    wrapper.append(radioBlock);
    label.append(input, span);
    radioBlock.append(label);

    input.addEventListener('change', selectColor);
});

//figure
let div = document.createElement('div');
div.classList.add('figure');
// div.innerHTML = ` <div></div>`;
wrapper.append(div);


//выбрать select - тип фигуры
function selectOption(e) {
    let selectedOption = e.target.value;
    div.className = selectedOption;
}

//выбрать цвет
function selectColor(e) {
    let selectedColor = e.target.value;
    div.style.backgroundColor = selectedColor;
}