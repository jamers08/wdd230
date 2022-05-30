let t = 33;
let s = 15;
let output = document.getElementById('chill');

if (t <= 50 && s > 3) {
    let windChill = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
    output.textContent = Math.round(windChill);
} else {
    output.textContent = "N/A"
}