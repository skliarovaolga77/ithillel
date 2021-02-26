

oper = prompt('Что Вы хотите сделать - add, sub, mult, div?', 'add');
//как запустить while 
    // while(oper){
    //     oper = prompt('Что Вы хотите сделать - add, sub, mult, div?', 'add');  
    // }
    // если ввел хоть одно значение 
    if (oper =='add' || oper =='sub' || oper =='mult' || oper =='div'){
        x = +prompt('Введите первое число', 10);
        while(isNaN(x)){
            x = +prompt('Введите первое число', 10);
        }
        console.log(x);

        y = +prompt('Введите второе число', 20);
        while(isNaN(y)){
            y = +prompt('Введите второе число', 20);
        }
        console.log(y);

        switch(oper){
            case 'add':
                document.write(`${x}+${y} =${x+y}`);
                break;
            case 'sub':
                document.write(`${x}+${y} = ${x+y}`);
                break;
            case 'mult':
                document.write(`${x}+${y} = ${x+y}`);
                break;
            case 'div':
                document.write(`${x}+${y} = ${x+y}`);
                break;
            }
    }else{
        //если нет 
        alert('Увидимся в следующий раз!');
    }
 
    






