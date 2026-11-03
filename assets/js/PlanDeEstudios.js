// Los datos: un arreglo de objetos, uno por materia (reemplazá por el plan real)
const planProgramacion = [
    { anio: "1°", materia: "Programación I", cuatrimestre: "1er Cuatrimestre", horas: 6 },
    { anio: "1°", materia: "Matemática", cuatrimestre: "1er Cuatrimestre", horas: 4 },
    { anio: "1°", materia: "Sistemas Operativos", cuatrimestre: "2do Cuatrimestre", horas: 4 },
    { anio: "2°", materia: "Programación II", cuatrimestre: "1er Cuatrimestre", horas: 6 },
    { anio: "2°", materia: "Base de Datos", cuatrimestre: "2do Cuatrimestre", horas: 5 },
    { anio: "2°", materia: "Programación Web", cuatrimestre: "2do Cuatrimestre", horas: 5 }
];
const PlanContador = [
    { anio: "1°", materia: "Contabilidad I", cuatrimestre: "1er Cuatrimestre", horas: 6 },
    { anio: "1°", materia: "Matemática", cuatrimestre: "1er Cuatrimestre", horas: 4 },
    { anio: "1°", materia: "Economía", cuatrimestre: "2do Cuatrimestre", horas: 4 },
    { anio: "2°", materia: "Contabilidad II", cuatrimestre: "1er Cuatrimestre", horas: 6 },
    { anio: "2°", materia: "Estadística", cuatrimestre: "2do Cuatrimestre", horas: 5 },
    { anio: "2°", materia: "Finanzas", cuatrimestre: "2do Cuatrimestre", horas: 5 }
];
const PlanDiseñoGrafico = [
    { anio: "1°", materia: "Diseño Gráfico I", cuatrimestre: "1er Cuatrimestre", horas: 6 },
    { anio: "1°", materia: "Matemática", cuatrimestre: "2do Cuatrimestre", horas: 4 },
    { anio: "1°", materia: "Historia del Arte", cuatrimestre: "2do Cuatrimestre", horas: 4 },
    { anio: "2°", materia: "Diseño Gráfico II", cuatrimestre: "1er Cuatrimestre", horas: 6 },
    { anio: "2°", materia: "Ilustración Digital", cuatrimestre: "2do Cuatrimestre", horas: 5 },
    { anio: "2°", materia: "Comunicación Visual", cuatrimestre: "2do Cuatrimestre", horas: 5 }
];
const PlanAdministracion = [
    { anio: "1°", materia: "Administración I", cuatrimestre: "1er Cuatrimestre", horas: 6 },
    { anio: "1°", materia: "Matemática I", cuatrimestre: "1er Cuatrimestre", horas: 4 },
    { anio: "1°", materia: "Economía", cuatrimestre: "1er Cuatrimestre", horas: 4 },
    { anio: "1°", materia: "Administración II", cuatrimestre: "2do Cuatrimestre", horas: 6 },
    { anio: "1°", materia: "Gestión de Recursos Humanos", cuatrimestre: "2do Cuatrimestre", horas: 5 },
    { anio: "1°", materia: "Marketing", cuatrimestre: "2do Cuatrimestre", horas: 5 },
    { anio: "2°", materia: "Administración III", cuatrimestre: "1er Cuatrimestre", horas: 6 },
    { anio: "2°", materia: "Finanzas", cuatrimestre: "1er Cuatrimestre", horas: 5 },
    { anio: "2°", materia: "Gestión Estratégica", cuatrimestre: "1er Cuatrimestre", horas: 5 },
    { anio: "2°", materia: "Analisis Matematico", cuatrimestre: "2do Cuatrimestre", horas: 6 },
    { anio: "2°", materia: "Emprendimiento", cuatrimestre: "2do Cuatrimestre", horas: 5 },
    { anio: "2°", materia: "Gestión de Proyectos", cuatrimestre: "2do Cuatrimestre", horas: 5 },
    { anio: "3°", materia: "Analisis Matematico II", cuatrimestre: "1er Cuatrimestre", horas: 6 },
    { anio: "3°", materia: "Tecnologia de la informacion", cuatrimestre: "1er Cuatrimestre", horas: 5 },
    { anio: "3°", materia: "Gestión de Operaciones", cuatrimestre: "1er Cuatrimestre", horas: 5 },
    { anio: "3°", materia: "Administracion general", cuatrimestre: "2do Cuatrimestre", horas: 6 },
    { anio: "4°", materia: "Cálculo Financiero", cuatrimestre: "1do Cuatrimestre", horas: 5 },
    { anio: "4°", materia: "Gestión de Recursos Humanos II", cuatrimestre: "1do Cuatrimestre", horas: 5 },
    { anio: "4°", materia: "Administración VII", cuatrimestre: "2do Cuatrimestre", horas: 6 },
    { anio: "4°", materia: "Gestión Estratégica II", cuatrimestre: "2do Cuatrimestre", horas: 5 },
    { anio: "5°", materia: "Practica Profesional", cuatrimestre: "1er Cuatrimestre", horas: 5 }
];
const ContenedorPadre = document.getElementById("listado");
const ContenedorPlan = document.createElement("div");

function TablaPlan(plan, contenedor) {
    const tabla = document.createElement("table");
    tabla.className = "tablaCarreras";

    // Título de la tabla
    const caption = document.createElement("caption");
    caption.textContent = "Materias por año";
    tabla.appendChild(caption);

    // Encabezado
    const thead = document.createElement("thead");
    const filaEncabezado = document.createElement("tr");
    const titulos = ["Año", "Materia","Cuatrimestre","Horas semanales"];
    titulos.forEach(function (texto) {
        const th = document.createElement("th");
        th.textContent = texto;
        filaEncabezado.appendChild(th);
    });

    thead.appendChild(filaEncabezado);
    tabla.appendChild(thead);

    // Cuerpo: una fila por materia
    const tbody = document.createElement("tbody");

    plan.forEach(function (materia) {
        const fila = document.createElement("tr");

        const celdaAnio = document.createElement("td");
        celdaAnio.textContent = materia.anio;
        fila.appendChild(celdaAnio);

        const celdaMateria = document.createElement("td");
        celdaMateria.textContent = materia.materia;
        fila.appendChild(celdaMateria);
         const celdaCuatrimestre = document.createElement("td");
        celdaCuatrimestre.textContent = materia.cuatrimestre || "N/A";
        fila.appendChild(celdaCuatrimestre);
        tbody.appendChild(fila);
        const celdaHoras = document.createElement("td");
        celdaHoras.textContent = materia.horas;
        fila.appendChild(celdaHoras);
    });

    tabla.appendChild(tbody);
    contenedor.appendChild(tabla);
}
// Se arma la tabla una sola vez, dentro del div (todavía no se ve en la página)
// El botón muestra u oculta el div
const botonContador = document.getElementById("botonContador");
if (ContenedorPadre && botonContador) {
    TablaPlan(PlanContador, ContenedorPlan);
    botonContador.addEventListener("click", function () {
        if (ContenedorPlan.parentElement) {
            ContenedorPlan.remove();                                 // se oculta
            botonContador.textContent = "Plan de Estudios";          // el botón vuelve a su texto
        } else {
            ContenedorPadre.appendChild(ContenedorPlan);             // se muestra
            botonContador.textContent = "Ocultar Plan de Estudios";  // el botón ofrece ocultar
        }
    });
}
const botonProgramacion = document.getElementById("botonProgramacion");
if (ContenedorPadre && botonProgramacion) {
    TablaPlan(planProgramacion, ContenedorPlan);
    botonProgramacion.addEventListener("click", function () {
        if (ContenedorPlan.parentElement) {
            ContenedorPlan.remove();                                 // se oculta
            botonProgramacion.textContent = "Plan de Estudios";          // el botón vuelve a su texto
        } else {
            ContenedorPadre.appendChild(ContenedorPlan);             // se muestra
            botonProgramacion.textContent = "Ocultar Plan de Estudios";  // el botón ofrece ocultar
        }
    });
}
const botonDiseñoGrafico = document.getElementById("botonDiseñoGrafico");
if (ContenedorPadre && botonDiseñoGrafico) {
    TablaPlan(PlanDiseñoGrafico, ContenedorPlan);
    botonDiseñoGrafico.addEventListener("click", function () {
        if (ContenedorPlan.parentElement) {
            ContenedorPlan.remove();                                 // se oculta
            botonDiseñoGrafico.textContent = "Plan de Estudios";          // el botón vuelve a su texto
        } else {
            ContenedorPadre.appendChild(ContenedorPlan);             // se muestra
            botonDiseñoGrafico.textContent = "Ocultar Plan de Estudios";  // el botón ofrece ocultar
        }
    });
}
const botonAdministracion = document.getElementById("botonAdministracion");
if (ContenedorPadre && botonAdministracion) {
    TablaPlan(PlanAdministracion, ContenedorPlan);
    botonAdministracion.addEventListener("click", function () {
        if (ContenedorPlan.parentElement) {
            ContenedorPlan.remove();                                 // se oculta
            botonAdministracion.textContent = "Plan de Estudios";          // el botón vuelve a su texto
        } else {
            ContenedorPadre.appendChild(ContenedorPlan);             // se muestra
            botonAdministracion.textContent = "Ocultar Plan de Estudios";  // el botón ofrece ocultar
        }
    });
}
