//Написать функцию getMaxs(args), где args – любое количество массивов.

//Функция должна вернуть максимумы всех переданных массивов в виде строки, через разделитель '; '.





let arrA = [40, 20, 3 ],

    arrB = [10, 20, 350 ],

    arrC = [10, 2000, 350 ];



    //ф-ция найти max 

    function arrMaxValue(value){

        let max = 0;

        for(let i=0; i<value.length; i++){

            if(value[i]> value[max]){

                max = i;

            }

        }

        return value[max];

    }



    // console.log(arrMaxValue(arrA));

    // console.log(arrMaxValue(arrB));

    // console.log(arrMaxValue(arrC));

    //можно объеденить все в одну ф-цию 



    function getMaxs(...args){

        // console.log(arrays);

        

        let arrElement = [];



        for(let i=0; i<args.length; i++){

            //и для каждого элемента вызываем ф-цию arrMaxValue

            arrElement.push(arrMaxValue(args[i])); 

            //эта ф-ция возвращает макс значение каждого массива 

        }

        // console.log(arrElement);//вывод новый массив с max значениями

        return arrElement.join('; ');

    }

    console.log(getMaxs(arrA,arrB,arrC));

    // getMaxs(arrA,arrB,arrC);//вывыод сразу все массивы