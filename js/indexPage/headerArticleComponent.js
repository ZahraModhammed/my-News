const headerArticles =
`<a href="" class="article-link">
<div class="row">
  <div class="col-5">
      <img src="" alt="">
  </div>
  <div class="col-7">
     <div class="article-text">
      <span class="article-category">
         
      </span>
      <h5 class="article-title"></h5>
     </div>
  </div>
</div>
</a>`


class headerArticleComponent extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = headerArticles;
        this.querySelector("img").setAttribute("src",this.getAttribute("src"))
        this.querySelector("a").setAttribute("href", this.getAttribute("href"))
        this.querySelector("span").innerText =  this.getAttribute("category")
        this.querySelector("h5").innerText =  this.getAttribute("title")
        

    }

  
}

// document.querySelectorAll('slider-component').forEach(item => {
//   item.outerHTML = item.innerHTML
// })

window.customElements.define("articles-component", headerArticleComponent)