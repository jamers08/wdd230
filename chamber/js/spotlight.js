const URL = 'https://jamers08.github.io/wdd230/chamber/json/data.json';
const cards = document.querySelector('#spotlight');

fetch(URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonObject) {
    const members = jsonObject['members'];
    let statusCheck = members.filter(members => (members.level == 'Gold' || members.level == 'Silver'));
    //try array.map
    for (let i = 0; i < 3; i++) {
      shuffle = Math.floor(Math.random() * statusCheck.length);
      buildSpotlightCards(statusCheck[shuffle]);
      members = members.filter(members => (members.name != statusCheck[shuffle].name));
    }
  });


function buildSpotlightCards(data) {
  members.forEach(member => {
    let card = document.createElement('div');
    let h3 = document.createElement('h3');
    let name = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('a');
    let address = document.createElement('p');
    let logo = document.createElement('img');

    h3.textContent = `${member.level}`;
    name.textContent = `${member.name}`;
    phone.textContent = `${member.phone}`;
    website.textContent = "Go to Website";
    website.setAttribute('href', member.website);
    address.textContent = `${member.address}`;
    
    logo.setAttribute('src', member.logo);
    logo.setAttribute('alt', `Logo for ${member.name}`);

    card.append(h3);
    card.appendChild(logo);
    card.appendChild(name);
    card.appendChild(phone);
    card.appendChild(address);
    card.appendChild(website);
    
   cards.append(card) ;
  });
}

getMembers();