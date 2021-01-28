const initFormEvents = () => {
  const inputs = document.querySelectorAll('[data-input]');
  const numbers = document.querySelector('[data-number]');

  if (numbers) {
    const mask = (event) => {
      const element = event.currentTarget;
      setTimeout(() => {
        let v = mphone(element.value);
        if (v != element.value) {
          element.value = v;
        }
      }, 1);
    };

    const mphone = (v) => {
      let r = v.replace(/\D/g, '');
      r = r.replace(/^0/, '');
      if (r.length > 10) {
        r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, '($1) $2-$3');
      } else if (r.length > 5) {
        r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, '($1) $2-$3');
      } else if (r.length > 2) {
        r = r.replace(/^(\d\d)(\d{0,5})/, '($1) $2');
      } else {
        r = r.replace(/^(\d*)/, '($1');
      }
      return r;
    };

    numbers.addEventListener('keypress', mask);
    numbers.addEventListener('blur', mask);
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
