// Declare variables below to save the different divs of your story.
let button = document.querySelector(".option-one")
let button2 = document.querySelector(".option-two")
let button3 = document.querySelector(".next1")
let button4 = document.querySelector(".next2")
let bike = document.querySelector(".option-one-screen")
let zombie = document.querySelector(".option-two-screen")
let goodend = document.querySelector(".option-one-end")
let badend = document.querySelector(".option-two-end")
let storyopening = document.querySelector(".story-opening")




// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.

button3.style.display = "none"
button4.style.display = "none"
// INSERT_VARIABLE.addEventListener('click', function(){
// START TO GOOD END
    button.addEventListener ('click', function() {
        bike.style.display = "block"
        storyopening.style.display = "none"
        button.style.display = "none"
        button2.style.display = "none"
        button3.style.display = "block"
});
// START TO BAD END
button2.addEventListener ('click', function() {
    zombie.style.display = "block"
    storyopening.style.display = "none"
    badend.style.display = "none"
    goodend.style.display = "none"
    button.style.display = "none"
    button2.style.display = "none"
    button4.style.display = "block"
});
// BAD END
button4.addEventListener ('click', function() {
    badend.style.display = "block"
    zombie.style.display = "none"
    goodend.style.display = "none"
    storyopening.style.display = "none"
    button.style.display = "none"
    button2.style.display = "none"
    button4.style.display = "none"
})
// GOOD END
button3.addEventListener ('click', function() {
    goodend.style.display = "block"
    badend.style.display = "none"
    bike.style.display = "none"
    button.style.display = "none"
    button2.style.display = "none"
    button3.style.display = "none"
});


// INSERT_VARIABLE.addEventListener('click', function(){

// });


// INSERT_VARIABLE.addEventListener('click', function(){

// });