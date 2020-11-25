const imageSlider = (function() {
  let currentSlide = 0;

  // advances imageSlider to the next image
  function next() {
    const imageSlides = document.querySelector('.very-wide');
    currentSlide += 1;
    imageSlides.style.transform = `translate(-${currentSlide * 100}vw)`;
  }

  // reverts imageSlider back to the previous image
  function previous() {
    
    const imageSlides = document.querySelector('.very-wide');
    currentSlide -= 1;
    imageSlides.style.transform = `translate(-${(currentSlide) * 100}vw)`;
  }

  document.querySelector('.arrow.right').addEventListener('click', next);
  document.querySelector('.arrow.left').addEventListener('click', previous);
}());