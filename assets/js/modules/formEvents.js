const initFormEvents = () => {
  const inputs = document.querySelectorAll('[data-input]');

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
