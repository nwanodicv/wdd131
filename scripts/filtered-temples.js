const temples = [
    {
      year: 2005,
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      year: 1888,
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      year: 2015,
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      year: 2020,
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      year: 1974,
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      year: 1986,
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      year: 1983,
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
      year: 1983,
      templeName: "Atlanta Georgia",
      location: "Sandy Springs, Georgia",
      dedicated: "June 1, 1983",
      area: 30328,
      imageUrl: 
      "https://lh3.googleusercontent.com/p/AF1QipOqXLmKXW9heCgAAM43Jdqd6Fvc_DK-UTB0wqpx=s680-w680-h510"
    },

    {
      year: 2004,
      templeName: "Accra Ghana",
      location: "Accra Ghana",
      dedicated: " 11 January 2004",
      area: 17500,
      imageUrl: 
      "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg",
      alt: "Accra Ghana"
    },

    {
      year: 1985,
      templeName: "South Africa",
      location: "Parktown, Johannesburg",
      dedicated: "24 August 1985",
      area: 19184,
      imageUrl: 
      "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-43596-thumb.jpg",
      alt: "South Africa"
  },
  
  {
    year: 2000,
    templeName: "Melbourne Australia",
    location: "76 Cathies, Wantirna South",
    dedicated: "June 16, 2000",
    area: 10700,
    imageUrl: 
    "https://churchofjesuschrist.org/imgs/48e36732ca023c6cbe859be980617e4ca2cebe2a/full/320%2C/0/default",
    alt: "Melbourne Australia"
},

{
  year: 2001,
  templeName: "Perth Australia",
  location: " 163 Wordsworth, Yokine, Australia",
  dedicated: " May 20, 2001",
  area: 10700,
  imageUrl: 
  "https://churchofjesuschristtemples.org/assets/img/temples/perth-australia-temple/perth-australia-temple-34994-main.jpg",
  alt: "Perth Australia"
}];

// Here w
let albumHTML = '';

temples.forEach((temple) => {
    albumHTML +=   `
      <div class="album-container">
          <figure>
              <figcaption>${temple.templeName}</figcaption>
              <h5>TempleName:  ${temple.templeName}</h5>
              <h5>location:  ${temple.location}</h5>
              <h5>dedicated:  ${temple.dedicated}</h5>
              <h5>area:  ${temple.area}</h5>
              <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy">
          </figure>
      </div>`
});

document.querySelector('.main-album-container').innerHTML = albumHTML;

// filter session

function displayTemples(filteredTemples) {
  let albumHTML = "";

  filteredTemples.forEach((temple) => {
    albumHTML += `
      <div class="album-container">
          <figure>
              <figcaption>${temple.templeName}</figcaption>
              <h5>TempleName:  ${temple.templeName}</h5>
              <h5>location:  ${temple.location}</h5>
              <h5>dedicated:  ${temple.dedicated}</h5>
              <h5>area:  ${temple.area}</h5>
              <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy">
          </figure>
      </div>`;
  });
  document.querySelector('.main-album-container').innerHTML = albumHTML;
}
 displayTemples(temples); // Display all temples initially

 // Here we add event listeners to the buttons to clear of whatever was previously displayed
 document.querySelector('#home').addEventListener('click', () => {
  displayTemples(temples);
 });

 document.querySelector('#old').addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default link behavior
  const oldTemples = temples.filter(temple => temple.year < 1900);
  displayTemples(oldTemples);
 })

 document.querySelector('#new').addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default link behavior
  const newTemples = temples.filter(temple => temple.year > 2000);
  displayTemples(newTemples);
 })

 document.querySelector('#large').addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default link behavior
  const largeTemples = temples.filter(temple => temple.area > 90000);
  displayTemples(largeTemples);
 })

 document.querySelector('#small').addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default link behavior
  const smallTemples = temples.filter(temple => temple.area < 10000);
  displayTemples(smallTemples);
 })


// Navigation menu toggle
const menuButton = document.querySelector("#menu-button");
const navMenu = document.querySelector(".nav-bar-container");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("open");

  // Toggle button symbol
  if (navMenu.classList.contains("open")) {
    menuButton.textContent = "✖"; // Close icon
  } else {
    menuButton.textContent = "☰"; // Hamburger icon
  }
});


let lastModified = document.querySelector('#last-modification');

lastModified.innerHTML = ""


// returns: Tuesday, December 16, 2017 11:09:42
let oLastModif = new Date(document.lastModified);
let nLastModif = Date.parse(document.lastModified);

lastModified.innerHTML = `<span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "full", timeStyle: "long",
	}
).format(nLastModif)
}`;
