document.addEventListener("DOMContentLoaded", () => {
  scrollFunction();
});

document.querySelector(".navbar").addEventListener("click", handleNavbarActiveClasses);

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.backgroundColor =
      "rgba(0, 0, 0, 0.9)";
    document.getElementById("logo").style.width = "9.8125rem";
  } else {
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("logo").style.width = "140px";
  }
}

function handleNavbarActiveClasses(e) {
  const navItems = navbar.querySelectorAll(".nav-item");
  const element = e.target.parentElement;
  if (element.classList.contains("nav-item")) {
    navItems.forEach(item => {
      item.classList.remove("active");
    })
    element.classList.add("active");
  }
  if (element.classList.contains("navbar-brand")) {
    navItems.forEach(item => {
      item.classList.remove("active");
    })
  }
}

//Change footer date automatically

let year = new Date().getFullYear();

document.getElementsByClassName("year")[0].innerHTML = year;

//Slideshow

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
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
    dots[i].className = dots[i].className.replace(" dot-active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " dot-active";
}
