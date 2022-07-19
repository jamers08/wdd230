//toggle menu
function toggleMenu() {
    document.getElementById("navigation").classList.toggle("open");
    document.getElementById("hamButton").classList.toggle("open");
}

const x = document.getElementById('hamButton')
x.onclick = toggleMenu;

//random quote generator


//footer copyright and last updated

document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;

document.getElementById("copyright").innerHTML = new Date().getFullYear();