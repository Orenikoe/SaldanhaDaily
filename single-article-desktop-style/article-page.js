import {sideArticlesData} from '../single-article-desktop-style/article-data'

const sidePosts = document.querySelector(".sidePosts");



function createArticle(name, imageUrl){
    const posts = document.createElement("div");
  posts.classList.add("posts");
  sidePosts.appendChild(posts);

}