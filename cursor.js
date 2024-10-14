document.addEventListener('DOMContentLoaded', function() {
    const img = document.getElementById('imagen-seguidora');
    const footer = document.querySelector('footer'); // Selecciona el footer
    let lastX = 0;
    let lastY = 0;
    let timer;

    // Función para ocultar la imagen cuando el cursor está quieto
    function hideImage() {
        img.style.opacity = 0; // Desaparece la imagen de manera suave
    }

    // Mostrar la imagen cuando se mueve el mouse
    document.addEventListener('mousemove', function(e) {
        clearTimeout(timer); // Limpiamos el temporizador si el mouse se mueve
        img.style.opacity = 1; // Hacemos que la imagen reaparezca de manera suave

        // Obtenemos el tamaño de la imagen
        const imgWidth = img.offsetWidth;
        const imgHeight = img.offsetHeight;

        // Obtenemos la posición del footer en la página
        const footerRect = footer.getBoundingClientRect();
        const footerTop = footerRect.top + window.scrollY; // Posición superior del footer en relación con la página

        // Calculamos la posición de la imagen, sin que baje más allá del footer
        let topPosition = e.pageY - imgHeight / 2;

        // Si la posición de la imagen está por debajo del footer, ajustamos
        if (topPosition + imgHeight > footerTop) {
            topPosition = footerTop - imgHeight; // Ajusta la posición de la imagen
        }

        // Actualizamos la posición de la imagen para que esté centrada en el cursor
        img.style.left = (e.pageX - imgWidth / 2) + 'px';
        img.style.top = topPosition + 'px';

        // Calculamos la diferencia de movimiento del cursor
        let deltaX = e.pageX - lastX;
        let deltaY = e.pageY - lastY;

        // Actualizamos el último valor de posición
        lastX = e.pageX;
        lastY = e.pageY;

        // Calculamos la distorsión según la dirección
        let skewX = deltaX * 0.1; // Ajusta el factor de distorsión
        let skewY = deltaY * 0.1;

        // Aplicamos la transformación con skew
        img.style.transform = `skew(${skewX}deg, ${skewY}deg)`;

        // Configuramos el temporizador para ocultar la imagen después de 1 segundo (1000ms) de inactividad
        timer = setTimeout(hideImage, 500); // Cambia el tiempo según sea necesario
    });
});
