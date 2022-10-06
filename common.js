import {printCards} from './printing-content.js'
document.getElementById('burger-menu-icon').addEventListener('click', toggleBurgerMenu);
const menuIcon = document.getElementById('burger-menu-icon');
const burgerMenuOpen = document.getElementById('burger-menu-open');
const burgerMenuOpenInnerDiv = document.getElementById('burger-menu-icons-div');
let menuVisibleIndicator = false;



function toggleBurgerMenu() {
	if (menuVisibleIndicator === false) {
		menuVisibleIndicator = true;
		burgerMenuOpen.classList.remove('hidden');
		burgerMenuOpen.classList.add('visible');
	} else {
		burgerMenuOpen.classList.add('hidden');
		burgerMenuOpen.classList.remove('visible');
	
		menuVisibleIndicator = false;
	}
}



function generateBurgerMenu() {

	let links = ['Sport', 'Technology', 'Campus', 'About Us'];
	let loggedInInd = sessionStorage.getItem('loggedIn');
	if (loggedInInd === 'true') {
	   links.push('Order Food');
	}
	
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
				burgerMenuOpenInnerDiv.appendChild(menuLink);
		  });
	burgerMenuOpen.appendChild(burgerMenuOpenInnerDiv);
	
}

generateBurgerMenu();

export default menuIcon.addEventListener('click', toggleBurgerMenu);

