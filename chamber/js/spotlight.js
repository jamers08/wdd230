const URL = 'https://jamers08.github.io/wdd230/chamber/json/data.json';
const spotlight = document.querySelector('#spotlight');

fetch(URL)
  .then(function (response){
    return response.json();
  })
  .then(function (jsonObject) {
    const members = jsonObject['members'];
    let statusCheck = members.filter(members => (members.level == 'Gold' || members.level == 'Silver'));
    //try array.map()?
    for (let i = 0; i < 3; i++) {
      shuffle = Math.floor(Math.random() * statusCheck.length);
      displaySpotlightCard(statusCheck[shuffle]);
      statusCheck = statusCheck.filter(members => (members.name != statusCheck[shuffle].name));
    }
  });

function displaySpotlightCard(members) {
  //create elements from json--remember to look back and double check!!
  let card = document.createElement('div');
  let name = document.createElement('h2');
  let logo = document.createElement('img');
  let message = document.createElement('p');
  let website = document.createElement('a');
  let phone = document.createElement('p');

  //set attributes and text content
  card.setAttribute('class', 'spot');

  name.textContent = `${members.name}`;

  logo.setAttribute('src', members.logo);
  logo.setAttribute('alt', `Logo for ${members.name}`);
  logo.setAttribute('loading', 'lazy');

  message.textContent = `${members.message}`;

  website.setAttribute('href', members.website);
  website.textContent = `Visit Website`;

  phone.textContent = `${members.phone}`;

  //append elements to new div
  card.appendChild(name);
  card.appendChild(logo);
  card.appendChild(message);
  card.appendChild(website);
  card.appendChild(phone);

  //append new div to spotlight
  spotlight.appendChild(card);
};