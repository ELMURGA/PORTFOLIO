# 📧 Guía de Configuración del Formulario de Contacto

## 🎯 Resumen
Tu portfolio tiene un formulario de contacto funcional en `contacto.html` que enviará los mensajes directamente a tu email: **alejandrohernandemurga@gmail.com**

---

## 🔧 Configuración de Formspree (Servicio Gratuito)

### Paso 1: Crear cuenta en Formspree
1. Ve a [https://formspree.io](https://formspree.io)
2. Haz clic en **"Get Started"** o **"Sign Up"**
3. Regístrate con tu email: **alejandrohernandemurga@gmail.com**
4. Verifica tu cuenta desde el email que te enviarán

### Paso 2: Crear un nuevo formulario
1. Una vez dentro, haz clic en **"+ New Form"**
2. Dale un nombre al formulario (por ejemplo: "Portfolio Contact")
3. Formspree te dará un **endpoint único** como:
   ```
   https://formspree.io/f/XXXXXXXX
   ```
   (donde XXXXXXXX es tu código único)

### Paso 3: Actualizar el código
1. Abre el archivo `contacto.html`
2. Busca la línea 106 (aproximadamente):
   ```html
   <form action="https://formspree.io/f/xanyqjwd" method="POST" class="contact-form-page space-y-6">
   ```
3. Reemplaza `https://formspree.io/f/xanyqjwd` por tu endpoint real
4. Guarda el archivo

### Paso 4: Probar el formulario
1. Abre `contacto.html` en tu navegador
2. Rellena el formulario con datos de prueba
3. Haz clic en **"Enviar Mensaje"**
4. **IMPORTANTE**: La primera vez que uses el formulario, Formspree te pedirá que confirmes tu email
5. Revisa tu bandeja de entrada y confirma
6. ¡Listo! A partir de ahora recibirás todos los mensajes en tu email

---

## 📋 Campos del Formulario

El formulario incluye los siguientes campos:

| Campo | Tipo | Obligatorio | Descripción |
|-------|------|-------------|-------------|
| **Nombre** | Texto | ✅ Sí | Nombre completo del visitante |
| **Email** | Email | ✅ Sí | Email de contacto para responder |
| **Teléfono** | Tel | ❌ No | Teléfono opcional |
| **Asunto** | Texto | ✅ Sí | Tema del mensaje |
| **Mensaje** | Textarea | ✅ Sí | Contenido del mensaje (mínimo 10 caracteres) |

---

## 🎨 Características del Formulario

### ✨ Diseño
- **Validación en tiempo real** de campos obligatorios
- **Diseño responsive** adaptado a móviles y tablets
- **Efectos hover** en campos con borde naranja
- **Iconos de contacto** con degradado naranja
- **Mensajes de éxito/error** con colores distintivos

### 🔐 Seguridad
- **Protección contra spam** incluida en Formspree
- **Validación HTML5** de tipos de datos
- **Envío asíncrono** sin recargar la página

### 📬 Notificaciones
- Recibirás un email en **alejandrohernandemurga@gmail.com** cada vez que alguien envíe el formulario
- El email incluirá:
  - Nombre del remitente
  - Email de respuesta
  - Teléfono (si lo proporcionó)
  - Asunto
  - Mensaje completo

---

## 🚀 Alternativas a Formspree

Si prefieres usar otro servicio, aquí tienes opciones:

### 1. **EmailJS** (Gratuito - 200 emails/mes)
- Web: [https://www.emailjs.com](https://www.emailjs.com)
- Permite enviar emails directamente desde JavaScript
- Más personalizable pero requiere más configuración

### 2. **Netlify Forms** (Si usas Netlify para hosting)
- Integrado automáticamente si despliegas en Netlify
- Muy simple de configurar

### 3. **Web3Forms** (Gratuito - Sin límite)
- Web: [https://web3forms.com](https://web3forms.com)
- Similar a Formspree
- Sin necesidad de cuenta

### 4. **SendGrid** (Para proyectos más grandes)
- Web: [https://sendgrid.com](https://sendgrid.com)
- Plan gratuito: 100 emails/día
- Más profesional para alto volumen

---

## 🛠️ Personalización del Formulario

### Cambiar el texto de los mensajes

**Mensaje de éxito** (línea 203 de script.js):
```javascript
formStatus.textContent = '¡Mensaje enviado con éxito! Te responderé pronto.';
```

**Mensaje de error** (línea 208 de script.js):
```javascript
formStatus.textContent = 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo o contáctame directamente por email.';
```

### Agregar más campos

Si quieres agregar campos adicionales (por ejemplo, "Empresa" o "Presupuesto"), sigue este formato en `contacto.html`:

```html
<div>
    <label for="empresa" class="block text-sm font-semibold mb-2">Empresa (opcional)</label>
    <input type="text" id="empresa" name="empresa" placeholder="Nombre de tu empresa" 
           class="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all">
</div>
```

---

## 📊 Panel de Control de Formspree

Una vez configurado, desde tu cuenta de Formspree podrás:

- ✅ Ver todos los mensajes recibidos
- 📈 Analizar estadísticas de envíos
- 🔔 Configurar notificaciones personalizadas
- 🚫 Activar filtros anti-spam
- 📥 Exportar datos en CSV
- 🔗 Integrar con Slack, Discord, etc.

---

## ❓ Solución de Problemas

### El formulario no envía
1. Verifica que hayas confirmado tu email en Formspree
2. Comprueba que el endpoint en `contacto.html` sea correcto
3. Abre la consola del navegador (F12) para ver errores

### No recibo los emails
1. Revisa la carpeta de SPAM
2. Verifica que el email en Formspree sea **alejandrohernandemurga@gmail.com**
3. Comprueba que hayas confirmado tu cuenta

### El botón "CUÉNTAME TU IDEA" no funciona
- Ya está solucionado en el código actual
- Si persiste, limpia la caché del navegador (Ctrl + Shift + R)

---

## 📱 Información de Contacto Mostrada

La página de contacto muestra:

- **Email**: alejandrohernandemurga@gmail.com
- **Teléfono**: +34 676 448 762
- **Instagram**: @ale_h.m
- **Tiempo de respuesta**: Menos de 24 horas

---

## 🎓 Próximos Pasos

1. ✅ Regístrate en Formspree
2. ✅ Copia tu endpoint único
3. ✅ Actualiza `contacto.html` con tu endpoint
4. ✅ Prueba el formulario
5. ✅ Confirma tu email
6. 🎉 ¡Empieza a recibir mensajes!

---

## 💡 Consejos Pro

- **Responde rápido**: Los clientes valoran la rapidez de respuesta
- **Personaliza tus respuestas**: No uses plantillas genéricas
- **Mantén el formulario simple**: Pocos campos = más conversiones
- **Haz seguimiento**: Si no recibes respuesta, envía un recordatorio amable

---

## 📞 ¿Necesitas ayuda?

Si tienes problemas con la configuración:
1. Revisa la documentación oficial de Formspree: [https://help.formspree.io](https://help.formspree.io)
2. Contacta con soporte de Formspree: support@formspree.io
3. Verifica que todos los archivos estén correctamente subidos a tu servidor

---

**Última actualización**: 11 de noviembre de 2025
**Versión**: 1.0
