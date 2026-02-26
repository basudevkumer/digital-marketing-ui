document.querySelectorAll('[data-accordion-target]').forEach(btn => {
    btn.addEventListener('click', () => {

      const expanded = btn.getAttribute('aria-expanded') === 'true';

      const plus = btn.querySelector('.plus-icon');
      const minus = btn.querySelector('.minus-icon');

      if (expanded) {
        // OPEN → SHOW PLUS
        plus.classList.remove('hidden');
        minus.classList.add('hidden');
      } else {
        // CLOSED → SHOW MINUS
        plus.classList.add('hidden');
        minus.classList.remove('hidden');
      }
    });
  });