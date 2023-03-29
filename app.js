'use strict';

const navColor = document.querySelector('.navbar-scroll');
const linksColor = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 0) {
    navColor.classList.add('scrolled');
    linksColor.forEach(link => {
      link.style.color = '#f6f6f6';
    });
  } else {
    navColor.classList.remove('scrolled');
    linksColor.forEach(link => {
      link.style.color = '';
    });
  }
});

const links = document.querySelectorAll('.nav-link');

links.forEach(link => {
  link.addEventListener('click', function () {
    links.forEach(link => {
      link.classList.remove('active');
    });

    link.classList.add('active');
  });
});
