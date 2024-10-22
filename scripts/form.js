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


let productsNameHTML = "";

productsName.forEach((productName) => {
    const html = `
    <label>Product Name
        <select id="${id}" name="${productName.name}" required>
            <option disabled selected>Select a Product...</option>
        </select>
    </label>`
    console.log(html)
})


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