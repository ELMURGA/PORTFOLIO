/* ================================
   JAVASCRIPT COMÚN - Compartido entre todas las páginas
   ================================ */

document.addEventListener('DOMContentLoaded', function () {

    const root = document.documentElement;

    // ================================
    // ENLACE ACTIVO SEGÚN LA SECCIÓN VISIBLE (solo enlaces internos "#...")
    // ================================
    const spyLinks = document.querySelectorAll('.site-header__link[href^="#"], .mobile-menu__link[href^="#"]');
    const spySections = [...new Set([...spyLinks].map(l => l.getAttribute('href')))]
        .filter(href => href.length > 1)
        .map(href => document.querySelector(href))
        .filter(Boolean);

    function updateActiveLink() {
        if (!spySections.length) return;
        const marker = window.innerHeight * 0.35;
        let currentHref = '#';
        spySections.forEach(section => {
            if (section.getBoundingClientRect().top <= marker) currentHref = '#' + section.id;
        });
        spyLinks.forEach(l => l.classList.toggle('is-active', l.getAttribute('href') === currentHref));
    }

    // ================================
    // HEADER: se oculta al bajar y reaparece al subir.
    // Solo usa clases que animan transform/colores (sin cambiar alturas),
    // por eso no provoca saltos ni "rebotes" en el scroll.
    // ================================
    const header = document.getElementById('main-header');
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    let lastScroll = window.scrollY;
    let ticking = false;

    function onScroll() {
        const current = window.scrollY;

        if (header) {
            header.classList.toggle('is-scrolled', current > 20);

            if (root.classList.contains('no-scroll') || current < 200) {
                header.classList.remove('is-hidden');
            } else if (Math.abs(current - lastScroll) > 6) {
                header.classList.toggle('is-hidden', current > lastScroll);
            }
        }

        if (scrollToTopBtn) {
            scrollToTopBtn.classList.toggle('visible', current > 300);
        }

        updateActiveLink();
        lastScroll = current;
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            ticking = true;
            requestAnimationFrame(onScroll);
        }
    }, { passive: true });
    onScroll();

    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ================================
    // MENÚ MÓVIL
    // ================================
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    function setMenu(open) {
        mobileMenu.classList.toggle('is-open', open);
        mobileMenu.setAttribute('aria-hidden', String(!open));
        menuBtn.setAttribute('aria-expanded', String(open));
        menuBtn.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
        root.classList.toggle('no-scroll', open);
        if (header) header.classList.remove('is-hidden');
    }

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            setMenu(!mobileMenu.classList.contains('is-open'));
        });

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => setMenu(false));
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
                setMenu(false);
            }
        });
    }

    // ================================
    // ANIMACIÓN FADE-IN AL HACER SCROLL
    // ================================
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(elem => observer.observe(elem));

    // ================================
    // BOTÓN COPIAR EMAIL (Footer)
    // ================================
    document.querySelectorAll('.footer-bar-copy[data-copy]').forEach(function (btn) {
        btn.addEventListener('click', function () {
            navigator.clipboard.writeText(btn.dataset.copy).then(function () {
                const original = btn.textContent;
                btn.textContent = '✓ Copiado';
                btn.classList.add('copied');
                setTimeout(function () {
                    btn.textContent = original;
                    btn.classList.remove('copied');
                }, 2000);
            });
        });
    });

});
