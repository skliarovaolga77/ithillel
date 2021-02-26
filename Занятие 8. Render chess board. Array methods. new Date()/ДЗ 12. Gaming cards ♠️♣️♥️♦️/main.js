//Рисуем колоду карт, которая состоит из:

// numbers = карт номиналом 2-10 всех мастей
// figures = карт jack, queen, king всех мастей
//карт тузов всех мастей
//рисуем таблицу 8*7

function renderBoard(){
    let cards = [],
        numbers = [2,3,4,5,6,7,8,9,10,'jack','queen','king','t'],
        figures = ['clubs','diamonds','hearts','spades'];
        
        for(let i=0; i<numbers.length; i++){// цикл цифр
            let numberCart = `<span>${numbers[i]}</span>`,
                centralImg = ``;
               
            if(typeof numbers[i] === 'string'){
                //достать первую букву
                let str = numbers[i];
                numberCart = `${str[0].toUpperCase()}`;
                centralImg = `<img class="figure" src="images/${numbers[i]}.svg">`;      
            }

            for(let j=0; j<figures.length; j++){// цикл цифр мастей figures
                numberfigure = `<img class="small" src="images/${figures[j]}.svg">`; //['clubs','diamonds','hearts','spades'];
                //карт тузов всех мастей
                cards.push(`
                    <div class="cart">
                        <div>${numberCart} ${numberfigure}</div>
                        ${numbers[i] === 't' ? `<img class="figure" src="images/${figures[j]}.svg">` : centralImg}  
                        <div class="duble">${numberCart} ${numberfigure}</div>
                    </div>`);
            }
        }
    // console.log(cards);// получили один большой массив 
    document.write(`<div class="board">${cards.join('')}</div>`);
    
}

renderBoard();







 