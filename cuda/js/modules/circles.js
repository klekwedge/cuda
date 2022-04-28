"use strict";
function circles() {
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
}

export default circles;
