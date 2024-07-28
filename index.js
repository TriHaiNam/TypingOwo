const words = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon", "mango", "nectarine", "orange", "papaya", "quince", "raspberry", "strawberry", "tangerine", "watermelon"];
let score = 0;

const wordDisplay = document.getElementById('wordDisplay');
const wordInput = document.getElementById('wordInput');
const scoreDisplay = document.getElementById('score');
const keyboard = document.getElementById('keyboard');

function getRandomWord() {
    const index = Math.floor(Math.random() * words.length);
    return words[index];
}

function updateWord() {
    const newWord = getRandomWord();
    wordDisplay.innerText = newWord;
}

wordInput.addEventListener('keydown', (event) => {
    if (event.key === ' ' || event.key === 'Enter') {
        const typedWord = wordInput.value.trim();
        const displayedWord = wordDisplay.innerText;

        if (typedWord === displayedWord) {
            score++;
        } else {
            score--;
        }

        scoreDisplay.innerText = `Score: ${score}`;
        wordInput.value = '';
        updateWord();
    }
});

keyboard.addEventListener('click', (event) => {
    if (event.target.classList.contains('key')) {
        const key = event.target.innerText;
        wordInput.value += key;
    }
});

updateWord();

document.addEventListener('keydown', function(event) {
  const key = event.key.toUpperCase();
  const keyElement = document.querySelector(`.key[data-key="${key}"]`);
  if (keyElement) {
      keyElement.classList.add('active');
  }
});

document.addEventListener('keyup', function(event) {
  const key = event.key.toUpperCase();
  const keyElement = document.querySelector(`.key[data-key="${key}"]`);
  if (keyElement) {
      keyElement.classList.remove('active');
  }
});