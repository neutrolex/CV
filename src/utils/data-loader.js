/**
 * DATA LOADER
 * Carga y renderiza dinámicamente los datos del CV desde el archivo JSON
 */

class CVDataLoader {
    constructor(dataPath = './src/data/cv-data.json') {
        this.dataPath = dataPath;
        this.data = null;
    }

    /**
     * Carga los datos del archivo JSON
     */
    async loadData() {
        try {
            const response = await fetch(this.dataPath);
            if (!response.ok) {
                throw new Error(`Error al cargar datos: ${response.status}`);
            }
            this.data = await response.json();
            return this.data;
        } catch (error) {
            console.error('Error cargando datos:', error);
            throw error;
        }
    }

    /**
     * Renderiza el header/hero del CV
     */
    renderHeader(data) {
        const headerHTML = `
            <header class="hero fade-in">
                <div class="name-block">
                    <h1>${data.personal.name}</h1>
                </div>
                <div class="subtitle">${data.personal.title}</div>
            </header>
        `;
        return headerHTML;
    }

    /**
     * Renderiza una tarjeta individual de skill
     */
    renderSkillCard(item, index) {
        const animationDelay = index > 0 ? `fade-in-delay-${Math.min(index, 3)}` : 'fade-in';
        
        const tagsHTML = item.tags.map(tag => 
            `<span class="tag ${tag.accent ? 'accent' : ''}">${tag.name}</span>`
        ).join('');

        const skillsHTML = item.skills.map(skill => 
            `<li>${skill}</li>`
        ).join('');

        return `
            <div class="item ${animationDelay}">
                <h3>${item.icon ? item.icon + ' ' : ''}${item.title}</h3>
                ${item.description ? `<p>${item.description}</p>` : ''}
                ${skillsHTML ? `<ul>${skillsHTML}</ul>` : ''}
                ${tagsHTML ? `<div class="tags">${tagsHTML}</div>` : ''}
            </div>
        `;
    }

    /**
     * Renderiza una sección completa
     */
    renderSection(section, sectionIndex) {
        const animationClass = `fade-in-delay-${Math.min(sectionIndex + 1, 3)}`;

        // Determinar el tipo de layout
        let layoutClass = 'full-width';
        if (section.layout === 'two-column') {
            layoutClass = 'two-column';
        } else if (section.layout === 'three-column') {
            layoutClass = 'three-column';
        }

        // Si es tipo highlight, usar layout especial
        if (section.layout === 'highlight') {
            const item = section.items[0];
            const tagsHTML = item.tags.map(tag => 
                `<span class="tag ${tag.accent ? 'accent' : ''}">${tag.name}</span>`
            ).join('');

            return `
                <section class="section ${animationClass}" id="${section.id}">
                    <div class="highlight-box">
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                        <div class="tags">${tagsHTML}</div>
                    </div>
                </section>
            `;
        }

        // Layout normal con header y grid
        const itemsHTML = section.items.map((item, idx) => 
            this.renderSkillCard(item, idx)
        ).join('');

        return `
            <section class="section ${animationClass}" id="${section.id}">
                <div class="section-header">
                    <span class="section-number">${section.number}</span>
                    <h2>${section.title}</h2>
                    <div class="section-line"></div>
                </div>
                <div class="content-grid ${layoutClass}">
                    ${itemsHTML}
                </div>
            </section>
        `;
    }

    /**
     * Renderiza el footer
     */
    renderFooter(data) {
        return `
            <footer>
                <p>${data.footer.text} · ${data.footer.year}</p>
            </footer>
        `;
    }

    /**
     * Renderiza todo el contenido del CV
     */
    render(containerId = 'app') {
        if (!this.data) {
            console.error('No hay datos cargados. Llama a loadData() primero.');
            return;
        }

        const container = document.getElementById(containerId);
        if (!container) {
            console.error(`No se encontró el contenedor con id "${containerId}"`);
            return;
        }

        // Construir el HTML completo
        const headerHTML = this.renderHeader(this.data);
        const sectionsHTML = this.data.sections.map((section, idx) => 
            this.renderSection(section, idx)
        ).join('');
        const footerHTML = this.renderFooter(this.data);

        // Insertar en el DOM
        container.innerHTML = `
            ${headerHTML}
            ${sectionsHTML}
            ${footerHTML}
        `;
    }

    /**
     * Método principal para inicializar y cargar el CV
     */
    async init(containerId = 'app') {
        try {
            // Mostrar loading
            const container = document.getElementById(containerId);
            if (container) {
                container.innerHTML = '<div class="loading">Cargando CV</div>';
            }

            // Cargar datos
            await this.loadData();

            // Renderizar
            this.render(containerId);

            console.log('✅ CV cargado exitosamente');
        } catch (error) {
            console.error('❌ Error al inicializar el CV:', error);
            const container = document.getElementById(containerId);
            if (container) {
                container.innerHTML = `
                    <div class="error">
                        <strong>Error:</strong> No se pudo cargar el CV. 
                        Verifica que el archivo de datos esté disponible.
                    </div>
                `;
            }
        }
    }
}

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CVDataLoader;
}