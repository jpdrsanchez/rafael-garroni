const initAutoScroll = (velocity = false) => {
  const list = document.querySelector('[data-scroll] ul');
  const wrapper = document.querySelector('[data-scroll]');

  if (list && wrapper && velocity) {
    const handleScroll = () => {
      const totalScroll = list.scrollHeight - wrapper.clientHeight;
      list.style = `transform: translateY(-${totalScroll}px); transition: transform ${velocity}s linear;`;
    };

    window.addEventListener('load', handleScroll);
  }
};

export default initAutoScroll;
