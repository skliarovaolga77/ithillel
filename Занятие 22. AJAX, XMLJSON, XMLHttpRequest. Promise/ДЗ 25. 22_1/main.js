//Используя Promise написать код, который сформирует 2 последовательных запроса 
//за различными файлами json (data.json, data2.json).
// В файлах лежат массивы подобные по структуре. Склеить 2 массива и вывести результат в консоль.

let getUsers = url => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.send();

    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === 4) {
        xhr.status >= 200 && xhr.status < 300 ? resolve(JSON.parse(xhr.responseText)) : reject(xhr.status);
      }
    });
  });
};

Promise
  .all(
    [
      getUsers('data.json'),
      getUsers('data2.json')
    ]

  )
  .then(
    data => console.log(data),
    error => console.log(error)
  );