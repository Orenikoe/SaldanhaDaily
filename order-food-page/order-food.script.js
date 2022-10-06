import { foodData } from "../Data/order-food-data.js";
document.getElementById('food-btn').addEventListener('click', orderFoodBtn)

const cardsWrapper = document.querySelector('main');
let idIndex = 1;


document.querySelector('span').innerHTML = ` I'm ${sessionStorage.getItem(
	'username'
)} and i will be waiting at room  `;



function printCards() {
	foodData.map((item) => {
		const cardTop = document.createElement('div');
		const cardBottom = document.createElement('div');
		const workerTextTop = document.createElement('div');
		const workerImage = document.createElement('div');
		const singleCard = document.createElement('div');
		const workerName = document.createElement('h4');
		const workerTitle = document.createElement('h6');
		singleCard.setAttribute('id', idIndex);
		workerName.innerHTML = item.name;
		workerTitle.innerHTML = item.price;

		cardTop.appendChild(workerImage);
		cardTop.appendChild(workerTextTop);
		workerTextTop.appendChild(workerName);
		workerTextTop.appendChild(workerTitle);

		singleCard.appendChild(cardTop);
		singleCard.appendChild(cardBottom);
		cardsWrapper.appendChild(singleCard);
		workerImage.style.backgroundImage = `url(${item.image})`;
		cardsWrapper.classList.add('cards-wrapper');
		singleCard.classList.add('single-card-wrap');
		workerImage.classList.add('worker-img');
		cardTop.classList.add('card-top');
		workerTextTop.classList.add('card-top-text');
		singleCard.addEventListener('click', (event) => {
			item.clicked(event);
		});
		idIndex++;
	});
}


function orderFoodBtn() {
	let foodCards = document.getElementsByClassName('single-card-wrap');
	for (let item of foodCards) {
		item.style.backgroundColor = 'white';
	}
	alert('Your Food is on the way!')
}

printCards();
