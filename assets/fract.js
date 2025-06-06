window.initFractCart = function () {
  document.querySelectorAll('.quantity-selector').forEach((container) => {
    const input = container.querySelector('.qty-input');
    const btnPlus = container.querySelector('.plus');
    const btnMinus = container.querySelector('.minus');

    // Remove old listeners to avoid duplicates (optional, but safer)
    btnPlus?.replaceWith(btnPlus.cloneNode(true));
    btnMinus?.replaceWith(btnMinus.cloneNode(true));
    input?.replaceWith(input.cloneNode(true));

    // Re-query after cloning
    const newInput = container.querySelector('.qty-input');
    const newBtnPlus = container.querySelector('.plus');
    const newBtnMinus = container.querySelector('.minus');

    newBtnPlus?.addEventListener('click', () => {
      newInput.value = Number(newInput.value) + 1;
      newInput.dispatchEvent(new Event('change'));
    });

    newBtnMinus?.addEventListener('click', () => {
      const min = Number(newInput.min) || 1;
      if (Number(newInput.value) > min) {
        newInput.value = Number(newInput.value) - 1;
        newInput.dispatchEvent(new Event('change'));
      }
    });

    // Optional: add change event if needed, e.g. auto-submit handled elsewhere
    // newInput?.addEventListener('change', () => {
    //   // handle manual input change
    // });
  });
};

// Run on first load
window.initFractCart();
