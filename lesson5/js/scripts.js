const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', function() {
 const listAdd = input.value;
 input.value = '';
 
 const listItem = document.createElement('li');
 const listDelete = document.createElement('button');

 listItem.textContent = listAdd;
 listDelete.textContent = ❌;

 listItem.appendChild(listDelete);
 list

});

//footer

//Last modified
document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;

//copyright
document.getElementById('copyright').innerHTML = new Date().getFullYear();