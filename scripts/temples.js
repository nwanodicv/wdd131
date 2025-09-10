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

//lastModified.innerHTML = `Last Modification: ${document.lastModified}`;
