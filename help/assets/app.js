document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.accordion-item').forEach(item => {
    const button = item.querySelector('[data-accordion]');
    const panel = item.querySelector('.accordion-panel');
    const icon = button?.querySelector('[data-icon]');

    if (icon) {
      icon.textContent = '›';
      icon.setAttribute('aria-hidden', 'true');
    }

    if (panel) {
      panel.style.maxHeight = item.classList.contains('open') ? `${panel.scrollHeight}px` : '0px';
    }
  });

  document.querySelectorAll('[data-accordion]').forEach(button => {
    button.addEventListener('click', () => {
      const item = button.closest('.accordion-item');
      const panel = item?.querySelector('.accordion-panel');
      if (!item || !panel) {
        return;
      }

      const isOpen = item.classList.contains('open');
      if (isOpen) {
        panel.style.maxHeight = `${panel.scrollHeight}px`;
        requestAnimationFrame(() => {
          item.classList.remove('open');
          panel.style.maxHeight = '0px';
        });
        return;
      }

      item.classList.add('open');
      panel.style.maxHeight = `${panel.scrollHeight}px`;
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
