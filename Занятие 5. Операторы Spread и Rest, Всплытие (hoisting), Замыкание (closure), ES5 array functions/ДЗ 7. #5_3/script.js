//Реализовать функцию 'copy(list)' по копированию массива.

//Предусмотреть возможность передачи вторым аргументом функции. 
//При копировании массива – функция применяется к каждому элементу копируемого массива.

//newList = copy(list, function(value){ return value*10; })

list = [10,'hello',undefined,true, 100];

function copyList(value){
    // console.log(value);
     return value*10; 
}
// console.log(copyList(newList[i]));

function copy(valueCopy){

        // console.log(valuefunction);
        // console.log(arguments);

        newList = valueCopy;
        console.log(newList);// скопированный массив
            for(let i=0;i<newList.length; i++ ){
                // console.log(newList[i]);
                console.log(copyList(newList[i]));
            }
}
copy(list);

