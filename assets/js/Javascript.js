    // carrusel
function crearCarrusel(idContenedor, diapositivas) {
    const contenedor = document.getElementById(idContenedor);
    if (!contenedor) return; // no contiene carrusel
 
    const imagen = contenedor.querySelector("img");
    const enlace = contenedor.querySelector("a");
    const texto = contenedor.querySelector("h3");
    const botonAnterior = contenedor.querySelector(".anterior");
    const botonSiguiente = contenedor.querySelector(".siguiente");
    let indice = 0;
    function mostrar() {
        const actual = diapositivas[indice];
        imagen.src = actual.src;
        imagen.alt = actual.alt;
        texto.textContent = actual.texto;
        enlace.href = actual.enlace;
    }
    
    botonSiguiente.addEventListener("click", function () {
        if (indice == diapositivas.length - 1) {
            indice = 0;
        } else {
            indice++;
        }
        mostrar();
    });
 
    botonAnterior.addEventListener("click", function () {
        if (indice == 0) {
            indice = diapositivas.length - 1;
        } else {
            indice--;
        }
        mostrar();
    });
 
    mostrar();
}
 
crearCarrusel("carrusel-campus", [
    { src: "assets/img/campus/Biblioteca.jpg", alt: "Biblioteca del campus", texto: "Biblioteca", enlace: "Campus/Biblioteca.html" },
    { src: "assets/img/campus/DSCN3833.jpg", alt: "Residencias del campus", texto: "Residencias", enlace: "Campus/Residencias.html" },
    { src: "assets/img/campus/Laboratorios.jpg", alt: "Laboratorios del campus", texto: "Laboratorios", enlace: "Campus/Laboratorio.html" },
    { src: "assets/img/campus/ComedorUniversitario.png", alt: "Comedor universitario del campus", texto: "Comedor Universitario", enlace: "Campus/Comedor.html" }
]);
 
crearCarrusel("carrusel-carreras", [
    { src: "assets/img/carreras/tec-programacion.jpg", alt: "Tecnicatura en Programación", texto: "Tecnicatura en Programación", enlace: "carreras/tec-programacion.html" },
    { src: "assets/img/carreras/lic-administracion.jpg", alt: "Licenciatura en Administración", texto: "Licenciatura en Administración", enlace: "carreras/lic-administracion.html" },
    { src: "assets/img/carreras/contador-publico.jpg", alt: "Contador Público", texto: "Contador Público", enlace: "carreras/contador-publico.html" },
    { src: "assets/img/carreras/diseno-grafico.jpg", alt: "Diseño Gráfico", texto: "Diseño Gráfico", enlace: "carreras/diseno-grafico.html" }
]);

    // footer
const contenedorFooter = document.getElementById("footer");
if (contenedorFooter) {
    fetch("footer.html")
        .then(respuesta => respuesta.text())
        .then(html => contenedorFooter.innerHTML = html);
}
// Formulario
const form = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const dni = document.getElementById("dni");
const telefono = document.getElementById("telefono");
const carrera = document.getElementById("carrera");
function mostrarError(campo, texto) {
    // Si ya hay un mensaje de error debajo del input, solo actualiza el texto
    const siguiente = campo.nextElementSibling;
    if (siguiente && siguiente.classList.contains("mensaje-error")) {
        siguiente.textContent = texto;
        return;
    }
    campo.classList.add("invalido");
    // Crea el mensaje
    const mensaje = document.createElement("p");
    mensaje.className = "mensaje-error";
    mensaje.textContent = texto;
    // Lo inserta justo debajo del input
    campo.insertAdjacentElement("afterend", mensaje);
}

// Limpia
function limpiarErrores() {
    // Elimina la clase de CSS de todos los campos
    const campos = form.querySelectorAll("input, select, textarea, fieldset");
    campos.forEach(campo => campo.classList.remove("invalido"));
    // Elimina todos los mensajes de error
    const mensajes = form.querySelectorAll(".mensaje-error");
    mensajes.forEach(mensaje => mensaje.remove());
}

// Expresiones regulares
const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,40}$/;
const regexDni = /^\d{7,8}$/;
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexTelefono = /^\d{10}$/;

// Validación
function validarFormulario(event) {
    event.preventDefault();
    limpiarErrores();            // una sola vez, al principio

    let valido = true;

    if (!regexNombre.test(nombre.value.trim())) {
        mostrarError(nombre, "Ingresá un nombre válido (solo letras).");
        valido = false;
    }

    if (!regexNombre.test(apellido.value.trim())) {
        mostrarError(apellido, "Ingresá un apellido válido (solo letras).");
        valido = false;
    }

    if (!regexDni.test(dni.value.trim())) {
        mostrarError(dni, "El DNI debe tener 7 u 8 números.");
        valido = false;
    }

    if (!regexEmail.test(email.value.trim())) {
        mostrarError(email, "Ingresá un correo electrónico válido.");
        valido = false;
    }

    // Teléfono opcional: solo se valida si escribió algo
    if (telefono.value.trim() !== "" && !regexTelefono.test(telefono.value.trim())) {
        mostrarError(telefono, "El teléfono debe tener 10 números, sin espacios.");
        valido = false;
    }

    if (carrera.value === "") {
        mostrarError(carrera, "Elegí una carrera.");
        valido = false;
    }
    if (valido) {
        
        form.submit(); 
        
    }

}

form.addEventListener("submit", validarFormulario);