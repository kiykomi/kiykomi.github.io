/**
 * Keyboard: Arrow Left/Right switch tabs.
 */
export function initKeyboardTabs() {
    document.addEventListener('keydown', (e) => {
        if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
        const activeTab = document.querySelector('.tab-btn.active');
        if (!activeTab) return;
        e.preventDefault();
        const tabs = Array.from(document.querySelectorAll('.tab-btn'));
        const currentIndex = tabs.indexOf(activeTab);
        const nextIndex = e.key === 'ArrowLeft'
            ? (currentIndex > 0 ? currentIndex - 1 : tabs.length - 1)
            : (currentIndex < tabs.length - 1 ? currentIndex + 1 : 0);
        tabs[nextIndex].click();
        tabs[nextIndex].focus();
    });
}
