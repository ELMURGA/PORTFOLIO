/* ================================
   JAVASCRIPT COMÚN - Compartido entre todas las páginas
   ================================ */

document.addEventListener('DOMContentLoaded', function () {
    
    // ================================
    // HEADER TRANSPARENTE Y REDUCIDO AL HACER SCROLL
    // ================================
    const header = document.getElementById('main-header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.classList.add('scrolled');
            
            // Si hacemos scroll hacia abajo, reducir el header
            if (currentScroll > lastScroll && currentScroll > 150) {
                header.classList.add('shrink');
            } 
            // Si hacemos scroll hacia arriba, restaurar el header
            else if (currentScroll < lastScroll) {
                header.classList.remove('shrink');
            }
        } else {
            header.classList.remove('scrolled');
            header.classList.remove('shrink');
        }
        
        lastScroll = currentScroll;
    });

    // ================================
    // BOTÓN VOLVER ARRIBA
    // ================================
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ================================
    // MENÚ MÓVIL
    // ================================
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    
    // Cerrar menú cuando se hace clic en un enlace
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // ================================
    // ANIMACIÓN FADE-IN AL HACER SCROLL
    // ================================
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(elem => {
        observer.observe(elem);
    });

    // ================================
    // LOGO: SCROLL SUAVE AL INICIO (solo en página actual con #)
    // ================================
    const logoLink = document.querySelector('.logo a');
    if (logoLink) {
        logoLink.addEventListener('click', (e) => {
            const href = logoLink.getAttribute('href');
            
            // Solo prevenir y hacer scroll si el enlace es "#" (misma página)
            if (href === '#') {
                e.preventDefault();

                // Aplica animación suave al logo
                const img = logoLink.querySelector('img');
                if (img) {
                    img.classList.remove('logo-tap');
                    void img.offsetWidth; // Reinicia la animación
                    img.classList.add('logo-tap');
                }

                // Scroll suave al inicio
                window.scrollTo({ top: 0, behavior: 'smooth' });
                
                // Pequeña corrección opcional al terminar
                setTimeout(() => {
                    const y = Math.max(window.pageYOffset - 8, 0);
                    if (y !== window.pageYOffset) {
                        window.scrollTo({ top: y, behavior: 'instant' });
                    }
                }, 380);
            }
            // Si el href es otra URL (../index.html), dejar que navegue normalmente
        });
    }

    // ================================
    // ENLACES DE NAVEGACIÓN CON SCROLL SUAVE
    // Solo para enlaces internos con #
    // ================================
    const navTargets = [
        { linkSelector: 'a[href="#que-hago"]', sectionSelector: '#que-hago', titleSelector: '#que-hago h2' },
        { linkSelector: 'a[href="#formacion"]', sectionSelector: '#formacion', titleSelector: '#formacion h2' },
        { linkSelector: 'a[href="#proyectos"]', sectionSelector: '#proyectos', titleSelector: '#proyectos h2' },
    ];

    navTargets.forEach(({ linkSelector, sectionSelector, titleSelector }) => {
        document.querySelectorAll(linkSelector).forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const section = document.querySelector(sectionSelector);
                const title = document.querySelector(titleSelector);
                if (!section) return;

                const header = document.querySelector('header');
                const headerHeight = header ? header.offsetHeight : 0;
                const y = section.getBoundingClientRect().top + window.pageYOffset - (headerHeight + 16);
                window.scrollTo({ top: y, behavior: 'smooth' });

                // Resalte sutil del h2 al llegar
                setTimeout(() => {
                    if (title) {
                        title.classList.remove('section-pop');
                        void title.offsetWidth;
                        title.classList.add('section-pop');
                    }
                }, 500);
            });
        });
    });

});
