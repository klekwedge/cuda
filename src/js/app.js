import burger from './modules/burger.js';
import circularProgressBar from './modules/circles.js';
import animationScroll from './modules/anim-scroll.js';
import isWebp from './modules/webp.js';

window.addEventListener('DOMContentLoaded', () => {
  burger();
  isWebp();
  animationScroll();
  circularProgressBar();
});
