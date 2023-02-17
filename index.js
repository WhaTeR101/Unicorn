var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('nav-bar').style.top = '0';
  } else {
    document.getElementById('nav-bar').style.top = '-15%';
  }
  prevScrollpos = currentScrollPos;
};
const toggleButton = document.getElementsByClassName('navbar-toggle-button')[0];
const navbarLinks = document.getElementsByClassName('nav-list')[0];

toggleButton.addEventListener('click', () => {
  setTimeout(function () {
    navbarLinks.classList.toggle('active');
  }, 200);
});
navbarLinks.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});
