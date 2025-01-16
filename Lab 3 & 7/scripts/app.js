import {getRandomWord, initGame}from './script.js';
import { wordList } from './word-list.js';


export var keyboardDiv = document.querySelector(".keyboard");


export function initKeyboard()
{
    for (var i = 97; i <= 122; i++) {
        const letter = String.fromCharCode(i); 
        var button = document.createElement("button");
        button.innerText = letter;
        keyboardDiv.appendChild(button);
        button.addEventListener("click", (e) => initGame(e.target));
        
    }
}

