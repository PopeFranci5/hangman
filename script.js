const secretWordDiv = document.getElementById('secret-word');
const incorrectLettersDiv = document.getElementById('wrong-letters');
const livesDiv = document.getElementById('lives');

let lives = 9;
const alphabet = ['A', 'B', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'Š', 'Z', 'Ž', 'T', 'U', 'V', 'Õ', 'Ä', 'Ö', 'Ü'];
let incorrectLetters = [];
let secretWord = '';

fetch('words_hangman.txt')
.then(response => response.text())
.then(data => {
    words = data.split('\n');

    secretWord = words[Math.floor(Math.random() * words.length)];

    initGameBoard();

});

function initGameBoard () {
    for ( let i = 0; i < secretWord.length; i++ ) {
        const charSpan = document.createElement('span');
        charSpan.setAttribute('id', 'char-' + i);
        charSpan.innerText = '_';
        secretWordDiv.appendChild(charSpan);
    }  
}

document.addEventListener('keydown', (e) => {

    const charGuess = e.key.toUpperCase();

    if ( alphabet.includes(charGuess) && lives != 0 ) {

        let isCorrectLetter = false;

        for ( let i = 0; i < secretWord.length; i++ ) {
            if ( secretWord[i].toUpperCase() == charGuess ) {
                const charSpan = document.getElementById('char-' + i);
                charSpan.innerText = charGuess;
                isCorrectLetter = true;
            }
        }
        
        if ( !isCorrectLetter && !incorrectLetters.includes(charGuess) ) {
            incorrectLetters.push(charGuess);
            incorrectLettersDiv.innerHTML += charGuess;
            lives--;
            if ( lives == 0 ) {
                livesDiv.innerHTML = "Game Over!<br>" + secretWord;                
            } else {
                livesDiv.innerText = lives;
            }
        }

    }

    console.log(charGuess, incorrectLetters);
});