const imageSlider = (function() {
  let currentSlide = 0;
  const numOfImages = document.querySelectorAll('img').length;

  // advances imageSlider to the next image
  function next() {
    // prevent from sliding past the last image
    if (currentSlide !== numOfImages - 1) {
      const imageSlides = document.querySelector('.very-wide');
      currentSlide += 1;
      imageSlides.style.transform = `translate(-${currentSlide * 100}vw)`;
    }
  }

  // reverts imageSlider back to the previous image
  function previous() {
    // don't move to the left if the current slide is already 0
    if (currentSlide !== 0) {
      const imageSlides = document.querySelector('.very-wide');
      currentSlide -= 1;
      imageSlides.style.transform = `translate(-${(currentSlide) * 100}vw)`;
    }
  }

  document.querySelector('.arrow.right').addEventListener('click', next);
  document.querySelector('.arrow.left').addEventListener('click', previous);
}());