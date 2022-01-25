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
const $listaEdades = document.querySelectorAll(".familiar");

$botonAceptar.onclick = function () {
    resetear();
    crearFamiliares();
    if ($numeroFamiliares.value > 0) {
        mostrarElemento($botonCalcular);
    }
};

$botonCalcular.onclick = function () {
    let $listaFamiliares = document.querySelectorAll(".familiar");
    if ($listaFamiliares.length === 0) {
        return;
    }
    let listaEdades = Array.from($listaFamiliares);
    document.querySelector("#mayor-edad").value =
        calcularMayorEdad(listaEdades);
    document.querySelector("#menor-edad").value =
        calcularMenorEdad(listaEdades);
    document.querySelector("#promedio-edad").value =
        calcularPromedioEdad(listaEdades);
    mostrarElemento(document.querySelector("#calculos"));
    mostrarElemento($botonResetear);
    mostrarElemento(document.querySelector("#boton-agregar-salarios"));
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
    mostrarElemento(document.querySelector("#calcular-salarios"));
};

$botonCalcularSalarios.onclick = function () {
    let $listaSalarios = document.querySelectorAll(".familiar-salario");
    let listaSalarios = Array.from($listaSalarios);
    mostrarElemento(document.querySelector("#calculos-salarios"));
    document.querySelector("#mayor-salario").value =
        calcularMayorSalario(listaSalarios);
    document.querySelector("#menor-salario").value =
        calcularMenorSalario(listaSalarios);
    document.querySelector("#promedio-salario").value =
        calcularPromedioSalario(listaSalarios);
    mostrarElemento($botonQuitarSalarios);
};

$botonQuitarSalarios.onclick = function () {
    for (i = 0; i < document.querySelectorAll(".familiar-salario").length; i) {
        document.querySelectorAll(".familiar-salario")[i].remove();
        document.querySelectorAll(".label-salario")[i].remove();
    }
    ocultarElemento(document.querySelector("#calcular-salarios"));
    ocultarElemento(document.querySelector("#calculos-salarios"));
    ocultarElemento($botonQuitarSalarios);
};

//
//
//
//Funciones
//
//
//

function mostrarElemento(Element) {
    Element.className = "";
}

function ocultarElemento(Element) {
    Element.className = "oculto";
}

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
    ocultarElemento(document.querySelector("#calculos"));
    ocultarElemento($botonResetear);
    ocultarElemento($botonSalarios);
    ocultarElemento($botonCalcular);
    ocultarElemento($botonCalcularSalarios);
    ocultarElemento($botonQuitarSalarios);
    ocultarElemento(document.querySelector("#calculos-salarios"));
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

function calcularMayorEdad(array) {
    let mayorEdad = 0;
    for (i = 0; i < array.length; i++) {
        if (mayorEdad < array[i].value) {
            mayorEdad = array[i].value;
        }
    }
    return mayorEdad;
}

function calcularMenorEdad(array) {
    let menorEdad = array[0];
    for (i = 0; i < array.length; i++) {
        if (menorEdad > array[i].value) {
            menorEdad = array[i].value;
        }
    }
    return menorEdad;
}

function calcularPromedioEdad(array) {
    let totalEdades = 0;
    for (i = 0; i < array.length; i++) {
        totalEdades += Number(array[i].value);
    }
    promedioEdad = totalEdades / array.length;
    return promedioEdad;
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

function calcularMayorSalario(array) {
    let mayorSalario = 0;
    for (i = 0; i < array.length; i++) {
        if (mayorSalario < Number(array[i].value)) {
            mayorSalario = Number(array[i].value);
        }
    }
    return mayorSalario;
}

function calcularMenorSalario(array) {
    let menorSalario = Number(array[0].value);
    for (i = 0; i < array.length; i++) {
        if (Number(array[i].value) === 0) {
            continue;
        }
        if (menorSalario > Number(array[i].value)) {
            menorSalario = Number(array[i].value);
        }
    }
    return menorSalario;
}

function calcularPromedioSalario(array) {
    let totalSalarios = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i].value === 0) {
            continue;
        }
        totalSalarios += Number(array[i].value);
    }
    let promedioSalario = totalSalarios / array.length;
    return promedioSalario;
}
