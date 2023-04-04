'use strict';
const navbar = document.querySelector('.navbar-scroll');
const links = document.querySelectorAll('.nav-link');
const scrollupBtn = document.querySelector('.btn-back-to-top');
const year = document.querySelector('.actual-year');
const homeLink = document.querySelector('a[href="#home"]');

window.onload = function () {
  window.scrollTo(0, 0);
};

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

links.forEach(link => {
  link.addEventListener('click', function () {
    links.forEach(link => {
      link.classList.remove('active');
    });
    link.classList.add('active');
  });
});

// Scroll up

window.onscroll = function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    scrollupBtn.style.display = 'block';
  } else {
    scrollupBtn.style.display = 'none';
  }
};

scrollupBtn.addEventListener('click', backToTop);

function removeActiveClass() {
  const activeLink = document.querySelector('.active');
  if (activeLink) {
    activeLink.classList.remove('active');
  }
}

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  removeActiveClass();
  homeLink.classList.add('active');
}

// Actual year in copyright
year.textContent = new Date().getFullYear();
