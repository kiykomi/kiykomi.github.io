/**
 * Print media: light background and text.
 */
export function initPrint() {
    if (!window.matchMedia) return;
    const mediaQuery = window.matchMedia('print');
    mediaQuery.addEventListener('change', (mq) => {
        if (mq.matches) {
            document.body.style.background = 'white';
            document.body.style.color = 'black';
        }
    });
}
