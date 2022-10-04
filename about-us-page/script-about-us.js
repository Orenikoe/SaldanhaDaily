const teamData = [
	{
		name: 'Goncalo Da Silva',
		title: 'CEO',
		description: `enjoyiing journalizm since 8 years. very dedicted to my job. when i'm not reading - i like to play tennis.`,
		image: 'assets/1517063149400.jpg',
	},
	{
		name: 'Andre Maceda',
		title: 'CTO',
		description: `enjoyiing journalizm since 8 years. very dedicted to my job. when i'm not reading - i like to play tennis.`,
		image: 'assets/andre-pic.jpg',
	},
	{
		name: 'Oren Tal',
		title: 'Admnistration Officer',
		description: `enjoyiing journalizm since 8 years. very dedicted to my job. when i'm not reading - i like to play tennis.`,
		image: 'assets/oren-pic.jpg',
	},
];
const cardsWrapper = document.querySelector('main');
const menuIcon = document.getElementById('burger-menu-icon');
const burgerMenuOpen = document.getElementById('burger-menu-open');
let menuVisibleIndicator = false;

function printCards() {
	teamData.map((worker) => {
		const cardTop = document.createElement('div');
		const cardBottom = document.createElement('div');
		const workerTextTop = document.createElement('div');
		const workerImage = document.createElement('div');
		const singleCard = document.createElement('div');
		const workerName = document.createElement('h4');
		const workerTitle = document.createElement('h6');
		const workerDesc = document.createElement('p');
		workerName.innerHTML = worker.name;
		workerTitle.innerHTML = worker.title;
		workerDesc.innerHTML = worker.description;
		cardTop.appendChild(workerImage);
		cardTop.appendChild(workerTextTop);
		workerTextTop.appendChild(workerName);
		workerTextTop.appendChild(workerTitle);
		cardBottom.appendChild(workerDesc);
		singleCard.appendChild(cardTop);
		singleCard.appendChild(cardBottom);
		cardsWrapper.appendChild(singleCard);
        workerImage.style.backgroundImage = `url(${worker.image})`
		cardsWrapper.classList.add('cards-wrapper');
		singleCard.classList.add('single-card-wrap');
		workerImage.classList.add('worker-img');
		cardTop.classList.add('card-top');
		workerTextTop.classList.add('card-top-text');
	});
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
						menuLink.href = "../main-page/main-page.html";
						break;
					case 'Technology':
						menuLink.href = "../main-page/main-page.html";
						break;
					case 'Financial':
						menuLink.href = '../main-page/main-page.html';
						break;
					case 'About Us':
						menuLink.href = "about-us.html";
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


printCards();
