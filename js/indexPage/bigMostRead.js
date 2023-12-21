const bigMostReadCard =`
<div class="card-news" > 
<a href="article.html">
<div class="card-img">
  <img src="" alt="">
</div>
<div class="card-text">
  <h4>   </h4>
  <time>
  
  </time>
</div>
</a>
</div>
`
class bigmostRead extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = bigMostReadCard;
        this.querySelector("img").setAttribute("src",this.getAttribute("src"))
        this.querySelector("a").setAttribute("href", this.getAttribute("href"))
        this.querySelector("h4").innerText =  this.getAttribute("title")
        this.querySelector("time").innerText = this.getAttribute("date")
        this.querySelector("time").innerText = this.getAttribute("datetime", this.getAttribute("datetime"))
        

    }

  
}

window.customElements.define("big-most-read-card", bigmostRead);