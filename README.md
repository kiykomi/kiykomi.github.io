# Portfolio

Статический сайт (HTML, CSS, JS) с переводами (EN, DE, UK, RU).

Откройте `index.html` в браузере. После правок в `js/data/translations.js` обновите страницу (F5) — переводы подтягиваются за счёт обхода кэша при загрузке.

## Добавление нового языка

1. В `js/data/translations.js`:
   - добавьте запись в `window.langList` (например `{ code: 'fr', flag: 'flag-fr', labelKey: 'lang-french' }`);
   - добавьте блок `translations['fr']` со всеми ключами (в т.ч. `'lang-french': 'Français'`);
   - добавьте `cvDownloads['fr'] = 'CV_KyikoM_FR.pdf'`.
2. Положите файл резюме в корень (например `CV_KyikoM_FR.pdf`).
3. При необходимости добавьте класс флага (например `.flag-fr`) в `css/header.css` или `css/styles.css`.

После сохранения файла и обновления страницы новый язык появится в переключателе и в ссылке на CV.
