let d = new Date(document.lastModified);
const year = d.getFullYear();
let x= "\u00A9";

document.getElementById('year').textContent = x + year + " - Jamie Stott - South Carolina";

document.querySelector('#lastUpdate').textContent=`Last updated: ${document.lastModified}`