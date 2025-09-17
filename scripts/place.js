// Last Modified Date
let lastModified = document.querySelector('#last-modification');
let nLastModif = Date.parse(document.lastModified);
lastModified.innerHTML = `Last Modified: ${new Intl.DateTimeFormat(
  "en-US",
  { dateStyle: "full", timeStyle: "long" }
).format(nLastModif)}`;

// Wind Chill Calculation
function calculateWindChill(t, s) {
    return (t <= 50 && s > 3) ? (35.74 + 0.6215*t - 35.75*s**0.16 + 0.4275*t*s**0.16).toFixed(1) : t;
}

// Example Weather Data
const temp = 10;   // °C
const wind = 5;    // km/h
const windChill = calculateWindChill(temp, wind);

// Render Weather Section
document.querySelector('.js-wind-chill-container').innerHTML = `
  <div class="weather-container">
    <h1 class="background-color">Weather</h1>
    <div class="wind-chill-factor-container">
      <img class="wind-chill-factor" src="images/weather-icon.svg" alt="Weather forecast icon">
    </div>
    <div class="information"> 
      <h3>Temperature: ${temp}°C</h3>
      <h3>Conditions: Partly Cloudy</h3>
      <h3>Wind: ${wind} km/h</h3>
      <h3>Wind Chill: ${windChill} °C</h3>
    </div>
  </div>
`;

