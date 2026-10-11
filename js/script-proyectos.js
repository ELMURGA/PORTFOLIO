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
    // CLICK EN TARJETA PARA ABRIR MODAL
    // ================================
    projectItems.forEach(item => {
        item.addEventListener('click', function(e) {
            if (e.target.closest('.view-project-btn')) return;
            const btn = this.querySelector('.view-project-btn');
            if (btn) {
                btn.click();
            }
        });
    });

});
