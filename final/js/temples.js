const templeURL = 'https://jamers08.github.io/wdd230/final/temples.json';
const cards = document.querySelector('.templeGrid');
let i = 0;

async function getTemples() {
    let response = await fetch(templeURL);
    if (response.ok) {
        let data = await response.json();
        console.log(data);
        buildTempleCards(data);
        getAddress(data);
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
        let phoneLabel = document.createElement('h3');
        let phone = document.createElement('p');
        let emailLabel = document.createElement('h3');
        let email = document.createElement('p');
        let servicesLabel = document.createElement('h3');
        let services = document.createElement('p');
        let historyLabel = document.createElement('h3');
        let history = document.createElement('p');
        let ordinanceLabel = document.createElement('h3');
        let ordinances = document.createElement('p');
        let sessionLabel = document.createElement('h3');
        let sessions = document.createElement('p');
        let closureLabel = document.createElement('h3');
        let closures = document.createElement('p');

        name.textContent = `${temple.name}`;
        addressLabel.textContent = `${temple.addressLabel}`;
        


        pic.setAttribute('src', temple.pic);
        pic.setAttribute('alt', `Picture of ${temple.name}`);
        pic.setAttribute("loading", "lazy");

        address.setAttribute('class', address);

        card.append(name);
        card.appendChild(pic);
        card.appendChild(address);

        cards.append(card);
        
    });
}

const address = document.querySelector('.address');
function getAddress(data) {
    data.temple.forEach(temple => {
        let card = document.createElement('section');
        let fullAddress = document.createElement('p');

        fullAddress.textContent = `${temple.address[i].line}`;
    
            card.appendChild(fullAddress);
            
            address.appendChild(card);
            i++
    });
}

getTemples();