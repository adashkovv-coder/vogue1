// Фиксированная панель при скролле
const topbar = document.getElementById('topbar');
const onScroll = () => {
    topbar.classList.toggle('scrolled', window.scrollY > 40);
};
document.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Показ мобильной кнопки после hero
const hero = document.getElementById('hero');
const mobileCta = document.getElementById('mobileCta');
if (hero && mobileCta) {
    const heroObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                mobileCta.classList.toggle('visible', !entry.isIntersecting);
            });
        },
        { threshold: 0 }
    );
    heroObserver.observe(hero);
}

// Плавное появление секций
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
);
revealEls.forEach((el) => revealObserver.observe(el));

document.documentElement.classList.add('motion-ready');