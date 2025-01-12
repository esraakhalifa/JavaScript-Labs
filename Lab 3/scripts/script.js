var wordDisplay = document.querySelector(".word-display");
var keyboardDiv = document.querySelector(".keyboard");

var getRandomWord = () => {
    var {word, hint} = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(word);
    document.querySelector(".hint-text b").innerText = hint;
    wordDisplay.innerHTML = word.split("").map(() => `<li class="letter"></li>`).join("");
}
var initGame = (button, clickedLetter) => {
    console.log(button, clickedLetter);

}
for(var i = 97; i <= 122; i++)
{
    var button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", e => initGame(e.target, String.fromCharCode(i)));
}

getRandomWord();