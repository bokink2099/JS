/* 
GUESS THE NUMBER GAME 
-------------------------------
1. TODO : Get user value from input and save it to variable numberGuesses
2. TODO : Generate a random number 1 to 100 and save it to variable correctNumber
3. TODO : Console whether the guess is too high, too low, or is correct inside playGame
4. TODO : Create a function called displayResult to move the logic for if the guess
5. TODO : Complete the showYouWon, showNumberAbove, showNumberBelow 
6. TODO : Use the showYouWon... Functions within displayResult to display the correct answer
7. TODO : Save the guess history in a variable called guess
8. TODO : Display the guess history using displayHistory() function
9. TODO : Use the initGame() function to restart the game
*/

// Variable to store the list of guesses

// Variable for store the correct random number


window.onload = function(){
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame)
}

/*
Functionality for playing the whole game
*/
function playGame(){
    // 
}