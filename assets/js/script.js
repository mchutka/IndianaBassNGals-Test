
const menuToggle = document.querySelector('[data-menu-toggle]');
const navWrap = document.querySelector('[data-nav-wrap]');

if (menuToggle && navWrap) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navWrap.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}
