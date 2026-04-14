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
    // MODAL DE PROYECTO
    // ================================
    const modal = document.getElementById('project-modal');
    const modalImage = document.getElementById('modal-project-image');
    const modalTitle = document.getElementById('modal-project-title');
    const modalDescription = document.getElementById('modal-project-description');
    const modalTags = document.getElementById('modal-project-tags');
    const modalClose = document.querySelector('.project-modal-close');
    const modalOverlay = document.querySelector('.project-modal-overlay');

    function openModal(article) {
        const img = article.querySelector('.project-img-gallery');
        const title = article.querySelector('.project-title-gallery');
        const desc = article.querySelector('.project-desc-gallery');
        const tags = article.querySelectorAll('.tag-gallery');

        modalImage.src = img ? img.src : '';
        modalImage.alt = img ? img.alt : '';
        modalTitle.textContent = title ? title.textContent : '';
        modalDescription.textContent = desc ? desc.textContent : '';
        modalTags.innerHTML = Array.from(tags).map(t => `<span class="tag-gallery">${t.textContent}</span>`).join('');

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => { modalImage.src = ''; }, 300);
    }

    document.querySelectorAll('.view-project-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const article = this.closest('.project-item');
            if (article) openModal(article);
        });
    });

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalOverlay) modalOverlay.addEventListener('click', closeModal);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

    // ================================
    // CLICK EN PROYECTO (opcional: abrir en modal o nueva página)
    // ================================
    projectItems.forEach(item => {
        item.addEventListener('click', function() {
            openModal(this);
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
