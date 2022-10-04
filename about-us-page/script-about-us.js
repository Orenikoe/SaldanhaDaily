import {teamData} from '../data.js'
const cardsWrapper = document.querySelector('main');


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



printCards();



