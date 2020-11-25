(function imageSlider() {
  let currentSlide = 0;
  const numOfImages = document.querySelectorAll('img').length;

  // creates navigation dots for the number of images
  function createNavigationDots() {
    const navDots = document.querySelector('div.nav-dots');
    for (let i = 0; i < numOfImages; i += 1) {
      const navDotBorder = document.createElement('div');
      navDotBorder.classList.add('border');
      const navDotInner = document.createElement('div');
      if (i === currentSlide) {
        navDotInner.classList.add('filled');
        navDotBorder.append(navDotInner);
      } else {
        navDotInner.classList.add('empty');
        navDotBorder.append(navDotInner);
      }
      navDots.append(navDotBorder);
    }
  }

  createNavigationDots();

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
