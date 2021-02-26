

let getPromise = timer => {
   return new Promise((resolve,reject)=>{
      let randomValue = 99;
      setTimeout(resolve(randomValue),timer);
   })
}

Promise
   .all([
      getPromise(1000)
         .then(
            data => firstFunc(data)
         )
      ,
      getPromise(2000),
      getPromise(3000)
   ])
   .then(
      data => runAfter(data)
   )

function firstFunc(data){
   return data*10;
}

function runAfter(arr){
   arr.forEach(func=>console.log(func));
}