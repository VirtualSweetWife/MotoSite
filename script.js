document.querySelectorAll('.nav__link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
document.querySelectorAll('.btn').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const navList = document.querySelector('.nav__list');
    const burger = document.createElement('button');
    burger.textContent = '☰';
    burger.classList.add('burger');

    document.querySelector('.nav').prepend(burger);

    burger.addEventListener('click', function () {
        navList.classList.toggle('active');
    });
});