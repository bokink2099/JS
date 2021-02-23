/**
 * DONE: Update the text in the "Formated Text" section as a user type in the textarea
 * DONE TOGETHER: add a .bold, .italic classes to "Formated Text" when the appropriate button is clicked
 * DONE: Add and .underline class to "Formated Text" when Underline button is clicked
 * TODO: Toggle the align style for "Formated Text" when the appropriate button is clicked
 */

 /**
  * Update the output text as a user types in the textarea
  * Hint: Use the onkeydown function inside HTML
  */
 function updateText(){
     let text = document.getElementById('text-input').value;
     document.getElementById('text-output').innerText = text;
 }
 /**
  * Toggle the bold class for the output text
  * Hint: Use the onclic function insite HTML
  * Hint: Look into using this keyword
  * Hint: Use the classList property
  * Hint: Toggle .active class for the button
  */
 function makeBold(elem){
     elem.classList.toggle('acctive');
     document.getElementById('text-output').classList.toggle('bold');
 }

 /**
  * Toddle the italic class for the output text
  */
 function makeItalic(elem){
    elem.classList.toggle('acctive');
    document.getElementById('text-output').classList.toggle('italic');
 }
 /**
  * Toggle the underline class for the output text
  * Hint: Toggle the .active class for the button
  * Hint: Use the classList property
  * Hint: Use contains, remove, and add functions
  */
 function makeUnderline(elem){
    elem.classList.toggle('acctive');
    let formattedText = document.getElementById('text-output');
    if(formattedText.classList.contains('underline')){
        formattedText.classList.remove('underline');
    }else{
        formattedText.classList.add('underline');
    }
    // Sama aja fungsi nya sama yang di atas (bold, italic) yang ini lebih advance (ribet :v)
 }

 /**
  * Toggle the style textAlign attribute
  * Toggle the active state for the align buttons
  * Hint: use the style property of the element to the 
  * Hint: Make sure to untoggle the acctive state for all oteher align button
  */
 function alignText(elem, alignType){
     document.getElementById('text-output').style.textAlign = alignType;
     let buttonsList = document.getElementsByClassName('align');
     for(let i = 0; i < buttonsList.length; i++){
         buttonsList[i].classList.remove('active');
     }
     elem.classList.add('active');
 }