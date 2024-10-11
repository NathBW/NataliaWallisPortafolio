const prevBtnProyecto = document.querySelector('.prev-proyecto');
const nextBtnProyecto = document.querySelector('.next-proyecto');
const proyectoItems = document.querySelectorAll('.proyecto-item');
let currentIndexProyecto = 0;

// Función para actualizar la posición del carrusel
function updateCarouselProyecto(indexproyecto) {
    const itemWidthProyecto = proyectoItems[0].offsetWidth; // Ancho de cada elemento
    proyectoItems.forEach((itemproyecto, p) => {
        // Desplazamos cada proyecto en base al índice
        itemproyecto.style.transform = `translateX(${(p - indexproyecto) * 100}%)`;
    });

    if (currentIndexProyecto === 0) {
    prevBtnProyecto.disabled = true; // Desactiva el botón de "Anterior" si estamos en el primer proyecto
    } else if (currentIndexProyecto !== 0){
    prevBtnProyecto.disabled = false; // Activa el botón si no estamos en el primer proyecto
    }
}



// Evento para el botón "Siguiente"
nextBtnProyecto.addEventListener('click', () => {
    if (currentIndexProyecto < proyectoItems.length - 1) {
        currentIndexProyecto++;
        currentIndexProyecto++;
    } else {
        currentIndexProyecto = 0; // Reinicia el carrusel al inicio
    }
    updateCarouselProyecto(currentIndexProyecto);
});

// Evento para el botón "Anterior"
prevBtnProyecto.addEventListener('click', () => {
    if (currentIndexProyecto > 0) {
        currentIndexProyecto--;
        currentIndexProyecto--;
    } else {
        currentIndexProyecto = proyectoItems.length - 1; // Va al último item si estamos en el primero
    }
    updateCarouselProyecto(currentIndexProyecto);
});

// Inicializar el carrusel en la posición correcta
updateCarouselProyecto(currentIndexProyecto);
