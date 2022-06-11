const Question = document.querySelectorAll('.qa-box__q');
for(let i = 0; i < Question.length; i++) {
  Question[i].addEventListener('click', function() {
    this.nextElementSibling.classList.toggle('active');
    this.firstElementChild.classList.toggle('active');
  })
}