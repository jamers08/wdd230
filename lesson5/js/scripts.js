const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', () => {
    if (input.value != '') {
        const listAdd = input.value;
        input.value = '';
        
        const listItem = document.createElement('li');
        const listDelete = document.createElement('button');
        const listText = document.createElement('span');
        
        listItem.appendChild(listText);
        listText.textContent = listAdd;
        listItem.appendChild(listDelete);
        listDelete.textContent = '❌';
        list.appendChild(listItem);

        listDelete.addEventListener('click', () => {
            list.removeChild(listItem);
        });
        
        input.focus();
    }
});

//footer

//Last modified
document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;

//copyright
document.getElementById('copyright').innerHTML = new Date().getFullYear();