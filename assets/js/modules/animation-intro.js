const initIntroAnimation = () => {
  const introElement = document.querySelector('[data-animation="intro"]');

  if (sessionStorage.getItem('animation') !== 'yes') {
    sessionStorage.setItem('animation', 'no');

    if (introElement)
      introElement.addEventListener('animationend', () => {
        introElement.remove();
        sessionStorage.setItem('animation', 'yes');
      });
  } else {
    if (introElement) introElement.remove();
  }
};

export default initIntroAnimation;
