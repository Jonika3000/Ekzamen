let ypos = window.scrollY;

window.addEventListener('scroll', function (e) {
  if (ypos < window.scrollY)
    this.document.getElementsByClassName('banner')[0].classList.add('hide_menu');
  else
    this.document.getElementsByClassName('banner')[0].classList.remove('hide_menu');
  ypos = window.scrollY;
});