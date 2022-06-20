const requestURL = 'https://jamers08.github.io/wdd230/chamber/json/data.json';
const cards = document.querySelector('.cards');

async function getMembers() {
  let response = await fetch(URL);
  if (response.ok) {
    let data = await response.json();
    console.log(data);
  } else {
    throw Error(response.statusText);
  }
}

getmembers();