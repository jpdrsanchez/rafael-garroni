const initListPadding = () => {
  const listItems = document.querySelectorAll('[data-list] > div');
  const totalLenght = listItems.length;
  const itemsPerColumn = Math.ceil(totalLenght / 3);
  listItems[itemsPerColumn].classList.add('space');
};

export default initListPadding;
