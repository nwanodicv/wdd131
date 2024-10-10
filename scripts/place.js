let lastModified = document.querySelector('#last-modification');

lastModified.innerHTML = ""


// returns: Tuesday, December 16, 2017 11:09:42
let oLastModif = new Date(document.lastModified);
let nLastModif = Date.parse(document.lastModified);

lastModified.innerHTML = `<span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
		nLastModif: "full",
	}
).format(nLastModif)
}`;

lastModified.innerHTML = `Last Modification: ${document.lastModified}`;


// Here we use array to store the data using the object module
const windchills = [{
	name: 'Weather',

	image: 'images/weather-forecast-icon.webp',

	rating: {
		count: '23'
	}
}];


let windchillsHTML = ''
// Here we call the forEach() function and inside the forEach() function, we generated the html
windchills.forEach((windchill) => {
	windchillsHTML += `
	<div class="weather-container">
        <div>
            <h1>${windchill.name}</h1>
        </div>
        <div class="wind-chill-factor-container">
            <img class="wind-chill-factor" src="${windchill.image}" alt="Windchill Factor">
        </div>
        <div class="information">
            <p>
                <h3>Temperature: 10c</h3>
                <h3>Conditions: Partly Cloudly</h3>
                <h3>Wind: 5 km/h</h3>
                <h3>Wind Chil: 9.8 C</h3>
            </p>
        </div>
    </div>`
	console.log(windchillsHTML)
});
//Here the code display the windchill on the screen
document.querySelector('.js-wind-chill-container').innerHTML = 	windchillsHTML;




// for quize
const countries = ["Canada", "Chili", "Colombia", "Croatia", "Costa Rica"];
const countriesLong = countries.filter((country) => country.length > 7);

console.log(countriesLong)

const points = [100, 88, 94, 78, 84, 69];

function convertPointsToStatus(pointTotal) {
  let status = 'Not Complete';
  if (pointTotal >= 93) {
    status = "Excellent";
  } else if (pointTotal >= 70) {
    status = "Complete";
  }
  return status;
}

const statusReport = points.map(convertPointsToStatus);
console.log(statusReport)

//--------------------------------------------

courseName = 'class';
stuFirstName = 'room'

result = `Welcome to the ${courseName} ${stuFirstName}!`

console.log(result)

/*const computeWindChill = function(windSpeed, temperature) {
/*    // Fahrenheit Only
/*    return 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
/*};
/*let windChill = windChill(windSpeed, temperature)
/*console.log(windChill);*/