class SliderComponent extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `<p>${this.getAttribute("text")}</p>`
        // this.querySelector("p").innerText = this.getAttribute("text")
    }
}

window.customElements.define("slider-component", SliderComponent)