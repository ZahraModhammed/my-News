import { ApI_URl } from "../urIs.js";

console.log(ApI_URl)
async function articleBodyFetch() {
    let response = await fetch(ApI_URl + 'articles')
    let data = await response.json()
    console.log(data);
    
    const articleHeader = document.createElement('article-header')

    articleHeader.setAttribute('category', data.category)
    articleHeader.setAttribute('subject', data.subject)
    articleHeader.setAttribute('title', data.title)

    document.getElementById("article-header").appendChild(articleHeader)



    const articleBodyHeader = document.createElement('article-body-header')

    articleBodyHeader.setAttribute('src', data.img_uri)
    articleBodyHeader.setAttribute('subtitle', data.subtitle)
    articleBodyHeader.setAttribute('date', moment(data.date).format('dddd') + '، ' + moment(data.date).format('LL'))

    document.getElementById("article-body-header").appendChild(articleBodyHeader)



    const articleBody = document.createElement('article-body')

    articleBody.setAttribute('article_part_1', data.article_part_1)
    articleBody.setAttribute('article_part_2', data.article_part_2)

    document.getElementById('article-body').appendChild(articleBody)



    data.keywords.map(keyword => {
        const element = document.createElement('span')
        element.classList.add('key-words', 'me-3')
        element.innerText = keyword
        document.getElementById('key-words').appendChild(element)
    })



    data.comments.map(comment => {
        const commentCard = document.createElement('comment-card');

        commentCard.setAttribute('user_img', comment.user_img)
        commentCard.setAttribute('user_name', comment.user_name)
        commentCard.setAttribute('commentText', comment.text)

        document.getElementById('comment-cards').appendChild(commentCard)
    })



    data.related_articles.map(article => {
        const relatedArticles = document.createElement('article-component');

        relatedArticles.setAttribute('src', article.img_uri)
        relatedArticles.setAttribute('title', article.title)
        relatedArticles.setAttribute('category', article.category)
        relatedArticles.classList.add('col-sm-4')

        document.getElementById('related-articles').appendChild(relatedArticles)
    })
}


async function suggestedArticleFetch() {
    let response = await fetch(ApI_URl + 'suggested-articles')
    let data = await response.json()

    console.log(data);
   
    data.map(article => {
        const suggestedArticle = document.createElement('suggested-article')

        suggestedArticle.setAttribute('src', article.img_uri)
        suggestedArticle.setAttribute('href', article.link)
        suggestedArticle.setAttribute('title', article.title)

        document.getElementById('stories').append(suggestedArticle)
    })
}


async function mostReadArticles() {
    let response = await fetch(ApI_URl + 'most-read')
    let data = await response.json()

    data.map(article => {
        const mostReadedArticle = document.createElement('most-read-article');

        mostReadedArticle.setAttribute('src', article.img_uri)
        mostReadedArticle.setAttribute('title', article.title)
        mostReadedArticle.setAttribute('date', moment(data.date).format('LL'))
        mostReadedArticle.setAttribute('href', article.link)

        document.getElementById('most-read').appendChild(mostReadedArticle)
    })
}


articleBodyFetch();
suggestedArticleFetch();
mostReadArticles();
