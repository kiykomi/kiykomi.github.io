/**
 * Loading animation: staggered delay for .loading elements.
 */
export function initLoading() {
    const elements = document.querySelectorAll('.loading');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.animationDelay = `${index * 0.1}s`;
        }, 100);
    });
}
