
// for hangman game

const entryForm = document.querySelector("#entryForm");
const errorOut  = document.querySelector(".errorOutput");

let wordToGuess;
let arrayOfWord = [];

/*
    Get value of word entered
    Store as variable
    run method to make it an array value
*/
function validateEntry(e)
{
    const entry = document.querySelector("#enter");

    

    console.log(`You entered ${entry.value}`);
    e.preventDefault();
    
    if(entry.value.trim().length != 0)
    {
        entryForm.style.display = "none";
        wordToGuess = entry.value;
    }
    else
    {
        errorOut.innerHTML += `<p>ENTRY CANNOT BE BLANK. PLEASE ENTER A WORD</p>`;
    }
    
}

entryForm.addEventListener("submit", validateEntry);

