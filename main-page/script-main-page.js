				
import {articlesData} from '../Data/articles-data.js'
const articlesContainer = document.querySelector('section');


function printCards() {
	articlesData.map((article) => {
		const articleWrap = document.createElement('div');
		const articleLink = document.createElement('a');
		const articleTitle = document.createElement('h3');
		const articleImg = document.createElement('img');
		const articleDesc = document.createElement('p');
		articleLink.appendChild(articleWrap);
		articleWrap.appendChild(articleTitle);
		articleWrap.appendChild(articleImg);
		articleWrap.appendChild(articleDesc);
		articleLink.setAttribute('href', '../single-article/single-article.html');
		articleImg.setAttribute('src', article.img );
		articleImg.setAttribute('alt', "article photo" );
		articleWrap.setAttribute('id', 'Articles' );
		articleTitle.innerHTML = article.title;
		articleDesc.innerHTML = article.desc;
        if (article.id % 2 == 0) {
			articleWrap.classList.add('rightArticle');
		} else {
			articleWrap.classList.add('leftArticle');
			
		}

		articleTitle.classList.add('articleTitle');
		articleImg.classList.add('articleImage');
		articlesContainer.appendChild(articleLink);
	});
}



printCards();



