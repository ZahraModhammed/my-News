const SearchArticles = `
<div class="article-card">
<a href="article.html" class="article-link">
  <div class="row">
    <div class="col-md-4">
      <img src="" alt="">
    </div>
      <div class="col-md-8">
         <h4>     </h4>
         <p>
        </p>
        <time datetime="10-10-2023">
          
        </time>
      </div>
  </div>
</a>
</div>
`

class searcharticle extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = SearchArticles
        this.querySelector('a').setAttribute('href', this.getAttribute('href'))
        this.querySelector('img').setAttribute('src', this.getAttribute('src'))
        this.querySelector("h4").innerText =  this.getAttribute("title")
        this.querySelector("p").innerText =  this.getAttribute("paragraph")
        this.querySelector("time").innerText = this.getAttribute("date")
        this.querySelector("time").innerText = this.getAttribute("datetime", this.getAttribute("datetime"))
    }
}

window.customElements.define("search-article", searcharticle);