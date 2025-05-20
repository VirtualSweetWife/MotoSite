// Плавная прокрутка к якорям
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll Reveal Анимация
document.addEventListener("DOMContentLoaded", function () {
    ScrollReveal({
        reset: false,     // не повторять анимацию
        distance: '60px', // насколько далеко элемент "въезжает"
        duration: 1000,   // длительность анимации
        delay: 200,       // задержка
        easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    });

    // Анимация для секций
    ScrollReveal().reveal('.about', { origin: 'bottom' });
    ScrollReveal().reveal('.services', { origin: 'bottom' });
    ScrollReveal().reveal('.contacts-section', { origin: 'bottom' });

    // Анимация для карточек услуг
    ScrollReveal().reveal('.service-card', {
        origin: 'bottom',
        interval: 200,
        delay: 300
    });

    // Анимация для текста в коллаже
    ScrollReveal().reveal('.text__block__collage', {
        origin: 'bottom',
        interval: 150
    });

    // Анимация для кнопки CTA
    ScrollReveal().reveal('.btn', {
        origin: 'bottom',
        delay: 400
    });
    // Анимация для карточек преимуществ
    ScrollReveal().reveal('.feature-card', {
        origin: 'bottom',
        interval: 200,
        delay: 300
    });
});