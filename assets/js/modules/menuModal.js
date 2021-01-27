const initMenuModal = () => {
  const open = document.querySelector('[data-menu="open"]');
  const close = document.querySelector('[data-menu="close"]');
  const menu = document.querySelector('[data-menu="body"]');

  if (open && close && menu) {
    open.addEventListener('click', () => {
      menu.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
    close.addEventListener('click', () => {
      menu.classList.remove('active');
      document.body.style.overflow = '';
    });
  }
};

export default initMenuModal;
