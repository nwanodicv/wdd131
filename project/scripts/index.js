import {products} from '../data/products.js';
//............HTML..............
let productsHTML = '';

//............Generated HTML, this is to display the products on the screen dynamically........
products.forEach((product) => {
    productsHTML += `
    <div  class="product-container">
            <div class="product-image-container">
                <img src="${product.image}" class="product-img1">
            </div>
            <div class="product-name">
                ${product.name}
            </div>
            <div class="product-rating-star">
                <img src="${product.rating.stars}" class="stars-rating">
                <div class="product-rating-number">
                    ${product.rating.count}
                </div>
            </div>
            <div class="product-price">
                $${(product.priceCent / 100).toFixed(2)}
            </div>
            <div class="quantity">
                <div>Quantity</div>
                <select>
                    <option required disabled selected>select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>
            <div>
                <button class="button-btn js-add-to-cart">Add to Cart</button>
            </div>
        </div>`
        console.log(productsHTML)
});

document.querySelector('.js-product-grid').innerHTML = productsHTML;

//const navLinksOutput = document.querySelector('.js-home-page');
//
//navLinksOutput.addEventListener('click', () => {
//  oldTemple();
//  newTemple();
//  largeTemple();
//  smallTemple();
//});


// page datetime last modification
let lastModified = document.querySelector('#last-modification');

lastModified.innerHTML = "";


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




  function myFunction() {
	const x = document.querySelector(".nav-bar-container");
	if (x.style.display === "block") {
	  x.style.display = "none";
	} else {
	  x.style.display = "block";
	}
  }