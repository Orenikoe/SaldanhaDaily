import {printCards} from './printing-content.js'
document.getElementById('burger-menu-icon').addEventListener('click', toggleBurgerMenu);
const menuIcon = document.getElementById('#burger-menu-icon');
const burgerMenuOpen = document.getElementById('burger-menu-open');
let menuVisibleIndicator = false;


export function toggleBurgerMenu() {
	checkMenuStatus(menuVisibleIndicator);
	generateBurgerMenu(burgerMenuOpen);
}

function checkMenuStatus(status) {
	if (status === false) {
		menuVisibleIndicator = true;
		burgerMenuOpen.classList.remove('hidden');
		burgerMenuOpen.classList.add('visible');
	} else {
		burgerMenuOpen.classList.add('hidden');
		burgerMenuOpen.classList.remove('visible');
		menuVisibleIndicator = false;
	}
}



function generateBurgerMenu(el) {
	const linksContainer = document.createElement('div');
	let links = ['Sport', 'Technology', 'Campus', 'About Us'];
	let loggedInInd = sessionStorage.getItem('loggedIn');
	if (loggedInInd === 'true') {
	   links.push('Order Food');
	}
	el.childNodes.length > 0
		? burgerMenuOpen.removeChild(linksContainer)
		: 
	links.forEach((link) => {
				const menuLink = document.createElement('a');
				menuLink.classList.add('menu-link');
				switch (link) {
					case 'Technology':
						menuLink.addEventListener('click', printCards );
						break;
						case 'Sport':
							menuLink.addEventListener('click', printCards );
							break;
					case 'Campus':
						// menuLink.href = "../main-page/main-page.html";
						menuLink.addEventListener('click', printCards );

						break;
				
					case 'About Us':
						menuLink.href = "../about-us-page/about-us.html";

						break;
						case 'Order Food':
						menuLink.href = '../order-food-page/order-food.html';
						break;
				}

				menuLink.innerHTML = link;
				linksContainer.appendChild(menuLink);
		  });
	burgerMenuOpen.appendChild(linksContainer);
}

