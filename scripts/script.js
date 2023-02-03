'use strict';

let upDown = document.querySelectorAll('.faq-first-flex');

upDown.forEach((upDown) => {
  upDown.addEventListener('click', () => {
    upDown.lastElementChild.classList.toggle('icon__chevron-up');
    upDown.lastElementChild.classList.toggle('icon__chevron-down');

    upDown.parentElement.classList.toggle('faq-sec');
    upDown.parentElement.classList.toggle('faq-first');
  });
});