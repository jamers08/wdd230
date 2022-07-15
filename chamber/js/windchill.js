const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#caption');
const windSpeed = document.querySelector('#wind-speed');
const feelsLike = document.querySelector('#feels');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Columbia&units=imperial&appid=b8aa599bead2268ad5027f753b37e704';

apiFetch();

async function apiFetch() {

      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }

}

function displayResults(weatherData) {
    currentTemp.innerHTML = `${weatherData.main.temp.toFixed(0)}`;
    windSpeed.innerHTML = `${weatherData.wind.speed.toFixed(0)}`;
    feelsLike.innerHTML = `${weatherData.main.feels_like.toFixed(0)}`;
    
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}

let t = currentTemp.textContent;
let s = windSpeed.textContent;

if (t <= 50 && s > 3) {
    const windChill = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
    document.querySelector('#chill').innerHTML = windChill;
} else {
    const windChill = "N/A";
    document.querySelector('#chill').innerHTML = windChill;
}