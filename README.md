# CV Desarrollador Full Stack

Un CV profesional desarrollado con **HTML semántico y CSS modular**, sin dependencias de JavaScript. Arquitectura escalable y fácil de mantener.

## 🏗️ Arquitectura del Proyecto

### Estructura de Archivos

```
├── index.html                 # Archivo principal HTML
├── assets/                    # Recursos estáticos
│   ├── fonts/                 # Fuentes locales (opcional)
│   └── images/                # Imágenes y gráficos
└── src/
    └── css/                   # Estilos CSS modulares
        ├── main.css           # Punto de entrada principal
        ├── tokens/            # Variables y tokens de diseño
        │   ├── variables.css  # Colores, espaciado, etc.
        │   └── typography.css # Sistema tipográfico
        ├── base/              # Estilos base
        │   ├── reset.css      # Reset CSS
        │   └── base.css       # Estilos base HTML
        ├── layout/            # Sistema de layout
        │   ├── containers.css # Contenedores principales
        │   └── grid.css       # Sistema de grillas
        ├── components/        # Componentes UI
        │   ├── hero.css       # Sección hero
        │   ├── sections.css   # Headers de sección
        │   ├── cards.css      # Tarjetas de contenido
        │   ├── tags.css       # Sistema de etiquetas
        │   └── decorations.css # Elementos decorativos
        └── utilities/         # Clases utilitarias
            ├── spacing.css    # Espaciado
            ├── display.css    # Display y flexbox
            └── responsive.css # Utilidades responsive
```

## 🎨 Sistema de Diseño

### Tokens de Diseño

- **Colores**: Paleta consistente con variables CSS
- **Espaciado**: Sistema basado en múltiplos de 8px
- **Tipografía**: Escala modular con fuentes web
- **Sombras**: Estilo neomórfico con sombras planas

### Componentes Principales

1. **Hero**: Sección principal con nombre y título
2. **Sections**: Headers numerados con líneas decorativas
3. **Cards**: Tarjetas con efecto hover y sombras coloridas
4. **Tags**: Sistema de etiquetas con variaciones
5. **Decorations**: Elementos visuales animados

## 🚀 Características

- ✅ **HTML Semántico**: Estructura accesible y SEO-friendly
- ✅ **CSS Modular**: Arquitectura escalable y mantenible
- ✅ **Responsive**: Adaptable a todos los dispositivos
- ✅ **Sin JavaScript**: Carga rápida y compatible
- ✅ **Accesible**: Cumple estándares de accesibilidad
- ✅ **Animaciones CSS**: Efectos suaves y profesionales

## 📱 Responsive Design

- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints**: 768px (tablet) y 1024px (desktop)
- **Grid Flexible**: Sistema de grillas adaptable
- **Utilidades**: Clases para visibilidad responsive

## 🛠️ Cómo Usar

### Desarrollo Local

1. Clona el repositorio
2. Abre `index.html` en tu navegador
3. ¡Listo! No necesita servidor ni build

### Personalización

1. **Contenido**: Edita directamente el HTML en `index.html`
2. **Colores**: Modifica variables en `src/css/tokens/variables.css`
3. **Tipografía**: Ajusta fuentes en `src/css/tokens/typography.css`
4. **Layout**: Personaliza grillas en `src/css/layout/grid.css`

### Agregar Nuevas Secciones

```html
<section class="section" id="nueva-seccion">
    <div class="section-header">
        <span class="section-number">05</span>
        <h2>Nueva Sección</h2>
        <div class="section-line"></div>
    </div>
    
    <div class="content-grid two-column">
        <article class="item">
            <h3>🎯 Título</h3>
            <ul>
                <li>Elemento 1</li>
                <li>Elemento 2</li>
            </ul>
            <div class="tags">
                <span class="tag accent">Tag</span>
            </div>
        </article>
    </div>
</section>
```

## 🎯 Ventajas de esta Arquitectura

### Para Desarrolladores

- **Modular**: Cada componente en su propio archivo
- **Escalable**: Fácil agregar nuevos componentes
- **Mantenible**: Código organizado y documentado
- **Reutilizable**: Componentes independientes

### Para el Proyecto

- **Rendimiento**: Carga rápida sin JavaScript
- **SEO**: HTML semántico optimizado
- **Accesibilidad**: Estructura accesible por defecto
- **Compatibilidad**: Funciona en todos los navegadores

## 📋 Próximos Pasos

- [ ] Agregar modo oscuro
- [ ] Implementar print styles
- [ ] Optimizar para Core Web Vitals
- [ ] Agregar micro-animaciones
- [ ] Crear variantes de color

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature
3. Mantén la arquitectura modular
4. Documenta los cambios
5. Envía un pull request

---

**Desarrollado con 🧠 - Arquitectura HTML/CSS pura y escalable**