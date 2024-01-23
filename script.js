const houMuch = document.querySelector(".hou-much");
const theWinner = document.querySelector(".the-winner");
document.addEventListener("DOMContentLoaded", function () {
  if (houMuch && theWinner) {
    houMuch.addEventListener("mouseover", function () {
      theWinner.style.color = "var(--gold-color)";
    });

    houMuch.addEventListener("mouseout", function () {
      theWinner.style.color = ""; // Revert to original color
    });
  }
});
theWinner.addEventListener("mouseover", function () {
  houMuch.style.color = "var(--gold-color)";
  houMuch.style.borderColor = "var(--gold-color)";
  theWinner.style.color = "var(--gold-color)";
  houMuch.style.boxShadow = "0px 0px 30px 10px rgba(252, 164, 0, 0.5)";
});

theWinner.addEventListener("mouseout", function () {
  houMuch.style.color = "";
  theWinner.style.color = "";
  houMuch.style.borderColor = "";
  houMuch.style.boxShadow = "";
});
const sidebarPop = document.querySelector(".sidebar-pop");
const sidebar = document.querySelector(".sidebar");
const sidbarClose = document.querySelector(".sidebar-close");
sidebarPop.addEventListener("click", function () {
  sidebar.classList.add("sidebar-visible");
});
sidbarClose.addEventListener("click", function () {
  sidebar.classList.remove("sidebar-visible");
});
