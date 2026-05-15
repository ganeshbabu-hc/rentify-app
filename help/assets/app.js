document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-accordion]').forEach(button => {
    button.addEventListener('click', () => {
      const item = button.closest('.accordion-item');
      item.classList.toggle('open');
      const icon = button.querySelector('[data-icon]');
      if (icon) {
        icon.textContent = item.classList.contains('open') ? '−' : '+';
      }
    });
  });

  const toggle = document.querySelector('[data-menu-toggle]');
  const sidebar = document.querySelector('[data-sidebar]');
  if (toggle && sidebar) {
    toggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  }
});
