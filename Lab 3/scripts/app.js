import {getRandomWord, initGame, keyboardDiv}from './script.js';

for (var i = 97; i <= 122; i++) {
    const letter = String.fromCharCode(i); 
    var button = document.createElement("button");
    button.innerText = letter;
    keyboardDiv.appendChild(button);
    button.addEventListener("click", (e) => initGame(e.target));
    
}

getRandomWord();