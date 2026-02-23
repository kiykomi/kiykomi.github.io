/**
 * Language switcher and page translation.
 */
import { translations, cvDownloads } from './data/translations.js';

const DEFAULT_LANG = 'en';
const TITLE_SUFFIX = ' | Junior DevOps Engineer';

export function translatePage(lang) {
    const t = translations[lang] || {};
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach((element) => {
        const key = element.getAttribute('data-translate');
        if (t[key]) {
            if (element.innerHTML.includes('<br>') || element.innerHTML.includes('•') || element.tagName === 'SPAN') {
                element.innerHTML = t[key];
            } else {
                element.textContent = t[key];
            }
        }
    });
    const btnSpan = document.querySelector('#download-cv span');
    if (btnSpan && t['download-cv']) btnSpan.textContent = t['download-cv'];
    document.title = (t['name'] || 'Mykhailo Kyiko') + TITLE_SUFFIX;
}

export function initI18n() {
    const langBtn = document.querySelector('.lang-btn');
    const langOptions = document.querySelectorAll('.lang-option');
    const downloadBtn = document.getElementById('download-cv');
    if (!downloadBtn) return;

    downloadBtn.setAttribute('target', '_blank');
    downloadBtn.setAttribute('rel', 'noopener noreferrer');

    if (langBtn) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            document.querySelector('.lang-dropdown')?.classList.toggle('show');
        });
    }

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.lang-switcher')) {
            document.querySelector('.lang-dropdown')?.classList.remove('show');
        }
    });

    let currentLang = DEFAULT_LANG;

    langOptions.forEach((option) => {
        option.addEventListener('click', function (e) {
            e.stopPropagation();
            const lang = this.getAttribute('data-lang');
            document.querySelector('.lang-dropdown')?.classList.remove('show');
            const flagEl = this.querySelector('.flag-icon');
            const flagClass = flagEl ? flagEl.className : 'flag-icon';
            const langCode = lang.toUpperCase();
            if (langBtn) {
                langBtn.innerHTML = `<div class="${flagClass}"></div><span>${langCode}</span><i class="fas fa-chevron-down"></i>`;
            }
            downloadBtn.href = cvDownloads[lang] || cvDownloads[DEFAULT_LANG];
            currentLang = lang;
            translatePage(lang);
            this.style.background = 'var(--accent)';
            setTimeout(() => { this.style.background = ''; }, 200);
        });
    });

    downloadBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(downloadBtn.href, '_blank', 'noopener,noreferrer');
    });

    downloadBtn.href = cvDownloads[currentLang] || cvDownloads[DEFAULT_LANG];
    translatePage(currentLang);
}
