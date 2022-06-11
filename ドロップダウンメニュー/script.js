const Question = document.querySelectorAll('.dropDown__head');
for(let i = 0; i < Question.length; i++) {
  Question[i].addEventListener('click', function(e) {
    e.preventDefault();
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('active');
  })
}