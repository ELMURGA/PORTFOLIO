/* ================================
   JAVASCRIPT ESPECÍFICO DE INDEX.HTML
   ================================ */

document.addEventListener('DOMContentLoaded', function () {
    console.log('✅ script-index.js cargado correctamente');
    
    // ================================
    // DATOS DE LOS PROYECTOS
    // ================================
    const projectsData = {
        'dazenty': {
            title: 'Dazenty – Agencia de Desarrollo Web',
            tags: ['Next.js', 'React', 'Sass', 'Vercel'],
            image: 'Imagenes/proyectos/dazenty.webp',
            description: 'Web corporativa para agencia de desarrollo web especializada en frontend, con enfoque moderno y profesional.',
            details: `
                <h4>Año</h4>
                <p>2026</p>
                
                <h4>Tecnologías</h4>
                <p>Next.js, React, CSS/Sass, Vercel</p>
                
                <h4>Rol</h4>
                <ul>
                    <li>Diseño de interfaz (UI)</li>
                    <li>Desarrollo frontend completo</li>
                    <li>Tipografías y esquema de color</li>
                    <li>Despliegue y optimización en Vercel</li>
                </ul>
                
                <h4>Descripción</h4>
                <p>Sitio web corporativo para agencia de desarrollo web, orientado a captar clientes y mostrar portafolio de proyectos con un enfoque moderno y profesional.</p>
                
                <h4>Destacados</h4>
                <ul>
                    <li>Performance y despliegue en Vercel</li>
                    <li>UI limpia y visual</li>
                    <li>Estructura preparada para escalar portafolio</li>
                </ul>
                
                <h4>Resultado</h4>
                <p>Plataforma profesional para mostrar portafolio y captar clientes potenciales.</p>
            `,
            hasWebsite: true,
            websiteUrl: 'https://dazenty.com',
            isWeb: true
        },

        'sevillatp': {
            title: 'Sevilla Tarjetas Plásticas - Sitio Web Corporativo',
            category: 'web',
            image: 'Imagenes/proyectos/web_sevillatp.webp',
            isWeb: true,
            tags: ['HTML5', 'CSS3', 'JavaScript', 'E-commerce'],
            description: 'Diseño y desarrollo web para empresa especializada en tarjetas plásticas PVC, impresión y rotulación en Sevilla.',
            details: `
                <h4>Sobre el Cliente</h4>
                <p><strong>Sevilla Tarjetas Plásticas</strong> es una empresa sevillana especializada en la fabricación y distribución de tarjetas plásticas PVC con diferentes tecnologías (códigos de barras, banda magnética, RFID, MIFARE), además de servicios de impresión en papel, lonas, vinilos, textil y rotulación.</p>
                
                <h4>Objetivo del Proyecto</h4>
                <p>Crear una presencia online profesional que muestre todos los servicios de la empresa, facilite el contacto con clientes y permita solicitar presupuestos online, compensando la ausencia de oficina física de venta al público.</p>
                
                <h4>Servicios Destacados</h4>
                <ul>
                    <li><strong>Tarjetas plásticas PVC</strong> - Producto estrella de la empresa</li>
                    <li>Tarjetas con tecnología RFID y MIFARE</li>
                    <li>Tarjetas con banda magnética y códigos de barras</li>
                    <li>Rotulación, impresión, vinilos y serigrafía</li>
                    <li>Impresión en papel, lonas y textil</li>
                    <li>Sistemas de control de accesos</li>
                    <li>Impresiones desde la primera unidad</li>
                    <li>Entregas express en 24-72 horas</li>
                </ul>
                
                <h4>Características del Diseño Web</h4>
                <ul>
                    <li>Diseño web responsive y profesional</li>
                    <li>Catálogo visual completo de productos y servicios</li>
                    <li>Formulario de contacto y solicitud de presupuestos</li>
                    <li>Galería de trabajos realizados para clientes</li>
                    <li>Información detallada por secciones especializadas</li>
                    <li>Navegación intuitiva y optimizada para conversión</li>
                    <li>Integración con redes sociales</li>
                </ul>
                
                <h4>Estrategia Digital</h4>
                <p>La web permite gestionar todos los pedidos a través de internet, ofreciendo precios competitivos al no tener gastos de oficina física, manteniendo la profesionalidad necesaria para el mercado B2B y B2C.</p>
                
                <h4>Contacto</h4>
                <p>Plaza San Gabriel 2, 41009, Sevilla</p>
                <p>📞 951.89.44.77 | 📱 699.14.63.37</p>
                
                <h4>Público Objetivo</h4>
                <ul>
                    <li>Red de vendedores y distribuidores del gremio de impresión</li>
                    <li>Empresas con necesidades de tarjetas corporativas</li>
                    <li>Negocios que requieren control de accesos</li>
                    <li>Comercios que necesitan tarjetas regalo o fidelización</li>
                </ul>
                
                <h4>Resultados</h4>
                <p>Sitio web funcional que ha consolidado la presencia digital de la empresa, facilitando la captación de clientes y la gestión eficiente de pedidos con plazos de entrega desde 24 horas hasta 7-10 días laborables según necesidades.</p>
            `,
            websiteUrl: 'https://www.sevillatarjetasplasticas.com',
            hasWebsite: true
        },
        'pinturasmerpa': {
            title: 'Pinturas Merpa - Sitio Web Corporativo',
            category: 'web',
            image: 'Imagenes/proyectos/web_pinturasmerpa.webp',
            isWeb: true,
            tags: ['HTML5', 'CSS3', 'JavaScript', 'En Desarrollo'],
            description: 'Diseño y desarrollo web para empresa de pinturas profesionales con catálogo de productos y servicios especializados.',
            details: `
                <h4>Sobre el Cliente</h4>
                <p><strong>Pinturas Merpa</strong> es una empresa especializada en la venta y distribución de pinturas profesionales para todo tipo de superficies y proyectos.</p>
                
                <h4>Objetivo del Proyecto</h4>
                <p>Crear una presencia digital profesional que muestre el catálogo completo de productos, facilite la comunicación con clientes y posicione a la empresa como referente en el sector de pinturas.</p>
                
                <h4>Características del Diseño Web</h4>
                <ul>
                    <li>Diseño web responsive y atractivo</li>
                    <li>Catálogo de productos organizado por categorías</li>
                    <li>Paleta de colores profesional y corporativa</li>
                    <li>Navegación intuitiva y accesible</li>
                    <li>Formulario de contacto integrado</li>
                </ul>
                
                <h4>Estado del Proyecto</h4>
                <p><strong>En desarrollo</strong> - El sitio web está actualmente en fase de construcción, añadiendo nuevas funcionalidades y contenido.</p>
                
                <h4>Tecnologías</h4>
                <p>HTML5, CSS3, JavaScript, diseño responsive</p>
                
                <h4>Próximas Funcionalidades</h4>
                <ul>
                    <li>Galería de proyectos realizados</li>
                    <li>Calculadora de cantidad de pintura</li>
                    <li>Sección de consejos y tutoriales</li>
                    <li>Sistema de solicitud de presupuestos</li>
                </ul>
            `,
            websiteUrl: 'https://pinturasmerpa.vercel.app',
            hasWebsite: true
        },

        'hermanoshervas': {
            title: 'Hermanos Hervás – Restaurante & Eventos',
            tags: ['Next.js', 'React', 'Sass', 'Vercel'],
            image: 'Imagenes/proyectos/web_hermanoshervas.webp',
            isWeb: true,
            description: 'Web corporativa para restaurante familiar con carta interactiva, salón de celebraciones y sistema de reservas online.',
            details: `
                <h4>Año</h4>
                <p>2026</p>

                <h4>Tecnologías</h4>
                <p>Next.js, React, CSS/Sass, Vercel</p>

                <h4>Rol</h4>
                <ul>
                    <li>Diseño de interfaz (UI/UX)</li>
                    <li>Desarrollo frontend completo</li>
                    <li>Identidad visual y carta interactiva</li>
                </ul>

                <h4>Descripción</h4>
                <p>Sitio web para el Restaurante Hermanos Hervás 'La Pachanga' en Los Palacios y Villafranca, Sevilla. Presenta su cocina andaluza tradicional, especialidad en arroces, menú del día y salones para celebraciones.</p>

                <h4>Destacados</h4>
                <ul>
                    <li>Carta interactiva en línea</li>
                    <li>Integración de reserva de mesa</li>
                    <li>Diseño moderno y totalmente adaptado a móviles</li>
                </ul>
            `,
            hasWebsite: true,
            websiteUrl: 'https://hermanos-hervas.vercel.app/'
        },

        'costadelsolfoods': {
            title: 'Costa del Sol Foods & Beverages – Web Internacional',
            tags: ['HTML5', 'CSS3', 'JavaScript', 'Exportación'],
            image: 'Imagenes/proyectos/web_costadelsol.webp',
            isWeb: true,
            description: 'Plataforma web internacional para empresa exportadora de productos alimenticios de la Costa del Sol.',
            details: `
                <h4>Año</h4>
                <p>2026</p>

                <h4>Tecnologías</h4>
                <p>HTML5, CSS3, JavaScript</p>

                <h4>Rol</h4>
                <ul>
                    <li>Diseño y desarrollo web completo</li>
                    <li>Versión multiidioma</li>
                    <li>Catálogo de productos</li>
                </ul>

                <h4>Descripción</h4>
                <p>Web internacional para empresa exportadora de productos alimenticios y bebidas típicas de la Costa del Sol, orientada a mercados exteriores.</p>

                <h4>Destacados</h4>
                <ul>
                    <li>Diseño orientado a mercados internacionales</li>
                    <li>Catálogo visual de productos</li>
                    <li>Formulario de contacto B2B</li>
                </ul>
            `,
            hasWebsite: true,
            websiteUrl: 'https://costa-del-sol-foods-beverages-int.vercel.app/'
        },

        'jocars': {
            title: 'JoCar Automóviles – Concesionario Premium',
            tags: ['HTML5', 'CSS3', 'JavaScript'],
            image: 'Imagenes/proyectos/web_jcautos.webp',
            isWeb: true,
            description: 'Web para concesionario de vehículos de ocasión premium con catálogo interactivo, filtros de búsqueda y tasación instantánea.',
            details: `
                <h4>Año</h4>
                <p>2026</p>

                <h4>Tecnologías</h4>
                <p>HTML5, CSS3, JavaScript, PHP/Sanity</p>

                <h4>Rol</h4>
                <ul>
                    <li>Diseño de interfaz de usuario</li>
                    <li>Catálogo de vehículos con filtros avanzados</li>
                    <li>Integración de tasación exprés vía WhatsApp</li>
                </ul>

                <h4>Descripción</h4>
                <p>Plataforma para JoCar Automóviles en Utrera, Sevilla, ofreciendo vehículos de ocasión premium 100% revisados, con IVA deducible, garantía y financiación a medida.</p>

                <h4>Destacados</h4>
                <ul>
                    <li>Catálogo dinámico interactivo con filtros por precio y categoría</li>
                    <li>Diseño premium oscuro alineado con coches de alta gama</li>
                    <li>Enlaces directos a tasación y soporte instantáneo</li>
                </ul>
            `,
            hasWebsite: true,
            websiteUrl: 'https://www.jocarautomoviles.com'
        },

        'davidvillalba': {
            title: 'David Villalba – Portfolio Personal',
            tags: ['HTML5', 'CSS3', 'JavaScript', 'Portfolio'],
            image: 'Imagenes/proyectos/web_davidvillalba.webp',
            isWeb: true,
            description: 'Portfolio personal para David Villalba, diseñado para mostrar su trabajo y habilidades de forma visual y profesional.',
            details: `
                <h4>Año</h4>
                <p>2026</p>

                <h4>Tecnologías</h4>
                <p>HTML5, CSS3, JavaScript</p>

                <h4>Rol</h4>
                <ul>
                    <li>Diseño y desarrollo completo</li>
                    <li>Identidad visual personalizada</li>
                    <li>Animaciones y transiciones</li>
                </ul>

                <h4>Descripción</h4>
                <p>Portfolio profesional desarrollado a medida para presentar proyectos, habilidades y experiencia de David Villalba de forma visual e impactante.</p>

                <h4>Destacados</h4>
                <ul>
                    <li>Diseño visual e impactante</li>
                    <li>Animaciones fluidas</li>
                    <li>Optimizado para reclutadores y clientes</li>
                </ul>
            `,
            hasWebsite: true,
            websiteUrl: 'https://david-villalba.com'
        },

        'jandula': {
            title: 'Jándula Moda Utrera – Tienda de Moda',
            tags: ['Next.js', 'React', 'Supabase', 'Sanity'],
            image: 'Imagenes/proyectos/newweb-jandula.webp',
            isWeb: true,
            description: 'Web para tienda de moda local en Utrera, con catálogo de productos y colecciones de temporada.',
            details: `
                <h4>Año</h4>
                <p>2026</p>

                <h4>Tecnologías</h4>
                <p>Next.js, React, CSS/Sass, Vercel</p>

                <h4>Rol</h4>
                <ul>
                    <li>Diseño de identidad visual</li>
                    <li>Desarrollo web completo</li>
                    <li>Catálogo de colecciones</li>
                </ul>

                <h4>Descripción</h4>
                <p>Sitio web para tienda de moda local en Utrera, con catálogo de colecciones, secciones de novedades y contacto directo con la tienda.</p>

                <h4>Destacados</h4>
                <ul>
                    <li>Estética fashion y elegante</li>
                    <li>Catálogo visual de colecciones</li>
                    <li>Optimizado para móvil</li>
                </ul>
            `,
            hasWebsite: true,
            websiteUrl: 'https://jandulamodautrera.es'
        },

        'pavistatto': {
            title: 'Pavis Tattoo – Estudio de Tatuajes',
            tags: ['Next.js', 'React', 'Sass'],
            image: 'Imagenes/proyectos/web_pavistatto.webp',
            isWeb: true,
            description: 'Web para estudio de tatuajes con galería de trabajos, información del artista y formulario de cita previa.',
            details: `
                <h4>Año</h4>
                <p>2025</p>

                <h4>Tecnologías</h4>
                <p>Next.js, React, CSS/Sass, Vercel</p>

                <h4>Rol</h4>
                <ul>
                    <li>Diseño visual oscuro y artístico</li>
                    <li>Galería de trabajos</li>
                    <li>Desarrollo frontend completo</li>
                </ul>

                <h4>Descripción</h4>
                <p>Sitio web para estudio de tatuajes con galería de trabajos realizados, presentación del artista y formulario de solicitud de cita previa.</p>

                <h4>Destacados</h4>
                <ul>
                    <li>Diseño oscuro y artístico</li>
                    <li>Galería visual de tatuajes</li>
                    <li>Sistema de cita previa</li>
                </ul>
            `,
            hasWebsite: false
        }
    };

    // ================================
    // MODAL DE PROYECTOS
    // ================================
    const modal = document.getElementById('project-modal');
    if (!modal) {
        console.warn('⚠️ Modal no encontrado en esta página');
        return; // Si no hay modal, salir
    }
    console.log('✅ Modal encontrado, inicializando...');
    
    const modalOverlay = modal.querySelector('.project-modal-overlay');
    const modalClose = modal.querySelector('.project-modal-close');
    const viewProjectBtns = document.querySelectorAll('.view-project-btn');
    let _modalScrollY = 0;

    // Detectar si estamos en la página de proyectos
    const isProyectosPage = window.location.pathname.includes('proyectos.html');
    const imagePrefix = isProyectosPage ? '../' : '';
    console.log('📍 Pathname:', window.location.pathname);
    console.log('📍 isProyectosPage:', isProyectosPage);
    console.log('📍 imagePrefix:', imagePrefix);

    // Función para abrir modal
    function openModal(projectId) {
        const project = projectsData[projectId];
        if (!project) {
            console.error('❌ Proyecto no encontrado:', projectId);
            return;
        }
        
        console.log('📦 Proyecto encontrado:', project.title);
        console.log('🖼️ Ruta de imagen:', project.image);
        console.log('🔗 Ruta final:', imagePrefix + project.image);

        // Rellenar contenido del modal con ruta ajustada
        document.getElementById('modal-project-title').textContent = project.title;
        document.getElementById('modal-project-description').textContent = project.description;
        
        // Aplicar clase is-web para proyectos de captura de pantalla web
        const modalBody = document.querySelector('.project-modal-body');
        if (modalBody) {
            if (project.isWeb) { modalBody.classList.add('is-web'); }
            else { modalBody.classList.remove('is-web'); }
        }

        // Manejar múltiples imágenes o una sola
        const imageContainer = document.querySelector('.project-modal-image');
        if (project.images && project.images.length > 1) {
            // Múltiples imágenes - mostrarlas en vertical
            imageContainer.innerHTML = project.images.map(img => 
                `<img src="${imagePrefix}${img}" alt="${project.title}" style="width: 100%; margin-bottom: 1rem;">`
            ).join('');
        } else {
            // Una sola imagen
            imageContainer.innerHTML = `<img id="modal-project-image" src="${imagePrefix}${project.image}" alt="${project.title}">`;
        }
        
        document.getElementById('modal-project-details').innerHTML = project.details;

        // Tags
        const tagsContainer = document.getElementById('modal-project-tags');
        tagsContainer.innerHTML = project.tags.map(tag => 
            `<span class="project-tag">${tag}</span>`
        ).join('');

        // Botones de acción
        const actionsContainer = document.getElementById('modal-project-footer');
        const contactoPath = isProyectosPage ? 'contacto.html' : 'pages/contacto.html';
        
        if (project.hasWebsite) {
            actionsContainer.innerHTML = `
                <a href="${project.websiteUrl}" target="_blank" rel="noopener noreferrer" class="project-modal-btn project-modal-btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Visitar Sitio Web
                </a>
                <a href="${contactoPath}" class="project-modal-btn project-modal-btn-secondary">
                    Solicitar Información
                </a>
            `;
        } else {
            actionsContainer.innerHTML = `
                <a href="${contactoPath}" class="project-modal-btn project-modal-btn-primary">
                    Contactar para más detalles
                </a>
            `;
        }

        // Mostrar modal
        _modalScrollY = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.top = '-' + _modalScrollY + 'px';
        document.body.style.width = '100%';
        document.body.style.overflow = 'hidden';
        modal.classList.add('active');
    }

    // Función para cerrar modal
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, _modalScrollY);
    }

    // Event listeners para todos los botones de "Ver Proyecto"
    if (viewProjectBtns.length > 0) {
        console.log(`✅ Encontrados ${viewProjectBtns.length} botones de proyecto`);
        viewProjectBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                const projectId = btn.getAttribute('data-project');
                console.log('🔄 Abriendo proyecto:', projectId);
                openModal(projectId);
            });
        });
    } else {
        console.warn('⚠️ No se encontraron botones .view-project-btn');
    }

    if (modalOverlay) modalOverlay.addEventListener('click', closeModal);
    if (modalClose) modalClose.addEventListener('click', closeModal);

    // Cerrar con tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
    
    // ================================
    // INICIALIZAR SWIPER DE CLIENTES
    // ================================
    const swiperElement = document.querySelector('.client-swiper');
    if (swiperElement && typeof Swiper !== 'undefined') {
        const clientSwiper = new Swiper('.client-swiper', {
            loop: true,
            slidesPerView: 2,
            spaceBetween: 20,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            breakpoints: {
                768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                },
            },
        });
    }

    // ================================
    // SCROLL SUAVE A CONTACTO (SOLO INTERNO)
    // ================================
    const ctaButtons = document.querySelectorAll('a.cta-contact');
    const contactSection = document.querySelector('#contacto');

    if (ctaButtons.length > 0) {
        ctaButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Solo interceptar si el enlace apunta a #contacto (no a pages/contacto.html)
                if (btn.getAttribute('href') !== 'pages/contacto.html' && contactSection) {
                    e.preventDefault();

                    // Añade animación de swing al botón clicado
                    btn.classList.remove('swing-once');
                    void btn.offsetWidth;
                    btn.classList.add('swing-once');

                    // Calcular posición teniendo en cuenta el header sticky
                    const header = document.querySelector('header');
                    const headerHeight = header ? header.offsetHeight : 0;
                    const targetY = contactSection.getBoundingClientRect().top + window.pageYOffset - (headerHeight + 16);

                    window.scrollTo({ top: targetY, behavior: 'smooth' });
                }
            });
        });
    }

});
