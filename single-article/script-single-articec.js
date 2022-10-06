import { articlesData } from '../Data/articles-data.js'
let articleTitle = document.getElementById('article-title')



function printArticle() {
    let articleId = sessionStorage.getItem('article-id');
    let today = new Date().toISOString().slice(0, 10)
    let filteredArticle = articlesData.filter(article => {
        return article.id == articleId
    }) 
   
articleTitle.innerHTML = filteredArticle[0].title;
document.getElementById('article-img').style.backgroundImage = `url(${filteredArticle[0].img})`
document.getElementById('article-desc').innerHTML = filteredArticle[0].desc
document.getElementById('article-date').innerHTML = today
document.getElementById('article-body').innerHTML = filteredArticle[0].body
}

printArticle();