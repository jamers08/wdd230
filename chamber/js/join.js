let day = new Date();

document.getElementById("date").value = day.toDateString();

let hours = day.getHours();
let mins = day.getMinutes();
let seconds = day.getSeconds();
document.getElementById("time").value = hours + ":" + mins + ":" + seconds;
