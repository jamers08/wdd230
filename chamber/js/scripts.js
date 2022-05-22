//toggle menu
function toggleMenu() {
    document.getElementById("navigation").classList.toggle("open");
    document.getElementById("hamButton").classList.toggle("open");
}

const x = document.getElementById('hamButton')
x.onclick = toggleMenu;

//current date
const datefieldUK = document.querySelector(".currentDate");

const now = new Date();

const fulldateUK = new Intl.DateTimeFormat("en-UK",
{
    dateStyle: "full"
}).format(now);

datefieldUK.innerHTML = `${fulldateUK}`;

//banner
//only display banner on Mondays and Tuesdays
let d = new Date().getDay();

const banner = document.getElementById("banner");
if (d === 1 || d === 2) {
    banner.style.display = "block";
}

const close = document.querySelector("#close");

close.addEventListener('click', () => {
    banner.style.display = "none";
});


//footer

document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;

document.getElementById("copyright").innerHTML = new Date().getFullYear();
