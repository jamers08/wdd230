const templeURL = 'https://jamers08.github.io/wdd230/final/temples.json';
const cards = document.querySelector('.templeGrid');
let i =0;

async function getTemples() {
    let response = await fetch(templeURL);
    if (response.ok) {
        let data = await response.json();
        console.log(data);
        buildTempleCards(data);
        //getAddress(data);
    } else {
        throw Error(response.statusText);
    }
}

function buildTempleCards(data) {
    data.temple.forEach(temple => {
        const card = document.createElement('section');
        const name = document.createElement('h2');
        const pic = document.createElement('img');
        const addressLabel = document.createElement('h3');
        const addresses = document.createElement('ul');
        const phoneLabel = document.createElement('h3');
        const phone = document.createElement('p');
        const emailLabel = document.createElement('h3');
        const email = document.createElement('p');
        const servicesLabel = document.createElement('h3');
        const services = document.createElement('ul');
        const historyLabel = document.createElement('h3');
        const history = document.createElement('p');
        const ordinanceLabel = document.createElement('h3');
        const ordinances = document.createElement('p');
        const sessionLabel = document.createElement('h3');
        const sessions = document.createElement('p');
        const closureLabel = document.createElement('h3');
        const closures = document.createElement('p');

        name.textContent = `${temple.name}`;
        
        addressLabel.textContent = `${temple.addressLabel}:`;
        temple.addresses.forEach(service => {
            const serviceItem = document.createElement('li');
            serviceItem.textContent = service;
            addresses.appendChild(serviceItem);
        })
        
        temple.services.forEach(service => {
            const serviceItem = document.createElement('li');
            serviceItem.textContent = service;
            services.appendChild(serviceItem);
        })

        pic.setAttribute('src', temple.pic);
        pic.setAttribute('alt', `Picture of ${temple.name}`);
        pic.setAttribute("loading", "lazy");

        card.append(name);
        card.appendChild(pic);
        card.appendChild(addressLabel);
        card.appendChild(address);
        card.appendChild(services);

        cards.append(card);
        
    });
}

getTemples();