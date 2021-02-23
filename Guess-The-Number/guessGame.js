/* 
GUESS THE NUMBER GAME 
-------------------------------
1. DONE : Get user value from input and save it to variable numberGuesses
2. DONE : Generate a random number 1 to 100 and save it to variable correctNumber
3. DONE : Console whether the guess is too high, too low, or is correct inside playGame
4. DONE : Create a function called displayResult to move the logic for if the guess
5. DONE : Complete the showYouWon, showNumberAbove, showNumberBelow 
6. DONE : Use the showYouWon... Functions within displayResult to display the correct answer
7. DONE : Save the guess history in a variable called guesses
8. DONE : Display the guess history using displayHistory() function
9. TODO : Use the initGame() function to restart the game
** Always for use the console first for checking the code is working or not!.
*/

// Variable to store the list of guesses
let guesses = [];
// Variable for store the correct random number
let correctNumber = getRandomNumber();

window.onload = function(){
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);
    // showYouWon();
    // domEvents();
}
// ** Practice using DOM
// function domEvents(){
//     for(let i =0; i < document.body.children.length; i++){
//         alert(document.body.children[i].innerText);
//     }
// }

/*
Functionality for playing the whole game
*/
function playGame(){
    let numberGuess = document.getElementById("number-guess").value;
    displayResult(numberGuess);
    saveGuessHistory(numberGuess);
    displayHistory();
}

// Show the result for if the guess it too high, too low, or correct
// Hint using if, else if, else statement
function displayResult(numberGuess){
    if (numberGuess < correctNumber){
        showNumberBelow(); 
    }
    else if (numberGuess > correctNumber){
        showNumberAbove();
    }
    else if (numberGuess == correctNumber){
        showYouWon();
    } 
}


// Initialize a new game by resetting all values and content on the game
// Hint : reset the correctNumber, guesses, and HTML content
function initGame(){
    // Reset the correctNumber
    correctNumber = getRandomNumber();
    // Reset the result display
    document.getElementById("result").innerHTML ="";
    // Reset the guesses array
    guesses = [];
    // Reset the guess history display
    displayHistory();
}

// Reset the HTML content for guess history
function resetResultContent(){
    document.getElementById("result").innerHTML="";
}

// Return a random number between 1 and 100
// Hint : Use Math.random
function getRandomNumber(){
    let randomNumber = Math.random();
    let wholeNumber = Math.floor(randomNumber * 100) + 1; 
    //Dikali 100 + 1 biar hasil paling akhir nya 100. yang math floor biar bilangan desimal nya ilang.
    return wholeNumber;
}

// Save guess history
// Hint : Append to array & use the guesess variable
function saveGuessHistory(guess){
    guesses.push(guess);
}
/* 
* Display guess history to user
* HTML TO USE : 
* <ul class="list-group">
*  <li class='list-group-item'>You guessed {number}</li>
*</ul>
* Hint : Use while loop and string concantentation to create a list
*/
function displayHistory(){
    let index = guesses.length - 1; // Biar yang terbaru di atas
    let list = "<ul class='list-group'>";
    while(index >= 0){
        list += "<li class='list-group-item'>" +
        "You guessed " + guesses[index] + "</li>";
        index-=1; // atau index++
    }
    list += '<ul>';
    // console.log(guesess);
    document.getElementById("history").innerHTML = list;
}

// Retrieve the dialog based on if the guess is wrong or correct
function getDialog(dialogType, text){
    let dialog;
    switch(dialogType){
        case "warning":
            dialog="<div class='alert alert-warning' role='alert'>"
            break;
        case "won":
            dialog="<div class='alert alert-success' role='alert'>"
            break;
    }
    dialog += text;
    dialog += "</div>"
    return dialog;
}

function showYouWon(){
    const text = "Awesome job. you got it!!"
    /* 
    * Retrieve the dialog using the getDialog() function
    * and save it to variable called dialog
    * Hint: Use the 'won' and text parameters
    */
   let dialog = getDialog('won', text);
//    console.log(dialog);
   document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove(){
    const text = "Your guess is too high!"
    /*
    * Retrieve the dialog using hte getDialog() function
    and save it ot variable called dialog
    Hint: use the 'warning' and text parameters
    */
   let dialog = getDialog('warning', text);
   document.getElementById("result").innerHTML = dialog; 
}

function showNumberBelow(){
    const text = "Your guess is too low!"
    /*
    * Retrieve the dialog using hte getDialog() function
    and save it ot variable called dialog
    Hint: use the 'warning' and text parameters
    */
   let dialog = getDialog('warning', text);
   document.getElementById("result").innerHTML = dialog;
}