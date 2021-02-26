//Адаптировать функцию assignObjects() - из 2го задания - под неопределенное количество объектов.

// assignObjects(obj1, obj2, ....., objn);

let assignObjects1 =  { 
    x: 10, 
    y: 20 
},
assignObjects2 = { 
    z: 30 
};

// копируем все свойства из assignObjects2  в assignObjects1
Object.assign(assignObjects1, assignObjects2);
console.log(assignObjects1);

let assignObjects3 =  {
 x: 10 
},

assignObjects4 = {
    x: 20,
    y: 30 
};

Object.assign(assignObjects3, assignObjects4);

// копируем все свойства из assignObjects4 в assignObjects3
Object.assign(assignObjects1, assignObjects3);
console.log(assignObjects3);

function assignObjects(...obj){
    newObject = Object.assign(obj);
    return newObject;
}

assignObjects(assignObjects1,assignObjects3);
console.log(newObject);

