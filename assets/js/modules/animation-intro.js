const initIntroAnimation = () => {
  const introElement = document.querySelector('[data-animation="intro"]');

  if (introElement)
    introElement.addEventListener('animationend', (event) => {
      introElement.remove();
    });
};

export default initIntroAnimation;
