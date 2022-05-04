const sideBar = document.querySelector(".side__bar");
const sideBarOpenBtn = document.querySelector(".side__bar__button__open");
const sideBarCloseBtn = document.querySelector(".side__bar__button__close");

sideBarOpenBtn.addEventListener("click", function () {
  sideBar.classList.add("side__bar--active");
  sideBarOpenBtn.classList.add("hidden");
});

sideBarCloseBtn.addEventListener("click", function () {
  sideBar.classList.remove("side__bar--active");
  sideBarOpenBtn.classList.remove("hidden");
});
