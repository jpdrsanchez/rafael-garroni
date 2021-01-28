const initImageModal = () => {
  const images = document.querySelectorAll('[data-modal="image"]');
  const modal = document.querySelector('#modal-image');
  const modalImage = document.querySelector('#modal-image img');
  const closeModal = document.querySelector('#close');

  if (images.length && closeModal && modal && modalImage) {
    const handleModal = (event) => {
      const imageUrl = event.currentTarget.getAttribute('src');
      modalImage.setAttribute('src', imageUrl);
      modal.classList.add('active');
    };
    images.forEach((image) => {
      image.addEventListener('click', handleModal);
    });

    const handleClose = (event) => {
      if (
        event.target === event.currentTarget ||
        event.currentTarget.contains(closeModal)
      )
        modal.classList.remove('active');
    };

    modal.addEventListener('click', handleClose);
  }
};

export default initImageModal;
