const submitBtn = document.querySelector('#submitBtn');
const answer1 = document.querySelector('#answer1');
const result = document.querySelector('#result');

submitBtn.addEventListener('click', checkAnswer);

function checkAnswer(event) {
  event.preventDefault();
  if (answer1.value.toLowerCase() === 'hypertext markup language') {
    result.innerHTML = '<div id = "answer">Correct!</div>';
  } else {
    result.innerHTML = '<div id = "answer">Incorrect!</div>';
  }
}
