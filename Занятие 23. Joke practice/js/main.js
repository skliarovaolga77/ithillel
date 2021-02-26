const jokeURL = 'https://api.chucknorris.io/jokes';

class Joke{
  static async getJoke(e){
    	e.preventDefault();
  //в нашей форме мы ищем 
  let type = this.querySelector('input[name=joke]:checked').value;
  // console.log(type);//вывод random если выбрали random
  //тип шутки type(random или categories)
  	let result;

    switch(type){
			case 'categories':
				let category = document.querySelector('.categories input:checked').value;
				//console.log(category);
				result = await Joke.fetchJoke(`random?category=${category}`);
				break;
			case 'random':
				result = await Joke.fetchJoke(type);
				break;
			case 'search':
				result = await Joke.fetchJoke(`search?query=${searchJoke.value}`);
				break;
		}

		Joke.renderJoke(result);
   
  }
  //отправка запроса 
  static  async fetchJoke(type){
    	let data = await fetch(`${jokeURL}/${type}`),// запрос на https://api.chucknorris.io/jokes
      	response = await data.json();
        return response;
  }

  //отрисовали Categories
  //data - ссылка на шутку (запром)
  static async  renderCategories(){
    let data = await Joke.fetchJoke('categories');
    console.log(data);

    let categoriesDiv = document.querySelector('.categories');
    categoriesDiv.innerHTML = '';

    data.forEach(category=>{
        let label = document.createElement('label');
        label.innerHTML = category;

      	let input = document.createElement('input');
        	input.type = 'radio';
          input.name = category;
          input.value = category;
          input.addEventListener('change',(e)=>{

            
          let activeLabel = categoriesDiv.querySelector('label.active');
          activeLabel && activeLabel.classList.remove('active');

            //нажали выбрать  и на инпут меняем  background-color
            let currentLable = e.target.closest('label');
			        	currentLable.classList.add('active');
          })


            label.append(input);
            categoriesDiv.append(label);
    });

  }


//отрисовали Categrandomories
  static renderJoke(data){
    console.log(data);
    //объект, к-й пришле с запроса
    	if(data.result && data.result.length>0){
        console.log(data.result);
			data.result.forEach(joke=>Joke.renderJoke(joke));
		}else {
      // console.log(data.value);

        //общий div
        let jokeDiv = document.createElement('div');
			  jokeDiv.classList.add('joke__block');

        //нужна ссылка
       
        let link = `<a href="${data.url}" class="link-post" target="_blank">
                      <p>${data.id}</p>
                      <img src="img/link.svg">
                    </a>`;
        //текст
        jokeDiv.innerHTML = `${link}
                            <p class="text-main">${data.value}</p>`;
        //фото
			  jokeDiv.innerHTML += `<img src="${data.icon_url}" class="img-post">`;
       
       //div d-f

        jokeDiv.innerHTML += `<div class="wrapperDiv"></div>`;

        //дата
        const date1 = new Date(data.created_at);
        console.log(date1);
        const date2 = new Date();
        console.log(date2);
        let date = Math.floor((date2-date1)/3669445);

        
        let wrapperDiv = jokeDiv.querySelector('.wrapperDiv');
        console.log(wrapperDiv);

        wrapperDiv.innerHTML += `<p class="text-data">Last update: ${date} hours ago</p>`;
      
        //категория
         if(data.categories.length>0){
          data.categories.forEach(categoty=>{
            wrapperDiv.innerHTML += `<a href="https://api.chucknorris.io/" class="joke__category" target="_blank">Category: ${categoty}</a> `;
            
          })
        }

        //сердце
        let favourite = document.createElement('button');
        favourite.classList.add('favourite');
       favourite.style.background = 'url(./img/heart.png)no-repeat center';
        favourite.addEventListener('click',()=>Joke.addToFavourite(favourite));

       
        jokeDiv.appendChild(favourite);
      //  jokeDiv.appendChild(wrapperDiv);
        //общий div в jokesWrapper
        jokesWrapper.append(jokeDiv);
        
    }

  }


  	static addToFavourite(favourite){
		if(favourite.style.background                                                                  = 'url(./img/heart.png)no-repeat center'){
      console.log(favourite);
		favourite.style.background = 'url(./img/heart.png)no-repeat center';

		}else{
			favourite.style.background = 'url(./img/heart2.png)no-repeat center';
		}
	}


}
// Joke.addToFavourite();
let getJoke = document.querySelector('#getJoke'),
inpuTypes = document.querySelectorAll('input[name=joke]'),
categoriesBlock = document.querySelector('.categories'),
inputCategories = document.querySelector('input[name=joke][value=categories]'),
labelSearch = document.querySelector('input[name=joke][value=search]'),
searchJoke = document.querySelector('#searchJoke'),
jokesWrapper = document.querySelector('#jokes__wrapper');

getJoke.addEventListener('submit', Joke.getJoke);
inputCategories.addEventListener('change',Joke.renderCategories);


inpuTypes.forEach(input=>{
	input.addEventListener('change',(e)=>{
		let currentInput = e.target,
			value = currentInput.value;
    value === 'categories' ? categoriesBlock.classList.remove('hide') : categoriesBlock.classList.add('hide');
    value === 'search' ? searchJoke.classList.remove('hide') : searchJoke.classList.add('hide');
	})
})

