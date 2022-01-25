/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const $botonAceptar = document.querySelector("#boton-aceptar");
const $numeroFamiliares = document.querySelector("#numero-familiares");
const $botonCalcular = document.querySelector("#boton-calcular");
const $botonResetear = document.querySelector("#boton-resetear");
const $botonSalarios = document.querySelector("#boton-agregar-salarios");
const $botonCalcularSalarios = document.querySelector("#calcular-salarios");
const $botonQuitarSalarios = document.querySelector("#quitar-salarios");

$botonAceptar.onclick = function () {
    resetear();
    crearFamiliares();
    if ($numeroFamiliares.value > 0) {
        mostrarBotonCalcular();
    }
};

$botonCalcular.onclick = function () {
    let $listaFamiliares = document.querySelectorAll(".familiar");
    if ($listaFamiliares.length === 0) {
        return;
    }
    document.querySelector("#mayor-edad").value = calcularMayorEdad();
    document.querySelector("#menor-edad").value = calcularMenorEdad();
    document.querySelector("#promedio-edad").value = calcularPromedioEdad();
    mostrarListaCalculos();
    mostrarBotonResetear();
    mostrarBotonAgregar();
};

$botonResetear.onclick = function () {
    resetear();
};

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

$botonSalarios.onclick = function () {
    agregarSalarios();
    mostrarCalcularSalarios();
};

$botonCalcularSalarios.onclick = function () {
    mostrarListaSalarios();
    document.querySelector("#mayor-salario").value = calcularMayorSalario();
    document.querySelector("#menor-salario").value = calcularMenorSalario();
    document.querySelector("#promedio-salario").value =
        calcularPromedioSalario();
    mostrarBotonQuitar();
};

$botonQuitarSalarios.onclick = function () {
    for (i = 0; i < document.querySelectorAll(".familiar-salario").length; i) {
        document.querySelectorAll(".familiar-salario")[i].remove();
        document.querySelectorAll(".label-salario")[i].remove();
    }
    ocultarCalcularSalarios();
    ocultarListaSalarios();
    ocultarBotonQuitar();
};

//
//
//
//Funciones
//
//
//

function resetear() {
    if (document.querySelectorAll(".familiar").length > 0) {
        for (i = 0; i < document.querySelectorAll(".familiar").length; i) {
            document.querySelectorAll(".familiar")[i].remove();
            document.querySelectorAll(".label")[i].remove();
        }
    }
    if (document.querySelectorAll(".familiar-salario").length > 0) {
        for (
            i = 0;
            i < document.querySelectorAll(".familiar-salario").length;
            i
        ) {
            document.querySelectorAll(".familiar-salario")[i].remove();
            document.querySelectorAll(".label-salario")[i].remove();
        }
    }
    ocultarListaCalculos();
    ocultarBotonResetear();
    ocultarBotonAgregar();
    ocultarBotonCalcular();
    ocultarCalcularSalarios();
    ocultarBotonQuitar();
    ocultarListaSalarios();
}

function ocultarListaCalculos() {
    document.querySelector("#calculos").className = "oculto";
}

function ocultarBotonResetear() {
    document.querySelector("#boton-resetear").className = "oculto";
}

function ocultarBotonAgregar() {
    document.querySelector("#boton-agregar-salarios").className = "oculto";
}

function ocultarBotonCalcular() {
    document.querySelector("#boton-calcular").className = "oculto";
}

function ocultarCalcularSalarios() {
    document.querySelector("#calcular-salarios").className = "oculto";
}

function ocultarBotonQuitar() {
    document.querySelector("#quitar-salarios").className = "oculto";
}

function ocultarListaSalarios() {
    document.querySelector("#calculos-salarios").className = "oculto";
}

function crearFamiliares() {
    for (i = 0; i < $numeroFamiliares.value; i++) {
        const $formulario = document.querySelector("#calculo-integrantes");
        const $division = document.createElement("div");
        const $label = document.createElement("label");
        const $input = document.createElement("input");
        $input.setAttribute("class", "familiar");
        $input.placeholder = "Ingrese la edad";
        $label.textContent = " Familiar " + Number(i + 1);
        $label.className = "label";
        $formulario.appendChild($division);
        $formulario.appendChild($label);
        $formulario.appendChild($input);
    }
}

function mostrarBotonCalcular() {
    document.querySelector("#boton-calcular").className = "";
}

function calcularMayorEdad() {
    let $listaFamiliares = document.querySelectorAll(".familiar");
    let mayorEdad = 0;
    for (i = 0; i < $listaFamiliares.length; i++) {
        if (mayorEdad < $listaFamiliares[i].value) {
            mayorEdad = $listaFamiliares[i].value;
        }
    }
    return mayorEdad;
}

function calcularMenorEdad() {
    let $listaFamiliares = document.querySelectorAll(".familiar");
    let menorEdad = $listaFamiliares[0];
    for (i = 0; i < $listaFamiliares.length; i++) {
        if (menorEdad > $listaFamiliares[i].value) {
            menorEdad = $listaFamiliares[i].value;
        }
    }
    return menorEdad;
}

function calcularPromedioEdad() {
    let $listaFamiliares = document.querySelectorAll(".familiar");
    let totalEdades = 0;
    for (i = 0; i < $listaFamiliares.length; i++) {
        totalEdades += Number($listaFamiliares[i].value);
    }
    promedioEdad = totalEdades / $listaFamiliares.length;
    return promedioEdad;
}

function mostrarListaCalculos() {
    document.querySelector("#calculos").className = "";
}

function mostrarBotonResetear() {
    document.querySelector("#boton-resetear").className = "";
}

function mostrarBotonAgregar() {
    document.querySelector("#boton-agregar-salarios").className = "";
}

function agregarSalarios() {
    $divSalarios = document.querySelector("#salarios");
    for (i = 0; i < $numeroFamiliares.value; i++) {
        const $label = document.createElement("label");
        const $input = document.createElement("input");
        const $division = document.createElement("div");
        $input.placeholder = "Ingrese el salario";
        $label.textContent = "Salario familiar " + Number(i + 1);
        $input.className = "familiar-salario";
        $label.className = "label-salario";
        $divSalarios.appendChild($label);
        $divSalarios.appendChild($input);
        $divSalarios.appendChild($division);
    }
}

function mostrarCalcularSalarios() {
    document.querySelector("#calcular-salarios").className = "";
}

function mostrarListaSalarios() {
    document.querySelector("#calculos-salarios").className = "";
}

function calcularMayorSalario() {
    let $listaSalarios = document.querySelectorAll(".familiar-salario");
    let mayorSalario = 0;
    for (i = 0; i < $listaSalarios.length; i++) {
        if (mayorSalario < Number($listaSalarios[i].value)) {
            mayorSalario = Number($listaSalarios[i].value);
        }
    }
    return mayorSalario;
}

function calcularMenorSalario() {
    let $listaSalarios = document.querySelectorAll(".familiar-salario");
    let menorSalario = Number($listaSalarios[0].value);
    for (i = 0; i < $listaSalarios.length; i++) {
        if (Number($listaSalarios[i].value) === 0) {
            continue;
        }
        if (menorSalario > Number($listaSalarios[i].value)) {
            menorSalario = Number($listaSalarios[i].value);
        }
    }
    return menorSalario;
}

function calcularPromedioSalario() {
    let $listaSalarios = document.querySelectorAll(".familiar-salario");
    let totalSalarios = 0;
    for (i = 0; i < $listaSalarios.length; i++) {
        if ($listaSalarios[i].value === 0) {
            continue;
        }
        totalSalarios += Number($listaSalarios[i].value);
    }
    let promedioSalario = totalSalarios / $listaSalarios.length;
    return promedioSalario;
}

function mostrarBotonQuitar() {
    document.querySelector("#quitar-salarios").className = "";
}
