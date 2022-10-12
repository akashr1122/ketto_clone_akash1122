function navDropFunc(){
    document.getElementById("myNavDrop").classList.toggle("show");
}


window.onclick = function(event) {
    if (!event.target.matches('.dropDown')) {
      var dropdowns = document.getElementsByClassName("navDrop-content");
      for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  document.getElementById("showLogin").addEventListener("click",function(){
    // console.log("loged in");
    document.querySelector(".popUp").classList.add("popUpActive");
  });

  document.querySelector(".closeButton").addEventListener("click",function(){
    document.querySelector(".popUp").classList.remove("popUpActive");
  });






// botton slider of hiw



let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}



