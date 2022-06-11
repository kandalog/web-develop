document.getElementById('modalOpen').addEventListener('click', function() {
  document.getElementById('modal').classList.add('active');
  document.getElementById('modalMask').classList.add('active');
});

document.getElementById('modalClose').addEventListener('click', function() {
  document.getElementById('modal').classList.remove('active');
  document.getElementById('modalMask').classList.remove('active');
});