//* QTY 

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.quantity-selector').forEach((container) => {
      const input = container.querySelector('.qty-input');
      const btnPlus = container.querySelector('.plus');
      const btnMinus = container.querySelector('.minus');

const submitForm = () => {
  const form = container.closest('form');
  if (!form) return;

  const formData = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'text/html',
    },
  })
    .then((res) => res.text())
    .then((html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');

      // Replace .fract-cart
      const newCart = doc.querySelector('.fract-cart');
      const currentCart = document.querySelector('.fract-cart');
      if (newCart && currentCart) {
        currentCart.innerHTML = newCart.innerHTML;
      }

      // Reload and re-run fract.js
      const existingScript = document.querySelector('script[src*="fract.js"]');
      if (existingScript) existingScript.remove();

      const script = document.createElement('script');
      script.src = '{{ "fract.js" | asset_url }}?v=' + Date.now(); // bust cache
      script.defer = true;
      document.body.appendChild(script);
    });
};


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

      input.addEventListener('change', submitForm);
    });
  });
