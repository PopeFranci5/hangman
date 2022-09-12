const secretWordDiv = document.getElementById('secret-word');
const wrongLettersDiv = document.getElementById('wrong-letters');
const livesDiv = document.getElementById('lives');
let lives = 9;
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
        charSpan.innerText = '_ ';
        secretWordDiv.appendChild(charSpan);
    }
}


const alphabet = ['A', 'B', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'Š', 'Z', 'Ž', 'T', 'U', 'V', 'Õ', 'Ä', 'Ö', 'Ü'];
let inncorrectLetters = [];
for (let i = 0; i < secretWord.length; i++) {
    const charSpan = document.createElement('span');
    charSpan.setAttribute('id', 'char-' + i);
    charSpan.innerText = '_ ';
    secretWordDiv.appendChild(charSpan);
    //<span id="char-0"></span>
    console.log(secretWord[i]);


}
document.addEventListener('keydown', (e) => {

    const charGuess = e.key.toUpperCase();
    if (alphabet.includes(charGuess) && lives != 0 ) {
        let isCorrectLetter = false;

    for (let i = 0; i < secretWord.length; i++) {
        if (secretWord[i].toUpperCase() == charGuess) {
            const charSpan = document.getElementById('char-' + i)
            charSpan.innerText = charGuess;
            isCorrectLetter = true;
        }

    }
    if (!isCorrectLetter && !inncorrectLetters.includes(charGuess)) {
        inncorrectLetters.push(charGuess);
        wrongLettersDiv.innerHTML += charGuess;
        lives--;
        if (lives == 0) {
            livesDiv.innerHTML = "GAME OVER!" + "<br>" + secretWord.toUpperCase();
        } else {
            livesDiv.innerText = lives;
        }

    }
    if (lives == 8) {
        document.getElementById("hangman-1").style.display = "block";
    }
    else if (lives == 7) {
        document.getElementById("hangman-2").style.display = "block";
        document.getElementById("hangman-1").style.display = "block";
    }
    else if (lives == 6) {
        document.getElementById("hangman-3").style.display = "block";
        document.getElementById("hangman-1").style.display = "block";
        document.getElementById("hangman-2").style.display = "block";
    }
    else if (lives == 5) {
        document.getElementById("hangman-3").style.display = "block";
        document.getElementById("hangman-1").style.display = "block";
        document.getElementById("hangman-2").style.display = "block";
        document.getElementById("hangman-4").style.display = "block";
    }
    else if (lives == 4) {
        document.getElementById("hangman-3").style.display = "block";
        document.getElementById("hangman-1").style.display = "block";
        document.getElementById("hangman-2").style.display = "block";
        document.getElementById("hangman-4").style.display = "block";
        document.getElementById("hangman-5").style.display = "block";
    }
    else if (lives == 3) {
        document.getElementById("hangman-3").style.display = "block";
        document.getElementById("hangman-1").style.display = "block";
        document.getElementById("hangman-2").style.display = "block";
        document.getElementById("hangman-4").style.display = "block";
        document.getElementById("hangman-5").style.display = "block";
        document.getElementById("hangman-6").style.display = "block";
    }
    else if (lives == 2) {
        document.getElementById("hangman-3").style.display = "block";
        document.getElementById("hangman-1").style.display = "block";
        document.getElementById("hangman-2").style.display = "block";
        document.getElementById("hangman-4").style.display = "block";
        document.getElementById("hangman-5").style.display = "block";
        document.getElementById("hangman-6").style.display = "block";
        document.getElementById("hangman-7").style.display = "block";
    }
    else if (lives == 1) {
        document.getElementById("hangman-3").style.display = "block";
        document.getElementById("hangman-1").style.display = "block";
        document.getElementById("hangman-2").style.display = "block";
        document.getElementById("hangman-4").style.display = "block";
        document.getElementById("hangman-5").style.display = "block";
        document.getElementById("hangman-6").style.display = "block";
        document.getElementById("hangman-7").style.display = "block";
        document.getElementById("hangman-8").style.display = "block";
    }
    else if (lives == 0) {
        document.getElementById("hangman-3").style.display = "block";
        document.getElementById("hangman-1").style.display = "block";
        document.getElementById("hangman-2").style.display = "block";
        document.getElementById("hangman-4").style.display = "block";
        document.getElementById("hangman-5").style.display = "block";
        document.getElementById("hangman-6").style.display = "block";
        document.getElementById("hangman-7").style.display = "block";
        document.getElementById("hangman-8").style.display = "block";
        document.getElementById("hangman-8").style.display = "block";
        document.getElementById("hangman-9").style.display = "block";
    }
}
    console.log(charGuess, inncorrectLetters);
});
