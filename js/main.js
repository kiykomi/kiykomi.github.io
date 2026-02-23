/**
 * Portfolio entry point. Initializes all modules on DOMContentLoaded.
 */
import { initLoading } from './loading.js';
import { initTabs } from './tabs.js';
import { initScrollAnimations } from './scroll-animations.js';
import { initI18n } from './i18n.js';
import { initSmoothScroll } from './smooth-scroll.js';
import { initKeyboardTabs } from './keyboard-tabs.js';
import { initProjectCards } from './project-cards.js';
import { initPrint } from './print.js';
import { initScrollToTop } from './scroll-to-top.js';

function init() {
    initLoading();
    initTabs();
    initScrollAnimations();
    initI18n();
    initSmoothScroll();
    initKeyboardTabs();
    initProjectCards();
    initPrint();
    initScrollToTop();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

window.addEventListener('load', () => {
    if (window.performance?.timing?.loadEventEnd) {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log('Page load time:', loadTime + 'ms');
    }
});
