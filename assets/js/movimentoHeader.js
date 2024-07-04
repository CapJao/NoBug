let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scroll down
        header.classList.add('header-hidden');
        header.classList.remove('header-fixed');
    } else {
        // Scroll up
        header.classList.add('header-fixed');
        header.classList.remove('header-hidden');
    }
    lastScrollTop = scrollTop;
});