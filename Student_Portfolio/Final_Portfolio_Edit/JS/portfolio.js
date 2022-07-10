//DOM

    // a $( document ).ready() block: to wait until jQuery
    //determines the DOM is ready/loaded, 
    //so anything inside this block of code will run as soon as DOM is ready
    //$ ( document ).ready(setInterval() {
    //    console.log( "ready!" ),
    //});

    $('#slideshow > div:gt(0)').hide();


    
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



//SLIDESHOW

    // This function displays the first image in the slideshow when the page loads
    var slideIndex = 1;
    showSlides(slideIndex);

    // This function changes the slide when the left or right arrows are clicked
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // This function changes the slide when the dots are clicked
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var slides = document.getElementsByClassName("mySlides"); // This takes all elements with the class name "mySlides" and stores them in the variable array "slides"
        var dots = document.getElementsByClassName("dot"); // This takes all elements with the class name "dot" and stores them in the variable array "dots"
        if (n > slides.length) {slideIndex = 1}; // If n (the number passed into the function) is greater than the length of the array "slides", the slideIndex is set to 1
        if (n < 1) {slideIndex = slides.length}; // If n (the number passed into the function) is less than 1, the slideIndex is set to the length of the array "slides"
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; // This for loop takes each item in the array "slides" and sets the display to none
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", ""); // This for loop takes each item in the array "dots" and removes "active" which removes the active styling
        }
        slides[slideIndex - 1].style.display = "block"; // This displays the image in the slideshow
        dots[slideIndex - 1].className += " active"; // This adds the active styling to the dot associated with the image
    }

    //code for slideshow found at top of portfolio
    setInterval(function() {
        $('#slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
    }, 3000);

