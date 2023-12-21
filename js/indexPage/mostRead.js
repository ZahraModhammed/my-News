const MostReadCard = `
<div class="card-news" >
<a href="article.html">
<div class="row">
  <div class="col md-5">
    <img src="" alt="">
  </div>
  <div class="col-md-7">
    <div class="card-text">
      <h4>    </h4>
      <p>
         
      </p>
      <time datetime="">
        
      </time>
    </div>
  </div>
</div>
</a>
</div>
`




class mostRead extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = MostReadCard;
        this.querySelector("img").setAttribute("src",this.getAttribute("src"))
        this.querySelector("a").setAttribute("href", this.getAttribute("href"))
        this.querySelector("p").innerText =  this.getAttribute("paragraph")
        this.querySelector("h4").innerText =  this.getAttribute("title")
        this.querySelector("time").innerText = this.getAttribute("date")
        this.querySelector("time").innerText = this.getAttribute("datetime", this.getAttribute("datetime"))
        

    }

  
}

window.customElements.define("most-read-card", mostRead);
