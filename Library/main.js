
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

function saveButton () {
    var button = document.getElementById ("button");
    button.addEventListener ("click",saveInput);
}

function saveInput () {
    var userInput= document.getElementById ("9AM");
    localStorage.setItem("9AM",userInput.value);

}

function renderButton () {
    var button = document.getElementById ("button");
    button.addEventListener ("click", renderInput);
}
 
function renderInput () {
    var x = localStorage.getItem("9AM");
    document.getElementById ("renderInput").innerHTML = x;
}