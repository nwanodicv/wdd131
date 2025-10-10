const products = [{
    id: '3a6t-a45jd9-7n5j',
    image: 'images/computer-chair.jpg',
    name: 'Computer Chair',
    alt: 'Computer Chair',
    description: 'Ergonomic computer chair with lumbar support and breathable mesh back.',
    specs: [
      'Adjustable height',
      'Breathable mesh',
      'Weight capacity 300 lb'
    ],
    rating: {
      stars: 'images/Rating-Star-PNG-HD.png',
      count: 95,
    },
    priceCent: 10000,
  }, {
    id: '8j57dsh-bg8n39a-8tn1',

    image: 'images/AC-infinity-advance-grow.jpg',

    name: 'AC Infinity Advance Grow',
    alt: 'AC Infinity Advance Grow',

    rating: {
        stars: 'images/Rating-Star-PNG-HD.png',

        count: 95,
    },

    priceCent: 50000,
}, {
    id: 'j8le-su5k-m8c5d9',

    image: 'images/Fuji_Gaming.jpg',

    name: 'Fuji Gaming',
    alt: 'Fuji Gaming Chair',

    rating: {
        stars: 'images/rating star emoji.jpg',

        count: 95,
    },

    priceCent: 20000,
}, {

    id: 'g3ba6t-a4jd9-kl5j',

    image: 'images/gaming-accessaries.jpg',

    name: 'Gaming Accessaries',
    alt: 'Gaming Accessaries',

    rating: {
        stars: 'images/Rating-Star-PNG-HD.png',

        count: 95,
    },

    priceCent: 5000,
}, {
    id: 'j5h4g-r9ek59-fj498nw7834',

    image: 'images/hog-dog-steamer-machine.jpg',

    name: 'Hog Dog Streamer Machine',
    alt: 'Hog Dog Streamer Machine',

    rating: {
        stars: 'images/Rating-Star-PNG-HD.png',

        count: 95,
    },

    priceCent: 15000,
}, {

    id: 'kfu4-i4nf-58sjf4',

    image: 'images/hover-succer-ball.jpg',

    name: 'Hover Succer Ball',
    alt: 'Hover Succer Ball',

    rating: {
        stars: 'images/Rating-Star-PNG-HD.png',

        count: 95,
    },

    priceCent: 25000,
},  {
    
    id: 'hf875-j4h63jk-sk58d',

    image: 'images/keyboard.jpg',

    name: 'Keyboard',
    alt: 'Mechanical Keyboard',

    rating: {
        stars: 'images/Rating-Star-PNG-HD.png',

        count: 95,
    },

    priceCent: 2500,
}, {

    id: 'j59he-gkrcmi-sfldn',

    image: 'images/kids-piggy-bank-for-girls.jpg',

    name: 'Kids Piggy For Girls',
    alt: 'Kids Piggy',

    rating: {
        stars: 'images/Rating-Star-PNG-HD.png',

        count: 95,
    },

    priceCent: 10000,
}, {

    id: 'ngi8-dJH4-s9jns',

    image: 'images/lenovo-laptop.jpg',

    name: 'Lenovo Laptop',
    alt: 'Lenovo ThinkPad Laptop',

    rating: {
        stars: 'images/Rating-Star-PNG-HD.png',

        count: 95,
    },

    priceCent: 70000,
},{

    id: 'ocje8r-dJH4-hdkaf4',

    image: 'images/mens-gray-sport-athletic-cotton.jpg',

    name: 'Men Gray Sport-athletic Cotton',
    alt: 'Men Gray Sport-athlectic cotton',

    rating: {
        stars: 'images/Rating-Star-PNG-HD.png',

        count: 95,
    },

    priceCent: 500,
},{

    id: 'fhdis-ytief4-7jf40',

    image: 'images/orange-basketball.jpg',

    name: 'Basketball',
    alt: 'Basketball',

    rating: {
        stars: 'images/Rating-Star-PNG-HD.png',

        count: 95,
    },

    priceCent: 3000,
},{

    id: 'ngy49-nb8er-83iidf',

    image: 'images/smart-watch-for-men-wemen.jpg',

    name: 'Smart watch for Men & Women',
    alt: 'Smart Watch',

    rating: {
        stars: 'images/Rating-Star-PNG-HD.png',

        count: 95,
    },

    priceCent: 10000,
},];
//............HTML..............
let productsHTML = '';

//............Generated HTML, this is to display the products on the screen dynamically........
products.forEach((product) => {
    productsHTML += `
    <div  class="product-container">
            <div class="product-image-container">
                <img src="${product.image}" class="product-img1" ${product.alt} loading="lazy">
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
            
            <div class="button-div">
                <button data-product-id="${product.id}" class="button-btn js-add-to-cart">Add to Cart</button>
            </div>
            <div class="reviews-container" id="reviews-${product.id}" style="display:none;"></div>
            </div>
            
        </div>`
        
});

document.querySelector('.js-product-grid').innerHTML = productsHTML;

//................Cart Array.........

/* Cart (store minimal info in localStorage so number persists) */
let cart = JSON.parse(localStorage.getItem('viJuCart')) || [];

/* helper: get total quantity */
function getCartTotalQuantity(){
  return cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
}

/* update cart DOM */
function updateCartQuantity(){
  const total = getCartTotalQuantity();
  document.querySelector('.js-cart-quantity').textContent = total;
  localStorage.setItem('viJuCart', JSON.stringify(cart));
}


/* add to cart (fix: compare productId to cartItem.productId) */
function addToCart(productId, qty = 1){
  let matching = cart.find(ci => ci.productId === productId);
  if (matching){
    matching.quantity += qty;
  } else {
    cart.push({ productId, quantity: qty });
  }
  updateCartQuantity();
}

/* attach listeners for add-to-cart buttons */
document.querySelectorAll('.js-add-to-cart').forEach(button => {
  button.addEventListener('click', (e) => {
    const productId = button.dataset.productId;
    // find selected quantity (closest product card)
    const card = button.closest('.product-container');
    const qtySelect = card.querySelector('.qty-select');
    const qty = qtySelect && qtySelect.value ? Number(qtySelect.value) : 1;
    addToCart(productId, qty);
  });
});

/* initialize cart count on load */
updateCartQuantity();

// ====== CATEGORY & SORT FILTER FUNCTIONALITY ======

// Get the filter elements
const categorySelect = document.getElementById('category');
const sortSelect = document.getElementById('sort');

// Get the container holding all products
const productsContainer = document.getElementById('products'); // make sure your product section has this id

// Function to show products
function displayProducts(filteredProducts) {
  productsContainer.innerHTML = ""; // Clear current products
  filteredProducts.forEach(product => {
    const div = document.createElement('div');
    div.classList.add('product-card');
    div.innerHTML = `
      <img src="${product.image}" alt="${product.alt}" loading="lazy">
      <h3>${product.name}</h3>
      <p>${product.category}</p>
      <p>$${product.price.toFixed(2)}</p>
      <button>Add to Cart</button>
    `;
    productsContainer.appendChild(div);
  });
}


// Initial display
displayProducts(products);

// Event listener for category filter
categorySelect.addEventListener('change', () => {
  let selectedCategory = categorySelect.value;
  let filtered = selectedCategory === 'all' ? products : products.filter(p => p.category === selectedCategory);
  displayProducts(filtered);
});

// Event listener for sort filter
sortSelect.addEventListener('change', () => {
  let sorted = [...products];
  if (sortSelect.value === 'price') {
    sorted.sort((a, b) => a.price - b.price);
  } else if (sortSelect.value === 'popularity') {
    sorted.sort((a, b) => b.price - a.price); // placeholder for now
  }
  displayProducts(sorted);
});


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


  function myFunction() {
	const x = document.querySelector(".nav-bar-container");
	if (x.style.display === "block") {
	  x.style.display = "none";
	} else {
	  x.style.display = "block";
	}
  }