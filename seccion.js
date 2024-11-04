// Selecciona todas las secciones y las bolitas de indicadores
const sections = document.querySelectorAll('section');
const indicators = document.querySelectorAll('.section-indicator span');

// Función para actualizar el indicador activo
function updateIndicator() {
    let current = "";
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - section.offsetHeight / 3) {
            current = section.getAttribute("id");
        }
    });
    
    indicators.forEach(indicator => {
        indicator.classList.remove("active");
        if (indicator.getAttribute("data-section") === current) {
            indicator.classList.add("active");
        }
    });
}

// Evento de scroll para actualizar el indicador
window.addEventListener("scroll", updateIndicator);


// Función para hacer scroll a la sección indicada
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'  // Desplazamiento suave
        });
        
        // Llama a updateIndicator() después de hacer scroll
        updateIndicator();
    }
}

