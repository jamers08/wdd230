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
        const addresses = document.createElement('p');
        const phoneLabel = document.createElement('h3');
        const phone = document.createElement('p');
        const emailLabel = document.createElement('h3');
        const email = document.createElement('p');
        const servicesLabel = document.createElement('h3');
        const services = document.createElement('p');
        const historyLabel = document.createElement('h3');
        const history = document.createElement('p');
        const ordinanceLabel = document.createElement('h3');
        const ordinances = document.createElement('p');
        const sessionLabel = document.createElement('h3');
        const sessions = document.createElement('p');
        const closureLabel = document.createElement('h3');
        const closures = document.createElement('p');

        name.textContent = `${temple.name}`;

        pic.setAttribute('src', temple.pic);
        pic.setAttribute('alt', `Picture of ${temple.name}`);
        pic.setAttribute("loading", "lazy");
        
        addressLabel.textContent = `${temple.addressLabel}:`;
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

        phoneLabel.textContent = `${temple.phoneLabel}`;
        phone.textContent = `${temple.phone}`;

        emailLabel.textContent = `${temple.emailLabel}`;
        email.textContent = `${temple.email}`;

        historyLabel.textContent = `${temple.historyLabel}`;
        temple.history.forEach(item => {
            const historyItem = document.createElement('p');
            historyItem.textContent = item;
            history.appendChild(historyItem);
        })

        ordinanceLabel.textContent = `${temple.ordinanceLabel}`;
        temple.ordinances.forEach(ord => {
            const ordItem = document.createElement('p');
            ordItem.textContent = ord;
            ordinances.appendChild(ordItem);
        })

        sessionLabel.textContent = `${temple.sessionLabel}`;
        temple.sessions.forEach(session => {
            const sessionItem = document.createElement('p');
            sessionItem.textContent = session;
            sessions.appendChild(sessionItem);
        })

        closureLabel.textContent = `${temple.closureLabel}`;
        temple.closures.forEach(closure => {
            const closureDate = document.createElement('p');
            closureDate.textContent = closure;
            closures.appendChild(closureDate);
        })


        card.append(name);
        card.appendChild(pic);
        card.appendChild(addressLabel);
        card.appendChild(addresses);
        card.appendChild(phoneLabel);
        card.appendChild(phone);
        card.appendChild(emailLabel);
        card.appendChild(email);
        card.appendChild(servicesLabel);
        card.appendChild(services);
        card.appendChild(historyLabel);
        card.appendChild(history);
        card.appendChild(ordinanceLabel);
        card.appendChild(ordinances);
        card.appendChild(sessionLabel);
        card.appendChild(sessions);
        card.appendChild(closureLabel);
        card.appendChild(closures);


        cards.append(card);
        
    });
}

getTemples();