//******************************TEMPLE JS */
const templeURL = 'https://jamers08.github.io/wdd230/final/temples.json';
const spotlight = document.querySelector('#temple-summary')

async function getTemples() {
    let response = await fetch(templeURL);
    if (response.ok) {
      let data = await response.json();
      console.log(data);
      //buildBusinessCards(data);
    } else {
      throw Error(response.statusText);
    }
  }

getTemples();

//*****************************WEATHER JS */
const currentTemp = document.querySelector('#current-temp');
const currentIcon = document.querySelector('#current-icon');
const currentDesc = document.querySelector('#current-desc');
const currentHumid = document.querySelector('#current-humidity');
const currentFeel = document.querySelector('#current-feel');
const date = "";

//const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.95&lon=-80.89&exclude=minutely,hourly&units=imperial&appid=b8aa599bead2268ad5027f753b37e704';
const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.611600&lon=-111.758023&exclude=minutely,hourly&units=imperial&appid=b8aa599bead2268ad5027f753b37e704';

apiFetch();

async function apiFetch() {
    const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayCurrent(data);
        buildAlert(data);
      } else {
          throw Error(await response.text());
      }
}

fetch(url)
.then(response => response.json())
.then(weatherData => {
    for(i=0;i<3;i++){
        const forecastUnix = `${weatherData.daily[i+1].dt}`;
        const forecastMills = forecastUnix * 1000;
        const fullForecastDay = new Intl.DateTimeFormat("en-UK",
        {
            dateStyle: "full"
        }).format(forecastMills);
        document.getElementById(`day${i+1}`).innerHTML = `${fullForecastDay}`;
    }
    for(i=0;i<3;i++){
        document.getElementById(`icon${i+1}`).src = `https://openweathermap.org/img/w/${weatherData.daily[i+1].weather[0].icon}.png`;
    }
    for(i=0;i<3;i++){
        document.getElementById(`day${i+1}Desc`).innerHTML = `${weatherData.daily[i+1].weather[0].description}`;
    }
    for(i=0;i<3;i++) {
        document.getElementById(`day${i+1}Temp`).innerHTML = `${weatherData.daily[i+1].temp.day.toFixed(1)} &deg;F`;
    }
})

function displayCurrent(weatherData) {
    //Current date - Day 0
    currentTemp.innerHTML = `Currently ${weatherData.current.temp.toFixed(1)}&deg;F`;
    currentHumid.innerHTML = `${weatherData.current.humidity}% Humidity`;
    currentFeel.innerHTML = `Feel like ${weatherData.current.feels_like.toFixed(1)}&deg;F`;
        const currenticonsrc = `https://openweathermap.org/img/w/${weatherData.current.weather[0].icon}.png`;
        const desc1 = weatherData.current.weather[0].description;
    currentIcon.setAttribute('src', currenticonsrc);
    currentIcon.setAttribute('alt', desc1);
    currentDesc.textContent = desc1;
        const currentUnix = `${weatherData.current.dt}`;
        const currentMills = currentUnix * 1000;
        const fullCurrentDay = new Intl.DateTimeFormat("en-UK",
            {
                dateStyle: "full"
            }).format(currentMills);
        currentDate.innerHTML = `${fullCurrentDay}`;

        
        }

const alerts = document.querySelector('#alert');
let i = 0;
function buildAlert(weatherData) {
    weatherData.alerts.forEach(alert => {
        let card = document.createElement('section');
        let event = document.createElement('p');

        event.textContent = `${weatherData.alerts[i].event}`;

        card.appendChild(event);

        alerts.appendChild(card);
        i++
    });
}

    

