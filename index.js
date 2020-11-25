const imageSlider = (function() {
  let currentSlide = 0;

  function next() {
    // advances imageSlider to the next image
    const imageSlides = document.querySelector('.very-wide');
    currentSlide += 1;
    imageSlides.style.transform = `translate(-${currentSlide * 100}vw)`;
  }

  function previous() {
    // reverts imageSlider back to the previous image
    const imageSlides = document.querySelector('.very-wide');
    currentSlide -= 1;
    imageSlides.style.transform = `translate(-${(currentSlide) * 100}vw)`;
  }

  document.querySelector('.arrow.right').addEventListener('click', next);
  document.querySelector('.arrow.left').addEventListener('click', previous);
}());