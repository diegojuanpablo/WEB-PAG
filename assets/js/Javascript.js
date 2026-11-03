// carrusel
const ArregloCarruselAutomaticoBiblioteca = [
    "../assets/img/ImagenesBiblioteca/ImagenBiblioteca1.jpg",
    "../assets/img/ImagenesBiblioteca/ImagenBiblioteca2.jpg",
    "../assets/img/ImagenesBiblioteca/ImagenBiblioteca3.jpg",
    "../assets/img/ImagenesBiblioteca/ImagenBiblioteca4.png"
];
const ArregloCarruselAutomaticoComedor=[
    "../assets/img/ImagenesComedor/ComedorUniversitario1.avif",
    "../assets/img/ImagenesComedor/ComedorUniversitario2.jpg",
    "../assets/img/ImagenesComedor/ComedorUniversitario3.avif",
    "../assets/img/ImagenesComedor/ComedorUniversitario4.avif"
];
const ArregloCarruselAutomaticoResidencia=[
    "../assets/img/ImagenesResidencia/Residencias_1.jpg",
    "../assets/img/ImagenesResidencia/Residencias_2.jpg",
    "../assets/img/ImagenesResidencia/Residencias_3.jpg",
    "../assets/img/ImagenesResidencia/Residencias_4.jpg"
];
const ArregloCarruselAutomaticoLaboratorio=[
    "../assets/img/ImagenesLaboratorio/lab1.jpg",
    "../assets/img/ImagenesLaboratorio/lab2.jpg",
    "../assets/img/ImagenesLaboratorio/lab3.jpg",
    "../assets/img/ImagenesLaboratorio/lab4.jpg"
];
let indiceBiblioteca = 0;
const imagenCarruselBiblioteca = document.getElementById("imagenBiblioteca");
const imagenCarruselComedor = document.getElementById("imagenComedor");
const imagenCarruselResidencia = document.getElementById("imagenResidencia"); 
const imagenCarruselLaboratorio = document.getElementById("imagenLaboratorio");
console.log("2. Imagen encontrada:", imagenCarruselBiblioteca);
function CambiarImagenBiblioteca() {
    if (ArregloCarruselAutomaticoBiblioteca.length - 1 == indiceBiblioteca) {
        indiceBiblioteca = 0;
    } else {
        indiceBiblioteca++;
    }
    imagenCarruselBiblioteca.src = ArregloCarruselAutomaticoBiblioteca[indiceBiblioteca];
console.log("3. Cambió a:", imagenCarruselBiblioteca.src);
}
if (imagenCarruselBiblioteca) {
    imagenCarruselBiblioteca.src = ArregloCarruselAutomaticoBiblioteca[0];
    setInterval(CambiarImagenBiblioteca, 3000);
}
// carrusel comedor


let indiceComedor = 0;
function CambiarImagenComedor() {
    if (ArregloCarruselAutomaticoComedor.length - 1 == indiceComedor) {
        indiceComedor = 0;
    } else {
        indiceComedor++;
    }
    imagenCarruselComedor.src = ArregloCarruselAutomaticoComedor[indiceComedor];
    console.log("3. Cambió a:", imagenCarruselComedor.src);
}
if (imagenCarruselComedor) {
    imagenCarruselComedor.src = ArregloCarruselAutomaticoComedor[0];
    setInterval(CambiarImagenComedor, 3000);
}
// carrusel residencias

let indiceResidencia = 0;
function CambiarImagenResidencia() {
    if (ArregloCarruselAutomaticoResidencia.length - 1 == indiceResidencia) {
        indiceResidencia = 0;
    } else {
        indiceResidencia++;
    }
    imagenCarruselResidencia.src = ArregloCarruselAutomaticoResidencia[indiceResidencia];
    console.log("5. Cambió a:", imagenCarruselResidencia.src);
}
if (imagenCarruselResidencia) {
    imagenCarruselResidencia.src = ArregloCarruselAutomaticoResidencia[0];
    setInterval(CambiarImagenResidencia, 3000);
}
// carrusel laboratorio

let indiceLaboratorio = 0;
function CambiarImagenLaboratorio() {
    if (ArregloCarruselAutomaticoLaboratorio.length - 1 == indiceLaboratorio) {
        indiceLaboratorio = 0;
    } else {
        indiceLaboratorio++;
    }
    imagenCarruselLaboratorio.src = ArregloCarruselAutomaticoLaboratorio[indiceLaboratorio];
    console.log("4. Cambió a:", imagenCarruselLaboratorio.src);
}
if (imagenCarruselLaboratorio) {
    imagenCarruselLaboratorio.src = ArregloCarruselAutomaticoLaboratorio[0];
    setInterval(CambiarImagenLaboratorio, 3000);
}

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
    { src: "assets/img/carreras/tec-programacion.jpg", alt: "Tecnicatura en Programación", texto: "Tecnicatura en Programación", enlace: "carreras/TecnicaturaProgramacion.html" },
    { src: "assets/img/carreras/lic-administracion.jpg", alt: "Licenciatura en Administración", texto: "Licenciatura en Administración", enlace: "carreras/lic-administracion.html" },
    { src: "assets/img/carreras/contador-publico.jpg", alt: "Contador Público", texto: "Contador Público", enlace: "carreras/ContadorPublico.html" },
    { src: "assets/img/carreras/diseno-grafico.jpg", alt: "Diseño Gráfico", texto: "Diseño Gráfico", enlace: "carreras/DiseñoGrafico.html" }
]);

    // footer
const contenedorFooter = document.getElementById("footer");
if (contenedorFooter) {     // si hay un elemento con id="footer"
    const enSubcarpeta = window.location.pathname.includes("/Campus/") || window.location.pathname.includes("/carreras/");  // las subcarpetas donde queremos que busque el footer
    const rutaFooter = enSubcarpeta ? "../footer.html" : "footer.html";

    fetch(rutaFooter)
        .then(respuesta => {    // vemos si esta todo bien
            if (!respuesta.ok) {
                throw new Error("No se pudo cargar el footer.");
            }

            return respuesta.text();    // convertimos el contenido en texto
        })
        .then(html => { contenedorFooter.innerHTML = html; })   // metemos el footer
        .catch(error => console.error("Error al cargar el footer:", error));    // cualquier otro error, lo obtenemos
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


// Guardado de datos.
function MostrarDatosGuardados(datos,ContenedorPadre){
    const anterior=document.getElementById("resumen");
    if(anterior){
        anterior.remove();
    }
    const resumen = document.createElement("div");
    resumen.id = "resumen";
    const titulo = document.createElement("h3");
    titulo.innerHTML = "Datos guardados:";
    resumen.appendChild(titulo);
    const lista = document.createElement("ul");
    const etiquetas ={
    nombre:"Nombre",
    apellido:"Apellido",
    dni:"DNI",
    email:"Email",
    telefono:"Teléfono",
    carrera:"Carrera",
    consulta:"Consulta"
    };
        for (const clave in etiquetas) {
        const item = document.createElement("li");
        const valor = datos[clave] === "" ? "No indicado" : datos[clave];
        item.textContent = etiquetas[clave] + ": " + valor;
        lista.appendChild(item);
    }

    resumen.appendChild(lista);
    ContenedorPadre.appendChild(resumen);
}
// Validación

function MostrarMensaje(mensaje="Formulario enviado correctamente")
{   const anterior=document.getElementById("mensaje");
   if(anterior)
    {
        anterior.remove();
    } 
   const mensajeDiv=document.createElement("div");
 mensajeDiv.id="mensaje";
    mensajeDiv.className="mensaje-exito";
    mensajeDiv.textContent=mensaje;
    form.appendChild(mensajeDiv);
}
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
        const datos = {
            nombre: nombre.value.trim(),
            apellido: apellido.value.trim(),
            dni: dni.value.trim(),
            email: email.value.trim(),
            telefono: telefono.value.trim(),
            carrera: carrera.value,
            consulta: document.getElementById("consulta").value.trim()
        };
        MostrarDatosGuardados(datos,document.getElementById("DIVformulario"));
        MostrarMensaje();
        form.reset();
    }
}
form.addEventListener("submit", validarFormulario);