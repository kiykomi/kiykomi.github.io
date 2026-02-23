/**
 * Portfolio: one script, no modules. Expects window.translations and window.cvDownloads from js/data/translations.js
 */
(function () {
	'use strict';

	var translations = window.translations || {};
	var cvDownloads = window.cvDownloads || { en: 'CV_KyikoM_EN.pdf' };
	var DEFAULT_LANG = 'en';

	function initLoading() {
		var elements = document.querySelectorAll('.loading');
		elements.forEach(function (el, index) {
			setTimeout(function () { el.style.animationDelay = index * 0.1 + 's'; }, 100);
		});
	}

	function initTabs() {
		var tabButtons = document.querySelectorAll('.tab-btn');
		tabButtons.forEach(function (button) {
			button.addEventListener('click', function () {
				tabButtons.forEach(function (btn) { btn.classList.remove('active'); });
				this.classList.add('active');
				document.querySelectorAll('.tab-content').forEach(function (c) { c.classList.remove('active'); });
				var tabId = this.getAttribute('data-tab') + '-tab';
				var target = document.getElementById(tabId);
				if (target) target.classList.add('active');
			});
		});
	}

	function initScrollAnimations() {
		var observer = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (!entry.isIntersecting) return;
				entry.target.style.opacity = '1';
				entry.target.style.transform = 'translateY(0)';
				if (entry.target.classList.contains('skills-list')) {
					var items = entry.target.querySelectorAll('.skill-item');
					items.forEach(function (item, i) {
						setTimeout(function () {
							item.style.opacity = '1';
							item.style.transform = 'translateY(0) scale(1)';
						}, i * 50);
					});
				}
				if (entry.target.classList.contains('languages-list')) {
					var bars = entry.target.querySelectorAll('.language-progress');
					bars.forEach(function (bar, i) {
						setTimeout(function () { bar.style.width = bar.style.width || '0%'; }, i * 200);
					});
				}
			});
		}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
		document.querySelectorAll('.card, .project-card, .experience-item').forEach(function (el) {
			el.style.opacity = '0';
			el.style.transform = 'translateY(20px)';
			el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
			observer.observe(el);
		});
		document.querySelectorAll('.skill-item').forEach(function (item) {
			item.style.opacity = '1';
			item.style.transform = 'translateY(0) scale(1)';
			item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
		});
	}

	function translatePage(lang) {
		var t = translations[lang] || {};
		document.querySelectorAll('[data-translate]').forEach(function (el) {
			var key = el.getAttribute('data-translate');
			if (t[key]) {
				if (el.innerHTML.indexOf('<br>') !== -1 || el.innerHTML.indexOf('•') !== -1 || el.tagName === 'SPAN') {
					el.innerHTML = t[key];
				} else {
					el.textContent = t[key];
				}
			}
		});
		var btnSpan = document.querySelector('#download-cv span');
		if (btnSpan && t['download-cv']) btnSpan.textContent = t['download-cv'];
		document.title = (t['name'] || 'Mykhailo Kyiko') + ' | Junior DevOps Engineer';
	}

	function initI18n() {
		var langBtn = document.querySelector('.lang-btn');
		var downloadBtn = document.getElementById('download-cv');
		if (!downloadBtn) return;
		downloadBtn.setAttribute('target', '_blank');
		downloadBtn.setAttribute('rel', 'noopener noreferrer');

		var langDropdown = document.getElementById('lang-dropdown');
		if (langDropdown && window.langList && window.langList.length) {
			window.langList.forEach(function (item) {
				var t = translations[item.code] || {};
				var label = t[item.labelKey] || item.code.toUpperCase();
				var option = document.createElement('div');
				option.className = 'lang-option';
				option.setAttribute('data-lang', item.code);
				option.innerHTML = '<div class="flag-icon ' + item.flag + '"></div><span data-translate="' + item.labelKey + '">' + label + '</span>';
				langDropdown.appendChild(option);
			});
		}
		var langOptions = document.querySelectorAll('.lang-option');

		if (langBtn) {
			langBtn.addEventListener('click', function (e) {
				e.stopPropagation();
				var d = document.querySelector('.lang-dropdown');
				if (d) d.classList.toggle('show');
			});
		}
		document.addEventListener('click', function (e) {
			if (!e.target.closest('.lang-switcher')) {
				var d = document.querySelector('.lang-dropdown');
				if (d) d.classList.remove('show');
			}
		});

		langOptions.forEach(function (option) {
			option.addEventListener('click', function (e) {
				e.stopPropagation();
				var lang = this.getAttribute('data-lang');
				var d = document.querySelector('.lang-dropdown');
				if (d) d.classList.remove('show');
				var flagEl = this.querySelector('.flag-icon');
				var flagClass = flagEl ? flagEl.className : 'flag-icon';
				if (langBtn) langBtn.innerHTML = '<div class="' + flagClass + '"></div><span>' + lang.toUpperCase() + '</span><i class="fas fa-chevron-down"></i>';
				downloadBtn.href = cvDownloads[lang] || cvDownloads[DEFAULT_LANG];
				translatePage(lang);
				this.style.background = 'var(--accent)';
				setTimeout(function () { this.style.background = ''; }.bind(this), 200);
			});
		});
		downloadBtn.addEventListener('click', function (e) {
			e.preventDefault();
			window.open(downloadBtn.href, '_blank', 'noopener,noreferrer');
		});
		downloadBtn.href = cvDownloads[DEFAULT_LANG] || cvDownloads.en;
		translatePage(DEFAULT_LANG);
	}

	function initSmoothScroll() {
		document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
			anchor.addEventListener('click', function (e) {
				var href = this.getAttribute('href');
				if (href === '#') return;
				e.preventDefault();
				var target = document.querySelector(href);
				if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
			});
		});
	}

	function initKeyboardTabs() {
		document.addEventListener('keydown', function (e) {
			if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
			var active = document.querySelector('.tab-btn.active');
			if (!active) return;
			e.preventDefault();
			var tabs = Array.prototype.slice.call(document.querySelectorAll('.tab-btn'));
			var idx = tabs.indexOf(active);
			var next = e.key === 'ArrowLeft' ? (idx > 0 ? idx - 1 : tabs.length - 1) : (idx < tabs.length - 1 ? idx + 1 : 0);
			tabs[next].click();
			tabs[next].focus();
		});
	}

	function initProjectCards() {
		document.querySelectorAll('.project-card').forEach(function (card) {
			card.addEventListener('mouseenter', function () { this.style.transform = 'translateY(-10px) scale(1.02)'; });
			card.addEventListener('mouseleave', function () { this.style.transform = 'translateY(0) scale(1)'; });
		});
	}

	function initPrint() {
		if (window.matchMedia) {
			window.matchMedia('print').addEventListener('change', function (mq) {
				if (mq.matches) {
					document.body.style.background = 'white';
					document.body.style.color = 'black';
				}
			});
		}
	}

	function initScrollToTop() {
		var btn = document.getElementById('scrollToTop');
		if (!btn) return;
		var ticking = false;
		function update() {
			btn.classList.toggle('show', window.pageYOffset > 400);
			ticking = false;
		}
		window.addEventListener('scroll', function () {
			if (!ticking) {
				requestAnimationFrame(update);
				ticking = true;
			}
		});
		btn.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
	}

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

	window.addEventListener('load', function () {
		if (window.performance && performance.timing && performance.timing.loadEventEnd) {
			console.log('Page load time:', performance.timing.loadEventEnd - performance.timing.navigationStart + 'ms');
		}
	});
})();
