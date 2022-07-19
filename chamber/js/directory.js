const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}



const URL = 'https://jamers08.github.io/wdd230/chamber/json/data.json';
const cards = document.querySelector('.cards');

async function getMembers() {
  let response = await fetch(URL);
  if (response.ok) {
    let data = await response.json();
    console.log(data);
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