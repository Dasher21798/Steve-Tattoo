// Funcionalidades del Calendario de Google
document.addEventListener('DOMContentLoaded', function() {
    // Función para mejorar la experiencia del calendario
    function enhanceCalendar() {
        const iframe = document.querySelector('.booking-section iframe');

        if (iframe) {
            // Agregar loading state
            iframe.style.opacity = '0';
            iframe.style.transition = 'opacity 0.5s ease';

            iframe.onload = function() {
                iframe.style.opacity = '1';

                // Intentar acceder al contenido del iframe (limitado por CORS)
                try {
                    // Aquí podríamos agregar funcionalidades adicionales si fuera posible
                    console.log('Calendario cargado correctamente');
                } catch (e) {
                    console.log('Calendario cargado (CORS restrictions apply)');
                }
            };

            // Timeout por si el calendario no carga
            setTimeout(() => {
                if (iframe.style.opacity === '0') {
                    iframe.style.opacity = '1';
                }
            }, 3000);
        }
    }

    // Función para agregar tooltips informativos
    function addTooltips() {
        const calendarSection = document.querySelector('.booking-section');

        if (calendarSection) {
            // Agregar tooltip al hacer hover sobre el calendario
            const tooltip = document.createElement('div');
            tooltip.style.cssText = `
                position: absolute;
                background: var(--glass);
                backdrop-filter: blur(10px);
                border: 1px solid rgba(212, 175, 55, 0.3);
                border-radius: 8px;
                padding: 10px 15px;
                font-size: 0.8rem;
                opacity: 0;
                pointer-events: none;
                transition: opacity 0.3s ease;
                z-index: 100;
                max-width: 250px;
                text-align: center;
            `;
            tooltip.textContent = 'Haz clic en una fecha disponible para crear un evento de reserva';

            calendarSection.style.position = 'relative';
            calendarSection.appendChild(tooltip);

            const iframe = calendarSection.querySelector('iframe');
            if (iframe) {
                iframe.addEventListener('mouseenter', () => {
                    tooltip.style.opacity = '1';
                });

                iframe.addEventListener('mouseleave', () => {
                    tooltip.style.opacity = '0';
                });
            }
        }
    }

    // Función para detectar zona horaria y ajustar automáticamente
    function detectTimezone() {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const iframe = document.querySelector('.booking-section iframe');

        if (iframe && iframe.src.includes('ctz=America%2FCosta_Rica')) {
            // Si el usuario no está en Costa Rica, podríamos sugerir cambiar la zona horaria
            if (!timezone.includes('Costa_Rica') && !timezone.includes('Central')) {
                console.log('Usuario en zona horaria diferente:', timezone);
                // Aquí podríamos agregar lógica para sugerir cambio de zona horaria
            }
        }
    }

    // Inicializar todas las funciones
    enhanceCalendar();
    addTooltips();
    detectTimezone();
});

// Función para actualizar el calendario dinámicamente (útil para desarrollo)
function updateCalendar(calendarId) {
    const iframe = document.querySelector('.booking-section iframe');
    if (iframe && calendarId) {
        const newSrc = iframe.src.replace(/src=[^&]*/, `src=${encodeURIComponent(calendarId)}`);
        iframe.src = newSrc;

        // Remover aviso de calendario no configurado si existe
        const warning = document.querySelector('.calendar-warning');
        if (warning) {
            warning.remove();
        }
    }
}

// Función para cambiar la vista del calendario
function changeCalendarView(view = 'WEEK') {
    const iframe = document.querySelector('.booking-section iframe');
    if (iframe) {
        const newSrc = iframe.src.replace(/mode=[^&]*/, `mode=${view}`);
        iframe.src = newSrc;
    }
}

// Exponer funciones globalmente para uso en consola o botones
window.calendarUtils = {
    updateCalendar,
    changeCalendarView,
    validateCalendar: () => {
        const iframe = document.querySelector('.booking-section iframe');
        return iframe && !iframe.src.includes('TU_CALENDARIO_PERSONAL@gmail.com');
    }
};

// Hacer las funciones disponibles globalmente
window.updateCalendar = updateCalendar;
window.changeCalendarView = changeCalendarView;