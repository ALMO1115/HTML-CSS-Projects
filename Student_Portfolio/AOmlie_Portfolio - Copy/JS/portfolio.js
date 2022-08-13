//this effects the contact us form at bottom of page
//sets certain fields to require an entry in order to submit
//also sets a message if submit is clicked w/out certain
//fields having an input entered in them
function validateForm() {
    let a = document.forms["myForm"]["fname"].value;
    if (a == "") {
        alert("First must be filled out.");
        return false;
    }
    let b = document.forms["myForm"]["email"].value;
    if (b == "") {
        alert("Email must be filled out.");
        return false;
    }
    let c = document.forms["myForm"]["message"].value;
    if (c == "") {
        alert("Please write a message to Audra.");
        return false;
    }
}

//code to make form appear when click on marked button
function OpenForm() {
    document.getElementById("popForm").style.display = "block";
}
//code to make form disappear when click on cancel button
function closeForm() {
    document.getElementById("popForm").style.display = "none";
}


// a $( document ).ready() block: to wait until jQuery
//determines the DOM is ready/loaded, 
//so anything inside this block of code will run as soon as DOM is ready
//$ ( document ).ready(setInterval() {
//    console.log( "ready!" ),
//});
//code for slideshow found at top of portfolio
$('#slideshow > div:gt(0)').hide();

setInterval(function() {
    $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 3000);


//CONTACT FORM
    
    //code to make form appear when click on marked button
    function openForm() {
        document.getElementById("myForm").style.display = "block";
    }
    
    //code to make form disappear when click on cancel button
    function closeForm() {
        document.getElementById("myForm").style.display = "none";
    }

    //this effects the contact us form at bottom of page
    //sets certain fields to require an entry in order to submit
    //also sets a message if submit is clicked w/out certain
    //fields having an input entered in them
    function validateForm() {
        let a = document.forms["myForm"]["fname"].value;
        if (a == "") {
            alert("First must be filled out.");
            return false;
        }
        let b = document.forms["myForm"]["email"].value;
        if (b == "") {
            alert("Email must be filled out.");
            return false;
        }
        let c = document.forms["myForm"]["message"].value;
        if (c == "") {
            alert("Please write a message to Audra.");
            return false;
        }
    }

    // This code will create close the contact form when the user clicks off of it
    // The first step is to add an event listener for any clicks on the website
    document.addEventListener("click", function(event){
        // Here we state that if the click happens on the cancel button OR anywhere that is not the contact form AND the click does not happen on any element with the contact class then call the closeForm() function
        if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")){
            closeForm()
        }
    }, false )