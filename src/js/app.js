const btnBar = document.querySelector(".btn-bar");
const btnClose = document.querySelector(".btn-close");
const nav = document.querySelector(".list-nav");
const body = document.querySelector('[data-body]');
btnBar.addEventListener("click", () => {
  nav.classList.toggle("mostrar");
  body.classList.toggle('scroll-none')
});
btnClose.addEventListener("click", () => {
  nav.classList.toggle("mostrar");
  body.classList.toggle('scroll-none')
});
