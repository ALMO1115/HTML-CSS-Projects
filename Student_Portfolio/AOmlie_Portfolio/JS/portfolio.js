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