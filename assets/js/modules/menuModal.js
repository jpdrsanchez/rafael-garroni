const initMenuModal = () => {
  const open = document.querySelector('[data-menu="open"]');
  const close = document.querySelector('[data-menu="close"]');
  const menu = document.querySelector('[data-menu="body"]');

  if (open && close && menu) {
    open.addEventListener('click', () => menu.classList.add('active'));
    close.addEventListener('click', () => menu.classList.remove('active'));
  }
};

export default initMenuModal;
