const initIntroAnimation = () => {
  const introElement = document.querySelector('[data-animation="intro"]');

  if (introElement)
    introElement.addEventListener('animationend', () => {
      introElement.remove();
    });
};

export default initIntroAnimation;
