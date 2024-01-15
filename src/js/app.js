const btnBar = document.querySelector(".btn-bar");
const btnClose = document.querySelector(".btn-close");
const nav = document.querySelector(".list-nav");
const body = document.querySelector("[data-body]");
btnBar.addEventListener("click", () => {
  nav.classList.toggle("mostrar");
  body.classList.toggle("scroll-none");
});
btnClose.addEventListener("click", () => {
  nav.classList.toggle("mostrar");
  body.classList.toggle("scroll-none");
});

// const containerNav = document.querySelector(".container-nav");
// function borrarAnimacion() {
//   const nuevoAncho = window.innerWidth;
//   if (nuevoAncho < 768) {
//     containerNav.removeAttribute("data-aos", "fade-zoom-in");
//     containerNav.removeAttribute("data-aos-delay", "300");
//   } else {
//     containerNav.setAttribute("data-aos", "fade-zoom-in");
//     containerNav.setAttribute("data-aos-delay", "300");
//   }
// }
// let num = window.addEventListener("resize", borrarAnimacion);
