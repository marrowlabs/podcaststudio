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
    document.getElementById("logo").style.width = "50px";
  } else {
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("logo").style.width = "90px";
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