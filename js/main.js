document.addEventListener("DOMContentLoaded", () => {
  scrollFunction();
});

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
