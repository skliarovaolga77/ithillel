//Есть три тега <input type="text">.
//Необходимо написать функцию, 
//которая выведет в <textarea> содержимое всех input полей через запятую.

var userLogin = document.querySelector('#userLogin');
   
function textareaUser(e){
    console.log(e);//form
    var  inputUserLogin = userLogin.querySelectorAll('input'),
         textareaUser = userLogin.querySelector('textarea'),
         newArray = [];

    inputUserLogin.forEach(function(input,index){
        console.log(input);//то,что введено каждый в input
        console.log(index);
        input.onchange = function(e){
            console.log(e.target.value,index);
            //e.target.value это то,что введено каждый в input
            // присваиваем значение индекса в массиве = полученным данным в одном инпуте
            newArray[index] = e.target.value;
            textareaUser.value = newArray.join(', ');
        };
    });
}

textareaUser(userLogin);


