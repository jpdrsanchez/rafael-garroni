const initImageModal = () => {
  const image = document.querySelectorAll('[data-modal="image"]');

  if (image.length) {
    const createElement = (url) => {
      const modalWrapper = document.createElement('div');
      modalWrapper.style =
        'position: fixed; top: 0; left: 0; width: 100vw; heigth: 100vh; background: rgba(0,0,0,.3); z-index: 9999;';
      modalWrapper.innerHTML = `<img src=${url} alt="image" style="display: block; max-width: 100%" />`;
    };

    const handleModal = () => {};

    image.addEventListener('click', handleModal);
  }
};
