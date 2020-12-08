(function imageSlider() {
  let currentSlide = 0;
  const numOfImages = document.querySelectorAll('img').length;

  // creates navigation dots for the number of images
  function createNavigationDots() {
    const navDots = document.querySelector('.nav-dots');
    for (let i = 0; i < numOfImages; i += 1) {
      const navDotBorder = document.createElement('div');
      navDotBorder.classList.add('border');
      const navDotInner = document.createElement('div');
      if (i === currentSlide) {
        navDotInner.classList.add('filled');
        navDotBorder.append(navDotInner);
      } else {
        navDotBorder.append(navDotInner);
      }
      navDots.append(navDotBorder);
    }
    // return a live HTMLCollection of the border nav-dots divs
    return document.getElementsByClassName('border');
  }

  const navDots = createNavigationDots();

  // hides the left and right arrows accordingly
  function hideArrows() {
    // hide back arrow if on the first slide
    const leftArrow = document.querySelector('.arrow.left');
    if (currentSlide === 0) {
      leftArrow.classList.add('hidden');
    } else {
      leftArrow.classList.remove('hidden');
    }
    // hide next arrow if at the end of slideshow
    const rightArrow = document.querySelector('.arrow.right');
    if (currentSlide === numOfImages - 1) {
      rightArrow.classList.add('hidden');
    } else {
      rightArrow.classList.remove('hidden');
    }
  }

  // call fucntion to hide the left arrow at the start
  hideArrows();

  // advances imageSlider to the next image
  function next() {
    // prevent from sliding past the last image
    if (currentSlide !== numOfImages - 1) {
      const imageSlides = document.querySelector('.very-wide');
      // remove filled class from current slide
      navDots.item(currentSlide).firstChild.classList.remove('filled');
      currentSlide += 1;
      imageSlides.style.transform = `translate(-${currentSlide * 100}vw)`;
      // add filled class to new current slide
      navDots.item(currentSlide).firstChild.classList.add('filled');
    }
    hideArrows();
    // add a timeout which advances the slides every 5 seconds
    setTimeout(next, 5000);
  }

  // reverts imageSlider back to the previous image
  function previous() {
    // don't move to the left if the current slide is already 0
    if (currentSlide !== 0) {
      const imageSlides = document.querySelector('.very-wide');
      // remove filled class from current slide
      navDots.item(currentSlide).firstChild.classList.remove('filled');
      currentSlide -= 1;
      imageSlides.style.transform = `translate(-${(currentSlide) * 100}vw)`;
      // add filled class to new current slide
      navDots.item(currentSlide).firstChild.classList.add('filled');
    }
    hideArrows();
  }

  // wire up event listeners on the left and right arrows
  document.querySelector('.arrow.right').addEventListener('click', next);
  document.querySelector('.arrow.left').addEventListener('click', previous);
  // add a timeout which advances the slides every 5 seconds
  setTimeout(next, 5000);
}());
