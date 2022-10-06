import { articlesData } from '../Data/articles-data.js';
let articleTitle = document.getElementById('article-title');
let randomNumber = Math.floor(Math.random() * 11);


function printArticle() {
	let articleId = sessionStorage.getItem('article-id');
	let today = new Date().toISOString().slice(0, 10);
	let filteredArticle = articlesData.filter((article) => {
		return article.id == articleId;
	});

	articleTitle.innerHTML = filteredArticle[0].title;
	document.getElementById(
		'article-img'
	).style.backgroundImage = `url(${filteredArticle[0].img})`;
	document.getElementById('article-desc').innerHTML = filteredArticle[0].desc;
	document.getElementById('article-date').innerHTML = today;
	document.getElementById('article-body').innerHTML = filteredArticle[0].body;
	document.getElementById('rel-post1').innerHTML =
		articlesData[randomNumber].title;
	document.getElementById('rel-post2').innerHTML =
		articlesData[randomNumber + 1].title;
	document.getElementsByClassName(
		'posts-img'
	)[0].style.backgroundImage = `url(${articlesData[randomNumber + 1].img})`;
	document.getElementsByClassName(
		'posts-img'
	)[1].style.backgroundImage = `url(${articlesData[randomNumber].img})`;
	document
		.getElementsByClassName('posts-img')[0]
		.addEventListener(
			'click',
			printNewArticle(
				articlesData[randomNumber + 1].title,
				articlesData[randomNumber + 1].img,
				articlesData[randomNumber + 1].desc,
				today,
				articlesData[randomNumber + 1].body
			)
		);
	document
		.getElementsByClassName('posts-img')[1]
		.addEventListener(
			'click',
			printNewArticle(
				articlesData[randomNumber].title,
				articlesData[randomNumber].img,
				articlesData[randomNumber].desc,
				today,
				articlesData[randomNumber].body
			)
		);
}

function printNewArticle(title, img, desc, date, body) {
	articleTitle.innerHTML = title;
	document.getElementById('article-img').style.backgroundImage = `url(${img})`;
	document.getElementById('article-desc').innerHTML = desc;
	document.getElementById('article-date').innerHTML = date;
	document.getElementById('article-body').innerHTML = body;
	document.getElementById('rel-post1').innerHTML =
		articlesData[randomNumber].title;
	document.getElementById('rel-post2').innerHTML =
		articlesData[randomNumber + 1].title;
	document.getElementsByClassName(
		'posts-img'
	)[0].style.backgroundImage = `url(${articlesData[randomNumber + 1].img})`;
	document.getElementsByClassName(
		'posts-img'
	)[1].style.backgroundImage = `url(${articlesData[randomNumber].img})`;
}

printArticle();
