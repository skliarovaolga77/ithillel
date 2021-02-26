//Создать блок по центру экрана. 
//При нажатии на стрелки – блок смещается в соответствующем направлении. 
//Блок должен "упираться в экран", т.е. не может выйти за пределы экрана.

//1) блок не вываливается за экран

//2) при каждом "врезании" в стенку – блок отпрыгивает на step*2 пикселей в противоположном направлении.

//3) При каждом отпрыгивании – по середине блока появляется надпись "БЭМС", которая исчезает через 2 секунды

let block = document.querySelector('.block'),
    blockSpan = document.querySelector('span');
console.log(blockSpan);
const movingDistance = 50;

const keys = {
    //двигается вправо
    39: function (block, bodyWidth, bodyHeight) {

        let blockNextPointLeft = block.offsetLeft + movingDistance + block.clientWidth;
        // console.log(`bodyWidth : ${bodyWidth}`);
        // console.log(`block.offsetLeft : ${block.offsetLeft}`);
        // console.log(`blockNextPointLeft : ${blockNextPointLeft}`);
        //     console.log(`block.clientWidth : ${block.clientWidth}`);
        let blockLeft = block.style.left === '' ? 0 : parseInt(block.style.left);
        if (blockNextPointLeft <= bodyWidth) {
            errorRemove();
            block.style.left = `${blockLeft+movingDistance}px`;
        } else {
            block.style.marginRight = '50px';
            errorAdd();
            jump();
        }

    },
    //двигается влево
    37: function (block, bodyWidth, bodyHeight) {
        let blockNextPointLeft = block.offsetLeft + movingDistance + block.clientWidth;
        let blockLeft = block.style.left === '' ? 0 : parseInt(block.style.left);
        if (block.offsetLeft >= movingDistance) {
            errorRemove();
            block.style.left = `${blockLeft-movingDistance}px`;
        } else {
            errorAdd();
            block.style.marginLeft = '50px';
            jump();
        }
    },
    //двигается вверх
    38: function (block, bodyWidth, bodyHeight) {
        let blockTop = block.style.top === '' ? 0 : parseInt(block.style.top);
        let blockNextPointBottom = bodyHeight - (block.offsetTop + block.clientHeight);
        if (block.offsetTop >= movingDistance) {
            errorRemove();
            block.style.top = `${blockTop-movingDistance}px`;
        } else {
            errorAdd();
            block.style.marginTop = '50px';
            jump();
        }
    },
    //двигается вниз
    40: function (block, bodyWidth, bodyHeight) {
        let blockTop = block.style.top === '' ? 0 : parseInt(block.style.top);
        let blockNextPointBottom = bodyHeight - (block.offsetTop + block.clientHeight);

        if (blockNextPointBottom >= movingDistance) {
            errorRemove();
            block.style.top = `${blockTop+movingDistance}px`;
        } else {
            errorAdd();
            block.style.marginBottom = '50px';
            jump();
        }
    }
}

document.onkeydown = function (e) {
    // console.log(e);
    let key = e.keyCode;
    //ширина body с бордерами offsetWidth
    //clientLeft ширина body без бордера
    let bodyWidth = e.target.clientWidth;
    // console.log(bodyWidth);
    // console.dir(block);
    //clientHeight высота body без бордера
    let bodyHeight = e.target.clientHeight;
    //block.offsetLeft = к текущему местоположению
    //block.clientWidth = 200( ширин блока)

    //     console.log(`bodyHeight : ${bodyHeight}`);
    //     console.log(`block.offsetTop : ${block.offsetTop}`);
    //     console.log(`block.clientHeight : ${block.clientHeight}`);
    //     console.log(`block.offsetTop : ${block.offsetTop}`);
    keys[key] && keys[key](block, bodyWidth, bodyHeight);
}

function errorAdd() {
    return block.classList.add('error');
}

function errorRemove() {
    return block.classList.remove('error');
}

function jump() {
    block.classList.add('steptwoo');
    blockSpan.style.display = 'block';
    setTimeout(function () {
        blockSpan.style.display = 'none';
    }, 2000);
}