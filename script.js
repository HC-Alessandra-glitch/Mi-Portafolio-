/* =========================
   HERRAMIENTAS
========================= */

const skills = document.querySelectorAll(".skill-card");

skills.forEach(skill => {

    const textoOriginal = skill.innerHTML;

    skill.addEventListener("mouseenter", () => {

        skill.innerHTML = skill.dataset.info;

    });

    skill.addEventListener("mouseleave", () => {

        skill.innerHTML = textoOriginal;

    });

});

/* =========================
   ANIMACION SCROLL
========================= */

const secciones = document.querySelectorAll(
    ".sobre, .fortalezas, .habilidades, .proyectos, .contacto"
);

secciones.forEach(seccion => {

    seccion.style.opacity = "0";

    seccion.style.transform = "translateY(50px)";

    seccion.style.transition = ".8s ease";

});

function mostrarSecciones() {

    secciones.forEach(seccion => {

        const posicion = seccion.getBoundingClientRect().top;

        if (posicion < window.innerHeight - 120) {

            seccion.style.opacity = "1";

            seccion.style.transform = "translateY(0)";

        }

    });

}

window.addEventListener("scroll", mostrarSecciones);

mostrarSecciones();

/* =========================
   MENU ACTIVO
========================= */

const enlaces = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {

    let actual = "";

    document.querySelectorAll("section").forEach(seccion => {

        const top = seccion.offsetTop - 150;
        const height = seccion.offsetHeight;

        if (pageYOffset >= top &&
            pageYOffset < top + height) {

            actual = seccion.getAttribute("id");

        }

    });

    enlaces.forEach(link => {

        link.classList.remove("activo");

        if (link.getAttribute("href") === "#" + actual) {

            link.classList.add("activo");

        }

    });

});

/* =========================
   EFECTO DE CARGA
========================= */

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

/* =========================
   SCROLL SUAVE EXTRA
========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const destino = document.querySelector(
            this.getAttribute("href")
        );

        destino.scrollIntoView({

            behavior: "smooth"

        });

    });

});

function abrirModal(id){

    document.getElementById(id)
    .style.display = "block";

}

function cerrarModal(id){

    document.getElementById(id)
    .style.display = "none";

}

window.onclick = function(event){

    document.querySelectorAll(".modal")
    .forEach(modal => {

        if(event.target === modal){

            modal.style.display = "none";

        }

    });

}