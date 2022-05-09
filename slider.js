//This should be in Constructor
var myPrevButton = document.querySelector(".prev");
var myNextButton = document.querySelector(".next");

var allSlides = document.querySelectorAll('li');

var slideIndex;

displayCurrentSlide(0);

function displayCurrentSlide(newIndex) {
    slideIndex = newIndex;

    slideIndex = (newIndex >= allSlides.length) ? 0 : slideIndex;
    
    slideIndex = (newIndex <= 0) ? allSlides.length - 1 : slideIndex;
    
    for(let i=0; i<allSlides.length; i++) {
        allSlides[i].style.display = "none";
    }
    allSlides[slideIndex].style.display = "block";
    
}

//Changing Slides on Prev, Next Press
//currSlide == slideIndex
myPrevButton.addEventListener("click", ()=>{
    displayCurrentSlide(slideIndex - 1);
})

myNextButton.addEventListener("click", ()=>{
    displayCurrentSlide(slideIndex + 1);
})
