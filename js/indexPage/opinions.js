const op = `
<a href="">
<div class="opinions-card">
  <h5>   </h5>
    <div class="user-info">
        <img src="" alt="">
        <span> </span>
     </div> 
  </div>
  </a>
`


class opinions extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = op;
        this.querySelector("img").setAttribute("src",this.getAttribute("src"))
        this.querySelector("a").setAttribute("href", this.getAttribute("href"))
        this.querySelector("span").innerText =  this.getAttribute("user_name")
        this.querySelector("h5").innerText =  this.getAttribute("title")
       

    }

  
}

window.customElements.define("opinions-component", opinions)
