  document.querySelectorAll('[data-accordion-icon]').forEach(icon => {
    const button = icon.closest('button');
    const targetId = button.getAttribute('data-accordion-target');
    const target = document.querySelector(targetId);

    button.addEventListener('click', () => {
      const isOpen = !target.classList.contains('hidden');
      icon.textContent = isOpen ? '+' : '-';
    });
  }); 