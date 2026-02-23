/**
 * Scroll-to-top button: show on scroll, smooth scroll on click.
 */
export function initScrollToTop() {
    const btn = document.getElementById('scrollToTop');
    if (!btn) return;

    let ticking = false;
    function updateVisibility() {
        btn.classList.toggle('show', window.pageYOffset > 400);
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateVisibility);
            ticking = true;
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
