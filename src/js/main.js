/**
 * MAIN JS
 * Archivo principal de JavaScript - Inicializa la aplicación
 */

// Prevenir transiciones durante la carga
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('preload');
    
    // Remover clase preload después de que cargue
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.body.classList.remove('preload');
        }, 100);
    });
});

/**
 * Inicializar el CV cuando el DOM esté listo
 */
document.addEventListener('DOMContentLoaded', async () => {
    // Crear instancia del loader
    const cvLoader = new CVDataLoader();
    
    // Inicializar y cargar datos
    await cvLoader.init('app');
    
    // Inicializar animaciones después de cargar
    initScrollAnimations();
    initSmoothScroll();
});

/**
 * Animaciones al hacer scroll (opcional)
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observar elementos que quieras animar
    document.querySelectorAll('.item').forEach(el => {
        observer.observe(el);
    });
}

/**
 * Smooth scroll para enlaces internos
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Utilidad: Detectar tema del sistema
 */
function detectSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    return 'light';
}

/**
 * Utilidad: Cambiar tema (para futuro modo oscuro)
 */
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
}

/**
 * Cargar tema guardado
 */
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
}

// Cargar tema al iniciar
loadSavedTheme();

/**
 * Analytics o tracking (placeholder para el futuro)
 */
function trackPageView() {
    // Aquí puedes agregar Google Analytics, Plausible, etc.
    console.log('📊 Page view tracked');
}

// Log de bienvenida
console.log(`
╔══════════════════════════════════════╗
║                                      ║
║       🧠 CV Portfolio v1.0           ║
║                                      ║
║   Desarrollado con arquitectura      ║
║   modular y escalable                ║
║                                      ║
╚══════════════════════════════════════╝
`);