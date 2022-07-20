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
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let pic = document.createElement('img');
        let addressLabel = document.createElement('h3');
        let address = document.createElement('section');
        let addressLine = document.createElement('p');
        let phoneLabel = document.createElement('h3');
        let phone = document.createElement('p');
        let emailLabel = document.createElement('h3');
        let email = document.createElement('p');
        let servicesLabel = document.createElement('h3');
        let services = document.createElement('section');
        let servicesLine = document.createElement('p');
        let historyLabel = document.createElement('h3');
        let history = document.createElement('section');
        let historyLine = document.createElement('p');
        let ordinanceLabel = document.createElement('h3');
        let ordinances = document.createElement('p');
        let sessionLabel = document.createElement('h3');
        let sessions = document.createElement('section');
        let sessionLine = document.createElement('p');
        let closureLabel = document.createElement('h3');
        let closures = document.createElement('section');
        let closureLine = document.createElement('p');

        name.textContent = `${temple.name}`;
        addressLabel.textContent = `${temple.addressLabel}:`;
        phoneLabel.textContent = `${temple.phoneLabel}:`;
        phone.textContent = `${temple.phone}`;
        emailLabel.textContent = `${temple.emailLabel}:`;
        email.textContent = `${temple.email}`;
        servicesLabel.textContent = `${temple.servicesLabel}:`;
        historyLabel.textContent = `${temple.historyLabel}:`;
        ordinanceLabel.textContent = `${temple.ordinanceLabel}`;
        ordinances.textContent = `${temple.ordinances}`;
        sessionLabel.textContent = `${temple.sessionLabel}`;
        closureLabel.textContent = `${temple.closureLabel}`;

        pic.setAttribute('src', temple.pic);
        pic.setAttribute('alt', `Picture of ${temple.name}`);
        pic.setAttribute("loading", "lazy");

        address.textContent = `${temple.address}`;
        address.setAttribute('class', 'address');
        addressLine.textContent =`${temple.address[i].line}`;
        
        services.textContent = `${temple.services}`;
        services.setAttribute('class', 'services');
        servicesLine.textContent = `${temple.services[i].line}`;

        history.textContent = `${temple.history}`;
        history.setAttribute('class', 'history');
        historyLine.textContent = `${temple.history[i].historySub} ${temple.history[i].historyDate}`;

        sessions.textContent = `${temple.sessions}`;
        sessions.setAttribute('class', 'sessions');
        sessionLine.textContent = `${temple.sessions[i].day} ${temple.sessions[i].time}`;
     
        closures.textContent = `${temple.closures}`;
        closures.setAttribute('class', 'closures');
        closureLine.textContent = `${temple.closures[i].line}`;

        card.append(name);
        card.appendChild(pic);
        card.appendChild(addressLabel);
        //card.appendChild(address);
        card.appendChild(addressLine);
        card.appendChild(phoneLabel);
        card.appendChild(phone);
        card.appendChild(emailLabel);
        card.appendChild(email);
        card.appendChild(servicesLabel);
        //card.appendChild(services);
        card.appendChild(servicesLine);
        card.appendChild(historyLabel);
        //card.appendChild(history);
        card.appendChild(historyLine);
        card.appendChild(ordinanceLabel);
        card.appendChild(ordinances);
        card.appendChild(sessionLabel);
        //card.appendChild(sessions);
        card.appendChild(sessionLine);
        card.appendChild(closureLabel);
        //card.appendChild(closures);
        card.appendChild(closureLine);

        cards.append(card);
        
    });
}

/*fetch(templeURL)
.then(response => response.json())
.then(data => {
    for(i=0;i<6;i++){
        document.getElementById(`temple${i+1}Name`).innerHTML = `${data.temple[i+1].name}`;
    }
    for(i=0;i<6;i++) {
        document.getElementById(`pic${i+1}`).src = `https://jamers08.github.io/wdd230/final/${data.temple[i+1].pic}.jpeg`;
    }
});*/

/*const address = document.querySelector('.address');

function getAddress() {
    for(i=0;i<temple.address.length;i++) {
        let card = document.createElement('section');
        let fullAddress = document.createElement('p');

        fullAddress.textContent = `${temple.address[i].line}`;
        i++;

        card.appendChild(fullAddress);

        address.appendChild(card);
    };
}*/

getTemples();