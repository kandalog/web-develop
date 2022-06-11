// マスクをクリックで表示非表示
document.getElementById('hamburger__background').addEventListener('click', function() {
  this.classList.remove('active')
  document.getElementById('hamburger__icon').classList.remove('active')
  document.getElementById('hamburger__content').classList.remove('active')
})