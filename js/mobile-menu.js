(() => {
    const refs = {
        openMenuBtn: document.querySelector('.menu-opened'),
        closeMenuBtn: document.querySelector('.menu-closed'),
        menu: document.querySelector('.mobile-menu'),
    };

    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);

    function toggleMenu() {
        refs.menu.classList.toggle('is-hidden');
    }
})();