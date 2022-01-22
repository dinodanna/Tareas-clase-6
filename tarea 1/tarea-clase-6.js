/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/
const botonAceptar = document.querySelector("#boton-aceptar");
const body = document.querySelector("body");

botonAceptar.onclick = function () {
    let numeroFamiliares = Number(
        document.querySelector("#numero-familia").value
    );

    if (
        document.querySelector("#numero-familia").value === "" ||
        document.querySelector("#numero-familia").value === "0"
    ) {
        return;
    }

    for (i = 1; i <= numeroFamiliares; i++) {
        crearLabels();
        crearInputs();
    }

    let divison = document.createElement("div");
    body.appendChild(divison);

    let botonCalcular = document.createElement("input");
    body.appendChild(botonCalcular);
    botonCalcular.value = "Calcular";
    botonCalcular.id = "boton-calcular";
    botonCalcular.type = "button";

    let mayorEdad = document.createElement("input");
    body.appendChild(mayorEdad);
    mayorEdad.disabled = true;
    mayorEdad.setAttribute("class", "edades");
    mayorEdad.placeholder = "Mayor edad";

    let menorEdad = document.createElement("input");
    menorEdad.placeholder = "Menor edad";
    menorEdad.disabled = true;
    menorEdad.setAttribute("class", "edades");
    body.appendChild(menorEdad);

    let promedioEdad = document.createElement("input");
    promedioEdad.placeholder = "Promedio edad";
    promedioEdad.disabled = true;
    promedioEdad.setAttribute("class", "edades");
    body.appendChild(promedioEdad);

    botonCalcular.onclick = function () {
        botonCalcular.disabled = true;
        const edadesFamiliares = document.querySelectorAll(".edad");
        mayorEdad.value = edadesFamiliares[0].value;
        menorEdad.value = edadesFamiliares[0].value;
        totalEdad = 0;
        for (i = 0; i < edadesFamiliares.length; i++) {
            if (mayorEdad.value < edadesFamiliares[i].value) {
                mayorEdad.value = edadesFamiliares[i].value;
            }
            if (menorEdad.value > edadesFamiliares[i].value) {
                menorEdad.value = edadesFamiliares[i].value;
            }
            totalEdad += Number(edadesFamiliares[i].value);
        }
        promedioEdad.value = totalEdad / edadesFamiliares.length;

        let botonResetear = document.createElement("button");
        botonResetear.textContent = "Empezar de nuevo";
        body.appendChild(botonResetear);

        botonResetear.onclick = function () {
            let resultadosEdades = document.querySelectorAll(".edades");
            let labelsFamiliares = document.querySelectorAll(".label");
            for (i = 0; i < edadesFamiliares.length; i++) {
                edadesFamiliares[i].remove();
                labelsFamiliares[i].remove();
            }
            for (i = 0; i < resultadosEdades.length; i++) {
                resultadosEdades[i].remove();
            }
            botonResetear.remove();
            botonCalcular.remove();
            document.querySelector("#numero-familia").value = "";
        };
    };
};

function crearLabels() {
    let labelFamilia = document.createElement("label");
    labelFamilia.innerText = "Familiar " + i;
    labelFamilia.setAttribute("class", "label");
    body.appendChild(labelFamilia);
}

function crearInputs() {
    let inputFamilia = document.createElement("input");
    inputFamilia.placeholder = "Ingrese la edad";
    inputFamilia.type = "number";
    inputFamilia.setAttribute("class", "edad");
    body.appendChild(inputFamilia);
}

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
