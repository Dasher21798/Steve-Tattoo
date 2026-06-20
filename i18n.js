// Sistema de Internacionalización (i18n)
const translations = {
    es: {
        // Navegación
        nav: {
            home: "INICIO",
            infographics: "INFOGRAFÍA",
            awards: "PREMIOS",
            conventions: "CONVENCIONES",
            store: "TIENDA"
        },
        // Header
        header: {
            name: "Steve Quesada",
            specialty: "Especialista en tatuajes orientales"
        },
        // Secciones
        sections: {
            portfolio: "TRABAJOS REALIZADOS",
            booking: "RESERVA TU ESPACIO",
            bookingSubtitle: "Selecciona una fecha disponible y reserva tu cita",
            infographics: "INFOGRAFÍA",
            infographicsSubtitle: "Explora el arte y la técnica detrás de cada tatuaje a través de mis infografías detalladas",
            awards: "PREMIOS",
            awardsSubtitle: "Reconocimientos y logros a lo largo de mi carrera en el arte del tatuaje",
            conventions: "CONVENCIONES",
            conventionsSubtitle: "Próximas convenciones y eventos donde podrás encontrarme exhibiendo mi trabajo",
            store: "TIENDA",
            storeSubtitle: "Descubre artículos exclusivos de Steve Quesada y arte para fans"
        },
        // Footer
        footer: {
            contact: "También puedes contactarme directamente por WhatsApp para consultas personalizadas"
        },
        // Meta
        meta: {
            title: "Steve Quesada Tattoo",
            description: "Especialista en tatuajes orientales tradicionales"
        }
    },
    en: {
        // Navigation
        nav: {
            home: "HOME",
            infographics: "INFOGRAPHICS",
            awards: "AWARDS",
            conventions: "CONVENTIONS",
            store: "STORE"
        },
        // Header
        header: {
            name: "Steve Quesada",
            specialty: "Oriental Tattoo Specialist"
        },
        // Sections
        sections: {
            portfolio: "COMPLETED WORKS",
            booking: "BOOK YOUR SPOT",
            bookingSubtitle: "Select an available date and book your appointment",
            infographics: "INFOGRAPHICS",
            infographicsSubtitle: "Explore the art and technique behind each tattoo through my detailed infographics",
            awards: "AWARDS",
            awardsSubtitle: "Recognitions and achievements throughout my career in the art of tattooing",
            conventions: "CONVENTIONS",
            conventionsSubtitle: "Upcoming conventions and events where you can find me exhibiting my work",
            store: "STORE",
            storeSubtitle: "Discover exclusive Steve Quesada tattoo merchandise and art pieces"
        },
        // Footer
        footer: {
            contact: "You can also contact me directly via WhatsApp for personalized consultations"
        },
        // Meta
        meta: {
            title: "Steve Quesada Tattoo",
            description: "Traditional oriental tattoo specialist"
        }
    }
};

// Estado actual del idioma
let currentLang = localStorage.getItem('language') || 'es';

// Función para cambiar idioma
function changeLanguage(lang) {
    if (!translations[lang]) {
        console.error('Idioma no soportado:', lang);
        return;
    }

    currentLang = lang;
    localStorage.setItem('language', lang);

    // Actualizar atributo lang del HTML
    document.documentElement.lang = lang;

    // Actualizar título de la página según la página actual
    updatePageTitle(lang);

    // Actualizar navegación
    updateNavigation(lang);

    // Actualizar header
    updateHeader(lang);

    // Actualizar secciones
    updateSections(lang);

    // Actualizar footer
    updateFooter(lang);

    // Actualizar selector de idioma
    updateLanguageSelector(lang);

    console.log('Idioma cambiado a:', lang);
}

// Función para actualizar el título de la página
function updatePageTitle(lang) {
    const meta = translations[lang].meta;
    const currentPath = window.location.pathname;

    if (currentPath.includes('infografia')) {
        document.title = `${translations[lang].sections.infographics} - ${meta.title}`;
    } else if (currentPath.includes('premios')) {
        document.title = `${translations[lang].sections.awards} - ${meta.title}`;
    } else if (currentPath.includes('convenciones')) {
        document.title = `${translations[lang].sections.conventions} - ${meta.title}`;
    } else if (currentPath.includes('tienda')) {
        document.title = `${translations[lang].sections.store} - ${meta.title}`;
    } else {
        document.title = meta.title;
    }
}

// Función para actualizar navegación
function updateNavigation(lang) {
    const nav = translations[lang].nav;

    // Actualizar enlaces de navegación
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === 'index.html') link.textContent = nav.home;
        else if (href === 'infografia.html') link.textContent = nav.infographics;
        else if (href === 'premios.html') link.textContent = nav.awards;
        else if (href === 'convenciones.html') link.textContent = nav.conventions;
        else if (href === 'tienda.html') link.textContent = nav.store;
    });
}

// Función para actualizar header
function updateHeader(lang) {
    const header = translations[lang].header;

    const h1 = document.querySelector('header h1');
    const p = document.querySelector('header p');
    const currentPath = window.location.pathname;

    if (currentPath.includes('infografia')) {
        if (h1) h1.textContent = translations[lang].sections.infographics;
    } else if (currentPath.includes('premios')) {
        if (h1) h1.textContent = translations[lang].sections.awards;
    } else if (currentPath.includes('convenciones')) {
        if (h1) h1.textContent = translations[lang].sections.conventions;
    } else if (currentPath.includes('tienda')) {
        if (h1) h1.textContent = translations[lang].sections.store;
    } else {
        if (h1) h1.textContent = header.name;
    }

    if (p) p.textContent = header.specialty;
}

// Función para actualizar secciones
function updateSections(lang) {
    const sections = translations[lang].sections;

    // Actualizar títulos de secciones
    const sectionTitles = document.querySelectorAll('h2');
    sectionTitles.forEach(h2 => {
        if (h2.textContent.includes('TRABAJOS REALIZADOS') || h2.textContent.includes('COMPLETED WORKS')) {
            h2.textContent = sections.portfolio;
        } else if (h2.textContent.includes('RESERVA TU ESPACIO') || h2.textContent.includes('BOOK YOUR SPOT')) {
            h2.textContent = sections.booking;
        } else if (h2.textContent.includes('INFOGRAFÍA') || h2.textContent.includes('INFOGRAPHICS')) {
            h2.textContent = sections.infographics;
        } else if (h2.textContent.includes('PREMIOS') || h2.textContent.includes('AWARDS')) {
            h2.textContent = sections.awards;
        } else if (h2.textContent.includes('CONVENCIONES') || h2.textContent.includes('CONVENTIONS')) {
            h2.textContent = sections.conventions;
        }
    });

    // Actualizar subtítulos de secciones
    const pageSubtitles = document.querySelectorAll('.container > p');
    pageSubtitles.forEach(p => {
        if (p.textContent.includes('Selecciona una fecha disponible') || p.textContent.includes('Select an available date')) {
            p.textContent = sections.bookingSubtitle;
        } else if (p.textContent.includes('Explora el arte') || p.textContent.includes('Explore the art')) {
            p.textContent = sections.infographicsSubtitle;
        } else if (p.textContent.includes('Reconocimientos') || p.textContent.includes('Recognitions')) {
            p.textContent = sections.awardsSubtitle;
        } else if (p.textContent.includes('Próximas convenciones') || p.textContent.includes('Upcoming conventions')) {
            p.textContent = sections.conventionsSubtitle;
        } else if (p.classList.contains('store-subtitle')) {
            p.textContent = sections.storeSubtitle;
        }
    });

    // Actualizar subtítulo de booking
    const bookingSubtitle = document.querySelector('.booking-section p');
    if (bookingSubtitle) {
        bookingSubtitle.textContent = sections.bookingSubtitle;
    }
}

// Función para actualizar footer
function updateFooter(lang) {
    const footer = translations[lang].footer;

    // Buscar el texto de contacto en WhatsApp
    const contactText = document.querySelector('.booking-section div[style*="text-align: center"] p:last-child');
    if (contactText) {
        contactText.textContent = footer.contact;
    }
}

// Función para actualizar selector de idioma
function updateLanguageSelector(lang) {
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
}

// Función para inicializar el sistema de idiomas
function initLanguageSystem() {
    // Crear selector de idioma
    createLanguageSelector();

    // Aplicar idioma actual
    changeLanguage(currentLang);
}

// Función para crear selector de idioma
function createLanguageSelector() {
    const navRight = document.querySelector('.nav-right');

    if (navRight) {
        const langSelector = document.createElement('div');
        langSelector.className = 'language-selector';
        langSelector.innerHTML = `
            <button class="lang-btn" data-lang="es" onclick="changeLanguage('es')">ES</button>
            <button class="lang-btn" data-lang="en" onclick="changeLanguage('en')">EN</button>
        `;

        navRight.appendChild(langSelector);
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initLanguageSystem);

// Exponer función globalmente
window.changeLanguage = changeLanguage;