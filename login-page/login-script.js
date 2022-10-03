const menuIcon = document.getElementById('burger-menu-icon');
const burgerMenuOpen = document.getElementById('burger-menu-open');
let menuVisibleIndicator = false;

function toggleBurgerMenu() {
	checkMenuStatus(menuVisibleIndicator);
	generateBurgerMenu(burgerMenuOpen);
}
function checkMenuStatus(status) {
	if (status === false) {
		burgerMenuOpen.classList.remove('hidden');
		burgerMenuOpen.classList.add('visible');
		menuVisibleIndicator = true;
	} else {
		burgerMenuOpen.classList.add('hidden');
		burgerMenuOpen.classList.remove('visible');
		menuVisibleIndicator = false;
	}
}

function generateBurgerMenu(el) {
	const linksContainer = document.createElement('div');
	let links = ['Sport', 'Technology', 'Financial', 'About Us'];
	el.childNodes.length === 1
		? burgerMenuOpen.removeChild(linksContainer)
		: links.forEach((link) => {
				const menuLink = document.createElement('a');
				menuLink.classList.add('menu-link');
				switch (link) {
					case 'Sport':
						menuLink.href = '../main-page/main-page.html';
						break;
					case 'Technology':
						menuLink.href = '../main-page/main-page.html';
						break;
					case 'Financial':
						menuLink.href = '../main-page/main-page.html';
						break;
					case 'About Us':
						menuLink.href = '../about-us-page/about-us.html';
						break;
				}

				menuLink.innerHTML = link;
				linksContainer.appendChild(menuLink);
		  });
	burgerMenuOpen.appendChild(linksContainer);
}
const name = 'John Doe';
const age = 26;
const passions = ['Ski', 'Hiking', 'Cinema'];

console.log(name, age, passions)