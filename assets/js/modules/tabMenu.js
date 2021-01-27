const initTabMenu = () => {
  const tabElements = document.querySelectorAll('[data-tab]:not(ul)');
  const tabControls = document.querySelectorAll('[data-tab="menu"] > li a');

  if (tabControls.length && tabElements.length) {
    const handleTab = (event) => {
      tabElements.forEach((element) => {
        element.classList.remove('active');
        if (element.dataset.tab === event.currentTarget.id) {
          element.classList.add('active');
        }
      });
    };

    tabControls.forEach((link) => {
      link.addEventListener('mouseover', handleTab);
    });
  }
};

export default initTabMenu;
