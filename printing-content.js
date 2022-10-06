import {articlesData} from '../Data/articles-data.js'

const articlesContainer = document.querySelector('section');
document.getElementById('company-icon').addEventListener('click', printCards);


const navLinks = document.getElementsByClassName('nav-link');
let filteredArr = [];
let navLinksArr = Array.from(navLinks);
console.log(navLinksArr);
navLinksArr.map(link => {
	link.addEventListener('click', printCards);
})



export function printCards(event) {
//    document.querySelector('span').style.display = 'none';
   
  if (document.querySelector('section') !== null) {
      articlesContainer.innerHTML = '';

  } else {
    location.href = '../main-page/main-page.html';
  }
	 filteredArr = articlesData.filter(article => {
		return article.topic === event.target.innerHTML;
	})

	if (event.target.innerHTML === 'About Us') {
		location.href = '../about-us-page/about-us.html';
	} else if (event.currentTarget.id ==='company-icon') {
        event.preventDefault();
        filteredArr = articlesData;
    }
   

        filteredArr.map((article) => {
            const articleId = document.createElement('span');
            articleId.style.display = 'none';
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
            articleLink.classList.add('link-default')
            articleImg.classList.add('articleImage');
           
            if (document.querySelector('section') !== null) {
                articlesContainer.appendChild(articleLink);
          
            } 
        });
        
    }


function printSingleArticle(event) {
    sessionStorage.setItem('article-id', event.currentTarget.querySelector('span').innerHTML);
    location.href = "./single-article/single-article.html"

}




// printCards();





