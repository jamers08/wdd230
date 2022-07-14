//toggle menu
function toggleMenu() {
    document.getElementById("navigation").classList.toggle("open");
    document.getElementById("hamButton").classList.toggle("open");
}

const x = document.getElementById('hamButton')
x.onclick = toggleMenu;