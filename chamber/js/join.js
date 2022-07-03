let d = new Date();

document.getElementById("date").value = d.toDateString();

let hours = d.getHours();
let mins = d.getMinutes();
let seconds = d.getSeconds();
document.getElementById("time").value = hours + ":" + mins + ":" + seconds;
