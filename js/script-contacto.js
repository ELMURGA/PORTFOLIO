/* ================================
   JAVASCRIPT ESPECÍFICO DE CONTACTO.HTML
   ================================ */

document.addEventListener('DOMContentLoaded', function () {
    
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
