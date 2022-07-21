//******************************TEMPLE JS */
const templeURL = 'https://jamers08.github.io/wdd230/final/temples.json';
const spotlight = document.querySelector('#temple-summary')

async function getTemples() {
    let response = await fetch(templeURL);
    if (response.ok) {
        let data = await response.json();
        console.log(data);
        const temple = jsonObject['temple'];
      shuffle = Math.floor(Math.random() * temple.length);
      buildTempleSpotlight(temple[shuffle]);
    } else {
        throw Error(response.statusText);
    }
};

function buildTempleSpotlight(temple){
    const card = document.createElement('section');
        const name = document.createElement('h4');
        const pic = document.createElement('img');
        const addressLabel = document.createElement('h3');
        const addresses = document.createElement('p');
        const servicesLabel = document.createElement('h3');
        const services = document.createElement('p');
        const historyLabel = document.createElement('h3');
        const history = document.createElement('p');

        card.setAttribute('class', 'spot');

        name.textContent = `${temple.name}`;

        pic.setAttribute('src', temple.pic);
        pic.setAttribute('alt', `Picture of ${temple.name}`);
        pic.setAttribute("loading", "lazy");

        addressLabel.textContent = `${temple.addressLabel}`;
        temple.addresses.forEach(line => {
            const addressLine = document.createElement('p');
            addressLine.textContent = line;
            addresses.appendChild(addressLine);
        })
        
        servicesLabel.textContent = `${temple.servicesLabel}`;
        temple.services.forEach(service => {
            const serviceItem = document.createElement('p');
            serviceItem.textContent = service;
            services.appendChild(serviceItem);
        })

        historyLabel.textContent = `${temple.historyLabel}`;
        temple.history.forEach(item => {
            const historyItem = document.createElement('p');
            historyItem.textContent = item;
            history.appendChild(historyItem);
        })

        card.append(name);
        card.appendChild(pic);
        card.appendChild(addressLabel);
        card.appendChild(addresses);
        card.appendChild(servicesLabel);
        card.appendChild(services);
        card.appendChild(historyLabel);
        card.appendChild(history);

        spotlight.appendChild(card);
};