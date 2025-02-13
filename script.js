const envoltura = document.querySelector(".envoltura-sobre");
const carta = document.querySelector(".carta");
const audio = document.getElementById('bgMusic');

// Función para verificar si la fecha actual es mayor o igual a la fecha objetivo
function puedeAbrirCarta() {
    const fechaObjetivo = new Date('2025-02-14T00:00:00'); // Año-Mes-Día
    const fechaActual = new Date();
    return fechaActual >= fechaObjetivo;
}

// Función para mostrar mensaje si intenta abrir antes de tiempo
function mostrarMensajeBloqueo() {
    alert('Esta carta se podrá abrir el 14 de febrero ❤️');
}

document.addEventListener("click", (e) => {
    // Primero verificamos si se puede abrir la carta
    if (!puedeAbrirCarta()) {
        if (e.target.matches(".sobre") || 
            e.target.matches(".solapa-derecha") ||
            e.target.matches(".solapa-izquierda") ||
            e.target.matches(".corazon") ||
            e.target.matches(".sobre *")) {
            mostrarMensajeBloqueo();
            return;
        }
    }

    // Si la fecha es correcta, procedemos con la funcionalidad normal
    if (e.target.matches(".sobre") || 
        e.target.matches(".solapa-derecha") ||
        e.target.matches(".solapa-izquierda") ||
        e.target.matches(".corazon")) {
        envoltura.classList.toggle("abierto");
      
    } else if (e.target.matches(".sobre *")) {
        if (!carta.classList.contains("abierta")) {
            carta.classList.add("mostrar-carta");

            setTimeout(() => {
                carta.classList.remove("mostrar-carta");
                carta.classList.add("abierta");
            }, 500);
            envoltura.classList.add("desactivar-sobre")
        } else {
            carta.classList.add("cerrando-carta");
            envoltura.classList.remove("desactivar-sobre");

            setTimeout(() => {
                carta.classList.remove("cerrando-carta")
                carta.classList.remove("abierta")
            }, 500);
        }
    } 
});

// Opcional: También podemos ocultar los controles de audio hasta la fecha correcta
if (!puedeAbrirCarta()) {
    const audioContainer = document.querySelector('.audio-container');
    if (audioContainer) {
        audioContainer.style.display = 'none';
    }
}