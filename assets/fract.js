//* QTY 

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.quantity-selector').forEach((container) => {
      const input = container.querySelector('.qty-input');
      const btnPlus = container.querySelector('.plus');
      const btnMinus = container.querySelector('.minus');

      btnPlus.addEventListener('click', () => {
        input.value = Number(input.value) + 1;
        input.dispatchEvent(new Event('change'));
      });

      btnMinus.addEventListener('click', () => {
        const min = Number(input.min) || 1;
        if (Number(input.value) > min) {
          input.value = Number(input.value) - 1;
          input.dispatchEvent(new Event('change'));
        }
      });
    });
  });

