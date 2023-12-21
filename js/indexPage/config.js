import { ApI_URl } from "../urIs.js";

console.log(ApI_URl)
async function sliderFetch() {
    let res = await fetch (ApI_URl +'slider');
    let data = await res.json();

   data.map(slide => {
    console.log(slide)
    const el = document.createElement("slider-component");
    el.setAttribute("src", slide.img_uri)
    el.setAttribute("title", slide.title)
    el.setAttribute("href", slide.link)
  

    document.getElementById("carousel-inner").appendChild(el)
   })

   let slides = document.getElementsByClassName("carousel-item");
   slides[0].classList.add("active")
}

sliderFetch();
async function articlesFetch() {
    let res = await fetch (ApI_URl +'header-articles');
    let data = await res.json();
    
    data.map(article => {
        console.log(article)
        const ele = document.createElement("articles-component");
        ele.setAttribute("src", article.img_uri)
        ele.setAttribute("href", article.link)
        ele.setAttribute("title", article.title)
        ele.setAttribute("category", article.category)

        document.getElementById("header-articles").appendChild(ele);
    })
  
}

articlesFetch();
async function newsArticleFetch() {
    let res = await fetch (ApI_URl +'news');
    let data = await res.json();
    
    data.map(articles => {
        console.log(articles)
        const ele = document.createElement("article-component");
        ele.setAttribute("src", articles.img_uri)
        ele.setAttribute("href", articles.link)
        ele.setAttribute("title", articles.title)
        ele.setAttribute("category", articles.category)
        ele.classList.add("col-lg-3","col-md-3","col-sm-6", "mt-4")

        document.getElementById("news").appendChild(ele);
    })
  
}

newsArticleFetch();

async function mostReadoneFetch() {
    let res = await fetch (ApI_URl +'most-read');
    let data = await res.json();
    
      for(let i = 0; data.length; i++){
        if(i%2 == 0){
            const el = document.createElement("most-read-card")
            el.setAttribute("title", data[i].title)
            el.setAttribute("src", data[i].img_uri)
            el.setAttribute("href", data[i].link)
            el.setAttribute("paragraph", data[i].paragraph)
            el.setAttribute("datetime",moment(parseInt(data[i].date)).format("dddd") + moment(parseInt(data[i].date)).format("LL"))

            document.getElementById("most-read").appendChild(el)
        }else{
            const el = document.createElement("big-most-read-card")
            el.setAttribute("title", data[i].title)
            el.setAttribute("src", data[i].img_uri)
            el.setAttribute("href", data[i].link)
            el.setAttribute("datetime", moment(parseInt(data[i].date)).format("dddd") + moment(parseInt(data[i].date)).format("LL"))

            document.getElementById("most-read").appendChild(el)
        }
      }
  
}

mostReadoneFetch();


async function opinionsFetch() {
    let res = await fetch (ApI_URl +'opinion-articles');
    let data = await res.json();
    
    data.map(opinion => {
        console.log(opinion)
        const ele = document.createElement("opinions-component");
        ele.setAttribute("src", opinion.user_uri)
        ele.setAttribute("href", opinion.link)
        ele.setAttribute("title", opinion.title)
        ele.setAttribute("user_name", opinion.user_name)
        ele.classList.add("col-lg-3","col-md-4","col-sm-6")

        document.getElementById("opinion").appendChild(ele);
    })
  
}

opinionsFetch();


async function videosFetch() {
    let res = await fetch(ApI_URl + 'videos')
    let data = await res.json();

    data.map(article => {
        const el = document.createElement('swiper-slide')

        el.setAttribute('title', article.title)
        el.setAttribute('src', article.img_uri)
        el.setAttribute('href', article.link)

        document.getElementById('swiper-wrapper').appendChild(el)
    })
}

videosFetch();

async function latestNewsFetch() {
    let response = await fetch(ApI_URl+ 'latest-news')
    let data = await response.json()
  
    data.map(article => {
      if(article.position === "right"){
          const el = document.createElement('article-component');
  
          el.setAttribute('title', article.title)
          el.setAttribute('src', article.img_uri)
          el.setAttribute('href', article.link)
          el.setAttribute('category', article.category)
          el.setAttribute('excerpt', article.paragraph)
          document.getElementById('first-article').appendChild(el)
      } else if (article.position === "side") {
        const el = document.createElement('side-article');
  
        el.setAttribute('text', article.title)
        el.setAttribute('src', article.img_uri)
        el.setAttribute('href', article.link)
        el.setAttribute('category', article.category)
        document.getElementById('side-article').appendChild(el)
      } else {
        const el = document.createElement('article-component');
  
        el.classList.add('col-sm-6')
        el.setAttribute('title', article.title)
        el.setAttribute('src', article.img_uri)
        el.setAttribute('href', article.link)
        el.setAttribute('category', article.category)
        document.getElementById('bottom-article').appendChild(el)
      }
    })
  }





latestNewsFetch();