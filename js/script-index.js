/* ================================
   JAVASCRIPT ESPECÍFICO DE INDEX.HTML
   ================================ */

document.addEventListener('DOMContentLoaded', function () {
    console.log('✅ script-index.js cargado correctamente');
    
    // ================================
    // DATOS DE LOS PROYECTOS
    // ================================
    const projectsData = {
        'matalascanas': {
            title: 'CD Atlético Matalascañas',
            tags: ['Diseño Gráfico', 'Branding', 'Identidad Visual'],
            image: 'Imagenes/proyectos/matalascanas.webp',
            description: 'Desarrollo completo de la identidad visual para el CD Atlético Matalascañas, un club deportivo que necesitaba renovar su imagen de marca.',
            details: `
                <h4>Objetivo del Proyecto</h4>
                <p>Crear una identidad visual moderna y profesional que refleje los valores del club y conecte con la comunidad local.</p>
                
                <h4>Solución Creativa</h4>
                <ul>
                    <li>Diseño de escudo emblemático con elementos representativos</li>
                    <li>Paleta de colores institucional coherente</li>
                    <li>Materiales promocionales y merchandising</li>
                    <li>Guía de uso de marca completa</li>
                </ul>
                
                <h4>Resultados</h4>
                <p>La nueva identidad ha sido adoptada con entusiasmo por la comunidad, fortaleciendo el sentido de pertenencia y profesionalizando la imagen del club.</p>
            `,
            hasWebsite: false
        },
        'cartel': {
            title: 'Cartel Promocional para Evento',
            tags: ['Diseño Gráfico', 'Publicidad', 'Marketing'],
            image: 'Imagenes/proyectos/cartel.webp',
            description: 'Diseño de cartel promocional con estética minimalista y moderna para evento nocturno.',
            details: `
                <h4>Concepto</h4>
                <p>Crear un diseño llamativo que capture la atención del público objetivo usando una paleta de colores limitada pero impactante.</p>
                
                <h4>Características del Diseño</h4>
                <ul>
                    <li>Estética minimalista con máximo impacto visual</li>
                    <li>Uso estratégico de negro y naranja</li>
                    <li>Tipografía moderna y legible</li>
                    <li>Formato optimizado para impresión A3</li>
                </ul>
                
                <h4>Aplicaciones</h4>
                <p>Material impreso para publicidad urbana, versión digital para redes sociales y material promocional en diversos formatos.</p>
            `,
            hasWebsite: false
        },
        'gyot': {
            title: 'Pepe Gotera y Otilio',
            tags: ['Diseño Gráfico', 'Publicidad', 'Canva'],
            image: 'Imagenes/proyectos/gyot.webp',
            description: 'Cartel publicitario para empresa de chapuzas con diseño creativo y llamativo.',
            details: `
                <h4>Objetivo</h4>
                <p>Crear un cartel publicitario llamativo y divertido para una empresa de chapuzas, utilizando personajes reconocibles que conecten con el público.</p>
                
                <h4>Concepto Creativo</h4>
                <p>Inspirado en los icónicos personajes "Pepe Gotera y Otilio", el diseño busca generar simpatía y confianza a través del humor y la nostalgia.</p>
                
                <h4>Proceso de Diseño</h4>
                <ul>
                    <li>Desarrollo conceptual basado en personajes clásicos</li>
                    <li>Composición visual atractiva y legible</li>
                    <li>Paleta de colores llamativa</li>
                    <li>Tipografía clara para información de contacto</li>
                    <li>Diseño optimizado para impresión</li>
                </ul>
                
                <h4>Herramienta</h4>
                <p>Diseñado completamente en Canva, aprovechando sus herramientas de diseño gráfico para crear un resultado profesional y efectivo.</p>
                
                <h4>Aplicación</h4>
                <p>Material publicitario para promoción de servicios de chapuzas y mantenimiento, ideal para carteles urbanos y redes sociales.</p>
            `,
            hasWebsite: false
        },
        'dazenty': {
            title: 'Dazenty – Agencia de Diseño & Desarrollo Web',
            tags: ['Next.js', 'React', 'Branding', 'Desarrollo Web'],
            image: 'Imagenes/proyectos/dazenty.webp',
            description: 'Web de presentación para una agencia creativa que ofrece servicios de diseño gráfico, desarrollo web y branding con enfoque moderno y profesional.',
            details: `
                <h4>Año</h4>
                <p>2026</p>
                
                <h4>Tecnologías</h4>
                <p>Next.js, React, CSS/Sass, Vercel</p>
                
                <h4>Rol</h4>
                <ul>
                    <li>Identidad visual completa</li>
                    <li>Diseño de interfaz (UI)</li>
                    <li>Tipografías y esquema de color</li>
                    <li>Desarrollo del layout principal</li>
                </ul>
                
                <h4>Descripción</h4>
                <p>Sitio de presentación para una agencia creativa orientada a servicios de diseño gráfico, desarrollo web y branding, con un enfoque moderno y profesional.</p>
                
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
        'nextday': {
            title: 'Next Day - Flyer DJ Carlos Berlanga',
            tags: ['Diseño Gráfico', 'Flyer', 'Canva', 'Publicidad'],
            image: 'Imagenes/proyectos/nextday.webp',
            description: 'Flyer promocional para el DJ Carlos Berlanga, diseñado para comunicar sus fechas de actuación.',
            details: `
                <h4>Cliente</h4>
                <p>DJ Carlos Berlanga - Artista y DJ profesional</p>
                
                <h4>Objetivo</h4>
                <p>Crear un diseño llamativo y profesional que informe al público sobre los días y lugares donde el DJ actuará, generando expectativa y asistencia a sus eventos.</p>
                
                <h4>Proceso Creativo</h4>
                <ul>
                    <li>Diseño moderno y atractivo para el público objetivo</li>
                    <li>Tipografía impactante para destacar información clave</li>
                    <li>Composición visual que transmite energía y profesionalismo</li>
                    <li>Información clara sobre fechas y ubicaciones</li>
                    <li>Optimizado para compartir en redes sociales</li>
                </ul>
                
                <h4>Herramienta</h4>
                <p>Diseñado completamente en Canva, aprovechando sus recursos para crear un resultado profesional y efectivo.</p>
                
                <h4>Aplicaciones</h4>
                <ul>
                    <li>Publicación en redes sociales</li>
                    <li>Stories de Instagram y Facebook</li>
                    <li>Material promocional digital</li>
                    <li>Difusión de eventos y fechas</li>
                </ul>
                
                <h4>Resultado</h4>
                <p>Flyer atractivo que comunica efectivamente las actuaciones del DJ y genera engagement con su audiencia.</p>
            `,
            hasWebsite: false
        },
        'proyecto-h': {
            title: 'Goal Wear - Logo Tienda de Camisetas de Fútbol',
            tags: ['Diseño Gráfico', 'Branding', 'Logotipo', 'Canva'],
            image: 'Imagenes/proyectos/goalwear.webp',
            description: 'Diseño de logotipo para Goal Wear, empresa de venta de camisetas de fútbol en Utrera.',
            details: `
                <h4>Empresa</h4>
                <p>Goal Wear - Tienda especializada en camisetas de fútbol</p>
                
                <h4>Ubicación</h4>
                <p>Utrera, Sevilla</p>
                
                <h4>Objetivo</h4>
                <p>Crear una identidad visual que refleje la pasión por el fútbol y atraiga a los aficionados, transmitiendo profesionalidad y autenticidad en la venta de equipaciones deportivas.</p>
                
                <h4>Concepto de Diseño</h4>
                <ul>
                    <li>Logotipo deportivo y moderno</li>
                    <li>Elementos visuales relacionados con el fútbol</li>
                    <li>Colores que transmiten energía y pasión deportiva</li>
                    <li>Tipografía legible y contemporánea</li>
                    <li>Diseño versátil para diferentes aplicaciones</li>
                </ul>
                
                <h4>Herramienta</h4>
                <p>Diseñado completamente en Canva con recursos optimizados para branding deportivo.</p>
                
                <h4>Presencia Digital</h4>
                <p><strong>Instagram:</strong> <a href="https://www.instagram.com/football_wear__utrera/" target="_blank" rel="noopener" style="color: #ff7a2a;">@football_wear__utrera</a></p>
                
                <h4>Aplicaciones</h4>
                <ul>
                    <li>Logo para redes sociales</li>
                    <li>Perfil de Instagram y Facebook</li>
                    <li>Material de marketing digital</li>
                    <li>Señalización de tienda (si aplica)</li>
                    <li>Etiquetas y packaging</li>
                </ul>
                
                <h4>Resultado</h4>
                <p>Identidad visual sólida que posiciona a Goal Wear como referente en la venta de camisetas de fútbol en Utrera.</p>
            `,
            hasWebsite: true,
            websiteUrl: 'https://www.instagram.com/football_wear__utrera/'
        },
        'clubgelves': {
            title: 'Carnet Socio Club Gelves',
            tags: ['Diseño Gráfico', 'Branding', 'Print'],
            image: 'Imagenes/proyectos/clubgelves1.webp',
            images: ['Imagenes/proyectos/clubgelves1.webp', 'Imagenes/proyectos/clubgelves2.webp'], // Múltiples imágenes
            description: 'Diseño de carnet de socio temporada 24-25 con tipografía protagonista y jerarquía clara para datos clave.',
            details: `
                <h4>Temporada</h4>
                <p>2024-2025</p>
                
                <h4>Enfoque de Diseño</h4>
                <p>Tipografía como elemento protagonista con jerarquía visual clara que facilita la lectura de datos importantes del socio.</p>
                
                <h4>Características</h4>
                <ul>
                    <li>Diseño limpio y funcional</li>
                    <li>Jerarquía tipográfica optimizada</li>
                    <li>Información organizada y legible</li>
                    <li>Identidad visual del club integrada</li>
                    <li>Formato estándar de carnet</li>
                </ul>
                
                <h4>Especificaciones Técnicas</h4>
                <ul>
                    <li>Entregable listo para impresión</li>
                    <li>Formato profesional en alta resolución</li>
                    <li>Sistema de color corporativo del club</li>
                    <li>Tipografía seleccionada para máxima legibilidad</li>
                    <li>Diseño de anverso y reverso coordinados</li>
                </ul>
                
                <h4>Imágenes del Proyecto</h4>
                <p>A continuación se muestran el anverso y reverso del carnet de socio:</p>
            `,
            hasWebsite: false
        },
        'costadelsol': {
            title: 'Logo Costa del Sol',
            tags: ['Diseño Gráfico', 'Branding', 'Logotipo'],
            image: 'Imagenes/proyectos/costadelsol.webp',
            description: 'Diseño de logotipo para empresa de comercio mayorista localizada en Marbella, Málaga.',
            details: `
                <h4>Ubicación</h4>
                <p>Marbella, Málaga - Costa del Sol</p>
                
                <h4>Sector de Actividad</h4>
                <p>Comercio al por mayor e intermediarios del comercio, excepto de vehículos de motor y motocicletas.</p>
                <p><strong>Categoría específica:</strong> Comercio al por mayor, no especializado, de productos alimenticios, bebidas y tabaco (CNAE 4639).</p>
                
                <h4>Concepto de Diseño</h4>
                <p>Logotipo que transmite profesionalidad y confianza, representando los valores de una empresa comercial establecida en la Costa del Sol.</p>
                
                <h4>Características del Logo</h4>
                <ul>
                    <li>Diseño profesional y corporativo</li>
                    <li>Identidad visual clara y memorable</li>
                    <li>Adaptable a diferentes formatos y soportes</li>
                    <li>Representación del entorno geográfico (Costa del Sol)</li>
                    <li>Colores que transmiten confianza empresarial</li>
                </ul>
                
                <h4>Aplicaciones</h4>
                <ul>
                    <li>Papelería corporativa</li>
                    <li>Señalización comercial</li>
                    <li>Material promocional</li>
                    <li>Presencia digital y redes sociales</li>
                    <li>Documentación comercial</li>
                </ul>
                
                <h4>Resultado</h4>
                <p>Logotipo profesional que fortalece la identidad corporativa de la empresa y facilita su reconocimiento en el sector del comercio mayorista.</p>
            `,
            hasWebsite: false
        },
        'sevillatp': {
            title: 'Sevilla Tarjetas Plásticas - Sitio Web Corporativo',
            category: 'web',
            image: 'Imagenes/proyectos/web_sevillatp.webp',
            isWeb: true,
            tags: ['Desarrollo Web', 'Diseño Web', 'Branding', 'E-commerce'],
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
            tags: ['Desarrollo Web', 'Diseño Web', 'Branding', 'En Desarrollo'],
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
        'utrewal': {
            title: 'Utrewal - Proyecto Web Interactivo',
            category: 'web',
            image: 'Imagenes/proyectos/utrewal.webp',
            tags: ['Desarrollo Web', 'Frontend', 'JavaScript', 'En Desarrollo'],
            description: 'Proyecto web interactivo con diseño moderno, animaciones fluidas y funcionalidades dinámicas.',
            details: `
                <h4>Sobre el Proyecto</h4>
                <p><strong>Utrewal</strong> es un proyecto web experimental que explora las posibilidades del desarrollo frontend moderno con un enfoque en la experiencia de usuario.</p>
                
                <h4>Concepto</h4>
                <p>Desarrollo de una aplicación web interactiva que combina diseño visual atractivo con funcionalidades dinámicas para crear una experiencia inmersiva.</p>
                
                <h4>Características del Diseño</h4>
                <ul>
                    <li>Interfaz moderna y minimalista</li>
                    <li>Animaciones suaves y transiciones fluidas</li>
                    <li>Diseño responsive para todos los dispositivos</li>
                    <li>Paleta de colores cuidadosamente seleccionada</li>
                    <li>Tipografía legible y estética</li>
                </ul>
                
                <h4>Estado del Proyecto</h4>
                <p><strong>En desarrollo</strong> - El proyecto está en fase activa de desarrollo, implementando nuevas características y mejoras continuas.</p>
                
                <h4>Tecnologías Utilizadas</h4>
                <ul>
                    <li>HTML5 semántico</li>
                    <li>CSS3 con animaciones avanzadas</li>
                    <li>JavaScript vanilla para interactividad</li>
                    <li>GitHub Pages para el hosting</li>
                </ul>
                
                <h4>Próximas Mejoras</h4>
                <ul>
                    <li>Optimización de rendimiento</li>
                    <li>Nuevas secciones de contenido</li>
                    <li>Integración de más funcionalidades interactivas</li>
                    <li>Mejoras en accesibilidad</li>
                </ul>
            `,
            websiteUrl: 'https://elmurga.github.io/VW/',
            hasWebsite: true,
            isWeb: true
        },

        'hermanoshervas': {
            title: 'Hermanos Hervás – Carpintería Artesanal',
            tags: ['Diseño Web', 'Next.js', 'React', 'Branding'],
            image: 'Imagenes/proyectos/web_hermanoshervas.webp',
            isWeb: true,
            description: 'Web corporativa para una empresa familiar de carpintería artesanal, con catálogo de trabajos y formulario de contacto.',
            details: `
                <h4>Año</h4>
                <p>2026</p>

                <h4>Tecnologías</h4>
                <p>Next.js, React, CSS/Sass, Vercel</p>

                <h4>Rol</h4>
                <ul>
                    <li>Diseño de interfaz (UI/UX)</li>
                    <li>Desarrollo frontend completo</li>
                    <li>Identidad visual adaptada al negocio</li>
                </ul>

                <h4>Descripción</h4>
                <p>Web corporativa para una empresa familiar de carpintería artesanal, mostrando su catálogo de trabajos y facilitando el contacto con clientes.</p>

                <h4>Destacados</h4>
                <ul>
                    <li>Diseño cálido y profesional</li>
                    <li>Galería de proyectos realizados</li>
                    <li>Formulario de contacto integrado</li>
                </ul>
            `,
            hasWebsite: true,
            websiteUrl: 'https://hermanos-hervas.vercel.app/'
        },

        'costadelsolfoods': {
            title: 'Costa del Sol Foods & Beverages – Web Internacional',
            tags: ['Diseño Web', 'Next.js', 'React', 'Exportación'],
            image: 'Imagenes/proyectos/web_costadelsol.webp',
            isWeb: true,
            description: 'Plataforma web internacional para empresa exportadora de productos alimenticios de la Costa del Sol.',
            details: `
                <h4>Año</h4>
                <p>2026</p>

                <h4>Tecnologías</h4>
                <p>Next.js, React, CSS/Sass, Vercel</p>

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

        'jcautos': {
            title: 'JOCARS – Concesionario de Vehículos',
            tags: ['Diseño Web', 'Next.js', 'React', 'Automoción'],
            image: 'Imagenes/proyectos/web_jcautos.webp',
            isWeb: true,
            description: 'Web para concesionario de vehículos de ocasión con catálogo, filtros de búsqueda y formulario de contacto.',
            details: `
                <h4>Año</h4>
                <p>2026</p>

                <h4>Tecnologías</h4>
                <p>Next.js, React, CSS/Sass, Vercel</p>

                <h4>Rol</h4>
                <ul>
                    <li>Diseño de interfaz completa</li>
                    <li>Catálogo de vehículos con filtros</li>
                    <li>Desarrollo frontend</li>
                </ul>

                <h4>Descripción</h4>
                <p>Plataforma web para concesionario de vehículos de ocasión, con catálogo dinámico, filtros por precio y categoría, y formulario de contacto directo.</p>

                <h4>Destacados</h4>
                <ul>
                    <li>Catálogo interactivo de vehículos</li>
                    <li>Diseño limpio orientado a conversión</li>
                    <li>Integración de formulario de contacto</li>
                </ul>
            `,
            hasWebsite: true,
            websiteUrl: 'https://www.jocarautomoviles.com'
        },

        'davidvillalba': {
            title: 'David Villalba – Portfolio Personal',
            tags: ['Diseño Web', 'Next.js', 'React', 'Portfolio'],
            image: 'Imagenes/proyectos/web_davidvillalba.webp',
            isWeb: true,
            description: 'Portfolio personal para David Villalba, diseñado para mostrar su trabajo y habilidades de forma visual y profesional.',
            details: `
                <h4>Año</h4>
                <p>2026</p>

                <h4>Tecnologías</h4>
                <p>Next.js, React, CSS/Sass, Vercel</p>

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
            tags: ['Diseño Web', 'Next.js', 'React', 'E-commerce'],
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
            tags: ['Diseño Web', 'Next.js', 'React', 'Tatuaje'],
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
        document.body.style.overflow = 'hidden';
        modal.classList.add('active');
    }

    // Función para cerrar modal
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
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
