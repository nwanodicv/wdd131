
/*/ select the DOM elements for output
const full = document.querySelector("#last-modification");


// use the date object
const today = new Date();

full.innerHTML = `Last Modification <span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
		lastmodified: "full",
	}
).format(today)}`

year.innerHTML = `getFullYear(): <span class="highlight">${today.getFullYear().getFullTime()}`;*/

let lastModified = document.querySelector('#last-modification');

lastModified.innerHTML = ""

alert(document.lastModified);
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





