window.addEventListener('scroll', () => {
  let scroll = document.documentElement.scrollTop;

  if (scroll > 300) {
    document.getElementById('to-top').classList.add('active');
  } else {
    document.getElementById('to-top').classList.remove('active');
  }
});