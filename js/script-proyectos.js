/* ================================
   SCRIPT ESPECÍFICO PARA PROYECTOS.HTML
   ================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    // ================================
    // FILTRADO DE PROYECTOS
    // ================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Añadir clase active al botón clickeado
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            projectItems.forEach(item => {
                if (filterValue === 'all') {
                    item.classList.remove('hidden');
                    setTimeout(() => {
                        item.style.display = 'block';
                    }, 10);
                } else {
                    const categories = item.getAttribute('data-category').split(' ');
                    if (categories.includes(filterValue)) {
                        item.classList.remove('hidden');
                        setTimeout(() => {
                            item.style.display = 'block';
                        }, 10);
                    } else {
                        item.classList.add('hidden');
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 400);
                    }
                }
            });
        });
    });

    // ================================
    // ANIMACIÓN AL HACER SCROLL
    // ================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // ================================
    // CLICK EN PROYECTO (opcional: abrir en modal o nueva página)
    // ================================
    projectItems.forEach(item => {
        item.addEventListener('click', function() {
            // Aquí puedes añadir funcionalidad adicional
            // Por ejemplo, abrir un modal con más detalles del proyecto
            console.log('Proyecto clickeado:', this.querySelector('.project-title-gallery').textContent);
        });
    });

    // ================================
    // SMOOTH SCROLL PARA SECCIONES
    // ================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

});
