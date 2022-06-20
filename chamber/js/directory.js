const URL = 'https://jamers08.github.io/wdd230/chamber/json/data.json';
const cards = document.querySelector('.cards');

async function getMembers() {
  let response = await fetch(URL);
  if (response.ok) {
    let data = await response.json();
    //console.log(data);
    buildBusinessCards(data);
  } else {
    throw Error(response.statusText);
  }
}

function buildBusinessCards(data) {
  data.members.forEach(member => {
    let card = document.createElement('section');
    let h3 = document.createElement('h3');
    let name = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('p');
    let address = document.createElement('p');
    let logo = document.createElement('img');

    h3.textContent = `${member.level}`;

    card.append(h3);
    
   cards.append(card) ;
  });
}

getMembers();