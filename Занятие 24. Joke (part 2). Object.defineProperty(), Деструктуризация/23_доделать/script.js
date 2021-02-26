// fetch('https://api.chucknorris.io/jokes/random')
//   .then(response => response.json())
//   .then(data => console.log(data));

// async function getData(){
// 	let joke = await fetch('https://api.chucknorris.io/jokes/random');
// 	let result = await joke.json();

// 	console.log(result);
// }

// getData();

const jokeURL = 'https://api.chucknorris.io/jokes';

class Form{

	static async getJoke(e){
		e.preventDefault();
		
		let type = this.querySelector('input[name=joke]:checked').value;
		let result;

		switch(type){
			case 'categories':
				let category = document.querySelector('.categories input:checked').value;
				//console.log(category);
				result = await Form.fetchJoke(`random?category=${category}`);
				break;
			case 'random':
				result = await Form.fetchJoke(type);
				break;
			case 'search':
				result = await Form.fetchJoke(`search?query=${searchJoke.value}`);
				break;
		}

		Joke.createJoke(result);
	}

	static async fetchJoke(type){
		let data = await fetch(`${jokeURL}/${type}`),
			response = await data.json();

		return response;
	}

	static async renderCategories(){
		let data = await Form.fetchJoke('categories');

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
				//console.log(e.target);

				let activeLabel = categoriesDiv.querySelector('label.active');
				activeLabel && activeLabel.classList.remove('active');

				let currentLable = e.target.closest('label');
				currentLable.classList.add('active');
			})

			label.append(input);
			categoriesDiv.append(label);
		});
	}

	static renderFavJoke(){
		let jokes = JSON.parse(localStorage.jokes);

		if(jokes && jokes.length>0){
			jokes.forEach(joke=>{
				Joke.createJoke(joke,jokes__fav);
			})
		}
	}
}


class Joke{

	constructor(){
		this.favourite = false;
	}

	static createJoke(data,renderBlock){
		//console.log(data);

		if(data.result && data.result.length>0){
			data.result.forEach(joke=>Joke.createJoke(joke));
		} else{
			let joke = new Joke();
			for(let key in data){
				joke[key] = data[key];
			}
			//console.log(joke);
			joke.renderJoke(renderBlock);
		}
	}

	renderJoke(renderBlock){
		let data = this;

		let jokeDiv = document.createElement('div');
		jokeDiv.classList.add('joke__block');
		jokeDiv.id = data.id;

		jokeDiv.innerHTML = `<p>${data.value}</p>`;
		jokeDiv.innerHTML += `<img src="${data.icon_url}" width=50>`;

		if(data.categories.length>0){
			data.categories.forEach(categoty=>{
				jokeDiv.innerHTML += `<p class="joke__category">Category: ${categoty}</p>`;
			})
		}

		let date = new Date(data.created_at);
		//console.log(date);
		jokeDiv.innerHTML += `<p>Date: ${date.getFullYear()}</p>`;

		let favourite = document.createElement('button');
		favourite.classList.add('fav__btn');
		favourite.innerHTML = this.favourite ? '❤️' : '🖤';
		favourite.addEventListener('click',()=>data.addToFavourite());

		jokeDiv.appendChild(favourite);

		if(!renderBlock){
			jokesWrapper.append(jokeDiv);
		}else{
			renderBlock.append(jokeDiv);
		}
	}

	addToFavourite(){
		this.favourite = !this.favourite;
		let jokeBlock = document.getElementById(this.id),
			jokeBlockFav = jokeBlock.querySelector('.fav__btn');

		jokeBlockFav.innerHTML = this.favourite ? '❤️' : '🖤';

		if(this.favourite){
			let jokes = localStorage.jokes ? JSON.parse(localStorage.jokes) : [];
			//console.log(jokes);

			jokes.push(this);
			//console.log(jokes);

			localStorage.setItem('jokes',JSON.stringify(jokes));


			jokeBlock.remove();
			this.renderJoke(jokes__fav);

		} else{
			let jokes = JSON.parse(localStorage.jokes);
			//console.log(jokes);

			let getNotCurrentJoke = jokes.filter(joke=>joke.id !== this.id);
			//console.log(getNotCurrentJoke);

			localStorage.setItem('jokes',JSON.stringify(getNotCurrentJoke));

			jokeBlock.remove();
			this.renderJoke();
		}

	}
}


let getJoke = document.querySelector('#getJoke'),
	inputCategories = document.querySelector('input[name=joke][value=categories]'),
	inpuTypes = document.querySelectorAll('input[name=joke]'),
	categoriesBlock = document.querySelector('.categories'),
	searchJoke = document.querySelector('#searchJoke'),
	jokesWrapper = document.querySelector('#jokes__wrapper'),
	jokes__fav = document.querySelector('#jokes__fav');

getJoke.addEventListener('submit', Form.getJoke);
inputCategories.addEventListener('change',Form.renderCategories);

inpuTypes.forEach(input=>{
	input.addEventListener('change',(e)=>{
		let currentInput = e.target,
			value = currentInput.value;

		value !== 'categories' ? categoriesBlock.classList.add('hide') : categoriesBlock.classList.remove('hide');
	})
})

Form.renderFavJoke();






