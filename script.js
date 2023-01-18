const navbar = document.querySelector("#navbar");
const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");
const backDrop = document.querySelector(".backdrop");

menuOpen.addEventListener("click", () => {
  navbar.classList.add("active");
  menuOpen.classList.add("active");
  menuClose.classList.add("active");
  backDrop.classList.add("active");
});
menuClose.addEventListener("click", () => {
  navbar.classList.remove("active");
  menuOpen.classList.remove("active");
  menuClose.classList.remove("active");
  backDrop.classList.remove("active");
});

backDrop.addEventListener("click", () => {
  navbar.classList.remove("active");
  menuOpen.classList.remove("active");
  menuClose.classList.remove("active");
  backDrop.classList.remove("active");
});
