const imageSlider = (function() {
  function next() {
    // advances imageSlider to the next image
    console.log('next');
  }

  function previous() {
    // reverts imageSlider back to the previous image
    console.log('previous');
  }

  document.querySelector('.arrow.right').addEventListener('click', next);
  document.querySelector('.arrow.left').addEventListener('click', previous);
}());