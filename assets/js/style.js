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