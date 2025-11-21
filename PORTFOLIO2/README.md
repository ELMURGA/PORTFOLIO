# Portfolio - Alejandro Hernández Murga

Portfolio web profesional de diseño gráfico y desarrollo web con elementos multimedia interactivos.

## 📁 Estructura del Proyecto

```
PORTFOLIO2boost/
├── index.html                      # Página principal con Modal de Bootstrap
├── css/                            # Estilos
│   ├── style-common.css            # Estilos compartidos (header, footer, animaciones)
│   ├── style-index.css             # Estilos específicos de la página principal + Modal
│   ├── style-contacto.css          # Estilos específicos de contacto + Video player
│   ├── style-proyectos.css         # Estilos de la página de proyectos
│   └── style-certificados.css      # Estilos de la página de certificados
├── js/                             # Scripts
│   ├── script-common.js            # JavaScript compartido (navegación, scroll)
│   ├── script-index.js             # JavaScript específico del index (Swiper)
│   ├── script-contacto.js          # JavaScript de contacto (formulario + video)
│   └── script-proyectos.js         # JavaScript de proyectos
├── pages/                          # Páginas adicionales
│   ├── contacto.html               # Página de contacto con video y Collapse
│   ├── proyectos.html              # Galería completa de proyectos
│   └── certificados.html           # Página de certificados
├── Imagenes/                       # Recursos gráficos
│   ├── logo/
│   ├── personal/
│   │   ├── mio.png
│   │   └── video-poster.png        # Imagen de portada del video
│   ├── proyectos/
│   └── clientes/
├── videos/                         # 📹 NUEVO: Archivos de video
│   └── README.md                   # Guía para añadir videos
├── documents/                      # Documentos descargables
│   └── CV-Alejandro-Hernandez-Murga.pdf
├── GUIA_FORMULARIO.md              # Documentación del formulario de contacto
├── IMPLEMENTACION_MULTIMEDIA.md    # 📝 Documentación completa de elementos multimedia
├── GUIA_RAPIDA_MULTIMEDIA.md       # 📝 Referencia rápida visual
└── REORGANIZACION_RESUMEN.md       # Resumen de la organización del proyecto
```

## 🎨 Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **Bootstrap 5.3.0** - 🆕 Framework CSS para componentes (Modal, Collapse, Tooltips)
- **Tailwind CSS** - Framework CSS utility-first (CDN)
- **CSS3 personalizado** - Estilos específicos y animaciones
- **JavaScript Vanilla** - Interactividad sin frameworks
- **Swiper.js 11** - Carrusel de logos de clientes
- **Formspree** - Servicio de formulario de contacto
- **Google Fonts** - Archivo Black, Archivo, Inter
- **HTML5 Video API** - 🆕 Reproductor de video personalizado

## 🎯 Características

### Página Principal (index.html)
- **Header sticky** con transparencia dinámica al scroll
- **Hero section** con llamada a la acción
- 🆕 **Modal de Bootstrap** - Información destacada del portfolio
- **Sección "Sobre mí"** con descripción profesional
- **Carrusel de clientes** con Swiper.js (autoplay)
- **Servicios** listados con números 3D
- **Galería de tecnologías** con efecto glow animado
- **Proyectos** en grid responsive con overlays hover
- **Timeline** de formación y experiencia con marcadores naranjas
- **Contacto** con redes sociales (iconos SVG)
- **Botón scroll-to-top** flotante

### Página de Contacto (pages/contacto.html) 🎬
- 🆕 **Video presentación** con:
  - Controles personalizados con CSS
  - Formatos múltiples: MP4, OGG, WebM
  - Imagen poster (portada)
  - Tooltips de Bootstrap en controles
  - Barra de progreso interactiva
  - Display de tiempo
  - Botones: Play/Pause, Mute, Fullscreen
- 🆕 **Collapse de Bootstrap** - Información adicional desplegable
- **Formulario funcional** conectado a Formspree
- **Grid 2 columnas** (información + formulario)
- **Validación** y mensajes de estado (éxito/error)
- **Campos**: nombre, email, teléfono, asunto, mensaje
- **Iconos SVG** para redes sociales

## 🎬 Elementos Multimedia Nuevos

### 🎥 Video Presentación (Contacto)
- Reproductor con controles personalizados
- Imagen de portada: `Imagenes/personal/video-poster.png`
- Compatible con MP4, OGG y WebM
- Tooltips interactivos en cada control
- Hover para mostrar controles
- Click en video para pausar/reproducir

### 🎯 Modal Informativo (Inicio)
- Botón activador con diseño destacado
- Ventana modal con información del portfolio
- 4 feature cards con efectos hover
- Diseño oscuro coherente con la identidad visual
- Call-to-action integrado

### 📂 Collapse de Información (Contacto)
- Botón desplegable con animación suave
- Contenido: Especialidades, Herramientas y Filosofía
- Cards organizados en grid responsive
- Texto dinámico del botón (abre/cierra)

## 🚀 Cómo Usar

1. **Desarrollo local**: Abre `index.html` en tu navegador
2. **Formulario**: Configura Formspree siguiendo `GUIA_FORMULARIO.md`
3. 🆕 **Videos**: Añade tus archivos de video en `/videos/` (ver `videos/README.md`)
4. **Personalización**: 
   - Colores principales: `#ff7a2a` (naranja primario)
   - Modifica contenido en archivos HTML
   - Ajusta estilos en archivos CSS correspondientes

## 📝 Archivos CSS

### style-common.css
Estilos compartidos entre todas las páginas:
- Tipografías y configuración base
- Header con transparencia dinámica
- Botón scroll-to-top
- Animaciones reveal, swing, pop
- Footer y redes sociales
- Iconos SVG

### style-index.css
Estilos específicos de la página principal:
- 🆕 Modal de Bootstrap personalizado
- 🆕 Feature cards con efectos hover
- 🆕 Alert personalizado
- 🆕 Botón activador del modal
- Sección "Sobre mí"
- Efecto glow en galería de tecnologías
- Números 3D en servicios
- Grid de proyectos con overlays
- Timeline de formación y experiencia
- Swiper pagination

### style-contacto.css
Estilos específicos de la página de contacto:
- 🆕 **Video player personalizado**:
  - Contenedor con border-radius y sombras
  - Controles con gradiente naranja
  - Barra de progreso animada
  - Botones circulares con hover effects
  - Display de tiempo estilizado
- 🆕 **Componentes Bootstrap**:
  - Botones con gradiente naranja
  - Cards oscuros personalizados
  - Info boxes con bordes
  - Fix de conflicto Tailwind/Bootstrap
- Iconos de contacto (email, teléfono)
- Formulario con estados focus
- Mensajes de éxito/error

## 📜 Archivos JavaScript

### script-common.js
Funcionalidad compartida:
- Header transparente al scroll
- Botón volver arriba (visible >300px)
- Menú móvil toggle
- Animaciones reveal con IntersectionObserver
- Logo con scroll suave
- Enlaces de navegación con scroll suave

### script-index.js
Funcionalidad específica del index:
- Inicialización de Swiper (clientes)
- 🆕 Modal de Bootstrap (automático)
- Scroll a sección contacto (interno)
- Animación swing en botones CTA

### script-contacto.js
Funcionalidad específica de contacto:
- 🆕 **Controles del video**:
  - Play/Pause con iconos animados
  - Barra de progreso interactiva
  - Display de tiempo dinámico
  - Mute/Unmute
  - Pantalla completa
  - Click en video para pausar
  - Reinicio automático al finalizar
- 🆕 **Tooltips de Bootstrap** inicializados
- 🆕 **Control del Collapse** con texto dinámico
- Envío asíncrono del formulario
- Manejo de estados (enviando, éxito, error)
- Integración con Formspree API

## ⚙️ Componentes Bootstrap Integrados

- ✅ **Modal** (`data-bs-toggle="modal"`) - Ventana informativa
- ✅ **Collapse** (`data-bs-toggle="collapse"`) - Contenido desplegable
- ✅ **Tooltips** (`data-bs-toggle="tooltip"`) - Ayudas contextuales
- ✅ **Cards** (`.card`, `.card-body`) - Contenedores de información
- ✅ **Grid System** (`.row`, `.col-md-6`) - Layout responsive
- ✅ **Buttons** (`.btn`, `.btn-*`) - Botones estilizados

## 🐛 Solución de Conflictos

### Tailwind vs Bootstrap
El proyecto usa ambos frameworks sin conflictos gracias a:
- Orden de carga optimizado (Bootstrap después de Tailwind)
- CSS específico con `!important` para Collapse
- Selectores por ID para evitar sobrescritura
- Script de inicialización al cargar la página

## 📚 Documentación Adicional

- **IMPLEMENTACION_MULTIMEDIA.md** - Guía completa de todos los elementos multimedia
- **GUIA_RAPIDA_MULTIMEDIA.md** - Referencia visual rápida
- **videos/README.md** - Instrucciones para añadir y convertir videos
- **GUIA_FORMULARIO.md** - Configuración del formulario de contacto

## 🔗 Enlaces

- **Email**: alejandrohernandemurga@gmail.com
- **Teléfono**: +34 676 448 762
- **Instagram**: [@ale_h.m](https://www.instagram.com/ale_h.m/)
- **GitHub**: [@ELMURGA](https://github.com/ELMURGA)
- **LinkedIn**: [Alejandro Hernández Murga](https://www.linkedin.com/in/alejandro-hern%C3%A1ndez-murga)

## 📦 Requisitos para Funcionalidad Completa

- [ ] Archivos de video en carpeta `/videos/`:
  - `presentacion.mp4` (principal)
  - `presentacion.ogg` (opcional)
  - `presentacion.webm` (opcional)
- [x] Bootstrap 5 CDN integrado
- [x] Tooltips inicializados
- [x] Formulario conectado a Formspree

## 📄 Licencia

© 2025 Alejandro Hernández Murga. Todos los derechos reservados.
