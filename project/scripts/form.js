import {products} from '.../data/products.js'

//..........Inner HTML Here.........
let productsHTML = "";
//...........Looping on the Products using ".forEach" function........
products.forEach((product) => {

//..........Generate the HTML..........
    productsHTML  += `
    <select id="productName" name="Product Name" required>
        <option id=${product.id} name=${product.name} disabled selected></option>
        <option value=${product.id}>${product.name}</option>
        
    </select>`
    console.log(productsHTML)
});

document.querySelector('#productName').innerHTML = productsHTML


//.........Placeholder Here...........
const inputF = document.querySelector('#productName');

inputF.addEventListener('focus', function() {
    inputF.placeholder = "Focused - Select a Product...";
});

inputF.addEventListener('blur', function() {
    inputF.placeholder = "Default Placeholder";
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