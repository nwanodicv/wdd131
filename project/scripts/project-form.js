const product = [

    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
];

//..........Inner HTML Here.........
let productHTML = "";
//...........Looping on the Products using ".forEach" function........
product.forEach((item) => {

//..........Generate the HTML..........
  productHTML += `<option value="${item.id}">${item.name}</option>`;
});
const outPut = document.querySelector('#productName').innerHTML = productHTML// display the productHTML in the select element

//..........About Page Here..........
let aboutPage = document.querySelector('#js-about-page');
aboutPage.addEventListener('click', function() {
  event.preventDefault(); // Prevent default link behavior
  alert = ('This is a product review form page for VIJUTech. Created by Chimezie Victor Stephen');
  document.querySelector('#js-navbar-content-output').innerHTML = alert;
}),

aboutPage.addEventListener('mouseover', function() {
  aboutPage.style.backgroundColor = 'purple';
}),

 //..............Local Storage........... 
  clickCounter();

  function clickCounter() {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    let localstorage = document.querySelector(".js-cart-quantity").innerHTML = localStorage.clickcount;
    console.log(localstorage)
  }

  // increment a review counter in localStorage when the form is submitted
const form = document.querySelector('#reviewForm');
form.addEventListener('submit', (ev) => {
  // You can validate or let the browser run validation; here we only increment count
  const count = Number(localStorage.getItem('reviewCount') || '0') + 1;
  localStorage.setItem('reviewCount', count);
  // update any visual cart / counter
  const cartQty = document.querySelector('.js-cart-quantity');
  if (cartQty) cartQty.textContent = count;
  // let the form submit naturally (do not call preventDefault unless you want to handle submission via JS)
});

function myFunction() {
  const nav = document.querySelector(".nav-bar-container");
  nav.classList.toggle("active");
}


//..........Hamburger Here..............
function myFunction() {
	const x = document.querySelector(".nav-bar-container");
	if (x.style.display === "block") {
	  x.style.display = "none";
	} else {
	  x.style.display = "block";
	}
  }


  // ...........Clear Local Storage after some time...........
  setTimeout(function() {
    localStorage.clear();
    let localstorage = document.querySelector(".js-cart-quantity").innerHTML = 0;
    console.log('cleared')
  }, 2000); // Clear after 1 minute (2000 milliseconds)

// page datetime last modification
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

// productHTML  += `
//    <div>
//      <option id=${item.id} name=${item.name} disabled selected></option>
//      <option value=${item.id}>${item.name}</option>
//    <div>
//    `