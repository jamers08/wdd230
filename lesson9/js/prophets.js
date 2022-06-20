const URL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

async function getProphets() {
  let response = await fetch(URL);
  if (response.ok) {
    let data = await response.json();
    console.log(data);
  } else {
    throw Error(response.statusText);
  }
}

getProphets();