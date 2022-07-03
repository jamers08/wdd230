const URL = 'https://jamers08.github.io/wdd230/chamber/json/data.json';
const cards = document.querySelector('#spotlight');

async function getMembers() {
  let response = await fetch(URL);
  if (response.ok) {
    let data = await response.json();
    //console.log(data);
    buildBusinessCards(data);
  } else {
    throw Error(response.statusText);
  }
}

function buildBusinessCards(data) {
  data.members.forEach(member => {
    let card = document.querySelector('.spot');
    let name = document.querySelector('.bName');
    let phone = document.querySelector('.bPhone');
    let website = document.querySelector('bWebsite');
    let address = document.querySelector('bAddress');
    let logo = document.querySelector('.bLogo');
    let membership = document.querySelector('bStatus');

 
    name.innerHTML = `${member.name}`;
    phone.innerHTML = `${member.phone}`;
    website.innerHTML = "Go to Website";
    website.setAttribute('href', member.website);
    address.innerHTML = `${member.address}`;
    
    logo.setAttribute('src', member.logo);
    logo.setAttribute('alt', `Logo for ${member.name}`);
    

    companyName.innerHTML = `${company.companyName}`;
    phoneNumber.innerHTML = company.phoneNumber;
    website.innerHTML = `${company.website}`;
    membership.innerHTML = member.level;
   
    logo.setAttribute('src', "images/" + company.logo);
    logo.setAttribute('alt', `${company.companyName}`);

    companyName.innerHTML = `${company.companyName}`;
    phoneNumber.innerHTML = company.phoneNumber;
    website.innerHTML = `${company.website}`;
    membership.innerHTML = company.membership;

    cards.appendChild(card) ;
  });
}

getMembers();