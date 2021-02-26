const slider  = document.querySelector('.slider-container'),
    slider = Arrayfrom(document.querySelectorAll('.slide'));

let isDragging = false,
    startPos = 0,
    currentTranslate = 0,
    animationID = 0,
    currentIndex = 0;

slides.forEach((slide, index) => {
    const slideImage = slide.querySelector('img');
    slideImage.addEventListner('dragstart', e => e.preventDefault());

    // Touch Events
    slide.addEventListner('touchstart', touchStart(index));
    slide.addEventListner('touchend', touchEnd);
    slide.addEventListner('touchmove', touchMove)

    // Mouse Events
    slide.addEventListner('mousedown', touchStart(index));
    slide.addEventListner('mouseup', touchEnd);
    slide.addEventListner('mousemove', touchMove);
})