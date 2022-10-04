const menuIcon = document.getElementById('burger-menu-icon');
const burgerMenuOpen = document.getElementById('burger-menu-open');
let menuVisibleIndicator = false;


let loggedInInd = sessionStorage.getItem('loggedIn');
if (loggedInInd === 'true') {
	document.querySelector('form').style.display = 'none';
	document.getElementById('logged-in-msg').style.display = 'block';
	document.getElementById('logged-in-msg').innerHTML = `Welcome ${sessionStorage.getItem('username')} !`
	
}

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

	let loggedInInd = sessionStorage.getItem('loggedIn');
	if (loggedInInd === 'true') {
		links.push('Order Food');
	}
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
					case 'Order Food':
						menuLink.href = '../order-food-page/order-food.html';
						break;
				}

				menuLink.innerHTML = link;
				linksContainer.appendChild(menuLink);
		  });
	burgerMenuOpen.appendChild(linksContainer);
}


function subscribeClicked() {
	document.getElementById('subscribe-pop-msg').style.display = 'block';
	setTimeout(() => {
		document.getElementById('subscribe-pop-msg').style.display = 'none';
	}, 4000);
}

function loginClicked(event) {
	event.preventDefault();
	let name = document.getElementById('username').value;
	let password = document.getElementById('password').value;
	document.getElementById('login-anchor').removeAttribute('href');
	if (name == null || name == '') {
		alert("Name can't be blank");
		document.getElementById('login-anchor').removeAttribute('href');

		return false;
	} else if (password.length < 6) {
		alert('Password must be at least 6 characters long.');
		return false;
	}

	sessionStorage.setItem('loggedIn', true);
	sessionStorage.setItem('username', name);
	username = name;
	let links = [];
	location.replace('../main-page/main-page.html');
}

