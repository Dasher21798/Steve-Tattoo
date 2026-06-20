# Configuración del Calendario de Google - Steve Quesada Tattoo

## 📅 Cómo Conectar Tu Calendario Personal

Sigue estos pasos para conectar tu calendario de Google personal al sitio web:

### Paso 1: Acceder a Google Calendar
1. Ve a [calendar.google.com](https://calendar.google.com)
2. Inicia sesión con tu cuenta de Google

### Paso 2: Hacer Público el Calendario
1. En el panel izquierdo, encuentra tu calendario principal
2. Haz clic en los 3 puntos (⋮) junto al nombre del calendario
3. Selecciona **"Configuración e intercambio"**

### Paso 3: Configurar el Acceso Público
1. Desplázate hasta la sección **"Acceso público"**
2. Marca la opción **"Hacer que este calendario sea público"**
3. Copia el **"ID del calendario"** (normalmente es tu dirección de email)

### Paso 4: Actualizar el Sitio Web
1. Abre el archivo `index.html`
2. Busca la línea que contiene `TU_CALENDARIO_PERSONAL@gmail.com`
3. Reemplaza ese texto con tu ID de calendario real
4. Guarda el archivo y actualiza el sitio

### Ejemplo de URL
```html
<iframe src="https://calendar.google.com/calendar/embed?src=tuemail@gmail.com&ctz=America%2FCosta_Rica&mode=WEEK&showCalendars=0&showTz=1&wkst=1&bgcolor=%23080808&color=%23d4af37"
        style="border: 0"
        width="100%"
        height="650px"
        frameborder="0"
        scrolling="no">
</iframe>
```

## ⚙️ Parámetros del Calendario

- `src`: ID de tu calendario de Google
- `ctz`: Zona horaria (America/Costa_Rica)
- `mode`: Vista del calendario (WEEK, MONTH, AGENDA)
- `showCalendars`: Mostrar/ocultar lista de calendarios (0 = oculto)
- `showTz`: Mostrar zona horaria (1 = sí)
- `wkst`: Día de inicio de semana (1 = lunes)
- `bgcolor`: Color de fondo
- `color`: Color del texto y eventos

## 🛠️ Funciones JavaScript Disponibles

El archivo `calendar.js` incluye funciones útiles:

```javascript
// Actualizar calendario dinámicamente
window.calendarUtils.updateCalendar('tuemail@gmail.com');

// Cambiar vista del calendario
window.calendarUtils.changeCalendarView('MONTH');

// Validar si el calendario está configurado
window.calendarUtils.validateCalendar(); // Retorna true si está configurado
```

## 📱 Configuración Móvil

El calendario está optimizado para dispositivos móviles y se adapta automáticamente al tamaño de pantalla.

## 🔒 Privacidad

- El calendario debe ser público para que aparezca en el sitio web
- Solo se mostrarán los eventos marcados como públicos
- Los usuarios pueden crear eventos directamente desde el calendario embebido

## ❗ Solución de Problemas

### El calendario no aparece
- Verifica que el calendario esté marcado como público
- Confirma que el ID del calendario sea correcto
- Revisa que no haya errores de sintaxis en la URL

### Los colores no coinciden
- Ajusta los parámetros `bgcolor` y `color` en la URL
- Los colores deben estar en formato hexadecimal

### Problemas de zona horaria
- Verifica el parámetro `ctz` esté configurado correctamente
- Para Costa Rica: `America%2FCosta_Rica`

## 📞 Soporte

Si tienes problemas con la configuración del calendario, puedes:
1. Revisar la documentación de Google Calendar
2. Verificar los permisos de tu calendario
3. Contactar soporte técnico si es necesario

---

**Última actualización:** Marzo 2026</content>
<parameter name="filePath">/Users/andress/Documents/Steve page/CALENDARIO_README.md