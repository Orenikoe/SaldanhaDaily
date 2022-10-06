import {articlesData} from '../Data/articles-data.js'
const articlesContainer = document.querySelector('section');

const navLinks = document.getElementsByClassName('nav-link');
let filteredArr = [];
let navLinksArr = Array.from(navLinks);
console.log(navLinksArr);
navLinksArr.map(link => {
	link.addEventListener('click', printCards);
})



function printCards(event) {
    if (window.location.pathname === '/single-article/single-article.html') {
        window.location.pathname = './main-page/main-page.html'
    }
   
	articlesContainer.innerHTML = '';
	 filteredArr = articlesData.filter(article => {
		return article.topic === event.target.innerHTML;
	})
	if (event.target.innerHTML === 'About Us') {
		location.href = '../about-us-page/about-us.html';
	}
   

        filteredArr.map((article) => {
            const articleId = document.createElement('span');
            const articleWrap = document.createElement('div');
            const articleLink = document.createElement('a');
            const articleTitle = document.createElement('h3');
            const articleImg = document.createElement('img');
            const articleDesc = document.createElement('p');
            articleLink.appendChild(articleWrap);
            articleLink.appendChild(articleId);
            articleWrap.appendChild(articleTitle);
            articleWrap.appendChild(articleImg);
            articleWrap.appendChild(articleDesc);
            articleLink.setAttribute('href', '../single-article/single-article.html');
            articleLink.addEventListener('click', printSingleArticle);
            articleImg.setAttribute('src', article.img );
            articleImg.setAttribute('alt', "article photo" );
            articleWrap.setAttribute('id', 'Articles' );
            articleId.innerHTML = article.id;
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


function printSingleArticle(event) {
    sessionStorage.setItem('article-id', event.currentTarget.querySelector('span').innerHTML);
    location.href = "./single-article/single-article.html"

}




// printCards();





