/**
 * Scroll-in animations via IntersectionObserver.
 */
export function initScrollAnimations() {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            if (entry.target.classList.contains('skills-list')) {
                const skillItems = entry.target.querySelectorAll('.skill-item');
                skillItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0) scale(1)';
                    }, index * 50);
                });
            }
            if (entry.target.classList.contains('languages-list')) {
                const progressBars = entry.target.querySelectorAll('.language-progress');
                progressBars.forEach((bar, index) => {
                    setTimeout(() => {
                        bar.style.width = bar.style.width || '0%';
                    }, index * 200);
                });
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card, .project-card, .experience-item').forEach((el) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    document.querySelectorAll('.skill-item').forEach((item) => {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0) scale(1)';
        item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    });
}
