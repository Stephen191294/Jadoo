
function myFunction() {
  const topnav = document.querySelector('.topnav');
  topnav.classList.toggle('open');
}


new WOW().init();



document.querySelector('a[href^="#"]').addEventListener('click', function(e) {
  e.preventDefault();
  const target = document.querySelector(this.getAttribute('href'));
  target.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});
