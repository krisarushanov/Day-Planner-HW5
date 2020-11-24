
/* Render Date*/
$(document).ready(function() {

var today = 
    moment().format('MMMM Do YYYY');
    console.log(today)
    $(".todaysDate").append(today);

})

var buttons = document.querySelectorAll ("button");

for (let i = 0; i< buttons.length; i ++) {
    buttons[i].addEventListener ("click", function(store) {
        console.log("click");

    });
}


/* Set Variables from Search Form*/

var inputForm = document.getElementById ("9AMform");
var userInput = document.getElementById ("9AM");
var formFeedback = document.getElementById ("feedback");
var saveButton = document.getElementById ("save9AM");

/* Add event handler to save input when submitted*/ 

inputForm.addEventListener ("submit", event => {
    event.preventDefault();
    var input = userInput.value;
    localStorage.setItem("9AM", input);
    formFeedback.textContent = 'Saved!';
    userInput.setAttribute ('disabled',true);
    saveButton.setAttribute ('disabled',true);
});

var savedInput = document.getElementById("9AM");
var input = localStorage.getItem("9AM");

savedInput.textContent = input;
