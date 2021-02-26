//на странице находятся элементы:
//div - фигура, которая может принимать какие-то формы
//select - выбрать тип фигуры (квадрат, прямоугольник, круг). При изменении значения в нем, меняется фигура
//input для выбора цвета. При его изменении меняется цвет фигуры

let userFigure = document.querySelector('.figure');

let select = document.querySelector('select');
select.addEventListener('change',selectOption);

let inputsColors = document.querySelectorAll('input[name="color"]');
inputsColors.forEach(function(input){
    input.addEventListener('change',selectColor);
})

//выбрать select - тип фигуры
function selectOption(e){
    let selectedOption = e.target.value;
    userFigure.className = selectedOption;
}

//выбрать цвет
function selectColor(e){
    let selectedColor = e.target.value;
    userFigure.style.backgroundColor = selectedColor;
}

// рендеринг инпутов цветов
let radioBlock = document.querySelector('.radio-block');
const colors = ['pink','orange','purple'];

colors.forEach(function(color){
    let label = document.createElement('label'),
        input = document.createElement('input'),
        span = document.createElement('span');

    input.type = 'radio';
    input.value = color;
    input.name = 'color';

    span.innerText = color;

    label.append(input,span);
    radioBlock.append(label);
    
    input.addEventListener('change',selectColor);
})