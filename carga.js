window.onload = function() {
    const logo = document.querySelector('.animated-logo');
    
    // Animar solo una vez al cargar
    logo.classList.add('bounce-once');

    // O bien, eliminar la clase después de la primera animación
    setTimeout(() => {
        logo.style.animation = 'none'; // Detener la animación después de ejecutarse
    }, 3000); // Ajusta el tiempo en milisegundos según la duración de la animación
};
