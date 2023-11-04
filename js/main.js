var scrollpes = window.scrollY;
var navbar = document.getElementById("navbar");

function add_class_on_scroll(){
  navbar.classList.add("navbar-small")
}
function remove_class_on_scroll(){
  navbar.classList.remove("navbar-small")
}

window.addEventListener('scroll', function(){
  scrollpes = window.scrollY

  if(scrollpes > 10){
    add_class_on_scroll();
  }
  else{
    remove_class_on_scroll();
  }
})



  document.getElementById("Year").innerHTML = new Date().getFullYear(); 
