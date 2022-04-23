const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const d = new Date();
const dayName = dayNames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
const hour = d.getHours();
const minute = d.getMinutes();
const second = d.getSeconds();
let x= "\u00A9";



const fullDate = `${dayName}, ${d.getDate()} ${monthName} ${year} ${hour}:${minute}:${second}`;

document.getElementById("currentDate").textContent = 'Last Updated: ' + fullDate;

document.getElementById('year').textContent = x + year + " - Jamie Stott - South Carolina"