import {guessTimeLimit, maxGuesses} from './constants.js';

import { wordList } from './word-list.js';

import { initKeyboard , keyboardDiv} from './app.js';
var wordDisplay = document.querySelector(".word-display");
var guessesText = document.querySelector(".guesses-text b");
var hangmanImage = document.querySelector(".hangman-box img");
var timerText = document.querySelector(".timer-text");
const gameBox = document.querySelector('.game-box');
const categoriesButton = document.querySelector(".dropdown");
const categoriesDropdownMenu = document.querySelector('.dropdown-content');
const gameModal = document.querySelector('.game-modal');
const categoryLinks = [];
var currentWord = "";
var wrongGuessesCount = 0;
let timerInterval;
var remainingTime = guessTimeLimit;
let correctLetters;
let chosenCategory;


const resetGame = ()=>
{
    wrongGuessesCount = 0;
    remainingTime = guessTimeLimit;
    guessesText.innerText = `${wrongGuessesCount} / ${maxGuesses}`;
    hangmanImage.src = `Images/hangman-0.svg`;
    correctLetters =[];
    timerText.innerText = remainingTime;
    wordDisplay.innerHTML = currentWord.split("").map(() => "<li class='letter'></li>").join("");
    keyboardDiv.querySelectorAll("button").forEach(button => button.disabled = false);
    
}
export function getRandomWord(chosenCategory){

    var { word, hint,additionalHint } = wordList[chosenCategory][Math.floor(Math.random() * wordList[chosenCategory].length)];
    currentWord = word.toLowerCase(); 
    console.log(word); 
    document.querySelector(".hint-text b").innerText = hint;
    wordDisplay.innerHTML = word.split("").map(() => "<li class='letter'></li>").join("");
    resetGame();
}

function showHint(additionalHint)
{
    document.querySelector(".additional-hint b").innerText = additionalHint;

}


export var initGame = (button) => {
    const clickedLetter = button.innerText.toLowerCase();

    if (currentWord.includes(clickedLetter)) {
        [...currentWord].forEach((letter, index) => {
            if (letter === clickedLetter) {
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
                correctLetters.push(letter);
                console.log(correctLetters.length);
            }
        });
    } else {
        wrongGuessesCount++;
        hangmanImage.src = `Images/hangman-${wrongGuessesCount}.svg`;
    }
    button.disabled = true;
    guessesText.innerText = wrongGuessesCount + ' / ' + maxGuesses;
    startTimer();
};
var startTimer = () => {
    clearInterval(timerInterval);
    remainingTime = guessTimeLimit;
    timerText.innerText = remainingTime;

    timerInterval = setInterval(() => {
        remainingTime--;
        timerText.innerText = remainingTime;
        if (remainingTime <= 0 || wrongGuessesCount === maxGuesses || correctLetters.length === currentWord.length) {
            clearInterval(timerInterval);
            handleTimeOut();
        }
    }, 1000);
};
var handleTimeOut = () => {
    clearInterval(timerInterval); 
    if (correctLetters.length === currentWord.length) {
        gameResult(true);
    } else if (wrongGuessesCount >= maxGuesses) {
        gameResult(false);
    } else {
        wrongGuessesCount++;
        guessesText.innerText = `${wrongGuessesCount} / ${maxGuesses}`;
        hangmanImage.src = `Images/hangman-${wrongGuessesCount}.svg`;
        startTimer(); 
    }
};


var gameResult = (isWinning) => {
    clearInterval(timerInterval);
    if (isWinning) {
        alert("Congratulations! You guessed the word!");
        
    } else {
        alert(`Game Over! The word was "${currentWord}".`);

    }
    categoriesButton.style.display = 'block';
    categoriesDropdownMenu.style.display = 'block';
    
    gameBox.style.display = 'none';
    hangmanImage.style.display = 'none';
    keyboardDiv.innerHTML = '';
    selectCategory();
    getRandomWord(chosenCategory); 
};



//getRandomWord(chosenCategory);

function selectCategory(){
    
    Object.keys(wordList).forEach(category => {
        const categoryLink = document.createElement('a');
        categoryLink.href = '#';
        categoryLink.textContent = category;
        categoriesDropdownMenu.appendChild(categoryLink);
        categoryLinks.push(categoryLink);
        
        categoryLink.addEventListener('click', () => {
            chosenCategory = category;
            console.log(`Chosen category: ${chosenCategory}`);
            categoriesButton.style.display = 'none';
            categoriesDropdownMenu.style.display = 'none';
            
            // Display the game box
            gameBox.style.display = 'block';
            hangmanImage.style.display = 'block';
    
            // Initialize the game
            initKeyboard();
            getRandomWord(chosenCategory);
            
        });
    });
}

selectCategory();
