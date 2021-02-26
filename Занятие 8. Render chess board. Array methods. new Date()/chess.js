function renderBoard(){

  let trs = [],
      alphanbets = `abcdefgh`,
      letters = alphanbets.split(''),
      figuresRow = ['rook','horse','bishop','king','queen','bishop','horse','rook'];

  for(let i=8; i>=1; i--){ // tr
      
      let tds = [];
      for(let j=1; j<=8; j++){ // td
          
          let figure = ``,
              position = `${letters[j-1]}${i}`;
          
          if(i == 2){
            figure = getFigure('pawn','white',position);
          } else if(i==7){
            figure = getFigure('pawn','black',position);
          } else if(i==1){
            figure = getFigure(figuresRow[j-1],'white',position);
          } else if(i==8){
            figure = getFigure(figuresRow[j-1],'black',position);
          }

          tds.push(`<td data-id="${position}" data-empty="${figure === `` ? true : false}">${figure}</td>`);
      }

      tds.unshift(`<td>${i}</td>`);
      tds.push(`<td>${i}</td>`);

      let tr = `<tr>${tds.join(``)}</tr>`;
      trs.push(tr);
  }

  lettersTR = letters
    .map(function(letter){
      return `<td>${letter}</td>`;
    })
    .join('')

  lettersTR = `<tr><td></td>${lettersTR}</tr>`;
  document.write(`<table class="board">${lettersTR} ${trs.join(``)} ${lettersTR}</table>`);

}

renderBoard();

function getFigure(figureName, figureColor, figurePosition){
  return `<img src="images/${figureColor}/${figureName}.svg" data-name="${figureName}" data-color="${figureColor}" data-position="${figurePosition}">`
}
