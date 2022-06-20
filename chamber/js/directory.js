const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const prophets = jsonObject['prophets'];
    
    prophets.forEach(prophet => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let logo = document.createElement('img');
        let name = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('p');
        let address = document.createElement('p'):

        h2.textContent = `${prophet.level}`;
        name.textContent = `${prophet.name}`;
        phone.textContent = `${prophet.phone}`;
        website.textContent = `${prophet.website}`;
        address.textContent = `${prophet.address}`;


        logo.setAttribute('src', prophet.logo);
        logo.setAttribute('alt', `Logo for ${prophet.name}`);
        logo.setAttribute('loading', 'lazy');

        card.appendChild(h2);
        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(address);

        document.querySelector('div.cards').appendChild(card);
    });
  });
