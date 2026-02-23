/**
 * Tab switching (Employment / Education / Certifications).
 */
export function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach((button) => {
        button.addEventListener('click', function () {
            tabButtons.forEach((btn) => btn.classList.remove('active'));
            this.classList.add('active');
            document.querySelectorAll('.tab-content').forEach((content) => {
                content.classList.remove('active');
            });
            const tabId = this.getAttribute('data-tab') + '-tab';
            const targetTab = document.getElementById(tabId);
            if (targetTab) targetTab.classList.add('active');
        });
    });
}
