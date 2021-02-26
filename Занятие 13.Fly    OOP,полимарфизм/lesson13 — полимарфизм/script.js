class Human{

	constructor(name){
		this.name = name;
	};
	
// полиморфизм ( при одмнаковых входщий данных, метод может работать по разному )
// run - ск-ть s/t km/h -  s растояние , t время
	run(s,t){
		let result = {
			speed: Math.round(s/t),
			text:`Human ${this.name}, with distance= ${s}km and time= ${t}h = ${Math.round(s/t)} km/h`
		}
		//человек с именем ... со растоянием равной то,что придет денные
		return result;
	}
}
//Oleg будет экземпляром класса Sport
//ему доступно все, что доступно class Human
class Sport extends Human{
	constructor(name,years){
		//вызываем м super
		//если класс Sport создается от класса Human, то вначале насыщается всем от класса Human
		//а топом можно насыщать свой объект
		super(name);
		this.years = years;
	}
	//вначале ищется в run Human, потом в Sport и отрабатываем по другому
	run(s,t){
		let v = s/t,
			speedForSport = v*this.years;
		return `Human ${this.name}, with distance=${s} and time=${t} = ${Math.round(speedForSport)} km/h`;
	}
}
class Regular extends Human{
	constructor(name,smoking){
		super(name);
		this.smoking = smoking;
	}
	run(s,t){
		// humanRun пришел объект
		let humanRun = super.run(s,t),
		//то что вернулось в humanRun и забираю значение speed
			humanspeed = humanRun.speed;
		//${this.smoking ? 'курит' : 'не курит'} - если this.smoking - true -вывод Антон курит 
		//this.smoking - false -вывод Антон не курит 
		if(this.smoking){
			humanspeed *= 0.8;
					}
		return `${humanRun.text}.${this.name} ${this.smoking ? 'курит' : 'не курит'}.Его скорость = ${humanspeed}`;
	}
}

//прописываем  let Oleg = new Sport('Oleg') - потом создаем class Sport extends Human{} и меняем на let Oleg = new Sport('Oleg'),
 let Oleg = new Sport('Oleg',3),//обычный человек -вторым параметром передаем ск-ко лет занимается спортом
	 Misha = new Human('Misha'),//спортивный человек
	 Anna = new Sport('Anna',2);//спортивный человек
	 Anton = new Regular('Anton',false);//курит или нет true- курит



console.log(Oleg.run(40,3));
console.log(Misha.run(40,3));
console.log(Anna.run(40,3));
console.log(Anton.run(40,3));
 