(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
    const mobileMenuRef = document.querySelector('[data-menu]');
    const headerMenu = document.querySelector('.header-menu')
  const containerIsOpen = document.querySelector('.open');
  const overlay = document.querySelector('.overlay')
  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);
headerMenu.classList.toggle('is-open')
    mobileMenuRef.classList.toggle('is-open');
    containerIsOpen.classList.toggle('is-open')
overlay.classList.toggle('is-open')
  });
})();