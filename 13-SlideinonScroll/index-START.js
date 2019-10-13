function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
  sliderImages.forEach(sliderImages => {
    // half way through the image
    const slideInAt = (window.scrollY + window.innerHeight) - sliderImages.height / 2;
    // bottom of the image
    const imageBottom = sliderImages.offsetTop + sliderImages.height;
    const isHalfShown = slideInAt > sliderImages.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if(isHalfShown && isNotScrolledPast) {
      sliderImages.classList.add('active');
    } else {
      sliderImages.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide));
