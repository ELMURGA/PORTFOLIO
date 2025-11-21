/* ================================
   JAVASCRIPT ESPECÍFICO DE CONTACTO.HTML
   ================================ */

document.addEventListener('DOMContentLoaded', function () {
    
    // ================================
    // CONTROLES DEL VIDEO
    // ================================
    const video = document.getElementById('presentationVideo');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const progressBar = document.getElementById('progressBar');
    const timeDisplay = document.getElementById('timeDisplay');
    const muteBtn = document.getElementById('muteBtn');
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    
    if (video && playPauseBtn) {
        // Inicializar tooltips de Bootstrap
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
        
        // Play/Pause
        playPauseBtn.addEventListener('click', function() {
            if (video.paused) {
                video.play();
                playPauseBtn.querySelector('.icon-play').style.display = 'none';
                playPauseBtn.querySelector('.icon-pause').style.display = 'block';
            } else {
                video.pause();
                playPauseBtn.querySelector('.icon-play').style.display = 'block';
                playPauseBtn.querySelector('.icon-pause').style.display = 'none';
            }
        });
        
        // Click en el video también lo pausa/reproduce
        video.addEventListener('click', function() {
            playPauseBtn.click();
        });
        
        // Actualizar barra de progreso
        video.addEventListener('timeupdate', function() {
            const value = (video.currentTime / video.duration) * 100;
            progressBar.value = value;
            progressBar.style.setProperty('--progress', value + '%');
            
            // Actualizar tiempo
            const currentMinutes = Math.floor(video.currentTime / 60);
            const currentSeconds = Math.floor(video.currentTime % 60);
            const durationMinutes = Math.floor(video.duration / 60);
            const durationSeconds = Math.floor(video.duration % 60);
            
            timeDisplay.textContent = 
                `${currentMinutes}:${currentSeconds.toString().padStart(2, '0')} / ${durationMinutes}:${durationSeconds.toString().padStart(2, '0')}`;
        });
        
        // Cambiar posición del video
        progressBar.addEventListener('input', function() {
            const time = (progressBar.value / 100) * video.duration;
            video.currentTime = time;
        });
        
        // Mute/Unmute
        muteBtn.addEventListener('click', function() {
            if (video.muted) {
                video.muted = false;
                muteBtn.querySelector('.icon-volume').style.display = 'block';
                muteBtn.querySelector('.icon-mute').style.display = 'none';
            } else {
                video.muted = true;
                muteBtn.querySelector('.icon-volume').style.display = 'none';
                muteBtn.querySelector('.icon-mute').style.display = 'block';
            }
        });
        
        // Pantalla completa
        fullscreenBtn.addEventListener('click', function() {
            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.webkitRequestFullscreen) {
                video.webkitRequestFullscreen();
            } else if (video.msRequestFullscreen) {
                video.msRequestFullscreen();
            }
        });
        
        // Reiniciar cuando termina
        video.addEventListener('ended', function() {
            playPauseBtn.querySelector('.icon-play').style.display = 'block';
            playPauseBtn.querySelector('.icon-pause').style.display = 'none';
            video.currentTime = 0;
        });
    }
    
    // ================================
    // CONTROLAR COLLAPSE DE BOOTSTRAP
    // ================================
    const portfolioInfoBtn = document.getElementById('portfolioInfoBtn');
    const portfolioInfo = document.getElementById('portfolioInfo');
    const collapseText = document.getElementById('collapseText');
    
    if (portfolioInfoBtn && portfolioInfo) {
        portfolioInfo.addEventListener('show.bs.collapse', function () {
            collapseText.textContent = 'Ocultar Información';
        });
        
        portfolioInfo.addEventListener('hide.bs.collapse', function () {
            collapseText.textContent = 'Más Información Sobre Mi Portfolio';
        });
    }
    
    // ================================
    // MANEJAR ENVÍO DEL FORMULARIO DE CONTACTO
    // ================================
    const contactForm = document.querySelector('.contact-form-page');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formStatus = document.getElementById('form-status');
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.innerHTML;
            
            // Mostrar estado de envío
            submitButton.disabled = true;
            submitButton.innerHTML = '<span>Enviando...</span>';
            
            try {
                const formData = new FormData(contactForm);
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    formStatus.className = 'success text-center p-4 rounded-lg';
                    formStatus.textContent = '¡Mensaje enviado con éxito! Te responderé pronto.';
                    contactForm.reset();
                } else {
                    throw new Error('Error en el envío');
                }
            } catch (error) {
                formStatus.className = 'error text-center p-4 rounded-lg';
                formStatus.textContent = 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo o contáctame directamente por email.';
            } finally {
                submitButton.disabled = false;
                submitButton.innerHTML = originalButtonText;
            }
        });
    }

});
