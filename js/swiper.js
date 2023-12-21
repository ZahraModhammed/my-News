const mql = window.matchMedia("(max-width: 991px)");
const changeSlideView = (slide) =>{
  var swiper = new Swiper(".swiper", {
    slidesPerView: slide,
    spaceBetween: 30,
    autoplay:true,
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

const handleOrChange = (e) =>{
  if(mql.matches){
    changeSlideView(1);
  }else{
    changeSlideView(3);
  }
}

handleOrChange();

mql.onchange = (e) =>{
  handleOrChange(e);
}