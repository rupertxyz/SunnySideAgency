const navSlide = () => {
    const burger = document.querySelector('.hamburger-button');
    const navBar = document.querySelector('nav');

    burger.addEventListener('click', () => {
        navBar.classList.toggle('active');
    });
}

navSlide();