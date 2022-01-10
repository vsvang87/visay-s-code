const toggle = document.getElementById("toggle");
const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");

//toggle side navigation
toggle.addEventListener("click", () => {
  document.body.classList.toggle("show-nav");
});

//open modal
open.addEventListener("click", () => {
  modal.classList.add("show-modal");
});

//close modal
close.addEventListener("click", () => {
  modal.classList.remove("show-modal");
});

//close modal by clicking anywhere outside of modal box
window.addEventListener("click", (e) => {
  e.target == modal ? modal.classList.remove("show-modal") : false;
});
