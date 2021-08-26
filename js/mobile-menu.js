(() => {
    const refs = {
        openMenuBtn: document.querySelector('.menu-toggler'),
        // closeMenuBtn: document.querySelector('.menu-close'),
        menu: document.querySelector('.mobile-menu'),
    };

    refs.openMenuBtn.addEventListener('click', toggleMenu);
    // refs.closeMenuBtn.addEventListener('click', toggleMenu);

    function toggleMenu() {
        refs.menu.classList.toggle('is-hidden');
    }
})();