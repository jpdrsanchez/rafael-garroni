const initFormEvents = () => {
  const inputs = document.querySelectorAll('[data-input]');
  const numbers = document.querySelector('[data-number]');

  if (numbers) {
    const handleNumber = (event) => {
      if (event.currentTarget.value.length > 11) {
        event.currentTarget.value = event.currentTarget.value.slice(0, 11);
      }
    };
    numbers.addEventListener('keyup', handleNumber);
  }

  if (inputs.length)
    inputs.forEach((input) => {
      const handleLabel = ({ currentTarget }) => {
        const value = currentTarget.value;

        if (value.length)
          currentTarget.nextElementSibling.classList.add('active');
        else currentTarget.nextElementSibling.classList.remove('active');
      };

      input.addEventListener('keyup', handleLabel);
    });
};

export default initFormEvents;
