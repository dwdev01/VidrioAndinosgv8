export default function navMenu() {
  const buttonHamburger = document.querySelector(".hamburger");
  const buttonsHamburger = document.querySelectorAll(".hamburger");
  const header = document.querySelector("header");
  const menuList = document.querySelector(".vd-menu__container");
  buttonsHamburger.forEach(item => {
    item.addEventListener("click", () => {
      buttonHamburger.classList.toggle("is-active");
      header.classList.toggle("overflow-y-auto");
      header.classList.toggle("h-full");
      menuList.classList.toggle("hidden");
    });
  });
}
