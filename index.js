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
