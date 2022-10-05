import {sideArticlesData} from '../single-article-desktop-style/article-data'

const sidePosts = document.querySelector(".sidePosts");

function createArticle(name, imageUrl){
    const posts = document.createElement("div");
    posts.classList.add("posts");
    sidePosts.appendChild(posts);

    const postsHeader = document.createElement("div");
    postsHeader.classList.add("posts-header");
    posts.appendChild(postsHeader);

    const postsImage=document.createElement("div");
    postsImage.style.backgroundImage=`url${imageUrl}`;
    postsImage.classList.add("posts-img");
    postsHeader.appendChild(postsImage);

    const postsBody = document.createElement("div");
    postsBody.classList.add("posts-body");
    posts.appendChild(postsBody);

    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("posts-title");
    cardTitle.innerText = name;
    posts.appendChild(cardTitle);

}

for (let i = 0; i < sideArticlesData.length; i++) {
    createArticle(sideArticlesData[i].name, sideArticlesData[i].imageUrl);
  }

