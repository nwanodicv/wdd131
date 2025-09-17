// Last Modified Date
let lastModified = document.querySelector('#last-modification');
let nLastModif = Date.parse(document.lastModified);
lastModified.innerHTML = `Last Modified: ${new Intl.DateTimeFormat(
  "en-US",
  { dateStyle: "full", timeStyle: "long" }
).format(nLastModif)}`;

// Wind Chill Calculation
function calculateWindChill(tempC, windKmh) {
  if (tempC <= 10 && windKmh > 4.8) {
    return (
      13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 
      0.3965 * tempC * Math.pow(windKmh, 0.16)
    ).toFixed(1);
  } else {
    return "N/A";
  }
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
      <img class="wind-chill-factor" src="images/weather-forecast-icon.webp" alt="Weather forecast icon">
    </div>
    <div class="information"> 
      <h3>Temperature: ${temp}°C</h3>
      <h3>Conditions: Partly Cloudy</h3>
      <h3>Wind: ${wind} km/h</h3>
      <h3>Wind Chill: ${windChill} °C</h3>
    </div>
  </div>
`;

