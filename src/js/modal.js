(() => {
  const mobileMenu = document.querySelector('.v-menu-container');
  const openMenuBtn = document.querySelectorAll('.v-open-menu');
  const closeMenuBtn = document.querySelectorAll('.v-close-menu');
  const toggleMenu = () => {
      const isMenuOpen =

          mobileMenu.classList.toggle('is-hidden');

      const scrollLockMethod = !isMenuOpen
          ? 'disableBodyScroll'
          : 'enableBodyScroll';
      bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.forEach(openMenuBtn => openMenuBtn.addEventListener('click', toggleMenu));
  closeMenuBtn.forEach(closeMenuBtn => closeMenuBtn.addEventListener('click', toggleMenu));
})();