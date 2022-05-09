class Slider {
    static slideIndex = 0;
    constructor (slideIndex = 0) {
        this.slideIndex = slideIndex;
        this.initSlider();
    }

    initSlider() {

        var myPrevButton = document.querySelector(".prev");
        var myNextButton = document.querySelector(".next");
    
        myPrevButton.addEventListener("click", ()=>{
            this.displayCurrentSlide(this.slideIndex - 1);
        });
        
        myNextButton.addEventListener("click", ()=>{
            this.displayCurrentSlide(this.slideIndex + 1);
        })


        this.displayCurrentSlide(0);
    }

    displayCurrentSlide(index) {
        var allSlides = document.querySelectorAll('li');
        this.slideIndex = index;
        
        this.slideIndex = (index >= allSlides.length) ? 0 : this.slideIndex;
        
        this.slideIndex = (index <= 0) ? allSlides.length - 1 : this.slideIndex;
        
        for(let i=0; i<allSlides.length; i++) {
            allSlides[i].style.display = "none";
        }
        allSlides[this.slideIndex].style.display = "block";
    }
    
}

let newSlider = new Slider(4);