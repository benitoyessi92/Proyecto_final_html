// Animación al hacer scroll
const sections = document.querySelectorAll("section");

function mostrarSecciones() {
    const trigger = window.innerHeight * 0.8;

    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;

        if (top < trigger) {
            sec.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", mostrarSecciones);

// Animación al cargar
window.onload = () => {
    mostrarSecciones();
}

// Mensaje bonito
setTimeout(() => {
    alert("✨ Bienvenido a Guanajuato Capital ✨");
}, 500);
