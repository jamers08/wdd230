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


// get all images with data-src attribute
const imagesToLoad = document.querySelectorAll("img[data-src]");

//optional parameters being set for the IntesectionalObserver
const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute('data-src');};
};

//first check to see if Intersection Observer is supported
if('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
                loadImages(item.target);
            }
        });
    });
    imagesToLoad.forEach((img) => {
        imgObserver.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}