const btnBar = document.querySelector(".btn-bar");
const btnClose = document.querySelector(".btn-close");
const nav = document.querySelector(".list-nav");
btnBar.addEventListener("click", () => {
  nav.classList.toggle("mostrar");
});
btnClose.addEventListener("click", () => {
  nav.classList.toggle("mostrar");
});
