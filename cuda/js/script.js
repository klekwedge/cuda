// Burger
const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");

if (iconMenu) {
  iconMenu.addEventListener("click", (event) => {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}

const menuLinks = document.querySelectorAll(".menu__link");
menuLinks.forEach((item) => {
  item.addEventListener("click", () => {
    if (iconMenu.classList.contains("_active")) {
      document.body.classList.remove("_lock");
      iconMenu.classList.remove("_active");
      menuBody.classList.remove("_active");
    }
  });
});

// Circles

const Circle = function (sel) {
  let valEl = parseFloat(sel.innerHTML);
  valEl = (valEl * 408) / 100;
  sel.innerHTML =
    '<svg width="160" height="160"><circle transform="rotate(-90)" r="65" cx="-80" cy="80" /><circle transform="rotate(-90)" style="stroke-dasharray:' +
    valEl +
    'px 408px;" r="65" cx="-80" cy="80" /></svg>';
};

const circles = document.querySelectorAll(".circle");
circles.forEach((circle) => {
  Circle(circle);
});
