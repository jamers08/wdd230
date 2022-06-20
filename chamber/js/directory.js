const requestURL = "https://jamers08.github.io/wdd230/chamber/json/data.json";
const cards = document.querySelector('.cards');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        
        const members = jsonObject['members'];

        members.forEach(member => {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let name = document.createElement('p');
            let logo = document.createElement.apply('img');
            let phone = document.createElement('p');
            let url = document.createElement('p');
            let address = document.createElement('p');

            h2.textContent = `${member.level}`;
            name.textContent = `${member.name}`;
            phone.textContent = `${member.phone}`;
            url.textContent = `${member.url}`;
            address.textContent = `${member.address}`;
            
            logo.setAttribute('src', member.logo);
            logo.setAttribute('alt', `${member.name} Logo`);
            logo.setAttribute('loading', 'lazy');

            card.appendChild(h2);
            card.appendChild(name);
            card.appendChild(phone);
            card.appendChild(website);
            card.appendChild(address);

            document.querySelector('div.cards').appendChild(card);
        });
    });